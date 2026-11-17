/*! LICENSE: 882456.524fc3f2c6.js.LICENSE.txt */
export const __rspack_esm_ids = [882456];
export const __webpack_modules__ = {
    hF7w: (function(e, t, r) {
        e.exports = function(e) {
            function t(e, t, r, n) {
                return new nP(e, t, r, n)
            }

            function n() {}

            function i(e) {
                var t = "https://react.dev/errors/" + e;
                if (1 < arguments.length) {
                    t += "?args[]=" + encodeURIComponent(arguments[1]);
                    for (var r = 2; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r])
                }
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            function a(e) {
                return null === e || "object" != typeof e ? null : "function" == typeof(e = ii && e[ii] || e["@@iterator"]) ? e : null
            }

            function s(e) {
                if (null == e) return null;
                if ("function" == typeof e) return e.$$typeof === ia ? null : e.displayName || e.name || null;
                if ("string" == typeof e) return e;
                switch (e) {
                    case nX:
                        return "Fragment";
                    case nZ:
                        return "Portal";
                    case n0:
                        return "Profiler";
                    case nY:
                        return "StrictMode";
                    case n6:
                        return "Suspense";
                    case n5:
                        return "SuspenseList"
                }
                if ("object" == typeof e) switch (e.$$typeof) {
                    case n4:
                        return (e.displayName || "Context") + ".Provider";
                    case n2:
                        return (e._context.displayName || "Context") + ".Consumer";
                    case n3:
                        var t = e.render;
                        return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                    case n8:
                        return null !== (t = e.displayName || null) ? t : s(e.type) || "Memo";
                    case n7:
                        t = e._payload, e = e._init;
                        try {
                            return s(e(t))
                        } catch (e) {}
                }
                return null
            }

            function l(e) {
                if (void 0 === ie) try {
                    throw Error()
                } catch (e) {
                    var t = e.stack.trim().match(/\n( *(at )?)/);
                    ie = t && t[1] || "", it = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
                }
                return "\n" + ie + e + it
            }

            function o(e, t) {
                if (!e || il) return "";
                il = !0;
                var r = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    var n = {
                        DetermineComponentFrameRoot: function() {
                            try {
                                if (t) {
                                    var r = function() {
                                        throw Error()
                                    };
                                    if (Object.defineProperty(r.prototype, "props", {
                                            set: function() {
                                                throw Error()
                                            }
                                        }), "object" == typeof Reflect && Reflect.construct) {
                                        try {
                                            Reflect.construct(r, [])
                                        } catch (e) {
                                            var n = e
                                        }
                                        Reflect.construct(e, [], r)
                                    } else {
                                        try {
                                            r.call()
                                        } catch (e) {
                                            n = e
                                        }
                                        e.call(r.prototype)
                                    }
                                } else {
                                    try {
                                        throw Error()
                                    } catch (e) {
                                        n = e
                                    }(r = e()) && "function" == typeof r.catch && r.catch(function() {})
                                }
                            } catch (e) {
                                if (e && n && "string" == typeof e.stack) return [e.stack, n.stack]
                            }
                            return [null, null]
                        }
                    };
                    n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                    var i = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, "name");
                    i && i.configurable && Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
                        value: "DetermineComponentFrameRoot"
                    });
                    var a = n.DetermineComponentFrameRoot(),
                        s = a[0],
                        o = a[1];
                    if (s && o) {
                        var u = s.split("\n"),
                            c = o.split("\n");
                        for (i = n = 0; n < u.length && !u[n].includes("DetermineComponentFrameRoot");) n++;
                        for (; i < c.length && !c[i].includes("DetermineComponentFrameRoot");) i++;
                        if (n === u.length || i === c.length)
                            for (n = u.length - 1, i = c.length - 1; 1 <= n && 0 <= i && u[n] !== c[i];) i--;
                        for (; 1 <= n && 0 <= i; n--, i--)
                            if (u[n] !== c[i]) {
                                if (1 !== n || 1 !== i)
                                    do
                                        if (n--, i--, 0 > i || u[n] !== c[i]) {
                                            var d = "\n" + u[n].replace(" at new ", " at ");
                                            return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), d
                                        } while (1 <= n && 0 <= i) break
                            }
                    }
                } finally {
                    il = !1, Error.prepareStackTrace = r
                }
                return (r = e ? e.displayName || e.name : "") ? l(r) : ""
            }

            function u(e) {
                try {
                    var t = "";
                    do t += function(e) {
                        switch (e.tag) {
                            case 26:
                            case 27:
                            case 5:
                                return l(e.type);
                            case 16:
                                return l("Lazy");
                            case 13:
                                return l("Suspense");
                            case 19:
                                return l("SuspenseList");
                            case 0:
                            case 15:
                                return o(e.type, !1);
                            case 11:
                                return o(e.type.render, !1);
                            case 1:
                                return o(e.type, !0);
                            default:
                                return ""
                        }
                    }(e), e = e.return; while (e) return t
                } catch (e) {
                    return "\nError generating stack: " + e.message + "\n" + e.stack
                }
            }

            function c(e) {
                var t = e,
                    r = e;
                if (e.alternate)
                    for (; t.return;) t = t.return;
                else {
                    e = t;
                    do 0 != (4098 & (t = e).flags) && (r = t.return), e = t.return; while (e)
                }
                return 3 === t.tag ? r : null
            }

            function d(e) {
                if (c(e) !== e) throw Error(i(188))
            }

            function f(e) {
                var t = e.alternate;
                if (!t) {
                    if (null === (t = c(e))) throw Error(i(188));
                    return t !== e ? null : e
                }
                for (var r = e, n = t;;) {
                    var a = r.return;
                    if (null === a) break;
                    var s = a.alternate;
                    if (null === s) {
                        if (null !== (n = a.return)) {
                            r = n;
                            continue
                        }
                        break
                    }
                    if (a.child === s.child) {
                        for (s = a.child; s;) {
                            if (s === r) return d(a), e;
                            if (s === n) return d(a), t;
                            s = s.sibling
                        }
                        throw Error(i(188))
                    }
                    if (r.return !== n.return) r = a, n = s;
                    else {
                        for (var l = !1, o = a.child; o;) {
                            if (o === r) {
                                l = !0, r = a, n = s;
                                break
                            }
                            if (o === n) {
                                l = !0, n = a, r = s;
                                break
                            }
                            o = o.sibling
                        }
                        if (!l) {
                            for (o = s.child; o;) {
                                if (o === r) {
                                    l = !0, r = s, n = a;
                                    break
                                }
                                if (o === n) {
                                    l = !0, n = s, r = a;
                                    break
                                }
                                o = o.sibling
                            }
                            if (!l) throw Error(i(189))
                        }
                    }
                    if (r.alternate !== n) throw Error(i(190))
                }
                if (3 !== r.tag) throw Error(i(188));
                return r.stateNode.current === r ? e : t
            }

            function h(e) {
                return {
                    current: e
                }
            }

            function p(e) {
                0 > a3 || (e.current = a4[a3], a4[a3] = null, a3--)
            }

            function m(e, t) {
                a4[++a3] = e.current, e.current = t
            }

            function g(e) {
                var t = 42 & e;
                if (0 !== t) return t;
                switch (e & -e) {
                    case 1:
                        return 1;
                    case 2:
                        return 2;
                    case 4:
                        return 4;
                    case 8:
                        return 8;
                    case 16:
                        return 16;
                    case 32:
                        return 32;
                    case 64:
                        return 64;
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                        return 4194176 & e;
                    case 4194304:
                    case 8388608:
                    case 0x1000000:
                    case 0x2000000:
                        return 0x3c00000 & e;
                    case 0x4000000:
                        return 0x4000000;
                    case 0x8000000:
                        return 0x8000000;
                    case 0x10000000:
                        return 0x10000000;
                    case 0x20000000:
                        return 0x20000000;
                    case 0x40000000:
                        return 0;
                    default:
                        return e
                }
            }

            function y(e, t) {
                var r = e.pendingLanes;
                if (0 === r) return 0;
                var n = 0,
                    i = e.suspendedLanes,
                    a = e.pingedLanes,
                    s = e.warmLanes;
                e = 0 !== e.finishedLanes;
                var l = 0x7ffffff & r;
                return 0 !== l ? 0 != (r = l & ~i) ? n = g(r) : 0 != (a &= l) ? n = g(a) : e || 0 != (s = l & ~s) && (n = g(s)) : 0 != (l = r & ~i) ? n = g(l) : 0 !== a ? n = g(a) : e || 0 != (s = r & ~s) && (n = g(s)), 0 === n ? 0 : 0 !== t && t !== n && 0 == (t & i) && ((i = n & -n) >= (s = t & -t) || 32 === i && 0 != (4194176 & s)) ? t : n
            }

            function b(e, t) {
                return 0 == (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
            }

            function v() {
                var e = a9;
                return 0 == (4194176 & (a9 <<= 1)) && (a9 = 128), e
            }

            function S() {
                var e = se;
                return 0 == (0x3c00000 & (se <<= 1)) && (se = 4194304), e
            }

            function w(e) {
                for (var t = [], r = 0; 31 > r; r++) t.push(e);
                return t
            }

            function k(e, t) {
                e.pendingLanes |= t, 0x10000000 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0)
            }

            function I(e, t, r) {
                e.pendingLanes |= t, e.suspendedLanes &= ~t;
                var n = 31 - a5(t);
                e.entangledLanes |= t, e.entanglements[n] = 0x40000000 | e.entanglements[n] | 4194218 & r
            }

            function E(e, t) {
                var r = e.entangledLanes |= t;
                for (e = e.entanglements; r;) {
                    var n = 31 - a5(r),
                        i = 1 << n;
                    i & t | e[n] & t && (e[n] |= t), r &= ~i
                }
            }

            function x(e) {
                return 2 < (e &= -e) ? 8 < e ? 0 != (0x7ffffff & e) ? 32 : 0x10000000 : 8 : 2
            }

            function C(e) {
                if ("function" == typeof sc && sd(e), sh && "function" == typeof sh.setStrictMode) try {
                    sh.setStrictMode(sf, e)
                } catch (e) {}
            }

            function R(e, t) {
                if ("object" == typeof e && null !== e) {
                    var r = sm.get(e);
                    return void 0 !== r ? r : (t = {
                        value: e,
                        source: t,
                        stack: u(t)
                    }, sm.set(e, t), t)
                }
                return {
                    value: e,
                    source: t,
                    stack: u(t)
                }
            }

            function z(e, t) {
                sg[sy++] = sv, sg[sy++] = sb, sb = e, sv = t
            }

            function _(e, t, r) {
                sS[sw++] = sI, sS[sw++] = sE, sS[sw++] = sk, sk = e;
                var n = sI;
                e = sE;
                var i = 32 - a5(n) - 1;
                n &= ~(1 << i), r += 1;
                var a = 32 - a5(t) + i;
                if (30 < a) {
                    var s = i - i % 5;
                    a = (n & (1 << s) - 1).toString(32), n >>= s, i -= s, sI = 1 << 32 - a5(t) + i | r << i | n, sE = a + e
                } else sI = 1 << a | r << i | n, sE = e
            }

            function P(e) {
                null !== e.return && (z(e, 1), _(e, 1, 0))
            }

            function D(e) {
                for (; e === sb;) sb = sg[--sy], sg[sy] = null, sv = sg[--sy], sg[sy] = null;
                for (; e === sk;) sk = sS[--sw], sS[sw] = null, sE = sS[--sw], sS[sw] = null, sI = sS[--sw], sS[sw] = null
            }

            function L(e, t) {
                m(sR, t), m(sC, e), m(sx, null), e = ip(t), p(sx), m(sx, e)
            }

            function T() {
                p(sx), p(sC), p(sR)
            }

            function F(e) {
                null !== e.memoizedState && m(sz, e);
                var t = sx.current,
                    r = im(t, e.type);
                t !== r && (m(sC, e), m(sx, r))
            }

            function N(e) {
                sC.current === e && (p(sx), p(sC)), sz.current === e && (p(sz), iC ? i$._currentValue = iW : i$._currentValue2 = iW)
            }

            function M(e) {
                throw H(R(Error(i(418, "")), e)), sF
            }

            function j(e, t) {
                if (!i_) throw Error(i(175));
                aC(e.stateNode, e.type, e.memoizedProps, t, e) || M(e)
            }

            function O(e) {
                for (s_ = e.return; s_;) switch (s_.tag) {
                    case 3:
                    case 27:
                        sT = !0;
                        return;
                    case 5:
                    case 13:
                        sT = !1;
                        return;
                    default:
                        s_ = s_.return
                }
            }

            function A(e) {
                if (!i_ || e !== s_) return !1;
                if (!sD) return O(e), sD = !0, !1;
                var t = !1;
                if (aZ ? 3 !== e.tag && 27 !== e.tag && (5 !== e.tag || aF(e.type) && !iw(e.type, e.memoizedProps)) && (t = !0) : 3 !== e.tag && (5 !== e.tag || aF(e.type) && !iw(e.type, e.memoizedProps)) && (t = !0), t && sP && M(e), O(e), 13 === e.tag) {
                    if (!i_) throw Error(i(316));
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
                    sP = a_(e)
                } else sP = s_ ? av(e.stateNode) : null;
                return !0
            }

            function U() {
                i_ && (sP = s_ = null, sD = !1)
            }

            function H(e) {
                null === sL ? sL = [e] : sL.push(e)
            }

            function W() {
                for (var e = sM, t = sj = sM = 0; t < e;) {
                    var r = sN[t];
                    sN[t++] = null;
                    var n = sN[t];
                    sN[t++] = null;
                    var i = sN[t];
                    sN[t++] = null;
                    var a = sN[t];
                    if (sN[t++] = null, null !== n && null !== i) {
                        var s = n.pending;
                        null === s ? i.next = i : (i.next = s.next, s.next = i), n.pending = i
                    }
                    0 !== a && q(r, i, a)
                }
            }

            function $(e, t, r, n) {
                sN[sM++] = e, sN[sM++] = t, sN[sM++] = r, sN[sM++] = n, sj |= n, e.lanes |= n, null !== (e = e.alternate) && (e.lanes |= n)
            }

            function B(e, t, r, n) {
                return $(e, t, r, n), Q(e)
            }

            function V(e, t) {
                return $(e, null, null, t), Q(e)
            }

            function q(e, t, r) {
                e.lanes |= r;
                var n = e.alternate;
                null !== n && (n.lanes |= r);
                for (var i = !1, a = e.return; null !== a;) a.childLanes |= r, null !== (n = a.alternate) && (n.childLanes |= r), 22 === a.tag && (null === (e = a.stateNode) || 1 & e._visibility || (i = !0)), e = a, a = a.return;
                i && null !== t && 3 === e.tag && (a = e.stateNode, i = 31 - a5(r), null === (e = (a = a.hiddenUpdates)[i]) ? a[i] = [t] : e.push(t), t.lane = 0x20000000 | r)
            }

            function Q(e) {
                if (50 < of) throw of = 0, oh = null, Error(i(185));
                for (var t = e.return; null !== t;) t = (e = t).return;
                return 3 === e.tag ? e.stateNode : null
            }

            function G(e) {
                var t;
                e !== sA && null === e.next && (null === sA ? sO = sA = e : sA = sA.next = e), sH = !0, sU || (sU = !0, t = K, iV ? iq(function() {
                    0 != (6 & lG) ? st(ss, t) : t()
                }) : st(ss, t))
            }

            function J(e, t) {
                if (!sW && sH) {
                    sW = !0;
                    do
                        for (var r = !1, n = sO; null !== n;) {
                            if (!t)
                                if (0 !== e) {
                                    var i = n.pendingLanes;
                                    if (0 === i) var a = 0;
                                    else {
                                        var s = n.suspendedLanes,
                                            l = n.pingedLanes;
                                        a = 0xc000055 & (a = (1 << 31 - a5(42 | e) + 1) - 1 & (i & ~(s & ~l))) ? 0xc000055 & a | 1 : a ? 2 | a : 0
                                    }
                                    0 !== a && (r = !0, Y(n, a))
                                } else a = lZ, 0 == (3 & (a = y(n, n === lJ ? a : 0))) || b(n, a) || (r = !0, Y(n, a));
                            n = n.next
                        }
                    while (r) sW = !1
                }
            }

            function K() {
                sH = sU = !1;
                var e = 0;
                0 !== s$ && (iN() && (e = s$), s$ = 0);
                for (var t = sa(), r = null, n = sO; null !== n;) {
                    var i = n.next,
                        a = Z(n, t);
                    0 === a ? (n.next = null, null === r ? sO = i : r.next = i, null === i && (sA = r)) : (r = n, (0 !== e || 0 != (3 & a)) && (sH = !0)), n = i
                }
                J(e, !1)
            }

            function Z(e, t) {
                for (var r = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, a = -0x3c00001 & e.pendingLanes; 0 < a;) {
                    var s = 31 - a5(a),
                        l = 1 << s,
                        o = i[s]; - 1 === o ? (0 == (l & r) || 0 != (l & n)) && (i[s] = function(e, t) {
                        switch (e) {
                            case 1:
                            case 2:
                            case 4:
                            case 8:
                                return t + 250;
                            case 16:
                            case 32:
                            case 64:
                            case 128:
                            case 256:
                            case 512:
                            case 1024:
                            case 2048:
                            case 4096:
                            case 8192:
                            case 16384:
                            case 32768:
                            case 65536:
                            case 131072:
                            case 262144:
                            case 524288:
                            case 1048576:
                            case 2097152:
                                return t + 5e3;
                            default:
                                return -1
                        }
                    }(l, t)) : o <= t && (e.expiredLanes |= l), a &= ~l
                }
                if (t = lJ, r = lZ, r = y(e, e === t ? r : 0), n = e.callbackNode, 0 === r || e === t && 2 === lX || null !== e.cancelPendingCommit) return null !== n && null !== n && sr(n), e.callbackNode = null, e.callbackPriority = 0;
                if (0 == (3 & r) || b(e, r)) {
                    if ((t = r & -r) === e.callbackPriority) return t;
                    switch (null !== n && sr(n), x(r)) {
                        case 2:
                        case 8:
                            r = sl;
                            break;
                        case 32:
                        default:
                            r = so;
                            break;
                        case 0x10000000:
                            r = su
                    }
                    return r = st(r, n = X.bind(null, e)), e.callbackPriority = t, e.callbackNode = r, t
                }
                return null !== n && null !== n && sr(n), e.callbackPriority = 2, e.callbackNode = null, 2
            }

            function X(e, t) {
                var r = e.callbackNode;
                if (nk() && e.callbackNode !== r) return null;
                var n = lZ;
                return 0 === (n = y(e, e === lJ ? n : 0)) ? null : (nr(e, n, t), Z(e, sa()), null != e.callbackNode && e.callbackNode === r ? X.bind(null, e) : null)
            }

            function Y(e, t) {
                if (nk()) return null;
                nr(e, t, !0)
            }

            function ee() {
                return 0 === s$ && (s$ = v()), s$
            }

            function et() {
                if (0 == --sV && null !== sB) {
                    null !== sQ && (sQ.status = "fulfilled");
                    var e = sB;
                    sB = null, sq = 0, sQ = null;
                    for (var t = 0; t < e.length; t++)(0, e[t])()
                }
            }

            function er(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null,
                        lanes: 0,
                        hiddenCallbacks: null
                    },
                    callbacks: null
                }
            }

            function en(e, t) {
                e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    callbacks: null
                })
            }

            function ei(e) {
                return {
                    lane: e,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }

            function ea(e, t, r) {
                var n = e.updateQueue;
                if (null === n) return null;
                if (n = n.shared, 0 != (2 & lG)) {
                    var i = n.pending;
                    return null === i ? t.next = t : (t.next = i.next, i.next = t), n.pending = t, t = Q(e), q(e, null, r), t
                }
                return $(e, n, t, r), Q(e)
            }

            function es(e, t, r) {
                if (null !== (t = t.updateQueue) && (t = t.shared, 0 != (4194176 & r))) {
                    var n = t.lanes;
                    n &= e.pendingLanes, r |= n, t.lanes = r, E(e, r)
                }
            }

            function el(e, t) {
                var r = e.updateQueue,
                    n = e.alternate;
                if (null !== n && r === (n = n.updateQueue)) {
                    var i = null,
                        a = null;
                    if (null !== (r = r.firstBaseUpdate)) {
                        do {
                            var s = {
                                lane: r.lane,
                                tag: r.tag,
                                payload: r.payload,
                                callback: null,
                                next: null
                            };
                            null === a ? i = a = s : a = a.next = s, r = r.next
                        } while (null !== r) null === a ? i = a = t : a = a.next = t
                    } else i = a = t;
                    r = {
                        baseState: n.baseState,
                        firstBaseUpdate: i,
                        lastBaseUpdate: a,
                        shared: n.shared,
                        callbacks: n.callbacks
                    }, e.updateQueue = r;
                    return
                }
                null === (e = r.lastBaseUpdate) ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t
            }

            function eo() {
                if (sJ) {
                    var e = sQ;
                    if (null !== e) throw e
                }
            }

            function eu(e, t, r, n) {
                sJ = !1;
                var i = e.updateQueue;
                sG = !1;
                var a = i.firstBaseUpdate,
                    s = i.lastBaseUpdate,
                    l = i.shared.pending;
                if (null !== l) {
                    i.shared.pending = null;
                    var o = l,
                        u = o.next;
                    o.next = null, null === s ? a = u : s.next = u, s = o;
                    var c = e.alternate;
                    null !== c && (l = (c = c.updateQueue).lastBaseUpdate) !== s && (null === l ? c.firstBaseUpdate = u : l.next = u, c.lastBaseUpdate = o)
                }
                if (null !== a) {
                    var d = i.baseState;
                    for (s = 0, c = u = o = null, l = a;;) {
                        var f = -0x20000001 & l.lane,
                            h = f !== l.lane;
                        if (h ? (lZ & f) === f : (n & f) === f) {
                            0 !== f && f === sq && (sJ = !0), null !== c && (c = c.next = {
                                lane: 0,
                                tag: l.tag,
                                payload: l.payload,
                                callback: null,
                                next: null
                            });
                            e: {
                                var p = e,
                                    m = l;
                                switch (f = t, m.tag) {
                                    case 1:
                                        if ("function" == typeof(p = m.payload)) {
                                            d = p.call(r, d, f);
                                            break e
                                        }
                                        d = p;
                                        break e;
                                    case 3:
                                        p.flags = -65537 & p.flags | 128;
                                    case 0:
                                        if (null == (f = "function" == typeof(p = m.payload) ? p.call(r, d, f) : p)) break e;
                                        d = nG({}, d, f);
                                        break e;
                                    case 2:
                                        sG = !0
                                }
                            }
                            null !== (f = l.callback) && (e.flags |= 64, h && (e.flags |= 8192), null === (h = i.callbacks) ? i.callbacks = [f] : h.push(f))
                        } else h = {
                            lane: f,
                            tag: l.tag,
                            payload: l.payload,
                            callback: l.callback,
                            next: null
                        }, null === c ? (u = c = h, o = d) : c = c.next = h, s |= f;
                        if (null === (l = l.next))
                            if (null === (l = i.shared.pending)) break;
                            else l = (h = l).next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null
                    }
                    null === c && (o = d), i.baseState = o, i.firstBaseUpdate = u, i.lastBaseUpdate = c, null === a && (i.shared.lanes = 0), l6 |= s, e.lanes = s, e.memoizedState = d
                }
            }

            function ec(e, t) {
                if ("function" != typeof e) throw Error(i(191, e));
                e.call(t)
            }

            function ed(e, t) {
                var r = e.callbacks;
                if (null !== r)
                    for (e.callbacks = null, e = 0; e < r.length; e++) ec(r[e], t)
            }

            function ef(e, t) {
                if (sp(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                var r = Object.keys(e),
                    n = Object.keys(t);
                if (r.length !== n.length) return !1;
                for (n = 0; n < r.length; n++) {
                    var i = r[n];
                    if (!sK.call(t, i) || !sp(e[i], t[i])) return !1
                }
                return !0
            }

            function eh(e) {
                return "fulfilled" === (e = e.status) || "rejected" === e
            }

            function ep() {}

            function em(e, t, r) {
                switch (void 0 === (r = e[r]) ? e.push(t) : r !== t && (t.then(ep, ep), t = r), t.status) {
                    case "fulfilled":
                        return t.value;
                    case "rejected":
                        if ((e = t.reason) === sZ) throw Error(i(483));
                        throw e;
                    default:
                        if ("string" == typeof t.status) t.then(ep, ep);
                        else {
                            if (null !== (e = lJ) && 100 < e.shellSuspendCounter) throw Error(i(482));
                            (e = t).status = "pending", e.then(function(e) {
                                if ("pending" === t.status) {
                                    var r = t;
                                    r.status = "fulfilled", r.value = e
                                }
                            }, function(e) {
                                if ("pending" === t.status) {
                                    var r = t;
                                    r.status = "rejected", r.reason = e
                                }
                            })
                        }
                        switch (t.status) {
                            case "fulfilled":
                                return t.value;
                            case "rejected":
                                if ((e = t.reason) === sZ) throw Error(i(483));
                                throw e
                        }
                        throw s0 = t, sZ
                }
            }

            function eg() {
                if (null === s0) throw Error(i(459));
                var e = s0;
                return s0 = null, e
            }

            function ey(e) {
                var t = s2;
                return s2 += 1, null === s1 && (s1 = []), em(s1, e, t)
            }

            function eb(e, t) {
                e.ref = void 0 !== (t = t.props.ref) ? t : null
            }

            function ev(e, t) {
                if (t.$$typeof === nJ) throw Error(i(525));
                throw Error(i(31, "[object Object]" === (e = Object.prototype.toString.call(t)) ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
            }

            function eS(e) {
                return (0, e._init)(e._payload)
            }

            function ew(e) {
                function r(t, r) {
                    if (e) {
                        var n = t.deletions;
                        null === n ? (t.deletions = [r], t.flags |= 16) : n.push(r)
                    }
                }

                function n(t, n) {
                    if (!e) return null;
                    for (; null !== n;) r(t, n), n = n.sibling;
                    return null
                }

                function s(e) {
                    for (var t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling;
                    return t
                }

                function l(e, t) {
                    return (e = nL(e, t)).index = 0, e.sibling = null, e
                }

                function o(t, r, n) {
                    return (t.index = n, e) ? null !== (n = t.alternate) ? (n = n.index) < r ? (t.flags |= 0x2000002, r) : n : (t.flags |= 0x2000002, r) : (t.flags |= 1048576, r)
                }

                function u(t) {
                    return e && null === t.alternate && (t.flags |= 0x2000002), t
                }

                function c(e, t, r, n) {
                    return null === t || 6 !== t.tag ? (t = nj(r, e.mode, n)).return = e : (t = l(t, r)).return = e, t
                }

                function d(e, t, r, n) {
                    var i = r.type;
                    return i === nX ? h(e, t, r.props.children, n, r.key) : (null !== t && (t.elementType === i || "object" == typeof i && null !== i && i.$$typeof === n7 && eS(i) === t.type) ? eb(t = l(t, r.props), r) : eb(t = nF(r.type, r.key, r.props, null, e.mode, n), r), t.return = e, t)
                }

                function f(e, t, r, n) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== r.containerInfo || t.stateNode.implementation !== r.implementation ? (t = nO(r, e.mode, n)).return = e : (t = l(t, r.children || [])).return = e, t
                }

                function h(e, t, r, n, i) {
                    return null === t || 7 !== t.tag ? (t = nN(r, e.mode, n, i)).return = e : (t = l(t, r)).return = e, t
                }

                function p(e, t, r) {
                    if ("string" == typeof t && "" !== t || "number" == typeof t || "bigint" == typeof t) return (t = nj("" + t, e.mode, r)).return = e, t;
                    if ("object" == typeof t && null !== t) {
                        switch (t.$$typeof) {
                            case nK:
                                return eb(r = nF(t.type, t.key, t.props, null, e.mode, r), t), r.return = e, r;
                            case nZ:
                                return (t = nO(t, e.mode, r)).return = e, t;
                            case n7:
                                return p(e, t = (0, t._init)(t._payload), r)
                        }
                        if (io(t) || a(t)) return (t = nN(t, e.mode, r, null)).return = e, t;
                        if ("function" == typeof t.then) return p(e, ey(t), r);
                        if (t.$$typeof === n4) return p(e, ro(e, t), r);
                        ev(e, t)
                    }
                    return null
                }

                function m(e, t, r, n) {
                    var i = null !== t ? t.key : null;
                    if ("string" == typeof r && "" !== r || "number" == typeof r || "bigint" == typeof r) return null !== i ? null : c(e, t, "" + r, n);
                    if ("object" == typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case nK:
                                return r.key === i ? d(e, t, r, n) : null;
                            case nZ:
                                return r.key === i ? f(e, t, r, n) : null;
                            case n7:
                                return m(e, t, r = (i = r._init)(r._payload), n)
                        }
                        if (io(r) || a(r)) return null !== i ? null : h(e, t, r, n, null);
                        if ("function" == typeof r.then) return m(e, t, ey(r), n);
                        if (r.$$typeof === n4) return m(e, t, ro(e, r), n);
                        ev(e, r)
                    }
                    return null
                }

                function g(e, t, r, n, i) {
                    if ("string" == typeof n && "" !== n || "number" == typeof n || "bigint" == typeof n) return c(t, e = e.get(r) || null, "" + n, i);
                    if ("object" == typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case nK:
                                return d(t, e = e.get(null === n.key ? r : n.key) || null, n, i);
                            case nZ:
                                return f(t, e = e.get(null === n.key ? r : n.key) || null, n, i);
                            case n7:
                                return g(e, t, r, n = (0, n._init)(n._payload), i)
                        }
                        if (io(n) || a(n)) return h(t, e = e.get(r) || null, n, i, null);
                        if ("function" == typeof n.then) return g(e, t, r, ey(n), i);
                        if (n.$$typeof === n4) return g(e, t, r, ro(t, n), i);
                        ev(t, n)
                    }
                    return null
                }
                return function(c, d, f, h) {
                    try {
                        s2 = 0;
                        var y = function t(c, d, f, h) {
                            if ("object" == typeof f && null !== f && f.type === nX && null === f.key && (f = f.props.children), "object" == typeof f && null !== f) {
                                switch (f.$$typeof) {
                                    case nK:
                                        e: {
                                            for (var y = f.key; null !== d;) {
                                                if (d.key === y) {
                                                    if ((y = f.type) === nX) {
                                                        if (7 === d.tag) {
                                                            n(c, d.sibling), (h = l(d, f.props.children)).return = c, c = h;
                                                            break e
                                                        }
                                                    } else if (d.elementType === y || "object" == typeof y && null !== y && y.$$typeof === n7 && eS(y) === d.type) {
                                                        n(c, d.sibling), eb(h = l(d, f.props), f), h.return = c, c = h;
                                                        break e
                                                    }
                                                    n(c, d);
                                                    break
                                                }
                                                r(c, d), d = d.sibling
                                            }
                                            f.type === nX ? (h = nN(f.props.children, c.mode, h, f.key)).return = c : (eb(h = nF(f.type, f.key, f.props, null, c.mode, h), f), h.return = c),
                                            c = h
                                        }
                                        return u(c);
                                    case nZ:
                                        e: {
                                            for (y = f.key; null !== d;) {
                                                if (d.key === y)
                                                    if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                                                        n(c, d.sibling), (h = l(d, f.children || [])).return = c, c = h;
                                                        break e
                                                    } else {
                                                        n(c, d);
                                                        break
                                                    } r(c, d), d = d.sibling
                                            }(h = nO(f, c.mode, h)).return = c,
                                            c = h
                                        }
                                        return u(c);
                                    case n7:
                                        return t(c, d, f = (y = f._init)(f._payload), h)
                                }
                                if (io(f)) return function(t, i, a, l) {
                                    for (var u = null, c = null, d = i, f = i = 0, h = null; null !== d && f < a.length; f++) {
                                        d.index > f ? (h = d, d = null) : h = d.sibling;
                                        var y = m(t, d, a[f], l);
                                        if (null === y) {
                                            null === d && (d = h);
                                            break
                                        }
                                        e && d && null === y.alternate && r(t, d), i = o(y, i, f), null === c ? u = y : c.sibling = y, c = y, d = h
                                    }
                                    if (f === a.length) return n(t, d), sD && z(t, f), u;
                                    if (null === d) {
                                        for (; f < a.length; f++) null !== (d = p(t, a[f], l)) && (i = o(d, i, f), null === c ? u = d : c.sibling = d, c = d);
                                        return sD && z(t, f), u
                                    }
                                    for (d = s(d); f < a.length; f++) null !== (h = g(d, t, f, a[f], l)) && (e && null !== h.alternate && d.delete(null === h.key ? f : h.key), i = o(h, i, f), null === c ? u = h : c.sibling = h, c = h);
                                    return e && d.forEach(function(e) {
                                        return r(t, e)
                                    }), sD && z(t, f), u
                                }(c, d, f, h);
                                if (a(f)) {
                                    if ("function" != typeof(y = a(f))) throw Error(i(150));
                                    return function(t, a, l, u) {
                                        if (null == l) throw Error(i(151));
                                        for (var c = null, d = null, f = a, h = a = 0, y = null, b = l.next(); null !== f && !b.done; h++, b = l.next()) {
                                            f.index > h ? (y = f, f = null) : y = f.sibling;
                                            var v = m(t, f, b.value, u);
                                            if (null === v) {
                                                null === f && (f = y);
                                                break
                                            }
                                            e && f && null === v.alternate && r(t, f), a = o(v, a, h), null === d ? c = v : d.sibling = v, d = v, f = y
                                        }
                                        if (b.done) return n(t, f), sD && z(t, h), c;
                                        if (null === f) {
                                            for (; !b.done; h++, b = l.next()) null !== (b = p(t, b.value, u)) && (a = o(b, a, h), null === d ? c = b : d.sibling = b, d = b);
                                            return sD && z(t, h), c
                                        }
                                        for (f = s(f); !b.done; h++, b = l.next()) null !== (b = g(f, t, h, b.value, u)) && (e && null !== b.alternate && f.delete(null === b.key ? h : b.key), a = o(b, a, h), null === d ? c = b : d.sibling = b, d = b);
                                        return e && f.forEach(function(e) {
                                            return r(t, e)
                                        }), sD && z(t, h), c
                                    }(c, d, f = y.call(f), h)
                                }
                                if ("function" == typeof f.then) return t(c, d, ey(f), h);
                                if (f.$$typeof === n4) return t(c, d, ro(c, f), h);
                                ev(c, f)
                            }
                            return "string" == typeof f && "" !== f || "number" == typeof f || "bigint" == typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (n(c, d.sibling), (h = l(d, f)).return = c) : (n(c, d), (h = nj(f, c.mode, h)).return = c), u(c = h)) : n(c, d)
                        }(c, d, f, h);
                        return s1 = null, y
                    } catch (e) {
                        if (e === sZ) throw e;
                        var b = t(29, e, null, c.mode);
                        return b.lanes = h, b.return = c, b
                    } finally {}
                }
            }

            function ek(e, t) {
                m(s5, e = l4), m(s6, t), l4 = e | t.baseLanes
            }

            function eI() {
                m(s5, l4), m(s6, s6.current)
            }

            function eE() {
                l4 = s5.current, p(s6), p(s5)
            }

            function ex(e) {
                var t = e.alternate;
                m(s9, 1 & s9.current), m(s8, e), null === s7 && (null === t || null !== s6.current ? s7 = e : null !== t.memoizedState && (s7 = e))
            }

            function eC(e) {
                if (22 === e.tag) {
                    if (m(s9, s9.current), m(s8, e), null === s7) {
                        var t = e.alternate;
                        null !== t && null !== t.memoizedState && (s7 = e)
                    }
                } else eR()
            }

            function eR() {
                m(s9, s9.current), m(s8, s8.current)
            }

            function ez(e) {
                p(s8), s7 === e && (s7 = null), p(s9)
            }

            function e_(e) {
                for (var t = e; null !== t;) {
                    if (13 === t.tag) {
                        var r = t.memoizedState;
                        if (null !== r && (null === (r = r.dehydrated) || ah(r) || ap(r))) return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 != (128 & t.flags)) return t
                    } else if (null !== t.child) {
                        t.child.return = t, t = t.child;
                        continue
                    }
                    if (t === e) break;
                    for (; null === t.sibling;) {
                        if (null === t.return || t.return === e) return null;
                        t = t.return
                    }
                    t.sibling.return = t.return, t = t.sibling
                }
                return null
            }

            function eP() {
                throw Error(i(321))
            }

            function eD(e, t) {
                if (null === t) return !1;
                for (var r = 0; r < t.length && r < e.length; r++)
                    if (!sp(e[r], t[r])) return !1;
                return !0
            }

            function eL(e, t, r, n, i, a) {
                return le = a, lt = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, is.H = null === e || null === e.memoizedState ? lh : lp, ls = !1, a = r(n, i), ls = !1, la && (a = eF(t, r, n, i)), eT(e), a
            }

            function eT(e) {
                is.H = lf;
                var t = null !== lr && null !== lr.next;
                if (le = 0, ln = lr = lt = null, li = !1, lo = 0, lu = null, t) throw Error(i(300));
                null === e || lv || null !== (e = e.dependencies) && ra(e) && (lv = !0)
            }

            function eF(e, t, r, n) {
                lt = e;
                var a = 0;
                do {
                    if (la && (lu = null), lo = 0, la = !1, 25 <= a) throw Error(i(301));
                    if (a += 1, ln = lr = null, null != e.updateQueue) {
                        var s = e.updateQueue;
                        s.lastEffect = null, s.events = null, s.stores = null, null != s.memoCache && (s.memoCache.index = 0)
                    }
                    is.H = lm, s = t(r, n)
                } while (la) return s
            }

            function eN() {
                var e = is.H,
                    t = e.useState()[0];
                return t = "function" == typeof t.then ? eH(t) : t, e = e.useState()[0], (null !== lr ? lr.memoizedState : null) !== e && (lt.flags |= 1024), t
            }

            function eM() {
                var e = 0 !== ll;
                return ll = 0, e
            }

            function ej(e, t, r) {
                t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~r
            }

            function eO(e) {
                if (li) {
                    for (e = e.memoizedState; null !== e;) {
                        var t = e.queue;
                        null !== t && (t.pending = null), e = e.next
                    }
                    li = !1
                }
                le = 0, ln = lr = lt = null, la = !1, lo = ll = 0, lu = null
            }

            function eA() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === ln ? lt.memoizedState = ln = e : ln = ln.next = e, ln
            }

            function eU() {
                if (null === lr) {
                    var e = lt.alternate;
                    e = null !== e ? e.memoizedState : null
                } else e = lr.next;
                var t = null === ln ? lt.memoizedState : ln.next;
                if (null !== t) ln = t, lr = e;
                else {
                    if (null === e) {
                        if (null === lt.alternate) throw Error(i(467));
                        throw Error(i(310))
                    }
                    e = {
                        memoizedState: (lr = e).memoizedState,
                        baseState: lr.baseState,
                        baseQueue: lr.baseQueue,
                        queue: lr.queue,
                        next: null
                    }, null === ln ? lt.memoizedState = ln = e : ln = ln.next = e
                }
                return ln
            }

            function eH(e) {
                var t = lo;
                return lo += 1, null === lu && (lu = []), e = em(lu, e, t), t = lt, null === (null === ln ? t.memoizedState : ln.next) && (is.H = null === (t = t.alternate) || null === t.memoizedState ? lh : lp), e
            }

            function eW(e) {
                if (null !== e && "object" == typeof e) {
                    if ("function" == typeof e.then) return eH(e);
                    if (e.$$typeof === n4) return rl(e)
                }
                throw Error(i(438, String(e)))
            }

            function e$(e) {
                var t = null,
                    r = lt.updateQueue;
                if (null !== r && (t = r.memoCache), null == t) {
                    var n = lt.alternate;
                    null !== n && null !== (n = n.updateQueue) && null != (n = n.memoCache) && (t = {
                        data: n.data.map(function(e) {
                            return e.slice()
                        }),
                        index: 0
                    })
                }
                if (null == t && (t = {
                        data: [],
                        index: 0
                    }), null === r && (r = ld(), lt.updateQueue = r), r.memoCache = t, void 0 === (r = t.data[t.index]))
                    for (r = t.data[t.index] = Array(e), n = 0; n < e; n++) r[n] = ir;
                return t.index++, r
            }

            function eB(e, t) {
                return "function" == typeof t ? t(e) : t
            }

            function eV(e) {
                return eq(eU(), lr, e)
            }

            function eq(e, t, r) {
                var n = e.queue;
                if (null === n) throw Error(i(311));
                n.lastRenderedReducer = r;
                var a = e.baseQueue,
                    s = n.pending;
                if (null !== s) {
                    if (null !== a) {
                        var l = a.next;
                        a.next = s.next, s.next = l
                    }
                    t.baseQueue = a = s, n.pending = null
                }
                if (s = e.baseState, null === a) e.memoizedState = s;
                else {
                    t = a.next;
                    var o = l = null,
                        u = null,
                        c = t,
                        d = !1;
                    do {
                        var f = -0x20000001 & c.lane;
                        if (f !== c.lane ? (lZ & f) === f : (le & f) === f) {
                            var h = c.revertLane;
                            if (0 === h) null !== u && (u = u.next = {
                                lane: 0,
                                revertLane: 0,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }), f === sq && (d = !0);
                            else if ((le & h) === h) {
                                c = c.next, h === sq && (d = !0);
                                continue
                            } else f = {
                                lane: 0,
                                revertLane: c.revertLane,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }, null === u ? (o = u = f, l = s) : u = u.next = f, lt.lanes |= h, l6 |= h;
                            f = c.action, ls && r(s, f), s = c.hasEagerState ? c.eagerState : r(s, f)
                        } else h = {
                            lane: f,
                            revertLane: c.revertLane,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null
                        }, null === u ? (o = u = h, l = s) : u = u.next = h, lt.lanes |= f, l6 |= f;
                        c = c.next
                    } while (null !== c && c !== t) if (null === u ? l = s : u.next = o, !sp(s, e.memoizedState) && (lv = !0, d && null !== (r = sQ))) throw r;
                    e.memoizedState = s, e.baseState = l, e.baseQueue = u, n.lastRenderedState = s
                }
                return null === a && (n.lanes = 0), [e.memoizedState, n.dispatch]
            }

            function eQ(e) {
                var t = eU(),
                    r = t.queue;
                if (null === r) throw Error(i(311));
                r.lastRenderedReducer = e;
                var n = r.dispatch,
                    a = r.pending,
                    s = t.memoizedState;
                if (null !== a) {
                    r.pending = null;
                    var l = a = a.next;
                    do s = e(s, l.action), l = l.next; while (l !== a) sp(s, t.memoizedState) || (lv = !0), t.memoizedState = s, null === t.baseQueue && (t.baseState = s), r.lastRenderedState = s
                }
                return [s, n]
            }

            function eG(e, t, r) {
                var n = lt,
                    a = eU(),
                    s = sD;
                if (s) {
                    if (void 0 === r) throw Error(i(407));
                    r = r()
                } else r = t();
                var l = !sp((lr || a).memoizedState, r);
                if (l && (a.memoizedState = r, lv = !0), a = a.queue, tu(eZ.bind(null, n, a, e), [e]), a.getSnapshot !== t || l || null !== ln && 1 & ln.memoizedState.tag) {
                    if (n.flags |= 2048, ti(9, eK.bind(null, n, a, r, t), {
                            destroy: void 0
                        }, null), null === lJ) throw Error(i(349));
                    s || 0 != (60 & le) || eJ(n, t, r)
                }
                return r
            }

            function eJ(e, t, r) {
                e.flags |= 16384, e = {
                    getSnapshot: t,
                    value: r
                }, null === (t = lt.updateQueue) ? (t = ld(), lt.updateQueue = t, t.stores = [e]) : null === (r = t.stores) ? t.stores = [e] : r.push(e)
            }

            function eK(e, t, r, n) {
                t.value = r, t.getSnapshot = n, eX(t) && eY(e)
            }

            function eZ(e, t, r) {
                return r(function() {
                    eX(t) && eY(e)
                })
            }

            function eX(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var r = t();
                    return !sp(e, r)
                } catch (e) {
                    return !0
                }
            }

            function eY(e) {
                var t = V(e, 2);
                null !== t && nt(t, e, 2)
            }

            function e0(e) {
                var t = eA();
                if ("function" == typeof e) {
                    var r = e;
                    if (e = r(), ls) {
                        C(!0);
                        try {
                            r()
                        } finally {
                            C(!1)
                        }
                    }
                }
                return t.memoizedState = t.baseState = e, t.queue = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: eB,
                    lastRenderedState: e
                }, t
            }

            function e1(e, t, r, n) {
                return e.baseState = r, eq(e, lr, "function" == typeof n ? n : eB)
            }

            function e2(e, t, r, n, a) {
                if (t_(e)) throw Error(i(485));
                if (null !== (e = t.action)) {
                    var s = {
                        payload: a,
                        action: e,
                        next: null,
                        isTransition: !0,
                        status: "pending",
                        value: null,
                        reason: null,
                        listeners: [],
                        then: function(e) {
                            s.listeners.push(e)
                        }
                    };
                    null !== is.T ? r(!0) : s.isTransition = !1, n(s), null === (r = t.pending) ? (s.next = t.pending = s, e4(t, s)) : (s.next = r.next, t.pending = r.next = s)
                }
            }

            function e4(e, t) {
                var r = t.action,
                    n = t.payload,
                    i = e.state;
                if (t.isTransition) {
                    var a = is.T,
                        s = {};
                    is.T = s;
                    try {
                        var l = r(i, n),
                            o = is.S;
                        null !== o && o(s, l), e3(e, t, l)
                    } catch (r) {
                        e5(e, t, r)
                    } finally {
                        is.T = a
                    }
                } else try {
                    a = r(i, n), e3(e, t, a)
                } catch (r) {
                    e5(e, t, r)
                }
            }

            function e3(e, t, r) {
                null !== r && "object" == typeof r && "function" == typeof r.then ? r.then(function(r) {
                    e6(e, t, r)
                }, function(r) {
                    return e5(e, t, r)
                }) : e6(e, t, r)
            }

            function e6(e, t, r) {
                t.status = "fulfilled", t.value = r, e8(t), e.state = r, null !== (t = e.pending) && ((r = t.next) === t ? e.pending = null : (r = r.next, t.next = r, e4(e, r)))
            }

            function e5(e, t, r) {
                var n = e.pending;
                if (e.pending = null, null !== n) {
                    n = n.next;
                    do t.status = "rejected", t.reason = r, e8(t), t = t.next; while (t !== n)
                }
                e.action = null
            }

            function e8(e) {
                e = e.listeners;
                for (var t = 0; t < e.length; t++)(0, e[t])()
            }

            function e7(e, t) {
                return t
            }

            function e9(e, t) {
                if (sD) {
                    var r = lJ.formState;
                    if (null !== r) {
                        e: {
                            var n = lt;
                            if (sD) {
                                if (sP) {
                                    var i = ay(sP, sT);
                                    if (i) {
                                        sP = av(i), n = ab(i);
                                        break e
                                    }
                                }
                                M(n)
                            }
                            n = !1
                        }
                        n && (t = r[0])
                    }
                }(r = eA()).memoizedState = r.baseState = t, n = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e7,
                    lastRenderedState: t
                }, r.queue = n, r = tC.bind(null, lt, n), n.dispatch = r, n = e0(!1);
                var a = tz.bind(null, lt, !1, n.queue);
                return n = eA(), i = {
                    state: t,
                    dispatch: null,
                    action: e,
                    pending: null
                }, n.queue = i, r = e2.bind(null, lt, i, a, r), i.dispatch = r, n.memoizedState = e, [t, r, !1]
            }

            function te(e) {
                return tt(eU(), lr, e)
            }

            function tt(e, t, r) {
                t = eq(e, t, e7)[0], e = eV(eB)[0], t = "object" == typeof t && null !== t && "function" == typeof t.then ? eH(t) : t;
                var n = eU(),
                    i = n.queue,
                    a = i.dispatch;
                return r !== n.memoizedState && (lt.flags |= 2048, ti(9, tr.bind(null, i, r), {
                    destroy: void 0
                }, null)), [t, a, e]
            }

            function tr(e, t) {
                e.action = t
            }

            function tn(e) {
                var t = eU(),
                    r = lr;
                if (null !== r) return tt(t, r, e);
                eU(), t = t.memoizedState;
                var n = (r = eU()).queue.dispatch;
                return r.memoizedState = e, [t, n, !1]
            }

            function ti(e, t, r, n) {
                return e = {
                    tag: e,
                    create: t,
                    inst: r,
                    deps: n,
                    next: null
                }, null === (t = lt.updateQueue) && (t = ld(), lt.updateQueue = t), null === (r = t.lastEffect) ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e), e
            }

            function ta() {
                return eU().memoizedState
            }

            function ts(e, t, r, n) {
                var i = eA();
                lt.flags |= e, i.memoizedState = ti(1 | t, r, {
                    destroy: void 0
                }, void 0 === n ? null : n)
            }

            function tl(e, t, r, n) {
                var i = eU();
                n = void 0 === n ? null : n;
                var a = i.memoizedState.inst;
                null !== lr && null !== n && eD(n, lr.memoizedState.deps) ? i.memoizedState = ti(t, r, a, n) : (lt.flags |= e, i.memoizedState = ti(1 | t, r, a, n))
            }

            function to(e, t) {
                ts(8390656, 8, e, t)
            }

            function tu(e, t) {
                tl(2048, 8, e, t)
            }

            function tc(e, t) {
                return tl(4, 2, e, t)
            }

            function td(e, t) {
                return tl(4, 4, e, t)
            }

            function tf(e, t) {
                if ("function" == typeof t) {
                    var r = t(e = e());
                    return function() {
                        "function" == typeof r ? r() : t(null)
                    }
                }
                if (null != t) return t.current = e = e(),
                    function() {
                        t.current = null
                    }
            }

            function th(e, t, r) {
                r = null != r ? r.concat([e]) : null, tl(4, 4, tf.bind(null, t, e), r)
            }

            function tp() {}

            function tm(e, t) {
                var r = eU();
                t = void 0 === t ? null : t;
                var n = r.memoizedState;
                return null !== t && eD(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e)
            }

            function tg(e, t) {
                var r = eU();
                t = void 0 === t ? null : t;
                var n = r.memoizedState;
                if (null !== t && eD(t, n[1])) return n[0];
                if (n = e(), ls) {
                    C(!0);
                    try {
                        e()
                    } finally {
                        C(!1)
                    }
                }
                return r.memoizedState = [n, t], n
            }

            function ty(e, t, r) {
                return void 0 === r || 0 != (0x40000000 & le) ? e.memoizedState = t : (e.memoizedState = r, e = ne(), lt.lanes |= e, l6 |= e, r)
            }

            function tb(e, t, r, n) {
                return sp(r, t) ? r : null !== s6.current ? (sp(e = ty(e, r, n), t) || (lv = !0), e) : 0 == (42 & le) ? (lv = !0, e.memoizedState = r) : (e = ne(), lt.lanes |= e, l6 |= e, t)
            }

            function tv(e, t, r, n, i) {
                var a = iT();
                iL(0 !== a && 8 > a ? a : 8);
                var s = is.T,
                    l = {};
                is.T = l, tz(e, !1, t, r);
                try {
                    var o = i(),
                        u = is.S;
                    if (null !== u && u(l, o), null !== o && "object" == typeof o && "function" == typeof o.then) {
                        var c, d, f = (c = [], d = {
                            status: "pending",
                            value: null,
                            reason: null,
                            then: function(e) {
                                c.push(e)
                            }
                        }, o.then(function() {
                            d.status = "fulfilled", d.value = n;
                            for (var e = 0; e < c.length; e++)(0, c[e])(n)
                        }, function(e) {
                            for (d.status = "rejected", d.reason = e, e = 0; e < c.length; e++)(0, c[e])(void 0)
                        }), d);
                        tR(e, t, f, r9())
                    } else tR(e, t, n, r9())
                } catch (r) {
                    tR(e, t, {
                        then: function() {},
                        status: "rejected",
                        reason: r
                    }, r9())
                } finally {
                    iL(a), is.T = s
                }
            }

            function tS(e) {
                var t = e.memoizedState;
                if (null !== t) return t;
                var r = {};
                return (t = {
                    memoizedState: iW,
                    baseState: iW,
                    baseQueue: null,
                    queue: {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: eB,
                        lastRenderedState: iW
                    },
                    next: null
                }).next = {
                    memoizedState: r,
                    baseState: r,
                    baseQueue: null,
                    queue: {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: eB,
                        lastRenderedState: r
                    },
                    next: null
                }, e.memoizedState = t, null !== (e = e.alternate) && (e.memoizedState = t), t
            }

            function tw() {
                return rl(i$)
            }

            function tk() {
                return eU().memoizedState
            }

            function tI() {
                return eU().memoizedState
            }

            function tE(e) {
                for (var t = e.return; null !== t;) {
                    switch (t.tag) {
                        case 24:
                        case 3:
                            var r = r9(),
                                n = ea(t, e = ei(r), r);
                            null !== n && (nt(n, t, r), es(n, t, r)), t = {
                                cache: rc()
                            }, e.payload = t;
                            return
                    }
                    t = t.return
                }
            }

            function tx(e, t, r) {
                var n = r9();
                r = {
                    lane: n,
                    revertLane: 0,
                    action: r,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                }, t_(e) ? tP(t, r) : null !== (r = B(e, t, r, n)) && (nt(r, e, n), tD(r, t, n))
            }

            function tC(e, t, r) {
                tR(e, t, r, r9())
            }

            function tR(e, t, r, n) {
                var i = {
                    lane: n,
                    revertLane: 0,
                    action: r,
                    hasEagerState: !1,
                    eagerState: null,
                    next: null
                };
                if (t_(e)) tP(t, i);
                else {
                    var a = e.alternate;
                    if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer)) try {
                        var s = t.lastRenderedState,
                            l = a(s, r);
                        if (i.hasEagerState = !0, i.eagerState = l, sp(l, s)) return $(e, t, i, 0), null === lJ && W(), !1
                    } catch (e) {} finally {}
                    if (null !== (r = B(e, t, i, n))) return nt(r, e, n), tD(r, t, n), !0
                }
                return !1
            }

            function tz(e, t, r, n) {
                if (n = {
                        lane: 2,
                        revertLane: ee(),
                        action: n,
                        hasEagerState: !1,
                        eagerState: null,
                        next: null
                    }, t_(e)) {
                    if (t) throw Error(i(479))
                } else null !== (t = B(e, r, n, 2)) && nt(t, e, 2)
            }

            function t_(e) {
                var t = e.alternate;
                return e === lt || null !== t && t === lt
            }

            function tP(e, t) {
                la = li = !0;
                var r = e.pending;
                null === r ? t.next = t : (t.next = r.next, r.next = t), e.pending = t
            }

            function tD(e, t, r) {
                if (0 != (4194176 & r)) {
                    var n = t.lanes;
                    n &= e.pendingLanes, t.lanes = r |= n, E(e, r)
                }
            }

            function tL(e, t, r, n) {
                r = null == (r = r(n, t = e.memoizedState)) ? t : nG({}, t, r), e.memoizedState = r, 0 === e.lanes && (e.updateQueue.baseState = r)
            }

            function tT(e, t, r, n, i, a, s) {
                return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(n, a, s) : !t.prototype || !t.prototype.isPureReactComponent || !ef(r, n) || !ef(i, a)
            }

            function tF(e, t, r, n) {
                e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(r, n), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && lg.enqueueReplaceState(t, t.state, null)
            }

            function tN(e, t) {
                var r = t;
                if ("ref" in t)
                    for (var n in r = {}, t) "ref" !== n && (r[n] = t[n]);
                if (e = e.defaultProps)
                    for (var i in r === t && (r = nG({}, r)), e) void 0 === r[i] && (r[i] = e[i]);
                return r
            }

            function tM(e, t) {
                try {
                    (0, e.onUncaughtError)(t.value, {
                        componentStack: t.stack
                    })
                } catch (e) {
                    setTimeout(function() {
                        throw e
                    })
                }
            }

            function tj(e, t, r) {
                try {
                    (0, e.onCaughtError)(r.value, {
                        componentStack: r.stack,
                        errorBoundary: 1 === t.tag ? t.stateNode : null
                    })
                } catch (e) {
                    setTimeout(function() {
                        throw e
                    })
                }
            }

            function tO(e, t, r) {
                return (r = ei(r)).tag = 3, r.payload = {
                    element: null
                }, r.callback = function() {
                    tM(e, t)
                }, r
            }

            function tA(e) {
                return (e = ei(e)).tag = 3, e
            }

            function tU(e, t, r, n) {
                var i = r.type.getDerivedStateFromError;
                if ("function" == typeof i) {
                    var a = n.value;
                    e.payload = function() {
                        return i(a)
                    }, e.callback = function() {
                        tj(t, r, n)
                    }
                }
                var s = r.stateNode;
                null !== s && "function" == typeof s.componentDidCatch && (e.callback = function() {
                    tj(t, r, n), "function" != typeof i && (null === os ? os = new Set([this]) : os.add(this));
                    var e = n.stack;
                    this.componentDidCatch(n.value, {
                        componentStack: null !== e ? e : ""
                    })
                })
            }

            function tH(e, t, r, n) {
                t.child = null === e ? s3(t, null, r, n) : s4(t, e.child, r, n)
            }

            function tW(e, t, r, n, i) {
                r = r.render;
                var a = t.ref;
                if ("ref" in n) {
                    var s = {};
                    for (var l in n) "ref" !== l && (s[l] = n[l])
                } else s = n;
                return (rs(t), n = eL(e, t, r, s, a, i), l = eM(), null === e || lv) ? (sD && l && P(t), t.flags |= 1, tH(e, t, n, i), t.child) : (ej(e, t, i), t8(e, t, i))
            }

            function t$(e, t, r, n, i) {
                if (null === e) {
                    var a = r.type;
                    return "function" != typeof a || nD(a) || void 0 !== a.defaultProps || null !== r.compare ? ((e = nF(r.type, null, n, t, t.mode, i)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, tB(e, t, a, n, i))
                }
                if (a = e.child, !t7(e, i)) {
                    var s = a.memoizedProps;
                    if ((r = null !== (r = r.compare) ? r : ef)(s, n) && e.ref === t.ref) return t8(e, t, i)
                }
                return t.flags |= 1, (e = nL(a, n)).ref = t.ref, e.return = t, t.child = e
            }

            function tB(e, t, r, n, i) {
                if (null !== e) {
                    var a = e.memoizedProps;
                    if (ef(a, n) && e.ref === t.ref)
                        if (lv = !1, t.pendingProps = n = a, !t7(e, i)) return t.lanes = e.lanes, t8(e, t, i);
                        else 0 != (131072 & e.flags) && (lv = !0)
                }
                return tG(e, t, r, n, i)
            }

            function tV(e, t, r) {
                var n = t.pendingProps,
                    i = n.children,
                    a = 0 != (2 & t.stateNode._pendingVisibility),
                    s = null !== e ? e.memoizedState : null;
                if (tQ(e, t), "hidden" === n.mode || a) {
                    if (0 != (128 & t.flags)) {
                        if (n = null !== s ? s.baseLanes | r : r, null !== e) {
                            for (i = t.child = e.child, a = 0; null !== i;) a = a | i.lanes | i.childLanes, i = i.sibling;
                            t.childLanes = a & ~n
                        } else t.childLanes = 0, t.child = null;
                        return tq(e, t, n, r)
                    }
                    if (0 == (0x20000000 & r)) return t.lanes = t.childLanes = 0x20000000, tq(e, t, null !== s ? s.baseLanes | r : r, r);
                    t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null
                    }, null !== e && rh(t, null !== s ? s.cachePool : null), null !== s ? ek(t, s) : eI(), eC(t)
                } else null !== s ? (rh(t, s.cachePool), ek(t, s), eR(), t.memoizedState = null) : (null !== e && rh(t, null), eI(), eR());
                return tH(e, t, i, r), t.child
            }

            function tq(e, t, r, n) {
                var i = rf();
                return t.memoizedState = {
                    baseLanes: r,
                    cachePool: i = null === i ? null : {
                        parent: iC ? lR._currentValue : lR._currentValue2,
                        pool: i
                    }
                }, null !== e && rh(t, null), eI(), eC(t), null !== e && ri(e, t, n, !0), null
            }

            function tQ(e, t) {
                var r = t.ref;
                if (null === r) null !== e && null !== e.ref && (t.flags |= 2097664);
                else {
                    if ("function" != typeof r && "object" != typeof r) throw Error(i(284));
                    (null === e || e.ref !== r) && (t.flags |= 2097664)
                }
            }

            function tG(e, t, r, n, i) {
                return (rs(t), r = eL(e, t, r, n, void 0, i), n = eM(), null === e || lv) ? (sD && n && P(t), t.flags |= 1, tH(e, t, r, i), t.child) : (ej(e, t, i), t8(e, t, i))
            }

            function tJ(e, t, r, n, i, a) {
                return (rs(t), t.updateQueue = null, r = eF(t, n, r, i), eT(e), n = eM(), null === e || lv) ? (sD && n && P(t), t.flags |= 1, tH(e, t, r, a), t.child) : (ej(e, t, a), t8(e, t, a))
            }

            function tK(e, t, r, n, i) {
                if (rs(t), null === t.stateNode) {
                    var a = a6,
                        s = r.contextType;
                    "object" == typeof s && null !== s && (a = rl(s)), t.memoizedState = null !== (a = new r(n, a)).state && void 0 !== a.state ? a.state : null, a.updater = lg, t.stateNode = a, a._reactInternals = t, (a = t.stateNode).props = n, a.state = t.memoizedState, a.refs = {}, er(t), s = r.contextType, a.context = "object" == typeof s && null !== s ? rl(s) : a6, a.state = t.memoizedState, "function" == typeof(s = r.getDerivedStateFromProps) && (tL(t, r, s, n), a.state = t.memoizedState), "function" == typeof r.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (s = a.state, "function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), s !== a.state && lg.enqueueReplaceState(a, a.state, null), eu(t, n, a, i), eo(), a.state = t.memoizedState), "function" == typeof a.componentDidMount && (t.flags |= 4194308), n = !0
                } else if (null === e) {
                    a = t.stateNode;
                    var l = t.memoizedProps,
                        o = tN(r, l);
                    a.props = o;
                    var u = a.context,
                        c = r.contextType;
                    s = a6, "object" == typeof c && null !== c && (s = rl(c));
                    var d = r.getDerivedStateFromProps;
                    c = "function" == typeof d || "function" == typeof a.getSnapshotBeforeUpdate, l = t.pendingProps !== l, c || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (l || u !== s) && tF(t, a, n, s), sG = !1;
                    var f = t.memoizedState;
                    a.state = f, eu(t, n, a, i), eo(), u = t.memoizedState, l || f !== u || sG ? ("function" == typeof d && (tL(t, r, d, n), u = t.memoizedState), (o = sG || tT(t, r, o, n, f, u, s)) ? (c || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" == typeof a.componentDidMount && (t.flags |= 4194308)) : ("function" == typeof a.componentDidMount && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = u), a.props = n, a.state = u, a.context = s, n = o) : ("function" == typeof a.componentDidMount && (t.flags |= 4194308), n = !1)
                } else {
                    a = t.stateNode, en(e, t), c = tN(r, s = t.memoizedProps), a.props = c, d = t.pendingProps, f = a.context, u = r.contextType, o = a6, "object" == typeof u && null !== u && (o = rl(u)), (u = "function" == typeof(l = r.getDerivedStateFromProps) || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (s !== d || f !== o) && tF(t, a, n, o), sG = !1, f = t.memoizedState, a.state = f, eu(t, n, a, i), eo();
                    var h = t.memoizedState;
                    s !== d || f !== h || sG || null !== e && null !== e.dependencies && ra(e.dependencies) ? ("function" == typeof l && (tL(t, r, l, n), h = t.memoizedState), (c = sG || tT(t, r, c, n, f, h, o) || null !== e && null !== e.dependencies && ra(e.dependencies)) ? (u || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(n, h, o), "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(n, h, o)), "function" == typeof a.componentDidUpdate && (t.flags |= 4), "function" == typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" != typeof a.componentDidUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = h), a.props = n, a.state = h, a.context = o, n = c) : ("function" != typeof a.componentDidUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), n = !1)
                }
                return a = n, tQ(e, t), n = 0 != (128 & t.flags), a || n ? (a = t.stateNode, r = n && "function" != typeof r.getDerivedStateFromError ? null : a.render(), t.flags |= 1, null !== e && n ? (t.child = s4(t, e.child, null, i), t.child = s4(t, null, r, i)) : tH(e, t, r, i), t.memoizedState = a.state, e = t.child) : e = t8(e, t, i), e
            }

            function tZ(e, t, r, n) {
                return U(), t.flags |= 256, tH(e, t, r, n), t.child
            }

            function tX(e) {
                return {
                    baseLanes: e,
                    cachePool: rp()
                }
            }

            function tY(e, t, r) {
                return e = null !== e ? e.childLanes & ~r : 0, t && (e |= l7), e
            }

            function t0(e, r, n) {
                var a, s = r.pendingProps,
                    l = !1,
                    o = 0 != (128 & r.flags);
                if ((a = o) || (a = (null === e || null !== e.memoizedState) && 0 != (2 & s9.current)), a && (l = !0, r.flags &= -129), a = 0 != (32 & r.flags), r.flags &= -33, null === e) {
                    if (sD) {
                        if (l ? ex(r) : eR(), sD) {
                            var u, c = sP;
                            (u = c) && (null !== (c = ax(c, sT)) ? (r.memoizedState = {
                                dehydrated: c,
                                treeContext: null !== sk ? {
                                    id: sI,
                                    overflow: sE
                                } : null,
                                retryLane: 0x20000000
                            }, (u = t(18, null, null, 0)).stateNode = c, u.return = r, r.child = u, s_ = r, sP = null, u = !0) : u = !1), u || M(r)
                        }
                        if (null !== (c = r.memoizedState) && null !== (c = c.dehydrated)) return ap(c) ? r.lanes = 16 : r.lanes = 0x20000000, null;
                        ez(r)
                    }
                    return (c = s.children, s = s.fallback, l) ? (eR(), c = t2({
                        mode: "hidden",
                        children: c
                    }, l = r.mode), s = nN(s, l, n, null), c.return = r, s.return = r, c.sibling = s, r.child = c, (l = r.child).memoizedState = tX(n), l.childLanes = tY(e, a, n), r.memoizedState = lS, s) : (ex(r), t1(r, c))
                }
                if (null !== (u = e.memoizedState) && null !== (c = u.dehydrated)) {
                    if (o) 256 & r.flags ? (ex(r), r.flags &= -257, r = t4(e, r, n)) : null !== r.memoizedState ? (eR(), r.child = e.child, r.flags |= 128, r = null) : (eR(), l = s.fallback, c = r.mode, s = t2({
                        mode: "visible",
                        children: s.children
                    }, c), l = nN(l, c, n, null), l.flags |= 2, s.return = r, l.return = r, s.sibling = l, r.child = s, s4(r, e.child, null, n), (s = r.child).memoizedState = tX(n), s.childLanes = tY(e, a, n), r.memoizedState = lS, r = l);
                    else if (ex(r), ap(c)) a = am(c).digest, (s = Error(i(419))).stack = "", s.digest = a, H({
                        value: s,
                        source: null,
                        stack: null
                    }), r = t4(e, r, n);
                    else if (lv || ri(e, r, n, !1), a = 0 != (n & e.childLanes), lv || a) {
                        if (null !== (a = lJ)) {
                            if (0 != (42 & (s = n & -n))) s = 1;
                            else switch (s) {
                                case 2:
                                    s = 1;
                                    break;
                                case 8:
                                    s = 4;
                                    break;
                                case 32:
                                    s = 16;
                                    break;
                                case 128:
                                case 256:
                                case 512:
                                case 1024:
                                case 2048:
                                case 4096:
                                case 8192:
                                case 16384:
                                case 32768:
                                case 65536:
                                case 131072:
                                case 262144:
                                case 524288:
                                case 1048576:
                                case 2097152:
                                case 4194304:
                                case 8388608:
                                case 0x1000000:
                                case 0x2000000:
                                    s = 64;
                                    break;
                                case 0x10000000:
                                    s = 0x8000000;
                                    break;
                                default:
                                    s = 0
                            }
                            if (0 !== (s = 0 != (s & (a.suspendedLanes | n)) ? 0 : s) && s !== u.retryLane) throw u.retryLane = s, V(e, s), nt(a, e, s), lb
                        }
                        ah(c) || nh(), r = t4(e, r, n)
                    } else ah(c) ? (r.flags |= 128, r.child = e.child, ag(c, r = nz.bind(null, e)), r = null) : (e = u.treeContext, i_ && (sP = ak(c), s_ = r, sD = !0, sL = null, sT = !1, null !== e && (sS[sw++] = sI, sS[sw++] = sE, sS[sw++] = sk, sI = e.id, sE = e.overflow, sk = r)), r = t1(r, s.children), r.flags |= 4096);
                    return r
                }
                return l ? (eR(), l = s.fallback, c = r.mode, o = (u = e.child).sibling, (s = nL(u, {
                    mode: "hidden",
                    children: s.children
                })).subtreeFlags = 0x1e00000 & u.subtreeFlags, null !== o ? l = nL(o, l) : (l = nN(l, c, n, null), l.flags |= 2), l.return = r, s.return = r, s.sibling = l, r.child = s, s = l, l = r.child, null === (c = e.child.memoizedState) ? c = tX(n) : (null !== (u = c.cachePool) ? (o = iC ? lR._currentValue : lR._currentValue2, u = u.parent !== o ? {
                    parent: o,
                    pool: o
                } : u) : u = rp(), c = {
                    baseLanes: c.baseLanes | n,
                    cachePool: u
                }), l.memoizedState = c, l.childLanes = tY(e, a, n), r.memoizedState = lS, s) : (ex(r), e = (n = e.child).sibling, (n = nL(n, {
                    mode: "visible",
                    children: s.children
                })).return = r, n.sibling = null, null !== e && (null === (a = r.deletions) ? (r.deletions = [e], r.flags |= 16) : a.push(e)), r.child = n, r.memoizedState = null, n)
            }

            function t1(e, t) {
                return (t = t2({
                    mode: "visible",
                    children: t
                }, e.mode)).return = e, e.child = t
            }

            function t2(e, t) {
                return nM(e, t, 0, null)
            }

            function t4(e, t, r) {
                return s4(t, e.child, null, r), e = t1(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
            }

            function t3(e, t, r) {
                e.lanes |= t;
                var n = e.alternate;
                null !== n && (n.lanes |= t), rr(e.return, t, r)
            }

            function t6(e, t, r, n, i) {
                var a = e.memoizedState;
                null === a ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: n,
                    tail: r,
                    tailMode: i
                } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = n, a.tail = r, a.tailMode = i)
            }

            function t5(e, t, r) {
                var n = t.pendingProps,
                    i = n.revealOrder,
                    a = n.tail;
                if (tH(e, t, n.children, r), 0 != (2 & (n = s9.current))) n = 1 & n | 2, t.flags |= 128;
                else {
                    if (null !== e && 0 != (128 & e.flags)) e: for (e = t.child; null !== e;) {
                        if (13 === e.tag) null !== e.memoizedState && t3(e, r, t);
                        else if (19 === e.tag) t3(e, r, t);
                        else if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                        if (e === t) break;
                        for (; null === e.sibling;) {
                            if (null === e.return || e.return === t) break e;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                    n &= 1
                }
                switch (m(s9, n), i) {
                    case "forwards":
                        for (r = t.child, i = null; null !== r;) null !== (e = r.alternate) && null === e_(e) && (i = r), r = r.sibling;
                        null === (r = i) ? (i = t.child, t.child = null) : (i = r.sibling, r.sibling = null), t6(t, !1, i, r, a);
                        break;
                    case "backwards":
                        for (r = null, i = t.child, t.child = null; null !== i;) {
                            if (null !== (e = i.alternate) && null === e_(e)) {
                                t.child = i;
                                break
                            }
                            e = i.sibling, i.sibling = r, r = i, i = e
                        }
                        t6(t, !0, r, null, a);
                        break;
                    case "together":
                        t6(t, !1, null, null, void 0);
                        break;
                    default:
                        t.memoizedState = null
                }
                return t.child
            }

            function t8(e, t, r) {
                if (null !== e && (t.dependencies = e.dependencies), l6 |= t.lanes, 0 == (r & t.childLanes)) {
                    if (null === e) return null;
                    else if (ri(e, t, r, !1), 0 == (r & t.childLanes)) return null
                }
                if (null !== e && t.child !== e.child) throw Error(i(153));
                if (null !== t.child) {
                    for (r = nL(e = t.child, e.pendingProps), t.child = r, r.return = t; null !== e.sibling;) e = e.sibling, (r = r.sibling = nL(e, e.pendingProps)).return = t;
                    r.sibling = null
                }
                return t.child
            }

            function t7(e, t) {
                return 0 != (e.lanes & t) || !!(null !== (e = e.dependencies) && ra(e))
            }

            function t9(e, t, r) {
                if (null !== e)
                    if (e.memoizedProps !== t.pendingProps) lv = !0;
                    else {
                        if (!t7(e, r) && 0 == (128 & t.flags)) return lv = !1,
                            function(e, t, r) {
                                switch (t.tag) {
                                    case 3:
                                        L(t, t.stateNode.containerInfo), re(t, lR, e.memoizedState.cache), U();
                                        break;
                                    case 27:
                                    case 5:
                                        F(t);
                                        break;
                                    case 4:
                                        L(t, t.stateNode.containerInfo);
                                        break;
                                    case 10:
                                        re(t, t.type, t.memoizedProps.value);
                                        break;
                                    case 13:
                                        var n = t.memoizedState;
                                        if (null !== n) {
                                            if (null !== n.dehydrated) return ex(t), t.flags |= 128, null;
                                            if (0 != (r & t.child.childLanes)) return t0(e, t, r);
                                            return ex(t), null !== (e = t8(e, t, r)) ? e.sibling : null
                                        }
                                        ex(t);
                                        break;
                                    case 19:
                                        var i = 0 != (128 & e.flags);
                                        if ((n = 0 != (r & t.childLanes)) || (ri(e, t, r, !1), n = 0 != (r & t.childLanes)), i) {
                                            if (n) return t5(e, t, r);
                                            t.flags |= 128
                                        }
                                        if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null, i.lastEffect = null), m(s9, s9.current), !n) return null;
                                        break;
                                    case 22:
                                    case 23:
                                        return t.lanes = 0, tV(e, t, r);
                                    case 24:
                                        re(t, lR, e.memoizedState.cache)
                                }
                                return t8(e, t, r)
                            }(e, t, r);
                        lv = 0 != (131072 & e.flags)
                    }
                else lv = !1, sD && 0 != (1048576 & t.flags) && _(t, sv, t.index);
                switch (t.lanes = 0, t.tag) {
                    case 16:
                        e: {
                            e = t.pendingProps;
                            var n = t.elementType,
                                a = n._init;
                            if (n = a(n._payload), t.type = n, "function" == typeof n) nD(n) ? (e = tN(n, e), t.tag = 1, t = tK(null, t, n, e, r)) : (t.tag = 0, t = tG(null, t, n, e, r));
                            else {
                                if (null != n) {
                                    if ((a = n.$$typeof) === n3) {
                                        t.tag = 11, t = tW(null, t, n, e, r);
                                        break e
                                    } else if (a === n8) {
                                        t.tag = 14, t = t$(null, t, n, e, r);
                                        break e
                                    }
                                }
                                throw Error(i(306, t = s(n) || n, ""))
                            }
                        }
                        return t;
                    case 0:
                        return tG(e, t, t.type, t.pendingProps, r);
                    case 1:
                        return a = tN(n = t.type, t.pendingProps), tK(e, t, n, a, r);
                    case 3:
                        e: {
                            if (L(t, t.stateNode.containerInfo), null === e) throw Error(i(387));
                            var l = t.pendingProps;n = (a = t.memoizedState).element,
                            en(e, t),
                            eu(t, l, null, r);
                            var o = t.memoizedState;
                            if (re(t, lR, l = o.cache), l !== a.cache && rn(t, [lR], r, !0), eo(), l = o.element, i_ && a.isDehydrated)
                                if (a = {
                                        element: l,
                                        isDehydrated: !1,
                                        cache: o.cache
                                    }, t.updateQueue.baseState = a, t.memoizedState = a, 256 & t.flags) {
                                    t = tZ(e, t, l, r);
                                    break e
                                } else if (l !== n) {
                                H(n = R(Error(i(424)), t)), t = tZ(e, t, l, r);
                                break e
                            } else
                                for (i_ && (sP = aw(t.stateNode.containerInfo), s_ = t, sD = !0, sL = null, sT = !0), r = s3(t, null, l, r), t.child = r; r;) r.flags = -3 & r.flags | 4096, r = r.sibling;
                            else {
                                if (U(), l === n) {
                                    t = t8(e, t, r);
                                    break e
                                }
                                tH(e, t, l, r)
                            }
                            t = t.child
                        }
                        return t;
                    case 26:
                        if (aj) return tQ(e, t), null === e ? (r = aU(t.type, null, t.pendingProps, null)) ? t.memoizedState = r : sD || (t.stateNode = aq(t.type, t.pendingProps, sR.current, t)) : t.memoizedState = aU(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                    case 27:
                        if (aZ) return F(t), null === e && aZ && sD && (n = t.stateNode = aX(t.type, t.pendingProps, sR.current, sx.current, !1), s_ = t, sT = !0, sP = aS(n)), n = t.pendingProps.children, null !== e || sD ? tH(e, t, n, r) : t.child = s4(t, null, n, r), tQ(e, t), t.child;
                    case 5:
                        return null === e && sD && (aN(t.type, t.pendingProps, sx.current), (a = n = sP) && (null !== (n = aI(n, t.type, t.pendingProps, sT)) ? (t.stateNode = n, s_ = t, sP = aS(n), sT = !1, a = !0) : a = !1), a || M(t)), F(t), a = t.type, l = t.pendingProps, o = null !== e ? e.memoizedProps : null, n = l.children, iw(a, l) ? n = null : null !== o && iw(a, o) && (t.flags |= 32), null !== t.memoizedState && (a = eL(e, t, eN, null, null, r), iC ? i$._currentValue = a : i$._currentValue2 = a), tQ(e, t), tH(e, t, n, r), t.child;
                    case 6:
                        return null === e && sD && (aM(t.pendingProps, sx.current), (e = r = sP) && (null !== (r = aE(r, t.pendingProps, sT)) ? (t.stateNode = r, s_ = t, sP = null, e = !0) : e = !1), e || M(t)), null;
                    case 13:
                        return t0(e, t, r);
                    case 4:
                        return L(t, t.stateNode.containerInfo), n = t.pendingProps, null === e ? t.child = s4(t, null, n, r) : tH(e, t, n, r), t.child;
                    case 11:
                        return tW(e, t, t.type, t.pendingProps, r);
                    case 7:
                        return tH(e, t, t.pendingProps, r), t.child;
                    case 8:
                    case 12:
                        return tH(e, t, t.pendingProps.children, r), t.child;
                    case 10:
                        return n = t.pendingProps, re(t, t.type, n.value), tH(e, t, n.children, r), t.child;
                    case 9:
                        return a = t.type._context, n = t.pendingProps.children, rs(t), n = n(a = rl(a)), t.flags |= 1, tH(e, t, n, r), t.child;
                    case 14:
                        return t$(e, t, t.type, t.pendingProps, r);
                    case 15:
                        return tB(e, t, t.type, t.pendingProps, r);
                    case 19:
                        return t5(e, t, r);
                    case 22:
                        return tV(e, t, r);
                    case 24:
                        return rs(t), n = rl(lR), null === e ? (null === (a = rf()) && (a = lJ, l = rc(), a.pooledCache = l, l.refCount++, null !== l && (a.pooledCacheLanes |= r), a = l), t.memoizedState = {
                            parent: n,
                            cache: a
                        }, er(t), re(t, lR, a)) : (0 != (e.lanes & r) && (en(e, t), eu(t, null, null, r), eo()), a = e.memoizedState, l = t.memoizedState, a.parent !== n ? (a = {
                            parent: n,
                            cache: n
                        }, t.memoizedState = a, 0 === t.lanes && (t.memoizedState = t.updateQueue.baseState = a), re(t, lR, n)) : (re(t, lR, n = l.cache), n !== a.cache && rn(t, [lR], r, !0))), tH(e, t, t.pendingProps.children, r), t.child;
                    case 29:
                        throw t.pendingProps
                }
                throw Error(i(156, t.tag))
            }

            function re(e, t, r) {
                iC ? (m(lw, t._currentValue), t._currentValue = r) : (m(lw, t._currentValue2), t._currentValue2 = r)
            }

            function rt(e) {
                var t = lw.current;
                iC ? e._currentValue = t : e._currentValue2 = t, p(lw)
            }

            function rr(e, t, r) {
                for (; null !== e;) {
                    var n = e.alternate;
                    if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== n && (n.childLanes |= t)) : null !== n && (n.childLanes & t) !== t && (n.childLanes |= t), e === r) break;
                    e = e.return
                }
            }

            function rn(e, t, r, n) {
                var a = e.child;
                for (null !== a && (a.return = e); null !== a;) {
                    var s = a.dependencies;
                    if (null !== s) {
                        var l = a.child;
                        s = s.firstContext;
                        e: for (; null !== s;) {
                            var o = s;
                            s = a;
                            for (var u = 0; u < t.length; u++)
                                if (o.context === t[u]) {
                                    s.lanes |= r, null !== (o = s.alternate) && (o.lanes |= r), rr(s.return, r, e), n || (l = null);
                                    break e
                                } s = o.next
                        }
                    } else if (18 === a.tag) {
                        if (null === (l = a.return)) throw Error(i(341));
                        l.lanes |= r, null !== (s = l.alternate) && (s.lanes |= r), rr(l, r, e), l = null
                    } else l = a.child;
                    if (null !== l) l.return = a;
                    else
                        for (l = a; null !== l;) {
                            if (l === e) {
                                l = null;
                                break
                            }
                            if (null !== (a = l.sibling)) {
                                a.return = l.return, l = a;
                                break
                            }
                            l = l.return
                        }
                    a = l
                }
            }

            function ri(e, t, r, n) {
                e = null;
                for (var a = t, s = !1; null !== a;) {
                    if (!s) {
                        if (0 != (524288 & a.flags)) s = !0;
                        else if (0 != (262144 & a.flags)) break
                    }
                    if (10 === a.tag) {
                        var l = a.alternate;
                        if (null === l) throw Error(i(387));
                        if (null !== (l = l.memoizedProps)) {
                            var o = a.type;
                            sp(a.pendingProps.value, l.value) || (null !== e ? e.push(o) : e = [o])
                        }
                    } else if (a === sz.current) {
                        if (null === (l = a.alternate)) throw Error(i(387));
                        l.memoizedState.memoizedState !== a.memoizedState.memoizedState && (null !== e ? e.push(i$) : e = [i$])
                    }
                    a = a.return
                }
                null !== e && rn(t, e, r, n), t.flags |= 262144
            }

            function ra(e) {
                for (e = e.firstContext; null !== e;) {
                    var t = e.context;
                    if (!sp(iC ? t._currentValue : t._currentValue2, e.memoizedValue)) return !0;
                    e = e.next
                }
                return !1
            }

            function rs(e) {
                lk = e, lI = null, null !== (e = e.dependencies) && (e.firstContext = null)
            }

            function rl(e) {
                return ru(lk, e)
            }

            function ro(e, t) {
                return null === lk && rs(e), ru(e, t)
            }

            function ru(e, t) {
                var r = iC ? t._currentValue : t._currentValue2;
                if (t = {
                        context: t,
                        memoizedValue: r,
                        next: null
                    }, null === lI) {
                    if (null === e) throw Error(i(308));
                    lI = t, e.dependencies = {
                        lanes: 0,
                        firstContext: t
                    }, e.flags |= 524288
                } else lI = lI.next = t;
                return r
            }

            function rc() {
                return {
                    controller: new lE,
                    data: new Map,
                    refCount: 0
                }
            }

            function rd(e) {
                e.refCount--, 0 === e.refCount && lx(lC, function() {
                    e.controller.abort()
                })
            }

            function rf() {
                var e = l_.current;
                return null !== e ? e : lJ.pooledCache
            }

            function rh(e, t) {
                null === t ? m(l_, l_.current) : m(l_, t.pool)
            }

            function rp() {
                var e = rf();
                return null === e ? null : {
                    parent: iC ? lR._currentValue : lR._currentValue2,
                    pool: e
                }
            }

            function rm(e) {
                e.flags |= 4
            }

            function rg(e, t) {
                if (null !== e && e.child === t.child) return !1;
                if (0 != (16 & t.flags)) return !0;
                for (e = t.child; null !== e;) {
                    if (0 != (13878 & e.flags) || 0 != (13878 & e.subtreeFlags)) return !0;
                    e = e.sibling
                }
                return !1
            }

            function ry(e, t, r, n) {
                if (iR)
                    for (r = t.child; null !== r;) {
                        if (5 === r.tag || 6 === r.tag) iv(e, r.stateNode);
                        else if (!(4 === r.tag || aZ && 27 === r.tag) && null !== r.child) {
                            r.child.return = r, r = r.child;
                            continue
                        }
                        if (r === t) break;
                        for (; null === r.sibling;) {
                            if (null === r.return || r.return === t) return;
                            r = r.return
                        }
                        r.sibling.return = r.return, r = r.sibling
                    } else if (iz)
                        for (var i = t.child; null !== i;) {
                            if (5 === i.tag) {
                                var a = i.stateNode;
                                r && n && (a = ad(a, i.type, i.memoizedProps)), iv(e, a)
                            } else if (6 === i.tag) a = i.stateNode, r && n && (a = af(a, i.memoizedProps)), iv(e, a);
                            else if (4 !== i.tag) {
                                if (22 === i.tag && null !== i.memoizedState) null !== (a = i.child) && (a.return = i), ry(e, i, !0, !0);
                                else if (null !== i.child) {
                                    i.child.return = i, i = i.child;
                                    continue
                                }
                            }
                            if (i === t) break;
                            for (; null === i.sibling;) {
                                if (null === i.return || i.return === t) return;
                                i = i.return
                            }
                            i.sibling.return = i.return, i = i.sibling
                        }
            }

            function rb(e, t) {
                if (iz && rg(e, t)) {
                    var r = (e = t.stateNode).containerInfo,
                        n = al();
                    ! function e(t, r, n, i) {
                        if (iz)
                            for (var a = r.child; null !== a;) {
                                if (5 === a.tag) {
                                    var s = a.stateNode;
                                    n && i && (s = ad(s, a.type, a.memoizedProps)), ao(t, s)
                                } else if (6 === a.tag) s = a.stateNode, n && i && (s = af(s, a.memoizedProps)), ao(t, s);
                                else if (4 !== a.tag) {
                                    if (22 === a.tag && null !== a.memoizedState) null !== (s = a.child) && (s.return = a), e(t, a, null === a.memoizedProps || "manual" !== a.memoizedProps.mode, !0);
                                    else if (null !== a.child) {
                                        a.child.return = a, a = a.child;
                                        continue
                                    }
                                }
                                if (a === r) break;
                                for (; null === a.sibling;) {
                                    if (null === a.return || a.return === r) return;
                                    a = a.return
                                }
                                a.sibling.return = a.return, a = a.sibling
                            }
                    }(n, t, !1, !1), e.pendingChildren = n, rm(t), au(r, n)
                }
            }

            function rv(e, t, r, n) {
                if (iR) e.memoizedProps !== n && rm(t);
                else if (iz) {
                    var i = e.stateNode,
                        a = e.memoizedProps;
                    if ((e = rg(e, t)) || a !== n) {
                        var s = sx.current;
                        (a = as(i, r, a, n, !e, null)) === i ? t.stateNode = i : (iS(a, r, n, s) && rm(t), t.stateNode = a, e ? ry(a, t, !1, !1) : rm(t))
                    } else t.stateNode = i
                }
            }

            function rS(e, t, r) {
                if (ij(t, r)) {
                    if (e.flags |= 0x1000000, !iO(t, r))
                        if (nc()) e.flags |= 8192;
                        else throw s0 = sY, sX
                } else e.flags &= -0x1000001
            }

            function rw(e, t) {
                if (aG(t)) {
                    if (e.flags |= 0x1000000, !aJ(t))
                        if (nc()) e.flags |= 8192;
                        else throw s0 = sY, sX
                } else e.flags &= -0x1000001
            }

            function rk(e, t) {
                null !== t && (e.flags |= 4), 16384 & e.flags && (t = 22 !== e.tag ? S() : 0x20000000, e.lanes |= t, l9 |= t)
            }

            function rI(e, t) {
                if (!sD) switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var r = null; null !== t;) null !== t.alternate && (r = t), t = t.sibling;
                        null === r ? e.tail = null : r.sibling = null;
                        break;
                    case "collapsed":
                        r = e.tail;
                        for (var n = null; null !== r;) null !== r.alternate && (n = r), r = r.sibling;
                        null === n ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : n.sibling = null
                }
            }

            function rE(e) {
                var t = null !== e.alternate && e.alternate.child === e.child,
                    r = 0,
                    n = 0;
                if (t)
                    for (var i = e.child; null !== i;) r |= i.lanes | i.childLanes, n |= 0x1e00000 & i.subtreeFlags, n |= 0x1e00000 & i.flags, i.return = e, i = i.sibling;
                else
                    for (i = e.child; null !== i;) r |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = e, i = i.sibling;
                return e.subtreeFlags |= n, e.childLanes = r, t
            }

            function rx(e, t) {
                switch (D(t), t.tag) {
                    case 3:
                        rt(lR), T();
                        break;
                    case 26:
                    case 27:
                    case 5:
                        N(t);
                        break;
                    case 4:
                        T();
                        break;
                    case 13:
                        ez(t);
                        break;
                    case 19:
                        p(s9);
                        break;
                    case 10:
                        rt(t.type);
                        break;
                    case 22:
                    case 23:
                        ez(t), eE(), null !== e && p(l_);
                        break;
                    case 24:
                        rt(lR)
                }
            }

            function rC(e, t) {
                try {
                    var r = t.updateQueue,
                        n = null !== r ? r.lastEffect : null;
                    if (null !== n) {
                        var i = n.next;
                        r = i;
                        do {
                            if ((r.tag & e) === e) {
                                n = void 0;
                                var a = r.create;
                                r.inst.destroy = n = a()
                            }
                            r = r.next
                        } while (r !== i)
                    }
                } catch (e) {
                    nE(t, t.return, e)
                }
            }

            function rR(e, t, r) {
                try {
                    var n = t.updateQueue,
                        i = null !== n ? n.lastEffect : null;
                    if (null !== i) {
                        var a = i.next;
                        n = a;
                        do {
                            if ((n.tag & e) === e) {
                                var s = n.inst,
                                    l = s.destroy;
                                if (void 0 !== l) {
                                    s.destroy = void 0, i = t;
                                    try {
                                        l()
                                    } catch (e) {
                                        nE(i, r, e)
                                    }
                                }
                            }
                            n = n.next
                        } while (n !== a)
                    }
                } catch (e) {
                    nE(t, t.return, e)
                }
            }

            function rz(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    var r = e.stateNode;
                    try {
                        ed(t, r)
                    } catch (t) {
                        nE(e, e.return, t)
                    }
                }
            }

            function r_(e, t, r) {
                r.props = tN(e.type, e.memoizedProps), r.state = e.memoizedState;
                try {
                    r.componentWillUnmount()
                } catch (r) {
                    nE(e, t, r)
                }
            }

            function rP(e, t) {
                try {
                    var r = e.ref;
                    if (null !== r) {
                        var n = e.stateNode;
                        switch (e.tag) {
                            case 26:
                            case 27:
                            case 5:
                                var i = ih(n);
                                break;
                            default:
                                i = n
                        }
                        "function" == typeof r ? e.refCleanup = r(i) : r.current = i
                    }
                } catch (r) {
                    nE(e, t, r)
                }
            }

            function rD(e, t) {
                var r = e.ref,
                    n = e.refCleanup;
                if (null !== r)
                    if ("function" == typeof n) try {
                        n()
                    } catch (r) {
                        nE(e, t, r)
                    } finally {
                        e.refCleanup = null, null != (e = e.alternate) && (e.refCleanup = null)
                    } else if ("function" == typeof r) try {
                        r(null)
                    } catch (r) {
                        nE(e, t, r)
                    } else r.current = null
            }

            function rL(e) {
                var t = e.type,
                    r = e.memoizedProps,
                    n = e.stateNode;
                try {
                    i3(n, t, r, e)
                } catch (t) {
                    nE(e, e.return, t)
                }
            }

            function rT(e, t, r) {
                try {
                    i6(e.stateNode, e.type, r, t, e)
                } catch (t) {
                    nE(e, e.return, t)
                }
            }

            function rF(e) {
                return 5 === e.tag || 3 === e.tag || !!aj && 26 === e.tag || !!aZ && 27 === e.tag || 4 === e.tag
            }

            function rN(e) {
                e: for (;;) {
                    for (; null === e.sibling;) {
                        if (null === e.return || rF(e.return)) return null;
                        e = e.return
                    }
                    for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && (aZ ? 27 !== e.tag : 1) && 18 !== e.tag;) {
                        if (2 & e.flags || null === e.child || 4 === e.tag) continue e;
                        e.child.return = e, e = e.child
                    }
                    if (!(2 & e.flags)) return e.stateNode
                }
            }

            function rM(e, t, r) {
                var n = e.tag;
                if (5 === n || 6 === n) e = e.stateNode, t ? i5(r, e, t) : i1(r, e);
                else if (!(4 === n || aZ && 27 === n) && null !== (e = e.child))
                    for (rM(e, t, r), e = e.sibling; null !== e;) rM(e, t, r), e = e.sibling
            }

            function rj(e, t, r) {
                e = e.containerInfo;
                try {
                    ac(e, r)
                } catch (e) {
                    nE(t, t.return, e)
                }
            }

            function rO(e, t, r) {
                var n = r.flags;
                switch (r.tag) {
                    case 0:
                    case 11:
                    case 15:
                        rq(e, r), 4 & n && rC(5, r);
                        break;
                    case 1:
                        if (rq(e, r), 4 & n)
                            if (e = r.stateNode, null === t) try {
                                e.componentDidMount()
                            } catch (e) {
                                nE(r, r.return, e)
                            } else {
                                var i = tN(r.type, t.memoizedProps);
                                t = t.memoizedState;
                                try {
                                    e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate)
                                } catch (e) {
                                    nE(r, r.return, e)
                                }
                            }
                        64 & n && rz(r), 512 & n && rP(r, r.return);
                        break;
                    case 3:
                        if (rq(e, r), 64 & n && null !== (n = r.updateQueue)) {
                            if (e = null, null !== r.child) switch (r.child.tag) {
                                case 27:
                                case 5:
                                    e = ih(r.child.stateNode);
                                    break;
                                case 1:
                                    e = r.child.stateNode
                            }
                            try {
                                ed(n, e)
                            } catch (e) {
                                nE(r, r.return, e)
                            }
                        }
                        break;
                    case 26:
                        if (aj) {
                            rq(e, r), 512 & n && rP(r, r.return);
                            break
                        }
                    case 27:
                    case 5:
                        rq(e, r), null === t && 4 & n && rL(r), 512 & n && rP(r, r.return);
                        break;
                    case 12:
                    default:
                        rq(e, r);
                        break;
                    case 13:
                        rq(e, r), 4 & n && rH(e, r);
                        break;
                    case 22:
                        if (!(i = null !== r.memoizedState || lP)) {
                            t = null !== t && null !== t.memoizedState || lD;
                            var a = lP,
                                s = lD;
                            lP = i, (lD = t) && !s ? function e(t, r, n) {
                                for (n = n && 0 != (8772 & r.subtreeFlags), r = r.child; null !== r;) {
                                    var i = r.alternate,
                                        a = t,
                                        s = r,
                                        l = s.flags;
                                    switch (s.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            e(a, s, n), rC(4, s);
                                            break;
                                        case 1:
                                            if (e(a, s, n), "function" == typeof(a = (i = s).stateNode).componentDidMount) try {
                                                a.componentDidMount()
                                            } catch (e) {
                                                nE(i, i.return, e)
                                            }
                                            if (null !== (a = (i = s).updateQueue)) {
                                                var o = i.stateNode;
                                                try {
                                                    var u = a.shared.hiddenCallbacks;
                                                    if (null !== u)
                                                        for (a.shared.hiddenCallbacks = null, a = 0; a < u.length; a++) ec(u[a], o)
                                                } catch (e) {
                                                    nE(i, i.return, e)
                                                }
                                            }
                                            n && 64 & l && rz(s), rP(s, s.return);
                                            break;
                                        case 26:
                                        case 27:
                                        case 5:
                                            e(a, s, n), n && null === i && 4 & l && rL(s), rP(s, s.return);
                                            break;
                                        case 12:
                                        default:
                                            e(a, s, n);
                                            break;
                                        case 13:
                                            e(a, s, n), n && 4 & l && rH(a, s);
                                            break;
                                        case 22:
                                            null === s.memoizedState && e(a, s, n), rP(s, s.return)
                                    }
                                    r = r.sibling
                                }
                            }(e, r, 0 != (8772 & r.subtreeFlags)) : rq(e, r), lP = a, lD = s
                        }
                        512 & n && ("manual" === r.memoizedProps.mode ? rP(r, r.return) : rD(r, r.return))
                }
            }

            function rA(e, t, r) {
                for (r = r.child; null !== r;) rU(e, t, r), r = r.sibling
            }

            function rU(e, t, r) {
                if (sh && "function" == typeof sh.onCommitFiberUnmount) try {
                    sh.onCommitFiberUnmount(sf, r)
                } catch (e) {}
                switch (r.tag) {
                    case 26:
                        if (aj) {
                            lD || rD(r, t), rA(e, t, r), r.memoizedState ? aW(r.memoizedState) : r.stateNode && aV(r.stateNode);
                            break
                        }
                    case 27:
                        if (aZ) {
                            lD || rD(r, t);
                            var n = lM,
                                i = lj;
                            lM = r.stateNode, rA(e, t, r), a1(r.stateNode), lM = n, lj = i;
                            break
                        }
                    case 5:
                        lD || rD(r, t);
                    case 6:
                        if (iR) {
                            if (n = lM, i = lj, lM = null, rA(e, t, r), lM = n, lj = i, null !== lM)
                                if (lj) try {
                                    i9(lM, r.stateNode)
                                } catch (e) {
                                    nE(r, t, e)
                                } else try {
                                    i7(lM, r.stateNode)
                                } catch (e) {
                                    nE(r, t, e)
                                }
                        } else rA(e, t, r);
                        break;
                    case 18:
                        iR && null !== lM && (lj ? aT(lM, r.stateNode) : aL(lM, r.stateNode));
                        break;
                    case 4:
                        iR ? (n = lM, i = lj, lM = r.stateNode.containerInfo, lj = !0, rA(e, t, r), lM = n, lj = i) : (iz && rj(r.stateNode, r, al()), rA(e, t, r));
                        break;
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        lD || rR(2, r, t), lD || rR(4, r, t), rA(e, t, r);
                        break;
                    case 1:
                        lD || (rD(r, t), "function" == typeof(n = r.stateNode).componentWillUnmount && r_(r, t, n)), rA(e, t, r);
                        break;
                    case 21:
                    default:
                        rA(e, t, r);
                        break;
                    case 22:
                        lD || rD(r, t), lD = (n = lD) || null !== r.memoizedState, rA(e, t, r), lD = n
                }
            }

            function rH(e, t) {
                if (i_ && null === t.memoizedState && null !== (e = t.alternate) && null !== (e = e.memoizedState) && null !== (e = e.dehydrated)) try {
                    aD(e)
                } catch (e) {
                    nE(t, t.return, e)
                }
            }

            function rW(e, t) {
                var r = function(e) {
                    switch (e.tag) {
                        case 13:
                        case 19:
                            var t = e.stateNode;
                            return null === t && (t = e.stateNode = new lT), t;
                        case 22:
                            return null === (t = (e = e.stateNode)._retryCache) && (t = e._retryCache = new lT), t;
                        default:
                            throw Error(i(435, e.tag))
                    }
                }(e);
                t.forEach(function(t) {
                    var n = n_.bind(null, e, t);
                    r.has(t) || (r.add(t), t.then(n, n))
                })
            }

            function r$(e, t) {
                var r = t.deletions;
                if (null !== r)
                    for (var n = 0; n < r.length; n++) {
                        var a = r[n],
                            s = e,
                            l = t;
                        if (iR) {
                            var o = l;
                            e: for (; null !== o;) {
                                switch (o.tag) {
                                    case 27:
                                    case 5:
                                        lM = o.stateNode, lj = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        lM = o.stateNode.containerInfo, lj = !0;
                                        break e
                                }
                                o = o.return
                            }
                            if (null === lM) throw Error(i(160));
                            rU(s, l, a), lM = null, lj = !1
                        } else rU(s, l, a);
                        null !== (s = a.alternate) && (s.return = null), a.return = null
                    }
                if (13878 & t.subtreeFlags)
                    for (t = t.child; null !== t;) rB(t, e), t = t.sibling
            }

            function rB(e, t) {
                var r = e.alternate,
                    n = e.flags;
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        r$(t, e), rV(e), 4 & n && (rR(3, e, e.return), rC(3, e), rR(5, e, e.return));
                        break;
                    case 1:
                        r$(t, e), rV(e), 512 & n && (lD || null === r || rD(r, r.return)), 64 & n && lP && null !== (e = e.updateQueue) && null !== (n = e.callbacks) && (r = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = null === r ? n : r.concat(n));
                        break;
                    case 26:
                        if (aj) {
                            var a = lO;
                            r$(t, e), rV(e), 512 & n && (lD || null === r || rD(r, r.return)), 4 & n && (n = null !== r ? r.memoizedState : null, t = e.memoizedState, null === r ? null === t ? null === e.stateNode ? e.stateNode = a$(a, e.type, e.memoizedProps, e) : aB(a, e.type, e.stateNode) : e.stateNode = aH(a, t, e.memoizedProps) : n !== t ? (null === n ? null !== r.stateNode && aV(r.stateNode) : aW(n), null === t ? aB(a, e.type, e.stateNode) : aH(a, t, e.memoizedProps)) : null === t && null !== e.stateNode && rT(e, e.memoizedProps, r.memoizedProps));
                            break
                        }
                    case 27:
                        if (aZ && 4 & n && null === e.alternate) {
                            a = e.stateNode;
                            var s = e.memoizedProps;
                            try {
                                aY(a), a0(e.type, s, a, e)
                            } catch (t) {
                                nE(e, e.return, t)
                            }
                        }
                    case 5:
                        if (r$(t, e), rV(e), 512 & n && (lD || null === r || rD(r, r.return)), iR) {
                            if (32 & e.flags) {
                                t = e.stateNode;
                                try {
                                    ae(t)
                                } catch (t) {
                                    nE(e, e.return, t)
                                }
                            }
                            4 & n && null != e.stateNode && (t = e.memoizedProps, rT(e, t, null !== r ? r.memoizedProps : t)), 1024 & n && (lL = !0)
                        }
                        break;
                    case 6:
                        if (r$(t, e), rV(e), 4 & n && iR) {
                            if (null === e.stateNode) throw Error(i(162));
                            n = e.memoizedProps, r = null !== r ? r.memoizedProps : n, t = e.stateNode;
                            try {
                                i4(t, r, n)
                            } catch (t) {
                                nE(e, e.return, t)
                            }
                        }
                        break;
                    case 3:
                        if (aj ? (aQ(), a = lO, lO = aA(t.containerInfo), r$(t, e), lO = a) : r$(t, e), rV(e), 4 & n) {
                            if (iR && i_ && null !== r && r.memoizedState.isDehydrated) try {
                                aP(t.containerInfo)
                            } catch (t) {
                                nE(e, e.return, t)
                            }
                            if (iz) {
                                n = t.containerInfo, r = t.pendingChildren;
                                try {
                                    ac(n, r)
                                } catch (t) {
                                    nE(e, e.return, t)
                                }
                            }
                        }
                        lL && (lL = !1, function e(t) {
                            if (1024 & t.subtreeFlags)
                                for (t = t.child; null !== t;) {
                                    var r = t;
                                    e(r), 5 === r.tag && 1024 & r.flags && iB(r.stateNode), t = t.sibling
                                }
                        }(e));
                        break;
                    case 4:
                        aj ? (r = lO, lO = aA(e.stateNode.containerInfo), r$(t, e), rV(e), lO = r) : (r$(t, e), rV(e)), 4 & n && iz && rj(e.stateNode, e, e.stateNode.pendingChildren);
                        break;
                    case 12:
                    default:
                        r$(t, e), rV(e);
                        break;
                    case 13:
                        r$(t, e), rV(e), 8192 & e.child.flags && null !== e.memoizedState != (null !== r && null !== r.memoizedState) && (on = sa()), 4 & n && null !== (n = e.updateQueue) && (e.updateQueue = null, rW(e, n));
                        break;
                    case 22:
                        512 & n && (lD || null === r || rD(r, r.return)), a = null !== e.memoizedState;
                        var l = null !== r && null !== r.memoizedState,
                            o = lP,
                            u = lD;
                        if (lP = o || a, lD = u || l, r$(t, e), lD = u, lP = o, rV(e), (t = e.stateNode)._current = e, t._visibility &= -3, t._visibility |= 2 & t._pendingVisibility, 8192 & n && (t._visibility = a ? -2 & t._visibility : 1 | t._visibility, a && (t = lP || lD, null === r || l || t || function e(t) {
                                for (t = t.child; null !== t;) {
                                    var r = t;
                                    switch (r.tag) {
                                        case 0:
                                        case 11:
                                        case 14:
                                        case 15:
                                            rR(4, r, r.return), e(r);
                                            break;
                                        case 1:
                                            rD(r, r.return);
                                            var n = r.stateNode;
                                            "function" == typeof n.componentWillUnmount && r_(r, r.return, n), e(r);
                                            break;
                                        case 26:
                                        case 27:
                                        case 5:
                                            rD(r, r.return), e(r);
                                            break;
                                        case 22:
                                            rD(r, r.return), null === r.memoizedState && e(r);
                                            break;
                                        default:
                                            e(r)
                                    }
                                    t = t.sibling
                                }
                            }(e)), iR && (null === e.memoizedProps || "manual" !== e.memoizedProps.mode))) {
                            e: if (r = null, iR)
                                for (t = e;;) {
                                    if (5 === t.tag || aj && 26 === t.tag || aZ && 27 === t.tag) {
                                        if (null === r) {
                                            l = r = t;
                                            try {
                                                s = l.stateNode, a ? at(s) : an(l.stateNode, l.memoizedProps)
                                            } catch (e) {
                                                nE(l, l.return, e)
                                            }
                                        }
                                    } else if (6 === t.tag) {
                                        if (null === r) {
                                            l = t;
                                            try {
                                                var c = l.stateNode;
                                                a ? ar(c) : ai(c, l.memoizedProps)
                                            } catch (e) {
                                                nE(l, l.return, e)
                                            }
                                        }
                                    } else if ((22 !== t.tag && 23 !== t.tag || null === t.memoizedState || t === e) && null !== t.child) {
                                        t.child.return = t, t = t.child;
                                        continue
                                    }
                                    if (t === e) break e;
                                    for (; null === t.sibling;) {
                                        if (null === t.return || t.return === e) break e;
                                        r === t && (r = null), t = t.return
                                    }
                                    r === t && (r = null), t.sibling.return = t.return, t = t.sibling
                                }
                        }
                        4 & n && null !== (n = e.updateQueue) && null !== (r = n.retryQueue) && (n.retryQueue = null, rW(e, r));
                        break;
                    case 19:
                        r$(t, e), rV(e), 4 & n && null !== (n = e.updateQueue) && (e.updateQueue = null, rW(e, n));
                    case 21:
                }
            }

            function rV(e) {
                var t = e.flags;
                if (2 & t) {
                    try {
                        if (iR && (!aZ || 27 !== e.tag)) {
                            e: {
                                for (var r = e.return; null !== r;) {
                                    if (rF(r)) {
                                        var n = r;
                                        break e
                                    }
                                    r = r.return
                                }
                                throw Error(i(160))
                            }
                            switch (n.tag) {
                                case 27:
                                    if (aZ) {
                                        var a = n.stateNode,
                                            s = rN(e);
                                        rM(e, s, a);
                                        break
                                    }
                                case 5:
                                    var l = n.stateNode;
                                    32 & n.flags && (ae(l), n.flags &= -33);
                                    var o = rN(e);
                                    rM(e, o, l);
                                    break;
                                case 3:
                                case 4:
                                    var u = n.stateNode.containerInfo,
                                        c = rN(e);
                                    ! function e(t, r, n) {
                                        var i = t.tag;
                                        if (5 === i || 6 === i) t = t.stateNode, r ? i8(n, t, r) : i2(n, t);
                                        else if (!(4 === i || aZ && 27 === i) && null !== (t = t.child))
                                            for (e(t, r, n), t = t.sibling; null !== t;) e(t, r, n), t = t.sibling
                                    }(e, c, u);
                                    break;
                                default:
                                    throw Error(i(161))
                            }
                        }
                    } catch (t) {
                        nE(e, e.return, t)
                    }
                    e.flags &= -3
                }
                4096 & t && (e.flags &= -4097)
            }

            function rq(e, t) {
                if (8772 & t.subtreeFlags)
                    for (t = t.child; null !== t;) rO(e, t.alternate, t), t = t.sibling
            }

            function rQ(e, t) {
                var r = null;
                null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (r = e.memoizedState.cachePool.pool), e = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (e = t.memoizedState.cachePool.pool), e !== r && (null != e && e.refCount++, null != r && rd(r))
            }

            function rG(e, t) {
                e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && rd(e))
            }

            function rJ(e, t, r, n) {
                if (10256 & t.subtreeFlags)
                    for (t = t.child; null !== t;) rK(e, t, r, n), t = t.sibling
            }

            function rK(e, t, r, n) {
                var i = t.flags;
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        rJ(e, t, r, n), 2048 & i && rC(9, t);
                        break;
                    case 3:
                        rJ(e, t, r, n), 2048 & i && (e = null, null !== t.alternate && (e = t.alternate.memoizedState.cache), (t = t.memoizedState.cache) !== e && (t.refCount++, null != e && rd(e)));
                        break;
                    case 12:
                        if (2048 & i) {
                            rJ(e, t, r, n), e = t.stateNode;
                            try {
                                var a = t.memoizedProps,
                                    s = a.id,
                                    l = a.onPostCommit;
                                "function" == typeof l && l(s, null === t.alternate ? "mount" : "update", e.passiveEffectDuration, -0)
                            } catch (e) {
                                nE(t, t.return, e)
                            }
                        } else rJ(e, t, r, n);
                        break;
                    case 23:
                        break;
                    case 22:
                        a = t.stateNode, null !== t.memoizedState ? 4 & a._visibility ? rJ(e, t, r, n) : rZ(e, t) : 4 & a._visibility ? rJ(e, t, r, n) : (a._visibility |= 4, function e(t, r, n, i, a) {
                            for (a = a && 0 != (10256 & r.subtreeFlags), r = r.child; null !== r;) {
                                var s = r,
                                    l = s.flags;
                                switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        e(t, s, n, i, a), rC(8, s);
                                        break;
                                    case 23:
                                        break;
                                    case 22:
                                        var o = s.stateNode;
                                        null !== s.memoizedState ? 4 & o._visibility ? e(t, s, n, i, a) : rZ(t, s) : (o._visibility |= 4, e(t, s, n, i, a)), a && 2048 & l && rQ(s.alternate, s);
                                        break;
                                    case 24:
                                        e(t, s, n, i, a), a && 2048 & l && rG(s.alternate, s);
                                        break;
                                    default:
                                        e(t, s, n, i, a)
                                }
                                r = r.sibling
                            }
                        }(e, t, r, n, 0 != (10256 & t.subtreeFlags))), 2048 & i && rQ(t.alternate, t);
                        break;
                    case 24:
                        rJ(e, t, r, n), 2048 & i && rG(t.alternate, t);
                        break;
                    default:
                        rJ(e, t, r, n)
                }
            }

            function rZ(e, t) {
                if (10256 & t.subtreeFlags)
                    for (t = t.child; null !== t;) {
                        var r = t,
                            n = r.flags;
                        switch (r.tag) {
                            case 22:
                                rZ(e, r), 2048 & n && rQ(r.alternate, r);
                                break;
                            case 24:
                                rZ(e, r), 2048 & n && rG(r.alternate, r);
                                break;
                            default:
                                rZ(e, r)
                        }
                        t = t.sibling
                    }
            }

            function rX(e) {
                if (e.subtreeFlags & lA)
                    for (e = e.child; null !== e;) rY(e), e = e.sibling
            }

            function rY(e) {
                switch (e.tag) {
                    case 26:
                        rX(e), e.flags & lA && (null !== e.memoizedState ? aK(lO, e.memoizedState, e.memoizedProps) : iU(e.type, e.memoizedProps));
                        break;
                    case 5:
                        rX(e), e.flags & lA && iU(e.type, e.memoizedProps);
                        break;
                    case 3:
                    case 4:
                        if (aj) {
                            var t = lO;
                            lO = aA(e.stateNode.containerInfo), rX(e), lO = t
                        } else rX(e);
                        break;
                    case 22:
                        null === e.memoizedState && (null !== (t = e.alternate) && null !== t.memoizedState ? (t = lA, lA = 0x1000000, rX(e), lA = t) : rX(e));
                        break;
                    default:
                        rX(e)
                }
            }

            function r0(e) {
                var t = e.alternate;
                if (null !== t && null !== (e = t.child)) {
                    t.child = null;
                    do t = e.sibling, e.sibling = null, e = t; while (null !== e)
                }
            }

            function r1(e) {
                var t = e.deletions;
                if (0 != (16 & e.flags)) {
                    if (null !== t)
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            lF = n, r4(n, e)
                        }
                    r0(e)
                }
                if (10256 & e.subtreeFlags)
                    for (e = e.child; null !== e;) r2(e), e = e.sibling
            }

            function r2(e) {
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                        r1(e), 2048 & e.flags && rR(9, e, e.return);
                        break;
                    case 3:
                    case 12:
                    default:
                        r1(e);
                        break;
                    case 22:
                        var t = e.stateNode;
                        null !== e.memoizedState && 4 & t._visibility && (null === e.return || 13 !== e.return.tag) ? (t._visibility &= -5, function e(t) {
                            var r = t.deletions;
                            if (0 != (16 & t.flags)) {
                                if (null !== r)
                                    for (var n = 0; n < r.length; n++) {
                                        var i = r[n];
                                        lF = i, r4(i, t)
                                    }
                                r0(t)
                            }
                            for (t = t.child; null !== t;) {
                                switch ((r = t).tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        rR(8, r, r.return), e(r);
                                        break;
                                    case 22:
                                        4 & (n = r.stateNode)._visibility && (n._visibility &= -5, e(r));
                                        break;
                                    default:
                                        e(r)
                                }
                                t = t.sibling
                            }
                        }(e)) : r1(e)
                }
            }

            function r4(e, t) {
                for (; null !== lF;) {
                    var r = lF;
                    switch (r.tag) {
                        case 0:
                        case 11:
                        case 15:
                            rR(8, r, t);
                            break;
                        case 23:
                        case 22:
                            if (null !== r.memoizedState && null !== r.memoizedState.cachePool) {
                                var n = r.memoizedState.cachePool.pool;
                                null != n && n.refCount++
                            }
                            break;
                        case 24:
                            rd(r.memoizedState.cache)
                    }
                    if (null !== (n = r.child)) n.return = r, lF = n;
                    else
                        for (r = e; null !== lF;) {
                            var i = (n = lF).sibling,
                                a = n.return;
                            if (! function e(t) {
                                    var r = t.alternate;
                                    null !== r && (t.alternate = null, e(r)), t.child = null, t.deletions = null, t.sibling = null, 5 === t.tag && null !== (r = t.stateNode) && iM(r), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null
                                }(n), n === r) {
                                lF = null;
                                break
                            }
                            if (null !== i) {
                                i.return = a, lF = i;
                                break
                            }
                            lF = a
                        }
                }
            }

            function r3(e) {
                var t = iP(e);
                if (null != t) {
                    if ("string" != typeof t.memoizedProps["data-testname"]) throw Error(i(364));
                    return t
                }
                if (null === (e = iG(e))) throw Error(i(362));
                return e.stateNode.current
            }

            function r6(e, t) {
                var r = e.tag;
                switch (t.$$typeof) {
                    case lH:
                        if (e.type === t.value) return !0;
                        break;
                    case lW:
                        e: {
                            for (t = t.value, e = [e, 0], r = 0; r < e.length;) {
                                var n = e[r++],
                                    a = n.tag,
                                    s = e[r++],
                                    l = t[s];
                                if (5 !== a && 26 !== a && 27 !== a || !iZ(n)) {
                                    for (; null != l && r6(n, l);) l = t[++s];
                                    if (s === t.length) {
                                        t = !0;
                                        break e
                                    }
                                    for (n = n.child; null !== n;) e.push(n, s), n = n.sibling
                                }
                            }
                            t = !1
                        }
                        return t;
                    case l$:
                        if ((5 === r || 26 === r || 27 === r) && iX(e.stateNode, t.value)) return !0;
                        break;
                    case lV:
                        if ((5 === r || 6 === r || 26 === r || 27 === r) && null !== (e = iK(e)) && 0 <= e.indexOf(t.value)) return !0;
                        break;
                    case lB:
                        if ((5 === r || 26 === r || 27 === r) && "string" == typeof(e = e.memoizedProps["data-testname"]) && e.toLowerCase() === t.value.toLowerCase()) return !0;
                        break;
                    default:
                        throw Error(i(365))
                }
                return !1
            }

            function r5(e) {
                switch (e.$$typeof) {
                    case lH:
                        return "<" + (s(e.value) || "Unknown") + ">";
                    case lW:
                        return ":has(" + (r5(e) || "") + ")";
                    case l$:
                        return '[role="' + e.value + '"]';
                    case lV:
                        return '"' + e.value + '"';
                    case lB:
                        return '[data-testname="' + e.value + '"]';
                    default:
                        throw Error(i(365))
                }
            }

            function r8(e, t) {
                var r = [];
                e = [e, 0];
                for (var n = 0; n < e.length;) {
                    var i = e[n++],
                        a = i.tag,
                        s = e[n++],
                        l = t[s];
                    if (5 !== a && 26 !== a && 27 !== a || !iZ(i)) {
                        for (; null != l && r6(i, l);) l = t[++s];
                        if (s === t.length) r.push(i);
                        else
                            for (i = i.child; null !== i;) e.push(i, s), i = i.sibling
                    }
                }
                return r
            }

            function r7(e, t) {
                if (!iQ) throw Error(i(363));
                e = r8(e = r3(e), t), t = [], e = Array.from(e);
                for (var r = 0; r < e.length;) {
                    var n = e[r++],
                        a = n.tag;
                    if (5 === a || 26 === a || 27 === a) iZ(n) || t.push(n.stateNode);
                    else
                        for (n = n.child; null !== n;) e.push(n), n = n.sibling
                }
                return t
            }

            function r9() {
                if (0 != (2 & lG) && 0 !== lZ) return lZ & -lZ;
                if (null !== is.T) {
                    var e = sq;
                    return 0 !== e ? e : ee()
                }
                return iF()
            }

            function ne() {
                0 === l7 && (l7 = 0 == (0x20000000 & lZ) || sD ? v() : 0x20000000);
                var e = s8.current;
                return null !== e && (e.flags |= 32), l7
            }

            function nt(e, t, r) {
                (e === lJ && 2 === lX || null !== e.cancelPendingCommit) && (no(e, 0), na(e, lZ, l7, !1)), k(e, r), (0 == (2 & lG) || e !== lJ) && (e === lJ && (0 == (2 & lG) && (l5 |= r), 4 === l3 && na(e, lZ, l7, !1)), G(e))
            }

            function nr(e, t, r) {
                if (0 != (6 & lG)) throw Error(i(327));
                for (var n = !r && 0 == (60 & t) && 0 == (t & e.expiredLanes) || b(e, t), a = n ? function(e, t) {
                        var r = lG;
                        lG |= 2;
                        var n = nd(),
                            a = nf();
                        lJ !== e || lZ !== t ? (oa = null, oi = sa() + 500, no(e, t)) : l1 = b(e, t);
                        e: for (;;) try {
                            if (0 !== lX && null !== lK) {
                                t = lK;
                                var s = lY;
                                t: switch (lX) {
                                    case 1:
                                        lX = 0, lY = null, ny(e, t, s, 1);
                                        break;
                                    case 2:
                                        if (eh(s)) {
                                            lX = 0, lY = null, ng(t);
                                            break
                                        }
                                        t = function() {
                                            2 === lX && lJ === e && (lX = 7), G(e)
                                        }, s.then(t, t);
                                        break e;
                                    case 3:
                                        lX = 7;
                                        break e;
                                    case 4:
                                        lX = 5;
                                        break e;
                                    case 7:
                                        eh(s) ? (lX = 0, lY = null, ng(t)) : (lX = 0, lY = null, ny(e, t, s, 7));
                                        break;
                                    case 5:
                                        var l = null;
                                        switch (lK.tag) {
                                            case 26:
                                                l = lK.memoizedState;
                                            case 5:
                                            case 27:
                                                var o = lK,
                                                    u = o.type,
                                                    c = o.pendingProps;
                                                if (l ? aJ(l) : iO(u, c)) {
                                                    lX = 0, lY = null;
                                                    var d = o.sibling;
                                                    if (null !== d) lK = d;
                                                    else {
                                                        var f = o.return;
                                                        null !== f ? (lK = f, nb(f)) : lK = null
                                                    }
                                                    break t
                                                }
                                        }
                                        lX = 0, lY = null, ny(e, t, s, 5);
                                        break;
                                    case 6:
                                        lX = 0, lY = null, ny(e, t, s, 6);
                                        break;
                                    case 8:
                                        nl(), l3 = 6;
                                        break e;
                                    default:
                                        throw Error(i(462))
                                }
                            }
                            for (; null !== lK && !sn();) nm(lK);
                            break
                        } catch (t) {
                            nu(e, t)
                        }
                        return (lI = lk = null, is.H = n, is.A = a, lG = r, null !== lK) ? 0 : (lJ = null, lZ = 0, W(), l3)
                    }(e, t) : np(e, t, !0), s = n;;) {
                    if (0 === a) l1 && !n && na(e, t, 0, !1);
                    else if (6 === a) na(e, t, 0, !l0);
                    else {
                        if (r = e.current.alternate, s && ! function(e) {
                                for (var t = e;;) {
                                    var r = t.tag;
                                    if ((0 === r || 11 === r || 15 === r) && 16384 & t.flags && null !== (r = t.updateQueue) && null !== (r = r.stores))
                                        for (var n = 0; n < r.length; n++) {
                                            var i = r[n],
                                                a = i.getSnapshot;
                                            i = i.value;
                                            try {
                                                if (!sp(a(), i)) return !1
                                            } catch (e) {
                                                return !1
                                            }
                                        }
                                    if (r = t.child, 16384 & t.subtreeFlags && null !== r) r.return = t, t = r;
                                    else {
                                        if (t === e) break;
                                        for (; null === t.sibling;) {
                                            if (null === t.return || t.return === e) return !0;
                                            t = t.return
                                        }
                                        t.sibling.return = t.return, t = t.sibling
                                    }
                                }
                                return !0
                            }(r)) {
                            a = np(e, t, !1), s = !1;
                            continue
                        }
                        if (2 === a) {
                            if (s = t, e.errorRecoveryDisabledLanes & s) var l = 0;
                            else l = 0 != (l = -0x20000001 & e.pendingLanes) ? l : 0x20000000 & l ? 0x20000000 : 0;
                            if (0 !== l) {
                                t = l;
                                e: {
                                    a = oe;
                                    var o = i_ && e.current.memoizedState.isDehydrated;
                                    if (o && (no(e, l).flags |= 256), 2 !== (l = np(e, l, !1))) {
                                        if (l2 && !o) {
                                            e.errorRecoveryDisabledLanes |= s, l5 |= s, a = 4;
                                            break e
                                        }
                                        s = ot, ot = a, null !== s && nn(s)
                                    }
                                    a = l
                                }
                                if (s = !1, 2 !== a) continue
                            }
                        }
                        if (1 === a) {
                            no(e, 0), na(e, t, 0, !0);
                            break
                        }
                        e: {
                            switch (n = e, a) {
                                case 0:
                                case 1:
                                    throw Error(i(345));
                                case 4:
                                    if ((4194176 & t) === t) {
                                        na(n, t, l7, !l0);
                                        break e
                                    }
                                    break;
                                case 2:
                                    ot = null;
                                    break;
                                case 3:
                                case 5:
                                    break;
                                default:
                                    throw Error(i(329))
                            }
                            if (n.finishedWork = r, n.finishedLanes = t, (0x3c00000 & t) === t && 10 < (s = on + 300 - sa())) {
                                if (na(n, t, l7, !l0), 0 !== y(n, 0)) break e;
                                n.timeoutHandle = iI(ni.bind(null, n, r, ot, oa, or, t, l7, l5, l9, l0, 2, -0, 0), s);
                                break e
                            }
                            ni(n, r, ot, oa, or, t, l7, l5, l9, l0, 0, -0, 0)
                        }
                    }
                    break
                }
                G(e)
            }

            function nn(e) {
                null === ot ? ot = e : ot.push.apply(ot, e)
            }

            function ni(e, t, r, n, i, a, s, l, o, u, c, d, f) {
                var h = t.subtreeFlags;
                if ((8192 & h || 0x1002000 == (0x1002000 & h)) && (iA(), rY(t), null !== (t = iH()))) {
                    e.cancelPendingCommit = t(nS.bind(null, e, r, n, i, s, l, o, 1, d, f)), na(e, a, s, !u);
                    return
                }
                nS(e, r, n, i, s, l, o, c, d, f)
            }

            function na(e, t, r, n) {
                t &= ~l8, t &= ~l5, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
                for (var i = t; 0 < i;) {
                    var a = 31 - a5(i),
                        s = 1 << a;
                    n[a] = -1, i &= ~s
                }
                0 !== r && I(e, r, t)
            }

            function ns() {
                return 0 != (6 & lG) || (J(0, !1), !1)
            }

            function nl() {
                if (null !== lK) {
                    if (0 === lX) var e = lK.return;
                    else e = lK, lI = lk = null, eO(e), s1 = null, s2 = 0, e = lK;
                    for (; null !== e;) rx(e.alternate, e), e = e.return;
                    lK = null
                }
            }

            function no(e, t) {
                e.finishedWork = null, e.finishedLanes = 0;
                var r = e.timeoutHandle;
                r !== ix && (e.timeoutHandle = ix, iE(r)), null !== (r = e.cancelPendingCommit) && (e.cancelPendingCommit = null, r()), nl(), lJ = e, lK = r = nL(e.current, null), lZ = t, lX = 0, lY = null, l0 = !1, l1 = b(e, t), l2 = !1, l9 = l7 = l8 = l5 = l6 = l3 = 0, ot = oe = null, or = !1, 0 != (8 & t) && (t |= 32 & t);
                var n = e.entangledLanes;
                if (0 !== n)
                    for (e = e.entanglements, n &= t; 0 < n;) {
                        var i = 31 - a5(n),
                            a = 1 << i;
                        t |= e[i], n &= ~a
                    }
                return l4 = t, W(), r
            }

            function nu(e, t) {
                lt = null, is.H = lf, t === sZ ? (t = eg(), lX = 3) : t === sX ? (t = eg(), lX = 4) : lX = t === lb ? 8 : null !== t && "object" == typeof t && "function" == typeof t.then ? 6 : 1, lY = t, null === lK && (l3 = 1, tM(e, R(t, e.current)))
            }

            function nc() {
                var e = s8.current;
                return null === e || ((4194176 & lZ) === lZ ? null === s7 : ((0x3c00000 & lZ) === lZ || 0 != (0x20000000 & lZ)) && e === s7)
            }

            function nd() {
                var e = is.H;
                return is.H = lf, null === e ? lf : e
            }

            function nf() {
                var e = is.A;
                return is.A = lU, e
            }

            function nh() {
                l3 = 4, l0 || (4194176 & lZ) !== lZ && null !== s8.current || (l1 = !0), 0 == (0x7ffffff & l6) && 0 == (0x7ffffff & l5) || null === lJ || na(lJ, lZ, l7, !1)
            }

            function np(e, t, r) {
                var n = lG;
                lG |= 2;
                var i = nd(),
                    a = nf();
                (lJ !== e || lZ !== t) && (oa = null, no(e, t)), t = !1;
                var s = l3;
                e: for (;;) try {
                    if (0 !== lX && null !== lK) {
                        var l = lK,
                            o = lY;
                        switch (lX) {
                            case 8:
                                nl(), s = 6;
                                break e;
                            case 3:
                            case 2:
                            case 6:
                                null === s8.current && (t = !0);
                                var u = lX;
                                if (lX = 0, lY = null, ny(e, l, o, u), r && l1) {
                                    s = 0;
                                    break e
                                }
                                break;
                            default:
                                u = lX, lX = 0, lY = null, ny(e, l, o, u)
                        }
                    }(function() {
                        for (; null !== lK;) nm(lK)
                    })(), s = l3;
                    break
                } catch (t) {
                    nu(e, t)
                }
                return t && e.shellSuspendCounter++, lI = lk = null, lG = n, is.H = i, is.A = a, null === lK && (lJ = null, lZ = 0, W()), s
            }

            function nm(e) {
                var t = t9(e.alternate, e, l4);
                e.memoizedProps = e.pendingProps, null === t ? nb(e) : lK = t
            }

            function ng(e) {
                var t = e,
                    r = t.alternate;
                switch (t.tag) {
                    case 15:
                    case 0:
                        t = tJ(r, t, t.pendingProps, t.type, void 0, lZ);
                        break;
                    case 11:
                        t = tJ(r, t, t.pendingProps, t.type.render, t.ref, lZ);
                        break;
                    case 5:
                        eO(t);
                    default:
                        rx(r, t), t = t9(r, t = lK = nT(t, l4), l4)
                }
                e.memoizedProps = e.pendingProps, null === t ? nb(e) : lK = t
            }

            function ny(e, t, r, n) {
                lI = lk = null, eO(t), s1 = null, s2 = 0;
                var a = t.return;
                try {
                    if (function(e, t, r, n, a) {
                            if (r.flags |= 32768, null !== n && "object" == typeof n && "function" == typeof n.then) {
                                if (null !== (t = r.alternate) && ri(t, r, a, !0), null !== (r = s8.current)) {
                                    switch (r.tag) {
                                        case 13:
                                            return null === s7 ? nh() : null === r.alternate && 0 === l3 && (l3 = 3), r.flags &= -257, r.flags |= 65536, r.lanes = a, n === sY ? r.flags |= 16384 : (null === (t = r.updateQueue) ? r.updateQueue = new Set([n]) : t.add(n), nx(e, n, a)), !1;
                                        case 22:
                                            return r.flags |= 65536, n === sY ? r.flags |= 16384 : (null === (t = r.updateQueue) ? (t = {
                                                transitions: null,
                                                markerInstances: null,
                                                retryQueue: new Set([n])
                                            }, r.updateQueue = t) : null === (r = t.retryQueue) ? t.retryQueue = new Set([n]) : r.add(n), nx(e, n, a)), !1
                                    }
                                    throw Error(i(435, r.tag))
                                }
                                return nx(e, n, a), nh(), !1
                            }
                            if (sD) return null !== (t = s8.current) ? (0 == (65536 & t.flags) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== sF && H(R(e = Error(i(422), {
                                cause: n
                            }), r))) : (n !== sF && H(R(t = Error(i(423), {
                                cause: n
                            }), r)), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = R(n, r), a = tO(e.stateNode, n, a), el(e, a), 4 !== l3 && (l3 = 2)), !1;
                            var s = Error(i(520), {
                                cause: n
                            });
                            if (s = R(s, r), null === oe ? oe = [s] : oe.push(s), 4 !== l3 && (l3 = 2), null === t) return !0;
                            n = R(n, r), r = t;
                            do {
                                switch (r.tag) {
                                    case 3:
                                        return r.flags |= 65536, e = a & -a, r.lanes |= e, e = tO(r.stateNode, n, e), el(r, e), !1;
                                    case 1:
                                        if (t = r.type, s = r.stateNode, 0 == (128 & r.flags) && ("function" == typeof t.getDerivedStateFromError || null !== s && "function" == typeof s.componentDidCatch && (null === os || !os.has(s)))) return r.flags |= 65536, a &= -a, r.lanes |= a, tU(a = tA(a), e, r, n), el(r, a), !1
                                }
                                r = r.return
                            } while (null !== r) return !1
                        }(e, a, t, r, lZ)) {
                        l3 = 1, tM(e, R(r, e.current)), lK = null;
                        return
                    }
                } catch (t) {
                    if (null !== a) throw lK = a, t;
                    l3 = 1, tM(e, R(r, e.current)), lK = null;
                    return
                }
                32768 & t.flags ? (sD || 1 === n ? e = !0 : l1 || 0 != (0x20000000 & lZ) ? e = !1 : (l0 = e = !0, (2 === n || 3 === n || 6 === n) && null !== (n = s8.current) && 13 === n.tag && (n.flags |= 16384)), nv(t, e)) : nb(t)
            }

            function nb(e) {
                var t = e;
                do {
                    if (0 != (32768 & t.flags)) return void nv(t, l0);
                    e = t.return;
                    var r = function(e, t, r) {
                        var n = t.pendingProps;
                        switch (D(t), t.tag) {
                            case 16:
                            case 15:
                            case 0:
                            case 11:
                            case 7:
                            case 8:
                            case 12:
                            case 9:
                            case 14:
                            case 1:
                                return rE(t), null;
                            case 3:
                                return r = t.stateNode, n = null, null !== e && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), rt(lR), T(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (null === e || null === e.child) && (A(t) ? rm(t) : null === e || e.memoizedState.isDehydrated && 0 == (256 & t.flags) || (t.flags |= 1024, null !== sL && (nn(sL), sL = null))), rb(e, t), rE(t), null;
                            case 26:
                                if (aj) {
                                    r = t.type;
                                    var a = t.memoizedState;
                                    return null === e ? (rm(t), null !== a ? (rE(t), rw(t, a)) : (rE(t), rS(t, r, n))) : a ? a !== e.memoizedState ? (rm(t), rE(t), rw(t, a)) : (rE(t), t.flags &= -0x1000001) : (iR ? e.memoizedProps !== n && rm(t) : rv(e, t, r, n), rE(t), rS(t, r, n)), null
                                }
                            case 27:
                                if (aZ) {
                                    if (N(t), r = sR.current, a = t.type, null !== e && null != t.stateNode) iR ? e.memoizedProps !== n && rm(t) : rv(e, t, a, n);
                                    else {
                                        if (!n) {
                                            if (null === t.stateNode) throw Error(i(166));
                                            return rE(t), null
                                        }
                                        e = sx.current, A(t) ? j(t, e) : (e = aX(a, n, r, e, !0), t.stateNode = e, rm(t))
                                    }
                                    return rE(t), null
                                }
                            case 5:
                                if (N(t), r = t.type, null !== e && null != t.stateNode) rv(e, t, r, n);
                                else {
                                    if (!n) {
                                        if (null === t.stateNode) throw Error(i(166));
                                        return rE(t), null
                                    }
                                    e = sx.current, A(t) ? j(t, e) : (ry(a = ib(r, n, sR.current, e, t), t, !1, !1), t.stateNode = a, iS(a, r, n, e) && rm(t))
                                }
                                return rE(t), rS(t, t.type, t.pendingProps), null;
                            case 6:
                                if (e && null != t.stateNode) r = e.memoizedProps, iR ? r !== n && rm(t) : iz && (r !== n ? (t.stateNode = ik(n, sR.current, sx.current, t), rm(t)) : t.stateNode = e.stateNode);
                                else {
                                    if ("string" != typeof n && null === t.stateNode) throw Error(i(166));
                                    if (e = sR.current, r = sx.current, A(t)) {
                                        if (!i_) throw Error(i(176));
                                        if (e = t.stateNode, r = t.memoizedProps, n = null, null !== (a = s_)) switch (a.tag) {
                                            case 27:
                                            case 5:
                                                n = a.memoizedProps
                                        }
                                        aR(e, r, t, n) || M(t)
                                    } else t.stateNode = ik(n, e, r, t)
                                }
                                return rE(t), null;
                            case 13:
                                if (n = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                                    if (a = A(t), null !== n && null !== n.dehydrated) {
                                        if (null === e) {
                                            if (!a) throw Error(i(318));
                                            if (!i_) throw Error(i(344));
                                            if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(i(317));
                                            az(a, t)
                                        } else U(), 0 == (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                        rE(t), a = !1
                                    } else null !== sL && (nn(sL), sL = null), a = !0;
                                    if (!a) {
                                        if (256 & t.flags) return ez(t), t;
                                        return ez(t), null
                                    }
                                }
                                if (ez(t), 0 != (128 & t.flags)) return t.lanes = r, t;
                                if (r = null !== n, e = null !== e && null !== e.memoizedState, r) {
                                    n = t.child, a = null, null !== n.alternate && null !== n.alternate.memoizedState && null !== n.alternate.memoizedState.cachePool && (a = n.alternate.memoizedState.cachePool.pool);
                                    var s = null;
                                    null !== n.memoizedState && null !== n.memoizedState.cachePool && (s = n.memoizedState.cachePool.pool), s !== a && (n.flags |= 2048)
                                }
                                return r !== e && r && (t.child.flags |= 8192), rk(t, t.updateQueue), rE(t), null;
                            case 4:
                                return T(), rb(e, t), null === e && iD(t.stateNode.containerInfo), rE(t), null;
                            case 10:
                                return rt(t.type), rE(t), null;
                            case 19:
                                if (p(s9), null === (a = t.memoizedState)) return rE(t), null;
                                if (n = 0 != (128 & t.flags), null === (s = a.rendering))
                                    if (n) rI(a, !1);
                                    else {
                                        if (0 !== l3 || null !== e && 0 != (128 & e.flags))
                                            for (e = t.child; null !== e;) {
                                                if (null !== (s = e_(e))) {
                                                    for (t.flags |= 128, rI(a, !1), e = s.updateQueue, t.updateQueue = e, rk(t, e), t.subtreeFlags = 0, e = r, r = t.child; null !== r;) nT(r, e), r = r.sibling;
                                                    return m(s9, 1 & s9.current | 2), t.child
                                                }
                                                e = e.sibling
                                            }
                                        null !== a.tail && sa() > oi && (t.flags |= 128, n = !0, rI(a, !1), t.lanes = 4194304)
                                    }
                                else {
                                    if (!n)
                                        if (null !== (e = e_(s))) {
                                            if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, rk(t, e), rI(a, !0), null === a.tail && "hidden" === a.tailMode && !s.alternate && !sD) return rE(t), null
                                        } else 2 * sa() - a.renderingStartTime > oi && 0x20000000 !== r && (t.flags |= 128, n = !0, rI(a, !1), t.lanes = 4194304);
                                    a.isBackwards ? (s.sibling = t.child, t.child = s) : (null !== (e = a.last) ? e.sibling = s : t.child = s, a.last = s)
                                }
                                if (null !== a.tail) return t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = sa(), t.sibling = null, e = s9.current, m(s9, n ? 1 & e | 2 : 1 & e), t;
                                return rE(t), null;
                            case 22:
                            case 23:
                                return ez(t), eE(), n = null !== t.memoizedState, null !== e ? null !== e.memoizedState !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? 0 != (0x20000000 & r) && 0 == (128 & t.flags) && (rE(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : rE(t), null !== (r = t.updateQueue) && rk(t, r.retryQueue), r = null, null !== e && null !== e.memoizedState && null !== e.memoizedState.cachePool && (r = e.memoizedState.cachePool.pool), n = null, null !== t.memoizedState && null !== t.memoizedState.cachePool && (n = t.memoizedState.cachePool.pool), n !== r && (t.flags |= 2048), null !== e && p(l_), null;
                            case 24:
                                return r = null, null !== e && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), rt(lR), rE(t), null;
                            case 25:
                                return null
                        }
                        throw Error(i(156, t.tag))
                    }(t.alternate, t, l4);
                    if (null !== r) {
                        lK = r;
                        return
                    }
                    if (null !== (t = t.sibling)) {
                        lK = t;
                        return
                    }
                    lK = t = e
                } while (null !== t) 0 === l3 && (l3 = 5)
            }

            function nv(e, t) {
                do {
                    var r = function(e, t) {
                        switch (D(t), t.tag) {
                            case 1:
                                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                            case 3:
                                return rt(lR), T(), 0 != (65536 & (e = t.flags)) && 0 == (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                            case 26:
                            case 27:
                            case 5:
                                return N(t), null;
                            case 13:
                                if (ez(t), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                    if (null === t.alternate) throw Error(i(340));
                                    U()
                                }
                                return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                            case 19:
                                return p(s9), null;
                            case 4:
                                return T(), null;
                            case 10:
                                return rt(t.type), null;
                            case 22:
                            case 23:
                                return ez(t), eE(), null !== e && p(l_), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                            case 24:
                                return rt(lR), null;
                            default:
                                return null
                        }
                    }(e.alternate, e);
                    if (null !== r) {
                        r.flags &= 32767, lK = r;
                        return
                    }
                    if (null !== (r = e.return) && (r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null), !t && null !== (e = e.sibling)) {
                        lK = e;
                        return
                    }
                    lK = e = r
                } while (null !== e) l3 = 6, lK = null
            }

            function nS(e, t, r, n, a, s, l, o, u, c) {
                var d = is.T,
                    f = iT();
                try {
                    iL(2), is.T = null,
                        function(e, t, r, n, a, s, l, o) {
                            do nk(); while (null !== oo) if (0 != (6 & lG)) throw Error(i(327));
                            var u, c, d = e.finishedWork;
                            if (n = e.finishedLanes, null !== d) {
                                if (e.finishedWork = null, e.finishedLanes = 0, d === e.current) throw Error(i(177));
                                e.callbackNode = null, e.callbackPriority = 0, e.cancelPendingCommit = null;
                                var f = d.lanes | d.childLanes;
                                ! function(e, t, r, n, i, a) {
                                    var s = e.pendingLanes;
                                    e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= r, e.entangledLanes &= r, e.errorRecoveryDisabledLanes &= r, e.shellSuspendCounter = 0;
                                    var l = e.entanglements,
                                        o = e.expirationTimes,
                                        u = e.hiddenUpdates;
                                    for (r = s & ~r; 0 < r;) {
                                        var c = 31 - a5(r),
                                            d = 1 << c;
                                        l[c] = 0, o[c] = -1;
                                        var f = u[c];
                                        if (null !== f)
                                            for (u[c] = null, c = 0; c < f.length; c++) {
                                                var h = f[c];
                                                null !== h && (h.lane &= -0x20000001)
                                            }
                                        r &= ~d
                                    }
                                    0 !== n && I(e, n, 0), 0 !== a && 0 === i && 0 !== e.tag && (e.suspendedLanes |= a & ~(s & ~t))
                                }(e, n, f |= sj, s, l, o), e === lJ && (lK = lJ = null, lZ = 0), 0 == (10256 & d.subtreeFlags) && 0 == (10256 & d.flags) || ol || (ol = !0, oc = f, od = r, u = so, c = function() {
                                    return nk(), null
                                }, st(u, c)), r = 0 != (15990 & d.flags), 0 != (15990 & d.subtreeFlags) || r ? (r = is.T, is.T = null, s = iT(), iL(2), l = lG, lG |= 4, function(e, t) {
                                    for (ig(e.containerInfo), lF = t; null !== lF;)
                                        if (t = (e = lF).child, 0 != (1028 & e.subtreeFlags) && null !== t) t.return = e, lF = t;
                                        else
                                            for (; null !== lF;) {
                                                var r = (e = lF).alternate;
                                                switch (t = e.flags, e.tag) {
                                                    case 0:
                                                    case 11:
                                                    case 15:
                                                    case 5:
                                                    case 26:
                                                    case 27:
                                                    case 6:
                                                    case 4:
                                                    case 17:
                                                        break;
                                                    case 1:
                                                        if (0 != (1024 & t) && null !== r) {
                                                            t = void 0;
                                                            var n = e,
                                                                a = r.memoizedProps;
                                                            r = r.memoizedState;
                                                            var s = n.stateNode;
                                                            try {
                                                                var l = tN(n.type, a, (n.elementType, n.type));
                                                                t = s.getSnapshotBeforeUpdate(l, r), s.__reactInternalSnapshotBeforeUpdate = t
                                                            } catch (e) {
                                                                nE(n, n.return, e)
                                                            }
                                                        }
                                                        break;
                                                    case 3:
                                                        0 != (1024 & t) && iR && aa(e.stateNode.containerInfo);
                                                        break;
                                                    default:
                                                        if (0 != (1024 & t)) throw Error(i(163))
                                                }
                                                if (null !== (t = e.sibling)) {
                                                    t.return = e.return, lF = t;
                                                    break
                                                }
                                                lF = e.return
                                            }
                                    l = lN, lN = !1
                                }(e, d), rB(d, e), iy(e.containerInfo), e.current = d, rO(e, d.alternate, d), si(), lG = l, iL(s), is.T = r) : e.current = d, ol ? (ol = !1, oo = e, ou = n) : nw(e, f), 0 === (f = e.pendingLanes) && (os = null);
                                var h = d.stateNode;
                                if (sh && "function" == typeof sh.onCommitFiberRoot) try {
                                    sh.onCommitFiberRoot(sf, h, void 0, 128 == (128 & h.current.flags))
                                } catch (e) {}
                                if (G(e), null !== t)
                                    for (a = e.onRecoverableError, d = 0; d < t.length; d++) a((f = t[d]).value, {
                                        componentStack: f.stack
                                    });
                                0 != (3 & ou) && nk(), f = e.pendingLanes, 0 != (4194218 & n) && 0 != (42 & f) ? e === oh ? of ++ : (of = 0, oh = e) : of = 0, J(0, !1)
                            }
                        }(e, t, r, n, f, a, s, l)
                } finally {
                    is.T = d, iL(f)
                }
            }

            function nw(e, t) {
                0 == (e.pooledCacheLanes &= t) && null != (t = e.pooledCache) && (e.pooledCache = null, rd(t))
            }

            function nk() {
                if (null !== oo) {
                    var e = oo,
                        t = oc;
                    oc = 0;
                    var r = x(ou),
                        n = 32 > r ? 32 : r;
                    r = is.T;
                    var a = iT();
                    try {
                        if (iL(n), is.T = null, null === oo) var s = !1;
                        else {
                            n = od, od = null;
                            var l = oo,
                                o = ou;
                            if (oo = null, ou = 0, 0 != (6 & lG)) throw Error(i(331));
                            var u = lG;
                            if (lG |= 4, r2(l.current), rK(l, l.current, o, n), lG = u, J(0, !1), sh && "function" == typeof sh.onPostCommitFiberRoot) try {
                                sh.onPostCommitFiberRoot(sf, l)
                            } catch (e) {}
                            s = !0
                        }
                        return s
                    } finally {
                        iL(a), is.T = r, nw(e, t)
                    }
                }
                return !1
            }

            function nI(e, t, r) {
                t = R(r, t), t = tO(e.stateNode, t, 2), null !== (e = ea(e, t, 2)) && (k(e, 2), G(e))
            }

            function nE(e, t, r) {
                if (3 === e.tag) nI(e, e, r);
                else
                    for (; null !== t;) {
                        if (3 === t.tag) {
                            nI(t, e, r);
                            break
                        }
                        if (1 === t.tag) {
                            var n = t.stateNode;
                            if ("function" == typeof t.type.getDerivedStateFromError || "function" == typeof n.componentDidCatch && (null === os || !os.has(n))) {
                                e = R(r, e), null !== (n = ea(t, r = tA(2), 2)) && (tU(r, n, t, e), k(n, 2), G(n));
                                break
                            }
                        }
                        t = t.return
                    }
            }

            function nx(e, t, r) {
                var n = e.pingCache;
                if (null === n) {
                    n = e.pingCache = new lQ;
                    var i = new Set;
                    n.set(t, i)
                } else void 0 === (i = n.get(t)) && (i = new Set, n.set(t, i));
                i.has(r) || (l2 = !0, i.add(r), e = nC.bind(null, e, t, r), t.then(e, e))
            }

            function nC(e, t, r) {
                var n = e.pingCache;
                null !== n && n.delete(t), e.pingedLanes |= e.suspendedLanes & r, e.warmLanes &= ~r, lJ === e && (lZ & r) === r && (4 === l3 || 3 === l3 && (0x3c00000 & lZ) === lZ && 300 > sa() - on ? 0 == (2 & lG) && no(e, 0) : l8 |= r, l9 === lZ && (l9 = 0)), G(e)
            }

            function nR(e, t) {
                0 === t && (t = S()), null !== (e = V(e, t)) && (k(e, t), G(e))
            }

            function nz(e) {
                var t = e.memoizedState,
                    r = 0;
                null !== t && (r = t.retryLane), nR(e, r)
            }

            function n_(e, t) {
                var r = 0;
                switch (e.tag) {
                    case 13:
                        var n = e.stateNode,
                            a = e.memoizedState;
                        null !== a && (r = a.retryLane);
                        break;
                    case 19:
                        n = e.stateNode;
                        break;
                    case 22:
                        n = e.stateNode._retryCache;
                        break;
                    default:
                        throw Error(i(314))
                }
                null !== n && n.delete(t), nR(e, r)
            }

            function nP(e, t, r, n) {
                this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
            }

            function nD(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }

            function nL(e, r) {
                var n = e.alternate;
                return null === n ? ((n = t(e.tag, r, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = r, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 0x1e00000 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, r = e.dependencies, n.dependencies = null === r ? null : {
                    lanes: r.lanes,
                    firstContext: r.firstContext
                }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n
            }

            function nT(e, t) {
                e.flags &= 0x1e00002;
                var r = e.alternate;
                return null === r ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type, e.dependencies = null === (t = r.dependencies) ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                }), e
            }

            function nF(e, r, n, a, s, l) {
                var o = 0;
                if (a = e, "function" == typeof e) nD(e) && (o = 1);
                else if ("string" == typeof e) o = aj && aZ ? aO(e, n, sx.current) ? 26 : a2(e) ? 27 : 5 : aj ? aO(e, n, sx.current) ? 26 : 5 : aZ && a2(e) ? 27 : 5;
                else e: switch (e) {
                    case nX:
                        return nN(n.children, s, l, r);
                    case nY:
                        o = 8, s |= 24;
                        break;
                    case n0:
                        return (e = t(12, n, r, 2 | s)).elementType = n0, e.lanes = l, e;
                    case n6:
                        return (e = t(13, n, r, s)).elementType = n6, e.lanes = l, e;
                    case n5:
                        return (e = t(19, n, r, s)).elementType = n5, e.lanes = l, e;
                    case n9:
                        return nM(n, s, l, r);
                    default:
                        if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                            case n1:
                            case n4:
                                o = 10;
                                break e;
                            case n2:
                                o = 9;
                                break e;
                            case n3:
                                o = 11;
                                break e;
                            case n8:
                                o = 14;
                                break e;
                            case n7:
                                o = 16, a = null;
                                break e
                        }
                        o = 29, n = Error(i(130, null === e ? "null" : typeof e, "")), a = null
                }
                return (r = t(o, n, r, s)).elementType = e, r.type = a, r.lanes = l, r
            }

            function nN(e, r, n, i) {
                return (e = t(7, e, i, r)).lanes = n, e
            }

            function nM(e, r, n, a) {
                (e = t(22, e, a, r)).elementType = n9, e.lanes = n;
                var s = {
                    _visibility: 1,
                    _pendingVisibility: 1,
                    _pendingMarkers: null,
                    _retryCache: null,
                    _transitions: null,
                    _current: null,
                    detach: function() {
                        var e = s._current;
                        if (null === e) throw Error(i(456));
                        if (0 == (2 & s._pendingVisibility)) {
                            var t = V(e, 2);
                            null !== t && (s._pendingVisibility |= 2, nt(t, e, 2))
                        }
                    },
                    attach: function() {
                        var e = s._current;
                        if (null === e) throw Error(i(456));
                        if (0 != (2 & s._pendingVisibility)) {
                            var t = V(e, 2);
                            null !== t && (s._pendingVisibility &= -3, nt(t, e, 2))
                        }
                    }
                };
                return e.stateNode = s, e
            }

            function nj(e, r, n) {
                return (e = t(6, e, null, r)).lanes = n, e
            }

            function nO(e, r, n) {
                return (r = t(4, null !== e.children ? e.children : [], e.key, r)).lanes = n, r.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                }, r
            }

            function nA(e, t, r, n, i, a, s, l) {
                this.tag = 1, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = ix, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = w(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = w(0), this.hiddenUpdates = w(null), this.identifierPrefix = n, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = l, this.incompleteTransitions = new Map
            }

            function nU(e, r, n, i, a, s, l, o, u, c, d, f) {
                return e = new nA(e, r, n, l, o, u, c, f), r = 1, !0 === s && (r |= 24), s = t(3, null, null, r), e.current = s, s.stateNode = e, r = rc(), r.refCount++, e.pooledCache = r, r.refCount++, s.memoizedState = {
                    element: i,
                    isDehydrated: n,
                    cache: r
                }, er(s), e
            }

            function nH(e) {
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" == typeof e.render) throw Error(i(188));
                    throw Error(i(268, e = Object.keys(e).join(",")))
                }
                return null === (e = null !== (e = f(t)) ? function e(t) {
                    var r = t.tag;
                    if (5 === r || 26 === r || 27 === r || 6 === r) return t;
                    for (t = t.child; null !== t;) {
                        if (null !== (r = e(t))) return r;
                        t = t.sibling
                    }
                    return null
                }(e) : null) ? null : ih(e.stateNode)
            }

            function nW(e, t, r, n, i, a) {
                i = i ? a6 : a6, null === n.context ? n.context = i : n.pendingContext = i, (n = ei(t)).payload = {
                    element: r
                }, null !== (a = void 0 === a ? null : a) && (n.callback = a), null !== (r = ea(e, n, t)) && (nt(r, e, t), es(r, e, t))
            }

            function n$(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var r = e.retryLane;
                    e.retryLane = 0 !== r && r < t ? r : t
                }
            }

            function nB(e, t) {
                n$(e, t), (e = e.alternate) && n$(e, t)
            }
            "use strict";
            var nV = {},
                nq = r("zd8w"),
                nQ = r("i8Tz"),
                nG = Object.assign,
                nJ = Symbol.for("react.element"),
                nK = Symbol.for("react.transitional.element"),
                nZ = Symbol.for("react.portal"),
                nX = Symbol.for("react.fragment"),
                nY = Symbol.for("react.strict_mode"),
                n0 = Symbol.for("react.profiler"),
                n1 = Symbol.for("react.provider"),
                n2 = Symbol.for("react.consumer"),
                n4 = Symbol.for("react.context"),
                n3 = Symbol.for("react.forward_ref"),
                n6 = Symbol.for("react.suspense"),
                n5 = Symbol.for("react.suspense_list"),
                n8 = Symbol.for("react.memo"),
                n7 = Symbol.for("react.lazy");
            Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
            var n9 = Symbol.for("react.offscreen");
            Symbol.for("react.legacy_hidden"), Symbol.for("react.tracing_marker");
            var ie, it, ir = Symbol.for("react.memo_cache_sentinel"),
                ii = Symbol.iterator,
                ia = Symbol.for("react.client.reference"),
                is = nq.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
                il = !1,
                io = Array.isArray,
                iu = e.rendererVersion,
                ic = e.rendererPackageName,
                id = e.extraDevToolsConfig,
                ih = e.getPublicInstance,
                ip = e.getRootHostContext,
                im = e.getChildHostContext,
                ig = e.prepareForCommit,
                iy = e.resetAfterCommit,
                ib = e.createInstance,
                iv = e.appendInitialChild,
                iS = e.finalizeInitialChildren,
                iw = e.shouldSetTextContent,
                ik = e.createTextInstance,
                iI = e.scheduleTimeout,
                iE = e.cancelTimeout,
                ix = e.noTimeout,
                iC = e.isPrimaryRenderer;
            e.warnsIfNotActing;
            var iR = e.supportsMutation,
                iz = e.supportsPersistence,
                i_ = e.supportsHydration,
                iP = e.getInstanceFromNode;
            e.beforeActiveInstanceBlur, e.afterActiveInstanceBlur;
            var iD = e.preparePortalMount;
            e.prepareScopeUpdate, e.getInstanceFromScope;
            var iL = e.setCurrentUpdatePriority,
                iT = e.getCurrentUpdatePriority,
                iF = e.resolveUpdatePriority;
            e.resolveEventType, e.resolveEventTimeStamp;
            var iN = e.shouldAttemptEagerTransition,
                iM = e.detachDeletedInstance;
            e.requestPostPaintCallback;
            var ij = e.maySuspendCommit,
                iO = e.preloadInstance,
                iA = e.startSuspendingCommit,
                iU = e.suspendInstance,
                iH = e.waitForCommitToBeReady,
                iW = e.NotPendingTransition,
                i$ = e.HostTransitionContext,
                iB = e.resetFormInstance;
            e.bindToConsole;
            var iV = e.supportsMicrotasks,
                iq = e.scheduleMicrotask,
                iQ = e.supportsTestSelectors,
                iG = e.findFiberRoot,
                iJ = e.getBoundingRect,
                iK = e.getTextContent,
                iZ = e.isHiddenSubtree,
                iX = e.matchAccessibilityRole,
                iY = e.setFocusIfFocusable,
                i0 = e.setupIntersectionObserver,
                i1 = e.appendChild,
                i2 = e.appendChildToContainer,
                i4 = e.commitTextUpdate,
                i3 = e.commitMount,
                i6 = e.commitUpdate,
                i5 = e.insertBefore,
                i8 = e.insertInContainerBefore,
                i7 = e.removeChild,
                i9 = e.removeChildFromContainer,
                ae = e.resetTextContent,
                at = e.hideInstance,
                ar = e.hideTextInstance,
                an = e.unhideInstance,
                ai = e.unhideTextInstance,
                aa = e.clearContainer,
                as = e.cloneInstance,
                al = e.createContainerChildSet,
                ao = e.appendChildToContainerChildSet,
                au = e.finalizeContainerChildren,
                ac = e.replaceContainerChildren,
                ad = e.cloneHiddenInstance,
                af = e.cloneHiddenTextInstance,
                ah = e.isSuspenseInstancePending,
                ap = e.isSuspenseInstanceFallback,
                am = e.getSuspenseInstanceFallbackErrorDetails,
                ag = e.registerSuspenseInstanceRetry,
                ay = e.canHydrateFormStateMarker,
                ab = e.isFormStateMarkerMatching,
                av = e.getNextHydratableSibling,
                aS = e.getFirstHydratableChild,
                aw = e.getFirstHydratableChildWithinContainer,
                ak = e.getFirstHydratableChildWithinSuspenseInstance,
                aI = e.canHydrateInstance,
                aE = e.canHydrateTextInstance,
                ax = e.canHydrateSuspenseInstance,
                aC = e.hydrateInstance,
                aR = e.hydrateTextInstance,
                az = e.hydrateSuspenseInstance,
                a_ = e.getNextHydratableInstanceAfterSuspenseInstance,
                aP = e.commitHydratedContainer,
                aD = e.commitHydratedSuspenseInstance,
                aL = e.clearSuspenseBoundary,
                aT = e.clearSuspenseBoundaryFromContainer,
                aF = e.shouldDeleteUnhydratedTailInstances;
            e.diffHydratedPropsForDevWarnings, e.diffHydratedTextForDevWarnings, e.describeHydratableInstanceForDevWarnings;
            var aN = e.validateHydratableInstance,
                aM = e.validateHydratableTextInstance,
                aj = e.supportsResources,
                aO = e.isHostHoistableType,
                aA = e.getHoistableRoot,
                aU = e.getResource,
                aH = e.acquireResource,
                aW = e.releaseResource,
                a$ = e.hydrateHoistable,
                aB = e.mountHoistable,
                aV = e.unmountHoistable,
                aq = e.createHoistableInstance,
                aQ = e.prepareToCommitHoistables,
                aG = e.mayResourceSuspendCommit,
                aJ = e.preloadResource,
                aK = e.suspendResource,
                aZ = e.supportsSingletons,
                aX = e.resolveSingletonInstance,
                aY = e.clearSingleton,
                a0 = e.acquireSingletonInstance,
                a1 = e.releaseSingletonInstance,
                a2 = e.isHostSingletonType,
                a4 = [],
                a3 = -1,
                a6 = {},
                a5 = Math.clz32 ? Math.clz32 : function(e) {
                    return 0 == (e >>>= 0) ? 32 : 31 - (a8(e) / a7 | 0) | 0
                },
                a8 = Math.log,
                a7 = Math.LN2,
                a9 = 128,
                se = 4194304,
                st = nQ.unstable_scheduleCallback,
                sr = nQ.unstable_cancelCallback,
                sn = nQ.unstable_shouldYield,
                si = nQ.unstable_requestPaint,
                sa = nQ.unstable_now,
                ss = nQ.unstable_ImmediatePriority,
                sl = nQ.unstable_UserBlockingPriority,
                so = nQ.unstable_NormalPriority,
                su = nQ.unstable_IdlePriority,
                sc = nQ.log,
                sd = nQ.unstable_setDisableYieldValue,
                sf = null,
                sh = null,
                sp = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                sm = new WeakMap,
                sg = [],
                sy = 0,
                sb = null,
                sv = 0,
                sS = [],
                sw = 0,
                sk = null,
                sI = 1,
                sE = "",
                sx = h(null),
                sC = h(null),
                sR = h(null),
                sz = h(null),
                s_ = null,
                sP = null,
                sD = !1,
                sL = null,
                sT = !1,
                sF = Error(i(519)),
                sN = [],
                sM = 0,
                sj = 0,
                sO = null,
                sA = null,
                sU = !1,
                sH = !1,
                sW = !1,
                s$ = 0,
                sB = null,
                sV = 0,
                sq = 0,
                sQ = null,
                sG = !1,
                sJ = !1,
                sK = Object.prototype.hasOwnProperty,
                sZ = Error(i(460)),
                sX = Error(i(474)),
                sY = {
                    then: function() {}
                },
                s0 = null,
                s1 = null,
                s2 = 0,
                s4 = ew(!0),
                s3 = ew(!1),
                s6 = h(null),
                s5 = h(0),
                s8 = h(null),
                s7 = null,
                s9 = h(0),
                le = 0,
                lt = null,
                lr = null,
                ln = null,
                li = !1,
                la = !1,
                ls = !1,
                ll = 0,
                lo = 0,
                lu = null,
                lc = 0,
                ld = function() {
                    return {
                        lastEffect: null,
                        events: null,
                        stores: null,
                        memoCache: null
                    }
                },
                lf = {
                    readContext: rl,
                    use: eW,
                    useCallback: eP,
                    useContext: eP,
                    useEffect: eP,
                    useImperativeHandle: eP,
                    useLayoutEffect: eP,
                    useInsertionEffect: eP,
                    useMemo: eP,
                    useReducer: eP,
                    useRef: eP,
                    useState: eP,
                    useDebugValue: eP,
                    useDeferredValue: eP,
                    useTransition: eP,
                    useSyncExternalStore: eP,
                    useId: eP
                };
            lf.useCacheRefresh = eP, lf.useMemoCache = eP, lf.useHostTransitionStatus = eP, lf.useFormState = eP, lf.useActionState = eP, lf.useOptimistic = eP;
            var lh = {
                readContext: rl,
                use: eW,
                useCallback: function(e, t) {
                    return eA().memoizedState = [e, void 0 === t ? null : t], e
                },
                useContext: rl,
                useEffect: to,
                useImperativeHandle: function(e, t, r) {
                    r = null != r ? r.concat([e]) : null, ts(4194308, 4, tf.bind(null, t, e), r)
                },
                useLayoutEffect: function(e, t) {
                    return ts(4194308, 4, e, t)
                },
                useInsertionEffect: function(e, t) {
                    ts(4, 2, e, t)
                },
                useMemo: function(e, t) {
                    var r = eA();
                    t = void 0 === t ? null : t;
                    var n = e();
                    if (ls) {
                        C(!0);
                        try {
                            e()
                        } finally {
                            C(!1)
                        }
                    }
                    return r.memoizedState = [n, t], n
                },
                useReducer: function(e, t, r) {
                    var n = eA();
                    if (void 0 !== r) {
                        var i = r(t);
                        if (ls) {
                            C(!0);
                            try {
                                r(t)
                            } finally {
                                C(!1)
                            }
                        }
                    } else i = t;
                    return n.memoizedState = n.baseState = i, n.queue = e = {
                        pending: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: i
                    }, e = e.dispatch = tx.bind(null, lt, e), [n.memoizedState, e]
                },
                useRef: function(e) {
                    return eA().memoizedState = {
                        current: e
                    }
                },
                useState: function(e) {
                    var t = (e = e0(e)).queue,
                        r = tC.bind(null, lt, t);
                    return t.dispatch = r, [e.memoizedState, r]
                },
                useDebugValue: tp,
                useDeferredValue: function(e, t) {
                    return ty(eA(), e, t)
                },
                useTransition: function() {
                    var e = e0(!1);
                    return e = tv.bind(null, lt, e.queue, !0, !1), eA().memoizedState = e, [!1, e]
                },
                useSyncExternalStore: function(e, t, r) {
                    var n = lt,
                        a = eA();
                    if (sD) {
                        if (void 0 === r) throw Error(i(407));
                        r = r()
                    } else {
                        if (r = t(), null === lJ) throw Error(i(349));
                        0 != (60 & lZ) || eJ(n, t, r)
                    }
                    a.memoizedState = r;
                    var s = {
                        value: r,
                        getSnapshot: t
                    };
                    return a.queue = s, to(eZ.bind(null, n, s, e), [e]), n.flags |= 2048, ti(9, eK.bind(null, n, s, r, t), {
                        destroy: void 0
                    }, null), r
                },
                useId: function() {
                    var e = eA(),
                        t = lJ.identifierPrefix;
                    if (sD) {
                        var r = sE,
                            n = sI;
                        t = ":" + t + "R" + (r = (n & ~(1 << 32 - a5(n) - 1)).toString(32) + r), 0 < (r = ll++) && (t += "H" + r.toString(32)), t += ":"
                    } else t = ":" + t + "r" + (r = lc++).toString(32) + ":";
                    return e.memoizedState = t
                },
                useCacheRefresh: function() {
                    return eA().memoizedState = tE.bind(null, lt)
                }
            };
            lh.useMemoCache = e$, lh.useHostTransitionStatus = tw, lh.useFormState = e9, lh.useActionState = e9, lh.useOptimistic = function(e) {
                var t = eA();
                t.memoizedState = t.baseState = e;
                var r = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = r, t = tz.bind(null, lt, !0, r), r.dispatch = t, [e, t]
            };
            var lp = {
                readContext: rl,
                use: eW,
                useCallback: tm,
                useContext: rl,
                useEffect: tu,
                useImperativeHandle: th,
                useInsertionEffect: tc,
                useLayoutEffect: td,
                useMemo: tg,
                useReducer: eV,
                useRef: ta,
                useState: function() {
                    return eV(eB)
                },
                useDebugValue: tp,
                useDeferredValue: function(e, t) {
                    return tb(eU(), lr.memoizedState, e, t)
                },
                useTransition: function() {
                    var e = eV(eB)[0],
                        t = eU().memoizedState;
                    return ["boolean" == typeof e ? e : eH(e), t]
                },
                useSyncExternalStore: eG,
                useId: tk
            };
            lp.useCacheRefresh = tI, lp.useMemoCache = e$, lp.useHostTransitionStatus = tw, lp.useFormState = te, lp.useActionState = te, lp.useOptimistic = function(e, t) {
                return e1(eU(), lr, e, t)
            };
            var lm = {
                readContext: rl,
                use: eW,
                useCallback: tm,
                useContext: rl,
                useEffect: tu,
                useImperativeHandle: th,
                useInsertionEffect: tc,
                useLayoutEffect: td,
                useMemo: tg,
                useReducer: eQ,
                useRef: ta,
                useState: function() {
                    return eQ(eB)
                },
                useDebugValue: tp,
                useDeferredValue: function(e, t) {
                    var r = eU();
                    return null === lr ? ty(r, e, t) : tb(r, lr.memoizedState, e, t)
                },
                useTransition: function() {
                    var e = eQ(eB)[0],
                        t = eU().memoizedState;
                    return ["boolean" == typeof e ? e : eH(e), t]
                },
                useSyncExternalStore: eG,
                useId: tk
            };
            lm.useCacheRefresh = tI, lm.useMemoCache = e$, lm.useHostTransitionStatus = tw, lm.useFormState = tn, lm.useActionState = tn, lm.useOptimistic = function(e, t) {
                var r = eU();
                return null !== lr ? e1(r, lr, e, t) : (r.baseState = e, [e, r.queue.dispatch])
            };
            var lg = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && c(e) === e
                    },
                    enqueueSetState: function(e, t, r) {
                        e = e._reactInternals;
                        var n = r9(),
                            i = ei(n);
                        i.payload = t, null != r && (i.callback = r), null !== (t = ea(e, i, n)) && (nt(t, e, n), es(t, e, n))
                    },
                    enqueueReplaceState: function(e, t, r) {
                        e = e._reactInternals;
                        var n = r9(),
                            i = ei(n);
                        i.tag = 1, i.payload = t, null != r && (i.callback = r), null !== (t = ea(e, i, n)) && (nt(t, e, n), es(t, e, n))
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var r = r9(),
                            n = ei(r);
                        n.tag = 2, null != t && (n.callback = t), null !== (t = ea(e, n, r)) && (nt(t, e, r), es(t, e, r))
                    }
                },
                ly = "function" == typeof reportError ? reportError : function(e) {
                    if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
                        var t = new window.ErrorEvent("error", {
                            bubbles: !0,
                            cancelable: !0,
                            message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
                            error: e
                        });
                        if (!window.dispatchEvent(t)) return
                    } else if ("object" == typeof process && "function" == typeof process.emit) return void process.emit("uncaughtException", e);
                    console.error(e)
                },
                lb = Error(i(461)),
                lv = !1,
                lS = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0
                },
                lw = h(null),
                lk = null,
                lI = null,
                lE = "u" > typeof AbortController ? AbortController : function() {
                    var e = [],
                        t = this.signal = {
                            aborted: !1,
                            addEventListener: function(t, r) {
                                e.push(r)
                            }
                        };
                    this.abort = function() {
                        t.aborted = !0, e.forEach(function(e) {
                            return e()
                        })
                    }
                },
                lx = nQ.unstable_scheduleCallback,
                lC = nQ.unstable_NormalPriority,
                lR = {
                    $$typeof: n4,
                    Consumer: null,
                    Provider: null,
                    _currentValue: null,
                    _currentValue2: null,
                    _threadCount: 0
                },
                lz = is.S;
            is.S = function(e, t) {
                "object" == typeof t && null !== t && "function" == typeof t.then && function(e) {
                    if (null === sB) {
                        var t = sB = [];
                        sV = 0, sq = ee(), sQ = {
                            status: "pending",
                            value: void 0,
                            then: function(e) {
                                t.push(e)
                            }
                        }
                    }
                    sV++, e.then(et, et)
                }(t), null !== lz && lz(e, t)
            };
            var l_ = h(null),
                lP = !1,
                lD = !1,
                lL = !1,
                lT = "function" == typeof WeakSet ? WeakSet : Set,
                lF = null,
                lN = !1,
                lM = null,
                lj = !1,
                lO = null,
                lA = 8192,
                lU = {
                    getCacheForType: function(e) {
                        var t = rl(lR),
                            r = t.data.get(e);
                        return void 0 === r && (r = e(), t.data.set(e, r)), r
                    }
                },
                lH = 0,
                lW = 1,
                l$ = 2,
                lB = 3,
                lV = 4;
            if ("function" == typeof Symbol && Symbol.for) {
                var lq = Symbol.for;
                lH = lq("selector.component"), lW = lq("selector.has_pseudo_class"), l$ = lq("selector.role"), lB = lq("selector.test_id"), lV = lq("selector.text")
            }
            var lQ = "function" == typeof WeakMap ? WeakMap : Map,
                lG = 0,
                lJ = null,
                lK = null,
                lZ = 0,
                lX = 0,
                lY = null,
                l0 = !1,
                l1 = !1,
                l2 = !1,
                l4 = 0,
                l3 = 0,
                l6 = 0,
                l5 = 0,
                l8 = 0,
                l7 = 0,
                l9 = 0,
                oe = null,
                ot = null,
                or = !1,
                on = 0,
                oi = 1 / 0,
                oa = null,
                os = null,
                ol = !1,
                oo = null,
                ou = 0,
                oc = 0,
                od = null,
                of = 0,
                oh = null;
            return nV.attemptContinuousHydration = function(e) {
                if (13 === e.tag) {
                    var t = V(e, 0x4000000);
                    null !== t && nt(t, e, 0x4000000), nB(e, 0x4000000)
                }
            }, nV.attemptHydrationAtCurrentPriority = function(e) {
                if (13 === e.tag) {
                    var t = r9(),
                        r = V(e, t);
                    null !== r && nt(r, e, t), nB(e, t)
                }
            }, nV.attemptSynchronousHydration = function(e) {
                switch (e.tag) {
                    case 3:
                        if ((e = e.stateNode).current.memoizedState.isDehydrated) {
                            var t = g(e.pendingLanes);
                            if (0 !== t) {
                                for (e.pendingLanes |= 2, e.entangledLanes |= 2; t;) {
                                    var r = 1 << 31 - a5(t);
                                    e.entanglements[1] |= r, t &= ~r
                                }
                                G(e), 0 == (6 & lG) && (oi = sa() + 500, J(0, !1))
                            }
                        }
                        break;
                    case 13:
                        null !== (t = V(e, 2)) && nt(t, e, 2), ns(), nB(e, 2)
                }
            }, nV.batchedUpdates = function(e, t) {
                return e(t)
            }, nV.createComponentSelector = function(e) {
                return {
                    $$typeof: lH,
                    value: e
                }
            }, nV.createContainer = function(e, t, r, n, i, a, s, l, o, u) {
                return nU(e, t, !1, null, r, n, a, s, l, o, u, null)
            }, nV.createHasPseudoClassSelector = function(e) {
                return {
                    $$typeof: lW,
                    value: e
                }
            }, nV.createHydrationContainer = function(e, t, r, n, i, a, s, l, o, u, c, d, f) {
                return (e = nU(r, n, !0, e, i, a, l, o, u, c, d, f)).context = a6, r = e.current, (i = ei(n = r9())).callback = null != t ? t : null, ea(r, i, n), e.current.lanes = n, k(e, n), G(e), e
            }, nV.createPortal = function(e, t, r) {
                var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: nZ,
                    key: null == n ? null : "" + n,
                    children: e,
                    containerInfo: t,
                    implementation: r
                }
            }, nV.createRoleSelector = function(e) {
                return {
                    $$typeof: l$,
                    value: e
                }
            }, nV.createTestNameSelector = function(e) {
                return {
                    $$typeof: lB,
                    value: e
                }
            }, nV.createTextSelector = function(e) {
                return {
                    $$typeof: lV,
                    value: e
                }
            }, nV.defaultOnCaughtError = function(e) {
                console.error(e)
            }, nV.defaultOnRecoverableError = function(e) {
                ly(e)
            }, nV.defaultOnUncaughtError = function(e) {
                ly(e)
            }, nV.deferredUpdates = function(e) {
                var t = is.T,
                    r = iT();
                try {
                    return iL(32), is.T = null, e()
                } finally {
                    iL(r), is.T = t
                }
            }, nV.discreteUpdates = function(e, t, r, n, i) {
                var a = is.T,
                    s = iT();
                try {
                    return iL(2), is.T = null, e(t, r, n, i)
                } finally {
                    iL(s), is.T = a, 0 === lG && (oi = sa() + 500)
                }
            }, nV.findAllNodes = r7, nV.findBoundingRects = function(e, t) {
                if (!iQ) throw Error(i(363));
                t = r7(e, t), e = [];
                for (var r = 0; r < t.length; r++) e.push(iJ(t[r]));
                for (t = e.length - 1; 0 < t; t--) {
                    r = e[t];
                    for (var n = r.x, a = n + r.width, s = r.y, l = s + r.height, o = t - 1; 0 <= o; o--)
                        if (t !== o) {
                            var u = e[o],
                                c = u.x,
                                d = c + u.width,
                                f = u.y,
                                h = f + u.height;
                            if (n >= c && s >= f && a <= d && l <= h) {
                                e.splice(t, 1);
                                break
                            }
                            if (n !== c || r.width !== u.width || h < s || f > l) {
                                if (!(s !== f || r.height !== u.height || d < n || c > a)) {
                                    c > n && (u.width += c - n, u.x = n), d < a && (u.width = a - c), e.splice(t, 1);
                                    break
                                }
                            } else {
                                f > s && (u.height += f - s, u.y = s), h < l && (u.height = l - f), e.splice(t, 1);
                                break
                            }
                        }
                }
                return e
            }, nV.findHostInstance = nH, nV.findHostInstanceWithNoPortals = function(e) {
                return null === (e = null !== (e = f(e)) ? function e(t) {
                    var r = t.tag;
                    if (5 === r || 26 === r || 27 === r || 6 === r) return t;
                    for (t = t.child; null !== t;) {
                        if (4 !== t.tag && null !== (r = e(t))) return r;
                        t = t.sibling
                    }
                    return null
                }(e) : null) ? null : ih(e.stateNode)
            }, nV.findHostInstanceWithWarning = function(e) {
                return nH(e)
            }, nV.flushPassiveEffects = nk, nV.flushSyncFromReconciler = function(e) {
                var t = lG;
                lG |= 1;
                var r = is.T,
                    n = iT();
                try {
                    if (iL(2), is.T = null, e) return e()
                } finally {
                    iL(n), is.T = r, 0 == (6 & (lG = t)) && J(0, !1)
                }
            }, nV.flushSyncWork = ns, nV.focusWithin = function(e, t) {
                if (!iQ) throw Error(i(363));
                for (t = Array.from(t = r8(e = r3(e), t)), e = 0; e < t.length;) {
                    var r = t[e++],
                        n = r.tag;
                    if (!iZ(r)) {
                        if ((5 === n || 26 === n || 27 === n) && iY(r.stateNode)) return !0;
                        for (r = r.child; null !== r;) t.push(r), r = r.sibling
                    }
                }
                return !1
            }, nV.getFindAllNodesFailureDescription = function(e, t) {
                if (!iQ) throw Error(i(363));
                var r = 0,
                    n = [];
                e = [r3(e), 0];
                for (var a = 0; a < e.length;) {
                    var s = e[a++],
                        l = s.tag,
                        o = e[a++],
                        u = t[o];
                    if ((5 !== l && 26 !== l && 27 !== l || !iZ(s)) && (r6(s, u) && (n.push(r5(u)), ++o > r && (r = o)), o < t.length))
                        for (s = s.child; null !== s;) e.push(s, o), s = s.sibling
                }
                if (r < t.length) {
                    for (e = []; r < t.length; r++) e.push(r5(t[r]));
                    return "findAllNodes was able to match part of the selector:\n  " + n.join(" > ") + "\n\nNo matching component was found for:\n  " + e.join(" > ")
                }
                return null
            }, nV.getPublicRootInstance = function(e) {
                if (!(e = e.current).child) return null;
                switch (e.child.tag) {
                    case 27:
                    case 5:
                        return ih(e.child.stateNode);
                    default:
                        return e.child.stateNode
                }
            }, nV.injectIntoDevTools = function() {
                var e = {
                    bundleType: 0,
                    version: iu,
                    rendererPackageName: ic,
                    currentDispatcherRef: is,
                    findFiberByHostInstance: iP,
                    reconcilerVersion: "19.0.0"
                };
                if (null !== id && (e.rendererConfig = id), "u" < typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) e = !1;
                else {
                    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (t.isDisabled || !t.supportsFiber) e = !0;
                    else {
                        try {
                            sf = t.inject(e), sh = t
                        } catch (e) {}
                        e = !!t.checkDCE
                    }
                }
                return e
            }, nV.isAlreadyRendering = function() {
                return !1
            }, nV.observeVisibleRects = function(e, t, r, n) {
                if (!iQ) throw Error(i(363));
                var a = i0(e = r7(e, t), r, n).disconnect;
                return {
                    disconnect: function() {
                        a()
                    }
                }
            }, nV.shouldError = function() {
                return null
            }, nV.shouldSuspend = function() {
                return !1
            }, nV.startHostTransition = function(e, t, r, a) {
                if (5 !== e.tag) throw Error(i(476));
                var s = tS(e).queue;
                tv(e, s, t, iW, null === r ? n : function() {
                    var t = tS(e).next.queue;
                    return tR(e, t, {}, r9()), r(a)
                })
            }, nV.updateContainer = function(e, t, r, n) {
                var i = t.current,
                    a = r9();
                return nW(i, a, e, t, r, n), a
            }, nV.updateContainerSync = function(e, t, r, n) {
                return 0 === t.tag && nk(), nW(t.current, 2, e, t, r, n), 2
            }, nV
        }, e.exports.default = e.exports, Object.defineProperty(e.exports, "__esModule", {
            value: !0
        })
    }),
    ynHS: (function(e, t, r) {
        e.exports = r("hF7w")
    }),
    RXkO: (function(e, t, r) {
        var n = r("M2mI");
        r.d(t, {
            a: () => n.a
        })
    }),
    zc1D: (function(e, t, r) {
        r.d(t, {
            a: () => ez,
            b: () => d.a,
            c: () => b.a,
            d: () => eK,
            e: () => eh.a,
            f: () => eh.b,
            g: () => eh.c,
            h: () => eh.d,
            i: () => eh.e,
            j: () => N,
            k: () => Q,
            l: () => x,
            m: () => b.c,
            n: () => eJ,
            o: () => d.c,
            p: () => eD,
            q: () => d.d
        });
        var n = r("zd8w"),
            i = r("XY2x"),
            a = r("SHi6");
        let s = console,
            l = 0;
        class o {
            prefix = `direct_dictation_${++l}`;
            nextId = 0;
            disposed = !1;
            sessions = new Map;
            subscribeAudioLevels = (e, t) => this.sessions.get(e)?.levels.subscribe(t) ?? (() => {});
            createSession(e, t, r) {
                let n;
                var l = this;
                if (this.disposed) throw Error("Dictation host is disposed");
                let o = `${this.prefix}:${++this.nextId}`,
                    u = new i.a,
                    c = "created",
                    d = !1,
                    f = !0 === t.audioLevels && !0 === e.supportsAudioLevels,
                    h = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        c = "disposed", l.sessions.delete(o);
                        let t = n;
                        n = void 0, u.dispose();
                        try {
                            e && t?.cancel()
                        } finally {
                            try {
                                t?.dispose()
                            } catch {
                                s.warn("DIL dictation host disposal failed")
                            }
                        }
                    };
                this.sessions.set(o, {
                    levels: u,
                    dispose: h
                });
                try {
                    n = e.createSession(t, e => {
                        if ("disposed" !== c) {
                            if (e.kind === a.a.AudioLevel) {
                                if (!f || "recording" !== c) return;
                                let t = (0, a.d)(e);
                                void 0 === t ? (d || s.warn("Invalid DIL dictation audio level"), d = !0) : u.publish(t);
                                return
                            }
                            if (e.kind === a.a.Done || e.kind === a.a.Error || e.kind === a.a.Cancelled) h();
                            else if (e.kind === a.a.Stopping && (c = "stopped", u.publish(null), "disposed" === c)) return;
                            r(e)
                        }
                    }), "disposed" === c && h()
                } catch (e) {
                    throw h(), e
                }
                return {
                    sessionId: o,
                    start: () => {
                        "created" === c && (c = "recording", n?.start())
                    },
                    stop: () => {
                        ("created" === c || "recording" === c) && (c = "stopped", u.publish(null), "disposed" !== c && n?.stop())
                    },
                    cancel: () => {
                        "disposed" !== c && h(!0)
                    },
                    dispose: h
                }
            }
            dispose() {
                for (let e of (this.disposed = !0, [...this.sessions.values()])) e.dispose()
            }
        }
        class u {
            data;
            listeners = new Set;
            constructor(e) {
                this.data = {
                    appData: {},
                    constants: {},
                    theme: "light",
                    activeBreakpoints: [],
                    isMobile: !1,
                    ...e
                }
            }
            useAppData = e => this.useData(t => e ? e(t.appData) : t.appData);
            useConstants = e => this.useData(t => e ? e(t.constants) : t.constants);
            useTheme = () => {
                let e = this.useData(e => e.theme);
                return {
                    isDark: "dark" === e,
                    isLight: "light" === e,
                    theme: e
                }
            };
            useBreakpoint = e => this.useData(t => t.activeBreakpoints.includes(e));
            useIsMobile = () => this.useData(e => !0 === e.isMobile);
            useData = e => {
                let t = n.useMemo(() => {
                    let t, r, n = !1;
                    return () => {
                        let i = this.getSnapshot();
                        return n && Object.is(t, i) ? r : (n = !0, t = i, r = e ? e(i) : i)
                    }
                }, [e]);
                return n.useSyncExternalStore(this.subscribe, t, t)
            };
            getSnapshot = () => this.data;
            setData(e) {
                if (c(this.data.appData, e.appData) && c(this.data.constants, e.constants) && c(this.data.activeBreakpoints, e.activeBreakpoints) && this.data.theme === e.theme && (this.data.isMobile ?? !1) === (e.isMobile ?? !1)) return !1;
                for (let t of (this.data = e, this.listeners)) t();
                return !0
            }
            subscribe = e => (this.listeners.add(e), () => {
                this.listeners.delete(e)
            })
        }

        function c(e, t) {
            if (Object.is(e, t)) return !0;
            if (Array.isArray(e) && Array.isArray(t)) {
                if (e.length !== t.length) return !1;
                for (let r = 0; r < e.length; r++)
                    if (!Object.is(e[r], t[r])) return !1;
                return !0
            }
            let r = Object.keys(e),
                n = Object.keys(t);
            if (r.length !== n.length) return !1;
            for (let n of r)
                if (!Object.hasOwn(t, n) || !Object.is(e[n], t[n])) return !1;
            return !0
        }
        var d = r("tVuk");
        let f = n.createContext(void 0);

        function h(e, t, r) {
            let i, a, s;
            if (e) try {
                let n = e.getItem(t);
                null !== n && (i = (0, d.d)(JSON.parse(n), r) ?? void 0)
            } catch {}
            let l = {
                    revision: 0,
                    state: i
                },
                o = !1,
                u = new Map,
                c = new Map,
                h = 0;
            return {
                commitStateSnapshot() {
                    if (o && l.state && e && (o = !1, void 0 === r || !1 !== e.persistInitialWidgetState)) try {
                        e.setItem(t, l.state.serialized)
                    } catch {}
                },
                setStateSnapshot(t) {
                    if (!e) return !1;
                    let n = void 0 === t ? void 0 : (0, d.d)(t, r);
                    return null !== n && n?.serialized !== l.state?.serialized && (l = {
                        revision: l.revision + 1,
                        state: n
                    }, !0)
                },
                useState: e ? (i, s) => {
                    let p = n.useContext(f),
                        m = l;
                    if (void 0 === p) throw Error("DIL state is not available outside its runner");
                    let g = n.useId(),
                        y = s?.key;
                    if (void 0 !== y && ("string" != typeof y || 0 === y.length)) throw Error("DIL state keys must be nonempty strings");
                    let b = a?.nextStateSlot;
                    a && (a.nextStateSlot += 1);
                    let v = a ? `${y??b}\0${typeof a.key}:${String(a.key)}` : g,
                        S = u.get(v);
                    if (void 0 === S) {
                        if (void 0 === y)
                            do S = String(h), h += 1; while (c.has(S))
                        else {
                            S = y;
                            let e = a?.siblingOrdinal ?? 1;
                            for (e > 1 && (S = `${y}:${e}`); c.has(S);) e += 1, S = `${y}:${e}`
                        }
                        u.set(v, S), c.set(S, v)
                    }
                    let w = void 0 !== a;
                    n.useLayoutEffect(() => {
                        if (void 0 !== S && !w) return () => {
                            c.get(S) === v && c.delete(S), u.delete(v)
                        }
                    }, [w, v, S]);
                    let k = n.useRef(void 0),
                        [I, E] = n.useState(() => {
                            let t = "function" == typeof i ? i() : i;
                            k.current = {
                                value: t
                            };
                            let n = void 0 !== S && void 0 !== l.state && Object.prototype.hasOwnProperty.call(l.state.state, S) ? l.state.state[S] : t;
                            if (void 0 !== S && e && !Object.prototype.hasOwnProperty.call(l.state?.state ?? {}, S)) {
                                let e = (0, d.d)({
                                    ...l.state?.state,
                                    [S]: n
                                }, r);
                                e && (l = {
                                    ...l,
                                    state: e
                                }, o = !0)
                            }
                            return n
                        }),
                        x = n.useRef(I),
                        C = n.useRef(m.revision);
                    if (C.current !== m.revision && (C.current = m.revision, void 0 !== S)) {
                        let e = void 0 !== m.state && Object.prototype.hasOwnProperty.call(m.state.state, S) ? m.state.state[S] : k.current?.value;
                        Object.is(x.current, e) || (x.current = e, E(e))
                    }
                    return [I, n.useCallback(n => {
                        let i = "function" == typeof n ? n(x.current) : n;
                        if (Object.is(x.current, i) || (x.current = i, E(i), void 0 === S || !e)) return;
                        let a = l.state?.state ?? {},
                            s = (0, d.d)({
                                ...a,
                                [S]: i
                            }, r);
                        if (!s) {
                            if (!Object.prototype.hasOwnProperty.call(a, S)) return;
                            let e = {
                                ...a
                            };
                            if (delete e[S], !(s = (0, d.d)(e, r))) return
                        }
                        if (s.serialized !== l.state?.serialized) {
                            l = {
                                ...l,
                                state: s
                            };
                            try {
                                e.setItem(t, s.serialized)
                            } catch {}
                        }
                    }, [e, S])]
                } : n.useState,
                withComponentIdentity(e, t, r) {
                    let n = a;
                    a = {
                        key: e,
                        nextStateSlot: 0,
                        siblingOrdinal: t
                    };
                    try {
                        return r()
                    } finally {
                        a = n
                    }
                },
                wrap(e) {
                    let t = n.isValidElement(e) ? {
                        key: e.key,
                        type: e.type
                    } : void 0;
                    return void 0 !== s && (void 0 === t || s.key !== t.key || s.type !== t.type) && (u.clear(), c.clear(), h = 0), s = t, n.createElement(n.Fragment, null, e)
                }
            }
        }
        var p = r("hWgA");
        class m {
            source;
            service;
            canRequest;
            logging;
            session;
            listeners = new Set;
            snapshot;
            constructor(e, t, r) {
                this.source = e, this.service = t, this.canRequest = r, this.snapshot = Object.freeze({
                    ...p.d,
                    play: this.play,
                    stop: this.stop
                })
            }
            setLogging(e) {
                this.logging = void 0;
                try {
                    this.logging = {
                        play_requested: (0, p.a)(e?.play_requested),
                        stop_requested: (0, p.a)(e?.stop_requested)
                    }
                } catch {}
            }
            getSnapshot = () => this.snapshot;
            subscribe = e => (this.listeners.add(e), () => {
                this.listeners.delete(e)
            });
            mount = () => {
                let e = !0;
                if (this.source && this.service) try {
                    this.session = this.service.createSession(this.source, t => {
                        e && this.publish(t)
                    })
                } catch {
                    e = !1, this.publish(p.d)
                }
                return () => {
                    e = !1;
                    let t = this.session;
                    this.session = void 0, t?.dispose(), this.publish(p.d)
                }
            };
            publish(e) {
                let t = (0, p.c)(e);
                for (let e of (t.error && Object.freeze(t.error), this.snapshot = Object.freeze({
                        ...t,
                        play: this.play,
                        stop: this.stop
                    }), this.listeners)) e()
            }
            play = () => {
                this.session && this.snapshot.available && "idle" === this.snapshot.status && this.canRequest() && this.session.play(this.logging?.play_requested)
            };
            stop = () => {
                let e = this.logging?.stop_requested;
                this.session?.stop(e && this.snapshot.available && this.canRequest() ? e : void 0)
            }
        }
        var g = r("x2wW"),
            y = r("hokT"),
            b = r("ekVC");
        y.b.Idle, y.b.Loading, y.b.Playing, y.a.Play, y.a.Request, y.a.Response, y.a.Streaming;
        let v = Symbol.for("oai.dil.element"),
            S = Symbol.for("oai.dil.fragment");

        function w(e, t) {
            for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
            let a = {
                children: n,
                props: t,
                type: e
            };
            return Object.defineProperty(a, v, {
                value: !0
            }), a
        }

        function k(e) {
            return null != e && "object" == typeof e && !0 === e[v]
        }
        let I = Symbol("DilMessenger");

        function E(e) {
            if (!e || "object" != typeof e) return null;
            let t = e[I];
            return "function" == typeof t ? t() : null
        }

        function x(e) {
            return !!e && "object" == typeof e && !Array.isArray(e) && "html-view" === e.__dilMessenger
        }
        let C = Symbol("oai.dil.hostRef"),
            R = ["AggregateError", "Array", "ArrayBuffer", "Atomics", "BigInt", "BigInt64Array", "BigUint64Array", "Boolean", "DataView", "Date", "Error", "EvalError", "FinalizationRegistry", "Float32Array", "Float64Array", "Infinity", "Int16Array", "Int32Array", "Int8Array", "Intl", "Iterator", "JSON", "Map", "Math", "NaN", "Number", "Object", "Promise", "Proxy", "RangeError", "ReferenceError", "Reflect", "RegExp", "Set", "String", "Symbol", "SyntaxError", "TypeError", "URIError", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "WeakMap", "WeakRef", "WeakSet", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "isFinite", "isNaN", "parseFloat", "parseInt", "undefined"],
            z = new Set(R);
        class _ {
            disposed = !1;
            hostFunctionIndex = 0;
            hostMessengerIndex = 0;
            hostPromiseIndex = 0;
            hostRefIndex = 0;
            hostFunctionIds = new WeakMap;
            hostFunctions = new Map;
            hostFunctionWrappers = new WeakMap;
            hostMessengers = new Map;
            hostMessengerWrappers = new WeakMap;
            hostObjectIdentityTokens = new WeakMap;
            hostPromises = new Map;
            hostRefHandles = new WeakMap;
            hostRefs = new Map;
            hostRefWrappers = new WeakMap;
            cspNonce;
            iframe;
            realmScriptBridge = {
                records: new Map
            };
            realmScriptBridgeName;
            realmScriptIndex = 0;
            sandboxFunctionWrappers = new WeakMap;
            sandboxMessengerHosts = new WeakMap;
            sandboxObjectIdentityTokens = new WeakMap;
            sandboxThis;
            bridge = {
                awaitHostPromise: this.protectHostOperation((e, t, r) => {
                    let n = this.hostPromises.get(e);
                    (this.hostPromises.delete(e), n) ? Promise.resolve(n).then(e => {
                        try {
                            t(this.toSandbox(e))
                        } catch (e) {
                            r(this.toSandboxError(e))
                        }
                    }, e => r(this.toSandboxError(e))): r(this.toSandboxError(Error(`Unknown DIL promise "${e}"`)))
                }),
                callHostFunction: this.protectHostOperation((e, t) => this.callHostFunction(e, t)),
                callMessengerCommand: this.protectHostOperation((e, t, r) => this.callMessengerCommand(e, t, r)),
                callMessengerEmit: this.protectHostOperation((e, t, r) => {
                    this.callMessengerEmit(e, t, r)
                }),
                callMessengerOn: this.protectHostOperation((e, t, r) => this.callMessengerOn(e, t, r)),
                getHostRef: this.protectHostOperation(e => this.getHostRef(e)),
                setHostRef: this.protectHostOperation((e, t) => {
                    this.setHostRef(e, t)
                })
            };
            createRealmArray;
            createRealmError;
            createRealmHostFunction;
            createRealmJsxRuntime;
            createRealmMessenger;
            createRealmObject;
            createRealmPromise;
            createRealmRef;
            freezeRealmObject;
            realmSymbolFor;
            window;
            constructor(e, t, r) {
                this.iframe = e, this.window = t, this.cspNonce = r, this.realmScriptBridgeName = `__oaiDilSandboxScriptBridge_${r}`, Object.defineProperty(t, this.realmScriptBridgeName, {
                    configurable: !1,
                    enumerable: !1,
                    value: this.realmScriptBridge,
                    writable: !1
                }), this.hardenRealm(), this.createRealmArray = this.createRealmFunction("items", "return Array.from(items);"), this.createRealmError = this.createRealmFunction("name", "message", `
        switch (name) {
          case "AggregateError": return new AggregateError([], message);
          case "EvalError": return new EvalError(message);
          case "RangeError": return new RangeError(message);
          case "ReferenceError": return new ReferenceError(message);
          case "SyntaxError": return new SyntaxError(message);
          case "TypeError": return new TypeError(message);
          case "URIError": return new URIError(message);
          default: return new Error(message);
        }
      `), this.createRealmHostFunction = this.createRealmFunction("bridge", "id", `
        return function dilHostFunction() {
          "use strict";
          const args = Array.prototype.slice.call(arguments);
          return bridge.callHostFunction(id, args);
        };
      `), this.createRealmJsxRuntime = this.createRealmFunction(`
      const runtime = {
        Fragment: Symbol.for("oai.dil.fragment"),
        jsx: function jsx(type, props) {
          "use strict";
          const children = Array.prototype.slice.call(arguments, 2);
          const element = {
            children,
            props: props == null ? null : props,
            type,
          };
          Object.defineProperty(element, Symbol.for("oai.dil.element"), {
            value: true,
          });
          return element;
        },
      };
      return Object.freeze(runtime);
    `), this.createRealmMessenger = this.createRealmFunction("bridge", "id", `
        const commands = new Proxy(Object.create(null), {
          get(_target, property) {
            if (typeof property !== "string" || property === "then") {
              return undefined;
            }

            return function dilMessengerCommand(data) {
              "use strict";
              return bridge.callMessengerCommand(id, property, data);
            };
          },
        });

        return Object.freeze({
          commands,
          emit(type, data) {
            return bridge.callMessengerEmit(id, type, data);
          },
          on(type, handler) {
            return bridge.callMessengerOn(id, type, handler);
          },
        });
      `), this.createRealmObject = this.createRealmFunction("entries", `
        const object = Object.create(null);
        for (const [key, value] of entries) {
          object[key] = value;
        }
        return object;
      `), this.createRealmPromise = this.createRealmFunction("bridge", "id", `
        return new Promise((resolve, reject) => {
          bridge.awaitHostPromise(id, resolve, reject);
        });
      `), this.createRealmRef = this.createRealmFunction("bridge", "id", `
        return Object.freeze(Object.defineProperty(Object.create(null), "current", {
          enumerable: true,
          get() {
            return bridge.getHostRef(id);
          },
          set(value) {
            bridge.setHostRef(id, value);
          },
        }));
      `), this.freezeRealmObject = this.createRealmFunction("value", "return Object.freeze(value);"), this.realmSymbolFor = this.createRealmFunction("key", "return Symbol.for(key);"), this.sandboxThis = this.createRealmFunction("return Object.create(null);")()
            }
            createHostRef = e => {
                let t = this.hostRefHandles.get(e);
                if (t) return t;
                let r = {
                    [C]: !0,
                    ref: e
                };
                return this.hostRefHandles.set(e, r), r
            };
            dispose = () => {
                this.disposed || (this.disposed = !0, this.hostFunctions.clear(), this.hostMessengers.clear(), this.hostPromises.clear(), this.hostRefs.clear(), this.iframe.remove())
            };
            evaluate = (() => {
                var e = this;
                return function(t) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e.assertAlive();
                    let n = e.createAllowedGlobals(r.globals ?? {}),
                        i = new Proxy(Object.create(null), {
                            defineProperty: () => {
                                throw e.createRealmError("Error", "DIL global scope is read-only")
                            },
                            deleteProperty: () => {
                                throw e.createRealmError("Error", "DIL global scope is read-only")
                            },
                            get: (t, r) => {
                                if (r !== Symbol.unscopables && "string" == typeof r) {
                                    if (n.has(r)) return n.get(r);
                                    throw e.createRealmError("Error", `DIL global "${r}" is not available`)
                                }
                            },
                            getOwnPropertyDescriptor: (e, t) => {
                                if ("string" == typeof t && n.has(t)) return {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: n.get(t)
                                }
                            },
                            has: () => !0,
                            ownKeys: () => [...n.keys()],
                            set: () => {
                                throw e.createRealmError("Error", "DIL global scope is read-only")
                            }
                        }),
                        a = e.runRealmScript(`
        __record.result = function(scope) {
          with (scope) {
            return (function() {
              "use strict";
              ${t}
            }).call(this);
          }
        };
      `, "oai-dil-sandbox.js");
                    try {
                        return e.toHost(a.call(e.sandboxThis, i))
                    } catch (t) {
                        throw e.toHostError(t)
                    }
                }
            })();
            normalizeHookDeps = e => {
                if (void 0 !== e) return e.map(e => e && "object" == typeof e ? this.hostObjectIdentityTokens.get(e) ?? e : e)
            };
            assertAlive() {
                if (this.disposed) throw Error("DIL sandbox has been disposed")
            }
            protectHostOperation(e) {
                var t = this;
                return function() {
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    try {
                        return e(...n)
                    } catch (e) {
                        throw t.toSandboxError(e)
                    }
                }
            }
            callHostFunction(e, t) {
                this.assertAlive();
                let r = this.hostFunctions.get(e);
                if (!r) throw Error(`Unknown DIL host function "${e}"`);
                let n = r(...t.map(e => this.toHost(e)));
                return this.toSandbox(n)
            }
            callMessengerCommand(e, t, r) {
                let n = this.getHostMessenger(e);
                if ("string" != typeof t) return;
                let i = n.commands[t];
                return "function" == typeof i ? this.toSandbox(i(this.toHost(r))) : this.toSandbox(Promise.resolve(void 0))
            }
            callMessengerEmit(e, t, r) {
                let n = this.getHostMessenger(e);
                if ("string" != typeof t) return;
                let i = n.emit;
                "function" == typeof i && i(t, this.toHost(r))
            }
            callMessengerOn(e, t, r) {
                let n = this.getHostMessenger(e).on;
                return "string" != typeof t || "function" != typeof n ? this.toSandbox(() => void 0) : this.toSandbox(n(t, this.toHost(r)))
            }
            createAllowedGlobals(e) {
                let t = new Map,
                    r = this.iframe.contentWindow;
                if (!r) throw Error("DIL sandbox iframe is unavailable");
                for (let e of R) {
                    if ("undefined" === e) {
                        t.set(e, void 0);
                        continue
                    }
                    if ("NaN" === e) {
                        t.set(e, 0 / 0);
                        continue
                    }
                    if ("Infinity" === e) {
                        t.set(e, 1 / 0);
                        continue
                    }
                    e in r && t.set(e, r[e])
                }
                for (let [r, i] of Object.entries(e)) {
                    if (z.has(r)) throw Error(`DIL global "${r}" conflicts with an intrinsic global`);
                    var n = r;
                    if ("__dil" === n) throw Error(`DIL global "${n}" conflicts with a reserved runtime global`);
                    if (!/^[A-Za-z_$][0-9A-Za-z_$]*$/.test(n) || F.has(n)) throw Error(`Invalid DIL global name "${n}"`);
                    let e = this.toSandbox(i);
                    t.set(r, "DIL" === r ? this.freezeRealmObject(e) : e)
                }
                return t.set("__dil", this.freezeRealmObject(this.createRealmJsxRuntime())), t
            }
            createRealmFunction() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                let n = t.at(-1);
                if (void 0 === n) throw Error("DIL realm function requires a body");
                let i = t.slice(0, -1).join(", ");
                return this.runRealmScript(`
        __record.result = function(${i}) {
          ${n}
        };
      `, "oai-dil-sandbox-helper.js")
            }
            runRealmScript(e, t) {
                let r, n = this.realmScriptIndex;
                this.realmScriptIndex += 1;
                let i = {
                    didRun: !1
                };
                this.realmScriptBridge.records.set(n, i);
                let a = this.window.document.createElement("script");
                a.nonce = this.cspNonce, a.text = `
      {
        const __record = globalThis[${JSON.stringify(this.realmScriptBridgeName)}].records.get(${n});
        try {
          ${e}
        } catch (__error) {
          __record.error = __error;
        } finally {
          __record.didRun = true;
        }
      }
      //# sourceURL=${t}
    `;
                let s = e => {
                    r = e.error ?? Error(e.message), e.preventDefault()
                };
                this.window.addEventListener?.("error", s);
                try {
                    let e = this.window.document.head ?? this.window.document.documentElement;
                    if (!e) throw Error("DIL sandbox document cannot execute scripts");
                    e.appendChild(a)
                } finally {
                    this.window.removeEventListener?.("error", s), a.remove(), this.realmScriptBridge.records.delete(n)
                }
                if (!i.didRun) {
                    let e = r ?? Error("DIL sandbox script was blocked by Content Security Policy; pass the active page nonce as cspNonce");
                    throw e instanceof Error ? e : Error(String(e))
                }
                if (void 0 !== i.error) throw i.error;
                return i.result
            }
            createSandboxMessenger(e) {
                let t = this.hostMessengerWrappers.get(e);
                if (t) return t;
                let r = this.hostMessengerIndex;
                this.hostMessengerIndex += 1, this.hostMessengers.set(r, e);
                let n = this.createRealmMessenger(this.bridge, r);
                return this.hostMessengerWrappers.set(e, n), this.sandboxMessengerHosts.set(n, e), n
            }
            getHostMessenger(e) {
                this.assertAlive();
                let t = this.hostMessengers.get(e);
                if (!t) throw Error(`Unknown DIL messenger "${e}"`);
                return t
            }
            getHostObjectIdentityToken(e) {
                let t = this.hostObjectIdentityTokens.get(e);
                if (t) return t;
                let r = {};
                return this.hostObjectIdentityTokens.set(e, r), r
            }
            getHostRef(e) {
                this.assertAlive();
                let t = this.hostRefs.get(e);
                if (!t) throw Error(`Unknown DIL ref "${e}"`);
                return this.toSandbox(t.current)
            }
            hardenRealm() {
                this.runRealmScript(`
      const blockedDynamicCode = function blockedDynamicCode() {
        throw new Error("DIL policy blocked dynamic code evaluation");
      };
      const constructors = [
        Function,
        (async function () {}).constructor,
        (function* () {}).constructor,
        (async function* () {}).constructor,
      ];
      for (const Constructor of constructors) {
        try {
          Object.defineProperty(Constructor.prototype, "constructor", {
            configurable: false,
            enumerable: false,
            value: blockedDynamicCode,
            writable: false,
          });
        } catch {}
        try {
          Object.freeze(Constructor);
          Object.freeze(Constructor.prototype);
        } catch {}
      }
      const objectsToFreeze = [
        Object,
        Object.prototype,
        Function,
        Function.prototype,
        Array,
        Array.prototype,
        Promise,
        Promise.prototype,
        AggregateError,
        AggregateError.prototype,
        Error,
        Error.prototype,
        EvalError,
        EvalError.prototype,
        RangeError,
        RangeError.prototype,
        ReferenceError,
        ReferenceError.prototype,
        SyntaxError,
        SyntaxError.prototype,
        TypeError,
        TypeError.prototype,
        URIError,
        URIError.prototype,
        Boolean,
        Boolean.prototype,
        Number,
        Number.prototype,
        BigInt,
        BigInt.prototype,
        String,
        String.prototype,
        Symbol,
        Symbol.prototype,
        Date,
        Date.prototype,
        RegExp,
        RegExp.prototype,
        Map,
        Map.prototype,
        Set,
        Set.prototype,
        WeakMap,
        WeakMap.prototype,
        WeakSet,
        WeakSet.prototype,
        ArrayBuffer,
        ArrayBuffer.prototype,
        DataView,
        DataView.prototype,
        Int8Array,
        Int8Array.prototype,
        Uint8Array,
        Uint8Array.prototype,
        Uint8ClampedArray,
        Uint8ClampedArray.prototype,
        Int16Array,
        Int16Array.prototype,
        Uint16Array,
        Uint16Array.prototype,
        Int32Array,
        Int32Array.prototype,
        Uint32Array,
        Uint32Array.prototype,
        Float32Array,
        Float32Array.prototype,
        Float64Array,
        Float64Array.prototype,
        BigInt64Array,
        BigInt64Array.prototype,
        BigUint64Array,
        BigUint64Array.prototype,
        Reflect,
        JSON,
        Math,
        Atomics,
        Intl,
        Proxy,
      ];
      for (const value of objectsToFreeze) {
        try {
          Object.freeze(value);
        } catch {}
      }
    `, "oai-dil-sandbox-harden.js")
            }
            setHostRef(e, t) {
                this.assertAlive();
                let r = this.hostRefs.get(e);
                if (!r) throw Error(`Unknown DIL ref "${e}"`);
                r.current = this.toHost(t)
            }
            tagHostCloneIdentity(e, t) {
                let r = this.sandboxObjectIdentityTokens.get(e);
                r && this.hostObjectIdentityTokens.set(t, r)
            }
            tagSandboxCloneIdentity(e, t) {
                this.sandboxObjectIdentityTokens.set(t, this.getHostObjectIdentityToken(e))
            }
            toHost(e) {
                if (L(e)) return this.toHostPrimitive(e);
                if (T(e)) return Promise.resolve(e).then(e => this.toHost(e), e => {
                    throw this.toHostError(e)
                });
                if ("function" == typeof e) return this.toHostFunction(e);
                if (!e || "object" != typeof e) return e;
                let t = this.sandboxMessengerHosts.get(e);
                if (t) return t;
                if (k(e)) {
                    let t = w(this.toHost(e.type), this.toHost(e.props), ...e.children.map(e => this.toHost(e)));
                    return this.tagHostCloneIdentity(e, t), t
                }
                if (Array.isArray(e)) {
                    let t = Array.from(e, e => this.toHost(e));
                    return this.tagHostCloneIdentity(e, t), t
                }
                if (!D(e)) throw Error("DIL cannot pass non-plain objects to the host");
                let r = Object.fromEntries(P(e).map(e => {
                    let [t, r] = e;
                    return [t, this.toHost(r)]
                }));
                return this.tagHostCloneIdentity(e, r), r
            }
            toHostError(e) {
                return e && "object" == typeof e && "message" in e ? Error(String(e.message)) : e instanceof Error ? e : Error(String(e))
            }
            toHostFunction(e) {
                var t = this;
                let r = this.sandboxFunctionWrappers.get(e);
                if (r) return r;
                let n = function() {
                    for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                    t.assertAlive();
                    try {
                        let r = e.apply(t.sandboxThis, n.map(e => t.toSandbox(e)));
                        return t.toHost(r)
                    } catch (e) {
                        throw t.toHostError(e)
                    }
                };
                return this.sandboxFunctionWrappers.set(e, n), this.hostFunctionWrappers.set(n, e), n
            }
            toHostPrimitive(e) {
                if ("symbol" != typeof e) return e;
                let t = Symbol.keyFor(e);
                if (!t) throw Error("DIL cannot pass local symbols to the host");
                return Symbol.for(t)
            }
            toSandbox(e) {
                var t;
                if (L(e)) return this.toSandboxPrimitive(e);
                if (T(e)) {
                    let t = this.hostPromiseIndex;
                    return this.hostPromiseIndex += 1, this.hostPromises.set(t, e), this.createRealmPromise(this.bridge, t)
                }
                if ("function" == typeof e) return this.toSandboxFunction(e);
                if (!e || "object" != typeof e) return e;
                let r = C in (t = e) ? t.ref ?? null : null;
                if (r) return this.toSandboxRef(r);
                if (E(e)) return this.createSandboxMessenger(e);
                if (Array.isArray(e)) {
                    let t = this.createRealmArray(e.map(e => this.toSandbox(e)));
                    return this.tagSandboxCloneIdentity(e, t), t
                }
                if (k(e)) {
                    let t = this.createRealmObject([
                            ["children", this.toSandbox(e.children)],
                            ["props", this.toSandbox(e.props)],
                            ["type", this.toSandbox(e.type)]
                        ]),
                        r = Symbol.keyFor(v);
                    if (!r) throw Error("DIL element brand must be a global symbol");
                    return Object.defineProperty(t, this.realmSymbolFor(r), {
                        value: !0
                    }), this.tagSandboxCloneIdentity(e, t), t
                }
                if (!D(e)) throw Error("DIL cannot pass non-plain objects into the sandbox");
                let n = this.createRealmObject(P(e).map(e => {
                    let [t, r] = e;
                    return [t, this.toSandbox(r)]
                }));
                return this.tagSandboxCloneIdentity(e, n), n
            }
            toSandboxError(e) {
                let t = "Error",
                    r = "DIL host operation failed";
                try {
                    if (null !== e && ("object" == typeof e || "function" == typeof e)) {
                        let n = e.name,
                            i = e.message;
                        "string" == typeof n && (t = n), "string" == typeof i && (r = i)
                    } else r = String(e)
                } catch {}
                return this.createRealmError(t, r)
            }
            toSandboxFunction(e) {
                let t = this.hostFunctionWrappers.get(e);
                if (t) return t;
                let r = this.hostFunctionIds.get(e),
                    n = r ?? this.hostFunctionIndex;
                null == r && (this.hostFunctionIndex += 1, this.hostFunctionIds.set(e, n), this.hostFunctions.set(n, e));
                let i = this.createRealmHostFunction(this.bridge, n);
                return this.hostFunctionWrappers.set(e, i), i
            }
            toSandboxPrimitive(e) {
                if ("symbol" != typeof e) return e;
                let t = Symbol.keyFor(e);
                if (!t) throw Error("DIL cannot pass local symbols into the sandbox");
                return this.realmSymbolFor(t)
            }
            toSandboxRef(e) {
                let t = this.hostRefWrappers.get(e);
                if (t) return t;
                let r = this.hostRefIndex;
                this.hostRefIndex += 1, this.hostRefs.set(r, e);
                let n = this.createRealmRef(this.bridge, r);
                return this.hostRefWrappers.set(e, n), n
            }
        }

        function P(e) {
            return Object.entries(Object.getOwnPropertyDescriptors(e)).filter(e => {
                let [, t] = e;
                return t.enumerable
            }).map(e => {
                let [t, r] = e;
                if (!("value" in r)) throw Error("DIL cannot pass accessor properties across realms");
                return [t, r.value]
            })
        }

        function D(e) {
            let t = Object.getPrototypeOf(e);
            return null === t || null === Object.getPrototypeOf(t)
        }

        function L(e) {
            return null == e || "string" == typeof e || "number" == typeof e || "boolean" == typeof e || "bigint" == typeof e || "symbol" == typeof e
        }

        function T(e) {
            return !!e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
        }
        let F = new Set(["arguments", "await", "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", "eval", "export", "extends", "false", "finally", "for", "function", "if", "implements", "import", "in", "instanceof", "interface", "let", "new", "null", "package", "private", "protected", "public", "return", "static", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield"]);

        function N(e) {
            return "string" == typeof e && /^callback_\d+$/.test(e)
        }

        function M(e, t) {
            return Object.fromEntries(Object.entries(e).filter(e => {
                let [t] = e;
                return "children" !== t && "ref" !== t
            }).map(e => {
                let [r, n] = e;
                return [r, function e(t, r) {
                    let n = E(t);
                    return n ? e({
                        __dilMessenger: "html-view",
                        channelId: n.channelId,
                        commands: n.commands,
                        onEvent: n.onEvent
                    }, r) : "function" == typeof t ? r(t) : Array.isArray(t) ? t.map(t => e(t, r)) : t && "object" == typeof t ? Object.fromEntries(Object.entries(t).map(t => {
                        let [n, i] = t;
                        return [n, e(i, r)]
                    })) : void 0 === t ? null : null === t || "string" == typeof t || "number" == typeof t || "boolean" == typeof t ? t : String(t)
                }(n, t)]
            }))
        }

        function j(e, t) {
            A(e, t), e.push(t)
        }

        function O(e, t, r) {
            A(e, t);
            let n = e.indexOf(r); - 1 === n ? e.push(t) : e.splice(n, 0, t)
        }

        function A(e, t) {
            let r = e.indexOf(t); - 1 !== r && e.splice(r, 1)
        }

        function U(e) {
            let t = e.flatMap(e => {
                let t = function e(t) {
                    if (t.hidden) return null;
                    if (W(t)) return t.text;
                    if (null != t.elementPropName) return U(t.children);
                    let r = Object.fromEntries(t.children.flatMap(e => W(e) || null == e.elementPropName ? [] : [
                        [e.elementPropName, e.hidden ? null : U(e.children)]
                    ]));
                    return {
                        children: t.children.flatMap(t => {
                            if (!W(t) && null != t.elementPropName) return [];
                            let r = e(t);
                            return null == r ? [] : [r]
                        }),
                        ...null == t.key ? {} : {
                            key: t.key
                        },
                        ...null == t.metadata ? {} : {
                            metadata: t.metadata
                        },
                        props: {
                            ...t.props,
                            ...r
                        },
                        type: t.type
                    }
                }(e);
                return null == t ? [] : [t]
            });
            return 0 === t.length ? null : 1 === t.length ? t[0] : t
        }

        function H(e) {
            return !(null == e || "object" != typeof e || Array.isArray(e)) && "string" == typeof e.type && Array.isArray(e.children) && null != e.props && "object" == typeof e.props && !Array.isArray(e.props)
        }

        function W(e) {
            return "text" in e
        }
        let $ = "\0dil-authored-id",
            B = "\0dil-authored-id-aliases",
            V = "\0dil-dom-ids",
            q = [$, B, V];

        function Q(e) {
            return "string" == typeof e && e.length > 0 && !/\s/.test(e)
        }

        function G(e) {
            var t;
            let r, n, i, a = (r = (t = e)[B], n = t[$], i = Array.isArray(r) ? r.filter(e => "string" == typeof e) : [], "string" == typeof n && i.push(n), i.filter((e, t, r) => r.indexOf(e) === t)),
                s = e[V],
                l = Array.isArray(s) ? s.filter(Q) : [];
            if (a.length || l.length) return {
                ...a.length && {
                    authoredIds: a
                },
                ...l.length && {
                    domIds: l
                }
            }
        }

        function J(e, t) {
            if (!e || !t) return e ?? t;
            let r = (e, t) => e && t ? [...new Set([...e, ...t])] : e ?? t,
                n = r(e.authoredIds, t.authoredIds),
                i = r(e.domIds, t.domIds);
            return {
                ...n && {
                    authoredIds: n
                },
                ...i && {
                    domIds: i
                }
            }
        }

        function K(e) {
            let t, r;
            for (let [n, i] of e.entries()) null != i && "boolean" != typeof i && "" !== i && ("string" != typeof i && "number" != typeof i ? r = void 0 : void 0 === r ? r = n : ((t ??= [...e])[r] = String(t[r]) + i, t[n] = null));
            return t ?? e
        }

        function Z(e) {
            return e && q.some(t => Object.hasOwn(e, t)) ? Object.fromEntries(Object.entries(e).filter(e => {
                let [t] = e;
                return !q.includes(t)
            })) : e
        }
        let X = new WeakMap,
            Y = new WeakMap,
            ee = new WeakMap,
            et = "__dil_internal_element_prop_slot__",
            er = {},
            en = "__dilInternalElementPropSlot",
            ei = "__dilInternalElementPropName";

        function ea(e) {
            return X.get(e) ?? null
        }

        function es() {
            let e = new WeakMap,
                t = new Map;

            function r(e) {
                let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    l = arguments.length > 2 ? arguments[2] : void 0,
                    o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (n.isValidElement(e)) return e;
                if (Array.isArray(e)) {
                    let t = o ? K(e) : e,
                        i = el(t);
                    return t.map((e, t) => n.createElement(n.Fragment, {
                        key: function(e, t) {
                            if (n.isValidElement(e) && null != e.key) return eu(e.key);
                            if (k(e)) {
                                let t = eo(e);
                                if (null != t) return eu(t)
                            }
                            return JSON.stringify(["dil-react-bridge", "fallback", t])
                        }(e, t)
                    }, r(e, t === i ? s : null, l, o)))
                }
                if (k(e)) {
                    var u, c, d, f;
                    let h = eo(e),
                        p = s ?? h,
                        m = J(l, null == e.props ? void 0 : G(e.props));
                    if (e.type === S) {
                        let t = o || null != m,
                            i = t ? K(e.children) : e.children,
                            a = el(i);
                        return n.createElement(n.Fragment, {
                            key: null == h ? void 0 : eu(h)
                        }, ...i.map((e, n) => r(e, n === a ? p : null, m, t)))
                    }
                    let g = "function" == typeof e.type ? e.children : e.children.map(e => r(e)),
                        y = Z(e.props);
                    if ("string" == typeof e.type && y) {
                        let e = Object.entries(y).filter(e => {
                            let [, t] = e;
                            return k(t)
                        });
                        e.length > 0 && (y = Object.fromEntries(Object.entries(y).filter(e => {
                            let [, t] = e;
                            return !k(t)
                        })), g.push(...e.map(e => {
                            let [t, i] = e;
                            return n.createElement(et, {
                                [ei]: t,
                                [en]: er,
                                key: `\0dil-element-prop:${t}`
                            }, r(i))
                        })))
                    }
                    "function" == typeof e.type && m && (y = {
                        ...y,
                        ...{
                            ...m.authoredIds && {
                                [B]: m.authoredIds
                            },
                            ...m.domIds && {
                                [V]: m.domIds
                            }
                        }
                    }), d = y, y = null == (f = h) ? d : {
                        ...d ?? {},
                        key: eu(f)
                    };
                    let b = n.createElement(function(e) {
                        if ("function" == typeof e.type) {
                            let r = eo(e);
                            return null == r ? i(e.type) : function(e, r) {
                                let n = t.get(e);
                                if (n) return n.wrapped;
                                let i = {
                                    fallback: r,
                                    wrapped: function(t) {
                                        return a(ee.get(t) ?? i.fallback, t, e)
                                    }
                                };
                                return t.set(e, i), i.wrapped
                            }(r, e.type)
                        }
                        return String(e.type)
                    }(e), y, ...g);
                    return null != p && (u = b.props, X.set(u, p)), null != m && (c = b.props, Y.set(c, m)), "function" == typeof e.type && null != h && ee.set(b.props, e.type), b
                }
                if ("function" == typeof e) return n.createElement(i(e));
                let h = function(e, t) {
                    if (t && ("number" == typeof e || "string" == typeof e && e)) return {
                        inline: !0,
                        color: "inherit",
                        [V]: [...new Set([...t.domIds ?? [], ...t.authoredIds ?? []])]
                    }
                }(e, l);
                return h ? r(w("text", h, e), s) : e
            }

            function i(t) {
                let r = e.get(t);
                if (r) return r;
                let n = e => a(t, e);
                return e.set(t, n), n
            }

            function a(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    i = ea(t) ?? n;
                return r(e(Z(t) ?? {}), i, J(G(t), Q(t.id) ? {
                    domIds: [t.id]
                } : void 0), !0)
            }
            return r
        }

        function el(e) {
            let t = null;
            for (let [r, n] of e.entries()) {
                let e = function e(t) {
                    if (null == t || "boolean" == typeof t || "" === t) return 0;
                    let r = Array.isArray(t) ? t : k(t) && t.type === S ? t.children : null;
                    if (null == r) return 1;
                    let n = 0;
                    for (let t of r)
                        if ((n += e(t)) > 1) return 2;
                    return n
                }(n);
                if (0 !== e) {
                    if (e > 1 || null != t) return null;
                    t = r
                }
            }
            return t
        }

        function eo(e) {
            let t = e.props?.key;
            return "string" == typeof t || "number" == typeof t ? t : null
        }

        function eu(e) {
            return JSON.stringify(["dil-react-bridge", "semantic", typeof e, String(e)])
        }
        es();
        let ec = globalThis.setInterval.bind(globalThis),
            ed = globalThis.clearInterval.bind(globalThis);
        class ef {
            disposed = !1;
            intervals = new Map;
            now = Date.now();
            getSnapshot = () => this.now;
            subscribe = (() => {
                var e = this;
                return function(t) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                    if (e.disposed) return () => {};
                    let n = () => t(),
                        i = e.intervals.get(r);
                    if (!i) {
                        let t = new Set;
                        e.now = Date.now(), i = {
                            handle: ec(() => {
                                for (let r of (e.now = Date.now(), t)) r()
                            }, r),
                            listeners: t
                        }, e.intervals.set(r, i)
                    }
                    let {
                        handle: a,
                        listeners: s
                    } = i;
                    return s.add(n), () => {
                        s.delete(n) && 0 === s.size && (ed(a), e.intervals.delete(r))
                    }
                }
            })();
            dispose() {
                for (let {
                        handle: e,
                        listeners: t
                    }
                    of(this.disposed = !0, this.intervals.values())) t.clear(), ed(e);
                this.intervals.clear()
            }
        }
        var eh = r("ut9a"),
            ep = r("ynHS"),
            em = r.n(ep);
        let eg = {},
            ey = {},
            eb = 16,
            ev = "function" == typeof queueMicrotask ? queueMicrotask : e => {
                Promise.resolve().then(e)
            },
            eS = em()({
                supportsMutation: !0,
                supportsPersistence: !1,
                supportsHydration: !1,
                isPrimaryRenderer: !1,
                supportsMicrotasks: !0,
                scheduleMicrotask: ev,
                scheduleTimeout: setTimeout,
                cancelTimeout: clearTimeout,
                noTimeout: -1,
                createInstance(e, t, r) {
                    let n = ek(e, t);
                    return {
                        children: [],
                        elementPropName: n,
                        hidden: !1,
                        key: ea(t),
                        metadata: Y.get(t),
                        props: null == n ? M(t, r.registerCallback) : {},
                        registerCallback: r.registerCallback,
                        type: e
                    }
                },
                createTextInstance: e => ({
                    hidden: !1,
                    text: e
                }),
                appendInitialChild(e, t) {
                    j(e.children, t)
                },
                finalizeInitialChildren: () => !1,
                shouldSetTextContent: () => !1,
                getRootHostContext: () => ey,
                getChildHostContext: () => ey,
                getPublicInstance: e => e,
                prepareForCommit: () => null,
                resetAfterCommit(e) {
                    e.onCommit()
                },
                preparePortalMount() {},
                appendChild(e, t) {
                    j(e.children, t)
                },
                appendChildToContainer(e, t) {
                    j(e.children, t)
                },
                insertBefore(e, t, r) {
                    O(e.children, t, r)
                },
                insertInContainerBefore(e, t, r) {
                    O(e.children, t, r)
                },
                removeChild(e, t) {
                    A(e.children, t)
                },
                removeChildFromContainer(e, t) {
                    A(e.children, t)
                },
                clearContainer(e) {
                    e.children = []
                },
                resetTextContent(e) {
                    e.children = []
                },
                commitTextUpdate(e, t, r) {
                    e.text = r
                },
                commitUpdate(e, t, r, n) {
                    let i = ek(t, n);
                    e.type = t, e.elementPropName = i, e.key = ea(n), e.metadata = Y.get(n), e.props = null == i ? M(n, e.registerCallback) : {}
                },
                hideInstance(e) {
                    e.hidden = !0
                },
                hideTextInstance(e) {
                    e.hidden = !0
                },
                unhideInstance(e) {
                    e.hidden = !1
                },
                unhideTextInstance(e, t) {
                    e.hidden = !1, e.text = t
                },
                beforeActiveInstanceBlur() {},
                afterActiveInstanceBlur() {},
                getInstanceFromNode: () => null,
                prepareScopeUpdate() {},
                getInstanceFromScope: () => null,
                detachDeletedInstance() {},
                NotPendingTransition: null,
                HostTransitionContext: n.createContext(null),
                setCurrentUpdatePriority(e) {
                    eb = e
                },
                getCurrentUpdatePriority: () => eb,
                resolveUpdatePriority: () => eb || 16,
                resetFormInstance() {},
                requestPostPaintCallback(e) {
                    setTimeout(() => e(eI()), 0)
                },
                shouldAttemptEagerTransition: () => !1,
                trackSchedulerEvent() {},
                resolveEventType: () => null,
                resolveEventTimeStamp: () => eI(),
                maySuspendCommit: () => !1,
                preloadInstance: () => !0,
                startSuspendingCommit() {},
                suspendInstance() {},
                waitForCommitToBeReady: () => null
            });

        function ew() {
            eS.flushSyncWork?.()
        }

        function ek(e, t) {
            let r, n;
            return r = t[ei], (e === et && t[en] === er && "string" == typeof r ? r : null) ?? (n = t.__dilInternalElementPropName, "__dil_internal_unsafe_element_prop_slot__" === e && t.__dilInternalUnsafeElementPropSlot === eg && "string" == typeof n ? n : null)
        }

        function eI() {
            return "u" < typeof performance ? Date.now() : performance.now()
        }
        let eE = new Set(["DIL", "__dil"]),
            ex = Symbol("no pending DIL container error"),
            eC = Symbol("no pending DIL container tree"),
            eR = new Set(["arguments", "await", "break", "case", "catch", "class", "const", "continue", "debugger", "default", "delete", "do", "else", "enum", "eval", "export", "extends", "false", "finally", "for", "function", "if", "implements", "import", "in", "instanceof", "interface", "let", "new", "null", "package", "private", "protected", "public", "return", "static", "super", "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield"]);
        class ez {
            dictationHost = new o;
            runtimeExtensions;
            dispatchingCallback = !1;
            dataStore;
            dilComponents;
            stateRuntime;
            timeStore = new ef;
            evaluator;
            globals;
            callbackIndex = 0;
            callbackIds = new WeakMap;
            callbacks = new Map;
            container;
            listeners = new Set;
            messengerChannelIndex = 0;
            messengerTransports = new Map;
            queuedMessengerMessages = new Map;
            isUpdatingContainer = !1;
            pendingContainerError = ex;
            pendingContainerTree = eC;
            root;
            pendingRenderedElement = null;
            renderedElement = null;
            toReactNode = es();
            snapshot = {
                error: null,
                tree: null,
                version: 0
            };
            constructor(e, t = {}) {
                var r, i, a, s, l, o;
                let c, y, v, S, w, k;
                this.runtimeExtensions = {
                    useDictation: (i = function(e, t, r) {
                        let n = (0, b.b)(e.dictation);
                        if (n) return {
                            supportsAudioLevels: !0 === n.supportsAudioLevels,
                            supportsSpeakChallenge: !0 === n.supportsSpeakChallenge,
                            isUserInteraction: t,
                            createSession: (e, t) => r.createSession(n, e, t)
                        }
                    }(t, r = () => this.dispatchingCallback && (0, eh.a)(), this.dictationHost), e => {
                        let t = n.useMemo(() => {
                            let e = new Set,
                                t = new g.a(i, () => {
                                    for (let n of (r = t.snapshot(), e)) n()
                                }),
                                r = t.snapshot();
                            return {
                                owner: t,
                                subscribe: t => (e.add(t), () => {
                                    e.delete(t)
                                }),
                                getSnapshot: () => r
                            }
                        }, []);
                        t.owner.setOptions(e);
                        let r = n.useSyncExternalStore(t.subscribe, t.getSnapshot, t.getSnapshot);
                        return n.useEffect(() => () => t.owner.dispose(), [t]), r
                    }),
                    useSpeechSynthesizer: (a = t.speechSynthesis, c = new WeakMap, (e, t) => {
                        let i = (0, p.b)(e),
                            s = JSON.stringify(i),
                            l = n.useMemo(() => Object.freeze({}), [s]),
                            o = c.get(l);
                        o || (o = new m(i, a, r), c.set(l, o)), o.setLogging(t);
                        let u = n.useSyncExternalStore(o.subscribe, o.getSnapshot, o.getSnapshot);
                        return n.useLayoutEffect(o.mount, [o]), u
                    })
                }, this.dataStore = new u(t.data ?? {}), this.dilComponents = t.dilComponents ?? {}, this.stateRuntime = (y = h(s = t.persistState, d.a, void 0), v = new Map, S = (0, d.c)(s), w = e => {
                    if (!e || e.length > 1024) throw Error("Invalid DIL widget state identity");
                    let t = v.get(e);
                    return t || ((t = h(s, (0, d.e)(e), e)).setStateSnapshot(S[e]), v.set(e, t)), t
                }, k = 0, {
                    ...y,
                    useState: (e, t) => (t?.widgetId ? w(t.widgetId) : y).useState(e, t),
                    setStateSnapshot: (e, t) => (void 0 === t ? y : w(t)).setStateSnapshot(e),
                    commitStateSnapshot() {
                        for (let e of (y.commitStateSnapshot(), v.values())) e.commitStateSnapshot()
                    },
                    wrap: e => n.createElement(f.Provider, {
                        value: ++k
                    }, y.wrap(e))
                }), this.evaluator = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = globalThis.document;
                            if (!t?.body) return null;
                            let r = function(e) {
                                    if (!/^[A-Za-z0-9+/_=-]+$/.test(e)) throw Error("DIL sandbox CSP nonce contains unsafe characters");
                                    return e
                                }(e.cspNonce ?? function() {
                                    let e = globalThis.crypto;
                                    if (e?.getRandomValues) {
                                        let t = new Uint8Array(16);
                                        return e.getRandomValues(t), [...t].map(e => e.toString(16).padStart(2, "0")).join("")
                                    }
                                    return `dil-${Math.random().toString(36).slice(2)}`
                                }()),
                                n = t.createElement("iframe");
                            if (n.style.display = "none", n.srcdoc = `<!doctype html><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'nonce-${r}'; base-uri 'none'; form-action 'none'">`, t.body.appendChild(n), !n.contentWindow) return n.remove(), null;
                            try {
                                return new _(n, n.contentWindow, r)
                            } catch (e) {
                                throw n.remove(), e
                            }
                        }(e);
                    if (!t) throw Error("DIL safe evaluation requires a browser realm");
                    return t
                }({
                    cspNonce: t.cspNonce
                }), this.globals = t.globals ?? {}, this.container = {
                    children: [],
                    onCommit: this.updateSnapshotFromContainer,
                    registerCallback: this.registerCallback
                }, this.root = (l = this.container, o = this.setError, eS.createContainer(l, 0, null, !1, null, "dil-", o, o, o, () => void 0, null)), this.setCompiledDil(e)
            }
            setCompiledDil = (e, t) => {
                try {
                    var r, i, a;
                    let s, l = !1,
                        o = null,
                        u = {
                            ...this.runtimeExtensions,
                            render: e => (o = this.toReactNode(e), l = !0, e),
                            useDILMessenger: this.useDILMessenger,
                            useAppData: this.dataStore.useAppData,
                            useConstants: this.dataStore.useConstants,
                            useTheme: this.dataStore.useTheme,
                            useBreakpoint: this.dataStore.useBreakpoint,
                            useIsMobile: this.dataStore.useIsMobile,
                            useId: n.useId,
                            useNow: this.useNow,
                            useState: (e, t) => this.stateRuntime.useState(e, {
                                key: t?.key,
                                widgetId: void 0
                            }),
                            useCallback: (e, t) => n.useCallback(e, this.evaluator.normalizeHookDeps(t)),
                            useEffect: (e, t) => n.useEffect(e, this.evaluator.normalizeHookDeps(t)),
                            useMemo: (e, t) => n.useMemo(e, this.evaluator.normalizeHookDeps(t)),
                            useRef: e => this.evaluator.createHostRef(n.useRef(e))
                        },
                        c = (r = `return { ${Object.keys(this.dilComponents).join(", ")} };`, i = this.dilComponents, a = this.globals, s = Object.entries(i).map(e => {
                            let [t, r] = e;
                            return function(e, t) {
                                if (!/^[A-Z]/.test(e)) throw Error(`DIL component name "${e}" must start with uppercase`);
                                if (eE.has(e)) throw Error(`DIL component name "${e}" is reserved`);
                                if (Object.hasOwn(t, e)) throw Error(`DIL component name "${e}" conflicts with a global`);
                                if (!/^[A-Za-z_$][0-9A-Za-z_$]*$/.test(e) || eR.has(e)) throw Error(`Invalid DIL component name "${e}"`)
                            }(t, a), `const ${t} = (${r});`
                        }), 0 === s.length ? r : `${s.join("\n")}
${r}`),
                        d = Object.freeze({
                            ...u,
                            useState: this.stateRuntime.useState
                        }),
                        f = this.evaluator.evaluate(c, {
                            globals: {
                                ...this.globals,
                                DIL: d
                            }
                        });
                    this.evaluator.evaluate(e, {
                        globals: {
                            ...this.globals,
                            ...f,
                            DIL: u
                        }
                    }), t && this.dataStore.setData(t), l ? this.updateContainer(o) : this.clearRenderedTree()
                } catch (e) {
                    this.setCallbackError(e)
                }
            };
            update = e => {
                this.setCompiledDil(e)
            };
            getSnapshot = () => this.snapshot;
            dispose = () => {
                this.timeStore.dispose(), this.listeners.clear(), this.updateContainer(null), ew(), this.dictationHost.dispose(), this.callbacks.clear(), this.messengerTransports.clear(), this.queuedMessengerMessages.clear(), this.evaluator.dispose()
            };
            registerDilMessengerTransport = (e, t) => (this.messengerTransports.set(e, t), this.flushQueuedMessengerMessages(e, t), () => {
                this.messengerTransports.get(e) === t && this.messengerTransports.delete(e)
            });
            setData = e => {
                this.dataStore.setData(e) && ew()
            };
            setStateSnapshot = (e, t) => {
                this.stateRuntime.setStateSnapshot(e, t) && this.updateContainer(this.renderedElement)
            };
            subscribeDictationAudioLevels = this.dictationHost.subscribeAudioLevels;
            subscribe = e => (this.listeners.add(e), () => {
                this.listeners.delete(e)
            });
            trigger = (() => {
                var e = this;
                return function(t) {
                    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                    return e.triggerCallback(t, n, !1)
                }
            })();
            triggerWithInteraction = (() => {
                var e = this;
                return function(t, r, n) {
                    for (var i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++) a[s - 3] = arguments[s];
                    try {
                        return e.triggerCallback(t, a, n, r)
                    } finally {
                        (0, eh.f)(r.capability) && (0, eh.e)(r.capability)
                    }
                }
            })();
            triggerWithError = (() => {
                var e = this;
                return function(t) {
                    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                    return e.triggerCallback(t, n, !0)
                }
            })();
            triggerCallback(e, t, r, n) {
                let i = this.callbacks.get(e);
                if (!i) {
                    let t = Error(`Unknown DIL callback "${e}"`);
                    if (this.setCallbackError(t), r) throw t;
                    return
                }
                try {
                    var a, s;
                    let e = (a = () => {
                        this.dispatchingCallback = !0;
                        try {
                            return n ? (0, eh.g)(n.capability, () => i(...t), n.source) : i(...t)
                        } finally {
                            this.dispatchingCallback = !1
                        }
                    }, eS.discreteUpdates(a));
                    if ((s = e) && "function" == typeof s.then) {
                        let t = Promise.resolve(e).then(e => (ew(), e), e => {
                            if (this.setCallbackError(e), r) throw e
                        });
                        return r || t.catch(this.setCallbackError), ew(), r ? t : void 0
                    }
                    return ew(), e
                } catch (e) {
                    if (this.setCallbackError(e), r) throw e;
                    return
                }
            }
            setError = e => {
                if (this.isUpdatingContainer) {
                    this.pendingContainerError = e;
                    return
                }
                this.pruneCallbacks(this.snapshot.tree), this.setCallbackError(e)
            };
            setCallbackError = e => {
                this.snapshot = {
                    ...this.snapshot,
                    error: e instanceof Error ? e : Error(String(e)),
                    version: this.snapshot.version + 1
                }, this.emit()
            };
            updateSnapshotFromContainer = () => {
                let e = U(this.container.children);
                if (this.isUpdatingContainer) {
                    this.pendingContainerTree = e;
                    return
                }
                this.commitContainerTree(e)
            };
            commitContainerTree(e) {
                this.renderedElement = this.pendingRenderedElement, this.pruneCallbacks(e), this.snapshot = {
                    error: null,
                    tree: e,
                    version: this.snapshot.version + 1
                }, this.emit(), this.stateRuntime.commitStateSnapshot()
            }
            registerCallback = e => {
                let t = this.callbackIds.get(e);
                if (t) return this.callbacks.set(t, e), t;
                let r = `callback_${this.callbackIndex}`;
                return this.callbackIndex += 1, this.callbackIds.set(e, r), this.callbacks.set(r, e), r
            };
            useDILMessenger = (() => {
                var e = this;
                return function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = n.useRef(t);
                    r.current = t;
                    let i = n.useRef(null);
                    null == i.current && (i.current = `dil_messenger_${e.messengerChannelIndex}`, e.messengerChannelIndex += 1);
                    let a = n.useRef(null);
                    return null == a.current && (a.current = function(e) {
                        let {
                            channelId: t,
                            emitEvent: r,
                            getCommands: n,
                            sendCommand: i
                        } = e, a = new Map, s = new Map, l = {
                            commands: new Proxy(Object.create(null), {
                                get(e, r) {
                                    if ("string" == typeof r && "then" !== r) return e => i(t, r, e)
                                }
                            }),
                            emit(e, n) {
                                r(t, e, n)
                            },
                            on(e, t) {
                                let r = a.get(e) ?? new Set;
                                return r.add(t), a.set(e, r), () => {
                                    r.delete(t), 0 === r.size && a.delete(e)
                                }
                            }
                        }, o = (e, t) => {
                            if ("string" != typeof e) return;
                            let r = a.get(e);
                            if (r && 0 !== r.size) return Promise.all([...r].map(e => e(t)))
                        };
                        return Object.defineProperty(l, I, {
                            enumerable: !1,
                            value: () => ({
                                channelId: t,
                                commands: Object.fromEntries(Object.keys(n()).map(e => {
                                    let t = s.get(e);
                                    return t || (t = t => n()[e]?.(t), s.set(e, t)), [e, t]
                                })),
                                onEvent: o
                            })
                        }), l
                    }({
                        channelId: i.current,
                        emitEvent: e.emitMessengerEvent,
                        getCommands: () => r.current.commands ?? {},
                        sendCommand: e.sendMessengerCommand
                    })), a.current
                }
            })();
            useNow = (() => {
                var e = this;
                return function() {
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                    if ("boolean" != typeof t) throw TypeError("DIL.useNow expects a boolean");
                    if ("number" != typeof r || !Number.isFinite(r) || r < 50) throw TypeError("DIL.useNow expects intervalMs to be a finite number greater than or equal to 50");
                    let i = n.useCallback(n => t ? e.timeStore.subscribe(n, r) : () => {}, [t, r]);
                    return n.useSyncExternalStore(i, e.timeStore.getSnapshot, e.timeStore.getSnapshot), Date.now()
                }
            })();
            sendMessengerCommand = (e, t, r) => {
                let n = this.messengerTransports.get(e);
                return n ? n.command(t, r) : new Promise((n, i) => {
                    this.queueMessengerMessage(e, {
                        data: r,
                        kind: "command",
                        reject: i,
                        resolve: n,
                        type: t
                    })
                })
            };
            emitMessengerEvent = (e, t, r) => {
                let n = this.messengerTransports.get(e);
                n ? n.event(t, r) : this.queueMessengerMessage(e, {
                    data: r,
                    kind: "event",
                    type: t
                })
            };
            queueMessengerMessage(e, t) {
                let r = this.queuedMessengerMessages.get(e) ?? [];
                r.push(t), this.queuedMessengerMessages.set(e, r)
            }
            flushQueuedMessengerMessages(e, t) {
                let r = this.queuedMessengerMessages.get(e);
                if (r)
                    for (let n of (this.queuedMessengerMessages.delete(e), r)) {
                        if ("command" === n.kind) {
                            try {
                                Promise.resolve(t.command(n.type, n.data)).then(n.resolve, n.reject)
                            } catch (e) {
                                n.reject(e)
                            }
                            continue
                        }
                        try {
                            t.event(n.type, n.data)
                        } catch (e) {
                            this.setCallbackError(e)
                        }
                    }
            }
            pruneCallbacks(e) {
                let t = function e(t) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Set;
                    if (Array.isArray(t)) {
                        for (let n of t) e(n, r);
                        return r
                    }
                    if (!H(t)) return r;
                    for (let n of Object.values(t.props)) ! function t(r, n) {
                        if (N(r)) return void n.add(r);
                        if (H(r)) return void e(r, n);
                        if (Array.isArray(r)) {
                            for (let e of r) t(e, n);
                            return
                        }
                        if (r && "object" == typeof r)
                            for (let e of Object.values(r)) t(e, n)
                    }(n, r);
                    for (let n of t.children) e(n, r);
                    return r
                }(e);
                for (let e of this.callbacks.keys()) t.has(e) || this.callbacks.delete(e)
            }
            updateContainer(e) {
                this.isUpdatingContainer = !0, this.pendingContainerError = ex, this.pendingContainerTree = eC, this.pendingRenderedElement = e;
                try {
                    ! function(e, t) {
                        if (eS.updateContainerSync) {
                            eS.updateContainerSync(t, e, null, null), ew();
                            return
                        }
                        eS.updateContainer(t, e, null, null)
                    }(this.root, this.stateRuntime.wrap(e))
                } catch (e) {
                    this.pendingContainerError = e
                } finally {
                    this.isUpdatingContainer = !1
                }
                let t = this.pendingContainerError,
                    r = this.pendingContainerTree;
                this.pendingContainerError = ex, this.pendingContainerTree = eC, t !== ex ? (this.pendingRenderedElement = this.renderedElement, this.pruneCallbacks(this.snapshot.tree), this.setCallbackError(t)) : "symbol" != typeof r ? this.commitContainerTree(r) : this.renderedElement = this.pendingRenderedElement
            }
            clearRenderedTree() {
                (this.snapshot.error || null !== this.snapshot.tree) && this.updateContainer(null)
            }
            emit() {
                for (let e of this.listeners) e()
            }
        }
        let e_ = new WeakMap,
            eP = Symbol("removed DIL preview node");

        function eD(e, t) {
            var r;
            if (null != e.error || null == e.tree) return null;
            let n = (function(e) {
                let t = e_.get(e);
                if (t) return t;
                let r = new Map;
                (function e(t, r) {
                    if (Array.isArray(t)) {
                        for (let n of t) e(n, r);
                        return
                    }
                    if (eT(t)) {
                        for (let n of (r(t), t.children)) e(n, r);
                        for (let n of Object.values(t.props)) ! function t(r, n) {
                            if (Array.isArray(r)) {
                                for (let e of r) t(e, n);
                                return
                            }
                            if (eT(r)) return void e(r, n);
                            if (null != r && "object" == typeof r)
                                for (let e of Object.values(r)) t(e, n)
                        }(n, r)
                    }
                })(e.tree, e => {
                    for (let t of e.metadata?.authoredIds ?? []) {
                        let n = r.get(t) ?? [];
                        n.push(e), r.set(t, n)
                    }
                });
                let n = new Map([...r].map(e => {
                    let [t, r] = e;
                    return [t, Object.freeze(r)]
                }));
                return e_.set(e, n), n
            })(e).get(t);
            if (null == n || 0 === n.length) return null;
            let i = 1 === n.length ? eL(n[0]) : n.map(e => eL(e));
            return Object.freeze({
                snapshotVersion: e.version,
                tree: (function e(t) {
                    if (null != t && "object" == typeof t) {
                        if (Array.isArray(t)) {
                            for (let r of t) e(r);
                            Object.freeze(t);
                            return
                        }
                        if (eT(t)) {
                            for (let r of t.children) e(r);
                            for (let r of Object.values(t.props)) e(r);
                            Object.freeze(t.children), t.metadata?.authoredIds != null && Object.freeze(t.metadata.authoredIds), t.metadata?.domIds && Object.freeze(t.metadata.domIds), null != t.metadata && Object.freeze(t.metadata), Object.freeze(t.props), Object.freeze(t);
                            return
                        }
                        for (let r of Object.values(t)) e(r);
                        Object.freeze(t)
                    }
                }(r = i), r)
            })
        }

        function eL(e) {
            if (Array.isArray(e)) return e.map(eL);
            if (!eT(e)) return e;
            let t = Object.fromEntries(Object.entries(e.props).flatMap(e => {
                let [t, r] = e, n = function e(t) {
                    return N(t) ? eP : Array.isArray(t) ? t.map(t => {
                        let r = e(t);
                        return r === eP ? null : r
                    }) : eT(t) ? eL(t) : null != t && "object" == typeof t ? Object.fromEntries(Object.entries(t).flatMap(t => {
                        let [r, n] = t, i = e(n);
                        return i === eP ? [] : [
                            [r, i]
                        ]
                    })) : t
                }(r);
                return n === eP ? [] : [
                    [t, n]
                ]
            }));
            return {
                children: e.children.map(eL),
                ...null == e.key ? {} : {
                    key: e.key
                },
                ...null == e.metadata ? {} : {
                    metadata: {
                        ...null == e.metadata.authoredIds ? {} : {
                            authoredIds: [...e.metadata.authoredIds]
                        },
                        ...e.metadata.domIds && {
                            domIds: [...e.metadata.domIds]
                        }
                    }
                },
                props: t,
                type: e.type
            }
        }

        function eT(e) {
            return !(null == e || "object" != typeof e || Array.isArray(e)) && "string" == typeof e.type && Array.isArray(e.children) && null != e.props && "object" == typeof e.props && !Array.isArray(e.props)
        }
        r("RXkO");
        var eF = r("giC1");
        let eN = "__oaiDilGlobalFunction";
        var eM = r("mx11"),
            ej = r("Og4F");
        class eO {
            children = [];
            callbackIds = new WeakMap;
            callbacks = new Map;
            nodes = new Map;
            parents = new Map;
            propValues = new WeakMap;
            privatePropValues = new WeakMap;
            types = [];
            apply(e) {
                return this.types = e.types, (0, ej.a)(e, this, {
                    resolveFunction: e => {
                        let t = this.callbacks.get(e);
                        return t || (t = () => void 0, this.callbacks.set(e, t), this.callbackIds.set(t, `callback_${e}`)), t
                    },
                    resolveHtmlViewMessenger: e => ({
                        __dilMessenger: "html-view",
                        channelId: e,
                        commands: {},
                        onEvent: null
                    }),
                    resolveType: e => {
                        let t = this.types[e - 1];
                        if (!t) throw Error(`Unknown DIL element type ${e}`);
                        return t
                    }
                }), U(this.children)
            }
            reset() {
                this.children.length = 0, this.callbacks.clear(), this.nodes.clear(), this.parents.clear()
            }
            onElementNodeCreated(e, t) {
                let r = this.types[t - 1];
                if (!r) throw Error(`Unknown DIL element type ${t}`);
                this.nodes.set(e, {
                    children: [],
                    elementPropName: null,
                    hidden: !1,
                    key: e,
                    props: {},
                    registerCallback: this.registerCallback,
                    type: r
                })
            }
            onTextNodeCreated(e, t) {
                this.nodes.set(e, {
                    hidden: !1,
                    text: t
                })
            }
            onNodeDestroyed(e) {
                let t = this.nodes.get(e);
                if (!t) return;
                let r = this.childrenFor(this.parents.get(e) ?? 0),
                    n = r?.indexOf(t) ?? -1; - 1 !== n && r?.splice(n, 1), this.nodes.delete(e), this.parents.delete(e)
            }
            onNodeMoved(e, t, r) {
                let n = this.nodes.get(e),
                    i = this.childrenFor(t);
                if (!n || !i) throw Error(`Cannot move DIL node ${e} into parent ${t}`);
                let a = this.parents.get(e);
                if (void 0 !== a) {
                    let e = this.childrenFor(a),
                        t = e?.indexOf(n) ?? -1; - 1 !== t && e?.splice(t, 1)
                }
                i.splice(r, 0, n), this.parents.set(e, t)
            }
            onNodePropChanged(e, t, r) {
                let n = this.nodes.get(e);
                if (!n || "text" in n) return;
                let i = this.propValues.get(n) ?? n.props;
                if (this.propValues.set(n, i), "__oaiDilWebElementProps" === t && Array.isArray(r)) {
                    let e = new Set(r),
                        t = this.privatePropValues.get(n) ?? {};
                    n.metadata = G(Object.fromEntries(q.filter(r => e.has(r) && Object.hasOwn(t, r)).map(e => [e, t[e]]))), n.props = Object.fromEntries(Object.entries(i).filter(e => {
                        let [t] = e;
                        return r.includes(t)
                    }));
                    return
                }
                if (q.includes(t)) {
                    let e = this.privatePropValues.get(n) ?? {};
                    e[t] = r, this.privatePropValues.set(n, e), n.metadata = G(e);
                    return
                }
                if (n.type === eM.a && t === eM.b) {
                    n.elementPropName = "string" == typeof r ? r : null;
                    return
                }
                let a = M({
                    [t]: r
                }, this.registerCallback)[t];
                i[t] = a, n.props[t] = a
            }
            onNodeOpaqueChildrenChanged() {}
            onTextNodeChanged(e, t) {
                let r = this.nodes.get(e);
                r && "text" in r && (r.text = t)
            }
            childrenFor(e) {
                if (0 === e) return this.children;
                let t = this.nodes.get(e);
                return !t || "text" in t ? void 0 : t.children
            }
            registerCallback = e => {
                let t = this.callbackIds.get(e);
                if (!t) throw Error("Unknown DIL sandbox callback");
                return t
            }
        }
        class eA {
            report;
            readyAt = null;
            failed = !1;
            constructor(e) {
                this.report = e
            }
            reset() {
                this.readyAt = null, this.failed = !1
            }
            recordSnapshot(e) {
                this.failed = e, this.readyAt = e ? null : this.readyAt ?? performance.now()
            }
            recordFailure() {
                this.failed = !0, this.readyAt = null
            }
            finish(e) {
                try {
                    this.report({
                        outcome: e,
                        readiness: this.failed ? "failed" : null == this.readyAt ? "pending" : "ready",
                        readyLeadMs: "reused" === e && null != this.readyAt ? performance.now() - this.readyAt : void 0
                    })
                } catch {}
            }
        }
        var eU = r("KmX9"),
            eH = r("TJbQ");
        let eW = new Map,
            e$ = 0,
            eB = 0;
        class eV extends Error {
            stage;
            constructor(e, t) {
                super(t), this.name = "FrameLifecycleError", this.stage = e
            }
        }
        class eq {
            diagnostics;
            frameId = `frame_${++eB}`;
            documentBootId;
            diagnosticGraceTimeoutId = null;
            diagnosticGraceWindowMs;
            diagnosticGraceCallbacks = [];
            frameProbeId = 0;
            frameProbes = new Map;
            disposed = !1;
            retired = !1;
            hasRenderConsumer = !1;
            liveRendererCount = 0;
            recoverPreReadyFrame = !1;
            retriedPreReadyFrame = !1;
            preReadyFrameRecovery;
            moduleError;
            recoveryListeners = new Set;
            readyResolved = !1;
            commandPort;
            frameUrl;
            iframe;
            frameNavigationStartedAtMs = 0;
            cancelReadyTimeout = null;
            referenceCount = 0;
            rejectReady = null;
            ready;
            resolveReady = null;
            get isReady() {
                return this.readyResolved
            }
            get isReusable() {
                return !this.disposed && !this.retired
            }
            constructor(e, t) {
                this.frameUrl = e.href, t && (this.diagnostics = new eH.a({
                    realm: "host"
                })), this.ready = new Promise((e, t) => {
                    this.resolveReady = e, this.rejectReady = t
                }), this.ready.catch(() => void 0), this.iframe = this.createFrame(), this.mountFrame()
            }
            createFrame() {
                this.diagnostics?.record("iframe_create", "begin");
                let e = document.createElement("iframe");
                e.hidden = !0, e.referrerPolicy = "no-referrer", e.sandbox.add("allow-scripts");
                let t = new URL(this.frameUrl);
                if (this.diagnostics) {
                    let e = new URLSearchParams(t.hash.slice(1));
                    e.set("dil-diagnostics", "1"), t.hash = e.toString()
                }
                return e.src = t.href, e.tabIndex = -1, e.title = "DIL execution sandbox", e
            }
            mountFrame() {
                let e = this.iframe;
                window.addEventListener("message", this.handleWindowMessage), e.addEventListener("error", this.handleFrameError), this.diagnostics && (e.addEventListener("load", this.handleFrameLoad), document.addEventListener("visibilitychange", this.handleVisibility), window.addEventListener("pagehide", this.handlePageHide), window.addEventListener("pageshow", this.handlePageShow), document.addEventListener("freeze", this.handleFreeze), document.addEventListener("resume", this.handleResume)), this.frameNavigationStartedAtMs = performance.now(), document.body.append(e), this.diagnostics?.record("iframe_create", "returned"), this.resetReadyTimeout()
            }
            resetReadyTimeout() {
                this.cancelReadyTimeout?.(), this.cancelReadyTimeout = eX(() => {
                    this.fail(new eV("frame_timeout", "Timed out waiting for the DIL runner frame"))
                }, 1e4, this.diagnostics, "frame_timer", () => this.probe(), void 0, () => {
                    this.liveRendererCount > 0 && this.probe()
                })
            }
            getDiagnostics(e) {
                if (this.diagnostics) return Object.freeze({
                    ...this.diagnostics.snapshot({
                        runnerId: e
                    }),
                    ...void 0 === this.diagnosticGraceWindowMs ? {} : {
                        postTimeoutWindowMs: this.diagnosticGraceWindowMs,
                        postTimeoutSampleRate: 1e4 === this.diagnosticGraceWindowMs ? .1 : .9
                    },
                    frameId: this.frameId,
                    documentBootId: this.documentBootId
                })
            }
            getRecoveryDiagnostics() {
                let e = this.preReadyFrameRecovery;
                if (e) return Object.freeze({
                    frameId: this.frameId,
                    reason: e.reason,
                    elapsedMs: Math.max(0, performance.now() - e.startedAtMs),
                    originalDocumentBootId: e.originalDocumentBootId,
                    replacementDocumentBootId: this.documentBootId !== e.originalDocumentBootId ? this.documentBootId : void 0,
                    replacementState: e.replacementState
                })
            }
            prepareDiagnosticGrace() {
                this.diagnostics && void 0 === this.diagnosticGraceWindowMs && (this.diagnosticGraceWindowMs = .1 > Math.random() ? 1e4 : 1e3)
            }
            retireForDiagnostics(e, t) {
                this.disposed || !this.diagnostics ? t(void 0, "frame_disposed") : (this.diagnosticGraceCallbacks.push({
                    runnerId: e,
                    startedAtMs: this.diagnostics.now(),
                    shortened: null !== this.diagnosticGraceTimeoutId,
                    callback: t
                }), this.probe(e), null === this.diagnosticGraceTimeoutId && (this.referenceCount += 1, this.diagnosticGraceTimeoutId = window.setTimeout(() => this.finishDiagnosticGrace("observed"), this.diagnosticGraceWindowMs ?? 1e3)))
            }
            finishDiagnosticGrace(e) {
                if (null !== this.diagnosticGraceTimeoutId) {
                    for (let {
                            runnerId: t,
                            startedAtMs: r,
                            shortened: n,
                            callback: i
                        }
                        of(window.clearTimeout(this.diagnosticGraceTimeoutId), this.diagnosticGraceTimeoutId = null, this.diagnosticGraceCallbacks.splice(0))) {
                        let a = this.getDiagnostics(t);
                        try {
                            i(a && Object.freeze({
                                ...a,
                                postTimeoutElapsedMs: this.diagnostics.now() - r
                            }), "observed" === e && n ? "window_shortened" : e)
                        } catch {}
                    }
                    this.release()
                }
            }
            probe(e) {
                if (!this.diagnostics || this.disposed) return;
                if (this.frameProbes.size >= 4) return void this.diagnostics.record("frame_probe", "ignored", {
                    runnerId: e,
                    reason: "probe_budget_exhausted"
                });
                let t = `frame_probe_${++this.frameProbeId}`;
                this.frameProbes.set(t, {
                    startedAtMs: this.diagnostics.now(),
                    runnerId: e,
                    timeoutId: window.setTimeout(() => this.frameProbes.delete(t), 1e4)
                }), this.diagnostics.record("frame_probe", "sent", {
                    requestId: t,
                    runnerId: e
                });
                try {
                    this.iframe.contentWindow?.postMessage({
                        __oaiDilFrame: !0,
                        kind: "diagnosticProbe",
                        protocolVersion: 15,
                        requestId: t,
                        runnerId: e
                    }, "*")
                } catch (e) {
                    this.diagnostics.fault("frame_probe", e, {
                        requestId: t
                    })
                }
            }
            handleFrameLoad = e => {
                e.target !== this.iframe || this.disposed || this.diagnostics?.record("iframe_load", "received")
            };
            handleVisibility = () => {
                this.diagnostics?.record("visibility", "received", {
                    hidden: document.hidden
                }), document.hidden && this.finishDiagnosticGrace("observation_interrupted")
            };
            handlePageHide = e => {
                this.diagnostics?.record("pagehide", "received", {
                    persisted: e.persisted
                }), this.finishDiagnosticGrace("observation_interrupted")
            };
            handlePageShow = e => {
                this.diagnostics?.record("pageshow", "received", {
                    persisted: e.persisted
                })
            };
            handleFreeze = () => {
                this.diagnostics?.record("freeze", "received"), this.finishDiagnosticGrace("observation_interrupted")
            };
            handleResume = () => {
                this.diagnostics?.record("resume", "received")
            };
            acquire(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return "prewarm" !== e && (this.liveRendererCount += 1), "render" !== e || this.hasRenderConsumer || (this.hasRenderConsumer = !0, this.recoverPreReadyFrame = t, null != this.cancelReadyTimeout && this.resetReadyTimeout()), "render" === e && this.moduleError && queueMicrotask(() => this.handleModuleError()), this.referenceCount += 1, this
            }
            subscribeRecovery(e) {
                return this.recoveryListeners.add(e), () => this.recoveryListeners.delete(e)
            }
            createRunner(e, t) {
                let r = this.iframe.contentWindow;
                if (this.disposed || !r) throw Error("DIL runner frame is unavailable");
                this.commandPort ? this.commandPort.postMessage(e, [t]) : r.postMessage(e, "*", [t]), this.diagnostics?.record("runner_create", "sent", {
                    runnerId: e.runnerId
                })
            }
            disposeRunner(e) {
                let t = this.iframe.contentWindow;
                if (this.disposed || !t) return;
                let r = {
                    __oaiDilFrame: !0,
                    kind: "disposeRunner",
                    protocolVersion: 15,
                    runnerId: e
                };
                this.commandPort ? this.commandPort.postMessage(r) : t.postMessage(r, "*")
            }
            retire() {
                this.retired = !0, eW.get(this.frameUrl) === this && eW.delete(this.frameUrl)
            }
            release() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "prewarm";
                ("prewarm" !== e && (this.liveRendererCount -= 1), this.referenceCount -= 1, this.retriedPreReadyFrame && !this.readyResolved && 0 === this.liveRendererCount || this.retired && 0 === this.liveRendererCount && null === this.diagnosticGraceTimeoutId) ? this.dispose(): 0 === this.referenceCount && this.dispose()
            }
            handleWindowMessage = e => {
                var t, r;
                if (!this.disposed && e.source === this.iframe.contentWindow) {
                    if (!this.readyResolved && null != (t = e.data) && "object" == typeof t && !0 === t.__oaiDilFrame && "moduleError" === t.kind && 15 === t.protocolVersion && (void 0 === t.policyDenied || !0 === t.policyDenied)) {
                        this.moduleError = e.data, this.handleModuleError();
                        return
                    }
                    if (this.diagnostics && null != e.data && "object" == typeof e.data) {
                        let t = e.data;
                        if (!0 === t.__oaiDilFrame && "diagnosticSnapshot" === t.kind && 15 === t.protocolVersion && "string" == typeof t.requestId && this.frameProbes.has(t.requestId) && "string" == typeof t.documentBootId && t.documentBootId.length <= 128 && (!this.documentBootId || this.documentBootId === t.documentBootId)) {
                            this.documentBootId = t.documentBootId;
                            let e = this.frameProbes.get(t.requestId);
                            if (window.clearTimeout(e.timeoutId), this.frameProbes.delete(t.requestId), !this.diagnostics.mergeSnapshot(t.diagnostics, !1, {
                                    documentBootId: t.documentBootId
                                })) return;
                            this.diagnostics.record("frame_probe", "resolved", {
                                runnerId: e.runnerId,
                                requestId: t.requestId,
                                elapsedMs: this.diagnostics.now() - e.startedAtMs
                            });
                            return
                        }
                        if (!0 === t.__oaiDilFrame && "diagnostic" === t.kind && 15 === t.protocolVersion) {
                            let e = (0, eH.d)(t.record);
                            if (!e || "host" === e.realm || !e.documentBootId) return;
                            if (this.documentBootId && this.documentBootId !== e.documentBootId) return void this.diagnostics.record("coverage", "ignored", {
                                reason: "stale_document"
                            });
                            if (this.documentBootId = e.documentBootId, this.diagnostics.ingest(e), "frame_probe" === e.operation && "received" === e.phase && e.requestId) {
                                let t = this.frameProbes.get(e.requestId);
                                t && this.diagnostics.record("frame_probe", "acknowledged", {
                                    requestId: e.requestId,
                                    runnerId: t.runnerId,
                                    elapsedMs: this.diagnostics.now() - t.startedAtMs
                                })
                            }
                            return
                        }
                    }
                    if (!this.readyResolved && null != (r = e.data) && "object" == typeof r && !0 === r.__oaiDilFrame && "ready" === r.kind && "number" == typeof r.protocolVersion) {
                        if (15 !== e.data.protocolVersion) return void this.fail(new eV("protocol_mismatch", `DIL runner protocol version mismatch: host 15, frame ${e.data.protocolVersion}`));
                        this.cancelReadyTimeout?.(), this.cancelReadyTimeout = null, this.iframe.removeEventListener("error", this.handleFrameError), this.diagnostics || this.removeListeners(), this.diagnostics?.record("frame_ready", "received"), this.commandPort = e.ports[0], this.readyResolved = !0, this.preReadyFrameRecovery && (this.preReadyFrameRecovery.replacementState = "ready"), this.resolveReady?.(), this.resolveReady = null, this.rejectReady = null
                    }
                }
            };
            handleFrameError = e => {
                e.target !== this.iframe || this.disposed || this.fail(new eV("frame_load_error", "Failed to load the DIL runner frame"))
            };
            handleModuleError() {
                this.moduleError && !this.readyResolved && this.recoverPreReadyFrame && 0 !== this.liveRendererCount && this.fail(new eV("frame_load_error", "Failed to load the DIL runner module"), !0 !== this.moduleError.policyDenied)
            }
            fail(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (this.disposed) return;
                this.diagnostics?.fault("frame_ready", e);
                let r = e instanceof eV ? this.recordFrameResource() : void 0;
                if (e instanceof eV && ("frame_load_error" === e.stage || "frame_timeout" === e.stage) && !this.readyResolved && this.recoverPreReadyFrame && !this.retriedPreReadyFrame && this.liveRendererCount > 0 && t && 403 !== r) {
                    for (let t of (this.retriedPreReadyFrame = !0, this.diagnostics && (this.preReadyFrameRecovery = {
                            startedAtMs: performance.now(),
                            reason: e.stage,
                            originalDocumentBootId: this.documentBootId,
                            replacementState: "pending"
                        }), this.diagnostics?.record("recovery", "decision", {
                            reason: "pre_ready_frame"
                        }), this.retireFrame(), [...this.recoveryListeners])) try {
                        t(e)
                    } catch {}
                    if (this.disposed) return;
                    this.documentBootId = void 0, this.moduleError = void 0, this.diagnostics?.resetDocumentProgress();
                    try {
                        this.iframe = this.createFrame(), this.mountFrame()
                    } catch (e) {
                        this.fail(eZ(e))
                    }
                    return
                }
                this.preReadyFrameRecovery && (this.preReadyFrameRecovery.replacementState = "failed"), this.rejectReady?.(e), this.resolveReady = null, this.rejectReady = null, this.dispose()
            }
            recordFrameResource() {
                if (this.diagnostics || this.recoverPreReadyFrame) try {
                    let e = new URL(this.iframe.src);
                    e.hash = "";
                    let t = [...new Set([this.iframe.src, e.href])].flatMap(e => performance.getEntriesByName(e, "resource")).filter(e => e.startTime >= this.frameNavigationStartedAtMs && e.startTime <= performance.now()),
                        r = 1 === t.length ? t[0] : void 0,
                        n = r && r.responseStatus >= 100 && r.responseStatus <= 599 ? r.responseStatus : void 0;
                    return this.diagnostics?.record("iframe_resource", "received", {
                        resourceStartMs: r?.startTime,
                        resourceEndMs: r?.responseEnd,
                        ...r && r.responseStatus >= 100 && r.responseStatus <= 599 ? {
                            httpStatus: r.responseStatus
                        } : {
                            reason: r ? "status_unavailable" : t.length > 1 ? "timing_ambiguous" : "timing_missing"
                        }
                    }), n
                } catch {
                    this.diagnostics?.record("iframe_resource", "ignored", {
                        reason: "timing_unavailable"
                    })
                }
            }
            dispose() {
                if (!this.disposed) {
                    for (let {
                            callback: e
                        }
                        of(this.disposed = !0, this.preReadyFrameRecovery?.replacementState === "pending" && (this.preReadyFrameRecovery.replacementState = "disposed"), this.recoveryListeners.clear(), null !== this.diagnosticGraceTimeoutId && (window.clearTimeout(this.diagnosticGraceTimeoutId), this.diagnosticGraceTimeoutId = null), this.diagnosticGraceCallbacks.splice(0))) try {
                        e(void 0, "frame_disposed")
                    } catch {}
                    this.diagnostics?.record("frame_dispose", "begin"), this.retireFrame(), eW.get(this.frameUrl) === this && eW.delete(this.frameUrl), this.rejectReady?.(Error("DIL runner frame was disposed before it was ready")), this.resolveReady = null, this.rejectReady = null
                }
            }
            retireFrame() {
                for (let e of (this.commandPort?.close(), this.commandPort = void 0, this.frameProbes.values())) window.clearTimeout(e.timeoutId);
                this.frameProbes.clear(), this.removeListeners(), this.iframe.remove()
            }
            removeListeners() {
                window.removeEventListener("message", this.handleWindowMessage), this.iframe.removeEventListener("error", this.handleFrameError), this.iframe.removeEventListener("load", this.handleFrameLoad), document.removeEventListener("visibilitychange", this.handleVisibility), window.removeEventListener("pagehide", this.handlePageHide), window.removeEventListener("pageshow", this.handlePageShow), document.removeEventListener("freeze", this.handleFreeze), document.removeEventListener("resume", this.handleResume), this.cancelReadyTimeout?.(), this.cancelReadyTimeout = null
            }
        }

        function eQ(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                i = eW.get(e.href);
            if (i) return i.acquire(t, n);
            let a = new eq(e, r);
            return eW.set(e.href, a), a.acquire(t, n)
        }

        function eG(e) {
            let t = new URL(e, window.location.href);
            if (t.origin === window.location.origin) throw Error("The DIL runner frame must use a different origin");
            return t
        }

        function eJ(e) {
            let t, r, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = eQ(eG(e), "prewarm", t.diagnostics),
                        n = !1;
                    return {
                        ready: r.ready,
                        get isReusable() {
                            return !n && r.isReusable
                        },
                        release() {
                            n || (n = !0, r.release())
                        }
                    }
                }(e, i);
            try {
                t = new eK("DIL.render(null);", {
                    frameUrl: e,
                    ...i
                }, "prewarm")
            } catch (e) {
                throw a.release(), e
            }
            return {
                ready: new Promise((e, i) => {
                    n = () => i(Error("DIL worker prewarm was released")), r = t.subscribe(() => {
                        let r = t.getSnapshot();
                        r.error ? t.getLifecycleSnapshot().frameRecovering || i(r.error) : r.version > 0 && e()
                    })
                }).then(() => {
                    r?.(), t.dispose(), n = void 0
                }, e => {
                    throw r?.(), t.dispose(), a.release(), n = void 0, e
                }),
                get isReusable() {
                    return a.isReusable
                },
                release() {
                    n?.(), r?.(), t.dispose(), a.release()
                }
            }
        }
        class eK {
            frameConsumer;
            extensions;
            compiledDil;
            data;
            disposed = !1;
            dilComponents;
            encodedGlobals;
            encodedPersistState;
            frame;
            unsubscribeFrameRecovery;
            invokeGlobal;
            lifecycleListeners = new Set;
            listeners = new Set;
            interactionCapabilities = new Map;
            messenger = null;
            messengerTransports = new Map;
            ready;
            lastInputCommand;
            renderTree = new eO;
            runnerId;
            serializedStateSnapshot;
            stateSnapshot;
            widgetStateSnapshots = {};
            snapshot = {
                error: null,
                tree: null,
                version: 0
            };
            lifecycleSnapshot = {
                failureStage: null,
                firstSnapshotSucceeded: !1,
                frameReady: !1,
                frameRecovering: !1,
                workerReady: !1
            };
            sawFirstSnapshot = !1;
            unsubscribeLifecycle = null;
            cancelWorkerReadyTimeout = null;
            onDiagnostics;
            preparationObservation;
            recoverSafeStartupPeers;
            recoverPreReadyFrame;
            failureId;
            failureSequence = 0;
            retainedDiagnostics;
            retainedRecoveryDiagnostics;
            recoveryFailureId;
            observesFrameRecovery = !1;
            releaseDiagnosticRunner;
            observingTimeout = !1;
            unsubscribeMessengerEvent = null;
            unsubscribeSnapshot = null;
            constructor(e, t, r = "render") {
                let n;
                this.frameConsumer = r, this.extensions = (0, eU.a)(t, (e, t) => {
                    let r = void 0 === e ? void 0 : this.interactionCapabilities.get(e);
                    if (r) try {
                        (0, eh.g)(r.capability, t, r.source)
                    } finally {
                        e && (0, eh.f)(r.capability) && this.releaseInteractionCapability(e)
                    }
                });
                let i = eG(t.frameUrl);
                this.runnerId = `runner_${e$++}`, this.onDiagnostics = t.onDiagnostics, this.preparationObservation = "preparation" === r && t.onPreparationEnd ? new eA(t.onPreparationEnd) : void 0, this.recoverSafeStartupPeers = !0 === t.recoverSafeStartupPeers, this.recoverPreReadyFrame = !0 === t.recoverPreReadyFrame;
                let a = eW.get(i.href)?.diagnostics === void 0 && (eW.has(i.href) || !0 !== t.diagnostics) ? void 0 : new eH.a({
                    realm: "host",
                    context: {
                        runnerId: this.runnerId
                    }
                });
                a?.record("host_setup", "begin"), a?.record("encode_globals", "begin");
                let s = t.persistState;
                try {
                    var l;
                    let e, r, i;
                    l = {
                        globals: t.globals ?? {},
                        ...void 0 === s ? {} : {
                            persistState: (e, t, r) => {
                                if (void 0 !== t && ("string" != typeof t || !t)) return;
                                let n = (0, d.d)(e, t);
                                if (n) {
                                    if (void 0 === t) this.serializedStateSnapshot = n.serialized, this.stateSnapshot = n.state;
                                    else if (this.widgetStateSnapshots = {
                                            ...this.widgetStateSnapshots,
                                            [t]: n.state
                                        }, !0 === r && !1 === s.persistInitialWidgetState) return;
                                    try {
                                        s.setItem(void 0 === t ? d.a : (0, d.e)(t), n.serialized)
                                    } catch {}
                                }
                            }
                        }
                    }, e = new Map, r = 0, n = {
                        globals: (i = (t, n, a) => {
                            if ("function" == typeof t) {
                                let i = `global_${r}`;
                                return r += 1, e.set(i, {
                                    fn: t,
                                    receiver: n
                                }), {
                                    __oaiDilGlobalFunction: i
                                }
                            }
                            if (null == t || void 0 === t || "boolean" == typeof t || "number" == typeof t || "bigint" == typeof t || "string" == typeof t) return t;
                            if ("object" != typeof t) throw Error(`DIL frame globals cannot contain ${typeof t} values`);
                            if (a.has(t)) throw Error("DIL frame globals cannot contain cycles");
                            a.add(t);
                            try {
                                if (Array.isArray(t)) return t.map(e => i(e, t, a));
                                let e = Object.getPrototypeOf(t);
                                if (e !== Object.prototype && null !== e) throw Error("DIL frame globals must contain only plain objects");
                                if (Object.getOwnPropertySymbols(t).length > 0) throw Error("DIL frame globals cannot contain symbol properties");
                                if (Object.hasOwn(t, eN)) throw Error(`DIL frame globals cannot contain reserved property "${eN}"`);
                                return Object.fromEntries(Object.entries(Object.getOwnPropertyDescriptors(t)).flatMap(e => {
                                    let [r, n] = e;
                                    if (!n.enumerable) return [];
                                    if (!("value" in n)) throw Error("DIL frame globals cannot contain accessors");
                                    return [
                                        [r, i(n.value, t, a)]
                                    ]
                                }))
                            } finally {
                                a.delete(t)
                            }
                        })(l, void 0, new Set),
                        invoke(t, r) {
                            let n = e.get(t);
                            if (!n) throw Error(`Unknown DIL frame global function "${t}"`);
                            return Reflect.apply(n.fn, n.receiver, r)
                        }
                    }
                } catch (e) {
                    if (a?.fault("encode_globals", e), a) try {
                        t.onDiagnostics?.(Object.freeze({
                            ...a.snapshot(),
                            runnerId: this.runnerId,
                            failureId: `${this.runnerId}_setup_failure`
                        }))
                    } catch {}
                    throw e
                }
                if (a?.record("encode_globals", "returned"), this.compiledDil = e, this.data = t.data, this.dilComponents = t.dilComponents ?? {}, s) {
                    a?.record("read_persistence", "begin"), this.widgetStateSnapshots = (0, d.c)(s);
                    try {
                        let e = s.getItem(d.a),
                            t = null === e ? void 0 : (0, d.d)(JSON.parse(e));
                        this.serializedStateSnapshot = t?.serialized, this.stateSnapshot = t?.state
                    } catch (e) {
                        a?.fault("read_persistence", e)
                    }
                    a?.record("read_persistence", "returned")
                }
                for (let e of (this.encodedGlobals = n.globals.globals, this.encodedPersistState = n.globals.persistState, this.invokeGlobal = n.invoke, t.onLifecycleEvent && this.lifecycleListeners.add(t.onLifecycleEvent), a?.record("acquire_frame", "begin"), this.frame = eQ(i, this.frameConsumer, t.diagnostics, t.recoverPreReadyFrame), this.observesFrameRecovery = this.frame.getRecoveryDiagnostics()?.replacementState === "pending", this.unsubscribeFrameRecovery = this.frame.subscribeRecovery(e => {
                        this.observesFrameRecovery = !0, this.setError(e, e.stage, !0)
                    }), this.releaseDiagnosticRunner = this.frame.diagnostics?.retainRunner(this.runnerId), a?.snapshot().records ?? [])) this.frame.diagnostics?.ingest(e);
                this.recordDiagnostic("acquire_frame", "returned"), this.recordDiagnostic("host_setup", "returned"), this.ready = this.initialize(), this.ready.catch(this.setError)
            }
            promoteToRender() {
                if (this.disposed || "render" === this.frameConsumer) return;
                this.frame.acquire("render", this.recoverPreReadyFrame), this.frame.release(this.frameConsumer), this.frameConsumer = "render";
                let e = this.preparationObservation;
                this.preparationObservation = void 0, e?.finish("reused")
            }
            dispose = () => {
                if (!this.disposed) {
                    for (let e of (this.disposed = !0, this.preparationObservation?.finish("discarded"), this.recordDiagnostic("runner_dispose", "begin"), this.extensions.reset(), this.unsubscribeMessengerEvent?.(), this.unsubscribeSnapshot?.(), this.unsubscribeLifecycle?.(), this.unsubscribeMessengerEvent = null, this.unsubscribeSnapshot = null, this.unsubscribeLifecycle = null, this.cancelWorkerReadyTimeout?.(), this.cancelWorkerReadyTimeout = null, this.messenger && (this.frame.disposeRunner(this.runnerId), this.messenger.dispose(), this.messenger = null), this.unsubscribeFrameRecovery(), this.frame.release(this.frameConsumer), this.listeners.clear(), this.lifecycleListeners.clear(), this.messengerTransports.clear(), this.renderTree.reset(), this.interactionCapabilities.keys())) this.releaseInteractionCapability(e);
                    this.recordDiagnostic("runner_dispose", "returned"), this.retainedRecoveryDiagnostics = this.readRecoveryDiagnostics(), this.retainedDiagnostics = this.getDiagnostics(), this.observingTimeout || this.releaseDiagnosticRunner?.()
                }
            };
            getSnapshot = () => this.snapshot;
            async getInputSettledSnapshot() {
                if (await this.ready, this.lastInputCommand) {
                    let e = await this.lastInputCommand;
                    if (e?.inputApplied === !1) return
                } else 0 === this.snapshot.version && await new Promise(e => {
                    let t = this.subscribe(() => {
                        this.snapshot.version > 0 && (t(), e())
                    })
                });
                return this.snapshot
            }
            get diagnosticsEnabled() {
                return void 0 !== this.frame.diagnostics
            }
            getDiagnostics = () => {
                if (this.disposed && this.retainedDiagnostics) return this.retainedDiagnostics;
                let e = this.frame.getDiagnostics(this.runnerId);
                if (e) return Object.freeze({
                    ...e,
                    runnerId: this.runnerId,
                    failureId: this.failureId,
                    preReadyFrameRecovery: this.getRecoveryDiagnostics()
                })
            };
            readRecoveryDiagnostics() {
                if (!this.observesFrameRecovery) return;
                let e = this.frame.getRecoveryDiagnostics();
                if (e) return Object.freeze({
                    ...e,
                    runnerId: this.runnerId,
                    failureId: this.recoveryFailureId,
                    ...this.disposed ? {
                        runnerDisposed: !0
                    } : {}
                })
            }
            getRecoveryDiagnostics = () => this.disposed ? this.retainedRecoveryDiagnostics : this.readRecoveryDiagnostics();
            recordDiagnostic = (e, t, r) => {
                this.frame.diagnostics?.record(e, t, {
                    ...r,
                    runnerId: this.runnerId
                })
            };
            publishDiagnostics = () => {
                let e = this.getDiagnostics();
                if (e) try {
                    this.onDiagnostics?.(e, this.getRecoveryDiagnostics)
                } catch {}
            };
            getLifecycleSnapshot = () => this.lifecycleSnapshot;
            subscribeLifecycle = e => (this.lifecycleListeners.add(e), () => {
                this.lifecycleListeners.delete(e)
            });
            registerDilMessengerTransport = (e, t) => (this.messengerTransports.set(e, t), this.runWhenReady(t => t.commands.registerMessengerTransport({
                channelId: e
            })), () => {
                this.messengerTransports.get(e) === t && (this.messengerTransports.delete(e), this.runWhenReady(t => t.commands.unregisterMessengerTransport({
                    channelId: e
                })))
            });
            setCompiledDil = (e, t, r) => {
                let n = void 0 !== r && r !== this.dilComponents;
                this.compiledDil = e, t && (this.data = t), n && (this.dilComponents = r), this.messenger && (this.lastInputCommand = this.messenger.commands.setCompiledDil({
                    compiledDil: e,
                    data: t,
                    ...n ? {
                        dilComponents: this.dilComponents
                    } : {}
                }), this.runCommand(this.lastInputCommand))
            };
            update = this.setCompiledDil;
            setData = e => {
                this.data = e, this.messenger && (this.lastInputCommand = this.messenger.commands.setData({
                    data: e
                }), this.runCommand(this.lastInputCommand))
            };
            setStateSnapshot = (e, t) => {
                if (!this.encodedPersistState) return;
                let r = void 0 === e ? null : (0, d.d)(e, t);
                if (void 0 !== e && !r) return;
                let n = void 0 === t ? this.serializedStateSnapshot : JSON.stringify(this.widgetStateSnapshots[t]);
                r?.serialized !== n && (void 0 === t ? (this.serializedStateSnapshot = r?.serialized, this.stateSnapshot = r?.state) : r ? this.widgetStateSnapshots = {
                    ...this.widgetStateSnapshots,
                    [t]: r.state
                } : delete this.widgetStateSnapshots[t], this.messenger && this.runCommand(this.messenger.commands.setStateSnapshot({
                    snapshot: r?.state,
                    widgetId: t
                })))
            };
            subscribeDictationAudioLevels = (e, t) => this.extensions.subscribeDictationAudioLevels(e, t);
            subscribe = e => (this.listeners.add(e), () => {
                this.listeners.delete(e)
            });
            trigger = (() => {
                var e = this;
                return function(t) {
                    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                    return e.triggerCallback(t, n, !1)
                }
            })();
            triggerWithInteraction = (() => {
                var e = this;
                return function(t, r, n) {
                    for (var i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++) a[s - 3] = arguments[s];
                    let l = globalThis.crypto.randomUUID();
                    return e.interactionCapabilities.set(l, r), e.triggerCallback(t, a, n, l).finally(() => e.releaseInteractionCapability(l))
                }
            })();
            triggerWithError = (() => {
                var e = this;
                return function(t) {
                    for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                    return e.triggerCallback(t, n, !0)
                }
            })();
            async initialize() {
                let e = this.frame.isReady;
                if (await this.frame.ready, this.emitLifecycle({
                        kind: "frame_ready",
                        wasReady: e
                    }), this.disposed) throw Error("DIL frame runner was disposed before it was ready");
                let t = new MessageChannel,
                    r = new eF.a({
                        diagnostics: this.frame.diagnostics,
                        diagnosticContext: {
                            runnerId: this.runnerId
                        },
                        handlers: {
                            ...this.extensions.handlers((e, t) => r.emit(e, t)),
                            invokeGlobal: async e => {
                                let {
                                    args: t,
                                    id: r,
                                    interactionCapability: n
                                } = e;
                                try {
                                    let e = null == n ? void 0 : this.interactionCapabilities.get(n),
                                        i = null == e ? this.invokeGlobal(r, t) : (0, eh.g)(e.capability, () => this.invokeGlobal(r, t), e.source);
                                    return null != n && null != e && (0, eh.f)(e.capability) && this.releaseInteractionCapability(n), await i
                                } catch (e) {
                                    throw this.recordFailure("host_error"), e
                                }
                            },
                            invokeMessengerCommand: async e => {
                                let {
                                    channelId: t,
                                    data: r,
                                    type: n
                                } = e, i = this.messengerTransports.get(t);
                                if (!i) throw this.recordFailure("messenger_error"), Error(`Unknown DIL messenger transport "${t}"`);
                                try {
                                    return await i.command(n, r)
                                } catch (e) {
                                    throw this.recordFailure("messenger_error"), e
                                }
                            }
                        },
                        port: t.port1
                    });
                this.messenger = r, this.unsubscribeSnapshot = r.on("snapshot", this.receiveSnapshot), this.unsubscribeLifecycle = r.on("lifecycle", this.receiveLifecycle), this.unsubscribeMessengerEvent = r.on("messengerEvent", this.receiveMessengerEvent);
                let n = {
                    __oaiDilFrame: !0,
                    compiledDil: this.compiledDil,
                    data: this.data,
                    dilComponents: this.dilComponents,
                    ...this.encodedPersistState ? {
                        statePersistence: {
                            persistState: this.encodedPersistState,
                            widgetSnapshots: this.widgetStateSnapshots,
                            ...void 0 === this.stateSnapshot ? {} : {
                                snapshot: this.stateSnapshot
                            }
                        }
                    } : {},
                    globals: this.encodedGlobals,
                    ...this.extensions.initialization,
                    kind: "createRunner",
                    protocolVersion: 15,
                    runnerId: this.runnerId,
                    ...this.recoverSafeStartupPeers ? {
                        recoverSafeStartupPeers: !0
                    } : {}
                };
                try {
                    return this.cancelWorkerReadyTimeout = eX(() => {
                        if (this.cancelWorkerReadyTimeout = null, this.frame.retire(), this.frame.prepareDiagnosticGrace(), this.prepareFailure(), this.frame.diagnostics) {
                            let e = this.frame.getDiagnostics(this.runnerId);
                            this.observingTimeout = !0, this.frame.retireForDiagnostics(this.runnerId, (t, r) => {
                                try {
                                    (t ?? e) && this.onDiagnostics?.(Object.freeze({
                                        ...t ?? e,
                                        runnerId: this.runnerId,
                                        failureId: this.failureId,
                                        postTimeout: !0,
                                        postTimeoutCoverage: r
                                    }), this.getRecoveryDiagnostics)
                                } catch {} finally {
                                    this.observingTimeout = !1, this.disposed && this.releaseDiagnosticRunner?.()
                                }
                            })
                        }
                        this.extensions.reset(), this.frame.disposeRunner(this.runnerId), r.dispose("Timed out waiting for the DIL runner worker"), this.messenger = null, this.setError(Error("Timed out waiting for the DIL runner worker"), "worker_timeout")
                    }, 1e4, this.frame.diagnostics, "worker_timer", () => this.frame.probe(this.runnerId), this.runnerId), this.frame.createRunner(n, t.port2), r
                } catch (e) {
                    throw this.recordDiagnostic("runner_create", "threw", {
                        error: e
                    }), this.frame.retire(), this.cancelWorkerReadyTimeout?.(), this.cancelWorkerReadyTimeout = null, this.unsubscribeMessengerEvent?.(), this.unsubscribeSnapshot?.(), this.unsubscribeLifecycle?.(), this.unsubscribeMessengerEvent = null, this.unsubscribeSnapshot = null, this.unsubscribeLifecycle = null, r.dispose(), this.messenger = null, new eV("worker_start_error", eZ(e).message)
                }
            }
            triggerCallback(e, t, r, n) {
                return this.disposed ? r ? Promise.reject(Error("DIL frame runner is disposed")) : Promise.resolve(void 0) : this.ready.then(i => i.commands.trigger({
                    args: t,
                    id: e,
                    ...null == n ? {} : {
                        interactionCapability: n
                    },
                    propagateErrors: r
                })).catch(e => {
                    if (r) throw this.messenger && this.recordFailure("callback_error"), e;
                    this.messenger && this.setError(e, "callback_error")
                })
            }
            releaseInteractionCapability(e) {
                let t = this.interactionCapabilities.get(e);
                t && (this.interactionCapabilities.delete(e), (0, eh.f)(t.capability) && (0, eh.e)(t.capability))
            }
            receiveLifecycle = e => {
                if ("worker_ready" === e.kind && this.recordDiagnostic("worker_ready", "received"), "failure" === e.kind) {
                    ("worker_timeout" === e.stage || "worker_start_error" === e.stage) && this.extensions.reset(), this.cancelWorkerReadyTimeout?.(), this.cancelWorkerReadyTimeout = null, this.recordFailure(e.stage);
                    return
                }
                "worker_ready" === e.kind && (this.extensions.reset(), this.cancelWorkerReadyTimeout?.(), this.cancelWorkerReadyTimeout = null), "worker_ready" === e.kind && this.lifecycleSnapshot.workerReady && (this.renderTree.reset(), this.preparationObservation?.reset()), this.emitLifecycle(e)
            };
            receiveSnapshot = e => {
                let t;
                e.diagnostics && this.frame.diagnostics?.mergeSnapshot(e.diagnostics), this.recordDiagnostic("snapshot_receive", "received", {
                    snapshotVersion: e.version,
                    hasError: null !== e.error
                }), !e.error && this.snapshot.error && (this.failureId = void 0), this.cancelWorkerReadyTimeout?.(), this.cancelWorkerReadyTimeout = null, this.lifecycleSnapshot.workerReady || this.emitLifecycle({
                    kind: "worker_ready"
                }), this.sawFirstSnapshot ? e.error && this.recordFailure("runtime_error") : (this.sawFirstSnapshot = !0, e.error ? this.recordFailure("runtime_error") : this.emitLifecycle({
                    kind: "first_snapshot_success"
                })), this.recordDiagnostic("apply_tree", "begin", {
                    snapshotVersion: e.version
                });
                let r = e.error ? (0, eF.b)(e.error) : null;
                try {
                    t = e.operations ? this.renderTree.apply(e.operations) : Object.hasOwn(e, "tree") ? e.tree ?? null : this.snapshot.tree
                } catch (t) {
                    throw this.recordDiagnostic("apply_tree", "threw", {
                        error: t,
                        snapshotVersion: e.version
                    }), this.prepareFailure(), t
                }
                this.preparationObservation?.recordSnapshot(null != r), this.snapshot = {
                    error: r,
                    tree: t,
                    version: e.version
                }, this.recordDiagnostic("apply_tree", "returned", {
                    snapshotVersion: e.version,
                    treePresent: null !== this.snapshot.tree
                }), this.publishDiagnostics(), this.emit()
            };
            receiveMessengerEvent = e => {
                let {
                    channelId: t,
                    data: r,
                    type: n
                } = e;
                try {
                    this.messengerTransports.get(t)?.event(n, r)
                } catch (e) {
                    this.setError(e, "messenger_error")
                }
            };
            runWhenReady(e) {
                this.disposed || this.runCommand(this.ready.then(e))
            }
            runCommand(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "runtime_error";
                e.catch(e => {
                    this.messenger && this.setError(e, t)
                })
            }
            setError = (() => {
                var e = this;
                return function(t) {
                    var r;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ((r = t) instanceof eV ? r.stage : null) ?? "host_error",
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    e.disposed || (e.recordDiagnostic("host_error", "threw", {
                        error: t,
                        reason: n
                    }), e.recordFailure(n, i), e.snapshot = {
                        error: eZ(t),
                        tree: null,
                        version: e.snapshot.version + +!i
                    }, e.emit())
                }
            })();
            recordFailure(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.prepareFailure(t), this.emitLifecycle({
                    kind: "failure",
                    stage: e,
                    ...t ? {
                        recovering: !0
                    } : {}
                })
            }
            prepareFailure() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.preparationObservation?.recordFailure(), this.failureId ??= `${this.frame.frameId}_${this.runnerId}_failure_${++this.failureSequence}`, e && (this.recoveryFailureId = this.failureId), this.publishDiagnostics()
            }
            emitLifecycle(e) {
                if (this.disposed) return;
                switch (e.kind) {
                    case "frame_ready":
                        if (this.lifecycleSnapshot.frameReady) return;
                        this.lifecycleSnapshot = {
                            ...this.lifecycleSnapshot,
                            frameReady: !0,
                            frameRecovering: !1
                        };
                        break;
                    case "worker_ready":
                        if (this.lifecycleSnapshot.workerReady) return;
                        this.lifecycleSnapshot = {
                            ...this.lifecycleSnapshot,
                            workerReady: !0
                        };
                        break;
                    case "first_snapshot_success":
                        if (this.lifecycleSnapshot.firstSnapshotSucceeded) return;
                        this.lifecycleSnapshot = {
                            ...this.lifecycleSnapshot,
                            firstSnapshotSucceeded: !0
                        };
                        break;
                    case "failure":
                        if (this.preparationObservation?.recordFailure(), this.lifecycleSnapshot.failureStage === e.stage && this.lifecycleSnapshot.frameRecovering === (!0 === e.recovering)) return;
                        this.lifecycleSnapshot = {
                            ...this.lifecycleSnapshot,
                            failureStage: e.stage,
                            frameRecovering: !0 === e.recovering
                        }
                }
                let t = !1;
                for (let r of this.lifecycleListeners) try {
                    r(e)
                } catch {
                    this.lifecycleListeners.delete(r), t = !0
                }
                t && "failure" !== e.kind && this.recordFailure("host_error")
            }
            emit() {
                for (let e of (this.recordDiagnostic("notify", "begin", {
                        snapshotVersion: this.snapshot.version
                    }), this.listeners)) e();
                this.recordDiagnostic("notify", "returned", {
                    snapshotVersion: this.snapshot.version
                })
            }
        }

        function eZ(e) {
            return e instanceof Error ? e : Error(String(e))
        }

        function eX(e, t, r) {
            let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "frame_timer",
                i = arguments.length > 4 ? arguments[4] : void 0,
                a = arguments.length > 5 ? arguments[5] : void 0,
                s = arguments.length > 6 ? arguments[6] : void 0,
                l = null,
                o = null,
                u = null,
                c = 0,
                d = 0,
                f = !1,
                h = !1,
                p = () => {
                    null != l && window.clearTimeout(l), null != o && window.clearTimeout(o), null != u && window.clearTimeout(u), r?.record(n, "cancelled", {
                        runnerId: a
                    }), document.removeEventListener("visibilitychange", m)
                },
                m = () => {
                    (null != l && window.clearTimeout(l), null != o && window.clearTimeout(o), null != u && window.clearTimeout(u), l = null, document.hidden) ? r?.record(n, "paused", {
                        runnerId: a,
                        hidden: !0,
                        budgetMs: t
                    }): (c = r?.now() ?? 0, r?.record(n, 0 == d++ ? "armed" : "rearmed", {
                        runnerId: a,
                        budgetMs: t,
                        deadlineMs: c + t,
                        hidden: !1
                    }), r && i && !f && (o = window.setTimeout(() => {
                        f = !0, r.record("event_loop", "fired", {
                            runnerId: a,
                            budgetMs: t / 2,
                            elapsedMs: r.now() - c,
                            hidden: document.hidden
                        }), i()
                    }, t / 2)), r && s && !h && (u = window.setTimeout(() => {
                        h = !0, document.hidden || r.now() >= c + t || s()
                    }, .9 * t)), l = window.setTimeout(() => {
                        r?.record(n, "fired", {
                            runnerId: a,
                            budgetMs: t,
                            deadlineMs: c + t,
                            elapsedMs: r.now() - c
                        }), p(), e()
                    }, t))
                };
            return document.addEventListener("visibilitychange", m), m(), p
        }
    }),
    tVuk: (function(e, t, r) {
        let n = "dil:widget-states";

        function i(e, t) {
            try {
                if (!l(e) || !a(e, 0, new WeakSet, {
                        entries: 0,
                        maxEntries: void 0 === t ? 128 : 512
                    })) return null;
                let r = JSON.stringify(e);
                if (new TextEncoder().encode(r).byteLength > 8192) return null;
                let n = JSON.parse(r);
                return l(n) ? {
                    serialized: r,
                    state: n
                } : null
            } catch {
                return null
            }
        }

        function a(e, t, r, n) {
            if (t > 8) return !1;
            if (null === e || "boolean" == typeof e) return !0;
            if ("string" == typeof e) return !o(e);
            if ("number" == typeof e) return Number.isFinite(e);
            if ("object" != typeof e || r.has(e)) return !1;
            r.add(e);
            try {
                if (Array.isArray(e)) {
                    if (Object.getPrototypeOf(e) !== Array.prototype || e.length > n.maxEntries - n.entries || Reflect.ownKeys(e).length !== e.length + 1) return !1;
                    for (let i = 0; i < e.length; i += 1)
                        if (!s(e, String(i), t, r, n)) return !1;
                    return !0
                }
                if (!l(e)) return !1;
                for (let i of Reflect.ownKeys(e))
                    if ("string" != typeof i || o(i) || !s(e, i, t, r, n)) return !1;
                return !0
            } finally {
                r.delete(e)
            }
        }

        function s(e, t, r, n, i) {
            let s = Object.getOwnPropertyDescriptor(e, t);
            return !!s && !!s.enumerable && "value" in s && (i.entries += 1, i.entries <= i.maxEntries && a(s.value, r + 1, n, i))
        }

        function l(e) {
            if (null == e || "object" != typeof e || Array.isArray(e)) return !1;
            let t = Object.getPrototypeOf(e);
            return t === Object.prototype || null === t
        }

        function o(e) {
            for (let t = 0; t < e.length; t += 1) {
                let r = e.charCodeAt(t);
                if (r < 55296 || r > 57343) continue;
                if (r > 56319) return !0;
                let n = e.charCodeAt(t + 1);
                if (!(n >= 56320 && n <= 57343)) return !0;
                t += 1
            }
            return !1
        }
        r.d(t, {}, {
            a: "dil:state",
            b: n,
            c: function(e) {
                try {
                    let t = JSON.parse(e?.getItem(n) ?? "{}");
                    if (!l(t)) return {};
                    return Object.fromEntries(Object.entries(t).flatMap(e => {
                        let [t, r] = e, n = i(r, t);
                        return n ? [
                            [t, n.state]
                        ] : []
                    }))
                } catch {
                    return {}
                }
            },
            d: i,
            e: e => `dil:widget-state:${e}`
        })
    }),
    IHbR: (function(e, t, r) {
        function n(e) {
            return e >= 65 && e <= 90 || e >= 97 && e <= 122
        }
        r.d(t, {}, {
            a: function(e) {
                if ("string" != typeof e || 0 === e.length || e.length > 128 || !n(e.charCodeAt(0))) return !1;
                for (let t = 1; t < e.length; t++) {
                    let r = e.charCodeAt(t);
                    if (!n(r) && !(r >= 48 && r <= 57) && 95 !== r && 45 !== r) return !1
                }
                return !0
            }
        })
    }),
    M2mI: (function(e, t, r) {
        var n = r("J6DH");
        r.d(t, {}, {
            a: class {
                constructor(e, t) {
                    this.host = t, this.claimed = !1, this.invalidated = !1, this.context = Object.freeze({
                        ...e
                    })
                }
                invalidate() {
                    this.invalidated = !0
                }
                isContextValid() {
                    return this.invalidated || this.host.isContextValid(this.context) || this.invalidate(), !this.invalidated
                }
                async issueNewTurn(e, t, r) {
                    if (this.claimed) return !1;
                    this.claimed = !0;
                    let i = !1;
                    try {
                        let a = void 0 === t ? void 0 : JSON.parse(JSON.stringify(t));
                        if (void 0 !== a && (0, n.a)(a, !1), !this.isContextValid() || !r() || this.invalidated) return !1;
                        i = !0;
                        let s = await this.host.issueNewTurn(this.context, e, a);
                        return !1 === s && (this.claimed = !1), s
                    } finally {
                        i || (this.claimed = !1)
                    }
                }
            }
        })
    }),
    x2wW: (function(e, t, r) {
        var n = r("J6DH"),
            i = r("SHi6");
        let a = console,
            s = new WeakMap,
            l = Object.freeze({
                status: i.b.Idle,
                transcript: "",
                error: null
            });
        r.d(t, {}, {
            a: class {
                constructor(e, t) {
                    this.runtime = e, this.scheduleRender = t, this.disposed = !1, this.generation = 0, this.state = l, this.start = () => {
                        this.startSession(this.runtime)
                    }, this.stop = () => {
                        let e = this.attempt;
                        void 0 !== e && this.state.status !== i.b.Stopping && (this.update({
                            ...this.state,
                            status: i.b.Stopping
                        }), this.sendStop(e))
                    }, this.cancel = () => {
                        if (this.cancelDeferredTurn(), this.disposed || void 0 === this.attempt && this.state === l) return;
                        let e = this.invalidate();
                        if (this.state = l, e?.session !== void 0) {
                            try {
                                e.session.cancel()
                            } catch (e) {
                                a.warn("DIL dictation cancellation failed")
                            }
                            this.disposeSession(e.session)
                        }
                        this.scheduleRender()
                    }
                }
                setOptions(e) {
                    this.options = e
                }
                snapshot() {
                    let e = (0, n.b)({
                        ...this.state,
                        audioLevelsSupported: this.runtime?.supportsAudioLevels === !0,
                        ...this.runtime?.supportsSpeakChallenge === !0 ? {
                            speakChallengeSupported: !0
                        } : {},
                        sessionId: this.attempt?.session?.sessionId ?? null,
                        start: this.start,
                        stop: this.stop,
                        cancel: this.cancel
                    });
                    return s.set(e, this), e
                }
                startWithDeferredTurn(e) {
                    if (this.disposed || void 0 !== this.attempt || !this.runtime?.isUserInteraction()) throw Error("Deferred dictation requires an idle session and a direct interaction.");
                    this.startSession(e);
                    let t = this.deferredTurn;
                    if (void 0 === t) throw Error("Deferred dictation could not start.");
                    return t
                }
                startSession(e) {
                    let t;
                    if (this.disposed || void 0 !== this.attempt) return;
                    let r = this.runtime;
                    if (void 0 === r || void 0 === e) return void this.update({
                        ...l,
                        status: i.b.Error,
                        error: {
                            code: "integration_error",
                            message: "The dictation host service is not configured."
                        }
                    });
                    if (!r.isUserInteraction()) return;
                    this.cancelDeferredTurn();
                    let n = {
                        generation: ++this.generation,
                        session: void 0,
                        startInvoked: !1,
                        stopSent: !1
                    };
                    this.attempt = n, this.state = {
                        ...l,
                        status: i.b.Starting
                    };
                    try {
                        t = (0, i.c)(void 0 === this.options ? {} : this.options)
                    } catch (e) {
                        t = null
                    }
                    if (null === t) return void this.finish(n, {
                        code: "invalid_options",
                        message: "Invalid dictation options: language must be nonblank and at most 128 characters; speaking_exercise context requires a nonblank expectedPhrase."
                    }, void 0);
                    if (this.isCurrent(n)) {
                        if (!0 !== r.supportsSpeakChallenge && t.context?.targetWords !== void 0) {
                            let {
                                kind: e,
                                expectedPhrase: r
                            } = t.context;
                            t = {
                                ...t,
                                context: {
                                    kind: e,
                                    expectedPhrase: r
                                }
                            }
                        }
                        if (this.scheduleRender(), this.isCurrent(n)) try {
                            let r = e.createSession(t, e => this.receive(n, e));
                            if (this.deferredTurn = r.deferredTurn, !this.isCurrent(n)) return void this.disposeSession(r);
                            n.session = r, n.startInvoked = !0, r.start(), this.isCurrent(n) && this.scheduleRender(), this.sendStop(n)
                        } catch (e) {
                            this.commandFailed(n)
                        }
                    }
                }
                sendStop(e) {
                    if (this.isCurrent(e) && this.state.status === i.b.Stopping && e.startInvoked && void 0 !== e.session && !e.stopSent) {
                        e.stopSent = !0;
                        try {
                            e.session.stop()
                        } catch (t) {
                            this.commandFailed(e)
                        }
                    }
                }
                dispose() {
                    if (this.disposed) return;
                    this.disposed = !0, this.cancelDeferredTurn(), this.options = void 0;
                    let e = this.invalidate();
                    this.state = l, e?.session !== void 0 && this.disposeSession(e.session)
                }
                receive(e, t) {
                    if (this.isCurrent(e)) switch (t.kind) {
                        case i.a.Recording:
                            this.state.status === i.b.Starting && this.update({
                                ...this.state,
                                status: i.b.Recording
                            });
                            break;
                        case i.a.Transcript: {
                            let e = t.speakChallengeProgress;
                            this.update({
                                ...this.state,
                                transcript: t.transcript,
                                ...void 0 === e ? {} : {
                                    speakChallengeProgress: {
                                        matchedWordIndices: [...e.matchedWordIndices],
                                        completed: e.completed
                                    }
                                }
                            });
                            break
                        }
                        case i.a.Stopping:
                            e.stopSent = !0, this.update({
                                ...this.state,
                                status: i.b.Stopping
                            });
                            break;
                        case i.a.Done:
                            this.finish(e, null, t.transcript);
                            break;
                        case i.a.Error:
                            this.finish(e, {
                                code: t.error.code,
                                message: t.error.message
                            }, void 0);
                            break;
                        case i.a.Cancelled:
                            this.invalidate(), this.state = l, void 0 !== e.session && this.disposeSession(e.session), this.scheduleRender()
                    }
                }
                finish(e, t, r) {
                    this.isCurrent(e) && (this.invalidate(), this.state = {
                        status: null === t ? i.b.Done : i.b.Error,
                        transcript: r ?? this.state.transcript,
                        ...null === t && void 0 !== this.state.speakChallengeProgress ? {
                            speakChallengeProgress: this.state.speakChallengeProgress
                        } : {},
                        error: t
                    }, void 0 !== e.session && this.disposeSession(e.session), this.scheduleRender())
                }
                commandFailed(e) {
                    a.warn("DIL dictation host command failed"), this.finish(e, {
                        code: "host_error",
                        message: "Dictation could not complete. Please try again."
                    }, void 0)
                }
                invalidate() {
                    let e = this.attempt;
                    return this.attempt = void 0, this.generation++, e
                }
                isCurrent(e) {
                    return !this.disposed && e.generation === this.generation
                }
                update(e) {
                    this.state = e, this.scheduleRender()
                }
                cancelDeferredTurn() {
                    let e = this.deferredTurn;
                    this.deferredTurn = void 0;
                    try {
                        e?.cancel()
                    } catch (e) {
                        a.warn("DIL deferred turn cancellation failed")
                    }
                }
                disposeSession(e) {
                    try {
                        e.dispose()
                    } catch (e) {
                        a.warn("DIL dictation session disposal failed")
                    }
                }
            }
        })
    }),
    mx11: (function(e, t, r) {
        var n = r("R4K7"),
            i = r("IHbR");
        new WeakMap, new WeakMap;
        let a = new WeakMap,
            s = new WeakMap;
        r.d(t, {}, {
            a: "__dil-rendered-prop",
            b: "__dilRenderedPropName",
            c: function(e, t, r) {
                let i = t ?? void 0,
                    a = r;
                if (void 0 !== i && "children" in i) {
                    let {
                        children: e,
                        ...t
                    } = i;
                    i = t, 0 === r.length && (a = Array.isArray(e) ? e : [e])
                }
                return {
                    [n.b]: !0,
                    type: e,
                    props: i,
                    children: a
                }
            },
            d: function(e) {
                return a.get(e)
            },
            e: function(e) {
                return null !== e && "object" == typeof e && !0 === e[n.b]
            },
            f: function(e) {
                let t = e.props?.key;
                if ("string" == typeof t || "number" == typeof t) return t
            },
            g: function(e, t) {
                if (!t?.length) return void s.delete(e);
                let r = t.filter(i.a);
                s.set(e, {
                    reveal: t,
                    share: r.length ? r : void 0
                })
            },
            h: function(e, t) {
                a.set(e, {
                    scope: t
                })
            }
        })
    }),
    R4K7: (function(e, t, r) {
        let n = Symbol("openai.valdi.dil.runtimeElement"),
            i = Symbol("oai.dil.fragment");
        r.d(t, {}, {
            a: i,
            b: n
        })
    }),
    mojg: (function(e, t, r) {
        r("J6DH");
        let n = Symbol("DILHtmlViewMessengerHost");
        r.d(t, {}, {
            a: function(e, t) {
                var r, i;
                let a = {
                    channelId: e,
                    command: t.command,
                    event: t.event,
                    registerTransport: t.registerTransport
                };
                return Object.freeze((r = a, i = a, new Proxy(r, {
                    get: (e, t, r) => t === n ? i : Reflect.get(e, t, r)
                })))
            }
        })
    }),
    hokT: (function(e, t, r) {
        var n, i, a, s;
        (a = n || (n = {})).Idle = "idle", a.Loading = "loading", a.Playing = "playing", (s = i || (i = {})).Play = "play", s.Request = "request", s.Response = "response", s.Streaming = "streaming";
        let l = console,
            o = ["event_name", "statsig_event_name", "structured_event_name"],
            u = Object.freeze({
                status: n.Idle,
                available: !1,
                error: null
            }),
            c = {
                language: 128,
                pronunciationHint: 4096,
                version: 256,
                source: 128
            };
        r.d(t, {
            a: () => i,
            b: () => n
        }, {
            c: u,
            d: function(e) {
                try {
                    if (null === e || "object" != typeof e || Array.isArray(e)) return;
                    let t = {};
                    for (let r of o) {
                        let n = e[r];
                        if (void 0 !== n) {
                            if ("string" != typeof n || !n.trim() || n.length > 256) return;
                            t[r] = n
                        }
                    }
                    if (0 === Object.keys(t).length) return;
                    let r = e.event_data;
                    if (void 0 !== r) {
                        if (null === r || "object" != typeof r || Array.isArray(r)) return;
                        let e = Object.keys(r);
                        if (e.length > 32) return;
                        let n = Object.create(null);
                        for (let t of e) {
                            let e = r[t];
                            if (t.length > 128 || !(null === e || "boolean" == typeof e || "string" == typeof e && e.length <= 2048 || "number" == typeof e && Number.isFinite(e))) return;
                            n[t] = e
                        }
                        t.event_data = n
                    }
                    if (JSON.stringify(t).length <= 16384) return t
                } catch (e) {
                    l.warn("DIL speech logging metadata could not be read")
                }
            },
            e: function(e) {
                if (null === e || "object" != typeof e) return null;
                let t = e.text;
                if ("string" != typeof t || !t.trim() || t.length > 32768) return null;
                let r = {
                    text: t
                };
                for (let t of Object.keys(c)) {
                    let n = e[t];
                    if (void 0 === n) continue;
                    let i = c[t];
                    if ("string" != typeof n || n.length > i) return null;
                    ("version" !== t || "" !== n) && (r[t] = n)
                }
                let n = e.playbackSpeed;
                return "number" == typeof n && Number.isFinite(n) && n >= .25 && n <= 4 && (r.playbackSpeed = n), r
            },
            f: function(e) {
                if (null === e || "object" != typeof e) return u;
                let t = null;
                if (null !== e.error && "object" == typeof e.error) {
                    let r = e.error,
                        n = r.failureStage;
                    if (n === i.Play || n === i.Request || n === i.Response || n === i.Streaming) {
                        let e = r.httpStatus;
                        t = {
                            failureStage: n,
                            ..."number" == typeof e && Number.isInteger(e) && e >= 100 && e <= 599 ? {
                                httpStatus: e
                            } : {}
                        }
                    }
                }
                return {
                    available: !0 === e.available,
                    status: null !== t ? n.Idle : e.status === n.Loading || e.status === n.Playing ? e.status : n.Idle,
                    error: t
                }
            }
        })
    }),
    Og4F: (function(e, t, r) {
        var n = r("mx11"),
            i = r("R4K7");
        r("mojg"), r("gQpb");
        class a {
            constructor(e, t, r) {
                this.encoded = e, this.consumer = t, this.valueResolver = r, this.offset = 0;
                let n = e.descriptorSize;
                if (!Number.isInteger(n) || n < 0 || n > e.descriptor.byteLength || n % 4 != 0) throw Error("Invalid DIL render operations descriptor size.");
                this.view = new DataView(e.descriptor, 0, n)
            }
            apply() {
                for (; this.offset < this.view.byteLength;) {
                    let e = this.readUint32();
                    switch (e) {
                        case 1: {
                            let e = this.readUint32(),
                                t = this.readUint32();
                            this.consumer.onElementNodeCreated(e, t);
                            break
                        }
                        case 2: {
                            let e = this.readUint32(),
                                t = this.readString();
                            this.consumer.onTextNodeCreated(e, t);
                            break
                        }
                        case 3:
                            this.consumer.onNodeDestroyed(this.readUint32());
                            break;
                        case 4:
                            this.consumer.onNodeMoved(this.readUint32(), this.readUint32(), this.readUint32());
                            break;
                        case 5:
                            this.consumer.onNodePropChanged(this.readUint32(), this.readString(), this.readValue());
                            break;
                        case 8: {
                            let e = this.readUint32(),
                                t = this.readValue();
                            if (void 0 !== t && !(Array.isArray(t) && t.every(e => "string" == typeof e))) throw Error("Invalid DIL render operation authored IDs.");
                            this.consumer.onNodeAuthoredIdsChanged?.(e, t);
                            break
                        }
                        case 6: {
                            let e = this.readUint32(),
                                t = this.readString();
                            this.consumer.onTextNodeChanged(e, t);
                            break
                        }
                        case 7: {
                            let e = this.readUint32(),
                                t = this.readValue();
                            if (! function e(t) {
                                    if (!Array.isArray(t)) return !1;
                                    for (let n of t) {
                                        var r;
                                        if ("string" != typeof n && "number" != typeof n && !(s(r = n) && "string" == typeof r.type && s(r.props) && e(r.children))) return !1
                                    }
                                    return !0
                                }(t)) throw Error("Invalid DIL render operation opaque children.");
                            this.consumer.onNodeOpaqueChildrenChanged(e, t);
                            break
                        }
                        default:
                            throw Error(`Unknown DIL render operation kind ${e}.`)
                    }
                }
            }
            readValue() {
                let e = this.readUint32();
                switch (e) {
                    case 0:
                        return;
                    case 1:
                        return null;
                    case 2:
                        return !1;
                    case 3:
                        return !0;
                    case 4:
                        return this.readFloat64();
                    case 5:
                        return this.readString();
                    case 6: {
                        let e = this.readUint32(),
                            t = [];
                        for (let r = 0; r < e; r++) t.push(this.readValue());
                        return t
                    }
                    case 7: {
                        let e = this.readUint32(),
                            t = {};
                        for (let r = 0; r < e; r++) t[this.readString()] = this.readValue();
                        return t
                    }
                    case 8:
                        return this.valueResolver.resolveFunction(this.readUint32());
                    case 9: {
                        let e = this.valueResolver.resolveType(this.readUint32()),
                            t = this.readValue();
                        if (void 0 !== t && !s(t)) throw Error("Invalid DIL render operation element props.");
                        let r = this.readValue();
                        if (!Array.isArray(r)) throw Error("Invalid DIL render operation element children.");
                        return (0, n.c)(e, t, r)
                    }
                    case 10: {
                        let e = this.readValue();
                        if (!Array.isArray(e)) throw Error("Invalid DIL render operation fragment children.");
                        return (0, n.c)(i.a, void 0, e)
                    }
                    case 11:
                        return this.readAttached();
                    case 12:
                        return this.valueResolver.resolveHtmlViewMessenger(this.readString());
                    default:
                        throw Error(`Unknown DIL render value kind ${e}.`)
                }
            }
            readString() {
                let e = this.readAttached();
                if ("string" != typeof e) throw Error("Invalid DIL render operation string value.");
                return e
            }
            readAttached() {
                let e = this.readUint32();
                if (e >= this.encoded.attachedValues.length) throw Error("Invalid DIL render operation attached value index.");
                return this.encoded.attachedValues[e]
            }
            readUint32() {
                if (this.offset + 4 > this.view.byteLength) throw Error("Truncated DIL render operations descriptor.");
                let e = this.view.getUint32(this.offset, !0);
                return this.offset += 4, e
            }
            readFloat64() {
                if (this.offset + 8 > this.view.byteLength) throw Error("Truncated DIL render operations descriptor.");
                let e = this.view.getFloat64(this.offset, !0);
                return this.offset += 8, e
            }
        }

        function s(e) {
            if (null === e || "object" != typeof e || (0, n.e)(e)) return !1;
            let t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype
        }
        r.d(t, {}, {
            a: function(e, t, r) {
                for (let n of (new a(e, t, r).apply(), e.interactionScopes ?? [])) t.onNodeInteractionScopeChanged?.(n.nodeId, n.scope)
            }
        })
    }),
    gQpb: (function(e, t, r) {
        let n = globalThis.WeakRef;
        r.d(t, {}, {
            a: n ?? class {
                constructor(e) {
                    this.value = e
                }
                deref() {
                    return this.value
                }
            }
        })
    })
};
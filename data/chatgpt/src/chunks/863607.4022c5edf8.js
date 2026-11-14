export const __rspack_esm_ids = [863607];
export const __webpack_modules__ = {
    if6d: (function(e, t, n) {
        n.d(t, {
            a: () => S,
            b: () => I
        });
        var r = n("ABep"),
            l = n("QosV"),
            u = n("v8gE"),
            o = n("on57"),
            i = n("BolX"),
            a = n("zd8w"),
            s = n("v7qY"),
            c = n("wD9O"),
            g = n("zm5q"),
            h = n("f4Vb"),
            x = n("QEDJ"),
            d = n("lsfk"),
            m = n("uYx2"),
            f = n("g3o5"),
            P = n("bIvi"),
            y = n("hTLy"),
            p = n.n(y),
            v = n("R9dK"),
            w = n.n(v);

        function B(e) {
            return "gap" !== e.type
        }

        function H(e) {
            let {
                collapseEmptyRows: t = !1,
                entries: n,
                gapPx: r,
                measuredHeightsByKey: l,
                pixelScale: u
            } = e, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e => !1 !== e.anchorEligible, i = new Set, a = [], s = [], c = [], g = new Map, h = [], x = 0;
            for (let [e, d] of n.entries()) {
                let n = d.turnKey,
                    m = Object.hasOwn(l, n) ? l[n] : void 0,
                    f = Math.max(d.minHeightPx ?? 0, m ?? d.estimatedHeightPx ?? 280);
                null != u && (f = Math.round(f * u) / u);
                let P = (t ? x > 0 && f > 0 : e > 0) ? d.gapBeforePx ?? r : 0;
                null != u && (P = Math.round(P * u) / u), x += P, a.push(P), o(d) || i.add(n), g.set(n, e), h.push(n), c.push(x), s.push(f), x += f
            }
            return {
                bottomOffsetsPx: c.map((e, t) => x - e - (s[t] ?? 0)),
                collapseEmptyRows: t,
                gapKeys: i,
                gapsBeforePx: a,
                heightsPx: s,
                topOffsetsPx: c,
                totalHeightPx: x,
                turnIndexByKey: g,
                turnKeys: h
            }
        }

        function b(e) {
            let {
                distanceFromBottomPx: t,
                layout: n,
                overscanCount: r,
                overscanPx: l = 0,
                viewportHeightPx: u
            } = e;
            if (0 === n.turnKeys.length) return {
                startIndex: 0,
                endIndex: 0
            };
            let o = Math.min(Math.max(0, t), n.totalHeightPx),
                i = Math.max(0, o - l),
                a = Math.min(o + Math.max(0, u) + l, n.totalHeightPx),
                s = n.collapseEmptyRows && a === n.totalHeightPx ? 0 : function(e, t) {
                    let n = 0,
                        r = e.length;
                    for (; n < r;) {
                        let l = Math.floor((n + r) / 2);
                        (e[l] ?? 0) < t ? r = l : n = l + 1
                    }
                    return n
                }(n.bottomOffsetsPx, a),
                c = n.collapseEmptyRows && 0 === i ? n.turnKeys.length : function(e, t, n) {
                    let r = 0,
                        l = e.length;
                    for (; r < l;) {
                        let u = Math.floor((r + l) / 2);
                        (e[u] ?? 0) + (t[u] ?? 0) <= n ? l = u : r = u + 1
                    }
                    return r
                }(n.bottomOffsetsPx, n.heightsPx, i);
            return {
                startIndex: Math.max(0, s - r),
                endIndex: Math.min(n.turnKeys.length, Math.max(c, s + 1) + r)
            }
        }

        function K(e) {
            let {
                anchorKey: t,
                layout: n,
                previousRange: r
            } = e, l = n.turnIndexByKey.get(t);
            return null == l ? null : {
                startIndex: l,
                endIndex: Math.min(n.turnKeys.length, l + r.endIndex - r.startIndex)
            }
        }

        function R(e) {
            let {
                layout: t,
                turnKey: n,
                viewportHeightPx: r
            } = e, l = t.turnIndexByKey.get(n);
            return null == l ? null : Math.max(0, (t.bottomOffsetsPx[l] ?? 0) - r / 2 + (t.heightsPx[l] ?? 0) / 2)
        }

        function I(e) {
            let t, n, u, o, i = (0, l.c)(8);
            return i[0] !== e ? ({
                entries: n,
                RowComponent: t,
                ...u
            } = e, i[0] = e, i[1] = t, i[2] = n, i[3] = u) : (t = i[1], n = i[2], u = i[3]), i[4] !== t || i[5] !== n || i[6] !== u ? (o = (0, r.jsx)(S, {
                ...u,
                rows: n,
                getRowKey: _,
                getRowGeometry: T,
                getRowCollapseScopeKey: z,
                isRowAnchorEligible: B,
                renderRow: t
            }), i[4] = t, i[5] = n, i[6] = u, i[7] = o) : o = i[7], o
        }

        function S(e) {
            let t, n, y, v, B, I, S, _, T, z, A, U, W, $, G, Q, J, X, Y, Z, ee, et, en, er, el, eu, eo, ei, ea, es, ec, eg, eh, ex, ed, em, ef, eP, ey, ep, ev, ew, eB, eH, eb, eK, eR, eI, eS, eM, eE, eF, eC, eO, eL, eD, e_, eT, ez, ek, eq, ej, eN, eV, eA, eU, eW, e$, eG, eQ, eJ, eX, eY, eZ, e1, e0 = (0, l.c)(289),
                {
                    collapseEmptyRows: e2,
                    rows: e4,
                    getRowKey: e3,
                    getRowGeometry: e5,
                    getRowCollapseScopeKey: e8,
                    isRowAnchorEligible: e6,
                    renderRow: e7,
                    onApiChange: e9,
                    onVisibleContentReady: te,
                    className: tt,
                    gapPx: tn,
                    getBottomScrollPaddingPx: tr,
                    isSubmitPlacementAnimating: tl,
                    onLatestTurnHeightChange: tu,
                    preserveMeasuredTurnViewport: to,
                    preserveUnderfilledViewport: ti,
                    getPendingRestoreScrollDistanceFromBottomPx: ta,
                    restoreScrollDistanceFromBottomPx: ts,
                    initialRestoreState: tc,
                    onRestoreStateChange: tg,
                    onViewportChange: th,
                    onEndViewportChange: tx,
                    latestTurnSynchronousMeasurementKey: td,
                    layoutReadyTurnKey: tm,
                    onTurnLayoutReady: tf,
                    synchronousMeasurementTurnKey: tP,
                    retainedTurnKeys: ty
                } = e,
                tp = void 0 !== e2 && e2,
                tv = void 0 === tn ? 12 : tn,
                tw = void 0 !== to && to,
                tB = void 0 !== ti && ti,
                tH = (0, i.z)(f.b);
            e0[0] !== ty ? (t = ty ?? [], e0[0] = ty, e0[1] = t) : t = e0[1];
            let tb = [...t, ...tH],
                [tK, tR] = (0, a.useState)(null),
                [tI] = (0, a.useState)(D),
                tS = e4.length - 1;
            e0[2] !== e3 || e0[3] !== tS || e0[4] !== e4 ? (n = tS < 0 ? void 0 : e3(e4[tS]), e0[2] = e3, e0[3] = tS, e0[4] = e4, e0[5] = n) : n = e0[5];
            let tM = n,
                tE = tB && null != tK && tK.turnKey === tM ? tK.viewportHeightPx - tK.heightOutsideTurnPx : void 0;
            e0[6] !== tE || e0[7] !== tI || e0[8] !== e5 || e0[9] !== e3 || e0[10] !== e6 || e0[11] !== e4 ? (y = tI(e4, e3, e5, e6, tE), e0[6] = tE, e0[7] = tI, e0[8] = e5, e0[9] = e3, e0[10] = e6, e0[11] = e4, e0[12] = y) : y = e0[12];
            let tF = y,
                tC = (0, d.b)(),
                {
                    notifyLayoutResize: tO
                } = tC,
                tL = (0, c.c)(),
                tD = tL * (globalThis.devicePixelRatio ?? 1);
            e0[13] !== tc?.turnHeightsByKey ? (v = () => N(tc?.turnHeightsByKey), e0[13] = tc?.turnHeightsByKey, e0[14] = v) : v = e0[14];
            let [t_, tT] = (0, a.useState)(v), [tz, tk] = (0, a.useState)(null);
            e0[15] !== tp || e0[16] !== tF || e0[17] !== tv || e0[18] !== tD || e0[19] !== t_ ? (B = H({
                collapseEmptyRows: tp,
                entries: tF,
                gapPx: tv,
                measuredHeightsByKey: t_,
                pixelScale: tD
            }), e0[15] = tp, e0[16] = tF, e0[17] = tv, e0[18] = tD, e0[19] = t_, e0[20] = B) : B = e0[20];
            let tq = B;
            e0[21] !== tr || e0[22] !== tc || e0[23] !== tq || e0[24] !== tC ? (I = () => {
                var e, t, n;
                let r, l, u, o, i = q(tr);
                return e = tq, t = j(tC.getLastScrollDistanceFromBottomPx(), i), n = tc, r = n?.renderedWindow, l = r?.viewportHeightPx ?? 800, u = Math.min(t, e.totalHeightPx), o = O(e, u, l), {
                    distanceFromBottomPx: u,
                    renderedRange: (null == r ? null : K({
                        anchorKey: r.anchorKey,
                        layout: e,
                        previousRange: {
                            startIndex: 0,
                            endIndex: null == r.viewportHeightPx ? Math.min(r.count, o.endIndex - o.startIndex) : r.count
                        }
                    })) ?? o,
                    turnKeys: e.turnKeys,
                    viewportHeightPx: l
                }
            }, e0[21] = tr, e0[22] = tc, e0[23] = tq, e0[24] = tC, e0[25] = I) : I = e0[25];
            let [tj, tN] = (0, a.useState)(I), [tV] = (0, a.useState)(E), tA = (0, a.useSyncExternalStore)(tV.subscribe, tV.getSnapshot, tV.getSnapshot), tU = (0, a.useRef)(null), tW = (0, a.useRef)(t_), t$ = (0, a.useRef)(0);
            e0[26] === Symbol.for("react.memo_cache_sentinel") ? (S = e => {
                t$.current = e;
                let t = tU.current;
                null != t && (t.style.minHeight = e > 0 ? `${e}px` : "")
            }, e0[26] = S) : S = e0[26];
            let tG = (0, P.a)(S),
                tQ = (0, a.useRef)(tj),
                tJ = (0, a.useRef)(null);
            e0[27] === Symbol.for("react.memo_cache_sentinel") ? (_ = new Map, e0[27] = _) : _ = e0[27];
            let tX = (0, a.useRef)(_);
            e0[28] === Symbol.for("react.memo_cache_sentinel") ? (T = new Map, e0[28] = T) : T = e0[28];
            let tY = (0, a.useRef)(T);
            e0[29] === Symbol.for("react.memo_cache_sentinel") ? (z = new WeakSet, e0[29] = z) : z = e0[29];
            let tZ = (0, a.useRef)(z);
            e0[30] === Symbol.for("react.memo_cache_sentinel") ? (A = new Map, e0[30] = A) : A = e0[30];
            let t1 = (0, a.useRef)(A);
            e0[31] === Symbol.for("react.memo_cache_sentinel") ? (U = new Map, e0[31] = U) : U = e0[31];
            let t0 = (0, a.useRef)(U),
                t2 = (0, a.useRef)(null),
                t4 = (0, a.useRef)(null),
                t3 = (0, a.useRef)(0),
                t5 = (0, a.useRef)(null),
                [t8, t6] = (0, a.useState)(null),
                t7 = (0, a.useRef)(!1),
                t9 = (0, a.useRef)(null),
                ne = (0, a.useRef)(tq),
                nt = (0, a.useRef)(tq),
                nn = (0, a.useRef)(tq),
                nr = (0, a.useRef)(e4),
                nl = (0, a.useRef)(null);
            e0[32] !== t_ ? (W = () => {
                t_ !== tW.current && tT(tW.current)
            }, e0[32] = t_, e0[33] = W) : W = e0[33], e0[34] !== tp || e0[35] !== tF || e0[36] !== tv || e0[37] !== tD || e0[38] !== t_ ? ($ = [tp, tF, tv, tD, t_], e0[34] = tp, e0[35] = tF, e0[36] = tv, e0[37] = tD, e0[38] = t_, e0[39] = $) : $ = e0[39], (0, a.useLayoutEffect)(W, $), e0[40] === Symbol.for("react.memo_cache_sentinel") ? (G = e => {
                tU.current = e, tk(e)
            }, e0[40] = G) : G = e0[40];
            let nu = (0, P.a)(G);
            e0[41] !== tp || e0[42] !== tF || e0[43] !== tv || e0[44] !== tq || e0[45] !== tD || e0[46] !== t_ ? (Q = () => {
                if (nt.current !== tq) {
                    nt.current = tq, ne.current = t_ === tW.current ? tq : H({
                        collapseEmptyRows: tp,
                        entries: tF,
                        gapPx: tv,
                        measuredHeightsByKey: tW.current,
                        pixelScale: tD
                    });
                    let e = tU.current;
                    null != e && (e.style.height = `${ne.current.totalHeightPx}px`)
                }
                return ne.current
            }, e0[41] = tp, e0[42] = tF, e0[43] = tv, e0[44] = tq, e0[45] = tD, e0[46] = t_, e0[47] = Q) : Q = e0[47];
            let no = (0, P.a)(Q);
            e0[48] !== tr || e0[49] !== tC || e0[50] !== tL ? (J = e => {
                let t = tC.getScrollElement(),
                    n = tU.current,
                    r = t?.firstElementChild;
                return null == n || null == r ? e - q(tr) : e - (0, c.b)(r.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tL)
            }, e0[48] = tr, e0[49] = tC, e0[50] = tL, e0[51] = J) : J = e0[51];
            let ni = (0, P.a)(J),
                na = tj.renderedRange;
            if (null != tA) {
                let e = R({
                    layout: tq,
                    turnKey: tA.turnKey,
                    viewportHeightPx: tj.viewportHeightPx
                });
                null != e && (na = O(tq, e, tj.viewportHeightPx))
            } else if (!k(tj.turnKeys, tq.turnKeys)) {
                let e = tj.turnKeys[tj.renderedRange.startIndex];
                null != e && (na = K({
                    anchorKey: e,
                    layout: tq,
                    previousRange: na
                }) ?? O(tq, tj.distanceFromBottomPx, tj.viewportHeightPx))
            }
            e0[52] !== ts ? (X = () => {
                null == t2.current && ts?.()
            }, e0[52] = ts, e0[53] = X) : X = e0[53];
            let ns = (0, P.a)(X);
            e0[54] === Symbol.for("react.memo_cache_sentinel") ? (Y = () => {
                null != t9.current && (window.cancelAnimationFrame(t9.current), t9.current = null)
            }, e0[54] = Y) : Y = e0[54];
            let nc = (0, P.a)(Y);
            e0[55] !== tF.length || e0[56] !== te || e0[57] !== ns ? (Z = () => {
                null == te || t7.current || null != t9.current || null == tU.current || tF.length > 0 && 0 === tY.current.size || (t9.current = window.requestAnimationFrame(() => {
                    t9.current = window.requestAnimationFrame(() => {
                        t9.current = null, t7.current || null == tU.current || tF.length > 0 && 0 === tY.current.size || (t7.current = !0, ns(), te())
                    })
                }))
            }, e0[55] = tF.length, e0[56] = te, e0[57] = ns, e0[58] = Z) : Z = e0[58];
            let ng = (0, P.a)(Z),
                nh = e4.slice(na.startIndex, na.endIndex).map((e, t) => ({
                    entry: e,
                    turnIndex: na.startIndex + t
                })),
                nx = tF.length > 0 && 0 === nh.length;
            for (let e of new Set(tb)) {
                let t = tq.turnIndexByKey.get(e);
                null == t || t >= na.startIndex && t < na.endIndex || nh.push({
                    entry: e4[t],
                    turnIndex: t
                })
            }
            nh.sort(M), e0[59] === Symbol.for("react.memo_cache_sentinel") ? (ee = e => tY.current.get(e), e0[59] = ee) : ee = e0[59];
            let nd = (0, P.a)(ee),
                nm = (0, P.a)(e => {
                    tx?.(e <= 24 && null == tV.getSnapshot() ? function(e, t, n, r) {
                        let {
                            startIndex: l,
                            endIndex: u
                        } = b({
                            distanceFromBottomPx: 0,
                            layout: n,
                            overscanCount: 0,
                            viewportHeightPx: r
                        }), o = new Set(t), i = new Set;
                        for (let e = l; e < u; e++) i.add(e);
                        for (let e of o) {
                            let t = n.turnIndexByKey.get(e);
                            null != t && i.add(t)
                        }
                        return [...i].sort((e, t) => e - t).map(t => ({
                            entry: e[t],
                            retained: o.has(n.turnKeys[t])
                        }))
                    }(e4, tb, tq, tj.viewportHeightPx + 24) : null, nd)
                });
            e0[60] !== nm || e0[61] !== tC ? (et = () => {
                nm(tC.getLastScrollDistanceFromBottomPx())
            }, e0[60] = nm, e0[61] = tC, e0[62] = et) : et = e0[62], e0[63] !== tq || e0[64] !== tx || e0[65] !== tA || e0[66] !== tj.viewportHeightPx || e0[67] !== nm || e0[68] !== tH || e0[69] !== ty || e0[70] !== e4 || e0[71] !== tC ? (en = [tq, tx, tA, tj.viewportHeightPx, nm, tH, ty, e4, tC], e0[63] = tq, e0[64] = tx, e0[65] = tA, e0[66] = tj.viewportHeightPx, e0[67] = nm, e0[68] = tH, e0[69] = ty, e0[70] = e4, e0[71] = tC, e0[72] = en) : en = e0[72], (0, a.useLayoutEffect)(et, en), e0[73] !== tm || e0[74] !== tf || e0[75] !== tC ? (er = () => {
                if (null == tm || null == tf || null != t2.current || t1.current.size > 0) return;
                let e = tC.getScrollElement(),
                    t = tY.current.get(tm);
                null != t && tZ.current.has(t) && !((tW.current[tm] ?? 0) <= 0) && null != e && !(e.clientHeight <= 0) && tf(tm, t)
            }, e0[73] = tm, e0[74] = tf, e0[75] = tC, e0[76] = er) : er = e0[76];
            let nf = (0, P.a)(er);
            e0[77] !== tr || e0[78] !== ta || e0[79] !== tl || e0[80] !== tu || e0[81] !== tw || e0[82] !== ns || e0[83] !== tC || e0[84] !== tV ? (el = (e, t) => {
                let n = q(tr);
                if (null != e.latestTurnHeightChange && tu?.(e.latestTurnHeightChange), e.restoreScrollDistanceFromBottom) ns();
                else if (null != e.scrollDistanceFromBottomPx) {
                    var r, l;
                    let u, o = e.scrollDistanceFromBottomPx,
                        i = t?.previous ?? nn.current,
                        a = t?.estimated ?? nl.current,
                        s = ne.current;
                    tw && n > 0 && null != e.latestTurnHeightChange && null != a && a.totalHeightPx !== i.totalHeightPx && null == tV.getSnapshot() && ta?.() == null && (r = i, (u = (l = s).turnKeys.length - 1) > 0 && r.turnKeys.length === l.turnKeys.length && r.turnKeys[u] !== l.turnKeys[u] && r.turnKeys.every((e, t) => t === u || e === l.turnKeys[t] && r.topOffsetsPx[t] === l.topOffsetsPx[t] && r.heightsPx[t] === l.heightsPx[t])) && (o = tC.getUnroundedScrollDistanceFromBottomPx(tC.getLastScrollDistanceFromBottomPx()) + s.totalHeightPx - i.totalHeightPx, null != nl.current && (nl.current = i)), tC.compensateScrollToDistanceFromBottomPx(o + q(tr) - n, null != e.afterMeasure || null != tV.getSnapshot() || ta?.() != null || tl?.() ? void 0 : "turn-resize")
                }
                e.afterMeasure?.()
            }, e0[77] = tr, e0[78] = ta, e0[79] = tl, e0[80] = tu, e0[81] = tw, e0[82] = ns, e0[83] = tC, e0[84] = tV, e0[85] = el) : el = e0[85];
            let nP = (0, P.a)(el);
            e0[86] !== no ? (eu = (e, t) => {
                if (null != t2.current || t <= 0) return;
                let n = tQ.current,
                    r = C({
                        current: n,
                        distanceFromBottomPx: e,
                        layout: no(),
                        viewportHeightPx: t
                    });
                r === n || (tQ.current = r, r.renderedRange.startIndex === n.renderedRange.startIndex && r.renderedRange.endIndex === n.renderedRange.endIndex && k(r.turnKeys, n.turnKeys) || tN(r))
            }, e0[86] = no, e0[87] = eu) : eu = e0[87];
            let ny = (0, P.a)(eu);
            e0[88] !== nd || e0[89] !== tx ? (eo = () => () => tx?.(void 0, nd), ei = [nd, tx], e0[88] = nd, e0[89] = tx, e0[90] = eo, e0[91] = ei) : (eo = e0[90], ei = e0[91]), (0, a.useLayoutEffect)(eo, ei), e0[92] !== no || e0[93] !== th ? (ea = (e, t, n) => {
                if (null == th) return;
                let r = no(),
                    l = Math.max(0, Math.min(r.totalHeightPx, r.totalHeightPx - e)),
                    u = Math.max(0, l - t);
                th({
                    viewportEndPx: l,
                    viewportStartPx: u
                }, n)
            }, e0[92] = no, e0[93] = th, e0[94] = ea) : ea = e0[94];
            let np = (0, P.a)(ea);
            e0[95] !== tV ? (es = e => {
                tV.getSnapshot() === e && tV.replace(null)
            }, e0[95] = tV, e0[96] = es) : es = e0[96];
            let nv = (0, P.a)(es);
            e0[97] !== nd || e0[98] !== tx || e0[99] !== tV ? (ec = (e, t, n) => n?.signal?.aborted ? Promise.resolve() : (tx?.(null, nd), new Promise(r => {
                let l = () => {
                        tV.getSnapshot() === u && tV.replace(null)
                    },
                    u = {
                        align: n?.align ?? "center",
                        complete: () => {
                            n?.signal?.removeEventListener("abort", l), r()
                        },
                        getTargetElement: t,
                        turnKey: e
                    };
                tN(tQ.current), tV.replace(u), n?.signal?.addEventListener("abort", l, {
                    once: !0
                })
            })), e0[97] = nd, e0[98] = tx, e0[99] = tV, e0[100] = ec) : ec = e0[100];
            let nw = (0, P.a)(ec);
            e0[101] !== no || e0[102] !== e4 ? (eg = e => {
                let {
                    viewportStartPx: t,
                    viewportEndPx: n
                } = e;
                return function(e, t, n, r) {
                    let {
                        topOffsetsPx: l,
                        heightsPx: u
                    } = t, o = Math.max(0, w()(l, n) - 1);
                    return (l[o] ?? 0) + (u[o] ?? 0) <= n && o++, e.slice(o, p()(l, r))
                }(e4, no(), t, n)
            }, e0[101] = no, e0[102] = e4, e0[103] = eg) : eg = e0[103];
            let nB = (0, P.a)(eg);
            e0[104] !== no ? (eh = e => {
                let t = no(),
                    n = t.turnIndexByKey.get(e);
                if (null == n) return null;
                let r = t.topOffsetsPx[n],
                    l = t.heightsPx[n];
                return null == r || null == l ? null : {
                    endPx: r + l,
                    startPx: r
                }
            }, e0[104] = no, e0[105] = eh) : eh = e0[105];
            let nH = (0, P.a)(eh);
            e0[106] !== tu || e0[107] !== tC || e0[108] !== tL ? (ex = () => {
                let e = 0,
                    t = null;
                for (let [n, r] of t0.current) e += r, (null == t || t.compareDocumentPosition(n) === Node.DOCUMENT_POSITION_FOLLOWING) && (t = n);
                null != t && tu?.({
                    heightDeltaPx: null,
                    heightPx: null,
                    bottomViewportOverflowPx: V({
                        scrollElement: tC.getScrollElement(),
                        turnElement: t,
                        windowZoom: tL
                    }),
                    turnElement: t,
                    followContentHeightPx: e
                })
            }, e0[106] = tu, e0[107] = tC, e0[108] = tL, e0[109] = ex) : ex = e0[109];
            let nb = (0, P.a)(ex);
            e0[110] !== tp || e0[111] !== nP || e0[112] !== tF || e0[113] !== tv || e0[114] !== tr || e0[115] !== no || e0[116] !== ni || e0[117] !== ta || e0[118] !== tD || e0[119] !== tw || e0[120] !== tC || e0[121] !== tV || e0[122] !== tG || e0[123] !== tL ? (ed = (e, t, n) => {
                var r;
                let l = void 0 === n ? "measured" : n,
                    u = no(),
                    o = tC.getScrollElement();
                if (o?.getClientRects().length === 0) return !1;
                let i = t2.current,
                    a = tW.current;
                if ("controller" === l && null == i) {
                    let t = !1;
                    for (let [n, r] of e) {
                        let {
                            element: e,
                            heightPx: l
                        } = r;
                        if (l <= 0 || a[n] !== Math.max(+!tp, l)) {
                            t = !0;
                            break
                        }
                        let u = tY.current.get(n);
                        u === e && tZ.current.add(u)
                    }
                    if (!t) return !1
                }
                let g = a,
                    h = 0,
                    x = !1,
                    d = null,
                    m = 0,
                    f = !1,
                    P = !1,
                    y = "controller" === l ? tC.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    }) : function(e, t) {
                        let n = e.getScrollElement(),
                            r = n?.firstElementChild;
                        if (null == n || null == r || 0 === n.clientHeight) return e.getLastScrollDistanceFromBottomPx();
                        let l = r.getBoundingClientRect();
                        if (0 === l.height) return e.getLastScrollDistanceFromBottomPx();
                        let u = n.scrollTop;
                        return Math.max(0, Math.round(u + (0, c.b)(l.bottom - n.getBoundingClientRect().top, t)) - n.clientHeight) - u
                    }(tC, tL),
                    p = q(tr),
                    v = j(y, p),
                    w = tw ? null : ta?.() ?? null,
                    B = null == i ? v : tQ.current.distanceFromBottomPx,
                    b = B;
                if (tw && null == tV.getSnapshot() && ta?.() == null) {
                    let e = k(nn.current.turnKeys, u.turnKeys) ? u : nn.current,
                        t = e === u ? i?.scrollDistanceFromBottomPx ?? y : y,
                        n = L({
                            distanceFromBottomPx: ni(t),
                            preferLatestVisibleRow: t < p,
                            layout: e,
                            measuredHeightsByKey: a,
                            nextLayout: u,
                            viewportHeightPx: tQ.current.viewportHeightPx
                        }),
                        r = o?.ownerDocument.activeElement,
                        l = r?.closest("[data-turn-key]"),
                        s = l?.dataset.turnKey;
                    if (o && r && l && s && tY.current.get(s) === l) {
                        let e = r.getBoundingClientRect(),
                            t = o.getBoundingClientRect();
                        e.bottom > t.top && e.top < t.bottom && (n = s)
                    }
                    let c = null == n ? null : u.turnIndexByKey.get(n);
                    null != c && (b = u.bottomOffsetsPx[c] ?? B)
                }
                for (let [t, n] of e) {
                    let {
                        element: e,
                        heightPx: r
                    } = n, l = tY.current.get(t);
                    if (l !== e) continue;
                    r > 0 ? tZ.current.add(l) : tZ.current.delete(l);
                    let o = Math.max(+!tp, r),
                        i = a[t];
                    if (i === o) continue;
                    g === a && (g = N(a)), g[t] = o;
                    let s = u.turnIndexByKey.get(t);
                    if (null == s) continue;
                    let c = s === u.turnKeys.length - 1,
                        y = Math.round(Math.max(tF[s]?.minHeightPx ?? 0, o) * tD) / tD,
                        p = y - (u.heightsPx[s] ?? y);
                    P = P || null == i || 0 !== p, c && (x = !0, h += null == i ? 0 : p, d = l), f = f || tp && (0 === y || 0 === u.heightsPx[s]), (u.bottomOffsetsPx[s] ?? 0) <= b && (tw || null != ta && !c) && (m += p)
                }
                if (g === a) return !1;
                if (!P) return tW.current = g, !1;
                let K = H({
                    collapseEmptyRows: tp,
                    entries: tF,
                    gapPx: tv,
                    measuredHeightsByKey: g,
                    pixelScale: tD
                });
                if (f)
                    for (let [e, t] of K.gapsBeforePx.entries()) {
                        let n = t - (u.gapsBeforePx[e] ?? 0);
                        (u.bottomOffsetsPx[e] ?? 0) + (u.heightsPx[e] ?? 0) <= b && (tw || null != ta && e !== u.turnKeys.length - 1) && (m += n)
                    }
                let R = t$.current;
                if (R > 0) {
                    let e = Math.max(0, R - u.totalHeightPx),
                        t = Math.max(0, R - K.totalHeightPx);
                    m += t - e, h > 0 && e > t && (h = Math.max(0, h - (e - t))), e > 0 && 0 === t && tG(0)
                }
                let I = tw && tC.shouldFollowContentGrowth() && (r = y, 0 === p && r <= 24) && d?.querySelector("[data-preserve-turn-viewport]") == null,
                    S = i?.restoreScrollDistanceFromBottom || null != w,
                    M = null;
                S || (M = I ? 0 : 0 !== m ? (i?.scrollDistanceFromBottomPx ?? tC.getUnroundedScrollDistanceFromBottomPx(y)) + m : i?.scrollDistanceFromBottomPx ?? (tw || !x ? y : null));
                let E = tQ.current.distanceFromBottomPx;
                S ? E = w ?? E : null != M && (E = j(M, p));
                let F = C({
                        current: tQ.current,
                        distanceFromBottomPx: E,
                        layout: K,
                        viewportHeightPx: tQ.current.viewportHeightPx
                    }),
                    O = i?.latestTurnHeightChange,
                    D = d ?? O?.turnElement ?? null,
                    _ = {
                        afterMeasure: i?.afterMeasure,
                        latestTurnHeightChange: x || null != O ? {
                            heightDeltaPx: (O?.heightDeltaPx ?? 0) + h,
                            heightPx: K.heightsPx.at(-1) ?? null,
                            bottomViewportOverflowPx: V({
                                scrollElement: tC.getScrollElement(),
                                turnElement: D,
                                windowZoom: tL
                            }),
                            turnElement: D,
                            followContentHeightPx: null
                        } : null,
                        restoreScrollDistanceFromBottom: S,
                        scrollDistanceFromBottomPx: M,
                        turnHeightsByKey: g
                    },
                    T = tU.current;
                for (let [t, n] of e) {
                    let {
                        element: e
                    } = n, r = K.turnIndexByKey.get(t);
                    tY.current.get(t) === e && null != r && null != e.parentElement && (e.parentElement.style.height = `${K.heightsPx[r]}px`, e.parentElement.style.minHeight = "")
                }
                if (x && 1 === e.size && null == i && F === tQ.current && K.gapsBeforePx.at(-1) === u.gapsBeforePx.at(-1) && null != T) {
                    tW.current = g, ne.current = K;
                    let e = nn.current;
                    return nn.current = K, T.style.height = `${K.totalHeightPx}px`, nP(_, {
                        previous: e,
                        estimated: u
                    }), !0
                }
                null == nl.current && (nl.current = u);
                let z = () => {
                    tW.current = g, ne.current = K, tT(g), F !== tQ.current && (tQ.current = F, tN(F))
                };
                return t2.current = _, void 0 === t || t ? (0, s.flushSync)(z) : z(), !0
            }, e0[110] = tp, e0[111] = nP, e0[112] = tF, e0[113] = tv, e0[114] = tr, e0[115] = no, e0[116] = ni, e0[117] = ta, e0[118] = tD, e0[119] = tw, e0[120] = tC, e0[121] = tV, e0[122] = tG, e0[123] = tL, e0[124] = ed) : ed = e0[124];
            let nK = (0, P.a)(ed);
            e0[125] !== nK || e0[126] !== tO || e0[127] !== nb || e0[128] !== nf ? (em = e => {
                let t = new Map,
                    n = !1,
                    r = !1,
                    l = !1;
                for (let u of e) {
                    let e = tX.current.get(u.target);
                    if (null == e) continue;
                    let {
                        height: o
                    } = (0, h.a)(u);
                    switch (e.kind) {
                        case "turn": {
                            r = !0;
                            let l = e.turnKey,
                                i = tY.current.get(l);
                            if (i !== u.target || tZ.current.has(i) || (n = !0), o > 0 && i === u.target && tW.current[l] === o) {
                                tZ.current.add(i);
                                break
                            }
                            t.set(l, {
                                element: u.target,
                                heightPx: o
                            });
                            break
                        }
                        case "latest-turn-follow-content":
                            t0.current.set(e.element, o), l = !0
                    }
                }
                t.size > 0 && nK(t, !0, n ? "controller" : "measured"), l && nb(), nf(), (r || l) && tO?.()
            }, e0[125] = nK, e0[126] = tO, e0[127] = nb, e0[128] = nf, e0[129] = em) : em = e0[129];
            let nR = (0, P.a)(em);
            e0[130] !== nR ? (ef = () => {
                if (null != t4.current) return t4.current;
                let e = new ResizeObserver(nR);
                return t4.current = e, e
            }, e0[130] = nR, e0[131] = ef) : ef = e0[131];
            let nI = (0, P.a)(ef);
            e0[132] !== nI || e0[133] !== ng ? (eP = (e, t) => {
                if (null == t) return;
                tX.current.set(t, {
                    kind: "turn",
                    turnKey: e
                }), tY.current.set(e, t), tZ.current.delete(t), null == tW.current[e] && t1.current.set(e, t);
                let n = nI();
                return n.observe(t), ng(), () => {
                    n.unobserve(t), tX.current.delete(t), t1.current.get(e) === t && t1.current.delete(e), tY.current.get(e) === t && tY.current.delete(e)
                }
            }, e0[132] = nI, e0[133] = ng, e0[134] = eP) : eP = e0[134];
            let nS = (0, P.a)(eP);
            e0[135] !== nK || e0[136] !== tL ? (ey = (e, t) => {
                let n = tY.current.get(e);
                if (null == n) return;
                let r = (0, c.b)(n.getBoundingClientRect().height, tL);
                if (!(r <= 0) && (nK(new Map([
                        [e, {
                            element: n,
                            heightPx: r
                        }]
                    ]), !1), null != t)) {
                    let e = t2.current;
                    null == e ? t() : e.afterMeasure = t
                }
            }, e0[135] = nK, e0[136] = tL, e0[137] = ey) : ey = e0[137];
            let nM = (0, P.a)(ey);
            e0[138] !== nI ? (ep = e => {
                if (null == e) return;
                tX.current.set(e, {
                    element: e,
                    kind: "latest-turn-follow-content"
                }), t0.current.set(e, 0);
                let t = nI();
                return t.observe(e), () => {
                    t.unobserve(e), tX.current.delete(e), t0.current.delete(e)
                }
            }, e0[138] = nI, e0[139] = ep) : ep = e0[139];
            let nE = (0, P.a)(ep);
            e0[140] !== nK || e0[141] !== tL ? (ev = () => {
                let e = t1.current;
                if (0 === e.size) {
                    t3.current = 0;
                    return
                }
                if (null != t5.current) return;
                if (t3.current >= 8) {
                    t5.current = requestAnimationFrame(e => {
                        t5.current = null, t3.current = 0, t6(e)
                    });
                    return
                }
                t3.current = t3.current + 1, t1.current = new Map;
                let t = new Map;
                if ((0, g.a)("virtualizedTurnList.readMountedHeights", () => {
                        for (let [n, r] of e) {
                            if (tY.current.get(n) !== r) continue;
                            let e = (0, c.b)(r.getBoundingClientRect().height, tL);
                            e > 0 && t.set(n, {
                                element: r,
                                heightPx: e
                            })
                        }
                    }, e.size), t.size > 0) {
                    let n = tW.current;
                    if (nK(t, !1, "controller"))
                        for (let [t, r] of e)(null == n[t] || t3.current > 1) && tY.current.get(t) === r && t1.current.set(t, r);
                    else t3.current = 0
                }
            }, e0[140] = nK, e0[141] = tL, e0[142] = ev) : ev = e0[142], (0, a.useLayoutEffect)(ev), e0[143] !== tF || e0[144] !== nM || e0[145] !== tP ? (ew = () => {
                let e = tP ?? tF.at(-1)?.turnKey;
                null != e && nM(e)
            }, e0[143] = tF, e0[144] = nM, e0[145] = tP, e0[146] = ew) : ew = e0[146];
            let nF = (0, P.a)(ew);
            e0[147] !== td || e0[148] !== nF ? (eB = () => {
                null != td && nF()
            }, eH = [td, nF], e0[147] = td, e0[148] = nF, e0[149] = eB, e0[150] = eH) : (eB = e0[149], eH = e0[150]), (0, a.useLayoutEffect)(eB, eH), e0[151] !== nP || e0[152] !== t_ ? (eb = () => {
                let e = t2.current;
                null != e && e.turnHeightsByKey === t_ && (t2.current = null, nP(e))
            }, eK = [nP, t_], e0[151] = nP, e0[152] = t_, e0[153] = eb, e0[154] = eK) : (eb = e0[153], eK = e0[154]), (0, a.useLayoutEffect)(eb, eK), e0[155] !== tF || e0[156] !== tK || e0[157] !== tq.heightsPx || e0[158] !== tB || e0[159] !== t_ || e0[160] !== tz || e0[161] !== tL ? (eR = e => {
                if (!tB || tK?.viewportHeightPx === e) return;
                if (null != tK) return void(0, s.flushSync)(() => {
                    tR({
                        ...tK,
                        viewportHeightPx: e
                    })
                });
                let t = tz?.closest("[data-thread-user-message-navigation-content]"),
                    n = t?.lastElementChild,
                    r = tF.at(-1)?.turnKey;
                if (null == t || null == n || null == r || tF.some(e => null == t_[e.turnKey])) return;
                let l = (0, c.b)(t.getBoundingClientRect().bottom - n.getBoundingClientRect().bottom, tL) - parseFloat(getComputedStyle(t).paddingBottom);
                l <= 24 || (0, s.flushSync)(() => {
                    tR({
                        turnKey: r,
                        heightOutsideTurnPx: e - (tq.heightsPx.at(-1) ?? 0) - l,
                        viewportHeightPx: e
                    })
                })
            }, e0[155] = tF, e0[156] = tK, e0[157] = tq.heightsPx, e0[158] = tB, e0[159] = t_, e0[160] = tz, e0[161] = tL, e0[162] = eR) : eR = e0[162];
            let nC = (0, P.a)(eR);
            e0[163] !== nB || e0[164] !== nH || e0[165] !== nd || e0[166] !== nM || e0[167] !== e9 || e0[168] !== nw ? (eI = () => {
                if (null != e9) return e9({
                    getEntriesInViewport: nB,
                    getRowElement: nd,
                    getEntryGeometry: nH,
                    measureTurnBeforePaint: nM,
                    scrollToKey: nw
                }), () => {
                    e9(null)
                }
            }, eS = [nB, nd, nH, nM, e9, nw], e0[163] = nB, e0[164] = nH, e0[165] = nd, e0[166] = nM, e0[167] = e9, e0[168] = nw, e0[169] = eI, e0[170] = eS) : (eI = e0[169], eS = e0[170]), (0, a.useEffect)(eI, eS), e0[171] !== nc ? (eM = () => () => {
                t7.current = !1, nc()
            }, eE = [nc], e0[171] = nc, e0[172] = eM, e0[173] = eE) : (eM = e0[172], eE = e0[173]), (0, a.useLayoutEffect)(eM, eE), e0[174] !== nc || e0[175] !== ng ? (eF = () => (ng(), nc), e0[174] = nc, e0[175] = ng, e0[176] = eF) : eF = e0[176], e0[177] !== nc || e0[178] !== tF.length || e0[179] !== te || e0[180] !== ng || e0[181] !== tz ? (eC = [nc, tF.length, te, ng, tz], e0[177] = nc, e0[178] = tF.length, e0[179] = te, e0[180] = ng, e0[181] = tz, e0[182] = eC) : eC = e0[182], (0, a.useEffect)(eF, eC), e0[183] !== tV ? (eO = () => {
                let e = tX.current,
                    t = tY.current,
                    n = t0.current;
                return () => {
                    null != t5.current && (cancelAnimationFrame(t5.current), t5.current = null), t4.current?.disconnect(), t4.current = null, e.clear(), t.clear(), t1.current.clear(), n.clear(), t2.current = null, tV.replace(null)
                }
            }, eL = [tV], e0[183] = tV, e0[184] = eO, e0[185] = eL) : (eO = e0[184], eL = e0[185]), (0, a.useEffect)(eO, eL), e0[186] !== tg ? (eD = () => {
                if (null != tg) return () => {
                    tg(function(e, t) {
                        let {
                            turnKeys: n,
                            renderedRange: r,
                            viewportHeightPx: l
                        } = t, u = N();
                        for (let t of n) {
                            let n = e[t];
                            null != n && (u[t] = n)
                        }
                        let o = n[r.startIndex];
                        return null == o ? null : {
                            renderedWindow: {
                                anchorKey: o,
                                count: r.endIndex - r.startIndex,
                                viewportHeightPx: l
                            },
                            turnHeightsByKey: {
                                ...u
                            }
                        }
                    }(tW.current, tQ.current))
                }
            }, e_ = [tg], e0[186] = tg, e0[187] = eD, e0[188] = e_) : (eD = e0[187], e_ = e0[188]), (0, a.useLayoutEffect)(eD, e_), e0[189] !== e8 || e0[190] !== tS || e0[191] !== tM || e0[192] !== e4 ? (eT = tS < 0 ? void 0 : e8?.(e4[tS]) ?? tM, e0[189] = e8, e0[190] = tS, e0[191] = tM, e0[192] = e4, e0[193] = eT) : eT = e0[193];
            let nO = eT;
            e0[194] !== nO || e0[195] !== tC || e0[196] !== tG || e0[197] !== tz || e0[198] !== tL ? (ez = () => {
                if (null == tz || null == nO) return;
                let e = e => {
                    let t = tC.getScrollElement(),
                        n = e.target;
                    null != t && !(t.scrollTop <= 0) && n instanceof Element && !(n.getBoundingClientRect().bottom <= t.getBoundingClientRect().top) && tG(Math.max(0, (0, c.b)(tz.getBoundingClientRect().height, tL) - (0, m.b)(t)))
                };
                return tz.addEventListener(x.a, e), () => {
                    tz.removeEventListener(x.a, e), tG(0)
                }
            }, ek = [nO, tC, tG, tz, tL], e0[194] = nO, e0[195] = tC, e0[196] = tG, e0[197] = tz, e0[198] = tL, e0[199] = ez, e0[200] = ek) : (ez = e0[199], ek = e0[200]), (0, a.useLayoutEffect)(ez, ek);
            let {
                addScrollListener: nL,
                addUserScrollListener: nD,
                getScrollElement: n_
            } = tC;
            e0[201] !== nL || e0[202] !== nD || e0[203] !== tr || e0[204] !== n_ || e0[205] !== tO || e0[206] !== nC || e0[207] !== tB || e0[208] !== nm || e0[209] !== nf || e0[210] !== np || e0[211] !== ns || e0[212] !== tG || e0[213] !== tz || e0[214] !== ny ? (eq = () => {
                let e = n_();
                if (null == e) return;
                let t = () => (null == tJ.current && (tJ.current = e.clientHeight), tJ.current || tQ.current.viewportHeightPx || 800),
                    n = nL(e => {
                        ny(j(e, q(tr)), t()), nm(e)
                    }),
                    r = nD((e, n) => {
                        let r = t$.current;
                        if (r > 0) {
                            let t = r - e;
                            tG(t > ne.current.totalHeightPx && e > 0 ? t : 0)
                        }
                        np(j(e, q(tr)), t(), null != n && e > n)
                    }),
                    l = new ResizeObserver(n => {
                        let r = n.find(t => t.target === e);
                        if (null != r) {
                            let {
                                height: e
                            } = (0, h.a)(r);
                            tJ.current = e, ny(tQ.current.distanceFromBottomPx, e), ns()
                        }
                        nC(t()), nf(), null != r && tO?.()
                    });
                return l.observe(e), tB && null != tz && l.observe(tz), () => {
                    n(), r(), l.disconnect()
                }
            }, ej = [nL, nD, tr, n_, tO, nC, nf, tB, np, nm, ns, tG, tz, ny], e0[201] = nL, e0[202] = nD, e0[203] = tr, e0[204] = n_, e0[205] = tO, e0[206] = nC, e0[207] = tB, e0[208] = nm, e0[209] = nf, e0[210] = np, e0[211] = ns, e0[212] = tG, e0[213] = tz, e0[214] = ny, e0[215] = eq, e0[216] = ej) : (eq = e0[215], ej = e0[216]), (0, a.useLayoutEffect)(eq, ej), e0[217] !== nK || e0[218] !== tr || e0[219] !== tq || e0[220] !== tA || e0[221] !== tC || e0[222] !== tV || e0[223] !== nv || e0[224] !== ny || e0[225] !== tL ? (eN = () => {
                if (null == tA || tV.getSnapshot() !== tA || null != t5.current) return;
                let e = tC.getScrollElement();
                if (null == e) return;
                let t = new Map;
                for (let [e, n] of tY.current) {
                    let r = (0, c.b)(n.getBoundingClientRect().height, tL);
                    r > 0 && t.set(e, {
                        element: n,
                        heightPx: r
                    })
                }
                if (nK(t, !1) || null != t2.current) return;
                let n = tY.current.get(tA.turnKey),
                    r = null == n ? null : tA.getTargetElement?.(n) ?? n,
                    l = null == n || null == r ? function(e) {
                        let {
                            align: t,
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        } = e;
                        if ("center" === t) return R({
                            layout: n,
                            turnKey: r,
                            viewportHeightPx: l
                        });
                        let u = n.turnIndexByKey.get(r);
                        return null == u ? null : Math.max(0, (n.bottomOffsetsPx[u] ?? 0) + (n.heightsPx[u] ?? 0) - l + 10)
                    }({
                        align: tA.align,
                        layout: tq,
                        turnKey: tA.turnKey,
                        viewportHeightPx: e.clientHeight
                    }) : function(e) {
                        let {
                            align: t,
                            layout: n,
                            targetElement: r,
                            turnElement: l,
                            turnKey: u,
                            windowZoom: o,
                            viewportHeightPx: i
                        } = e, a = n.turnIndexByKey.get(u);
                        if (null == a) return null;
                        let s = l.getBoundingClientRect(),
                            g = r.getBoundingClientRect(),
                            h = (0, c.b)(g.top - s.top, o),
                            x = (0, c.b)(g.height, o),
                            d = (n.bottomOffsetsPx[a] ?? 0) + (n.heightsPx[a] ?? 0) - h;
                        return "top" === t ? Math.max(0, d - i + 10) : Math.max(0, d - x / 2 - i / 2)
                    }({
                        align: tA.align,
                        layout: tq,
                        targetElement: r,
                        turnElement: n,
                        turnKey: tA.turnKey,
                        viewportHeightPx: e.clientHeight,
                        windowZoom: tL
                    });
                if (null == l) return void queueMicrotask(() => nv(tA));
                let u = "top" === tA.align && null != r ? Math.max(0, tC.getLastScrollDistanceFromBottomPx() - (0, c.b)(r.getBoundingClientRect().top - e.getBoundingClientRect().top, tL) + 10) : l + q(tr);
                tC.scrollToDistanceFromBottomPx(u, "instant", "user"), ny(Math.max(0, u - q(tr)), e.clientHeight), queueMicrotask(() => nv(tA))
            }, e0[217] = nK, e0[218] = tr, e0[219] = tq, e0[220] = tA, e0[221] = tC, e0[222] = tV, e0[223] = nv, e0[224] = ny, e0[225] = tL, e0[226] = eN) : eN = e0[226], e0[227] !== nK || e0[228] !== tr || e0[229] !== tq || e0[230] !== t8 || e0[231] !== tA || e0[232] !== tC || e0[233] !== tV || e0[234] !== nv || e0[235] !== ny || e0[236] !== tL ? (eV = [nK, tq, t8, tA, tC, tV, nv, tr, ny, tL], e0[227] = nK, e0[228] = tr, e0[229] = tq, e0[230] = t8, e0[231] = tA, e0[232] = tC, e0[233] = tV, e0[234] = nv, e0[235] = ny, e0[236] = tL, e0[237] = eV) : eV = e0[237], (0, a.useLayoutEffect)(eN, eV), e0[238] !== tr || e0[239] !== no || e0[240] !== ni || e0[241] !== ta || e0[242] !== tA || e0[243] !== tw || e0[244] !== e4 || e0[245] !== tC || e0[246] !== ny ? (eA = () => {
                var e;
                if (null != t2.current) return;
                let t = nn.current,
                    n = no(),
                    r = nl.current ?? n;
                nl.current = null, nn.current = n;
                let l = nr.current !== e4;
                if (nr.current = e4, null != tA || !tw && t.turnKeys.at(-1) !== r.turnKeys.at(-1) || t === r && !l) return;
                let u = q(tr),
                    o = tC.getLastScrollDistanceFromBottomPx({
                        includePendingUserScroll: !0
                    });
                if (null != (ta?.() ?? null)) return;
                if (tC.shouldFollowContentGrowth() && (e = o, 0 === u && e <= 24)) return void tC.compensateScrollToDistanceFromBottomPx(0);
                if (t === r) return;
                let i = L({
                    distanceFromBottomPx: ni(o),
                    preferLatestVisibleRow: o < u,
                    layout: t,
                    measuredHeightsByKey: tW.current,
                    nextLayout: r,
                    viewportHeightPx: tQ.current.viewportHeightPx
                });
                if (null == i) return;
                let a = tC.getUnroundedScrollDistanceFromBottomPx(o),
                    s = function(e) {
                        let {
                            anchorKey: t,
                            distanceFromBottomPx: n,
                            nextLayout: r,
                            previousLayout: l
                        } = e, u = l.turnIndexByKey.get(t), o = r.turnIndexByKey.get(t);
                        if (null == u || null == o) return null;
                        let i = (l.bottomOffsetsPx[u] ?? 0) + (l.heightsPx[u] ?? 0);
                        return Math.max(0, n + ((r.bottomOffsetsPx[o] ?? 0) + (r.heightsPx[o] ?? 0)) - i)
                    }({
                        anchorKey: i,
                        distanceFromBottomPx: a,
                        nextLayout: r,
                        previousLayout: t
                    });
                null != s && (s !== a || t.totalHeightPx !== r.totalHeightPx) && (ny(j(s, u), tQ.current.viewportHeightPx), tC.compensateScrollToDistanceFromBottomPx(s))
            }, e0[238] = tr, e0[239] = no, e0[240] = ni, e0[241] = ta, e0[242] = tA, e0[243] = tw, e0[244] = e4, e0[245] = tC, e0[246] = ny, e0[247] = eA) : eA = e0[247], e0[248] !== tr || e0[249] !== no || e0[250] !== ni || e0[251] !== ta || e0[252] !== tq || e0[253] !== tA || e0[254] !== tw || e0[255] !== e4 || e0[256] !== tC || e0[257] !== ny ? (eU = [tr, no, ni, ta, tq, tA, tw, e4, tC, ny], e0[248] = tr, e0[249] = no, e0[250] = ni, e0[251] = ta, e0[252] = tq, e0[253] = tA, e0[254] = tw, e0[255] = e4, e0[256] = tC, e0[257] = ny, e0[258] = eU) : eU = e0[258], (0, a.useLayoutEffect)(eA, eU), e0[259] !== tA || e0[260] !== np || e0[261] !== ns || e0[262] !== ny ? (eW = () => {
                null == tA && null == t2.current && (ny(tQ.current.distanceFromBottomPx, tQ.current.viewportHeightPx), ns(), np(tQ.current.distanceFromBottomPx, tQ.current.viewportHeightPx, !1))
            }, e0[259] = tA, e0[260] = np, e0[261] = ns, e0[262] = ny, e0[263] = eW) : eW = e0[263], e0[264] !== tq || e0[265] !== tA || e0[266] !== np || e0[267] !== ns || e0[268] !== ny ? (e$ = [tq, tA, np, ns, ny], e0[264] = tq, e0[265] = tA, e0[266] = np, e0[267] = ns, e0[268] = ny, e0[269] = e$) : e$ = e0[269], (0, a.useLayoutEffect)(eW, e$), e0[270] !== nf ? (eG = () => {
                nf()
            }, e0[270] = nf, e0[271] = eG) : eG = e0[271], (0, a.useLayoutEffect)(eG), e0[272] !== tt ? (eQ = (0, o.b)("relative shrink-0", tt), e0[272] = tt, e0[273] = eQ) : eQ = e0[273], e0[274] !== tq.totalHeightPx ? (eJ = {
                height: tq.totalHeightPx
            }, e0[274] = tq.totalHeightPx, e0[275] = eJ) : eJ = e0[275], e0[276] !== nx ? (eX = (0, r.jsx)(u.b, {
                name: "conversation rows",
                active: nx
            }), e0[276] = nx, e0[277] = eX) : eX = e0[277];
            let nT = `${tq.topOffsetsPx[na.startIndex]??0}px`;
            e0[278] !== nT ? (eY = {
                marginTop: nT
            }, e0[278] = nT, e0[279] = eY) : eY = e0[279];
            let nz = nh.map(e => {
                let {
                    entry: t,
                    turnIndex: n
                } = e, l = tF[n].turnKey;
                return (0, r.jsx)(F, {
                    entry: t,
                    turnKey: l,
                    minHeightPx: e5(t).minHeightPx,
                    gapBeforePx: n === na.startIndex ? 0 : tq.gapsBeforePx[n] ?? 0,
                    retainedTopPx: n < na.startIndex || n >= na.endIndex ? tq.topOffsetsPx[n] : void 0,
                    latestTurnFollowContentRef: n === tF.length - 1 && null != tu ? nE : void 0,
                    RowComponent: e7,
                    measuredHeightPx: null == t_[l] ? void 0 : tq.heightsPx[n],
                    constrainedHeightPx: n !== tF.length - 1 && tA?.turnKey !== l && null == t_[l] ? tq.heightsPx[n] : void 0,
                    observeTurnElement: nS
                }, l)
            });
            return e0[280] !== eY || e0[281] !== nz ? (eZ = (0, r.jsx)("div", {
                className: "flex flex-col",
                style: eY,
                children: nz
            }), e0[280] = eY, e0[281] = nz, e0[282] = eZ) : eZ = e0[282], e0[283] !== nu || e0[284] !== eQ || e0[285] !== eJ || e0[286] !== eX || e0[287] !== eZ ? (e1 = (0, r.jsxs)("div", {
                ref: nu,
                className: eQ,
                style: eJ,
                children: [eX, eZ]
            }), e0[283] = nu, e0[284] = eQ, e0[285] = eJ, e0[286] = eX, e0[287] = eZ, e0[288] = e1) : e1 = e0[288], e1
        }

        function M(e, t) {
            return e.turnIndex - t.turnIndex
        }

        function E() {
            return new A
        }
        let F = (0, a.memo)(function(e) {
            let t, n, u, i, a, s, c = (0, l.c)(24),
                {
                    entry: g,
                    turnKey: h,
                    minHeightPx: x,
                    gapBeforePx: d,
                    latestTurnFollowContentRef: m,
                    RowComponent: f,
                    constrainedHeightPx: y,
                    measuredHeightPx: p,
                    retainedTopPx: v,
                    observeTurnElement: w
                } = e;
            c[0] !== w || c[1] !== h ? (t = e => w(h, e), c[0] = w, c[1] = h, c[2] = t) : t = c[2];
            let B = (0, P.a)(t),
                H = null != v && "absolute inset-x-0",
                b = null != y && "overflow-hidden";
            c[3] !== H || c[4] !== b ? (n = (0, o.b)(H, b), c[3] = H, c[4] = b, c[5] = n) : n = c[5];
            let K = null != p ? "size" : void 0,
                R = p ?? y,
                I = null == v ? d : 0,
                S = null == p ? x : void 0;
            return c[6] !== v || c[7] !== K || c[8] !== R || c[9] !== I || c[10] !== S ? (u = {
                contain: K,
                height: R,
                marginTop: I,
                minHeight: S,
                top: v
            }, c[6] = v, c[7] = K, c[8] = R, c[9] = I, c[10] = S, c[11] = u) : u = c[11], c[12] !== f || c[13] !== g || c[14] !== m ? (i = (0, r.jsx)(f, {
                entry: g,
                latestTurnFollowContentRef: m
            }), c[12] = f, c[13] = g, c[14] = m, c[15] = i) : i = c[15], c[16] !== B || c[17] !== i || c[18] !== h ? (a = (0, r.jsx)("div", {
                ref: B,
                className: "[&_[data-virtualized-turn-content]]:[content-visibility:visible]",
                "data-turn-key": h,
                children: i
            }), c[16] = B, c[17] = i, c[18] = h, c[19] = a) : a = c[19], c[20] !== a || c[21] !== n || c[22] !== u ? (s = (0, r.jsx)("div", {
                className: n,
                style: u,
                children: a
            }), c[20] = a, c[21] = n, c[22] = u, c[23] = s) : s = c[23], s
        });

        function C(e) {
            let {
                current: t,
                distanceFromBottomPx: n,
                layout: r,
                viewportHeightPx: l
            } = e, u = Math.min(n, r.totalHeightPx), o = O(r, u, l, t.renderedRange);
            return t.distanceFromBottomPx === u && t.viewportHeightPx === l && t.renderedRange.startIndex === o.startIndex && t.renderedRange.endIndex === o.endIndex && k(t.turnKeys, r.turnKeys) ? t : {
                distanceFromBottomPx: u,
                renderedRange: o,
                turnKeys: r.turnKeys,
                viewportHeightPx: l
            }
        }

        function O(e, t, n, r) {
            var l, u;
            let o = {
                    layout: e,
                    distanceFromBottomPx: t,
                    viewportHeightPx: n
                },
                i = b({
                    ...o,
                    overscanCount: 0,
                    overscanPx: n
                }),
                a = b({
                    ...o,
                    overscanCount: 2
                }),
                s = {
                    startIndex: Math.max(a.startIndex, i.startIndex),
                    endIndex: Math.min(a.endIndex, i.endIndex)
                };
            return null != r && (l = r, u = s, l.startIndex <= u.startIndex && l.endIndex >= u.endIndex) ? {
                startIndex: Math.max(r.startIndex, i.startIndex),
                endIndex: Math.min(r.endIndex, i.endIndex)
            } : s
        }

        function L(e) {
            let {
                distanceFromBottomPx: t,
                preferLatestVisibleRow: n,
                layout: r,
                measuredHeightsByKey: l,
                nextLayout: u,
                viewportHeightPx: o
            } = e, i = b({
                distanceFromBottomPx: t,
                layout: r,
                overscanCount: 0,
                viewportHeightPx: Math.max(0, o + Math.min(0, t))
            }), a = null;
            for (let e = i.startIndex; e < i.endIndex; e += 1) {
                let i = r.turnKeys[e];
                if (null != i && !r.gapKeys.has(i) && (!r.collapseEmptyRows || (r.heightsPx[e] ?? 0) > 0) && null != l[i] && u.turnIndexByKey.has(i) && (r.bottomOffsetsPx[e] ?? 0) < t + o && (r.bottomOffsetsPx[e] ?? 0) + (r.heightsPx[e] ?? 0) > t) {
                    if (n) a = i;
                    else if (null == a && (a = i), (r.bottomOffsetsPx[e] ?? 0) + (r.heightsPx[e] ?? 0) <= t + o) return i
                }
            }
            return a
        }

        function D() {
            let e = [];
            return (t, n, r, l, u) => {
                let o = (e, n) => null != u && n === t.length - 1 ? Math.max(e ?? 0, u) : e;
                return (t.length !== e.length || t.some((t, u) => {
                    let i = e[u],
                        a = r(t);
                    return n(t) !== i.turnKey || a.gapBeforePx !== i.gapBeforePx || a.estimatedHeightPx !== i.estimatedHeightPx || o(a.minHeightPx, u) !== i.minHeightPx || (l?.(t) ?? !0) !== i.anchorEligible
                })) && (e = t.map((e, t) => {
                    let u = r(e);
                    return {
                        turnKey: n(e),
                        gapBeforePx: u.gapBeforePx,
                        estimatedHeightPx: u.estimatedHeightPx,
                        minHeightPx: o(u.minHeightPx, t),
                        anchorEligible: l?.(e) ?? !0
                    }
                })), e
            }
        }

        function _(e) {
            return e.turnKey
        }

        function T(e) {
            return e
        }

        function z(e) {
            return e.turnSearchKey ?? e.turnKey
        }

        function k(e, t) {
            return e === t || e.length === t.length && e.every((e, n) => e === t[n])
        }

        function q(e) {
            return Math.max(0, e?.() ?? 0)
        }

        function j(e, t) {
            return Math.max(0, e - t)
        }

        function N(e) {
            let t = {};
            return Object.setPrototypeOf(t, null), Object.assign(t, e)
        }

        function V(e) {
            let {
                scrollElement: t,
                turnElement: n,
                windowZoom: r
            } = e;
            return null == t || null == n ? 0 : (0, c.b)(n.getBoundingClientRect().bottom - t.getBoundingClientRect().bottom, r)
        }
        class A {
            request = null;
            listeners = new Set;
            getSnapshot = () => this.request;
            subscribe = e => (this.listeners.add(e), () => {
                this.listeners.delete(e)
            });
            replace(e) {
                if (this.request === e) return;
                let t = this.request;
                for (let n of (this.request = e, t?.complete(), this.listeners)) n()
            }
        }
    }),
    QEDJ: (function(e, t, n) {
        n.d(t, {}, {
            a: "thread-content-will-collapse"
        })
    }),
    g3o5: (function(e, t, n) {
        var r = n("SZCv"),
            l = n.n(r),
            u = n("BolX"),
            o = n("OWtl");
        let i = (0, u.u)(o.a, () => new Map),
            a = (0, u.c)(o.a, e => {
                let {
                    get: t
                } = e;
                return [...t(i).keys()]
            }, {
                isEqual: l()
            });
        n.d(t, {}, {
            a: function(e, t) {
                return e.set(i, e => new Map(e).set(t, (e.get(t) ?? 0) + 1)), () => {
                    e.set(i, e => {
                        let n = new Map(e),
                            r = (n.get(t) ?? 1) - 1;
                        return 0 === r ? n.delete(t) : n.set(t, r), n
                    })
                }
            },
            b: a
        })
    })
};
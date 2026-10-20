import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ei as n,
    Hot as r,
    Ix as i,
    J5 as ee,
    Ni as te,
    Nx as ne,
    Pi as re,
    Px as ie,
    RU as ae,
    SN as a,
    Vot as o,
    Wnt as oe,
    Xnt as s,
    Y5 as c,
    _N as l,
    iE as se,
    ki as u,
    rE as ce,
    vN as d,
    yN as le,
    zU as f
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as p,
    Rn as m,
    Vn as h,
    wn as ue,
    zn as de
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    c as g,
    s as fe
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    a as pe,
    i as _
} from "./dced7e81-o26y44gdi7rsf4sp.js";
import {
    a as me,
    i as he,
    o as ge,
    r as _e,
    s as ve
} from "./c93e007a-lvetchasqlijz95h.js";
import {
    E as ye,
    U as be,
    f as v,
    r as y,
    w as b
} from "./bcae0416-jhuttfvj8pru009f.js";
import {
    c as xe,
    l as Se,
    s as Ce,
    u as we
} from "./df59e297-w0ht82ye6tsyroqp.js";
import {
    t as Te
} from "./4c0f1f8e-o4zbuwgknf8ay6gx.js";
import {
    _ as Ee,
    a as x,
    c as De,
    d as Oe,
    f as S,
    h as ke,
    i as Ae,
    m as je,
    n as Me,
    o as Ne,
    r as Pe,
    s as Fe,
    t as Ie,
    u as C,
    v as Le
} from "./14046b31-kyy9um8cnr48scb0.js";
import {
    C as w,
    E as T
} from "./bcae0416-mjx8yw2sp7t6uqea.js";
import {
    n as Re,
    r as E,
    t as D
} from "./6cb574fa-knc8r4kzbh811dp5.js";
import {
    m as ze,
    p as O
} from "./e99f8e1a-jdvsx8xava6pojxm.js";
var Be, k, A, j, M = e((() => {
        Be = `E1e5UW_codemirror`, k = `E1e5UW_preview`, A = `E1e5UW_systemFont`, j = {
            codemirror: Be,
            preview: k,
            systemFont: A
        }
    })),
    N, P, F, I, L, Ve, R = e((() => {
        le(), w(), be(), v(), N = t(h()), ze(), P = y.theme({
            ".cm-tooltip-autocomplete": {
                backgroundColor: `var(--main-surface-primary)`,
                color: `var(--text-primary)`,
                border: `1px solid var(--border-light)`,
                borderRadius: `6px`,
                padding: `4px`,
                boxShadow: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`
            },
            ".cm-tooltip-autocomplete > ul > li": {
                borderRadius: `5px`,
                color: `var(--text-primary)`
            },
            ".cm-tooltip-autocomplete > ul > li[aria-selected]": {
                backgroundColor: `var(--main-surface-secondary)`,
                color: `var(--text-primary)`
            },
            ".cm-tooltip-autocomplete > ul > li:hover": {
                backgroundColor: `var(--selection)`,
                color: `#ffffff`
            },
            ".cm-completionMatchedText": {
                textDecoration: `none`,
                fontWeight: `700`
            }
        }), F = y.theme({
            ".cm-scroller": {
                fontFamily: `ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important`
            }
        }), I = y.theme({
            "&": {
                backgroundColor: `transparent`
            }
        }), L = e => [F, I, P, T(O(e), {
            fallback: !0
        })], Ve = e => {
            let [t] = (0, N.useState)(() => new b), n = a();
            (0, N.useEffect)(() => {
                e.current?.dispatch({
                    effects: t.reconfigure(L(n))
                })
            }, [n, t, e]);
            let [r] = (0, N.useState)(() => t.of(L(n)));
            return r
        }
    }));

function He() {
    return new b
}

function Ue() {
    return new b
}

function We() {
    return new b
}

function Ge() {
    return new b
}
async function Ke(e) {
    return e ? await D(e) : null
}
var qe, z, Je, B, V, Ye, Xe, H = e((() => {
    qe = ue(), x(), Ee(), _e(), ke(), S(), C(), Ne(), we(), _(), g(), u(), f(), i(), o(), s(), ce(), l(), be(), v(), c(), z = t(h()), m(), Je = t(Te()), M(), E(), R(), B = p(), V = e => {
        "use forget";
        let t = (0, qe.c)(116),
            {
                id: i,
                children: a,
                comments: o,
                commentingOn: s,
                currentlyStreamingLineIndex: c,
                hoveredCommentId: l,
                focusedCommentId: u,
                placeholder: ce,
                readonlyReason: le,
                language: f,
                value: p,
                textdocDiff: m,
                extensions: h,
                maxLength: ue,
                onBlur: g,
                onSave: _,
                onChange: _e,
                editorRef: be,
                width: v,
                modelCursor: b,
                isPreview: we,
                hideLineNumbers: Te,
                useSystemFont: Ee
            } = e,
            x = ce === void 0 ? `` : ce,
            S = Te !== void 0 && Te,
            ke = Ee !== void 0 && Ee,
            Ne = (0, z.useRef)(null),
            C = (0, z.useRef)(null),
            w = de(),
            T = (oe(`1958014328`) ? 1e7 : void 0) ?? ue,
            E = le?.isReadonly === !0,
            [D, ze] = (0, z.useState)(null),
            O = (0, z.useRef)(null),
            [Be, k] = (0, Je.default)(),
            {
                width: A
            } = Be,
            [M] = (0, z.useState)(He),
            [N] = (0, z.useState)(Ue),
            [P] = (0, z.useState)(We),
            [F] = (0, z.useState)(Ge),
            I;
        t[0] === _e ? I = t[1] : (I = e => {
            let {
                docChanged: t,
                state: n,
                transactions: r
            } = e;
            for (let e of r)
                if (e.annotation(Ie) === !0 || e.annotation(Oe) === !0) return;
            if (t) {
                let e = n.doc.toString();
                O.current = e, _e?.(n)
            }
        }, t[0] = _e, t[1] = I);
        let L = d(I),
            R;
        t[2] === g ? R = t[3] : (R = () => g?.(), t[2] = g, t[3] = R);
        let V = d(R),
            H;
        t[4] === _ ? H = t[5] : (H = () => _?.(), t[4] = _, t[5] = H);
        let U = d(H),
            W;
        t[6] !== E || t[7] !== _ ? (W = e => _ == null || E || !te(`saveCanvasEditor`, e) ? !1 : (e.preventDefault(), n(`saveCanvasEditor`, e)), t[6] = E, t[7] = _, t[8] = W) : W = t[8];
        let Ze = d(W),
            Qe = Ke,
            $e;
        t[9] !== M || t[10] !== m || t[11] !== F ? ($e = async e => {
            let t = await Qe(e);
            t && C.current?.dispatch({
                effects: [M.reconfigure(t), ...Ae(F, m, t?.language)]
            })
        }, t[9] = M, t[10] = m, t[11] = F, t[12] = $e) : $e = t[12];
        let et = d($e),
            tt = Ve(C),
            nt;
        t[13] !== o || t[14] !== c || t[15] !== f || t[16] !== M || t[17] !== m || t[18] !== F ? (nt = e => {
            if (e === O.current) {
                O.current = null;
                return
            }
            let {
                current: t
            } = C;
            if (!t) return;
            let n = t.state.doc,
                r = n.toString(),
                i = De(r, 0, r.length, e, 0, e.length),
                ee = e.slice(i),
                te = {
                    from: i,
                    to: n.length,
                    insert: ee
                },
                ne = f == null ? null : Re(f),
                re = t.state.update({
                    changes: te,
                    effects: [me.of(o ?? []), Le.of(c ?? null), ...ne == null ? [] : [M.reconfigure(ne)], ...Ae(F, m, ne?.language)],
                    annotations: Ie.of(!0)
                });
            t.update([re])
        }, t[13] = o, t[14] = c, t[15] = f, t[16] = M, t[17] = m, t[18] = F, t[19] = nt) : nt = t[19];
        let rt = d(nt),
            it;
        t[20] === rt ? it = t[21] : (it = () => ({
            UNSAFE_setValue: rt,
            codeViewRef: C,
            highlightLine: (e, t) => je(r(C.current), e, t)
        }), t[20] = rt, t[21] = it), (0, z.useImperativeHandle)(be, it);
        let at, ot;
        t[22] !== f || t[23] !== et ? (at = () => {
            et(f)
        }, ot = [f, et], t[22] = f, t[23] = et, t[24] = at, t[25] = ot) : (at = t[24], ot = t[25]), (0, z.useEffect)(at, ot);
        let st;
        t[26] !== f || t[27] !== m || t[28] !== F ? (st = () => {
            let e = f == null ? null : Re(f);
            C.current?.dispatch({
                effects: Ae(F, m, e?.language)
            })
        }, t[26] = f, t[27] = m, t[28] = F, t[29] = st) : st = t[29];
        let ct = (0, z.useEffectEvent)(st),
            lt;
        t[30] === ct ? lt = t[31] : (lt = () => {
            ct()
        }, t[30] = ct, t[31] = lt);
        let ut;
        t[32] !== m || t[33] !== F ? (ut = [F, m], t[32] = m, t[33] = F, t[34] = ut) : ut = t[34], (0, z.useEffect)(lt, ut);
        let dt, ft;
        t[35] !== N || t[36] !== E || t[37] !== P ? (dt = () => {
            C.current?.dispatch({
                effects: [N.reconfigure(y.editable.of(!E)), P.reconfigure(ye.readOnly.of(E))]
            })
        }, ft = [E, N, P], t[35] = N, t[36] = E, t[37] = P, t[38] = dt, t[39] = ft) : (dt = t[38], ft = t[39]), (0, z.useEffect)(dt, ft);
        let pt, mt;
        t[40] === s ? (pt = t[41], mt = t[42]) : (pt = () => {
            (s == null || pe(s)) && C.current?.dispatch({
                effects: he.of(s ?? null)
            })
        }, mt = [s], t[40] = s, t[41] = pt, t[42] = mt), (0, z.useEffect)(pt, mt);
        let ht, gt;
        t[43] === o ? (ht = t[44], gt = t[45]) : (ht = () => {
            C.current?.dispatch({
                effects: me.of(o ?? [])
            })
        }, gt = [o], t[43] = o, t[44] = ht, t[45] = gt), (0, z.useEffect)(ht, gt);
        let _t, vt;
        t[46] === l ? (_t = t[47], vt = t[48]) : (_t = () => {
            C.current?.dispatch({
                effects: ve.of(l)
            })
        }, vt = [l], t[46] = l, t[47] = _t, t[48] = vt), (0, z.useEffect)(_t, vt);
        let yt, G;
        t[49] === u ? (yt = t[50], G = t[51]) : (yt = () => {
            C.current?.dispatch({
                effects: ge.of(u)
            })
        }, G = [u], t[49] = u, t[50] = yt, t[51] = G), (0, z.useEffect)(yt, G);
        let bt, xt;
        t[52] === b ? (bt = t[53], xt = t[54]) : (bt = () => {
            C.current?.dispatch({
                effects: Fe.of(b)
            })
        }, xt = [b], t[52] = b, t[53] = bt, t[54] = xt), (0, z.useEffect)(bt, xt);
        let St, Ct;
        t[55] === c ? (St = t[56], Ct = t[57]) : (St = () => {
            C.current?.dispatch({
                effects: Le.of(c ?? null)
            })
        }, Ct = [c], t[55] = c, t[56] = St, t[57] = Ct), (0, z.useEffect)(St, Ct);
        let wt, Tt;
        t[58] !== U || t[59] !== E || t[60] !== _ ? (wt = () => re({
            key: `saveCanvasEditor`,
            action: U,
            actionMessageDescriptor: {
                id: `keyboardActions.saveCanvasEditor`,
                defaultMessage: `Save canvas editor`,
                description: `Keyboard shortcut label for saving the focused canvas code editor.`
            },
            bindings: [{
                binding: [ie.Mod, `s`]
            }],
            enabled: _ != null && !E,
            group: ne.Chat,
            order: 10,
            scope: `canvas`
        }), Tt = [U, E, _], t[58] = U, t[59] = E, t[60] = _, t[61] = wt, t[62] = Tt) : (wt = t[61], Tt = t[62]), (0, z.useEffect)(wt, Tt);
        let Et;
        t[63] !== o || t[64] !== c || t[65] !== N || t[66] !== tt || t[67] !== h || t[68] !== V || t[69] !== L || t[70] !== Ze || t[71] !== S || t[72] !== w || t[73] !== E || t[74] !== f || t[75] !== M || t[76] !== T || t[77] !== b || t[78] !== x || t[79] !== P || t[80] !== m || t[81] !== F || t[82] !== p ? (Et = e => {
            let t = f == null ? null : Re(f),
                n = Pe({
                    currentlyStreamingLineIndex: c,
                    value: p,
                    placeholderContent: x,
                    editableCompartment: N,
                    readOnlyCompartment: P,
                    editableInit: !E,
                    languageCompartment: M,
                    languageCompartmentInit: t ?? null,
                    handleChange: L,
                    handleBlur: V,
                    handleSaveShortcut: Ze,
                    extensionsProp: h,
                    editorTheme: tt,
                    intl: w,
                    toaster: ae(),
                    maxLength: T,
                    comments: o ?? [],
                    modelCursor: b,
                    textdocDiff: m,
                    unifiedMergeViewCompartment: F,
                    hideLineNumbers: S
                });
            ze(n);
            let r = Me({
                state: n,
                parent: e,
                onUpdateState: ze
            });
            return C.current = r, () => {
                r.destroy()
            }
        }, t[63] = o, t[64] = c, t[65] = N, t[66] = tt, t[67] = h, t[68] = V, t[69] = L, t[70] = Ze, t[71] = S, t[72] = w, t[73] = E, t[74] = f, t[75] = M, t[76] = T, t[77] = b, t[78] = x, t[79] = P, t[80] = m, t[81] = F, t[82] = p, t[83] = Et) : Et = t[83];
        let Dt = (0, z.useEffectEvent)(Et),
            Ot;
        t[84] === Dt ? Ot = t[85] : (Ot = () => {
            let e = Ne.current;
            if (e != null) return Dt(e)
        }, t[84] = Dt, t[85] = Ot);
        let kt;
        t[86] !== h || t[87] !== i || t[88] !== x ? (kt = [i, h, x], t[86] = h, t[87] = i, t[88] = x, t[89] = kt) : kt = t[89], (0, z.useEffect)(Ot, kt);
        let At;
        t[90] === Symbol.for(`react.memo_cache_sentinel`) ? (At = () => C.current, t[90] = At) : At = t[90];
        let jt = At,
            K, q;
        t[91] === a ? (K = t[92], q = t[93]) : (K = [], q = [], z.Children.forEach(a, e => {
            if (!(0, z.isValidElement)(e)) return;
            let {
                type: t
            } = e;
            if (t === Xe) K.push(e);
            else if (t === Ye) q.push(e);
            else throw Error(`Invalid Codemirror child: ` + JSON.stringify(t))
        }), t[91] = a, t[92] = K, t[93] = q);
        let Mt = we && j.preview,
            Nt = ke && j.systemFont,
            J;
        t[94] !== Mt || t[95] !== Nt ? (J = ee(j.codemirror, Mt, Nt, fe.composer, `flex h-full w-full flex-col items-stretch`), t[94] = Mt, t[95] = Nt, t[96] = J) : J = t[96];
        let Y;
        t[97] === k ? Y = t[98] : (Y = se(Ne, k), t[97] = k, t[98] = Y);
        let X;
        t[99] === v ? X = t[100] : (X = {
            width: v
        }, t[99] = v, t[100] = X);
        let Z;
        t[101] !== i || t[102] !== J || t[103] !== Y || t[104] !== X ? (Z = (0, B.jsx)(`div`, {
            id: i,
            className: J,
            ref: Y,
            style: X
        }), t[101] = i, t[102] = J, t[103] = Y, t[104] = X, t[105] = Z) : Z = t[105];
        let Q;
        t[106] !== q || t[107] !== Z ? (Q = (0, B.jsxs)(`div`, {
            className: `relative z-0 flex h-full max-w-full`,
            children: [Z, q]
        }), t[106] = q, t[107] = Z, t[108] = Q) : Q = t[108];
        let $;
        t[109] !== A || t[110] !== K || t[111] !== Q ? ($ = (0, B.jsxs)(Se.Provider, {
            value: A,
            children: [Q, K]
        }), t[109] = A, t[110] = K, t[111] = Q, t[112] = $) : $ = t[112];
        let Pt;
        return t[113] !== D || t[114] !== $ ? (Pt = (0, B.jsx)(xe.Provider, {
            value: jt,
            children: (0, B.jsx)(Ce.Provider, {
                value: D,
                children: $
            })
        }), t[113] = D, t[114] = $, t[115] = Pt) : Pt = t[115], Pt
    }, Ye = ({
        children: e
    }) => e, Xe = ({
        children: e
    }) => e, V.EditorChildren = Ye, V.ContextChildren = Xe
}));
export {
    H as n, V as t
};
//# sourceMappingURL=5ba997e8-efp0zgq2z5l1y47k.js.map
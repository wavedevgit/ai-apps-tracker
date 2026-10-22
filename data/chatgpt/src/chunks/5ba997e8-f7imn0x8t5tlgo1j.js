import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as n,
    CN as r,
    Ei as i,
    Ix as a,
    Kot as o,
    Ni as ee,
    Nx as s,
    Pi as te,
    Px as ne,
    X5 as c,
    Y5 as re,
    Ynt as ie,
    aE as ae,
    bN as l,
    iE as u,
    ki as oe,
    qot as se,
    trt as ce,
    vN as d,
    yN as f,
    zU as le
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
} from "./dced7e81-cp8j0ikyzhb32tdz.js";
import {
    a as me,
    i as he,
    o as ge,
    r as _e,
    s as ve
} from "./c93e007a-jxmggqkibvp3r76c.js";
import {
    E as ye,
    U as be,
    f as v,
    r as y,
    w as b
} from "./bcae0416-g2939xy1bqugv6v2.js";
import {
    c as xe,
    l as Se,
    s as Ce,
    u as we
} from "./df59e297-mwifg1b5yqvvfc6o.js";
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
} from "./14046b31-dsadz3rbyj6goao1.js";
import {
    C as w,
    E as T
} from "./bcae0416-bsgze497avw690kh.js";
import {
    n as Re,
    r as E,
    t as D
} from "./6cb574fa-crcsvhxov9mtun0v.js";
import {
    m as ze,
    p as O
} from "./e99f8e1a-mmerpbt0bftr6e0c.js";
var Be, k, A, j, M = e((() => {
        Be = `E1e5UW_codemirror`, k = `E1e5UW_preview`, A = `E1e5UW_systemFont`, j = {
            codemirror: Be,
            preview: k,
            systemFont: A
        }
    })),
    N, P, F, I, L, Ve, R = e((() => {
        l(), w(), be(), v(), N = t(h()), ze(), P = y.theme({
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
            let [t] = (0, N.useState)(() => new b), n = r();
            (0, N.useEffect)(() => {
                e.current?.dispatch({
                    effects: t.reconfigure(L(n))
                })
            }, [n, t, e]);
            let [i] = (0, N.useState)(() => t.of(L(n)));
            return i
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
    qe = ue(), x(), Ee(), _e(), ke(), S(), C(), Ne(), we(), _(), g(), oe(), n(), a(), o(), ce(), u(), d(), be(), v(), c(), z = t(h()), m(), Je = t(Te()), M(), E(), R(), B = p(), V = e => {
        "use forget";
        let t = (0, qe.c)(116),
            {
                id: n,
                children: r,
                comments: a,
                commentingOn: o,
                currentlyStreamingLineIndex: c,
                hoveredCommentId: l,
                focusedCommentId: u,
                placeholder: oe,
                readonlyReason: ce,
                language: d,
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
            x = oe === void 0 ? `` : oe,
            S = Te !== void 0 && Te,
            ke = Ee !== void 0 && Ee,
            Ne = (0, z.useRef)(null),
            C = (0, z.useRef)(null),
            w = de(),
            T = (ie(`1958014328`) ? 1e7 : void 0) ?? ue,
            E = ce?.isReadonly === !0,
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
        let L = f(I),
            R;
        t[2] === g ? R = t[3] : (R = () => g?.(), t[2] = g, t[3] = R);
        let V = f(R),
            H;
        t[4] === _ ? H = t[5] : (H = () => _?.(), t[4] = _, t[5] = H);
        let U = f(H),
            W;
        t[6] !== E || t[7] !== _ ? (W = e => _ == null || E || !ee(`saveCanvasEditor`, e) ? !1 : (e.preventDefault(), i(`saveCanvasEditor`, e)), t[6] = E, t[7] = _, t[8] = W) : W = t[8];
        let Ze = f(W),
            Qe = Ke,
            G;
        t[9] !== M || t[10] !== m || t[11] !== F ? (G = async e => {
            let t = await Qe(e);
            t && C.current?.dispatch({
                effects: [M.reconfigure(t), ...Ae(F, m, t?.language)]
            })
        }, t[9] = M, t[10] = m, t[11] = F, t[12] = G) : G = t[12];
        let $e = f(G),
            et = Ve(C),
            tt;
        t[13] !== a || t[14] !== c || t[15] !== d || t[16] !== M || t[17] !== m || t[18] !== F ? (tt = e => {
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
                o = e.slice(i),
                ee = {
                    from: i,
                    to: n.length,
                    insert: o
                },
                s = d == null ? null : Re(d),
                te = t.state.update({
                    changes: ee,
                    effects: [me.of(a ?? []), Le.of(c ?? null), ...s == null ? [] : [M.reconfigure(s)], ...Ae(F, m, s?.language)],
                    annotations: Ie.of(!0)
                });
            t.update([te])
        }, t[13] = a, t[14] = c, t[15] = d, t[16] = M, t[17] = m, t[18] = F, t[19] = tt) : tt = t[19];
        let nt = f(tt),
            rt;
        t[20] === nt ? rt = t[21] : (rt = () => ({
            UNSAFE_setValue: nt,
            codeViewRef: C,
            highlightLine: (e, t) => je(se(C.current), e, t)
        }), t[20] = nt, t[21] = rt), (0, z.useImperativeHandle)(be, rt);
        let it, at;
        t[22] !== d || t[23] !== $e ? (it = () => {
            $e(d)
        }, at = [d, $e], t[22] = d, t[23] = $e, t[24] = it, t[25] = at) : (it = t[24], at = t[25]), (0, z.useEffect)(it, at);
        let ot;
        t[26] !== d || t[27] !== m || t[28] !== F ? (ot = () => {
            let e = d == null ? null : Re(d);
            C.current?.dispatch({
                effects: Ae(F, m, e?.language)
            })
        }, t[26] = d, t[27] = m, t[28] = F, t[29] = ot) : ot = t[29];
        let st = (0, z.useEffectEvent)(ot),
            ct;
        t[30] === st ? ct = t[31] : (ct = () => {
            st()
        }, t[30] = st, t[31] = ct);
        let lt;
        t[32] !== m || t[33] !== F ? (lt = [F, m], t[32] = m, t[33] = F, t[34] = lt) : lt = t[34], (0, z.useEffect)(ct, lt);
        let ut, dt;
        t[35] !== N || t[36] !== E || t[37] !== P ? (ut = () => {
            C.current?.dispatch({
                effects: [N.reconfigure(y.editable.of(!E)), P.reconfigure(ye.readOnly.of(E))]
            })
        }, dt = [E, N, P], t[35] = N, t[36] = E, t[37] = P, t[38] = ut, t[39] = dt) : (ut = t[38], dt = t[39]), (0, z.useEffect)(ut, dt);
        let ft, pt;
        t[40] === o ? (ft = t[41], pt = t[42]) : (ft = () => {
            (o == null || pe(o)) && C.current?.dispatch({
                effects: he.of(o ?? null)
            })
        }, pt = [o], t[40] = o, t[41] = ft, t[42] = pt), (0, z.useEffect)(ft, pt);
        let mt, ht;
        t[43] === a ? (mt = t[44], ht = t[45]) : (mt = () => {
            C.current?.dispatch({
                effects: me.of(a ?? [])
            })
        }, ht = [a], t[43] = a, t[44] = mt, t[45] = ht), (0, z.useEffect)(mt, ht);
        let gt, _t;
        t[46] === l ? (gt = t[47], _t = t[48]) : (gt = () => {
            C.current?.dispatch({
                effects: ve.of(l)
            })
        }, _t = [l], t[46] = l, t[47] = gt, t[48] = _t), (0, z.useEffect)(gt, _t);
        let vt, yt;
        t[49] === u ? (vt = t[50], yt = t[51]) : (vt = () => {
            C.current?.dispatch({
                effects: ge.of(u)
            })
        }, yt = [u], t[49] = u, t[50] = vt, t[51] = yt), (0, z.useEffect)(vt, yt);
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
        t[58] !== U || t[59] !== E || t[60] !== _ ? (wt = () => te({
            key: `saveCanvasEditor`,
            action: U,
            actionMessageDescriptor: {
                id: `keyboardActions.saveCanvasEditor`,
                defaultMessage: `Save canvas editor`,
                description: `Keyboard shortcut label for saving the focused canvas code editor.`
            },
            bindings: [{
                binding: [ne.Mod, `s`]
            }],
            enabled: _ != null && !E,
            group: s.Chat,
            order: 10,
            scope: `canvas`
        }), Tt = [U, E, _], t[58] = U, t[59] = E, t[60] = _, t[61] = wt, t[62] = Tt) : (wt = t[61], Tt = t[62]), (0, z.useEffect)(wt, Tt);
        let Et;
        t[63] !== a || t[64] !== c || t[65] !== N || t[66] !== et || t[67] !== h || t[68] !== V || t[69] !== L || t[70] !== Ze || t[71] !== S || t[72] !== w || t[73] !== E || t[74] !== d || t[75] !== M || t[76] !== T || t[77] !== b || t[78] !== x || t[79] !== P || t[80] !== m || t[81] !== F || t[82] !== p ? (Et = e => {
            let t = d == null ? null : Re(d),
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
                    editorTheme: et,
                    intl: w,
                    toaster: le(),
                    maxLength: T,
                    comments: a ?? [],
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
        }, t[63] = a, t[64] = c, t[65] = N, t[66] = et, t[67] = h, t[68] = V, t[69] = L, t[70] = Ze, t[71] = S, t[72] = w, t[73] = E, t[74] = d, t[75] = M, t[76] = T, t[77] = b, t[78] = x, t[79] = P, t[80] = m, t[81] = F, t[82] = p, t[83] = Et) : Et = t[83];
        let Dt = (0, z.useEffectEvent)(Et),
            Ot;
        t[84] === Dt ? Ot = t[85] : (Ot = () => {
            let e = Ne.current;
            if (e != null) return Dt(e)
        }, t[84] = Dt, t[85] = Ot);
        let kt;
        t[86] !== h || t[87] !== n || t[88] !== x ? (kt = [n, h, x], t[86] = h, t[87] = n, t[88] = x, t[89] = kt) : kt = t[89], (0, z.useEffect)(Ot, kt);
        let At;
        t[90] === Symbol.for(`react.memo_cache_sentinel`) ? (At = () => C.current, t[90] = At) : At = t[90];
        let jt = At,
            K, q;
        t[91] === r ? (K = t[92], q = t[93]) : (K = [], q = [], z.Children.forEach(r, e => {
            if (!(0, z.isValidElement)(e)) return;
            let {
                type: t
            } = e;
            if (t === Xe) K.push(e);
            else if (t === Ye) q.push(e);
            else throw Error(`Invalid Codemirror child: ` + JSON.stringify(t))
        }), t[91] = r, t[92] = K, t[93] = q);
        let Mt = we && j.preview,
            Nt = ke && j.systemFont,
            J;
        t[94] !== Mt || t[95] !== Nt ? (J = re(j.codemirror, Mt, Nt, fe.composer, `flex h-full w-full flex-col items-stretch`), t[94] = Mt, t[95] = Nt, t[96] = J) : J = t[96];
        let Y;
        t[97] === k ? Y = t[98] : (Y = ae(Ne, k), t[97] = k, t[98] = Y);
        let X;
        t[99] === v ? X = t[100] : (X = {
            width: v
        }, t[99] = v, t[100] = X);
        let Z;
        t[101] !== n || t[102] !== J || t[103] !== Y || t[104] !== X ? (Z = (0, B.jsx)(`div`, {
            id: n,
            className: J,
            ref: Y,
            style: X
        }), t[101] = n, t[102] = J, t[103] = Y, t[104] = X, t[105] = Z) : Z = t[105];
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
//# sourceMappingURL=5ba997e8-f7imn0x8t5tlgo1j.js.map
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bnt as n,
    Ei as r,
    Fx as i,
    G5 as ee,
    K5 as a,
    Knt as o,
    Lot as s,
    Mx as te,
    Ni as ne,
    Nx as re,
    Pi as ie,
    RU as ae,
    Rot as oe,
    SN as c,
    _N as l,
    iE as se,
    ki as u,
    rE as ce,
    vN as d,
    yN as le,
    zU as f
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as p,
    Rn as m,
    Vn as h,
    wn as ue,
    zn as de
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    c as g,
    s as fe
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    a as pe,
    i as _
} from "./dced7e81-ez4ycyknd5qaagro.js";
import {
    a as me,
    i as he,
    o as ge,
    r as _e,
    s as ve
} from "./c93e007a-dery5diinzawmeao.js";
import {
    E as ye,
    U as be,
    f as v,
    r as xe,
    w as y
} from "./bcae0416-gkbk5fuozoi1k6dj.js";
import {
    c as Se,
    l as Ce,
    s as we,
    u as Te
} from "./df59e297-o3612z5rjm7jpxw4.js";
import {
    t as Ee
} from "./4c0f1f8e-go23ccluwcn7b4ji.js";
import {
    _ as De,
    a as b,
    c as Oe,
    d as ke,
    f as x,
    h as Ae,
    i as je,
    m as Me,
    n as Ne,
    o as Pe,
    r as Fe,
    s as Ie,
    t as Le,
    u as S,
    v as Re
} from "./14046b31-l5hthkn3xej9dstz.js";
import {
    C,
    E as w
} from "./bcae0416-cqkkx9gpfzh7lwph.js";
import {
    n as ze,
    r as T,
    t as E
} from "./6cb574fa-h502sfw66k5z2tev.js";
import {
    m as Be,
    p as D
} from "./e99f8e1a-b527u0t82lcpt5ws.js";
var Ve, O, k, A, j = e((() => {
        Ve = `E1e5UW_codemirror`, O = `E1e5UW_preview`, k = `E1e5UW_systemFont`, A = {
            codemirror: Ve,
            preview: O,
            systemFont: k
        }
    })),
    M, N, P, F, I, He, L = e((() => {
        le(), C(), be(), v(), M = t(h()), Be(), N = xe.theme({
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
        }), P = xe.theme({
            ".cm-scroller": {
                fontFamily: `ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important`
            }
        }), F = xe.theme({
            "&": {
                backgroundColor: `transparent`
            }
        }), I = e => [P, F, N, w(D(e), {
            fallback: !0
        })], He = e => {
            let [t] = (0, M.useState)(() => new y), n = c();
            (0, M.useEffect)(() => {
                e.current?.dispatch({
                    effects: t.reconfigure(I(n))
                })
            }, [n, t, e]);
            let [r] = (0, M.useState)(() => t.of(I(n)));
            return r
        }
    }));

function Ue() {
    return new y
}

function We() {
    return new y
}

function Ge() {
    return new y
}

function Ke() {
    return new y
}
async function qe(e) {
    return e ? await E(e) : null
}
var Je, R, Ye, z, B, Xe, Ze, V = e((() => {
    Je = ue(), b(), De(), _e(), Ae(), x(), S(), Pe(), Te(), _(), g(), u(), f(), i(), s(), o(), ce(), l(), be(), v(), a(), R = t(h()), m(), Ye = t(Ee()), j(), T(), L(), z = p(), B = e => {
        "use forget";
        let t = (0, Je.c)(116),
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
                modelCursor: y,
                isPreview: Te,
                hideLineNumbers: Ee,
                useSystemFont: De
            } = e,
            b = ce === void 0 ? `` : ce,
            x = Ee !== void 0 && Ee,
            Ae = De !== void 0 && De,
            Pe = (0, R.useRef)(null),
            S = (0, R.useRef)(null),
            C = de(),
            w = (n(`1958014328`) ? 1e7 : void 0) ?? ue,
            T = le?.isReadonly === !0,
            [E, Be] = (0, R.useState)(null),
            D = (0, R.useRef)(null),
            [Ve, O] = (0, Ye.default)(),
            {
                width: k
            } = Ve,
            [j] = (0, R.useState)(Ue),
            [M] = (0, R.useState)(We),
            [N] = (0, R.useState)(Ge),
            [P] = (0, R.useState)(Ke),
            F;
        t[0] === _e ? F = t[1] : (F = e => {
            let {
                docChanged: t,
                state: n,
                transactions: r
            } = e;
            for (let e of r)
                if (e.annotation(Le) === !0 || e.annotation(ke) === !0) return;
            if (t) {
                let e = n.doc.toString();
                D.current = e, _e?.(n)
            }
        }, t[0] = _e, t[1] = F);
        let I = d(F),
            L;
        t[2] === g ? L = t[3] : (L = () => g?.(), t[2] = g, t[3] = L);
        let B = d(L),
            V;
        t[4] === _ ? V = t[5] : (V = () => _?.(), t[4] = _, t[5] = V);
        let H = d(V),
            U;
        t[6] !== T || t[7] !== _ ? (U = e => _ == null || T || !ne(`saveCanvasEditor`, e) ? !1 : (e.preventDefault(), r(`saveCanvasEditor`, e)), t[6] = T, t[7] = _, t[8] = U) : U = t[8];
        let Qe = d(U),
            $e = qe,
            W;
        t[9] !== j || t[10] !== m || t[11] !== P ? (W = async e => {
            let t = await $e(e);
            t && S.current?.dispatch({
                effects: [j.reconfigure(t), ...je(P, m, t?.language)]
            })
        }, t[9] = j, t[10] = m, t[11] = P, t[12] = W) : W = t[12];
        let et = d(W),
            tt = He(S),
            nt;
        t[13] !== o || t[14] !== c || t[15] !== f || t[16] !== j || t[17] !== m || t[18] !== P ? (nt = e => {
            if (e === D.current) {
                D.current = null;
                return
            }
            let {
                current: t
            } = S;
            if (!t) return;
            let n = t.state.doc,
                r = n.toString(),
                i = Oe(r, 0, r.length, e, 0, e.length),
                ee = e.slice(i),
                a = {
                    from: i,
                    to: n.length,
                    insert: ee
                },
                s = f == null ? null : ze(f),
                te = t.state.update({
                    changes: a,
                    effects: [me.of(o ?? []), Re.of(c ?? null), ...s == null ? [] : [j.reconfigure(s)], ...je(P, m, s?.language)],
                    annotations: Le.of(!0)
                });
            t.update([te])
        }, t[13] = o, t[14] = c, t[15] = f, t[16] = j, t[17] = m, t[18] = P, t[19] = nt) : nt = t[19];
        let rt = d(nt),
            it;
        t[20] === rt ? it = t[21] : (it = () => ({
            UNSAFE_setValue: rt,
            codeViewRef: S,
            highlightLine: (e, t) => Me(oe(S.current), e, t)
        }), t[20] = rt, t[21] = it), (0, R.useImperativeHandle)(be, it);
        let at, ot;
        t[22] !== f || t[23] !== et ? (at = () => {
            et(f)
        }, ot = [f, et], t[22] = f, t[23] = et, t[24] = at, t[25] = ot) : (at = t[24], ot = t[25]), (0, R.useEffect)(at, ot);
        let st;
        t[26] !== f || t[27] !== m || t[28] !== P ? (st = () => {
            let e = f == null ? null : ze(f);
            S.current?.dispatch({
                effects: je(P, m, e?.language)
            })
        }, t[26] = f, t[27] = m, t[28] = P, t[29] = st) : st = t[29];
        let ct = (0, R.useEffectEvent)(st),
            lt;
        t[30] === ct ? lt = t[31] : (lt = () => {
            ct()
        }, t[30] = ct, t[31] = lt);
        let ut;
        t[32] !== m || t[33] !== P ? (ut = [P, m], t[32] = m, t[33] = P, t[34] = ut) : ut = t[34], (0, R.useEffect)(lt, ut);
        let dt, ft;
        t[35] !== M || t[36] !== T || t[37] !== N ? (dt = () => {
            S.current?.dispatch({
                effects: [M.reconfigure(xe.editable.of(!T)), N.reconfigure(ye.readOnly.of(T))]
            })
        }, ft = [T, M, N], t[35] = M, t[36] = T, t[37] = N, t[38] = dt, t[39] = ft) : (dt = t[38], ft = t[39]), (0, R.useEffect)(dt, ft);
        let pt, mt;
        t[40] === s ? (pt = t[41], mt = t[42]) : (pt = () => {
            (s == null || pe(s)) && S.current?.dispatch({
                effects: he.of(s ?? null)
            })
        }, mt = [s], t[40] = s, t[41] = pt, t[42] = mt), (0, R.useEffect)(pt, mt);
        let ht, gt;
        t[43] === o ? (ht = t[44], gt = t[45]) : (ht = () => {
            S.current?.dispatch({
                effects: me.of(o ?? [])
            })
        }, gt = [o], t[43] = o, t[44] = ht, t[45] = gt), (0, R.useEffect)(ht, gt);
        let _t, vt;
        t[46] === l ? (_t = t[47], vt = t[48]) : (_t = () => {
            S.current?.dispatch({
                effects: ve.of(l)
            })
        }, vt = [l], t[46] = l, t[47] = _t, t[48] = vt), (0, R.useEffect)(_t, vt);
        let yt, G;
        t[49] === u ? (yt = t[50], G = t[51]) : (yt = () => {
            S.current?.dispatch({
                effects: ge.of(u)
            })
        }, G = [u], t[49] = u, t[50] = yt, t[51] = G), (0, R.useEffect)(yt, G);
        let bt, xt;
        t[52] === y ? (bt = t[53], xt = t[54]) : (bt = () => {
            S.current?.dispatch({
                effects: Ie.of(y)
            })
        }, xt = [y], t[52] = y, t[53] = bt, t[54] = xt), (0, R.useEffect)(bt, xt);
        let St, Ct;
        t[55] === c ? (St = t[56], Ct = t[57]) : (St = () => {
            S.current?.dispatch({
                effects: Re.of(c ?? null)
            })
        }, Ct = [c], t[55] = c, t[56] = St, t[57] = Ct), (0, R.useEffect)(St, Ct);
        let wt, Tt;
        t[58] !== H || t[59] !== T || t[60] !== _ ? (wt = () => ie({
            key: `saveCanvasEditor`,
            action: H,
            actionMessageDescriptor: {
                id: `keyboardActions.saveCanvasEditor`,
                defaultMessage: `Save canvas editor`,
                description: `Keyboard shortcut label for saving the focused canvas code editor.`
            },
            bindings: [{
                binding: [re.Mod, `s`]
            }],
            enabled: _ != null && !T,
            group: te.Chat,
            order: 10,
            scope: `canvas`
        }), Tt = [H, T, _], t[58] = H, t[59] = T, t[60] = _, t[61] = wt, t[62] = Tt) : (wt = t[61], Tt = t[62]), (0, R.useEffect)(wt, Tt);
        let Et;
        t[63] !== o || t[64] !== c || t[65] !== M || t[66] !== tt || t[67] !== h || t[68] !== B || t[69] !== I || t[70] !== Qe || t[71] !== x || t[72] !== C || t[73] !== T || t[74] !== f || t[75] !== j || t[76] !== w || t[77] !== y || t[78] !== b || t[79] !== N || t[80] !== m || t[81] !== P || t[82] !== p ? (Et = e => {
            let t = f == null ? null : ze(f),
                n = Fe({
                    currentlyStreamingLineIndex: c,
                    value: p,
                    placeholderContent: b,
                    editableCompartment: M,
                    readOnlyCompartment: N,
                    editableInit: !T,
                    languageCompartment: j,
                    languageCompartmentInit: t ?? null,
                    handleChange: I,
                    handleBlur: B,
                    handleSaveShortcut: Qe,
                    extensionsProp: h,
                    editorTheme: tt,
                    intl: C,
                    toaster: ae(),
                    maxLength: w,
                    comments: o ?? [],
                    modelCursor: y,
                    textdocDiff: m,
                    unifiedMergeViewCompartment: P,
                    hideLineNumbers: x
                });
            Be(n);
            let r = Ne({
                state: n,
                parent: e,
                onUpdateState: Be
            });
            return S.current = r, () => {
                r.destroy()
            }
        }, t[63] = o, t[64] = c, t[65] = M, t[66] = tt, t[67] = h, t[68] = B, t[69] = I, t[70] = Qe, t[71] = x, t[72] = C, t[73] = T, t[74] = f, t[75] = j, t[76] = w, t[77] = y, t[78] = b, t[79] = N, t[80] = m, t[81] = P, t[82] = p, t[83] = Et) : Et = t[83];
        let Dt = (0, R.useEffectEvent)(Et),
            Ot;
        t[84] === Dt ? Ot = t[85] : (Ot = () => {
            let e = Pe.current;
            if (e != null) return Dt(e)
        }, t[84] = Dt, t[85] = Ot);
        let kt;
        t[86] !== h || t[87] !== i || t[88] !== b ? (kt = [i, h, b], t[86] = h, t[87] = i, t[88] = b, t[89] = kt) : kt = t[89], (0, R.useEffect)(Ot, kt);
        let At;
        t[90] === Symbol.for(`react.memo_cache_sentinel`) ? (At = () => S.current, t[90] = At) : At = t[90];
        let jt = At,
            K, q;
        t[91] === a ? (K = t[92], q = t[93]) : (K = [], q = [], R.Children.forEach(a, e => {
            if (!(0, R.isValidElement)(e)) return;
            let {
                type: t
            } = e;
            if (t === Ze) K.push(e);
            else if (t === Xe) q.push(e);
            else throw Error(`Invalid Codemirror child: ` + JSON.stringify(t))
        }), t[91] = a, t[92] = K, t[93] = q);
        let Mt = Te && A.preview,
            Nt = Ae && A.systemFont,
            J;
        t[94] !== Mt || t[95] !== Nt ? (J = ee(A.codemirror, Mt, Nt, fe.composer, `flex h-full w-full flex-col items-stretch`), t[94] = Mt, t[95] = Nt, t[96] = J) : J = t[96];
        let Y;
        t[97] === O ? Y = t[98] : (Y = se(Pe, O), t[97] = O, t[98] = Y);
        let X;
        t[99] === v ? X = t[100] : (X = {
            width: v
        }, t[99] = v, t[100] = X);
        let Z;
        t[101] !== i || t[102] !== J || t[103] !== Y || t[104] !== X ? (Z = (0, z.jsx)(`div`, {
            id: i,
            className: J,
            ref: Y,
            style: X
        }), t[101] = i, t[102] = J, t[103] = Y, t[104] = X, t[105] = Z) : Z = t[105];
        let Q;
        t[106] !== q || t[107] !== Z ? (Q = (0, z.jsxs)(`div`, {
            className: `relative z-0 flex h-full max-w-full`,
            children: [Z, q]
        }), t[106] = q, t[107] = Z, t[108] = Q) : Q = t[108];
        let $;
        t[109] !== k || t[110] !== K || t[111] !== Q ? ($ = (0, z.jsxs)(Ce.Provider, {
            value: k,
            children: [Q, K]
        }), t[109] = k, t[110] = K, t[111] = Q, t[112] = $) : $ = t[112];
        let Pt;
        return t[113] !== E || t[114] !== $ ? (Pt = (0, z.jsx)(Se.Provider, {
            value: jt,
            children: (0, z.jsx)(we.Provider, {
                value: E,
                children: $
            })
        }), t[113] = E, t[114] = $, t[115] = Pt) : Pt = t[115], Pt
    }, Xe = ({
        children: e
    }) => e, Ze = ({
        children: e
    }) => e, B.EditorChildren = Xe, B.ContextChildren = Ze
}));
export {
    V as n, B as t
};
//# sourceMappingURL=5ba997e8-n51o6aj6htgyermm.js.map
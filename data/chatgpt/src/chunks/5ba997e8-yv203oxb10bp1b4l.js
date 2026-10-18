import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $M as n,
    BT as r,
    Ei as ee,
    Ni as te,
    Pi as ne,
    _x as i,
    b5 as a,
    dot as re,
    eN as o,
    fU as ie,
    hx as ae,
    iN as s,
    ki as c,
    mx as oe,
    pU as l,
    pnt as se,
    tN as u,
    uot as ce,
    y5 as le,
    ynt as ue,
    zT as d
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as f,
    Rn as p,
    Vn as m,
    wn as de,
    zn as fe
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    c as h,
    s as pe
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    a as me,
    i as g
} from "./dced7e81-jzt06wdzz118ufvf.js";
import {
    a as he,
    i as ge,
    o as _e,
    r as ve,
    s as ye
} from "./c93e007a-cccgt3sbglrwo149.js";
import {
    E as be,
    U as xe,
    f as _,
    r as v,
    w as y
} from "./bcae0416-byi4t2tc51t2kfdu.js";
import {
    c as Se,
    l as Ce,
    s as we,
    u as Te
} from "./df59e297-cim8xjtcq0aw73x8.js";
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
} from "./14046b31-zmudgicwkvust2z1.js";
import {
    C,
    E as w
} from "./bcae0416-dl7awgppkbmf5xio.js";
import {
    n as ze,
    r as T,
    t as E
} from "./6cb574fa-mzjsdwlaqz7baeep.js";
import {
    m as Be,
    p as D
} from "./e99f8e1a-jee6km72d5ubuexl.js";
var Ve, O, k, A, j = e((() => {
        Ve = `E1e5UW_codemirror`, O = `E1e5UW_preview`, k = `E1e5UW_systemFont`, A = {
            codemirror: Ve,
            preview: O,
            systemFont: k
        }
    })),
    M, N, P, F, I, He, L = e((() => {
        u(), C(), xe(), _(), M = t(m()), Be(), N = v.theme({
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
        }), P = v.theme({
            ".cm-scroller": {
                fontFamily: `ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important`
            }
        }), F = v.theme({
            "&": {
                backgroundColor: `transparent`
            }
        }), I = e => [P, F, N, w(D(e), {
            fallback: !0
        })], He = e => {
            let [t] = (0, M.useState)(() => new y), n = s();
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
    Je = de(), b(), De(), ve(), Ae(), x(), S(), Pe(), Te(), g(), h(), c(), l(), i(), ce(), ue(), d(), n(), xe(), _(), a(), R = t(m()), p(), Ye = t(Ee()), j(), T(), L(), z = f(), B = e => {
        "use forget";
        let t = (0, Je.c)(116),
            {
                id: n,
                children: i,
                comments: a,
                commentingOn: s,
                currentlyStreamingLineIndex: c,
                hoveredCommentId: l,
                focusedCommentId: u,
                placeholder: ce,
                readonlyReason: ue,
                language: d,
                value: f,
                textdocDiff: p,
                extensions: m,
                maxLength: de,
                onBlur: h,
                onSave: g,
                onChange: ve,
                editorRef: xe,
                width: _,
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
            C = fe(),
            w = (se(`1958014328`) ? 1e7 : void 0) ?? de,
            T = ue?.isReadonly === !0,
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
        t[0] === ve ? F = t[1] : (F = e => {
            let {
                docChanged: t,
                state: n,
                transactions: r
            } = e;
            for (let e of r)
                if (e.annotation(Le) === !0 || e.annotation(ke) === !0) return;
            if (t) {
                let e = n.doc.toString();
                D.current = e, ve?.(n)
            }
        }, t[0] = ve, t[1] = F);
        let I = o(F),
            L;
        t[2] === h ? L = t[3] : (L = () => h?.(), t[2] = h, t[3] = L);
        let B = o(L),
            V;
        t[4] === g ? V = t[5] : (V = () => g?.(), t[4] = g, t[5] = V);
        let H = o(V),
            U;
        t[6] !== T || t[7] !== g ? (U = e => g == null || T || !te(`saveCanvasEditor`, e) ? !1 : (e.preventDefault(), ee(`saveCanvasEditor`, e)), t[6] = T, t[7] = g, t[8] = U) : U = t[8];
        let Qe = o(U),
            $e = qe,
            W;
        t[9] !== j || t[10] !== p || t[11] !== P ? (W = async e => {
            let t = await $e(e);
            t && S.current?.dispatch({
                effects: [j.reconfigure(t), ...je(P, p, t?.language)]
            })
        }, t[9] = j, t[10] = p, t[11] = P, t[12] = W) : W = t[12];
        let et = o(W),
            tt = He(S),
            nt;
        t[13] !== a || t[14] !== c || t[15] !== d || t[16] !== j || t[17] !== p || t[18] !== P ? (nt = e => {
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
                ee = Oe(r, 0, r.length, e, 0, e.length),
                te = e.slice(ee),
                ne = {
                    from: ee,
                    to: n.length,
                    insert: te
                },
                i = d == null ? null : ze(d),
                re = t.state.update({
                    changes: ne,
                    effects: [he.of(a ?? []), Re.of(c ?? null), ...i == null ? [] : [j.reconfigure(i)], ...je(P, p, i?.language)],
                    annotations: Le.of(!0)
                });
            t.update([re])
        }, t[13] = a, t[14] = c, t[15] = d, t[16] = j, t[17] = p, t[18] = P, t[19] = nt) : nt = t[19];
        let rt = o(nt),
            it;
        t[20] === rt ? it = t[21] : (it = () => ({
            UNSAFE_setValue: rt,
            codeViewRef: S,
            highlightLine: (e, t) => Me(re(S.current), e, t)
        }), t[20] = rt, t[21] = it), (0, R.useImperativeHandle)(xe, it);
        let at, ot;
        t[22] !== d || t[23] !== et ? (at = () => {
            et(d)
        }, ot = [d, et], t[22] = d, t[23] = et, t[24] = at, t[25] = ot) : (at = t[24], ot = t[25]), (0, R.useEffect)(at, ot);
        let st;
        t[26] !== d || t[27] !== p || t[28] !== P ? (st = () => {
            let e = d == null ? null : ze(d);
            S.current?.dispatch({
                effects: je(P, p, e?.language)
            })
        }, t[26] = d, t[27] = p, t[28] = P, t[29] = st) : st = t[29];
        let ct = (0, R.useEffectEvent)(st),
            lt;
        t[30] === ct ? lt = t[31] : (lt = () => {
            ct()
        }, t[30] = ct, t[31] = lt);
        let ut;
        t[32] !== p || t[33] !== P ? (ut = [P, p], t[32] = p, t[33] = P, t[34] = ut) : ut = t[34], (0, R.useEffect)(lt, ut);
        let dt, ft;
        t[35] !== M || t[36] !== T || t[37] !== N ? (dt = () => {
            S.current?.dispatch({
                effects: [M.reconfigure(v.editable.of(!T)), N.reconfigure(be.readOnly.of(T))]
            })
        }, ft = [T, M, N], t[35] = M, t[36] = T, t[37] = N, t[38] = dt, t[39] = ft) : (dt = t[38], ft = t[39]), (0, R.useEffect)(dt, ft);
        let pt, mt;
        t[40] === s ? (pt = t[41], mt = t[42]) : (pt = () => {
            (s == null || me(s)) && S.current?.dispatch({
                effects: ge.of(s ?? null)
            })
        }, mt = [s], t[40] = s, t[41] = pt, t[42] = mt), (0, R.useEffect)(pt, mt);
        let ht, gt;
        t[43] === a ? (ht = t[44], gt = t[45]) : (ht = () => {
            S.current?.dispatch({
                effects: he.of(a ?? [])
            })
        }, gt = [a], t[43] = a, t[44] = ht, t[45] = gt), (0, R.useEffect)(ht, gt);
        let _t, vt;
        t[46] === l ? (_t = t[47], vt = t[48]) : (_t = () => {
            S.current?.dispatch({
                effects: ye.of(l)
            })
        }, vt = [l], t[46] = l, t[47] = _t, t[48] = vt), (0, R.useEffect)(_t, vt);
        let yt, G;
        t[49] === u ? (yt = t[50], G = t[51]) : (yt = () => {
            S.current?.dispatch({
                effects: _e.of(u)
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
        t[58] !== H || t[59] !== T || t[60] !== g ? (wt = () => ne({
            key: `saveCanvasEditor`,
            action: H,
            actionMessageDescriptor: {
                id: `keyboardActions.saveCanvasEditor`,
                defaultMessage: `Save canvas editor`,
                description: `Keyboard shortcut label for saving the focused canvas code editor.`
            },
            bindings: [{
                binding: [ae.Mod, `s`]
            }],
            enabled: g != null && !T,
            group: oe.Chat,
            order: 10,
            scope: `canvas`
        }), Tt = [H, T, g], t[58] = H, t[59] = T, t[60] = g, t[61] = wt, t[62] = Tt) : (wt = t[61], Tt = t[62]), (0, R.useEffect)(wt, Tt);
        let Et;
        t[63] !== a || t[64] !== c || t[65] !== M || t[66] !== tt || t[67] !== m || t[68] !== B || t[69] !== I || t[70] !== Qe || t[71] !== x || t[72] !== C || t[73] !== T || t[74] !== d || t[75] !== j || t[76] !== w || t[77] !== y || t[78] !== b || t[79] !== N || t[80] !== p || t[81] !== P || t[82] !== f ? (Et = e => {
            let t = d == null ? null : ze(d),
                n = Fe({
                    currentlyStreamingLineIndex: c,
                    value: f,
                    placeholderContent: b,
                    editableCompartment: M,
                    readOnlyCompartment: N,
                    editableInit: !T,
                    languageCompartment: j,
                    languageCompartmentInit: t ?? null,
                    handleChange: I,
                    handleBlur: B,
                    handleSaveShortcut: Qe,
                    extensionsProp: m,
                    editorTheme: tt,
                    intl: C,
                    toaster: ie(),
                    maxLength: w,
                    comments: a ?? [],
                    modelCursor: y,
                    textdocDiff: p,
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
        }, t[63] = a, t[64] = c, t[65] = M, t[66] = tt, t[67] = m, t[68] = B, t[69] = I, t[70] = Qe, t[71] = x, t[72] = C, t[73] = T, t[74] = d, t[75] = j, t[76] = w, t[77] = y, t[78] = b, t[79] = N, t[80] = p, t[81] = P, t[82] = f, t[83] = Et) : Et = t[83];
        let Dt = (0, R.useEffectEvent)(Et),
            Ot;
        t[84] === Dt ? Ot = t[85] : (Ot = () => {
            let e = Pe.current;
            if (e != null) return Dt(e)
        }, t[84] = Dt, t[85] = Ot);
        let kt;
        t[86] !== m || t[87] !== n || t[88] !== b ? (kt = [n, m, b], t[86] = m, t[87] = n, t[88] = b, t[89] = kt) : kt = t[89], (0, R.useEffect)(Ot, kt);
        let At;
        t[90] === Symbol.for(`react.memo_cache_sentinel`) ? (At = () => S.current, t[90] = At) : At = t[90];
        let jt = At,
            K, q;
        t[91] === i ? (K = t[92], q = t[93]) : (K = [], q = [], R.Children.forEach(i, e => {
            if (!(0, R.isValidElement)(e)) return;
            let {
                type: t
            } = e;
            if (t === Ze) K.push(e);
            else if (t === Xe) q.push(e);
            else throw Error(`Invalid Codemirror child: ` + JSON.stringify(t))
        }), t[91] = i, t[92] = K, t[93] = q);
        let Mt = Te && A.preview,
            Nt = Ae && A.systemFont,
            J;
        t[94] !== Mt || t[95] !== Nt ? (J = le(A.codemirror, Mt, Nt, pe.composer, `flex h-full w-full flex-col items-stretch`), t[94] = Mt, t[95] = Nt, t[96] = J) : J = t[96];
        let Y;
        t[97] === O ? Y = t[98] : (Y = r(Pe, O), t[97] = O, t[98] = Y);
        let X;
        t[99] === _ ? X = t[100] : (X = {
            width: _
        }, t[99] = _, t[100] = X);
        let Z;
        t[101] !== n || t[102] !== J || t[103] !== Y || t[104] !== X ? (Z = (0, z.jsx)(`div`, {
            id: n,
            className: J,
            ref: Y,
            style: X
        }), t[101] = n, t[102] = J, t[103] = Y, t[104] = X, t[105] = Z) : Z = t[105];
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
//# sourceMappingURL=5ba997e8-yv203oxb10bp1b4l.js.map
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ai as n,
    CN as r,
    Di as ee,
    Fi as te,
    Fx as ne,
    IU as i,
    LU as a,
    Lx as o,
    ON as s,
    Pi as re,
    Px as ie,
    TN as c,
    cst as ae,
    grt as l,
    l7 as oe,
    lE as se,
    sst as ce,
    u7 as u,
    uE as le,
    urt as ue,
    wN as d
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as f,
    Rn as p,
    Vn as m,
    wn as de,
    zn as fe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    c as h,
    s as pe
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    a as me,
    i as g
} from "./dced7e81-dprnt82jdn3pfo6o.js";
import {
    a as he,
    i as ge,
    o as _e,
    r as ve,
    s as ye
} from "./c93e007a-mo4bfunasglkup3g.js";
import {
    E as be,
    U as xe,
    f as _,
    r as Se,
    w as v
} from "./bcae0416-ku8yygdlxjv2xvgl.js";
import {
    c as Ce,
    l as we,
    s as Te,
    u as Ee
} from "./df59e297-b4o0i88hhd7jfjam.js";
import {
    t as De
} from "./4c0f1f8e-o4zbuwgknf8ay6gx.js";
import {
    _ as Oe,
    a as y,
    c as ke,
    d as Ae,
    f as b,
    h as je,
    i as Me,
    m as Ne,
    n as Pe,
    o as Fe,
    r as Ie,
    s as Le,
    t as Re,
    u as x,
    v as ze
} from "./14046b31-ogac3hsahd866za9.js";
import {
    C as S,
    E as C
} from "./bcae0416-ji7hskkg855rew60.js";
import {
    n as Be,
    r as w,
    t as T
} from "./6cb574fa-nauiebg2tr2i8o6d.js";
import {
    m as Ve,
    p as E
} from "./e99f8e1a-l038a81w23odnr2s.js";
var He, D, O, k, A = e((() => {
        He = `E1e5UW_codemirror`, D = `E1e5UW_preview`, O = `E1e5UW_systemFont`, k = {
            codemirror: He,
            preview: D,
            systemFont: O
        }
    })),
    j, M, N, P, F, Ue, I = e((() => {
        c(), S(), xe(), _(), j = t(m()), Ve(), M = Se.theme({
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
        }), N = Se.theme({
            ".cm-scroller": {
                fontFamily: `ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important`
            }
        }), P = Se.theme({
            "&": {
                backgroundColor: `transparent`
            }
        }), F = e => [N, P, M, C(E(e), {
            fallback: !0
        })], Ue = e => {
            let [t] = (0, j.useState)(() => new v), n = s();
            (0, j.useEffect)(() => {
                e.current?.dispatch({
                    effects: t.reconfigure(F(n))
                })
            }, [n, t, e]);
            let [r] = (0, j.useState)(() => t.of(F(n)));
            return r
        }
    }));

function We() {
    return new v
}

function Ge() {
    return new v
}

function Ke() {
    return new v
}

function qe() {
    return new v
}
async function Je(e) {
    return e ? await T(e) : null
}
var Ye, L, Xe, R, z, Ze, Qe, B = e((() => {
    Ye = de(), y(), Oe(), ve(), je(), b(), x(), Fe(), Ee(), g(), h(), n(), a(), o(), ce(), l(), se(), r(), xe(), _(), u(), L = t(m()), p(), Xe = t(De()), A(), w(), I(), R = f(), z = e => {
        "use forget";
        let t = (0, Ye.c)(116),
            {
                id: n,
                children: r,
                comments: a,
                commentingOn: o,
                currentlyStreamingLineIndex: s,
                hoveredCommentId: c,
                focusedCommentId: l,
                placeholder: se,
                readonlyReason: ce,
                language: u,
                value: f,
                textdocDiff: p,
                extensions: m,
                maxLength: de,
                onBlur: h,
                onSave: g,
                onChange: ve,
                editorRef: xe,
                width: _,
                modelCursor: v,
                isPreview: Ee,
                hideLineNumbers: De,
                useSystemFont: Oe
            } = e,
            y = se === void 0 ? `` : se,
            b = De !== void 0 && De,
            je = Oe !== void 0 && Oe,
            Fe = (0, L.useRef)(null),
            x = (0, L.useRef)(null),
            S = fe(),
            C = (ue(`1958014328`) ? 1e7 : void 0) ?? de,
            w = ce?.isReadonly === !0,
            [T, Ve] = (0, L.useState)(null),
            E = (0, L.useRef)(null),
            [He, D] = (0, Xe.default)(),
            {
                width: O
            } = He,
            [A] = (0, L.useState)(We),
            [j] = (0, L.useState)(Ge),
            [M] = (0, L.useState)(Ke),
            [N] = (0, L.useState)(qe),
            P;
        t[0] === ve ? P = t[1] : (P = e => {
            let {
                docChanged: t,
                state: n,
                transactions: r
            } = e;
            for (let e of r)
                if (e.annotation(Re) === !0 || e.annotation(Ae) === !0) return;
            if (t) {
                let e = n.doc.toString();
                E.current = e, ve?.(n)
            }
        }, t[0] = ve, t[1] = P);
        let F = d(P),
            I;
        t[2] === h ? I = t[3] : (I = () => h?.(), t[2] = h, t[3] = I);
        let z = d(I),
            B;
        t[4] === g ? B = t[5] : (B = () => g?.(), t[4] = g, t[5] = B);
        let V = d(B),
            H;
        t[6] !== w || t[7] !== g ? (H = e => g == null || w || !re(`saveCanvasEditor`, e) ? !1 : (e.preventDefault(), ee(`saveCanvasEditor`, e)), t[6] = w, t[7] = g, t[8] = H) : H = t[8];
        let $e = d(H),
            et = Je,
            U;
        t[9] !== A || t[10] !== p || t[11] !== N ? (U = async e => {
            let t = await et(e);
            t && x.current?.dispatch({
                effects: [A.reconfigure(t), ...Me(N, p, t?.language)]
            })
        }, t[9] = A, t[10] = p, t[11] = N, t[12] = U) : U = t[12];
        let W = d(U),
            tt = Ue(x),
            nt;
        t[13] !== a || t[14] !== s || t[15] !== u || t[16] !== A || t[17] !== p || t[18] !== N ? (nt = e => {
            if (e === E.current) {
                E.current = null;
                return
            }
            let {
                current: t
            } = x;
            if (!t) return;
            let n = t.state.doc,
                r = n.toString(),
                ee = ke(r, 0, r.length, e, 0, e.length),
                te = e.slice(ee),
                ne = {
                    from: ee,
                    to: n.length,
                    insert: te
                },
                i = u == null ? null : Be(u),
                o = t.state.update({
                    changes: ne,
                    effects: [he.of(a ?? []), ze.of(s ?? null), ...i == null ? [] : [A.reconfigure(i)], ...Me(N, p, i?.language)],
                    annotations: Re.of(!0)
                });
            t.update([o])
        }, t[13] = a, t[14] = s, t[15] = u, t[16] = A, t[17] = p, t[18] = N, t[19] = nt) : nt = t[19];
        let rt = d(nt),
            it;
        t[20] === rt ? it = t[21] : (it = () => ({
            UNSAFE_setValue: rt,
            codeViewRef: x,
            highlightLine: (e, t) => Ne(ae(x.current), e, t)
        }), t[20] = rt, t[21] = it), (0, L.useImperativeHandle)(xe, it);
        let at, ot;
        t[22] !== u || t[23] !== W ? (at = () => {
            W(u)
        }, ot = [u, W], t[22] = u, t[23] = W, t[24] = at, t[25] = ot) : (at = t[24], ot = t[25]), (0, L.useEffect)(at, ot);
        let st;
        t[26] !== u || t[27] !== p || t[28] !== N ? (st = () => {
            let e = u == null ? null : Be(u);
            x.current?.dispatch({
                effects: Me(N, p, e?.language)
            })
        }, t[26] = u, t[27] = p, t[28] = N, t[29] = st) : st = t[29];
        let ct = (0, L.useEffectEvent)(st),
            lt;
        t[30] === ct ? lt = t[31] : (lt = () => {
            ct()
        }, t[30] = ct, t[31] = lt);
        let ut;
        t[32] !== p || t[33] !== N ? (ut = [N, p], t[32] = p, t[33] = N, t[34] = ut) : ut = t[34], (0, L.useEffect)(lt, ut);
        let dt, ft;
        t[35] !== j || t[36] !== w || t[37] !== M ? (dt = () => {
            x.current?.dispatch({
                effects: [j.reconfigure(Se.editable.of(!w)), M.reconfigure(be.readOnly.of(w))]
            })
        }, ft = [w, j, M], t[35] = j, t[36] = w, t[37] = M, t[38] = dt, t[39] = ft) : (dt = t[38], ft = t[39]), (0, L.useEffect)(dt, ft);
        let pt, mt;
        t[40] === o ? (pt = t[41], mt = t[42]) : (pt = () => {
            (o == null || me(o)) && x.current?.dispatch({
                effects: ge.of(o ?? null)
            })
        }, mt = [o], t[40] = o, t[41] = pt, t[42] = mt), (0, L.useEffect)(pt, mt);
        let ht, gt;
        t[43] === a ? (ht = t[44], gt = t[45]) : (ht = () => {
            x.current?.dispatch({
                effects: he.of(a ?? [])
            })
        }, gt = [a], t[43] = a, t[44] = ht, t[45] = gt), (0, L.useEffect)(ht, gt);
        let _t, vt;
        t[46] === c ? (_t = t[47], vt = t[48]) : (_t = () => {
            x.current?.dispatch({
                effects: ye.of(c)
            })
        }, vt = [c], t[46] = c, t[47] = _t, t[48] = vt), (0, L.useEffect)(_t, vt);
        let yt, G;
        t[49] === l ? (yt = t[50], G = t[51]) : (yt = () => {
            x.current?.dispatch({
                effects: _e.of(l)
            })
        }, G = [l], t[49] = l, t[50] = yt, t[51] = G), (0, L.useEffect)(yt, G);
        let bt, xt;
        t[52] === v ? (bt = t[53], xt = t[54]) : (bt = () => {
            x.current?.dispatch({
                effects: Le.of(v)
            })
        }, xt = [v], t[52] = v, t[53] = bt, t[54] = xt), (0, L.useEffect)(bt, xt);
        let St, Ct;
        t[55] === s ? (St = t[56], Ct = t[57]) : (St = () => {
            x.current?.dispatch({
                effects: ze.of(s ?? null)
            })
        }, Ct = [s], t[55] = s, t[56] = St, t[57] = Ct), (0, L.useEffect)(St, Ct);
        let wt, Tt;
        t[58] !== V || t[59] !== w || t[60] !== g ? (wt = () => te({
            key: `saveCanvasEditor`,
            action: V,
            actionMessageDescriptor: {
                id: `keyboardActions.saveCanvasEditor`,
                defaultMessage: `Save canvas editor`,
                description: `Keyboard shortcut label for saving the focused canvas code editor.`
            },
            bindings: [{
                binding: [ne.Mod, `s`]
            }],
            enabled: g != null && !w,
            group: ie.Chat,
            order: 10,
            scope: `canvas`
        }), Tt = [V, w, g], t[58] = V, t[59] = w, t[60] = g, t[61] = wt, t[62] = Tt) : (wt = t[61], Tt = t[62]), (0, L.useEffect)(wt, Tt);
        let Et;
        t[63] !== a || t[64] !== s || t[65] !== j || t[66] !== tt || t[67] !== m || t[68] !== z || t[69] !== F || t[70] !== $e || t[71] !== b || t[72] !== S || t[73] !== w || t[74] !== u || t[75] !== A || t[76] !== C || t[77] !== v || t[78] !== y || t[79] !== M || t[80] !== p || t[81] !== N || t[82] !== f ? (Et = e => {
            let t = u == null ? null : Be(u),
                n = Ie({
                    currentlyStreamingLineIndex: s,
                    value: f,
                    placeholderContent: y,
                    editableCompartment: j,
                    readOnlyCompartment: M,
                    editableInit: !w,
                    languageCompartment: A,
                    languageCompartmentInit: t ?? null,
                    handleChange: F,
                    handleBlur: z,
                    handleSaveShortcut: $e,
                    extensionsProp: m,
                    editorTheme: tt,
                    intl: S,
                    toaster: i(),
                    maxLength: C,
                    comments: a ?? [],
                    modelCursor: v,
                    textdocDiff: p,
                    unifiedMergeViewCompartment: N,
                    hideLineNumbers: b
                });
            Ve(n);
            let r = Pe({
                state: n,
                parent: e,
                onUpdateState: Ve
            });
            return x.current = r, () => {
                r.destroy()
            }
        }, t[63] = a, t[64] = s, t[65] = j, t[66] = tt, t[67] = m, t[68] = z, t[69] = F, t[70] = $e, t[71] = b, t[72] = S, t[73] = w, t[74] = u, t[75] = A, t[76] = C, t[77] = v, t[78] = y, t[79] = M, t[80] = p, t[81] = N, t[82] = f, t[83] = Et) : Et = t[83];
        let Dt = (0, L.useEffectEvent)(Et),
            Ot;
        t[84] === Dt ? Ot = t[85] : (Ot = () => {
            let e = Fe.current;
            if (e != null) return Dt(e)
        }, t[84] = Dt, t[85] = Ot);
        let kt;
        t[86] !== m || t[87] !== n || t[88] !== y ? (kt = [n, m, y], t[86] = m, t[87] = n, t[88] = y, t[89] = kt) : kt = t[89], (0, L.useEffect)(Ot, kt);
        let At;
        t[90] === Symbol.for(`react.memo_cache_sentinel`) ? (At = () => x.current, t[90] = At) : At = t[90];
        let jt = At,
            K, q;
        t[91] === r ? (K = t[92], q = t[93]) : (K = [], q = [], L.Children.forEach(r, e => {
            if (!(0, L.isValidElement)(e)) return;
            let {
                type: t
            } = e;
            if (t === Qe) K.push(e);
            else if (t === Ze) q.push(e);
            else throw Error(`Invalid Codemirror child: ` + JSON.stringify(t))
        }), t[91] = r, t[92] = K, t[93] = q);
        let Mt = Ee && k.preview,
            Nt = je && k.systemFont,
            J;
        t[94] !== Mt || t[95] !== Nt ? (J = oe(k.codemirror, Mt, Nt, pe.composer, `flex h-full w-full flex-col items-stretch`), t[94] = Mt, t[95] = Nt, t[96] = J) : J = t[96];
        let Y;
        t[97] === D ? Y = t[98] : (Y = le(Fe, D), t[97] = D, t[98] = Y);
        let X;
        t[99] === _ ? X = t[100] : (X = {
            width: _
        }, t[99] = _, t[100] = X);
        let Z;
        t[101] !== n || t[102] !== J || t[103] !== Y || t[104] !== X ? (Z = (0, R.jsx)(`div`, {
            id: n,
            className: J,
            ref: Y,
            style: X
        }), t[101] = n, t[102] = J, t[103] = Y, t[104] = X, t[105] = Z) : Z = t[105];
        let Q;
        t[106] !== q || t[107] !== Z ? (Q = (0, R.jsxs)(`div`, {
            className: `relative z-0 flex h-full max-w-full`,
            children: [Z, q]
        }), t[106] = q, t[107] = Z, t[108] = Q) : Q = t[108];
        let $;
        t[109] !== O || t[110] !== K || t[111] !== Q ? ($ = (0, R.jsxs)(we.Provider, {
            value: O,
            children: [Q, K]
        }), t[109] = O, t[110] = K, t[111] = Q, t[112] = $) : $ = t[112];
        let Pt;
        return t[113] !== T || t[114] !== $ ? (Pt = (0, R.jsx)(Ce.Provider, {
            value: jt,
            children: (0, R.jsx)(Te.Provider, {
                value: T,
                children: $
            })
        }), t[113] = T, t[114] = $, t[115] = Pt) : Pt = t[115], Pt
    }, Ze = ({
        children: e
    }) => e, Qe = ({
        children: e
    }) => e, z.EditorChildren = Ze, z.ContextChildren = Qe
}));
export {
    B as n, z as t
};
//# sourceMappingURL=5ba997e8-mq8vouyfopo43ja6.js.map
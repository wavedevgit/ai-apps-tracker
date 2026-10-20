import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dnt as n,
    Ent as r,
    JT as i,
    Sw as a,
    Tnt as o,
    qT as s,
    ww as c
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as l,
    Ln as u,
    Nn as d,
    Rn as f,
    Vn as p,
    wn as m,
    zn as h
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    dKn as g,
    rWn as _,
    tWn as v,
    uKn as y
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
var b, x, S, C = e((() => {
    n(), f(), b = u({
        title: {
            id: `admin.plugins.app_configuration.healthcare_warning.title`,
            defaultMessage: `Before you continue`
        },
        body: {
            id: `admin.plugins.app_configuration.healthcare_warning.body`,
            defaultMessage: `Connectors may be used in contexts with PHI. To learn more about how to configure connectors to be used safely, refer to <article>this article</article>.`
        },
        continue: {
            id: `admin.plugins.app_configuration.healthcare_warning.button.continue`,
            defaultMessage: `Continue`
        },
        checkbox: {
            id: `admin.plugins.app_configuration.healthcare_warning.checkbox.label`,
            defaultMessage: `I understand and accept these risks.`
        },
        cancel: {
            id: `admin.plugins.app_configuration.button.cancel`,
            defaultMessage: `Cancel`
        }
    }), x = ({
        userId: e,
        workspaceId: t
    }) => e != null && t !== `` && o.getItem(r.HealthcareAppEnableWarningV1, {
        userId: e,
        workspaceId: t
    }) === !0, S = ({
        userId: e,
        workspaceId: t
    }) => {
        if (!(e == null || t === ``)) try {
            o.setItem(r.HealthcareAppEnableWarningV1, !0, {
                userId: e,
                workspaceId: t
            })
        } catch {}
    }
}));

function w(e) {
    return (0, D.jsx)(v, {
        href: O,
        className: `underline`,
        children: e
    })
}
var T, E, D, O, k, A, j = e((() => {
    T = m(), i(), g(), c(), _(), E = t(p()), f(), C(), D = l(), O = `https://help.openai.com/en/articles/11509118-admin-controls-security-and-compliance-in-connectors-enterprise-edu-and-team#h_f11dede080`, k = e => {
        "use forget";
        let t = (0, T.c)(39),
            {
                onCancel: n,
                onContinue: r,
                restoreFocusTo: i,
                standalone: a
            } = e,
            o = a !== void 0 && a,
            [c, l] = (0, E.useState)(!1),
            u = h(),
            f = (0, E.useId)(),
            p = (0, E.useId)(),
            m = (0, E.useRef)(null),
            g, _;
        t[0] === i ? (g = t[1], _ = t[2]) : (g = () => {
            let e = i ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null),
                t = m.current?.querySelector(`#healthcare-plugin-app-enable-warning-checkbox`),
                n = window.requestAnimationFrame(() => t?.focus());
            return () => {
                window.cancelAnimationFrame(n), window.requestAnimationFrame(() => e?.focus())
            }
        }, _ = [i], t[0] = i, t[1] = g, t[2] = _), (0, E.useEffect)(g, _);
        let v;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (v = e => {
            if (e.key !== `Tab`) return;
            let t = m.current?.querySelectorAll(`a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])`);
            if (t == null || t.length === 0) return;
            let n = t[0],
                r = t[t.length - 1];
            (e.shiftKey && document.activeElement === n || !e.shiftKey && document.activeElement === r) && (e.preventDefault(), (e.shiftKey ? r : n).focus())
        }, t[3] = v) : v = t[3];
        let x = v,
            S;
        t[4] === o ? S = t[5] : (S = o ? null : (0, D.jsx)(`div`, {
            "aria-hidden": !0,
            className: `absolute inset-0 z-10 bg-[rgba(227,227,227,0.75)]`
        }), t[4] = o, t[5] = S);
        let C = o ? `bg-token-bg-primary rounded-2xl px-6 pt-6 pb-6` : `border-token-border-light bg-token-bg-primary absolute inset-x-0 bottom-0 z-20 rounded-b-2xl border-t px-6 pt-6 pb-6 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]`,
            O;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, D.jsx)(d, {
            ...b.title
        }), t[6] = O) : O = t[6];
        let k;
        t[7] === f ? k = t[8] : (k = (0, D.jsx)(`h3`, {
            id: f,
            className: `text-token-text-primary text-[20px] leading-[25px] font-semibold tracking-[-0.45px]`,
            children: O
        }), t[7] = f, t[8] = k);
        let A;
        t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (A = (0, D.jsx)(d, {
            ...b.body,
            values: {
                article: w
            }
        }), t[9] = A) : A = t[9];
        let j;
        t[10] === p ? j = t[11] : (j = (0, D.jsx)(`div`, {
            id: p,
            className: `text-token-text-primary mt-3 text-sm leading-5 tracking-[-0.18px]`,
            children: A
        }), t[10] = p, t[11] = j);
        let M;
        t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (M = e => l(e.currentTarget.checked), t[12] = M) : M = t[12];
        let N;
        t[13] === u ? N = t[14] : (N = u.formatMessage(b.checkbox), t[13] = u, t[14] = N);
        let P;
        t[15] !== c || t[16] !== N ? (P = (0, D.jsx)(y, {
            id: `healthcare-plugin-app-enable-warning-checkbox`,
            checked: c,
            onChange: M,
            containerClassName: `mt-3`,
            labelClassName: `text-sm`,
            label: N
        }), t[15] = c, t[16] = N, t[17] = P) : P = t[17];
        let F;
        t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, D.jsx)(d, {
            ...b.cancel
        }), t[18] = F) : F = t[18];
        let I;
        t[19] === n ? I = t[20] : (I = (0, D.jsx)(s, {
            color: `secondary`,
            size: `large`,
            onClick: n,
            children: F
        }), t[19] = n, t[20] = I);
        let L = !c,
            R;
        t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, D.jsx)(d, {
            ...b.continue
        }), t[21] = R) : R = t[21];
        let z;
        t[22] !== r || t[23] !== L ? (z = (0, D.jsx)(s, {
            size: `large`,
            disabled: L,
            onClick: r,
            children: R
        }), t[22] = r, t[23] = L, t[24] = z) : z = t[24];
        let B;
        t[25] !== I || t[26] !== z ? (B = (0, D.jsxs)(`div`, {
            className: `mt-6 flex justify-end gap-2`,
            children: [I, z]
        }), t[25] = I, t[26] = z, t[27] = B) : B = t[27];
        let V;
        t[28] !== p || t[29] !== j || t[30] !== P || t[31] !== B || t[32] !== C || t[33] !== k || t[34] !== f ? (V = (0, D.jsxs)(`div`, {
            role: `alertdialog`,
            "aria-modal": `true`,
            "aria-labelledby": f,
            "aria-describedby": p,
            ref: m,
            onKeyDown: x,
            className: C,
            children: [k, j, P, B]
        }), t[28] = p, t[29] = j, t[30] = P, t[31] = B, t[32] = C, t[33] = k, t[34] = f, t[35] = V) : V = t[35];
        let H;
        return t[36] !== V || t[37] !== S ? (H = (0, D.jsxs)(D.Fragment, {
            children: [S, V]
        }), t[36] = V, t[37] = S, t[38] = H) : H = t[38], H
    }, A = e => {
        "use forget";
        let t = (0, T.c)(10),
            {
                onCancel: n,
                onContinue: r,
                restoreFocusTo: i
            } = e,
            o = h(),
            s;
        t[0] === o ? s = t[1] : (s = o.formatMessage(b.title), t[0] = o, t[1] = s);
        let c;
        t[2] !== n || t[3] !== r || t[4] !== i ? (c = (0, D.jsx)(k, {
            onCancel: n,
            onContinue: r,
            restoreFocusTo: i,
            standalone: !0
        }), t[2] = n, t[3] = r, t[4] = i, t[5] = c) : c = t[5];
        let l;
        return t[6] !== n || t[7] !== s || t[8] !== c ? (l = (0, D.jsx)(a, {
            isOpen: !0,
            title: s,
            visuallyHiddenHeader: !0,
            onClose: n,
            showCloseButton: !1,
            size: `custom`,
            className: `h-fit! w-full max-w-[512px] sm:w-[512px] sm:min-w-[512px]`,
            isScrollable: !1,
            noPadding: !0,
            children: c
        }), t[6] = n, t[7] = s, t[8] = c, t[9] = l) : l = t[9], l
    }
}));
export {
    b as a, x as i, A as n, C as o, j as r, S as s, k as t
};
//# sourceMappingURL=80772021-ezh3xwes39rxlftz.js.map
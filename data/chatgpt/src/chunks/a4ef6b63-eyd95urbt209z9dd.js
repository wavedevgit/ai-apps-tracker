import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as n,
    Cw as r,
    Tw as i,
    _tt as a,
    gtt as o,
    vnt as s
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as c,
    Rn as l,
    Vn as u,
    wn as d,
    zn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Pst as p
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    n as m,
    t as h
} from "./1c86a5ac-jc6sdmh39g815mqh.js";
import {
    n as g,
    r as _
} from "./db752596-hvfqk715aksij11m.js";

function v(e) {
    "use forget";
    let t = (0, y.c)(51),
        {
            clientThreadId: n,
            title: i,
            widthHint: a,
            viewParams: c,
            onComplete: l,
            onDismiss: u,
            onRequestModal: d
        } = e,
        p = f(),
        m = s(),
        g = typeof window > `u` ? S : window.innerHeight,
        v = m ? Math.floor(g * .95) : S,
        C = a != null && Number.isFinite(a) && a > 0 ? a : 464,
        w = m ? `max-sm:!grid-cols-[0px_1fr_0px] max-sm:!grid-rows-[minmax(0,1fr)_auto_0px]` : void 0,
        T;
    t[0] !== p || t[1] !== i ? (T = i ?? p.formatMessage({
        id: `potion.olympicModal.title`,
        defaultMessage: `Welcome to Health`
    }), t[0] = p, t[1] = i, t[2] = T) : T = t[2];
    let E = T,
        D;
    t[3] === p ? D = t[4] : (D = p.formatMessage({
        id: `potion.olympicModal.errorMessage`,
        defaultMessage: `Something went wrong`
    }), t[3] = p, t[4] = D);
    let O = D,
        k;
    t[5] === l ? k = t[6] : (k = () => {
        l()
    }, t[5] = l, t[6] = k);
    let A = k,
        j;
    t[7] === u ? j = t[8] : (j = () => {
        u()
    }, t[7] = u, t[8] = j);
    let M = j,
        N = (0, b.useRef)(!1),
        P, F;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (P = () => {
        N.current = !0
    }, F = () => {
        N.current = !1
    }, t[9] = P, t[10] = F) : (P = t[9], F = t[10]);
    let I;
    t[11] !== A || t[12] !== M ? (I = () => {
        if (N.current) {
            A();
            return
        }
        M()
    }, t[11] = A, t[12] = M, t[13] = I) : I = t[13];
    let L;
    t[14] !== n || t[15] !== d || t[16] !== I || t[17] !== c ? (L = {
        clientThreadId: n,
        viewParams: c,
        onRequestModal: d,
        onOnboardingCompleted: P,
        onOnboardingCancelled: F,
        onRequestClose: I
    }, t[14] = n, t[15] = d, t[16] = I, t[17] = c, t[18] = L) : L = t[18];
    let {
        api: R,
        appUri: z,
        templatePointer: B,
        resolvedWidget: V,
        isWidgetError: H,
        ids: U,
        theme: W,
        locale: G,
        viewParams: K,
        conversationId: q
    } = _(L);
    if (H) {
        let e;
        t[19] === C ? e = t[20] : (e = {
            maxWidth: C
        }, t[19] = C, t[20] = e);
        let n;
        t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (n = {
            height: v
        }, t[21] = n) : n = t[21];
        let i;
        t[22] === O ? i = t[23] : (i = (0, x.jsx)(`div`, {
            className: `text-token-text-tertiary flex w-full items-center justify-center text-sm italic`,
            style: n,
            children: O
        }), t[22] = O, t[23] = i);
        let a;
        return t[24] !== M || t[25] !== E || t[26] !== i || t[27] !== e ? (a = (0, x.jsx)(r, {
            testId: `modal-potion-olympic`,
            isOpen: !0,
            onClose: M,
            size: `custom`,
            shouldIgnoreClickOutside: !0,
            showCloseButton: !0,
            className: `bg-token-bg-elevated-primary relative flex w-full max-w-full flex-col overflow-hidden rounded-[24px] p-0 max-sm:w-full max-sm:max-w-none! max-sm:rounded-t-[32px] max-sm:rounded-b-none`,
            style: e,
            contentContainerClassName: w,
            headerClassName: `relative z-20`,
            contentClassName: `relative z-0 flex min-h-0 flex-1`,
            isScrollable: !1,
            position: m ? `bottom` : `center`,
            noPadding: !0,
            title: E,
            visuallyHiddenHeader: !0,
            children: i
        }), t[24] = M, t[25] = E, t[26] = i, t[27] = e, t[28] = a) : a = t[28], a
    }
    let J;
    t[29] === C ? J = t[30] : (J = {
        maxWidth: C
    }, t[29] = C, t[30] = J);
    let Y;
    t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (Y = {
        height: v
    }, t[31] = Y) : Y = t[31];
    let X = W ?? `light`,
        Z;
    t[32] !== R || t[33] !== z || t[34] !== q || t[35] !== U.widgetId || t[36] !== G || t[37] !== K || t[38] !== V.csp || t[39] !== V.html || t[40] !== V.permissions || t[41] !== V.subdomain || t[42] !== V.toolInfo || t[43] !== X || t[44] !== B ? (Z = (0, x.jsx)(`div`, {
        className: `relative z-0 w-full`,
        style: Y,
        children: (0, x.jsx)(h, {
            host: `chatgpt`,
            html: V.html,
            csp: V.csp,
            subdomain: V.subdomain,
            permissions: V.permissions,
            toolInfo: V.toolInfo,
            theme: X,
            attributionId: z,
            measureWidth: !1,
            conversationId: q,
            widgetId: U.widgetId,
            widgetType: B,
            widgetParent: z,
            widgetDistributionChannel: o.OPENAI,
            viewParams: K,
            maxHeight: v,
            api: R,
            locale: G,
            displayMode: `modal`
        })
    }), t[32] = R, t[33] = z, t[34] = q, t[35] = U.widgetId, t[36] = G, t[37] = K, t[38] = V.csp, t[39] = V.html, t[40] = V.permissions, t[41] = V.subdomain, t[42] = V.toolInfo, t[43] = X, t[44] = B, t[45] = Z) : Z = t[45];
    let Q;
    return t[46] !== M || t[47] !== E || t[48] !== Z || t[49] !== J ? (Q = (0, x.jsx)(r, {
        testId: `modal-potion-olympic`,
        isOpen: !0,
        onClose: M,
        size: `custom`,
        shouldIgnoreClickOutside: !0,
        showCloseButton: !1,
        className: `bg-token-bg-elevated-primary relative flex w-full max-w-full flex-col overflow-hidden rounded-[24px] p-0 max-sm:w-full max-sm:max-w-none! max-sm:rounded-t-[32px] max-sm:rounded-b-none`,
        style: J,
        contentContainerClassName: w,
        isScrollable: !1,
        position: m ? `bottom` : `center`,
        noPadding: !0,
        title: E,
        visuallyHiddenHeader: !0,
        children: Z
    }), t[46] = M, t[47] = E, t[48] = Z, t[49] = J, t[50] = Q) : Q = t[50], Q
}
var y, b, x, S, C = e((() => {
    y = d(), a(), i(), m(), p(), g(), n(), b = t(u()), l(), x = c(), S = 700
}));
export {
    C as n, v as t
};
//# sourceMappingURL=a4ef6b63-eyd95urbt209z9dd.js.map
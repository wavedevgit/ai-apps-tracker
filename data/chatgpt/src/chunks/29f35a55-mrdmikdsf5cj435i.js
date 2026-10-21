import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A5 as n,
    Ew as r,
    Fw as i,
    I1 as a,
    Nw as o,
    S1 as s,
    Tw as c,
    f8 as l
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as u,
    Nn as d,
    Rn as f,
    Vn as p,
    wn as m,
    zn as h
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    OPt as g,
    een as _,
    kPt as v,
    ren as y
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    i as b,
    r as x
} from "./181180d3-nlzivv2dxeap1a5c.js";

function S(e) {
    return (0, T.jsxs)(`div`, {
        className: `flex h-11 items-center gap-2`,
        children: [(0, T.jsx)(`div`, {
            className: `skeleton-child size-7 rounded-full`
        }), (0, T.jsx)(`div`, {
            className: `skeleton-child h-3.5 w-36 rounded-md`
        }), (0, T.jsx)(`div`, {
            className: `skeleton-child ms-auto h-3.5 w-12 rounded-md`
        })]
    }, e)
}
var C, w, T, E, D, O, k, A = e((() => {
    C = m(), r(), i(), v(), x(), _(), l(), a(), w = t(p()), f(), T = u(), E = e => {
        "use forget";
        let t = (0, C.c)(9),
            {
                children: r,
                contentOnly: i,
                descriptionId: a,
                onClose: c,
                testId: l
            } = e,
            u = i !== void 0 && i;
        if (!y(n(s))) return null;
        if (u) {
            let e;
            return t[0] === r ? e = t[1] : (e = (0, T.jsx)(T.Fragment, {
                children: r
            }), t[0] = r, t[1] = e), e
        }
        let d;
        t[2] !== r || t[3] !== a ? (d = (0, T.jsx)(o.Overlay, {
            children: (0, T.jsx)(o.Content, {
                ariaDescribedBy: a,
                className: `bg-token-bg-primary h-auto max-h-[min(680px,calc(100dvh-32px))] w-[min(532px,calc(100vw-32px))]! max-w-[calc(100vw-32px)]! overflow-y-auto rounded-2xl p-0 outline-hidden`,
                removePopoverStyling: !0,
                size: `custom`,
                children: r
            })
        }), t[2] = r, t[3] = a, t[4] = d) : d = t[4];
        let f;
        return t[5] !== c || t[6] !== d || t[7] !== l ? (f = (0, T.jsx)(o.Root, {
            isOpen: !0,
            onClose: c,
            testId: l,
            children: d
        }), t[5] = c, t[6] = d, t[7] = l, t[8] = f) : f = t[8], f
    }, D = e => {
        "use forget";
        let t = (0, C.c)(29),
            {
                embeddedModal: n,
                fileName: r,
                libraryArtifactType: i,
                onClose: a,
                status: s
            } = e,
            l = h(),
            u = (0, w.useId)(),
            f = n?.descriptionId ?? u,
            p;
        t[0] !== r || t[1] !== l || t[2] !== i ? (p = g(r, i, l), t[0] = r, t[1] = l, t[2] = i, t[3] = p) : p = t[3];
        let m = p,
            _ = s === `loading` ? b.viewerSharingStateLoading : b.viewerSharingStateError,
            v = n != null,
            y;
        t[4] === m ? y = t[5] : (y = (0, T.jsx)(o.Title, {
            title: (0, T.jsx)(`span`, {
                className: `block truncate text-lg leading-7 font-normal`,
                children: (0, T.jsx)(d, {
                    ...b.title,
                    values: {
                        fileName: m
                    }
                })
            })
        }), t[4] = m, t[5] = y);
        let x;
        t[6] === _ ? x = t[7] : (x = (0, T.jsx)(d, {
            ..._
        }), t[6] = _, t[7] = x);
        let D;
        t[8] !== f || t[9] !== x ? (D = (0, T.jsx)(`p`, {
            className: `sr-only`,
            id: f,
            children: x
        }), t[8] = f, t[9] = x, t[10] = D) : D = t[10];
        let O;
        t[11] === a ? O = t[12] : (O = (0, T.jsx)(c, {
            className: `size-8 shrink-0`,
            iconSize: `sm`,
            onClick: a
        }), t[11] = a, t[12] = O);
        let k;
        t[13] !== y || t[14] !== D || t[15] !== O ? (k = (0, T.jsxs)(`header`, {
            className: `flex items-center justify-between gap-3`,
            children: [y, D, O]
        }), t[13] = y, t[14] = D, t[15] = O, t[16] = k) : k = t[16];
        let A;
        t[17] !== l || t[18] !== s || t[19] !== _ ? (A = s === `error` ? (0, T.jsx)(`p`, {
            className: `text-token-text-status-error text-sm`,
            role: `alert`,
            children: (0, T.jsx)(d, {
                ..._
            })
        }) : (0, T.jsxs)(`div`, {
            "aria-busy": `true`,
            "aria-label": l.formatMessage(_),
            className: `skeleton space-y-4 [--skeleton-opacity:0.75]`,
            role: `status`,
            children: [(0, T.jsx)(`div`, {
                className: `skeleton-child h-12 rounded-xl`
            }), [0, 1, 2].map(S)]
        }), t[17] = l, t[18] = s, t[19] = _, t[20] = A) : A = t[20];
        let j;
        t[21] !== k || t[22] !== A ? (j = (0, T.jsxs)(`div`, {
            className: `flex flex-col gap-4 p-4`,
            children: [k, A]
        }), t[21] = k, t[22] = A, t[23] = j) : j = t[23];
        let M;
        return t[24] !== f || t[25] !== a || t[26] !== v || t[27] !== j ? (M = (0, T.jsx)(E, {
            contentOnly: v,
            descriptionId: f,
            onClose: a,
            testId: `modal-library-file-share`,
            children: j
        }), t[24] = f, t[25] = a, t[26] = v, t[27] = j, t[28] = M) : M = t[28], M
    }, O = e => {
        "use forget";
        let t = (0, C.c)(2),
            n;
        return t[0] === e ? n = t[1] : (n = e.embeddedModal == null ? null : (0, T.jsx)(D, {
            ...e,
            status: `loading`
        }), t[0] = e, t[1] = n), n
    }, k = e => {
        "use forget";
        let t = (0, C.c)(2),
            n;
        return t[0] === e ? n = t[1] : (n = (0, T.jsx)(D, {
            ...e,
            status: `error`
        }), t[0] = e, t[1] = n), n
    }
}));
export {
    A as i, k as n, O as r, E as t
};
//# sourceMappingURL=29f35a55-mrdmikdsf5cj435i.js.map
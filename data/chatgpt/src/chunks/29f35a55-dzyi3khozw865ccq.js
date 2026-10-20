import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ew as n,
    Fw as r,
    I1 as i,
    M5 as a,
    Nw as o,
    S1 as s,
    Tw as c,
    m8 as l
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as u,
    Hn as d,
    Pn as f,
    Tn as p,
    Vn as m,
    zn as h
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    OPt as g,
    ien as _,
    kPt as v,
    ten as y
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    i as b,
    r as x
} from "./181180d3-hqssxnzxqba14p2l.js";

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
    C = p(), n(), r(), v(), x(), y(), l(), i(), w = t(d()), h(), T = m(), E = e => {
        "use forget";
        let t = (0, C.c)(9),
            {
                children: n,
                contentOnly: r,
                descriptionId: i,
                onClose: c,
                testId: l
            } = e,
            u = r !== void 0 && r;
        if (!_(a(s))) return null;
        if (u) {
            let e;
            return t[0] === n ? e = t[1] : (e = (0, T.jsx)(T.Fragment, {
                children: n
            }), t[0] = n, t[1] = e), e
        }
        let d;
        t[2] !== n || t[3] !== i ? (d = (0, T.jsx)(o.Overlay, {
            children: (0, T.jsx)(o.Content, {
                ariaDescribedBy: i,
                className: `bg-token-bg-primary h-auto max-h-[min(680px,calc(100dvh-32px))] w-[min(532px,calc(100vw-32px))]! max-w-[calc(100vw-32px)]! overflow-y-auto rounded-2xl p-0 outline-hidden`,
                removePopoverStyling: !0,
                size: `custom`,
                children: n
            })
        }), t[2] = n, t[3] = i, t[4] = d) : d = t[4];
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
            l = u(),
            d = (0, w.useId)(),
            p = n?.descriptionId ?? d,
            m;
        t[0] !== r || t[1] !== l || t[2] !== i ? (m = g(r, i, l), t[0] = r, t[1] = l, t[2] = i, t[3] = m) : m = t[3];
        let h = m,
            _ = s === `loading` ? b.viewerSharingStateLoading : b.viewerSharingStateError,
            v = n != null,
            y;
        t[4] === h ? y = t[5] : (y = (0, T.jsx)(o.Title, {
            title: (0, T.jsx)(`span`, {
                className: `block truncate text-lg leading-7 font-normal`,
                children: (0, T.jsx)(f, {
                    ...b.title,
                    values: {
                        fileName: h
                    }
                })
            })
        }), t[4] = h, t[5] = y);
        let x;
        t[6] === _ ? x = t[7] : (x = (0, T.jsx)(f, {
            ..._
        }), t[6] = _, t[7] = x);
        let D;
        t[8] !== p || t[9] !== x ? (D = (0, T.jsx)(`p`, {
            className: `sr-only`,
            id: p,
            children: x
        }), t[8] = p, t[9] = x, t[10] = D) : D = t[10];
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
            children: (0, T.jsx)(f, {
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
        return t[24] !== p || t[25] !== a || t[26] !== v || t[27] !== j ? (M = (0, T.jsx)(E, {
            contentOnly: v,
            descriptionId: p,
            onClose: a,
            testId: `modal-library-file-share`,
            children: j
        }), t[24] = p, t[25] = a, t[26] = v, t[27] = j, t[28] = M) : M = t[28], M
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
//# sourceMappingURL=29f35a55-dzyi3khozw865ccq.js.map
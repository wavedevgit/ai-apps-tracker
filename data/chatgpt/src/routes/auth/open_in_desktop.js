import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    Ptt as r,
    _tt as i,
    kT as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as o,
    Bn as s,
    Ht as c,
    Ln as l,
    Nn as u,
    Pt as d,
    Rn as f,
    Ut as p,
    Vn as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    a as h,
    n as g,
    r as _,
    t as v
} from "./9bbac052-hmfqc3w40261iizy.js";
import {
    i as y,
    n as b,
    r as x,
    t as S
} from "./fb8ee25e-kajtm121nnmslmh0.js";
var C, w, T, E, D = e((() => {
    o(), n(), h(), y(), i(), C = t(m()), f(), w = s(), T = l({
        primaryButton: {
            id: `OpenInDesktopApp.launchButton`,
            defaultMessage: `Launch ChatGPT desktop app`
        },
        secondaryButton: {
            id: `OpenInDesktopApp.secondaryButton`,
            defaultMessage: `Not launching? Click here instead.`
        },
        oops: {
            id: `AuthError.oops`,
            defaultMessage: `Oops!`
        },
        goBack: {
            id: `AuthError.goBack`,
            defaultMessage: `Go back`
        }
    }), E = p(function() {
        let e = d(),
            [t, n] = (0, C.useState)(),
            [i, o] = (0, C.useState)(!1),
            [s, l] = (0, C.useState)(!1),
            [f] = c(),
            p = (0, C.useCallback)(() => {
                t !== void 0 && (window.location.href = t)
            }, [t]);
        (0, C.useEffect)(() => {
            let e = f.get(`path`),
                t = f.get(`code`),
                i = f.get(`state`),
                a = r() ? S : b;
            if (!e || !t || !i) return;
            e.startsWith(`/`) || (e = `/` + e);
            let s = new URL(`${a}://${x}${e}`);
            s.searchParams.set(`code`, t), s.searchParams.set(`state`, i);
            let c = s.toString();
            n(c), o(!0), p(), setTimeout(() => {
                l(!0)
            }, 3e3)
        }, [p, f]);
        let m = () => {
            t && navigator.clipboard.writeText(t)
        };
        return (0, w.jsx)(w.Fragment, {
            children: i ? (0, w.jsx)(v, {
                isStorageComplianceEnabled: !1,
                children: t ? (0, w.jsxs)(g, {
                    children: [(0, w.jsx)(_, {}), (0, w.jsx)(a, {
                        as: `button`,
                        color: `secondary`,
                        onClick: p,
                        children: (0, w.jsx)(u, {
                            ...T.primaryButton
                        })
                    }), (0, w.jsx)(`div`, {
                        className: `text-token-text-tertiary mt-2 h-4 text-center text-xs`,
                        children: s && (0, w.jsx)(a, {
                            as: `button`,
                            color: `ghost`,
                            onClick: m,
                            children: (0, w.jsx)(u, {
                                ...T.secondaryButton
                            })
                        })
                    })]
                }) : (0, w.jsxs)(g, {
                    children: [(0, w.jsx)(_, {}), (0, w.jsx)(`div`, {
                        className: `mb-2 text-center text-lg`,
                        children: (0, w.jsx)(u, {
                            ...T.oops
                        })
                    }), (0, w.jsx)(a, {
                        as: `button`,
                        color: `secondary`,
                        onClick: () => e(`/auth/login`, {
                            replace: !0
                        }),
                        children: (0, w.jsx)(u, {
                            ...T.goBack
                        })
                    })]
                })
            }) : null
        })
    })
}));
e((() => {
    D()
}))();
export {
    E as
    default
};
//# sourceMappingURL=auth.open_in_desktop-bk1y02rc.js.map
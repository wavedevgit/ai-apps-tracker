const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c292a757-odixagwoqqm80vy8.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/864da960-jy1tkbvna7eudu56.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/root-lelxp0l2.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C0 as t,
    S0 as n,
    cot as r,
    lot as i,
    o as a,
    s as o
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as s,
    At as c,
    Bn as l,
    Nn as u,
    Pt as d,
    Rn as f,
    cn as p,
    ln as m,
    wn as h
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Flt as g,
    Nlt as _
} from "./conversation-small-fym1zmu9zimymmm1.js";
var v, y = e((() => {
        t(), m(), v = n(() => p(() => import(`./c292a757-odixagwoqqm80vy8.js`).then(e => e.EpicLaunchSignIn), __vite__mapDeps([0, 1, 2])))
    })),
    b, x = e((() => {
        t(), m(), b = n(() => p(() => import(`./864da960-jy1tkbvna7eudu56.js`).then(e => e.EpicLaunchStatus), __vite__mapDeps([3, 1, 4, 2, 5])))
    })),
    S, C, w, T = e((() => {
        S = h(), g(), f(), s(), y(), x(), C = l(), w = () => {
            "use forget";
            let e = (0, S.c)(9),
                t = c(),
                n = d(),
                r;
            e[0] === n ? r = e[1] : (r = e => {
                e || n(`/`)
            }, e[0] = n, e[1] = r);
            let i;
            e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, C.jsx)(u, {
                id: `chatgpt.epic.launch.title`,
                defaultMessage: `Open Epic chart`
            }), e[2] = i) : i = e[2];
            let a;
            e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, C.jsx)(_.Header, {
                children: (0, C.jsx)(_.CloseButton, {})
            }), e[3] = a) : a = e[3];
            let o;
            e[4] === t.requiresSignIn ? o = e[5] : (o = (0, C.jsx)(_.Contents, {
                children: t.requiresSignIn ? (0, C.jsx)(v, {}) : (0, C.jsx)(b, {})
            }), e[4] = t.requiresSignIn, e[5] = o);
            let s;
            return e[6] !== r || e[7] !== o ? (s = (0, C.jsxs)(_, {
                open: !0,
                renderInPlace: !0,
                onOpenChange: r,
                accessibleTitle: i,
                children: [a, o]
            }), e[6] = r, e[7] = o, e[8] = s) : s = e[8], s
        }
    })),
    E, D = e((() => {
        i(), T(), o(), E = e => {
            if ([...new URL(e.request.url).searchParams].some(([e, t]) => e !== `account_switch` || t !== `true`)) throw new Response(`Invalid Epic launch`, {
                status: 400
            });
            return {
                requiresSignIn: r().redirect != null
            }
        }
    }));
e((() => {
    D()
}))();
export {
    a as ErrorBoundary, E as clientLoader, w as
    default
};
//# sourceMappingURL=epic.launch-h1r5gz8a.js.map
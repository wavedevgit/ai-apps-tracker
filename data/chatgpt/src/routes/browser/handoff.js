import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Irt as n,
    Nrt as r,
    rot as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as a,
    Bn as o,
    Ht as s,
    Nn as c,
    Pt as l,
    Rn as u,
    Ut as d,
    Vn as f,
    wn as p,
    zn as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Flt as h,
    Nlt as g
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    BS as _,
    FS as v,
    HS as y,
    SS as b,
    VS as x,
    dS as S
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";

function C(e) {
    let t = T.safeParse({
        threadId: e.getAll(`thread_id`),
        tabId: e.getAll(`tab_id`),
        connectionThreadId: e.getAll(`connection_thread_id`)
    });
    return t.success ? {
        threadId: t.data.threadId[0],
        tabId: t.data.tabId[0],
        connectionThreadId: t.data.connectionThreadId[0] ?? t.data.threadId[0]
    } : null
}
var w, T, E = e((() => {
        S(), w = b(e => typeof e == `string` && e.trim().length > 0 && e.length <= 512), T = v({
            threadId: x([w]),
            tabId: x([_().regex(/^[1-9][0-9]*$/).refine(e => Number.isSafeInteger(Number(e)))]),
            connectionThreadId: y([x([]), x([w])])
        })
    })),
    D, O, k, A, j = e((() => {
        D = p(), h(), r(), O = t(f()), u(), a(), E(), k = o(), A = () => {
            "use forget";
            let e = (0, D.c)(23),
                t = m(),
                r = l(),
                [a] = s(),
                o;
            e[0] === a ? o = e[1] : (o = C(a), e[0] = a, e[1] = o);
            let u = o,
                d;
            e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (d = i(), e[2] = d) : d = e[2];
            let [f, p] = (0, O.useState)(!0), h, _;
            e[3] === Symbol.for(`react.memo_cache_sentinel`) ? (h = () => {
                let e = n(() => p(!1));
                return () => {
                    e()
                }
            }, _ = [], e[3] = h, e[4] = _) : (h = e[3], _ = e[4]), (0, O.useEffect)(h, _);
            let v;
            e[5] === r ? v = e[6] : (v = e => {
                p(e), e || r(`/`, {
                    replace: !0
                })
            }, e[5] = r, e[6] = v);
            let y;
            e[7] === t ? y = e[8] : (y = t.formatMessage({
                id: `chatgpt.browser_handoff.page.title`,
                defaultMessage: `Computer takeover`
            }), e[7] = t, e[8] = y);
            let b;
            e[9] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, k.jsx)(`h1`, {
                className: `flex-1 text-base font-semibold`,
                children: (0, k.jsx)(c, {
                    id: `chatgpt.browser_handoff.header.title`,
                    defaultMessage: `Computer`
                })
            }), e[9] = b) : b = e[9];
            let x;
            e[10] === t ? x = e[11] : (x = t.formatMessage({
                id: `chatgpt.browser_handoff.button.close`,
                defaultMessage: `Close`
            }), e[10] = t, e[11] = x);
            let S;
            e[12] === x ? S = e[13] : (S = (0, k.jsxs)(g.Header, {
                children: [b, (0, k.jsx)(g.CloseButton, {
                    "aria-label": x
                })]
            }), e[12] = x, e[13] = S);
            let w;
            e[14] !== f || e[15] !== u ? (w = (0, k.jsx)(g.Contents, {
                className: `flex flex-col`,
                children: (0, k.jsx)(`div`, {
                    className: `text-token-text-secondary flex min-h-0 flex-1 items-center justify-center p-6 text-center`,
                    role: `status`,
                    children: (0, k.jsx)(c, {
                        id: `chatgpt.browser_handoff.status.unavailable`,
                        defaultMessage: `This computer link is unavailable.`
                    })
                })
            }), e[14] = f, e[15] = u, e[16] = w) : w = e[16];
            let T;
            return e[17] !== f || e[18] !== v || e[19] !== y || e[20] !== S || e[21] !== w ? (T = (0, k.jsxs)(g, {
                open: f,
                renderInPlace: !0,
                onOpenChange: v,
                accessibleTitle: y,
                children: [S, w]
            }), e[17] = f, e[18] = v, e[19] = y, e[20] = S, e[21] = w, e[22] = T) : T = e[22], T
        }
    })),
    M, N = e((() => {
        a(), j(), M = d(A)
    }));
e((() => {
    N()
}))();
export {
    M as
    default
};
//# sourceMappingURL=browser.handoff-n2a6vt13.js.map
import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    B6 as r,
    aU as i,
    i5 as a,
    iw as o,
    kT as s,
    mst as c,
    ow as l,
    rU as u,
    wst as d
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as f,
    Ln as p,
    Nn as m,
    Rn as h,
    wn as g,
    zn as _
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Gdn as v,
    UUn as y,
    Udn as b,
    WUn as x
} from "./conversation-small-fym1zmu9zimymmm1.js";
var S = t({
    EnableDeveloperModeModal: () => O
});

function C() {
    return v()
}

function w(e) {
    return (0, E.jsx)(y, {
        href: D,
        openNewTab: !0,
        children: e
    })
}
var T, E, D, O, k, A = e((() => {
    T = g(), d(), n(), l(), x(), b(), u(), r(), h(), E = f(), D = `https://platform.openai.com/docs/mcp#risks-and-safety`, O = e => {
        "use forget";
        let t = (0, T.c)(30),
            {
                onClose: n,
                onEnabled: r
            } = e,
            l = _(),
            u = a(C),
            d = i(!0),
            f;
        t[0] !== n || t[1] !== d.isPending ? (f = () => {
            d.isPending || n()
        }, t[0] = n, t[1] = d.isPending, t[2] = f) : f = t[2];
        let p = f,
            h;
        t[3] !== r || t[4] !== d ? (h = async () => {
            try {
                await d.mutateAsync({
                    setting: c.DeveloperMode,
                    value: !0
                }), r()
            } catch {}
        }, t[3] = r, t[4] = d, t[5] = h) : h = t[5];
        let g = h,
            v;
        t[6] === l ? v = t[7] : (v = l.formatMessage(k.enableDeveloperModeTitle), t[6] = l, t[7] = v);
        let y;
        t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, E.jsx)(`p`, {
            className: `text-token-text-secondary text-sm leading-5`,
            children: (0, E.jsx)(m, {
                ...k.enableDeveloperModeDescriptionV2,
                values: {
                    link: w
                }
            })
        }), t[8] = y) : y = t[8];
        let b;
        t[9] === u ? b = t[10] : (b = !u && (0, E.jsx)(`p`, {
            className: `text-token-text-tertiary text-sm leading-5`,
            children: (0, E.jsx)(m, {
                ...k.enableDeveloperModeAdminDisabled
            })
        }), t[9] = u, t[10] = b);
        let x;
        t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, E.jsx)(m, {
            ...k.cancelButtonLabel
        }), t[11] = x) : x = t[11];
        let S;
        t[12] !== p || t[13] !== d.isPending ? (S = (0, E.jsx)(s, {
            color: `secondary`,
            size: `small`,
            onClick: p,
            disabled: d.isPending,
            children: x
        }), t[12] = p, t[13] = d.isPending, t[14] = S) : S = t[14];
        let D = !u,
            O;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (O = (0, E.jsx)(m, {
            ...k.enableDeveloperModeCta
        }), t[15] = O) : O = t[15];
        let A;
        t[16] !== g || t[17] !== D || t[18] !== d.isPending ? (A = (0, E.jsx)(s, {
            color: `primary`,
            size: `small`,
            onClick: g,
            loading: d.isPending,
            disabled: D,
            children: O
        }), t[16] = g, t[17] = D, t[18] = d.isPending, t[19] = A) : A = t[19];
        let j;
        t[20] !== A || t[21] !== S ? (j = (0, E.jsxs)(`div`, {
            className: `flex justify-end gap-2`,
            children: [S, A]
        }), t[20] = A, t[21] = S, t[22] = j) : j = t[22];
        let M;
        t[23] !== j || t[24] !== b ? (M = (0, E.jsxs)(`div`, {
            className: `space-y-4`,
            children: [y, b, j]
        }), t[23] = j, t[24] = b, t[25] = M) : M = t[25];
        let N;
        return t[26] !== p || t[27] !== M || t[28] !== v ? (N = (0, E.jsx)(o, {
            isOpen: !0,
            onClose: p,
            title: v,
            showCloseButton: !0,
            showOverlayBackground: !0,
            hasSeparator: !0,
            testId: `modal-enable-developer-mode`,
            children: M
        }), t[26] = p, t[27] = M, t[28] = v, t[29] = N) : N = t[29], N
    }, k = p({
        enableDeveloperModeTitle: {
            id: `W6klyP`,
            defaultMessage: `Enable developer mode`
        },
        enableDeveloperModeDescriptionV2: {
            id: `O813g8`,
            defaultMessage: `Developer mode lets you add unverified connectors that could modify or erase data permanently. Use at your own risk. <link>Learn more</link>`
        },
        enableDeveloperModeAdminDisabled: {
            id: `oALm1o`,
            defaultMessage: `Your admin has not enabled developer mode. Contact your admin to continue.`
        },
        enableDeveloperModeCta: {
            id: `yJaGEp`,
            defaultMessage: `Enable developer mode`
        },
        cancelButtonLabel: {
            id: `38P8eP`,
            defaultMessage: `Cancel`
        }
    })
}));
export {
    S as n, A as r, O as t
};
//# sourceMappingURL=7cb26c08-c9b1cfa5z1thk5cj.js.map
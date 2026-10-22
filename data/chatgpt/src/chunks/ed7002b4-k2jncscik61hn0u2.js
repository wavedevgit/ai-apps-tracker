import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    G5 as t,
    JT as n,
    K5 as r,
    Sw as i,
    qT as a,
    ww as o
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as s,
    Nn as c,
    Rn as l,
    wn as u
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Flt as d,
    Llt as f
} from "./conversation-small-l6tnsr2xfn2d55kk.js";

function p() {}

function m(e) {
    return e.preventDefault()
}
var h, g, _, v, y = e((() => {
    h = u(), n(), o(), f(), r(), l(), g = s(), _ = e => {
        "use forget";
        let t = (0, h.c)(7),
            {
                children: n,
                onClose: r
            } = e;
        if (r) {
            let e;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, g.jsx)(c, {
                id: `elicitation.wallet.dialog.title`,
                defaultMessage: `Add a card to Wallet`
            }), t[0] = e) : e = t[0];
            let a;
            return t[1] !== n || t[2] !== r ? (a = (0, g.jsx)(i, {
                isOpen: !0,
                onClose: r,
                showCloseButton: !0,
                title: e,
                size: `large`,
                noPadding: !0,
                children: n
            }), t[1] = n, t[2] = r, t[3] = a) : a = t[3], a
        }
        let a;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, g.jsx)(c, {
            id: `chatgpt.wallet.enrollment.title`,
            defaultMessage: `Add a card to Wallet`
        }), t[4] = a) : a = t[4];
        let o;
        return t[5] === n ? o = t[6] : (o = (0, g.jsx)(d, {
            open: !0,
            renderInPlace: !0,
            className: `z-40! h-dvh p-[env(safe-area-inset-top)_env(safe-area-inset-right)_env(safe-area-inset-bottom)_env(safe-area-inset-left)]`,
            onOpenChange: p,
            onEscapeKeyDown: m,
            accessibleTitle: a,
            children: (0, g.jsx)(d.Contents, {
                children: (0, g.jsx)(`main`, {
                    className: `h-full min-h-0`,
                    children: n
                })
            })
        }), t[5] = n, t[6] = o), o
    }, v = e => {
        "use forget";
        let n = (0, h.c)(14),
            {
                status: r,
                onRestart: i,
                onSignIn: o,
                onConnect: s,
                connecting: l,
                fullHeight: u
            } = e,
            d = (u === void 0 || u) && `min-h-full`,
            f;
        n[0] === d ? f = n[1] : (f = t(`flex flex-col items-center justify-center gap-4 p-6 text-center`, d), n[0] = d, n[1] = f);
        let p;
        n[2] === r ? p = n[3] : (p = (0, g.jsx)(`p`, {
            role: `status`,
            children: r === `loading` ? (0, g.jsx)(c, {
                id: `chatgpt.wallet.enrollment.status.loading`,
                defaultMessage: `Loading the secure card form…`
            }) : r === `changed` ? (0, g.jsx)(c, {
                id: `chatgpt.wallet.enrollment.status.changed`,
                defaultMessage: `Your ChatGPT sign-in changed. Restart enrollment to load a new secure card form.`
            }) : r === `setup-required` ? (0, g.jsx)(c, {
                id: `chatgpt.wallet.enrollment.status.connect_required`,
                defaultMessage: `Connect Wallet to add a card.`
            }) : (0, g.jsx)(c, {
                id: `chatgpt.wallet.enrollment.status.load_failed`,
                defaultMessage: `Wallet enrollment is unavailable. Try again.`
            })
        }), n[2] = r, n[3] = p);
        let m;
        n[4] !== l || n[5] !== s || n[6] !== i || n[7] !== o || n[8] !== r ? (m = r !== `loading` && (0, g.jsxs)(`div`, {
            className: `flex flex-wrap justify-center gap-3`,
            children: [r === `setup-required` ? (0, g.jsx)(a, {
                type: `button`,
                color: `primary`,
                disabled: l,
                onClick: s,
                children: (0, g.jsx)(c, {
                    id: `chatgpt.wallet.enrollment.connect.button`,
                    defaultMessage: `Connect Wallet`
                })
            }) : (0, g.jsx)(a, {
                type: `button`,
                color: `secondary`,
                onClick: i,
                children: (0, g.jsx)(c, {
                    id: `chatgpt.wallet.enrollment.restart.button`,
                    defaultMessage: `Restart enrollment`
                })
            }), (0, g.jsx)(a, {
                type: `button`,
                color: `secondary`,
                onClick: o,
                children: (0, g.jsx)(c, {
                    id: `chatgpt.wallet.enrollment.sign_in.button.label`,
                    defaultMessage: `Sign in`
                })
            })]
        }), n[4] = l, n[5] = s, n[6] = i, n[7] = o, n[8] = r, n[9] = m) : m = n[9];
        let _;
        return n[10] !== f || n[11] !== p || n[12] !== m ? (_ = (0, g.jsxs)(`div`, {
            className: f,
            children: [p, m]
        }), n[10] = f, n[11] = p, n[12] = m, n[13] = _) : _ = n[13], _
    }
}));
export {
    v as n, y as r, _ as t
};
//# sourceMappingURL=ed7002b4-k2jncscik61hn0u2.js.map
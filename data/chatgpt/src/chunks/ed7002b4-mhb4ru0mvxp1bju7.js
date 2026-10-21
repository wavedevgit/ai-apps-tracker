import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cw as t,
    JT as n,
    Tw as r,
    X5 as i,
    Y5 as a,
    YT as o
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as s,
    Nn as c,
    Rn as l,
    wn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Blt as d,
    Hlt as f
} from "./conversation-small-nmt18uiom3b14vca.js";

function p() {}

function m(e) {
    return e.preventDefault()
}
var h, g, _, v, y = e((() => {
    h = u(), o(), r(), f(), i(), l(), g = s(), _ = e => {
        "use forget";
        let n = (0, h.c)(7),
            {
                children: r,
                onClose: i
            } = e;
        if (i) {
            let e;
            n[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, g.jsx)(c, {
                id: `elicitation.wallet.dialog.title`,
                defaultMessage: `Add a card to Wallet`
            }), n[0] = e) : e = n[0];
            let a;
            return n[1] !== r || n[2] !== i ? (a = (0, g.jsx)(t, {
                isOpen: !0,
                onClose: i,
                showCloseButton: !0,
                title: e,
                size: `large`,
                noPadding: !0,
                children: r
            }), n[1] = r, n[2] = i, n[3] = a) : a = n[3], a
        }
        let a;
        n[4] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, g.jsx)(c, {
            id: `chatgpt.wallet.enrollment.title`,
            defaultMessage: `Add a card to Wallet`
        }), n[4] = a) : a = n[4];
        let o;
        return n[5] === r ? o = n[6] : (o = (0, g.jsx)(d, {
            open: !0,
            renderInPlace: !0,
            className: `z-40! h-dvh p-[env(safe-area-inset-top)_env(safe-area-inset-right)_env(safe-area-inset-bottom)_env(safe-area-inset-left)]`,
            onOpenChange: p,
            onEscapeKeyDown: m,
            accessibleTitle: a,
            children: (0, g.jsx)(d.Contents, {
                children: (0, g.jsx)(`main`, {
                    className: `h-full min-h-0`,
                    children: r
                })
            })
        }), n[5] = r, n[6] = o), o
    }, v = e => {
        "use forget";
        let t = (0, h.c)(14),
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
        t[0] === d ? f = t[1] : (f = a(`flex flex-col items-center justify-center gap-4 p-6 text-center`, d), t[0] = d, t[1] = f);
        let p;
        t[2] === r ? p = t[3] : (p = (0, g.jsx)(`p`, {
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
        }), t[2] = r, t[3] = p);
        let m;
        t[4] !== l || t[5] !== s || t[6] !== i || t[7] !== o || t[8] !== r ? (m = r !== `loading` && (0, g.jsxs)(`div`, {
            className: `flex flex-wrap justify-center gap-3`,
            children: [r === `setup-required` ? (0, g.jsx)(n, {
                type: `button`,
                color: `primary`,
                disabled: l,
                onClick: s,
                children: (0, g.jsx)(c, {
                    id: `chatgpt.wallet.enrollment.connect.button`,
                    defaultMessage: `Connect Wallet`
                })
            }) : (0, g.jsx)(n, {
                type: `button`,
                color: `secondary`,
                onClick: i,
                children: (0, g.jsx)(c, {
                    id: `chatgpt.wallet.enrollment.restart.button`,
                    defaultMessage: `Restart enrollment`
                })
            }), (0, g.jsx)(n, {
                type: `button`,
                color: `secondary`,
                onClick: o,
                children: (0, g.jsx)(c, {
                    id: `chatgpt.wallet.enrollment.sign_in.button.label`,
                    defaultMessage: `Sign in`
                })
            })]
        }), t[4] = l, t[5] = s, t[6] = i, t[7] = o, t[8] = r, t[9] = m) : m = t[9];
        let _;
        return t[10] !== f || t[11] !== p || t[12] !== m ? (_ = (0, g.jsxs)(`div`, {
            className: f,
            children: [p, m]
        }), t[10] = f, t[11] = p, t[12] = m, t[13] = _) : _ = t[13], _
    }
}));
export {
    v as n, y as r, _ as t
};
//# sourceMappingURL=ed7002b4-mhb4ru0mvxp1bju7.js.map
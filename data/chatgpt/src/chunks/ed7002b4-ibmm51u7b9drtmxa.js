import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    Aw as n,
    K5 as r,
    Ow as i,
    eE as a,
    q5 as o
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as s,
    Nn as c,
    Rn as l,
    wn as u
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Nlt as d,
    jlt as f
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function p() {}

function m(e) {
    return e.preventDefault()
}
var h, g, _, v, y = e((() => {
    h = u(), a(), n(), d(), o(), l(), g = s(), _ = e => {
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
        return t[5] === n ? o = t[6] : (o = (0, g.jsx)(f, {
            open: !0,
            renderInPlace: !0,
            className: `z-40! h-dvh p-[env(safe-area-inset-top)_env(safe-area-inset-right)_env(safe-area-inset-bottom)_env(safe-area-inset-left)]`,
            onOpenChange: p,
            onEscapeKeyDown: m,
            accessibleTitle: a,
            children: (0, g.jsx)(f.Contents, {
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
                status: i,
                onRestart: a,
                onSignIn: o,
                onConnect: s,
                connecting: l,
                fullHeight: u
            } = e,
            d = (u === void 0 || u) && `min-h-full`,
            f;
        n[0] === d ? f = n[1] : (f = r(`flex flex-col items-center justify-center gap-4 p-6 text-center`, d), n[0] = d, n[1] = f);
        let p;
        n[2] === i ? p = n[3] : (p = (0, g.jsx)(`p`, {
            role: `status`,
            children: i === `loading` ? (0, g.jsx)(c, {
                id: `chatgpt.wallet.enrollment.status.loading`,
                defaultMessage: `Loading the secure card form…`
            }) : i === `changed` ? (0, g.jsx)(c, {
                id: `chatgpt.wallet.enrollment.status.changed`,
                defaultMessage: `Your ChatGPT sign-in changed. Restart enrollment to load a new secure card form.`
            }) : i === `setup-required` ? (0, g.jsx)(c, {
                id: `chatgpt.wallet.enrollment.status.connect_required`,
                defaultMessage: `Connect Wallet to add a card.`
            }) : (0, g.jsx)(c, {
                id: `chatgpt.wallet.enrollment.status.load_failed`,
                defaultMessage: `Wallet enrollment is unavailable. Try again.`
            })
        }), n[2] = i, n[3] = p);
        let m;
        n[4] !== l || n[5] !== s || n[6] !== a || n[7] !== o || n[8] !== i ? (m = i !== `loading` && (0, g.jsxs)(`div`, {
            className: `flex flex-wrap justify-center gap-3`,
            children: [i === `setup-required` ? (0, g.jsx)(t, {
                type: `button`,
                color: `primary`,
                disabled: l,
                onClick: s,
                children: (0, g.jsx)(c, {
                    id: `chatgpt.wallet.enrollment.connect.button`,
                    defaultMessage: `Connect Wallet`
                })
            }) : (0, g.jsx)(t, {
                type: `button`,
                color: `secondary`,
                onClick: a,
                children: (0, g.jsx)(c, {
                    id: `chatgpt.wallet.enrollment.restart.button`,
                    defaultMessage: `Restart enrollment`
                })
            }), (0, g.jsx)(t, {
                type: `button`,
                color: `secondary`,
                onClick: o,
                children: (0, g.jsx)(c, {
                    id: `chatgpt.wallet.enrollment.sign_in.button.label`,
                    defaultMessage: `Sign in`
                })
            })]
        }), n[4] = l, n[5] = s, n[6] = a, n[7] = o, n[8] = i, n[9] = m) : m = n[9];
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
//# sourceMappingURL=ed7002b4-ibmm51u7b9drtmxa.js.map
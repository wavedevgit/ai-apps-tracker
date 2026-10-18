import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as t,
    b5 as n,
    iw as r,
    kT as i,
    ow as a,
    y5 as o
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as s,
    Nn as c,
    Rn as l,
    wn as u
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Flt as d,
    Nlt as f
} from "./conversation-small-fym1zmu9zimymmm1.js";

function p() {}

function m(e) {
    return e.preventDefault()
}
var h, g, _, v, y = e((() => {
    h = u(), t(), a(), d(), n(), l(), g = s(), _ = e => {
        "use forget";
        let t = (0, h.c)(7),
            {
                children: n,
                onClose: i
            } = e;
        if (i) {
            let e;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, g.jsx)(c, {
                id: `elicitation.wallet.dialog.title`,
                defaultMessage: `Add a card to Wallet`
            }), t[0] = e) : e = t[0];
            let a;
            return t[1] !== n || t[2] !== i ? (a = (0, g.jsx)(r, {
                isOpen: !0,
                onClose: i,
                showCloseButton: !0,
                title: e,
                size: `large`,
                noPadding: !0,
                children: n
            }), t[1] = n, t[2] = i, t[3] = a) : a = t[3], a
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
        let t = (0, h.c)(14),
            {
                status: n,
                onRestart: r,
                onSignIn: a,
                onConnect: s,
                connecting: l,
                fullHeight: u
            } = e,
            d = (u === void 0 || u) && `min-h-full`,
            f;
        t[0] === d ? f = t[1] : (f = o(`flex flex-col items-center justify-center gap-4 p-6 text-center`, d), t[0] = d, t[1] = f);
        let p;
        t[2] === n ? p = t[3] : (p = (0, g.jsx)(`p`, {
            role: `status`,
            children: n === `loading` ? (0, g.jsx)(c, {
                id: `chatgpt.wallet.enrollment.status.loading`,
                defaultMessage: `Loading the secure card form…`
            }) : n === `changed` ? (0, g.jsx)(c, {
                id: `chatgpt.wallet.enrollment.status.changed`,
                defaultMessage: `Your ChatGPT sign-in changed. Restart enrollment to load a new secure card form.`
            }) : n === `setup-required` ? (0, g.jsx)(c, {
                id: `chatgpt.wallet.enrollment.status.connect_required`,
                defaultMessage: `Connect Wallet to add a card.`
            }) : (0, g.jsx)(c, {
                id: `chatgpt.wallet.enrollment.status.load_failed`,
                defaultMessage: `Wallet enrollment is unavailable. Try again.`
            })
        }), t[2] = n, t[3] = p);
        let m;
        t[4] !== l || t[5] !== s || t[6] !== r || t[7] !== a || t[8] !== n ? (m = n !== `loading` && (0, g.jsxs)(`div`, {
            className: `flex flex-wrap justify-center gap-3`,
            children: [n === `setup-required` ? (0, g.jsx)(i, {
                type: `button`,
                color: `primary`,
                disabled: l,
                onClick: s,
                children: (0, g.jsx)(c, {
                    id: `chatgpt.wallet.enrollment.connect.button`,
                    defaultMessage: `Connect Wallet`
                })
            }) : (0, g.jsx)(i, {
                type: `button`,
                color: `secondary`,
                onClick: r,
                children: (0, g.jsx)(c, {
                    id: `chatgpt.wallet.enrollment.restart.button`,
                    defaultMessage: `Restart enrollment`
                })
            }), (0, g.jsx)(i, {
                type: `button`,
                color: `secondary`,
                onClick: a,
                children: (0, g.jsx)(c, {
                    id: `chatgpt.wallet.enrollment.sign_in.button.label`,
                    defaultMessage: `Sign in`
                })
            })]
        }), t[4] = l, t[5] = s, t[6] = r, t[7] = a, t[8] = n, t[9] = m) : m = t[9];
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
//# sourceMappingURL=ed7002b4-d89e0f6uhka4yjsm.js.map
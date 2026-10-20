import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    JT as t,
    Xh as n,
    Yh as r,
    gN as i,
    hN as a,
    qT as o
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as s,
    Pn as c,
    Rn as l,
    Tn as u,
    Vn as d,
    zn as f
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Flt as p,
    Llt as m
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Jy as h,
    Yy as g
} from "./30901919-jory365vq6ym5crx.js";
var _, v, y, b, x = e((() => {
    _ = u(), t(), g(), r(), m(), a(), f(), v = d(), y = l({
        fullTitle: {
            id: `FullWorkspaceInvite.title.requestedSeatFilled`,
            defaultMessage: `Your requested seat has been filled`
        },
        fullDescription: {
            id: `FullWorkspaceInvite.description.requestOwnerApproval`,
            defaultMessage: `Send a request to the owner to join the workspace`
        },
        requestToJoin: {
            id: `FullWorkspaceInvite.button.requestToJoin`,
            defaultMessage: `Request to join`
        },
        requestSent: {
            id: `FullWorkspaceInvite.button.requestSent`,
            defaultMessage: `Request sent`
        },
        pendingTitle: {
            id: `FullWorkspaceInvite.title.pendingOwnerApproval`,
            defaultMessage: `Join request is pending owner approval`
        },
        pendingDescription: {
            id: `FullWorkspaceInvite.description.pendingOwnerApproval`,
            defaultMessage: `The owner of the workspace has to approve your invite first.`
        },
        backToChatGPT: {
            id: `FullWorkspaceInvite.button.backToChatGPT`,
            defaultMessage: `Back to ChatGPT`
        }
    }), b = e => {
        "use forget";
        let t = (0, _.c)(26),
            {
                state: r,
                onRequestToJoin: a,
                onClose: l,
                closeLabel: u
            } = e,
            d = s(),
            f = r === `pending`,
            m = f ? y.pendingTitle : y.fullTitle,
            g = f ? y.pendingDescription : y.fullDescription,
            b;
        t[0] !== d || t[1] !== m ? (b = d.formatMessage(m), t[0] = d, t[1] = m, t[2] = b) : b = t[2];
        let x;
        t[3] === l ? x = t[4] : (x = (0, v.jsx)(p.Header, {
            className: `pointer-events-none absolute! inset-x-0 border-b-0! bg-transparent!`,
            children: (0, v.jsx)(p.CloseButton, {
                className: `pointer-events-auto ms-auto`,
                onClick: l
            })
        }), t[3] = l, t[4] = x);
        let S;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, v.jsx)(`div`, {
            className: `bg-token-bg-tertiary text-token-text-primary flex h-10 w-10 items-center justify-center rounded-full`,
            children: (0, v.jsx)(n, {
                "aria-hidden": `true`,
                className: `icon`
            })
        }), t[5] = S) : S = t[5];
        let C;
        t[6] === m ? C = t[7] : (C = (0, v.jsx)(`h1`, {
            className: `text-token-text-primary text-base font-medium`,
            children: (0, v.jsx)(c, {
                ...m
            })
        }), t[6] = m, t[7] = C);
        let w;
        t[8] === g ? w = t[9] : (w = (0, v.jsx)(`p`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, v.jsx)(c, {
                ...g
            })
        }), t[8] = g, t[9] = w);
        let T;
        t[10] !== C || t[11] !== w ? (T = (0, v.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [C, w]
        }), t[10] = C, t[11] = w, t[12] = T) : T = t[12];
        let E;
        t[13] !== u || t[14] !== f || t[15] !== l || t[16] !== a || t[17] !== r ? (E = f ? (0, v.jsx)(o, {
            type: `button`,
            color: `secondary`,
            size: `large`,
            onClick: l,
            children: u ?? (0, v.jsx)(c, {
                ...y.backToChatGPT
            })
        }) : (0, v.jsx)(o, {
            type: `button`,
            color: `primary`,
            size: `large`,
            icon: r === `sent` ? h : void 0,
            loading: r === `requesting`,
            disabled: r === `sent`,
            onClick: a,
            children: (0, v.jsx)(c, {
                ...r === `sent` ? y.requestSent : y.requestToJoin
            })
        }), t[13] = u, t[14] = f, t[15] = l, t[16] = a, t[17] = r, t[18] = E) : E = t[18];
        let D;
        t[19] !== T || t[20] !== E ? (D = (0, v.jsx)(p.Contents, {
            className: `flex items-center justify-center p-6`,
            children: (0, v.jsxs)(`div`, {
                className: `flex w-full max-w-[400px] flex-col items-center gap-3 text-center`,
                children: [S, T, E]
            })
        }), t[19] = T, t[20] = E, t[21] = D) : D = t[21];
        let O;
        return t[22] !== b || t[23] !== x || t[24] !== D ? (O = (0, v.jsxs)(p, {
            open: !0,
            onOpenChange: i,
            accessibleTitle: b,
            children: [x, D]
        }), t[22] = b, t[23] = x, t[24] = D, t[25] = O) : O = t[25], O
    }
}));
export {
    x as n, b as t
};
//# sourceMappingURL=0c23dd89-hmqwmi5ycusp0fcv.js.map
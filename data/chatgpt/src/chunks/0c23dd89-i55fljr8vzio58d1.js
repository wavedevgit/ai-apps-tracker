import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    Qh as n,
    SN as r,
    Zh as i,
    eE as a,
    xN as o
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as s,
    Ln as c,
    Nn as l,
    Rn as u,
    wn as d,
    zn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Flt as p,
    Nlt as m
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Jy as h,
    Yy as g
} from "./30901919-r9pahacmzqudnt4f.js";
var _, v, y, b, x = e((() => {
    _ = d(), a(), g(), i(), p(), o(), u(), v = s(), y = c({
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
        let i = (0, _.c)(26),
            {
                state: a,
                onRequestToJoin: o,
                onClose: s,
                closeLabel: c
            } = e,
            u = f(),
            d = a === `pending`,
            p = d ? y.pendingTitle : y.fullTitle,
            g = d ? y.pendingDescription : y.fullDescription,
            b;
        i[0] !== u || i[1] !== p ? (b = u.formatMessage(p), i[0] = u, i[1] = p, i[2] = b) : b = i[2];
        let x;
        i[3] === s ? x = i[4] : (x = (0, v.jsx)(m.Header, {
            className: `pointer-events-none absolute! inset-x-0 border-b-0! bg-transparent!`,
            children: (0, v.jsx)(m.CloseButton, {
                className: `pointer-events-auto ms-auto`,
                onClick: s
            })
        }), i[3] = s, i[4] = x);
        let S;
        i[5] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, v.jsx)(`div`, {
            className: `bg-token-bg-tertiary text-token-text-primary flex h-10 w-10 items-center justify-center rounded-full`,
            children: (0, v.jsx)(n, {
                "aria-hidden": `true`,
                className: `icon`
            })
        }), i[5] = S) : S = i[5];
        let C;
        i[6] === p ? C = i[7] : (C = (0, v.jsx)(`h1`, {
            className: `text-token-text-primary text-base font-medium`,
            children: (0, v.jsx)(l, {
                ...p
            })
        }), i[6] = p, i[7] = C);
        let w;
        i[8] === g ? w = i[9] : (w = (0, v.jsx)(`p`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, v.jsx)(l, {
                ...g
            })
        }), i[8] = g, i[9] = w);
        let T;
        i[10] !== C || i[11] !== w ? (T = (0, v.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [C, w]
        }), i[10] = C, i[11] = w, i[12] = T) : T = i[12];
        let E;
        i[13] !== c || i[14] !== d || i[15] !== s || i[16] !== o || i[17] !== a ? (E = d ? (0, v.jsx)(t, {
            type: `button`,
            color: `secondary`,
            size: `large`,
            onClick: s,
            children: c ?? (0, v.jsx)(l, {
                ...y.backToChatGPT
            })
        }) : (0, v.jsx)(t, {
            type: `button`,
            color: `primary`,
            size: `large`,
            icon: a === `sent` ? h : void 0,
            loading: a === `requesting`,
            disabled: a === `sent`,
            onClick: o,
            children: (0, v.jsx)(l, {
                ...a === `sent` ? y.requestSent : y.requestToJoin
            })
        }), i[13] = c, i[14] = d, i[15] = s, i[16] = o, i[17] = a, i[18] = E) : E = i[18];
        let D;
        i[19] !== T || i[20] !== E ? (D = (0, v.jsx)(m.Contents, {
            className: `flex items-center justify-center p-6`,
            children: (0, v.jsxs)(`div`, {
                className: `flex w-full max-w-[400px] flex-col items-center gap-3 text-center`,
                children: [S, T, E]
            })
        }), i[19] = T, i[20] = E, i[21] = D) : D = i[21];
        let O;
        return i[22] !== b || i[23] !== x || i[24] !== D ? (O = (0, v.jsxs)(m, {
            open: !0,
            onOpenChange: r,
            accessibleTitle: b,
            children: [x, D]
        }), i[22] = b, i[23] = x, i[24] = D, i[25] = O) : O = i[25], O
    }
}));
export {
    x as n, b as t
};
//# sourceMappingURL=0c23dd89-i55fljr8vzio58d1.js.map
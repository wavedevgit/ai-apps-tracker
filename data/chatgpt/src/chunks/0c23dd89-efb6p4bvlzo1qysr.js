import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as t,
    Mh as n,
    QM as r,
    ZM as i,
    jh as a,
    kT as o
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as s,
    Ln as c,
    Nn as l,
    Rn as u,
    wn as d,
    zn as f
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Flt as p,
    Nlt as m
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Qy as h,
    Zy as g
} from "./30901919-e33mbl5u1y88w5wu.js";
var _, v, y, b, x = e((() => {
    _ = d(), t(), h(), a(), p(), i(), u(), v = s(), y = c({
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
                state: i,
                onRequestToJoin: a,
                onClose: s,
                closeLabel: c
            } = e,
            u = f(),
            d = i === `pending`,
            p = d ? y.pendingTitle : y.fullTitle,
            h = d ? y.pendingDescription : y.fullDescription,
            b;
        t[0] !== u || t[1] !== p ? (b = u.formatMessage(p), t[0] = u, t[1] = p, t[2] = b) : b = t[2];
        let x;
        t[3] === s ? x = t[4] : (x = (0, v.jsx)(m.Header, {
            className: `pointer-events-none absolute! inset-x-0 border-b-0! bg-transparent!`,
            children: (0, v.jsx)(m.CloseButton, {
                className: `pointer-events-auto ms-auto`,
                onClick: s
            })
        }), t[3] = s, t[4] = x);
        let S;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (S = (0, v.jsx)(`div`, {
            className: `bg-token-bg-tertiary text-token-text-primary flex h-10 w-10 items-center justify-center rounded-full`,
            children: (0, v.jsx)(n, {
                "aria-hidden": `true`,
                className: `icon`
            })
        }), t[5] = S) : S = t[5];
        let C;
        t[6] === p ? C = t[7] : (C = (0, v.jsx)(`h1`, {
            className: `text-token-text-primary text-base font-medium`,
            children: (0, v.jsx)(l, {
                ...p
            })
        }), t[6] = p, t[7] = C);
        let w;
        t[8] === h ? w = t[9] : (w = (0, v.jsx)(`p`, {
            className: `text-token-text-secondary text-sm`,
            children: (0, v.jsx)(l, {
                ...h
            })
        }), t[8] = h, t[9] = w);
        let T;
        t[10] !== C || t[11] !== w ? (T = (0, v.jsxs)(`div`, {
            className: `flex flex-col gap-1`,
            children: [C, w]
        }), t[10] = C, t[11] = w, t[12] = T) : T = t[12];
        let E;
        t[13] !== c || t[14] !== d || t[15] !== s || t[16] !== a || t[17] !== i ? (E = d ? (0, v.jsx)(o, {
            type: `button`,
            color: `secondary`,
            size: `large`,
            onClick: s,
            children: c ?? (0, v.jsx)(l, {
                ...y.backToChatGPT
            })
        }) : (0, v.jsx)(o, {
            type: `button`,
            color: `primary`,
            size: `large`,
            icon: i === `sent` ? g : void 0,
            loading: i === `requesting`,
            disabled: i === `sent`,
            onClick: a,
            children: (0, v.jsx)(l, {
                ...i === `sent` ? y.requestSent : y.requestToJoin
            })
        }), t[13] = c, t[14] = d, t[15] = s, t[16] = a, t[17] = i, t[18] = E) : E = t[18];
        let D;
        t[19] !== T || t[20] !== E ? (D = (0, v.jsx)(m.Contents, {
            className: `flex items-center justify-center p-6`,
            children: (0, v.jsxs)(`div`, {
                className: `flex w-full max-w-[400px] flex-col items-center gap-3 text-center`,
                children: [S, T, E]
            })
        }), t[19] = T, t[20] = E, t[21] = D) : D = t[21];
        let O;
        return t[22] !== b || t[23] !== x || t[24] !== D ? (O = (0, v.jsxs)(m, {
            open: !0,
            onOpenChange: r,
            accessibleTitle: b,
            children: [x, D]
        }), t[22] = b, t[23] = x, t[24] = D, t[25] = O) : O = t[25], O
    }
}));
export {
    x as n, b as t
};
//# sourceMappingURL=0c23dd89-efb6p4bvlzo1qysr.js.map
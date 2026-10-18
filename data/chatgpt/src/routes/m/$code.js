import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as t,
    Nrt as n,
    eh as r,
    fU as i,
    iat as a,
    ih as o,
    kT as s,
    pU as c,
    sat as l,
    tot as u
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as d,
    At as f,
    Bn as p,
    Nn as m,
    Pt as h,
    Rn as g,
    Ut as _,
    p as v,
    s as y,
    wn as b,
    zn as x
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    r as S,
    t as C
} from "./149834c7-ke43zu3bod0dbk2p.js";
var w, T, E, D, O, k, A, j = e((() => {
    d(), w = b(), o(), t(), S(), c(), n(), a(), y(), g(), T = p(), E = `Let’s start a chat together!`, D = `Connect and start a conversation on ChatGPT.`, O = `https://chatgpt.com/images/chatgpt-icon-512x512.png`, k = () => [{
        title: E
    }, {
        name: `description`,
        content: D
    }, {
        name: `robots`,
        content: `noindex,nofollow`
    }, {
        property: `og:type`,
        content: `website`
    }, {
        property: `og:site_name`,
        content: `ChatGPT`
    }, {
        property: `og:title`,
        content: E
    }, {
        property: `og:description`,
        content: D
    }, {
        property: `og:image`,
        content: O
    }, {
        property: `og:image:secure_url`,
        content: O
    }, {
        property: `og:image:width`,
        content: `512`
    }, {
        property: `og:image:height`,
        content: `512`
    }, {
        property: `og:image:alt`,
        content: E
    }, {
        name: `twitter:card`,
        content: `summary`
    }, {
        name: `twitter:site`,
        content: `@ChatGPTapp`
    }, {
        name: `twitter:title`,
        content: E
    }, {
        name: `twitter:description`,
        content: D
    }, {
        name: `twitter:image`,
        content: O
    }, {
        name: `twitter:image:alt`,
        content: E
    }], A = _(function() {
        "use forget";
        let e = (0, w.c)(43),
            {
                authStatus: t,
                code: n,
                inviter: a,
                workspaceMismatch: o
            } = f(),
            c = h(),
            d = x(),
            p;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = i(), e[0] = p) : p = e[0];
        let g = p,
            _, y;
        e[1] === n ? (_ = e[2], y = e[3]) : (_ = [`messaging`, `invite-links`, `accept`, n], y = () => C(n), e[1] = n, e[2] = _, e[3] = y);
        let b;
        e[4] === c ? b = e[5] : (b = e => {
            let {
                room_id: t
            } = e;
            c(`/messaging?room=${encodeURIComponent(t)}`)
        }, e[4] = c, e[5] = b);
        let S;
        e[6] === d ? S = e[7] : (S = e => {
            g.danger(l(e) ?? d.formatMessage({
                id: `chatgpt.messaging.invite.error.accept`,
                defaultMessage: `Unable to accept this invitation.`
            }))
        }, e[6] = d, e[7] = S);
        let E;
        e[8] !== _ || e[9] !== y || e[10] !== b || e[11] !== S ? (E = {
            mutationKey: _,
            mutationFn: y,
            onSuccess: b,
            onError: S
        }, e[8] = _, e[9] = y, e[10] = b, e[11] = S, e[12] = E) : E = e[12];
        let D = v(E),
            O;
        e[13] === a ? O = e[14] : (O = a == null ? null : (0, T.jsx)(r, {
            size: `large`,
            user: {
                name: a.name,
                picture: a.avatar_url
            }
        }), e[13] = a, e[14] = O);
        let k;
        e[15] === a ? k = e[16] : (k = (0, T.jsx)(`h1`, {
            className: `text-2xl font-semibold text-balance`,
            children: a == null ? (0, T.jsx)(m, {
                id: `chatgpt.messaging.invite.heading.generic`,
                defaultMessage: `Message on ChatGPT`
            }) : (0, T.jsx)(m, {
                id: `chatgpt.messaging.invite.heading.personalized`,
                defaultMessage: `Message {name} on ChatGPT`,
                values: {
                    name: a.name
                }
            })
        }), e[15] = a, e[16] = k);
        let A;
        e[17] !== t || e[18] !== o ? (A = (0, T.jsx)(`p`, {
            className: `text-token-text-secondary text-balance`,
            children: o && t === u.LoggedIn ? (0, T.jsx)(m, {
                id: `chatgpt.messaging.invite.description.workspace_mismatch`,
                defaultMessage: `Switch to the correct workspace to accept this invitation.`
            }) : (0, T.jsx)(m, {
                id: `chatgpt.messaging.invite.description.default`,
                defaultMessage: `Connect and start a conversation on ChatGPT.`
            })
        }), e[17] = t, e[18] = o, e[19] = A) : A = e[19];
        let j = o && t === u.LoggedIn,
            M;
        e[20] !== D || e[21] !== t || e[22] !== c || e[23] !== o ? (M = () => {
            if (t !== u.LoggedIn) {
                let e = `${window.location.pathname}${window.location.search}`;
                c(`/auth/login/?next=${encodeURIComponent(e)}`);
                return
            }!D.isPending && !o && D.mutate()
        }, e[20] = D, e[21] = t, e[22] = c, e[23] = o, e[24] = M) : M = e[24];
        let N;
        e[25] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, T.jsx)(m, {
            id: `chatgpt.messaging.invite.button.accept`,
            defaultMessage: `Start chatting`
        }), e[25] = N) : N = e[25];
        let P;
        e[26] !== D.isPending || e[27] !== M || e[28] !== j ? (P = (0, T.jsx)(s, {
            color: `primary`,
            disabled: j,
            loading: D.isPending,
            onClick: M,
            size: `large`,
            children: N
        }), e[26] = D.isPending, e[27] = M, e[28] = j, e[29] = P) : P = e[29];
        let F;
        e[30] === c ? F = e[31] : (F = () => c(`/`), e[30] = c, e[31] = F);
        let I;
        e[32] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, T.jsx)(m, {
            id: `chatgpt.messaging.invite.button.dismiss`,
            defaultMessage: `Not now`
        }), e[32] = I) : I = e[32];
        let L;
        e[33] === F ? L = e[34] : (L = (0, T.jsx)(s, {
            color: `ghost`,
            onClick: F,
            size: `large`,
            children: I
        }), e[33] = F, e[34] = L);
        let R;
        e[35] !== P || e[36] !== L ? (R = (0, T.jsxs)(`div`, {
            className: `mt-2 flex flex-col items-center gap-2`,
            children: [P, L]
        }), e[35] = P, e[36] = L, e[37] = R) : R = e[37];
        let z;
        return e[38] !== R || e[39] !== O || e[40] !== k || e[41] !== A ? (z = (0, T.jsx)(`main`, {
            className: `flex min-h-dvh items-center justify-center px-6 text-center`,
            children: (0, T.jsxs)(`div`, {
                className: `flex max-w-md flex-col items-center gap-4`,
                children: [O, k, A, R]
            })
        }), e[38] = R, e[39] = O, e[40] = k, e[41] = A, e[42] = z) : z = e[42], z
    })
}));
e((() => {
    j()
}))();
export {
    A as
    default, k as meta
};
//# sourceMappingURL=m._code-kizfh4ae.js.map
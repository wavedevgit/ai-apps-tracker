const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c87b043a-f8kfsga9ie9wjx0m.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/c2675c8c-oz03twoan08d72ud.js", "assets/82782bc9-b4xbouzwkkyrfqq2.js", "assets/8b34dbc2-lmwubajnld74ksfm.js", "assets/global-modals-dxg9ukpk.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    Ga as n,
    I7 as r,
    Knt as i,
    M7 as a,
    Rz as o,
    U1 as s,
    Wnt as c,
    a2 as l,
    c6 as u,
    cot as d,
    eE as f,
    f6 as p,
    not as m,
    o2 as h,
    q1 as g,
    qa as _,
    zz as v
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as y,
    N as b,
    Nn as x,
    Rn as S,
    cn as C,
    ln as w,
    s as T,
    wn as E,
    zn as D
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $at as O,
    Bst as k,
    Vst as A,
    yat as j
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    CC as M,
    SC as N
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    Hx as P,
    Sa as F,
    _S as I,
    fS as L,
    xa as R
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    Gx as z,
    Ux as B,
    sS as V
} from "./8b34dbc2-lmwubajnld74ksfm.js";

function H(e) {
    if (!(e instanceof Error) || !e.message) return null;
    let t = e instanceof m && typeof e.detail?.message == `string` ? e.detail.message : e.message;
    try {
        let e = L({
            type: I(),
            msg: I()
        }).safeParse(JSON.parse(t));
        if (e.success) return e.data.msg
    } catch {}
    return t
}
var U = e((() => {
    d(), P()
}));

function W(e) {
    let {
        open: t,
        onOpenChange: r,
        isSubmitting: i,
        ...a
    } = e;
    return (0, Y.jsx)(n, {
        for: X,
        withProps: {
            ...a,
            open: t,
            onOpenChange: r,
            isSubmitting: i
        },
        open: t,
        disableLightDismiss: i,
        onClose: () => r(!1)
    })
}

function G(e) {
    let {
        leadingControl: t,
        trailingControl: n,
        ...r
    } = e;
    return (0, Y.jsx)(`div`, {
        className: `relative`,
        children: (0, Y.jsx)(k, {
            ...r,
            name: r.id,
            ariaLabel: !1,
            color: `tertiary`,
            autoCapitalize: `off`,
            containerInputClassName: `ps-4 pe-6`,
            insideContainerChildren: (0, Y.jsxs)(Y.Fragment, {
                children: [(0, Y.jsx)(`span`, {
                    className: `pointer-events-none absolute inset-y-0 start-0 flex items-center`,
                    children: t
                }), (0, Y.jsx)(`span`, {
                    className: `pointer-events-none absolute inset-y-0 end-0 flex items-center`,
                    children: n
                })]
            })
        })
    })
}

function K(e) {
    let {
        variant: n,
        ...r
    } = e;
    return (0, Y.jsx)(t, {
        ...r,
        color: n
    })
}

function q(e) {
    return (0, Y.jsx)(`p`, {
        className: `border-token-border-status-warning bg-token-bg-status-warning text-token-text-status-warning rounded-2xl border px-4 py-3 text-sm leading-5`,
        children: e
    })
}
var J, Y, X, Z, Q, $ = e((() => {
    J = E(), f(), A(), v(), _(), M(), R(), g(), i(), r(), u(), V(), j(), h(), T(), S(), U(), Y = y(), w(), X = l(() => C(() => import(`./c87b043a-f8kfsga9ie9wjx0m.js`).then(e => e.ProfileV2UsernameDialogContent), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))), Z = e => {
        "use forget";
        let t = (0, J.c)(15),
            {
                value: n,
                accountId: r,
                pageScope: i,
                isSaving: a,
                isProfileEditing: o,
                presentation: s,
                onEditStarted: l,
                onSaved: u
            } = e,
            d = s === void 0 ? `inline` : s,
            f = b(),
            p;
        t[0] === i ? p = t[1] : (p = () => c.logStructuredEvent(`CodexProfileEditEvent`, {
            pageScope: i,
            action: B.CODEX_PROFILE_EDIT_ACTION_USERNAME_CHANGE_STARTED
        }), t[0] = i, t[1] = p);
        let m;
        t[2] !== u || t[3] !== i || t[4] !== f ? (m = async e => {
            let t;
            try {
                t = await F(e)
            } catch (e) {
                let t = e;
                throw c.logStructuredEvent(`CodexProfileEditEvent`, {
                    pageScope: i,
                    action: B.CODEX_PROFILE_EDIT_ACTION_SAVE_FAILED,
                    profileDetailsUpdateApiStatus: z.CODEX_PROFILE_EDIT_SAVE_API_STATUS_NOT_ATTEMPTED,
                    usernameUpdateApiStatus: z.CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED
                }), t
            }
            f.invalidateQueries({
                queryKey: [`account-username`]
            }), c.logStructuredEvent(`CodexProfileEditEvent`, {
                pageScope: i,
                action: B.CODEX_PROFILE_EDIT_ACTION_SAVE_SUCCEEDED,
                usernameUpdateApiStatus: z.CODEX_PROFILE_EDIT_SAVE_API_STATUS_SUCCEEDED
            }), u(t)
        }, t[2] = u, t[3] = i, t[4] = f, t[5] = m) : m = t[5];
        let h;
        return t[6] !== r || t[7] !== o || t[8] !== a || t[9] !== l || t[10] !== d || t[11] !== p || t[12] !== m || t[13] !== n ? (h = (0, Y.jsx)(Q, {
            value: n,
            accountId: r,
            isSaving: a,
            isProfileEditing: o,
            presentation: d,
            onEditStarted: l,
            onChangeStarted: p,
            onSave: m
        }), t[6] = r, t[7] = o, t[8] = a, t[9] = l, t[10] = d, t[11] = p, t[12] = m, t[13] = n, t[14] = h) : h = t[14], h
    }, Q = e => {
        "use forget";
        let t = (0, J.c)(24),
            {
                value: n,
                accountId: r,
                isSaving: i,
                isProfileEditing: c,
                presentation: l,
                onClose: u,
                onEditStarted: d,
                onChangeStarted: f,
                onSave: m
            } = e,
            h = c !== void 0 && c,
            g = l === void 0 ? `inline` : l,
            _ = D(),
            v = b(),
            y = g === `dialog`,
            S;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (S = p(s()?.planType), t[0] = S) : S = t[0];
        let C;
        t[1] !== i || t[2] !== g ? (C = g === `inline` ? void 0 : e => {
            let {
                children: t,
                ...n
            } = e;
            return g === `dialog` ? null : (0, Y.jsxs)(`button`, {
                ...n,
                type: `button`,
                disabled: i,
                className: `interactive-button interactive-bg-secondary flex w-full items-center justify-between gap-4 px-4 py-3 text-sm`,
                children: [(0, Y.jsx)(x, {
                    id: `profile.usernameInputLabel`,
                    defaultMessage: `Username`
                }), (0, Y.jsxs)(`span`, {
                    className: `text-token-text-secondary flex min-w-0 items-center gap-2`,
                    children: [(0, Y.jsx)(`span`, {
                        className: `truncate`,
                        children: t
                    }), (0, Y.jsx)(N, {
                        className: `icon-sm shrink-0`
                    })]
                })]
            })
        }, t[1] = i, t[2] = g, t[3] = C) : C = t[3];
        let w;
        t[4] !== r || t[5] !== v ? (w = e => v.fetchQuery({
            queryKey: [`profile`, `username-availability`, r, e],
            queryFn: () => a.safePost(`/wham/profiles/username/check`, {
                additionalHeaders: {
                    "ChatGPT-Account-ID": r
                },
                requestBody: {
                    username: e
                }
            }),
            retry: !1,
            staleTime: 1e4
        }), t[4] = r, t[5] = v, t[6] = w) : w = t[6];
        let T;
        t[7] === _ ? T = t[8] : (T = e => H(e) ?? _.formatMessage({
            id: `profile.usernameUpdateError`,
            defaultMessage: `Unable to update username`
        }), t[7] = _, t[8] = T);
        let E;
        t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, Y.jsx)(o, {
            className: `size-4`
        }), t[9] = E) : E = t[9];
        let k;
        return t[10] !== r || t[11] !== _ || t[12] !== h || t[13] !== i || t[14] !== f || t[15] !== u || t[16] !== d || t[17] !== m || t[18] !== y || t[19] !== C || t[20] !== w || t[21] !== T || t[22] !== n ? (k = (0, Y.jsx)(O, {
            defaultOpen: y,
            showSiteUrlWarning: !S,
            onClose: u,
            value: n,
            accountId: r,
            isSaving: i,
            isProfileEditing: h,
            onEditStarted: d,
            intl: _,
            renderTrigger: C,
            checkAvailability: w,
            formatSaveError: T,
            onChangeStarted: f,
            onSave: m,
            renderDialog: W,
            renderInput: G,
            renderButton: K,
            renderWarning: q,
            spinner: E
        }), t[10] = r, t[11] = _, t[12] = h, t[13] = i, t[14] = f, t[15] = u, t[16] = d, t[17] = m, t[18] = y, t[19] = C, t[20] = w, t[21] = T, t[22] = n, t[23] = k) : k = t[23], k
    }
}));
export {
    U as a, H as i, Z as n, $ as r, Q as t
};
//# sourceMappingURL=57f927e1-gwn3ez6kc68y24a7.js.map
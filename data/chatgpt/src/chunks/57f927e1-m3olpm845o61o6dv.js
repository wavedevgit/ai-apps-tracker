const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c87b043a-nan09ked4sl1idsr.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-lxa3wniynbx9ka2a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-kzsalymynzuddxee.js", "assets/30901919-i8ip8r0znvgcym38.js", "assets/c470f5ab-poh7ivjvb3j2jlfz.js", "assets/0e5afe53-dz59mkfveu52getp.js", "assets/conversation-small-bwtqiuwj.css", "assets/c2675c8c-ossqum2x3eut0sh8.js", "assets/82782bc9-idqd90kxtp4zogpp.js", "assets/8b34dbc2-ba6wt3zxvh7jce7p.js", "assets/global-modals-lv5n3ujm.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bat as t,
    F7 as n,
    J3 as r,
    JT as i,
    Ka as a,
    Mz as o,
    P1 as s,
    Pat as c,
    Q3 as l,
    R1 as u,
    Snt as d,
    Wa as f,
    X0 as p,
    YT as m,
    Z0 as h,
    jz as g,
    wnt as _,
    z7 as v
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
    Kst as O,
    Tat as k,
    aot as A,
    qst as j
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    TC as M,
    wC as N
} from "./30901919-i8ip8r0znvgcym38.js";
import {
    Lx as P,
    ba as F,
    fS as I,
    sS as L,
    ya as R
} from "./c2675c8c-ossqum2x3eut0sh8.js";
import {
    Bx as z,
    Hx as B,
    iS as V
} from "./8b34dbc2-ba6wt3zxvh7jce7p.js";

function H(e) {
    if (!(e instanceof Error) || !e.message) return null;
    let t = e instanceof c && typeof e.detail?.message == `string` ? e.detail.message : e.message;
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
    t(), P()
}));

function W(e) {
    let {
        open: t,
        onOpenChange: n,
        isSubmitting: r,
        ...i
    } = e;
    return (0, Y.jsx)(f, {
        for: X,
        withProps: {
            ...i,
            open: t,
            onOpenChange: n,
            isSubmitting: r
        },
        open: t,
        disableLightDismiss: r,
        onClose: () => n(!1)
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
        children: (0, Y.jsx)(O, {
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
        variant: t,
        ...n
    } = e;
    return (0, Y.jsx)(i, {
        ...n,
        color: t
    })
}

function q(e) {
    return (0, Y.jsx)(`p`, {
        className: `border-token-border-status-warning bg-token-bg-status-warning text-token-text-status-warning rounded-2xl border px-4 py-3 text-sm leading-5`,
        children: e
    })
}
var J, Y, X, Z, Q, $ = e((() => {
    J = E(), m(), j(), o(), a(), M(), R(), u(), _(), v(), r(), V(), k(), h(), T(), S(), U(), Y = y(), w(), X = p(() => C(() => import(`./c87b043a-nan09ked4sl1idsr.js`).then(e => e.ProfileV2UsernameDialogContent), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))), Z = e => {
        "use forget";
        let t = (0, J.c)(15),
            {
                value: n,
                accountId: r,
                pageScope: i,
                isSaving: a,
                isProfileEditing: o,
                presentation: s,
                onEditStarted: c,
                onSaved: l
            } = e,
            u = s === void 0 ? `inline` : s,
            f = b(),
            p;
        t[0] === i ? p = t[1] : (p = () => d.logStructuredEvent(`CodexProfileEditEvent`, {
            pageScope: i,
            action: z.CODEX_PROFILE_EDIT_ACTION_USERNAME_CHANGE_STARTED
        }), t[0] = i, t[1] = p);
        let m;
        t[2] !== l || t[3] !== i || t[4] !== f ? (m = async e => {
            let t;
            try {
                t = await F(e)
            } catch (e) {
                let t = e;
                throw d.logStructuredEvent(`CodexProfileEditEvent`, {
                    pageScope: i,
                    action: z.CODEX_PROFILE_EDIT_ACTION_SAVE_FAILED,
                    profileDetailsUpdateApiStatus: B.CODEX_PROFILE_EDIT_SAVE_API_STATUS_NOT_ATTEMPTED,
                    usernameUpdateApiStatus: B.CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED
                }), t
            }
            f.invalidateQueries({
                queryKey: [`account-username`]
            }), d.logStructuredEvent(`CodexProfileEditEvent`, {
                pageScope: i,
                action: z.CODEX_PROFILE_EDIT_ACTION_SAVE_SUCCEEDED,
                usernameUpdateApiStatus: B.CODEX_PROFILE_EDIT_SAVE_API_STATUS_SUCCEEDED
            }), l(t)
        }, t[2] = l, t[3] = i, t[4] = f, t[5] = m) : m = t[5];
        let h;
        return t[6] !== r || t[7] !== o || t[8] !== a || t[9] !== c || t[10] !== u || t[11] !== p || t[12] !== m || t[13] !== n ? (h = (0, Y.jsx)(Q, {
            value: n,
            accountId: r,
            isSaving: a,
            isProfileEditing: o,
            presentation: u,
            onEditStarted: c,
            onChangeStarted: p,
            onSave: m
        }), t[6] = r, t[7] = o, t[8] = a, t[9] = c, t[10] = u, t[11] = p, t[12] = m, t[13] = n, t[14] = h) : h = t[14], h
    }, Q = e => {
        "use forget";
        let t = (0, J.c)(24),
            {
                value: r,
                accountId: i,
                isSaving: a,
                isProfileEditing: o,
                presentation: c,
                onClose: u,
                onEditStarted: d,
                onChangeStarted: f,
                onSave: p
            } = e,
            m = o !== void 0 && o,
            h = c === void 0 ? `inline` : c,
            _ = D(),
            v = b(),
            y = h === `dialog`,
            S;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (S = l(s()?.planType), t[0] = S) : S = t[0];
        let C;
        t[1] !== a || t[2] !== h ? (C = h === `inline` ? void 0 : e => {
            let {
                children: t,
                ...n
            } = e;
            return h === `dialog` ? null : (0, Y.jsxs)(`button`, {
                ...n,
                type: `button`,
                disabled: a,
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
        }, t[1] = a, t[2] = h, t[3] = C) : C = t[3];
        let w;
        t[4] !== i || t[5] !== v ? (w = e => v.fetchQuery({
            queryKey: [`profile`, `username-availability`, i, e],
            queryFn: () => n.safePost(`/wham/profiles/username/check`, {
                additionalHeaders: {
                    "ChatGPT-Account-ID": i
                },
                requestBody: {
                    username: e
                }
            }),
            retry: !1,
            staleTime: 1e4
        }), t[4] = i, t[5] = v, t[6] = w) : w = t[6];
        let T;
        t[7] === _ ? T = t[8] : (T = e => H(e) ?? _.formatMessage({
            id: `profile.usernameUpdateError`,
            defaultMessage: `Unable to update username`
        }), t[7] = _, t[8] = T);
        let E;
        t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (E = (0, Y.jsx)(g, {
            className: `size-4`
        }), t[9] = E) : E = t[9];
        let O;
        return t[10] !== i || t[11] !== _ || t[12] !== m || t[13] !== a || t[14] !== f || t[15] !== u || t[16] !== d || t[17] !== p || t[18] !== y || t[19] !== C || t[20] !== w || t[21] !== T || t[22] !== r ? (O = (0, Y.jsx)(A, {
            defaultOpen: y,
            showSiteUrlWarning: !S,
            onClose: u,
            value: r,
            accountId: i,
            isSaving: a,
            isProfileEditing: m,
            onEditStarted: d,
            intl: _,
            renderTrigger: C,
            checkAvailability: w,
            formatSaveError: T,
            onChangeStarted: f,
            onSave: p,
            renderDialog: W,
            renderInput: G,
            renderButton: K,
            renderWarning: q,
            spinner: E
        }), t[10] = i, t[11] = _, t[12] = m, t[13] = a, t[14] = f, t[15] = u, t[16] = d, t[17] = p, t[18] = y, t[19] = C, t[20] = w, t[21] = T, t[22] = r, t[23] = O) : O = t[23], O
    }
}));
export {
    U as a, H as i, Z as n, $ as r, Q as t
};
//# sourceMappingURL=57f927e1-m3olpm845o61o6dv.js.map
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c87b043a-jgv6dtsqolzx5oa9.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/global-modals-njebr7y8.css"]))) => i.map(i => d[i]);
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as t,
    Btt as n,
    C0 as r,
    Ga as i,
    Htt as a,
    Qit as o,
    S0 as s,
    Ua as c,
    a7 as l,
    dz as u,
    fz as d,
    iat as f,
    kT as p,
    l7 as m
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as h,
    N as g,
    Nn as _,
    Rn as v,
    cn as y,
    ln as b,
    s as x,
    wn as S,
    zn as C
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Bst as w,
    Qat as T,
    vat as E,
    zst as D
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    TC as O,
    wC as k
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    BS as A,
    FS as j,
    _a as M,
    dS as N,
    va as P
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    Bx as F,
    Hx as I,
    iS as L
} from "./8b34dbc2-gf9wnwcahty27ylx.js";

function R(e) {
    if (!(e instanceof Error) || !e.message) return null;
    let t = e instanceof o && typeof e.detail?.message == `string` ? e.detail.message : e.message;
    try {
        let e = j({
            type: A(),
            msg: A()
        }).safeParse(JSON.parse(t));
        if (e.success) return e.data.msg
    } catch {}
    return t
}
var z = e((() => {
    f(), N()
}));

function B(e) {
    let {
        open: t,
        onOpenChange: n,
        isSubmitting: r,
        ...i
    } = e;
    return (0, G.jsx)(c, {
        for: K,
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

function V(e) {
    let {
        leadingControl: t,
        trailingControl: n,
        ...r
    } = e;
    return (0, G.jsx)(`div`, {
        className: `relative`,
        children: (0, G.jsx)(D, {
            ...r,
            name: r.id,
            ariaLabel: !1,
            color: `tertiary`,
            autoCapitalize: `off`,
            containerInputClassName: `ps-4 pe-6`,
            insideContainerChildren: (0, G.jsxs)(G.Fragment, {
                children: [(0, G.jsx)(`span`, {
                    className: `pointer-events-none absolute inset-y-0 start-0 flex items-center`,
                    children: t
                }), (0, G.jsx)(`span`, {
                    className: `pointer-events-none absolute inset-y-0 end-0 flex items-center`,
                    children: n
                })]
            })
        })
    })
}

function H(e) {
    let {
        variant: t,
        ...n
    } = e;
    return (0, G.jsx)(p, {
        ...n,
        color: t
    })
}

function U(e) {
    return (0, G.jsx)(`p`, {
        className: `border-token-border-status-warning bg-token-bg-status-warning text-token-text-status-warning rounded-2xl border px-4 py-3 text-sm leading-5`,
        children: e
    })
}
var W, G, K, q, J, Y = e((() => {
    W = S(), t(), w(), d(), i(), O(), M(), a(), m(), L(), E(), r(), x(), v(), z(), G = h(), b(), K = s(() => y(() => import(`./c87b043a-jgv6dtsqolzx5oa9.js`).then(e => e.ProfileV2UsernameDialogContent), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))), q = e => {
        "use forget";
        let t = (0, W.c)(15),
            {
                value: r,
                accountId: i,
                pageScope: a,
                isSaving: o,
                isProfileEditing: s,
                presentation: c,
                onEditStarted: l,
                onSaved: u
            } = e,
            d = c === void 0 ? `inline` : c,
            f = g(),
            p;
        t[0] === a ? p = t[1] : (p = () => n.logStructuredEvent(`CodexProfileEditEvent`, {
            pageScope: a,
            action: F.CODEX_PROFILE_EDIT_ACTION_USERNAME_CHANGE_STARTED
        }), t[0] = a, t[1] = p);
        let m;
        t[2] !== u || t[3] !== a || t[4] !== f ? (m = async e => {
            let t;
            try {
                t = await P(e)
            } catch (e) {
                let t = e;
                throw n.logStructuredEvent(`CodexProfileEditEvent`, {
                    pageScope: a,
                    action: F.CODEX_PROFILE_EDIT_ACTION_SAVE_FAILED,
                    profileDetailsUpdateApiStatus: I.CODEX_PROFILE_EDIT_SAVE_API_STATUS_NOT_ATTEMPTED,
                    usernameUpdateApiStatus: I.CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED
                }), t
            }
            f.invalidateQueries({
                queryKey: [`account-username`]
            }), n.logStructuredEvent(`CodexProfileEditEvent`, {
                pageScope: a,
                action: F.CODEX_PROFILE_EDIT_ACTION_SAVE_SUCCEEDED,
                usernameUpdateApiStatus: I.CODEX_PROFILE_EDIT_SAVE_API_STATUS_SUCCEEDED
            }), u(t)
        }, t[2] = u, t[3] = a, t[4] = f, t[5] = m) : m = t[5];
        let h;
        return t[6] !== i || t[7] !== s || t[8] !== o || t[9] !== l || t[10] !== d || t[11] !== p || t[12] !== m || t[13] !== r ? (h = (0, G.jsx)(J, {
            value: r,
            accountId: i,
            isSaving: o,
            isProfileEditing: s,
            presentation: d,
            onEditStarted: l,
            onChangeStarted: p,
            onSave: m
        }), t[6] = i, t[7] = s, t[8] = o, t[9] = l, t[10] = d, t[11] = p, t[12] = m, t[13] = r, t[14] = h) : h = t[14], h
    }, J = e => {
        "use forget";
        let t = (0, W.c)(23),
            {
                value: n,
                accountId: r,
                isSaving: i,
                isProfileEditing: a,
                presentation: o,
                onClose: s,
                onEditStarted: c,
                onChangeStarted: d,
                onSave: f
            } = e,
            p = a !== void 0 && a,
            m = o === void 0 ? `inline` : o,
            h = C(),
            v = g(),
            y = m === `dialog`,
            b;
        t[0] !== i || t[1] !== m ? (b = m === `inline` ? void 0 : e => {
            let {
                children: t,
                ...n
            } = e;
            return m === `dialog` ? null : (0, G.jsxs)(`button`, {
                ...n,
                type: `button`,
                disabled: i,
                className: `interactive-button interactive-bg-secondary flex w-full items-center justify-between gap-4 px-4 py-3 text-sm`,
                children: [(0, G.jsx)(_, {
                    id: `profile.usernameInputLabel`,
                    defaultMessage: `Username`
                }), (0, G.jsxs)(`span`, {
                    className: `text-token-text-secondary flex min-w-0 items-center gap-2`,
                    children: [(0, G.jsx)(`span`, {
                        className: `truncate`,
                        children: t
                    }), (0, G.jsx)(k, {
                        className: `icon-sm shrink-0`
                    })]
                })]
            })
        }, t[0] = i, t[1] = m, t[2] = b) : b = t[2];
        let x;
        t[3] !== r || t[4] !== v ? (x = e => v.fetchQuery({
            queryKey: [`profile`, `username-availability`, r, e],
            queryFn: () => l.safePost(`/wham/profiles/username/check`, {
                additionalHeaders: {
                    "ChatGPT-Account-ID": r
                },
                requestBody: {
                    username: e
                }
            }),
            retry: !1,
            staleTime: 1e4
        }), t[3] = r, t[4] = v, t[5] = x) : x = t[5];
        let S;
        t[6] === h ? S = t[7] : (S = e => R(e) ?? h.formatMessage({
            id: `profile.usernameUpdateError`,
            defaultMessage: `Unable to update username`
        }), t[6] = h, t[7] = S);
        let w;
        t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, G.jsx)(u, {
            className: `size-4`
        }), t[8] = w) : w = t[8];
        let E;
        return t[9] !== r || t[10] !== h || t[11] !== p || t[12] !== i || t[13] !== d || t[14] !== s || t[15] !== c || t[16] !== f || t[17] !== y || t[18] !== b || t[19] !== x || t[20] !== S || t[21] !== n ? (E = (0, G.jsx)(T, {
            defaultOpen: y,
            onClose: s,
            value: n,
            accountId: r,
            isSaving: i,
            isProfileEditing: p,
            onEditStarted: c,
            intl: h,
            renderTrigger: b,
            checkAvailability: x,
            formatSaveError: S,
            onChangeStarted: d,
            onSave: f,
            renderDialog: B,
            renderInput: V,
            renderButton: H,
            renderWarning: U,
            spinner: w
        }), t[9] = r, t[10] = h, t[11] = p, t[12] = i, t[13] = d, t[14] = s, t[15] = c, t[16] = f, t[17] = y, t[18] = b, t[19] = x, t[20] = S, t[21] = n, t[22] = E) : E = t[22], E
    }
}));
export {
    z as a, R as i, q as n, Y as r, J as t
};
//# sourceMappingURL=57f927e1-ie9h87ux00exfn9m.js.map
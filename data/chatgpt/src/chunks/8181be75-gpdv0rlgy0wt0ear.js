import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as t,
    F7 as n,
    R1 as r,
    Z1 as i,
    eK as a,
    rK as o,
    z7 as s,
    zU as c
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as l,
    Ln as u,
    N as d,
    Rn as f,
    p,
    s as m,
    wn as h,
    zn as g
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as _,
    t as v
} from "./dc59de7a-lbrtz4lg7x7ky5wo.js";
import {
    o as y,
    r as b,
    s as x
} from "./1212b029-bzpt8wgzxcjp6bg1.js";
import {
    n as S,
    t as C
} from "./403cbcf1-orwpr43bezcg48g3.js";

function w(e) {
    "use forget";
    let t = (0, E.c)(35),
        {
            workspaceId: r,
            includeUsageBased: a,
            includeProlite: s,
            disabled: l,
            triggerClassName: u,
            contentClassName: f,
            triggerId: m,
            ariaLabelledBy: h,
            analyticsSurface: _,
            firstChatgptSeatPurchaseEntrypoint: y
        } = e,
        C = l !== void 0 && l,
        w = g(),
        k = d(),
        A = i(),
        {
            data: j,
            isPending: M
        } = o(r),
        N;
    t[0] === r ? N = t[1] : (N = e => {
        let {
            defaultSeatType: t
        } = e;
        return n.safePost(`/accounts/{account_id}/settings/default_seat_type`, {
            parameters: {
                path: {
                    account_id: r
                }
            },
            requestBody: {
                value: t
            }
        })
    }, t[0] = r, t[1] = N);
    let P;
    t[2] !== w || t[3] !== k || t[4] !== r ? (P = () => {
        k.invalidateQueries({
            queryKey: [`workspace-settings`, r]
        }), c().success(w.formatMessage(O.defaultSeatTypeUpdatedToast), {
            duration: 3
        })
    }, t[2] = w, t[3] = k, t[4] = r, t[5] = P) : P = t[5];
    let F;
    t[6] !== N || t[7] !== P ? (F = {
        mutationFn: N,
        onSuccess: P,
        onError: T
    }, t[6] = N, t[7] = P, t[8] = F) : F = t[8];
    let {
        mutateAsync: I,
        isPending: L
    } = p(F), R = j?.default_seat_type, z;
    t[9] !== s || t[10] !== a || t[11] !== R ? (z = x(R, {
        includeUsageBased: a,
        includeProlite: s,
        preserveProlite: !0
    }), t[9] = s, t[10] = a, t[11] = R, t[12] = z) : z = t[12];
    let B = z,
        V = C || M || L,
        H;
    t[13] !== _ || t[14] !== B || t[15] !== I || t[16] !== r ? (H = async e => {
        await I({
            defaultSeatType: e
        }), S({
            workspaceId: r,
            previousSeatType: B,
            nextSeatType: e,
            surface: _
        })
    }, t[13] = _, t[14] = B, t[15] = I, t[16] = r, t[17] = H) : H = t[17];
    let U = H,
        W = R ?? `default`,
        G;
    t[18] !== B || t[19] !== y || t[20] !== U || t[21] !== A ? (G = async e => e === B ? !1 : e === "default" && B !== "default" ? v({
        workspace: A,
        introducedDefaultSeatCount: 0,
        entrypoint: y,
        onContinue: async () => {
            await U(e)
        }
    }) : (await U(e), !0), t[18] = B, t[19] = y, t[20] = U, t[21] = A, t[22] = G) : G = t[22];
    let K;
    return t[23] !== h || t[24] !== f || t[25] !== B || t[26] !== s || t[27] !== a || t[28] !== V || t[29] !== W || t[30] !== G || t[31] !== u || t[32] !== m || t[33] !== r ? (K = (0, D.jsx)(b, {
        workspaceId: r,
        disabled: V,
        currentSeatType: B,
        includeUsageBased: a,
        includeProlite: s,
        preserveProlite: !0,
        triggerClassName: u,
        contentClassName: f,
        triggerId: m,
        ariaLabelledBy: h,
        onUpdateSeatType: G
    }, W), t[23] = h, t[24] = f, t[25] = B, t[26] = s, t[27] = a, t[28] = V, t[29] = W, t[30] = G, t[31] = u, t[32] = m, t[33] = r, t[34] = K) : K = t[34], K
}

function T(e) {
    c().danger(e.message, {
        toastId: `workspace_default_seat_type`,
        loggingTitle: e.message,
        loggingDescription: `Workspace default seat type update failed`
    })
}
var E, D, O, k = e((() => {
    E = h(), _(), y(), C(), a(), r(), t(), s(), m(), f(), D = l(), O = u({
        defaultSeatTypeUpdatedToast: {
            id: `workspaceIdentity.defaultSeatTypeUpdatedToast`,
            defaultMessage: `Default workspace seat updated`
        }
    })
}));
export {
    k as n, w as t
};
//# sourceMappingURL=8181be75-gpdv0rlgy0wt0ear.js.map
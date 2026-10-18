import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AG as t,
    C1 as n,
    DG as r,
    a7 as i,
    fU as a,
    l7 as o,
    pU as s,
    u1 as c
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as l,
    Ln as u,
    N as d,
    Rn as f,
    p,
    s as m,
    wn as h,
    zn as g
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    n as _,
    t as v
} from "./dc59de7a-nk7egxw6p890u8ee.js";
import {
    o as y,
    r as b,
    s as x
} from "./1212b029-kgcj3fakl8vwct7x.js";
import {
    n as S,
    t as C
} from "./403cbcf1-nql5m13w29o3y5uo.js";

function w(e) {
    "use forget";
    let r = (0, E.c)(35),
        {
            workspaceId: o,
            includeUsageBased: s,
            includeProlite: c,
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
        A = n(),
        {
            data: j,
            isPending: M
        } = t(o),
        N;
    r[0] === o ? N = r[1] : (N = e => {
        let {
            defaultSeatType: t
        } = e;
        return i.safePost(`/accounts/{account_id}/settings/default_seat_type`, {
            parameters: {
                path: {
                    account_id: o
                }
            },
            requestBody: {
                value: t
            }
        })
    }, r[0] = o, r[1] = N);
    let P;
    r[2] !== w || r[3] !== k || r[4] !== o ? (P = () => {
        k.invalidateQueries({
            queryKey: [`workspace-settings`, o]
        }), a().success(w.formatMessage(O.defaultSeatTypeUpdatedToast), {
            duration: 3
        })
    }, r[2] = w, r[3] = k, r[4] = o, r[5] = P) : P = r[5];
    let F;
    r[6] !== N || r[7] !== P ? (F = {
        mutationFn: N,
        onSuccess: P,
        onError: T
    }, r[6] = N, r[7] = P, r[8] = F) : F = r[8];
    let {
        mutateAsync: I,
        isPending: L
    } = p(F), R = j?.default_seat_type, z;
    r[9] !== c || r[10] !== s || r[11] !== R ? (z = x(R, {
        includeUsageBased: s,
        includeProlite: c,
        preserveProlite: !0
    }), r[9] = c, r[10] = s, r[11] = R, r[12] = z) : z = r[12];
    let B = z,
        V = C || M || L,
        H;
    r[13] !== _ || r[14] !== B || r[15] !== I || r[16] !== o ? (H = async e => {
        await I({
            defaultSeatType: e
        }), S({
            workspaceId: o,
            previousSeatType: B,
            nextSeatType: e,
            surface: _
        })
    }, r[13] = _, r[14] = B, r[15] = I, r[16] = o, r[17] = H) : H = r[17];
    let U = H,
        W = R ?? `default`,
        G;
    r[18] !== B || r[19] !== y || r[20] !== U || r[21] !== A ? (G = async e => e === B ? !1 : e === "default" && B !== "default" ? v({
        workspace: A,
        introducedDefaultSeatCount: 0,
        entrypoint: y,
        onContinue: async () => {
            await U(e)
        }
    }) : (await U(e), !0), r[18] = B, r[19] = y, r[20] = U, r[21] = A, r[22] = G) : G = r[22];
    let K;
    return r[23] !== h || r[24] !== f || r[25] !== B || r[26] !== c || r[27] !== s || r[28] !== V || r[29] !== W || r[30] !== G || r[31] !== u || r[32] !== m || r[33] !== o ? (K = (0, D.jsx)(b, {
        workspaceId: o,
        disabled: V,
        currentSeatType: B,
        includeUsageBased: s,
        includeProlite: c,
        preserveProlite: !0,
        triggerClassName: u,
        contentClassName: f,
        triggerId: m,
        ariaLabelledBy: h,
        onUpdateSeatType: G
    }, W), r[23] = h, r[24] = f, r[25] = B, r[26] = c, r[27] = s, r[28] = V, r[29] = W, r[30] = G, r[31] = u, r[32] = m, r[33] = o, r[34] = K) : K = r[34], K
}

function T(e) {
    a().danger(e.message, {
        toastId: `workspace_default_seat_type`,
        loggingTitle: e.message,
        loggingDescription: `Workspace default seat type update failed`
    })
}
var E, D, O, k = e((() => {
    E = h(), _(), y(), C(), r(), c(), s(), o(), m(), f(), D = l(), O = u({
        defaultSeatTypeUpdatedToast: {
            id: `workspaceIdentity.defaultSeatTypeUpdatedToast`,
            defaultMessage: `Default workspace seat updated`
        }
    })
}));
export {
    k as n, w as t
};
//# sourceMappingURL=8181be75-fuignygu1xbr9wu1.js.map
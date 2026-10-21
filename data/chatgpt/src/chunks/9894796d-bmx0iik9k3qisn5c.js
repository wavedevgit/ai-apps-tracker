import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fnt as t,
    Lnt as n,
    bnt as r,
    drt as i,
    frt as a,
    urt as o,
    vnt as s
} from "./4813494d-bo7e0c29ngt4zgx0.js";

function c(e) {
    try {
        i.count(a.PAYMENTS, `wallet.funnel`, {
            step: e.step,
            outcome: e.outcome
        })
    } catch {}
    try {
        s.logStructuredEvent(`ChatgptWebWalletFunnelClient`, {
            step: l[e.step],
            outcome: u[e.outcome],
            accountId: e.accountId,
            checkoutId: e.checkoutId,
            walletMinorUnitCount: e.walletAmountMinor == null ? void 0 : n(e.walletAmountMinor),
            currency: e.currency
        })
    } catch {}
}
var l, u, d = e((() => {
    r(), o(), t(), l = {
        redemption_page: `CHATGPT_WEB_WALLET_FUNNEL_STEP_REDEMPTION_PAGE`,
        redemption_submit: `CHATGPT_WEB_WALLET_FUNNEL_STEP_REDEMPTION_SUBMIT`,
        redemption_result: `CHATGPT_WEB_WALLET_FUNNEL_STEP_REDEMPTION_RESULT`,
        checkout: `CHATGPT_WEB_WALLET_FUNNEL_STEP_CHECKOUT`,
        backup_payment_method: `CHATGPT_WEB_WALLET_FUNNEL_STEP_BACKUP_PAYMENT_METHOD`
    }, u = {
        shown: `CHATGPT_WEB_WALLET_FUNNEL_OUTCOME_SHOWN`,
        submitted: `CHATGPT_WEB_WALLET_FUNNEL_OUTCOME_SUBMITTED`,
        succeeded: `CHATGPT_WEB_WALLET_FUNNEL_OUTCOME_SUCCEEDED`,
        failed: `CHATGPT_WEB_WALLET_FUNNEL_OUTCOME_FAILED`,
        skipped: `CHATGPT_WEB_WALLET_FUNNEL_OUTCOME_SKIPPED`,
        opened: `CHATGPT_WEB_WALLET_FUNNEL_OUTCOME_OPENED`,
        already_redeemed: `CHATGPT_WEB_WALLET_FUNNEL_OUTCOME_ALREADY_REDEEMED`
    }
}));
export {
    c as n, d as t
};
//# sourceMappingURL=9894796d-bmx0iik9k3qisn5c.js.map
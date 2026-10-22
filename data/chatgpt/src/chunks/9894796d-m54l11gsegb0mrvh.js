import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Art as t,
    Lnt as n,
    ert as r,
    jrt as i,
    krt as a,
    nrt as o,
    znt as s
} from "./4813494d-i89nb6zlze66idsz.js";

function c(e) {
    try {
        t.count(i.PAYMENTS, `wallet.funnel`, {
            step: e.step,
            outcome: e.outcome
        })
    } catch {}
    try {
        n.logStructuredEvent(`ChatgptWebWalletFunnelClient`, {
            step: l[e.step],
            outcome: u[e.outcome],
            accountId: e.accountId,
            checkoutId: e.checkoutId,
            walletMinorUnitCount: e.walletAmountMinor == null ? void 0 : o(e.walletAmountMinor),
            currency: e.currency
        })
    } catch {}
}
var l, u, d = e((() => {
    s(), a(), r(), l = {
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
//# sourceMappingURL=9894796d-m54l11gsegb0mrvh.js.map
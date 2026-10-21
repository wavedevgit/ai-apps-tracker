import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Sot as t,
    xot as n
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Ln as r,
    Rn as i
} from "./2340486e-i7pjxgdhv0bs6apg.js";
var a, o, s = e((() => {
    i(), t(), a = r({
        temporary: {
            id: `chatgpt.sites.preview.handoff.error.temporary`,
            defaultMessage: `Save this temporary conversation before continuing your website in Work.`
        },
        unavailable: {
            id: `chatgpt.sites.preview.handoff.error.unavailable`,
            defaultMessage: `Work with Sites isn’t available in this account yet. If you just upgraded, refresh the page and try again.`
        },
        pluginUnavailable: {
            id: `chatgpt.sites.preview.handoff.error.plugin_unavailable`,
            defaultMessage: `The Sites plugin isn’t available in Work right now. Refresh the page and try again.`
        },
        sourceChanged: {
            id: `chatgpt.sites.preview.handoff.error.source_changed`,
            defaultMessage: `This preview has changed or is no longer available. Return to the conversation, open the latest preview, and try again.`
        },
        failed: {
            id: `chatgpt.sites.preview.handoff.error.failed`,
            defaultMessage: `Couldn’t continue this preview in Work. Return to the preview and try again.`
        },
        accountChanged: {
            id: `chatgpt.sites.preview.handoff.error.account_changed`,
            defaultMessage: `Switch back to the account where you created this preview to continue.`
        }
    }), o = class extends Error {
        constructor(e) {
            super(e), n(this, `reason`, void 0), this.reason = e, this.name = `SitesPreviewHandoffError`
        }
    }
}));
export {
    s as n, a as r, o as t
};
//# sourceMappingURL=3e88eafe-c0kf9hs24rys0wm2.js.map
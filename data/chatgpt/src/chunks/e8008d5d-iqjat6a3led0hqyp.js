import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    git as t,
    sit as n
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    i as r,
    r as i
} from "./46683f7b-kwa0ble3hcllred4.js";

function a({
    headerNavData: e,
    intl: t,
    location: r
}) {
    if (!e) return;
    let {
        formattedMessage: a,
        toURL: s
    } = i({
        conversionLink: o,
        location: r
    }), c = r.pathname.includes(`/contact-sales`);
    return {
        ...e,
        cta: {
            id: o.id,
            style: `Primary Button`,
            label: t.formatMessage(a),
            url: s,
            analyticsAction: o.analyticsAction
        },
        secondaryCta: c ? {
            id: `secondary-cta`,
            style: `Secondary Inverse Button`,
            label: t.formatMessage({
                id: `4Bc5M+`,
                defaultMessage: `View plans`
            }),
            url: `/pricing/`,
            analyticsAction: `header-nav-view-plans`
        } : {
            id: `secondary-cta`,
            style: `Secondary Inverse Button`,
            label: t.formatMessage(n.contactSales),
            url: `/contact-sales/`,
            analyticsAction: `header-nav-contact-sales`
        }
    }
}
var o, s = e((() => {
    t(), r(), o = {
        id: `cta`,
        purpose: `team`,
        analyticsAction: `header-nav-try-business`
    }
}));
export {
    s as n, a as t
};
//# sourceMappingURL=e8008d5d-iqjat6a3led0hqyp.js.map
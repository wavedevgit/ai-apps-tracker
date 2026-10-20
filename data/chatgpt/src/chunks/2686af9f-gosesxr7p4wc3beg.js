import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    LH as t,
    PH as n,
    _nt as r,
    fat as i,
    hat as a,
    hnt as o
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    a as s,
    i as c
} from "./282bcbc3-jw1cz1bzaznmgw1z.js";

function l(e) {
    if (/^(?:https?:\/\/|\/)/i.test(e)) try {
        let t = new URL(e, `https://chatgpt.invalid`);
        return t.protocol !== `http:` && t.protocol !== `https:` ? void 0 : /^(?:https?:\/\/|\/\/)/i.test(e) ? `${t.origin}${t.pathname}` : t.pathname
    } catch {
        return
    }
}

function u(e) {
    if (!(!e?.startsWith(`/`) || e.startsWith(`//`))) try {
        let t = new URL(e, `https://chatgpt.invalid`);
        return t.origin === `https://chatgpt.invalid` ? t.pathname.endsWith(`/`) ? t.pathname : `${t.pathname}/` : void 0
    } catch {
        return
    }
}
var d = e((() => {}));

function f() {
    return !1
}

function p() {
    return a(`${window.location.pathname}${window.location.search}${window.location.hash}`)
}

function m(e, t) {
    f() && console.log(`[ContentfulLogger]`, e, t ?? {})
}
var h, g = e((() => {
    r(), c(), i(), n(), d(), h = {
        logPageView(e = {}) {
            e.slug === `rosalind-workbench` && o.logStructuredEvent(`ChatgptWebRosalindMarketingPageViewed`, {
                slug: e.slug
            }), o.logEventWithStatsig(`Contentful: Page Viewed`, `chatgpt_web_contentful_page_viewed`, {
                slug: e.slug
            }), m(`Contentful: Page Viewed`, {
                slug: e.slug
            })
        },
        logClick(e = {}) {
            let n = e.destination_url?.trim(),
                r = n ? s(n) : null,
                i = o.logStructuredEvent(`ChatgptWebContentfulLinkClicked`, {
                    analyticsIdentifier: e.analytics_identifier,
                    contentLocale: e.locale,
                    pageSlug: e.page_slug,
                    path: u(e.path),
                    intent: r ?? void 0,
                    destinationUrl: n ? l(n) : void 0
                });
            o.logValueEventWithStatsig({
                segmentEventName: `Contentful: Link Button Clicked`,
                statsigEventName: `chatgpt_web_contentful_link_button_clicked`,
                eventId: i,
                data: {
                    analytics_identifier: e.analytics_identifier,
                    destination_url: e.page_slug === `students/2026` && e.destination_url ? a(e.destination_url) : e.destination_url,
                    ...e.locale && {
                        locale: e.locale
                    },
                    ...r && {
                        intent: r
                    },
                    ...e.path && {
                        path: t(e.path)
                    }
                }
            }), m(`Contentful: Link Button Clicked`, {
                analytics_identifier: e.analytics_identifier,
                intent: r
            })
        },
        logNavigation(e = {}) {
            let t = e.from ?? p();
            o.logEventWithStatsig(`Contentful: Navigation Clicked`, `chatgpt_web_contentful_navigation_clicked`, {
                analytics_identifier: e.analytics_identifier,
                from: t,
                navigation_surface: e.navigation_surface,
                to: e.to
            }), m(`Contentful: Navigation Clicked`, {
                analytics_identifier: e.analytics_identifier,
                from: t,
                navigation_surface: e.navigation_surface,
                to: e.to
            })
        },
        logLocaleChanged(e) {
            o.logEventWithStatsig(`Contentful: Locale Changed`, `chatgpt_web_contentful_locale_changed`, {
                locale: e.locale
            }), m(`Contentful: Locale Changed`, {
                locale: e.locale
            })
        }
    }
}));
export {
    g as n, h as t
};
//# sourceMappingURL=2686af9f-gosesxr7p4wc3beg.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Int as t,
    Pat as n,
    Pnt as r,
    VH as i,
    WH as a,
    jat as o
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    a as s,
    i as c
} from "./282bcbc3-jnb262i2tocjm9uq.js";

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
    return n(`${window.location.pathname}${window.location.search}${window.location.hash}`)
}

function m(e, t) {
    f() && console.log(`[ContentfulLogger]`, e, t ?? {})
}
var h, g = e((() => {
    t(), c(), o(), i(), d(), h = {
        logPageView(e = {}) {
            e.slug === `rosalind-workbench` && r.logStructuredEvent(`ChatgptWebRosalindMarketingPageViewed`, {
                slug: e.slug
            }), r.logEventWithStatsig(`Contentful: Page Viewed`, `chatgpt_web_contentful_page_viewed`, {
                slug: e.slug
            }), m(`Contentful: Page Viewed`, {
                slug: e.slug
            })
        },
        logClick(e = {}) {
            let t = e.destination_url?.trim(),
                i = t ? s(t) : null,
                o = r.logStructuredEvent(`ChatgptWebContentfulLinkClicked`, {
                    analyticsIdentifier: e.analytics_identifier,
                    contentLocale: e.locale,
                    pageSlug: e.page_slug,
                    path: u(e.path),
                    intent: i ?? void 0,
                    destinationUrl: t ? l(t) : void 0
                });
            r.logValueEventWithStatsig({
                segmentEventName: `Contentful: Link Button Clicked`,
                statsigEventName: `chatgpt_web_contentful_link_button_clicked`,
                eventId: o,
                data: {
                    analytics_identifier: e.analytics_identifier,
                    destination_url: e.page_slug === `students/2026` && e.destination_url ? n(e.destination_url) : e.destination_url,
                    ...e.locale && {
                        locale: e.locale
                    },
                    ...i && {
                        intent: i
                    },
                    ...e.path && {
                        path: a(e.path)
                    }
                }
            }), m(`Contentful: Link Button Clicked`, {
                analytics_identifier: e.analytics_identifier,
                intent: i
            })
        },
        logNavigation(e = {}) {
            let t = e.from ?? p();
            r.logEventWithStatsig(`Contentful: Navigation Clicked`, `chatgpt_web_contentful_navigation_clicked`, {
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
            r.logEventWithStatsig(`Contentful: Locale Changed`, `chatgpt_web_contentful_locale_changed`, {
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
//# sourceMappingURL=2686af9f-ny4whhatn28qu0sq.js.map
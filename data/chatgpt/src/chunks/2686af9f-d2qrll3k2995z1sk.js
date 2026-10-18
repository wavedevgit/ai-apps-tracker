import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bit as t,
    Btt as n,
    Htt as r,
    Lit as i,
    cH as a,
    dH as o
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    a as s,
    i as c
} from "./282bcbc3-lrdj3h36alg4vtbb.js";

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
    return t(`${window.location.pathname}${window.location.search}${window.location.hash}`)
}

function m(e, t) {
    f() && console.log(`[ContentfulLogger]`, e, t ?? {})
}
var h, g = e((() => {
    r(), c(), i(), a(), d(), h = {
        logPageView(e = {}) {
            e.slug === `rosalind-workbench` && n.logStructuredEvent(`ChatgptWebRosalindMarketingPageViewed`, {
                slug: e.slug
            }), n.logEventWithStatsig(`Contentful: Page Viewed`, `chatgpt_web_contentful_page_viewed`, {
                slug: e.slug
            }), m(`Contentful: Page Viewed`, {
                slug: e.slug
            })
        },
        logClick(e = {}) {
            let r = e.destination_url?.trim(),
                i = r ? s(r) : null,
                a = n.logStructuredEvent(`ChatgptWebContentfulLinkClicked`, {
                    analyticsIdentifier: e.analytics_identifier,
                    contentLocale: e.locale,
                    pageSlug: e.page_slug,
                    path: u(e.path),
                    intent: i ?? void 0,
                    destinationUrl: r ? l(r) : void 0
                });
            n.logValueEventWithStatsig({
                segmentEventName: `Contentful: Link Button Clicked`,
                statsigEventName: `chatgpt_web_contentful_link_button_clicked`,
                eventId: a,
                data: {
                    analytics_identifier: e.analytics_identifier,
                    destination_url: e.page_slug === `students/2026` && e.destination_url ? t(e.destination_url) : e.destination_url,
                    ...e.locale && {
                        locale: e.locale
                    },
                    ...i && {
                        intent: i
                    },
                    ...e.path && {
                        path: o(e.path)
                    }
                }
            }), m(`Contentful: Link Button Clicked`, {
                analytics_identifier: e.analytics_identifier,
                intent: i
            })
        },
        logNavigation(e = {}) {
            let t = e.from ?? p();
            n.logEventWithStatsig(`Contentful: Navigation Clicked`, `chatgpt_web_contentful_navigation_clicked`, {
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
            n.logEventWithStatsig(`Contentful: Locale Changed`, `chatgpt_web_contentful_locale_changed`, {
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
//# sourceMappingURL=2686af9f-d2qrll3k2995z1sk.js.map
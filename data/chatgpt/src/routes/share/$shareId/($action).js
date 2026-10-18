import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AJ as n,
    Ea as r,
    JP as i,
    Ji as a,
    Jo as o,
    Ko as s,
    Lz as c,
    Rz as l,
    Ta as u,
    UP as d,
    VJ as f,
    Xi as p,
    YV as m,
    ZV as h,
    att as g,
    ctt as _,
    is as v,
    os as y,
    ott as b,
    utt as x
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as S,
    At as C,
    Bn as w,
    Pt as T,
    Rn as E,
    Ut as D,
    Vn as O,
    zn as k
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    GBn as A,
    WBn as j
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    c as M,
    l as N
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as P,
    t as F
} from "./a64f0856-nasi2emndn6acs8s.js";
import {
    r as I,
    t as L
} from "./27c18240-blu906be27xekuco.js";
import {
    n as R,
    r as z
} from "./ee874e5c-cvdxewajjvmol024.js";

function B(e) {
    let [t] = (0, H.useState)(() => d({
        sharedConversationId: e.sharedConversationId
    })), n = f(t.id, e => e?.isLoading === !1);
    return (0, H.useEffect)(() => {
        _(t.id, () => A(t, e.conversationData, {
            skipIfExisting: !0,
            continuingFromSharedConversationId: e.sharedConversationId
        }))
    }, [t, e.conversationData, e.sharedConversationId]), (0, H.useEffect)(() => {
        y({
            action: s.CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED,
            shareId: e.sharedConversationId,
            contentType: o.CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION
        })
    }, [e.sharedConversationId]), n ? (0, U.jsxs)(u.Provider, {
        value: {
            serverSharedThreadId: e.sharedConversationId
        },
        children: [(0, U.jsx)(F, {
            conversation: t
        }), (0, U.jsx)(M, {
            clientThreadId: t.id
        })]
    }) : null
}

function V({
    error: e,
    showInaccessibleToast: t,
    toastMessage: n
}) {
    let r = k(),
        i = T(),
        o = l();
    return (0, H.useEffect)(() => {
        t && (o({
            id: `share_not_found`,
            fallback: `generic`,
            message: n
        }), i(`/`, {
            replace: !0
        }))
    }, [i, o, t, n]), t ? null : (0, U.jsx)(`div`, {
        className: `flex h-full w-full justify-center`,
        children: (0, U.jsx)(`div`, {
            className: `max-w-lg p-6`,
            children: (0, U.jsx)(a, {
                content: e,
                primaryCtaText: r.formatMessage({
                    id: `8rp1L0`,
                    defaultMessage: `Return to ChatGPT`
                }),
                onPrimaryCtaClick: () => i(`/`)
            })
        })
    })
}
var H, U, W, G, K = e((() => {
    S(), N(), b(), i(), j(), p(), h(), P(), v(), I(), z(), n(), c(), r(), H = t(O()), E(), U = w(), W = ({
        loaderData: e
    }) => {
        if (!e || e.serverResponse.type === `error` || !e.meta) return [{
            title: `ChatGPT`
        }, {
            name: `robots`,
            content: `noindex,nofollow`
        }];
        let {
            meta: t
        } = e;
        if (t.isBetterMetatagsEnabled || t.hasStoredOgCopy || t.hasConversationShareOgImageTemplate || t.hasImagegenConversationOgImageVariant || t.xMetadataPolicy === `complete_x_card_v1`) {
            let n = `https://chatgpt.com/share/` + e.sharedConversationId + (t.ogImageQueryParam ? `?${L}=${encodeURIComponent(t.ogImageQueryParam)}` : ``),
                r = `https://chatgpt.com/share/` + e.sharedConversationId,
                i = t.xMetadataPolicy === `complete_x_card_v1`;
            return [{
                title: `ChatGPT - ` + t.pageTitle
            }, ...i ? [{
                tagName: `link`,
                rel: `canonical`,
                href: r
            }] : [], {
                property: `og:site_name`,
                content: `ChatGPT`
            }, {
                name: `robots`,
                content: `noindex,nofollow`
            }, {
                property: `og:title`,
                content: t.ogTitle
            }, {
                property: `og:description`,
                content: t.ogDescription
            }, ...t.ogImage ? [...R(t.ogImage), ...i ? [{
                name: `twitter:card`,
                content: `summary_large_image`
            }, {
                name: `twitter:image`,
                content: t.ogImage.url
            }, {
                name: `twitter:image:alt`,
                content: t.ogImage.alt
            }] : []] : [], ...i ? [{
                name: `twitter:title`,
                content: t.ogTitle
            }, {
                name: `twitter:description`,
                content: t.ogDescription
            }] : [], {
                property: `og:url`,
                content: n
            }]
        } else return [{
            title: `ChatGPT`
        }, ...m]
    }, G = D(function() {
        let {
            sharedConversationId: e,
            shareReceivePerformance: t,
            ...n
        } = C(), r = `/share/${e}`, i = n.serverResponse.type === `error`;
        return x(r, t, `conversation`), (0, H.useEffect)(() => {
            i && g(r, `load_error`)
        }, [i, r]), n.serverResponse.type === `error` ? (0, U.jsx)(V, {
            error: n.serverResponse.error,
            showInaccessibleToast: n.serverResponse.showInaccessibleToast,
            toastMessage: n.serverResponse.toastMessage
        }) : (0, U.jsx)(B, {
            ...n,
            sharedConversationId: e,
            conversationData: n.serverResponse.data
        })
    })
}));
e((() => {
    K()
}))();
export {
    G as
    default, W as meta
};
//# sourceMappingURL=share._shareId.(_action)-kjwmfz4i.js.map
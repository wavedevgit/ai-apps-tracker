import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ah as n,
    Dh as r,
    JP as i,
    UP as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as o,
    At as s,
    Bn as c,
    Ut as l,
    Vn as u
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    b8 as d,
    x8 as f
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    El as p,
    Tl as m
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as h,
    t as g
} from "./818c82ea-kgwy3w3tvf83f8u6.js";

function _({
    loaderData: e
}) {
    "use no forget";
    let t = a();
    return (0, x.jsx)(m, {
        attachments: e.postWithProfile.post.attachments,
        conversation: t,
        className: `h-full`
    })
}

function v({
    imageUrl: e,
    treatment: t
}) {
    "use no forget";
    let n = t === `igbl`,
        {
            imageRef: i,
            isReady: a,
            markReadyIfLoaded: o
        } = y();
    return (0, x.jsxs)(`div`, {
        className: `bg-token-primary relative h-full w-full overflow-hidden`,
        "data-testid": `sharing-post-unfurl-view`,
        "data-ogimg-screenshot-ready": a ? `true` : void 0,
        children: [(0, x.jsx)(`img`, {
            ref: i,
            src: e,
            alt: ``,
            className: n ? `h-full w-full scale-105 object-cover object-top blur-2xl` : `h-full w-full object-cover object-top`,
            "data-ogimg-screenshot-content": `true`,
            onLoad: o
        }), n && (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)(`div`, {
                className: `absolute inset-0 bg-black/15`
            }), (0, x.jsx)(`div`, {
                className: `absolute inset-0 flex items-center justify-center`,
                children: (0, x.jsx)(r, {
                    className: `h-24 w-24 text-white/45`
                })
            })]
        }), !n && (0, x.jsxs)(x.Fragment, {
            children: [(0, x.jsx)(`div`, {
                className: `absolute start-0 end-0 bottom-0 z-10 h-40 bg-gradient-to-t from-black/35 to-transparent`
            }), (0, x.jsx)(`div`, {
                className: `absolute end-5 bottom-5 z-10 inline-flex flex-shrink-0 items-end justify-end`,
                children: (0, x.jsx)(d, {
                    className: `inline h-4 w-24 text-end text-white`
                })
            })]
        })]
    })
}

function y() {
    "use no forget";
    let [e, t] = (0, b.useState)(!1), n = (0, b.useRef)(null), r = (0, b.useCallback)(() => {
        let e = n.current;
        e?.complete && e.naturalWidth > 0 && e.naturalHeight > 0 && t(!0)
    }, []);
    return (0, b.useEffect)(() => {
        r()
    }, [r]), {
        imageRef: n,
        isReady: e,
        markReadyIfLoaded: r
    }
}
var b, x, S, C, w = e((() => {
    o(), i(), f(), n(), h(), p(), b = t(u()), x = c(), S = l(function() {
        "use no forget";
        let e = s();
        return e.kind === `birthday_card` ? (0, x.jsx)(g, {
            className: `h-[315px]! [&>div]:inset-y-[8%]!`,
            text: e.text,
            templateName: `multicolor`
        }) : e.kind === `image_treatment` ? (0, x.jsx)(v, {
            imageUrl: e.imageUrl,
            treatment: e.treatment
        }) : e.kind === `text_template` ? (0, x.jsx)(g, {
            text: e.text,
            templateName: e.templateName
        }) : (0, x.jsx)(_, {
            loaderData: e
        })
    }), C = () => [{
        title: `ChatGPT Post Cover Image`
    }, {
        name: `robots`,
        content: `noindex,nofollow`
    }]
}));
e((() => {
    w()
}))();
export {
    S as
    default, C as meta
};
//# sourceMappingURL=s.unfurl._postId-eunabudl.js.map
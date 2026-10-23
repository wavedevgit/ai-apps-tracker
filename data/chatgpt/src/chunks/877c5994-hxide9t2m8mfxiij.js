import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Aw as r,
    I7 as i,
    M7 as a,
    Oct as o,
    Ow as s,
    SN as c,
    _ct as l,
    eE as u,
    xN as d
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as f,
    Ln as p,
    N as m,
    Nn as h,
    Rn as g,
    Vn as _,
    s as v,
    zn as y
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    own as b,
    swn as x
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Ob as S,
    kb as C
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    a as w,
    t as T
} from "./8e42e080-g3e1270e4n4jkw5i.js";

function E({
    isOpen: e,
    onClose: t,
    account: r,
    gpt: i
}) {
    let o = y(),
        [u, d] = (0, D.useState)(!1),
        [f, p] = (0, D.useState)(i),
        g = f?.tools.filter(e => e.type !== l.JIT_PLUGIN),
        _ = f?.tools.filter(e => e.type === l.JIT_PLUGIN),
        v = m();
    return (0, O.jsxs)(s, {
        testId: `modal-approve-gpt`,
        size: `custom`,
        className: `max-w-lg text-sm`,
        isOpen: e,
        onClose: c,
        type: `success`,
        title: o.formatMessage(k.approveGPTTitle),
        children: [f == null ? (0, O.jsx)(`div`, {
            className: `h-96`,
            children: (0, O.jsx)(w, {
                popoverClassName: `bg-token-main-surface-secondary!`,
                onSelect: e => {
                    p(e)
                }
            })
        }) : (0, O.jsxs)(`div`, {
            className: `flex flex-col`,
            children: [(0, O.jsxs)(`div`, {
                className: `border-token-border-default flex gap-4 border-b pb-6`,
                children: [f.gizmo.display.profile_picture_url == null ? (0, O.jsx)(S, {
                    className: `h-96 w-96 text-gray-400`
                }) : (0, O.jsx)(`img`, {
                    src: f.gizmo.display.profile_picture_url,
                    className: `h-24 w-24 rounded-full`,
                    width: 96,
                    height: 96
                }), (0, O.jsxs)(`div`, {
                    className: `text-token-text-primary flex flex-col gap-1`,
                    children: [(0, O.jsx)(`p`, {
                        className: `text-lg font-semibold`,
                        children: f.gizmo.display.name
                    }), (0, O.jsx)(`p`, {
                        children: f.gizmo.display.description
                    }), (0, O.jsx)(`p`, {
                        className: `text-token-text-secondary`,
                        children: (0, O.jsx)(h, {
                            ...k.gptByLine,
                            values: {
                                authorName: f.gizmo.author.display_name
                            }
                        })
                    })]
                })]
            }), (0, O.jsx)(`div`, {
                className: `border-token-border-default flex border-b py-6`,
                children: (0, O.jsxs)(`div`, {
                    className: `flex gap-4`,
                    children: [(0, O.jsx)(`p`, {
                        className: `w-24 font-semibold`,
                        children: (0, O.jsx)(h, {
                            ...k.capabilitiesTitle
                        })
                    }), (0, O.jsx)(`div`, {
                        className: `text-token-text-primary flex flex-col gap-1`,
                        children: g && g.length > 0 ? g.map(e => (0, O.jsx)(`p`, {
                            children: b(r, e.type, o)
                        }, e.id)) : (0, O.jsx)(`p`, {
                            className: `text-token-text-secondary`,
                            children: (0, O.jsx)(h, {
                                ...k.noCapabilitiesEnabled
                            })
                        })
                    })]
                })
            }), (0, O.jsx)(`div`, {
                className: `flex py-6`,
                children: (0, O.jsxs)(`div`, {
                    className: `flex gap-4`,
                    children: [(0, O.jsx)(`p`, {
                        className: `w-24 font-semibold`,
                        children: (0, O.jsx)(h, {
                            ...k.actionsTitle
                        })
                    }), (0, O.jsx)(`div`, {
                        className: `text-token-text-primary flex flex-col gap-1`,
                        children: _ && _.length > 0 ? _.map(e => (0, O.jsx)(`p`, {
                            children: e.metadata.domain ?? ``
                        }, e.id)) : (0, O.jsx)(`p`, {
                            className: `text-token-text-secondary`,
                            children: (0, O.jsx)(h, {
                                ...k.noCustomActions
                            })
                        })
                    })]
                })
            })]
        }), (0, O.jsxs)(`div`, {
            className: `mt-4 flex justify-end gap-2`,
            children: [(0, O.jsx)(n, {
                color: `secondary`,
                onClick: () => {
                    p(void 0), t(!1)
                },
                loading: u,
                children: (0, O.jsx)(h, {
                    ...k.cancelButtonText
                })
            }), (0, O.jsx)(n, {
                color: `primary`,
                loading: u,
                disabled: f == null,
                onClick: () => {
                    f != null && (d(!0), a.safePost(`/accounts/{account_id}/gpts/{third_party_gizmo_id}/approve`, {
                        parameters: {
                            path: {
                                account_id: r.id,
                                third_party_gizmo_id: f.gizmo.id
                            }
                        }
                    }).finally(() => {
                        v.invalidateQueries({
                            queryKey: [`gizmo`]
                        }), t(!0), p(void 0), d(!1)
                    }))
                },
                children: (0, O.jsx)(h, {
                    ...k.approveButtonText
                })
            })]
        })]
    })
}
var D, O, k, A = e((() => {
    o(), x(), u(), C(), r(), T(), i(), v(), d(), D = t(_()), g(), O = f(), k = p({
        approveGPTTitle: {
            id: `approveGPTModal.approveGPTTitle`,
            defaultMessage: `Approve a third-party GPT`
        },
        cancelButtonText: {
            id: `approveGPTModal.cancelButtonText`,
            defaultMessage: `Cancel`
        },
        approveButtonText: {
            id: `approveGPTModal.approveButtonText`,
            defaultMessage: `Approve`
        },
        gptByLine: {
            id: `approveGPTModal.gptByLine`,
            defaultMessage: `By {authorName}`
        },
        capabilitiesTitle: {
            id: `approveGPTModal.capabilitiesTitle`,
            defaultMessage: `Capabilities`
        },
        actionsTitle: {
            id: `approveGPTModal.actionsTitle`,
            defaultMessage: `Actions`
        },
        noCapabilitiesEnabled: {
            id: `approveGPTModal.noCapabilitiesEnabled`,
            defaultMessage: `No capabilities enabled`
        },
        noCustomActions: {
            id: `approveGPTModal.noCustomActions`,
            defaultMessage: `No custom actions`
        }
    })
}));
export {
    A as n, E as t
};
//# sourceMappingURL=877c5994-hxide9t2m8mfxiij.js.map
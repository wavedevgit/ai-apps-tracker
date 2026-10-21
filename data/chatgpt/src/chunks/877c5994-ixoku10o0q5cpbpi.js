import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cw as n,
    F7 as r,
    JT as i,
    Tw as a,
    YT as o,
    Yst as s,
    _N as c,
    gN as l,
    oct as u,
    z7 as d
} from "./4813494d-tap9fxyhk4ehe0bs.js";
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
    TCn as b,
    wCn as x
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    Ab as S,
    jb as C
} from "./30901919-niqyapppecmq5jkn.js";
import {
    a as w,
    t as T
} from "./8e42e080-lx27bbwitkxebar1.js";

function E({
    isOpen: e,
    onClose: t,
    account: a,
    gpt: o
}) {
    let l = y(),
        [u, d] = (0, D.useState)(!1),
        [f, p] = (0, D.useState)(o),
        g = f?.tools.filter(e => e.type !== s.JIT_PLUGIN),
        _ = f?.tools.filter(e => e.type === s.JIT_PLUGIN),
        v = m();
    return (0, O.jsxs)(n, {
        testId: `modal-approve-gpt`,
        size: `custom`,
        className: `max-w-lg text-sm`,
        isOpen: e,
        onClose: c,
        type: `success`,
        title: l.formatMessage(k.approveGPTTitle),
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
                            children: x(a, e.type, l)
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
            children: [(0, O.jsx)(i, {
                color: `secondary`,
                onClick: () => {
                    p(void 0), t(!1)
                },
                loading: u,
                children: (0, O.jsx)(h, {
                    ...k.cancelButtonText
                })
            }), (0, O.jsx)(i, {
                color: `primary`,
                loading: u,
                disabled: f == null,
                onClick: () => {
                    f != null && (d(!0), r.safePost(`/accounts/{account_id}/gpts/{third_party_gizmo_id}/approve`, {
                        parameters: {
                            path: {
                                account_id: a.id,
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
    u(), b(), o(), C(), a(), T(), d(), v(), l(), D = t(_()), g(), O = f(), k = p({
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
//# sourceMappingURL=877c5994-ixoku10o0q5cpbpi.js.map
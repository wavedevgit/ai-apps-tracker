const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d4c3e8a1-ed7j3va6y1yw7jt7.js", "assets/f025431a-ehagpvg3m4e1cduv.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aw as n,
    Eat as r,
    LU as i,
    Lnt as a,
    Ow as o,
    Rz as s,
    wat as c,
    zU as l,
    znt as u,
    zz as d
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as f,
    Ln as p,
    N as m,
    Nn as h,
    Rn as g,
    Vn as _,
    cn as v,
    ln as y,
    s as b,
    zn as x
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    fyt as S,
    nTn as C,
    ryt as w,
    tTn as T
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    Hm as E,
    Mv as D,
    Nv as O,
    Um as k
} from "./30901919-cmi3nh547dwrqkxv.js";
import {
    S as A,
    x as j
} from "./82782bc9-ivetrmhdn140ze7c.js";
import {
    i as M,
    n as N
} from "./328817d4-h16oqx1x28853bv6.js";
import {
    n as P,
    t as F
} from "./62507501-bzqvyxin3pxbc4j0.js";
import {
    n as I,
    r as L,
    t as R
} from "./11defd9b-diw2kc0t471tqw5a.js";
import {
    n as z,
    r as B
} from "./35c8cfbc-c5bpl20zw9n7vpvm.js";
async function V(e) {
    if (e.name.toLowerCase() === `skill.md`) return {
        "SKILL.md": e
    };
    let {
        unzipSync: t
    } = await v(async () => {
        let {
            unzipSync: e
        } = await import(`./d4c3e8a1-ed7j3va6y1yw7jt7.js`).then(e => (e.n(), e.t));
        return {
            unzipSync: e
        }
    }, __vite__mapDeps([0, 1])), n = t(new Uint8Array(await e.arrayBuffer())), {
        normalizedFiles: r
    } = B(Object.fromEntries(Object.entries(n).filter(([e]) => !e.endsWith(`/`))));
    return Object.fromEntries(Object.entries(r).map(([e, t]) => [e, new File([Uint8Array.from(t)], e.split(`/`).pop() ?? e, {
        type: N(e)
    })]))
}

function H({
    onClose: e,
    admin: t = !1
}) {
    "use no forget";
    let n = x(),
        r = l(),
        i = m(),
        [u, d] = (0, U.useState)([]),
        [f, p] = (0, U.useState)(null),
        {
            mutateAsync: g
        } = S({
            admin: t
        }),
        _ = (0, U.useCallback)(async (e, t) => {
            let o = t?.applyResolution ?? !1;
            try {
                let t = (await g({
                    archiveFile: e.file,
                    applyResolution: o
                }))?.hazelnuts?.[0]?.id ?? null;
                if (t) try {
                    i.setQueryData(T(t), await V(e.file))
                } catch (e) {
                    c.addError(e)
                }
                d(t => t.map(t => t.id === e.id ? {
                    ...t,
                    status: `complete`
                } : t)), p(t => t?.uploadId === e.id ? null : t), r.success(n.formatMessage(G.uploadSuccess)), a.logStructuredEvent(`ChatgptWebSkillCreateZipSuccess`, {
                    hazelnutId: t ?? ``
                }), a.logEventWithStatsig(`chatgpt_web_skill_creation_method_selected`, `chatgpt_web_skill_creation_method_selected`, {
                    method: `zip`,
                    hazelnut_id: t ?? ``
                })
            } catch (t) {
                let i = o ? null : R(t),
                    a = I({
                        error: t,
                        intl: n,
                        fallbackMessage: G.uploadFailed
                    });
                if (d(t => t.map(t => t.id === e.id ? {
                        ...t,
                        status: `error`,
                        errorMessage: a
                    } : t)), i?.resolution) {
                    p({
                        uploadId: e.id,
                        skillName: i.skillName,
                        resolution: i.resolution
                    });
                    return
                }
                r.danger(a)
            }
        }, [g, n, i, r]),
        v = (0, U.useCallback)(() => {
            if (!f) return;
            let e = u.find(e => e.id === f.uploadId);
            if (!e) {
                p(null);
                return
            }
            d(t => t.map(t => t.id === e.id ? {
                ...t,
                status: `uploading`,
                errorMessage: void 0
            } : t)), p(null), _(e, {
                applyResolution: !0
            })
        }, [f, u, _]),
        y = (0, U.useCallback)(() => {
            p(null)
        }, []),
        b = (0, U.useCallback)(e => {
            let t = e.name.toLowerCase();
            return t.endsWith(`.zip`) || t.endsWith(`.skill`) || t === `skill.md` ? null : t.endsWith(`.md`) ? {
                code: `file-invalid-type`,
                message: `Only .zip files or SKILL.md are accepted.`
            } : null
        }, []),
        C = (0, U.useCallback)(e => {
            if (e.length === 0) return;
            let t = e.map(e => ({
                id: `${e.name}-${e.size}-${e.lastModified}-${Math.random().toString(36).slice(2,10)}`,
                file: e,
                status: `uploading`
            }));
            d(e => [...e, ...t]), t.forEach(e => {
                _(e)
            })
        }, [_]),
        {
            getRootProps: w,
            getInputProps: E,
            isDragActive: O,
            fileRejections: j
        } = A({
            multiple: !0,
            noKeyboard: !0,
            accept: {
                "application/zip": [`.zip`, `.skill`],
                "application/x-zip-compressed": [`.zip`, `.skill`],
                "text/markdown": [`.md`],
                "text/plain": [`.md`]
            },
            maxSize: K,
            validator: b,
            onDropAccepted: C
        }),
        M = j.some(e => e.errors.some(e => e.code === `file-too-large`)),
        N = [`border-token-border-light bg-token-main-surface-primary`, `border border-dashed rounded-2xl px-4 py-14 text-center transition`, `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-border-strong`, O ? `border-token-border-strong bg-token-main-surface-secondary` : `hover:bg-token-main-surface-secondary`, `cursor-pointer`].join(` `);
    return (0, W.jsx)(o, {
        isOpen: !0,
        onClose: () => e(),
        shouldIgnoreClickOutside: !0,
        title: f ? void 0 : (0, W.jsx)(h, {
            ...G.modalUploadSectionTitle
        }),
        showCloseButton: !0,
        testId: `modal-hazelnut-upload-modal`,
        children: f ? (0, W.jsx)(F, {
            skillName: f.skillName,
            resolution: f.resolution,
            mode: `upload`,
            onCancel: y,
            onConfirm: v
        }) : (0, W.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [(0, W.jsxs)(`div`, {
                ...w({
                    className: N
                }),
                children: [(0, W.jsx)(`input`, {
                    ...E()
                }), (0, W.jsxs)(`div`, {
                    className: `text-token-text-tertiary text-sm`,
                    children: [(0, W.jsx)(k, {
                        className: `me-2 inline-block`
                    }), O ? (0, W.jsx)(h, {
                        ...G.dropActive
                    }) : (0, W.jsx)(h, {
                        ...G.dropPrompt
                    })]
                })]
            }), u.length > 0 && (0, W.jsx)(`div`, {
                className: `flex flex-col gap-2`,
                children: u.map(e => (0, W.jsxs)(`div`, {
                    className: `bg-token-main-surface border-token-border-light flex min-h-8 items-center gap-2 rounded-xl border px-3 py-2 text-sm`,
                    children: [(0, W.jsx)(`div`, {
                        className: `min-w-0 flex-1 truncate font-medium`,
                        children: e.file.name
                    }), e.status === `uploading` && (0, W.jsx)(s, {
                        className: `icon-sm text-token-text-tertiary`
                    }), e.status === `complete` && (0, W.jsx)(D, {
                        className: `icon-sm shrink-0 text-green-400`
                    }), e.status === `error` && (0, W.jsx)(`span`, {
                        className: `text-token-text-status-warning text-sm font-medium`,
                        title: e.errorMessage ?? n.formatMessage(G.uploadFailed),
                        children: (0, W.jsx)(h, {
                            ...G.uploadError
                        })
                    })]
                }, e.id))
            }), j.length > 0 && (0, W.jsx)(`div`, {
                className: `text-token-interactive-label-warning-secondary text-sm`,
                children: (0, W.jsx)(h, {
                    ...M ? G.fileTooLarge : G.invalidFile
                })
            }), (0, W.jsx)(`div`, {
                className: `text-token-text-tertiary text-xs`,
                children: (0, W.jsx)(h, {
                    ...G.uploadDescription
                })
            })]
        })
    })
}
var U, W, G, K, q = e((() => {
    O(), E(), n(), z(), M(), P(), L(), C(), w(), d(), i(), u(), r(), b(), U = t(_()), j(), g(), W = f(), y(), G = p({
        modalUploadSectionTitle: {
            defaultMessage: `Upload a skill`,
            id: `hazelnutsSettings.modalUploadSectionTitle`
        },
        uploadDescription: {
            defaultMessage: `Third-party skills pose elevated risks and may try to access your data. Only upload skills from trusted sources and review them before use.`,
            id: `hazelnutsSettings.uploadDescription`
        },
        dropPrompt: {
            defaultMessage: `Drag and drop a .zip/.skill file or SKILL.md to upload`,
            id: `hazelnutsSettings.dropPrompt`
        },
        dropActive: {
            defaultMessage: `Drop the .zip/.skill file or SKILL.md here…`,
            id: `hazelnutsSettings.dropActive`
        },
        uploadError: {
            defaultMessage: `Invalid skill`,
            id: `hazelnutsSettings.uploadError`
        },
        invalidFile: {
            defaultMessage: `Only .zip/.skill files or SKILL.md are accepted.`,
            id: `hazelnutsSettings.invalidFile`
        },
        fileTooLarge: {
            defaultMessage: `File must be 25 MB or smaller.`,
            id: `hazelnutsSettings.fileTooLarge`
        },
        uploadSuccess: {
            defaultMessage: `Skill uploaded`,
            id: `hazelnutsSettings.uploadSuccess`
        },
        uploadFailed: {
            defaultMessage: `Failed to upload skill. Please try again.`,
            id: `hazelnutsSettings.uploadFailed`
        }
    }), K = 25 * 1024 * 1024
}));
export {
    q as n, H as t
};
//# sourceMappingURL=d646af3b-fv6ul4a4gh3l9241.js.map
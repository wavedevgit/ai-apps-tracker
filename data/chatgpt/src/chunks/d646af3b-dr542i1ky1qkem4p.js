const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/d4c3e8a1-ed7j3va6y1yw7jt7.js", "assets/f025431a-ehagpvg3m4e1cduv.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Btt as n,
    Dit as r,
    Htt as i,
    dz as a,
    fz as o,
    hU as s,
    iw as c,
    kit as l,
    ow as u,
    pU as d
} from "./4813494d-cb22y2w19zwyshmt.js";
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
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    cwn as S,
    lwn as C,
    tyt as w,
    uyt as T
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Fv as E,
    Hm as D,
    Iv as O,
    Um as k
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    S as A,
    x as j
} from "./82782bc9-h658ejxn3ufkvr7a.js";
import {
    i as M,
    n as N
} from "./328817d4-ldvyc5vo951l9xs1.js";
import {
    n as P,
    t as F
} from "./62507501-mb1l68rdy11uhbud.js";
import {
    n as I,
    r as L,
    t as R
} from "./11defd9b-gzr258ngccx8wqx3.js";
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
    let i = x(),
        o = s(),
        l = m(),
        [u, d] = (0, U.useState)([]),
        [f, p] = (0, U.useState)(null),
        {
            mutateAsync: g
        } = T({
            admin: t
        }),
        _ = (0, U.useCallback)(async (e, t) => {
            let a = t?.applyResolution ?? !1;
            try {
                let t = (await g({
                    archiveFile: e.file,
                    applyResolution: a
                }))?.hazelnuts?.[0]?.id ?? null;
                if (t) try {
                    l.setQueryData(S(t), await V(e.file))
                } catch (e) {
                    r.addError(e)
                }
                d(t => t.map(t => t.id === e.id ? {
                    ...t,
                    status: `complete`
                } : t)), p(t => t?.uploadId === e.id ? null : t), o.success(i.formatMessage(G.uploadSuccess)), n.logStructuredEvent(`ChatgptWebSkillCreateZipSuccess`, {
                    hazelnutId: t ?? ``
                }), n.logEventWithStatsig(`chatgpt_web_skill_creation_method_selected`, `chatgpt_web_skill_creation_method_selected`, {
                    method: `zip`,
                    hazelnut_id: t ?? ``
                })
            } catch (t) {
                let n = a ? null : R(t),
                    r = I({
                        error: t,
                        intl: i,
                        fallbackMessage: G.uploadFailed
                    });
                if (d(t => t.map(t => t.id === e.id ? {
                        ...t,
                        status: `error`,
                        errorMessage: r
                    } : t)), n?.resolution) {
                    p({
                        uploadId: e.id,
                        skillName: n.skillName,
                        resolution: n.resolution
                    });
                    return
                }
                o.danger(r)
            }
        }, [g, i, l, o]),
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
            getInputProps: D,
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
    return (0, W.jsx)(c, {
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
                    ...D()
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
                    }), e.status === `uploading` && (0, W.jsx)(a, {
                        className: `icon-sm text-token-text-tertiary`
                    }), e.status === `complete` && (0, W.jsx)(E, {
                        className: `icon-sm shrink-0 text-green-400`
                    }), e.status === `error` && (0, W.jsx)(`span`, {
                        className: `text-token-text-status-warning text-sm font-medium`,
                        title: e.errorMessage ?? i.formatMessage(G.uploadFailed),
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
    O(), D(), u(), z(), M(), P(), L(), C(), w(), o(), d(), i(), l(), b(), U = t(_()), j(), g(), W = f(), y(), G = p({
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
//# sourceMappingURL=d646af3b-dr542i1ky1qkem4p.js.map
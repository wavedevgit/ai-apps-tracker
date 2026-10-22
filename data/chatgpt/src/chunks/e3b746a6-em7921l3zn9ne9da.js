const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/7aa2b76f-lggdi6s76uwdiwyo.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-itnrgnth03y1sm9d.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-i79e9c315w50am5f.js", "assets/30901919-ikyi1r55w2i02fom.js", "assets/c470f5ab-lpy67c9in1skobas.js", "assets/0e5afe53-jfvcgv06snw44wce.js", "assets/conversation-small-dl8qqd6x.css", "assets/8b34dbc2-m4883pai3e8fx8q6.js", "assets/82782bc9-o75a7wf6pmueiskp.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as r,
    A2 as i,
    CN as a,
    Drt as o,
    Ert as s,
    HN as c,
    K5 as l,
    Kp as u,
    ON as d,
    Ort as f,
    Qy as p,
    Rz as m,
    TN as h,
    UN as g,
    Up as _,
    Zy as v,
    _U as y,
    a2 as b,
    bF as x,
    c7 as S,
    eE as C,
    eY as w,
    frt as T,
    gF as ee,
    j2 as te,
    l7 as E,
    lY as ne,
    o2 as D,
    prt as re,
    q5 as ie,
    srt as O,
    tl as k,
    ul as A,
    vF as j,
    vU as M,
    wN as N,
    xrt as ae,
    yrt as P,
    zz as F
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as oe,
    Ln as I,
    Nn as L,
    Rn as se,
    Vn as ce,
    cn as le,
    ln as R,
    wn as ue,
    zn as de
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    A6 as fe,
    C6 as pe,
    DVn as me,
    E6 as he,
    EVn as ge,
    F6 as _e,
    I6 as z,
    JNt as B,
    KNt as ve,
    P6 as ye,
    QUn as V,
    S6 as be,
    T6 as H,
    Yhn as xe,
    ZUn as Se,
    _C as Ce,
    cr as we,
    dd as U,
    iA as Te,
    iT as Ee,
    j6 as De,
    k6 as Oe,
    qNt as ke,
    qhn as Ae,
    rT as je,
    sA as Me,
    sr as Ne,
    ud as W,
    vC as Pe,
    w6 as Fe
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    bS as Ie,
    n_ as Le,
    nb as Re,
    r_ as ze,
    rb as G,
    yS as Be
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    n as Ve,
    r as He
} from "./2ea88c7a-lxyla91xs6iv7odf.js";
import {
    a as Ue,
    o as We,
    r as Ge,
    t as Ke
} from "./8d846022-bvik3sltoydb2o43.js";
import {
    i as qe,
    n as Je,
    r as Ye
} from "./91969468-go6qne2hmu650nnh.js";
import {
    n as K,
    t as Xe
} from "./4d271a7b-lmfmc5j4g60hegal.js";
import {
    n as Ze,
    r as Qe
} from "./58bafdef-7f1dms61calayw8e.js";
import {
    a as $e,
    i as et
} from "./e01e2324-bju6q98hx4twwzlr.js";
import {
    i as tt,
    t as nt
} from "./5dc32f04-f4s98j2padppeg3t.js";
import {
    c as rt,
    i as it,
    o as at,
    r as ot,
    s as st,
    t as ct
} from "./56dee4d8-g36fwhjdvs4zjnv9.js";
import {
    n as lt,
    t as ut
} from "./72bb039a-e6b65wz2ss8z63ab.js";
import {
    i as dt,
    n as ft,
    r as pt,
    t as mt
} from "./9eb56efa-b1zn6lh7rt993o7a.js";
import {
    i as ht,
    n as gt,
    r as q,
    t as _t
} from "./cc79834b-hcdp1ql9vfrtjijl.js";

function vt() {
    return O(`2779568043`)
}

function J() {
    return O(`3864712762`)
}

function yt() {
    return T(`522383056`, {
        disableExposureLog: !0
    }).get(`app_block_library_editing`, !1)
}
var bt = e((() => {
    re()
}));

function xt({
    loadSource: e,
    errorSource: t,
    errorType: n,
    networkPolicy: r,
    outcome: i,
    readySignal: a,
    renderMode: o,
    surface: s,
    variant: c
}) {
    let l = {
        network_policy: r,
        surface: s
    };
    return e != null && (l.load_source = e), t != null && (l.error_source = t), n != null && (l.error_type = n), i != null && (l.outcome = i), a != null && (l.ready_signal = a), o != null && (l.render_mode = o), c != null && (l.variant = c), l
}

function St() {
    return typeof performance < `u` ? performance.now() : Date.now()
}

function Ct(e) {
    return new TextEncoder().encode(e).byteLength / 1024
}

function wt(e) {
    return e instanceof Error ? e.name : `unknown`
}

function Tt(e, t, n = 1) {
    o.count(f.APP_BLOCKS, e, xt(t), n)
}

function Et(e, t, n) {
    o.hist(f.APP_BLOCKS, e, xt(n), t)
}

function Dt({
    content: e,
    metricTags: t,
    widgetRefSeenAtMs: n
}) {
    let r = (0, Ot.useRef)(St()),
        i = (0, Ot.useRef)(null),
        a = (0, Ot.useRef)(!1),
        o = (0, Ot.useRef)(!1),
        s = N(() => {
            i.current == null || typeof window > `u` || (window.cancelAnimationFrame(i.current), i.current = null)
        }),
        c = N((n = e) => {
            o.current || (o.current = !0, Et(jt, Ct(n), t))
        });
    return {
        cancelFirstPaintFrame: s,
        startRunMetrics: N((e, {
            deferFirstPaint: o = !1,
            deferPayloadSize: l = !1
        } = {}) => {
            let u = St(),
                d = !1,
                f = !1,
                p = !1,
                m = !1,
                h = null,
                g = null;
            s(), l || c(), Tt(Pt, t);
            let _ = (e, n) => {
                    f || (f = !0, Tt(Nt, {
                        ...t,
                        outcome: e,
                        readySignal: n
                    }))
                },
                v = (i, o) => {
                    if (!e() || p) return;
                    let s = St();
                    Et(Mt, s - i, {
                        ...t,
                        readySignal: o
                    }), !a.current && (a.current = !0, Et(kt, s - r.current, t), n != null && Et(It, s - n, t))
                },
                y = (e, n) => {
                    if (s(), typeof window > `u`) {
                        v(e, n);
                        return
                    }
                    i.current = window.requestAnimationFrame(() => {
                        if (t.loadSource === `saved_inline`) {
                            i.current = window.requestAnimationFrame(() => {
                                i.current = null, v(e, n)
                            });
                            return
                        }
                        i.current = null, v(e, n)
                    })
                },
                b = () => {
                    !e() || p || m || h == null || g == null || (m = !0, y(h, g))
                };
            return {
                markFirstPaint: b,
                markReady: n => {
                    !e() || d || (d = !0, h = St(), g = n, Et(Ft, h - u, {
                        ...t,
                        readySignal: n
                    }), o || b())
                },
                reportFailure: (n, r) => {
                    !e() || p || (p = !0, s(), Tt(At, {
                        ...t,
                        errorSource: n,
                        errorType: r
                    }), _(`failure`))
                },
                reportPayloadSize: t => {
                    !e() || p || c(t)
                },
                reportSuccess: t => {
                    e() && _(`success`, t)
                }
            }
        })
    }
}
var Ot, kt, At, jt, Mt, Nt, Pt, Ft, It, Lt = e((() => {
        s(), a(), Ot = n(ce()), kt = `app_block.first_render_time_ms`, At = `app_block.load.failure`, jt = `app_block.payload_size_kb`, Mt = `app_block.ready_to_first_paint_ms`, Nt = `app_block.render.outcome`, Pt = `app_block.render.start`, Ft = `app_block.sandbox_eval_to_ready_ms`, It = `app_block.widget_ref_to_first_paint_ms`
    })),
    Rt, zt = e((() => {
        Rt = `:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`
    })),
    Bt = e((() => {})),
    Vt, Ht = e((() => {
        Bt(), Vt = `/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`
    })),
    Ut, Wt = e((() => {
        Ut = `:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}:where(button):is(:enabled,:disabled){font-weight:500}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){appearance:none;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;background:0 0;border:0;border-radius:9999px;width:100%;min-width:0;height:24px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.4}:where(input[type=range])::-webkit-slider-runnable-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;margin-top:-7px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}:where(input[type=range])::-moz-range-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-progress{background:0 0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-thumb{box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}@media (hover:hover) and (pointer:fine){:where(input[type=range]:enabled:hover)::-webkit-slider-thumb{transform:scale(1.05)}:where(input[type=range]:enabled:hover)::-moz-range-thumb{transform:scale(1.05)}}:where(input[type=range]:focus-visible){outline:none}:where(input[type=range]:focus-visible)::-webkit-slider-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(input[type=range]:focus-visible)::-moz-range-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`
    })),
    Gt = e((() => {})),
    Kt, qt = e((() => {
        Gt(), Kt = `/cdn/assets/app-block-sandbox-b1cs4d5m.css`
    }));

function Jt(e, t) {
    return t ||= e.slice(0), Object.freeze(Object.defineProperties(e, {
        raw: {
            value: Object.freeze(t)
        }
    }))
}
var Y = e((() => {}));

function Yt(e) {
    return /<!doctype\b|<html[\s>]/i.test(e)
}

function Xt(e, t) {
    let n = e.match(/<\/body\s*>(?=\s*(?:<\/html\s*>)?\s*$)/i) ?? e.match(/<\/html\s*>\s*$/i);
    if (n?.index == null) return `${e}\n${t}`;
    let r = n.index;
    return [e.slice(0, r), t, e.slice(r)].join(`
`)
}

function Zt(e) {
    let t = e.trim().replaceAll(`_`, `-`);
    return t.length === 0 || !/^[A-Za-z0-9-]+$/.test(t) ? `en` : t
}

function Qt(e) {
    if (/^https?:\/\//i.test(e) || typeof window > `u`) return e;
    let t = window.location.origin;
    return new URL(e, t).toString()
}

function $t(e) {
    try {
        return new URL(e).origin
    } catch {
        return null
    }
}

function en(e) {
    return ln.has(e) ? e : `default`
}

function tn(e = []) {
    let t = Qt(Kt),
        n = Qt(Vt),
        r = [$t(on), $t(sn), $t(t), $t(n), ...cn, ...e.map($t)];
    return Array.from(new Set(r.filter(e => e != null)))
}

function nn(e, t = `light`, n = `en`, r = `default`, i = `inline`, {
    loadTailwind: a = !0,
    platform: o,
    progressiveStreaming: s = !1,
    syncPresentationSurface: c = !1,
    styleMode: l = `default`
} = {}) {
    let u = e.trim(),
        d = c ? dn : ``;
    if (!s && Yt(u)) return {
        html: c ? Xt(u, d) : u,
        expectReadySignal: !1
    };
    let f = Zt(n),
        p = l === `open` ? Rt : Ut,
        m = Qt(l === `open` ? Vt : Kt),
        h = en(r),
        g = t === `dark` ? `#212121` : `#ffffff`,
        _ = i === `skybridge` && o != null && o !== `web` || i === `inline`,
        v = [`color-scheme: ${t};`, _ ? `background-color: transparent;` : `background-color: var(--main-surface-primary, ${g});`].join(` `);
    return {
        expectReadySignal: a,
        frameColorScheme: t,
        html: `<!doctype html>
<html ${[`lang="${f}"`,`class="${t}"`,`data-chat-theme="${h}"`,`data-app-block-surface="${i}"`,`data-app-block-style-mode="${l}"`,o==null?null:`data-app-block-platform="${o}"`,`style="${v}"`].filter(e=>e!=null).join(` `)}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="${t}" />
    ${a?`<script>
      window.tailwind = window.tailwind || {};
      window.tailwind.config = { darkMode: "class" };
    <\/script>
    <script id="app-block-tailwind" src="${on}" defer><\/script>
    <script>
      (() => {
        const tailwindScript = document.getElementById("app-block-tailwind");
        const markFatal = () => {
          document.documentElement.setAttribute("data-fatal", "");
        };

        if (!(tailwindScript instanceof HTMLScriptElement)) {
          markFatal();
          return;
        }

        tailwindScript.addEventListener("error", markFatal, { once: true });
        tailwindScript.addEventListener(
          "load",
          () => {
            const readinessProbe = document.createElement("div");
            readinessProbe.className = "hidden";
            readinessProbe.setAttribute("aria-hidden", "true");

            const markReadyWhenStyled = () => {
              if (getComputedStyle(readinessProbe).display !== "none") {
                return;
              }

              styleObserver.disconnect();
              readinessProbe.remove();
              document.documentElement.setAttribute("data-ready", "");
            };
            const styleObserver = new MutationObserver(markReadyWhenStyled);
            styleObserver.observe(document.head, {
              childList: true,
              characterData: true,
              subtree: true,
            });

            document.body.append(readinessProbe);
            markReadyWhenStyled();
          },
          { once: true }
        );
      })();
    <\/script>`:``}
    ${a?`<link rel="stylesheet" href="${m}" />`:`<style>${p}</style>`}
    ${s?un:``}
  </head>
  <body>
    <main>
${s?``:u}
    </main>
    ${d}
    ${s?fn:``}
  </body>
</html>`
    }
}
var rn, an, on, sn, cn, ln, un, dn, fn, pn = e((() => {
    zt(), Ht(), Wt(), qt(), Y(), on = `https://cdn.tailwindcss.com`, sn = `https://images.openai.com`, cn = [`https://persistent.oaistatic.com`, `https://cdnjs.cloudflare.com`, `https://esm.sh`, `https://cdn.jsdelivr.net`, `https://unpkg.com`, `https://fonts.googleapis.com`, `https://fonts.gstatic.com`, `https://fonts.bunny.net`], ln = new Set([`default`, `blue`, `green`, `yellow`, `purple`, `pink`, `orange`, `black`]), un = `<style>
  @media (prefers-reduced-motion: no-preference) {
    [data-app-block-stream-enter] {
      animation: app-block-stream-enter 160ms ease-out both;
    }

    @keyframes app-block-stream-enter {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  }
</style>`, dn = String.raw(rn ||= Jt([`<script>
  (() => {
    function updateSurface(surface) {
      if (surface !== "inline" && surface !== "stage") {
        return;
      }

      const root = document.documentElement;
      const isDarkMode = root.classList.contains("dark");
      const stageBackground = isDarkMode ? "#212121" : "#ffffff";
      root.setAttribute("data-app-block-surface", surface);
      root.style.backgroundColor =
        surface === "inline"
          ? "transparent"
          : "var(--main-surface-primary, " + stageBackground + ")";
    }

    window.addEventListener("openai:set_globals", (event) => {
      const surface = event.detail?.globals?.__appBlockSurface;
      if (surface != null) {
        updateSurface(surface);
      }
    });

    const initialSurface =
      window.openai?.__appBlockSurface ??
      document.documentElement.getAttribute("data-app-block-surface") ??
      "inline";
    updateSurface(initialSurface);
  })();
<\/script>`])), fn = String.raw(an ||= Jt([`<script>
  (() => {
    const root = document.querySelector("main");
    if (!(root instanceof HTMLElement)) {
      return;
    }

    let hasFinalized = false;
    let previousHtml = null;

    function getRenderableHtml(html, isFinal) {
      if (isFinal) {
        return html;
      }

      let renderableHtml = html;
      const trailingTagStart = renderableHtml.lastIndexOf("<");
      if (trailingTagStart >= 0) {
        const trailingTag = renderableHtml.slice(trailingTagStart).toLowerCase();
        if ("</appblock>".startsWith(trailingTag)) {
          renderableHtml = renderableHtml.slice(0, trailingTagStart);
        }
      }

      const lowercaseHtml = renderableHtml.toLowerCase();
      const lastStyleStart = lowercaseHtml.lastIndexOf("<style");
      const lastStyleEnd = lowercaseHtml.lastIndexOf("</style");
      if (lastStyleStart > lastStyleEnd) {
        return renderableHtml.slice(0, lastStyleStart);
      }

      return renderableHtml;
    }

    function removePartialExecutionAttributes(fragment) {
      for (const element of fragment.querySelectorAll("*")) {
        for (const attribute of Array.from(element.attributes)) {
          const attributeName = attribute.name.toLowerCase();
          if (attributeName.startsWith("on") || attributeName === "srcdoc") {
            element.removeAttribute(attribute.name);
            continue;
          }

          if (
            /^(?:href|src|action|formaction|xlink:href)$/i.test(attribute.name) &&
            /^s*javascript:/i.test(attribute.value)
          ) {
            element.removeAttribute(attribute.name);
          }
        }

        if (element.matches("button, input, select, textarea, fieldset")) {
          element.setAttribute("disabled", "");
        }
        if (element.matches("a[href]")) {
          element.removeAttribute("href");
          element.setAttribute("aria-disabled", "true");
        }
        if (element.hasAttribute("contenteditable")) {
          element.setAttribute("contenteditable", "false");
        }
      }
    }

    function markNewElement(node) {
      if (!(node instanceof Element) || node.tagName === "STYLE") {
        return;
      }

      node.setAttribute("data-app-block-stream-enter", "");
      node.addEventListener(
        "animationend",
        () => node.removeAttribute("data-app-block-stream-enter"),
        { once: true }
      );
    }

    function synchronizeAttributes(currentElement, nextElement) {
      for (const attribute of Array.from(currentElement.attributes)) {
        if (
          attribute.name !== "data-app-block-stream-enter" &&
          !nextElement.hasAttribute(attribute.name)
        ) {
          currentElement.removeAttribute(attribute.name);
        }
      }

      for (const attribute of Array.from(nextElement.attributes)) {
        if (currentElement.getAttribute(attribute.name) !== attribute.value) {
          currentElement.setAttribute(attribute.name, attribute.value);
        }
      }
    }

    function synchronizeChildren(currentParent, nextParent, isFinal) {
      let currentChild = currentParent.firstChild;

      for (const nextChild of Array.from(nextParent.childNodes)) {
        if (currentChild === null) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.appendChild(insertedChild);
          markNewElement(insertedChild);
          continue;
        }

        const isMatchingNode =
          currentChild.nodeType === nextChild.nodeType &&
          currentChild.nodeName === nextChild.nodeName;
        if (!isMatchingNode) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.replaceChild(insertedChild, currentChild);
          markNewElement(insertedChild);
          currentChild = insertedChild.nextSibling;
          continue;
        }

        if (currentChild instanceof Element && nextChild instanceof Element) {
          synchronizeAttributes(currentChild, nextChild);
          synchronizeChildren(currentChild, nextChild, isFinal);
        } else if (currentChild.nodeValue !== nextChild.nodeValue) {
          currentChild.nodeValue = nextChild.nodeValue;
        }

        currentChild = currentChild.nextSibling;
      }

      if (!isFinal) {
        return;
      }

      while (currentChild !== null) {
        const nextCurrentChild = currentChild.nextSibling;
        currentChild.remove();
        currentChild = nextCurrentChild;
      }
    }

    function applyStreamUpdate(update) {
      if (
        hasFinalized ||
        update === null ||
        typeof update !== "object" ||
        typeof update.html !== "string"
      ) {
        return;
      }

      const isFinal = update.isFinal === true;
      if (!isFinal && previousHtml === update.html) {
        return;
      }
      previousHtml = update.html;

      const template = document.createElement("template");
      template.innerHTML = getRenderableHtml(update.html, isFinal);
      const scripts = Array.from(template.content.querySelectorAll("script"));
      for (const script of scripts) {
        script.remove();
      }

      if (!isFinal) {
        removePartialExecutionAttributes(template.content);
      }

      synchronizeChildren(root, template.content, isFinal);

      if (!isFinal) {
        return;
      }

      hasFinalized = true;
      for (const sourceScript of scripts) {
        const executableScript = document.createElement("script");
        for (const attribute of Array.from(sourceScript.attributes)) {
          executableScript.setAttribute(attribute.name, attribute.value);
        }
        executableScript.textContent = sourceScript.textContent;
        root.appendChild(executableScript);
      }
    }

    window.addEventListener("openai:set_globals", (event) => {
      const globals = event.detail && event.detail.globals;
      if (globals && Object.hasOwn(globals, "__appBlockStream")) {
        applyStreamUpdate(globals.__appBlockStream);
      }
    });

    if (window.openai && window.openai.__appBlockStream) {
      applyStreamUpdate(window.openai.__appBlockStream);
    }
  })();
<\/script>`], [`<script>
  (() => {
    const root = document.querySelector("main");
    if (!(root instanceof HTMLElement)) {
      return;
    }

    let hasFinalized = false;
    let previousHtml = null;

    function getRenderableHtml(html, isFinal) {
      if (isFinal) {
        return html;
      }

      let renderableHtml = html;
      const trailingTagStart = renderableHtml.lastIndexOf("<");
      if (trailingTagStart >= 0) {
        const trailingTag = renderableHtml.slice(trailingTagStart).toLowerCase();
        if ("</appblock>".startsWith(trailingTag)) {
          renderableHtml = renderableHtml.slice(0, trailingTagStart);
        }
      }

      const lowercaseHtml = renderableHtml.toLowerCase();
      const lastStyleStart = lowercaseHtml.lastIndexOf("<style");
      const lastStyleEnd = lowercaseHtml.lastIndexOf("</style");
      if (lastStyleStart > lastStyleEnd) {
        return renderableHtml.slice(0, lastStyleStart);
      }

      return renderableHtml;
    }

    function removePartialExecutionAttributes(fragment) {
      for (const element of fragment.querySelectorAll("*")) {
        for (const attribute of Array.from(element.attributes)) {
          const attributeName = attribute.name.toLowerCase();
          if (attributeName.startsWith("on") || attributeName === "srcdoc") {
            element.removeAttribute(attribute.name);
            continue;
          }

          if (
            /^(?:href|src|action|formaction|xlink:href)$/i.test(attribute.name) &&
            /^\\s*javascript:/i.test(attribute.value)
          ) {
            element.removeAttribute(attribute.name);
          }
        }

        if (element.matches("button, input, select, textarea, fieldset")) {
          element.setAttribute("disabled", "");
        }
        if (element.matches("a[href]")) {
          element.removeAttribute("href");
          element.setAttribute("aria-disabled", "true");
        }
        if (element.hasAttribute("contenteditable")) {
          element.setAttribute("contenteditable", "false");
        }
      }
    }

    function markNewElement(node) {
      if (!(node instanceof Element) || node.tagName === "STYLE") {
        return;
      }

      node.setAttribute("data-app-block-stream-enter", "");
      node.addEventListener(
        "animationend",
        () => node.removeAttribute("data-app-block-stream-enter"),
        { once: true }
      );
    }

    function synchronizeAttributes(currentElement, nextElement) {
      for (const attribute of Array.from(currentElement.attributes)) {
        if (
          attribute.name !== "data-app-block-stream-enter" &&
          !nextElement.hasAttribute(attribute.name)
        ) {
          currentElement.removeAttribute(attribute.name);
        }
      }

      for (const attribute of Array.from(nextElement.attributes)) {
        if (currentElement.getAttribute(attribute.name) !== attribute.value) {
          currentElement.setAttribute(attribute.name, attribute.value);
        }
      }
    }

    function synchronizeChildren(currentParent, nextParent, isFinal) {
      let currentChild = currentParent.firstChild;

      for (const nextChild of Array.from(nextParent.childNodes)) {
        if (currentChild === null) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.appendChild(insertedChild);
          markNewElement(insertedChild);
          continue;
        }

        const isMatchingNode =
          currentChild.nodeType === nextChild.nodeType &&
          currentChild.nodeName === nextChild.nodeName;
        if (!isMatchingNode) {
          const insertedChild = nextChild.cloneNode(true);
          currentParent.replaceChild(insertedChild, currentChild);
          markNewElement(insertedChild);
          currentChild = insertedChild.nextSibling;
          continue;
        }

        if (currentChild instanceof Element && nextChild instanceof Element) {
          synchronizeAttributes(currentChild, nextChild);
          synchronizeChildren(currentChild, nextChild, isFinal);
        } else if (currentChild.nodeValue !== nextChild.nodeValue) {
          currentChild.nodeValue = nextChild.nodeValue;
        }

        currentChild = currentChild.nextSibling;
      }

      if (!isFinal) {
        return;
      }

      while (currentChild !== null) {
        const nextCurrentChild = currentChild.nextSibling;
        currentChild.remove();
        currentChild = nextCurrentChild;
      }
    }

    function applyStreamUpdate(update) {
      if (
        hasFinalized ||
        update === null ||
        typeof update !== "object" ||
        typeof update.html !== "string"
      ) {
        return;
      }

      const isFinal = update.isFinal === true;
      if (!isFinal && previousHtml === update.html) {
        return;
      }
      previousHtml = update.html;

      const template = document.createElement("template");
      template.innerHTML = getRenderableHtml(update.html, isFinal);
      const scripts = Array.from(template.content.querySelectorAll("script"));
      for (const script of scripts) {
        script.remove();
      }

      if (!isFinal) {
        removePartialExecutionAttributes(template.content);
      }

      synchronizeChildren(root, template.content, isFinal);

      if (!isFinal) {
        return;
      }

      hasFinalized = true;
      for (const sourceScript of scripts) {
        const executableScript = document.createElement("script");
        for (const attribute of Array.from(sourceScript.attributes)) {
          executableScript.setAttribute(attribute.name, attribute.value);
        }
        executableScript.textContent = sourceScript.textContent;
        root.appendChild(executableScript);
      }
    }

    window.addEventListener("openai:set_globals", (event) => {
      const globals = event.detail && event.detail.globals;
      if (globals && Object.hasOwn(globals, "__appBlockStream")) {
        applyStreamUpdate(globals.__appBlockStream);
      }
    });

    if (window.openai && window.openai.__appBlockStream) {
      applyStreamUpdate(window.openai.__appBlockStream);
    }
  })();
<\/script>`]))
}));

function mn() {
    "use forget";
    let e = (0, hn.useContext)(gn);
    if (e == null) throw Error(`useAppBlockExpandedView must be used within AppBlockExpandedViewProvider`);
    return e
}
var hn, gn, _n = e((() => {
        hn = n(ce()), gn = (0, hn.createContext)(null)
    })),
    vn, yn = e((() => {
        D(), R(), vn = b(() => le(() => import(`./7aa2b76f-lggdi6s76uwdiwyo.js`).then(e => e.AppBlockFullscreenTurnComposer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])))
    }));

function bn(e) {
    "use forget";
    let t = (0, Cn.c)(42),
        {
            additionalResourceDomains: n,
            canSubmitTurn: r,
            children: i,
            code: a,
            conversationId: o,
            headerAction: s,
            source: c,
            styleMode: l,
            title: u
        } = e,
        d = `app-block:${c.appBlockId}:${(0,wn.useId)()}`,
        f = (0, wn.useRef)(null),
        [p, m] = (0, wn.useState)(null),
        h = c.appBlockId,
        g = c.libraryFileId,
        _ = c.messageId,
        v = c.refIndex,
        y = o ?? null,
        b;
    t[0] !== y || t[1] !== h ? (b = {
        appBlockId: h,
        conversationId: y
    }, t[0] = y, t[1] = h, t[2] = b) : b = t[2];
    let x = b,
        S = ie(be),
        C;
    t[3] !== S || t[4] !== x ? (C = he(S, x), t[3] = S, t[4] = x, t[5] = C) : C = t[5];
    let w = C,
        T = S?.appBlockId === h && S.conversationId === y && (S.isOriginalVersion === !0 || S.versionNumber != null),
        ee = w || T,
        te;
    t[6] !== S || t[7] !== d || t[8] !== x ? (te = Oe(S, x, d), t[6] = S, t[7] = d, t[8] = x, t[9] = te) : te = t[9];
    let E = te,
        ne;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = () => {
        f.current?.focus()
    }, t[10] = ne) : ne = t[10];
    let D = ne,
        re = p?.supportsAtomicMove ? p : void 0,
        O;
    t[11] !== h || t[12] !== g || t[13] !== _ || t[14] !== v ? (O = {
        appBlockId: h,
        libraryFileId: g,
        messageId: _,
        refIndex: v
    }, t[11] = h, t[12] = g, t[13] = _, t[14] = v, t[15] = O) : O = t[15];
    let k;
    t[16] !== n || t[17] !== r || t[18] !== a || t[19] !== s || t[20] !== l || t[21] !== re || t[22] !== O || t[23] !== u ? (k = {
        additionalResourceDomains: n,
        canSubmitTurn: r,
        code: a,
        focusOnClose: D,
        headerAction: s,
        sharedPreview: re,
        source: O,
        styleMode: l,
        title: u
    }, t[16] = n, t[17] = r, t[18] = a, t[19] = s, t[20] = l, t[21] = re, t[22] = O, t[23] = u, t[24] = k) : k = t[24];
    let A = k,
        j, M;
    t[25] !== A || t[26] !== w || t[27] !== x ? (j = () => {
        w && fe(x, A)
    }, M = [A, w, x], t[25] = A, t[26] = w, t[27] = x, t[28] = j, t[29] = M) : (j = t[28], M = t[29]), (0, wn.useEffect)(j, M);
    let N;
    t[30] !== A || t[31] !== E || t[32] !== x ? (N = () => {
        pe(x, E, A)
    }, t[30] = A, t[31] = E, t[32] = x, t[33] = N) : N = t[33];
    let ae = N,
        P;
    t[34] !== ee || t[35] !== T || t[36] !== ae || t[37] !== p ? (P = {
        isExpanded: ee,
        isViewingHistoricalVersion: T,
        openExpandedView: ae,
        setSharedPreview: m,
        sharedPreview: p,
        triggerRef: f
    }, t[34] = ee, t[35] = T, t[36] = ae, t[37] = p, t[38] = P) : P = t[38];
    let F = P,
        oe;
    return t[39] !== i || t[40] !== F ? (oe = (0, Tn.jsx)(gn.Provider, {
        value: F,
        children: i
    }), t[39] = i, t[40] = F, t[41] = oe) : oe = t[41], oe
}

function xn(e) {
    "use forget";
    let t = (0, Cn.c)(17),
        {
            canSubmitFullscreenTurn: n,
            children: r,
            conversation: i,
            headerAction: a,
            headerTitleContent: o,
            title: s
        } = e,
        c = q(),
        l;
    t[0] === i ? l = t[1] : (l = () => i == null ? 0 : W(i).height$() ?? 0, t[0] = i, t[1] = l);
    let u = ie(l),
        d = c === `fullscreen` && n && i != null ? u : 0,
        f = o ?? s,
        p;
    t[2] === f ? p = t[3] : (p = (0, Tn.jsx)(`span`, {
        className: `text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,
        children: f
    }), t[2] = f, t[3] = p);
    let m;
    t[4] !== a || t[5] !== p ? (m = (0, Tn.jsxs)(_t.Header, {
        className: `pb-1`,
        children: [p, a]
    }), t[4] = a, t[5] = p, t[6] = m) : m = t[6];
    let h;
    t[7] === d ? h = t[8] : (h = {
        paddingBottom: d
    }, t[7] = d, t[8] = h);
    let g;
    t[9] === r ? g = t[10] : (g = (0, Tn.jsx)(`div`, {
        className: `h-full min-h-0`,
        children: r
    }), t[9] = r, t[10] = g);
    let _;
    t[11] !== h || t[12] !== g ? (_ = (0, Tn.jsx)(_t.Body, {
        className: `bg-token-bg-primary overflow-hidden`,
        style: h,
        children: g
    }), t[11] = h, t[12] = g, t[13] = _) : _ = t[13];
    let v;
    return t[14] !== m || t[15] !== _ ? (v = (0, Tn.jsxs)(Tn.Fragment, {
        children: [m, _]
    }), t[14] = m, t[15] = _, t[16] = v) : v = t[16], v
}

function Sn(e) {
    "use forget";
    let t = (0, Cn.c)(5),
        {
            conversation: n,
            paneId: r
        } = e,
        i = ht(),
        a = i.usesViewTransition ? i.targetPresentation === `fullscreen` : i.presentation === `fullscreen` && !i.isTransitioning,
        o;
    return t[0] !== n || t[1] !== r || t[2] !== i.isTransitioning || t[3] !== a ? (o = a ? (0, Tn.jsx)(vn, {
        conversation: n,
        disableAutoFocus: i.isTransitioning,
        paneId: r
    }) : null, t[0] = n, t[1] = r, t[2] = i.isTransitioning, t[3] = a, t[4] = o) : o = t[4], o
}
var Cn, wn, Tn, En = e((() => {
    Cn = ue(), U(), gt(), l(), wn = n(ce()), _n(), H(), yn(), Tn = oe()
}));

function Dn() {
    "use forget";
    let e = (0, On.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, kn.jsx)(`div`, {
        className: `text-token-text-secondary flex h-full min-h-[120px] w-full items-center justify-center p-4 text-center text-sm`,
        role: `status`,
        children: (0, kn.jsx)(L, {
            id: `chatgpt.app_block.preview.code_execution_disabled`,
            defaultMessage: `Code execution is disabled for this workspace.`
        })
    }), e[0] = t) : t = e[0], t
}
var On, kn, An = e((() => {
    On = ue(), se(), kn = oe()
}));

function jn(e, t, n) {
    "use forget";
    let r = (0, Nn.c)(11),
        i = t === void 0 || t,
        a = de(),
        o;
    r[0] !== a || r[1] !== e ? (o = e ? a.formatMessage(X.generatingApp, {
        title: e
    }) : a.formatMessage(X.creatingInterface), r[0] = a, r[1] = e, r[2] = o) : o = r[2];
    let s = o,
        c;
    r[3] !== s || r[4] !== a || r[5] !== n ? (c = n ?? [s, a.formatMessage(X.sketchingInterface), a.formatMessage(X.shapingLayout), a.formatMessage(X.arrangingPieces), a.formatMessage(X.polishingVisuals), a.formatMessage(X.tuningInputs), a.formatMessage(X.addingInteractivity), a.formatMessage(X.wiringControls), a.formatMessage(X.composingInteractions), a.formatMessage(X.calibratingPreview), a.formatMessage(X.refiningDetails)], r[3] = s, r[4] = a, r[5] = n, r[6] = c) : c = r[6];
    let l = c,
        [u, d] = (0, Pn.useState)(0),
        f, p;
    return r[7] !== i || r[8] !== l.length ? (f = () => {
        if (!i) return;
        let e = window.setInterval(() => {
            d(e => Math.min(e + 1, l.length - 1))
        }, In);
        return () => {
            window.clearInterval(e)
        }
    }, p = [i, l.length], r[7] = i, r[8] = l.length, r[9] = f, r[10] = p) : (f = r[9], p = r[10]), (0, Pn.useEffect)(f, p), l[u] ?? l[0] ?? ``
}

function Mn(e) {
    "use forget";
    let t = (0, Nn.c)(2),
        {
            loadingLabels: n,
            title: r
        } = e,
        i = jn(r, !0, n),
        a;
    return t[0] === i ? a = t[1] : (a = (0, Fn.jsx)(`div`, {
        "aria-atomic": `true`,
        "aria-live": `polite`,
        className: `not-prose mt-4 mb-1 flex min-h-[220px] w-full cursor-wait`,
        role: `status`,
        children: (0, Fn.jsx)(nt, {
            className: `aspect-auto min-h-0 flex-1 pt-2`,
            label: i
        })
    }), t[0] = i, t[1] = a), a
}
var Nn, Pn, Fn, In, X, Ln, Rn = e((() => {
    Nn = ue(), tt(), E(), Pn = n(ce()), se(), Fn = oe(), In = 2800, X = I({
        generatingApp: {
            id: `appBlock.loadingState.generatingApp`,
            defaultMessage: `Generating {title}`
        },
        creatingInterface: {
            id: `appBlock.loadingState.creatingInterface`,
            defaultMessage: `Creating the interface`
        },
        sketchingInterface: {
            id: `appBlock.loadingState.sketchingInterface`,
            defaultMessage: `Sketching the interface`
        },
        shapingLayout: {
            id: `appBlock.loadingState.shapingLayout`,
            defaultMessage: `Shaping the layout`
        },
        arrangingPieces: {
            id: `appBlock.loadingState.arrangingPieces`,
            defaultMessage: `Arranging the pieces`
        },
        polishingVisuals: {
            id: `appBlock.loadingState.polishingVisuals`,
            defaultMessage: `Polishing the visuals`
        },
        tuningInputs: {
            id: `appBlock.loadingState.tuningInputs`,
            defaultMessage: `Tuning the inputs`
        },
        addingInteractivity: {
            id: `appBlock.loadingState.addingInteractivity`,
            defaultMessage: `Adding interactivity`
        },
        wiringControls: {
            id: `appBlock.loadingState.wiringControls`,
            defaultMessage: `Wiring the controls`
        },
        composingInteractions: {
            id: `appBlock.loadingState.composingInteractions`,
            defaultMessage: `Composing the interactions`
        },
        calibratingPreview: {
            id: `appBlock.loadingState.calibratingPreview`,
            defaultMessage: `Calibrating the preview`
        },
        refiningDetails: {
            id: `appBlock.loadingState.refiningDetails`,
            defaultMessage: `Refining the details`
        }
    }), Ln = e => {
        "use forget";
        let t = (0, Nn.c)(11),
            {
                isVisible: n,
                title: r
            } = e,
            i = jn(r, n),
            a = !n,
            o = n ? `grid-rows-[1fr] opacity-100` : `grid-rows-[0fr] opacity-0`,
            s;
        t[0] === o ? s = t[1] : (s = S(`grid shrink-0 transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none`, o), t[0] = o, t[1] = s);
        let c = n && `loading-shimmer-pure-text motion-reduce:animate-none`,
            l;
        t[2] === c ? l = t[3] : (l = S(`text-token-text-secondary inline-block font-sans font-medium`, c), t[2] = c, t[3] = l);
        let u;
        t[4] !== i || t[5] !== l ? (u = (0, Fn.jsx)(`div`, {
            className: `min-h-0 overflow-hidden`,
            children: (0, Fn.jsx)(`div`, {
                className: `pb-3`,
                children: (0, Fn.jsx)(`span`, {
                    className: l,
                    children: i
                })
            })
        }), t[4] = i, t[5] = l, t[6] = u) : u = t[6];
        let d;
        return t[7] !== a || t[8] !== s || t[9] !== u ? (d = (0, Fn.jsx)(`div`, {
            "aria-atomic": `true`,
            "aria-hidden": a,
            "aria-live": `polite`,
            className: s,
            role: `status`,
            children: u
        }), t[7] = a, t[8] = s, t[9] = u, t[10] = d) : d = t[10], d
    }
}));

function zn({
    appBlockId: e,
    conversation: t
}) {
    return t == null ? null : ct(t).get(e) ?? null
}

function Bn(e) {
    return e?.serverId$() ?? void 0
}

function Vn({
    currentContentFileId: e,
    libraryFileId: t,
    libraryFileVersionNumber: n,
    serverThreadId: r,
    source: i
}) {
    let a = i?.libraryFileId ?? t ?? null,
        o = i?.currentContentFileId ?? e ?? (a == null ? null : ke(a));
    return {
        contentFileId: o,
        libraryContentKey: [a, o, i?.latestPatchMessageId ?? i?.libraryFileVersionNumber ?? n ?? i?.currentContentFileId ?? e ?? null, r ?? null].join(`\0`),
        libraryFileId: a
    }
}

function Hn({
    contentFileId: e,
    libraryContentKey: t,
    libraryFileId: n,
    onContentStateChange: r,
    serverThreadId: i
}) {
    if (n == null || e == null) {
        r(null);
        return
    }
    let a = new AbortController;
    return ve({
        abortSignal: a.signal,
        fileId: e,
        serverThreadId: i
    }).then(e => {
        a.signal.aborted || r({
            content: e,
            key: t,
            status: `loaded`
        })
    }).catch(e => {
        a.signal.aborted || r({
            content: null,
            key: t,
            status: u(e) ? `missing` : `failed`
        })
    }), () => {
        a.abort()
    }
}

function Un({
    appBlockId: e,
    contentFileId: t,
    currentContentFileId: n,
    libraryContent: r,
    libraryContentKey: i,
    libraryFileId: a,
    libraryFileVersionNumber: o,
    source: s
}) {
    let c = s ?? Wn({
        appBlockId: e,
        contentFileId: t,
        currentContentFileId: n,
        libraryFileId: a,
        libraryFileVersionNumber: o
    });
    return c == null ? null : r == null || r.key !== i ? c.latestPatchMessageId != null && c.content == null ? {
        ...c,
        content: null
    } : c : {
        ...c,
        content: r.content
    }
}

function Wn({
    appBlockId: e,
    contentFileId: t,
    currentContentFileId: n,
    libraryFileId: r,
    libraryFileVersionNumber: i
}) {
    return r == null ? null : {
        appBlockId: e,
        content: null,
        currentContentFileId: n ?? t,
        entrypoint: null,
        iconSvg: null,
        language: `html`,
        latestPatchMessageId: null,
        libraryFileId: r,
        libraryFileName: null,
        libraryFileVersionNumber: i ?? null,
        messageId: ``,
        mimeType: null,
        refIndex: 0,
        styleMode: null,
        title: null
    }
}
var Gn = e((() => {
        _(), B(), ot()
    })),
    Kn = t({
        AppBlock: () => Yn,
        AppBlockCollapsedPreview: () => rr,
        AppBlockPreviewLoadingState: () => mr,
        AppBlockSandboxPreview: () => dr
    });

function qn(e) {
    let t = e.search(kr),
        n = t === -1 ? e : e.slice(0, t),
        r = n.toLowerCase(),
        i = r.lastIndexOf(`<style`);
    return i > r.lastIndexOf(`</style`) && (n = n.slice(0, i)), n
}

function Jn(e) {
    let t = qn(e);
    if (t.trim() === ``) return !1;
    if (typeof document > `u`) return /<[^>]+>|[^\s<]/.test(t);
    let n = document.createElement(`template`);
    n.innerHTML = t;
    for (let e of n.content.querySelectorAll(Ar)) e.remove();
    return (n.content.textContent?.trim().length ?? 0) > 0 || n.content.querySelector(jr) != null
}

function Yn(e) {
    "use forget";
    let t = (0, Z.c)(153),
        {
            additionalResourceDomains: n,
            appBlockId: r,
            authoritativeCode: i,
            authoritativeSource: a,
            bind: o,
            code: s,
            collapseWhenSuperseded: c,
            currentContentFileId: l,
            displayMode: u,
            editingEnabled: d,
            expandedHeaderAction: f,
            expandedViewEnabled: p,
            id: m,
            captureConsoleMessages: h,
            clientThreadId: g,
            iconSvg: _,
            inlineHeight: v,
            isStreaming: y,
            isTurnStreaming: b,
            libraryFileId: S,
            libraryFileVersionNumber: C,
            loadingLabels: w,
            messageId: T,
            onConsoleMessagesChange: te,
            onReadyChange: E,
            previewLoadingLabel: D,
            progressiveStreaming: re,
            ref: O,
            refIndex: k,
            styleMode: j,
            title: M,
            variant: N,
            wasStreamingWhenFirstSeen: ae,
            widgetName: P,
            widgetRefSeenAtMs: F
        } = e,
        oe = c === void 0 || c,
        I = h !== void 0 && h,
        L = y !== void 0 && y,
        se = b !== void 0 && b,
        ce = re !== void 0 && re,
        le = N === void 0 ? `inline` : N,
        R = x(),
        ue = (0, Q.useContext)(ut),
        de;
    t[0] === R ? de = t[1] : (de = () => R != null && me(R), t[0] = R, t[1] = de);
    let fe = ie(de),
        he;
    t[2] !== g || t[3] !== R ? (he = g == null ? R : ee(g), t[2] = g, t[3] = R, t[4] = he) : he = t[4];
    let ge = he,
        _e = T != null && k != null ? st({
            messageId: T,
            refIndex: k
        }) : void 0,
        z = r ?? _e ?? st({
            messageId: T ?? m,
            refIndex: k ?? 0
        }),
        B = ie(() => Te({
            conversation: R ?? null,
            instanceId: z,
            messageId: T,
            refIndex: k
        })) ?? u,
        ye = ie(() => a != null || B != null ? null : zn({
            appBlockId: z,
            conversation: R ?? null
        })),
        V = a ?? ye,
        be;
    t[5] === R ? be = t[6] : (be = () => Bn(R ?? null), t[5] = R, t[6] = be);
    let H = ie(be),
        xe = ne(R?.id),
        Se = H ?? xe,
        we;
    t[7] !== l || t[8] !== S || t[9] !== C || t[10] !== Se || t[11] !== V ? (we = Vn({
        currentContentFileId: l,
        libraryFileId: S,
        libraryFileVersionNumber: C,
        serverThreadId: Se,
        source: V
    }), t[7] = l, t[8] = S, t[9] = C, t[10] = Se, t[11] = V, t[12] = we) : we = t[12];
    let U = we,
        [Ee, De] = (0, Q.useState)(null),
        [Oe, ke] = (0, Q.useState)(0),
        Ae;
    t[13] !== Oe || t[14] !== U.libraryContentKey ? (Ae = [U.libraryContentKey, Oe], t[13] = Oe, t[14] = U.libraryContentKey, t[15] = Ae) : Ae = t[15];
    let je = Ae.join(`\0`),
        Me, Ne;
    t[16] !== i || t[17] !== je || t[18] !== U.contentFileId || t[19] !== U.libraryFileId || t[20] !== B || t[21] !== Se ? (Me = () => {
        if (!(i != null || B === `collapsed`)) return Hn({
            contentFileId: U.contentFileId,
            libraryContentKey: je,
            libraryFileId: U.libraryFileId,
            onContentStateChange: De,
            serverThreadId: Se
        })
    }, Ne = [i, U.contentFileId, U.libraryFileId, je, B, Se], t[16] = i, t[17] = je, t[18] = U.contentFileId, t[19] = U.libraryFileId, t[20] = B, t[21] = Se, t[22] = Me, t[23] = Ne) : (Me = t[22], Ne = t[23]), (0, Q.useEffect)(Me, Ne);
    let W = Un({
            appBlockId: z,
            contentFileId: U.contentFileId,
            currentContentFileId: l,
            libraryContent: Ee,
            libraryContentKey: je,
            libraryFileId: S,
            libraryFileVersionNumber: C,
            source: V
        }),
        Pe = Ee?.key === je ? Ee : null,
        Ie;
    t[24] !== W?.libraryFileId || t[25] !== S ? (Ie = () => Fe(W?.libraryFileId ?? S), t[24] = W?.libraryFileId, t[25] = S, t[26] = Ie) : Ie = t[26];
    let Le = ie(Ie),
        Re = W?.libraryFileVersionNumber ?? C,
        ze = Le != null && (Re == null || Le.versionNumber >= Re) ? Le.code : void 0,
        G = ze ?? i ?? W?.content ?? s ?? null,
        Be = W?.iconSvg ?? _ ?? null,
        Ve = W?.libraryFileId ?? S,
        He = Ve == null && i == null && ze == null && l == null && V?.currentContentFileId == null && V?.latestPatchMessageId == null,
        Ue = ae === !1 && le === `inline` && He,
        We;
    t[27] !== s || t[28] !== He || t[29] !== T || t[30] !== G || t[31] !== k || t[32] !== V ? (We = He ? V == null ? T != null && k != null && s != null && G === s ? {
        messageId: T,
        refIndex: k
    } : null : V.messageId.length > 0 && V.content != null && G === V.content ? {
        messageId: V.messageId,
        refIndex: V.refIndex
    } : null : null, t[27] = s, t[28] = He, t[29] = T, t[30] = G, t[31] = k, t[32] = V, t[33] = We) : We = t[33];
    let Ge = We,
        Ke = le === `artifact`,
        qe = W?.styleMode ?? j ?? (Ke && ce ? `open` : void 0),
        Je;
    t[34] !== Ve || t[35] !== qe ? (Je = at({
        explicitStyleMode: qe,
        libraryFileId: Ve
    }), t[34] = Ve, t[35] = qe, t[36] = Je) : Je = t[36];
    let Ye = Je,
        K = W?.title ?? M,
        Xe;
    t[37] === R ? Xe = t[38] : (Xe = () => R != null && A(R) ? `work` : `chat`, t[37] = R, t[38] = Xe);
    let Ze = ie(Xe),
        Qe;
    t[39] === d ? Qe = t[40] : (Qe = d ?? yt(), t[39] = d, t[40] = Qe);
    let $e = Qe,
        et = p ?? $e,
        tt = ce,
        nt = Ke && Ye === `open`,
        rt = B === `collapsed` || B == null && oe && W?.latestPatchMessageId != null && W.latestPatchMessageId !== T,
        it = s != null || l != null,
        ot;
    t[41] !== $e || t[42] !== g || t[43] !== s || t[44] !== R?.id || t[45] !== l || t[46] !== z || t[47] !== f || t[48] !== C || t[49] !== T || t[50] !== Ve || t[51] !== Ye || t[52] !== K || t[53] !== k || t[54] !== Se || t[55] !== V?.messageId ? (ot = async e => {
        let t = s;
        if (t == null && l != null) try {
            t = await ve({
                abortSignal: new AbortController().signal,
                fileId: l,
                serverThreadId: Se
            })
        } catch {
            return
        }
        t != null && pe({
            appBlockId: z,
            conversationId: R?.id ?? g ?? null,
            isOriginalVersion: !0,
            versionNumber: C ?? void 0
        }, `app-block:${z}:original`, {
            canSubmitTurn: $e,
            code: t,
            headerAction: f,
            focusOnClose: () => {
                e.isConnected && e.focus()
            },
            source: {
                appBlockId: z,
                libraryFileId: Ve,
                messageId: V?.messageId ?? T,
                refIndex: k
            },
            styleMode: Ye,
            title: K
        })
    }, t[41] = $e, t[42] = g, t[43] = s, t[44] = R?.id, t[45] = l, t[46] = z, t[47] = f, t[48] = C, t[49] = T, t[50] = Ve, t[51] = Ye, t[52] = K, t[53] = k, t[54] = Se, t[55] = V?.messageId, t[56] = ot) : ot = t[56], R?.id, V?.messageId;
    let ct = ot;
    if (L && !tt) {
        let e;
        return t[57] !== w || t[58] !== K ? (e = (0, $.jsx)(Mn, {
            loadingLabels: w,
            title: K
        }), t[57] = w, t[58] = K, t[59] = e) : e = t[59], e
    }
    let lt = fe && s != null;
    if (Pe?.status === `missing` && !lt) return null;
    if (rt) {
        let e = it ? ct : void 0,
            n;
        return t[60] !== K || t[61] !== e ? (n = (0, $.jsx)(lr, {
            onView: e,
            title: K
        }), t[60] = K, t[61] = e, t[62] = n) : n = t[62], n
    }
    let dt = G ?? (tt && L ? `` : null);
    if (dt == null) {
        if (W?.latestPatchMessageId != null) {
            let e = R?.id ?? g,
                n = Pe?.status === `failed`,
                r;
            t[63] === ke ? r = t[64] : (r = () => ke(Xn), t[63] = ke, t[64] = r);
            let i;
            return t[65] !== z || t[66] !== Ke || t[67] !== Be || t[68] !== D || t[69] !== K || t[70] !== e || t[71] !== n || t[72] !== r ? (i = (0, $.jsx)(er, {
                appBlockId: z,
                conversationId: e,
                hasFailed: n,
                iconSvg: Be,
                onRetry: r,
                previewLoadingLabel: D,
                showHeader: Ke,
                title: K
            }), t[65] = z, t[66] = Ke, t[67] = Be, t[68] = D, t[69] = K, t[70] = e, t[71] = n, t[72] = r, t[73] = i) : i = t[73], i
        }
        let e;
        return t[74] !== w || t[75] !== K ? (e = (0, $.jsx)(Mn, {
            loadingLabels: w,
            title: K
        }), t[74] = w, t[75] = K, t[76] = e) : e = t[76], e
    }
    let ft;
    t[77] !== g || t[78] !== Ze || t[79] !== L || t[80] !== se || t[81] !== T || t[82] !== k ? (ft = !L && !se && g != null && T != null && k != null && vt() ? {
        reference: {
            clientThreadId: g,
            messageId: T,
            referenceIndex: k
        },
        target: {
            kind: `app_block`,
            metadata: {
                tab: Ze
            }
        }
    } : void 0, t[77] = g, t[78] = Ze, t[79] = L, t[80] = se, t[81] = T, t[82] = k, t[83] = ft) : ft = t[83];
    let pt = ft;
    if (ue) {
        let e = R?.id ?? g,
            r;
        t[84] !== n || t[85] !== o || t[86] !== I || t[87] !== z || t[88] !== m || t[89] !== v || t[90] !== L || t[91] !== te || t[92] !== E || t[93] !== D || t[94] !== Ye || t[95] !== K || t[96] !== O || t[97] !== dt || t[98] !== tt || t[99] !== e || t[100] !== le || t[101] !== F ? (r = (0, $.jsx)(dr, {
            additionalResourceDomains: n,
            appBlockId: z,
            bind: o,
            captureConsoleMessages: I,
            clientThreadId: e,
            code: dt,
            id: m,
            inlineHeight: v,
            isStreaming: L,
            onConsoleMessagesChange: te,
            onReadyChange: E,
            previewLoadingLabel: D,
            progressiveStreaming: tt,
            ref: O,
            styleMode: Ye,
            title: K,
            variant: le,
            widgetRefSeenAtMs: F
        }), t[84] = n, t[85] = o, t[86] = I, t[87] = z, t[88] = m, t[89] = v, t[90] = L, t[91] = te, t[92] = E, t[93] = D, t[94] = Ye, t[95] = K, t[96] = O, t[97] = dt, t[98] = tt, t[99] = e, t[100] = le, t[101] = F, t[102] = r) : r = t[102];
        let i;
        return t[103] !== L || t[104] !== Be || t[105] !== K || t[106] !== nt || t[107] !== r ? (i = (0, $.jsx)($n, {
            canOpen: !1,
            iconSvg: Be,
            isShareReady: !1,
            isStreaming: L,
            showArtifactCard: nt,
            title: K,
            children: r
        }), t[103] = L, t[104] = Be, t[105] = K, t[106] = nt, t[107] = r, t[108] = i) : i = t[108], i
    }
    let mt = R?.id ?? g,
        ht = V?.messageId ?? T,
        gt;
    t[109] !== z || t[110] !== Ve || t[111] !== k || t[112] !== ht ? (gt = {
        appBlockId: z,
        libraryFileId: Ve,
        messageId: ht,
        refIndex: k
    }, t[109] = z, t[110] = Ve, t[111] = k, t[112] = ht, t[113] = gt) : gt = t[113];
    let q = nt && et && !L,
        _t = R?.id ?? g,
        J;
    t[114] !== Ge || t[115] !== P ? (J = Ge == null ? void 0 : {
        contentReferenceIndex: Ge.refIndex,
        messageId: Ge.messageId,
        widgetName: P ?? Ce.AppBlock,
        widgetType: Ce.AppBlock
    }, t[114] = Ge, t[115] = P, t[116] = J) : J = t[116];
    let bt;
    t[117] !== n || t[118] !== o || t[119] !== I || t[120] !== z || t[121] !== pt || t[122] !== m || t[123] !== v || t[124] !== Ue || t[125] !== L || t[126] !== te || t[127] !== E || t[128] !== Be || t[129] !== D || t[130] !== Ye || t[131] !== K || t[132] !== O || t[133] !== dt || t[134] !== ge || t[135] !== tt || t[136] !== nt || t[137] !== q || t[138] !== _t || t[139] !== J || t[140] !== le || t[141] !== F ? (bt = (0, $.jsx)(Zn, {
        additionalResourceDomains: n,
        appBlockId: z,
        bind: o,
        canOpen: q,
        captureConsoleMessages: I,
        clientThreadId: _t,
        code: dt,
        feedback: pt,
        iconSvg: Be,
        id: m,
        inlineHeight: v,
        isStreaming: L,
        onConsoleMessagesChange: te,
        onReadyChange: E,
        previewLoadingLabel: D,
        progressiveStreaming: tt,
        isSavedInlineLoad: Ue,
        ref: O,
        showArtifactCard: nt,
        shareConversation: ge,
        shareTarget: J,
        styleMode: Ye,
        title: K,
        variant: le,
        widgetRefSeenAtMs: F
    }), t[117] = n, t[118] = o, t[119] = I, t[120] = z, t[121] = pt, t[122] = m, t[123] = v, t[124] = Ue, t[125] = L, t[126] = te, t[127] = E, t[128] = Be, t[129] = D, t[130] = Ye, t[131] = K, t[132] = O, t[133] = dt, t[134] = ge, t[135] = tt, t[136] = nt, t[137] = q, t[138] = _t, t[139] = J, t[140] = le, t[141] = F, t[142] = bt) : bt = t[142];
    let xt;
    return t[143] !== n || t[144] !== $e || t[145] !== f || t[146] !== Ye || t[147] !== K || t[148] !== dt || t[149] !== mt || t[150] !== gt || t[151] !== bt ? (xt = (0, $.jsx)(bn, {
        additionalResourceDomains: n,
        canSubmitTurn: $e,
        code: dt,
        conversationId: mt,
        headerAction: f,
        styleMode: Ye,
        source: gt,
        title: K,
        children: bt
    }), t[143] = n, t[144] = $e, t[145] = f, t[146] = Ye, t[147] = K, t[148] = dt, t[149] = mt, t[150] = gt, t[151] = bt, t[152] = xt) : xt = t[152], xt
}

function Xn(e) {
    return e + 1
}

function Zn(e) {
    "use forget";
    let t = (0, Z.c)(72),
        {
            additionalResourceDomains: n,
            appBlockId: r,
            bind: i,
            canOpen: a,
            captureConsoleMessages: o,
            clientThreadId: s,
            code: c,
            feedback: l,
            iconSvg: u,
            id: d,
            inlineHeight: f,
            isStreaming: p,
            onConsoleMessagesChange: m,
            onReadyChange: h,
            previewLoadingLabel: _,
            progressiveStreaming: v,
            isSavedInlineLoad: y,
            ref: b,
            shareConversation: x,
            shareTarget: S,
            showArtifactCard: C,
            styleMode: w,
            title: T,
            variant: ee,
            widgetRefSeenAtMs: te
        } = e,
        {
            isExpanded: E,
            isViewingHistoricalVersion: ne,
            openExpandedView: D,
            setSharedPreview: re,
            sharedPreview: ie,
            triggerRef: O
        } = mn(),
        k = (0, Q.useContext)(Ne),
        A;
    t[0] === n ? A = t[1] : (A = n ?? [], t[0] = n, t[1] = A);
    let j;
    t[2] !== c || t[3] !== d || t[4] !== w || t[5] !== A ? (j = [d, w, c, ...A], t[2] = c, t[3] = d, t[4] = w, t[5] = A, t[6] = j) : j = t[6];
    let M = j.join(`\0`),
        [ae, P] = (0, Q.useState)(null),
        F = !p && ae === M,
        oe;
    t[7] === D ? oe = t[8] : (oe = () => {
        Se(), D()
    }, t[7] = D, t[8] = oe);
    let I = oe,
        L;
    t[9] !== h || t[10] !== M ? (L = (e, t) => {
        P(e ? M : null), h?.(e, t)
    }, t[9] = h, t[10] = M, t[11] = L) : L = t[11];
    let se = L,
        ce;
    t[12] !== n || t[13] !== r || t[14] !== i || t[15] !== o || t[16] !== s || t[17] !== c || t[18] !== se || t[19] !== d || t[20] !== f || t[21] !== y || t[22] !== p || t[23] !== m || t[24] !== _ || t[25] !== v || t[26] !== b || t[27] !== w || t[28] !== T || t[29] !== ee || t[30] !== te ? (ce = (0, $.jsx)(dr, {
        appBlockId: r,
        additionalResourceDomains: n,
        bind: i,
        code: c,
        id: d,
        inlineHeight: f,
        isStreaming: p,
        captureConsoleMessages: o,
        clientThreadId: s,
        onConsoleMessagesChange: m,
        onReadyChange: se,
        presentationSurface: `inline`,
        previewLoadingLabel: _,
        progressiveStreaming: v,
        isSavedInlineLoad: y,
        ref: b,
        styleMode: w,
        title: T,
        variant: ee,
        widgetRefSeenAtMs: te
    }), t[12] = n, t[13] = r, t[14] = i, t[15] = o, t[16] = s, t[17] = c, t[18] = se, t[19] = d, t[20] = f, t[21] = y, t[22] = p, t[23] = m, t[24] = _, t[25] = v, t[26] = b, t[27] = w, t[28] = T, t[29] = ee, t[30] = te, t[31] = ce) : ce = t[31];
    let le;
    t[32] !== k || t[33] !== ce ? (le = {
        element: ce,
        sandboxPolicy: k
    }, t[32] = k, t[33] = ce, t[34] = le) : le = t[34];
    let R = le,
        ue;
    t[35] === R ? ue = t[36] : (ue = () => R, t[35] = R, t[36] = ue);
    let de = N(ue),
        fe;
    t[37] !== r || t[38] !== s || t[39] !== de || t[40] !== re ? (fe = e => {
        if (e == null) return;
        let {
            preview: t,
            sourceToken: n
        } = De({
            appBlockId: r,
            content: de(),
            conversationId: s ?? null,
            inlineContainer: e
        });
        return re(t), () => {
            let e = be();
            _e(t, n, e?.sharedPreview === t)
        }
    }, t[37] = r, t[38] = s, t[39] = de, t[40] = re, t[41] = fe) : fe = t[41];
    let pe = fe,
        me, he;
    t[42] !== R || t[43] !== ie ? (he = () => {
        ie != null && z(ie, R)
    }, me = [R, ie], t[42] = R, t[43] = ie, t[44] = me, t[45] = he) : (me = t[44], he = t[45]), g(he, me);
    let ge = ne ? I : void 0,
        B;
    t[46] !== u || t[47] !== ge || t[48] !== T || t[49] !== O ? (B = (0, $.jsx)(rr, {
        iconSvg: u,
        onOpen: ge,
        openButtonRef: O,
        title: T
    }), t[46] = u, t[47] = ge, t[48] = T, t[49] = O, t[50] = B) : B = t[50];
    let ve = E ? B : null,
        ye;
    t[51] === pe ? ye = t[52] : (ye = (0, $.jsx)(`div`, {
        ref: pe,
        className: `w-full`
    }), t[51] = pe, t[52] = ye);
    let V;
    t[53] !== a || t[54] !== l || t[55] !== I || t[56] !== u || t[57] !== F || t[58] !== p || t[59] !== x || t[60] !== S || t[61] !== C || t[62] !== ye || t[63] !== T || t[64] !== O ? (V = (0, $.jsx)($n, {
        canOpen: a,
        expandButtonRef: O,
        feedback: l,
        iconSvg: u,
        isShareReady: F,
        shareConversation: x,
        shareTarget: S,
        isStreaming: p,
        showArtifactCard: C,
        title: T,
        onOpen: I,
        children: ye
    }), t[53] = a, t[54] = l, t[55] = I, t[56] = u, t[57] = F, t[58] = p, t[59] = x, t[60] = S, t[61] = C, t[62] = ye, t[63] = T, t[64] = O, t[65] = V) : V = t[65];
    let H;
    t[66] !== E || t[67] !== V ? (H = (0, $.jsx)(`div`, {
        hidden: E,
        children: V
    }), t[66] = E, t[67] = V, t[68] = H) : H = t[68];
    let xe;
    return t[69] !== ve || t[70] !== H ? (xe = (0, $.jsxs)($.Fragment, {
        children: [ve, H]
    }), t[69] = ve, t[70] = H, t[71] = xe) : xe = t[71], xe
}

function Qn(e) {
    "use forget";
    let t = (0, Z.c)(14),
        {
            action: n,
            className: r,
            fallbackTitle: i,
            leading: a,
            title: o,
            titleClassName: s
        } = e,
        c;
    t[0] === r ? c = t[1] : (c = S(`flex items-center justify-between gap-3`, r), t[0] = r, t[1] = c);
    let l = s ?? `truncate text-base font-semibold`,
        u;
    t[2] === l ? u = t[3] : (u = S(`text-token-text-primary`, l), t[2] = l, t[3] = u);
    let d = o ?? i,
        f;
    t[4] !== u || t[5] !== d ? (f = (0, $.jsx)(`div`, {
        className: `min-w-0`,
        children: (0, $.jsx)(`div`, {
            className: u,
            children: d
        })
    }), t[4] = u, t[5] = d, t[6] = f) : f = t[6];
    let p;
    t[7] !== a || t[8] !== f ? (p = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-3`,
        children: [a, f]
    }), t[7] = a, t[8] = f, t[9] = p) : p = t[9];
    let m;
    return t[10] !== n || t[11] !== c || t[12] !== p ? (m = (0, $.jsxs)(`div`, {
        className: c,
        children: [p, n]
    }), t[10] = n, t[11] = c, t[12] = p, t[13] = m) : m = t[13], m
}

function $n(e) {
    "use forget";
    let t = (0, Z.c)(20),
        {
            canOpen: n,
            children: r,
            expandButtonRef: i,
            feedback: a,
            iconSvg: o,
            isShareReady: s,
            isStreaming: c,
            onOpen: l,
            shareConversation: u,
            shareTarget: d,
            showArtifactCard: f,
            title: p
        } = e,
        h = de(),
        g;
    t[0] === h ? g = t[1] : (g = h.formatMessage({
        id: `6z1y4r`,
        defaultMessage: `App preview`
    }), t[0] = h, t[1] = g);
    let _ = g,
        v;
    t[2] !== n || t[3] !== r || t[4] !== i || t[5] !== _ || t[6] !== o || t[7] !== s || t[8] !== c || t[9] !== l || t[10] !== u || t[11] !== d || t[12] !== f || t[13] !== p ? (v = f ? (0, $.jsxs)(`div`, {
        className: S(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`, c && `cursor-wait`),
        "data-testid": `app-block-artifact-card`,
        children: [(0, $.jsx)(Qn, {
            action: (0, $.jsx)(Mr, {
                canOpen: n,
                conversation: u,
                expandButtonRef: i,
                isReady: s,
                onOpen: l,
                target: d
            }),
            className: `min-h-13 px-4 py-2`,
            fallbackTitle: _,
            leading: c ? (0, $.jsx)(m, {
                className: `icon-md text-token-text-primary shrink-0`
            }) : (0, $.jsx)(ar, {
                iconSvg: o
            }),
            title: p
        }), (0, $.jsx)(`div`, {
            children: r
        })]
    }) : (0, $.jsx)(Nr, {
        conversation: u,
        isReady: s,
        target: d,
        children: r
    }), t[2] = n, t[3] = r, t[4] = i, t[5] = _, t[6] = o, t[7] = s, t[8] = c, t[9] = l, t[10] = u, t[11] = d, t[12] = f, t[13] = p, t[14] = v) : v = t[14];
    let y;
    t[15] === a ? y = t[16] : (y = a == null ? null : (0, $.jsx)(tr, {
        ...a
    }), t[15] = a, t[16] = y);
    let b;
    return t[17] !== v || t[18] !== y ? (b = (0, $.jsxs)(`div`, {
        className: `group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,
        "data-app-block-preview": `true`,
        children: [v, y]
    }), t[17] = v, t[18] = y, t[19] = b) : b = t[19], b
}

function er(e) {
    "use forget";
    let t = (0, Z.c)(18),
        {
            appBlockId: n,
            conversationId: r,
            hasFailed: i,
            iconSvg: a,
            onRetry: o,
            previewLoadingLabel: s,
            showHeader: c,
            title: l
        } = e,
        u = ie(be),
        d = de(),
        f;
    t[0] === d ? f = t[1] : (f = d.formatMessage({
        id: `chatgpt.app_block.preview_shell.fallback_title`,
        defaultMessage: `App preview`
    }), t[0] = d, t[1] = f);
    let p = f;
    if (he(u, {
            appBlockId: n,
            conversationId: r ?? null
        })) {
        let e;
        return t[2] !== a || t[3] !== l ? (e = (0, $.jsx)(rr, {
            iconSvg: a,
            title: l
        }), t[2] = a, t[3] = l, t[4] = e) : e = t[4], e
    }
    let m;
    t[5] !== p || t[6] !== a || t[7] !== c || t[8] !== l ? (m = c ? (0, $.jsx)(Qn, {
        className: `mb-2`,
        fallbackTitle: p,
        leading: (0, $.jsx)(ar, {
            iconSvg: a
        }),
        title: l
    }) : null, t[5] = p, t[6] = a, t[7] = c, t[8] = l, t[9] = m) : m = t[9];
    let h;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
        minHeight: gr
    }, t[10] = h) : h = t[10];
    let g;
    t[11] !== i || t[12] !== o || t[13] !== s ? (g = (0, $.jsx)(`div`, {
        className: `relative w-full`,
        style: h,
        children: i ? (0, $.jsx)(hr, {
            onRetry: o
        }) : (0, $.jsx)(mr, {
            label: s
        })
    }), t[11] = i, t[12] = o, t[13] = s, t[14] = g) : g = t[14];
    let _;
    return t[15] !== m || t[16] !== g ? (_ = (0, $.jsxs)(`div`, {
        className: `group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,
        "data-app-block-preview": `true`,
        children: [m, g]
    }), t[15] = m, t[16] = g, t[17] = _) : _ = t[17], _
}

function tr(e) {
    "use forget";
    let t = (0, Z.c)(5),
        {
            reference: n,
            target: r
        } = e,
        [i, a] = (0, Q.useState)(!1);
    if (ie(nr)) return null;
    let o;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, $.jsx)(je, {}), t[0] = o) : o = t[0];
    let s;
    return t[1] !== i || t[2] !== n || t[3] !== r ? (s = (0, $.jsx)(`div`, {
        className: `flex justify-end pt-1`,
        children: (0, $.jsx)(et, {
            onOpenChange: a,
            open: i,
            reference: n,
            target: r,
            triggerButton: o
        })
    }), t[1] = i, t[2] = n, t[3] = r, t[4] = s) : s = t[4], s
}

function nr() {
    return Qe()
}

function rr(e) {
    "use forget";
    let t = (0, Z.c)(23),
        {
            iconSvg: n,
            onOpen: i,
            openButtonRef: a,
            title: o
        } = e,
        s = de(),
        c, l, u, d, f;
    t[0] !== s || t[1] !== i || t[2] !== a || t[3] !== o ? (l = s.formatMessage({
        id: `XBBNdF`,
        defaultMessage: `App preview`
    }), f = `not-prose relative clear-both my-4 w-full max-w-full`, d = `shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`, c = Qn, u = i == null ? void 0 : (0, $.jsx)(r, {
        ref: a,
        color: `secondary`,
        label: s.formatMessage({
            id: `chatgpt.app_block.collapsed_preview.open.aria_label`,
            defaultMessage: `Open {title} in side pane`
        }, {
            title: o ?? l
        }),
        onClick: i,
        type: `button`,
        children: (0, $.jsx)(L, {
            id: `chatgpt.app_block.collapsed_preview.open`,
            defaultMessage: `Open`
        })
    }), t[0] = s, t[1] = i, t[2] = a, t[3] = o, t[4] = c, t[5] = l, t[6] = u, t[7] = d, t[8] = f) : (c = t[4], l = t[5], u = t[6], d = t[7], f = t[8]);
    let p;
    t[9] === n ? p = t[10] : (p = (0, $.jsx)(ir, {
        iconSvg: n
    }), t[9] = n, t[10] = p);
    let m;
    t[11] !== c || t[12] !== l || t[13] !== u || t[14] !== p || t[15] !== o ? (m = (0, $.jsx)(c, {
        action: u,
        className: `w-full`,
        fallbackTitle: l,
        leading: p,
        title: o,
        titleClassName: `truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`
    }), t[11] = c, t[12] = l, t[13] = u, t[14] = p, t[15] = o, t[16] = m) : m = t[16];
    let h;
    t[17] !== d || t[18] !== m ? (h = (0, $.jsx)(`div`, {
        className: d,
        children: m
    }), t[17] = d, t[18] = m, t[19] = h) : h = t[19];
    let g;
    return t[20] !== f || t[21] !== h ? (g = (0, $.jsx)(`div`, {
        className: f,
        children: h
    }), t[20] = f, t[21] = h, t[22] = g) : g = t[22], g
}

function ir(e) {
    "use forget";
    let t = (0, Z.c)(2),
        {
            iconSvg: n
        } = e,
        r;
    return t[0] === n ? r = t[1] : (r = (0, $.jsx)(`div`, {
        className: `bg-token-bg-tertiary flex size-12 shrink-0 items-center justify-center rounded-xl`,
        children: (0, $.jsx)(ar, {
            className: `text-token-text-secondary`,
            iconSvg: n
        })
    }), t[0] = n, t[1] = r), r
}

function ar(e) {
    "use forget";
    let t = (0, Z.c)(5),
        {
            className: n,
            iconSvg: r
        } = e,
        i = n === void 0 ? `text-token-text-primary` : n,
        a;
    t[0] === r ? a = t[1] : (a = or(r), t[0] = r, t[1] = a);
    let o = a,
        s;
    return t[2] !== i || t[3] !== o ? (s = o == null ? (0, $.jsx)(Re, {
        "aria-hidden": `true`,
        className: S(`icon-md shrink-0`, i)
    }) : (0, $.jsx)(`span`, {
        "aria-hidden": `true`,
        className: S(`icon-md shrink-0`, i),
        children: (0, $.jsx)(Ae, {
            svgString: o,
            className: `h-full w-full`
        })
    }), t[2] = i, t[3] = o, t[4] = s) : s = t[4], s
}

function or(e) {
    if (e == null) return null;
    let t = e.trim();
    if (t.length === 0 || t.length > wr || !t.startsWith(`<svg `) || !t.endsWith(`</svg>`)) return null;
    let n = 0,
        r = !1,
        i = !1;
    for (let e of t.matchAll(Tr)) {
        let a = e.index;
        if (a == null || t.slice(n, a).trim() !== ``) return null;
        n = a + e[0].length;
        let o = e[1].toLowerCase(),
            s = e[2] ?? ``;
        if (!Dr.has(o)) return null;
        o === `svg` && (r = !0), o === `path` && (i = !0);
        let c = e[0].startsWith(`</`);
        if (c && s.trim() !== `` || !c && !sr(s)) return null
    }
    return t.slice(n).trim() === `` && r && i ? t : null
}

function sr(e) {
    let t = e.replace(Er, ``).trim();
    if (t !== `` && t !== `/`) return !1;
    for (let t of e.matchAll(Er)) {
        let e = t[1],
            n = t[2];
        if (!Or.has(e) || !cr(e, n)) return !1
    }
    return !0
}

function cr(e, t) {
    return e === `xmlns` ? t === `http://www.w3.org/2000/svg` : e === `fill` ? t === `currentColor` || t === `none` : e === `width` || e === `height` ? /^\d+(\.\d+)?$/.test(t) : e === `viewBox` ? /^[\d.\-\s]+$/.test(t) : e === `d` && /^[AaCcHhLlMmQqSsTtVvZz0-9,.\-\s]+$/.test(t)
}

function lr(e) {
    "use forget";
    let t = (0, Z.c)(9),
        {
            onView: n,
            title: r
        } = e,
        i = de(),
        a;
    t[0] === i ? a = t[1] : (a = i.formatMessage({
        id: `UPARFQ`,
        defaultMessage: `app`
    }), t[0] = i, t[1] = a);
    let o = r ?? a,
        s;
    t[2] === o ? s = t[3] : (s = (0, $.jsx)(`span`, {
        children: (0, $.jsx)(L, {
            id: `chatgpt.app_block.history_created`,
            defaultMessage: `Created {appName}`,
            values: {
                appName: o
            }
        })
    }), t[2] = o, t[3] = s);
    let c;
    t[4] === n ? c = t[5] : (c = n == null ? null : (0, $.jsxs)($.Fragment, {
        children: [(0, $.jsx)(`span`, {
            "aria-hidden": `true`,
            children: (0, $.jsx)(L, {
                id: `chatgpt.app_block.history_separator`,
                defaultMessage: `•`
            })
        }), (0, $.jsx)(`button`, {
            className: `text-token-text-secondary hover:text-token-text-primary font-semibold transition-colors`,
            onClick: e => {
                n(e.currentTarget)
            },
            type: `button`,
            children: (0, $.jsx)(L, {
                id: `chatgpt.app_block.history_view`,
                defaultMessage: `View`
            })
        })]
    }), t[4] = n, t[5] = c);
    let l;
    return t[6] !== s || t[7] !== c ? (l = (0, $.jsxs)(`div`, {
        className: `text-token-text-tertiary my-3 flex w-fit items-center gap-1.5 text-sm`,
        children: [s, c]
    }), t[6] = s, t[7] = c, t[8] = l) : l = t[8], l
}

function ur(e) {
    "use forget";
    let t = (0, Z.c)(12),
        {
            className: n,
            onClick: i,
            ref: a
        } = e,
        o = de(),
        s;
    t[0] === o ? s = t[1] : (s = o.formatMessage({
        id: `I094Lq`,
        defaultMessage: `Open app`
    }), t[0] = o, t[1] = s);
    let c = s,
        l;
    t[2] === i ? l = t[3] : (l = e => {
        e.stopPropagation(), i()
    }, t[2] = i, t[3] = l);
    let u;
    t[4] !== c || t[5] !== a || t[6] !== l ? (u = (0, $.jsx)(r, {
        ref: a,
        type: `button`,
        icon: Le,
        color: `ghost`,
        size: `medium`,
        label: c,
        className: `size-9 rounded-full border-0 px-2 py-2 shadow-none`,
        onClick: l
    }), t[4] = c, t[5] = a, t[6] = l, t[7] = u) : u = t[7];
    let d;
    return t[8] !== n || t[9] !== c || t[10] !== u ? (d = (0, $.jsx)(v, {
        label: c,
        className: n,
        children: u
    }), t[8] = n, t[9] = c, t[10] = u, t[11] = d) : d = t[11], d
}

function dr(e) {
    "use forget";
    let t = (0, Z.c)(190),
        {
            appBlockId: n,
            additionalResourceDomains: r,
            bind: i,
            clientThreadId: a,
            code: o,
            id: s,
            captureConsoleMessages: c,
            inlineHeight: l,
            isStreaming: u,
            onConsoleMessagesChange: f,
            onReadyChange: p,
            presentationSurface: m,
            previewLoadingLabel: h,
            progressiveStreaming: _,
            isSavedInlineLoad: v,
            ref: b,
            styleMode: x,
            surface: C,
            title: w,
            variant: T,
            widgetRefSeenAtMs: ee
        } = e,
        E = u !== void 0 && u,
        ne = _ !== void 0 && _,
        D = v !== void 0 && v,
        re = x === void 0 ? `default` : x,
        O = C === void 0 ? `inline` : C,
        k = T === void 0 ? `inline` : T,
        A = de(),
        j = (0, Q.useRef)(null),
        M = (0, Q.useRef)(null),
        P = Ue(i),
        [F, oe] = (0, Q.useState)(P.values),
        I = te(F, P.values) ? F : P.values;
    I !== F && oe(I);
    let se = [...P.callbacks.keys()],
        [ce, le] = (0, Q.useState)(se),
        R = te(ce, se) ? ce : se;
    R !== ce && le(R);
    let ue = (0, Q.useRef)(I),
        fe = (0, Q.useRef)(R),
        pe = (0, Q.useRef)(P.callbacks),
        me = i != null,
        he = (0, Q.useRef)(!1),
        ge = (0, Q.useRef)(!1),
        _e = (0, Q.useRef)(null),
        z = (0, Q.useRef)(null),
        B = (0, Q.useRef)(null),
        ve = (0, Q.useRef)(null),
        ye = (0, Q.useRef)(null),
        V = (0, Q.useRef)(null),
        be = (0, Q.useRef)(null),
        H = (0, Q.useRef)(null),
        xe = (0, Q.useRef)(0),
        Se = (0, Q.useRef)(null),
        Ce = (0, Q.useRef)(null),
        we;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (we = [], t[0] = we) : we = t[0];
    let U = (0, Q.useRef)(we),
        Te = d(),
        Ee = ie(y),
        {
            isInternalPreview: De,
            networkPolicy: Oe
        } = (0, Q.useContext)(Ne),
        ke = Oe === void 0 ? `none` : Oe,
        Ae = Ye() || De,
        je = qe(a) && !De,
        Me = je || De && ke === `deps-only`,
        W = Te ? `dark` : `light`,
        Pe = A.locale,
        Fe;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (Fe = {
        status: `streaming`
    }, t[1] = Fe) : Fe = t[1];
    let [Ie, Le] = (0, Q.useState)(Fe), Re = Ie.status === `finalized` && Ie.html !== o, ze = ne && !E && (k === `artifact` || Ie.status === `failed`), G = ne && O === `inline` && Ie.status !== `static` && !ze && !Re, Be = G && E && k === `artifact` && !Jn(o), Ke = Be ? 0 : _r, Je = l ?? `intrinsic-height`, Xe = Ae ? `execution-enabled` : `execution-disabled`, Ze = Me ? `network-enabled` : `network-disabled`, Qe = De ? `internal-preview` : `workspace-preview`, $e = me ? `bindings-enabled` : `bindings-disabled`, et = G ? `progressive-app-block-stream` : o, tt;
    t[2] === r ? tt = t[3] : (tt = r ?? [], t[2] = r, t[3] = tt);
    let nt;
    t[4] !== Ee || t[5] !== Pe || t[6] !== re || t[7] !== O || t[8] !== Je || t[9] !== Xe || t[10] !== Ze || t[11] !== Qe || t[12] !== $e || t[13] !== et || t[14] !== tt || t[15] !== W ? (nt = [W, Ee, O, Je, re, Pe, Xe, Ze, Qe, $e, et, ...tt], t[4] = Ee, t[5] = Pe, t[6] = re, t[7] = O, t[8] = Je, t[9] = Xe, t[10] = Ze, t[11] = Qe, t[12] = $e, t[13] = et, t[14] = tt, t[15] = W, t[16] = nt) : nt = t[16];
    let rt = nt.join(`\0`),
        it;
    t[17] === r ? it = t[18] : (it = tn(r), t[17] = r, t[18] = it);
    let at = it,
        ot = D ? `saved_inline` : void 0,
        st = Me ? `deps_only` : `disabled`,
        ct = O === `inline` ? k : void 0,
        lt = G ? `progressive` : `static`,
        ut;
    t[19] !== O || t[20] !== ot || t[21] !== st || t[22] !== ct || t[23] !== lt ? (ut = {
        loadSource: ot,
        networkPolicy: st,
        surface: O,
        variant: ct,
        renderMode: lt
    }, t[19] = O, t[20] = ot, t[21] = st, t[22] = ct, t[23] = lt, t[24] = ut) : ut = t[24];
    let dt = ut,
        [ft, pt] = (0, Q.useState)(0),
        [mt, ht] = (0, Q.useState)(null),
        gt = mt?.signature === rt ? mt.status : null,
        q = gt === `ready`,
        _t = q || gt === `failed_after_ready`,
        vt = G && gt === `failed`,
        J = !E && !G && gt === `failed`,
        yt = m ?? O,
        bt = yt === `stage` || l != null,
        xt = l == null ? O : `stage`,
        Ct = ne && yt === `inline` && k === `inline`,
        Tt = G && yt === `inline` && E && !J,
        Et;
    t[25] !== o || t[26] !== dt || t[27] !== ee ? (Et = {
        content: o,
        metricTags: dt,
        widgetRefSeenAtMs: ee
    }, t[25] = o, t[26] = dt, t[27] = ee, t[28] = Et) : Et = t[28];
    let {
        cancelFirstPaintFrame: Ot,
        startRunMetrics: kt
    } = Dt(Et), At, jt;
    t[29] === q ? (At = t[30], jt = t[31]) : (At = () => {
        q && V.current?.markFirstPaint()
    }, jt = [q], t[29] = q, t[30] = At, t[31] = jt), g(At, jt);
    let Mt, Nt;
    t[32] !== q || t[33] !== p ? (Mt = () => {
        p?.(q)
    }, Nt = [q, p], t[32] = q, t[33] = p, t[34] = Mt, t[35] = Nt) : (Mt = t[34], Nt = t[35]), (0, Q.useEffect)(Mt, Nt);
    let Pt, Ft;
    t[36] !== R || t[37] !== I || t[38] !== P.callbacks ? (Pt = () => {
        ue.current = I, fe.current = R, pe.current = P.callbacks
    }, Ft = [R, I, P.callbacks], t[36] = R, t[37] = I, t[38] = P.callbacks, t[39] = Pt, t[40] = Ft) : (Pt = t[39], Ft = t[40]), g(Pt, Ft);
    let It;
    t[41] === Symbol.for(`react.memo_cache_sentinel`) ? (It = e => {
        M.current === e && j.current?.updateAppBlockMessenger?.(Ge(e, ue.current, fe.current))
    }, t[41] = It) : It = t[41];
    let Lt = N(It),
        Rt;
    t[42] === Lt ? Rt = t[43] : (Rt = e => {
        let t = M.current;
        if (t == null) return;
        let n = We(e, t),
            r = n && pe.current.get(n.name);
        if (n != null && r) {
            let e = () => {
                ae.postTask(() => Lt(t))
            };
            try {
                Promise.resolve(r(...n.args)).then(e, e)
            } catch {
                e()
            }
        }
    }, t[42] = Lt, t[43] = Rt);
    let zt = N(Rt),
        Bt;
    t[44] !== me || t[45] !== q || t[46] !== Lt ? (Bt = () => {
        let e = M.current;
        !q || !me || e == null || Lt(e)
    }, t[44] = me, t[45] = q, t[46] = Lt, t[47] = Bt) : Bt = t[47];
    let Vt;
    t[48] !== R || t[49] !== I || t[50] !== me || t[51] !== q || t[52] !== Lt ? (Vt = [R, I, me, q, Lt], t[48] = R, t[49] = I, t[50] = me, t[51] = q, t[52] = Lt, t[53] = Vt) : Vt = t[53], (0, Q.useEffect)(Bt, Vt);
    let Ht, Ut;
    t[54] !== l || t[55] !== q || t[56] !== m ? (Ht = () => {
        !q || m == null || j.current?.updateAppBlockSurface?.(l == null ? m : `stage`)
    }, Ut = [l, q, m], t[54] = l, t[55] = q, t[56] = m, t[57] = Ht, t[58] = Ut) : (Ht = t[57], Ut = t[58]), (0, Q.useEffect)(Ht, Ut);
    let Wt, Gt;
    t[59] === Symbol.for(`react.memo_cache_sentinel`) ? (Wt = () => ({
        clearCapturedConsoleMessages: () => {
            U.current = []
        },
        captureScreenshotDataUrl: async () => (await j.current?.screenshot())?.imageBase64 ?? null,
        focus: () => {
            j.current?.focus()
        }
    }), Gt = [], t[59] = Wt, t[60] = Gt) : (Wt = t[59], Gt = t[60]), (0, Q.useImperativeHandle)(b, Wt, Gt);
    let Kt;
    t[61] === Symbol.for(`react.memo_cache_sentinel`) ? (Kt = () => {
        Se.current != null && (window.clearTimeout(Se.current), Se.current = null)
    }, t[61] = Kt) : Kt = t[61];
    let qt = N(Kt),
        Jt;
    t[62] === Symbol.for(`react.memo_cache_sentinel`) ? (Jt = () => {
        Ce.current != null && (window.clearTimeout(Ce.current), Ce.current = null)
    }, t[62] = Jt) : Jt = t[62];
    let Y = N(Jt),
        Yt;
    t[63] !== q || t[64] !== G ? (Yt = () => {
        if (!G || !q || ye.current == null) return;
        let e = ve.current,
            t = j.current;
        if (e == null || t?.updateAppBlockStream == null || ge.current) return;
        let n = xe.current;
        ve.current = null, z.current = St(), B.current = e.html, e.isFinal && (ge.current = !0);
        let r = () => xe.current !== n || ye.current == null ? Promise.resolve() : t.updateAppBlockStream?.(e) ?? Promise.resolve(),
            i = H.current,
            a = i == null ? r() : i.then(r);
        H.current = a, a.then(() => {
            H.current === a && (H.current = null);
            let t = ye.current;
            xe.current !== n || t == null || (Jn(e.html) && t.markFirstPaint(), e.isFinal && (t.reportPayloadSize(e.html), Le({
                status: `finalized`,
                html: e.html
            })))
        }, e => {
            H.current === a && (H.current = null), xe.current === n && (e instanceof DOMException && e.name === `AbortError` || be.current?.(`stream_update`, wt(e)))
        })
    }, t[63] = q, t[64] = G, t[65] = Yt) : Yt = t[65];
    let Xt = N(Yt),
        Zt;
    t[66] !== Ee || t[67] !== Me || t[68] !== c || t[69] !== qt || t[70] !== Y || t[71] !== o || t[72] !== xt || t[73] !== me || t[74] !== Ae || t[75] !== Re || t[76] !== D || t[77] !== E || t[78] !== Pe || t[79] !== f || t[80] !== p || t[81] !== m || t[82] !== rt || t[83] !== Ie.status || t[84] !== ze || t[85] !== G || t[86] !== kt || t[87] !== re || t[88] !== W ? (Zt = () => {
        if (!Ae) return;
        if (Ie.status === `failed`) {
            if (E) return;
            Le({
                status: `static`
            }), pt(pr);
            return
        }(Re || ze && Ie.status !== `static`) && Le({
            status: `static`
        });
        let e = G && j.current?.updateAppBlockStream != null;
        if (G && !e) {
            E || Le({
                status: `static`
            });
            return
        }
        he.current = !0, ge.current = !1, _e.current = null, z.current = null, B.current = null, ve.current = null, ye.current = null, V.current = null, be.current = null, H.current = null, Y(), xe.current += 1;
        let t = xe.current;
        qt(), ht(null), M.current = me ? crypto.randomUUID() : null;
        let {
            expectReadySignal: n,
            html: r,
            frameColorScheme: i
        } = nn(o, W, Pe, Ee, xt, {
            loadTailwind: Me,
            progressiveStreaming: e,
            syncPresentationSurface: m != null,
            styleMode: re
        }), a = !1, s = !1, l = !1, u = !1, d = !1, h = () => xe.current === t, g = () => e && s, _ = kt(h, {
            deferFirstPaint: e || D,
            deferPayloadSize: e
        });
        D && (V.current = _), e && (ye.current = _);
        let v = e => {
                !c || f == null || !h() || (U.current = e, !u && (u = !0, ae.postTask(() => {
                    u = !1, h() && f(U.current)
                }, {
                    priority: `background`
                })))
            },
            y = e => {
                if (!(!h() || a || l)) {
                    if (a = !0, qt(), _.markReady(e), D) {
                        s = !0, ht({
                            signature: rt,
                            status: `ready`
                        });
                        return
                    }
                    d || (d = !0, ae.postTask(() => {
                        d = !1, !(!h() || l) && (s = !0, ht({
                            signature: rt,
                            status: `ready`
                        }))
                    }, {
                        priority: `background`
                    }))
                }
            },
            b = (t, n) => {
                !h() || l || (l = !0, qt(), Y(), ve.current = null, ye.current = null, e && Le({
                    status: `failed`
                }), ht({
                    signature: rt,
                    status: g() ? `failed_after_ready` : `failed`,
                    readyTimedOut: n === `ready_timeout`
                }), _.reportFailure(t, n), ae.postTask(() => {
                    h() && (e ? p?.(!1) : p?.(!1, `failure`))
                }, {
                    priority: `background`
                }))
            };
        be.current = b, U.current = [], v([]), Se.current = window.setTimeout(() => {
            b(`sandbox_eval`, `ready_timeout`)
        }, yr), (async () => {
            let e = j.current?.evalAsync({
                code: r,
                ...M.current == null ? {} : {
                    additionalGlobals: {
                        __appBlockMessenger: Ge(M.current, ue.current, fe.current)
                    }
                },
                expectReadySignal: n,
                language: `html`,
                frameColorScheme: i,
                shouldPreservePreviewOnFatalError: () => h() && g()
            });
            if (e == null) {
                b(`sandbox_eval`, `missing_generator`);
                return
            }
            for (;;) {
                let t = await e.next();
                if (t.done) {
                    h() && !a && b(`sandbox_eval`, `generator_completed_without_ready`);
                    break
                }
                h() && (v([...U.current, t.value]), t.value.type === He.ENVIRONMENT_STATUS && t.value.status === Ve.RUNNING_CODE && y(`running_code`), t.value.type === He.RUN_COMPLETE && (t.value.wasFatalError ? b(`runtime`, `fatal_runtime_error`) : (y(`run_complete`), _.reportSuccess(`run_complete`))), await ae.yield())
            }
        })().catch(e => {
            h() && (e instanceof DOMException && e.name === `AbortError` || b(`sandbox_eval`, wt(e)))
        })
    }, t[66] = Ee, t[67] = Me, t[68] = c, t[69] = qt, t[70] = Y, t[71] = o, t[72] = xt, t[73] = me, t[74] = Ae, t[75] = Re, t[76] = D, t[77] = E, t[78] = Pe, t[79] = f, t[80] = p, t[81] = m, t[82] = rt, t[83] = Ie.status, t[84] = ze, t[85] = G, t[86] = kt, t[87] = re, t[88] = W, t[89] = Zt) : Zt = t[89];
    let Qt = N(Zt),
        $t;
    t[90] !== qt || t[91] !== Y ? ($t = () => {
        xe.current += 1, he.current = !1, ge.current = !1, _e.current = null, B.current = null, ve.current = null, ye.current = null, be.current = null, H.current = null, qt(), Y(), ht(null), pt(fr)
    }, t[90] = qt, t[91] = Y, t[92] = $t) : $t = t[92];
    let en = N($t),
        rn;
    t[93] !== bt || t[94] !== yt ? (rn = yt === `inline` && !bt ? {
        margin: -4,
        width: `calc(100% + ${vr*2}px)`
    } : void 0, t[93] = bt, t[94] = yt, t[95] = rn) : rn = t[95];
    let an = rn,
        on;
    t[96] !== Ot || t[97] !== qt || t[98] !== Y || t[99] !== Qt ? (on = () => {
        Qt();
        let e = j.current;
        return () => {
            xe.current += 1, M.current = null, ye.current = null, V.current = null, be.current = null, H.current = null, qt(), Y(), Ot(), e?.stop()
        }
    }, t[96] = Ot, t[97] = qt, t[98] = Y, t[99] = Qt, t[100] = on) : on = t[100];
    let sn;
    t[101] !== Ot || t[102] !== qt || t[103] !== Y || t[104] !== Ae || t[105] !== rt || t[106] !== Qt || t[107] !== ft ? (sn = [Ot, qt, Y, Ae, rt, Qt, ft], t[101] = Ot, t[102] = qt, t[103] = Y, t[104] = Ae, t[105] = rt, t[106] = Qt, t[107] = ft, t[108] = sn) : sn = t[108], (0, Q.useEffect)(on, sn);
    let cn, ln;
    t[109] !== E || t[110] !== Qt || t[111] !== G ? (cn = () => {
        !G || E || he.current || j.current?.updateAppBlockStream != null || Qt()
    }, ln = [E, Qt, G], t[109] = E, t[110] = Qt, t[111] = G, t[112] = cn, t[113] = ln) : (cn = t[112], ln = t[113]), (0, Q.useEffect)(cn, ln);
    let un, dn;
    if (t[114] !== Y || t[115] !== o || t[116] !== Xt || t[117] !== J || t[118] !== q || t[119] !== E || t[120] !== G || t[121] !== k ? (un = () => {
            if (!G || !q || J || ge.current || j.current?.updateAppBlockStream == null) return;
            let e = E ? qn(o) : o;
            if (E && (ve.current?.html ?? B.current) === e) return;
            if (ve.current = {
                    html: e,
                    isFinal: !E
                }, !E) {
                Y(), Xt();
                return
            }
            let t = z.current;
            if (t == null && k === `artifact` && (_e.current ??= St(), t = _e.current), t == null) {
                Xt();
                return
            }
            let n = k === `artifact` ? xr : br,
                r = St() - t;
            if (r >= n) {
                Xt();
                return
            }
            return Ce.current = window.setTimeout(() => {
                Ce.current = null, Xt()
            }, n - r), Y
        }, dn = [Y, o, Xt, J, q, E, G, k], t[114] = Y, t[115] = o, t[116] = Xt, t[117] = J, t[118] = q, t[119] = E, t[120] = G, t[121] = k, t[122] = un, t[123] = dn) : (un = t[122], dn = t[123]), (0, Q.useEffect)(un, dn), !Ae) {
        let e;
        return t[124] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(Dn, {}), t[124] = e) : e = t[124], e
    }
    let fn = Ct && `flex-col`,
        pn = yt === `inline` && (Be ? `h-0 min-h-0 overflow-hidden` : `min-h-[120px] overflow-visible`),
        mn = yt === `stage` && `h-full min-h-0`,
        hn;
    t[125] !== fn || t[126] !== pn || t[127] !== mn ? (hn = S(`flex w-full`, fn, pn, mn), t[125] = fn, t[126] = pn, t[127] = mn, t[128] = hn) : hn = t[128];
    let gn;
    t[129] !== Ct || t[130] !== Tt || t[131] !== w ? (gn = Ct ? (0, $.jsx)(Ln, {
        isVisible: Tt,
        title: w
    }) : null, t[129] = Ct, t[130] = Tt, t[131] = w, t[132] = gn) : gn = t[132];
    let _n = !E && !G && (gt === `failed` || gt === `failed_after_ready`) && mt?.readyTimedOut || void 0,
        vn = yt === `inline` && !bt ? `flex-none` : `w-full`,
        yn = Tt && `mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,
        bn;
    t[133] !== vn || t[134] !== yn ? (bn = S(`relative min-w-0`, vn, yn), t[133] = vn, t[134] = yn, t[135] = bn) : bn = t[135];
    let xn;
    t[136] !== l || t[137] !== an || t[138] !== yt ? (xn = yt === `inline` && l != null ? {
        height: l
    } : an, t[136] = l, t[137] = an, t[138] = yt, t[139] = xn) : xn = t[139];
    let Sn = `${ft}:${Me?`network-enabled`:`network-disabled`}:${De?`internal-preview`:`workspace-preview`}`,
        Cn;
    t[140] !== n || t[141] !== a || t[142] !== s ? (Cn = JSON.stringify([a ?? null, n ?? s]), t[140] = n, t[141] = a, t[142] = s, t[143] = Cn) : Cn = t[143];
    let wn;
    t[144] === A ? wn = t[145] : (wn = A.formatMessage({
        id: `gxcrdR`,
        defaultMessage: `App block preview`
    }), t[144] = A, t[145] = wn);
    let Tn = Me ? `deps-only` : `none`,
        En = je ? Sr : Cr,
        On = _t ? 0 : -1,
        kn = me ? zt : void 0,
        An = yt === `inline` && !bt,
        jn = !bt,
        Mn = G ? Ke : gr,
        Nn;
    t[146] !== s || t[147] !== De || t[148] !== Qt || t[149] !== at || t[150] !== Sn || t[151] !== Cn || t[152] !== wn || t[153] !== Tn || t[154] !== En || t[155] !== On || t[156] !== kn || t[157] !== An || t[158] !== jn || t[159] !== Mn ? (Nn = (0, $.jsx)(K, {
        id: s,
        sandboxOriginId: Cn,
        title: wn,
        visuallyHidden: !1,
        networkPolicy: Tn,
        disableExternalNavigation: De,
        additionalResourceDomains: at,
        sandboxPermissions: En,
        disablePermissions: !0,
        enableTransition: !1,
        enableAnimation: !1,
        iframeTabIndex: On,
        onRetryCodeRun: Qt,
        onAppBlockMessage: kn,
        transparentBackground: An,
        useIntrinsicHeight: jn,
        intrinsicHeightFallback: Mn,
        ref: j
    }, Sn), t[146] = s, t[147] = De, t[148] = Qt, t[149] = at, t[150] = Sn, t[151] = Cn, t[152] = wn, t[153] = Tn, t[154] = En, t[155] = On, t[156] = kn, t[157] = An, t[158] = jn, t[159] = Mn, t[160] = Nn) : Nn = t[160];
    let Pn;
    t[161] === Tt ? Pn = t[162] : (Pn = Tt ? (0, $.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `absolute inset-0 z-10 cursor-wait`
    }) : null, t[161] = Tt, t[162] = Pn);
    let Fn;
    t[163] !== vt || t[164] !== J || t[165] !== _t || t[166] !== h || t[167] !== G ? (Fn = !_t && !J && (!G || vt) ? (0, $.jsx)(mr, {
        label: h
    }) : null, t[163] = vt, t[164] = J, t[165] = _t, t[166] = h, t[167] = G, t[168] = Fn) : Fn = t[168];
    let In;
    t[169] !== J || t[170] !== en ? (In = J ? (0, $.jsx)(hr, {
        onRetry: en
    }) : null, t[169] = J, t[170] = en, t[171] = In) : In = t[171];
    let X;
    t[172] !== Tt || t[173] !== _n || t[174] !== bn || t[175] !== xn || t[176] !== Nn || t[177] !== Pn || t[178] !== Fn || t[179] !== In ? (X = (0, $.jsxs)(`div`, {
        "aria-busy": Tt,
        "data-app-block-ready-timeout": _n,
        className: bn,
        style: xn,
        children: [Nn, Pn, Fn, In]
    }), t[172] = Tt, t[173] = _n, t[174] = bn, t[175] = xn, t[176] = Nn, t[177] = Pn, t[178] = Fn, t[179] = In, t[180] = X) : X = t[180];
    let Rn;
    t[181] !== h || t[182] !== Tt || t[183] !== k ? (Rn = Tt && k === `artifact` ? (0, $.jsx)(`span`, {
        "aria-atomic": `true`,
        "aria-live": `polite`,
        className: `sr-only`,
        role: `status`,
        children: h ?? (0, $.jsx)(L, {
            id: `chatgpt.app_block.preview_loading`,
            defaultMessage: `Loading app`
        })
    }) : null, t[181] = h, t[182] = Tt, t[183] = k, t[184] = Rn) : Rn = t[184];
    let zn;
    return t[185] !== hn || t[186] !== gn || t[187] !== X || t[188] !== Rn ? (zn = (0, $.jsxs)(`div`, {
        className: hn,
        children: [gn, X, Rn]
    }), t[185] = hn, t[186] = gn, t[187] = X, t[188] = Rn, t[189] = zn) : zn = t[189], zn
}

function fr(e) {
    return e + 1
}

function pr(e) {
    return e + 1
}

function mr(e) {
    "use forget";
    let t = (0, Z.c)(5),
        {
            label: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, $.jsx)(m, {
        className: `icon-sm text-token-text-tertiary`
    }), t[0] = r) : r = t[0];
    let i;
    t[1] === n ? i = t[2] : (i = n ?? (0, $.jsx)(L, {
        id: `chatgpt.app_block.preview_loading`,
        defaultMessage: `Loading app`
    }), t[1] = n, t[2] = i);
    let a;
    return t[3] === i ? a = t[4] : (a = (0, $.jsxs)(`div`, {
        "aria-live": `polite`,
        className: `bg-primary absolute inset-0 z-10 flex cursor-wait items-center justify-center gap-2 text-sm`,
        role: `status`,
        children: [r, (0, $.jsx)(`span`, {
            className: `text-token-text-secondary`,
            children: i
        })]
    }), t[3] = i, t[4] = a), a
}

function hr(e) {
    "use forget";
    let t = (0, Z.c)(4),
        {
            onRetry: n
        } = e,
        i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, $.jsx)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, $.jsx)(L, {
            id: `chatgpt.app_block.preview_load_failed`,
            defaultMessage: `This app couldn't load.`
        })
    }), t[0] = i) : i = t[0];
    let a;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, $.jsx)(L, {
        id: `chatgpt.app_block.preview_retry`,
        defaultMessage: `Try again`
    }), t[1] = a) : a = t[1];
    let o;
    return t[2] === n ? o = t[3] : (o = (0, $.jsxs)(`div`, {
        className: `bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,
        role: `alert`,
        children: [i, (0, $.jsx)(r, {
            type: `button`,
            color: `secondary`,
            size: `small`,
            onClick: n,
            children: a
        })]
    }), t[2] = n, t[3] = o), o
}
var Z, Q, $, gr, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, Er, Dr, Or, kr, Ar, jr, Mr, Nr, Pr = e((() => {
    Z = ue(), C(), Ze(), we(), Ee(), F(), M(), Xe(), p(), G(), ze(), Be(), V(), Je(), j(), ge(), dt(), lt(), Pe(), P(), l(), w(), xe(), k(), h(), c(), a(), $e(), ft(), B(), Ke(), E(), i(), Q = n(ce()), se(), pn(), Lt(), bt(), En(), H(), An(), _n(), Rn(), rt(), ye(), Me(), it(), Gn(), $ = oe(), gr = 432, _r = 120, vr = 4, yr = 15e3, br = 100, xr = 350, Sr = `allow-scripts allow-same-origin allow-forms`, Cr = `allow-scripts allow-same-origin`, wr = 12e3, Tr = /<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g, Er = /([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g, Dr = new Set([`svg`, `path`]), Or = new Set([`d`, `fill`, `height`, `viewBox`, `width`, `xmlns`]), kr = /<script(?:\s|>)/i, Ar = `script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`, jr = `audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`, Mr = e => {
        "use forget";
        let t = (0, Z.c)(13),
            {
                canOpen: n,
                conversation: i,
                expandButtonRef: a,
                isReady: o,
                onOpen: s,
                target: c
            } = e,
            l;
        t[0] !== n || t[1] !== a || t[2] !== s ? (l = n && s != null ? (0, $.jsx)(ur, {
            ref: a,
            className: `shrink-0`,
            onClick: s
        }) : null, t[0] = n, t[1] = a, t[2] = s, t[3] = l) : l = t[3];
        let u = l;
        if (i == null) return u;
        let d;
        t[4] === c ? d = t[5] : (d = c ?? {
            contentReferenceIndex: -1,
            messageId: ``
        }, t[4] = c, t[5] = d);
        let f = d,
            p = o && c != null,
            m;
        t[6] === u ? m = t[7] : (m = e => {
            let {
                isVisible: t,
                label: n,
                onSelect: i
            } = e;
            return t ? (0, $.jsxs)(`div`, {
                className: `flex shrink-0 items-center gap-1`,
                children: [(0, $.jsx)(v, {
                    label: n,
                    children: (0, $.jsx)(r, {
                        type: `button`,
                        icon: Ie,
                        color: `ghost`,
                        size: `medium`,
                        label: n,
                        className: `size-9 rounded-full border-0 px-2 py-2 shadow-none`,
                        onClick: e => {
                            e.stopPropagation(), i()
                        }
                    })
                }), u]
            }) : u
        }, t[6] = u, t[7] = m);
        let h;
        return t[8] !== f || t[9] !== i || t[10] !== p || t[11] !== m ? (h = (0, $.jsx)(pt, {
            category: Ce.AppBlock,
            conversation: i,
            isReady: p,
            target: f,
            children: m
        }), t[8] = f, t[9] = i, t[10] = p, t[11] = m, t[12] = h) : h = t[12], h
    }, Nr = e => {
        "use forget";
        let t = (0, Z.c)(9),
            {
                children: n,
                conversation: r,
                isReady: i,
                target: a
            } = e;
        if (r == null) return n;
        let o;
        t[0] === a ? o = t[1] : (o = a ?? {
            contentReferenceIndex: -1,
            messageId: ``
        }, t[0] = a, t[1] = o);
        let s = o,
            c = i && a != null,
            l;
        t[2] === n ? l = t[3] : (l = e => (0, $.jsxs)(`div`, {
            className: `group/keyboard-or-hover relative`,
            children: [n, e.isVisible ? (0, $.jsx)(`div`, {
                className: `pointer-events-none absolute end-2 top-2 z-10`,
                children: (0, $.jsx)(`div`, {
                    className: `cant-hover:hidden`,
                    children: (0, $.jsx)(mt, {
                        action: e
                    })
                })
            }) : null]
        }), t[2] = n, t[3] = l);
        let u;
        return t[4] !== s || t[5] !== r || t[6] !== c || t[7] !== l ? (u = (0, $.jsx)(pt, {
            category: Ce.InlineAppBlock,
            conversation: r,
            isReady: c,
            target: s,
            children: l
        }), t[4] = s, t[5] = r, t[6] = c, t[7] = l, t[8] = u) : u = t[8], u
    }
}));
export {
    Kn as a, Gn as c, En as d, St as f, J as g, yt as h, dr as i, xn as l, bt as m, rr as n, Pr as o, Lt as p, mr as r, zn as s, Yn as t, Sn as u
};
//# sourceMappingURL=e3b746a6-em7921l3zn9ne9da.js.map
const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/7aa2b76f-gzaeg4or9ldt7b2s.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/82782bc9-h658ejxn3ufkvr7a.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $M as r,
    AJ as i,
    AT as a,
    C0 as o,
    Cp as s,
    Dnt as c,
    Ep as l,
    Fc as u,
    J0 as d,
    JH as f,
    JP as p,
    KP as m,
    Mnt as h,
    My as g,
    Nnt as _,
    Pnt as v,
    S0 as y,
    Tnt as b,
    Wc as x,
    XP as S,
    b5 as ee,
    dz as C,
    eN as w,
    fz as T,
    i5 as te,
    iN as E,
    jy as ne,
    kT as D,
    pnt as O,
    q0 as k,
    qH as A,
    r5 as j,
    tN as M,
    vN as N,
    vnt as P,
    y5 as re,
    yN as ie,
    ynt as F,
    zJ as ae
} from "./4813494d-cb22y2w19zwyshmt.js";
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
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $k as fe,
    C6 as pe,
    D6 as z,
    GNt as me,
    KBn as he,
    KNt as ge,
    O6 as B,
    S6 as _e,
    _6 as ve,
    bUn as ye,
    cr as V,
    eT as be,
    g6 as xe,
    ghn as Se,
    h6 as Ce,
    hC as we,
    k6 as Te,
    ld as H,
    mC as Ee,
    mhn as De,
    nA as Oe,
    qBn as ke,
    qNt as Ae,
    sr as je,
    tT as Me,
    ud as Ne,
    v6 as Pe,
    w6 as Fe,
    xUn as U,
    y6 as Ie
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    ab as Le,
    bS as Re,
    n_ as ze,
    ob as Be,
    r_ as W,
    yS as Ve
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    n as He,
    r as Ue
} from "./2ea88c7a-lxyla91xs6iv7odf.js";
import {
    a as We,
    o as Ge,
    r as Ke,
    t as qe
} from "./8d846022-bvik3sltoydb2o43.js";
import {
    i as Je,
    n as Ye,
    r as Xe
} from "./91969468-j58q1eq0eee0hgqi.js";
import {
    n as G,
    t as Ze
} from "./4d271a7b-hn3ub85v554gjvmq.js";
import {
    n as Qe,
    r as $e
} from "./58bafdef-daxzrhhugn56vduq.js";
import {
    a as et,
    i as tt
} from "./e01e2324-jx284x6tly228734.js";
import {
    i as nt,
    t as rt
} from "./5dc32f04-nlnuc64xjt7j8b3i.js";
import {
    c as it,
    i as at,
    o as ot,
    r as st,
    s as ct,
    t as lt
} from "./56dee4d8-htvgkg7hvgu32vdb.js";
import {
    n as ut,
    t as dt
} from "./72bb039a-iheh04wb74j962wn.js";
import {
    i as ft,
    n as pt,
    r as mt,
    t as ht
} from "./9eb56efa-hwxgdm5v9afpiifu.js";
import {
    i as gt,
    n as _t,
    r as K,
    t as vt
} from "./cc79834b-krwvwhgrqdgkdi0d.js";

function yt() {
    return O(`2779568043`)
}

function q() {
    return O(`3864712762`)
}

function bt() {
    return P(`522383056`, {
        disableExposureLog: !0
    }).get(`app_block_library_editing`, !1)
}
var xt = e((() => {
    F()
}));

function St({
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

function Ct() {
    return typeof performance < `u` ? performance.now() : Date.now()
}

function wt(e) {
    return new TextEncoder().encode(e).byteLength / 1024
}

function Tt(e) {
    return e instanceof Error ? e.name : `unknown`
}

function Et(e, t, n = 1) {
    _.count(v.APP_BLOCKS, e, St(t), n)
}

function Dt(e, t, n) {
    _.hist(v.APP_BLOCKS, e, St(n), t)
}

function Ot({
    content: e,
    metricTags: t,
    widgetRefSeenAtMs: n
}) {
    let r = (0, kt.useRef)(Ct()),
        i = (0, kt.useRef)(null),
        a = (0, kt.useRef)(!1),
        o = (0, kt.useRef)(!1),
        s = w(() => {
            i.current == null || typeof window > `u` || (window.cancelAnimationFrame(i.current), i.current = null)
        }),
        c = w((n = e) => {
            o.current || (o.current = !0, Dt(Mt, wt(n), t))
        });
    return {
        cancelFirstPaintFrame: s,
        startRunMetrics: w((e, {
            deferFirstPaint: o = !1,
            deferPayloadSize: l = !1
        } = {}) => {
            let u = Ct(),
                d = !1,
                f = !1,
                p = !1,
                m = !1,
                h = null,
                g = null;
            s(), l || c(), Et(Ft, t);
            let _ = (e, n) => {
                    f || (f = !0, Et(Pt, {
                        ...t,
                        outcome: e,
                        readySignal: n
                    }))
                },
                v = (i, o) => {
                    if (!e() || p) return;
                    let s = Ct();
                    Dt(Nt, s - i, {
                        ...t,
                        readySignal: o
                    }), !a.current && (a.current = !0, Dt(At, s - r.current, t), n != null && Dt(Lt, s - n, t))
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
                    !e() || d || (d = !0, h = Ct(), g = n, Dt(It, h - u, {
                        ...t,
                        readySignal: n
                    }), o || b())
                },
                reportFailure: (n, r) => {
                    !e() || p || (p = !0, s(), Et(jt, {
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
var kt, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt = e((() => {
        h(), r(), kt = n(ce()), At = `app_block.first_render_time_ms`, jt = `app_block.load.failure`, Mt = `app_block.payload_size_kb`, Nt = `app_block.ready_to_first_paint_ms`, Pt = `app_block.render.outcome`, Ft = `app_block.render.start`, It = `app_block.sandbox_eval_to_ready_ms`, Lt = `app_block.widget_ref_to_first_paint_ms`
    })),
    zt, Bt = e((() => {
        zt = `:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{margin:0;padding:0}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(svg){max-width:100%;height:auto}`
    })),
    Vt = e((() => {})),
    Ht, Ut = e((() => {
        Vt(), Ht = `/cdn/assets/app-block-sandbox-foundation-l4fcvweu.css`
    })),
    Wt, Gt = e((() => {
        Wt = `:root{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light dark;--white:#fff;--black:#000;--gray-0:#fff;--gray-25:#fcfcfc;--gray-50:#f9f9f9;--gray-75:#f2f2f2;--gray-100:#ececec;--gray-200:#e3e3e3;--gray-750:#2f2f2f;--gray-800:#212121;--gray-950:#0d0d0d;--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px;--app-block-accent-blue:var(--lightningcss-light,#3a83f7)var(--lightningcss-dark,#2c67c5);--app-block-accent-green:var(--lightningcss-light,#53b559)var(--lightningcss-dark,#48a04c);--app-block-accent-yellow:var(--lightningcss-light,#f6c543)var(--lightningcss-dark,#d9a337);--app-block-accent-purple:var(--lightningcss-light,#8952ee)var(--lightningcss-dark,#7849d1);--app-block-accent-pink:var(--lightningcss-light,#e0766d)var(--lightningcss-dark,#c96257);--app-block-accent-orange:var(--lightningcss-light,#ee7c37)var(--lightningcss-dark,#d25e28);--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white);--app-block-accent-bg:color-mix(in srgb, var(--app-block-accent) 8%, transparent);--app-block-accent-bg-subtle:color-mix(in srgb, var(--app-block-accent) 5%, transparent);--app-block-form-control-bg:color-mix(in srgb, var(--viz-text) 2%, var(--main-surface-primary));--app-block-form-control-border:color-mix(in srgb, var(--viz-text) 32%, transparent);--app-block-form-control-shadow:0 1px 2px -1px #00000014;--app-block-form-switch-off-bg:color-mix(in srgb, var(--viz-text) 14%, transparent);--app-block-form-switch-thumb-bg:var(--white);--app-block-form-switch-thumb-border:#0000001a;--app-block-select-picker-bg:var(--main-surface-primary);--app-block-select-picker-check-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.0961%202.91371C12.3297%202.68688%2012.6984%202.64794%2012.9779%202.83852C13.2571%203.02905%2013.3554%203.38601%2013.2299%203.68618L13.1615%203.81118L6.91152%2012.9772C6.79412%2013.1494%206.60631%2013.2604%206.39882%2013.2799C6.19137%2013.2994%205.98565%2013.226%205.83828%2013.0788L2.08828%209.32875L1.99843%209.2184C1.81921%208.94677%201.84928%208.57767%202.08828%208.33852C2.3274%208.0994%202.69648%208.06947%202.96816%208.24868L3.07851%208.33852L6.23085%2011.4909L12.0053%203.02211L12.0961%202.91371Z%22/%3E%3C/svg%3E);--app-block-select-picker-hover-bg:#0000000a;--app-block-select-picker-icon:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22black%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M12.1338%205.94433C12.3919%205.77382%2012.7434%205.80202%2012.9707%206.02929C13.1979%206.25656%2013.2261%206.60807%2013.0556%206.8662L12.9707%206.9707L8.47067%2011.4707C8.21097%2011.7304%207.78896%2011.7304%207.52926%2011.4707L3.02926%206.9707L2.9443%206.8662C2.77379%206.60807%202.80199%206.25656%203.02926%206.02929C3.25653%205.80202%203.60804%205.77382%203.86617%205.94433L3.97067%206.02929L7.99996%2010.0586L12.0293%206.02929L12.1338%205.94433Z%22/%3E%3C/svg%3E);--app-block-select-picker-shadow:0 8px 24px #00000014, 0 2px 8px #00000014;--viz-panel:var(--main-surface-secondary);--viz-card:var(--main-surface-primary);--viz-chip-card:var(--gray-75);--viz-border:var(--border-light);--viz-text:var(--text-primary);--viz-muted:var(--text-secondary);--viz-accent:var(--app-block-accent);--viz-accent-text:var(--app-block-accent-text);--viz-accent-bg:var(--app-block-accent-bg);--viz-accent-bg-subtle:var(--app-block-accent-bg-subtle);--viz-series-1:var(--app-block-accent);--viz-series-2:var(--app-block-accent-green);--viz-series-3:var(--app-block-accent-orange);--viz-series-4:var(--app-block-accent-yellow);--viz-series-5:var(--app-block-accent-purple);--viz-series-6:var(--app-block-accent-pink);--color-background-primary:var(--main-surface-primary);--color-background-secondary:var(--main-surface-secondary);--color-border-secondary:var(--border-light);--color-text-primary:var(--text-primary);--color-text-secondary:var(--text-secondary);--color-text-tertiary:var(--text-tertiary);--color-text-inverse:var(--text-primary-inverse)}@media (prefers-color-scheme:dark){:root{--lightningcss-light: ;--lightningcss-dark:initial}}:root,:root.light{--main-surface-primary:var(--gray-25);--main-surface-secondary:var(--gray-50);--main-surface-tertiary:var(--gray-100);--text-primary:var(--gray-950);--text-secondary:#0009;--text-tertiary:#0000004a;--text-primary-inverse:var(--gray-0);--text-secondary-inverse:#ffffffb3;--text-tertiary-inverse:#ffffff94;--surface-primary-inverse:var(--gray-950);--border-light:#0000001a;--border-medium:#00000026;--interactive-bg-primary-default:var(--gray-950);--interactive-label-primary-default:var(--gray-0);--interactive-border-focus:var(--gray-950);--link:#2964aa}:root.light{--lightningcss-light:initial;--lightningcss-dark: ;--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light}@media (prefers-color-scheme:dark){:root:not(.light){--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}}:root.dark{--lightningcss-light: ;--lightningcss-dark:initial;--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--main-surface-primary:var(--black);--main-surface-secondary:var(--gray-800);--main-surface-tertiary:var(--gray-750);--app-block-select-picker-bg:var(--main-surface-secondary);--app-block-select-picker-hover-bg:#ffffff1a;--app-block-select-picker-shadow:0 12px 32px #00000061, 0 2px 8px #00000052;--viz-card:var(--main-surface-secondary);--viz-chip-card:var(--main-surface-tertiary);--viz-panel:var(--main-surface-secondary);--text-primary:var(--gray-100);--text-secondary:#ffffffb3;--text-tertiary:#ffffff94;--text-primary-inverse:var(--gray-950);--text-secondary-inverse:#0009;--text-tertiary-inverse:#0000004a;--surface-primary-inverse:var(--gray-100);--border-light:#ffffff1a;--border-medium:#ffffff26;--interactive-bg-primary-default:var(--gray-100);--interactive-label-primary-default:var(--gray-950);--interactive-border-focus:var(--gray-100);--link:#7ab7ff}:root[data-chat-theme=default],:root[data-chat-theme=black],:root[data-chat-theme=blue]{--app-block-accent:var(--app-block-accent-blue);--app-block-accent-text:var(--white)}:root[data-chat-theme=green]{--app-block-accent:var(--app-block-accent-green);--app-block-accent-text:var(--white);--viz-series-2:var(--app-block-accent-blue)}:root[data-chat-theme=yellow]{--app-block-accent:var(--app-block-accent-yellow);--app-block-accent-text:var(--gray-950)}:root[data-chat-theme=purple]{--app-block-accent:var(--app-block-accent-purple);--app-block-accent-text:var(--white)}:root[data-chat-theme=pink]{--app-block-accent:var(--app-block-accent-pink);--app-block-accent-text:var(--white);--viz-series-6:var(--app-block-accent-blue)}:root[data-chat-theme=orange]{--app-block-accent:var(--app-block-accent-orange);--app-block-accent-text:var(--white);--viz-series-3:var(--app-block-accent-blue)}:root[data-app-block-surface=inline]{--app-block-paint-gutter-block:4px;--app-block-paint-gutter-inline:4px}:root[data-app-block-surface=skybridge]{--app-block-paint-gutter-block:16px;--app-block-paint-gutter-inline:16px}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]){--app-block-paint-gutter-block:0px;--app-block-paint-gutter-inline:0px}:root.light[data-app-block-surface=skybridge],:root.light[data-app-block-surface=stage]{--main-surface-primary:var(--white)}:root.dark[data-app-block-surface=skybridge],:root.dark[data-app-block-surface=stage]{--main-surface-primary:var(--gray-800);--main-surface-secondary:var(--gray-750)}html,body{background:0 0;overflow:hidden}:root[data-app-block-surface=stage]{overscroll-behavior:contain;overflow:auto}:root[data-app-block-surface=stage] body{overflow:visible}body{color:var(--text-primary);margin:0;padding:0;font-family:ui-sans-serif,-apple-system,system-ui,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}main{box-sizing:border-box;width:100%;min-width:0;padding-block:var(--app-block-paint-gutter-block);padding-inline:var(--app-block-paint-gutter-inline);display:flow-root}:root[data-app-block-surface=skybridge]:is([data-app-block-platform=ios],[data-app-block-platform=android]) main>:has(>:first-child:is(style,script))>:nth-child(1 of :not(style,script)){margin-block-start:0}:root[data-app-block-surface=skybridge] main{overscroll-behavior-x:contain;overflow-x:auto}:where(a){color:var(--link)}:where(h1,h2,h3,h4,h5,h6,label,strong,output){color:var(--text-primary)}:where(p,small){color:var(--text-secondary)}:where(input,select,textarea,button){font:inherit}:where(button):is(:enabled,:disabled){font-weight:500}button:is(:enabled,:disabled){-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}@media (hover:hover) and (pointer:fine){button:not(:disabled):hover{opacity:.85}}button:not(:disabled):active{opacity:.7}:where(input,select,textarea){background:var(--main-surface-primary);border:1px solid var(--border-medium);border-color:var(--border-medium);color:var(--text-primary);border-radius:12px}:where(){color:var(--text-tertiary)}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus{border-color:var(--border-medium);box-shadow:none;outline:none}:where(input:not([type=checkbox]):not([type=radio]):not([type=range]),select,textarea):focus-visible{border-color:var(--interactive-border-focus);outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(select:not([multiple])){cursor:pointer;min-height:34px}:where(select:required:invalid){color:var(--text-tertiary)}:where(select option){color:var(--text-primary)}:where(select:disabled){cursor:not-allowed;opacity:.5}@supports (appearance:base-select){:where(select:not([multiple])),:where(select:not([multiple]))::picker(select){appearance:base-select}:where(select:not([multiple])){align-items:center;padding-inline-end:12px}:where(select:not([multiple]))::picker(select){border:1px solid var(--border-light);background:var(--app-block-select-picker-bg);box-shadow:var(--app-block-select-picker-shadow);color:var(--text-primary);border-radius:12px;margin-top:4px;padding:6px}:where(select:not([multiple]))::picker-icon{width:16px;height:16px;color:var(--text-secondary);content:"";-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;align-self:center;margin-inline-start:auto;display:block}:where(select:not([multiple])) option{min-height:32px;color:var(--text-primary);cursor:pointer;background:0 0;border-radius:8px;justify-content:space-between;align-items:center;gap:24px;padding:7px 10px;display:flex}:where(select:not([multiple])) option:checked{background:var(--app-block-select-picker-hover-bg);outline:none}:where(select:not([multiple])) option:is(:hover,:focus-visible){background:var(--app-block-select-picker-hover-bg)}:where(select:not([multiple])):has(option:is(:hover,:focus-visible)) option:checked:not(:is(:hover,:focus-visible)){background:0 0}:where(select:not([multiple])) option:disabled{color:var(--text-tertiary)}:where(select:not([multiple])) option::checkmark{content:"";width:16px;height:16px;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 16px 16px no-repeat;background:currentColor;flex-shrink:0;order:1;margin-inline-start:auto;display:block}}:where(.form-check){align-items:center;gap:6px;min-height:20px;display:flex}:where(.form-check-input){appearance:none;box-sizing:border-box;border:1px solid var(--app-block-form-control-border);width:14px;height:14px;color:var(--app-block-accent-text);cursor:pointer;vertical-align:-2px;background-color:#0000;flex:none;margin:0;padding:0;transition:background-color .12s,border-color .12s,box-shadow .12s;display:inline-block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:5px}:where(.form-check:not(.form-switch) .form-check-input:not(:disabled):not(:checked):hover){background-color:var(--main-surface-secondary)}.form-check:not(.form-switch) .form-check-input:not(:checked):not(:indeterminate){border:1px solid var(--border-medium)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:checked):before{background:var(--app-block-accent-text);content:"";width:100%;height:100%;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;-webkit-mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;mask:var(--app-block-select-picker-check-icon) center / 12px 12px no-repeat;display:block}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate){border-color:var(--viz-accent);background-color:var(--viz-accent)}:where(.form-check:not(.form-switch) .form-check-input[type=checkbox]:indeterminate):before{background:var(--app-block-accent-text);content:"";border-radius:9999px;width:8px;height:2px;margin:5px auto;display:block}:where(.form-check-input[type=radio]){background-color:var(--app-block-form-control-bg);box-shadow:var(--app-block-form-control-shadow);border-radius:9999px}:where(.form-check-input[type=radio]:checked){border:2px solid var(--viz-accent);background:radial-gradient(circle, var(--app-block-accent-text) 0 2.5px, transparent 3px), var(--viz-accent)}:where(.form-check-input:disabled){cursor:not-allowed;pointer-events:none;opacity:.5}:where(.form-check-input:disabled+.form-check-label){cursor:not-allowed;opacity:.7}:where(.form-check-label){color:var(--viz-text);cursor:pointer}:where(.form-switch .form-check-input[type=checkbox]){background:var(--app-block-form-switch-off-bg);width:32px;height:20px;box-shadow:none;border:0;border-radius:9999px;transition:background-color .2s cubic-bezier(0,0,.2,1);position:relative}:where(.form-switch .form-check-input[type=checkbox]):before{box-sizing:border-box;border:1px solid var(--app-block-form-switch-thumb-border);background:var(--app-block-form-switch-thumb-bg);width:16px;height:16px;box-shadow:var(--app-block-form-control-shadow);content:"";border-radius:9999px;transition:transform .2s cubic-bezier(0,0,.2,1);position:absolute;top:50%;left:0;transform:translate(2px,-50%)}:where(.form-switch .form-check-input[type=checkbox]:checked){background:var(--viz-accent)}:where(.form-switch .form-check-input[type=checkbox]:checked):before{transform:translate(14px,-50%)}:where(input[type=range]){appearance:none;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;background:0 0;border:0;border-radius:9999px;width:100%;min-width:0;height:24px;margin:0;padding:0;display:block}:where(input[type=range]:disabled){cursor:not-allowed;opacity:.4}:where(input[type=range])::-webkit-slider-runnable-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-webkit-slider-thumb{appearance:none;box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;margin-top:-7px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}:where(input[type=range])::-moz-range-track{background:var(--lightningcss-light,#0000000a)var(--lightningcss-dark,#ffffff0f);border:0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-progress{background:0 0;border-radius:9999px;height:6px}:where(input[type=range])::-moz-range-thumb{box-sizing:border-box;background:var(--white);border:1px solid #0000001a;border-radius:9999px;width:20px;height:20px;transition:transform .15s;box-shadow:0 1px 2px #0000001f}@media (hover:hover) and (pointer:fine){:where(input[type=range]:enabled:hover)::-webkit-slider-thumb{transform:scale(1.05)}:where(input[type=range]:enabled:hover)::-moz-range-thumb{transform:scale(1.05)}}:where(input[type=range]:focus-visible){outline:none}:where(input[type=range]:focus-visible)::-webkit-slider-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where(input[type=range]:focus-visible)::-moz-range-thumb{outline:2px solid var(--interactive-border-focus);outline-offset:2px}@media (forced-colors:active){:where(.form-check-input){appearance:auto;display:revert;width:revert;height:revert;margin:revert;padding:revert;border:revert;border-radius:revert;background:revert;box-shadow:revert;vertical-align:revert}:where(.form-check-input):before{content:none}}:where(svg [role=button],svg [tabindex]):focus:not(:focus-visible){outline:none}:where(button:focus-visible){outline:2px solid var(--interactive-border-focus);outline-offset:2px}:where([data-panel]){background:var(--main-surface-secondary)}:where([data-card]){background:var(--viz-card);border-color:var(--border-light)}:where([data-result=primary]){background:var(--interactive-bg-primary-default);color:var(--interactive-label-primary-default)}:where([data-result=primary] :not(a)){color:inherit}.card{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:var(--viz-card);border-radius:16px;padding:12px;overflow:visible}.metric-card{overflow-wrap:break-word;min-width:0;color:var(--viz-text);background:var(--viz-chip-card);border-radius:16px;padding:12px;overflow:visible}.viz-node{overflow-wrap:break-word;border:1px solid var(--viz-border);min-width:0;color:var(--viz-text);background:0 0;border-radius:12px;padding:10px 12px}.viz-stat-value{color:var(--viz-text);font-size:20px;font-weight:500;line-height:1.25}.viz-edge-label,.viz-badge{width:fit-content;color:var(--viz-text);background:var(--viz-accent-bg);border-radius:9999px;align-items:center;padding:3px 8px;font-size:12px;font-weight:500;line-height:1.4;display:inline-flex}.viz-callout{border-left:3px solid var(--viz-accent);color:var(--viz-text);background:var(--viz-accent-bg-subtle);border-radius:0 12px 12px 0;padding:10px 12px}main [data-tooltip]{position:relative}main [data-tooltip]:after{z-index:20;border:1px solid var(--viz-border);width:max-content;max-width:min(220px,100vw - 24px);color:var(--viz-text);background:var(--main-surface-primary);box-shadow:0 2px 8px color-mix(in srgb, var(--viz-text) 8%, transparent);content:attr(data-tooltip);opacity:0;pointer-events:none;text-align:start;border-radius:10px;padding:4px 8px;font-size:12px;line-height:1.4;transition:opacity .12s,transform .12s;position:absolute;bottom:calc(100% + 6px);left:50%;transform:translate(-50%,2px)}main [data-tooltip]:is(:hover,:focus-visible):after{opacity:1;transform:translate(-50%)}main [data-tooltip-placement=bottom]:after{top:calc(100% + 6px);bottom:auto;transform:translate(-50%,-2px)}main [data-tooltip-placement=bottom]:is(:hover,:focus-visible):after{transform:translate(-50%)}main [data-tooltip-placement=left]:after{inset:50% calc(100% + 6px) auto auto;transform:translate(2px,-50%)}main [data-tooltip-placement=left]:is(:hover,:focus-visible):after{transform:translateY(-50%)}main [data-tooltip-placement=right]:after{top:50%;bottom:auto;left:calc(100% + 6px);transform:translate(-2px,-50%)}main [data-tooltip-placement=right]:is(:hover,:focus-visible):after{transform:translateY(-50%)}:where(svg){max-width:100%;height:auto}:root.dark :where(.bg-white){background-color:var(--main-surface-primary)}:root.dark :where(.bg-slate-50,.bg-gray-50,.bg-zinc-50,.bg-neutral-50){background-color:var(--main-surface-secondary)}:root.dark :where(.bg-slate-100,.bg-gray-100,.bg-zinc-100,.bg-neutral-100,.bg-slate-200,.bg-gray-200,.bg-zinc-200,.bg-neutral-200){background-color:var(--main-surface-tertiary)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700){background-color:var(--interactive-bg-primary-default)}:root.dark :where(.text-white){color:var(--text-primary-inverse)}:root.dark :where(.text-black,.text-slate-900,.text-gray-900,.text-zinc-900,.text-neutral-900,.text-slate-950,.text-gray-950,.text-zinc-950,.text-neutral-950){color:var(--text-primary)}:root.dark :where(.text-slate-500,.text-gray-500,.text-zinc-500,.text-neutral-500,.text-slate-600,.text-gray-600,.text-zinc-600,.text-neutral-600,.text-slate-700,.text-gray-700,.text-zinc-700,.text-neutral-700){color:var(--text-secondary)}:root.dark :where(.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-tertiary)}:root.dark :where(.text-blue-500,.text-blue-600,.text-blue-700){color:var(--link)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-white,.text-slate-50,.text-gray-50,.text-zinc-50,.text-neutral-50,.text-slate-100,.text-gray-100,.text-zinc-100,.text-neutral-100){color:var(--text-primary-inverse)}:root.dark :where(.bg-black,.bg-slate-900,.bg-gray-900,.bg-zinc-900,.bg-neutral-900,.bg-blue-600,.bg-blue-700) :where(.text-slate-200,.text-gray-200,.text-zinc-200,.text-neutral-200,.text-slate-300,.text-gray-300,.text-zinc-300,.text-neutral-300,.text-slate-400,.text-gray-400,.text-zinc-400,.text-neutral-400){color:var(--text-secondary-inverse)}:root.dark :where(.border-slate-200,.border-gray-200,.border-zinc-200,.border-neutral-200){border-color:var(--border-light)}:root.dark :where(.border-slate-300,.border-gray-300,.border-zinc-300,.border-neutral-300,.border-blue-200,.border-blue-300){border-color:var(--border-medium)}`
    })),
    Kt = e((() => {})),
    qt, Jt = e((() => {
        Kt(), qt = `/cdn/assets/app-block-sandbox-b1cs4d5m.css`
    }));

function Yt(e, t) {
    return t ||= e.slice(0), Object.freeze(Object.defineProperties(e, {
        raw: {
            value: Object.freeze(t)
        }
    }))
}
var J = e((() => {}));

function Xt(e) {
    return /<!doctype\b|<html[\s>]/i.test(e)
}

function Zt(e, t) {
    let n = e.match(/<\/body\s*>(?=\s*(?:<\/html\s*>)?\s*$)/i) ?? e.match(/<\/html\s*>\s*$/i);
    if (n?.index == null) return `${e}\n${t}`;
    let r = n.index;
    return [e.slice(0, r), t, e.slice(r)].join(`
`)
}

function Qt(e) {
    let t = e.trim().replaceAll(`_`, `-`);
    return t.length === 0 || !/^[A-Za-z0-9-]+$/.test(t) ? `en` : t
}

function Y(e) {
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
    let t = Y(qt),
        n = Y(Ht),
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
    if (!s && Xt(u)) return {
        html: c ? Zt(u, d) : u,
        expectReadySignal: !1
    };
    let f = Qt(n),
        p = l === `open` ? zt : Wt,
        m = Y(l === `open` ? Ht : qt),
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
    Bt(), Ut(), Gt(), Jt(), J(), on = `https://cdn.tailwindcss.com`, sn = `https://images.openai.com`, cn = [`https://persistent.oaistatic.com`, `https://cdnjs.cloudflare.com`, `https://esm.sh`, `https://cdn.jsdelivr.net`, `https://unpkg.com`, `https://fonts.googleapis.com`, `https://fonts.gstatic.com`, `https://fonts.bunny.net`], ln = new Set([`default`, `blue`, `green`, `yellow`, `purple`, `pink`, `orange`, `black`]), un = `<style>
  @media (prefers-reduced-motion: no-preference) {
    [data-app-block-stream-enter] {
      animation: app-block-stream-enter 160ms ease-out both;
    }

    @keyframes app-block-stream-enter {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  }
</style>`, dn = String.raw(rn ||= Yt([`<script>
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
<\/script>`])), fn = String.raw(an ||= Yt([`<script>
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
        o(), R(), vn = y(() => le(() => import(`./7aa2b76f-gzaeg4or9ldt7b2s.js`).then(e => e.AppBlockFullscreenTurnComposer), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])))
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
        S = te(Ce),
        ee;
    t[3] !== S || t[4] !== x ? (ee = Ie(S, x), t[3] = S, t[4] = x, t[5] = ee) : ee = t[5];
    let C = ee,
        w = S?.appBlockId === h && S.conversationId === y && (S.isOriginalVersion === !0 || S.versionNumber != null),
        T = C || w,
        E;
    t[6] !== S || t[7] !== d || t[8] !== x ? (E = _e(S, x, d), t[6] = S, t[7] = d, t[8] = x, t[9] = E) : E = t[9];
    let ne = E,
        D;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (D = () => {
        f.current?.focus()
    }, t[10] = D) : D = t[10];
    let O = D,
        k = p?.supportsAtomicMove ? p : void 0,
        A;
    t[11] !== h || t[12] !== g || t[13] !== _ || t[14] !== v ? (A = {
        appBlockId: h,
        libraryFileId: g,
        messageId: _,
        refIndex: v
    }, t[11] = h, t[12] = g, t[13] = _, t[14] = v, t[15] = A) : A = t[15];
    let j;
    t[16] !== n || t[17] !== r || t[18] !== a || t[19] !== s || t[20] !== l || t[21] !== k || t[22] !== A || t[23] !== u ? (j = {
        additionalResourceDomains: n,
        canSubmitTurn: r,
        code: a,
        focusOnClose: O,
        headerAction: s,
        sharedPreview: k,
        source: A,
        styleMode: l,
        title: u
    }, t[16] = n, t[17] = r, t[18] = a, t[19] = s, t[20] = l, t[21] = k, t[22] = A, t[23] = u, t[24] = j) : j = t[24];
    let M = j,
        N, P;
    t[25] !== M || t[26] !== C || t[27] !== x ? (N = () => {
        C && pe(x, M)
    }, P = [M, C, x], t[25] = M, t[26] = C, t[27] = x, t[28] = N, t[29] = P) : (N = t[28], P = t[29]), (0, wn.useEffect)(N, P);
    let re;
    t[30] !== M || t[31] !== ne || t[32] !== x ? (re = () => {
        xe(x, ne, M)
    }, t[30] = M, t[31] = ne, t[32] = x, t[33] = re) : re = t[33];
    let ie = re,
        F;
    t[34] !== T || t[35] !== w || t[36] !== ie || t[37] !== p ? (F = {
        isExpanded: T,
        isViewingHistoricalVersion: w,
        openExpandedView: ie,
        setSharedPreview: m,
        sharedPreview: p,
        triggerRef: f
    }, t[34] = T, t[35] = w, t[36] = ie, t[37] = p, t[38] = F) : F = t[38];
    let ae = F,
        oe;
    return t[39] !== i || t[40] !== ae ? (oe = (0, Tn.jsx)(gn.Provider, {
        value: ae,
        children: i
    }), t[39] = i, t[40] = ae, t[41] = oe) : oe = t[41], oe
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
        c = K(),
        l;
    t[0] === i ? l = t[1] : (l = () => i == null ? 0 : H(i).height$() ?? 0, t[0] = i, t[1] = l);
    let u = te(l),
        d = c === `fullscreen` && n && i != null ? u : 0,
        f = o ?? s,
        p;
    t[2] === f ? p = t[3] : (p = (0, Tn.jsx)(`span`, {
        className: `text-token-text-primary min-w-0 flex-1 truncate text-base font-semibold`,
        children: f
    }), t[2] = f, t[3] = p);
    let m;
    t[4] !== a || t[5] !== p ? (m = (0, Tn.jsxs)(vt.Header, {
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
    t[11] !== h || t[12] !== g ? (_ = (0, Tn.jsx)(vt.Body, {
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
        i = gt(),
        a = i.usesViewTransition ? i.targetPresentation === `fullscreen` : i.presentation === `fullscreen` && !i.isTransitioning,
        o;
    return t[0] !== n || t[1] !== r || t[2] !== i.isTransitioning || t[3] !== a ? (o = a ? (0, Tn.jsx)(vn, {
        conversation: n,
        disableAutoFocus: i.isTransitioning,
        paneId: r
    }) : null, t[0] = n, t[1] = r, t[2] = i.isTransitioning, t[3] = a, t[4] = o) : o = t[4], o
}
var Cn, wn, Tn, En = e((() => {
    Cn = ue(), Ne(), _t(), j(), wn = n(ce()), _n(), Pe(), yn(), Tn = oe()
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
        children: (0, Fn.jsx)(rt, {
            className: `aspect-auto min-h-0 flex-1 pt-2`,
            label: i
        })
    }), t[0] = i, t[1] = a), a
}
var Nn, Pn, Fn, In, X, Ln, Rn = e((() => {
    Nn = ue(), nt(), ee(), Pn = n(ce()), se(), Fn = oe(), In = 2800, X = I({
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
        t[0] === o ? s = t[1] : (s = re(`grid shrink-0 transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none`, o), t[0] = o, t[1] = s);
        let c = n && `loading-shimmer-pure-text motion-reduce:animate-none`,
            l;
        t[2] === c ? l = t[3] : (l = re(`text-token-text-secondary inline-block font-sans font-medium`, c), t[2] = c, t[3] = l);
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
    return t == null ? null : lt(t).get(e) ?? null
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
        o = i?.currentContentFileId ?? e ?? (a == null ? null : ge(a));
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
    return me({
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
            status: l(e) ? `missing` : `failed`
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
        s(), Ae(), st()
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
            id: h,
            captureConsoleMessages: g,
            clientThreadId: _,
            iconSvg: v,
            inlineHeight: y,
            isStreaming: b,
            isTurnStreaming: ee,
            libraryFileId: C,
            libraryFileVersionNumber: w,
            loadingLabels: T,
            messageId: E,
            onConsoleMessagesChange: ne,
            onReadyChange: D,
            previewLoadingLabel: O,
            progressiveStreaming: k,
            ref: A,
            refIndex: j,
            styleMode: M,
            title: N,
            variant: P,
            wasStreamingWhenFirstSeen: re,
            widgetName: ie,
            widgetRefSeenAtMs: F
        } = e,
        oe = c === void 0 || c,
        I = g !== void 0 && g,
        L = b !== void 0 && b,
        se = ee !== void 0 && ee,
        ce = k !== void 0 && k,
        le = P === void 0 ? `inline` : P,
        R = S(),
        ue = (0, Q.useContext)(dt),
        de;
    t[0] === R ? de = t[1] : (de = () => R != null && ke(R), t[0] = R, t[1] = de);
    let pe = te(de),
        z;
    t[2] !== _ || t[3] !== R ? (z = _ == null ? R : m(_), t[2] = _, t[3] = R, t[4] = z) : z = t[4];
    let he = z,
        ge = E != null && j != null ? ct({
            messageId: E,
            refIndex: j
        }) : void 0,
        B = r ?? ge ?? ct({
            messageId: E ?? h,
            refIndex: j ?? 0
        }),
        _e = te(() => fe({
            conversation: R ?? null,
            instanceId: B,
            messageId: E,
            refIndex: j
        })) ?? u,
        ye = te(() => a != null || _e != null ? null : zn({
            appBlockId: B,
            conversation: R ?? null
        })),
        V = a ?? ye,
        be;
    t[5] === R ? be = t[6] : (be = () => Bn(R ?? null), t[5] = R, t[6] = be);
    let Se = te(be),
        Ce = ae(R?.id),
        we = Se ?? Ce,
        Te;
    t[7] !== l || t[8] !== C || t[9] !== w || t[10] !== we || t[11] !== V ? (Te = Vn({
        currentContentFileId: l,
        libraryFileId: C,
        libraryFileVersionNumber: w,
        serverThreadId: we,
        source: V
    }), t[7] = l, t[8] = C, t[9] = w, t[10] = we, t[11] = V, t[12] = Te) : Te = t[12];
    let H = Te,
        [De, Oe] = (0, Q.useState)(null),
        [Ae, je] = (0, Q.useState)(0),
        Me;
    t[13] !== Ae || t[14] !== H.libraryContentKey ? (Me = [H.libraryContentKey, Ae], t[13] = Ae, t[14] = H.libraryContentKey, t[15] = Me) : Me = t[15];
    let Ne = Me.join(`\0`),
        Pe, Fe;
    t[16] !== i || t[17] !== Ne || t[18] !== H.contentFileId || t[19] !== H.libraryFileId || t[20] !== _e || t[21] !== we ? (Pe = () => {
        if (!(i != null || _e === `collapsed`)) return Hn({
            contentFileId: H.contentFileId,
            libraryContentKey: Ne,
            libraryFileId: H.libraryFileId,
            onContentStateChange: Oe,
            serverThreadId: we
        })
    }, Fe = [i, H.contentFileId, H.libraryFileId, Ne, _e, we], t[16] = i, t[17] = Ne, t[18] = H.contentFileId, t[19] = H.libraryFileId, t[20] = _e, t[21] = we, t[22] = Pe, t[23] = Fe) : (Pe = t[22], Fe = t[23]), (0, Q.useEffect)(Pe, Fe);
    let U = Un({
            appBlockId: B,
            contentFileId: H.contentFileId,
            currentContentFileId: l,
            libraryContent: De,
            libraryContentKey: Ne,
            libraryFileId: C,
            libraryFileVersionNumber: w,
            source: V
        }),
        Ie = De?.key === Ne ? De : null,
        Le;
    t[24] !== U?.libraryFileId || t[25] !== C ? (Le = () => ve(U?.libraryFileId ?? C), t[24] = U?.libraryFileId, t[25] = C, t[26] = Le) : Le = t[26];
    let Re = te(Le),
        ze = U?.libraryFileVersionNumber ?? w,
        Be = Re != null && (ze == null || Re.versionNumber >= ze) ? Re.code : void 0,
        W = Be ?? i ?? U?.content ?? s ?? null,
        Ve = U?.iconSvg ?? v ?? null,
        He = U?.libraryFileId ?? C,
        Ue = He == null && i == null && Be == null && l == null && V?.currentContentFileId == null && V?.latestPatchMessageId == null,
        We = re === !1 && le === `inline` && Ue,
        Ge;
    t[27] !== s || t[28] !== Ue || t[29] !== E || t[30] !== W || t[31] !== j || t[32] !== V ? (Ge = Ue ? V == null ? E != null && j != null && s != null && W === s ? {
        messageId: E,
        refIndex: j
    } : null : V.messageId.length > 0 && V.content != null && W === V.content ? {
        messageId: V.messageId,
        refIndex: V.refIndex
    } : null : null, t[27] = s, t[28] = Ue, t[29] = E, t[30] = W, t[31] = j, t[32] = V, t[33] = Ge) : Ge = t[33];
    let Ke = Ge,
        qe = le === `artifact`,
        Je = U?.styleMode ?? M ?? (qe && ce ? `open` : void 0),
        Ye;
    t[34] !== He || t[35] !== Je ? (Ye = ot({
        explicitStyleMode: Je,
        libraryFileId: He
    }), t[34] = He, t[35] = Je, t[36] = Ye) : Ye = t[36];
    let Xe = Ye,
        G = U?.title ?? N,
        Ze;
    t[37] === R ? Ze = t[38] : (Ze = () => R != null && x(R) ? `work` : `chat`, t[37] = R, t[38] = Ze);
    let Qe = te(Ze),
        $e;
    t[39] === d ? $e = t[40] : ($e = d ?? bt(), t[39] = d, t[40] = $e);
    let et = $e,
        tt = p ?? et,
        nt = ce,
        rt = qe && Xe === `open`,
        it = _e === `collapsed` || _e == null && oe && U?.latestPatchMessageId != null && U.latestPatchMessageId !== E,
        at = s != null || l != null,
        st;
    t[41] !== et || t[42] !== _ || t[43] !== s || t[44] !== R?.id || t[45] !== l || t[46] !== B || t[47] !== f || t[48] !== w || t[49] !== E || t[50] !== He || t[51] !== Xe || t[52] !== G || t[53] !== j || t[54] !== we || t[55] !== V?.messageId ? (st = async e => {
        let t = s;
        if (t == null && l != null) try {
            t = await me({
                abortSignal: new AbortController().signal,
                fileId: l,
                serverThreadId: we
            })
        } catch {
            return
        }
        t != null && xe({
            appBlockId: B,
            conversationId: R?.id ?? _ ?? null,
            isOriginalVersion: !0,
            versionNumber: w ?? void 0
        }, `app-block:${B}:original`, {
            canSubmitTurn: et,
            code: t,
            headerAction: f,
            focusOnClose: () => {
                e.isConnected && e.focus()
            },
            source: {
                appBlockId: B,
                libraryFileId: He,
                messageId: V?.messageId ?? E,
                refIndex: j
            },
            styleMode: Xe,
            title: G
        })
    }, t[41] = et, t[42] = _, t[43] = s, t[44] = R?.id, t[45] = l, t[46] = B, t[47] = f, t[48] = w, t[49] = E, t[50] = He, t[51] = Xe, t[52] = G, t[53] = j, t[54] = we, t[55] = V?.messageId, t[56] = st) : st = t[56], R?.id, V?.messageId;
    let lt = st;
    if (L && !nt) {
        let e;
        return t[57] !== T || t[58] !== G ? (e = (0, $.jsx)(Mn, {
            loadingLabels: T,
            title: G
        }), t[57] = T, t[58] = G, t[59] = e) : e = t[59], e
    }
    let ut = pe && s != null;
    if (Ie?.status === `missing` && !ut) return null;
    if (it) {
        let e = at ? lt : void 0,
            n;
        return t[60] !== G || t[61] !== e ? (n = (0, $.jsx)(lr, {
            onView: e,
            title: G
        }), t[60] = G, t[61] = e, t[62] = n) : n = t[62], n
    }
    let ft = W ?? (nt && L ? `` : null);
    if (ft == null) {
        if (U?.latestPatchMessageId != null) {
            let e = R?.id ?? _,
                n = Ie?.status === `failed`,
                r;
            t[63] === je ? r = t[64] : (r = () => je(Xn), t[63] = je, t[64] = r);
            let i;
            return t[65] !== B || t[66] !== qe || t[67] !== Ve || t[68] !== O || t[69] !== G || t[70] !== e || t[71] !== n || t[72] !== r ? (i = (0, $.jsx)(er, {
                appBlockId: B,
                conversationId: e,
                hasFailed: n,
                iconSvg: Ve,
                onRetry: r,
                previewLoadingLabel: O,
                showHeader: qe,
                title: G
            }), t[65] = B, t[66] = qe, t[67] = Ve, t[68] = O, t[69] = G, t[70] = e, t[71] = n, t[72] = r, t[73] = i) : i = t[73], i
        }
        let e;
        return t[74] !== T || t[75] !== G ? (e = (0, $.jsx)(Mn, {
            loadingLabels: T,
            title: G
        }), t[74] = T, t[75] = G, t[76] = e) : e = t[76], e
    }
    let pt;
    t[77] !== _ || t[78] !== Qe || t[79] !== L || t[80] !== se || t[81] !== E || t[82] !== j ? (pt = !L && !se && _ != null && E != null && j != null && yt() ? {
        reference: {
            clientThreadId: _,
            messageId: E,
            referenceIndex: j
        },
        target: {
            kind: `app_block`,
            metadata: {
                tab: Qe
            }
        }
    } : void 0, t[77] = _, t[78] = Qe, t[79] = L, t[80] = se, t[81] = E, t[82] = j, t[83] = pt) : pt = t[83];
    let mt = pt;
    if (ue) {
        let e = R?.id ?? _,
            r;
        t[84] !== n || t[85] !== o || t[86] !== I || t[87] !== B || t[88] !== h || t[89] !== y || t[90] !== L || t[91] !== ne || t[92] !== D || t[93] !== O || t[94] !== Xe || t[95] !== G || t[96] !== A || t[97] !== ft || t[98] !== nt || t[99] !== e || t[100] !== le || t[101] !== F ? (r = (0, $.jsx)(dr, {
            additionalResourceDomains: n,
            appBlockId: B,
            bind: o,
            captureConsoleMessages: I,
            clientThreadId: e,
            code: ft,
            id: h,
            inlineHeight: y,
            isStreaming: L,
            onConsoleMessagesChange: ne,
            onReadyChange: D,
            previewLoadingLabel: O,
            progressiveStreaming: nt,
            ref: A,
            styleMode: Xe,
            title: G,
            variant: le,
            widgetRefSeenAtMs: F
        }), t[84] = n, t[85] = o, t[86] = I, t[87] = B, t[88] = h, t[89] = y, t[90] = L, t[91] = ne, t[92] = D, t[93] = O, t[94] = Xe, t[95] = G, t[96] = A, t[97] = ft, t[98] = nt, t[99] = e, t[100] = le, t[101] = F, t[102] = r) : r = t[102];
        let i;
        return t[103] !== L || t[104] !== Ve || t[105] !== G || t[106] !== rt || t[107] !== r ? (i = (0, $.jsx)($n, {
            canOpen: !1,
            iconSvg: Ve,
            isShareReady: !1,
            isStreaming: L,
            showArtifactCard: rt,
            title: G,
            children: r
        }), t[103] = L, t[104] = Ve, t[105] = G, t[106] = rt, t[107] = r, t[108] = i) : i = t[108], i
    }
    let ht = R?.id ?? _,
        gt = V?.messageId ?? E,
        _t;
    t[109] !== B || t[110] !== He || t[111] !== j || t[112] !== gt ? (_t = {
        appBlockId: B,
        libraryFileId: He,
        messageId: gt,
        refIndex: j
    }, t[109] = B, t[110] = He, t[111] = j, t[112] = gt, t[113] = _t) : _t = t[113];
    let K = rt && tt && !L,
        vt = R?.id ?? _,
        q;
    t[114] !== Ke || t[115] !== ie ? (q = Ke == null ? void 0 : {
        contentReferenceIndex: Ke.refIndex,
        messageId: Ke.messageId,
        widgetName: ie ?? Ee.AppBlock,
        widgetType: Ee.AppBlock
    }, t[114] = Ke, t[115] = ie, t[116] = q) : q = t[116];
    let xt;
    t[117] !== n || t[118] !== o || t[119] !== I || t[120] !== B || t[121] !== mt || t[122] !== h || t[123] !== y || t[124] !== We || t[125] !== L || t[126] !== ne || t[127] !== D || t[128] !== Ve || t[129] !== O || t[130] !== Xe || t[131] !== G || t[132] !== A || t[133] !== ft || t[134] !== he || t[135] !== nt || t[136] !== rt || t[137] !== K || t[138] !== vt || t[139] !== q || t[140] !== le || t[141] !== F ? (xt = (0, $.jsx)(Zn, {
        additionalResourceDomains: n,
        appBlockId: B,
        bind: o,
        canOpen: K,
        captureConsoleMessages: I,
        clientThreadId: vt,
        code: ft,
        feedback: mt,
        iconSvg: Ve,
        id: h,
        inlineHeight: y,
        isStreaming: L,
        onConsoleMessagesChange: ne,
        onReadyChange: D,
        previewLoadingLabel: O,
        progressiveStreaming: nt,
        isSavedInlineLoad: We,
        ref: A,
        showArtifactCard: rt,
        shareConversation: he,
        shareTarget: q,
        styleMode: Xe,
        title: G,
        variant: le,
        widgetRefSeenAtMs: F
    }), t[117] = n, t[118] = o, t[119] = I, t[120] = B, t[121] = mt, t[122] = h, t[123] = y, t[124] = We, t[125] = L, t[126] = ne, t[127] = D, t[128] = Ve, t[129] = O, t[130] = Xe, t[131] = G, t[132] = A, t[133] = ft, t[134] = he, t[135] = nt, t[136] = rt, t[137] = K, t[138] = vt, t[139] = q, t[140] = le, t[141] = F, t[142] = xt) : xt = t[142];
    let St;
    return t[143] !== n || t[144] !== et || t[145] !== f || t[146] !== Xe || t[147] !== G || t[148] !== ft || t[149] !== ht || t[150] !== _t || t[151] !== xt ? (St = (0, $.jsx)(bn, {
        additionalResourceDomains: n,
        canSubmitTurn: et,
        code: ft,
        conversationId: ht,
        headerAction: f,
        styleMode: Xe,
        source: _t,
        title: G,
        children: xt
    }), t[143] = n, t[144] = et, t[145] = f, t[146] = Xe, t[147] = G, t[148] = ft, t[149] = ht, t[150] = _t, t[151] = xt, t[152] = St) : St = t[152], St
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
            previewLoadingLabel: g,
            progressiveStreaming: _,
            isSavedInlineLoad: v,
            ref: y,
            shareConversation: b,
            shareTarget: x,
            showArtifactCard: S,
            styleMode: ee,
            title: C,
            variant: T,
            widgetRefSeenAtMs: te
        } = e,
        {
            isExpanded: E,
            isViewingHistoricalVersion: ne,
            openExpandedView: D,
            setSharedPreview: O,
            sharedPreview: k,
            triggerRef: A
        } = mn(),
        j = (0, Q.useContext)(je),
        M;
    t[0] === n ? M = t[1] : (M = n ?? [], t[0] = n, t[1] = M);
    let N;
    t[2] !== c || t[3] !== d || t[4] !== ee || t[5] !== M ? (N = [d, ee, c, ...M], t[2] = c, t[3] = d, t[4] = ee, t[5] = M, t[6] = N) : N = t[6];
    let P = N.join(`\0`),
        [re, F] = (0, Q.useState)(null),
        ae = !p && re === P,
        oe;
    t[7] === D ? oe = t[8] : (oe = () => {
        ye(), D()
    }, t[7] = D, t[8] = oe);
    let I = oe,
        L;
    t[9] !== h || t[10] !== P ? (L = (e, t) => {
        F(e ? P : null), h?.(e, t)
    }, t[9] = h, t[10] = P, t[11] = L) : L = t[11];
    let se = L,
        ce;
    t[12] !== n || t[13] !== r || t[14] !== i || t[15] !== o || t[16] !== s || t[17] !== c || t[18] !== se || t[19] !== d || t[20] !== f || t[21] !== v || t[22] !== p || t[23] !== m || t[24] !== g || t[25] !== _ || t[26] !== y || t[27] !== ee || t[28] !== C || t[29] !== T || t[30] !== te ? (ce = (0, $.jsx)(dr, {
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
        previewLoadingLabel: g,
        progressiveStreaming: _,
        isSavedInlineLoad: v,
        ref: y,
        styleMode: ee,
        title: C,
        variant: T,
        widgetRefSeenAtMs: te
    }), t[12] = n, t[13] = r, t[14] = i, t[15] = o, t[16] = s, t[17] = c, t[18] = se, t[19] = d, t[20] = f, t[21] = v, t[22] = p, t[23] = m, t[24] = g, t[25] = _, t[26] = y, t[27] = ee, t[28] = C, t[29] = T, t[30] = te, t[31] = ce) : ce = t[31];
    let le;
    t[32] !== j || t[33] !== ce ? (le = {
        element: ce,
        sandboxPolicy: j
    }, t[32] = j, t[33] = ce, t[34] = le) : le = t[34];
    let R = le,
        ue;
    t[35] === R ? ue = t[36] : (ue = () => R, t[35] = R, t[36] = ue);
    let de = w(ue),
        fe;
    t[37] !== r || t[38] !== s || t[39] !== de || t[40] !== O ? (fe = e => {
        if (e == null) return;
        let {
            preview: t,
            sourceToken: n
        } = Fe({
            appBlockId: r,
            content: de(),
            conversationId: s ?? null,
            inlineContainer: e
        });
        return O(t), () => {
            let e = Ce();
            B(t, n, e?.sharedPreview === t)
        }
    }, t[37] = r, t[38] = s, t[39] = de, t[40] = O, t[41] = fe) : fe = t[41];
    let pe = fe,
        z, me;
    t[42] !== R || t[43] !== k ? (me = () => {
        k != null && Te(k, R)
    }, z = [R, k], t[42] = R, t[43] = k, t[44] = z, t[45] = me) : (z = t[44], me = t[45]), ie(me, z);
    let he = ne ? I : void 0,
        ge;
    t[46] !== u || t[47] !== he || t[48] !== C || t[49] !== A ? (ge = (0, $.jsx)(rr, {
        iconSvg: u,
        onOpen: he,
        openButtonRef: A,
        title: C
    }), t[46] = u, t[47] = he, t[48] = C, t[49] = A, t[50] = ge) : ge = t[50];
    let _e = E ? ge : null,
        ve;
    t[51] === pe ? ve = t[52] : (ve = (0, $.jsx)(`div`, {
        ref: pe,
        className: `w-full`
    }), t[51] = pe, t[52] = ve);
    let V;
    t[53] !== a || t[54] !== l || t[55] !== I || t[56] !== u || t[57] !== ae || t[58] !== p || t[59] !== b || t[60] !== x || t[61] !== S || t[62] !== ve || t[63] !== C || t[64] !== A ? (V = (0, $.jsx)($n, {
        canOpen: a,
        expandButtonRef: A,
        feedback: l,
        iconSvg: u,
        isShareReady: ae,
        shareConversation: b,
        shareTarget: x,
        isStreaming: p,
        showArtifactCard: S,
        title: C,
        onOpen: I,
        children: ve
    }), t[53] = a, t[54] = l, t[55] = I, t[56] = u, t[57] = ae, t[58] = p, t[59] = b, t[60] = x, t[61] = S, t[62] = ve, t[63] = C, t[64] = A, t[65] = V) : V = t[65];
    let be;
    t[66] !== E || t[67] !== V ? (be = (0, $.jsx)(`div`, {
        hidden: E,
        children: V
    }), t[66] = E, t[67] = V, t[68] = be) : be = t[68];
    let xe;
    return t[69] !== _e || t[70] !== be ? (xe = (0, $.jsxs)($.Fragment, {
        children: [_e, be]
    }), t[69] = _e, t[70] = be, t[71] = xe) : xe = t[71], xe
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
    t[0] === r ? c = t[1] : (c = re(`flex items-center justify-between gap-3`, r), t[0] = r, t[1] = c);
    let l = s ?? `truncate text-base font-semibold`,
        u;
    t[2] === l ? u = t[3] : (u = re(`text-token-text-primary`, l), t[2] = l, t[3] = u);
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
        m = de(),
        h;
    t[0] === m ? h = t[1] : (h = m.formatMessage({
        id: `6z1y4r`,
        defaultMessage: `App preview`
    }), t[0] = m, t[1] = h);
    let g = h,
        _;
    t[2] !== n || t[3] !== r || t[4] !== i || t[5] !== g || t[6] !== o || t[7] !== s || t[8] !== c || t[9] !== l || t[10] !== u || t[11] !== d || t[12] !== f || t[13] !== p ? (_ = f ? (0, $.jsxs)(`div`, {
        className: re(`shadow-xxs border-token-border-default bg-token-bg-primary w-full min-w-0 overflow-clip rounded-3xl border`, c && `cursor-wait`),
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
            fallbackTitle: g,
            leading: c ? (0, $.jsx)(C, {
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
    }), t[2] = n, t[3] = r, t[4] = i, t[5] = g, t[6] = o, t[7] = s, t[8] = c, t[9] = l, t[10] = u, t[11] = d, t[12] = f, t[13] = p, t[14] = _) : _ = t[14];
    let v;
    t[15] === a ? v = t[16] : (v = a == null ? null : (0, $.jsx)(tr, {
        ...a
    }), t[15] = a, t[16] = v);
    let y;
    return t[17] !== _ || t[18] !== v ? (y = (0, $.jsxs)(`div`, {
        className: `group/app-block-preview not-prose mt-4 mb-1 w-full overflow-visible`,
        "data-app-block-preview": `true`,
        children: [_, v]
    }), t[17] = _, t[18] = v, t[19] = y) : y = t[19], y
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
        u = te(Ce),
        d = de(),
        f;
    t[0] === d ? f = t[1] : (f = d.formatMessage({
        id: `chatgpt.app_block.preview_shell.fallback_title`,
        defaultMessage: `App preview`
    }), t[0] = d, t[1] = f);
    let p = f;
    if (Ie(u, {
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
    if (te(nr)) return null;
    let o;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, $.jsx)(be, {}), t[0] = o) : o = t[0];
    let s;
    return t[1] !== i || t[2] !== n || t[3] !== r ? (s = (0, $.jsx)(`div`, {
        className: `flex justify-end pt-1`,
        children: (0, $.jsx)(tt, {
            onOpenChange: a,
            open: i,
            reference: n,
            target: r,
            triggerButton: o
        })
    }), t[1] = i, t[2] = n, t[3] = r, t[4] = s) : s = t[4], s
}

function nr() {
    return $e()
}

function rr(e) {
    "use forget";
    let t = (0, Z.c)(23),
        {
            iconSvg: n,
            onOpen: r,
            openButtonRef: i,
            title: a
        } = e,
        o = de(),
        s, c, l, u, d;
    t[0] !== o || t[1] !== r || t[2] !== i || t[3] !== a ? (c = o.formatMessage({
        id: `XBBNdF`,
        defaultMessage: `App preview`
    }), d = `not-prose relative clear-both my-4 w-full max-w-full`, u = `shadow-xxs border-token-border-default bg-token-bg-primary text-token-text-primary flex h-20 w-full min-w-0 items-center gap-3 overflow-clip rounded-3xl border p-4`, s = Qn, l = r == null ? void 0 : (0, $.jsx)(D, {
        ref: i,
        color: `secondary`,
        label: o.formatMessage({
            id: `chatgpt.app_block.collapsed_preview.open.aria_label`,
            defaultMessage: `Open {title} in side pane`
        }, {
            title: a ?? c
        }),
        onClick: r,
        type: `button`,
        children: (0, $.jsx)(L, {
            id: `chatgpt.app_block.collapsed_preview.open`,
            defaultMessage: `Open`
        })
    }), t[0] = o, t[1] = r, t[2] = i, t[3] = a, t[4] = s, t[5] = c, t[6] = l, t[7] = u, t[8] = d) : (s = t[4], c = t[5], l = t[6], u = t[7], d = t[8]);
    let f;
    t[9] === n ? f = t[10] : (f = (0, $.jsx)(ir, {
        iconSvg: n
    }), t[9] = n, t[10] = f);
    let p;
    t[11] !== s || t[12] !== c || t[13] !== l || t[14] !== f || t[15] !== a ? (p = (0, $.jsx)(s, {
        action: l,
        className: `w-full`,
        fallbackTitle: c,
        leading: f,
        title: a,
        titleClassName: `truncate text-[17px] leading-6 font-medium tracking-[-0.43px]`
    }), t[11] = s, t[12] = c, t[13] = l, t[14] = f, t[15] = a, t[16] = p) : p = t[16];
    let m;
    t[17] !== u || t[18] !== p ? (m = (0, $.jsx)(`div`, {
        className: u,
        children: p
    }), t[17] = u, t[18] = p, t[19] = m) : m = t[19];
    let h;
    return t[20] !== d || t[21] !== m ? (h = (0, $.jsx)(`div`, {
        className: d,
        children: m
    }), t[20] = d, t[21] = m, t[22] = h) : h = t[22], h
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
    return t[2] !== i || t[3] !== o ? (s = o == null ? (0, $.jsx)(Le, {
        "aria-hidden": `true`,
        className: re(`icon-md shrink-0`, i)
    }) : (0, $.jsx)(`span`, {
        "aria-hidden": `true`,
        className: re(`icon-md shrink-0`, i),
        children: (0, $.jsx)(De, {
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
            onClick: r,
            ref: i
        } = e,
        a = de(),
        o;
    t[0] === a ? o = t[1] : (o = a.formatMessage({
        id: `I094Lq`,
        defaultMessage: `Open app`
    }), t[0] = a, t[1] = o);
    let s = o,
        c;
    t[2] === r ? c = t[3] : (c = e => {
        e.stopPropagation(), r()
    }, t[2] = r, t[3] = c);
    let l;
    t[4] !== s || t[5] !== i || t[6] !== c ? (l = (0, $.jsx)(D, {
        ref: i,
        type: `button`,
        icon: ze,
        color: `ghost`,
        size: `medium`,
        label: s,
        className: `size-9 rounded-full border-0 px-2 py-2 shadow-none`,
        onClick: c
    }), t[4] = s, t[5] = i, t[6] = c, t[7] = l) : l = t[7];
    let u;
    return t[8] !== n || t[9] !== s || t[10] !== l ? (u = (0, $.jsx)(ne, {
        label: s,
        className: n,
        children: l
    }), t[8] = n, t[9] = s, t[10] = l, t[11] = u) : u = t[11], u
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
            captureConsoleMessages: l,
            inlineHeight: u,
            isStreaming: f,
            onConsoleMessagesChange: p,
            onReadyChange: m,
            presentationSurface: h,
            previewLoadingLabel: g,
            progressiveStreaming: _,
            isSavedInlineLoad: v,
            ref: y,
            styleMode: b,
            surface: x,
            title: S,
            variant: ee,
            widgetRefSeenAtMs: C
        } = e,
        T = f !== void 0 && f,
        ne = _ !== void 0 && _,
        D = v !== void 0 && v,
        O = b === void 0 ? `default` : b,
        k = x === void 0 ? `inline` : x,
        j = ee === void 0 ? `inline` : ee,
        M = de(),
        N = (0, Q.useRef)(null),
        P = (0, Q.useRef)(null),
        F = We(i),
        [ae, oe] = (0, Q.useState)(F.values),
        I = d(ae, F.values) ? ae : F.values;
    I !== ae && oe(I);
    let se = [...F.callbacks.keys()],
        [ce, le] = (0, Q.useState)(se),
        R = d(ce, se) ? ce : se;
    R !== ce && le(R);
    let ue = (0, Q.useRef)(I),
        fe = (0, Q.useRef)(R),
        pe = (0, Q.useRef)(F.callbacks),
        z = i != null,
        me = (0, Q.useRef)(!1),
        he = (0, Q.useRef)(!1),
        ge = (0, Q.useRef)(null),
        B = (0, Q.useRef)(null),
        _e = (0, Q.useRef)(null),
        ve = (0, Q.useRef)(null),
        ye = (0, Q.useRef)(null),
        V = (0, Q.useRef)(null),
        be = (0, Q.useRef)(null),
        xe = (0, Q.useRef)(null),
        Se = (0, Q.useRef)(0),
        Ce = (0, Q.useRef)(null),
        we = (0, Q.useRef)(null),
        Te;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (Te = [], t[0] = Te) : Te = t[0];
    let H = (0, Q.useRef)(Te),
        Ee = E(),
        De = te(A),
        {
            isInternalPreview: Oe,
            networkPolicy: ke
        } = (0, Q.useContext)(je),
        Ae = ke === void 0 ? `none` : ke,
        Me = Xe() || Oe,
        Ne = Je(a) && !Oe,
        Pe = Ne || Oe && Ae === `deps-only`,
        Fe = Ee ? `dark` : `light`,
        U = M.locale,
        Ie;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (Ie = {
        status: `streaming`
    }, t[1] = Ie) : Ie = t[1];
    let [Le, Re] = (0, Q.useState)(Ie), ze = Le.status === `finalized` && Le.html !== o, Be = ne && !T && (j === `artifact` || Le.status === `failed`), W = ne && k === `inline` && Le.status !== `static` && !Be && !ze, Ve = W && T && j === `artifact` && !Jn(o), qe = Ve ? 0 : _r, Ye = u ?? `intrinsic-height`, Ze = Me ? `execution-enabled` : `execution-disabled`, Qe = Pe ? `network-enabled` : `network-disabled`, $e = Oe ? `internal-preview` : `workspace-preview`, et = z ? `bindings-enabled` : `bindings-disabled`, tt = W ? `progressive-app-block-stream` : o, nt;
    t[2] === r ? nt = t[3] : (nt = r ?? [], t[2] = r, t[3] = nt);
    let rt;
    t[4] !== De || t[5] !== U || t[6] !== O || t[7] !== k || t[8] !== Ye || t[9] !== Ze || t[10] !== Qe || t[11] !== $e || t[12] !== et || t[13] !== tt || t[14] !== nt || t[15] !== Fe ? (rt = [Fe, De, k, Ye, O, U, Ze, Qe, $e, et, tt, ...nt], t[4] = De, t[5] = U, t[6] = O, t[7] = k, t[8] = Ye, t[9] = Ze, t[10] = Qe, t[11] = $e, t[12] = et, t[13] = tt, t[14] = nt, t[15] = Fe, t[16] = rt) : rt = t[16];
    let it = rt.join(`\0`),
        at;
    t[17] === r ? at = t[18] : (at = tn(r), t[17] = r, t[18] = at);
    let ot = at,
        st = D ? `saved_inline` : void 0,
        ct = Pe ? `deps_only` : `disabled`,
        lt = k === `inline` ? j : void 0,
        ut = W ? `progressive` : `static`,
        dt;
    t[19] !== k || t[20] !== st || t[21] !== ct || t[22] !== lt || t[23] !== ut ? (dt = {
        loadSource: st,
        networkPolicy: ct,
        surface: k,
        variant: lt,
        renderMode: ut
    }, t[19] = k, t[20] = st, t[21] = ct, t[22] = lt, t[23] = ut, t[24] = dt) : dt = t[24];
    let ft = dt,
        [pt, mt] = (0, Q.useState)(0),
        [ht, gt] = (0, Q.useState)(null),
        _t = ht?.signature === it ? ht.status : null,
        K = _t === `ready`,
        vt = K || _t === `failed_after_ready`,
        yt = W && _t === `failed`,
        q = !T && !W && _t === `failed`,
        bt = h ?? k,
        xt = bt === `stage` || u != null,
        St = u == null ? k : `stage`,
        wt = ne && bt === `inline` && j === `inline`,
        Et = W && bt === `inline` && T && !q,
        Dt;
    t[25] !== o || t[26] !== ft || t[27] !== C ? (Dt = {
        content: o,
        metricTags: ft,
        widgetRefSeenAtMs: C
    }, t[25] = o, t[26] = ft, t[27] = C, t[28] = Dt) : Dt = t[28];
    let {
        cancelFirstPaintFrame: kt,
        startRunMetrics: At
    } = Ot(Dt), jt, Mt;
    t[29] === K ? (jt = t[30], Mt = t[31]) : (jt = () => {
        K && V.current?.markFirstPaint()
    }, Mt = [K], t[29] = K, t[30] = jt, t[31] = Mt), ie(jt, Mt);
    let Nt, Pt;
    t[32] !== K || t[33] !== m ? (Nt = () => {
        m?.(K)
    }, Pt = [K, m], t[32] = K, t[33] = m, t[34] = Nt, t[35] = Pt) : (Nt = t[34], Pt = t[35]), (0, Q.useEffect)(Nt, Pt);
    let Ft, It;
    t[36] !== R || t[37] !== I || t[38] !== F.callbacks ? (Ft = () => {
        ue.current = I, fe.current = R, pe.current = F.callbacks
    }, It = [R, I, F.callbacks], t[36] = R, t[37] = I, t[38] = F.callbacks, t[39] = Ft, t[40] = It) : (Ft = t[39], It = t[40]), ie(Ft, It);
    let Lt;
    t[41] === Symbol.for(`react.memo_cache_sentinel`) ? (Lt = e => {
        P.current === e && N.current?.updateAppBlockMessenger?.(Ke(e, ue.current, fe.current))
    }, t[41] = Lt) : Lt = t[41];
    let Rt = w(Lt),
        zt;
    t[42] === Rt ? zt = t[43] : (zt = e => {
        let t = P.current;
        if (t == null) return;
        let n = Ge(e, t),
            r = n && pe.current.get(n.name);
        if (n != null && r) {
            let e = () => {
                c.postTask(() => Rt(t))
            };
            try {
                Promise.resolve(r(...n.args)).then(e, e)
            } catch {
                e()
            }
        }
    }, t[42] = Rt, t[43] = zt);
    let Bt = w(zt),
        Vt;
    t[44] !== z || t[45] !== K || t[46] !== Rt ? (Vt = () => {
        let e = P.current;
        !K || !z || e == null || Rt(e)
    }, t[44] = z, t[45] = K, t[46] = Rt, t[47] = Vt) : Vt = t[47];
    let Ht;
    t[48] !== R || t[49] !== I || t[50] !== z || t[51] !== K || t[52] !== Rt ? (Ht = [R, I, z, K, Rt], t[48] = R, t[49] = I, t[50] = z, t[51] = K, t[52] = Rt, t[53] = Ht) : Ht = t[53], (0, Q.useEffect)(Vt, Ht);
    let Ut, Wt;
    t[54] !== u || t[55] !== K || t[56] !== h ? (Ut = () => {
        !K || h == null || N.current?.updateAppBlockSurface?.(u == null ? h : `stage`)
    }, Wt = [u, K, h], t[54] = u, t[55] = K, t[56] = h, t[57] = Ut, t[58] = Wt) : (Ut = t[57], Wt = t[58]), (0, Q.useEffect)(Ut, Wt);
    let Gt, Kt;
    t[59] === Symbol.for(`react.memo_cache_sentinel`) ? (Gt = () => ({
        clearCapturedConsoleMessages: () => {
            H.current = []
        },
        captureScreenshotDataUrl: async () => (await N.current?.screenshot())?.imageBase64 ?? null,
        focus: () => {
            N.current?.focus()
        }
    }), Kt = [], t[59] = Gt, t[60] = Kt) : (Gt = t[59], Kt = t[60]), (0, Q.useImperativeHandle)(y, Gt, Kt);
    let qt;
    t[61] === Symbol.for(`react.memo_cache_sentinel`) ? (qt = () => {
        Ce.current != null && (window.clearTimeout(Ce.current), Ce.current = null)
    }, t[61] = qt) : qt = t[61];
    let Jt = w(qt),
        Yt;
    t[62] === Symbol.for(`react.memo_cache_sentinel`) ? (Yt = () => {
        we.current != null && (window.clearTimeout(we.current), we.current = null)
    }, t[62] = Yt) : Yt = t[62];
    let J = w(Yt),
        Xt;
    t[63] !== K || t[64] !== W ? (Xt = () => {
        if (!W || !K || ye.current == null) return;
        let e = ve.current,
            t = N.current;
        if (e == null || t?.updateAppBlockStream == null || he.current) return;
        let n = Se.current;
        ve.current = null, B.current = Ct(), _e.current = e.html, e.isFinal && (he.current = !0);
        let r = () => Se.current !== n || ye.current == null ? Promise.resolve() : t.updateAppBlockStream?.(e) ?? Promise.resolve(),
            i = xe.current,
            a = i == null ? r() : i.then(r);
        xe.current = a, a.then(() => {
            xe.current === a && (xe.current = null);
            let t = ye.current;
            Se.current !== n || t == null || (Jn(e.html) && t.markFirstPaint(), e.isFinal && (t.reportPayloadSize(e.html), Re({
                status: `finalized`,
                html: e.html
            })))
        }, e => {
            xe.current === a && (xe.current = null), Se.current === n && (e instanceof DOMException && e.name === `AbortError` || be.current?.(`stream_update`, Tt(e)))
        })
    }, t[63] = K, t[64] = W, t[65] = Xt) : Xt = t[65];
    let Zt = w(Xt),
        Qt;
    t[66] !== De || t[67] !== Pe || t[68] !== l || t[69] !== Jt || t[70] !== J || t[71] !== o || t[72] !== St || t[73] !== z || t[74] !== Me || t[75] !== ze || t[76] !== D || t[77] !== T || t[78] !== U || t[79] !== p || t[80] !== m || t[81] !== h || t[82] !== it || t[83] !== Le.status || t[84] !== Be || t[85] !== W || t[86] !== At || t[87] !== O || t[88] !== Fe ? (Qt = () => {
        if (!Me) return;
        if (Le.status === `failed`) {
            if (T) return;
            Re({
                status: `static`
            }), mt(pr);
            return
        }(ze || Be && Le.status !== `static`) && Re({
            status: `static`
        });
        let e = W && N.current?.updateAppBlockStream != null;
        if (W && !e) {
            T || Re({
                status: `static`
            });
            return
        }
        me.current = !0, he.current = !1, ge.current = null, B.current = null, _e.current = null, ve.current = null, ye.current = null, V.current = null, be.current = null, xe.current = null, J(), Se.current += 1;
        let t = Se.current;
        Jt(), gt(null), P.current = z ? crypto.randomUUID() : null;
        let {
            expectReadySignal: n,
            html: r,
            frameColorScheme: i
        } = nn(o, Fe, U, De, St, {
            loadTailwind: Pe,
            progressiveStreaming: e,
            syncPresentationSurface: h != null,
            styleMode: O
        }), a = !1, s = !1, u = !1, d = !1, f = !1, g = () => Se.current === t, _ = () => e && s, v = At(g, {
            deferFirstPaint: e || D,
            deferPayloadSize: e
        });
        D && (V.current = v), e && (ye.current = v);
        let y = e => {
                !l || p == null || !g() || (H.current = e, !d && (d = !0, c.postTask(() => {
                    d = !1, g() && p(H.current)
                }, {
                    priority: `background`
                })))
            },
            b = e => {
                if (!(!g() || a || u)) {
                    if (a = !0, Jt(), v.markReady(e), D) {
                        s = !0, gt({
                            signature: it,
                            status: `ready`
                        });
                        return
                    }
                    f || (f = !0, c.postTask(() => {
                        f = !1, !(!g() || u) && (s = !0, gt({
                            signature: it,
                            status: `ready`
                        }))
                    }, {
                        priority: `background`
                    }))
                }
            },
            x = (t, n) => {
                !g() || u || (u = !0, Jt(), J(), ve.current = null, ye.current = null, e && Re({
                    status: `failed`
                }), gt({
                    signature: it,
                    status: _() ? `failed_after_ready` : `failed`,
                    readyTimedOut: n === `ready_timeout`
                }), v.reportFailure(t, n), c.postTask(() => {
                    g() && (e ? m?.(!1) : m?.(!1, `failure`))
                }, {
                    priority: `background`
                }))
            };
        be.current = x, H.current = [], y([]), Ce.current = window.setTimeout(() => {
            x(`sandbox_eval`, `ready_timeout`)
        }, yr), (async () => {
            let e = N.current?.evalAsync({
                code: r,
                ...P.current == null ? {} : {
                    additionalGlobals: {
                        __appBlockMessenger: Ke(P.current, ue.current, fe.current)
                    }
                },
                expectReadySignal: n,
                language: `html`,
                frameColorScheme: i,
                shouldPreservePreviewOnFatalError: () => g() && _()
            });
            if (e == null) {
                x(`sandbox_eval`, `missing_generator`);
                return
            }
            for (;;) {
                let t = await e.next();
                if (t.done) {
                    g() && !a && x(`sandbox_eval`, `generator_completed_without_ready`);
                    break
                }
                g() && (y([...H.current, t.value]), t.value.type === Ue.ENVIRONMENT_STATUS && t.value.status === He.RUNNING_CODE && b(`running_code`), t.value.type === Ue.RUN_COMPLETE && (t.value.wasFatalError ? x(`runtime`, `fatal_runtime_error`) : (b(`run_complete`), v.reportSuccess(`run_complete`))), await c.yield())
            }
        })().catch(e => {
            g() && (e instanceof DOMException && e.name === `AbortError` || x(`sandbox_eval`, Tt(e)))
        })
    }, t[66] = De, t[67] = Pe, t[68] = l, t[69] = Jt, t[70] = J, t[71] = o, t[72] = St, t[73] = z, t[74] = Me, t[75] = ze, t[76] = D, t[77] = T, t[78] = U, t[79] = p, t[80] = m, t[81] = h, t[82] = it, t[83] = Le.status, t[84] = Be, t[85] = W, t[86] = At, t[87] = O, t[88] = Fe, t[89] = Qt) : Qt = t[89];
    let Y = w(Qt),
        $t;
    t[90] !== Jt || t[91] !== J ? ($t = () => {
        Se.current += 1, me.current = !1, he.current = !1, ge.current = null, _e.current = null, ve.current = null, ye.current = null, be.current = null, xe.current = null, Jt(), J(), gt(null), mt(fr)
    }, t[90] = Jt, t[91] = J, t[92] = $t) : $t = t[92];
    let en = w($t),
        rn;
    t[93] !== xt || t[94] !== bt ? (rn = bt === `inline` && !xt ? {
        margin: -4,
        width: `calc(100% + ${vr*2}px)`
    } : void 0, t[93] = xt, t[94] = bt, t[95] = rn) : rn = t[95];
    let an = rn,
        on;
    t[96] !== kt || t[97] !== Jt || t[98] !== J || t[99] !== Y ? (on = () => {
        Y();
        let e = N.current;
        return () => {
            Se.current += 1, P.current = null, ye.current = null, V.current = null, be.current = null, xe.current = null, Jt(), J(), kt(), e?.stop()
        }
    }, t[96] = kt, t[97] = Jt, t[98] = J, t[99] = Y, t[100] = on) : on = t[100];
    let sn;
    t[101] !== kt || t[102] !== Jt || t[103] !== J || t[104] !== Me || t[105] !== it || t[106] !== Y || t[107] !== pt ? (sn = [kt, Jt, J, Me, it, Y, pt], t[101] = kt, t[102] = Jt, t[103] = J, t[104] = Me, t[105] = it, t[106] = Y, t[107] = pt, t[108] = sn) : sn = t[108], (0, Q.useEffect)(on, sn);
    let cn, ln;
    t[109] !== T || t[110] !== Y || t[111] !== W ? (cn = () => {
        !W || T || me.current || N.current?.updateAppBlockStream != null || Y()
    }, ln = [T, Y, W], t[109] = T, t[110] = Y, t[111] = W, t[112] = cn, t[113] = ln) : (cn = t[112], ln = t[113]), (0, Q.useEffect)(cn, ln);
    let un, dn;
    if (t[114] !== J || t[115] !== o || t[116] !== Zt || t[117] !== q || t[118] !== K || t[119] !== T || t[120] !== W || t[121] !== j ? (un = () => {
            if (!W || !K || q || he.current || N.current?.updateAppBlockStream == null) return;
            let e = T ? qn(o) : o;
            if (T && (ve.current?.html ?? _e.current) === e) return;
            if (ve.current = {
                    html: e,
                    isFinal: !T
                }, !T) {
                J(), Zt();
                return
            }
            let t = B.current;
            if (t == null && j === `artifact` && (ge.current ??= Ct(), t = ge.current), t == null) {
                Zt();
                return
            }
            let n = j === `artifact` ? xr : br,
                r = Ct() - t;
            if (r >= n) {
                Zt();
                return
            }
            return we.current = window.setTimeout(() => {
                we.current = null, Zt()
            }, n - r), J
        }, dn = [J, o, Zt, q, K, T, W, j], t[114] = J, t[115] = o, t[116] = Zt, t[117] = q, t[118] = K, t[119] = T, t[120] = W, t[121] = j, t[122] = un, t[123] = dn) : (un = t[122], dn = t[123]), (0, Q.useEffect)(un, dn), !Me) {
        let e;
        return t[124] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(Dn, {}), t[124] = e) : e = t[124], e
    }
    let fn = wt && `flex-col`,
        pn = bt === `inline` && (Ve ? `h-0 min-h-0 overflow-hidden` : `min-h-[120px] overflow-visible`),
        mn = bt === `stage` && `h-full min-h-0`,
        hn;
    t[125] !== fn || t[126] !== pn || t[127] !== mn ? (hn = re(`flex w-full`, fn, pn, mn), t[125] = fn, t[126] = pn, t[127] = mn, t[128] = hn) : hn = t[128];
    let gn;
    t[129] !== wt || t[130] !== Et || t[131] !== S ? (gn = wt ? (0, $.jsx)(Ln, {
        isVisible: Et,
        title: S
    }) : null, t[129] = wt, t[130] = Et, t[131] = S, t[132] = gn) : gn = t[132];
    let _n = !T && !W && (_t === `failed` || _t === `failed_after_ready`) && ht?.readyTimedOut || void 0,
        vn = bt === `inline` && !xt ? `flex-none` : `w-full`,
        yn = Et && `mask-shimmer mask-shimmer-duration-2800 motion-reduce:animate-none`,
        bn;
    t[133] !== vn || t[134] !== yn ? (bn = re(`relative min-w-0`, vn, yn), t[133] = vn, t[134] = yn, t[135] = bn) : bn = t[135];
    let xn;
    t[136] !== u || t[137] !== an || t[138] !== bt ? (xn = bt === `inline` && u != null ? {
        height: u
    } : an, t[136] = u, t[137] = an, t[138] = bt, t[139] = xn) : xn = t[139];
    let Sn = `${pt}:${Pe?`network-enabled`:`network-disabled`}:${Oe?`internal-preview`:`workspace-preview`}`,
        Cn;
    t[140] !== n || t[141] !== a || t[142] !== s ? (Cn = JSON.stringify([a ?? null, n ?? s]), t[140] = n, t[141] = a, t[142] = s, t[143] = Cn) : Cn = t[143];
    let wn;
    t[144] === M ? wn = t[145] : (wn = M.formatMessage({
        id: `gxcrdR`,
        defaultMessage: `App block preview`
    }), t[144] = M, t[145] = wn);
    let Tn = Pe ? `deps-only` : `none`,
        En = Ne ? Sr : Cr,
        On = vt ? 0 : -1,
        kn = z ? Bt : void 0,
        An = bt === `inline` && !xt,
        jn = !xt,
        Mn = W ? qe : gr,
        Nn;
    t[146] !== s || t[147] !== Oe || t[148] !== Y || t[149] !== ot || t[150] !== Sn || t[151] !== Cn || t[152] !== wn || t[153] !== Tn || t[154] !== En || t[155] !== On || t[156] !== kn || t[157] !== An || t[158] !== jn || t[159] !== Mn ? (Nn = (0, $.jsx)(G, {
        id: s,
        sandboxOriginId: Cn,
        title: wn,
        visuallyHidden: !1,
        networkPolicy: Tn,
        disableExternalNavigation: Oe,
        additionalResourceDomains: ot,
        sandboxPermissions: En,
        disablePermissions: !0,
        enableTransition: !1,
        enableAnimation: !1,
        iframeTabIndex: On,
        onRetryCodeRun: Y,
        onAppBlockMessage: kn,
        transparentBackground: An,
        useIntrinsicHeight: jn,
        intrinsicHeightFallback: Mn,
        ref: N
    }, Sn), t[146] = s, t[147] = Oe, t[148] = Y, t[149] = ot, t[150] = Sn, t[151] = Cn, t[152] = wn, t[153] = Tn, t[154] = En, t[155] = On, t[156] = kn, t[157] = An, t[158] = jn, t[159] = Mn, t[160] = Nn) : Nn = t[160];
    let Pn;
    t[161] === Et ? Pn = t[162] : (Pn = Et ? (0, $.jsx)(`div`, {
        "aria-hidden": `true`,
        className: `absolute inset-0 z-10 cursor-wait`
    }) : null, t[161] = Et, t[162] = Pn);
    let Fn;
    t[163] !== yt || t[164] !== q || t[165] !== vt || t[166] !== g || t[167] !== W ? (Fn = !vt && !q && (!W || yt) ? (0, $.jsx)(mr, {
        label: g
    }) : null, t[163] = yt, t[164] = q, t[165] = vt, t[166] = g, t[167] = W, t[168] = Fn) : Fn = t[168];
    let In;
    t[169] !== q || t[170] !== en ? (In = q ? (0, $.jsx)(hr, {
        onRetry: en
    }) : null, t[169] = q, t[170] = en, t[171] = In) : In = t[171];
    let X;
    t[172] !== Et || t[173] !== _n || t[174] !== bn || t[175] !== xn || t[176] !== Nn || t[177] !== Pn || t[178] !== Fn || t[179] !== In ? (X = (0, $.jsxs)(`div`, {
        "aria-busy": Et,
        "data-app-block-ready-timeout": _n,
        className: bn,
        style: xn,
        children: [Nn, Pn, Fn, In]
    }), t[172] = Et, t[173] = _n, t[174] = bn, t[175] = xn, t[176] = Nn, t[177] = Pn, t[178] = Fn, t[179] = In, t[180] = X) : X = t[180];
    let Rn;
    t[181] !== g || t[182] !== Et || t[183] !== j ? (Rn = Et && j === `artifact` ? (0, $.jsx)(`span`, {
        "aria-atomic": `true`,
        "aria-live": `polite`,
        className: `sr-only`,
        role: `status`,
        children: g ?? (0, $.jsx)(L, {
            id: `chatgpt.app_block.preview_loading`,
            defaultMessage: `Loading app`
        })
    }) : null, t[181] = g, t[182] = Et, t[183] = j, t[184] = Rn) : Rn = t[184];
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
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, $.jsx)(C, {
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
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, $.jsx)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, $.jsx)(L, {
            id: `chatgpt.app_block.preview_load_failed`,
            defaultMessage: `This app couldn't load.`
        })
    }), t[0] = r) : r = t[0];
    let i;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, $.jsx)(L, {
        id: `chatgpt.app_block.preview_retry`,
        defaultMessage: `Try again`
    }), t[1] = i) : i = t[1];
    let a;
    return t[2] === n ? a = t[3] : (a = (0, $.jsxs)(`div`, {
        className: `bg-primary absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center`,
        role: `alert`,
        children: [r, (0, $.jsx)(D, {
            type: `button`,
            color: `secondary`,
            size: `small`,
            onClick: n,
            children: i
        })]
    }), t[2] = n, t[3] = a), a
}
var Z, Q, $, gr, _r, vr, yr, br, xr, Sr, Cr, wr, Tr, Er, Dr, Or, kr, Ar, jr, Mr, Nr, Pr = e((() => {
    Z = ue(), a(), Qe(), V(), Me(), T(), f(), Ze(), g(), Be(), W(), Ve(), U(), Ye(), p(), he(), ft(), ut(), we(), b(), j(), i(), Se(), u(), M(), N(), r(), et(), pt(), Ae(), qe(), ee(), k(), Q = n(ce()), se(), pn(), Rt(), xt(), En(), Pe(), An(), _n(), Rn(), it(), z(), Oe(), at(), Gn(), $ = oe(), gr = 432, _r = 120, vr = 4, yr = 15e3, br = 100, xr = 350, Sr = `allow-scripts allow-same-origin allow-forms`, Cr = `allow-scripts allow-same-origin`, wr = 12e3, Tr = /<\/?([a-zA-Z][\w:-]*)(\s[^<>]*)?>/g, Er = /([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"/g, Dr = new Set([`svg`, `path`]), Or = new Set([`d`, `fill`, `height`, `viewBox`, `width`, `xmlns`]), kr = /<script(?:\s|>)/i, Ar = `script, style, template, link, meta, title, [hidden], [style*="display:none" i], [style*="visibility:hidden" i]`, jr = `audio, br, button, canvas, embed, hr, iframe, img, input, meter, object, picture, progress, select, svg, table, textarea, video`, Mr = e => {
        "use forget";
        let t = (0, Z.c)(13),
            {
                canOpen: n,
                conversation: r,
                expandButtonRef: i,
                isReady: a,
                onOpen: o,
                target: s
            } = e,
            c;
        t[0] !== n || t[1] !== i || t[2] !== o ? (c = n && o != null ? (0, $.jsx)(ur, {
            ref: i,
            className: `shrink-0`,
            onClick: o
        }) : null, t[0] = n, t[1] = i, t[2] = o, t[3] = c) : c = t[3];
        let l = c;
        if (r == null) return l;
        let u;
        t[4] === s ? u = t[5] : (u = s ?? {
            contentReferenceIndex: -1,
            messageId: ``
        }, t[4] = s, t[5] = u);
        let d = u,
            f = a && s != null,
            p;
        t[6] === l ? p = t[7] : (p = e => {
            let {
                isVisible: t,
                label: n,
                onSelect: r
            } = e;
            return t ? (0, $.jsxs)(`div`, {
                className: `flex shrink-0 items-center gap-1`,
                children: [(0, $.jsx)(ne, {
                    label: n,
                    children: (0, $.jsx)(D, {
                        type: `button`,
                        icon: Re,
                        color: `ghost`,
                        size: `medium`,
                        label: n,
                        className: `size-9 rounded-full border-0 px-2 py-2 shadow-none`,
                        onClick: e => {
                            e.stopPropagation(), r()
                        }
                    })
                }), l]
            }) : l
        }, t[6] = l, t[7] = p);
        let m;
        return t[8] !== d || t[9] !== r || t[10] !== f || t[11] !== p ? (m = (0, $.jsx)(mt, {
            category: Ee.AppBlock,
            conversation: r,
            isReady: f,
            target: d,
            children: p
        }), t[8] = d, t[9] = r, t[10] = f, t[11] = p, t[12] = m) : m = t[12], m
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
                    children: (0, $.jsx)(ht, {
                        action: e
                    })
                })
            }) : null]
        }), t[2] = n, t[3] = l);
        let u;
        return t[4] !== s || t[5] !== r || t[6] !== c || t[7] !== l ? (u = (0, $.jsx)(mt, {
            category: Ee.InlineAppBlock,
            conversation: r,
            isReady: c,
            target: s,
            children: l
        }), t[4] = s, t[5] = r, t[6] = c, t[7] = l, t[8] = u) : u = t[8], u
    }
}));
export {
    Kn as a, Gn as c, En as d, Ct as f, q as g, bt as h, dr as i, xn as l, xt as m, rr as n, Pr as o, Rt as p, mr as r, zn as s, Yn as t, Sn as u
};
//# sourceMappingURL=e3b746a6-c0yfqquuve0si76q.js.map
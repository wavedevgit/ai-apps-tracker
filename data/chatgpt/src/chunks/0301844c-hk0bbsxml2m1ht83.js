const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/ebd8e554-k7qvp6edifgq3xi9.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/b2c255f5-jtb173lpkgg29zao.js", "assets/3a6eb079-hjakmv42muhkqjzj.js", "assets/9e9d0eec-nkmykeb4giti97x1.js", "assets/ea7792a2-d9m2q4bht39qycrh.js", "assets/9f8043fe-b16zixijfs6j31kd.js", "assets/c3104c13-celq2mcekzljf1n9.js", "assets/b093033a-m6cbsx636usydyrs.js", "assets/7e5e046a-bkyd6zuo528w0v54.js", "assets/bcae0416-pblhiabe5myymn9k.js", "assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/global-modals-njebr7y8.css", "assets/c00ae0a6-ikpmdcblt4iczj6s.js", "assets/99299f16-htblw95rr0bd3dy3.js", "assets/27c30153-gk5goiyh0qlj2ezx.js", "assets/dd651ce9-ixiil6xwqei9br73.js"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bn as r,
    Vn as i,
    cn as a,
    ln as o,
    wn as s
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    n as c,
    t as l
} from "./b2c255f5-jtb173lpkgg29zao.js";
import {
    a as u,
    i as d,
    n as f,
    o as p,
    r as m,
    t as h
} from "./978e2561-r50h2qwrxol46t6y.js";
import {
    n as g,
    t as _
} from "./8b0ac3b9-mgwcitlhq9phj0vc.js";
import {
    n as v,
    t as y
} from "./293b9207-k5mdwpe6tsp0nubd.js";
import {
    o as b,
    t as x
} from "./9f8043fe-b16zixijfs6j31kd.js";
var S = t({
        default: () => D
    }),
    C, w, T, E, D, O = e((() => {
        C = s(), c(), w = n(i()), v(), f(), p(), b(), g(), d(), T = r(), o(), E = (0, w.lazy)(() => a(() => import(`./ebd8e554-k7qvp6edifgq3xi9.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]))), D = e => {
            "use forget";
            let t = (0, C.c)(12),
                {
                    data: n
                } = e,
                {
                    models: r
                } = (0, w.useContext)(l),
                i = (0, w.useContext)(u);
            if (!n?.artworkLabel) return null;
            if (!i) {
                let e;
                return t[0] === n ? e = t[1] : (e = (0, T.jsx)(h, {
                    children: (0, T.jsx)(D, {
                        data: n
                    })
                }), t[0] = n, t[1] = e), e
            }
            let a;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = {
                bottom: 120
            }, t[2] = a) : a = t[2];
            let o;
            t[3] === n.posters ? o = t[4] : (o = x.map(e => {
                let {
                    name: t,
                    height: r,
                    end: i,
                    desktopEndX: a
                } = e;
                return (0, T.jsx)(`div`, {
                    className: `absolute aspect-square -translate-x-1/2 min-[768px]:[--dots-footer-position:var(--dots-footer-desktop-x)]`,
                    style: {
                        "--dots-footer-desktop-x": `${a*100}%`,
                        left: `var(--dots-footer-position, ${i[0]*100}%)`,
                        height: `calc(var(--dots-footer-height-ratio) * ${100*r}cqw)`,
                        bottom: `calc(var(--dots-footer-height-ratio) * ${100*(1-i[1]-r/2)}cqw)`
                    },
                    children: (0, T.jsx)(y, {
                        name: t,
                        src: n.posters?.[t]
                    })
                }, t)
            }), t[3] = n.posters, t[4] = o);
            let s;
            t[5] === o ? s = t[6] : (s = (0, T.jsx)(`div`, {
                className: `@container absolute start-1/2 w-full max-w-[calc((100cqh-120px)*1280/660)] -translate-x-1/2 [--dots-footer-height-ratio:0.515625] min-[600px]:max-w-[min(768px,calc((100cqh-120px)*768/300))] min-[600px]:-translate-y-[30px] min-[600px]:[--dots-footer-height-ratio:0.390625] min-[768px]:max-w-[min(768px,calc(100%-32px),calc((100cqh-120px)*768/512))] min-[768px]:[--dots-footer-height-ratio:0.6666666667]`,
                style: a,
                children: o
            }), t[5] = o, t[6] = s);
            let c = s,
                d;
            return t[7] !== n.artworkLabel || t[8] !== c || t[9] !== r || t[10] !== i ? (d = (0, T.jsx)(`div`, {
                className: `${m.cast} [container-type:size]`,
                children: r ? (0, T.jsx)(_, {
                    label: n.artworkLabel,
                    className: m.canvas,
                    fallback: c,
                    children: (0, T.jsx)(E, {
                        arrived: i
                    })
                }) : (0, T.jsx)(`div`, {
                    className: m.canvas,
                    role: `img`,
                    "aria-label": n.artworkLabel,
                    children: c
                })
            }), t[7] = n.artworkLabel, t[8] = c, t[9] = r, t[10] = i, t[11] = d) : d = t[11], d
        }
    }));
export {
    S as n, O as r, D as t
};
//# sourceMappingURL=0301844c-hk0bbsxml2m1ht83.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as t,
    Y5 as n
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as r
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function i({
    id: e,
    question: t,
    answer: r,
    isOpen: i,
    onToggle: o
}) {
    let s = `${e??t}-question`,
        c = `${e??t}-answer`;
    return (0, a.jsxs)(`div`, {
        className: `border-token-border-default hover:border-token-border-heavy border-b`,
        children: [(0, a.jsxs)(`button`, {
            onClick: o,
            className: `text-md flex w-full justify-between py-5 text-start text-[17px]`,
            "aria-expanded": i,
            "aria-controls": c,
            id: s,
            "aria-label": `${t} ${i?`close`:`open`}`,
            children: [t, (0, a.jsx)(`span`, {
                className: `ps-4`,
                children: i ? `−` : `+`
            })]
        }), (0, a.jsx)(`div`, {
            className: n(`grid transition-all duration-200`, {
                "grid-rows-[1fr]": i,
                "grid-rows-[0fr]": !i
            }),
            "aria-hidden": !i,
            id: c,
            children: (0, a.jsx)(`div`, {
                className: `overflow-hidden`,
                children: (0, a.jsx)(`div`, {
                    className: `mb-5 text-[14px] opacity-70`,
                    children: r
                })
            })
        })]
    })
}
var a, o = e((() => {
    t(), a = r()
}));
export {
    o as n, i as t
};
//# sourceMappingURL=dd53ca11-kgtey5igufma1iem.js.map
import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b5 as t,
    y5 as n
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as r,
    Nn as i,
    Rn as a
} from "./2340486e-oc6d2eodbcrmxur3.js";

function o({
    className: e,
    linesAdded: t,
    linesRemoved: r
}) {
    return !t && !r ? null : (0, s.jsxs)(`div`, {
        className: n(`flex flex-row gap-1 font-medium`, e),
        children: [(0, s.jsx)(`span`, {
            className: `text-green-500`,
            children: (0, s.jsx)(i, {
                id: `wham.message.modal.repoAndDiffStats.linesAdded`,
                defaultMessage: `+{linesAdded}`,
                values: {
                    linesAdded: t
                }
            })
        }), (0, s.jsx)(`span`, {
            className: `text-red-500`,
            children: (0, s.jsx)(i, {
                id: `wham.message.modal.repoAndDiffStats.linesRemoved`,
                defaultMessage: `-{linesRemoved}`,
                values: {
                    linesRemoved: r
                }
            })
        })]
    })
}
var s, c = e((() => {
    t(), a(), s = r()
}));
export {
    c as n, o as t
};
//# sourceMappingURL=1f8ec761-gdkbctews9uyc4zr.js.map
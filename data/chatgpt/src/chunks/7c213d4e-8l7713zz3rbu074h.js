import {
    n as e,
    s as t,
    t as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Crt as r,
    jE as i,
    wrt as a
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    o,
    r as s
} from "./cf64444f-modbgm3900g9sfxp.js";
import {
    a as c,
    d as l,
    t as u,
    u as d
} from "./f531ca99-g6vzm2ih8ulbxps2.js";
var f = n(((e, t) => {
    (function(n) {
        function r(e) {
            var t = e.slice(11),
                n = null,
                r = null;
            switch (t.indexOf(`"`)) {
                case -1:
                    var i = t.split(` `);
                    n = i[0].slice(2), r = i[1].slice(2);
                    break;
                case 0:
                    var a = t.indexOf(`"`, 2);
                    n = t.slice(3, a);
                    var o = t.indexOf(`"`, a + 1);
                    r = o < 0 ? t.slice(a + 4) : t.slice(o + 3, -1);
                    break;
                default:
                    var i = t.split(` `);
                    n = i[0].slice(2), r = i[1].slice(3, -1);
                    break
            }
            return {
                oldPath: n,
                newPath: r
            }
        }
        var i = {
            parse: function(e) {
                for (var t = [], n = 2, i, a, o, s, c, l = e.split(`
`), u = l.length, d = 0; d < u;) {
                    var f = l[d];
                    if (f.indexOf(`diff --git`) === 0) {
                        c = r(f), i = {
                            hunks: [],
                            oldEndingNewLine: !0,
                            newEndingNewLine: !0,
                            oldPath: c.oldPath,
                            newPath: c.newPath
                        }, t.push(i);
                        var p = null,
                            m;
                        simiLoop: for (; m = l[++d];) {
                            var h = m.indexOf(` `),
                                g = h > -1 ? m.slice(0, h) : g;
                            switch (g) {
                                case `diff`:
                                    d--;
                                    break simiLoop;
                                case `deleted`:
                                case `new`:
                                    var _ = m.slice(h + 1);
                                    _.indexOf(`file mode`) === 0 && (i[g === `new` ? `newMode` : `oldMode`] = _.slice(10));
                                    break;
                                case `similarity`:
                                    i.similarity = parseInt(m.split(` `)[2], 10);
                                    break;
                                case `index`:
                                    var v = m.slice(h + 1).split(` `),
                                        y = v[0].split(`..`);
                                    i.oldRevision = y[0], i.newRevision = y[1], v[1] && (i.oldMode = i.newMode = v[1]);
                                    break;
                                case `copy`:
                                case `rename`:
                                    var b = m.slice(h + 1);
                                    b.indexOf(`from`) === 0 ? i.oldPath = b.slice(5) : i.newPath = b.slice(3), p = g;
                                    break;
                                case `---`:
                                    var x = m.slice(h + 1),
                                        S = l[++d].slice(4);
                                    x === `/dev/null` ? (S = S.slice(2), p = `add`) : S === `/dev/null` ? (x = x.slice(2), p = `delete`) : (p = `modify`, x = x.slice(2), S = S.slice(2)), x && (i.oldPath = x), S && (i.newPath = S), n = 5;
                                    break simiLoop
                            }
                        }
                        i.type = p || `modify`
                    } else if (f.indexOf(`Binary`) === 0) i.isBinary = !0, i.type = f.indexOf(`/dev/null and`) >= 0 ? `add` : f.indexOf(`and /dev/null`) >= 0 ? `delete` : `modify`, n = 2, i = null;
                    else if (n === 5)
                        if (f.indexOf(`@@`) === 0) {
                            var C = /^@@\s+-([0-9]+)(,([0-9]+))?\s+\+([0-9]+)(,([0-9]+))?/.exec(f);
                            a = {
                                content: f,
                                oldStart: C[1] - 0,
                                newStart: C[4] - 0,
                                oldLines: C[3] - 0 || 1,
                                newLines: C[6] - 0 || 1,
                                changes: []
                            }, i.hunks.push(a), o = a.oldStart, s = a.newStart
                        } else {
                            var w = f.slice(0, 1),
                                T = {
                                    content: f.slice(1)
                                };
                            switch (w) {
                                case `+`:
                                    T.type = `insert`, T.isInsert = !0, T.lineNumber = s, s++;
                                    break;
                                case `-`:
                                    T.type = `delete`, T.isDelete = !0, T.lineNumber = o, o++;
                                    break;
                                case ` `:
                                    T.type = `normal`, T.isNormal = !0, T.oldLineNumber = o, T.newLineNumber = s, o++, s++;
                                    break;
                                case `\\`:
                                    var E = a.changes[a.changes.length - 1];
                                    E.isDelete || (i.newEndingNewLine = !1), E.isInsert || (i.oldEndingNewLine = !1)
                            }
                            T.type && a.changes.push(T)
                        } d++
                }
                return t
            }
        };
        typeof e == `object` && typeof t == `object` ? e = t.exports = i : typeof define == `function` && define.amd ? define(`gitDiffParser`, [], i) : n.gitDiffParser = i
    })(e)
}));

function p(e, t) {
    return `${e??-1}:${t?`f`:`c`}`
}

function m(e) {
    if (e === `/dev/null`) return u;
    let t = e.split(`/`).pop() ?? ``,
        n = t.lastIndexOf(`.`);
    return n === -1 ? `` : t.slice(n + 1)
}

function h(e, t) {
    let n = y.default.parse(e),
        r = e.split(/(?=^diff --git\s)/m).filter(Boolean);
    return n.slice(0, t).map((t, i) => {
        try {
            let a = t.oldRevision?.startsWith(`0000000`) ?? !1,
                o = t.newRevision?.startsWith(`0000000`) ?? !1,
                s = a ? u : t.oldPath ?? t.newPath ?? `/dev/null`,
                c = o ? u : t.newPath ?? t.oldPath ?? `/dev/null`,
                d = m(s),
                f = m(c),
                p = _(e, n, i),
                h = l.createInstance({
                    oldFile: {
                        fileName: s,
                        fileLang: d
                    },
                    newFile: {
                        fileName: c,
                        fileLang: f
                    },
                    hunks: t.hunks.map(e => g(t, e))
                });
            return h.init(), h.buildSplitDiffLines(), h.buildUnifiedDiffLines(), {
                hunksText: r[i],
                diffFile: h,
                isBinary: p
            }
        } catch (e) {
            return a.error(`Failed to tokenize ${t.newPath}: ${e}`), null
        }
    }).filter(e => e != null)
}

function g(e, t) {
    let n = t.changes.map(e => {
            let t = e.type;
            switch (t) {
                case `insert`:
                    return `+${e.content}`;
                case `delete`:
                    return `-${e.content}`;
                case `normal`:
                    return ` ${e.content}`
            }
            return (0, v.assertNever)(t), ``
        }).join(`
`),
        r = t.content + `
` + n + `
`;
    return [`diff --git a/${e.oldPath} b/${e.newPath}`, `index ${e.oldRevision}..${e.newRevision} ${e.newMode}`, `--- a/${e.oldPath}`, `+++ b/${e.newPath}`, r].join(`
`)
}

function _(e, t, n) {
    let r = e.split(`
`).map(e => e.trim()),
        i = r.indexOf(`index ${t[n].oldRevision}..${t[n].newRevision}`),
        a = -1;
    return a = n < t.length - 2 ? r.indexOf(`index ${t[n+1].oldRevision}..${t[n+1].newRevision}`) : r.length, i !== -1 && i < a && r.slice(i, a).some(e => e === `GIT binary patch`)
}
var v, y, b, x, S = e((() => {
    r(), o(), d(), v = t(i()), y = t(f()), c(), b = new WeakMap, x = ({
        assistantTurn: e,
        maxFiles: t,
        followUp: n = !1
    }) => {
        if (!e.id) return [];
        let r = p(t, n),
            i = b.get(e),
            a = i?.get(r);
        if (a) return a;
        let o = [];
        for (let r of s(e, n)) {
            let e = t === void 0 ? void 0 : t - o.length;
            if (e !== void 0 && e <= 0) break;
            o.push(...h(r, e))
        }
        let c = i ?? new Map;
        return c.set(r, o), i || b.set(e, c), o
    }
}));
export {
    f as i, h as n, x as r, S as t
};
//# sourceMappingURL=7c213d4e-8l7713zz3rbu074h.js.map
export const __rspack_esm_ids = [623497];
export const __webpack_modules__ = {
    EIbe: (function(e) {
        let t = [
                [{
                    color: "0, 0, 0",
                    class: "ansi-black"
                }, {
                    color: "187, 0, 0",
                    class: "ansi-red"
                }, {
                    color: "0, 187, 0",
                    class: "ansi-green"
                }, {
                    color: "187, 187, 0",
                    class: "ansi-yellow"
                }, {
                    color: "0, 0, 187",
                    class: "ansi-blue"
                }, {
                    color: "187, 0, 187",
                    class: "ansi-magenta"
                }, {
                    color: "0, 187, 187",
                    class: "ansi-cyan"
                }, {
                    color: "255,255,255",
                    class: "ansi-white"
                }],
                [{
                    color: "85, 85, 85",
                    class: "ansi-bright-black"
                }, {
                    color: "255, 85, 85",
                    class: "ansi-bright-red"
                }, {
                    color: "0, 255, 0",
                    class: "ansi-bright-green"
                }, {
                    color: "255, 255, 85",
                    class: "ansi-bright-yellow"
                }, {
                    color: "85, 85, 255",
                    class: "ansi-bright-blue"
                }, {
                    color: "255, 85, 255",
                    class: "ansi-bright-magenta"
                }, {
                    color: "85, 255, 255",
                    class: "ansi-bright-cyan"
                }, {
                    color: "255, 255, 255",
                    class: "ansi-bright-white"
                }]
            ],
            r = /(https?:\/\/(?:[A-Za-z0-9#;/?:@=+$',_.!~*()[\]-]|&amp;|%[A-Fa-f0-9]{2})+)/gm;
        e.exports = class e {
            static escapeForHtml(t) {
                return new e().escapeForHtml(t)
            }
            static linkify(t) {
                return new e().linkify(t)
            }
            static ansiToHtml(t, r) {
                return new e().ansiToHtml(t, r)
            }
            static ansiToJson(t, r) {
                return new e().ansiToJson(t, r)
            }
            static ansiToText(t) {
                return new e().ansiToText(t)
            }
            constructor() {
                this.fg = this.bg = this.fg_truecolor = this.bg_truecolor = null, this.bright = 0, this.decorations = []
            }
            setupPalette() {
                this.PALETTE_COLORS = [];
                for (let e = 0; e < 2; ++e)
                    for (let r = 0; r < 8; ++r) this.PALETTE_COLORS.push(t[e][r].color);
                let e = [0, 95, 135, 175, 215, 255],
                    r = (t, r, i) => e[t] + ", " + e[r] + ", " + e[i];
                for (let e = 0; e < 6; ++e)
                    for (let t = 0; t < 6; ++t)
                        for (let i = 0; i < 6; ++i) this.PALETTE_COLORS.push(r(e, t, i));
                let i = 8;
                for (let e = 0; e < 24; ++e, i += 10) this.PALETTE_COLORS.push(i + ", " + i + ", " + i)
            }
            escapeForHtml(e) {
                return e.replace(/[&<>\"]/gm, e => "&" == e ? "&amp;" : '"' == e ? "&quot;" : "<" == e ? "&lt;" : ">" == e ? "&gt;" : "")
            }
            linkify(e) {
                return e.replace(r, e => `<a href="${e}">${e}</a>`)
            }
            ansiToHtml(e, t) {
                return this.process(e, t, !0)
            }
            ansiToJson(e, t) {
                return (t = t || {}).json = !0, t.clearLine = !1, this.process(e, t, !0)
            }
            ansiToText(e) {
                return this.process(e, {}, !1)
            }
            process(e, t, r) {
                let i = e.split(/\033\[/),
                    o = i.shift();
                null == t && (t = {}), t.clearLine = /\r/.test(e);
                let n = i.map(e => this.processChunk(e, t, r));
                if (t && t.json) {
                    let e = this.processChunkJson("");
                    return e.content = o, e.clearLine = t.clearLine, n.unshift(e), t.remove_empty && (n = n.filter(e => !e.isEmpty())), n
                }
                return n.unshift(o), n.join("")
            }
            processChunkJson(e, r, i) {
                let o = (r = void 0 === r ? {} : r).use_classes = void 0 !== r.use_classes && r.use_classes,
                    n = r.key = o ? "class" : "color",
                    l = {
                        content: e,
                        fg: null,
                        bg: null,
                        fg_truecolor: null,
                        bg_truecolor: null,
                        isInverted: !1,
                        clearLine: r.clearLine,
                        decoration: null,
                        decorations: [],
                        was_processed: !1,
                        isEmpty: () => !l.content
                    },
                    s = e.match(/^([!\x3c-\x3f]*)([\d;]*)([\x20-\x2c]*[\x40-\x7e])([\s\S]*)/m);
                if (!s) return l;
                l.content = s[4];
                let a = s[2].split(";");
                if ("" !== s[1] || "m" !== s[3] || !i) return l;
                for (; a.length > 0;) {
                    let e = parseInt(a.shift());
                    if (isNaN(e) || 0 === e) this.fg = this.bg = null, this.decorations = [];
                    else if (1 === e) this.decorations.push("bold");
                    else if (2 === e) this.decorations.push("dim");
                    else if (3 === e) this.decorations.push("italic");
                    else if (4 === e) this.decorations.push("underline");
                    else if (5 === e) this.decorations.push("blink");
                    else if (7 === e) this.decorations.push("reverse");
                    else if (8 === e) this.decorations.push("hidden");
                    else if (9 === e) this.decorations.push("strikethrough");
                    else if (21 === e) this.removeDecoration("bold");
                    else if (22 === e) this.removeDecoration("bold"), this.removeDecoration("dim");
                    else if (23 === e) this.removeDecoration("italic");
                    else if (24 === e) this.removeDecoration("underline");
                    else if (25 === e) this.removeDecoration("blink");
                    else if (27 === e) this.removeDecoration("reverse");
                    else if (28 === e) this.removeDecoration("hidden");
                    else if (29 === e) this.removeDecoration("strikethrough");
                    else if (39 === e) this.fg = null;
                    else if (49 === e) this.bg = null;
                    else if (e >= 30 && e < 38) this.fg = t[0][e % 10][n];
                    else if (e >= 90 && e < 98) this.fg = t[1][e % 10][n];
                    else if (e >= 40 && e < 48) this.bg = t[0][e % 10][n];
                    else if (e >= 100 && e < 108) this.bg = t[1][e % 10][n];
                    else if (38 === e || 48 === e) {
                        let r = 38 === e;
                        if (a.length >= 1) {
                            let e = a.shift();
                            if ("5" === e && a.length >= 1) {
                                let e = parseInt(a.shift());
                                if (e >= 0 && e <= 255)
                                    if (o) {
                                        let i = e >= 16 ? "ansi-palette-" + e : t[+(e > 7)][e % 8].class;
                                        r ? this.fg = i : this.bg = i
                                    } else this.PALETTE_COLORS || this.setupPalette(), r ? this.fg = this.PALETTE_COLORS[e] : this.bg = this.PALETTE_COLORS[e]
                            } else if ("2" === e && a.length >= 3) {
                                let e = parseInt(a.shift()),
                                    t = parseInt(a.shift()),
                                    i = parseInt(a.shift());
                                if (e >= 0 && e <= 255 && t >= 0 && t <= 255 && i >= 0 && i <= 255) {
                                    let n = e + ", " + t + ", " + i;
                                    o ? r ? (this.fg = "ansi-truecolor", this.fg_truecolor = n) : (this.bg = "ansi-truecolor", this.bg_truecolor = n) : r ? this.fg = n : this.bg = n
                                }
                            }
                        }
                    }
                }
                return null === this.fg && null === this.bg && 0 === this.decorations.length || (l.fg = this.fg, l.bg = this.bg, l.fg_truecolor = this.fg_truecolor, l.bg_truecolor = this.bg_truecolor, l.decorations = this.decorations, l.decoration = this.decorations.slice(-1).pop() || null, l.was_processed = !0), l
            }
            processChunk(e, r, i) {
                r = r || {};
                let o = this.processChunkJson(e, r, i),
                    n = r.use_classes;
                if (o.decorations = o.decorations.filter(e => {
                        if ("reverse" === e) {
                            o.fg || (o.fg = t[0][7][n ? "class" : "color"]), o.bg || (o.bg = t[0][0][n ? "class" : "color"]);
                            let e = o.fg;
                            o.fg = o.bg, o.bg = e;
                            let r = o.fg_truecolor;
                            return o.fg_truecolor = o.bg_truecolor, o.bg_truecolor = r, o.isInverted = !0, !1
                        }
                        return !0
                    }), r.json) return o;
                if (o.isEmpty()) return "";
                if (!o.was_processed) return o.content;
                let l = [],
                    s = [],
                    a = [],
                    h = {},
                    c = e => {
                        let t, r = [];
                        for (t in e) e.hasOwnProperty(t) && r.push("data-" + t + '="' + this.escapeForHtml(e[t]) + '"');
                        return r.length > 0 ? " " + r.join(" ") : ""
                    };
                return (o.isInverted && (h["ansi-is-inverted"] = "true"), o.fg && (n ? (l.push(o.fg + "-fg"), null !== o.fg_truecolor && (h["ansi-truecolor-fg"] = o.fg_truecolor, o.fg_truecolor = null)) : l.push("color:rgb(" + o.fg + ")")), o.bg && (n ? (l.push(o.bg + "-bg"), null !== o.bg_truecolor && (h["ansi-truecolor-bg"] = o.bg_truecolor, o.bg_truecolor = null)) : l.push("background-color:rgb(" + o.bg + ")")), o.decorations.forEach(e => {
                    n ? s.push("ansi-" + e) : "bold" === e ? s.push("font-weight:bold") : "dim" === e ? s.push("opacity:0.5") : "italic" === e ? s.push("font-style:italic") : "hidden" === e ? s.push("visibility:hidden") : "strikethrough" === e ? a.push("line-through") : a.push(e)
                }), a.length && s.push("text-decoration:" + a.join(" ")), n) ? '<span class="' + l.concat(s).join(" ") + '"' + c(h) + ">" + o.content + "</span>" : '<span style="' + l.concat(s).join(";") + '"' + c(h) + ">" + o.content + "</span>"
            }
            removeDecoration(e) {
                let t = this.decorations.indexOf(e);
                t >= 0 && this.decorations.splice(t, 1)
            }
        }
    }),
    f8lQ: (function(e) {
        var t = {
            single_source_shortest_paths: function(e, r, i) {
                var o, n, l, s, a, h, c, u = {},
                    d = {};
                d[r] = 0;
                var f = t.PriorityQueue.make();
                for (f.push(r, 0); !f.empty();)
                    for (l in n = (o = f.pop()).value, s = o.cost, a = e[n] || {}) a.hasOwnProperty(l) && (h = s + a[l], c = d[l], (void 0 === d[l] || c > h) && (d[l] = h, f.push(l, h), u[l] = n));
                if (void 0 !== i && void 0 === d[i]) throw Error(["Could not find a path from ", r, " to ", i, "."].join(""));
                return u
            },
            extract_shortest_path_from_predecessor_list: function(e, t) {
                for (var r = [], i = t; i;) r.push(i), e[i], i = e[i];
                return r.reverse(), r
            },
            find_path: function(e, r, i) {
                var o = t.single_source_shortest_paths(e, r, i);
                return t.extract_shortest_path_from_predecessor_list(o, i)
            },
            PriorityQueue: {
                make: function(e) {
                    var r, i = t.PriorityQueue,
                        o = {};
                    for (r in e = e || {}, i) i.hasOwnProperty(r) && (o[r] = i[r]);
                    return o.queue = [], o.sorter = e.sorter || i.default_sorter, o
                },
                default_sorter: function(e, t) {
                    return e.cost - t.cost
                },
                push: function(e, t) {
                    this.queue.push({
                        value: e,
                        cost: t
                    }), this.queue.sort(this.sorter)
                },
                pop: function() {
                    return this.queue.shift()
                },
                empty: function() {
                    return 0 === this.queue.length
                }
            }
        };
        e.exports = t
    }),
    rFhZ: (function(e, t, r) {
        let i = r("VJml"),
            o = r("GN25"),
            n = r("g2wZ"),
            l = r("du2n");

        function s(e, t, r, n, l) {
            let s = [].slice.call(arguments, 1),
                a = s.length,
                h = "function" == typeof s[a - 1];
            if (!h && !i()) throw Error("Callback required as last argument");
            if (h) {
                if (a < 2) throw Error("Too few arguments provided");
                2 === a ? (l = r, r = t, t = n = void 0) : 3 === a && (t.getContext && void 0 === l ? (l = n, n = void 0) : (l = n, n = r, r = t, t = void 0))
            } else {
                if (a < 1) throw Error("Too few arguments provided");
                return 1 === a ? (r = t, t = n = void 0) : 2 !== a || t.getContext || (n = r, r = t, t = void 0), new Promise(function(i, l) {
                    try {
                        let l = o.create(r, n);
                        i(e(l, t, n))
                    } catch (e) {
                        l(e)
                    }
                })
            }
            try {
                let i = o.create(r, n);
                l(null, e(i, t, n))
            } catch (e) {
                l(e)
            }
        }
        t.a = o.create, s.bind(null, n.render), s.bind(null, n.renderToDataURL), s.bind(null, function(e, t, r) {
            return l.render(e, r)
        })
    }),
    VJml: (function(e) {
        e.exports = function() {
            return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
        }
    }),
    NxDs: (function(e, t, r) {
        let i = r("YBfX").getSymbolSize;
        t.getRowColCoords = function(e) {
            if (1 === e) return [];
            let t = Math.floor(e / 7) + 2,
                r = i(e),
                o = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * t - 2)),
                n = [r - 7];
            for (let e = 1; e < t - 1; e++) n[e] = n[e - 1] - o;
            return n.push(6), n.reverse()
        }, t.getPositions = function(e) {
            let r = [],
                i = t.getRowColCoords(e),
                o = i.length;
            for (let e = 0; e < o; e++)
                for (let t = 0; t < o; t++)(0 !== e || 0 !== t) && (0 !== e || t !== o - 1) && (e !== o - 1 || 0 !== t) && r.push([i[e], i[t]]);
            return r
        }
    }),
    XrtS: (function(e, t, r) {
        let i = r("VFGm"),
            o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

        function n(e) {
            this.mode = i.ALPHANUMERIC, this.data = e
        }
        n.getBitsLength = function(e) {
            return 11 * Math.floor(e / 2) + e % 2 * 6
        }, n.prototype.getLength = function() {
            return this.data.length
        }, n.prototype.getBitsLength = function() {
            return n.getBitsLength(this.data.length)
        }, n.prototype.write = function(e) {
            let t;
            for (t = 0; t + 2 <= this.data.length; t += 2) {
                let r = 45 * o.indexOf(this.data[t]);
                r += o.indexOf(this.data[t + 1]), e.put(r, 11)
            }
            this.data.length % 2 && e.put(o.indexOf(this.data[t]), 6)
        }, e.exports = n
    }),
    PrMp: (function(e) {
        function t() {
            this.buffer = [], this.length = 0
        }
        t.prototype = {
            get: function(e) {
                let t = Math.floor(e / 8);
                return (this.buffer[t] >>> 7 - e % 8 & 1) == 1
            },
            put: function(e, t) {
                for (let r = 0; r < t; r++) this.putBit((e >>> t - r - 1 & 1) == 1)
            },
            getLengthInBits: function() {
                return this.length
            },
            putBit: function(e) {
                let t = Math.floor(this.length / 8);
                this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
            }
        }, e.exports = t
    }),
    QOw5: (function(e) {
        function t(e) {
            if (!e || e < 1) throw Error("BitMatrix size must be defined and greater than 0");
            this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e)
        }
        t.prototype.set = function(e, t, r, i) {
            let o = e * this.size + t;
            this.data[o] = r, i && (this.reservedBit[o] = !0)
        }, t.prototype.get = function(e, t) {
            return this.data[e * this.size + t]
        }, t.prototype.xor = function(e, t, r) {
            this.data[e * this.size + t] ^= r
        }, t.prototype.isReserved = function(e, t) {
            return this.reservedBit[e * this.size + t]
        }, e.exports = t
    }),
    dees: (function(e, t, r) {
        let i = r("VFGm");

        function o(e) {
            this.mode = i.BYTE, "string" == typeof e ? this.data = new TextEncoder().encode(e) : this.data = new Uint8Array(e)
        }
        o.getBitsLength = function(e) {
            return 8 * e
        }, o.prototype.getLength = function() {
            return this.data.length
        }, o.prototype.getBitsLength = function() {
            return o.getBitsLength(this.data.length)
        }, o.prototype.write = function(e) {
            for (let t = 0, r = this.data.length; t < r; t++) e.put(this.data[t], 8)
        }, e.exports = o
    }),
    lbSx: (function(e, t, r) {
        let i = r("Uv0t"),
            o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
            n = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
        t.getBlocksCount = function(e, t) {
            switch (t) {
                case i.L:
                    return o[(e - 1) * 4 + 0];
                case i.M:
                    return o[(e - 1) * 4 + 1];
                case i.Q:
                    return o[(e - 1) * 4 + 2];
                case i.H:
                    return o[(e - 1) * 4 + 3];
                default:
                    return
            }
        }, t.getTotalCodewordsCount = function(e, t) {
            switch (t) {
                case i.L:
                    return n[(e - 1) * 4 + 0];
                case i.M:
                    return n[(e - 1) * 4 + 1];
                case i.Q:
                    return n[(e - 1) * 4 + 2];
                case i.H:
                    return n[(e - 1) * 4 + 3];
                default:
                    return
            }
        }
    }),
    Uv0t: (function(e, t) {
        t.L = {
            bit: 1
        }, t.M = {
            bit: 0
        }, t.Q = {
            bit: 3
        }, t.H = {
            bit: 2
        }, t.isValid = function(e) {
            return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4
        }, t.from = function(e, r) {
            if (t.isValid(e)) return e;
            try {
                if ("string" != typeof e) throw Error("Param is not a string");
                switch (e.toLowerCase()) {
                    case "l":
                    case "low":
                        return t.L;
                    case "m":
                    case "medium":
                        return t.M;
                    case "q":
                    case "quartile":
                        return t.Q;
                    case "h":
                    case "high":
                        return t.H;
                    default:
                        throw Error("Unknown EC Level: " + e)
                }
            } catch (e) {
                return r
            }
        }
    }),
    IibT: (function(e, t, r) {
        let i = r("YBfX").getSymbolSize;
        t.getPositions = function(e) {
            let t = i(e);
            return [
                [0, 0],
                [t - 7, 0],
                [0, t - 7]
            ]
        }
    }),
    gdIu: (function(e, t, r) {
        let i = r("YBfX"),
            o = i.getBCHDigit(1335);
        t.getEncodedBits = function(e, t) {
            let r = e.bit << 3 | t,
                n = r << 10;
            for (; i.getBCHDigit(n) - o >= 0;) n ^= 1335 << i.getBCHDigit(n) - o;
            return (r << 10 | n) ^ 21522
        }
    }),
    aaID: (function(e, t) {
        let r = new Uint8Array(512),
            i = new Uint8Array(256),
            o = 1;
        for (let e = 0; e < 255; e++) r[e] = o, i[o] = e, 256 & (o <<= 1) && (o ^= 285);
        for (let e = 255; e < 512; e++) r[e] = r[e - 255];
        t.exp = function(e) {
            return r[e]
        }, t.mul = function(e, t) {
            return 0 === e || 0 === t ? 0 : r[i[e] + i[t]]
        }
    }),
    MEGq: (function(e, t, r) {
        let i = r("VFGm"),
            o = r("YBfX");

        function n(e) {
            this.mode = i.KANJI, this.data = e
        }
        n.getBitsLength = function(e) {
            return 13 * e
        }, n.prototype.getLength = function() {
            return this.data.length
        }, n.prototype.getBitsLength = function() {
            return n.getBitsLength(this.data.length)
        }, n.prototype.write = function(e) {
            let t;
            for (t = 0; t < this.data.length; t++) {
                let r = o.toSJIS(this.data[t]);
                if (r >= 33088 && r <= 40956) r -= 33088;
                else if (r >= 57408 && r <= 60351) r -= 49472;
                else throw Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
                r = (r >>> 8 & 255) * 192 + (255 & r), e.put(r, 13)
            }
        }, e.exports = n
    }),
    LE59: (function(e, t) {
        t.Patterns = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        };
        t.isValid = function(e) {
            return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
        }, t.from = function(e) {
            return t.isValid(e) ? parseInt(e, 10) : void 0
        }, t.getPenaltyN1 = function(e) {
            let t = e.size,
                r = 0,
                i = 0,
                o = 0,
                n = null,
                l = null;
            for (let s = 0; s < t; s++) {
                i = o = 0, n = l = null;
                for (let a = 0; a < t; a++) {
                    let t = e.get(s, a);
                    t === n ? i++ : (i >= 5 && (r += 3 + (i - 5)), n = t, i = 1), (t = e.get(a, s)) === l ? o++ : (o >= 5 && (r += 3 + (o - 5)), l = t, o = 1)
                }
                i >= 5 && (r += 3 + (i - 5)), o >= 5 && (r += 3 + (o - 5))
            }
            return r
        }, t.getPenaltyN2 = function(e) {
            let t = e.size,
                r = 0;
            for (let i = 0; i < t - 1; i++)
                for (let o = 0; o < t - 1; o++) {
                    let t = e.get(i, o) + e.get(i, o + 1) + e.get(i + 1, o) + e.get(i + 1, o + 1);
                    (4 === t || 0 === t) && r++
                }
            return 3 * r
        }, t.getPenaltyN3 = function(e) {
            let t = e.size,
                r = 0,
                i = 0,
                o = 0;
            for (let n = 0; n < t; n++) {
                i = o = 0;
                for (let l = 0; l < t; l++) i = i << 1 & 2047 | e.get(n, l), l >= 10 && (1488 === i || 93 === i) && r++, o = o << 1 & 2047 | e.get(l, n), l >= 10 && (1488 === o || 93 === o) && r++
            }
            return 40 * r
        }, t.getPenaltyN4 = function(e) {
            let t = 0,
                r = e.data.length;
            for (let i = 0; i < r; i++) t += e.data[i];
            return 10 * Math.abs(Math.ceil(100 * t / r / 5) - 10)
        }, t.applyMask = function(e, r) {
            let i = r.size;
            for (let o = 0; o < i; o++)
                for (let n = 0; n < i; n++) r.isReserved(n, o) || r.xor(n, o, function(e, r, i) {
                    switch (e) {
                        case t.Patterns.PATTERN000:
                            return (r + i) % 2 == 0;
                        case t.Patterns.PATTERN001:
                            return r % 2 == 0;
                        case t.Patterns.PATTERN010:
                            return i % 3 == 0;
                        case t.Patterns.PATTERN011:
                            return (r + i) % 3 == 0;
                        case t.Patterns.PATTERN100:
                            return (Math.floor(r / 2) + Math.floor(i / 3)) % 2 == 0;
                        case t.Patterns.PATTERN101:
                            return r * i % 2 + r * i % 3 == 0;
                        case t.Patterns.PATTERN110:
                            return (r * i % 2 + r * i % 3) % 2 == 0;
                        case t.Patterns.PATTERN111:
                            return (r * i % 3 + (r + i) % 2) % 2 == 0;
                        default:
                            throw Error("bad maskPattern:" + e)
                    }
                }(e, n, o))
        }, t.getBestMask = function(e, r) {
            let i = Object.keys(t.Patterns).length,
                o = 0,
                n = 1 / 0;
            for (let l = 0; l < i; l++) {
                r(l), t.applyMask(l, e);
                let i = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
                t.applyMask(l, e), i < n && (n = i, o = l)
            }
            return o
        }
    }),
    VFGm: (function(e, t, r) {
        let i = r("Y8xa"),
            o = r("fFdr");
        t.NUMERIC = {
            id: "Numeric",
            bit: 1,
            ccBits: [10, 12, 14]
        }, t.ALPHANUMERIC = {
            id: "Alphanumeric",
            bit: 2,
            ccBits: [9, 11, 13]
        }, t.BYTE = {
            id: "Byte",
            bit: 4,
            ccBits: [8, 16, 16]
        }, t.KANJI = {
            id: "Kanji",
            bit: 8,
            ccBits: [8, 10, 12]
        }, t.MIXED = {
            bit: -1
        }, t.getCharCountIndicator = function(e, t) {
            if (!e.ccBits) throw Error("Invalid mode: " + e);
            if (!i.isValid(t)) throw Error("Invalid version: " + t);
            return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
        }, t.getBestModeForData = function(e) {
            return o.testNumeric(e) ? t.NUMERIC : o.testAlphanumeric(e) ? t.ALPHANUMERIC : o.testKanji(e) ? t.KANJI : t.BYTE
        }, t.toString = function(e) {
            if (e && e.id) return e.id;
            throw Error("Invalid mode")
        }, t.isValid = function(e) {
            return e && e.bit && e.ccBits
        }, t.from = function(e, r) {
            if (t.isValid(e)) return e;
            try {
                if ("string" != typeof e) throw Error("Param is not a string");
                switch (e.toLowerCase()) {
                    case "numeric":
                        return t.NUMERIC;
                    case "alphanumeric":
                        return t.ALPHANUMERIC;
                    case "kanji":
                        return t.KANJI;
                    case "byte":
                        return t.BYTE;
                    default:
                        throw Error("Unknown mode: " + e)
                }
            } catch (e) {
                return r
            }
        }
    }),
    meD9: (function(e, t, r) {
        let i = r("VFGm");

        function o(e) {
            this.mode = i.NUMERIC, this.data = e.toString()
        }
        o.getBitsLength = function(e) {
            return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
        }, o.prototype.getLength = function() {
            return this.data.length
        }, o.prototype.getBitsLength = function() {
            return o.getBitsLength(this.data.length)
        }, o.prototype.write = function(e) {
            let t, r;
            for (t = 0; t + 3 <= this.data.length; t += 3) r = parseInt(this.data.substr(t, 3), 10), e.put(r, 10);
            let i = this.data.length - t;
            i > 0 && (r = parseInt(this.data.substr(t), 10), e.put(r, 3 * i + 1))
        }, e.exports = o
    }),
    CyKQ: (function(e, t, r) {
        let i = r("aaID");
        t.mul = function(e, t) {
            let r = new Uint8Array(e.length + t.length - 1);
            for (let o = 0; o < e.length; o++)
                for (let n = 0; n < t.length; n++) r[o + n] ^= i.mul(e[o], t[n]);
            return r
        }, t.mod = function(e, t) {
            let r = new Uint8Array(e);
            for (; r.length - t.length >= 0;) {
                let e = r[0];
                for (let o = 0; o < t.length; o++) r[o] ^= i.mul(t[o], e);
                let o = 0;
                for (; o < r.length && 0 === r[o];) o++;
                r = r.slice(o)
            }
            return r
        }, t.generateECPolynomial = function(e) {
            let r = new Uint8Array([1]);
            for (let o = 0; o < e; o++) r = t.mul(r, new Uint8Array([1, i.exp(o)]));
            return r
        }
    }),
    GN25: (function(e, t, r) {
        let i = r("YBfX"),
            o = r("Uv0t"),
            n = r("PrMp"),
            l = r("QOw5"),
            s = r("NxDs"),
            a = r("IibT"),
            h = r("LE59"),
            c = r("lbSx"),
            u = r("F0J9"),
            d = r("SIJL"),
            f = r("gdIu"),
            g = r("VFGm"),
            p = r("qjFV");

        function C(e, t, r) {
            let i, o, n = e.size,
                l = f.getEncodedBits(t, r);
            for (i = 0; i < 15; i++) o = (l >> i & 1) == 1, i < 6 ? e.set(i, 8, o, !0) : i < 8 ? e.set(i + 1, 8, o, !0) : e.set(n - 15 + i, 8, o, !0), i < 8 ? e.set(8, n - i - 1, o, !0) : i < 9 ? e.set(8, 15 - i - 1 + 1, o, !0) : e.set(8, 15 - i - 1, o, !0);
            e.set(n - 8, 8, 1, !0)
        }
        t.create = function(e, t) {
            let r, f;
            if (void 0 === e || "" === e) throw Error("No input text");
            let m = o.M;
            return void 0 !== t && (m = o.from(t.errorCorrectionLevel, o.M), r = d.from(t.version), f = h.from(t.maskPattern), t.toSJISFunc && i.setToSJISFunction(t.toSJISFunc)),
                function(e, t, r, o) {
                    let f;
                    if (Array.isArray(e)) f = p.fromArray(e);
                    else if ("string" == typeof e) {
                        let i = t;
                        if (!i) {
                            let t = p.rawSplit(e);
                            i = d.getBestVersionForData(t, r)
                        }
                        f = p.fromString(e, i || 40)
                    } else throw Error("Invalid data");
                    let m = d.getBestVersionForData(f, r);
                    if (!m) throw Error("The amount of data is too big to be stored in a QR Code");
                    if (t) {
                        if (t < m) throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + m + ".\n")
                    } else t = m;
                    let y = function(e, t, r) {
                            let o = new n;
                            r.forEach(function(t) {
                                o.put(t.mode.bit, 4), o.put(t.getLength(), g.getCharCountIndicator(t.mode, e)), t.write(o)
                            });
                            let l = (i.getSymbolTotalCodewords(e) - c.getTotalCodewordsCount(e, t)) * 8;
                            for (o.getLengthInBits() + 4 <= l && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(0);
                            let s = (l - o.getLengthInBits()) / 8;
                            for (let e = 0; e < s; e++) o.put(e % 2 ? 17 : 236, 8);
                            return function(e, t, r) {
                                let o, n, l = i.getSymbolTotalCodewords(t),
                                    s = l - c.getTotalCodewordsCount(t, r),
                                    a = c.getBlocksCount(t, r),
                                    h = l % a,
                                    d = a - h,
                                    f = Math.floor(l / a),
                                    g = Math.floor(s / a),
                                    p = g + 1,
                                    C = f - g,
                                    m = new u(C),
                                    y = 0,
                                    w = Array(a),
                                    x = Array(a),
                                    v = 0,
                                    b = new Uint8Array(e.buffer);
                                for (let e = 0; e < a; e++) {
                                    let t = e < d ? g : p;
                                    w[e] = b.slice(y, y + t), x[e] = m.encode(w[e]), y += t, v = Math.max(v, t)
                                }
                                let L = new Uint8Array(l),
                                    E = 0;
                                for (o = 0; o < v; o++)
                                    for (n = 0; n < a; n++) o < w[n].length && (L[E++] = w[n][o]);
                                for (o = 0; o < C; o++)
                                    for (n = 0; n < a; n++) L[E++] = x[n][o];
                                return L
                            }(o, e, t)
                        }(t, r, f),
                        w = new l(i.getSymbolSize(t));
                    ! function(e, t) {
                        let r = e.size,
                            i = a.getPositions(t);
                        for (let t = 0; t < i.length; t++) {
                            let o = i[t][0],
                                n = i[t][1];
                            for (let t = -1; t <= 7; t++)
                                if (!(o + t <= -1) && !(r <= o + t))
                                    for (let i = -1; i <= 7; i++) n + i <= -1 || r <= n + i || (t >= 0 && t <= 6 && (0 === i || 6 === i) || i >= 0 && i <= 6 && (0 === t || 6 === t) || t >= 2 && t <= 4 && i >= 2 && i <= 4 ? e.set(o + t, n + i, !0, !0) : e.set(o + t, n + i, !1, !0))
                        }
                    }(w, t);
                    let x = w.size;
                    for (let e = 8; e < x - 8; e++) {
                        let t = e % 2 == 0;
                        w.set(e, 6, t, !0), w.set(6, e, t, !0)
                    }
                    return ! function(e, t) {
                        let r = s.getPositions(t);
                        for (let t = 0; t < r.length; t++) {
                            let i = r[t][0],
                                o = r[t][1];
                            for (let t = -2; t <= 2; t++)
                                for (let r = -2; r <= 2; r++) - 2 === t || 2 === t || -2 === r || 2 === r || 0 === t && 0 === r ? e.set(i + t, o + r, !0, !0) : e.set(i + t, o + r, !1, !0)
                        }
                    }(w, t), C(w, r, 0), t >= 7 && function(e, t) {
                        let r, i, o, n = e.size,
                            l = d.getEncodedBits(t);
                        for (let t = 0; t < 18; t++) r = Math.floor(t / 3), i = t % 3 + n - 8 - 3, o = (l >> t & 1) == 1, e.set(r, i, o, !0), e.set(i, r, o, !0)
                    }(w, t), ! function(e, t) {
                        let r = e.size,
                            i = -1,
                            o = r - 1,
                            n = 7,
                            l = 0;
                        for (let s = r - 1; s > 0; s -= 2)
                            for (6 === s && s--;;) {
                                for (let r = 0; r < 2; r++)
                                    if (!e.isReserved(o, s - r)) {
                                        let i = !1;
                                        l < t.length && (i = (t[l] >>> n & 1) == 1), e.set(o, s - r, i), -1 == --n && (l++, n = 7)
                                    } if ((o += i) < 0 || r <= o) {
                                    o -= i, i = -i;
                                    break
                                }
                            }
                    }(w, y), isNaN(o) && (o = h.getBestMask(w, C.bind(null, w, r))), h.applyMask(o, w), C(w, r, o), {
                        modules: w,
                        version: t,
                        errorCorrectionLevel: r,
                        maskPattern: o,
                        segments: f
                    }
                }(e, r, m, f)
        }
    }),
    F0J9: (function(e, t, r) {
        let i = r("CyKQ");

        function o(e) {
            this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
        }
        o.prototype.initialize = function(e) {
            this.degree = e, this.genPoly = i.generateECPolynomial(this.degree)
        }, o.prototype.encode = function(e) {
            if (!this.genPoly) throw Error("Encoder not initialized");
            let t = new Uint8Array(e.length + this.degree);
            t.set(e);
            let r = i.mod(t, this.genPoly),
                o = this.degree - r.length;
            if (o > 0) {
                let e = new Uint8Array(this.degree);
                return e.set(r, o), e
            }
            return r
        }, e.exports = o
    }),
    fFdr: (function(e, t) {
        let r = "[0-9]+",
            i = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
            o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (i = i.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
        t.KANJI = RegExp(i, "g"), t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = RegExp(o, "g"), t.NUMERIC = RegExp(r, "g"), t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g");
        let n = RegExp("^" + i + "$"),
            l = RegExp("^" + r + "$"),
            s = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
        t.testKanji = function(e) {
            return n.test(e)
        }, t.testNumeric = function(e) {
            return l.test(e)
        }, t.testAlphanumeric = function(e) {
            return s.test(e)
        }
    }),
    qjFV: (function(e, t, r) {
        let i = r("VFGm"),
            o = r("meD9"),
            n = r("XrtS"),
            l = r("dees"),
            s = r("MEGq"),
            a = r("fFdr"),
            h = r("YBfX"),
            c = r("f8lQ");

        function u(e) {
            return unescape(encodeURIComponent(e)).length
        }

        function d(e, t, r) {
            let i, o = [];
            for (; null !== (i = e.exec(r));) o.push({
                data: i[0],
                index: i.index,
                mode: t,
                length: i[0].length
            });
            return o
        }

        function f(e) {
            let t, r, o = d(a.NUMERIC, i.NUMERIC, e),
                n = d(a.ALPHANUMERIC, i.ALPHANUMERIC, e);
            return h.isKanjiModeEnabled() ? (t = d(a.BYTE, i.BYTE, e), r = d(a.KANJI, i.KANJI, e)) : (t = d(a.BYTE_KANJI, i.BYTE, e), r = []), o.concat(n, t, r).sort(function(e, t) {
                return e.index - t.index
            }).map(function(e) {
                return {
                    data: e.data,
                    mode: e.mode,
                    length: e.length
                }
            })
        }

        function g(e, t) {
            switch (t) {
                case i.NUMERIC:
                    return o.getBitsLength(e);
                case i.ALPHANUMERIC:
                    return n.getBitsLength(e);
                case i.KANJI:
                    return s.getBitsLength(e);
                case i.BYTE:
                    return l.getBitsLength(e)
            }
        }

        function p(e, t) {
            let r, a = i.getBestModeForData(e);
            if ((r = i.from(t, a)) !== i.BYTE && r.bit < a.bit) throw Error('"' + e + '" cannot be encoded with mode ' + i.toString(r) + ".\n Suggested mode is: " + i.toString(a));
            switch (r === i.KANJI && !h.isKanjiModeEnabled() && (r = i.BYTE), r) {
                case i.NUMERIC:
                    return new o(e);
                case i.ALPHANUMERIC:
                    return new n(e);
                case i.KANJI:
                    return new s(e);
                case i.BYTE:
                    return new l(e)
            }
        }
        t.fromArray = function(e) {
            return e.reduce(function(e, t) {
                return "string" == typeof t ? e.push(p(t, null)) : t.data && e.push(p(t.data, t.mode)), e
            }, [])
        }, t.fromString = function(e, r) {
            let o = function(e, t) {
                    let r = {},
                        o = {
                            start: {}
                        },
                        n = ["start"];
                    for (let l = 0; l < e.length; l++) {
                        let s = e[l],
                            a = [];
                        for (let e = 0; e < s.length; e++) {
                            let h = s[e],
                                c = "" + l + e;
                            a.push(c), r[c] = {
                                node: h,
                                lastCount: 0
                            }, o[c] = {};
                            for (let e = 0; e < n.length; e++) {
                                let l = n[e];
                                r[l] && r[l].node.mode === h.mode ? (o[l][c] = g(r[l].lastCount + h.length, h.mode) - g(r[l].lastCount, h.mode), r[l].lastCount += h.length) : (r[l] && (r[l].lastCount = h.length), o[l][c] = g(h.length, h.mode) + 4 + i.getCharCountIndicator(h.mode, t))
                            }
                        }
                        n = a
                    }
                    for (let e = 0; e < n.length; e++) o[n[e]].end = 0;
                    return {
                        map: o,
                        table: r
                    }
                }(function(e) {
                    let t = [];
                    for (let r = 0; r < e.length; r++) {
                        let o = e[r];
                        switch (o.mode) {
                            case i.NUMERIC:
                                t.push([o, {
                                    data: o.data,
                                    mode: i.ALPHANUMERIC,
                                    length: o.length
                                }, {
                                    data: o.data,
                                    mode: i.BYTE,
                                    length: o.length
                                }]);
                                break;
                            case i.ALPHANUMERIC:
                                t.push([o, {
                                    data: o.data,
                                    mode: i.BYTE,
                                    length: o.length
                                }]);
                                break;
                            case i.KANJI:
                                t.push([o, {
                                    data: o.data,
                                    mode: i.BYTE,
                                    length: u(o.data)
                                }]);
                                break;
                            case i.BYTE:
                                t.push([{
                                    data: o.data,
                                    mode: i.BYTE,
                                    length: u(o.data)
                                }])
                        }
                    }
                    return t
                }(f(e, h.isKanjiModeEnabled())), r),
                n = c.find_path(o.map, "start", "end"),
                l = [];
            for (let e = 1; e < n.length - 1; e++) l.push(o.table[n[e]].node);
            return t.fromArray(l.reduce(function(e, t) {
                let r = e.length - 1 >= 0 ? e[e.length - 1] : null;
                return r && r.mode === t.mode ? e[e.length - 1].data += t.data : e.push(t), e
            }, []))
        }, t.rawSplit = function(e) {
            return t.fromArray(f(e, h.isKanjiModeEnabled()))
        }
    }),
    YBfX: (function(e, t) {
        let r, i = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
        t.getSymbolSize = function(e) {
            if (!e) throw Error('"version" cannot be null or undefined');
            if (e < 1 || e > 40) throw Error('"version" should be in range from 1 to 40');
            return 4 * e + 17
        }, t.getSymbolTotalCodewords = function(e) {
            return i[e]
        }, t.getBCHDigit = function(e) {
            let t = 0;
            for (; 0 !== e;) t++, e >>>= 1;
            return t
        }, t.setToSJISFunction = function(e) {
            if ("function" != typeof e) throw Error('"toSJISFunc" is not a valid function.');
            r = e
        }, t.isKanjiModeEnabled = function() {
            return void 0 !== r
        }, t.toSJIS = function(e) {
            return r(e)
        }
    }),
    Y8xa: (function(e, t) {
        t.isValid = function(e) {
            return !isNaN(e) && e >= 1 && e <= 40
        }
    }),
    SIJL: (function(e, t, r) {
        let i = r("YBfX"),
            o = r("lbSx"),
            n = r("Uv0t"),
            l = r("VFGm"),
            s = r("Y8xa"),
            a = i.getBCHDigit(7973);

        function h(e, t) {
            return l.getCharCountIndicator(e, t) + 4
        }
        t.from = function(e, t) {
            return s.isValid(e) ? parseInt(e, 10) : t
        }, t.getCapacity = function(e, t, r) {
            if (!s.isValid(e)) throw Error("Invalid QR Code version");
            void 0 === r && (r = l.BYTE);
            let n = (i.getSymbolTotalCodewords(e) - o.getTotalCodewordsCount(e, t)) * 8;
            if (r === l.MIXED) return n;
            let a = n - h(r, e);
            switch (r) {
                case l.NUMERIC:
                    return Math.floor(a / 10 * 3);
                case l.ALPHANUMERIC:
                    return Math.floor(a / 11 * 2);
                case l.KANJI:
                    return Math.floor(a / 13);
                case l.BYTE:
                default:
                    return Math.floor(a / 8)
            }
        }, t.getBestVersionForData = function(e, r) {
            let i, o = n.from(r, n.M);
            if (Array.isArray(e)) {
                if (e.length > 1) {
                    for (let r = 1; r <= 40; r++)
                        if (function(e, t) {
                                let r = 0;
                                return e.forEach(function(e) {
                                    let i = h(e.mode, t);
                                    r += i + e.getBitsLength()
                                }), r
                            }(e, r) <= t.getCapacity(r, o, l.MIXED)) return r;
                    return
                }
                if (0 === e.length) return 1;
                i = e[0]
            } else i = e;
            return function(e, r, i) {
                for (let o = 1; o <= 40; o++)
                    if (r <= t.getCapacity(o, i, e)) return o
            }(i.mode, i.getLength(), o)
        }, t.getEncodedBits = function(e) {
            if (!s.isValid(e) || e < 7) throw Error("Invalid QR Code version");
            let t = e << 12;
            for (; i.getBCHDigit(t) - a >= 0;) t ^= 7973 << i.getBCHDigit(t) - a;
            return e << 12 | t
        }
    }),
    g2wZ: (function(e, t, r) {
        let i = r("hidh");
        t.render = function(e, t, r) {
            var o;
            let n = r,
                l = t;
            void 0 !== n || t && t.getContext || (n = t, t = void 0), t || (l = function() {
                try {
                    return document.createElement("canvas")
                } catch (e) {
                    throw Error("You need to specify a canvas element")
                }
            }()), n = i.getOptions(n);
            let s = i.getImageWidth(e.modules.size, n),
                a = l.getContext("2d"),
                h = a.createImageData(s, s);
            return i.qrToImageData(h.data, e, n), o = l, a.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = s, o.width = s, o.style.height = s + "px", o.style.width = s + "px", a.putImageData(h, 0, 0), l
        }, t.renderToDataURL = function(e, r, i) {
            let o = i;
            void 0 !== o || r && r.getContext || (o = r, r = void 0), o || (o = {});
            let n = t.render(e, r, o),
                l = o.type || "image/png",
                s = o.rendererOpts || {};
            return n.toDataURL(l, s.quality)
        }
    }),
    du2n: (function(e, t, r) {
        let i = r("hidh");

        function o(e, t) {
            let r = e.a / 255,
                i = t + '="' + e.hex + '"';
            return r < 1 ? i + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : i
        }

        function n(e, t, r) {
            let i = e + t;
            return void 0 !== r && (i += " " + r), i
        }
        t.render = function(e, t, r) {
            let l = i.getOptions(t),
                s = e.modules.size,
                a = e.modules.data,
                h = s + 2 * l.margin,
                c = l.color.light.a ? "<path " + o(l.color.light, "fill") + ' d="M0 0h' + h + "v" + h + 'H0z"/>' : "",
                u = "<path " + o(l.color.dark, "stroke") + ' d="' + function(e, t, r) {
                    let i = "",
                        o = 0,
                        l = !1,
                        s = 0;
                    for (let a = 0; a < e.length; a++) {
                        let h = Math.floor(a % t),
                            c = Math.floor(a / t);
                        h || l || (l = !0), e[a] ? (s++, a > 0 && h > 0 && e[a - 1] || (i += l ? n("M", h + r, .5 + c + r) : n("m", o, 0), o = 0, l = !1), h + 1 < t && e[a + 1] || (i += n("h", s), s = 0)) : o++
                    }
                    return i
                }(a, s, l.margin) + '"/>',
                d = '<svg xmlns="http://www.w3.org/2000/svg" ' + (l.width ? 'width="' + l.width + '" height="' + l.width + '" ' : "") + ('viewBox="0 0 ' + h + " ") + h + '" shape-rendering="crispEdges">' + c + u + "</svg>\n";
            return "function" == typeof r && r(null, d), d
        }
    }),
    hidh: (function(e, t) {
        function r(e) {
            if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw Error("Color should be defined as hex string");
            let t = e.slice().replace("#", "").split("");
            if (t.length < 3 || 5 === t.length || t.length > 8) throw Error("Invalid hex color: " + e);
            (3 === t.length || 4 === t.length) && (t = Array.prototype.concat.apply([], t.map(function(e) {
                return [e, e]
            }))), 6 === t.length && t.push("F", "F");
            let r = parseInt(t.join(""), 16);
            return {
                r: r >> 24 & 255,
                g: r >> 16 & 255,
                b: r >> 8 & 255,
                a: 255 & r,
                hex: "#" + t.slice(0, 6).join("")
            }
        }
        t.getOptions = function(e) {
            e || (e = {}), e.color || (e.color = {});
            let t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
                i = e.width && e.width >= 21 ? e.width : void 0,
                o = e.scale || 4;
            return {
                width: i,
                scale: i ? 4 : o,
                margin: t,
                color: {
                    dark: r(e.color.dark || "#000000ff"),
                    light: r(e.color.light || "#ffffffff")
                },
                type: e.type,
                rendererOpts: e.rendererOpts || {}
            }
        }, t.getScale = function(e, t) {
            return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
        }, t.getImageWidth = function(e, r) {
            let i = t.getScale(e, r);
            return Math.floor((e + 2 * r.margin) * i)
        }, t.qrToImageData = function(e, r, i) {
            let o = r.modules.size,
                n = r.modules.data,
                l = t.getScale(o, i),
                s = Math.floor((o + 2 * i.margin) * l),
                a = i.margin * l,
                h = [i.color.light, i.color.dark];
            for (let t = 0; t < s; t++)
                for (let r = 0; r < s; r++) {
                    let c = (t * s + r) * 4,
                        u = i.color.light;
                    t >= a && r >= a && t < s - a && r < s - a && (u = h[+!!n[Math.floor((t - a) / l) * o + Math.floor((r - a) / l)]]), e[c++] = u.r, e[c++] = u.g, e[c++] = u.b, e[c] = u.a
                }
        }
    }),
    x4Wd: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "arrow-up-right-lg-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-arrow-up-right-lg-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -366e-6,
                    y: -.002198,
                    overflows: !1
                },
                composite: {
                    x: -366e-6,
                    y: -.002198,
                    overflows: !1
                }
            }
        }
    }),
    EGh6: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "chat-bubble-checkmark-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-chat-bubble-checkmark-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 488e-6,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 488e-6,
                    overflows: !1
                }
            }
        }
    }),
    KCTQ: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "checkmark-circle-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-checkmark-circle-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    FqpO: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "checkmark-circle-list-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-checkmark-circle-list-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .05481,
                    y: -.039063,
                    overflows: !1
                },
                composite: {
                    x: .05481,
                    y: -.039063,
                    overflows: !1
                }
            }
        }
    }),
    Wjhp: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "chevron-up-right-chevron-down-left-sm-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-chevron-up-right-chevron-down-left-sm-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    A2fG: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "circle-checkmark-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-circle-checkmark-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    uweV: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "circle-grid-2x2-connect-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-circle-grid-2x2-connect-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: .001465,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: .001465,
                    overflows: !1
                }
            }
        }
    }),
    NE4U: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "circle-grid-2x2-connect-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-circle-grid-2x2-connect-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: .001465,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: .001465,
                    overflows: !1
                }
            }
        }
    }),
    g75D: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "circle-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-circle-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    tmxW: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "circle-person-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-circle-person-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    b8a3: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "circle-spinner-three-quarter-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-circle-spinner-three-quarter-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    gYx8: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "clock-arrow-rotate-counterclockwise-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-clock-arrow-rotate-counterclockwise-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 488e-6,
                    y: 976e-6,
                    overflows: !1
                },
                composite: {
                    x: 488e-6,
                    y: 976e-6,
                    overflows: !1
                }
            }
        }
    }),
    lYQd: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "company-knowledge-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-company-knowledge-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -61e-6,
                    y: .101562,
                    overflows: !1
                },
                composite: {
                    x: -61e-6,
                    y: .101562,
                    overflows: !1
                }
            }
        }
    }),
    m0Ld: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "cursor-interactive-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-cursor-interactive-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.186157,
                    y: -.198975,
                    overflows: !1
                },
                composite: {
                    x: -.186157,
                    y: -.198975,
                    overflows: !1
                }
            }
        }
    }),
    EQlE: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "cursor-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-cursor-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .055145,
                    y: -.003906,
                    overflows: !1
                },
                composite: {
                    x: .055145,
                    y: -.003906,
                    overflows: !1
                }
            }
        }
    }),
    BLeH: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "document-badge-magnifyingglass-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-document-badge-magnifyingglass-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.43274,
                    y: -.511474,
                    overflows: !1
                },
                composite: {
                    x: -.43274,
                    y: -.511474,
                    overflows: !1
                }
            }
        }
    }),
    praS: (function(e, t, r) {
        r.d(t, {
            a: () => i
        });
        var i = {
            kind: "inline",
            preset: (0, (r("ESTr")).a)({
                name: "multicolor-sites-light-20",
                canvas: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    frame: {
                        x: 0,
                        y: 0,
                        width: 20,
                        height: 20
                    },
                    inkBounds: {
                        x: 2.5,
                        y: 2.5,
                        width: 15,
                        height: 15
                    },
                    visualBounds: {
                        x: 2.5,
                        y: 2.5,
                        width: 15,
                        height: 15
                    }
                },
                paint: {
                    kind: "multicolor",
                    layers: [{
                        role: "fixed",
                        color: "#6FCDF6",
                        bounds: {
                            x: 10,
                            y: 10,
                            width: 7.5,
                            height: 7.5
                        },
                        wideGamut: "color(display-p3 0.4353 0.8039 0.9647)"
                    }, {
                        role: "fixed",
                        color: "#00B1FF",
                        bounds: {
                            x: 2.5,
                            y: 2.5,
                            width: 15,
                            height: 15
                        },
                        wideGamut: "color(display-p3 0.0000 0.6941 1.0000)"
                    }, {
                        role: "fixed",
                        color: "#009EEA",
                        bounds: {
                            x: 2.5,
                            y: 2.5,
                            width: 7.5,
                            height: 7.5
                        },
                        wideGamut: "color(display-p3 0.0000 0.6196 0.9176)"
                    }]
                },
                optical: {
                    shape: "non-circular",
                    bounds: {
                        x: 2.5,
                        y: 2.5,
                        width: 15,
                        height: 15
                    },
                    center: {
                        x: 10,
                        y: 10
                    },
                    insets: {
                        top: 2.5,
                        right: 2.5,
                        bottom: 2.5,
                        left: 2.5
                    },
                    anchors: {
                        frame: {
                            x: 10,
                            y: 10
                        },
                        ink: {
                            x: 10,
                            y: 10
                        }
                    }
                },
                capabilities: ["icon"],
                body: '<path d="M17.5 15.4545C17.5 16.5842 16.5842 17.5 15.4545 17.5H12.0455C10.9157 17.5 10 16.5842 10 15.4545V10H15.4545C16.5842 10 17.5 10.9157 17.5 12.0455V15.4545Z" fill="#6FCDF6"/> <path d="M16 2.5C16.8285 2.5 17.5 3.17157 17.5 4V5.875C17.5 6.70343 16.8285 7.375 16 7.375H14.125C13.2966 7.375 12.625 6.70343 12.625 5.875V4C12.625 3.17157 13.2966 2.5 14.125 2.5H16Z" fill="#00B1FF"/> <path d="M5.875 12.625C6.70343 12.625 7.375 13.2966 7.375 14.125V16C7.375 16.8285 6.70343 17.5 5.875 17.5H4C3.17157 17.5 2.5 16.8285 2.5 16V14.125C2.5 13.2966 3.17157 12.625 4 12.625L5.875 12.625Z" fill="#00B1FF"/> <path d="M10 10H4.54545C3.41578 10 2.5 9.08425 2.5 7.95455V4.54545C2.5 3.41578 3.41578 2.5 4.54545 2.5H7.95455C9.08425 2.5 10 3.41578 10 4.54545V10Z" fill="#009EEA"/>'
            })
        }
    }),
    Q0tW: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "pause-sm-fill-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-pause-sm-fill-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -244e-6,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: -244e-6,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    Es1b: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "photo-sparkle-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-photo-sparkle-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 977e-6,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 977e-6,
                    overflows: !1
                }
            }
        }
    }),
    kOMt: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "play-sm-fill-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-play-sm-fill-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.721618,
                    y: -489e-6,
                    overflows: !1
                },
                composite: {
                    x: -.721618,
                    y: -489e-6,
                    overflows: !1
                }
            }
        }
    }),
    LBM8: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "plugin-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-plugin-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.247895,
                    y: 488e-6,
                    overflows: !1
                },
                composite: {
                    x: -.247895,
                    y: 488e-6,
                    overflows: !1
                }
            }
        }
    }),
    Gk1O: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "square-and-arrow-up-right-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-square-and-arrow-up-right-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.328613,
                    y: .328613,
                    overflows: !1
                },
                composite: {
                    x: -.328613,
                    y: .328613,
                    overflows: !1
                }
            }
        }
    }),
    kxzd: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "square-plus-minus-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-square-plus-minus-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    s938: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "square-stack-fanned-text-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-square-stack-fanned-text-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.077271,
                    y: .010803,
                    overflows: !1
                },
                composite: {
                    x: -.077271,
                    y: .010803,
                    overflows: !1
                }
            }
        }
    }),
    CqhG: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "square-text-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-square-text-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 244e-6,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 244e-6,
                    overflows: !1
                }
            }
        }
    }),
    QPtm: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "telescope-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-telescope-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.178803,
                    y: -.002441,
                    overflows: !1
                },
                composite: {
                    x: -.178803,
                    y: -.002441,
                    overflows: !1
                }
            }
        }
    }),
    C1Fq: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "text-select-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-text-select-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .005127,
                    y: -.044922,
                    overflows: !1
                },
                composite: {
                    x: .005127,
                    y: -.044922,
                    overflows: !1
                }
            }
        }
    }),
    Fylg: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "wifi-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-wifi-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 244e-6,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 244e-6,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    de2p: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "xmark-circle-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-xmark-circle-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    AHzi: (function(e, t, r) {
        let i = (0, (r("ESTr")).a)({
            name: "chat-bubble-checkmark-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 1.474609,
                    y: 1.807617,
                    width: 13.050781,
                    height: 12.383789
                },
                visualBounds: {
                    x: 1.474609,
                    y: 1.807617,
                    width: 13.050781,
                    height: 12.383789
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.474609,
                    y: 1.807617,
                    width: 13.050781,
                    height: 12.383789
                },
                center: {
                    x: 8,
                    y: 7.999512
                },
                insets: {
                    top: 1.807617,
                    right: 1.47461,
                    bottom: 1.808594,
                    left: 1.474609
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8,
                        y: 7.999512
                    },
                    foreground: {
                        x: 8,
                        y: 7.999512
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M9.82617 5.80469C9.98754 5.56401 10.3139 5.49907 10.5547 5.66016C10.7952 5.82156 10.8602 6.14795 10.6992 6.38867L7.98633 10.4346C7.70824 10.8487 7.11684 10.8959 6.77637 10.5312L5.35352 9.00684C5.15583 8.79495 5.16725 8.46248 5.37891 8.26465C5.59087 8.06689 5.92328 8.07816 6.12109 8.29004L7.30664 9.56152L9.82617 5.80469Z" fill="currentColor"/> <path d="M8 1.80762C11.575 1.80762 14.5254 4.55257 14.5254 8C14.5252 11.4473 11.5749 14.1914 8 14.1914C6.78477 14.1914 5.75932 13.829 4.75488 13.3594L2.9873 13.8184C2.5113 13.9417 2.07317 13.5182 2.17969 13.0381L2.5498 11.3633C2.03641 10.3597 1.4747 9.3817 1.47461 8C1.47461 4.55257 4.42502 1.80762 8 1.80762ZM8 2.8584C4.94756 2.8584 2.52539 5.18821 2.52539 8C2.52548 9.1334 2.98018 9.88293 3.55176 11.0146C3.62017 11.1502 3.63938 11.3057 3.60645 11.4541L3.34277 12.6406L4.62598 12.3086L4.74023 12.2891C4.81669 12.2832 4.89333 12.2912 4.9668 12.3115L5.0752 12.3516L5.44238 12.5215C6.29248 12.8992 7.09158 13.1416 8 13.1416C11.0523 13.1416 13.4744 10.8116 13.4746 8C13.4746 5.18821 11.0524 2.8584 8 2.8584Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: i
        })
    }),
    jkCp: (function(e, t, r) {
        let i = (0, (r("ESTr")).a)({
            name: "clock-arrow-rotate-counterclockwise-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 1.641113,
                    y: 1.640625,
                    width: 12.716797,
                    height: 12.716797
                },
                visualBounds: {
                    x: 1.641113,
                    y: 1.640625,
                    width: 12.716797,
                    height: 12.716797
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.641113,
                    y: 1.640625,
                    width: 12.716797,
                    height: 12.716797
                },
                center: {
                    x: 7.999512,
                    y: 7.999024
                },
                insets: {
                    top: 1.640625,
                    right: 1.64209,
                    bottom: 1.642578,
                    left: 1.641113
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 7.999512,
                        y: 7.999024
                    },
                    foreground: {
                        x: 7.999512,
                        y: 7.999024
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M7.99951 1.64062C11.511 1.64062 14.3577 4.48756 14.3579 7.99902C14.3579 11.5106 11.5111 14.3574 7.99951 14.3574C4.97316 14.3572 2.44194 12.2435 1.79932 9.41211C1.73517 9.12938 1.91212 8.8474 2.19482 8.7832C2.47756 8.71908 2.75859 8.89696 2.82275 9.17969C3.35918 11.5434 5.47412 13.3074 7.99951 13.3076C10.9312 13.3076 13.3081 10.9307 13.3081 7.99902C13.3079 5.06746 10.9311 2.69141 7.99951 2.69141C5.96082 2.69155 4.19173 3.84199 3.30225 5.53027H4.75928C5.04914 5.53037 5.28369 5.76577 5.28369 6.05566C5.28352 6.3454 5.04904 6.57998 4.75928 6.58008H2.1665C1.87666 6.58008 1.64129 6.34546 1.64111 6.05566V3.13867C1.64111 2.84872 1.87655 2.61328 2.1665 2.61328C2.45645 2.61328 2.69189 2.84872 2.69189 3.13867V4.50098C3.82896 2.77928 5.78029 1.64076 7.99951 1.64062Z" fill="currentColor"/> <path d="M7.99951 4.2334C8.28946 4.2334 8.5249 4.46884 8.5249 4.75879V8C8.52478 8.13907 8.46895 8.27275 8.37061 8.37109L6.75049 9.99121C6.54548 10.196 6.21327 10.1961 6.0083 9.99121C5.80341 9.78624 5.80348 9.45404 6.0083 9.24902L7.4751 7.78125V4.75879C7.4751 4.46897 7.70975 4.23362 7.99951 4.2334Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: i
        })
    }),
    DNNO: (function(e, t, r) {
        let i = (0, (r("ESTr")).a)({
            name: "document-badge-plus-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 2.474609,
                    y: 1.808105,
                    width: 11.817383,
                    height: 13.351563
                },
                visualBounds: {
                    x: 2.474609,
                    y: 1.808105,
                    width: 11.817383,
                    height: 13.351563
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.474609,
                    y: 1.808105,
                    width: 11.817383,
                    height: 13.351563
                },
                center: {
                    x: 8.383301,
                    y: 8.483887
                },
                insets: {
                    top: 1.808105,
                    right: 1.708008,
                    bottom: .840332,
                    left: 2.474609
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.383301,
                        y: 8.483887
                    },
                    foreground: {
                        x: 8.383301,
                        y: 8.483887
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M11.7666 10.1089C12.0564 10.109 12.292 10.3444 12.292 10.6343V12.1089H13.7666C14.0564 12.109 14.292 12.3444 14.292 12.6343C14.292 12.9241 14.0564 13.1595 13.7666 13.1597H12.292V14.6343C12.292 14.9241 12.0564 15.1595 11.7666 15.1597C11.4767 15.1597 11.2412 14.9242 11.2412 14.6343V13.1597H9.7666C9.47665 13.1597 9.24121 12.9242 9.24121 12.6343C9.24121 12.3443 9.47665 12.1089 9.7666 12.1089H11.2412V10.6343C11.2412 10.3443 11.4767 10.1089 11.7666 10.1089Z" fill="currentColor"/> <path d="M9.50488 1.80811C10.1745 1.80811 10.8165 2.07482 11.29 2.54834L12.7852 4.04346C13.2587 4.51699 13.5254 5.15895 13.5254 5.82861V7.4917C13.5254 7.78165 13.2899 8.01709 13 8.01709C12.7101 8.01709 12.4746 7.78165 12.4746 7.4917V6.85889H10.666C9.64 6.85864 8.80779 6.02652 8.80762 5.00049V2.85889H5C4.18538 2.85889 3.52539 3.51888 3.52539 4.3335V11.6665C3.52539 12.4811 4.18538 13.1421 5 13.1421H6.5C6.78984 13.1421 7.02522 13.3767 7.02539 13.6665C7.02539 13.9565 6.78995 14.1919 6.5 14.1919H5C3.60548 14.1919 2.47461 13.061 2.47461 11.6665V4.3335C2.47461 2.93898 3.60548 1.80811 5 1.80811H9.50488ZM9.8584 5.00049C9.85857 5.44662 10.2199 5.80786 10.666 5.80811H12.4736C12.4683 5.42434 12.3147 5.05742 12.043 4.78564L10.5479 3.29053C10.3563 3.09893 10.1171 2.96665 9.8584 2.90283V5.00049Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: i
        })
    }),
    FW3Q: (function(e, t, r) {
        let i = (0, (r("ESTr")).a)({
            name: "emoji-face-badge-plus-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 1.474609,
                    y: .808594,
                    width: 13.717773,
                    height: 13.716797
                },
                visualBounds: {
                    x: 1.474609,
                    y: .808594,
                    width: 13.717773,
                    height: 13.716797
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.474609,
                    y: .808594,
                    width: 13.717773,
                    height: 13.716797
                },
                center: {
                    x: 8.333496,
                    y: 7.666993
                },
                insets: {
                    top: .808594,
                    right: .807618,
                    bottom: 1.474609,
                    left: 1.474609
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.333496,
                        y: 7.666993
                    },
                    foreground: {
                        x: 8.333496,
                        y: 7.666993
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M8 1.47461C8.28995 1.47461 8.52539 1.71005 8.52539 2C8.52539 2.28995 8.28995 2.52539 8 2.52539C4.97624 2.52539 2.52539 4.97624 2.52539 8C2.52539 11.0238 4.97624 13.4746 8 13.4746C11.0238 13.4746 13.4746 11.0238 13.4746 8C13.4746 7.71005 13.7101 7.47461 14 7.47461C14.2899 7.47461 14.5254 7.71005 14.5254 8C14.5254 11.6037 11.6037 14.5254 8 14.5254C4.39634 14.5254 1.47461 11.6037 1.47461 8C1.47461 4.39634 4.39634 1.47461 8 1.47461Z" fill="currentColor"/> <path d="M9.85547 9.31543C10.0006 9.06469 10.3214 8.97921 10.5723 9.12402C10.8232 9.26919 10.9088 9.58986 10.7637 9.84082C10.2127 10.7933 9.18188 11.4364 8 11.4365C6.81812 11.4364 5.78636 10.7933 5.23535 9.84082C5.09068 9.59003 5.17622 9.26919 5.42676 9.12402C5.67759 8.97892 5.99923 9.06478 6.14453 9.31543C6.51561 9.95669 7.20821 10.3866 8 10.3867C8.79191 10.3866 9.48443 9.95685 9.85547 9.31543Z" fill="currentColor"/> <path d="M6.2959 5.29883C6.58078 5.35202 6.75056 5.57419 6.82715 5.7168C6.9263 5.90145 6.97168 6.12082 6.97168 6.33398C6.97163 6.54695 6.92616 6.76568 6.82715 6.9502C6.73965 7.11312 6.53043 7.3797 6.16699 7.37988C5.80332 7.37988 5.59339 7.11317 5.50586 6.9502C5.40689 6.76571 5.36137 6.54691 5.36133 6.33398C5.36133 6.12086 5.40674 5.90143 5.50586 5.7168C5.59339 5.55382 5.80332 5.28711 6.16699 5.28711L6.2959 5.29883Z" fill="currentColor"/> <path d="M9.96289 5.29883C10.2476 5.35214 10.4176 5.57425 10.4941 5.7168C10.5932 5.90142 10.6387 6.12088 10.6387 6.33398C10.6386 6.54689 10.5931 6.76572 10.4941 6.9502C10.4067 7.11306 10.1972 7.37952 9.83398 7.37988C9.47043 7.37988 9.26043 7.11319 9.17285 6.9502C9.07388 6.76571 9.02837 6.54691 9.02832 6.33398C9.02832 6.12086 9.07373 5.90143 9.17285 5.7168C9.26043 5.5538 9.47043 5.28711 9.83398 5.28711L9.96289 5.29883Z" fill="currentColor"/> <path d="M12.667 0.808594C12.9568 0.808726 13.1924 1.04412 13.1924 1.33398V2.80859H14.667C14.9568 2.80873 15.1924 3.04412 15.1924 3.33398C15.1924 3.62385 14.9568 3.85924 14.667 3.85938H13.1924V5.33398C13.1924 5.62385 12.9568 5.85924 12.667 5.85938C12.377 5.85938 12.1416 5.62393 12.1416 5.33398V3.85938H10.667C10.377 3.85938 10.1416 3.62393 10.1416 3.33398C10.1416 3.04403 10.377 2.80859 10.667 2.80859H12.1416V1.33398C12.1416 1.04403 12.377 0.808594 12.667 0.808594Z" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: i
        })
    }),
    ZOYk: (function(e, t, r) {
        let i = (0, (r("ESTr")).a)({
            name: "gear-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 1.691895,
                    y: 1.240234,
                    width: 12.617065,
                    height: 13.518555
                },
                visualBounds: {
                    x: 1.691895,
                    y: 1.240234,
                    width: 12.617065,
                    height: 13.518555
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.691895,
                    y: 1.240234,
                    width: 12.617065,
                    height: 13.518555
                },
                center: {
                    x: 8.000428,
                    y: 7.999512
                },
                insets: {
                    top: 1.240234,
                    right: 1.69104,
                    bottom: 1.241211,
                    left: 1.691895
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.000428,
                        y: 7.999512
                    },
                    foreground: {
                        x: 8.000428,
                        y: 7.999512
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M8.00062 5.2793C9.50689 5.2793 10.7289 6.50063 10.7291 8.00684C10.7289 9.51311 9.50693 10.7354 8.00062 10.7354C6.49463 10.735 5.27328 9.51288 5.27308 8.00684C5.27335 6.50086 6.49467 5.27967 8.00062 5.2793ZM8.00062 6.33008C7.07457 6.33045 6.32413 7.08076 6.32386 8.00684C6.32406 8.93298 7.07453 9.68421 8.00062 9.68458C8.92703 9.68458 9.67816 8.93321 9.67836 8.00684C9.67809 7.08053 8.92699 6.33008 8.00062 6.33008Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M8.59633 1.24024C9.07592 1.24041 9.51987 1.49643 9.75941 1.91309C9.97218 2.28352 10.2906 2.83779 10.5465 3.28223C10.5982 3.37176 10.694 3.42675 10.7985 3.42676L12.3795 3.42774C12.8587 3.42793 13.3021 3.68368 13.5416 4.09864L14.1295 5.11719C14.3672 5.52926 14.3684 6.03653 14.1334 6.4502L13.2536 8.00098L14.1334 9.54786C14.3685 9.96173 14.3675 10.4706 14.1295 10.8828L13.5416 11.9014C13.302 12.3162 12.8586 12.5721 12.3795 12.5723L10.7975 12.5713C10.6934 12.5715 10.5981 12.6276 10.5465 12.7168C10.2906 13.1614 9.97118 13.7156 9.75844 14.0859C9.51881 14.5027 9.07511 14.7588 8.59535 14.7588C8.17471 14.7588 7.8383 14.7578 7.40492 14.7578C6.92515 14.7578 6.48146 14.5027 6.24183 14.0859C6.02905 13.7155 5.70972 13.1614 5.45375 12.7168C5.40213 12.6273 5.3062 12.5713 5.20179 12.5713H3.62172C3.14243 12.5713 2.69927 12.3155 2.45961 11.9004L1.87172 10.8818C1.63401 10.4698 1.63199 9.96251 1.86683 9.54883L2.74769 7.99903L1.86683 6.4502C1.63181 6.03636 1.63375 5.52838 1.87172 5.11622L2.45961 4.09864C2.69922 3.68389 3.14176 3.42795 3.62074 3.42774H5.20179C5.30622 3.42774 5.4021 3.37172 5.45375 3.28223C5.70967 2.83774 6.0281 2.28351 6.24086 1.91309C6.48037 1.49635 6.92432 1.24044 7.40394 1.24024C7.83772 1.24023 8.1753 1.24023 8.59633 1.24024ZM7.40492 2.29004C7.2999 2.29005 7.20281 2.34636 7.15101 2.43653C6.93819 2.80705 6.62008 3.3617 6.3639 3.80665C6.12441 4.22231 5.6814 4.47732 5.20277 4.47754H3.62172C3.51764 4.47754 3.42093 4.533 3.36879 4.62305L2.7809 5.64161C2.72924 5.73111 2.72899 5.84174 2.77992 5.93165L3.80629 7.73926C3.84008 7.79878 3.86295 7.86417 3.87172 7.93165L3.87562 7.99903C3.87565 8.06763 3.86231 8.13613 3.83656 8.19922L3.80629 8.25977L2.77894 10.0674C2.72805 10.1573 2.72924 10.2679 2.7809 10.3574L3.36879 11.376C3.42092 11.4661 3.51761 11.5215 3.62172 11.5215H5.20179C5.68071 11.5215 6.12432 11.7765 6.3639 12.1924C6.62013 12.6374 6.93914 13.1919 7.15199 13.5625C7.20372 13.6524 7.29923 13.7088 7.40394 13.709C7.83771 13.709 8.17531 13.708 8.59633 13.708C8.70115 13.7078 8.79754 13.6525 8.84926 13.5625C9.06202 13.1921 9.38023 12.6382 9.63636 12.1934C9.87592 11.7773 10.3195 11.5215 10.7985 11.5215H12.3795C12.4834 11.5213 12.5794 11.4658 12.6315 11.376L13.2194 10.3574C13.271 10.2679 13.2714 10.1573 13.2203 10.0674L12.193 8.25977C12.1481 8.18049 12.1256 8.09011 12.1256 7.99903C12.1257 7.9079 12.149 7.81751 12.194 7.73829L13.2203 5.93165C13.2712 5.84187 13.2708 5.73203 13.2194 5.64258L12.6315 4.62403C12.5794 4.53379 12.4828 4.47754 12.3786 4.47754L10.7985 4.47852C10.3197 4.47852 9.87697 4.22238 9.63734 3.80665C9.38106 3.36152 9.0621 2.80612 8.84926 2.43555C8.79741 2.3456 8.70021 2.29005 8.59535 2.29004C8.17471 2.29004 7.8383 2.29004 7.40492 2.29004Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: i
        })
    }),
    jf0V: (function(e, t, r) {
        let i = (0, (r("ESTr")).a)({
            name: "lock-light-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12",
                frame: {
                    x: 0,
                    y: 0,
                    width: 12,
                    height: 12
                },
                inkBounds: {
                    x: 1.599609,
                    y: 1.099609,
                    width: 8.800781,
                    height: 9.800781
                },
                visualBounds: {
                    x: 1.599609,
                    y: 1.099609,
                    width: 8.800781,
                    height: 9.800781
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.599609,
                    y: 1.099609,
                    width: 8.800781,
                    height: 9.800781
                },
                center: {
                    x: 6,
                    y: 6
                },
                insets: {
                    top: 1.099609,
                    right: 1.59961,
                    bottom: 1.09961,
                    left: 1.599609
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 6,
                        y: 6
                    },
                    foreground: {
                        x: 6,
                        y: 6
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M6 6.09961C6.49706 6.09961 6.90039 6.50294 6.90039 7C6.90039 7.3531 6.69648 7.65815 6.40039 7.80566V8.5C6.40039 8.72091 6.22091 8.90039 6 8.90039C5.77909 8.90039 5.59961 8.72091 5.59961 8.5V7.80566C5.30352 7.65815 5.09961 7.3531 5.09961 7C5.09961 6.50294 5.50294 6.09961 6 6.09961Z" fill="currentColor"/> <path d="M6 1.09961C7.60163 1.09961 8.90039 2.39837 8.90039 4V4.16504C9.7625 4.38744 10.4002 5.16819 10.4004 6.09961V8.90039C10.4002 10.0047 9.50465 10.9002 8.40039 10.9004H3.59961C2.49535 10.9002 1.59982 10.0047 1.59961 8.90039V6.09961C1.59979 5.16819 2.2375 4.38744 3.09961 4.16504V4C3.09961 2.39837 4.39837 1.09961 6 1.09961ZM3.59961 4.90039C2.93718 4.9006 2.4006 5.43718 2.40039 6.09961V8.90039C2.4006 9.56282 2.93718 10.0994 3.59961 10.0996H8.40039C9.06282 10.0994 9.5994 9.56282 9.59961 8.90039V6.09961C9.5994 5.43718 9.06282 4.9006 8.40039 4.90039H3.59961ZM6 1.90039C4.8402 1.90039 3.90039 2.8402 3.90039 4V4.09961H8.09961V4C8.09961 2.8402 7.1598 1.90039 6 1.90039Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: i
        })
    }),
    lHPH: (function(e, t, r) {
        let i = (0, (r("ESTr")).a)({
            name: "magnifying-glass-lg-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 1.970093,
                    y: 1.910156,
                    width: 12.226807,
                    height: 12.283203
                },
                visualBounds: {
                    x: 1.970093,
                    y: 1.910156,
                    width: 12.226807,
                    height: 12.283203
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.970093,
                    y: 1.910156,
                    width: 12.226807,
                    height: 12.283203
                },
                center: {
                    x: 8.083497,
                    y: 8.051758
                },
                insets: {
                    top: 1.910156,
                    right: 1.8031,
                    bottom: 1.806641,
                    left: 1.970093
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.083497,
                        y: 8.051758
                    },
                    foreground: {
                        x: 8.083497,
                        y: 8.051758
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M7.32849 1.91016C10.2877 1.91016 12.6867 4.30938 12.6869 7.26855C12.6869 8.57363 12.2192 9.7688 11.4437 10.6982L14.0433 13.2979C14.2481 13.5028 14.2481 13.8351 14.0433 14.04C13.8384 14.245 13.5062 14.2449 13.3011 14.04L10.6957 11.4346C9.77536 12.1793 8.60462 12.627 7.32849 12.627C4.36931 12.6268 1.97009 10.2278 1.97009 7.26855C1.97027 4.30949 4.36942 1.91033 7.32849 1.91016ZM7.32849 2.96094C4.94932 2.96111 3.02105 4.88939 3.02087 7.26855C3.02087 9.64787 4.94921 11.577 7.32849 11.5771C9.70792 11.5771 11.6371 9.64798 11.6371 7.26855C11.6369 4.88928 9.70781 2.96094 7.32849 2.96094Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: i
        })
    }),
    uteA: (function(e, t, r) {
        let i = (0, (r("ESTr")).a)({
            name: "pencil-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 1.806641,
                    y: 1.804932,
                    width: 12.387695,
                    height: 12.390625
                },
                visualBounds: {
                    x: 1.806641,
                    y: 1.804932,
                    width: 12.387695,
                    height: 12.390625
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.806641,
                    y: 1.804932,
                    width: 12.387695,
                    height: 12.390625
                },
                center: {
                    x: 8.000488,
                    y: 8.000245
                },
                insets: {
                    top: 1.804932,
                    right: 1.805664,
                    bottom: 1.804443,
                    left: 1.806641
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.000488,
                        y: 8.000245
                    },
                    foreground: {
                        x: 8.000488,
                        y: 8.000245
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M9.41506 2.54535C10.5566 1.516 12.2884 1.57105 13.3399 2.64105C14.4597 3.72222 14.4959 5.5405 13.3467 6.68988L7.75588 12.2797C7.18583 12.8809 6.45561 13.2881 5.6924 13.4653H5.69045L2.59767 14.1762L2.5967 14.1743C2.4644 14.2058 2.19674 14.2328 1.98342 14.02C1.76937 13.8062 1.79632 13.5371 1.82814 13.4047L2.5381 10.3188C2.71723 9.5224 3.12639 8.8269 3.68752 8.26703L9.30568 2.64887L9.41506 2.54535ZM4.4297 9.01019C3.99658 9.44234 3.69398 9.96492 3.56252 10.5512L3.56154 10.5541L2.99513 13.0063L5.45607 12.4418C6.02206 12.3102 6.56957 12.0068 6.99513 11.558L7.00392 11.5483L11.5254 7.02582L8.96877 4.46918L4.4297 9.01019ZM12.5986 3.38422C11.9258 2.69135 10.7787 2.66298 10.0479 3.39203L10.0469 3.39105L9.71193 3.72602L12.2686 6.28266L12.6045 5.94769C13.3406 5.21146 13.3067 4.06829 12.6113 3.39691L12.5986 3.38422Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: i
        })
    }),
    nzEQ: (function(e, t, r) {
        let i = (0, (r("ESTr")).a)({
            name: "person-2-light-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12",
                frame: {
                    x: 0,
                    y: 0,
                    width: 12,
                    height: 12
                },
                inkBounds: {
                    x: .313232,
                    y: 1.369141,
                    width: 11.344788,
                    height: 8.909668
                },
                visualBounds: {
                    x: .313232,
                    y: 1.369141,
                    width: 11.344788,
                    height: 8.909668
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: .313232,
                    y: 1.369141,
                    width: 11.344788,
                    height: 8.909668
                },
                center: {
                    x: 5.985626,
                    y: 5.823975
                },
                insets: {
                    top: 1.369141,
                    right: .34198,
                    bottom: 1.721191,
                    left: .313232
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 5.985626,
                        y: 5.823975
                    },
                    foreground: {
                        x: 5.985626,
                        y: 5.823975
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M4.02569 6.44531C5.973 6.44553 7.57122 7.94005 7.73663 9.84473C7.75571 10.0647 7.59223 10.258 7.37237 10.2773C7.1525 10.2962 6.95894 10.1339 6.93975 9.91406C6.80994 8.41922 5.55438 7.24632 4.02569 7.24609C2.49682 7.24609 1.24148 8.41909 1.11163 9.91406C1.09247 10.1338 0.898718 10.296 0.679011 10.2773C0.458925 10.2582 0.29564 10.0648 0.314753 9.84473C0.480192 7.93993 2.0782 6.44531 4.02569 6.44531Z" fill="currentColor"/> <path d="M8.49835 6.47363C10.1555 6.47363 11.5157 7.74538 11.6566 9.36621C11.6754 9.58611 11.5122 9.7807 11.2923 9.7998C11.0727 9.81844 10.879 9.65514 10.8597 9.43555C10.7545 8.22448 9.73693 7.27441 8.49835 7.27441C8.43229 7.27443 8.36659 7.27694 8.30206 7.28223C8.08221 7.30006 7.88872 7.13582 7.87042 6.91602C7.85243 6.69618 8.01595 6.50288 8.23565 6.48438C8.32208 6.47727 8.41025 6.47365 8.49835 6.47363Z" fill="currentColor"/> <path d="M4.02569 1.36914C5.19328 1.36943 6.13995 2.31671 6.13995 3.48438C6.13979 4.6519 5.19319 5.59835 4.02569 5.59863C2.85795 5.59863 1.91061 4.65208 1.91046 3.48438C1.91046 2.31654 2.85785 1.36914 4.02569 1.36914ZM4.02569 2.16992C3.29968 2.16992 2.71124 2.75837 2.71124 3.48438C2.71139 4.21025 3.29978 4.79883 4.02569 4.79883C4.75136 4.79854 5.33999 4.21008 5.34014 3.48438C5.34014 2.75854 4.75146 2.17021 4.02569 2.16992Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M9.0169 1.81152C10.0262 1.81204 10.845 2.63124 10.845 3.64062C10.8445 4.64957 10.0258 5.46823 9.0169 5.46875C8.00752 5.46875 7.18832 4.64989 7.1878 3.64062C7.1878 2.63092 8.0072 1.81152 9.0169 1.81152ZM9.0169 2.6123C8.44902 2.6123 7.98858 3.07275 7.98858 3.64062C7.9891 4.20806 8.44934 4.66797 9.0169 4.66797C9.58402 4.66745 10.0437 4.20774 10.0442 3.64062C10.0442 3.07307 9.58434 2.61283 9.0169 2.6123Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: i
        })
    }),
    o1pl: (function(e, t, r) {
        let i = (0, (r("ESTr")).a)({
            name: "person-group-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: .208939,
                    y: 3.279297,
                    width: 15.576218,
                    height: 9.554688
                },
                visualBounds: {
                    x: .208939,
                    y: 3.279297,
                    width: 15.576218,
                    height: 9.554688
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: .208939,
                    y: 3.279297,
                    width: 15.576218,
                    height: 9.554688
                },
                center: {
                    x: 7.997048,
                    y: 8.056641
                },
                insets: {
                    top: 3.279297,
                    right: .214843,
                    bottom: 3.166015,
                    left: .208939
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 7.997048,
                        y: 8.056641
                    },
                    foreground: {
                        x: 7.997048,
                        y: 8.056641
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M7.99998 8.6543C10.0676 8.65454 11.7647 10.2413 11.9404 12.2637C11.9655 12.5524 11.7515 12.8067 11.4629 12.832C11.174 12.8571 10.9196 12.6433 10.8945 12.3545C10.7655 10.87 9.51815 9.70532 7.99998 9.70508C6.48174 9.70522 5.23547 10.87 5.10642 12.3545C5.08135 12.6432 4.82576 12.8568 4.53709 12.832C4.24847 12.8067 4.03447 12.5524 4.05955 12.2637C4.23527 10.2412 5.93227 8.65443 7.99998 8.6543Z" fill="currentColor"/> <path d="M3.3574 8.87598C3.64668 8.85709 3.89607 9.07594 3.91501 9.36523C3.93391 9.65452 3.71505 9.9039 3.42576 9.92285C2.27826 9.99807 1.35686 10.9051 1.25779 12.0459C1.23266 12.3345 0.978059 12.5482 0.689429 12.5234C0.400646 12.4983 0.185947 12.2438 0.210913 11.9551C0.354753 10.2988 1.69136 8.98511 3.3574 8.87598Z" fill="currentColor"/> <path d="M12.6367 8.87598C14.3027 8.9851 15.6393 10.2988 15.7832 11.9551C15.8081 12.2439 15.5935 12.4984 15.3047 12.5234C15.016 12.5482 14.7614 12.3345 14.7363 12.0459C14.6372 10.9051 13.7158 9.99806 12.5683 9.92285C12.2791 9.90389 12.0602 9.65451 12.0791 9.36523C12.098 9.07595 12.3474 8.8571 12.6367 8.87598Z" fill="currentColor"/> <path d="M2.67087 4.30859C3.69679 4.3089 4.52922 5.14102 4.52927 6.16699C4.52901 7.19278 3.69666 8.02509 2.67087 8.02539C1.64483 8.02539 0.81274 7.19297 0.812476 6.16699C0.812528 5.14083 1.6447 4.30859 2.67087 4.30859ZM2.67087 5.35938C2.2246 5.35938 1.86233 5.72073 1.86228 6.16699C1.86254 6.61307 2.22473 6.97559 2.67087 6.97559C3.11676 6.97528 3.47823 6.61288 3.47849 6.16699C3.47844 5.72092 3.11689 5.35968 2.67087 5.35938Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M13.3242 4.30859C14.3504 4.30859 15.1825 5.14083 15.1826 6.16699C15.1823 7.19297 14.3502 8.02539 13.3242 8.02539C12.2982 8.02533 11.4661 7.19293 11.4658 6.16699C11.4658 5.14087 12.2981 4.30866 13.3242 4.30859ZM13.3242 5.35938C12.878 5.35944 12.5166 5.72077 12.5166 6.16699C12.5168 6.61303 12.8781 6.97552 13.3242 6.97559C13.7703 6.97559 14.1325 6.61307 14.1328 6.16699C14.1327 5.72073 13.7705 5.35938 13.3242 5.35938Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M7.99998 3.2793C9.26651 3.27955 10.2938 4.30668 10.2939 5.57324C10.2939 6.83991 9.26658 7.86694 7.99998 7.86719C6.73326 7.86707 5.70603 6.83999 5.70603 5.57324C5.70615 4.3066 6.73334 3.27942 7.99998 3.2793ZM7.99998 4.33008C7.31323 4.3302 6.75693 4.8865 6.75681 5.57324C6.75681 6.26009 7.31316 6.81726 7.99998 6.81738C8.68668 6.81713 9.24412 6.26001 9.24412 5.57324C9.24399 4.88658 8.68661 4.33033 7.99998 4.33008Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: i
        })
    }),
    mN4P: (function(e, t, r) {
        let i = (0, (r("ESTr")).a)({
            name: "photo-sparkle-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 1.509766,
                    y: 2.175781,
                    width: 12.980469,
                    height: 11.646484
                },
                visualBounds: {
                    x: 1.509766,
                    y: 2.175781,
                    width: 12.980469,
                    height: 11.646484
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.509766,
                    y: 2.175781,
                    width: 12.980469,
                    height: 11.646484
                },
                center: {
                    x: 8,
                    y: 7.999023
                },
                insets: {
                    top: 2.175781,
                    right: 1.509765,
                    bottom: 2.177735,
                    left: 1.509766
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8,
                        y: 7.999023
                    },
                    foreground: {
                        x: 8,
                        y: 7.999023
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M9.85156 4.27734C9.94073 4.27743 10.0751 4.32532 10.1357 4.45312L10.1562 4.5127L10.1572 4.51465L10.1631 4.54688L10.1807 4.66016L10.2188 4.8584C10.3194 5.30655 10.493 5.64613 10.7344 5.89551C11.0269 6.19762 11.4493 6.39752 12.0498 6.47266C12.1577 6.48625 12.2277 6.54299 12.2695 6.60742C12.3105 6.67054 12.3252 6.74104 12.3252 6.78711C12.3251 6.83318 12.3106 6.90381 12.2695 6.9668C12.2275 7.03114 12.1569 7.08721 12.0488 7.10059C11.4621 7.17328 11.0334 7.37164 10.7344 7.6709C10.4354 7.97022 10.2376 8.39916 10.165 8.98633C10.1516 9.09443 10.0956 9.16414 10.0312 9.20605C9.96816 9.24712 9.89762 9.26167 9.85156 9.26172C9.80549 9.26169 9.73492 9.24703 9.67188 9.20605C9.60769 9.16427 9.55169 9.09496 9.53809 8.9873C9.46305 8.38639 9.26278 7.96366 8.96094 7.6709C8.6572 7.37643 8.2191 7.18236 7.61426 7.09863C7.41505 7.07085 7.34368 6.89468 7.34375 6.78613C7.34412 6.67767 7.41549 6.50374 7.61328 6.47559L7.72852 6.45703C8.28693 6.36302 8.68276 6.17389 8.96094 5.89551C9.25764 5.59852 9.4535 5.16752 9.54004 4.54785V4.5459L9.5459 4.51465L9.54688 4.5127C9.58954 4.34026 9.74971 4.27754 9.85156 4.27734Z" fill="currentColor"/> <path d="M11.8662 2.17578C13.315 2.17578 14.4902 3.35098 14.4902 4.7998V11.1992C14.4902 12.648 13.315 13.8223 11.8662 13.8223H4.13379C2.68496 13.8223 1.50977 12.648 1.50977 11.1992V4.7998C1.50977 3.35098 2.68496 2.17578 4.13379 2.17578H11.8662ZM5.69922 9.27539C5.30478 8.88136 4.66579 8.88218 4.27148 9.27637L2.49023 11.0566V11.1992C2.49023 12.1068 3.2262 12.8428 4.13379 12.8428H9.26855L5.69922 9.27539ZM4.13379 3.15625C3.2262 3.15625 2.49023 3.89222 2.49023 4.7998V9.6709L3.57812 8.58301C4.35512 7.80612 5.61443 7.80627 6.3916 8.58301L10.6543 12.8428H11.8662C12.7738 12.8428 13.5098 12.1068 13.5098 11.1992V4.7998C13.5098 3.89222 12.7738 3.15625 11.8662 3.15625H4.13379Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: i
        })
    }),
    sQG0: (function(e, t, r) {
        let i = (0, (r("ESTr")).a)({
            name: "square-stack-fanned-text-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16",
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 1.52417,
                    y: 1.511719,
                    width: 13.106201,
                    height: 12.954956
                },
                visualBounds: {
                    x: 1.52417,
                    y: 1.511719,
                    width: 13.106201,
                    height: 12.954956
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.52417,
                    y: 1.511719,
                    width: 13.106201,
                    height: 12.954956
                },
                center: {
                    x: 8.077271,
                    y: 7.989197
                },
                insets: {
                    top: 1.511719,
                    right: 1.369629,
                    bottom: 1.533325,
                    left: 1.52417
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.077271,
                        y: 7.989197
                    },
                    foreground: {
                        x: 8.077271,
                        y: 7.989197
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M7.71206 7.79633C8.00062 7.7688 8.2567 7.98139 8.28432 8.26996C8.31169 8.55834 8.10102 8.81451 7.81264 8.84223L5.12807 9.09906C4.83944 9.12669 4.58246 8.91504 4.55483 8.62641C4.52726 8.33782 4.73889 8.08079 5.02749 8.05316L7.71206 7.79633Z" fill="currentColor"/> <path d="M9.02358 4.81C9.31221 4.78237 9.5692 4.995 9.59682 5.28363C9.62422 5.57207 9.41261 5.82823 9.12417 5.8559L4.71694 6.27777C4.42831 6.3054 4.17133 6.09375 4.1437 5.80512C4.11613 5.51653 4.32776 5.2595 4.61636 5.23188L9.02358 4.81Z" fill="currentColor"/> <path d="M9.18667 1.52094C10.5024 1.40594 11.6623 2.38006 11.7775 3.69574L11.8175 4.15863L12.4464 4.2143C13.7623 4.32943 14.7364 5.48927 14.6212 6.80512L14.1417 12.2836C14.0263 13.599 12.8664 14.5723 11.5509 14.4575L6.07241 13.978C5.04223 13.8878 4.2227 13.1573 3.96987 12.2133C2.93456 12.0262 2.10914 11.1691 2.01284 10.0707L1.53335 4.59125C1.41862 3.27582 2.39275 2.11576 3.70815 2.00043L9.18667 1.52094ZM12.257 9.17426C12.3718 10.4898 11.3987 11.6499 10.0832 11.7651L5.08511 12.2016C5.28791 12.6006 5.68488 12.8901 6.16323 12.9321L11.6417 13.4116C12.3798 13.4761 13.0311 12.9298 13.0958 12.1918L13.5753 6.71332C13.6399 5.97531 13.0936 5.32499 12.3556 5.2602L11.9103 5.22113L12.257 9.17426ZM9.27847 2.56684L3.79897 3.04633C3.06128 3.1113 2.51579 3.76262 2.58022 4.50043L3.05972 9.97895C3.12451 10.7167 3.77502 11.262 4.51284 11.1977L9.99136 10.7182C10.7293 10.6535 11.2754 10.004 11.2111 9.26606L10.7316 3.78656C10.6667 3.04881 10.0163 2.50244 9.27847 2.56684Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        r.d(t, {}, {
            a: i
        })
    })
};
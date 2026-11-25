export const __rspack_esm_ids = [267040];
export const __webpack_modules__ = {
    EIbe: (function(a) {
        let b = [
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
            c = /(https?:\/\/(?:[A-Za-z0-9#;/?:@=+$',_.!~*()[\]-]|&amp;|%[A-Fa-f0-9]{2})+)/gm;
        a.exports = class a {
            static escapeForHtml(b) {
                return new a().escapeForHtml(b)
            }
            static linkify(b) {
                return new a().linkify(b)
            }
            static ansiToHtml(b, c) {
                return new a().ansiToHtml(b, c)
            }
            static ansiToJson(b, c) {
                return new a().ansiToJson(b, c)
            }
            static ansiToText(b) {
                return new a().ansiToText(b)
            }
            constructor() {
                this.fg = this.bg = this.fg_truecolor = this.bg_truecolor = null, this.bright = 0, this.decorations = []
            }
            setupPalette() {
                this.PALETTE_COLORS = [];
                for (let a = 0; a < 2; ++a)
                    for (let c = 0; c < 8; ++c) this.PALETTE_COLORS.push(b[a][c].color);
                let a = [0, 95, 135, 175, 215, 255],
                    c = (b, c, d) => a[b] + ", " + a[c] + ", " + a[d];
                for (let a = 0; a < 6; ++a)
                    for (let b = 0; b < 6; ++b)
                        for (let d = 0; d < 6; ++d) this.PALETTE_COLORS.push(c(a, b, d));
                let d = 8;
                for (let a = 0; a < 24; ++a, d += 10) this.PALETTE_COLORS.push(d + ", " + d + ", " + d)
            }
            escapeForHtml(a) {
                return a.replace(/[&<>\"]/gm, a => "&" == a ? "&amp;" : '"' == a ? "&quot;" : "<" == a ? "&lt;" : ">" == a ? "&gt;" : "")
            }
            linkify(a) {
                return a.replace(c, a => `<a href="${a}">${a}</a>`)
            }
            ansiToHtml(a, b) {
                return this.process(a, b, !0)
            }
            ansiToJson(a, b) {
                return (b = b || {}).json = !0, b.clearLine = !1, this.process(a, b, !0)
            }
            ansiToText(a) {
                return this.process(a, {}, !1)
            }
            process(a, b, c) {
                let d = a.split(/\033\[/),
                    e = d.shift();
                null == b && (b = {}), b.clearLine = /\r/.test(a);
                let f = d.map(a => this.processChunk(a, b, c));
                if (b && b.json) {
                    let a = this.processChunkJson("");
                    return a.content = e, a.clearLine = b.clearLine, f.unshift(a), b.remove_empty && (f = f.filter(a => !a.isEmpty())), f
                }
                return f.unshift(e), f.join("")
            }
            processChunkJson(a, c, d) {
                let e = (c = void 0 === c ? {} : c).use_classes = void 0 !== c.use_classes && c.use_classes,
                    f = c.key = e ? "class" : "color",
                    g = {
                        content: a,
                        fg: null,
                        bg: null,
                        fg_truecolor: null,
                        bg_truecolor: null,
                        isInverted: !1,
                        clearLine: c.clearLine,
                        decoration: null,
                        decorations: [],
                        was_processed: !1,
                        isEmpty: () => !g.content
                    },
                    h = a.match(/^([!\x3c-\x3f]*)([\d;]*)([\x20-\x2c]*[\x40-\x7e])([\s\S]*)/m);
                if (!h) return g;
                g.content = h[4];
                let i = h[2].split(";");
                if ("" !== h[1] || "m" !== h[3] || !d) return g;
                for (; i.length > 0;) {
                    let a = parseInt(i.shift());
                    if (isNaN(a) || 0 === a) this.fg = this.bg = null, this.decorations = [];
                    else if (1 === a) this.decorations.push("bold");
                    else if (2 === a) this.decorations.push("dim");
                    else if (3 === a) this.decorations.push("italic");
                    else if (4 === a) this.decorations.push("underline");
                    else if (5 === a) this.decorations.push("blink");
                    else if (7 === a) this.decorations.push("reverse");
                    else if (8 === a) this.decorations.push("hidden");
                    else if (9 === a) this.decorations.push("strikethrough");
                    else if (21 === a) this.removeDecoration("bold");
                    else if (22 === a) this.removeDecoration("bold"), this.removeDecoration("dim");
                    else if (23 === a) this.removeDecoration("italic");
                    else if (24 === a) this.removeDecoration("underline");
                    else if (25 === a) this.removeDecoration("blink");
                    else if (27 === a) this.removeDecoration("reverse");
                    else if (28 === a) this.removeDecoration("hidden");
                    else if (29 === a) this.removeDecoration("strikethrough");
                    else if (39 === a) this.fg = null;
                    else if (49 === a) this.bg = null;
                    else if (a >= 30 && a < 38) this.fg = b[0][a % 10][f];
                    else if (a >= 90 && a < 98) this.fg = b[1][a % 10][f];
                    else if (a >= 40 && a < 48) this.bg = b[0][a % 10][f];
                    else if (a >= 100 && a < 108) this.bg = b[1][a % 10][f];
                    else if (38 === a || 48 === a) {
                        let c = 38 === a;
                        if (i.length >= 1) {
                            let a = i.shift();
                            if ("5" === a && i.length >= 1) {
                                let a = parseInt(i.shift());
                                if (a >= 0 && a <= 255)
                                    if (e) {
                                        let d = a >= 16 ? "ansi-palette-" + a : b[+(a > 7)][a % 8].class;
                                        c ? this.fg = d : this.bg = d
                                    } else this.PALETTE_COLORS || this.setupPalette(), c ? this.fg = this.PALETTE_COLORS[a] : this.bg = this.PALETTE_COLORS[a]
                            } else if ("2" === a && i.length >= 3) {
                                let a = parseInt(i.shift()),
                                    b = parseInt(i.shift()),
                                    d = parseInt(i.shift());
                                if (a >= 0 && a <= 255 && b >= 0 && b <= 255 && d >= 0 && d <= 255) {
                                    let f = a + ", " + b + ", " + d;
                                    e ? c ? (this.fg = "ansi-truecolor", this.fg_truecolor = f) : (this.bg = "ansi-truecolor", this.bg_truecolor = f) : c ? this.fg = f : this.bg = f
                                }
                            }
                        }
                    }
                }
                return null === this.fg && null === this.bg && 0 === this.decorations.length || (g.fg = this.fg, g.bg = this.bg, g.fg_truecolor = this.fg_truecolor, g.bg_truecolor = this.bg_truecolor, g.decorations = this.decorations, g.decoration = this.decorations.slice(-1).pop() || null, g.was_processed = !0), g
            }
            processChunk(a, c, d) {
                c = c || {};
                let e = this.processChunkJson(a, c, d),
                    f = c.use_classes;
                if (e.decorations = e.decorations.filter(a => {
                        if ("reverse" === a) {
                            e.fg || (e.fg = b[0][7][f ? "class" : "color"]), e.bg || (e.bg = b[0][0][f ? "class" : "color"]);
                            let a = e.fg;
                            e.fg = e.bg, e.bg = a;
                            let c = e.fg_truecolor;
                            return e.fg_truecolor = e.bg_truecolor, e.bg_truecolor = c, e.isInverted = !0, !1
                        }
                        return !0
                    }), c.json) return e;
                if (e.isEmpty()) return "";
                if (!e.was_processed) return e.content;
                let g = [],
                    h = [],
                    i = [],
                    j = {},
                    k = a => {
                        let b, c = [];
                        for (b in a) a.hasOwnProperty(b) && c.push("data-" + b + '="' + this.escapeForHtml(a[b]) + '"');
                        return c.length > 0 ? " " + c.join(" ") : ""
                    };
                return (e.isInverted && (j["ansi-is-inverted"] = "true"), e.fg && (f ? (g.push(e.fg + "-fg"), null !== e.fg_truecolor && (j["ansi-truecolor-fg"] = e.fg_truecolor, e.fg_truecolor = null)) : g.push("color:rgb(" + e.fg + ")")), e.bg && (f ? (g.push(e.bg + "-bg"), null !== e.bg_truecolor && (j["ansi-truecolor-bg"] = e.bg_truecolor, e.bg_truecolor = null)) : g.push("background-color:rgb(" + e.bg + ")")), e.decorations.forEach(a => {
                    f ? h.push("ansi-" + a) : "bold" === a ? h.push("font-weight:bold") : "dim" === a ? h.push("opacity:0.5") : "italic" === a ? h.push("font-style:italic") : "hidden" === a ? h.push("visibility:hidden") : "strikethrough" === a ? i.push("line-through") : i.push(a)
                }), i.length && h.push("text-decoration:" + i.join(" ")), f) ? '<span class="' + g.concat(h).join(" ") + '"' + k(j) + ">" + e.content + "</span>" : '<span style="' + g.concat(h).join(";") + '"' + k(j) + ">" + e.content + "</span>"
            }
            removeDecoration(a) {
                let b = this.decorations.indexOf(a);
                b >= 0 && this.decorations.splice(b, 1)
            }
        }
    }),
    f8lQ: (function(a) {
        var b = {
            single_source_shortest_paths: function(a, c, d) {
                var e, f, g, h, i, j, k, l = {},
                    m = {};
                m[c] = 0;
                var n = b.PriorityQueue.make();
                for (n.push(c, 0); !n.empty();)
                    for (g in f = (e = n.pop()).value, h = e.cost, i = a[f] || {}) i.hasOwnProperty(g) && (j = h + i[g], k = m[g], (void 0 === m[g] || k > j) && (m[g] = j, n.push(g, j), l[g] = f));
                if (void 0 !== d && void 0 === m[d]) throw Error(["Could not find a path from ", c, " to ", d, "."].join(""));
                return l
            },
            extract_shortest_path_from_predecessor_list: function(a, b) {
                for (var c = [], d = b; d;) c.push(d), a[d], d = a[d];
                return c.reverse(), c
            },
            find_path: function(a, c, d) {
                var e = b.single_source_shortest_paths(a, c, d);
                return b.extract_shortest_path_from_predecessor_list(e, d)
            },
            PriorityQueue: {
                make: function(a) {
                    var c, d = b.PriorityQueue,
                        e = {};
                    for (c in a = a || {}, d) d.hasOwnProperty(c) && (e[c] = d[c]);
                    return e.queue = [], e.sorter = a.sorter || d.default_sorter, e
                },
                default_sorter: function(a, b) {
                    return a.cost - b.cost
                },
                push: function(a, b) {
                    this.queue.push({
                        value: a,
                        cost: b
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
        a.exports = b
    }),
    rFhZ: (function(a, b, c) {
        let d = c("VJml"),
            e = c("GN25"),
            f = c("g2wZ"),
            g = c("du2n");

        function h(a, b, c, f, g) {
            let h = [].slice.call(arguments, 1),
                i = h.length,
                j = "function" == typeof h[i - 1];
            if (!j && !d()) throw Error("Callback required as last argument");
            if (j) {
                if (i < 2) throw Error("Too few arguments provided");
                2 === i ? (g = c, c = b, b = f = void 0) : 3 === i && (b.getContext && void 0 === g ? (g = f, f = void 0) : (g = f, f = c, c = b, b = void 0))
            } else {
                if (i < 1) throw Error("Too few arguments provided");
                return 1 === i ? (c = b, b = f = void 0) : 2 !== i || b.getContext || (f = c, c = b, b = void 0), new Promise(function(d, g) {
                    try {
                        let g = e.create(c, f);
                        d(a(g, b, f))
                    } catch (a) {
                        g(a)
                    }
                })
            }
            try {
                let d = e.create(c, f);
                g(null, a(d, b, f))
            } catch (a) {
                g(a)
            }
        }
        b.a = e.create, h.bind(null, f.render), h.bind(null, f.renderToDataURL), h.bind(null, function(a, b, c) {
            return g.render(a, c)
        })
    }),
    VJml: (function(a) {
        a.exports = function() {
            return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
        }
    }),
    NxDs: (function(a, b, c) {
        let d = c("YBfX").getSymbolSize;
        b.getRowColCoords = function(a) {
            if (1 === a) return [];
            let b = Math.floor(a / 7) + 2,
                c = d(a),
                e = 145 === c ? 26 : 2 * Math.ceil((c - 13) / (2 * b - 2)),
                f = [c - 7];
            for (let a = 1; a < b - 1; a++) f[a] = f[a - 1] - e;
            return f.push(6), f.reverse()
        }, b.getPositions = function(a) {
            let c = [],
                d = b.getRowColCoords(a),
                e = d.length;
            for (let a = 0; a < e; a++)
                for (let b = 0; b < e; b++)(0 !== a || 0 !== b) && (0 !== a || b !== e - 1) && (a !== e - 1 || 0 !== b) && c.push([d[a], d[b]]);
            return c
        }
    }),
    XrtS: (function(a, b, c) {
        let d = c("VFGm"),
            e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

        function f(a) {
            this.mode = d.ALPHANUMERIC, this.data = a
        }
        f.getBitsLength = function(a) {
            return 11 * Math.floor(a / 2) + a % 2 * 6
        }, f.prototype.getLength = function() {
            return this.data.length
        }, f.prototype.getBitsLength = function() {
            return f.getBitsLength(this.data.length)
        }, f.prototype.write = function(a) {
            let b;
            for (b = 0; b + 2 <= this.data.length; b += 2) {
                let c = 45 * e.indexOf(this.data[b]);
                c += e.indexOf(this.data[b + 1]), a.put(c, 11)
            }
            this.data.length % 2 && a.put(e.indexOf(this.data[b]), 6)
        }, a.exports = f
    }),
    PrMp: (function(a) {
        function b() {
            this.buffer = [], this.length = 0
        }
        b.prototype = {
            get: function(a) {
                let b = Math.floor(a / 8);
                return (this.buffer[b] >>> 7 - a % 8 & 1) == 1
            },
            put: function(a, b) {
                for (let c = 0; c < b; c++) this.putBit((a >>> b - c - 1 & 1) == 1)
            },
            getLengthInBits: function() {
                return this.length
            },
            putBit: function(a) {
                let b = Math.floor(this.length / 8);
                this.buffer.length <= b && this.buffer.push(0), a && (this.buffer[b] |= 128 >>> this.length % 8), this.length++
            }
        }, a.exports = b
    }),
    QOw5: (function(a) {
        function b(a) {
            if (!a || a < 1) throw Error("BitMatrix size must be defined and greater than 0");
            this.size = a, this.data = new Uint8Array(a * a), this.reservedBit = new Uint8Array(a * a)
        }
        b.prototype.set = function(a, b, c, d) {
            let e = a * this.size + b;
            this.data[e] = c, d && (this.reservedBit[e] = !0)
        }, b.prototype.get = function(a, b) {
            return this.data[a * this.size + b]
        }, b.prototype.xor = function(a, b, c) {
            this.data[a * this.size + b] ^= c
        }, b.prototype.isReserved = function(a, b) {
            return this.reservedBit[a * this.size + b]
        }, a.exports = b
    }),
    dees: (function(a, b, c) {
        let d = c("VFGm");

        function e(a) {
            this.mode = d.BYTE, "string" == typeof a ? this.data = new TextEncoder().encode(a) : this.data = new Uint8Array(a)
        }
        e.getBitsLength = function(a) {
            return 8 * a
        }, e.prototype.getLength = function() {
            return this.data.length
        }, e.prototype.getBitsLength = function() {
            return e.getBitsLength(this.data.length)
        }, e.prototype.write = function(a) {
            for (let b = 0, c = this.data.length; b < c; b++) a.put(this.data[b], 8)
        }, a.exports = e
    }),
    lbSx: (function(a, b, c) {
        let d = c("Uv0t"),
            e = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
            f = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
        b.getBlocksCount = function(a, b) {
            switch (b) {
                case d.L:
                    return e[(a - 1) * 4 + 0];
                case d.M:
                    return e[(a - 1) * 4 + 1];
                case d.Q:
                    return e[(a - 1) * 4 + 2];
                case d.H:
                    return e[(a - 1) * 4 + 3];
                default:
                    return
            }
        }, b.getTotalCodewordsCount = function(a, b) {
            switch (b) {
                case d.L:
                    return f[(a - 1) * 4 + 0];
                case d.M:
                    return f[(a - 1) * 4 + 1];
                case d.Q:
                    return f[(a - 1) * 4 + 2];
                case d.H:
                    return f[(a - 1) * 4 + 3];
                default:
                    return
            }
        }
    }),
    Uv0t: (function(a, b) {
        b.L = {
            bit: 1
        }, b.M = {
            bit: 0
        }, b.Q = {
            bit: 3
        }, b.H = {
            bit: 2
        }, b.isValid = function(a) {
            return a && void 0 !== a.bit && a.bit >= 0 && a.bit < 4
        }, b.from = function(a, c) {
            if (b.isValid(a)) return a;
            try {
                if ("string" != typeof a) throw Error("Param is not a string");
                switch (a.toLowerCase()) {
                    case "l":
                    case "low":
                        return b.L;
                    case "m":
                    case "medium":
                        return b.M;
                    case "q":
                    case "quartile":
                        return b.Q;
                    case "h":
                    case "high":
                        return b.H;
                    default:
                        throw Error("Unknown EC Level: " + a)
                }
            } catch (a) {
                return c
            }
        }
    }),
    IibT: (function(a, b, c) {
        let d = c("YBfX").getSymbolSize;
        b.getPositions = function(a) {
            let b = d(a);
            return [
                [0, 0],
                [b - 7, 0],
                [0, b - 7]
            ]
        }
    }),
    gdIu: (function(a, b, c) {
        let d = c("YBfX"),
            e = d.getBCHDigit(1335);
        b.getEncodedBits = function(a, b) {
            let c = a.bit << 3 | b,
                f = c << 10;
            for (; d.getBCHDigit(f) - e >= 0;) f ^= 1335 << d.getBCHDigit(f) - e;
            return (c << 10 | f) ^ 21522
        }
    }),
    aaID: (function(a, b) {
        let c = new Uint8Array(512),
            d = new Uint8Array(256),
            e = 1;
        for (let a = 0; a < 255; a++) c[a] = e, d[e] = a, 256 & (e <<= 1) && (e ^= 285);
        for (let a = 255; a < 512; a++) c[a] = c[a - 255];
        b.exp = function(a) {
            return c[a]
        }, b.mul = function(a, b) {
            return 0 === a || 0 === b ? 0 : c[d[a] + d[b]]
        }
    }),
    MEGq: (function(a, b, c) {
        let d = c("VFGm"),
            e = c("YBfX");

        function f(a) {
            this.mode = d.KANJI, this.data = a
        }
        f.getBitsLength = function(a) {
            return 13 * a
        }, f.prototype.getLength = function() {
            return this.data.length
        }, f.prototype.getBitsLength = function() {
            return f.getBitsLength(this.data.length)
        }, f.prototype.write = function(a) {
            let b;
            for (b = 0; b < this.data.length; b++) {
                let c = e.toSJIS(this.data[b]);
                if (c >= 33088 && c <= 40956) c -= 33088;
                else if (c >= 57408 && c <= 60351) c -= 49472;
                else throw Error("Invalid SJIS character: " + this.data[b] + "\nMake sure your charset is UTF-8");
                c = (c >>> 8 & 255) * 192 + (255 & c), a.put(c, 13)
            }
        }, a.exports = f
    }),
    LE59: (function(a, b) {
        b.Patterns = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        };
        b.isValid = function(a) {
            return null != a && "" !== a && !isNaN(a) && a >= 0 && a <= 7
        }, b.from = function(a) {
            return b.isValid(a) ? parseInt(a, 10) : void 0
        }, b.getPenaltyN1 = function(a) {
            let b = a.size,
                c = 0,
                d = 0,
                e = 0,
                f = null,
                g = null;
            for (let h = 0; h < b; h++) {
                d = e = 0, f = g = null;
                for (let i = 0; i < b; i++) {
                    let b = a.get(h, i);
                    b === f ? d++ : (d >= 5 && (c += 3 + (d - 5)), f = b, d = 1), (b = a.get(i, h)) === g ? e++ : (e >= 5 && (c += 3 + (e - 5)), g = b, e = 1)
                }
                d >= 5 && (c += 3 + (d - 5)), e >= 5 && (c += 3 + (e - 5))
            }
            return c
        }, b.getPenaltyN2 = function(a) {
            let b = a.size,
                c = 0;
            for (let d = 0; d < b - 1; d++)
                for (let e = 0; e < b - 1; e++) {
                    let b = a.get(d, e) + a.get(d, e + 1) + a.get(d + 1, e) + a.get(d + 1, e + 1);
                    (4 === b || 0 === b) && c++
                }
            return 3 * c
        }, b.getPenaltyN3 = function(a) {
            let b = a.size,
                c = 0,
                d = 0,
                e = 0;
            for (let f = 0; f < b; f++) {
                d = e = 0;
                for (let g = 0; g < b; g++) d = d << 1 & 2047 | a.get(f, g), g >= 10 && (1488 === d || 93 === d) && c++, e = e << 1 & 2047 | a.get(g, f), g >= 10 && (1488 === e || 93 === e) && c++
            }
            return 40 * c
        }, b.getPenaltyN4 = function(a) {
            let b = 0,
                c = a.data.length;
            for (let d = 0; d < c; d++) b += a.data[d];
            return 10 * Math.abs(Math.ceil(100 * b / c / 5) - 10)
        }, b.applyMask = function(a, c) {
            let d = c.size;
            for (let e = 0; e < d; e++)
                for (let f = 0; f < d; f++) c.isReserved(f, e) || c.xor(f, e, function(a, c, d) {
                    switch (a) {
                        case b.Patterns.PATTERN000:
                            return (c + d) % 2 == 0;
                        case b.Patterns.PATTERN001:
                            return c % 2 == 0;
                        case b.Patterns.PATTERN010:
                            return d % 3 == 0;
                        case b.Patterns.PATTERN011:
                            return (c + d) % 3 == 0;
                        case b.Patterns.PATTERN100:
                            return (Math.floor(c / 2) + Math.floor(d / 3)) % 2 == 0;
                        case b.Patterns.PATTERN101:
                            return c * d % 2 + c * d % 3 == 0;
                        case b.Patterns.PATTERN110:
                            return (c * d % 2 + c * d % 3) % 2 == 0;
                        case b.Patterns.PATTERN111:
                            return (c * d % 3 + (c + d) % 2) % 2 == 0;
                        default:
                            throw Error("bad maskPattern:" + a)
                    }
                }(a, f, e))
        }, b.getBestMask = function(a, c) {
            let d = Object.keys(b.Patterns).length,
                e = 0,
                f = 1 / 0;
            for (let g = 0; g < d; g++) {
                c(g), b.applyMask(g, a);
                let d = b.getPenaltyN1(a) + b.getPenaltyN2(a) + b.getPenaltyN3(a) + b.getPenaltyN4(a);
                b.applyMask(g, a), d < f && (f = d, e = g)
            }
            return e
        }
    }),
    VFGm: (function(a, b, c) {
        let d = c("Y8xa"),
            e = c("fFdr");
        b.NUMERIC = {
            id: "Numeric",
            bit: 1,
            ccBits: [10, 12, 14]
        }, b.ALPHANUMERIC = {
            id: "Alphanumeric",
            bit: 2,
            ccBits: [9, 11, 13]
        }, b.BYTE = {
            id: "Byte",
            bit: 4,
            ccBits: [8, 16, 16]
        }, b.KANJI = {
            id: "Kanji",
            bit: 8,
            ccBits: [8, 10, 12]
        }, b.MIXED = {
            bit: -1
        }, b.getCharCountIndicator = function(a, b) {
            if (!a.ccBits) throw Error("Invalid mode: " + a);
            if (!d.isValid(b)) throw Error("Invalid version: " + b);
            return b >= 1 && b < 10 ? a.ccBits[0] : b < 27 ? a.ccBits[1] : a.ccBits[2]
        }, b.getBestModeForData = function(a) {
            return e.testNumeric(a) ? b.NUMERIC : e.testAlphanumeric(a) ? b.ALPHANUMERIC : e.testKanji(a) ? b.KANJI : b.BYTE
        }, b.toString = function(a) {
            if (a && a.id) return a.id;
            throw Error("Invalid mode")
        }, b.isValid = function(a) {
            return a && a.bit && a.ccBits
        }, b.from = function(a, c) {
            if (b.isValid(a)) return a;
            try {
                if ("string" != typeof a) throw Error("Param is not a string");
                switch (a.toLowerCase()) {
                    case "numeric":
                        return b.NUMERIC;
                    case "alphanumeric":
                        return b.ALPHANUMERIC;
                    case "kanji":
                        return b.KANJI;
                    case "byte":
                        return b.BYTE;
                    default:
                        throw Error("Unknown mode: " + a)
                }
            } catch (a) {
                return c
            }
        }
    }),
    meD9: (function(a, b, c) {
        let d = c("VFGm");

        function e(a) {
            this.mode = d.NUMERIC, this.data = a.toString()
        }
        e.getBitsLength = function(a) {
            return 10 * Math.floor(a / 3) + (a % 3 ? a % 3 * 3 + 1 : 0)
        }, e.prototype.getLength = function() {
            return this.data.length
        }, e.prototype.getBitsLength = function() {
            return e.getBitsLength(this.data.length)
        }, e.prototype.write = function(a) {
            let b, c;
            for (b = 0; b + 3 <= this.data.length; b += 3) c = parseInt(this.data.substr(b, 3), 10), a.put(c, 10);
            let d = this.data.length - b;
            d > 0 && (c = parseInt(this.data.substr(b), 10), a.put(c, 3 * d + 1))
        }, a.exports = e
    }),
    CyKQ: (function(a, b, c) {
        let d = c("aaID");
        b.mul = function(a, b) {
            let c = new Uint8Array(a.length + b.length - 1);
            for (let e = 0; e < a.length; e++)
                for (let f = 0; f < b.length; f++) c[e + f] ^= d.mul(a[e], b[f]);
            return c
        }, b.mod = function(a, b) {
            let c = new Uint8Array(a);
            for (; c.length - b.length >= 0;) {
                let a = c[0];
                for (let e = 0; e < b.length; e++) c[e] ^= d.mul(b[e], a);
                let e = 0;
                for (; e < c.length && 0 === c[e];) e++;
                c = c.slice(e)
            }
            return c
        }, b.generateECPolynomial = function(a) {
            let c = new Uint8Array([1]);
            for (let e = 0; e < a; e++) c = b.mul(c, new Uint8Array([1, d.exp(e)]));
            return c
        }
    }),
    GN25: (function(a, b, c) {
        let d = c("YBfX"),
            e = c("Uv0t"),
            f = c("PrMp"),
            g = c("QOw5"),
            h = c("NxDs"),
            i = c("IibT"),
            j = c("LE59"),
            k = c("lbSx"),
            l = c("F0J9"),
            m = c("SIJL"),
            n = c("gdIu"),
            o = c("VFGm"),
            p = c("qjFV");

        function q(a, b, c) {
            let d, e, f = a.size,
                g = n.getEncodedBits(b, c);
            for (d = 0; d < 15; d++) e = (g >> d & 1) == 1, d < 6 ? a.set(d, 8, e, !0) : d < 8 ? a.set(d + 1, 8, e, !0) : a.set(f - 15 + d, 8, e, !0), d < 8 ? a.set(8, f - d - 1, e, !0) : d < 9 ? a.set(8, 15 - d - 1 + 1, e, !0) : a.set(8, 15 - d - 1, e, !0);
            a.set(f - 8, 8, 1, !0)
        }
        b.create = function(a, b) {
            let c, n;
            if (void 0 === a || "" === a) throw Error("No input text");
            let r = e.M;
            return void 0 !== b && (r = e.from(b.errorCorrectionLevel, e.M), c = m.from(b.version), n = j.from(b.maskPattern), b.toSJISFunc && d.setToSJISFunction(b.toSJISFunc)),
                function(a, b, c, e) {
                    let n;
                    if (Array.isArray(a)) n = p.fromArray(a);
                    else if ("string" == typeof a) {
                        let d = b;
                        if (!d) {
                            let b = p.rawSplit(a);
                            d = m.getBestVersionForData(b, c)
                        }
                        n = p.fromString(a, d || 40)
                    } else throw Error("Invalid data");
                    let r = m.getBestVersionForData(n, c);
                    if (!r) throw Error("The amount of data is too big to be stored in a QR Code");
                    if (b) {
                        if (b < r) throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + r + ".\n")
                    } else b = r;
                    let s = function(a, b, c) {
                            let e = new f;
                            c.forEach(function(b) {
                                e.put(b.mode.bit, 4), e.put(b.getLength(), o.getCharCountIndicator(b.mode, a)), b.write(e)
                            });
                            let g = (d.getSymbolTotalCodewords(a) - k.getTotalCodewordsCount(a, b)) * 8;
                            for (e.getLengthInBits() + 4 <= g && e.put(0, 4); e.getLengthInBits() % 8 != 0;) e.putBit(0);
                            let h = (g - e.getLengthInBits()) / 8;
                            for (let a = 0; a < h; a++) e.put(a % 2 ? 17 : 236, 8);
                            return function(a, b, c) {
                                let e, f, g = d.getSymbolTotalCodewords(b),
                                    h = g - k.getTotalCodewordsCount(b, c),
                                    i = k.getBlocksCount(b, c),
                                    j = g % i,
                                    m = i - j,
                                    n = Math.floor(g / i),
                                    o = Math.floor(h / i),
                                    p = o + 1,
                                    q = n - o,
                                    r = new l(q),
                                    s = 0,
                                    t = Array(i),
                                    u = Array(i),
                                    v = 0,
                                    w = new Uint8Array(a.buffer);
                                for (let a = 0; a < i; a++) {
                                    let b = a < m ? o : p;
                                    t[a] = w.slice(s, s + b), u[a] = r.encode(t[a]), s += b, v = Math.max(v, b)
                                }
                                let x = new Uint8Array(g),
                                    y = 0;
                                for (e = 0; e < v; e++)
                                    for (f = 0; f < i; f++) e < t[f].length && (x[y++] = t[f][e]);
                                for (e = 0; e < q; e++)
                                    for (f = 0; f < i; f++) x[y++] = u[f][e];
                                return x
                            }(e, a, b)
                        }(b, c, n),
                        t = new g(d.getSymbolSize(b));
                    ! function(a, b) {
                        let c = a.size,
                            d = i.getPositions(b);
                        for (let b = 0; b < d.length; b++) {
                            let e = d[b][0],
                                f = d[b][1];
                            for (let b = -1; b <= 7; b++)
                                if (!(e + b <= -1) && !(c <= e + b))
                                    for (let d = -1; d <= 7; d++) f + d <= -1 || c <= f + d || (b >= 0 && b <= 6 && (0 === d || 6 === d) || d >= 0 && d <= 6 && (0 === b || 6 === b) || b >= 2 && b <= 4 && d >= 2 && d <= 4 ? a.set(e + b, f + d, !0, !0) : a.set(e + b, f + d, !1, !0))
                        }
                    }(t, b);
                    let u = t.size;
                    for (let a = 8; a < u - 8; a++) {
                        let b = a % 2 == 0;
                        t.set(a, 6, b, !0), t.set(6, a, b, !0)
                    }
                    return ! function(a, b) {
                        let c = h.getPositions(b);
                        for (let b = 0; b < c.length; b++) {
                            let d = c[b][0],
                                e = c[b][1];
                            for (let b = -2; b <= 2; b++)
                                for (let c = -2; c <= 2; c++) - 2 === b || 2 === b || -2 === c || 2 === c || 0 === b && 0 === c ? a.set(d + b, e + c, !0, !0) : a.set(d + b, e + c, !1, !0)
                        }
                    }(t, b), q(t, c, 0), b >= 7 && function(a, b) {
                        let c, d, e, f = a.size,
                            g = m.getEncodedBits(b);
                        for (let b = 0; b < 18; b++) c = Math.floor(b / 3), d = b % 3 + f - 8 - 3, e = (g >> b & 1) == 1, a.set(c, d, e, !0), a.set(d, c, e, !0)
                    }(t, b), ! function(a, b) {
                        let c = a.size,
                            d = -1,
                            e = c - 1,
                            f = 7,
                            g = 0;
                        for (let h = c - 1; h > 0; h -= 2)
                            for (6 === h && h--;;) {
                                for (let c = 0; c < 2; c++)
                                    if (!a.isReserved(e, h - c)) {
                                        let d = !1;
                                        g < b.length && (d = (b[g] >>> f & 1) == 1), a.set(e, h - c, d), -1 == --f && (g++, f = 7)
                                    } if ((e += d) < 0 || c <= e) {
                                    e -= d, d = -d;
                                    break
                                }
                            }
                    }(t, s), isNaN(e) && (e = j.getBestMask(t, q.bind(null, t, c))), j.applyMask(e, t), q(t, c, e), {
                        modules: t,
                        version: b,
                        errorCorrectionLevel: c,
                        maskPattern: e,
                        segments: n
                    }
                }(a, c, r, n)
        }
    }),
    F0J9: (function(a, b, c) {
        let d = c("CyKQ");

        function e(a) {
            this.genPoly = void 0, this.degree = a, this.degree && this.initialize(this.degree)
        }
        e.prototype.initialize = function(a) {
            this.degree = a, this.genPoly = d.generateECPolynomial(this.degree)
        }, e.prototype.encode = function(a) {
            if (!this.genPoly) throw Error("Encoder not initialized");
            let b = new Uint8Array(a.length + this.degree);
            b.set(a);
            let c = d.mod(b, this.genPoly),
                e = this.degree - c.length;
            if (e > 0) {
                let a = new Uint8Array(this.degree);
                return a.set(c, e), a
            }
            return c
        }, a.exports = e
    }),
    fFdr: (function(a, b) {
        let c = "[0-9]+",
            d = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
            e = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (d = d.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
        b.KANJI = RegExp(d, "g"), b.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), b.BYTE = RegExp(e, "g"), b.NUMERIC = RegExp(c, "g"), b.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g");
        let f = RegExp("^" + d + "$"),
            g = RegExp("^" + c + "$"),
            h = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
        b.testKanji = function(a) {
            return f.test(a)
        }, b.testNumeric = function(a) {
            return g.test(a)
        }, b.testAlphanumeric = function(a) {
            return h.test(a)
        }
    }),
    qjFV: (function(a, b, c) {
        let d = c("VFGm"),
            e = c("meD9"),
            f = c("XrtS"),
            g = c("dees"),
            h = c("MEGq"),
            i = c("fFdr"),
            j = c("YBfX"),
            k = c("f8lQ");

        function l(a) {
            return unescape(encodeURIComponent(a)).length
        }

        function m(a, b, c) {
            let d, e = [];
            for (; null !== (d = a.exec(c));) e.push({
                data: d[0],
                index: d.index,
                mode: b,
                length: d[0].length
            });
            return e
        }

        function n(a) {
            let b, c, e = m(i.NUMERIC, d.NUMERIC, a),
                f = m(i.ALPHANUMERIC, d.ALPHANUMERIC, a);
            return j.isKanjiModeEnabled() ? (b = m(i.BYTE, d.BYTE, a), c = m(i.KANJI, d.KANJI, a)) : (b = m(i.BYTE_KANJI, d.BYTE, a), c = []), e.concat(f, b, c).sort(function(a, b) {
                return a.index - b.index
            }).map(function(a) {
                return {
                    data: a.data,
                    mode: a.mode,
                    length: a.length
                }
            })
        }

        function o(a, b) {
            switch (b) {
                case d.NUMERIC:
                    return e.getBitsLength(a);
                case d.ALPHANUMERIC:
                    return f.getBitsLength(a);
                case d.KANJI:
                    return h.getBitsLength(a);
                case d.BYTE:
                    return g.getBitsLength(a)
            }
        }

        function p(a, b) {
            let c, i = d.getBestModeForData(a);
            if ((c = d.from(b, i)) !== d.BYTE && c.bit < i.bit) throw Error('"' + a + '" cannot be encoded with mode ' + d.toString(c) + ".\n Suggested mode is: " + d.toString(i));
            switch (c === d.KANJI && !j.isKanjiModeEnabled() && (c = d.BYTE), c) {
                case d.NUMERIC:
                    return new e(a);
                case d.ALPHANUMERIC:
                    return new f(a);
                case d.KANJI:
                    return new h(a);
                case d.BYTE:
                    return new g(a)
            }
        }
        b.fromArray = function(a) {
            return a.reduce(function(a, b) {
                return "string" == typeof b ? a.push(p(b, null)) : b.data && a.push(p(b.data, b.mode)), a
            }, [])
        }, b.fromString = function(a, c) {
            let e = function(a, b) {
                    let c = {},
                        e = {
                            start: {}
                        },
                        f = ["start"];
                    for (let g = 0; g < a.length; g++) {
                        let h = a[g],
                            i = [];
                        for (let a = 0; a < h.length; a++) {
                            let j = h[a],
                                k = "" + g + a;
                            i.push(k), c[k] = {
                                node: j,
                                lastCount: 0
                            }, e[k] = {};
                            for (let a = 0; a < f.length; a++) {
                                let g = f[a];
                                c[g] && c[g].node.mode === j.mode ? (e[g][k] = o(c[g].lastCount + j.length, j.mode) - o(c[g].lastCount, j.mode), c[g].lastCount += j.length) : (c[g] && (c[g].lastCount = j.length), e[g][k] = o(j.length, j.mode) + 4 + d.getCharCountIndicator(j.mode, b))
                            }
                        }
                        f = i
                    }
                    for (let a = 0; a < f.length; a++) e[f[a]].end = 0;
                    return {
                        map: e,
                        table: c
                    }
                }(function(a) {
                    let b = [];
                    for (let c = 0; c < a.length; c++) {
                        let e = a[c];
                        switch (e.mode) {
                            case d.NUMERIC:
                                b.push([e, {
                                    data: e.data,
                                    mode: d.ALPHANUMERIC,
                                    length: e.length
                                }, {
                                    data: e.data,
                                    mode: d.BYTE,
                                    length: e.length
                                }]);
                                break;
                            case d.ALPHANUMERIC:
                                b.push([e, {
                                    data: e.data,
                                    mode: d.BYTE,
                                    length: e.length
                                }]);
                                break;
                            case d.KANJI:
                                b.push([e, {
                                    data: e.data,
                                    mode: d.BYTE,
                                    length: l(e.data)
                                }]);
                                break;
                            case d.BYTE:
                                b.push([{
                                    data: e.data,
                                    mode: d.BYTE,
                                    length: l(e.data)
                                }])
                        }
                    }
                    return b
                }(n(a, j.isKanjiModeEnabled())), c),
                f = k.find_path(e.map, "start", "end"),
                g = [];
            for (let a = 1; a < f.length - 1; a++) g.push(e.table[f[a]].node);
            return b.fromArray(g.reduce(function(a, b) {
                let c = a.length - 1 >= 0 ? a[a.length - 1] : null;
                return c && c.mode === b.mode ? a[a.length - 1].data += b.data : a.push(b), a
            }, []))
        }, b.rawSplit = function(a) {
            return b.fromArray(n(a, j.isKanjiModeEnabled()))
        }
    }),
    YBfX: (function(a, b) {
        let c, d = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
        b.getSymbolSize = function(a) {
            if (!a) throw Error('"version" cannot be null or undefined');
            if (a < 1 || a > 40) throw Error('"version" should be in range from 1 to 40');
            return 4 * a + 17
        }, b.getSymbolTotalCodewords = function(a) {
            return d[a]
        }, b.getBCHDigit = function(a) {
            let b = 0;
            for (; 0 !== a;) b++, a >>>= 1;
            return b
        }, b.setToSJISFunction = function(a) {
            if ("function" != typeof a) throw Error('"toSJISFunc" is not a valid function.');
            c = a
        }, b.isKanjiModeEnabled = function() {
            return void 0 !== c
        }, b.toSJIS = function(a) {
            return c(a)
        }
    }),
    Y8xa: (function(a, b) {
        b.isValid = function(a) {
            return !isNaN(a) && a >= 1 && a <= 40
        }
    }),
    SIJL: (function(a, b, c) {
        let d = c("YBfX"),
            e = c("lbSx"),
            f = c("Uv0t"),
            g = c("VFGm"),
            h = c("Y8xa"),
            i = d.getBCHDigit(7973);

        function j(a, b) {
            return g.getCharCountIndicator(a, b) + 4
        }
        b.from = function(a, b) {
            return h.isValid(a) ? parseInt(a, 10) : b
        }, b.getCapacity = function(a, b, c) {
            if (!h.isValid(a)) throw Error("Invalid QR Code version");
            void 0 === c && (c = g.BYTE);
            let f = (d.getSymbolTotalCodewords(a) - e.getTotalCodewordsCount(a, b)) * 8;
            if (c === g.MIXED) return f;
            let i = f - j(c, a);
            switch (c) {
                case g.NUMERIC:
                    return Math.floor(i / 10 * 3);
                case g.ALPHANUMERIC:
                    return Math.floor(i / 11 * 2);
                case g.KANJI:
                    return Math.floor(i / 13);
                case g.BYTE:
                default:
                    return Math.floor(i / 8)
            }
        }, b.getBestVersionForData = function(a, c) {
            let d, e = f.from(c, f.M);
            if (Array.isArray(a)) {
                if (a.length > 1) {
                    for (let c = 1; c <= 40; c++)
                        if (function(a, b) {
                                let c = 0;
                                return a.forEach(function(a) {
                                    let d = j(a.mode, b);
                                    c += d + a.getBitsLength()
                                }), c
                            }(a, c) <= b.getCapacity(c, e, g.MIXED)) return c;
                    return
                }
                if (0 === a.length) return 1;
                d = a[0]
            } else d = a;
            return function(a, c, d) {
                for (let e = 1; e <= 40; e++)
                    if (c <= b.getCapacity(e, d, a)) return e
            }(d.mode, d.getLength(), e)
        }, b.getEncodedBits = function(a) {
            if (!h.isValid(a) || a < 7) throw Error("Invalid QR Code version");
            let b = a << 12;
            for (; d.getBCHDigit(b) - i >= 0;) b ^= 7973 << d.getBCHDigit(b) - i;
            return a << 12 | b
        }
    }),
    g2wZ: (function(a, b, c) {
        let d = c("hidh");
        b.render = function(a, b, c) {
            var e;
            let f = c,
                g = b;
            void 0 !== f || b && b.getContext || (f = b, b = void 0), b || (g = function() {
                try {
                    return document.createElement("canvas")
                } catch (a) {
                    throw Error("You need to specify a canvas element")
                }
            }()), f = d.getOptions(f);
            let h = d.getImageWidth(a.modules.size, f),
                i = g.getContext("2d"),
                j = i.createImageData(h, h);
            return d.qrToImageData(j.data, a, f), e = g, i.clearRect(0, 0, e.width, e.height), e.style || (e.style = {}), e.height = h, e.width = h, e.style.height = h + "px", e.style.width = h + "px", i.putImageData(j, 0, 0), g
        }, b.renderToDataURL = function(a, c, d) {
            let e = d;
            void 0 !== e || c && c.getContext || (e = c, c = void 0), e || (e = {});
            let f = b.render(a, c, e),
                g = e.type || "image/png",
                h = e.rendererOpts || {};
            return f.toDataURL(g, h.quality)
        }
    }),
    du2n: (function(a, b, c) {
        let d = c("hidh");

        function e(a, b) {
            let c = a.a / 255,
                d = b + '="' + a.hex + '"';
            return c < 1 ? d + " " + b + '-opacity="' + c.toFixed(2).slice(1) + '"' : d
        }

        function f(a, b, c) {
            let d = a + b;
            return void 0 !== c && (d += " " + c), d
        }
        b.render = function(a, b, c) {
            let g = d.getOptions(b),
                h = a.modules.size,
                i = a.modules.data,
                j = h + 2 * g.margin,
                k = g.color.light.a ? "<path " + e(g.color.light, "fill") + ' d="M0 0h' + j + "v" + j + 'H0z"/>' : "",
                l = "<path " + e(g.color.dark, "stroke") + ' d="' + function(a, b, c) {
                    let d = "",
                        e = 0,
                        g = !1,
                        h = 0;
                    for (let i = 0; i < a.length; i++) {
                        let j = Math.floor(i % b),
                            k = Math.floor(i / b);
                        j || g || (g = !0), a[i] ? (h++, i > 0 && j > 0 && a[i - 1] || (d += g ? f("M", j + c, .5 + k + c) : f("m", e, 0), e = 0, g = !1), j + 1 < b && a[i + 1] || (d += f("h", h), h = 0)) : e++
                    }
                    return d
                }(i, h, g.margin) + '"/>',
                m = '<svg xmlns="http://www.w3.org/2000/svg" ' + (g.width ? 'width="' + g.width + '" height="' + g.width + '" ' : "") + ('viewBox="0 0 ' + j + " ") + j + '" shape-rendering="crispEdges">' + k + l + "</svg>\n";
            return "function" == typeof c && c(null, m), m
        }
    }),
    hidh: (function(a, b) {
        function c(a) {
            if ("number" == typeof a && (a = a.toString()), "string" != typeof a) throw Error("Color should be defined as hex string");
            let b = a.slice().replace("#", "").split("");
            if (b.length < 3 || 5 === b.length || b.length > 8) throw Error("Invalid hex color: " + a);
            (3 === b.length || 4 === b.length) && (b = Array.prototype.concat.apply([], b.map(function(a) {
                return [a, a]
            }))), 6 === b.length && b.push("F", "F");
            let c = parseInt(b.join(""), 16);
            return {
                r: c >> 24 & 255,
                g: c >> 16 & 255,
                b: c >> 8 & 255,
                a: 255 & c,
                hex: "#" + b.slice(0, 6).join("")
            }
        }
        b.getOptions = function(a) {
            a || (a = {}), a.color || (a.color = {});
            let b = void 0 === a.margin || null === a.margin || a.margin < 0 ? 4 : a.margin,
                d = a.width && a.width >= 21 ? a.width : void 0,
                e = a.scale || 4;
            return {
                width: d,
                scale: d ? 4 : e,
                margin: b,
                color: {
                    dark: c(a.color.dark || "#000000ff"),
                    light: c(a.color.light || "#ffffffff")
                },
                type: a.type,
                rendererOpts: a.rendererOpts || {}
            }
        }, b.getScale = function(a, b) {
            return b.width && b.width >= a + 2 * b.margin ? b.width / (a + 2 * b.margin) : b.scale
        }, b.getImageWidth = function(a, c) {
            let d = b.getScale(a, c);
            return Math.floor((a + 2 * c.margin) * d)
        }, b.qrToImageData = function(a, c, d) {
            let e = c.modules.size,
                f = c.modules.data,
                g = b.getScale(e, d),
                h = Math.floor((e + 2 * d.margin) * g),
                i = d.margin * g,
                j = [d.color.light, d.color.dark];
            for (let b = 0; b < h; b++)
                for (let c = 0; c < h; c++) {
                    let k = (b * h + c) * 4,
                        l = d.color.light;
                    b >= i && c >= i && b < h - i && c < h - i && (l = j[+!!f[Math.floor((b - i) / g) * e + Math.floor((c - i) / g)]]), a[k++] = l.r, a[k++] = l.g, a[k++] = l.b, a[k] = l.a
                }
        }
    }),
    UKrF: (function(a, b) {
        b.a = {
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
    yIxl: (function(a, b) {
        b.a = {
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
    nZ8t: (function(a, b) {
        b.a = {
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
    E9wO: (function(a, b) {
        b.a = {
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
    uyUx: (function(a, b) {
        b.a = {
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
    youb: (function(a, b) {
        b.a = {
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
    CxX8: (function(a, b) {
        b.a = {
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
    wR58: (function(a, b) {
        b.a = {
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
    u0hI: (function(a, b) {
        b.a = {
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
    hZLK: (function(a, b) {
        b.a = {
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
    BkdB: (function(a, b) {
        b.a = {
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
    nuPr: (function(a, b) {
        b.a = {
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
                    x: -3e-5,
                    y: .101562,
                    overflows: !1
                },
                composite: {
                    x: -3e-5,
                    y: .101562,
                    overflows: !1
                }
            }
        }
    }),
    lmvi: (function(a, b) {
        b.a = {
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
    n204: (function(a, b) {
        b.a = {
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
    C1Cm: (function(a, b) {
        b.a = {
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
    Ohz3: (function(a, b, c) {
        c.d(b, {
            a: () => d
        });
        var d = {
            kind: "inline",
            preset: (0, (c("tF54")).a)({
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
                body: ['<path d="M17.5 15.45833c0 1.125-0.91667 2.04167-2.04167 2.04167h-3.41666c-1.125 0-2.04167-0.91667-2.04167-2.04167v-5.45833h5.45833c1.125 0 2.04167 0.91667 2.04167 2.04167v3.41666z" fill="#6FCDF6"/> <path d="M16 2.5c0.83333 0 1.5 0.66667 1.5 1.5v1.875c0 0.83333-0.66667 1.5-1.5 1.5h-1.875c-0.83333 0-1.5-0.66667-1.5-1.5v-1.875c0-0.83333 0.66667-1.5 1.5-1.5h1.875z" fill="#00B1FF"/> <path d="M5.875 12.625c0.83333 0 1.5 0.66667 1.5 1.5v1.875c0 0.83333-0.66667 1.5-1.5 1.5h-1.875c-0.83333 0-1.5-0.66667-1.5-1.5v-1.875c0-0.83333 0.66667-1.5 1.5-1.5l1.875 0z" fill="#00B1FF"/> <path d="M10 10h-5.45833c-1.125 0-2.04167-0.91667-2.04167-2.04167v-3.41666c0-1.125 0.91667-2.04167 2.04167-2.04167h3.41666c1.125 0 2.04167 0.91667 2.04167 2.04167v5.45833z" fill="#009EEA"/>']
            })
        }
    }),
    iXqZ: (function(a, b) {
        b.a = {
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
    HaJQ: (function(a, b) {
        b.a = {
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
    XYdv: (function(a, b) {
        b.a = {
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
    u5gP: (function(a, b) {
        b.a = {
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
                    x: -.247925,
                    y: 488e-6,
                    overflows: !1
                },
                composite: {
                    x: -.247925,
                    y: 488e-6,
                    overflows: !1
                }
            }
        }
    }),
    GSs1: (function(a, b) {
        b.a = {
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
    DDm4: (function(a, b) {
        b.a = {
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
    xESS: (function(a, b) {
        b.a = {
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
    tTop: (function(a, b) {
        b.a = {
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
    rGur: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "target-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-target-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 122e-6,
                    y: -977e-6,
                    overflows: !1
                },
                composite: {
                    x: 122e-6,
                    y: -977e-6,
                    overflows: !1
                }
            }
        }
    }),
    JVQE: (function(a, b) {
        b.a = {
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
    KYbG: (function(a, b) {
        b.a = {
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
    g5D2: (function(a, b) {
        b.a = {
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
    jKO4: (function(a, b) {
        b.a = {
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
    QRHG: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M9.825 5.8c0.1625-0.2375 0.4875-0.3 0.725-0.1375 0.25 0.1625 0.3125 0.4875 0.15 0.725l-2.7125 4.05c-0.275 0.4125-0.875 0.4625-1.2125 0.0875l-1.425-1.5125c-0.2-0.2125-0.1875-0.55 0.025-0.75 0.2125-0.2 0.55-0.1875 0.75 0.025l1.1875 1.275 2.5125-3.7625z" fill="currentColor"/> <path d="M8 1.8125c3.575 0 6.525 2.7375 6.525 6.1875 0 3.45-2.95 6.1875-6.525 6.1875-1.2125 0-2.2375-0.3625-3.25-0.825l-1.7625 0.45c-0.475 0.125-0.9125-0.3-0.8125-0.775l0.375-1.675c-0.5125-1-1.075-1.975-1.075-3.3625 0-3.45 2.95-6.1875 6.525-6.1875zM8 2.8625c-3.05 0-5.475 2.325-5.475 5.1375 0 1.1375 0.45 1.8875 1.025 3.0125 0.075 0.1375 0.0875 0.2875 0.0625 0.4375l-0.275 1.1875 1.2875-0.325 0.1125-0.025c0.075 0 0.15 0 0.225 0.025l0.1125 0.0375 0.3625 0.175c0.85 0.375 1.65 0.6125 2.5625 0.6125 3.05 0 5.475-2.325 5.475-5.1375 0-2.8125-2.425-5.1375-5.475-5.1375z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    w3I9: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M8 1.6375c3.5125 0 6.3625 2.85 6.3625 6.3625 0 3.5125-2.85 6.3625-6.3625 6.3625-3.025 0-5.5625-2.125-6.2-4.95-0.0625-0.2875 0.1125-0.5625 0.4-0.625 0.275-0.0625 0.5625 0.1125 0.625 0.3875 0.5375 2.3625 2.65 4.1375 5.175 4.1375 2.925 0 5.3125-2.3875 5.3125-5.3125 0-2.9375-2.3875-5.3125-5.3125-5.3125-2.0375 0-3.8125 1.15-4.7 2.8375h1.4625c0.2875 0 0.525 0.2375 0.525 0.525 0 0.3-0.2375 0.525-0.525 0.525h-2.6c-0.2875 0-0.525-0.225-0.525-0.525v-2.9125c0-0.2875 0.2375-0.525 0.525-0.525 0.3 0 0.525 0.2375 0.525 0.525v1.3625c1.1375-1.725 3.0875-2.8625 5.3125-2.8625z" fill="currentColor"/> <path d="M8 4.2375c0.2875 0 0.525 0.2375 0.525 0.525v3.2375c0 0.1375-0.05 0.275-0.15 0.375l-1.625 1.6125c-0.2 0.2125-0.5375 0.2125-0.7375 0-0.2125-0.2-0.2125-0.5375 0-0.7375l1.4625-1.4625v-3.025c0-0.2875 0.2375-0.525 0.525-0.525z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    Qcii: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M11.7625 10.1125c0.3 0 0.525 0.2375 0.525 0.525v1.475h1.475c0.3 0 0.525 0.2375 0.525 0.525 0 0.2875-0.225 0.525-0.525 0.525h-1.475v1.475c0 0.2875-0.225 0.525-0.525 0.525-0.2875 0-0.525-0.2375-0.525-0.525v-1.475h-1.475c-0.2875 0-0.525-0.2375-0.525-0.525 0-0.2875 0.2375-0.525 0.525-0.525h1.475v-1.475c0-0.2875 0.2375-0.525 0.525-0.525z" fill="currentColor"/> <path d="M9.5 1.8125c0.675 0 1.3125 0.2625 1.7875 0.7375l1.5 1.4875c0.475 0.475 0.7375 1.125 0.7375 1.7875v1.6625c0 0.3-0.2375 0.525-0.525 0.525-0.2875 0-0.525-0.225-0.525-0.525v-0.625h-1.8125c-1.025 0-1.85-0.8375-1.85-1.8625v-2.1375h-3.8125c-0.8125 0-1.475 0.6625-1.475 1.475v7.325c0 0.8125 0.6625 1.475 1.475 1.475h1.5c0.2875 0 0.525 0.2375 0.525 0.525 0 0.3-0.2375 0.525-0.525 0.525h-1.5c-1.4 0-2.525-1.125-2.525-2.525v-7.325c0-1.4 1.125-2.525 2.525-2.525h4.5zM9.8625 5c0 0.45 0.3625 0.8125 0.8 0.8125h1.8125c-0.0125-0.3875-0.1625-0.75-0.4375-1.025l-1.4875-1.5c-0.1875-0.1875-0.4375-0.325-0.6875-0.3875v2.1z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    Bdce: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M8 1.475c0.2875 0 0.525 0.2375 0.525 0.525 0 0.2875-0.2375 0.525-0.525 0.525-3.025 0-5.475 2.45-5.475 5.475 0 3.025 2.45 5.475 5.475 5.475 3.025 0 5.475-2.45 5.475-5.475 0-0.2875 0.2375-0.525 0.525-0.525 0.2875 0 0.525 0.2375 0.525 0.525 0 3.6-2.925 6.525-6.525 6.525-3.6 0-6.525-2.925-6.525-6.525 0-3.6 2.925-6.525 6.525-6.525z" fill="currentColor"/> <path d="M9.85 9.3125c0.15-0.25 0.475-0.3375 0.725-0.1875 0.25 0.15 0.3375 0.4625 0.1875 0.7125-0.55 0.95-1.575 1.6-2.7625 1.6-1.1875 0-2.2125-0.65-2.7625-1.6-0.15-0.25-0.0625-0.5625 0.1875-0.7125 0.25-0.15 0.575-0.0625 0.725 0.1875 0.3625 0.65 1.0625 1.075 1.85 1.075 0.7875 0 1.4875-0.425 1.85-1.075z" fill="currentColor"/> <path d="M6.3 5.3c0.275 0.05 0.45 0.275 0.525 0.4125 0.1 0.1875 0.15 0.4125 0.15 0.625 0 0.2125-0.05 0.425-0.15 0.6125-0.0875 0.1625-0.3 0.425-0.6625 0.425-0.3625 0-0.575-0.2625-0.6625-0.425-0.0875-0.1875-0.1375-0.4-0.1375-0.6125 0-0.2125 0.05-0.4375 0.1375-0.625 0.0875-0.1625 0.3-0.425 0.6625-0.425l0.1375 0.0125z" fill="currentColor"/> <path d="M9.9625 5.3c0.2875 0.05 0.45 0.275 0.5375 0.4125 0.0875 0.1875 0.1375 0.4125 0.1375 0.625 0 0.2125-0.05 0.425-0.1375 0.6125-0.0875 0.1625-0.3 0.425-0.6625 0.425-0.3625 0-0.575-0.2625-0.6625-0.425-0.1-0.1875-0.15-0.4-0.15-0.6125 0-0.2125 0.05-0.4375 0.15-0.625 0.0875-0.1625 0.3-0.425 0.6625-0.425l0.125 0.0125z" fill="currentColor"/> <path d="M12.6625 0.8125c0.3 0 0.525 0.2375 0.525 0.525v1.475h1.475c0.3 0 0.525 0.2375 0.525 0.525 0 0.2875-0.225 0.525-0.525 0.525h-1.475v1.475c0 0.2875-0.225 0.525-0.525 0.525-0.2875 0-0.525-0.2375-0.525-0.525v-1.475h-1.475c-0.2875 0-0.525-0.2375-0.525-0.525 0-0.2875 0.2375-0.525 0.525-0.525h1.475v-1.475c0-0.2875 0.2375-0.525 0.525-0.525z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    qdO7: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
                    height: 13.519531
                },
                visualBounds: {
                    x: 1.691895,
                    y: 1.240234,
                    width: 12.617065,
                    height: 13.519531
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
                    height: 13.519531
                },
                center: {
                    x: 8.000428,
                    y: 8
                },
                insets: {
                    top: 1.240234,
                    right: 1.69104,
                    bottom: 1.240235,
                    left: 1.691895
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.000428,
                        y: 8
                    },
                    foreground: {
                        x: 8.000428,
                        y: 8
                    }
                }
            },
            capabilities: ["icon"],
            body: ['<path d="M8 5.275c1.5125 0 2.725 1.225 2.725 2.7375 0 1.5-1.2125 2.725-2.725 2.725-1.5 0-2.725-1.225-2.725-2.725 0-1.5125 1.225-2.7375 2.725-2.7375zM8 6.325c-0.925 0-1.675 0.75-1.675 1.6875 0 0.925 0.75 1.675 1.675 1.675 0.925 0 1.675-0.75 1.675-1.675 0-0.9375-0.75-1.6875-1.675-1.6875z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M8.6 1.2375c0.475 0 0.925 0.2625 1.1625 0.675 0.2125 0.375 0.525 0.925 0.7875 1.375 0.05 0.0875 0.15 0.1375 0.25 0.1375l1.575 0c0.4875 0 0.925 0.2625 1.1625 0.675l0.5875 1.0125c0.2375 0.4125 0.2375 0.925 0.0125 1.3375l-0.8875 1.55 0.8875 1.55c0.225 0.4125 0.225 0.925-0.0125 1.3375l-0.5875 1.0125c-0.2375 0.4125-0.675 0.675-1.1625 0.675l-1.575 0c-0.1125 0-0.2 0.05-0.25 0.1375-0.2625 0.45-0.575 1-0.7875 1.375-0.2375 0.4125-0.6875 0.675-1.1625 0.675-0.425 0-0.7625 0-1.2 0-0.475 0-0.9125-0.2625-1.1625-0.675-0.2125-0.375-0.525-0.925-0.7875-1.375-0.05-0.0875-0.15-0.1375-0.25-0.1375h-1.575c-0.4875 0-0.925-0.2625-1.1625-0.675l-0.5875-1.0125c-0.2375-0.4125-0.2375-0.925-0.0125-1.3375l0.8875-1.55-0.8875-1.55c-0.225-0.4125-0.225-0.925 0.0125-1.3375l0.5875-1.0125c0.2375-0.4125 0.675-0.675 1.1625-0.675h1.575c0.1 0 0.2-0.05 0.25-0.1375 0.2625-0.45 0.575-1 0.7875-1.375 0.2375-0.4125 0.6875-0.675 1.1625-0.675 0.4375 0 0.775 0 1.2 0zM7.4 2.2875c-0.1 0-0.2 0.0625-0.25 0.15-0.2125 0.375-0.525 0.925-0.7875 1.375-0.2375 0.4125-0.675 0.6625-1.1625 0.6625h-1.575c-0.1125 0-0.2 0.0625-0.25 0.15l-0.6 1.0125c-0.05 0.0875-0.05 0.2 0 0.3l1.0375 1.8c0.025 0.0625 0.05 0.125 0.0625 0.2l0 0.0625c0 0.0625-0.0125 0.1375-0.0375 0.2l-0.025 0.0625-1.0375 1.8c-0.05 0.1-0.05 0.2 0 0.3l0.6 1.0125c0.05 0.0875 0.1375 0.15 0.25 0.15h1.575c0.475 0 0.925 0.25 1.1625 0.6625 0.2625 0.45 0.575 1 0.7875 1.375 0.05 0.0875 0.15 0.15 0.25 0.15 0.4375 0 0.775 0 1.2 0 0.1 0 0.2-0.0625 0.25-0.15 0.2125-0.375 0.525-0.925 0.7875-1.375 0.2375-0.4125 0.6875-0.6625 1.1625-0.6625h1.575c0.1125 0 0.2-0.0625 0.2625-0.15l0.5875-1.0125c0.05-0.1 0.05-0.2 0-0.3l-1.0375-1.8c-0.0375-0.0875-0.0625-0.175-0.0625-0.2625 0-0.0875 0.025-0.1875 0.075-0.2625l1.025-1.8c0.05-0.1 0.05-0.2 0-0.3l-0.5875-1.0125c-0.0625-0.0875-0.15-0.15-0.2625-0.15l-1.575 0c-0.475 0-0.925-0.25-1.1625-0.6625-0.2625-0.45-0.575-1.0125-0.7875-1.375-0.05-0.0875-0.15-0.15-0.25-0.15-0.425 0-0.7625 0-1.2 0z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    Gxv1: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M6 6.103125c0.496875 0 0.9 0.403125 0.9 0.9 0 0.346875-0.20625 0.65625-0.496875 0.80625v0.69375c0 0.215625-0.178125 0.39375-0.403125 0.39375-0.225 0-0.403125-0.178125-0.403125-0.39375v-0.69375c-0.290625-0.15-0.496875-0.459375-0.496875-0.80625 0-0.496875 0.403125-0.9 0.9-0.9z" fill="currentColor"/> <path d="M6 1.096875c1.603125 0 2.896875 1.303125 2.896875 2.90625v0.159375c0.8625 0.225 1.5 1.003125 1.5 1.940625v2.79375c0 1.10625-0.890625 2.00625-1.996875 2.00625h-4.8c-1.10625 0-1.996875-0.9-1.996875-2.00625v-2.79375c0-0.9375 0.6375-1.715625 1.5-1.940625v-0.159375c0-1.603125 1.29375-2.90625 2.896875-2.90625zM3.6 4.903125c-0.665625 0-1.2 0.534375-1.2 1.2v2.79375c0 0.665625 0.534375 1.2 1.2 1.2h4.8c0.665625 0 1.2-0.534375 1.2-1.2v-2.79375c0-0.665625-0.534375-1.2-1.2-1.2h-4.8zM6 1.903125c-1.1625 0-2.1 0.9375-2.1 2.1v0.09375h4.2v-0.09375c0-1.1625-0.9375-2.1-2.1-2.1z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    wcVJ: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M7.325 1.9125c2.9625 0 5.3625 2.4 5.3625 5.35 0 1.3125-0.4625 2.5125-1.25 3.4375l2.6 2.6c0.2125 0.2 0.2125 0.5375 0 0.7375-0.2 0.2125-0.5375 0.2125-0.7375 0l-2.6-2.6c-0.925 0.7375-2.1 1.1875-3.375 1.1875-2.95 0-5.35-2.4-5.35-5.3625 0-2.95 2.4-5.35 5.35-5.35zM7.325 2.9625c-2.375 0-4.3 1.925-4.3 4.3 0 2.3875 1.925 4.3125 4.3 4.3125 2.3875 0 4.3125-1.925 4.3125-4.3125 0-2.375-1.925-4.3-4.3125-4.3z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    Bx48: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M9.4125 2.55c1.15-1.0375 2.875-0.975 3.925 0.0875 1.125 1.0875 1.1625 2.9 0.0125 4.05l-5.6 5.5875c-0.5625 0.6-1.3 1.0125-2.0625 1.1875h0l-3.0875 0.7125 0 0c-0.1375 0.025-0.4 0.0625-0.6125-0.15-0.2125-0.225-0.1875-0.4875-0.1625-0.625l0.7125-3.075c0.175-0.8 0.5875-1.5 1.15-2.0625l5.6125-5.6125 0.1125-0.1zM4.425 9.0125c-0.425 0.425-0.725 0.95-0.8625 1.5375l0 0-0.5625 2.4625 2.45-0.575c0.575-0.125 1.125-0.425 1.55-0.875l0-0.0125 4.525-4.525-2.55-2.55-4.55 4.5375zM12.6 3.3875c-0.675-0.7-1.825-0.725-2.55 0l0 0-0.3375 0.3375 2.55 2.5625 0.3375-0.3375c0.7375-0.7375 0.7125-1.8875 0.0125-2.55l-0.0125-0.0125z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    sKZa: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M4.021875 6.440625c1.95 0.009375 3.553125 1.5 3.7125 3.403125 0.01875 0.225-0.140625 0.4125-0.365625 0.43125-0.215625 0.01875-0.4125-0.140625-0.43125-0.365625-0.13125-1.490625-1.3875-2.6625-2.915625-2.6625-1.528125 0-2.784375 1.171875-2.90625 2.6625-0.01875 0.225-0.215625 0.384375-0.440625 0.365625-0.215625-0.01875-0.375-0.20625-0.35625-0.43125 0.159375-1.903125 1.7625-3.403125 3.703125-3.403125z" fill="currentColor"/> <path d="M8.49375 6.478125c1.659375 0 3.01875 1.265625 3.159375 2.8875 0.01875 0.225-0.140625 0.4125-0.35625 0.43125-0.225 0.01875-0.421875-0.140625-0.440625-0.365625-0.103125-1.209375-1.115625-2.15625-2.3625-2.15625-0.065625 0-0.13125 0-0.1875 0.009375-0.225 0.01875-0.421875-0.15-0.43125-0.365625-0.01875-0.225 0.140625-0.4125 0.35625-0.43125 0.09375-0.009375 0.178125-0.009375 0.2625-0.009375z" fill="currentColor"/> <path d="M4.021875 1.36875c1.171875 0 2.11875 0.946875 2.11875 2.11875 0 1.1625-0.946875 2.109375-2.11875 2.109375-1.1625 0-2.109375-0.946875-2.109375-2.109375 0-1.171875 0.946875-2.11875 2.109375-2.11875zM4.021875 2.165625c-0.721875 0-1.3125 0.590625-1.3125 1.321875 0 0.721875 0.590625 1.3125 1.3125 1.3125 0.73125 0 1.321875-0.590625 1.321875-1.3125 0-0.73125-0.590625-1.321875-1.321875-1.321875z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M9.01875 1.809375c1.003125 0 1.828125 0.825 1.828125 1.828125 0 1.0125-0.825 1.828125-1.828125 1.828125-1.0125 0-1.828125-0.815625-1.828125-1.828125 0-1.003125 0.815625-1.828125 1.828125-1.828125zM9.01875 2.615625c-0.571875 0-1.03125 0.459375-1.03125 1.021875 0 0.571875 0.459375 1.03125 1.03125 1.03125 0.5625 0 1.021875-0.459375 1.021875-1.03125 0-0.5625-0.459375-1.021875-1.021875-1.021875z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    tE9X: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M8 8.65c2.0625 0 3.7625 1.5875 3.9375 3.6125 0.025 0.2875-0.1875 0.55-0.475 0.575-0.2875 0.025-0.5375-0.2-0.5625-0.4875-0.1375-1.475-1.3875-2.65-2.9-2.65-1.5125 0-2.7625 1.175-2.8875 2.65-0.025 0.2875-0.2875 0.5125-0.575 0.4875-0.2875-0.025-0.5-0.2875-0.475-0.575 0.175-2.025 1.875-3.6125 3.9375-3.6125z" fill="currentColor"/> <path d="M3.3625 8.875c0.2875-0.0125 0.5375 0.2 0.55 0.4875 0.025 0.2875-0.2 0.5375-0.4875 0.5625-1.15 0.075-2.0625 0.975-2.1625 2.125-0.025 0.2875-0.2875 0.5-0.575 0.475-0.2875-0.025-0.5-0.275-0.475-0.575 0.1375-1.65 1.475-2.9625 3.15-3.075z" fill="currentColor"/> <path d="M12.6375 8.875c1.6625 0.1125 3 1.425 3.15 3.075 0.025 0.3-0.2 0.55-0.4875 0.575-0.2875 0.025-0.5375-0.1875-0.5625-0.475-0.1-1.15-1.025-2.05-2.175-2.125-0.2875-0.025-0.5-0.275-0.4875-0.5625 0.025-0.2875 0.275-0.5 0.5625-0.4875z" fill="currentColor"/> <path d="M2.675 4.3125c1.025 0 1.85 0.825 1.85 1.85 0 1.025-0.825 1.8625-1.85 1.8625-1.025 0-1.8625-0.8375-1.8625-1.8625 0-1.025 0.8375-1.85 1.8625-1.85zM2.675 5.3625c-0.45 0-0.8125 0.3625-0.8125 0.8 0 0.45 0.3625 0.8125 0.8125 0.8125 0.4375 0 0.8-0.3625 0.8-0.8125 0-0.4375-0.3625-0.8-0.8-0.8z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M13.325 4.3125c1.025 0 1.8625 0.825 1.8625 1.85 0 1.025-0.8375 1.8625-1.8625 1.8625-1.025 0-1.8625-0.8375-1.8625-1.8625 0-1.025 0.8375-1.85 1.8625-1.85zM13.325 5.3625c-0.45 0-0.8125 0.3625-0.8125 0.8 0 0.45 0.3625 0.8125 0.8125 0.8125 0.45 0 0.8125-0.3625 0.8125-0.8125 0-0.4375-0.3625-0.8-0.8125-0.8z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M8 3.275c1.2625 0 2.3 1.0375 2.3 2.3 0 1.2625-1.0375 2.2875-2.3 2.2875-1.2625 0-2.3-1.025-2.3-2.2875 0-1.2625 1.0375-2.3 2.3-2.3zM8 4.325c-0.6875 0-1.2375 0.5625-1.2375 1.25 0 0.6875 0.55 1.2375 1.2375 1.2375 0.6875 0 1.25-0.55 1.25-1.2375 0-0.6875-0.5625-1.25-1.25-1.25z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    JyfQ: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M9.85 4.275c0.0875 0 0.225 0.05 0.2875 0.175l0.0125 0.0625 0.0125 0 0 0.0375 0.0125 0.1125 0.05 0.2c0.1 0.45 0.2625 0.7875 0.5125 1.0375 0.2875 0.3 0.7125 0.5 1.3125 0.575 0.1125 0.0125 0.175 0.0625 0.225 0.1375 0.0375 0.0625 0.05 0.125 0.05 0.175 0 0.05-0.0125 0.1125-0.05 0.175-0.05 0.0625-0.1125 0.125-0.225 0.1375-0.5875 0.075-1.0125 0.275-1.3125 0.575-0.3 0.3-0.5 0.725-0.575 1.3125-0.0125 0.1125-0.0625 0.175-0.1375 0.2125-0.0625 0.05-0.125 0.0625-0.175 0.0625-0.05 0-0.1125-0.0125-0.175-0.0625-0.0625-0.0375-0.125-0.1-0.1375-0.2125-0.075-0.6-0.275-1.025-0.575-1.3125-0.3-0.3-0.7375-0.4875-1.35-0.575-0.2-0.025-0.275-0.2-0.2625-0.3125 0-0.1125 0.0625-0.2875 0.2625-0.3125l0.1125-0.0125c0.5625-0.1 0.9625-0.2875 1.2375-0.5625 0.3-0.3 0.4875-0.7375 0.575-1.35v0l0.0125-0.0375 0 0c0.0375-0.175 0.2-0.2375 0.3-0.2375z" fill="currentColor"/> <path d="M11.8625 2.175c1.45 0 2.625 1.175 2.625 2.625v6.4c0 1.45-1.175 2.625-2.625 2.625h-7.725c-1.45 0-2.625-1.175-2.625-2.625v-6.4c0-1.45 1.175-2.625 2.625-2.625h7.725zM5.7 9.275c-0.4-0.3875-1.0375-0.3875-1.425 0l-1.7875 1.7875v0.1375c0 0.9125 0.7375 1.6375 1.65 1.6375h5.125l-3.5625-3.5625zM4.1375 3.1625c-0.9125 0-1.65 0.725-1.65 1.6375v4.875l1.0875-1.0875c0.775-0.7875 2.0375-0.775 2.8125 0l4.2625 4.25h1.2125c0.9125 0 1.65-0.725 1.65-1.6375v-6.4c0-0.9125-0.7375-1.6375-1.65-1.6375h-7.725z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    JeF3: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
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
            body: ['<path d="M7.7125 7.8c0.2875-0.025 0.55 0.1875 0.575 0.475 0.025 0.2875-0.1875 0.5375-0.475 0.5625l-2.6875 0.2625c-0.2875 0.025-0.5375-0.1875-0.575-0.475-0.025-0.2875 0.1875-0.55 0.475-0.575l2.6875-0.25z" fill="currentColor"/> <path d="M9.025 4.8125c0.2875-0.025 0.55 0.1875 0.575 0.475 0.025 0.2875-0.1875 0.5375-0.475 0.5625l-4.4125 0.425c-0.2875 0.025-0.5375-0.175-0.575-0.475-0.025-0.2875 0.1875-0.5375 0.475-0.5625l4.4125-0.425z" fill="currentColor"/> <path d="M9.1875 1.525c1.3125-0.125 2.475 0.85 2.5875 2.175l0.0375 0.4625 0.6375 0.05c1.3125 0.1125 2.2875 1.275 2.175 2.5875l-0.4875 5.4875c-0.1125 1.3125-1.275 2.2875-2.5875 2.175l-5.475-0.4875c-1.0375-0.0875-1.85-0.8125-2.1-1.7625-1.0375-0.1875-1.8625-1.0375-1.9625-2.1375l-0.475-5.4875c-0.125-1.3125 0.85-2.475 2.175-2.5875l5.475-0.475zM12.2625 9.175c0.1125 1.3125-0.8625 2.475-2.175 2.5875l-5 0.4375c0.2 0.4 0.6 0.6875 1.075 0.7375l5.475 0.475c0.7375 0.0625 1.3875-0.4875 1.4625-1.225l0.475-5.475c0.0625-0.7375-0.4875-1.3875-1.225-1.45l-0.4375-0.0375 0.35 3.95zM9.275 2.5625l-5.475 0.4875c-0.7375 0.0625-1.2875 0.7125-1.225 1.45l0.4875 5.475c0.0625 0.7375 0.7125 1.2875 1.45 1.225l5.475-0.4875c0.7375-0.0625 1.2875-0.7125 1.225-1.45l-0.475-5.475c-0.075-0.7375-0.725-1.2875-1.4625-1.225z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    }),
    lVL6: (function(a, b, c) {
        let d = (0, (c("tF54")).a)({
            name: "web-browser-cursor-light-16",
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
                    x: 1.141113,
                    y: 2.140625,
                    width: 13.988113,
                    height: 13.01416
                },
                visualBounds: {
                    x: 1.141113,
                    y: 2.140625,
                    width: 13.988113,
                    height: 13.01416
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.141113,
                    y: 2.140625,
                    width: 13.988113,
                    height: 13.01416
                },
                center: {
                    x: 8.13517,
                    y: 8.647705
                },
                insets: {
                    top: 2.140625,
                    right: .870774,
                    bottom: .845215,
                    left: 1.141113
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.13517,
                        y: 8.647705
                    },
                    foreground: {
                        x: 8.13517,
                        y: 8.647705
                    }
                }
            },
            capabilities: ["icon"],
            body: ['<path d="M5.5875 5.1875c0 0.475-0.3875 0.8625-0.8625 0.8625-0.4875 0-0.875-0.3875-0.875-0.8625 0-0.4875 0.3875-0.875 0.875-0.875 0.475 0 0.8625 0.3875 0.8625 0.875z" fill="currentColor"/> <path d="M13.8125 7.425v-1.025c0-0.6625 0-1.125-0.0375-1.4875-0.025-0.3625-0.075-0.575-0.1625-0.7375-0.175-0.3375-0.45-0.6125-0.7875-0.7875-0.1625-0.0875-0.375-0.1375-0.7375-0.1625-0.3625-0.0375-0.825-0.0375-1.4875-0.0375h-5.2c-0.6625 0-1.125 0-1.4875 0.0375-0.3625 0.025-0.575 0.075-0.7375 0.1625-0.3375 0.175-0.6125 0.45-0.7875 0.7875-0.0875 0.1625-0.1375 0.375-0.1625 0.7375-0.0375 0.3625-0.0375 0.825-0.0375 1.4875v3.2c0 0.6625 0 1.125 0.0375 1.4875 0.025 0.3625 0.075 0.575 0.1625 0.7375 0.175 0.3375 0.45 0.6125 0.7875 0.7875 0.1625 0.075 0.375 0.1375 0.7375 0.1625 0.3625 0.0375 0.825 0.0375 1.4875 0.0375h1.6c0.2875 0 0.525 0.225 0.525 0.525 0 0.2875-0.2375 0.525-0.525 0.525h-1.6c-0.65 0-1.1625 0-1.575-0.0375-0.425-0.0375-0.7875-0.1125-1.125-0.275-0.5375-0.275-0.975-0.7125-1.25-1.25-0.1625-0.3375-0.2375-0.7-0.275-1.125-0.0375-0.4125-0.0375-0.925-0.0375-1.575v-3.2c0-0.65 0-1.1625 0.0375-1.575 0.0375-0.425 0.1125-0.7875 0.275-1.125 0.275-0.5375 0.7125-0.975 1.25-1.25 0.3375-0.175 0.7-0.2375 1.125-0.275 0.4125-0.0375 0.925-0.0375 1.575-0.0375h5.2c0.65 0 1.1625 0 1.575 0.0375 0.425 0.0375 0.7875 0.1 1.125 0.275 0.5375 0.275 0.975 0.7125 1.25 1.25 0.1625 0.3375 0.2375 0.7 0.275 1.125 0.0375 0.4125 0.0375 0.925 0.0375 1.575v1.025c0 0.2875-0.2375 0.5125-0.525 0.5125-0.3 0-0.525-0.225-0.525-0.5125z" fill="currentColor"/> <path d="M11.5125 4.6625c0.3 0 0.525 0.225 0.525 0.525 0 0.2875-0.225 0.525-0.525 0.525h-3.825c-0.2875 0-0.525-0.2375-0.525-0.525 0-0.3 0.2375-0.525 0.525-0.525h3.825z" fill="currentColor"/> <path d="M7.8625 9.3125c-0.2875-0.9 0.575-1.75 1.475-1.4375l5.025 1.75c0.975 0.3375 1.0375 1.7 0.0875 2.125l-1.825 0.825c-0.025 0.0125-0.0375 0.025-0.05 0.05l-0.95 1.9c-0.45 0.9125-1.8 0.8125-2.1125-0.1625l-1.65-5.05zM8.9875 8.8625c-0.075-0.025-0.15 0.05-0.125 0.125l1.65 5.05c0.0125 0.025 0.0125 0.0375 0.025 0.05 0.0125 0.0125 0.0375 0.0125 0.0625 0.0125 0.0125 0.0125 0.0375 0 0.05 0 0.0125-0.0125 0.025-0.025 0.0375-0.05l0.95-1.9c0.125-0.2375 0.3125-0.425 0.55-0.5375l1.8375-0.8125c0.025-0.0125 0.0375-0.025 0.0375-0.0375 0.0125-0.0125 0.0125-0.0375 0.0125-0.0625 0-0.025 0-0.0375-0.0125-0.05-0.0125-0.0125-0.025-0.025-0.05-0.0375l-5.025-1.75z" fill="currentColor"/>']
        });
        c.d(b, {}, {
            a: d
        })
    })
};
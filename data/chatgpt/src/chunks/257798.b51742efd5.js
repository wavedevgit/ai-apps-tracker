/*! LICENSE: 257798.b51742efd5.js.LICENSE.txt */
export const __rspack_esm_ids = [257798];
export const __webpack_modules__ = {
    oHlC: (function(e, r, t) {
        var n;
        t.d(r, {}, {
            a: function() {
                return n || t.nc
            }
        })
    }),
    AM8p: (function(e, r, t) {
        e = t.nmd(e),
            function(n) {
                var a = e && e.exports == r && e,
                    o = "object" == typeof t.g && t.g;
                (o.global === o || o.window === o) && (n = o);
                var s = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                    i = /[\x01-\x7F]/g,
                    l = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
                    c = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g,
                    u = {
                        "­": "shy",
                        "‌": "zwnj",
                        "‍": "zwj",
                        "‎": "lrm",
                        "⁣": "ic",
                        "⁢": "it",
                        "⁡": "af",
                        "‏": "rlm",
                        "​": "ZeroWidthSpace",
                        "⁠": "NoBreak",
                        "̑": "DownBreve",
                        "⃛": "tdot",
                        "⃜": "DotDot",
                        "	": "Tab",
                        "\n": "NewLine",
                        " ": "puncsp",
                        " ": "MediumSpace",
                        " ": "thinsp",
                        " ": "hairsp",
                        " ": "emsp13",
                        " ": "ensp",
                        " ": "emsp14",
                        " ": "emsp",
                        " ": "numsp",
                        " ": "nbsp",
                        "  ": "ThickSpace",
                        "‾": "oline",
                        _: "lowbar",
                        "‐": "dash",
                        "–": "ndash",
                        "—": "mdash",
                        "―": "horbar",
                        ",": "comma",
                        ";": "semi",
                        "⁏": "bsemi",
                        ":": "colon",
                        "⩴": "Colone",
                        "!": "excl",
                        "¡": "iexcl",
                        "?": "quest",
                        "¿": "iquest",
                        ".": "period",
                        "‥": "nldr",
                        "…": "mldr",
                        "·": "middot",
                        "'": "apos",
                        "‘": "lsquo",
                        "’": "rsquo",
                        "‚": "sbquo",
                        "‹": "lsaquo",
                        "›": "rsaquo",
                        '"': "quot",
                        "“": "ldquo",
                        "”": "rdquo",
                        "„": "bdquo",
                        "«": "laquo",
                        "»": "raquo",
                        "(": "lpar",
                        ")": "rpar",
                        "[": "lsqb",
                        "]": "rsqb",
                        "{": "lcub",
                        "}": "rcub",
                        "⌈": "lceil",
                        "⌉": "rceil",
                        "⌊": "lfloor",
                        "⌋": "rfloor",
                        "⦅": "lopar",
                        "⦆": "ropar",
                        "⦋": "lbrke",
                        "⦌": "rbrke",
                        "⦍": "lbrkslu",
                        "⦎": "rbrksld",
                        "⦏": "lbrksld",
                        "⦐": "rbrkslu",
                        "⦑": "langd",
                        "⦒": "rangd",
                        "⦓": "lparlt",
                        "⦔": "rpargt",
                        "⦕": "gtlPar",
                        "⦖": "ltrPar",
                        "⟦": "lobrk",
                        "⟧": "robrk",
                        "⟨": "lang",
                        "⟩": "rang",
                        "⟪": "Lang",
                        "⟫": "Rang",
                        "⟬": "loang",
                        "⟭": "roang",
                        "❲": "lbbrk",
                        "❳": "rbbrk",
                        "‖": "Vert",
                        "§": "sect",
                        "¶": "para",
                        "@": "commat",
                        "*": "ast",
                        "/": "sol",
                        undefined: null,
                        "&": "amp",
                        "#": "num",
                        "%": "percnt",
                        "‰": "permil",
                        "‱": "pertenk",
                        "†": "dagger",
                        "‡": "Dagger",
                        "•": "bull",
                        "⁃": "hybull",
                        "′": "prime",
                        "″": "Prime",
                        "‴": "tprime",
                        "⁗": "qprime",
                        "‵": "bprime",
                        "⁁": "caret",
                        "`": "grave",
                        "´": "acute",
                        "˜": "tilde",
                        "^": "Hat",
                        "¯": "macr",
                        "˘": "breve",
                        "˙": "dot",
                        "¨": "die",
                        "˚": "ring",
                        "˝": "dblac",
                        "¸": "cedil",
                        "˛": "ogon",
                        ˆ: "circ",
                        ˇ: "caron",
                        "°": "deg",
                        "©": "copy",
                        "®": "reg",
                        "℗": "copysr",
                        ℘: "wp",
                        "℞": "rx",
                        "℧": "mho",
                        "℩": "iiota",
                        "←": "larr",
                        "↚": "nlarr",
                        "→": "rarr",
                        "↛": "nrarr",
                        "↑": "uarr",
                        "↓": "darr",
                        "↔": "harr",
                        "↮": "nharr",
                        "↕": "varr",
                        "↖": "nwarr",
                        "↗": "nearr",
                        "↘": "searr",
                        "↙": "swarr",
                        "↝": "rarrw",
                        "↝̸": "nrarrw",
                        "↞": "Larr",
                        "↟": "Uarr",
                        "↠": "Rarr",
                        "↡": "Darr",
                        "↢": "larrtl",
                        "↣": "rarrtl",
                        "↤": "mapstoleft",
                        "↥": "mapstoup",
                        "↦": "map",
                        "↧": "mapstodown",
                        "↩": "larrhk",
                        "↪": "rarrhk",
                        "↫": "larrlp",
                        "↬": "rarrlp",
                        "↭": "harrw",
                        "↰": "lsh",
                        "↱": "rsh",
                        "↲": "ldsh",
                        "↳": "rdsh",
                        "↵": "crarr",
                        "↶": "cularr",
                        "↷": "curarr",
                        "↺": "olarr",
                        "↻": "orarr",
                        "↼": "lharu",
                        "↽": "lhard",
                        "↾": "uharr",
                        "↿": "uharl",
                        "⇀": "rharu",
                        "⇁": "rhard",
                        "⇂": "dharr",
                        "⇃": "dharl",
                        "⇄": "rlarr",
                        "⇅": "udarr",
                        "⇆": "lrarr",
                        "⇇": "llarr",
                        "⇈": "uuarr",
                        "⇉": "rrarr",
                        "⇊": "ddarr",
                        "⇋": "lrhar",
                        "⇌": "rlhar",
                        "⇐": "lArr",
                        "⇍": "nlArr",
                        "⇑": "uArr",
                        "⇒": "rArr",
                        "⇏": "nrArr",
                        "⇓": "dArr",
                        "⇔": "iff",
                        "⇎": "nhArr",
                        "⇕": "vArr",
                        "⇖": "nwArr",
                        "⇗": "neArr",
                        "⇘": "seArr",
                        "⇙": "swArr",
                        "⇚": "lAarr",
                        "⇛": "rAarr",
                        "⇝": "zigrarr",
                        "⇤": "larrb",
                        "⇥": "rarrb",
                        "⇵": "duarr",
                        "⇽": "loarr",
                        "⇾": "roarr",
                        "⇿": "hoarr",
                        "∀": "forall",
                        "∁": "comp",
                        "∂": "part",
                        "∂̸": "npart",
                        "∃": "exist",
                        "∄": "nexist",
                        "∅": "empty",
                        "∇": "Del",
                        "∈": "in",
                        "∉": "notin",
                        "∋": "ni",
                        "∌": "notni",
                        "϶": "bepsi",
                        "∏": "prod",
                        "∐": "coprod",
                        "∑": "sum",
                        "+": "plus",
                        "±": "pm",
                        "÷": "div",
                        "×": "times",
                        "<": "lt",
                        "≮": "nlt",
                        "<⃒": "nvlt",
                        "=": "equals",
                        "≠": "ne",
                        "=⃥": "bne",
                        "⩵": "Equal",
                        ">": "gt",
                        "≯": "ngt",
                        ">⃒": "nvgt",
                        "¬": "not",
                        "|": "vert",
                        "¦": "brvbar",
                        "−": "minus",
                        "∓": "mp",
                        "∔": "plusdo",
                        "⁄": "frasl",
                        "∖": "setmn",
                        "∗": "lowast",
                        "∘": "compfn",
                        "√": "Sqrt",
                        "∝": "prop",
                        "∞": "infin",
                        "∟": "angrt",
                        "∠": "ang",
                        "∠⃒": "nang",
                        "∡": "angmsd",
                        "∢": "angsph",
                        "∣": "mid",
                        "∤": "nmid",
                        "∥": "par",
                        "∦": "npar",
                        "∧": "and",
                        "∨": "or",
                        "∩": "cap",
                        "∩︀": "caps",
                        "∪": "cup",
                        "∪︀": "cups",
                        "∫": "int",
                        "∬": "Int",
                        "∭": "tint",
                        "⨌": "qint",
                        "∮": "oint",
                        "∯": "Conint",
                        "∰": "Cconint",
                        "∱": "cwint",
                        "∲": "cwconint",
                        "∳": "awconint",
                        "∴": "there4",
                        "∵": "becaus",
                        "∶": "ratio",
                        "∷": "Colon",
                        "∸": "minusd",
                        "∺": "mDDot",
                        "∻": "homtht",
                        "∼": "sim",
                        "≁": "nsim",
                        "∼⃒": "nvsim",
                        "∽": "bsim",
                        "∽̱": "race",
                        "∾": "ac",
                        "∾̳": "acE",
                        "∿": "acd",
                        "≀": "wr",
                        "≂": "esim",
                        "≂̸": "nesim",
                        "≃": "sime",
                        "≄": "nsime",
                        "≅": "cong",
                        "≇": "ncong",
                        "≆": "simne",
                        "≈": "ap",
                        "≉": "nap",
                        "≊": "ape",
                        "≋": "apid",
                        "≋̸": "napid",
                        "≌": "bcong",
                        "≍": "CupCap",
                        "≭": "NotCupCap",
                        "≍⃒": "nvap",
                        "≎": "bump",
                        "≎̸": "nbump",
                        "≏": "bumpe",
                        "≏̸": "nbumpe",
                        "≐": "doteq",
                        "≐̸": "nedot",
                        "≑": "eDot",
                        "≒": "efDot",
                        "≓": "erDot",
                        "≔": "colone",
                        "≕": "ecolon",
                        "≖": "ecir",
                        "≗": "cire",
                        "≙": "wedgeq",
                        "≚": "veeeq",
                        "≜": "trie",
                        "≟": "equest",
                        "≡": "equiv",
                        "≢": "nequiv",
                        "≡⃥": "bnequiv",
                        "≤": "le",
                        "≰": "nle",
                        "≤⃒": "nvle",
                        "≥": "ge",
                        "≱": "nge",
                        "≥⃒": "nvge",
                        "≦": "lE",
                        "≦̸": "nlE",
                        "≧": "gE",
                        "≧̸": "ngE",
                        "≨︀": "lvnE",
                        "≨": "lnE",
                        "≩": "gnE",
                        "≩︀": "gvnE",
                        "≪": "ll",
                        "≪̸": "nLtv",
                        "≪⃒": "nLt",
                        "≫": "gg",
                        "≫̸": "nGtv",
                        "≫⃒": "nGt",
                        "≬": "twixt",
                        "≲": "lsim",
                        "≴": "nlsim",
                        "≳": "gsim",
                        "≵": "ngsim",
                        "≶": "lg",
                        "≸": "ntlg",
                        "≷": "gl",
                        "≹": "ntgl",
                        "≺": "pr",
                        "⊀": "npr",
                        "≻": "sc",
                        "⊁": "nsc",
                        "≼": "prcue",
                        "⋠": "nprcue",
                        "≽": "sccue",
                        "⋡": "nsccue",
                        "≾": "prsim",
                        "≿": "scsim",
                        "≿̸": "NotSucceedsTilde",
                        "⊂": "sub",
                        "⊄": "nsub",
                        "⊂⃒": "vnsub",
                        "⊃": "sup",
                        "⊅": "nsup",
                        "⊃⃒": "vnsup",
                        "⊆": "sube",
                        "⊈": "nsube",
                        "⊇": "supe",
                        "⊉": "nsupe",
                        "⊊︀": "vsubne",
                        "⊊": "subne",
                        "⊋︀": "vsupne",
                        "⊋": "supne",
                        "⊍": "cupdot",
                        "⊎": "uplus",
                        "⊏": "sqsub",
                        "⊏̸": "NotSquareSubset",
                        "⊐": "sqsup",
                        "⊐̸": "NotSquareSuperset",
                        "⊑": "sqsube",
                        "⋢": "nsqsube",
                        "⊒": "sqsupe",
                        "⋣": "nsqsupe",
                        "⊓": "sqcap",
                        "⊓︀": "sqcaps",
                        "⊔": "sqcup",
                        "⊔︀": "sqcups",
                        "⊕": "oplus",
                        "⊖": "ominus",
                        "⊗": "otimes",
                        "⊘": "osol",
                        "⊙": "odot",
                        "⊚": "ocir",
                        "⊛": "oast",
                        "⊝": "odash",
                        "⊞": "plusb",
                        "⊟": "minusb",
                        "⊠": "timesb",
                        "⊡": "sdotb",
                        "⊢": "vdash",
                        "⊬": "nvdash",
                        "⊣": "dashv",
                        "⊤": "top",
                        "⊥": "bot",
                        "⊧": "models",
                        "⊨": "vDash",
                        "⊭": "nvDash",
                        "⊩": "Vdash",
                        "⊮": "nVdash",
                        "⊪": "Vvdash",
                        "⊫": "VDash",
                        "⊯": "nVDash",
                        "⊰": "prurel",
                        "⊲": "vltri",
                        "⋪": "nltri",
                        "⊳": "vrtri",
                        "⋫": "nrtri",
                        "⊴": "ltrie",
                        "⋬": "nltrie",
                        "⊴⃒": "nvltrie",
                        "⊵": "rtrie",
                        "⋭": "nrtrie",
                        "⊵⃒": "nvrtrie",
                        "⊶": "origof",
                        "⊷": "imof",
                        "⊸": "mumap",
                        "⊹": "hercon",
                        "⊺": "intcal",
                        "⊻": "veebar",
                        "⊽": "barvee",
                        "⊾": "angrtvb",
                        "⊿": "lrtri",
                        "⋀": "Wedge",
                        "⋁": "Vee",
                        "⋂": "xcap",
                        "⋃": "xcup",
                        "⋄": "diam",
                        "⋅": "sdot",
                        "⋆": "Star",
                        "⋇": "divonx",
                        "⋈": "bowtie",
                        "⋉": "ltimes",
                        "⋊": "rtimes",
                        "⋋": "lthree",
                        "⋌": "rthree",
                        "⋍": "bsime",
                        "⋎": "cuvee",
                        "⋏": "cuwed",
                        "⋐": "Sub",
                        "⋑": "Sup",
                        "⋒": "Cap",
                        "⋓": "Cup",
                        "⋔": "fork",
                        "⋕": "epar",
                        "⋖": "ltdot",
                        "⋗": "gtdot",
                        "⋘": "Ll",
                        "⋘̸": "nLl",
                        "⋙": "Gg",
                        "⋙̸": "nGg",
                        "⋚︀": "lesg",
                        "⋚": "leg",
                        "⋛": "gel",
                        "⋛︀": "gesl",
                        "⋞": "cuepr",
                        "⋟": "cuesc",
                        "⋦": "lnsim",
                        "⋧": "gnsim",
                        "⋨": "prnsim",
                        "⋩": "scnsim",
                        "⋮": "vellip",
                        "⋯": "ctdot",
                        "⋰": "utdot",
                        "⋱": "dtdot",
                        "⋲": "disin",
                        "⋳": "isinsv",
                        "⋴": "isins",
                        "⋵": "isindot",
                        "⋵̸": "notindot",
                        "⋶": "notinvc",
                        "⋷": "notinvb",
                        "⋹": "isinE",
                        "⋹̸": "notinE",
                        "⋺": "nisd",
                        "⋻": "xnis",
                        "⋼": "nis",
                        "⋽": "notnivc",
                        "⋾": "notnivb",
                        "⌅": "barwed",
                        "⌆": "Barwed",
                        "⌌": "drcrop",
                        "⌍": "dlcrop",
                        "⌎": "urcrop",
                        "⌏": "ulcrop",
                        "⌐": "bnot",
                        "⌒": "profline",
                        "⌓": "profsurf",
                        "⌕": "telrec",
                        "⌖": "target",
                        "⌜": "ulcorn",
                        "⌝": "urcorn",
                        "⌞": "dlcorn",
                        "⌟": "drcorn",
                        "⌢": "frown",
                        "⌣": "smile",
                        "⌭": "cylcty",
                        "⌮": "profalar",
                        "⌶": "topbot",
                        "⌽": "ovbar",
                        "⌿": "solbar",
                        "⍼": "angzarr",
                        "⎰": "lmoust",
                        "⎱": "rmoust",
                        "⎴": "tbrk",
                        "⎵": "bbrk",
                        "⎶": "bbrktbrk",
                        "⏜": "OverParenthesis",
                        "⏝": "UnderParenthesis",
                        "⏞": "OverBrace",
                        "⏟": "UnderBrace",
                        "⏢": "trpezium",
                        "⏧": "elinters",
                        "␣": "blank",
                        "─": "boxh",
                        "│": "boxv",
                        "┌": "boxdr",
                        "┐": "boxdl",
                        "└": "boxur",
                        "┘": "boxul",
                        "├": "boxvr",
                        "┤": "boxvl",
                        "┬": "boxhd",
                        "┴": "boxhu",
                        "┼": "boxvh",
                        "═": "boxH",
                        "║": "boxV",
                        "╒": "boxdR",
                        "╓": "boxDr",
                        "╔": "boxDR",
                        "╕": "boxdL",
                        "╖": "boxDl",
                        "╗": "boxDL",
                        "╘": "boxuR",
                        "╙": "boxUr",
                        "╚": "boxUR",
                        "╛": "boxuL",
                        "╜": "boxUl",
                        "╝": "boxUL",
                        "╞": "boxvR",
                        "╟": "boxVr",
                        "╠": "boxVR",
                        "╡": "boxvL",
                        "╢": "boxVl",
                        "╣": "boxVL",
                        "╤": "boxHd",
                        "╥": "boxhD",
                        "╦": "boxHD",
                        "╧": "boxHu",
                        "╨": "boxhU",
                        "╩": "boxHU",
                        "╪": "boxvH",
                        "╫": "boxVh",
                        "╬": "boxVH",
                        "▀": "uhblk",
                        "▄": "lhblk",
                        "█": "block",
                        "░": "blk14",
                        "▒": "blk12",
                        "▓": "blk34",
                        "□": "squ",
                        "▪": "squf",
                        "▫": "EmptyVerySmallSquare",
                        "▭": "rect",
                        "▮": "marker",
                        "▱": "fltns",
                        "△": "xutri",
                        "▴": "utrif",
                        "▵": "utri",
                        "▸": "rtrif",
                        "▹": "rtri",
                        "▽": "xdtri",
                        "▾": "dtrif",
                        "▿": "dtri",
                        "◂": "ltrif",
                        "◃": "ltri",
                        "◊": "loz",
                        "○": "cir",
                        "◬": "tridot",
                        "◯": "xcirc",
                        "◸": "ultri",
                        "◹": "urtri",
                        "◺": "lltri",
                        "◻": "EmptySmallSquare",
                        "◼": "FilledSmallSquare",
                        "★": "starf",
                        "☆": "star",
                        "☎": "phone",
                        "♀": "female",
                        "♂": "male",
                        "♠": "spades",
                        "♣": "clubs",
                        "♥": "hearts",
                        "♦": "diams",
                        "♪": "sung",
                        "✓": "check",
                        "✗": "cross",
                        "✠": "malt",
                        "✶": "sext",
                        "❘": "VerticalSeparator",
                        "⟈": "bsolhsub",
                        "⟉": "suphsol",
                        "⟵": "xlarr",
                        "⟶": "xrarr",
                        "⟷": "xharr",
                        "⟸": "xlArr",
                        "⟹": "xrArr",
                        "⟺": "xhArr",
                        "⟼": "xmap",
                        "⟿": "dzigrarr",
                        "⤂": "nvlArr",
                        "⤃": "nvrArr",
                        "⤄": "nvHarr",
                        "⤅": "Map",
                        "⤌": "lbarr",
                        "⤍": "rbarr",
                        "⤎": "lBarr",
                        "⤏": "rBarr",
                        "⤐": "RBarr",
                        "⤑": "DDotrahd",
                        "⤒": "UpArrowBar",
                        "⤓": "DownArrowBar",
                        "⤖": "Rarrtl",
                        "⤙": "latail",
                        "⤚": "ratail",
                        "⤛": "lAtail",
                        "⤜": "rAtail",
                        "⤝": "larrfs",
                        "⤞": "rarrfs",
                        "⤟": "larrbfs",
                        "⤠": "rarrbfs",
                        "⤣": "nwarhk",
                        "⤤": "nearhk",
                        "⤥": "searhk",
                        "⤦": "swarhk",
                        "⤧": "nwnear",
                        "⤨": "toea",
                        "⤩": "tosa",
                        "⤪": "swnwar",
                        "⤳": "rarrc",
                        "⤳̸": "nrarrc",
                        "⤵": "cudarrr",
                        "⤶": "ldca",
                        "⤷": "rdca",
                        "⤸": "cudarrl",
                        "⤹": "larrpl",
                        "⤼": "curarrm",
                        "⤽": "cularrp",
                        "⥅": "rarrpl",
                        "⥈": "harrcir",
                        "⥉": "Uarrocir",
                        "⥊": "lurdshar",
                        "⥋": "ldrushar",
                        "⥎": "LeftRightVector",
                        "⥏": "RightUpDownVector",
                        "⥐": "DownLeftRightVector",
                        "⥑": "LeftUpDownVector",
                        "⥒": "LeftVectorBar",
                        "⥓": "RightVectorBar",
                        "⥔": "RightUpVectorBar",
                        "⥕": "RightDownVectorBar",
                        "⥖": "DownLeftVectorBar",
                        "⥗": "DownRightVectorBar",
                        "⥘": "LeftUpVectorBar",
                        "⥙": "LeftDownVectorBar",
                        "⥚": "LeftTeeVector",
                        "⥛": "RightTeeVector",
                        "⥜": "RightUpTeeVector",
                        "⥝": "RightDownTeeVector",
                        "⥞": "DownLeftTeeVector",
                        "⥟": "DownRightTeeVector",
                        "⥠": "LeftUpTeeVector",
                        "⥡": "LeftDownTeeVector",
                        "⥢": "lHar",
                        "⥣": "uHar",
                        "⥤": "rHar",
                        "⥥": "dHar",
                        "⥦": "luruhar",
                        "⥧": "ldrdhar",
                        "⥨": "ruluhar",
                        "⥩": "rdldhar",
                        "⥪": "lharul",
                        "⥫": "llhard",
                        "⥬": "rharul",
                        "⥭": "lrhard",
                        "⥮": "udhar",
                        "⥯": "duhar",
                        "⥰": "RoundImplies",
                        "⥱": "erarr",
                        "⥲": "simrarr",
                        "⥳": "larrsim",
                        "⥴": "rarrsim",
                        "⥵": "rarrap",
                        "⥶": "ltlarr",
                        "⥸": "gtrarr",
                        "⥹": "subrarr",
                        "⥻": "suplarr",
                        "⥼": "lfisht",
                        "⥽": "rfisht",
                        "⥾": "ufisht",
                        "⥿": "dfisht",
                        "⦚": "vzigzag",
                        "⦜": "vangrt",
                        "⦝": "angrtvbd",
                        "⦤": "ange",
                        "⦥": "range",
                        "⦦": "dwangle",
                        "⦧": "uwangle",
                        "⦨": "angmsdaa",
                        "⦩": "angmsdab",
                        "⦪": "angmsdac",
                        "⦫": "angmsdad",
                        "⦬": "angmsdae",
                        "⦭": "angmsdaf",
                        "⦮": "angmsdag",
                        "⦯": "angmsdah",
                        "⦰": "bemptyv",
                        "⦱": "demptyv",
                        "⦲": "cemptyv",
                        "⦳": "raemptyv",
                        "⦴": "laemptyv",
                        "⦵": "ohbar",
                        "⦶": "omid",
                        "⦷": "opar",
                        "⦹": "operp",
                        "⦻": "olcross",
                        "⦼": "odsold",
                        "⦾": "olcir",
                        "⦿": "ofcir",
                        "⧀": "olt",
                        "⧁": "ogt",
                        "⧂": "cirscir",
                        "⧃": "cirE",
                        "⧄": "solb",
                        "⧅": "bsolb",
                        "⧉": "boxbox",
                        "⧍": "trisb",
                        "⧎": "rtriltri",
                        "⧏": "LeftTriangleBar",
                        "⧏̸": "NotLeftTriangleBar",
                        "⧐": "RightTriangleBar",
                        "⧐̸": "NotRightTriangleBar",
                        "⧜": "iinfin",
                        "⧝": "infintie",
                        "⧞": "nvinfin",
                        "⧣": "eparsl",
                        "⧤": "smeparsl",
                        "⧥": "eqvparsl",
                        "⧫": "lozf",
                        "⧴": "RuleDelayed",
                        "⧶": "dsol",
                        "⨀": "xodot",
                        "⨁": "xoplus",
                        "⨂": "xotime",
                        "⨄": "xuplus",
                        "⨆": "xsqcup",
                        "⨍": "fpartint",
                        "⨐": "cirfnint",
                        "⨑": "awint",
                        "⨒": "rppolint",
                        "⨓": "scpolint",
                        "⨔": "npolint",
                        "⨕": "pointint",
                        "⨖": "quatint",
                        "⨗": "intlarhk",
                        "⨢": "pluscir",
                        "⨣": "plusacir",
                        "⨤": "simplus",
                        "⨥": "plusdu",
                        "⨦": "plussim",
                        "⨧": "plustwo",
                        "⨩": "mcomma",
                        "⨪": "minusdu",
                        "⨭": "loplus",
                        "⨮": "roplus",
                        "⨯": "Cross",
                        "⨰": "timesd",
                        "⨱": "timesbar",
                        "⨳": "smashp",
                        "⨴": "lotimes",
                        "⨵": "rotimes",
                        "⨶": "otimesas",
                        "⨷": "Otimes",
                        "⨸": "odiv",
                        "⨹": "triplus",
                        "⨺": "triminus",
                        "⨻": "tritime",
                        "⨼": "iprod",
                        "⨿": "amalg",
                        "⩀": "capdot",
                        "⩂": "ncup",
                        "⩃": "ncap",
                        "⩄": "capand",
                        "⩅": "cupor",
                        "⩆": "cupcap",
                        "⩇": "capcup",
                        "⩈": "cupbrcap",
                        "⩉": "capbrcup",
                        "⩊": "cupcup",
                        "⩋": "capcap",
                        "⩌": "ccups",
                        "⩍": "ccaps",
                        "⩐": "ccupssm",
                        "⩓": "And",
                        "⩔": "Or",
                        "⩕": "andand",
                        "⩖": "oror",
                        "⩗": "orslope",
                        "⩘": "andslope",
                        "⩚": "andv",
                        "⩛": "orv",
                        "⩜": "andd",
                        "⩝": "ord",
                        "⩟": "wedbar",
                        "⩦": "sdote",
                        "⩪": "simdot",
                        "⩭": "congdot",
                        "⩭̸": "ncongdot",
                        "⩮": "easter",
                        "⩯": "apacir",
                        "⩰": "apE",
                        "⩰̸": "napE",
                        "⩱": "eplus",
                        "⩲": "pluse",
                        "⩳": "Esim",
                        "⩷": "eDDot",
                        "⩸": "equivDD",
                        "⩹": "ltcir",
                        "⩺": "gtcir",
                        "⩻": "ltquest",
                        "⩼": "gtquest",
                        "⩽": "les",
                        "⩽̸": "nles",
                        "⩾": "ges",
                        "⩾̸": "nges",
                        "⩿": "lesdot",
                        "⪀": "gesdot",
                        "⪁": "lesdoto",
                        "⪂": "gesdoto",
                        "⪃": "lesdotor",
                        "⪄": "gesdotol",
                        "⪅": "lap",
                        "⪆": "gap",
                        "⪇": "lne",
                        "⪈": "gne",
                        "⪉": "lnap",
                        "⪊": "gnap",
                        "⪋": "lEg",
                        "⪌": "gEl",
                        "⪍": "lsime",
                        "⪎": "gsime",
                        "⪏": "lsimg",
                        "⪐": "gsiml",
                        "⪑": "lgE",
                        "⪒": "glE",
                        "⪓": "lesges",
                        "⪔": "gesles",
                        "⪕": "els",
                        "⪖": "egs",
                        "⪗": "elsdot",
                        "⪘": "egsdot",
                        "⪙": "el",
                        "⪚": "eg",
                        "⪝": "siml",
                        "⪞": "simg",
                        "⪟": "simlE",
                        "⪠": "simgE",
                        "⪡": "LessLess",
                        "⪡̸": "NotNestedLessLess",
                        "⪢": "GreaterGreater",
                        "⪢̸": "NotNestedGreaterGreater",
                        "⪤": "glj",
                        "⪥": "gla",
                        "⪦": "ltcc",
                        "⪧": "gtcc",
                        "⪨": "lescc",
                        "⪩": "gescc",
                        "⪪": "smt",
                        "⪫": "lat",
                        "⪬": "smte",
                        "⪬︀": "smtes",
                        "⪭": "late",
                        "⪭︀": "lates",
                        "⪮": "bumpE",
                        "⪯": "pre",
                        "⪯̸": "npre",
                        "⪰": "sce",
                        "⪰̸": "nsce",
                        "⪳": "prE",
                        "⪴": "scE",
                        "⪵": "prnE",
                        "⪶": "scnE",
                        "⪷": "prap",
                        "⪸": "scap",
                        "⪹": "prnap",
                        "⪺": "scnap",
                        "⪻": "Pr",
                        "⪼": "Sc",
                        "⪽": "subdot",
                        "⪾": "supdot",
                        "⪿": "subplus",
                        "⫀": "supplus",
                        "⫁": "submult",
                        "⫂": "supmult",
                        "⫃": "subedot",
                        "⫄": "supedot",
                        "⫅": "subE",
                        "⫅̸": "nsubE",
                        "⫆": "supE",
                        "⫆̸": "nsupE",
                        "⫇": "subsim",
                        "⫈": "supsim",
                        "⫋︀": "vsubnE",
                        "⫋": "subnE",
                        "⫌︀": "vsupnE",
                        "⫌": "supnE",
                        "⫏": "csub",
                        "⫐": "csup",
                        "⫑": "csube",
                        "⫒": "csupe",
                        "⫓": "subsup",
                        "⫔": "supsub",
                        "⫕": "subsub",
                        "⫖": "supsup",
                        "⫗": "suphsub",
                        "⫘": "supdsub",
                        "⫙": "forkv",
                        "⫚": "topfork",
                        "⫛": "mlcp",
                        "⫤": "Dashv",
                        "⫦": "Vdashl",
                        "⫧": "Barv",
                        "⫨": "vBar",
                        "⫩": "vBarv",
                        "⫫": "Vbar",
                        "⫬": "Not",
                        "⫭": "bNot",
                        "⫮": "rnmid",
                        "⫯": "cirmid",
                        "⫰": "midcir",
                        "⫱": "topcir",
                        "⫲": "nhpar",
                        "⫳": "parsim",
                        "⫽": "parsl",
                        "⫽⃥": "nparsl",
                        "♭": "flat",
                        "♮": "natur",
                        "♯": "sharp",
                        "¤": "curren",
                        "¢": "cent",
                        $: "dollar",
                        "£": "pound",
                        "¥": "yen",
                        "€": "euro",
                        "¹": "sup1",
                        "½": "half",
                        "⅓": "frac13",
                        "¼": "frac14",
                        "⅕": "frac15",
                        "⅙": "frac16",
                        "⅛": "frac18",
                        "²": "sup2",
                        "⅔": "frac23",
                        "⅖": "frac25",
                        "³": "sup3",
                        "¾": "frac34",
                        "⅗": "frac35",
                        "⅜": "frac38",
                        "⅘": "frac45",
                        "⅚": "frac56",
                        "⅝": "frac58",
                        "⅞": "frac78",
                        𝒶: "ascr",
                        𝕒: "aopf",
                        𝔞: "afr",
                        𝔸: "Aopf",
                        𝔄: "Afr",
                        𝒜: "Ascr",
                        ª: "ordf",
                        á: "aacute",
                        Á: "Aacute",
                        à: "agrave",
                        À: "Agrave",
                        ă: "abreve",
                        Ă: "Abreve",
                        â: "acirc",
                        Â: "Acirc",
                        å: "aring",
                        Å: "angst",
                        ä: "auml",
                        Ä: "Auml",
                        ã: "atilde",
                        Ã: "Atilde",
                        ą: "aogon",
                        Ą: "Aogon",
                        ā: "amacr",
                        Ā: "Amacr",
                        æ: "aelig",
                        Æ: "AElig",
                        𝒷: "bscr",
                        𝕓: "bopf",
                        𝔟: "bfr",
                        𝔹: "Bopf",
                        ℬ: "Bscr",
                        𝔅: "Bfr",
                        𝔠: "cfr",
                        𝒸: "cscr",
                        𝕔: "copf",
                        ℭ: "Cfr",
                        𝒞: "Cscr",
                        ℂ: "Copf",
                        ć: "cacute",
                        Ć: "Cacute",
                        ĉ: "ccirc",
                        Ĉ: "Ccirc",
                        č: "ccaron",
                        Č: "Ccaron",
                        ċ: "cdot",
                        Ċ: "Cdot",
                        ç: "ccedil",
                        Ç: "Ccedil",
                        "℅": "incare",
                        𝔡: "dfr",
                        ⅆ: "dd",
                        𝕕: "dopf",
                        𝒹: "dscr",
                        𝒟: "Dscr",
                        𝔇: "Dfr",
                        ⅅ: "DD",
                        𝔻: "Dopf",
                        ď: "dcaron",
                        Ď: "Dcaron",
                        đ: "dstrok",
                        Đ: "Dstrok",
                        ð: "eth",
                        Ð: "ETH",
                        ⅇ: "ee",
                        ℯ: "escr",
                        𝔢: "efr",
                        𝕖: "eopf",
                        ℰ: "Escr",
                        𝔈: "Efr",
                        𝔼: "Eopf",
                        é: "eacute",
                        É: "Eacute",
                        è: "egrave",
                        È: "Egrave",
                        ê: "ecirc",
                        Ê: "Ecirc",
                        ě: "ecaron",
                        Ě: "Ecaron",
                        ë: "euml",
                        Ë: "Euml",
                        ė: "edot",
                        Ė: "Edot",
                        ę: "eogon",
                        Ę: "Eogon",
                        ē: "emacr",
                        Ē: "Emacr",
                        𝔣: "ffr",
                        𝕗: "fopf",
                        𝒻: "fscr",
                        𝔉: "Ffr",
                        𝔽: "Fopf",
                        ℱ: "Fscr",
                        ﬀ: "fflig",
                        ﬃ: "ffilig",
                        ﬄ: "ffllig",
                        ﬁ: "filig",
                        fj: "fjlig",
                        ﬂ: "fllig",
                        ƒ: "fnof",
                        ℊ: "gscr",
                        𝕘: "gopf",
                        𝔤: "gfr",
                        𝒢: "Gscr",
                        𝔾: "Gopf",
                        𝔊: "Gfr",
                        ǵ: "gacute",
                        ğ: "gbreve",
                        Ğ: "Gbreve",
                        ĝ: "gcirc",
                        Ĝ: "Gcirc",
                        ġ: "gdot",
                        Ġ: "Gdot",
                        Ģ: "Gcedil",
                        𝔥: "hfr",
                        ℎ: "planckh",
                        𝒽: "hscr",
                        𝕙: "hopf",
                        ℋ: "Hscr",
                        ℌ: "Hfr",
                        ℍ: "Hopf",
                        ĥ: "hcirc",
                        Ĥ: "Hcirc",
                        ℏ: "hbar",
                        ħ: "hstrok",
                        Ħ: "Hstrok",
                        𝕚: "iopf",
                        𝔦: "ifr",
                        𝒾: "iscr",
                        ⅈ: "ii",
                        𝕀: "Iopf",
                        ℐ: "Iscr",
                        ℑ: "Im",
                        í: "iacute",
                        Í: "Iacute",
                        ì: "igrave",
                        Ì: "Igrave",
                        î: "icirc",
                        Î: "Icirc",
                        ï: "iuml",
                        Ï: "Iuml",
                        ĩ: "itilde",
                        Ĩ: "Itilde",
                        İ: "Idot",
                        į: "iogon",
                        Į: "Iogon",
                        ī: "imacr",
                        Ī: "Imacr",
                        ĳ: "ijlig",
                        Ĳ: "IJlig",
                        ı: "imath",
                        𝒿: "jscr",
                        𝕛: "jopf",
                        𝔧: "jfr",
                        𝒥: "Jscr",
                        𝔍: "Jfr",
                        𝕁: "Jopf",
                        ĵ: "jcirc",
                        Ĵ: "Jcirc",
                        ȷ: "jmath",
                        𝕜: "kopf",
                        𝓀: "kscr",
                        𝔨: "kfr",
                        𝒦: "Kscr",
                        𝕂: "Kopf",
                        𝔎: "Kfr",
                        ķ: "kcedil",
                        Ķ: "Kcedil",
                        𝔩: "lfr",
                        𝓁: "lscr",
                        ℓ: "ell",
                        𝕝: "lopf",
                        ℒ: "Lscr",
                        𝔏: "Lfr",
                        𝕃: "Lopf",
                        ĺ: "lacute",
                        Ĺ: "Lacute",
                        ľ: "lcaron",
                        Ľ: "Lcaron",
                        ļ: "lcedil",
                        Ļ: "Lcedil",
                        ł: "lstrok",
                        Ł: "Lstrok",
                        ŀ: "lmidot",
                        Ŀ: "Lmidot",
                        𝔪: "mfr",
                        𝕞: "mopf",
                        𝓂: "mscr",
                        𝔐: "Mfr",
                        𝕄: "Mopf",
                        ℳ: "Mscr",
                        𝔫: "nfr",
                        𝕟: "nopf",
                        𝓃: "nscr",
                        ℕ: "Nopf",
                        𝒩: "Nscr",
                        𝔑: "Nfr",
                        ń: "nacute",
                        Ń: "Nacute",
                        ň: "ncaron",
                        Ň: "Ncaron",
                        ñ: "ntilde",
                        Ñ: "Ntilde",
                        ņ: "ncedil",
                        Ņ: "Ncedil",
                        "№": "numero",
                        ŋ: "eng",
                        Ŋ: "ENG",
                        𝕠: "oopf",
                        𝔬: "ofr",
                        ℴ: "oscr",
                        𝒪: "Oscr",
                        𝔒: "Ofr",
                        𝕆: "Oopf",
                        º: "ordm",
                        ó: "oacute",
                        Ó: "Oacute",
                        ò: "ograve",
                        Ò: "Ograve",
                        ô: "ocirc",
                        Ô: "Ocirc",
                        ö: "ouml",
                        Ö: "Ouml",
                        ő: "odblac",
                        Ő: "Odblac",
                        õ: "otilde",
                        Õ: "Otilde",
                        ø: "oslash",
                        Ø: "Oslash",
                        ō: "omacr",
                        Ō: "Omacr",
                        œ: "oelig",
                        Œ: "OElig",
                        𝔭: "pfr",
                        𝓅: "pscr",
                        𝕡: "popf",
                        ℙ: "Popf",
                        𝔓: "Pfr",
                        𝒫: "Pscr",
                        𝕢: "qopf",
                        𝔮: "qfr",
                        𝓆: "qscr",
                        𝒬: "Qscr",
                        𝔔: "Qfr",
                        ℚ: "Qopf",
                        ĸ: "kgreen",
                        𝔯: "rfr",
                        𝕣: "ropf",
                        𝓇: "rscr",
                        ℛ: "Rscr",
                        ℜ: "Re",
                        ℝ: "Ropf",
                        ŕ: "racute",
                        Ŕ: "Racute",
                        ř: "rcaron",
                        Ř: "Rcaron",
                        ŗ: "rcedil",
                        Ŗ: "Rcedil",
                        𝕤: "sopf",
                        𝓈: "sscr",
                        𝔰: "sfr",
                        𝕊: "Sopf",
                        𝔖: "Sfr",
                        𝒮: "Sscr",
                        "Ⓢ": "oS",
                        ś: "sacute",
                        Ś: "Sacute",
                        ŝ: "scirc",
                        Ŝ: "Scirc",
                        š: "scaron",
                        Š: "Scaron",
                        ş: "scedil",
                        Ş: "Scedil",
                        ß: "szlig",
                        𝔱: "tfr",
                        𝓉: "tscr",
                        𝕥: "topf",
                        𝒯: "Tscr",
                        𝔗: "Tfr",
                        𝕋: "Topf",
                        ť: "tcaron",
                        Ť: "Tcaron",
                        ţ: "tcedil",
                        Ţ: "Tcedil",
                        "™": "trade",
                        ŧ: "tstrok",
                        Ŧ: "Tstrok",
                        𝓊: "uscr",
                        𝕦: "uopf",
                        𝔲: "ufr",
                        𝕌: "Uopf",
                        𝔘: "Ufr",
                        𝒰: "Uscr",
                        ú: "uacute",
                        Ú: "Uacute",
                        ù: "ugrave",
                        Ù: "Ugrave",
                        ŭ: "ubreve",
                        Ŭ: "Ubreve",
                        û: "ucirc",
                        Û: "Ucirc",
                        ů: "uring",
                        Ů: "Uring",
                        ü: "uuml",
                        Ü: "Uuml",
                        ű: "udblac",
                        Ű: "Udblac",
                        ũ: "utilde",
                        Ũ: "Utilde",
                        ų: "uogon",
                        Ų: "Uogon",
                        ū: "umacr",
                        Ū: "Umacr",
                        𝔳: "vfr",
                        𝕧: "vopf",
                        𝓋: "vscr",
                        𝔙: "Vfr",
                        𝕍: "Vopf",
                        𝒱: "Vscr",
                        𝕨: "wopf",
                        𝓌: "wscr",
                        𝔴: "wfr",
                        𝒲: "Wscr",
                        𝕎: "Wopf",
                        𝔚: "Wfr",
                        ŵ: "wcirc",
                        Ŵ: "Wcirc",
                        𝔵: "xfr",
                        𝓍: "xscr",
                        𝕩: "xopf",
                        𝕏: "Xopf",
                        𝔛: "Xfr",
                        𝒳: "Xscr",
                        𝔶: "yfr",
                        𝓎: "yscr",
                        𝕪: "yopf",
                        𝒴: "Yscr",
                        𝔜: "Yfr",
                        𝕐: "Yopf",
                        ý: "yacute",
                        Ý: "Yacute",
                        ŷ: "ycirc",
                        Ŷ: "Ycirc",
                        ÿ: "yuml",
                        Ÿ: "Yuml",
                        𝓏: "zscr",
                        𝔷: "zfr",
                        𝕫: "zopf",
                        ℨ: "Zfr",
                        ℤ: "Zopf",
                        𝒵: "Zscr",
                        ź: "zacute",
                        Ź: "Zacute",
                        ž: "zcaron",
                        Ž: "Zcaron",
                        ż: "zdot",
                        Ż: "Zdot",
                        Ƶ: "imped",
                        þ: "thorn",
                        Þ: "THORN",
                        ŉ: "napos",
                        α: "alpha",
                        Α: "Alpha",
                        β: "beta",
                        Β: "Beta",
                        γ: "gamma",
                        Γ: "Gamma",
                        δ: "delta",
                        Δ: "Delta",
                        ε: "epsi",
                        ϵ: "epsiv",
                        Ε: "Epsilon",
                        ϝ: "gammad",
                        Ϝ: "Gammad",
                        ζ: "zeta",
                        Ζ: "Zeta",
                        η: "eta",
                        Η: "Eta",
                        θ: "theta",
                        ϑ: "thetav",
                        Θ: "Theta",
                        ι: "iota",
                        Ι: "Iota",
                        κ: "kappa",
                        ϰ: "kappav",
                        Κ: "Kappa",
                        λ: "lambda",
                        Λ: "Lambda",
                        μ: "mu",
                        µ: "micro",
                        Μ: "Mu",
                        ν: "nu",
                        Ν: "Nu",
                        ξ: "xi",
                        Ξ: "Xi",
                        ο: "omicron",
                        Ο: "Omicron",
                        π: "pi",
                        ϖ: "piv",
                        Π: "Pi",
                        ρ: "rho",
                        ϱ: "rhov",
                        Ρ: "Rho",
                        σ: "sigma",
                        Σ: "Sigma",
                        ς: "sigmaf",
                        τ: "tau",
                        Τ: "Tau",
                        υ: "upsi",
                        Υ: "Upsilon",
                        ϒ: "Upsi",
                        φ: "phi",
                        ϕ: "phiv",
                        Φ: "Phi",
                        χ: "chi",
                        Χ: "Chi",
                        ψ: "psi",
                        Ψ: "Psi",
                        ω: "omega",
                        Ω: "ohm",
                        а: "acy",
                        А: "Acy",
                        б: "bcy",
                        Б: "Bcy",
                        в: "vcy",
                        В: "Vcy",
                        г: "gcy",
                        Г: "Gcy",
                        ѓ: "gjcy",
                        Ѓ: "GJcy",
                        д: "dcy",
                        Д: "Dcy",
                        ђ: "djcy",
                        Ђ: "DJcy",
                        е: "iecy",
                        Е: "IEcy",
                        ё: "iocy",
                        Ё: "IOcy",
                        є: "jukcy",
                        Є: "Jukcy",
                        ж: "zhcy",
                        Ж: "ZHcy",
                        з: "zcy",
                        З: "Zcy",
                        ѕ: "dscy",
                        Ѕ: "DScy",
                        и: "icy",
                        И: "Icy",
                        і: "iukcy",
                        І: "Iukcy",
                        ї: "yicy",
                        Ї: "YIcy",
                        й: "jcy",
                        Й: "Jcy",
                        ј: "jsercy",
                        Ј: "Jsercy",
                        к: "kcy",
                        К: "Kcy",
                        ќ: "kjcy",
                        Ќ: "KJcy",
                        л: "lcy",
                        Л: "Lcy",
                        љ: "ljcy",
                        Љ: "LJcy",
                        м: "mcy",
                        М: "Mcy",
                        н: "ncy",
                        Н: "Ncy",
                        њ: "njcy",
                        Њ: "NJcy",
                        о: "ocy",
                        О: "Ocy",
                        п: "pcy",
                        П: "Pcy",
                        р: "rcy",
                        Р: "Rcy",
                        с: "scy",
                        С: "Scy",
                        т: "tcy",
                        Т: "Tcy",
                        ћ: "tshcy",
                        Ћ: "TSHcy",
                        у: "ucy",
                        У: "Ucy",
                        ў: "ubrcy",
                        Ў: "Ubrcy",
                        ф: "fcy",
                        Ф: "Fcy",
                        х: "khcy",
                        Х: "KHcy",
                        ц: "tscy",
                        Ц: "TScy",
                        ч: "chcy",
                        Ч: "CHcy",
                        џ: "dzcy",
                        Џ: "DZcy",
                        ш: "shcy",
                        Ш: "SHcy",
                        щ: "shchcy",
                        Щ: "SHCHcy",
                        ъ: "hardcy",
                        Ъ: "HARDcy",
                        ы: "ycy",
                        Ы: "Ycy",
                        ь: "softcy",
                        Ь: "SOFTcy",
                        э: "ecy",
                        Э: "Ecy",
                        ю: "yucy",
                        Ю: "YUcy",
                        я: "yacy",
                        Я: "YAcy",
                        ℵ: "aleph",
                        ℶ: "beth",
                        ℷ: "gimel",
                        ℸ: "daleth"
                    },
                    h = /["&'<>`]/g,
                    f = {
                        '"': "&quot;",
                        "&": "&amp;",
                        "'": "&#x27;",
                        "<": "&lt;",
                        ">": "&gt;",
                        "`": "&#x60;"
                    },
                    p = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/,
                    d = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
                    g = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|833977819|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g,
                    m = {
                        aacute: "á",
                        Aacute: "Á",
                        abreve: "ă",
                        Abreve: "Ă",
                        ac: "∾",
                        acd: "∿",
                        acE: "∾̳",
                        acirc: "â",
                        Acirc: "Â",
                        acute: "´",
                        acy: "а",
                        Acy: "А",
                        aelig: "æ",
                        AElig: "Æ",
                        af: "⁡",
                        afr: "𝔞",
                        Afr: "𝔄",
                        agrave: "à",
                        Agrave: "À",
                        alefsym: "ℵ",
                        aleph: "ℵ",
                        alpha: "α",
                        Alpha: "Α",
                        amacr: "ā",
                        Amacr: "Ā",
                        amalg: "⨿",
                        amp: "&",
                        AMP: "&",
                        and: "∧",
                        And: "⩓",
                        andand: "⩕",
                        andd: "⩜",
                        andslope: "⩘",
                        andv: "⩚",
                        ang: "∠",
                        ange: "⦤",
                        angle: "∠",
                        angmsd: "∡",
                        angmsdaa: "⦨",
                        angmsdab: "⦩",
                        angmsdac: "⦪",
                        angmsdad: "⦫",
                        angmsdae: "⦬",
                        angmsdaf: "⦭",
                        angmsdag: "⦮",
                        angmsdah: "⦯",
                        angrt: "∟",
                        angrtvb: "⊾",
                        angrtvbd: "⦝",
                        angsph: "∢",
                        angst: "Å",
                        angzarr: "⍼",
                        aogon: "ą",
                        Aogon: "Ą",
                        aopf: "𝕒",
                        Aopf: "𝔸",
                        ap: "≈",
                        apacir: "⩯",
                        ape: "≊",
                        apE: "⩰",
                        apid: "≋",
                        apos: "'",
                        ApplyFunction: "⁡",
                        approx: "≈",
                        approxeq: "≊",
                        aring: "å",
                        Aring: "Å",
                        ascr: "𝒶",
                        Ascr: "𝒜",
                        Assign: "≔",
                        ast: "*",
                        asymp: "≈",
                        asympeq: "≍",
                        atilde: "ã",
                        Atilde: "Ã",
                        auml: "ä",
                        Auml: "Ä",
                        awconint: "∳",
                        awint: "⨑",
                        backcong: "≌",
                        backepsilon: "϶",
                        backprime: "‵",
                        backsim: "∽",
                        backsimeq: "⋍",
                        Backslash: "∖",
                        Barv: "⫧",
                        barvee: "⊽",
                        barwed: "⌅",
                        Barwed: "⌆",
                        barwedge: "⌅",
                        bbrk: "⎵",
                        bbrktbrk: "⎶",
                        bcong: "≌",
                        bcy: "б",
                        Bcy: "Б",
                        bdquo: "„",
                        becaus: "∵",
                        because: "∵",
                        Because: "∵",
                        bemptyv: "⦰",
                        bepsi: "϶",
                        bernou: "ℬ",
                        Bernoullis: "ℬ",
                        beta: "β",
                        Beta: "Β",
                        beth: "ℶ",
                        between: "≬",
                        bfr: "𝔟",
                        Bfr: "𝔅",
                        bigcap: "⋂",
                        bigcirc: "◯",
                        bigcup: "⋃",
                        bigodot: "⨀",
                        bigoplus: "⨁",
                        bigotimes: "⨂",
                        bigsqcup: "⨆",
                        bigstar: "★",
                        bigtriangledown: "▽",
                        bigtriangleup: "△",
                        biguplus: "⨄",
                        bigvee: "⋁",
                        bigwedge: "⋀",
                        bkarow: "⤍",
                        blacklozenge: "⧫",
                        blacksquare: "▪",
                        blacktriangle: "▴",
                        blacktriangledown: "▾",
                        blacktriangleleft: "◂",
                        blacktriangleright: "▸",
                        blank: "␣",
                        blk12: "▒",
                        blk14: "░",
                        blk34: "▓",
                        block: "█",
                        bne: "=⃥",
                        bnequiv: "≡⃥",
                        bnot: "⌐",
                        bNot: "⫭",
                        bopf: "𝕓",
                        Bopf: "𝔹",
                        bot: "⊥",
                        bottom: "⊥",
                        bowtie: "⋈",
                        boxbox: "⧉",
                        boxdl: "┐",
                        boxdL: "╕",
                        boxDl: "╖",
                        boxDL: "╗",
                        boxdr: "┌",
                        boxdR: "╒",
                        boxDr: "╓",
                        boxDR: "╔",
                        boxh: "─",
                        boxH: "═",
                        boxhd: "┬",
                        boxhD: "╥",
                        boxHd: "╤",
                        boxHD: "╦",
                        boxhu: "┴",
                        boxhU: "╨",
                        boxHu: "╧",
                        boxHU: "╩",
                        boxminus: "⊟",
                        boxplus: "⊞",
                        boxtimes: "⊠",
                        boxul: "┘",
                        boxuL: "╛",
                        boxUl: "╜",
                        boxUL: "╝",
                        boxur: "└",
                        boxuR: "╘",
                        boxUr: "╙",
                        boxUR: "╚",
                        boxv: "│",
                        boxV: "║",
                        boxvh: "┼",
                        boxvH: "╪",
                        boxVh: "╫",
                        boxVH: "╬",
                        boxvl: "┤",
                        boxvL: "╡",
                        boxVl: "╢",
                        boxVL: "╣",
                        boxvr: "├",
                        boxvR: "╞",
                        boxVr: "╟",
                        boxVR: "╠",
                        bprime: "‵",
                        breve: "˘",
                        Breve: "˘",
                        brvbar: "¦",
                        bscr: "𝒷",
                        Bscr: "ℬ",
                        bsemi: "⁏",
                        bsim: "∽",
                        bsime: "⋍",
                        bsol: "\\",
                        bsolb: "⧅",
                        bsolhsub: "⟈",
                        bull: "•",
                        bullet: "•",
                        bump: "≎",
                        bumpe: "≏",
                        bumpE: "⪮",
                        bumpeq: "≏",
                        Bumpeq: "≎",
                        cacute: "ć",
                        Cacute: "Ć",
                        cap: "∩",
                        Cap: "⋒",
                        capand: "⩄",
                        capbrcup: "⩉",
                        capcap: "⩋",
                        capcup: "⩇",
                        capdot: "⩀",
                        CapitalDifferentialD: "ⅅ",
                        caps: "∩︀",
                        caret: "⁁",
                        caron: "ˇ",
                        Cayleys: "ℭ",
                        ccaps: "⩍",
                        ccaron: "č",
                        Ccaron: "Č",
                        ccedil: "ç",
                        Ccedil: "Ç",
                        ccirc: "ĉ",
                        Ccirc: "Ĉ",
                        Cconint: "∰",
                        ccups: "⩌",
                        ccupssm: "⩐",
                        cdot: "ċ",
                        Cdot: "Ċ",
                        cedil: "¸",
                        Cedilla: "¸",
                        cemptyv: "⦲",
                        cent: "¢",
                        centerdot: "·",
                        CenterDot: "·",
                        cfr: "𝔠",
                        Cfr: "ℭ",
                        chcy: "ч",
                        CHcy: "Ч",
                        check: "✓",
                        checkmark: "✓",
                        chi: "χ",
                        Chi: "Χ",
                        cir: "○",
                        circ: "ˆ",
                        circeq: "≗",
                        circlearrowleft: "↺",
                        circlearrowright: "↻",
                        circledast: "⊛",
                        circledcirc: "⊚",
                        circleddash: "⊝",
                        CircleDot: "⊙",
                        circledR: "®",
                        circledS: "Ⓢ",
                        CircleMinus: "⊖",
                        CirclePlus: "⊕",
                        CircleTimes: "⊗",
                        cire: "≗",
                        cirE: "⧃",
                        cirfnint: "⨐",
                        cirmid: "⫯",
                        cirscir: "⧂",
                        ClockwiseContourIntegral: "∲",
                        CloseCurlyDoubleQuote: "”",
                        CloseCurlyQuote: "’",
                        clubs: "♣",
                        clubsuit: "♣",
                        colon: ":",
                        Colon: "∷",
                        colone: "≔",
                        Colone: "⩴",
                        coloneq: "≔",
                        comma: ",",
                        commat: "@",
                        comp: "∁",
                        compfn: "∘",
                        complement: "∁",
                        complexes: "ℂ",
                        cong: "≅",
                        congdot: "⩭",
                        Congruent: "≡",
                        conint: "∮",
                        Conint: "∯",
                        ContourIntegral: "∮",
                        copf: "𝕔",
                        Copf: "ℂ",
                        coprod: "∐",
                        Coproduct: "∐",
                        copy: "©",
                        COPY: "©",
                        copysr: "℗",
                        CounterClockwiseContourIntegral: "∳",
                        crarr: "↵",
                        cross: "✗",
                        Cross: "⨯",
                        cscr: "𝒸",
                        Cscr: "𝒞",
                        csub: "⫏",
                        csube: "⫑",
                        csup: "⫐",
                        csupe: "⫒",
                        ctdot: "⋯",
                        cudarrl: "⤸",
                        cudarrr: "⤵",
                        cuepr: "⋞",
                        cuesc: "⋟",
                        cularr: "↶",
                        cularrp: "⤽",
                        cup: "∪",
                        Cup: "⋓",
                        cupbrcap: "⩈",
                        cupcap: "⩆",
                        CupCap: "≍",
                        cupcup: "⩊",
                        cupdot: "⊍",
                        cupor: "⩅",
                        cups: "∪︀",
                        curarr: "↷",
                        curarrm: "⤼",
                        curlyeqprec: "⋞",
                        curlyeqsucc: "⋟",
                        curlyvee: "⋎",
                        curlywedge: "⋏",
                        curren: "¤",
                        curvearrowleft: "↶",
                        curvearrowright: "↷",
                        cuvee: "⋎",
                        cuwed: "⋏",
                        cwconint: "∲",
                        cwint: "∱",
                        cylcty: "⌭",
                        dagger: "†",
                        Dagger: "‡",
                        daleth: "ℸ",
                        darr: "↓",
                        dArr: "⇓",
                        Darr: "↡",
                        dash: "‐",
                        dashv: "⊣",
                        Dashv: "⫤",
                        dbkarow: "⤏",
                        dblac: "˝",
                        dcaron: "ď",
                        Dcaron: "Ď",
                        dcy: "д",
                        Dcy: "Д",
                        dd: "ⅆ",
                        DD: "ⅅ",
                        ddagger: "‡",
                        ddarr: "⇊",
                        DDotrahd: "⤑",
                        ddotseq: "⩷",
                        deg: "°",
                        Del: "∇",
                        delta: "δ",
                        Delta: "Δ",
                        demptyv: "⦱",
                        dfisht: "⥿",
                        dfr: "𝔡",
                        Dfr: "𝔇",
                        dHar: "⥥",
                        dharl: "⇃",
                        dharr: "⇂",
                        DiacriticalAcute: "´",
                        DiacriticalDot: "˙",
                        DiacriticalDoubleAcute: "˝",
                        DiacriticalGrave: "`",
                        DiacriticalTilde: "˜",
                        diam: "⋄",
                        diamond: "⋄",
                        Diamond: "⋄",
                        diamondsuit: "♦",
                        diams: "♦",
                        die: "¨",
                        DifferentialD: "ⅆ",
                        digamma: "ϝ",
                        disin: "⋲",
                        div: "÷",
                        divide: "÷",
                        divideontimes: "⋇",
                        divonx: "⋇",
                        djcy: "ђ",
                        DJcy: "Ђ",
                        dlcorn: "⌞",
                        dlcrop: "⌍",
                        dollar: "$",
                        dopf: "𝕕",
                        Dopf: "𝔻",
                        dot: "˙",
                        Dot: "¨",
                        DotDot: "⃜",
                        doteq: "≐",
                        doteqdot: "≑",
                        DotEqual: "≐",
                        dotminus: "∸",
                        dotplus: "∔",
                        dotsquare: "⊡",
                        doublebarwedge: "⌆",
                        DoubleContourIntegral: "∯",
                        DoubleDot: "¨",
                        DoubleDownArrow: "⇓",
                        DoubleLeftArrow: "⇐",
                        DoubleLeftRightArrow: "⇔",
                        DoubleLeftTee: "⫤",
                        DoubleLongLeftArrow: "⟸",
                        DoubleLongLeftRightArrow: "⟺",
                        DoubleLongRightArrow: "⟹",
                        DoubleRightArrow: "⇒",
                        DoubleRightTee: "⊨",
                        DoubleUpArrow: "⇑",
                        DoubleUpDownArrow: "⇕",
                        DoubleVerticalBar: "∥",
                        downarrow: "↓",
                        Downarrow: "⇓",
                        DownArrow: "↓",
                        DownArrowBar: "⤓",
                        DownArrowUpArrow: "⇵",
                        DownBreve: "̑",
                        downdownarrows: "⇊",
                        downharpoonleft: "⇃",
                        downharpoonright: "⇂",
                        DownLeftRightVector: "⥐",
                        DownLeftTeeVector: "⥞",
                        DownLeftVector: "↽",
                        DownLeftVectorBar: "⥖",
                        DownRightTeeVector: "⥟",
                        DownRightVector: "⇁",
                        DownRightVectorBar: "⥗",
                        DownTee: "⊤",
                        DownTeeArrow: "↧",
                        drbkarow: "⤐",
                        drcorn: "⌟",
                        drcrop: "⌌",
                        dscr: "𝒹",
                        Dscr: "𝒟",
                        dscy: "ѕ",
                        DScy: "Ѕ",
                        dsol: "⧶",
                        dstrok: "đ",
                        Dstrok: "Đ",
                        dtdot: "⋱",
                        dtri: "▿",
                        dtrif: "▾",
                        duarr: "⇵",
                        duhar: "⥯",
                        dwangle: "⦦",
                        dzcy: "џ",
                        DZcy: "Џ",
                        dzigrarr: "⟿",
                        eacute: "é",
                        Eacute: "É",
                        easter: "⩮",
                        ecaron: "ě",
                        Ecaron: "Ě",
                        ecir: "≖",
                        ecirc: "ê",
                        Ecirc: "Ê",
                        ecolon: "≕",
                        ecy: "э",
                        Ecy: "Э",
                        eDDot: "⩷",
                        edot: "ė",
                        eDot: "≑",
                        Edot: "Ė",
                        ee: "ⅇ",
                        efDot: "≒",
                        efr: "𝔢",
                        Efr: "𝔈",
                        eg: "⪚",
                        egrave: "è",
                        Egrave: "È",
                        egs: "⪖",
                        egsdot: "⪘",
                        el: "⪙",
                        Element: "∈",
                        elinters: "⏧",
                        ell: "ℓ",
                        els: "⪕",
                        elsdot: "⪗",
                        emacr: "ē",
                        Emacr: "Ē",
                        empty: "∅",
                        emptyset: "∅",
                        EmptySmallSquare: "◻",
                        emptyv: "∅",
                        EmptyVerySmallSquare: "▫",
                        emsp: " ",
                        emsp13: " ",
                        emsp14: " ",
                        eng: "ŋ",
                        ENG: "Ŋ",
                        ensp: " ",
                        eogon: "ę",
                        Eogon: "Ę",
                        eopf: "𝕖",
                        Eopf: "𝔼",
                        epar: "⋕",
                        eparsl: "⧣",
                        eplus: "⩱",
                        epsi: "ε",
                        epsilon: "ε",
                        Epsilon: "Ε",
                        epsiv: "ϵ",
                        eqcirc: "≖",
                        eqcolon: "≕",
                        eqsim: "≂",
                        eqslantgtr: "⪖",
                        eqslantless: "⪕",
                        Equal: "⩵",
                        equals: "=",
                        EqualTilde: "≂",
                        equest: "≟",
                        Equilibrium: "⇌",
                        equiv: "≡",
                        equivDD: "⩸",
                        eqvparsl: "⧥",
                        erarr: "⥱",
                        erDot: "≓",
                        escr: "ℯ",
                        Escr: "ℰ",
                        esdot: "≐",
                        esim: "≂",
                        Esim: "⩳",
                        eta: "η",
                        Eta: "Η",
                        eth: "ð",
                        ETH: "Ð",
                        euml: "ë",
                        Euml: "Ë",
                        euro: "€",
                        excl: "!",
                        exist: "∃",
                        Exists: "∃",
                        expectation: "ℰ",
                        exponentiale: "ⅇ",
                        ExponentialE: "ⅇ",
                        fallingdotseq: "≒",
                        fcy: "ф",
                        Fcy: "Ф",
                        female: "♀",
                        ffilig: "ﬃ",
                        fflig: "ﬀ",
                        ffllig: "ﬄ",
                        ffr: "𝔣",
                        Ffr: "𝔉",
                        filig: "ﬁ",
                        FilledSmallSquare: "◼",
                        FilledVerySmallSquare: "▪",
                        fjlig: "fj",
                        flat: "♭",
                        fllig: "ﬂ",
                        fltns: "▱",
                        fnof: "ƒ",
                        fopf: "𝕗",
                        Fopf: "𝔽",
                        forall: "∀",
                        ForAll: "∀",
                        fork: "⋔",
                        forkv: "⫙",
                        Fouriertrf: "ℱ",
                        fpartint: "⨍",
                        frac12: "½",
                        frac13: "⅓",
                        frac14: "¼",
                        frac15: "⅕",
                        frac16: "⅙",
                        frac18: "⅛",
                        frac23: "⅔",
                        frac25: "⅖",
                        frac34: "¾",
                        frac35: "⅗",
                        frac38: "⅜",
                        frac45: "⅘",
                        frac56: "⅚",
                        frac58: "⅝",
                        frac78: "⅞",
                        frasl: "⁄",
                        frown: "⌢",
                        fscr: "𝒻",
                        Fscr: "ℱ",
                        gacute: "ǵ",
                        gamma: "γ",
                        Gamma: "Γ",
                        gammad: "ϝ",
                        Gammad: "Ϝ",
                        gap: "⪆",
                        gbreve: "ğ",
                        Gbreve: "Ğ",
                        Gcedil: "Ģ",
                        gcirc: "ĝ",
                        Gcirc: "Ĝ",
                        gcy: "г",
                        Gcy: "Г",
                        gdot: "ġ",
                        Gdot: "Ġ",
                        ge: "≥",
                        gE: "≧",
                        gel: "⋛",
                        gEl: "⪌",
                        geq: "≥",
                        geqq: "≧",
                        geqslant: "⩾",
                        ges: "⩾",
                        gescc: "⪩",
                        gesdot: "⪀",
                        gesdoto: "⪂",
                        gesdotol: "⪄",
                        gesl: "⋛︀",
                        gesles: "⪔",
                        gfr: "𝔤",
                        Gfr: "𝔊",
                        gg: "≫",
                        Gg: "⋙",
                        ggg: "⋙",
                        gimel: "ℷ",
                        gjcy: "ѓ",
                        GJcy: "Ѓ",
                        gl: "≷",
                        gla: "⪥",
                        glE: "⪒",
                        glj: "⪤",
                        gnap: "⪊",
                        gnapprox: "⪊",
                        gne: "⪈",
                        gnE: "≩",
                        gneq: "⪈",
                        gneqq: "≩",
                        gnsim: "⋧",
                        gopf: "𝕘",
                        Gopf: "𝔾",
                        grave: "`",
                        GreaterEqual: "≥",
                        GreaterEqualLess: "⋛",
                        GreaterFullEqual: "≧",
                        GreaterGreater: "⪢",
                        GreaterLess: "≷",
                        GreaterSlantEqual: "⩾",
                        GreaterTilde: "≳",
                        gscr: "ℊ",
                        Gscr: "𝒢",
                        gsim: "≳",
                        gsime: "⪎",
                        gsiml: "⪐",
                        gt: ">",
                        Gt: "≫",
                        GT: ">",
                        gtcc: "⪧",
                        gtcir: "⩺",
                        gtdot: "⋗",
                        gtlPar: "⦕",
                        gtquest: "⩼",
                        gtrapprox: "⪆",
                        gtrarr: "⥸",
                        gtrdot: "⋗",
                        gtreqless: "⋛",
                        gtreqqless: "⪌",
                        gtrless: "≷",
                        gtrsim: "≳",
                        gvertneqq: "≩︀",
                        gvnE: "≩︀",
                        Hacek: "ˇ",
                        hairsp: " ",
                        half: "½",
                        hamilt: "ℋ",
                        hardcy: "ъ",
                        HARDcy: "Ъ",
                        harr: "↔",
                        hArr: "⇔",
                        harrcir: "⥈",
                        harrw: "↭",
                        Hat: "^",
                        hbar: "ℏ",
                        hcirc: "ĥ",
                        Hcirc: "Ĥ",
                        hearts: "♥",
                        heartsuit: "♥",
                        hellip: "…",
                        hercon: "⊹",
                        hfr: "𝔥",
                        Hfr: "ℌ",
                        HilbertSpace: "ℋ",
                        hksearow: "⤥",
                        hkswarow: "⤦",
                        hoarr: "⇿",
                        homtht: "∻",
                        hookleftarrow: "↩",
                        hookrightarrow: "↪",
                        hopf: "𝕙",
                        Hopf: "ℍ",
                        horbar: "―",
                        HorizontalLine: "─",
                        hscr: "𝒽",
                        Hscr: "ℋ",
                        hslash: "ℏ",
                        hstrok: "ħ",
                        Hstrok: "Ħ",
                        HumpDownHump: "≎",
                        HumpEqual: "≏",
                        hybull: "⁃",
                        hyphen: "‐",
                        iacute: "í",
                        Iacute: "Í",
                        ic: "⁣",
                        icirc: "î",
                        Icirc: "Î",
                        icy: "и",
                        Icy: "И",
                        Idot: "İ",
                        iecy: "е",
                        IEcy: "Е",
                        iexcl: "¡",
                        iff: "⇔",
                        ifr: "𝔦",
                        Ifr: "ℑ",
                        igrave: "ì",
                        Igrave: "Ì",
                        ii: "ⅈ",
                        iiiint: "⨌",
                        iiint: "∭",
                        iinfin: "⧜",
                        iiota: "℩",
                        ijlig: "ĳ",
                        IJlig: "Ĳ",
                        Im: "ℑ",
                        imacr: "ī",
                        Imacr: "Ī",
                        image: "ℑ",
                        ImaginaryI: "ⅈ",
                        imagline: "ℐ",
                        imagpart: "ℑ",
                        imath: "ı",
                        imof: "⊷",
                        imped: "Ƶ",
                        Implies: "⇒",
                        in: "∈",
                        incare: "℅",
                        infin: "∞",
                        infintie: "⧝",
                        inodot: "ı",
                        int: "∫",
                        Int: "∬",
                        intcal: "⊺",
                        integers: "ℤ",
                        Integral: "∫",
                        intercal: "⊺",
                        Intersection: "⋂",
                        intlarhk: "⨗",
                        intprod: "⨼",
                        InvisibleComma: "⁣",
                        InvisibleTimes: "⁢",
                        iocy: "ё",
                        IOcy: "Ё",
                        iogon: "į",
                        Iogon: "Į",
                        iopf: "𝕚",
                        Iopf: "𝕀",
                        iota: "ι",
                        Iota: "Ι",
                        iprod: "⨼",
                        iquest: "¿",
                        iscr: "𝒾",
                        Iscr: "ℐ",
                        isin: "∈",
                        isindot: "⋵",
                        isinE: "⋹",
                        isins: "⋴",
                        isinsv: "⋳",
                        isinv: "∈",
                        it: "⁢",
                        itilde: "ĩ",
                        Itilde: "Ĩ",
                        iukcy: "і",
                        Iukcy: "І",
                        iuml: "ï",
                        Iuml: "Ï",
                        jcirc: "ĵ",
                        Jcirc: "Ĵ",
                        jcy: "й",
                        Jcy: "Й",
                        jfr: "𝔧",
                        Jfr: "𝔍",
                        jmath: "ȷ",
                        jopf: "𝕛",
                        Jopf: "𝕁",
                        jscr: "𝒿",
                        Jscr: "𝒥",
                        jsercy: "ј",
                        Jsercy: "Ј",
                        jukcy: "є",
                        Jukcy: "Є",
                        kappa: "κ",
                        Kappa: "Κ",
                        kappav: "ϰ",
                        kcedil: "ķ",
                        Kcedil: "Ķ",
                        kcy: "к",
                        Kcy: "К",
                        kfr: "𝔨",
                        Kfr: "𝔎",
                        kgreen: "ĸ",
                        khcy: "х",
                        KHcy: "Х",
                        kjcy: "ќ",
                        KJcy: "Ќ",
                        kopf: "𝕜",
                        Kopf: "𝕂",
                        kscr: "𝓀",
                        Kscr: "𝒦",
                        lAarr: "⇚",
                        lacute: "ĺ",
                        Lacute: "Ĺ",
                        laemptyv: "⦴",
                        lagran: "ℒ",
                        lambda: "λ",
                        Lambda: "Λ",
                        lang: "⟨",
                        Lang: "⟪",
                        langd: "⦑",
                        langle: "⟨",
                        lap: "⪅",
                        Laplacetrf: "ℒ",
                        laquo: "«",
                        larr: "←",
                        lArr: "⇐",
                        Larr: "↞",
                        larrb: "⇤",
                        larrbfs: "⤟",
                        larrfs: "⤝",
                        larrhk: "↩",
                        larrlp: "↫",
                        larrpl: "⤹",
                        larrsim: "⥳",
                        larrtl: "↢",
                        lat: "⪫",
                        latail: "⤙",
                        lAtail: "⤛",
                        late: "⪭",
                        lates: "⪭︀",
                        lbarr: "⤌",
                        lBarr: "⤎",
                        lbbrk: "❲",
                        lbrace: "{",
                        lbrack: "[",
                        lbrke: "⦋",
                        lbrksld: "⦏",
                        lbrkslu: "⦍",
                        lcaron: "ľ",
                        Lcaron: "Ľ",
                        lcedil: "ļ",
                        Lcedil: "Ļ",
                        lceil: "⌈",
                        lcub: "{",
                        lcy: "л",
                        Lcy: "Л",
                        ldca: "⤶",
                        ldquo: "“",
                        ldquor: "„",
                        ldrdhar: "⥧",
                        ldrushar: "⥋",
                        ldsh: "↲",
                        le: "≤",
                        lE: "≦",
                        LeftAngleBracket: "⟨",
                        leftarrow: "←",
                        Leftarrow: "⇐",
                        LeftArrow: "←",
                        LeftArrowBar: "⇤",
                        LeftArrowRightArrow: "⇆",
                        leftarrowtail: "↢",
                        LeftCeiling: "⌈",
                        LeftDoubleBracket: "⟦",
                        LeftDownTeeVector: "⥡",
                        LeftDownVector: "⇃",
                        LeftDownVectorBar: "⥙",
                        LeftFloor: "⌊",
                        leftharpoondown: "↽",
                        leftharpoonup: "↼",
                        leftleftarrows: "⇇",
                        leftrightarrow: "↔",
                        Leftrightarrow: "⇔",
                        LeftRightArrow: "↔",
                        leftrightarrows: "⇆",
                        leftrightharpoons: "⇋",
                        leftrightsquigarrow: "↭",
                        LeftRightVector: "⥎",
                        LeftTee: "⊣",
                        LeftTeeArrow: "↤",
                        LeftTeeVector: "⥚",
                        leftthreetimes: "⋋",
                        LeftTriangle: "⊲",
                        LeftTriangleBar: "⧏",
                        LeftTriangleEqual: "⊴",
                        LeftUpDownVector: "⥑",
                        LeftUpTeeVector: "⥠",
                        LeftUpVector: "↿",
                        LeftUpVectorBar: "⥘",
                        LeftVector: "↼",
                        LeftVectorBar: "⥒",
                        leg: "⋚",
                        lEg: "⪋",
                        leq: "≤",
                        leqq: "≦",
                        leqslant: "⩽",
                        les: "⩽",
                        lescc: "⪨",
                        lesdot: "⩿",
                        lesdoto: "⪁",
                        lesdotor: "⪃",
                        lesg: "⋚︀",
                        lesges: "⪓",
                        lessapprox: "⪅",
                        lessdot: "⋖",
                        lesseqgtr: "⋚",
                        lesseqqgtr: "⪋",
                        LessEqualGreater: "⋚",
                        LessFullEqual: "≦",
                        LessGreater: "≶",
                        lessgtr: "≶",
                        LessLess: "⪡",
                        lesssim: "≲",
                        LessSlantEqual: "⩽",
                        LessTilde: "≲",
                        lfisht: "⥼",
                        lfloor: "⌊",
                        lfr: "𝔩",
                        Lfr: "𝔏",
                        lg: "≶",
                        lgE: "⪑",
                        lHar: "⥢",
                        lhard: "↽",
                        lharu: "↼",
                        lharul: "⥪",
                        lhblk: "▄",
                        ljcy: "љ",
                        LJcy: "Љ",
                        ll: "≪",
                        Ll: "⋘",
                        llarr: "⇇",
                        llcorner: "⌞",
                        Lleftarrow: "⇚",
                        llhard: "⥫",
                        lltri: "◺",
                        lmidot: "ŀ",
                        Lmidot: "Ŀ",
                        lmoust: "⎰",
                        lmoustache: "⎰",
                        lnap: "⪉",
                        lnapprox: "⪉",
                        lne: "⪇",
                        lnE: "≨",
                        lneq: "⪇",
                        lneqq: "≨",
                        lnsim: "⋦",
                        loang: "⟬",
                        loarr: "⇽",
                        lobrk: "⟦",
                        longleftarrow: "⟵",
                        Longleftarrow: "⟸",
                        LongLeftArrow: "⟵",
                        longleftrightarrow: "⟷",
                        Longleftrightarrow: "⟺",
                        LongLeftRightArrow: "⟷",
                        longmapsto: "⟼",
                        longrightarrow: "⟶",
                        Longrightarrow: "⟹",
                        LongRightArrow: "⟶",
                        looparrowleft: "↫",
                        looparrowright: "↬",
                        lopar: "⦅",
                        lopf: "𝕝",
                        Lopf: "𝕃",
                        loplus: "⨭",
                        lotimes: "⨴",
                        lowast: "∗",
                        lowbar: "_",
                        LowerLeftArrow: "↙",
                        LowerRightArrow: "↘",
                        loz: "◊",
                        lozenge: "◊",
                        lozf: "⧫",
                        lpar: "(",
                        lparlt: "⦓",
                        lrarr: "⇆",
                        lrcorner: "⌟",
                        lrhar: "⇋",
                        lrhard: "⥭",
                        lrm: "‎",
                        lrtri: "⊿",
                        lsaquo: "‹",
                        lscr: "𝓁",
                        Lscr: "ℒ",
                        lsh: "↰",
                        Lsh: "↰",
                        lsim: "≲",
                        lsime: "⪍",
                        lsimg: "⪏",
                        lsqb: "[",
                        lsquo: "‘",
                        lsquor: "‚",
                        lstrok: "ł",
                        Lstrok: "Ł",
                        lt: "<",
                        Lt: "≪",
                        LT: "<",
                        ltcc: "⪦",
                        ltcir: "⩹",
                        ltdot: "⋖",
                        lthree: "⋋",
                        ltimes: "⋉",
                        ltlarr: "⥶",
                        ltquest: "⩻",
                        ltri: "◃",
                        ltrie: "⊴",
                        ltrif: "◂",
                        ltrPar: "⦖",
                        lurdshar: "⥊",
                        luruhar: "⥦",
                        lvertneqq: "≨︀",
                        lvnE: "≨︀",
                        macr: "¯",
                        male: "♂",
                        malt: "✠",
                        833977819: "✠",
                        map: "↦",
                        Map: "⤅",
                        mapsto: "↦",
                        mapstodown: "↧",
                        mapstoleft: "↤",
                        mapstoup: "↥",
                        marker: "▮",
                        mcomma: "⨩",
                        mcy: "м",
                        Mcy: "М",
                        mdash: "—",
                        mDDot: "∺",
                        measuredangle: "∡",
                        MediumSpace: " ",
                        Mellintrf: "ℳ",
                        mfr: "𝔪",
                        Mfr: "𝔐",
                        mho: "℧",
                        micro: "µ",
                        mid: "∣",
                        midast: "*",
                        midcir: "⫰",
                        middot: "·",
                        minus: "−",
                        minusb: "⊟",
                        minusd: "∸",
                        minusdu: "⨪",
                        MinusPlus: "∓",
                        mlcp: "⫛",
                        mldr: "…",
                        mnplus: "∓",
                        models: "⊧",
                        mopf: "𝕞",
                        Mopf: "𝕄",
                        mp: "∓",
                        mscr: "𝓂",
                        Mscr: "ℳ",
                        mstpos: "∾",
                        mu: "μ",
                        Mu: "Μ",
                        multimap: "⊸",
                        mumap: "⊸",
                        nabla: "∇",
                        nacute: "ń",
                        Nacute: "Ń",
                        nang: "∠⃒",
                        nap: "≉",
                        napE: "⩰̸",
                        napid: "≋̸",
                        napos: "ŉ",
                        napprox: "≉",
                        natur: "♮",
                        natural: "♮",
                        naturals: "ℕ",
                        nbsp: " ",
                        nbump: "≎̸",
                        nbumpe: "≏̸",
                        ncap: "⩃",
                        ncaron: "ň",
                        Ncaron: "Ň",
                        ncedil: "ņ",
                        Ncedil: "Ņ",
                        ncong: "≇",
                        ncongdot: "⩭̸",
                        ncup: "⩂",
                        ncy: "н",
                        Ncy: "Н",
                        ndash: "–",
                        ne: "≠",
                        nearhk: "⤤",
                        nearr: "↗",
                        neArr: "⇗",
                        nearrow: "↗",
                        nedot: "≐̸",
                        NegativeMediumSpace: "​",
                        NegativeThickSpace: "​",
                        NegativeThinSpace: "​",
                        NegativeVeryThinSpace: "​",
                        nequiv: "≢",
                        nesear: "⤨",
                        nesim: "≂̸",
                        NestedGreaterGreater: "≫",
                        NestedLessLess: "≪",
                        NewLine: "\n",
                        nexist: "∄",
                        nexists: "∄",
                        nfr: "𝔫",
                        Nfr: "𝔑",
                        nge: "≱",
                        ngE: "≧̸",
                        ngeq: "≱",
                        ngeqq: "≧̸",
                        ngeqslant: "⩾̸",
                        nges: "⩾̸",
                        nGg: "⋙̸",
                        ngsim: "≵",
                        ngt: "≯",
                        nGt: "≫⃒",
                        ngtr: "≯",
                        nGtv: "≫̸",
                        nharr: "↮",
                        nhArr: "⇎",
                        nhpar: "⫲",
                        ni: "∋",
                        nis: "⋼",
                        nisd: "⋺",
                        niv: "∋",
                        njcy: "њ",
                        NJcy: "Њ",
                        nlarr: "↚",
                        nlArr: "⇍",
                        nldr: "‥",
                        nle: "≰",
                        nlE: "≦̸",
                        nleftarrow: "↚",
                        nLeftarrow: "⇍",
                        nleftrightarrow: "↮",
                        nLeftrightarrow: "⇎",
                        nleq: "≰",
                        nleqq: "≦̸",
                        nleqslant: "⩽̸",
                        nles: "⩽̸",
                        nless: "≮",
                        nLl: "⋘̸",
                        nlsim: "≴",
                        nlt: "≮",
                        nLt: "≪⃒",
                        nltri: "⋪",
                        nltrie: "⋬",
                        nLtv: "≪̸",
                        nmid: "∤",
                        NoBreak: "⁠",
                        NonBreakingSpace: " ",
                        nopf: "𝕟",
                        Nopf: "ℕ",
                        not: "¬",
                        Not: "⫬",
                        NotCongruent: "≢",
                        NotCupCap: "≭",
                        NotDoubleVerticalBar: "∦",
                        NotElement: "∉",
                        NotEqual: "≠",
                        NotEqualTilde: "≂̸",
                        NotExists: "∄",
                        NotGreater: "≯",
                        NotGreaterEqual: "≱",
                        NotGreaterFullEqual: "≧̸",
                        NotGreaterGreater: "≫̸",
                        NotGreaterLess: "≹",
                        NotGreaterSlantEqual: "⩾̸",
                        NotGreaterTilde: "≵",
                        NotHumpDownHump: "≎̸",
                        NotHumpEqual: "≏̸",
                        notin: "∉",
                        notindot: "⋵̸",
                        notinE: "⋹̸",
                        notinva: "∉",
                        notinvb: "⋷",
                        notinvc: "⋶",
                        NotLeftTriangle: "⋪",
                        NotLeftTriangleBar: "⧏̸",
                        NotLeftTriangleEqual: "⋬",
                        NotLess: "≮",
                        NotLessEqual: "≰",
                        NotLessGreater: "≸",
                        NotLessLess: "≪̸",
                        NotLessSlantEqual: "⩽̸",
                        NotLessTilde: "≴",
                        NotNestedGreaterGreater: "⪢̸",
                        NotNestedLessLess: "⪡̸",
                        notni: "∌",
                        notniva: "∌",
                        notnivb: "⋾",
                        notnivc: "⋽",
                        NotPrecedes: "⊀",
                        NotPrecedesEqual: "⪯̸",
                        NotPrecedesSlantEqual: "⋠",
                        NotReverseElement: "∌",
                        NotRightTriangle: "⋫",
                        NotRightTriangleBar: "⧐̸",
                        NotRightTriangleEqual: "⋭",
                        NotSquareSubset: "⊏̸",
                        NotSquareSubsetEqual: "⋢",
                        NotSquareSuperset: "⊐̸",
                        NotSquareSupersetEqual: "⋣",
                        NotSubset: "⊂⃒",
                        NotSubsetEqual: "⊈",
                        NotSucceeds: "⊁",
                        NotSucceedsEqual: "⪰̸",
                        NotSucceedsSlantEqual: "⋡",
                        NotSucceedsTilde: "≿̸",
                        NotSuperset: "⊃⃒",
                        NotSupersetEqual: "⊉",
                        NotTilde: "≁",
                        NotTildeEqual: "≄",
                        NotTildeFullEqual: "≇",
                        NotTildeTilde: "≉",
                        NotVerticalBar: "∤",
                        npar: "∦",
                        nparallel: "∦",
                        nparsl: "⫽⃥",
                        npart: "∂̸",
                        npolint: "⨔",
                        npr: "⊀",
                        nprcue: "⋠",
                        npre: "⪯̸",
                        nprec: "⊀",
                        npreceq: "⪯̸",
                        nrarr: "↛",
                        nrArr: "⇏",
                        nrarrc: "⤳̸",
                        nrarrw: "↝̸",
                        nrightarrow: "↛",
                        nRightarrow: "⇏",
                        nrtri: "⋫",
                        nrtrie: "⋭",
                        nsc: "⊁",
                        nsccue: "⋡",
                        nsce: "⪰̸",
                        nscr: "𝓃",
                        Nscr: "𝒩",
                        nshortmid: "∤",
                        nshortparallel: "∦",
                        nsim: "≁",
                        nsime: "≄",
                        nsimeq: "≄",
                        nsmid: "∤",
                        nspar: "∦",
                        nsqsube: "⋢",
                        nsqsupe: "⋣",
                        nsub: "⊄",
                        nsube: "⊈",
                        nsubE: "⫅̸",
                        nsubset: "⊂⃒",
                        nsubseteq: "⊈",
                        nsubseteqq: "⫅̸",
                        nsucc: "⊁",
                        nsucceq: "⪰̸",
                        nsup: "⊅",
                        nsupe: "⊉",
                        nsupE: "⫆̸",
                        nsupset: "⊃⃒",
                        nsupseteq: "⊉",
                        nsupseteqq: "⫆̸",
                        ntgl: "≹",
                        ntilde: "ñ",
                        Ntilde: "Ñ",
                        ntlg: "≸",
                        ntriangleleft: "⋪",
                        ntrianglelefteq: "⋬",
                        ntriangleright: "⋫",
                        ntrianglerighteq: "⋭",
                        nu: "ν",
                        Nu: "Ν",
                        num: "#",
                        numero: "№",
                        numsp: " ",
                        nvap: "≍⃒",
                        nvdash: "⊬",
                        nvDash: "⊭",
                        nVdash: "⊮",
                        nVDash: "⊯",
                        nvge: "≥⃒",
                        nvgt: ">⃒",
                        nvHarr: "⤄",
                        nvinfin: "⧞",
                        nvlArr: "⤂",
                        nvle: "≤⃒",
                        nvlt: "<⃒",
                        nvltrie: "⊴⃒",
                        nvrArr: "⤃",
                        nvrtrie: "⊵⃒",
                        nvsim: "∼⃒",
                        nwarhk: "⤣",
                        nwarr: "↖",
                        nwArr: "⇖",
                        nwarrow: "↖",
                        nwnear: "⤧",
                        oacute: "ó",
                        Oacute: "Ó",
                        oast: "⊛",
                        ocir: "⊚",
                        ocirc: "ô",
                        Ocirc: "Ô",
                        ocy: "о",
                        Ocy: "О",
                        odash: "⊝",
                        odblac: "ő",
                        Odblac: "Ő",
                        odiv: "⨸",
                        odot: "⊙",
                        odsold: "⦼",
                        oelig: "œ",
                        OElig: "Œ",
                        ofcir: "⦿",
                        ofr: "𝔬",
                        Ofr: "𝔒",
                        ogon: "˛",
                        ograve: "ò",
                        Ograve: "Ò",
                        ogt: "⧁",
                        ohbar: "⦵",
                        ohm: "Ω",
                        oint: "∮",
                        olarr: "↺",
                        olcir: "⦾",
                        olcross: "⦻",
                        oline: "‾",
                        olt: "⧀",
                        omacr: "ō",
                        Omacr: "Ō",
                        omega: "ω",
                        Omega: "Ω",
                        omicron: "ο",
                        Omicron: "Ο",
                        omid: "⦶",
                        ominus: "⊖",
                        oopf: "𝕠",
                        Oopf: "𝕆",
                        opar: "⦷",
                        OpenCurlyDoubleQuote: "“",
                        OpenCurlyQuote: "‘",
                        operp: "⦹",
                        oplus: "⊕",
                        or: "∨",
                        Or: "⩔",
                        orarr: "↻",
                        ord: "⩝",
                        order: "ℴ",
                        orderof: "ℴ",
                        ordf: "ª",
                        ordm: "º",
                        origof: "⊶",
                        oror: "⩖",
                        orslope: "⩗",
                        orv: "⩛",
                        oS: "Ⓢ",
                        oscr: "ℴ",
                        Oscr: "𝒪",
                        oslash: "ø",
                        Oslash: "Ø",
                        osol: "⊘",
                        otilde: "õ",
                        Otilde: "Õ",
                        otimes: "⊗",
                        Otimes: "⨷",
                        otimesas: "⨶",
                        ouml: "ö",
                        Ouml: "Ö",
                        ovbar: "⌽",
                        OverBar: "‾",
                        OverBrace: "⏞",
                        OverBracket: "⎴",
                        OverParenthesis: "⏜",
                        par: "∥",
                        para: "¶",
                        parallel: "∥",
                        parsim: "⫳",
                        parsl: "⫽",
                        part: "∂",
                        PartialD: "∂",
                        pcy: "п",
                        Pcy: "П",
                        percnt: "%",
                        period: ".",
                        permil: "‰",
                        perp: "⊥",
                        pertenk: "‱",
                        pfr: "𝔭",
                        Pfr: "𝔓",
                        phi: "φ",
                        Phi: "Φ",
                        phiv: "ϕ",
                        phmmat: "ℳ",
                        phone: "☎",
                        pi: "π",
                        Pi: "Π",
                        pitchfork: "⋔",
                        piv: "ϖ",
                        planck: "ℏ",
                        planckh: "ℎ",
                        plankv: "ℏ",
                        plus: "+",
                        plusacir: "⨣",
                        plusb: "⊞",
                        pluscir: "⨢",
                        plusdo: "∔",
                        plusdu: "⨥",
                        pluse: "⩲",
                        PlusMinus: "±",
                        plusmn: "±",
                        plussim: "⨦",
                        plustwo: "⨧",
                        pm: "±",
                        Poincareplane: "ℌ",
                        pointint: "⨕",
                        popf: "𝕡",
                        Popf: "ℙ",
                        pound: "£",
                        pr: "≺",
                        Pr: "⪻",
                        prap: "⪷",
                        prcue: "≼",
                        pre: "⪯",
                        prE: "⪳",
                        prec: "≺",
                        precapprox: "⪷",
                        preccurlyeq: "≼",
                        Precedes: "≺",
                        PrecedesEqual: "⪯",
                        PrecedesSlantEqual: "≼",
                        PrecedesTilde: "≾",
                        preceq: "⪯",
                        precnapprox: "⪹",
                        precneqq: "⪵",
                        precnsim: "⋨",
                        precsim: "≾",
                        prime: "′",
                        Prime: "″",
                        primes: "ℙ",
                        prnap: "⪹",
                        prnE: "⪵",
                        prnsim: "⋨",
                        prod: "∏",
                        Product: "∏",
                        profalar: "⌮",
                        profline: "⌒",
                        profsurf: "⌓",
                        prop: "∝",
                        Proportion: "∷",
                        Proportional: "∝",
                        propto: "∝",
                        prsim: "≾",
                        prurel: "⊰",
                        pscr: "𝓅",
                        Pscr: "𝒫",
                        psi: "ψ",
                        Psi: "Ψ",
                        puncsp: " ",
                        qfr: "𝔮",
                        Qfr: "𝔔",
                        qint: "⨌",
                        qopf: "𝕢",
                        Qopf: "ℚ",
                        qprime: "⁗",
                        qscr: "𝓆",
                        Qscr: "𝒬",
                        quaternions: "ℍ",
                        quatint: "⨖",
                        quest: "?",
                        questeq: "≟",
                        quot: '"',
                        QUOT: '"',
                        rAarr: "⇛",
                        race: "∽̱",
                        racute: "ŕ",
                        Racute: "Ŕ",
                        radic: "√",
                        raemptyv: "⦳",
                        rang: "⟩",
                        Rang: "⟫",
                        rangd: "⦒",
                        range: "⦥",
                        rangle: "⟩",
                        raquo: "»",
                        rarr: "→",
                        rArr: "⇒",
                        Rarr: "↠",
                        rarrap: "⥵",
                        rarrb: "⇥",
                        rarrbfs: "⤠",
                        rarrc: "⤳",
                        rarrfs: "⤞",
                        rarrhk: "↪",
                        rarrlp: "↬",
                        rarrpl: "⥅",
                        rarrsim: "⥴",
                        rarrtl: "↣",
                        Rarrtl: "⤖",
                        rarrw: "↝",
                        ratail: "⤚",
                        rAtail: "⤜",
                        ratio: "∶",
                        rationals: "ℚ",
                        rbarr: "⤍",
                        rBarr: "⤏",
                        RBarr: "⤐",
                        rbbrk: "❳",
                        rbrace: "}",
                        rbrack: "]",
                        rbrke: "⦌",
                        rbrksld: "⦎",
                        rbrkslu: "⦐",
                        rcaron: "ř",
                        Rcaron: "Ř",
                        rcedil: "ŗ",
                        Rcedil: "Ŗ",
                        rceil: "⌉",
                        rcub: "}",
                        rcy: "р",
                        Rcy: "Р",
                        rdca: "⤷",
                        rdldhar: "⥩",
                        rdquo: "”",
                        rdquor: "”",
                        rdsh: "↳",
                        Re: "ℜ",
                        real: "ℜ",
                        realine: "ℛ",
                        realpart: "ℜ",
                        reals: "ℝ",
                        rect: "▭",
                        reg: "®",
                        REG: "®",
                        ReverseElement: "∋",
                        ReverseEquilibrium: "⇋",
                        ReverseUpEquilibrium: "⥯",
                        rfisht: "⥽",
                        rfloor: "⌋",
                        rfr: "𝔯",
                        Rfr: "ℜ",
                        rHar: "⥤",
                        rhard: "⇁",
                        rharu: "⇀",
                        rharul: "⥬",
                        rho: "ρ",
                        Rho: "Ρ",
                        rhov: "ϱ",
                        RightAngleBracket: "⟩",
                        rightarrow: "→",
                        Rightarrow: "⇒",
                        RightArrow: "→",
                        RightArrowBar: "⇥",
                        RightArrowLeftArrow: "⇄",
                        rightarrowtail: "↣",
                        RightCeiling: "⌉",
                        RightDoubleBracket: "⟧",
                        RightDownTeeVector: "⥝",
                        RightDownVector: "⇂",
                        RightDownVectorBar: "⥕",
                        RightFloor: "⌋",
                        rightharpoondown: "⇁",
                        rightharpoonup: "⇀",
                        rightleftarrows: "⇄",
                        rightleftharpoons: "⇌",
                        rightrightarrows: "⇉",
                        rightsquigarrow: "↝",
                        RightTee: "⊢",
                        RightTeeArrow: "↦",
                        RightTeeVector: "⥛",
                        rightthreetimes: "⋌",
                        RightTriangle: "⊳",
                        RightTriangleBar: "⧐",
                        RightTriangleEqual: "⊵",
                        RightUpDownVector: "⥏",
                        RightUpTeeVector: "⥜",
                        RightUpVector: "↾",
                        RightUpVectorBar: "⥔",
                        RightVector: "⇀",
                        RightVectorBar: "⥓",
                        ring: "˚",
                        risingdotseq: "≓",
                        rlarr: "⇄",
                        rlhar: "⇌",
                        rlm: "‏",
                        rmoust: "⎱",
                        rmoustache: "⎱",
                        rnmid: "⫮",
                        roang: "⟭",
                        roarr: "⇾",
                        robrk: "⟧",
                        ropar: "⦆",
                        ropf: "𝕣",
                        Ropf: "ℝ",
                        roplus: "⨮",
                        rotimes: "⨵",
                        RoundImplies: "⥰",
                        rpar: ")",
                        rpargt: "⦔",
                        rppolint: "⨒",
                        rrarr: "⇉",
                        Rrightarrow: "⇛",
                        rsaquo: "›",
                        rscr: "𝓇",
                        Rscr: "ℛ",
                        rsh: "↱",
                        Rsh: "↱",
                        rsqb: "]",
                        rsquo: "’",
                        rsquor: "’",
                        rthree: "⋌",
                        rtimes: "⋊",
                        rtri: "▹",
                        rtrie: "⊵",
                        rtrif: "▸",
                        rtriltri: "⧎",
                        RuleDelayed: "⧴",
                        ruluhar: "⥨",
                        rx: "℞",
                        sacute: "ś",
                        Sacute: "Ś",
                        sbquo: "‚",
                        sc: "≻",
                        Sc: "⪼",
                        scap: "⪸",
                        scaron: "š",
                        Scaron: "Š",
                        sccue: "≽",
                        sce: "⪰",
                        scE: "⪴",
                        scedil: "ş",
                        Scedil: "Ş",
                        scirc: "ŝ",
                        Scirc: "Ŝ",
                        scnap: "⪺",
                        scnE: "⪶",
                        scnsim: "⋩",
                        scpolint: "⨓",
                        scsim: "≿",
                        scy: "с",
                        Scy: "С",
                        sdot: "⋅",
                        sdotb: "⊡",
                        sdote: "⩦",
                        searhk: "⤥",
                        searr: "↘",
                        seArr: "⇘",
                        searrow: "↘",
                        sect: "§",
                        semi: ";",
                        seswar: "⤩",
                        setminus: "∖",
                        setmn: "∖",
                        sext: "✶",
                        sfr: "𝔰",
                        Sfr: "𝔖",
                        sfrown: "⌢",
                        sharp: "♯",
                        shchcy: "щ",
                        SHCHcy: "Щ",
                        shcy: "ш",
                        SHcy: "Ш",
                        ShortDownArrow: "↓",
                        ShortLeftArrow: "←",
                        shortmid: "∣",
                        shortparallel: "∥",
                        ShortRightArrow: "→",
                        ShortUpArrow: "↑",
                        shy: "­",
                        sigma: "σ",
                        Sigma: "Σ",
                        sigmaf: "ς",
                        sigmav: "ς",
                        sim: "∼",
                        simdot: "⩪",
                        sime: "≃",
                        simeq: "≃",
                        simg: "⪞",
                        simgE: "⪠",
                        siml: "⪝",
                        simlE: "⪟",
                        simne: "≆",
                        simplus: "⨤",
                        simrarr: "⥲",
                        slarr: "←",
                        SmallCircle: "∘",
                        smallsetminus: "∖",
                        smashp: "⨳",
                        smeparsl: "⧤",
                        smid: "∣",
                        smile: "⌣",
                        smt: "⪪",
                        smte: "⪬",
                        smtes: "⪬︀",
                        softcy: "ь",
                        SOFTcy: "Ь",
                        sol: "/",
                        solb: "⧄",
                        solbar: "⌿",
                        sopf: "𝕤",
                        Sopf: "𝕊",
                        spades: "♠",
                        spadesuit: "♠",
                        spar: "∥",
                        sqcap: "⊓",
                        sqcaps: "⊓︀",
                        sqcup: "⊔",
                        sqcups: "⊔︀",
                        Sqrt: "√",
                        sqsub: "⊏",
                        sqsube: "⊑",
                        sqsubset: "⊏",
                        sqsubseteq: "⊑",
                        sqsup: "⊐",
                        sqsupe: "⊒",
                        sqsupset: "⊐",
                        sqsupseteq: "⊒",
                        squ: "□",
                        square: "□",
                        Square: "□",
                        SquareIntersection: "⊓",
                        SquareSubset: "⊏",
                        SquareSubsetEqual: "⊑",
                        SquareSuperset: "⊐",
                        SquareSupersetEqual: "⊒",
                        SquareUnion: "⊔",
                        squarf: "▪",
                        squf: "▪",
                        srarr: "→",
                        sscr: "𝓈",
                        Sscr: "𝒮",
                        ssetmn: "∖",
                        ssmile: "⌣",
                        sstarf: "⋆",
                        star: "☆",
                        Star: "⋆",
                        starf: "★",
                        straightepsilon: "ϵ",
                        straightphi: "ϕ",
                        strns: "¯",
                        sub: "⊂",
                        Sub: "⋐",
                        subdot: "⪽",
                        sube: "⊆",
                        subE: "⫅",
                        subedot: "⫃",
                        submult: "⫁",
                        subne: "⊊",
                        subnE: "⫋",
                        subplus: "⪿",
                        subrarr: "⥹",
                        subset: "⊂",
                        Subset: "⋐",
                        subseteq: "⊆",
                        subseteqq: "⫅",
                        SubsetEqual: "⊆",
                        subsetneq: "⊊",
                        subsetneqq: "⫋",
                        subsim: "⫇",
                        subsub: "⫕",
                        subsup: "⫓",
                        succ: "≻",
                        succapprox: "⪸",
                        succcurlyeq: "≽",
                        Succeeds: "≻",
                        SucceedsEqual: "⪰",
                        SucceedsSlantEqual: "≽",
                        SucceedsTilde: "≿",
                        succeq: "⪰",
                        succnapprox: "⪺",
                        succneqq: "⪶",
                        succnsim: "⋩",
                        succsim: "≿",
                        SuchThat: "∋",
                        sum: "∑",
                        Sum: "∑",
                        sung: "♪",
                        sup: "⊃",
                        Sup: "⋑",
                        sup1: "¹",
                        sup2: "²",
                        sup3: "³",
                        supdot: "⪾",
                        supdsub: "⫘",
                        supe: "⊇",
                        supE: "⫆",
                        supedot: "⫄",
                        Superset: "⊃",
                        SupersetEqual: "⊇",
                        suphsol: "⟉",
                        suphsub: "⫗",
                        suplarr: "⥻",
                        supmult: "⫂",
                        supne: "⊋",
                        supnE: "⫌",
                        supplus: "⫀",
                        supset: "⊃",
                        Supset: "⋑",
                        supseteq: "⊇",
                        supseteqq: "⫆",
                        supsetneq: "⊋",
                        supsetneqq: "⫌",
                        supsim: "⫈",
                        supsub: "⫔",
                        supsup: "⫖",
                        swarhk: "⤦",
                        swarr: "↙",
                        swArr: "⇙",
                        swarrow: "↙",
                        swnwar: "⤪",
                        szlig: "ß",
                        Tab: "	",
                        target: "⌖",
                        tau: "τ",
                        Tau: "Τ",
                        tbrk: "⎴",
                        tcaron: "ť",
                        Tcaron: "Ť",
                        tcedil: "ţ",
                        Tcedil: "Ţ",
                        tcy: "т",
                        Tcy: "Т",
                        tdot: "⃛",
                        telrec: "⌕",
                        tfr: "𝔱",
                        Tfr: "𝔗",
                        there4: "∴",
                        therefore: "∴",
                        Therefore: "∴",
                        theta: "θ",
                        Theta: "Θ",
                        thetasym: "ϑ",
                        thetav: "ϑ",
                        thickapprox: "≈",
                        thicksim: "∼",
                        ThickSpace: "  ",
                        thinsp: " ",
                        ThinSpace: " ",
                        thkap: "≈",
                        thksim: "∼",
                        thorn: "þ",
                        THORN: "Þ",
                        tilde: "˜",
                        Tilde: "∼",
                        TildeEqual: "≃",
                        TildeFullEqual: "≅",
                        TildeTilde: "≈",
                        times: "×",
                        timesb: "⊠",
                        timesbar: "⨱",
                        timesd: "⨰",
                        tint: "∭",
                        toea: "⤨",
                        top: "⊤",
                        topbot: "⌶",
                        topcir: "⫱",
                        topf: "𝕥",
                        Topf: "𝕋",
                        topfork: "⫚",
                        tosa: "⤩",
                        tprime: "‴",
                        trade: "™",
                        TRADE: "™",
                        triangle: "▵",
                        triangledown: "▿",
                        triangleleft: "◃",
                        trianglelefteq: "⊴",
                        triangleq: "≜",
                        triangleright: "▹",
                        trianglerighteq: "⊵",
                        tridot: "◬",
                        trie: "≜",
                        triminus: "⨺",
                        TripleDot: "⃛",
                        triplus: "⨹",
                        trisb: "⧍",
                        tritime: "⨻",
                        trpezium: "⏢",
                        tscr: "𝓉",
                        Tscr: "𝒯",
                        tscy: "ц",
                        TScy: "Ц",
                        tshcy: "ћ",
                        TSHcy: "Ћ",
                        tstrok: "ŧ",
                        Tstrok: "Ŧ",
                        twixt: "≬",
                        twoheadleftarrow: "↞",
                        twoheadrightarrow: "↠",
                        uacute: "ú",
                        Uacute: "Ú",
                        uarr: "↑",
                        uArr: "⇑",
                        Uarr: "↟",
                        Uarrocir: "⥉",
                        ubrcy: "ў",
                        Ubrcy: "Ў",
                        ubreve: "ŭ",
                        Ubreve: "Ŭ",
                        ucirc: "û",
                        Ucirc: "Û",
                        ucy: "у",
                        Ucy: "У",
                        udarr: "⇅",
                        udblac: "ű",
                        Udblac: "Ű",
                        udhar: "⥮",
                        ufisht: "⥾",
                        ufr: "𝔲",
                        Ufr: "𝔘",
                        ugrave: "ù",
                        Ugrave: "Ù",
                        uHar: "⥣",
                        uharl: "↿",
                        uharr: "↾",
                        uhblk: "▀",
                        ulcorn: "⌜",
                        ulcorner: "⌜",
                        ulcrop: "⌏",
                        ultri: "◸",
                        umacr: "ū",
                        Umacr: "Ū",
                        uml: "¨",
                        UnderBar: "_",
                        UnderBrace: "⏟",
                        UnderBracket: "⎵",
                        UnderParenthesis: "⏝",
                        Union: "⋃",
                        UnionPlus: "⊎",
                        uogon: "ų",
                        Uogon: "Ų",
                        uopf: "𝕦",
                        Uopf: "𝕌",
                        uparrow: "↑",
                        Uparrow: "⇑",
                        UpArrow: "↑",
                        UpArrowBar: "⤒",
                        UpArrowDownArrow: "⇅",
                        updownarrow: "↕",
                        Updownarrow: "⇕",
                        UpDownArrow: "↕",
                        UpEquilibrium: "⥮",
                        upharpoonleft: "↿",
                        upharpoonright: "↾",
                        uplus: "⊎",
                        UpperLeftArrow: "↖",
                        UpperRightArrow: "↗",
                        upsi: "υ",
                        Upsi: "ϒ",
                        upsih: "ϒ",
                        upsilon: "υ",
                        Upsilon: "Υ",
                        UpTee: "⊥",
                        UpTeeArrow: "↥",
                        upuparrows: "⇈",
                        urcorn: "⌝",
                        urcorner: "⌝",
                        urcrop: "⌎",
                        uring: "ů",
                        Uring: "Ů",
                        urtri: "◹",
                        uscr: "𝓊",
                        Uscr: "𝒰",
                        utdot: "⋰",
                        utilde: "ũ",
                        Utilde: "Ũ",
                        utri: "▵",
                        utrif: "▴",
                        uuarr: "⇈",
                        uuml: "ü",
                        Uuml: "Ü",
                        uwangle: "⦧",
                        vangrt: "⦜",
                        varepsilon: "ϵ",
                        varkappa: "ϰ",
                        varnothing: "∅",
                        varphi: "ϕ",
                        varpi: "ϖ",
                        varpropto: "∝",
                        varr: "↕",
                        vArr: "⇕",
                        varrho: "ϱ",
                        varsigma: "ς",
                        varsubsetneq: "⊊︀",
                        varsubsetneqq: "⫋︀",
                        varsupsetneq: "⊋︀",
                        varsupsetneqq: "⫌︀",
                        vartheta: "ϑ",
                        vartriangleleft: "⊲",
                        vartriangleright: "⊳",
                        vBar: "⫨",
                        Vbar: "⫫",
                        vBarv: "⫩",
                        vcy: "в",
                        Vcy: "В",
                        vdash: "⊢",
                        vDash: "⊨",
                        Vdash: "⊩",
                        VDash: "⊫",
                        Vdashl: "⫦",
                        vee: "∨",
                        Vee: "⋁",
                        veebar: "⊻",
                        veeeq: "≚",
                        vellip: "⋮",
                        verbar: "|",
                        Verbar: "‖",
                        vert: "|",
                        Vert: "‖",
                        VerticalBar: "∣",
                        VerticalLine: "|",
                        VerticalSeparator: "❘",
                        VerticalTilde: "≀",
                        VeryThinSpace: " ",
                        vfr: "𝔳",
                        Vfr: "𝔙",
                        vltri: "⊲",
                        vnsub: "⊂⃒",
                        vnsup: "⊃⃒",
                        vopf: "𝕧",
                        Vopf: "𝕍",
                        vprop: "∝",
                        vrtri: "⊳",
                        vscr: "𝓋",
                        Vscr: "𝒱",
                        vsubne: "⊊︀",
                        vsubnE: "⫋︀",
                        vsupne: "⊋︀",
                        vsupnE: "⫌︀",
                        Vvdash: "⊪",
                        vzigzag: "⦚",
                        wcirc: "ŵ",
                        Wcirc: "Ŵ",
                        wedbar: "⩟",
                        wedge: "∧",
                        Wedge: "⋀",
                        wedgeq: "≙",
                        weierp: "℘",
                        wfr: "𝔴",
                        Wfr: "𝔚",
                        wopf: "𝕨",
                        Wopf: "𝕎",
                        wp: "℘",
                        wr: "≀",
                        wreath: "≀",
                        wscr: "𝓌",
                        Wscr: "𝒲",
                        xcap: "⋂",
                        xcirc: "◯",
                        xcup: "⋃",
                        xdtri: "▽",
                        xfr: "𝔵",
                        Xfr: "𝔛",
                        xharr: "⟷",
                        xhArr: "⟺",
                        xi: "ξ",
                        Xi: "Ξ",
                        xlarr: "⟵",
                        xlArr: "⟸",
                        xmap: "⟼",
                        xnis: "⋻",
                        xodot: "⨀",
                        xopf: "𝕩",
                        Xopf: "𝕏",
                        xoplus: "⨁",
                        xotime: "⨂",
                        xrarr: "⟶",
                        xrArr: "⟹",
                        xscr: "𝓍",
                        Xscr: "𝒳",
                        xsqcup: "⨆",
                        xuplus: "⨄",
                        xutri: "△",
                        xvee: "⋁",
                        xwedge: "⋀",
                        yacute: "ý",
                        Yacute: "Ý",
                        yacy: "я",
                        YAcy: "Я",
                        ycirc: "ŷ",
                        Ycirc: "Ŷ",
                        ycy: "ы",
                        Ycy: "Ы",
                        yen: "¥",
                        yfr: "𝔶",
                        Yfr: "𝔜",
                        yicy: "ї",
                        YIcy: "Ї",
                        yopf: "𝕪",
                        Yopf: "𝕐",
                        yscr: "𝓎",
                        Yscr: "𝒴",
                        yucy: "ю",
                        YUcy: "Ю",
                        yuml: "ÿ",
                        Yuml: "Ÿ",
                        zacute: "ź",
                        Zacute: "Ź",
                        zcaron: "ž",
                        Zcaron: "Ž",
                        zcy: "з",
                        Zcy: "З",
                        zdot: "ż",
                        Zdot: "Ż",
                        zeetrf: "ℨ",
                        ZeroWidthSpace: "​",
                        zeta: "ζ",
                        Zeta: "Ζ",
                        zfr: "𝔷",
                        Zfr: "ℨ",
                        zhcy: "ж",
                        ZHcy: "Ж",
                        zigrarr: "⇝",
                        zopf: "𝕫",
                        Zopf: "ℤ",
                        zscr: "𝓏",
                        Zscr: "𝒵",
                        zwj: "‍",
                        zwnj: "‌"
                    },
                    b = {
                        aacute: "á",
                        Aacute: "Á",
                        acirc: "â",
                        Acirc: "Â",
                        acute: "´",
                        aelig: "æ",
                        AElig: "Æ",
                        agrave: "à",
                        Agrave: "À",
                        amp: "&",
                        AMP: "&",
                        aring: "å",
                        Aring: "Å",
                        atilde: "ã",
                        Atilde: "Ã",
                        auml: "ä",
                        Auml: "Ä",
                        brvbar: "¦",
                        ccedil: "ç",
                        Ccedil: "Ç",
                        cedil: "¸",
                        cent: "¢",
                        copy: "©",
                        COPY: "©",
                        curren: "¤",
                        deg: "°",
                        divide: "÷",
                        eacute: "é",
                        Eacute: "É",
                        ecirc: "ê",
                        Ecirc: "Ê",
                        egrave: "è",
                        Egrave: "È",
                        eth: "ð",
                        ETH: "Ð",
                        euml: "ë",
                        Euml: "Ë",
                        frac12: "½",
                        frac14: "¼",
                        frac34: "¾",
                        gt: ">",
                        GT: ">",
                        iacute: "í",
                        Iacute: "Í",
                        icirc: "î",
                        Icirc: "Î",
                        iexcl: "¡",
                        igrave: "ì",
                        Igrave: "Ì",
                        iquest: "¿",
                        iuml: "ï",
                        Iuml: "Ï",
                        laquo: "«",
                        lt: "<",
                        LT: "<",
                        macr: "¯",
                        micro: "µ",
                        middot: "·",
                        nbsp: " ",
                        not: "¬",
                        ntilde: "ñ",
                        Ntilde: "Ñ",
                        oacute: "ó",
                        Oacute: "Ó",
                        ocirc: "ô",
                        Ocirc: "Ô",
                        ograve: "ò",
                        Ograve: "Ò",
                        ordf: "ª",
                        ordm: "º",
                        oslash: "ø",
                        Oslash: "Ø",
                        otilde: "õ",
                        Otilde: "Õ",
                        ouml: "ö",
                        Ouml: "Ö",
                        para: "¶",
                        plusmn: "±",
                        pound: "£",
                        quot: '"',
                        QUOT: '"',
                        raquo: "»",
                        reg: "®",
                        REG: "®",
                        sect: "§",
                        shy: "­",
                        sup1: "¹",
                        sup2: "²",
                        sup3: "³",
                        szlig: "ß",
                        thorn: "þ",
                        THORN: "Þ",
                        times: "×",
                        uacute: "ú",
                        Uacute: "Ú",
                        ucirc: "û",
                        Ucirc: "Û",
                        ugrave: "ù",
                        Ugrave: "Ù",
                        uml: "¨",
                        uuml: "ü",
                        Uuml: "Ü",
                        yacute: "ý",
                        Yacute: "Ý",
                        yen: "¥",
                        yuml: "ÿ"
                    },
                    y = {
                        0: "�",
                        128: "€",
                        130: "‚",
                        131: "ƒ",
                        132: "„",
                        133: "…",
                        134: "†",
                        135: "‡",
                        136: "ˆ",
                        137: "‰",
                        138: "Š",
                        139: "‹",
                        140: "Œ",
                        142: "Ž",
                        145: "‘",
                        146: "’",
                        147: "“",
                        148: "”",
                        149: "•",
                        150: "–",
                        151: "—",
                        152: "˜",
                        153: "™",
                        154: "š",
                        155: "›",
                        156: "œ",
                        158: "ž",
                        159: "Ÿ"
                    },
                    v = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111],
                    w = String.fromCharCode,
                    A = {}.hasOwnProperty,
                    D = function(e, r) {
                        return A.call(e, r)
                    },
                    k = function(e, r) {
                        for (var t = -1, n = e.length; ++t < n;)
                            if (e[t] == r) return !0;
                        return !1
                    },
                    E = function(e, r) {
                        if (!e) return r;
                        var t, n = {};
                        for (t in r) n[t] = D(e, t) ? e[t] : r[t];
                        return n
                    },
                    x = function(e, r) {
                        var t = "";
                        return e >= 55296 && e <= 57343 || e > 1114111 ? (r && q("character reference outside the permissible Unicode range"), "�") : D(y, e) ? (r && q("disallowed character reference"), y[e]) : (r && k(v, e) && q("disallowed character reference"), e > 65535 && (e -= 65536, t += w(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += w(e))
                    },
                    C = function(e) {
                        return "&#x" + e.toString(16).toUpperCase() + ";"
                    },
                    S = function(e) {
                        return "&#" + e + ";"
                    },
                    q = function(e) {
                        throw Error("Parse error: " + e)
                    },
                    L = function(e, r) {
                        (r = E(r, L.options)).strict && d.test(e) && q("forbidden code point");
                        var t = r.encodeEverything,
                            n = r.useNamedReferences,
                            a = r.allowUnsafeSymbols,
                            o = r.decimal ? S : C,
                            f = function(e) {
                                return o(e.charCodeAt(0))
                            };
                        return t ? (e = e.replace(i, function(e) {
                            return n && D(u, e) ? "&" + u[e] + ";" : f(e)
                        }), n && (e = e.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;")), n && (e = e.replace(c, function(e) {
                            return "&" + u[e] + ";"
                        }))) : n ? (a || (e = e.replace(h, function(e) {
                            return "&" + u[e] + ";"
                        })), e = (e = e.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;")).replace(c, function(e) {
                            return "&" + u[e] + ";"
                        })) : a || (e = e.replace(h, f)), e.replace(s, function(e) {
                            return o((e.charCodeAt(0) - 55296) * 1024 + e.charCodeAt(1) - 56320 + 65536)
                        }).replace(l, f)
                    };
                L.options = {
                    allowUnsafeSymbols: !1,
                    encodeEverything: !1,
                    strict: !1,
                    useNamedReferences: !1,
                    decimal: !1
                };
                var T = function(e, r) {
                    var t = (r = E(r, T.options)).strict;
                    return t && p.test(e) && q("malformed character reference"), e.replace(g, function(e, n, a, o, s, i, l, c, u) {
                        var h, f;
                        return n ? m[f = n] : a ? (f = a, o && r.isAttributeValue) ? (t && "=" == o && q("`&` did not start a character reference"), e) : (t && q("named character reference was not terminated by a semicolon"), b[f] + (o || "")) : s ? (h = i, t && !h && q("character reference was not terminated by a semicolon"), x(parseInt(s, 10), t)) : l ? (h = c, t && !h && q("character reference was not terminated by a semicolon"), x(parseInt(l, 16), t)) : (t && q("named character reference was not terminated by a semicolon"), e)
                    })
                };
                T.options = {
                    isAttributeValue: !1,
                    strict: !1
                };
                var _ = {
                    version: "1.2.0",
                    encode: L,
                    decode: T,
                    escape: function(e) {
                        return e.replace(h, function(e) {
                            return f[e]
                        })
                    },
                    unescape: T
                };
                if ("function" == typeof define && "object" == typeof define.amd && define.amd) define(function() {
                    return _
                });
                else if (r && !r.nodeType)
                    if (a) a.exports = _;
                    else
                        for (var B in _) D(_, B) && (r[B] = _[B]);
                else n.he = _
            }(this)
    }),
    MdCq: (function(e, r, t) {
        var n = t("eeDu"),
            a = {
                childContextTypes: !0,
                contextType: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                getDerivedStateFromError: !0,
                getDerivedStateFromProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
            },
            o = {
                name: !0,
                length: !0,
                prototype: !0,
                caller: !0,
                callee: !0,
                arguments: !0,
                arity: !0
            },
            s = {
                $$typeof: !0,
                compare: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0,
                type: !0
            },
            i = {};

        function l(e) {
            return n.isMemo(e) ? s : i[e.$$typeof] || a
        }
        i[n.ForwardRef] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0
        }, i[n.Memo] = s;
        var c = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            h = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            d = Object.prototype;
        e.exports = function e(r, t, n) {
            if ("string" != typeof t) {
                if (d) {
                    var a = p(t);
                    a && a !== d && e(r, a, n)
                }
                var s = u(t);
                h && (s = s.concat(h(t)));
                for (var i = l(r), g = l(t), m = 0; m < s.length; ++m) {
                    var b = s[m];
                    if (!o[b] && !(n && n[b]) && !(g && g[b]) && !(i && i[b])) {
                        var y = f(t, b);
                        try {
                            c(r, b, y)
                        } catch (e) {}
                    }
                }
            }
            return r
        }
    }),
    oeEd: (function(e, r, t) {
        var n = t("SRbQ"),
            a = t("oeUo"),
            o = t("qSyD"),
            s = t("xLzX");

        function i(e) {
            return {
                create: function() {
                    return {
                        get: function(r) {
                            return e[r]
                        },
                        set: function(r, t) {
                            e[r] = t
                        }
                    }
                }
            }
        }
        var l = function() {
            function e(r, t, o, l) {
                void 0 === t && (t = e.defaultLocale);
                var c, u, h = this;
                if (this.formatterCache = {
                        number: {},
                        dateTime: {},
                        pluralRules: {}
                    }, this.format = function(e) {
                        var r = h.formatToParts(e);
                        if (1 === r.length) return r[0].value;
                        var t = r.reduce(function(e, r) {
                            return e.length && r.type === s.a.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += r.value : e.push(r.value), e
                        }, []);
                        return t.length <= 1 ? t[0] || "" : t
                    }, this.formatToParts = function(e) {
                        return (0, s.b)(h.ast, h.locales, h.formatters, h.formats, e, void 0, h.message)
                    }, this.resolvedOptions = function() {
                        var e;
                        return {
                            locale: (null == (e = h.resolvedLocale) ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(h.locales)[0]
                        }
                    }, this.getAst = function() {
                        return h.ast
                    }, this.locales = t, this.resolvedLocale = e.resolveLocale(t), "string" == typeof r) {
                    if (this.message = r, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                    var f = l || {},
                        p = (f.formatters, (0, n.h)(f, ["formatters"]));
                    this.ast = e.__parse(r, (0, n.b)((0, n.b)({}, p), {
                        locale: this.resolvedLocale
                    }))
                } else this.ast = r;
                if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
                this.formats = (c = e.formats, o ? Object.keys(c).reduce(function(e, r) {
                    var t, a;
                    return e[r] = (t = c[r], (a = o[r]) ? (0, n.b)((0, n.b)((0, n.b)({}, t || {}), a || {}), Object.keys(t).reduce(function(e, r) {
                        return e[r] = (0, n.b)((0, n.b)({}, t[r]), a[r] || {}), e
                    }, {})) : t), e
                }, (0, n.b)({}, c)) : c), this.formatters = l && l.formatters || (void 0 === (u = this.formatterCache) && (u = {
                    number: {},
                    dateTime: {},
                    pluralRules: {}
                }), {
                    getNumberFormat: (0, a.a)(function() {
                        for (var e, r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
                        return new((e = Intl.NumberFormat).bind.apply(e, (0, n.i)([void 0], r, !1)))
                    }, {
                        cache: i(u.number),
                        strategy: a.b.variadic
                    }),
                    getDateTimeFormat: (0, a.a)(function() {
                        for (var e, r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
                        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, n.i)([void 0], r, !1)))
                    }, {
                        cache: i(u.dateTime),
                        strategy: a.b.variadic
                    }),
                    getPluralRules: (0, a.a)(function() {
                        for (var e, r = [], t = 0; t < arguments.length; t++) r[t] = arguments[t];
                        return new((e = Intl.PluralRules).bind.apply(e, (0, n.i)([void 0], r, !1)))
                    }, {
                        cache: i(u.pluralRules),
                        strategy: a.b.variadic
                    })
                })
            }
            return Object.defineProperty(e, "defaultLocale", {
                get: function() {
                    return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale
                },
                enumerable: !1,
                configurable: !0
            }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
                if (void 0 !== Intl.Locale) {
                    var r = Intl.NumberFormat.supportedLocalesOf(e);
                    return new Intl.Locale(r.length > 0 ? r[0] : "string" == typeof e ? e : e[0])
                }
            }, e.__parse = o.m, e.formats = {
                number: {
                    integer: {
                        maximumFractionDigits: 0
                    },
                    currency: {
                        style: "currency"
                    },
                    percent: {
                        style: "percent"
                    }
                },
                date: {
                    short: {
                        month: "numeric",
                        day: "numeric",
                        year: "2-digit"
                    },
                    medium: {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    },
                    long: {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    },
                    full: {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }
                },
                time: {
                    short: {
                        hour: "numeric",
                        minute: "numeric"
                    },
                    medium: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric"
                    },
                    long: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        timeZoneName: "short"
                    },
                    full: {
                        hour: "numeric",
                        minute: "numeric",
                        second: "numeric",
                        timeZoneName: "short"
                    }
                }
            }, e
        }();
        t.d(r, {}, {
            a: l
        })
    }),
    E6Ga: (function(e, r, t) {
        var n, a, o = t("SRbQ");
        (n = a || (a = {})).MISSING_VALUE = "MISSING_VALUE", n.INVALID_VALUE = "INVALID_VALUE", n.MISSING_INTL_API = "MISSING_INTL_API";
        var s = function(e) {
                function r(r, t, n) {
                    var a = e.call(this, r) || this;
                    return a.code = t, a.originalMessage = n, a
                }
                return (0, o.f)(r, e), r.prototype.toString = function() {
                    return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
                }, r
            }(Error),
            i = function(e) {
                function r(r, t, n, o) {
                    return e.call(this, 'Invalid values for "'.concat(r, '": "').concat(t, '". Options are "').concat(Object.keys(n).join('", "'), '"'), a.INVALID_VALUE, o) || this
                }
                return (0, o.f)(r, e), r
            }(s),
            l = function(e) {
                function r(r, t, n) {
                    return e.call(this, 'Value for "'.concat(r, '" must be of type ').concat(t), a.INVALID_VALUE, n) || this
                }
                return (0, o.f)(r, e), r
            }(s),
            c = function(e) {
                function r(r, t) {
                    return e.call(this, 'The intl string context variable "'.concat(r, '" was not provided to the string "').concat(t, '"'), a.MISSING_VALUE, t) || this
                }
                return (0, o.f)(r, e), r
            }(s);
        t.d(r, {
            a: () => a
        }, {
            b: s,
            c: i,
            d: l,
            e: c
        })
    }),
    xLzX: (function(e, r, t) {
        var n, a, o = t("qSyD"),
            s = t("E6Ga");

        function i(e) {
            return "function" == typeof e
        }(n = a || (a = {}))[n.literal = 0] = "literal", n[n.object = 1] = "object", t.d(r, {
            a: () => a
        }, {
            b: function e(r, t, n, l, c, u, h) {
                if (1 === r.length && (0, o.e)(r[0])) return [{
                    type: a.literal,
                    value: r[0].value
                }];
                for (var f = [], p = 0; p < r.length; p++) {
                    var d = r[p];
                    if ((0, o.e)(d)) {
                        f.push({
                            type: a.literal,
                            value: d.value
                        });
                        continue
                    }
                    if ((0, o.i)(d)) {
                        "number" == typeof u && f.push({
                            type: a.literal,
                            value: n.getNumberFormat(t).format(u)
                        });
                        continue
                    }
                    var g = d.value;
                    if (!(c && g in c)) throw new s.e(g, h);
                    var m = c[g];
                    if ((0, o.b)(d)) {
                        m && "string" != typeof m && "number" != typeof m || (m = "string" == typeof m || "number" == typeof m ? String(m) : ""), f.push({
                            type: "string" == typeof m ? a.literal : a.object,
                            value: m
                        });
                        continue
                    }
                    if ((0, o.c)(d)) {
                        var b = "string" == typeof d.style ? l.date[d.style] : (0, o.d)(d.style) ? d.style.parsedOptions : void 0;
                        f.push({
                            type: a.literal,
                            value: n.getDateTimeFormat(t, b).format(m)
                        });
                        continue
                    }
                    if ((0, o.l)(d)) {
                        var b = "string" == typeof d.style ? l.time[d.style] : (0, o.d)(d.style) ? d.style.parsedOptions : l.time.medium;
                        f.push({
                            type: a.literal,
                            value: n.getDateTimeFormat(t, b).format(m)
                        });
                        continue
                    }
                    if ((0, o.f)(d)) {
                        var b = "string" == typeof d.style ? l.number[d.style] : (0, o.g)(d.style) ? d.style.parsedOptions : void 0;
                        b && b.scale && (m *= b.scale || 1), f.push({
                            type: a.literal,
                            value: n.getNumberFormat(t, b).format(m)
                        });
                        continue
                    }
                    if ((0, o.k)(d)) {
                        var y = d.children,
                            v = d.value,
                            w = c[v];
                        if (!i(w)) throw new s.d(v, "function", h);
                        var A = w(e(y, t, n, l, c, u).map(function(e) {
                            return e.value
                        }));
                        Array.isArray(A) || (A = [A]), f.push.apply(f, A.map(function(e) {
                            return {
                                type: "string" == typeof e ? a.literal : a.object,
                                value: e
                            }
                        }))
                    }
                    if ((0, o.j)(d)) {
                        var D = d.options[m] || d.options.other;
                        if (!D) throw new s.c(d.value, m, Object.keys(d.options), h);
                        f.push.apply(f, e(D.value, t, n, l, c));
                        continue
                    }
                    if ((0, o.h)(d)) {
                        var D = d.options["=".concat(m)];
                        if (!D) {
                            if (!Intl.PluralRules) throw new s.b('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', s.a.MISSING_INTL_API, h);
                            var k = n.getPluralRules(t, {
                                type: d.pluralType
                            }).select(m - (d.offset || 0));
                            D = d.options[k] || d.options.other
                        }
                        if (!D) throw new s.c(d.value, m, Object.keys(d.options), h);
                        f.push.apply(f, e(D.value, t, n, l, c, m - (d.offset || 0)));
                        continue
                    }
                }
                return f.length < 2 ? f : f.reduce(function(e, r) {
                    var t = e[e.length - 1];
                    return t && t.type === a.literal && r.type === a.literal ? t.value += r.value : e.push(r), e
                }, [])
            },
            c: i
        })
    }),
    o0i0: (function(e) {
        function r(e) {
            return !!e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then
        }
        e.exports = r, e.exports.default = r
    }),
    hXDn: (function(e, r, t) {
        ! function() {
            "use strict";
            var r = "input is invalid type",
                n = "object" == typeof window,
                a = n ? window : {};
            a.JS_SHA256_NO_WINDOW && (n = !1);
            var o = !n && "object" == typeof self,
                s = !a.JS_SHA256_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node && "renderer" != process.type;
            s ? a = t.g : o && (a = self);
            var i = !a.JS_SHA256_NO_COMMON_JS && e.exports,
                l = "function" == typeof define && define.amd,
                c = !a.JS_SHA256_NO_ARRAY_BUFFER && "u" > typeof ArrayBuffer,
                u = "0123456789abcdef".split(""),
                h = [-0x80000000, 8388608, 32768, 128],
                f = [24, 16, 8, 0],
                p = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2],
                d = ["hex", "array", "digest", "arrayBuffer"],
                g = [];
            (a.JS_SHA256_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }), c && (a.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(e) {
                return "object" == typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
            });
            var m = function(e, r) {
                    return function(t) {
                        return new A(r, !0).update(t)[e]()
                    }
                },
                b = function(e) {
                    var r = m("hex", e);
                    s && (r = y(r, e)), r.create = function() {
                        return new A(e)
                    }, r.update = function(e) {
                        return r.create().update(e)
                    };
                    for (var t = 0; t < d.length; ++t) {
                        var n = d[t];
                        r[n] = m(n, e)
                    }
                    return r
                },
                y = function(e, n) {
                    var o, s = t("ilEt"),
                        i = t("NtJ1").Buffer,
                        l = n ? "sha224" : "sha256";
                    return o = i.from && !a.JS_SHA256_NO_BUFFER_FROM ? i.from : function(e) {
                            return new i(e)
                        },
                        function(t) {
                            if ("string" == typeof t) return s.createHash(l).update(t, "utf8").digest("hex");
                            if (null == t) throw Error(r);
                            return t.constructor === ArrayBuffer && (t = new Uint8Array(t)), Array.isArray(t) || ArrayBuffer.isView(t) || t.constructor === i ? s.createHash(l).update(o(t)).digest("hex") : e(t)
                        }
                },
                v = function(e, r) {
                    return function(t, n) {
                        return new D(t, r, !0).update(n)[e]()
                    }
                },
                w = function(e) {
                    var r = v("hex", e);
                    r.create = function(r) {
                        return new D(r, e)
                    }, r.update = function(e, t) {
                        return r.create(e).update(t)
                    };
                    for (var t = 0; t < d.length; ++t) {
                        var n = d[t];
                        r[n] = v(n, e)
                    }
                    return r
                };

            function A(e, r) {
                r ? (g[0] = g[16] = g[1] = g[2] = g[3] = g[4] = g[5] = g[6] = g[7] = g[8] = g[9] = g[10] = g[11] = g[12] = g[13] = g[14] = g[15] = 0, this.blocks = g) : this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], e ? (this.h0 = 0xc1059ed8, this.h1 = 0x367cd507, this.h2 = 0x3070dd17, this.h3 = 0xf70e5939, this.h4 = 0xffc00b31, this.h5 = 0x68581511, this.h6 = 0x64f98fa7, this.h7 = 0xbefa4fa4) : (this.h0 = 0x6a09e667, this.h1 = 0xbb67ae85, this.h2 = 0x3c6ef372, this.h3 = 0xa54ff53a, this.h4 = 0x510e527f, this.h5 = 0x9b05688c, this.h6 = 0x1f83d9ab, this.h7 = 0x5be0cd19), this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0, this.is224 = e
            }

            function D(e, t, n) {
                var a, o = typeof e;
                if ("string" === o) {
                    var s, i = [],
                        l = e.length,
                        u = 0;
                    for (a = 0; a < l; ++a)(s = e.charCodeAt(a)) < 128 ? i[u++] = s : (s < 2048 ? i[u++] = 192 | s >>> 6 : (s < 55296 || s >= 57344 ? i[u++] = 224 | s >>> 12 : (s = 65536 + ((1023 & s) << 10 | 1023 & e.charCodeAt(++a)), i[u++] = 240 | s >>> 18, i[u++] = 128 | s >>> 12 & 63), i[u++] = 128 | s >>> 6 & 63), i[u++] = 128 | 63 & s);
                    e = i
                } else if ("object" === o) {
                    if (null === e) throw Error(r);
                    else if (c && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                    else if (!Array.isArray(e) && (!c || !ArrayBuffer.isView(e))) throw Error(r)
                } else throw Error(r);
                e.length > 64 && (e = new A(t, !0).update(e).array());
                var h = [],
                    f = [];
                for (a = 0; a < 64; ++a) {
                    var p = e[a] || 0;
                    h[a] = 92 ^ p, f[a] = 54 ^ p
                }
                A.call(this, t, n), this.update(f), this.oKeyPad = h, this.inner = !0, this.sharedMemory = n
            }
            A.prototype.update = function(e) {
                if (!this.finalized) {
                    var t, n = typeof e;
                    if ("string" !== n) {
                        if ("object" === n) {
                            if (null === e) throw Error(r);
                            else if (c && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                            else if (!Array.isArray(e) && (!c || !ArrayBuffer.isView(e))) throw Error(r)
                        } else throw Error(r);
                        t = !0
                    }
                    for (var a, o, s = 0, i = e.length, l = this.blocks; s < i;) {
                        if (this.hashed && (this.hashed = !1, l[0] = this.block, this.block = l[16] = l[1] = l[2] = l[3] = l[4] = l[5] = l[6] = l[7] = l[8] = l[9] = l[10] = l[11] = l[12] = l[13] = l[14] = l[15] = 0), t)
                            for (o = this.start; s < i && o < 64; ++s) l[o >>> 2] |= e[s] << f[3 & o++];
                        else
                            for (o = this.start; s < i && o < 64; ++s)(a = e.charCodeAt(s)) < 128 ? l[o >>> 2] |= a << f[3 & o++] : (a < 2048 ? l[o >>> 2] |= (192 | a >>> 6) << f[3 & o++] : (a < 55296 || a >= 57344 ? l[o >>> 2] |= (224 | a >>> 12) << f[3 & o++] : (a = 65536 + ((1023 & a) << 10 | 1023 & e.charCodeAt(++s)), l[o >>> 2] |= (240 | a >>> 18) << f[3 & o++], l[o >>> 2] |= (128 | a >>> 12 & 63) << f[3 & o++]), l[o >>> 2] |= (128 | a >>> 6 & 63) << f[3 & o++]), l[o >>> 2] |= (128 | 63 & a) << f[3 & o++]);
                        this.lastByteIndex = o, this.bytes += o - this.start, o >= 64 ? (this.block = l[16], this.start = o - 64, this.hash(), this.hashed = !0) : this.start = o
                    }
                    return this.bytes > 0xffffffff && (this.hBytes += this.bytes / 0x100000000 | 0, this.bytes = this.bytes % 0x100000000), this
                }
            }, A.prototype.finalize = function() {
                if (!this.finalized) {
                    this.finalized = !0;
                    var e = this.blocks,
                        r = this.lastByteIndex;
                    e[16] = this.block, e[r >>> 2] |= h[3 & r], this.block = e[16], r >= 56 && (this.hashed || this.hash(), e[0] = this.block, e[16] = e[1] = e[2] = e[3] = e[4] = e[5] = e[6] = e[7] = e[8] = e[9] = e[10] = e[11] = e[12] = e[13] = e[14] = e[15] = 0), e[14] = this.hBytes << 3 | this.bytes >>> 29, e[15] = this.bytes << 3, this.hash()
                }
            }, A.prototype.hash = function() {
                var e, r, t, n, a, o, s, i, l, c, u = this.h0,
                    h = this.h1,
                    f = this.h2,
                    d = this.h3,
                    g = this.h4,
                    m = this.h5,
                    b = this.h6,
                    y = this.h7,
                    v = this.blocks;
                for (e = 16; e < 64; ++e) r = ((a = v[e - 15]) >>> 7 | a << 25) ^ (a >>> 18 | a << 14) ^ a >>> 3, t = ((a = v[e - 2]) >>> 17 | a << 15) ^ (a >>> 19 | a << 13) ^ a >>> 10, v[e] = v[e - 16] + r + v[e - 7] + t | 0;
                for (c = h & f, e = 0; e < 64; e += 4) this.first ? (this.is224 ? (s = 300032, y = (a = v[0] - 0x543c9a5b) - 0x8f1a6c7 | 0, d = a + 0x170e9b5 | 0) : (s = 0x2a01a605, y = (a = v[0] - 0xc881298) - 0x5ab00ac6 | 0, d = a + 0x8909ae5 | 0), this.first = !1) : (r = (u >>> 2 | u << 30) ^ (u >>> 13 | u << 19) ^ (u >>> 22 | u << 10), t = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7), n = (s = u & h) ^ u & f ^ c, a = y + t + (g & m ^ ~g & b) + p[e] + v[e], o = r + n, y = d + a | 0, d = a + o | 0), r = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10), t = (y >>> 6 | y << 26) ^ (y >>> 11 | y << 21) ^ (y >>> 25 | y << 7), n = (i = d & u) ^ d & h ^ s, a = b + t + (y & g ^ ~y & m) + p[e + 1] + v[e + 1], o = r + n, b = f + a | 0, r = ((f = a + o | 0) >>> 2 | f << 30) ^ (f >>> 13 | f << 19) ^ (f >>> 22 | f << 10), t = (b >>> 6 | b << 26) ^ (b >>> 11 | b << 21) ^ (b >>> 25 | b << 7), n = (l = f & d) ^ f & u ^ i, a = m + t + (b & y ^ ~b & g) + p[e + 2] + v[e + 2], o = r + n, m = h + a | 0, r = ((h = a + o | 0) >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10), t = (m >>> 6 | m << 26) ^ (m >>> 11 | m << 21) ^ (m >>> 25 | m << 7), n = (c = h & f) ^ h & d ^ l, a = g + t + (m & b ^ ~m & y) + p[e + 3] + v[e + 3], o = r + n, g = u + a | 0, u = a + o | 0, this.chromeBugWorkAround = !0;
                this.h0 = this.h0 + u | 0, this.h1 = this.h1 + h | 0, this.h2 = this.h2 + f | 0, this.h3 = this.h3 + d | 0, this.h4 = this.h4 + g | 0, this.h5 = this.h5 + m | 0, this.h6 = this.h6 + b | 0, this.h7 = this.h7 + y | 0
            }, A.prototype.hex = function() {
                this.finalize();
                var e = this.h0,
                    r = this.h1,
                    t = this.h2,
                    n = this.h3,
                    a = this.h4,
                    o = this.h5,
                    s = this.h6,
                    i = this.h7,
                    l = u[e >>> 28 & 15] + u[e >>> 24 & 15] + u[e >>> 20 & 15] + u[e >>> 16 & 15] + u[e >>> 12 & 15] + u[e >>> 8 & 15] + u[e >>> 4 & 15] + u[15 & e] + u[r >>> 28 & 15] + u[r >>> 24 & 15] + u[r >>> 20 & 15] + u[r >>> 16 & 15] + u[r >>> 12 & 15] + u[r >>> 8 & 15] + u[r >>> 4 & 15] + u[15 & r] + u[t >>> 28 & 15] + u[t >>> 24 & 15] + u[t >>> 20 & 15] + u[t >>> 16 & 15] + u[t >>> 12 & 15] + u[t >>> 8 & 15] + u[t >>> 4 & 15] + u[15 & t] + u[n >>> 28 & 15] + u[n >>> 24 & 15] + u[n >>> 20 & 15] + u[n >>> 16 & 15] + u[n >>> 12 & 15] + u[n >>> 8 & 15] + u[n >>> 4 & 15] + u[15 & n] + u[a >>> 28 & 15] + u[a >>> 24 & 15] + u[a >>> 20 & 15] + u[a >>> 16 & 15] + u[a >>> 12 & 15] + u[a >>> 8 & 15] + u[a >>> 4 & 15] + u[15 & a] + u[o >>> 28 & 15] + u[o >>> 24 & 15] + u[o >>> 20 & 15] + u[o >>> 16 & 15] + u[o >>> 12 & 15] + u[o >>> 8 & 15] + u[o >>> 4 & 15] + u[15 & o] + u[s >>> 28 & 15] + u[s >>> 24 & 15] + u[s >>> 20 & 15] + u[s >>> 16 & 15] + u[s >>> 12 & 15] + u[s >>> 8 & 15] + u[s >>> 4 & 15] + u[15 & s];
                return this.is224 || (l += u[i >>> 28 & 15] + u[i >>> 24 & 15] + u[i >>> 20 & 15] + u[i >>> 16 & 15] + u[i >>> 12 & 15] + u[i >>> 8 & 15] + u[i >>> 4 & 15] + u[15 & i]), l
            }, A.prototype.toString = A.prototype.hex, A.prototype.digest = function() {
                this.finalize();
                var e = this.h0,
                    r = this.h1,
                    t = this.h2,
                    n = this.h3,
                    a = this.h4,
                    o = this.h5,
                    s = this.h6,
                    i = this.h7,
                    l = [e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s];
                return this.is224 || l.push(i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i), l
            }, A.prototype.array = A.prototype.digest, A.prototype.arrayBuffer = function() {
                this.finalize();
                var e = new ArrayBuffer(this.is224 ? 28 : 32),
                    r = new DataView(e);
                return r.setUint32(0, this.h0), r.setUint32(4, this.h1), r.setUint32(8, this.h2), r.setUint32(12, this.h3), r.setUint32(16, this.h4), r.setUint32(20, this.h5), r.setUint32(24, this.h6), this.is224 || r.setUint32(28, this.h7), e
            }, D.prototype = new A, D.prototype.finalize = function() {
                if (A.prototype.finalize.call(this), this.inner) {
                    this.inner = !1;
                    var e = this.array();
                    A.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(e), A.prototype.finalize.call(this)
                }
            };
            var k = b();
            k.sha256 = k, k.sha224 = b(!0), k.sha256.hmac = w(), k.sha224.hmac = w(!0), i ? e.exports = k : (a.sha256 = k.sha256, a.sha224 = k.sha224, l && define(function() {
                return k
            }))
        }()
    }),
    EWQk: (function(e, r, t) {
        var n, a, o, s, i, l, c, u, h;

        function f(e, r = !1) {
            let t = e.length,
                n = 0,
                a = "",
                o = 0,
                s = 16,
                i = 0,
                l = 0,
                c = 0,
                u = 0,
                h = 0;

            function m() {
                if (a = "", h = 0, o = n, l = i, u = c, n >= t) return o = t, s = 17;
                let r = e.charCodeAt(n);
                if (p(r)) {
                    do n++, a += String.fromCharCode(r), r = e.charCodeAt(n); while (p(r)) return s = 15
                }
                if (d(r)) return n++, a += String.fromCharCode(r), 13 === r && 10 === e.charCodeAt(n) && (n++, a += "\n"), i++, c = n, s = 14;
                switch (r) {
                    case 123:
                        return n++, s = 1;
                    case 125:
                        return n++, s = 2;
                    case 91:
                        return n++, s = 3;
                    case 93:
                        return n++, s = 4;
                    case 58:
                        return n++, s = 6;
                    case 44:
                        return n++, s = 5;
                    case 34:
                        return n++, a = function() {
                            let r = "",
                                a = n;
                            for (;;) {
                                if (n >= t) {
                                    r += e.substring(a, n), h = 2;
                                    break
                                }
                                let o = e.charCodeAt(n);
                                if (34 === o) {
                                    r += e.substring(a, n), n++;
                                    break
                                }
                                if (92 === o) {
                                    if (r += e.substring(a, n), ++n >= t) {
                                        h = 2;
                                        break
                                    }
                                    switch (e.charCodeAt(n++)) {
                                        case 34:
                                            r += '"';
                                            break;
                                        case 92:
                                            r += "\\";
                                            break;
                                        case 47:
                                            r += "/";
                                            break;
                                        case 98:
                                            r += "\b";
                                            break;
                                        case 102:
                                            r += "\f";
                                            break;
                                        case 110:
                                            r += "\n";
                                            break;
                                        case 114:
                                            r += "\r";
                                            break;
                                        case 116:
                                            r += "	";
                                            break;
                                        case 117:
                                            let o = function(r) {
                                                let t = 0,
                                                    a = 0;
                                                for (; t < 4 || !r;) {
                                                    let r = e.charCodeAt(n);
                                                    if (r >= 48 && r <= 57) a = 16 * a + r - 48;
                                                    else if (r >= 65 && r <= 70) a = 16 * a + r - 65 + 10;
                                                    else if (r >= 97 && r <= 102) a = 16 * a + r - 97 + 10;
                                                    else break;
                                                    n++, t++
                                                }
                                                return t < 4 && (a = -1), a
                                            }(!0);
                                            o >= 0 ? r += String.fromCharCode(o) : h = 4;
                                            break;
                                        default:
                                            h = 5
                                    }
                                    a = n;
                                    continue
                                }
                                if (o >= 0 && o <= 31)
                                    if (d(o)) {
                                        r += e.substring(a, n), h = 2;
                                        break
                                    } else h = 6;
                                n++
                            }
                            return r
                        }(), s = 10;
                    case 47:
                        let f = n - 1;
                        if (47 === e.charCodeAt(n + 1)) {
                            for (n += 2; n < t && !d(e.charCodeAt(n));) n++;
                            return a = e.substring(f, n), s = 12
                        }
                        if (42 === e.charCodeAt(n + 1)) {
                            n += 2;
                            let r = t - 1,
                                o = !1;
                            for (; n < r;) {
                                let r = e.charCodeAt(n);
                                if (42 === r && 47 === e.charCodeAt(n + 1)) {
                                    n += 2, o = !0;
                                    break
                                }
                                n++, d(r) && (13 === r && 10 === e.charCodeAt(n) && n++, i++, c = n)
                            }
                            return o || (n++, h = 1), a = e.substring(f, n), s = 13
                        }
                        return a += String.fromCharCode(r), n++, s = 16;
                    case 45:
                        if (a += String.fromCharCode(r), ++n === t || !g(e.charCodeAt(n))) return s = 16;
                    case 48:
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                        return a += function() {
                            let r = n;
                            if (48 === e.charCodeAt(n)) n++;
                            else
                                for (n++; n < e.length && g(e.charCodeAt(n));) n++;
                            if (n < e.length && 46 === e.charCodeAt(n)) {
                                if (!(++n < e.length && g(e.charCodeAt(n)))) return h = 3, e.substring(r, n);
                                for (n++; n < e.length && g(e.charCodeAt(n));) n++
                            }
                            let t = n;
                            if (n < e.length && (69 === e.charCodeAt(n) || 101 === e.charCodeAt(n)))
                                if ((++n < e.length && 43 === e.charCodeAt(n) || 45 === e.charCodeAt(n)) && n++, n < e.length && g(e.charCodeAt(n))) {
                                    for (n++; n < e.length && g(e.charCodeAt(n));) n++;
                                    t = n
                                } else h = 3;
                            return e.substring(r, t)
                        }(), s = 11;
                    default:
                        for (; n < t && function(e) {
                                if (p(e) || d(e)) return !1;
                                switch (e) {
                                    case 125:
                                    case 93:
                                    case 123:
                                    case 91:
                                    case 34:
                                    case 58:
                                    case 44:
                                    case 47:
                                        return !1
                                }
                                return !0
                            }(r);) n++, r = e.charCodeAt(n);
                        if (o !== n) {
                            switch (a = e.substring(o, n)) {
                                case "true":
                                    return s = 8;
                                case "false":
                                    return s = 9;
                                case "null":
                                    return s = 7
                            }
                            return s = 16
                        }
                        return a += String.fromCharCode(r), n++, s = 16
                }
            }
            return {
                setPosition: function(e) {
                    n = e, a = "", o = 0, s = 16, h = 0
                },
                getPosition: () => n,
                scan: r ? function() {
                    let e;
                    do e = m(); while (e >= 12 && e <= 15) return e
                } : m,
                getToken: () => s,
                getTokenValue: () => a,
                getTokenOffset: () => o,
                getTokenLength: () => n - o,
                getTokenStartLine: () => l,
                getTokenStartCharacter: () => o - u,
                getTokenError: () => h
            }
        }

        function p(e) {
            return 32 === e || 9 === e
        }

        function d(e) {
            return 10 === e || 13 === e
        }

        function g(e) {
            return e >= 48 && e <= 57
        }
        t.d(r, {
            a: () => S,
            b: () => C,
            c: () => x
        }), (l = n || (n = {}))[l.lineFeed = 10] = "lineFeed", l[l.carriageReturn = 13] = "carriageReturn", l[l.space = 32] = "space", l[l._0 = 48] = "_0", l[l._1 = 49] = "_1", l[l._2 = 50] = "_2", l[l._3 = 51] = "_3", l[l._4 = 52] = "_4", l[l._5 = 53] = "_5", l[l._6 = 54] = "_6", l[l._7 = 55] = "_7", l[l._8 = 56] = "_8", l[l._9 = 57] = "_9", l[l.a = 97] = "a", l[l.b = 98] = "b", l[l.c = 99] = "c", l[l.d = 100] = "d", l[l.e = 101] = "e", l[l.f = 102] = "f", l[l.g = 103] = "g", l[l.h = 104] = "h", l[l.i = 105] = "i", l[l.j = 106] = "j", l[l.k = 107] = "k", l[l.l = 108] = "l", l[l.m = 109] = "m", l[l.n = 110] = "n", l[l.o = 111] = "o", l[l.p = 112] = "p", l[l.q = 113] = "q", l[l.r = 114] = "r", l[l.s = 115] = "s", l[l.t = 116] = "t", l[l.u = 117] = "u", l[l.v = 118] = "v", l[l.w = 119] = "w", l[l.x = 120] = "x", l[l.y = 121] = "y", l[l.z = 122] = "z", l[l.A = 65] = "A", l[l.B = 66] = "B", l[l.C = 67] = "C", l[l.D = 68] = "D", l[l.E = 69] = "E", l[l.F = 70] = "F", l[l.G = 71] = "G", l[l.H = 72] = "H", l[l.I = 73] = "I", l[l.J = 74] = "J", l[l.K = 75] = "K", l[l.L = 76] = "L", l[l.M = 77] = "M", l[l.N = 78] = "N", l[l.O = 79] = "O", l[l.P = 80] = "P", l[l.Q = 81] = "Q", l[l.R = 82] = "R", l[l.S = 83] = "S", l[l.T = 84] = "T", l[l.U = 85] = "U", l[l.V = 86] = "V", l[l.W = 87] = "W", l[l.X = 88] = "X", l[l.Y = 89] = "Y", l[l.Z = 90] = "Z", l[l.asterisk = 42] = "asterisk", l[l.backslash = 92] = "backslash", l[l.closeBrace = 125] = "closeBrace", l[l.closeBracket = 93] = "closeBracket", l[l.colon = 58] = "colon", l[l.comma = 44] = "comma", l[l.dot = 46] = "dot", l[l.doubleQuote = 34] = "doubleQuote", l[l.minus = 45] = "minus", l[l.openBrace = 123] = "openBrace", l[l.openBracket = 91] = "openBracket", l[l.plus = 43] = "plus", l[l.slash = 47] = "slash", l[l.formFeed = 12] = "formFeed", l[l.tab = 9] = "tab";
        let m = Array(20).fill(0).map((e, r) => " ".repeat(r)),
            b = {
                " ": {
                    "\n": Array(200).fill(0).map((e, r) => "\n" + " ".repeat(r)),
                    "\r": Array(200).fill(0).map((e, r) => "\r" + " ".repeat(r)),
                    "\r\n": Array(200).fill(0).map((e, r) => "\r\n" + " ".repeat(r))
                },
                "	": {
                    "\n": Array(200).fill(0).map((e, r) => "\n" + "	".repeat(r)),
                    "\r": Array(200).fill(0).map((e, r) => "\r" + "	".repeat(r)),
                    "\r\n": Array(200).fill(0).map((e, r) => "\r\n" + "	".repeat(r))
                }
            },
            y = ["\n", "\r", "\r\n"];

        function v(e, r) {
            let t = "";
            for (let n = 0; n < r; n++) t += e;
            return t
        }

        function w(e, r) {
            return -1 !== "\r\n".indexOf(e.charAt(r))
        }

        function A(e, r = [], t = a.DEFAULT) {
            let n = {
                type: "array",
                offset: -1,
                length: -1,
                children: [],
                parent: void 0
            };

            function o(e) {
                "property" === n.type && (n.length = e - n.offset, n = n.parent)
            }

            function s(e) {
                return n.children.push(e), e
            }! function(e, r, t = a.DEFAULT) {
                var n;
                let o = f(e, !1),
                    s = [],
                    i = 0;

                function l(e) {
                    return e ? r => 0 === i && e(r, o.getTokenOffset(), o.getTokenLength(), o.getTokenStartLine(), o.getTokenStartCharacter()) : () => !0
                }

                function c(e) {
                    return e ? r => 0 === i && e(r, o.getTokenOffset(), o.getTokenLength(), o.getTokenStartLine(), o.getTokenStartCharacter(), () => s.slice()) : () => !0
                }

                function u(e) {
                    return e ? () => {
                        i > 0 ? i++ : !1 === e(o.getTokenOffset(), o.getTokenLength(), o.getTokenStartLine(), o.getTokenStartCharacter(), () => s.slice()) && (i = 1)
                    } : () => !0
                }

                function h(e) {
                    return e ? () => {
                        i > 0 && i--, 0 === i && e(o.getTokenOffset(), o.getTokenLength(), o.getTokenStartLine(), o.getTokenStartCharacter())
                    } : () => !0
                }
                let p = u(r.onObjectBegin),
                    d = c(r.onObjectProperty),
                    g = h(r.onObjectEnd),
                    m = u(r.onArrayBegin),
                    b = h(r.onArrayEnd),
                    y = c(r.onLiteralValue),
                    v = l(r.onSeparator),
                    w = (n = r.onComment) ? () => 0 === i && n(o.getTokenOffset(), o.getTokenLength(), o.getTokenStartLine(), o.getTokenStartCharacter()) : () => !0,
                    A = l(r.onError),
                    D = t && t.disallowComments,
                    k = t && t.allowTrailingComma;

                function E() {
                    for (;;) {
                        let e = o.scan();
                        switch (o.getTokenError()) {
                            case 4:
                                x(14);
                                break;
                            case 5:
                                x(15);
                                break;
                            case 3:
                                x(13);
                                break;
                            case 1:
                                D || x(11);
                                break;
                            case 2:
                                x(12);
                                break;
                            case 6:
                                x(16)
                        }
                        switch (e) {
                            case 12:
                            case 13:
                                D ? x(10) : w();
                                break;
                            case 16:
                                x(1);
                                break;
                            case 15:
                            case 14:
                                break;
                            default:
                                return e
                        }
                    }
                }

                function x(e, r = [], t = []) {
                    if (A(e), r.length + t.length > 0) {
                        let e = o.getToken();
                        for (; 17 !== e;) {
                            if (-1 !== r.indexOf(e)) {
                                E();
                                break
                            }
                            if (-1 !== t.indexOf(e)) break;
                            e = E()
                        }
                    }
                }

                function C(e) {
                    let r = o.getTokenValue();
                    return e ? y(r) : (d(r), s.push(r)), E(), !0
                }
                if (E(), 17 === o.getToken()) return t.allowEmptyContent || x(4, [], []);
                ! function e() {
                    switch (o.getToken()) {
                        case 3:
                            m(), E();
                            let r = !0,
                                t = !1;
                            for (; 4 !== o.getToken() && 17 !== o.getToken();) {
                                if (5 === o.getToken()) {
                                    if (t || x(4, [], []), v(","), E(), 4 === o.getToken() && k) break
                                } else t && x(6, [], []);
                                r ? (s.push(0), r = !1) : s[s.length - 1]++, e() || x(4, [], [4, 5]), t = !0
                            }
                            return b(), r || s.pop(), 4 !== o.getToken() ? x(8, [4], []) : E(), !0;
                        case 1:
                            p(), E();
                            let n = !1;
                            for (; 2 !== o.getToken() && 17 !== o.getToken();) {
                                if (5 === o.getToken()) {
                                    if (n || x(4, [], []), v(","), E(), 2 === o.getToken() && k) break
                                } else n && x(6, [], []);
                                (10 !== o.getToken() ? (x(3, [], [2, 5]), 1) : (C(!1), 6 === o.getToken() ? (v(":"), E(), e() || x(4, [], [2, 5])) : x(5, [], [2, 5]), s.pop(), 0)) && x(4, [], [2, 5]), n = !0
                            }
                            return g(), 2 !== o.getToken() ? x(7, [2], []) : E(), !0;
                        case 10:
                            return C(!0);
                        default:
                            switch (o.getToken()) {
                                case 11:
                                    let a = Number(o.getTokenValue());
                                    isNaN(a) && (x(2), a = 0), y(a);
                                    break;
                                case 7:
                                    y(null);
                                    break;
                                case 8:
                                    y(!0);
                                    break;
                                case 9:
                                    y(!1);
                                    break;
                                default:
                                    return !1
                            }
                            return E(), !0
                    }
                }() ? x(4, [], []): 17 !== o.getToken() && x(9, [], [])
            }(e, {
                onObjectBegin: e => {
                    n = s({
                        type: "object",
                        offset: e,
                        length: -1,
                        parent: n,
                        children: []
                    })
                },
                onObjectProperty: (e, r, t) => {
                    (n = s({
                        type: "property",
                        offset: r,
                        length: -1,
                        parent: n,
                        children: []
                    })).children.push({
                        type: "string",
                        value: e,
                        offset: r,
                        length: t,
                        parent: n
                    })
                },
                onObjectEnd: (e, r) => {
                    o(e + r), n.length = e + r - n.offset, n = n.parent, o(e + r)
                },
                onArrayBegin: (e, r) => {
                    n = s({
                        type: "array",
                        offset: e,
                        length: -1,
                        parent: n,
                        children: []
                    })
                },
                onArrayEnd: (e, r) => {
                    n.length = e + r - n.offset, n = n.parent, o(e + r)
                },
                onLiteralValue: (e, r, t) => {
                    s({
                        type: function(e) {
                            switch (typeof e) {
                                case "boolean":
                                    return "boolean";
                                case "number":
                                    return "number";
                                case "string":
                                    return "string";
                                case "object":
                                    if (!e) return "null";
                                    if (Array.isArray(e)) return "array";
                                    return "object";
                                default:
                                    return "null"
                            }
                        }(e),
                        offset: r,
                        length: t,
                        parent: n,
                        value: e
                    }), o(r + t)
                },
                onSeparator: (e, r, t) => {
                    "property" === n.type && (":" === e ? n.colonOffset = r : "," === e && o(r))
                },
                onError: (e, t, n) => {
                    r.push({
                        error: e,
                        offset: t,
                        length: n
                    })
                }
            }, t);
            let i = n.children[0];
            return i && delete i.parent, i
        }

        function D(e, r) {
            if (!e) return;
            let t = e;
            for (let e of r)
                if ("string" == typeof e) {
                    if ("object" !== t.type || !Array.isArray(t.children)) return;
                    let r = !1;
                    for (let n of t.children)
                        if (Array.isArray(n.children) && n.children[0].value === e && 2 === n.children.length) {
                            t = n.children[1], r = !0;
                            break
                        } if (!r) return
                } else {
                    if ("array" !== t.type || e < 0 || !Array.isArray(t.children) || e >= t.children.length) return;
                    t = t.children[e]
                } return t
        }

        function k(e, r, t) {
            if (!t.formattingOptions) return [r];
            let n = E(e, r),
                a = r.offset,
                o = r.offset + r.content.length;
            if (0 === r.length || 0 === r.content.length) {
                for (; a > 0 && !w(n, a - 1);) a--;
                for (; o < n.length && !w(n, o);) o++
            }
            let s = function(e, r, t) {
                let n, a, o, s, i, l;
                if (r) {
                    for (i = (s = r.offset) + r.length, o = s; o > 0 && !w(e, o - 1);) o--;
                    let l = i;
                    for (; l < e.length && !w(e, l);) l++;
                    n = function(e, r) {
                        let t = 0,
                            n = 0,
                            a = r.tabSize || 4;
                        for (; t < e.length;) {
                            let r = e.charAt(t);
                            if (r === m["1"]) n++;
                            else if ("	" === r) n += a;
                            else break;
                            t++
                        }
                        return Math.floor(n / a)
                    }(a = e.substring(o, l), t)
                } else a = e, n = 0, o = 0, s = 0, i = e.length;
                let c = function(e, r) {
                        for (let e = 0; e < r.length; e++) {
                            let t = r.charAt(e);
                            if ("\r" === t) {
                                if (e + 1 < r.length && "\n" === r.charAt(e + 1)) return "\r\n";
                                return "\r"
                            }
                            if ("\n" === t) return "\n"
                        }
                        return e && e.eol || "\n"
                    }(t, e),
                    u = y.includes(c),
                    h = 0,
                    p = 0,
                    d = "	" === (l = t.insertSpaces ? m[t.tabSize || 4] ?? v(m["1"], t.tabSize || 4) : "	") ? "	" : " ",
                    g = f(a, !1),
                    A = !1;

                function D() {
                    if (h > 1) return v(c, h) + v(l, n + p);
                    let e = l.length * (n + p);
                    return !u || e > b[d][c].length ? c + v(l, n + p) : e <= 0 ? c : b[d][c][e]
                }

                function k() {
                    let e = g.scan();
                    for (h = 0; 15 === e || 14 === e;) 14 === e && t.keepLines ? h += 1 : 14 === e && (h = 1), e = g.scan();
                    return A = 16 === e || 0 !== g.getTokenError(), e
                }
                let E = [];

                function x(t, n, a) {
                    !A && (!r || n < i && a > s) && e.substring(n, a) !== t && E.push({
                        offset: n,
                        length: a - n,
                        content: t
                    })
                }
                let C = k();
                if (t.keepLines && h > 0 && x(v(c, h), 0, 0), 17 !== C) {
                    let e = g.getTokenOffset() + o;
                    x(l.length * n < 20 && t.insertSpaces ? m[l.length * n] : v(l, n), o, e)
                }
                for (; 17 !== C;) {
                    let e = g.getTokenOffset() + g.getTokenLength() + o,
                        r = k(),
                        n = "",
                        a = !1;
                    for (; 0 === h && (12 === r || 13 === r);) {
                        let t = g.getTokenOffset() + o;
                        x(m["1"], e, t), e = g.getTokenOffset() + g.getTokenLength() + o, n = (a = 12 === r) ? D() : "", r = k()
                    }
                    if (2 === r) 1 !== C && p--, t.keepLines && h > 0 || !t.keepLines && 1 !== C ? n = D() : t.keepLines && (n = m["1"]);
                    else if (4 === r) 3 !== C && p--, t.keepLines && h > 0 || !t.keepLines && 3 !== C ? n = D() : t.keepLines && (n = m["1"]);
                    else {
                        switch (C) {
                            case 3:
                            case 1:
                                p++, n = t.keepLines && h > 0 || !t.keepLines ? D() : m["1"];
                                break;
                            case 5:
                                n = t.keepLines && h > 0 || !t.keepLines ? D() : m["1"];
                                break;
                            case 12:
                                n = D();
                                break;
                            case 13:
                                h > 0 ? n = D() : a || (n = m["1"]);
                                break;
                            case 6:
                                t.keepLines && h > 0 ? n = D() : a || (n = m["1"]);
                                break;
                            case 10:
                                t.keepLines && h > 0 ? n = D() : 6 !== r || a || (n = "");
                                break;
                            case 7:
                            case 8:
                            case 9:
                            case 11:
                            case 2:
                            case 4:
                                t.keepLines && h > 0 ? n = D() : 12 !== r && 13 !== r || a ? 5 !== r && 17 !== r && (A = !0) : n = m["1"];
                                break;
                            case 16:
                                A = !0
                        }
                        h > 0 && (12 === r || 13 === r) && (n = D())
                    }
                    17 === r && (n = t.keepLines && h > 0 ? D() : t.insertFinalNewline ? c : ""), x(n, e, g.getTokenOffset() + o), C = r
                }
                return E
            }(n, {
                offset: a,
                length: o - a
            }, {
                ...t.formattingOptions,
                keepLines: !1
            });
            for (let e = s.length - 1; e >= 0; e--) {
                let r = s[e];
                n = E(n, r), a = Math.min(a, r.offset), o = Math.max(o, r.offset + r.length) + (r.content.length - r.length)
            }
            let i = e.length - (n.length - o) - a;
            return [{
                offset: a,
                length: i,
                content: n.substring(a, o)
            }]
        }

        function E(e, r) {
            return e.substring(0, r.offset) + r.content + e.substring(r.offset + r.length)
        }(a || (a = {})).DEFAULT = {
            allowTrailingComma: !1
        }, (c = o || (o = {}))[c.None = 0] = "None", c[c.UnexpectedEndOfComment = 1] = "UnexpectedEndOfComment", c[c.UnexpectedEndOfString = 2] = "UnexpectedEndOfString", c[c.UnexpectedEndOfNumber = 3] = "UnexpectedEndOfNumber", c[c.InvalidUnicode = 4] = "InvalidUnicode", c[c.InvalidEscapeCharacter = 5] = "InvalidEscapeCharacter", c[c.InvalidCharacter = 6] = "InvalidCharacter", (u = s || (s = {}))[u.OpenBraceToken = 1] = "OpenBraceToken", u[u.CloseBraceToken = 2] = "CloseBraceToken", u[u.OpenBracketToken = 3] = "OpenBracketToken", u[u.CloseBracketToken = 4] = "CloseBracketToken", u[u.CommaToken = 5] = "CommaToken", u[u.ColonToken = 6] = "ColonToken", u[u.NullKeyword = 7] = "NullKeyword", u[u.TrueKeyword = 8] = "TrueKeyword", u[u.FalseKeyword = 9] = "FalseKeyword", u[u.StringLiteral = 10] = "StringLiteral", u[u.NumericLiteral = 11] = "NumericLiteral", u[u.LineCommentTrivia = 12] = "LineCommentTrivia", u[u.BlockCommentTrivia = 13] = "BlockCommentTrivia", u[u.LineBreakTrivia = 14] = "LineBreakTrivia", u[u.Trivia = 15] = "Trivia", u[u.Unknown = 16] = "Unknown", u[u.EOF = 17] = "EOF";
        let x = A;

        function C(e, r, t, n) {
            return function(e, r, t, n) {
                let a, o, s = r.slice(),
                    i = A(e, []);
                for (; s.length > 0;)
                    if (o = s.pop(), void 0 === (a = D(i, s)) && void 0 !== t) t = "string" == typeof o ? {
                        [o]: t
                    } : [t];
                    else break;
                if (a)
                    if ("object" === a.type && "string" == typeof o && Array.isArray(a.children)) {
                        let r = D(a, [o]);
                        if (void 0 !== r)
                            if (void 0 !== t) return k(e, {
                                offset: r.offset,
                                length: r.length,
                                content: JSON.stringify(t)
                            }, n);
                            else {
                                let t;
                                if (!r.parent) throw Error("Malformed AST");
                                let o = a.children.indexOf(r.parent),
                                    s = r.parent.offset + r.parent.length;
                                if (o > 0) {
                                    let e = a.children[o - 1];
                                    t = e.offset + e.length
                                } else t = a.offset + 1, a.children.length > 1 && (s = a.children[1].offset);
                                return k(e, {
                                    offset: t,
                                    length: s - t,
                                    content: ""
                                }, n)
                            } {
                                let r;
                                if (void 0 === t) return [];
                                let s = `${JSON.stringify(o)}: ${JSON.stringify(t)}`,
                                    i = n.getInsertionIndex ? n.getInsertionIndex(a.children.map(e => e.children[0].value)) : a.children.length;
                                if (i > 0) {
                                    let e = a.children[i - 1];
                                    r = {
                                        offset: e.offset + e.length,
                                        length: 0,
                                        content: "," + s
                                    }
                                } else r = 0 === a.children.length ? {
                                    offset: a.offset + 1,
                                    length: 0,
                                    content: s
                                } : {
                                    offset: a.offset + 1,
                                    length: 0,
                                    content: s + ","
                                };
                                return k(e, r, n)
                            }
                    } else if ("array" === a.type && "number" == typeof o && Array.isArray(a.children)) {
                    let r = o;
                    if (-1 === r) {
                        let r, o = `${JSON.stringify(t)}`;
                        if (0 === a.children.length) r = {
                            offset: a.offset + 1,
                            length: 0,
                            content: o
                        };
                        else {
                            let e = a.children[a.children.length - 1];
                            r = {
                                offset: e.offset + e.length,
                                length: 0,
                                content: "," + o
                            }
                        }
                        return k(e, r, n)
                    }
                    if (void 0 === t && a.children.length >= 0) {
                        let r, t = o,
                            s = a.children[t];
                        if (1 === a.children.length) r = {
                            offset: a.offset + 1,
                            length: a.length - 2,
                            content: ""
                        };
                        else if (a.children.length - 1 === t) {
                            let e = a.children[t - 1],
                                n = e.offset + e.length;
                            r = {
                                offset: n,
                                length: a.offset + a.length - 2 - n,
                                content: ""
                            }
                        } else r = {
                            offset: s.offset,
                            length: a.children[t + 1].offset - s.offset,
                            content: ""
                        };
                        return k(e, r, n)
                    }
                    if (void 0 !== t) {
                        let r, s = `${JSON.stringify(t)}`;
                        if (!n.isArrayInsertion && a.children.length > o) {
                            let e = a.children[o];
                            r = {
                                offset: e.offset,
                                length: e.length,
                                content: s
                            }
                        } else if (0 === a.children.length || 0 === o) r = {
                            offset: a.offset + 1,
                            length: 0,
                            content: 0 === a.children.length ? s : s + ","
                        };
                        else {
                            let e = o > a.children.length ? a.children.length : o,
                                t = a.children[e - 1];
                            r = {
                                offset: t.offset + t.length,
                                length: 0,
                                content: "," + s
                            }
                        }
                        return k(e, r, n)
                    } else throw Error(`Can not ${void 0===t?"remove":n.isArrayInsertion?"insert":"modify"} Array index ${r} as length is not sufficient`)
                } else throw Error(`Can not add ${"number"!=typeof o?"index":"property"} to parent of type ${a.type}`);
                if (void 0 === t) throw Error("Can not delete in empty document");
                return k(e, {
                    offset: i ? i.offset : 0,
                    length: i ? i.length : 0,
                    content: JSON.stringify(t)
                }, n)
            }(e, r, t, n)
        }

        function S(e, r) {
            let t = r.slice(0).sort((e, r) => {
                    let t = e.offset - r.offset;
                    return 0 === t ? e.length - r.length : t
                }),
                n = e.length;
            for (let r = t.length - 1; r >= 0; r--) {
                let a = t[r];
                if (a.offset + a.length <= n) e = E(e, a);
                else throw Error("Overlapping edit");
                n = a.offset
            }
            return e
        }(h = i || (i = {}))[h.InvalidSymbol = 1] = "InvalidSymbol", h[h.InvalidNumberFormat = 2] = "InvalidNumberFormat", h[h.PropertyNameExpected = 3] = "PropertyNameExpected", h[h.ValueExpected = 4] = "ValueExpected", h[h.ColonExpected = 5] = "ColonExpected", h[h.CommaExpected = 6] = "CommaExpected", h[h.CloseBraceExpected = 7] = "CloseBraceExpected", h[h.CloseBracketExpected = 8] = "CloseBracketExpected", h[h.EndOfFileExpected = 9] = "EndOfFileExpected", h[h.InvalidCommentToken = 10] = "InvalidCommentToken", h[h.UnexpectedEndOfComment = 11] = "UnexpectedEndOfComment", h[h.UnexpectedEndOfString = 12] = "UnexpectedEndOfString", h[h.UnexpectedEndOfNumber = 13] = "UnexpectedEndOfNumber", h[h.InvalidUnicode = 14] = "InvalidUnicode", h[h.InvalidEscapeCharacter = 15] = "InvalidEscapeCharacter", h[h.InvalidCharacter = 16] = "InvalidCharacter"
    }),
    xMig: (function(e, r, t) {
        t.d(r, {
            a: () => u,
            b: () => h,
            c: () => f
        });
        var n = t("m8hI"),
            a = t("cPj4"),
            o = t("WN8l"),
            s = t("amiJ");

        function i(e) {
            let r, t = (0, o.e)(e, new(0, s.a));
            return r = "BC" === t.era ? 1 === t.year ? "0000" : "-" + String(Math.abs(1 - t.year)).padStart(6, "00") : String(t.year).padStart(4, "0"), `${r}-${String(t.month).padStart(2,"0")}-${String(t.day).padStart(2,"0")}`
        }

        function l(e) {
            return `${i(e)}T${String(e.hour).padStart(2,"0")}:${String(e.minute).padStart(2,"0")}:${String(e.second).padStart(2,"0")}${e.millisecond?String(e.millisecond/1e3).slice(1):""}`
        }

        function c(e) {
            let r, t = "object" == typeof e[0] ? e.shift() : new(0, s.a);
            if ("string" == typeof e[0]) r = e.shift();
            else {
                let e = t.getEras();
                r = e[e.length - 1]
            }
            return [t, r, e.shift(), e.shift(), e.shift()]
        }
        class u {
            #e;
            constructor(...e) {
                let [r, t, a, o, s] = c(e);
                this.calendar = r, this.era = t, this.year = a, this.month = o, this.day = s, (0, n.c)(this)
            }
            copy() {
                return this.era ? new u(this.calendar, this.era, this.year, this.month, this.day) : new u(this.calendar, this.year, this.month, this.day)
            }
            add(e) {
                return (0, n.a)(this, e)
            }
            subtract(e) {
                return (0, n.j)(this, e)
            }
            set(e) {
                return (0, n.g)(this, e)
            }
            cycle(e, r, t) {
                return (0, n.d)(this, e, r, t)
            }
            toDate(e) {
                return (0, o.h)(this, e)
            }
            toString() {
                return i(this)
            }
            compare(e) {
                return (0, a.a)(this, e)
            }
        }
        class h {
            #e;
            constructor(...e) {
                let [r, t, a, o, s] = c(e);
                this.calendar = r, this.era = t, this.year = a, this.month = o, this.day = s, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, (0, n.c)(this)
            }
            copy() {
                return this.era ? new h(this.calendar, this.era, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond) : new h(this.calendar, this.year, this.month, this.day, this.hour, this.minute, this.second, this.millisecond)
            }
            add(e) {
                return (0, n.a)(this, e)
            }
            subtract(e) {
                return (0, n.j)(this, e)
            }
            set(e) {
                return (0, n.g)((0, n.h)(this, e), e)
            }
            cycle(e, r, t) {
                switch (e) {
                    case "era":
                    case "year":
                    case "month":
                    case "day":
                        return (0, n.d)(this, e, r, t);
                    default:
                        return (0, n.e)(this, e, r, t)
                }
            }
            toDate(e, r) {
                return (0, o.h)(this, e, r)
            }
            toString() {
                return l(this)
            }
            compare(e) {
                let r = (0, a.a)(this, e);
                return 0 === r ? (0, a.b)(this, (0, o.g)(e)) : r
            }
        }
        class f {
            #e;
            constructor(...e) {
                let [r, t, a, o, s] = c(e), i = e.shift(), l = e.shift();
                this.calendar = r, this.era = t, this.year = a, this.month = o, this.day = s, this.timeZone = i, this.offset = l, this.hour = e.shift() || 0, this.minute = e.shift() || 0, this.second = e.shift() || 0, this.millisecond = e.shift() || 0, (0, n.c)(this)
            }
            copy() {
                return this.era ? new f(this.calendar, this.era, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond) : new f(this.calendar, this.year, this.month, this.day, this.timeZone, this.offset, this.hour, this.minute, this.second, this.millisecond)
            }
            add(e) {
                return (0, n.b)(this, e)
            }
            subtract(e) {
                return (0, n.k)(this, e)
            }
            set(e, r) {
                return (0, n.i)(this, e, r)
            }
            cycle(e, r, t) {
                return (0, n.f)(this, e, r, t)
            }
            toDate() {
                return (0, o.j)(this)
            }
            toString() {
                var e;
                let r, t, n, a, o;
                return `${l(this)}${r=0>Math.sign(e=this.offset)?"-":"+",t=Math.floor((e=Math.abs(e))/36e5),n=Math.floor(e%36e5/6e4),a=Math.floor(e%36e5%6e4/1e3),o=`${r}${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`,0!==a&&(o+=`:${String(a).padStart(2,"0")}`),o}[${this.timeZone}]`
            }
            toAbsoluteString() {
                return this.toDate().toISOString()
            }
            compare(e) {
                return this.toDate().getTime() - (0, o.i)(e, this.timeZone).toDate().getTime()
            }
        }
    }),
    amiJ: (function(e, r, t) {
        t.d(r, {
            a: () => c,
            b: () => i
        });
        var n = t("xMig");

        function a(e, r) {
            return e - r * Math.floor(e / r)
        }

        function o(e, r, t, n) {
            let a = (r = i(e, r)) - 1,
                o = -2;
            return t <= 2 ? o = 0 : s(r) && (o = -1), 1721425 + 365 * a + Math.floor(a / 4) - Math.floor(a / 100) + Math.floor(a / 400) + Math.floor((367 * t - 362) / 12 + o + n)
        }

        function s(e) {
            return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
        }

        function i(e, r) {
            return "BC" === e ? 1 - r : r
        }
        let l = {
            standard: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            leapyear: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        };
        class c {
            fromJulianDay(e) {
                var r;
                let t, i = e - 1721426,
                    l = Math.floor(i / 146097),
                    c = a(i, 146097),
                    u = Math.floor(c / 36524),
                    h = a(c, 36524),
                    f = Math.floor(h / 1461),
                    p = Math.floor(a(h, 1461) / 365),
                    [d, g] = (t = "AD", (r = 400 * l + 100 * u + 4 * f + p + +(4 !== u && 4 !== p)) <= 0 && (t = "BC", r = 1 - r), [t, r]),
                    m = e - o(d, g, 1, 1),
                    b = 2;
                e < o(d, g, 3, 1) ? b = 0 : s(g) && (b = 1);
                let y = Math.floor(((m + b) * 12 + 373) / 367),
                    v = e - o(d, g, y, 1) + 1;
                return new(0, n.a)(d, g, y, v)
            }
            toJulianDay(e) {
                return o(e.era, e.year, e.month, e.day)
            }
            getDaysInMonth(e) {
                return l[s(e.year) ? "leapyear" : "standard"][e.month - 1]
            }
            getMonthsInYear(e) {
                return 12
            }
            getDaysInYear(e) {
                return s(e.year) ? 366 : 365
            }
            getMaximumMonthsInYear() {
                return 12
            }
            getMaximumDaysInMonth() {
                return 31
            }
            getYearsInEra(e) {
                return 9999
            }
            getEras() {
                return ["BC", "AD"]
            }
            isInverseEra(e) {
                return "BC" === e.era
            }
            balanceDate(e) {
                e.year <= 0 && (e.era = "BC" === e.era ? "AD" : "BC", e.year = 1 - e.year)
            }
            constructor() {
                this.identifier = "gregory"
            }
        }
    }),
    WN8l: (function(e, r, t) {
        t.d(r, {
            a: () => i,
            b: () => d,
            c: () => g,
            d: () => f,
            e: () => y,
            f: () => m,
            g: () => b,
            h: () => p,
            i: () => v,
            j: () => w
        });
        var n = t("xMig"),
            a = t("m8hI"),
            o = t("amiJ"),
            s = t("cPj4");

        function i(e) {
            return e = y(e, new(0, o.a)), l((0, o.b)(e.era, e.year), e.month, e.day, e.hour, e.minute, e.second, e.millisecond)
        }

        function l(e, r, t, n, a, o, s) {
            let i = new Date;
            return i.setUTCHours(n, a, o, s), i.setUTCFullYear(e, r - 1, t), i.getTime()
        }

        function c(e, r) {
            if ("UTC" === r) return 0;
            if (e > 0 && r === (0, s.d)() && !(0, s.f)()) return -6e4 * new Date(e).getTimezoneOffset();
            let {
                year: t,
                month: n,
                day: a,
                hour: o,
                minute: i,
                second: c
            } = h(e, r);
            return l(t, n, a, o, i, c, 0) - 1e3 * Math.floor(e / 1e3)
        }
        let u = new Map;

        function h(e, r) {
            let t = u.get(r);
            t || (t = new Intl.DateTimeFormat("en-US", {
                timeZone: r,
                hour12: !1,
                era: "short",
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            }), u.set(r, t));
            let n = t.formatToParts(new Date(e)),
                a = {};
            for (let e of n) "literal" !== e.type && (a[e.type] = e.value);
            return {
                year: "BC" === a.era || "B" === a.era ? -a.year + 1 : +a.year,
                month: +a.month,
                day: +a.day,
                hour: "24" === a.hour ? 0 : +a.hour,
                minute: +a.minute,
                second: +a.second
            }
        }

        function f(e, r, t = "compatible") {
            var n, a, l;
            let u = b(e);
            if ("UTC" === r) return i(u);
            if (r === (0, s.d)() && "compatible" === t && !(0, s.f)()) {
                u = y(u, new(0, o.a));
                let e = new Date,
                    r = (0, o.b)(u.era, u.year);
                return e.setFullYear(r, u.month - 1, u.day), e.setHours(u.hour, u.minute, u.second, u.millisecond), e.getTime()
            }
            let p = i(u),
                d = c(p - 864e5, r),
                g = c(p + 864e5, r),
                m = (n = u, ((a = p - d) == (l = p - g) ? [a] : [a, l]).filter(e => {
                    var t;
                    let a;
                    return t = n, a = h(e, r), t.year === a.year && t.month === a.month && t.day === a.day && t.hour === a.hour && t.minute === a.minute && t.second === a.second
                }));
            if (1 === m.length) return m[0];
            if (m.length > 1) switch (t) {
                case "compatible":
                case "earlier":
                    return m[0];
                case "later":
                    return m[m.length - 1];
                case "reject":
                    throw RangeError("Multiple possible absolute times found")
            }
            switch (t) {
                case "earlier":
                    return Math.min(p - d, p - g);
                case "compatible":
                case "later":
                    return Math.max(p - d, p - g);
                case "reject":
                    throw RangeError("No such absolute time found")
            }
        }

        function p(e, r, t = "compatible") {
            return new Date(f(e, r, t))
        }

        function d(e, r) {
            let t = c(e, r),
                a = new Date(e + t),
                o = a.getUTCFullYear(),
                s = a.getUTCMonth() + 1,
                i = a.getUTCDate(),
                l = a.getUTCHours(),
                u = a.getUTCMinutes(),
                h = a.getUTCSeconds(),
                f = a.getUTCMilliseconds();
            return new(0, n.c)(o < 1 ? "BC" : "AD", o < 1 ? -o + 1 : o, s, i, r, t, l, u, h, f)
        }

        function g(e, r) {
            return d(e.getTime(), r)
        }

        function m(e) {
            return new(0, n.a)(e.calendar, e.era, e.year, e.month, e.day)
        }

        function b(e, r) {
            let t = 0,
                a = 0,
                o = 0,
                s = 0;
            if ("timeZone" in e)({
                hour: t,
                minute: a,
                second: o,
                millisecond: s
            } = e);
            else if ("hour" in e && !r) return e;
            return r && ({
                hour: t,
                minute: a,
                second: o,
                millisecond: s
            } = r), new(0, n.b)(e.calendar, e.era, e.year, e.month, e.day, t, a, o, s)
        }

        function y(e, r) {
            if ((0, s.e)(e.calendar, r)) return e;
            let t = r.fromJulianDay(e.calendar.toJulianDay(e)),
                n = e.copy();
            return n.calendar = r, n.era = t.era, n.year = t.year, n.month = t.month, n.day = t.day, (0, a.c)(n), n
        }

        function v(e, r, t) {
            if (e instanceof n.c) {
                var a, o;
                return e.timeZone === r ? e : (a = e, o = r, y(d(i(a) - a.offset, o), a.calendar))
            }
            return d(f(e, r, t), r)
        }

        function w(e) {
            return new Date(i(e) - e.offset)
        }
    }),
    m8hI: (function(e, r, t) {
        t.d(r, {
            a: () => o,
            b: () => y,
            c: () => c,
            d: () => g,
            e: () => m,
            f: () => w,
            g: () => f,
            h: () => p,
            i: () => A,
            j: () => h,
            k: () => v
        });
        var n = t("WN8l"),
            a = t("amiJ");

        function o(e, r) {
            let t = e.copy(),
                n = "hour" in t ? function(e, r) {
                    let t;
                    return e.hour += r.hours || 0, e.minute += r.minutes || 0, e.second += r.seconds || 0, e.millisecond += r.milliseconds || 0, e.second += Math.floor(e.millisecond / 1e3), e.millisecond = d(e.millisecond, 1e3), e.minute += Math.floor(e.second / 60), e.second = d(e.second, 60), e.hour += Math.floor(e.minute / 60), e.minute = d(e.minute, 60), t = Math.floor(e.hour / 24), e.hour = d(e.hour, 24), t
                }(t, r) : 0;
            s(t, r.years || 0), t.calendar.balanceYearMonth && t.calendar.balanceYearMonth(t, e), t.month += r.months || 0, i(t), l(t), t.day += 7 * (r.weeks || 0), t.day += r.days || 0, t.day += n,
                function(e) {
                    for (; e.day < 1;) e.month--, i(e), e.day += e.calendar.getDaysInMonth(e);
                    for (; e.day > e.calendar.getDaysInMonth(e);) e.day -= e.calendar.getDaysInMonth(e), e.month++, i(e)
                }(t), t.calendar.balanceDate && t.calendar.balanceDate(t), t.year < 1 && (t.year = 1, t.month = 1, t.day = 1);
            let a = t.calendar.getYearsInEra(t);
            if (t.year > a) {
                let e = t.calendar.isInverseEra?.(t);
                t.year = a, t.month = e ? 1 : t.calendar.getMonthsInYear(t), t.day = e ? 1 : t.calendar.getDaysInMonth(t)
            }
            t.month < 1 && (t.month = 1, t.day = 1);
            let o = t.calendar.getMonthsInYear(t);
            return t.month > o && (t.month = o, t.day = t.calendar.getDaysInMonth(t)), t.day = Math.max(1, Math.min(t.calendar.getDaysInMonth(t), t.day)), t
        }

        function s(e, r) {
            e.calendar.isInverseEra?.(e) && (r = -r), e.year += r
        }

        function i(e) {
            for (; e.month < 1;) s(e, -1), e.month += e.calendar.getMonthsInYear(e);
            let r = 0;
            for (; e.month > (r = e.calendar.getMonthsInYear(e));) e.month -= r, s(e, 1)
        }

        function l(e) {
            e.month = Math.max(1, Math.min(e.calendar.getMonthsInYear(e), e.month)), e.day = Math.max(1, Math.min(e.calendar.getDaysInMonth(e), e.day))
        }

        function c(e) {
            e.calendar.constrainDate && e.calendar.constrainDate(e), e.year = Math.max(1, Math.min(e.calendar.getYearsInEra(e), e.year)), l(e)
        }

        function u(e) {
            let r = {};
            for (let t in e) "number" == typeof e[t] && (r[t] = -e[t]);
            return r
        }

        function h(e, r) {
            return o(e, u(r))
        }

        function f(e, r) {
            let t = e.copy();
            return null != r.era && (t.era = r.era), null != r.year && (t.year = r.year), null != r.month && (t.month = r.month), null != r.day && (t.day = r.day), c(t), t
        }

        function p(e, r) {
            var t;
            let n = e.copy();
            return null != r.hour && (n.hour = r.hour), null != r.minute && (n.minute = r.minute), null != r.second && (n.second = r.second), null != r.millisecond && (n.millisecond = r.millisecond), (t = n).millisecond = Math.max(0, Math.min(t.millisecond, 999)), t.second = Math.max(0, Math.min(t.second, 59)), t.minute = Math.max(0, Math.min(t.minute, 59)), t.hour = Math.max(0, Math.min(t.hour, 23)), n
        }

        function d(e, r) {
            let t = e % r;
            return t < 0 && (t += r), t
        }

        function g(e, r, t, n) {
            let a = e.copy();
            switch (r) {
                case "era": {
                    let r = e.calendar.getEras(),
                        o = r.indexOf(e.era);
                    if (o < 0) throw Error("Invalid era: " + e.era);
                    o = b(o, t, 0, r.length - 1, n?.round), a.era = r[o], c(a);
                    break
                }
                case "year":
                    a.calendar.isInverseEra?.(a) && (t = -t), a.year = b(e.year, t, -1 / 0, 9999, n?.round), -1 / 0 === a.year && (a.year = 1), a.calendar.balanceYearMonth && a.calendar.balanceYearMonth(a, e);
                    break;
                case "month":
                    a.month = b(e.month, t, 1, e.calendar.getMonthsInYear(e), n?.round);
                    break;
                case "day":
                    a.day = b(e.day, t, 1, e.calendar.getDaysInMonth(e), n?.round);
                    break;
                default:
                    throw Error("Unsupported field " + r)
            }
            return e.calendar.balanceDate && e.calendar.balanceDate(a), c(a), a
        }

        function m(e, r, t, n) {
            let a = e.copy();
            switch (r) {
                case "hour": {
                    let r = e.hour,
                        o = 0,
                        s = 23;
                    if (n?.hourCycle === 12) {
                        let e = r >= 12;
                        o = 12 * !!e, s = e ? 23 : 11
                    }
                    a.hour = b(r, t, o, s, n?.round);
                    break
                }
                case "minute":
                    a.minute = b(e.minute, t, 0, 59, n?.round);
                    break;
                case "second":
                    a.second = b(e.second, t, 0, 59, n?.round);
                    break;
                case "millisecond":
                    a.millisecond = b(e.millisecond, t, 0, 999, n?.round);
                    break;
                default:
                    throw Error("Unsupported field " + r)
            }
            return a
        }

        function b(e, r, t, n, a = !1) {
            if (a) {
                (e += Math.sign(r)) < t && (e = n);
                let a = Math.abs(r);
                (e = r > 0 ? Math.ceil(e / a) * a : Math.floor(e / a) * a) > n && (e = t)
            } else(e += r) < t ? e = n - (t - e - 1) : e > n && (e = t + (e - n - 1));
            return e
        }

        function y(e, r) {
            let t;
            if (null != r.years && 0 !== r.years || null != r.months && 0 !== r.months || null != r.weeks && 0 !== r.weeks || null != r.days && 0 !== r.days) {
                let a = o((0, n.g)(e), {
                    years: r.years,
                    months: r.months,
                    weeks: r.weeks,
                    days: r.days
                });
                t = (0, n.d)(a, e.timeZone)
            } else t = (0, n.a)(e) - e.offset;
            t += r.milliseconds || 0, t += 1e3 * (r.seconds || 0), t += 6e4 * (r.minutes || 0), t += 36e5 * (r.hours || 0);
            let a = (0, n.b)(t, e.timeZone);
            return (0, n.e)(a, e.calendar)
        }

        function v(e, r) {
            return y(e, u(r))
        }

        function w(e, r, t, o) {
            switch (r) {
                case "hour": {
                    let r = 0,
                        s = 23;
                    if (o?.hourCycle === 12) {
                        let t = e.hour >= 12;
                        r = 12 * !!t, s = t ? 23 : 11
                    }
                    let i = (0, n.g)(e),
                        l = (0, n.e)(p(i, {
                            hour: r
                        }), new(0, a.a)),
                        c = [(0, n.d)(l, e.timeZone, "earlier"), (0, n.d)(l, e.timeZone, "later")].filter(r => (0, n.b)(r, e.timeZone).day === l.day)[0],
                        u = (0, n.e)(p(i, {
                            hour: s
                        }), new(0, a.a)),
                        h = [(0, n.d)(u, e.timeZone, "earlier"), (0, n.d)(u, e.timeZone, "later")].filter(r => (0, n.b)(r, e.timeZone).day === u.day).pop(),
                        f = (0, n.a)(e) - e.offset,
                        d = Math.floor(f / 36e5),
                        g = f % 36e5;
                    return f = 36e5 * b(d, t, Math.floor(c / 36e5), Math.floor(h / 36e5), o?.round) + g, (0, n.e)((0, n.b)(f, e.timeZone), e.calendar)
                }
                case "minute":
                case "second":
                case "millisecond":
                    return m(e, r, t, o);
                case "era":
                case "year":
                case "month":
                case "day": {
                    let a = g((0, n.g)(e), r, t, o),
                        s = (0, n.d)(a, e.timeZone);
                    return (0, n.e)((0, n.b)(s, e.timeZone), e.calendar)
                }
                default:
                    throw Error("Unsupported field " + r)
            }
        }

        function A(e, r, t) {
            let a = (0, n.g)(e),
                o = p(f(a, r), r);
            if (0 === o.compare(a)) return e;
            let s = (0, n.d)(o, e.timeZone, t);
            return (0, n.e)((0, n.b)(s, e.timeZone), e.calendar)
        }
    }),
    cPj4: (function(e, r, t) {
        t.d(r, {
            a: () => c,
            b: () => u,
            c: () => l,
            d: () => p,
            e: () => s,
            f: () => d,
            g: () => o
        });
        var n = t("WN8l");
        let a = {
            "001": 1,
            AD: 1,
            AE: 6,
            AF: 6,
            AI: 1,
            AL: 1,
            AM: 1,
            AN: 1,
            AR: 1,
            AT: 1,
            AU: 1,
            AX: 1,
            AZ: 1,
            BA: 1,
            BE: 1,
            BG: 1,
            BH: 6,
            BM: 1,
            BN: 1,
            BY: 1,
            CH: 1,
            CL: 1,
            CM: 1,
            CN: 1,
            CR: 1,
            CY: 1,
            CZ: 1,
            DE: 1,
            DJ: 6,
            DK: 1,
            DZ: 6,
            EC: 1,
            EE: 1,
            EG: 6,
            ES: 1,
            FI: 1,
            FJ: 1,
            FO: 1,
            FR: 1,
            GB: 1,
            GE: 1,
            GF: 1,
            GP: 1,
            GR: 1,
            HR: 1,
            HU: 1,
            IE: 1,
            IQ: 6,
            IR: 6,
            IS: 1,
            IT: 1,
            JO: 6,
            KG: 1,
            KW: 6,
            KZ: 1,
            LB: 1,
            LI: 1,
            LK: 1,
            LT: 1,
            LU: 1,
            LV: 1,
            LY: 6,
            MC: 1,
            MD: 1,
            ME: 1,
            MK: 1,
            MN: 1,
            MQ: 1,
            MV: 5,
            MY: 1,
            NL: 1,
            NO: 1,
            NZ: 1,
            OM: 6,
            PL: 1,
            QA: 6,
            RE: 1,
            RO: 1,
            RS: 1,
            RU: 1,
            SD: 6,
            SE: 1,
            SI: 1,
            SK: 1,
            SM: 1,
            SY: 6,
            TJ: 1,
            TM: 1,
            TR: 1,
            UA: 1,
            UY: 1,
            UZ: 1,
            VA: 1,
            VN: 1,
            XK: 1
        };

        function o(e, r) {
            return r = (0, n.e)(r, e.calendar), e.era === r.era && e.year === r.year && e.month === r.month && e.day === r.day
        }

        function s(e, r) {
            return e.isEqual?.(r) ?? r.isEqual?.(e) ?? e.identifier === r.identifier
        }
        let i = {
            sun: 0,
            mon: 1,
            tue: 2,
            wed: 3,
            thu: 4,
            fri: 5,
            sat: 6
        };

        function l(e, r, t) {
            let n = Math.ceil(e.calendar.toJulianDay(e) + 1 - (t ? i[t] : function(e) {
                let r = m.get(e);
                if (!r) {
                    if (Intl.Locale) {
                        let t = new Intl.Locale(e);
                        if ("getWeekInfo" in t && (r = t.getWeekInfo())) return m.set(e, r), r.firstDay
                    }
                    let t = function(e) {
                        if (Intl.Locale) {
                            let r = g.get(e);
                            return !r && (r = new Intl.Locale(e).maximize().region) && g.set(e, r), r
                        }
                        let r = e.split("-")[1];
                        return "u" === r ? void 0 : r
                    }(e);
                    if (e.includes("-fw-")) {
                        let t = e.split("-fw-")[1].split("-")[0];
                        r = "mon" === t ? {
                            firstDay: 1
                        } : "tue" === t ? {
                            firstDay: 2
                        } : "wed" === t ? {
                            firstDay: 3
                        } : "thu" === t ? {
                            firstDay: 4
                        } : "fri" === t ? {
                            firstDay: 5
                        } : "sat" === t ? {
                            firstDay: 6
                        } : {
                            firstDay: 0
                        }
                    } else r = e.includes("-ca-iso8601") ? {
                        firstDay: 1
                    } : {
                        firstDay: t && a[t] || 0
                    };
                    m.set(e, r)
                }
                return r.firstDay
            }(r))) % 7;
            return n < 0 && (n += 7), n
        }

        function c(e, r) {
            return e.calendar.toJulianDay(e) - r.calendar.toJulianDay(r)
        }

        function u(e, r) {
            return h(e) - h(r)
        }

        function h(e) {
            return 36e5 * e.hour + 6e4 * e.minute + 1e3 * e.second + e.millisecond
        }
        let f = null;

        function p() {
            return null == f && (f = new Intl.DateTimeFormat().resolvedOptions().timeZone), f
        }

        function d() {
            return !1
        }
        let g = new Map,
            m = new Map
    }),
    LwFr: (function(e, r, t) {
        function n(e) {
            return Array.isArray ? Array.isArray(e) : "[object Array]" === u(e)
        }

        function a(e) {
            return null == e ? "" : function(e) {
                if ("string" == typeof e) return e;
                if ("bigint" == typeof e) return e.toString();
                let r = e + "";
                return "0" == r && 1 / e == -1 / 0 ? "-0" : r
            }(e)
        }

        function o(e) {
            return "string" == typeof e
        }

        function s(e) {
            return "number" == typeof e
        }

        function i(e) {
            return "object" == typeof e
        }

        function l(e) {
            return null != e
        }

        function c(e) {
            return !e.trim().length
        }

        function u(e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e)
        }
        let h = "Invalid doc index: must be a non-negative integer within the bounds of the docs array",
            f = Object.prototype.hasOwnProperty;
        var p = class {
            constructor(e) {
                this._keys = [], this._keyMap = {};
                let r = 0;
                e.forEach(e => {
                    let t = d(e);
                    this._keys.push(t), this._keyMap[t.id] = t, r += t.weight
                }), this._keys.forEach(e => {
                    e.weight /= r
                })
            }
            get(e) {
                return this._keyMap[e]
            }
            keys() {
                return this._keys
            }
            toJSON() {
                return JSON.stringify(this._keys)
            }
        };

        function d(e) {
            let r = null,
                t = null,
                a = null,
                s = 1,
                i = null;
            if (o(e) || n(e)) a = e, r = g(e), t = m(e);
            else {
                if (!f.call(e, "name")) throw Error("Missing name property in key");
                let n = e.name;
                if (a = n, f.call(e, "weight") && void 0 !== e.weight && (s = e.weight) <= 0) {
                    let e;
                    throw Error((e = m(n), `Property 'weight' in key '${e}' must be a positive integer`))
                }
                r = g(n), t = m(n), i = e.getFn ?? null
            }
            return {
                path: r,
                id: t,
                weight: s,
                src: a,
                getFn: i
            }
        }

        function g(e) {
            return n(e) ? e : e.split(".")
        }

        function m(e) {
            return n(e) ? e.join(".") : e
        }
        let b = Object.freeze({
            isCaseSensitive: !1,
            ignoreDiacritics: !1,
            includeScore: !1,
            keys: [],
            shouldSort: !0,
            sortFn: (e, r) => e.score === r.score ? e.idx < r.idx ? -1 : 1 : e.score < r.score ? -1 : 1,
            includeMatches: !1,
            findAllMatches: !1,
            minMatchCharLength: 1,
            location: 0,
            threshold: .6,
            distance: 100,
            useExtendedSearch: !1,
            useTokenSearch: !1,
            tokenize: void 0,
            tokenMatch: "any",
            getFn: function(e, r) {
                let t = [],
                    c = !1,
                    h = (e, r, f, p) => {
                        if (l(e))
                            if (r[f]) {
                                var d, g;
                                let m = e[r[f]];
                                if (!l(m)) return;
                                if (f === r.length - 1 && (o(m) || s(m) || !0 === (d = m) || !1 === d || i(g = d) && null !== g && "[object Boolean]" == u(d) || "bigint" == typeof m)) t.push(void 0 !== p ? {
                                    v: a(m),
                                    i: p
                                } : a(m));
                                else if (n(m)) {
                                    c = !0;
                                    for (let e = 0, t = m.length; e < t; e += 1) h(m[e], r, f + 1, e)
                                } else r.length && h(m, r, f + 1, p)
                            } else t.push(void 0 !== p ? {
                                v: e,
                                i: p
                            } : e)
                    };
                return h(e, o(r) ? r.split(".") : r, 0), c ? t : t[0]
            },
            ignoreLocation: !1,
            ignoreFieldNorm: !1,
            fieldNormWeight: 1
        });
        var y = class {
            constructor({
                getFn: e = b.getFn,
                fieldNormWeight: r = b.fieldNormWeight
            } = {}) {
                this.norm = function(e = 1, r = 3) {
                    let t = new Map,
                        n = Math.pow(10, r);
                    return {
                        get(r) {
                            let a = 0,
                                o = !1;
                            for (let e = 0; e < r.length; e++) {
                                var s;
                                (s = r.charCodeAt(e)) >= 9 && s <= 13 || 32 === s || 160 === s ? o = !1 : o || (a++, o = !0)
                            }
                            if (0 === a && (a = 1), t.has(a)) return t.get(a);
                            let i = Math.round(n / Math.pow(a, .5 * e)) / n;
                            return t.set(a, i), i
                        },
                        clear() {
                            t.clear()
                        }
                    }
                }(r, 3), this.getFn = e, this.isCreated = !1, this.docs = [], this.keys = [], this._keysMap = {}, this.setIndexRecords()
            }
            setSources(e = []) {
                this.docs = e
            }
            setIndexRecords(e = []) {
                this.records = e
            }
            setKeys(e = []) {
                this.keys = e, this._keysMap = {}, e.forEach((e, r) => {
                    this._keysMap[e.id] = r
                })
            }
            create() {
                if (this.isCreated || !this.docs.length) return;
                this.isCreated = !0;
                let e = this.docs.length;
                this.records = Array(e);
                let r = 0;
                if (o(this.docs[0]))
                    for (let t = 0; t < e; t++) {
                        let e = this._createStringRecord(this.docs[t], t);
                        e && (this.records[r++] = e)
                    } else
                        for (let t = 0; t < e; t++) this.records[r++] = this._createObjectRecord(this.docs[t], t);
                this.records.length = r, this.norm.clear()
            }
            add(e, r) {
                if (!Number.isInteger(r) || r < 0) throw Error(h);
                if (o(e)) {
                    let t = this._createStringRecord(e, r);
                    return t && this.records.push(t), t
                }
                let t = this._createObjectRecord(e, r);
                return this.records.push(t), t
            }
            removeAt(e) {
                if (!Number.isInteger(e) || e < 0) throw Error(h);
                for (let r = 0, t = this.records.length; r < t; r += 1)
                    if (this.records[r].i === e) {
                        this.records.splice(r, 1);
                        break
                    } for (let r = 0, t = this.records.length; r < t; r += 1) this.records[r].i > e && (this.records[r].i -= 1)
            }
            removeAll(e) {
                let r = new Set;
                for (let t of e) Number.isInteger(t) && t >= 0 && r.add(t);
                if (0 === r.size) return;
                this.records = this.records.filter(e => !r.has(e.i));
                let t = Array.from(r).sort((e, r) => e - r);
                for (let e of this.records) {
                    let r = 0,
                        n = t.length;
                    for (; r < n;) {
                        let a = r + n >>> 1;
                        t[a] < e.i ? r = a + 1 : n = a
                    }
                    e.i -= r
                }
            }
            getValueForItemAtKeyId(e, r) {
                return e[this._keysMap[r]]
            }
            size() {
                return this.records.length
            }
            _createStringRecord(e, r) {
                return !l(e) || c(e) ? null : {
                    v: e,
                    i: r,
                    n: this.norm.get(e)
                }
            }
            _createObjectRecord(e, r) {
                let t = {
                    i: r,
                    $: {}
                };
                for (let r = 0, s = this.keys.length; r < s; r++) {
                    let s = this.keys[r],
                        i = s.getFn ? s.getFn(e) : this.getFn(e, s.path);
                    if (l(i)) {
                        if (n(i)) {
                            let e = [];
                            for (let r = 0, t = i.length; r < t; r += 1) {
                                let t = i[r];
                                if (l(t)) {
                                    if (o(t)) {
                                        if (!c(t)) {
                                            let n = {
                                                v: t,
                                                i: r,
                                                n: this.norm.get(t)
                                            };
                                            e.push(n)
                                        }
                                    } else if (l(t.v)) {
                                        let r = o(t.v) ? t.v : a(t.v);
                                        if (!c(r)) {
                                            let n = {
                                                v: r,
                                                i: t.i,
                                                n: this.norm.get(r)
                                            };
                                            e.push(n)
                                        }
                                    }
                                }
                            }
                            t.$[r] = e
                        } else if (o(i) && !c(i)) {
                            let e = {
                                v: i,
                                n: this.norm.get(i)
                            };
                            t.$[r] = e
                        }
                    }
                }
                return t
            }
            toJSON() {
                return {
                    keys: this.keys.map(({
                        getFn: e,
                        ...r
                    }) => r),
                    records: this.records
                }
            }
        };

        function v(e, r, {
            getFn: t = b.getFn,
            fieldNormWeight: n = b.fieldNormWeight
        } = {}) {
            let a = new y({
                getFn: t,
                fieldNormWeight: n
            });
            return a.setKeys(e.map(d)), a.setSources(r), a.create(), a
        }

        function w(e) {
            if (e.length <= 1) return e;
            e.sort((e, r) => e[0] - r[0] || e[1] - r[1]);
            let r = [e[0]];
            for (let t = 1, n = e.length; t < n; t += 1) {
                let n = r[r.length - 1],
                    a = e[t];
                a[0] <= n[1] + 1 ? n[1] = Math.max(n[1], a[1]) : r.push(a)
            }
            return r
        }
        let A = {
                ł: "l",
                Ł: "L",
                đ: "d",
                Đ: "D",
                ø: "o",
                Ø: "O",
                ħ: "h",
                Ħ: "H",
                ŧ: "t",
                Ŧ: "T",
                ı: "i",
                ß: "ss"
            },
            D = RegExp("[" + Object.keys(A).join("") + "]", "g"),
            k = "function" == typeof String.prototype.normalize ? e => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "").replace(D, e => A[e]) : e => e;
        var E = class {
            constructor(e, {
                location: r = b.location,
                threshold: t = b.threshold,
                distance: n = b.distance,
                includeMatches: a = b.includeMatches,
                findAllMatches: o = b.findAllMatches,
                minMatchCharLength: s = b.minMatchCharLength,
                isCaseSensitive: i = b.isCaseSensitive,
                ignoreDiacritics: l = b.ignoreDiacritics,
                ignoreLocation: c = b.ignoreLocation
            } = {}) {
                if (this.options = {
                        location: r,
                        threshold: t,
                        distance: n,
                        includeMatches: a,
                        findAllMatches: o,
                        minMatchCharLength: s,
                        isCaseSensitive: i,
                        ignoreDiacritics: l,
                        ignoreLocation: c
                    }, e = i ? e : e.toLowerCase(), e = l ? k(e) : e, this.pattern = e, this.chunks = [], !this.pattern.length) return;
                let u = (e, r) => {
                        this.chunks.push({
                            pattern: e,
                            alphabet: function(e) {
                                let r = {};
                                for (let t = 0, n = e.length; t < n; t += 1) {
                                    let a = e.charAt(t);
                                    r[a] = (r[a] || 0) | 1 << n - t - 1
                                }
                                return r
                            }(e),
                            startIndex: r
                        })
                    },
                    h = this.pattern.length;
                if (h > 32) {
                    let e = 0,
                        r = h % 32,
                        t = h - r;
                    for (; e < t;) u(this.pattern.substr(e, 32), e), e += 32;
                    if (r) {
                        let e = h - 32;
                        u(this.pattern.substr(e), e)
                    }
                } else u(this.pattern, 0)
            }
            searchIn(e) {
                let {
                    isCaseSensitive: r,
                    ignoreDiacritics: t,
                    includeMatches: n
                } = this.options;
                if (e = r ? e : e.toLowerCase(), e = t ? k(e) : e, this.pattern === e) {
                    if (e.length < this.options.minMatchCharLength) return {
                        isMatch: !1,
                        score: 1
                    };
                    let r = {
                        isMatch: !0,
                        score: 0
                    };
                    return n && (r.indices = [
                        [0, e.length - 1]
                    ]), r
                }
                let {
                    location: a,
                    distance: o,
                    threshold: s,
                    findAllMatches: i,
                    minMatchCharLength: l,
                    ignoreLocation: c
                } = this.options, u = [], h = 0, f = !1;
                this.chunks.forEach(({
                    pattern: r,
                    alphabet: t,
                    startIndex: p
                }) => {
                    let {
                        isMatch: d,
                        score: g,
                        indices: m
                    } = function(e, r, t, {
                        location: n = b.location,
                        distance: a = b.distance,
                        threshold: o = b.threshold,
                        findAllMatches: s = b.findAllMatches,
                        minMatchCharLength: i = b.minMatchCharLength,
                        includeMatches: l = b.includeMatches,
                        ignoreLocation: c = b.ignoreLocation
                    } = {}) {
                        let u;
                        if (r.length > 32) throw Error("Pattern length exceeds max of 32.");
                        let h = r.length,
                            f = e.length,
                            p = Math.max(0, Math.min(n, f)),
                            d = o,
                            g = p,
                            m = (e, r) => {
                                let t = e / h;
                                if (c) return t;
                                let n = Math.abs(p - r);
                                return a ? t + n / a : n ? 1 : t
                            },
                            y = i > 1 || l,
                            v = y ? Array(f) : [];
                        for (;
                            (u = e.indexOf(r, g)) > -1;)
                            if (d = Math.min(m(0, u), d), g = u + h, y) {
                                let e = 0;
                                for (; e < h;) v[u + e] = 1, e += 1
                            } g = -1;
                        let w = [],
                            A = 1,
                            D = 0,
                            k = h + f,
                            E = 1 << h - 1;
                        for (let r = 0; r < h; r += 1) {
                            let n = 0,
                                a = k;
                            for (; n < a;) m(r, p + a) <= d ? n = a : k = a, a = Math.floor((k - n) / 2 + n);
                            k = a;
                            let o = Math.max(1, p - a + 1),
                                i = s ? f : Math.min(p + a, f) + h,
                                l = Array(i + 2);
                            l[i + 1] = (1 << r) - 1;
                            for (let n = i; n >= o; n -= 1) {
                                let a = n - 1,
                                    s = t[e[a]];
                                if (l[n] = (l[n + 1] << 1 | 1) & s, r && (l[n] |= (w[n + 1] | w[n]) << 1 | 1 | w[n + 1]), l[n] & E && (A = m(r, a)) <= d) {
                                    if (d = A, g = a, D = r, g <= p) break;
                                    o = Math.max(1, 2 * p - g)
                                }
                            }
                            if (m(r + 1, p) > d) break;
                            w = l
                        }
                        if (y && g >= 0) {
                            let r = Math.min(f - 1, g + h - 1 + D);
                            for (let n = g; n <= r; n += 1) t[e[n]] && (v[n] = 1)
                        }
                        let x = {
                            isMatch: g >= 0,
                            score: Math.max(.001, A)
                        };
                        if (y) {
                            let e = function(e = [], r = b.minMatchCharLength) {
                                let t = [],
                                    n = -1,
                                    a = -1,
                                    o = 0;
                                for (let s = e.length; o < s; o += 1) {
                                    let s = e[o];
                                    s && -1 === n ? n = o : s || -1 === n || ((a = o - 1) - n + 1 >= r && t.push([n, a]), n = -1)
                                }
                                return e[o - 1] && o - n >= r && t.push([n, o - 1]), t
                            }(v, i);
                            e.length ? l && (x.indices = e) : x.isMatch = !1
                        }
                        return x
                    }(e, r, t, {
                        location: a + p,
                        distance: o,
                        threshold: s,
                        findAllMatches: i,
                        minMatchCharLength: l,
                        includeMatches: n,
                        ignoreLocation: c
                    });
                    d && (f = !0), h += g, d && m && u.push(...m)
                });
                let p = {
                    isMatch: f,
                    score: f ? h / this.chunks.length : 1
                };
                return f && n && (p.indices = w(u)), p
            }
        };
        let x = new Set(["fuzzy", "include"]),
            C = [{
                type: "exact",
                multiRegex: /^="(.*)"$/,
                singleRegex: /^=(.*)$/,
                create: e => ({
                    type: "exact",
                    search(r) {
                        let t = r === e;
                        return {
                            isMatch: t,
                            score: +!t,
                            indices: [0, e.length - 1]
                        }
                    }
                })
            }, {
                type: "include",
                multiRegex: /^'"(.*)"$/,
                singleRegex: /^'(.*)$/,
                create: e => ({
                    type: "include",
                    search(r) {
                        let t, n = 0,
                            a = [],
                            o = e.length;
                        for (;
                            (t = r.indexOf(e, n)) > -1;) n = t + o, a.push([t, n - 1]);
                        let s = !!a.length;
                        return {
                            isMatch: s,
                            score: +!s,
                            indices: a
                        }
                    }
                })
            }, {
                type: "prefix-exact",
                multiRegex: /^\^"(.*)"$/,
                singleRegex: /^\^(.*)$/,
                create: e => ({
                    type: "prefix-exact",
                    search(r) {
                        let t = r.startsWith(e);
                        return {
                            isMatch: t,
                            score: +!t,
                            indices: [0, e.length - 1]
                        }
                    }
                })
            }, {
                type: "inverse-prefix-exact",
                multiRegex: /^!\^"(.*)"$/,
                singleRegex: /^!\^(.*)$/,
                create: e => ({
                    type: "inverse-prefix-exact",
                    search(r) {
                        let t = !r.startsWith(e);
                        return {
                            isMatch: t,
                            score: +!t,
                            indices: [0, r.length - 1]
                        }
                    }
                })
            }, {
                type: "inverse-suffix-exact",
                multiRegex: /^!"(.*)"\$$/,
                singleRegex: /^!(.*)\$$/,
                create: e => ({
                    type: "inverse-suffix-exact",
                    search(r) {
                        let t = !r.endsWith(e);
                        return {
                            isMatch: t,
                            score: +!t,
                            indices: [0, r.length - 1]
                        }
                    }
                })
            }, {
                type: "suffix-exact",
                multiRegex: /^"(.*)"\$$/,
                singleRegex: /^(.*)\$$/,
                create: e => ({
                    type: "suffix-exact",
                    search(r) {
                        let t = r.endsWith(e);
                        return {
                            isMatch: t,
                            score: +!t,
                            indices: [r.length - e.length, r.length - 1]
                        }
                    }
                })
            }, {
                type: "inverse-exact",
                multiRegex: /^!"(.*)"$/,
                singleRegex: /^!(.*)$/,
                create: e => ({
                    type: "inverse-exact",
                    search(r) {
                        let t = -1 === r.indexOf(e);
                        return {
                            isMatch: t,
                            score: +!t,
                            indices: [0, r.length - 1]
                        }
                    }
                })
            }, {
                type: "fuzzy",
                multiRegex: /^"(.*)"$/,
                singleRegex: /^(.*)$/,
                create: (e, r = {}) => {
                    let t = new E(e, {
                        location: r.location ?? b.location,
                        threshold: r.threshold ?? b.threshold,
                        distance: r.distance ?? b.distance,
                        includeMatches: r.includeMatches ?? b.includeMatches,
                        findAllMatches: r.findAllMatches ?? b.findAllMatches,
                        minMatchCharLength: r.minMatchCharLength ?? b.minMatchCharLength,
                        isCaseSensitive: r.isCaseSensitive ?? b.isCaseSensitive,
                        ignoreDiacritics: r.ignoreDiacritics ?? b.ignoreDiacritics,
                        ignoreLocation: r.ignoreLocation ?? b.ignoreLocation
                    });
                    return {
                        type: "fuzzy",
                        search: e => t.searchIn(e)
                    }
                }
            }],
            S = C.length;

        function q(e, r) {
            let t = e.match(r);
            return t ? t[1] : null
        }
        var L = class {
            constructor(e, {
                isCaseSensitive: r = b.isCaseSensitive,
                ignoreDiacritics: t = b.ignoreDiacritics,
                includeMatches: n = b.includeMatches,
                minMatchCharLength: a = b.minMatchCharLength,
                ignoreLocation: o = b.ignoreLocation,
                findAllMatches: s = b.findAllMatches,
                location: i = b.location,
                threshold: l = b.threshold,
                distance: c = b.distance
            } = {}) {
                this.query = null, this.options = {
                    isCaseSensitive: r,
                    ignoreDiacritics: t,
                    includeMatches: n,
                    minMatchCharLength: a,
                    findAllMatches: s,
                    ignoreLocation: o,
                    location: i,
                    threshold: l,
                    distance: c
                }, e = r ? e : e.toLowerCase(), e = t ? k(e) : e, this.pattern = e, this.query = function(e, r = {}) {
                    return e.replace(/\\\|/g, "\0").split("|").map(e => {
                        let t = (function(e) {
                                let r = [],
                                    t = e.length,
                                    n = 0;
                                for (; n < t;) {
                                    for (; n < t && " " === e[n];) n++;
                                    if (n >= t) break;
                                    let a = n;
                                    for (; a < t && " " !== e[a] && '"' !== e[a];) a++;
                                    if (a < t && '"' === e[a]) {
                                        for (a++; a < t;) {
                                            if ('"' === e[a]) {
                                                let r = a + 1;
                                                if (r >= t || " " === e[r]) {
                                                    a++;
                                                    break
                                                }
                                                if ("$" === e[r] && (r + 1 >= t || " " === e[r + 1])) {
                                                    a += 2;
                                                    break
                                                }
                                            }
                                            a++
                                        }
                                        r.push(e.substring(n, a)), n = a
                                    } else {
                                        for (; a < t && " " !== e[a];) a++;
                                        r.push(e.substring(n, a)), n = a
                                    }
                                }
                                return r
                            })(e.replace(/\u0000/g, "|").trim()).filter(e => e && !!e.trim()),
                            n = [];
                        for (let e = 0, a = t.length; e < a; e += 1) {
                            let a = t[e],
                                o = !1,
                                s = -1;
                            for (; !o && ++s < S;) {
                                let e = C[s],
                                    t = q(a, e.multiRegex);
                                t && (n.push(e.create(t, r)), o = !0)
                            }
                            if (!o)
                                for (s = -1; ++s < S;) {
                                    let e = C[s],
                                        t = q(a, e.singleRegex);
                                    if (t) {
                                        n.push(e.create(t, r));
                                        break
                                    }
                                }
                        }
                        return n
                    })
                }(this.pattern, this.options)
            }
            static condition(e, r) {
                return r.useExtendedSearch
            }
            searchIn(e) {
                let r = this.query;
                if (!r) return {
                    isMatch: !1,
                    score: 1
                };
                let {
                    includeMatches: t,
                    isCaseSensitive: n,
                    ignoreDiacritics: a
                } = this.options;
                e = n ? e : e.toLowerCase(), e = a ? k(e) : e;
                let o = 0,
                    s = [],
                    i = 0,
                    l = !1;
                for (let n = 0, a = r.length; n < a; n += 1) {
                    let a = r[n];
                    s.length = 0, o = 0, l = !1;
                    for (let r = 0, n = a.length; r < n; r += 1) {
                        let n = a[r],
                            {
                                isMatch: c,
                                indices: u,
                                score: h
                            } = n.search(e);
                        if (c) o += 1, i += h, n.type.startsWith("inverse") && (l = !0), t && (x.has(n.type) ? s.push(...u) : s.push(u));
                        else {
                            i = 0, o = 0, s.length = 0, l = !1;
                            break
                        }
                    }
                    if (o) {
                        let e = {
                            isMatch: !0,
                            score: i / o
                        };
                        return l && (e.hasInverse = !0), t && (e.indices = w(s)), e
                    }
                }
                return {
                    isMatch: !1,
                    score: 1
                }
            }
        };
        let T = [];

        function _(...e) {
            T.push(...e)
        }

        function B(e, r) {
            for (let t = 0, n = T.length; t < n; t += 1) {
                let n = T[t];
                if (n.condition(e, r)) return new n(e, r)
            }
            return new E(e, r)
        }
        let F = "$and",
            I = "$path",
            N = e => !!(e[F] || e.$or),
            M = e => ({
                [F]: Object.keys(e).map(r => ({
                    [r]: e[r]
                }))
            });

        function O(e, r, {
            auto: t = !0
        } = {}) {
            let a = e => {
                if (o(e)) {
                    let n = {
                        keyId: null,
                        pattern: e
                    };
                    return t && (n.searcher = B(e, r)), n
                }
                let s = Object.keys(e),
                    l = !!e[I];
                if (!l && s.length > 1 && !N(e)) return a(M(e));
                if (!n(e) && i(e) && !N(e)) {
                    let n = l ? e[I] : s[0],
                        a = l ? e.$val : e[n];
                    if (!o(a)) throw Error(`Invalid value for key ${n}`);
                    let i = {
                        keyId: m(n),
                        pattern: a
                    };
                    return t && (i.searcher = B(a, r)), i
                }
                let c = {
                    children: [],
                    operator: s[0]
                };
                return s.forEach(r => {
                    let t = e[r];
                    n(t) && t.forEach(e => {
                        c.children.push(a(e))
                    })
                }), c
            };
            return N(e) || (e = M(e)), a(e)
        }

        function R(e, {
            ignoreFieldNorm: r = b.ignoreFieldNorm
        }) {
            let t = 1;
            return e.forEach(({
                key: e,
                norm: n,
                score: a
            }) => {
                let o = e ? e.weight : null;
                t *= Math.pow(0 === a && o ? Number.EPSILON : a, (o || 1) * (r ? 1 : n))
            }), t
        }
        var U = class {
            constructor(e, r) {
                this.limit = e, this.heap = [], this.comparator = r
            }
            get size() {
                return this.heap.length
            }
            insert(e) {
                this.size < this.limit ? (this.heap.push(e), this._bubbleUp(this.size - 1)) : 0 > this.comparator(e, this.heap[0]) && (this.heap[0] = e, this._sinkDown(0))
            }
            extractSorted() {
                return this.heap.sort(this.comparator)
            }
            _bubbleUp(e) {
                let r = this.heap;
                for (; e > 0;) {
                    let t = e - 1 >> 1;
                    if (0 >= this.comparator(r[e], r[t])) break;
                    let n = r[e];
                    r[e] = r[t], r[t] = n, e = t
                }
            }
            _sinkDown(e) {
                let r = this.heap,
                    t = r.length,
                    n = e;
                do {
                    let a = 2 * (e = n) + 1,
                        o = 2 * e + 2;
                    if (a < t && this.comparator(r[a], r[n]) > 0 && (n = a), o < t && this.comparator(r[o], r[n]) > 0 && (n = o), n !== e) {
                        let t = r[e];
                        r[e] = r[n], r[n] = t
                    }
                } while (n !== e)
            }
        };
        let V = /[\p{L}\p{M}\p{N}_]+/gu,
            j = new WeakSet;

        function z({
            isCaseSensitive: e = !1,
            ignoreDiacritics: r = !1,
            tokenize: t
        } = {}) {
            let n = function(e) {
                if ("function" == typeof e) {
                    let r = !1;
                    return t => {
                        let n = e(t);
                        if (!r && (r = !0, !Array.isArray(n) || n.some(e => "string" != typeof e))) throw Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(n)?"array containing non-strings":typeof n}.`);
                        return n
                    }
                }
                if (e instanceof RegExp) return !e.global && (j.has(e) || (j.add(e), console.warn(`[Fuse] tokenize regex ${e} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`))), r => r.match(e) || [];
                return e => e.match(V) || []
            }(t);
            return {
                tokenize: t => (e || (t = t.toLowerCase()), r && (t = k(t)), n(t))
            }
        }
        var P = class {
            static condition(e, r) {
                return r.useTokenSearch
            }
            constructor(e, r) {
                this.options = r, this.analyzer = z({
                    isCaseSensitive: r.isCaseSensitive,
                    ignoreDiacritics: r.ignoreDiacritics,
                    tokenize: r.tokenize
                });
                let t = this.analyzer.tokenize(e),
                    {
                        df: n,
                        fieldCount: a
                    } = r._invertedIndex;
                for (let e of (this.termSearchers = [], this.idfWeights = [], t)) {
                    this.termSearchers.push(new E(e, {
                        location: r.location,
                        threshold: r.threshold,
                        distance: r.distance,
                        includeMatches: r.includeMatches,
                        findAllMatches: r.findAllMatches,
                        minMatchCharLength: r.minMatchCharLength,
                        isCaseSensitive: r.isCaseSensitive,
                        ignoreDiacritics: r.ignoreDiacritics,
                        ignoreLocation: !0
                    }));
                    let t = n.get(e) || 0,
                        o = Math.log(1 + (a - t + .5) / (t + .5));
                    this.idfWeights.push(o)
                }
                this.combineAll = "all" === r.tokenMatch, this.numTerms = this.termSearchers.length, this.useMask = this.numTerms <= 31
            }
            searchIn(e) {
                if (!this.termSearchers.length) return {
                    isMatch: !1,
                    score: 1
                };
                let r = [],
                    t = 0,
                    n = 0,
                    a = 0,
                    o = 0,
                    s = this.combineAll && !this.useMask ? new Set : null;
                for (let i = 0; i < this.termSearchers.length; i++) {
                    let l = this.termSearchers[i].searchIn(e),
                        c = this.idfWeights[i];
                    n += c, l.isMatch && (a++, t += c * (1 - l.score), l.indices && r.push(...l.indices), this.combineAll && (this.useMask ? o |= 1 << i : s.add(i)))
                }
                if (0 === a) return {
                    isMatch: !1,
                    score: 1
                };
                let i = {
                    isMatch: !0,
                    score: Math.max(.001, n > 0 ? 1 - t / n : 0)
                };
                return this.options.includeMatches && r.length && (i.indices = w(r)), this.combineAll && (this.useMask ? i.matchedMask = o : i.matchedTerms = s, i.termCount = this.numTerms), i
            }
        };

        function H(e, r, t, n) {
            let a = n.tokenize(r);
            if (!a.length) return;
            e.fieldCount++, e.docFieldCount.set(t, (e.docFieldCount.get(t) || 0) + 1);
            let o = new Set(a),
                s = e.docTermFieldHits.get(t);
            for (let r of (s || (s = new Map, e.docTermFieldHits.set(t, s)), o)) s.set(r, (s.get(r) || 0) + 1), e.df.set(r, (e.df.get(r) || 0) + 1)
        }

        function G(e, r, t, n) {
            let {
                i: a,
                v: o,
                $: s
            } = r;
            if (void 0 !== o) return void H(e, o, a, n);
            if (s)
                for (let r = 0; r < t; r++) {
                    let t = s[r];
                    if (t)
                        if (Array.isArray(t))
                            for (let r of t) H(e, r.v, a, n);
                        else H(e, t.v, a, n)
                }
        }

        function $(e, r) {
            if (0 === r.length) return;
            let t = Array.from(new Set(r)).sort((e, r) => e - r);
            for (let r of t) ! function(e, r) {
                let t = e.docFieldCount.get(r);
                if (void 0 === t) return;
                e.fieldCount -= t, e.docFieldCount.delete(r);
                let n = e.docTermFieldHits.get(r);
                if (n) {
                    for (let [r, t] of n) {
                        let n = (e.df.get(r) || 0) - t;
                        n <= 0 ? e.df.delete(r) : e.df.set(r, n)
                    }
                    e.docTermFieldHits.delete(r)
                }
            }(e, r);
            let n = e => {
                    let r = 0,
                        n = t.length;
                    for (; r < n;) {
                        let a = r + n >>> 1;
                        t[a] < e ? r = a + 1 : n = a
                    }
                    return e - r
                },
                a = t[0],
                o = new Map;
            for (let [r, t] of e.docFieldCount) o.set(r > a ? n(r) : r, t);
            e.docFieldCount = o;
            let s = new Map;
            for (let [r, t] of e.docTermFieldHits) s.set(r > a ? n(r) : r, t);
            e.docTermFieldHits = s
        }
        var J = class {
            constructor(e, r, t) {
                this.options = {
                    ...b,
                    ...r
                }, this.options.useExtendedSearch, this.options.useTokenSearch, this._keyStore = new p(this.options.keys), this._docs = e, this._myIndex = null, this._invertedIndex = null, this.setCollection(e, t), this._lastQuery = null, this._lastSearcher = null
            }
            _getSearcher(e) {
                if (this._lastQuery === e) return this._lastSearcher;
                let r = B(e, this._invertedIndex ? {
                    ...this.options,
                    _invertedIndex: this._invertedIndex
                } : this.options);
                return this._lastQuery = e, this._lastSearcher = r, r
            }
            setCollection(e, r) {
                if (this._docs = e, r && !(r instanceof y)) throw Error("Incorrect 'index' type");
                if (this._myIndex = r || v(this.options.keys, this._docs, {
                        getFn: this.options.getFn,
                        fieldNormWeight: this.options.fieldNormWeight
                    }), this.options.useTokenSearch) {
                    let e = z({
                        isCaseSensitive: this.options.isCaseSensitive,
                        ignoreDiacritics: this.options.ignoreDiacritics,
                        tokenize: this.options.tokenize
                    });
                    this._invertedIndex = function(e, r, t) {
                        let n = {
                            fieldCount: 0,
                            df: new Map,
                            docFieldCount: new Map,
                            docTermFieldHits: new Map
                        };
                        for (let a of e) G(n, a, r, t);
                        return n
                    }(this._myIndex.records, this._myIndex.keys.length, e)
                }
                this._invalidateSearcherCache()
            }
            add(e) {
                if (!l(e)) return;
                this._docs.push(e);
                let r = this._myIndex.add(e, this._docs.length - 1);
                if (this._invertedIndex && r) {
                    var t;
                    let e = z({
                        isCaseSensitive: this.options.isCaseSensitive,
                        ignoreDiacritics: this.options.ignoreDiacritics,
                        tokenize: this.options.tokenize
                    });
                    t = this._invertedIndex, G(t, r, this._myIndex.keys.length, e)
                }
                this._invalidateSearcherCache()
            }
            remove(e = () => !1) {
                let r = [],
                    t = [];
                for (let n = 0, a = this._docs.length; n < a; n += 1) e(this._docs[n], n) && (r.push(this._docs[n]), t.push(n));
                if (t.length) {
                    this._invertedIndex && $(this._invertedIndex, t);
                    let e = new Set(t);
                    this._docs = this._docs.filter((r, t) => !e.has(t)), this._myIndex.removeAll(t), this._invalidateSearcherCache()
                }
                return r
            }
            removeAt(e) {
                if (!Number.isInteger(e) || e < 0 || e >= this._docs.length) throw Error(h);
                this._invertedIndex && $(this._invertedIndex, [e]);
                let r = this._docs.splice(e, 1)[0];
                return this._myIndex.removeAt(e), this._invalidateSearcherCache(), r
            }
            _invalidateSearcherCache() {
                this._lastQuery = null, this._lastSearcher = null
            }
            getIndex() {
                return this._myIndex
            }
            _normalizedKeys() {
                return this._myIndex.keys.map(e => this._keyStore.get(e.id) || e)
            }
            search(e, r) {
                let t, {
                        limit: n = -1
                    } = r || {},
                    {
                        includeMatches: a,
                        includeScore: i,
                        shouldSort: c,
                        sortFn: u,
                        ignoreFieldNorm: h
                    } = this.options;
                if (o(e) && !e.trim()) {
                    let e = this._docs.map((e, r) => ({
                        item: e,
                        refIndex: r
                    }));
                    return s(n) && n > -1 && (e = e.slice(0, n)), e
                }
                let f = c && s(n) && n > 0 && o(e),
                    p = (e, r) => u(e, r) || e.idx - r.idx;
                if (f) {
                    let r = new U(n, p);
                    o(this._docs[0]) ? this._searchStringList(e, {
                        heap: r,
                        ignoreFieldNorm: h
                    }) : this._searchObjectList(e, {
                        heap: r,
                        ignoreFieldNorm: h
                    }), t = r.extractSorted()
                } else ! function(e, {
                    ignoreFieldNorm: r = b.ignoreFieldNorm
                }) {
                    e.forEach(e => {
                        e.score = R(e.matches, {
                            ignoreFieldNorm: r
                        })
                    })
                }(t = o(e) ? o(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e), {
                    ignoreFieldNorm: h
                }), c && t.sort(o(e) ? p : u), s(n) && n > -1 && (t = t.slice(0, n));
                return function(e, r, {
                    includeMatches: t = b.includeMatches,
                    includeScore: n = b.includeScore
                } = {}) {
                    return e.map(e => {
                        let a, {
                                idx: o
                            } = e,
                            s = {
                                item: r[o],
                                refIndex: o
                            };
                        return t && (a = [], e.matches.forEach(e => {
                            if (!l(e.indices) || !e.indices.length) return;
                            let r = {
                                indices: e.indices,
                                value: e.value
                            };
                            e.key && (r.key = e.key.id), e.idx > -1 && (r.refIndex = e.idx), a.push(r)
                        }), s.matches = a), n && (s.score = e.score), s
                    })
                }(t, this._docs, {
                    includeMatches: a,
                    includeScore: i
                })
            }
            _searchStringList(e, {
                heap: r,
                ignoreFieldNorm: t
            } = {}) {
                let n = this._getSearcher(e),
                    a = this.options.useTokenSearch && "all" === this.options.tokenMatch,
                    {
                        records: o
                    } = this._myIndex,
                    s = r ? null : [];
                return o.forEach(({
                    v: e,
                    i: o,
                    n: i
                }) => {
                    if (!l(e)) return;
                    let c = n.searchIn(e);
                    if (c.isMatch) {
                        let n = {
                            score: c.score,
                            value: e,
                            norm: i,
                            indices: c.indices
                        };
                        a && (n.matchedMask = c.matchedMask, n.matchedTerms = c.matchedTerms, n.termCount = c.termCount);
                        let l = [n];
                        if (!a || this._coversAllTokens(l)) {
                            let n = {
                                item: e,
                                idx: o,
                                matches: l
                            };
                            r ? (n.score = R(n.matches, {
                                ignoreFieldNorm: t
                            }), r.insert(n)) : s.push(n)
                        }
                    }
                }), s
            }
            _searchLogical(e) {
                let r = O(e, this.options),
                    t = this._normalizedKeys(),
                    n = (e, r, a) => {
                        if (!("children" in e)) {
                            let n, {
                                keyId: o,
                                searcher: s
                            } = e;
                            return (null === o ? (n = [], t.forEach((e, t) => {
                                n.push(...this._findMatches({
                                    key: e,
                                    value: r[t],
                                    searcher: s
                                }))
                            })) : n = this._findMatches({
                                key: this._keyStore.get(o),
                                value: this._myIndex.getValueForItemAtKeyId(r, o),
                                searcher: s
                            }), n && n.length) ? [{
                                idx: a,
                                item: r,
                                matches: n
                            }] : []
                        }
                        let {
                            children: o,
                            operator: s
                        } = e, i = [];
                        for (let e = 0, t = o.length; e < t; e += 1) {
                            let t = n(o[e], r, a);
                            if (t.length) i.push(...t);
                            else if (s === F) return []
                        }
                        return i
                    },
                    a = this._myIndex.records,
                    o = new Map,
                    s = [];
                return a.forEach(({
                    $: e,
                    i: t
                }) => {
                    if (l(e)) {
                        let a = n(r, e, t);
                        a.length && (o.has(t) || (o.set(t, {
                            idx: t,
                            item: e,
                            matches: []
                        }), s.push(o.get(t))), a.forEach(({
                            matches: e
                        }) => {
                            o.get(t).matches.push(...e)
                        }))
                    }
                }), s
            }
            _searchObjectList(e, {
                heap: r,
                ignoreFieldNorm: t
            } = {}) {
                let n = this._getSearcher(e),
                    a = this.options.useTokenSearch && "all" === this.options.tokenMatch,
                    {
                        records: o
                    } = this._myIndex,
                    s = this._normalizedKeys(),
                    i = r ? null : [];
                return o.forEach(({
                    $: e,
                    i: o
                }) => {
                    if (!l(e)) return;
                    let c = [],
                        u = !1,
                        h = !1;
                    if (s.forEach((r, t) => {
                            let a = this._findMatches({
                                key: r,
                                value: e[t],
                                searcher: n
                            });
                            a.length ? (c.push(...a), a[0].hasInverse && (h = !0)) : u = !0
                        }), (!h || !u) && c.length && (!a || this._coversAllTokens(c))) {
                        let n = {
                            idx: o,
                            item: e,
                            matches: c
                        };
                        r ? (n.score = R(n.matches, {
                            ignoreFieldNorm: t
                        }), r.insert(n)) : i.push(n)
                    }
                }), i
            }
            _findMatches({
                key: e,
                value: r,
                searcher: t
            }) {
                if (!l(r)) return [];
                let a = [];
                if (n(r)) r.forEach(({
                    v: r,
                    i: n,
                    n: o
                }) => {
                    if (!l(r)) return;
                    let s = t.searchIn(r);
                    if (s.isMatch) {
                        let t = {
                            score: s.score,
                            key: e,
                            value: r,
                            idx: n,
                            norm: o,
                            indices: s.indices,
                            hasInverse: s.hasInverse
                        };
                        void 0 !== s.termCount && (t.matchedMask = s.matchedMask, t.matchedTerms = s.matchedTerms, t.termCount = s.termCount), a.push(t)
                    }
                });
                else {
                    let {
                        v: n,
                        n: o
                    } = r, s = t.searchIn(n);
                    if (s.isMatch) {
                        let r = {
                            score: s.score,
                            key: e,
                            value: n,
                            norm: o,
                            indices: s.indices,
                            hasInverse: s.hasInverse
                        };
                        void 0 !== s.termCount && (r.matchedMask = s.matchedMask, r.matchedTerms = s.matchedTerms, r.termCount = s.termCount), a.push(r)
                    }
                }
                return a
            }
            _coversAllTokens(e) {
                let r = e.length ? e[0].termCount : void 0;
                if (void 0 === r) return !0;
                if (r <= 31) {
                    let t = 0;
                    for (let r = 0; r < e.length; r++) t |= e[r].matchedMask || 0;
                    return t === 2 ** r - 1
                }
                let t = new Set;
                for (let r = 0; r < e.length; r++) {
                    let n = e[r].matchedTerms;
                    if (n)
                        for (let e of n) t.add(e)
                }
                return t.size === r
            }
        };
        J.version = "7.5.0", J.createIndex = v, J.parseIndex = function(e, {
            getFn: r = b.getFn,
            fieldNormWeight: t = b.fieldNormWeight
        } = {}) {
            let {
                keys: n,
                records: a
            } = e, o = new y({
                getFn: r,
                fieldNormWeight: t
            });
            return o.setKeys(n), o.setIndexRecords(a), o
        }, J.config = b, J.match = function(e, r, t) {
            if (t && t.useTokenSearch) throw Error("Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.");
            return B(e, {
                ...b,
                ...t
            }).searchIn(r)
        }, J.parseQuery = O, _(L), _(P), J.use = function(...e) {
            e.forEach(e => _(e))
        }, t.d(r, {}, {
            a: J
        })
    }),
    Mwrm: (function(e, r, t) {
        var n, a = Symbol.for("immer-nothing"),
            o = Symbol.for("immer-draftable"),
            s = Symbol.for("immer-state");

        function i(e) {
            throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)
        }
        var l = Object.getPrototypeOf;

        function c(e) {
            return !!e && !!e[s]
        }

        function u(e) {
            return !!e && (p(e) || Array.isArray(e) || !!e[o] || !!e.constructor?.[o] || v(e) || w(e))
        }
        var h = Object.prototype.constructor.toString(),
            f = new WeakMap;

        function p(e) {
            if (!e || "object" != typeof e) return !1;
            let r = Object.getPrototypeOf(e);
            if (null === r || r === Object.prototype) return !0;
            let t = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
            if (t === Object) return !0;
            if ("function" != typeof t) return !1;
            let n = f.get(t);
            return void 0 === n && (n = Function.toString.call(t), f.set(t, n)), n === h
        }

        function d(e, r, t = !0) {
            0 === g(e) ? (t ? Reflect.ownKeys(e) : Object.keys(e)).forEach(t => {
                r(t, e[t], e)
            }) : e.forEach((t, n) => r(n, t, e))
        }

        function g(e) {
            let r = e[s];
            return r ? r.type_ : Array.isArray(e) ? 1 : v(e) ? 2 : 3 * !!w(e)
        }

        function m(e, r) {
            return 2 === g(e) ? e.has(r) : Object.prototype.hasOwnProperty.call(e, r)
        }

        function b(e, r) {
            return 2 === g(e) ? e.get(r) : e[r]
        }

        function y(e, r, t) {
            let n = g(e);
            2 === n ? e.set(r, t) : 3 === n ? e.add(t) : e[r] = t
        }

        function v(e) {
            return e instanceof Map
        }

        function w(e) {
            return e instanceof Set
        }

        function A(e) {
            return e.copy_ || e.base_
        }

        function D(e, r) {
            if (v(e)) return new Map(e);
            if (w(e)) return new Set(e);
            if (Array.isArray(e)) return Array.prototype.slice.call(e);
            let t = p(e);
            if (!0 !== r && ("class_only" !== r || t)) {
                let r = l(e);
                return null !== r && t ? {
                    ...e
                } : Object.assign(Object.create(r), e)
            } {
                let r = Object.getOwnPropertyDescriptors(e);
                delete r[s];
                let t = Reflect.ownKeys(r);
                for (let n = 0; n < t.length; n++) {
                    let a = t[n],
                        o = r[a];
                    !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (r[a] = {
                        configurable: !0,
                        writable: !0,
                        enumerable: o.enumerable,
                        value: e[a]
                    })
                }
                return Object.create(l(e), r)
            }
        }

        function k(e, r = !1) {
            return x(e) || c(e) || !u(e) || (g(e) > 1 && Object.defineProperties(e, {
                set: E,
                add: E,
                clear: E,
                delete: E
            }), Object.freeze(e), r && Object.values(e).forEach(e => k(e, !0))), e
        }
        var E = {
            value: function() {
                i(2)
            }
        };

        function x(e) {
            return null === e || "object" != typeof e || Object.isFrozen(e)
        }
        var C = {};

        function S(e) {
            let r = C[e];
            return r || i(0), r
        }

        function q(e, r) {
            r && (S("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = r)
        }

        function L(e) {
            T(e), e.drafts_.forEach(B), e.drafts_ = null
        }

        function T(e) {
            e === n && (n = e.parent_)
        }

        function _(e) {
            return n = {
                drafts_: [],
                parent_: n,
                immer_: e,
                canAutoFreeze_: !0,
                unfinalizedDrafts_: 0
            }
        }

        function B(e) {
            let r = e[s];
            0 === r.type_ || 1 === r.type_ ? r.revoke_() : r.revoked_ = !0
        }

        function F(e, r) {
            r.unfinalizedDrafts_ = r.drafts_.length;
            let t = r.drafts_[0];
            return void 0 !== e && e !== t ? (t[s].modified_ && (L(r), i(4)), u(e) && (e = I(r, e), r.parent_ || M(r, e)), r.patches_ && S("Patches").generateReplacementPatches_(t[s].base_, e, r.patches_, r.inversePatches_)) : e = I(r, t, []), L(r), r.patches_ && r.patchListener_(r.patches_, r.inversePatches_), e !== a ? e : void 0
        }

        function I(e, r, t) {
            if (x(r)) return r;
            let n = e.immer_.shouldUseStrictIteration(),
                a = r[s];
            if (!a) return d(r, (n, o) => N(e, a, r, n, o, t), n), r;
            if (a.scope_ !== e) return r;
            if (!a.modified_) return M(e, a.base_, !0), a.base_;
            if (!a.finalized_) {
                a.finalized_ = !0, a.scope_.unfinalizedDrafts_--;
                let r = a.copy_,
                    o = r,
                    s = !1;
                3 === a.type_ && (o = new Set(r), r.clear(), s = !0), d(o, (n, o) => N(e, a, r, n, o, t, s), n), M(e, r, !1), t && e.patches_ && S("Patches").generatePatches_(a, t, e.patches_, e.inversePatches_)
            }
            return a.copy_
        }

        function N(e, r, t, n, a, o, s) {
            if (null == a || "object" != typeof a && !s) return;
            let i = x(a);
            if (!i || s) {
                if (c(a)) {
                    let s = I(e, a, o && r && 3 !== r.type_ && !m(r.assigned_, n) ? o.concat(n) : void 0);
                    if (y(t, n, s), !c(s)) return;
                    e.canAutoFreeze_ = !1
                } else s && t.add(a);
                if (u(a) && !i) {
                    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1 || r && r.base_ && r.base_[n] === a && i) return;
                    I(e, a), (!r || !r.scope_.parent_) && "symbol" != typeof n && (v(t) ? t.has(n) : Object.prototype.propertyIsEnumerable.call(t, n)) && M(e, a)
                }
            }
        }

        function M(e, r, t = !1) {
            !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && k(r, t)
        }
        var O = {
                get(e, r) {
                    if (r === s) return e;
                    let t = A(e);
                    if (!m(t, r)) {
                        var n;
                        let a;
                        return n = e, (a = V(t, r)) ? "value" in a ? a.value : a.get?.call(n.draft_) : void 0
                    }
                    let a = t[r];
                    return e.finalized_ || !u(a) ? a : a === U(e.base_, r) ? (z(e), e.copy_[r] = P(a, e)) : a
                },
                has: (e, r) => r in A(e),
                ownKeys: e => Reflect.ownKeys(A(e)),
                set(e, r, t) {
                    let n = V(A(e), r);
                    if (n?.set) return n.set.call(e.draft_, t), !0;
                    if (!e.modified_) {
                        let n = U(A(e), r),
                            a = n?.[s];
                        if (a && a.base_ === t) return e.copy_[r] = t, e.assigned_[r] = !1, !0;
                        if ((t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n) && (void 0 !== t || m(e.base_, r))) return !0;
                        z(e), j(e)
                    }
                    return !!(e.copy_[r] === t && (void 0 !== t || r in e.copy_) || Number.isNaN(t) && Number.isNaN(e.copy_[r])) || (e.copy_[r] = t, e.assigned_[r] = !0, !0)
                },
                deleteProperty: (e, r) => (void 0 !== U(e.base_, r) || r in e.base_ ? (e.assigned_[r] = !1, z(e), j(e)) : delete e.assigned_[r], e.copy_ && delete e.copy_[r], !0),
                getOwnPropertyDescriptor(e, r) {
                    let t = A(e),
                        n = Reflect.getOwnPropertyDescriptor(t, r);
                    return n ? {
                        writable: !0,
                        configurable: 1 !== e.type_ || "length" !== r,
                        enumerable: n.enumerable,
                        value: t[r]
                    } : n
                },
                defineProperty() {
                    i(11)
                },
                getPrototypeOf: e => l(e.base_),
                setPrototypeOf() {
                    i(12)
                }
            },
            R = {};

        function U(e, r) {
            let t = e[s];
            return (t ? A(t) : e)[r]
        }

        function V(e, r) {
            if (!(r in e)) return;
            let t = l(e);
            for (; t;) {
                let e = Object.getOwnPropertyDescriptor(t, r);
                if (e) return e;
                t = l(t)
            }
        }

        function j(e) {
            !e.modified_ && (e.modified_ = !0, e.parent_ && j(e.parent_))
        }

        function z(e) {
            e.copy_ || (e.copy_ = D(e.base_, e.scope_.immer_.useStrictShallowCopy_))
        }

        function P(e, r) {
            let t = v(e) ? S("MapSet").proxyMap_(e, r) : w(e) ? S("MapSet").proxySet_(e, r) : function(e, r) {
                let t = Array.isArray(e),
                    a = {
                        type_: +!!t,
                        scope_: r ? r.scope_ : n,
                        modified_: !1,
                        finalized_: !1,
                        assigned_: {},
                        parent_: r,
                        base_: e,
                        draft_: null,
                        copy_: null,
                        revoke_: null,
                        isManual_: !1
                    },
                    o = a,
                    s = O;
                t && (o = [a], s = R);
                let {
                    revoke: i,
                    proxy: l
                } = Proxy.revocable(o, s);
                return a.draft_ = l, a.revoke_ = i, l
            }(e, r);
            return (r ? r.scope_ : n).drafts_.push(t), t
        }

        function H(e) {
            return c(e) || i(10),
                function e(r) {
                    let t;
                    if (!u(r) || x(r)) return r;
                    let n = r[s],
                        a = !0;
                    if (n) {
                        if (!n.modified_) return n.base_;
                        n.finalized_ = !0, t = D(r, n.scope_.immer_.useStrictShallowCopy_), a = n.scope_.immer_.shouldUseStrictIteration()
                    } else t = D(r, !0);
                    return d(t, (r, n) => {
                        y(t, r, e(n))
                    }, a), n && (n.finalized_ = !1), t
                }(e)
        }
        d(O, (e, r) => {
            R[e] = function() {
                return arguments[0] = arguments[0][0], r.apply(this, arguments)
            }
        }), R.deleteProperty = function(e, r) {
            return R.set.call(this, e, r, void 0)
        }, R.set = function(e, r, t) {
            return O.set.call(this, e[0], r, t, e[0])
        };
        var G = new class {
                constructor(e) {
                    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !0, this.produce = (e, r, t) => {
                        let n;
                        if ("function" == typeof e && "function" != typeof r) {
                            let t = r;
                            r = e;
                            let n = this;
                            return function(e = t, ...a) {
                                return n.produce(e, e => r.call(this, e, ...a))
                            }
                        }
                        if ("function" != typeof r && i(6), void 0 !== t && "function" != typeof t && i(7), u(e)) {
                            let a = _(this),
                                o = P(e, void 0),
                                s = !0;
                            try {
                                n = r(o), s = !1
                            } finally {
                                s ? L(a) : T(a)
                            }
                            return q(a, t), F(n, a)
                        }
                        if (e && "object" == typeof e) i(1);
                        else {
                            if (void 0 === (n = r(e)) && (n = e), n === a && (n = void 0), this.autoFreeze_ && k(n, !0), t) {
                                let r = [],
                                    a = [];
                                S("Patches").generateReplacementPatches_(e, n, r, a), t(r, a)
                            }
                            return n
                        }
                    }, this.produceWithPatches = (e, r) => {
                        let t, n;
                        return "function" == typeof e ? (r, ...t) => this.produceWithPatches(r, r => e(r, ...t)) : [this.produce(e, r, (e, r) => {
                            t = e, n = r
                        }), t, n]
                    }, "boolean" == typeof e?.autoFreeze && this.setAutoFreeze(e.autoFreeze), "boolean" == typeof e?.useStrictShallowCopy && this.setUseStrictShallowCopy(e.useStrictShallowCopy), "boolean" == typeof e?.useStrictIteration && this.setUseStrictIteration(e.useStrictIteration)
                }
                createDraft(e) {
                    u(e) || i(8), c(e) && (e = H(e));
                    let r = _(this),
                        t = P(e, void 0);
                    return t[s].isManual_ = !0, T(r), t
                }
                finishDraft(e, r) {
                    let t = e && e[s];
                    t && t.isManual_ || i(9);
                    let {
                        scope_: n
                    } = t;
                    return q(n, r), F(void 0, n)
                }
                setAutoFreeze(e) {
                    this.autoFreeze_ = e
                }
                setUseStrictShallowCopy(e) {
                    this.useStrictShallowCopy_ = e
                }
                setUseStrictIteration(e) {
                    this.useStrictIteration_ = e
                }
                shouldUseStrictIteration() {
                    return this.useStrictIteration_
                }
                applyPatches(e, r) {
                    let t;
                    for (t = r.length - 1; t >= 0; t--) {
                        let n = r[t];
                        if (0 === n.path.length && "replace" === n.op) {
                            e = n.value;
                            break
                        }
                    }
                    t > -1 && (r = r.slice(t + 1));
                    let n = S("Patches").applyPatches_;
                    return c(e) ? n(e, r) : this.produce(e, e => n(e, r))
                }
            },
            $ = G.produce,
            J = G.produceWithPatches.bind(G),
            W = G.applyPatches.bind(G);
        t.d(r, {}, {
            a: W,
            b: function(e) {
                return e
            },
            c: H,
            d: function() {
                let e = "replace",
                    r = "remove";

                function t(e) {
                    if (!u(e)) return e;
                    if (Array.isArray(e)) return e.map(t);
                    if (v(e)) return new Map(Array.from(e.entries()).map(([e, r]) => [e, t(r)]));
                    if (w(e)) return new Set(Array.from(e).map(t));
                    let r = Object.create(l(e));
                    for (let n in e) r[n] = t(e[n]);
                    return m(e, o) && (r[o] = e[o]), r
                }

                function n(e) {
                    return c(e) ? t(e) : e
                }
                C.Patches || (C.Patches = {
                    applyPatches_: function(n, a) {
                        return a.forEach(a => {
                            let {
                                path: o,
                                op: s
                            } = a, l = n;
                            for (let e = 0; e < o.length - 1; e++) {
                                let r = g(l),
                                    t = o[e];
                                "string" != typeof t && "number" != typeof t && (t = "" + t), (0 === r || 1 === r) && ("__proto__" === t || "constructor" === t) && i(19), "function" == typeof l && "prototype" === t && i(19), "object" != typeof(l = b(l, t)) && i(18, o.join("/"))
                            }
                            let c = g(l),
                                u = t(a.value),
                                h = o[o.length - 1];
                            switch (s) {
                                case e:
                                    switch (c) {
                                        case 2:
                                            return l.set(h, u);
                                        case 3:
                                            i(16);
                                        default:
                                            return l[h] = u
                                    }
                                case "add":
                                    switch (c) {
                                        case 1:
                                            return "-" === h ? l.push(u) : l.splice(h, 0, u);
                                        case 2:
                                            return l.set(h, u);
                                        case 3:
                                            return l.add(u);
                                        default:
                                            return l[h] = u
                                    }
                                case r:
                                    switch (c) {
                                        case 1:
                                            return l.splice(h, 1);
                                        case 2:
                                            return l.delete(h);
                                        case 3:
                                            return l.delete(a.value);
                                        default:
                                            return delete l[h]
                                    }
                                default:
                                    i(17)
                            }
                        }), n
                    },
                    generatePatches_: function(t, a, o, s) {
                        switch (t.type_) {
                            case 0:
                            case 2:
                                return function(t, a, o, s) {
                                    let {
                                        base_: i,
                                        copy_: l
                                    } = t;
                                    d(t.assigned_, (t, c) => {
                                        let u = b(i, t),
                                            h = b(l, t),
                                            f = c ? m(i, t) ? e : "add" : r;
                                        if (u === h && f === e) return;
                                        let p = a.concat(t);
                                        o.push(f === r ? {
                                            op: f,
                                            path: p
                                        } : {
                                            op: f,
                                            path: p,
                                            value: h
                                        }), s.push("add" === f ? {
                                            op: r,
                                            path: p
                                        } : f === r ? {
                                            op: "add",
                                            path: p,
                                            value: n(u)
                                        } : {
                                            op: e,
                                            path: p,
                                            value: n(u)
                                        })
                                    })
                                }(t, a, o, s);
                            case 1:
                                return function(t, a, o, s) {
                                    let {
                                        base_: i,
                                        assigned_: l
                                    } = t, c = t.copy_;
                                    c.length < i.length && ([i, c] = [c, i], [o, s] = [s, o]);
                                    for (let r = 0; r < i.length; r++)
                                        if (l[r] && c[r] !== i[r]) {
                                            let t = a.concat([r]);
                                            o.push({
                                                op: e,
                                                path: t,
                                                value: n(c[r])
                                            }), s.push({
                                                op: e,
                                                path: t,
                                                value: n(i[r])
                                            })
                                        } for (let e = i.length; e < c.length; e++) {
                                        let r = a.concat([e]);
                                        o.push({
                                            op: "add",
                                            path: r,
                                            value: n(c[e])
                                        })
                                    }
                                    for (let e = c.length - 1; i.length <= e; --e) {
                                        let t = a.concat([e]);
                                        s.push({
                                            op: r,
                                            path: t
                                        })
                                    }
                                }(t, a, o, s);
                            case 3:
                                return function(e, t, n, a) {
                                    let {
                                        base_: o,
                                        copy_: s
                                    } = e, i = 0;
                                    o.forEach(e => {
                                        if (!s.has(e)) {
                                            let o = t.concat([i]);
                                            n.push({
                                                op: r,
                                                path: o,
                                                value: e
                                            }), a.unshift({
                                                op: "add",
                                                path: o,
                                                value: e
                                            })
                                        }
                                        i++
                                    }), i = 0, s.forEach(e => {
                                        if (!o.has(e)) {
                                            let o = t.concat([i]);
                                            n.push({
                                                op: "add",
                                                path: o,
                                                value: e
                                            }), a.unshift({
                                                op: r,
                                                path: o,
                                                value: e
                                            })
                                        }
                                        i++
                                    })
                                }(t, a, o, s)
                        }
                    },
                    generateReplacementPatches_: function(r, t, n, o) {
                        n.push({
                            op: e,
                            path: [],
                            value: t === a ? void 0 : t
                        }), o.push({
                            op: e,
                            path: [],
                            value: r
                        })
                    }
                })
            },
            e: c,
            f: function(e) {
                return c(e) || i(15), e[s].base_
            },
            g: $,
            h: J
        })
    }),
    a8PL: (function(e, r, t) {
        t.d(r, {
            a: () => a
        });
        var n = t("pe9J");

        function a(e) {
            let r;
            return (r = "string" == typeof e ? e.charCodeAt(0) : e) >= 97 && r <= 122 || r >= 65 && r <= 90 || (0, n.a)(e)
        }
    }),
    pe9J: (function(e, r, t) {
        t.d(r, {}, {
            a: function(e) {
                let r = "string" == typeof e ? e.charCodeAt(0) : e;
                return r >= 48 && r <= 57
            }
        })
    }),
    rJqX: (function(e, r, t) {
        t.d(r, {}, {
            a: function(e) {
                let r = "string" == typeof e ? e.charCodeAt(0) : e;
                return r >= 97 && r <= 102 || r >= 65 && r <= 70 || r >= 48 && r <= 57
            }
        })
    }),
    oB0b: (function(e, r, t) {
        t.d(r, {}, {
            a: function(e) {
                if ("object" != typeof e || null === e) return !1;
                let r = Object.getPrototypeOf(e);
                return (null === r || r === Object.prototype || null === Object.getPrototypeOf(r)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
            }
        })
    }),
    ouEa: (function(e, r, t) {
        let n;
        var a = t("HkKI");
        let o = 0;

        function s(e) {
            return e(this)
        }

        function i(e, r, t) {
            return r(this, "function" == typeof t ? t(e(this)) : t)
        }
        t.d(r, {}, {
            a: function(e, r) {
                let t = `atom${++o}`,
                    n = {
                        toString: () => t
                    };
                return "function" == typeof e ? n.read = e : (n.init = e, n.read = s, n.write = i), r && (n.write = r), n
            },
            b: function() {
                return n ? n() : (0, a.a)()
            }
        })
    }),
    HkKI: (function(e, r, t) {
        function n(e) {
            return "function" == typeof e.write
        }

        function a(e) {
            return "v" in e || "e" in e
        }

        function o(e) {
            if ("e" in e) throw e.e;
            return e.v
        }

        function s(e) {
            return "function" == typeof(null == e ? void 0 : e.then)
        }

        function i(e, r, t) {
            if (!t.p.has(e)) {
                t.p.add(e);
                let n = () => t.p.delete(e);
                r.then(n, n)
            }
        }

        function l(e, r, t) {
            let n = t.get(e),
                a = null == n ? void 0 : n.t,
                o = r.p;
            if (!(null == a ? void 0 : a.size)) return o;
            if (!o.size) return a;
            let s = new Set(a);
            for (let e of o) s.add(e);
            return s
        }
        let c = () => {
                let e = {},
                    r = new WeakMap,
                    t = t => {
                        var n, a;
                        null == (n = r.get(e)) || n.forEach(e => e(t)), null == (a = r.get(t)) || a.forEach(e => e())
                    };
                return t.add = (t, n) => {
                    let a = t || e,
                        o = r.get(a);
                    return o || (o = new Set, r.set(a, o)), o.add(n), () => {
                        o.delete(n), o.size || r.delete(a)
                    }
                }, t
            },
            u = (e, r, t, ...n) => t.read(...n),
            h = (e, r, t, ...n) => t.write(...n),
            f = (e, r, t) => t.INTERNAL_onInit(r),
            p = (e, r, t, n) => {
                var a;
                return null == (a = t.onMount) ? void 0 : a.call(t, n)
            },
            d = (e, r, t) => {
                var n;
                let a = e[0],
                    o = a.get(t);
                if (!o) {
                    let s = e[6],
                        i = e[9];
                    o = {
                        d: new Map,
                        p: new Set,
                        n: 0
                    }, a.set(t, o), null == (n = s.i) || n.call(s, t), t.INTERNAL_onInit && i(e, r, t)
                }
                return o
            },
            g = (e, r) => {
                var t;
                let n = e[1],
                    a = e[3],
                    o = e[4],
                    s = e[5],
                    i = e[6],
                    l = e[13];
                if (!i.f && !a.size && !o.size && !s.size) return;
                let c = [],
                    u = e => {
                        try {
                            e()
                        } catch (e) {
                            c.push(e)
                        }
                    };
                do {
                    i.f && u(i.f);
                    let c = new Set;
                    for (let e of a) {
                        let r = null == (t = n.get(e)) ? void 0 : t.l;
                        if (r)
                            for (let e of r) c.add(e)
                    }
                    for (let e of (a.clear(), s)) c.add(e);
                    for (let e of (s.clear(), o)) c.add(e);
                    for (let e of (o.clear(), c)) u(e);
                    a.size && l(e, r)
                } while (a.size || s.size || o.size) if (c.length) throw AggregateError(c)
            },
            m = (e, r) => {
                let t = e[1],
                    n = e[2],
                    a = e[3],
                    o = e[11],
                    s = e[14],
                    i = e[17];
                if (!a.size) return;
                let c = [],
                    u = [],
                    h = new WeakSet,
                    f = new WeakSet,
                    p = [],
                    d = [];
                for (let t of a) p.push(t), d.push(o(e, r, t));
                for (; p.length;) {
                    let a = p.length - 1,
                        s = p[a],
                        i = d[a];
                    if (f.has(s)) {
                        p.pop(), d.pop();
                        continue
                    }
                    if (h.has(s)) {
                        n.get(s) === i.n && (c.push(s), u.push(i)), f.add(s), p.pop(), d.pop();
                        continue
                    }
                    for (let n of (h.add(s), l(s, i, t))) h.has(n) || (p.push(n), d.push(o(e, r, n)))
                }
                for (let t = c.length - 1; t >= 0; --t) {
                    let o = c[t],
                        l = u[t],
                        h = !1;
                    for (let e of l.d.keys())
                        if (e !== o && a.has(e)) {
                            h = !0;
                            break
                        } h && (n.set(o, l.n), s(e, r, o), i(e, r, o)), n.delete(o)
                }
            },
            b = (e, r, t) => {
                var l, c;
                let u, h, f = e[1],
                    p = e[2],
                    d = e[3],
                    g = e[6],
                    m = e[7],
                    b = e[11],
                    y = e[12],
                    v = e[13],
                    w = e[14],
                    A = e[16],
                    D = e[17],
                    k = e[20],
                    E = e[26],
                    x = e[28],
                    C = b(e, r, t),
                    S = x[0];
                if (a(C)) {
                    if (f.has(t) && p.get(t) !== C.n || C.m === S) return C.m = S, C;
                    let n = !1;
                    for (let [t, a] of C.d)
                        if (w(e, r, t).n !== a) {
                            n = !0;
                            break
                        } if (!n) return C.m = S, C
                }
                let q = !0,
                    L = new Set(C.d.keys()),
                    T = () => {
                        for (let e of L) C.d.delete(e)
                    },
                    _ = () => {
                        if (f.has(t)) {
                            let n = !d.size;
                            D(e, r, t), n && (v(e, r), y(e, r))
                        }
                    },
                    B = C.n,
                    F = p.get(t) === B;
                try {
                    let c = m(e, r, t, n => {
                        var l;
                        if (n === t) {
                            let t = b(e, r, n);
                            if (!a(t))
                                if ("init" in n) k(e, r, n, n.init);
                                else throw Error("no atom init");
                            return o(t)
                        }
                        let c = w(e, r, n);
                        try {
                            return o(c)
                        } finally {
                            L.delete(n), C.d.set(n, c.n), s(C.v) && i(t, C.v, c), f.has(t) && (null == (l = f.get(n)) || l.t.add(t)), q || _()
                        }
                    }, {
                        get signal() {
                            return u || (u = new AbortController), u.signal
                        },
                        get setSelf() {
                            return !h && n(t) && (h = (...n) => {
                                if (!q) try {
                                    return A(e, r, t, n)
                                } finally {
                                    v(e, r), y(e, r)
                                }
                            }), h
                        }
                    });
                    if (k(e, r, t, c), s(c)) {
                        E(e, r, c, () => null == u ? void 0 : u.abort());
                        let t = () => {
                            T(), _()
                        };
                        c.then(t, t)
                    } else T();
                    return null == (l = g.r) || l.call(g, t), C.m = S, C
                } catch (e) {
                    if (function(e) {
                            if (!(e instanceof Error)) return !1;
                            let r = e.name,
                                t = e.message.toLowerCase();
                            return ("RangeError" === r || "InternalError" === r) && (t.includes("call stack") || t.includes("too much recursion") || t.includes("stack overflow"))
                        }(e)) throw e;
                    return delete C.v, C.e = e, ++C.n, C.m = S, C
                } finally {
                    q = !1, C.n !== B && F && (p.set(t, C.n), d.add(t), null == (c = g.c) || c.call(g, t))
                }
            },
            y = (e, r, t) => {
                let n = e[1],
                    a = e[2],
                    o = e[11],
                    s = [t];
                for (; s.length;) {
                    let t = s.pop(),
                        i = o(e, r, t);
                    for (let c of l(t, i, n)) {
                        let t = o(e, r, c);
                        a.get(c) !== t.n && (a.set(c, t.n), s.push(c))
                    }
                }
            },
            v = (e, r, t, n) => {
                let a = e[3],
                    s = e[6],
                    i = e[8],
                    l = e[11],
                    c = e[12],
                    u = e[13],
                    h = e[14],
                    f = e[15],
                    p = e[16],
                    d = e[17],
                    g = e[20],
                    m = e[28],
                    b = !0;
                try {
                    return i(e, r, t, t => o(h(e, r, t)), (n, ...o) => {
                        var i;
                        let h = l(e, r, n);
                        try {
                            if (n !== t) return p(e, r, n, o);
                            {
                                if (!("init" in n)) throw Error("atom not writable");
                                let t = h.n,
                                    l = o[0];
                                g(e, r, n, l), d(e, r, n), t !== h.n && (++m[0], a.add(n), f(e, r, n), null == (i = s.c) || i.call(s, n));
                                return
                            }
                        } finally {
                            b || (u(e, r), c(e, r))
                        }
                    }, ...n)
                } finally {
                    b = !1
                }
            },
            w = (e, r, t) => {
                var n;
                let a = e[1],
                    o = e[3],
                    s = e[6],
                    i = e[11],
                    l = e[15],
                    c = e[18],
                    u = e[19],
                    h = i(e, r, t),
                    f = a.get(t);
                if (f && h.d.size > 0) {
                    for (let [a, u] of h.d)
                        if (!f.d.has(a)) {
                            let h = i(e, r, a);
                            c(e, r, a).t.add(t), f.d.add(a), u !== h.n && (o.add(a), l(e, r, a), null == (n = s.c) || n.call(s, a))
                        } for (let n of f.d)
                        if (!h.d.has(n)) {
                            f.d.delete(n);
                            let a = u(e, r, n);
                            null == a || a.t.delete(t)
                        }
                }
            },
            A = (e, r, t) => {
                var a;
                let o = e[1],
                    s = e[4],
                    i = e[5],
                    l = e[6],
                    c = e[10],
                    u = e[11],
                    h = e[12],
                    f = e[13],
                    p = e[14],
                    d = e[16],
                    g = e[18],
                    m = u(e, r, t),
                    b = o.get(t);
                if (!b) {
                    for (let n of (p(e, r, t), m.d.keys())) g(e, r, n).t.add(t);
                    b = {
                        l: new Set,
                        d: new Set(m.d.keys()),
                        t: new Set
                    }, o.set(t, b), n(t) && t.onMount && s.add(() => {
                        if (o.get(t) !== b) return;
                        let n = !0;
                        try {
                            let a = c(e, r, t, (...a) => {
                                try {
                                    return d(e, r, t, a)
                                } finally {
                                    n || (f(e, r), h(e, r))
                                }
                            });
                            if (a) {
                                let e = () => {
                                    n = !0;
                                    try {
                                        a()
                                    } finally {
                                        n = !1
                                    }
                                };
                                o.get(t) === b ? b.u = e : i.add(e)
                            }
                        } finally {
                            n = !1
                        }
                    }), null == (a = l.m) || a.call(l, t)
                }
                return b
            },
            D = (e, r, t) => {
                var n, a;
                let o = e[1],
                    s = e[5],
                    i = e[6],
                    l = e[11],
                    c = e[19],
                    u = l(e, r, t),
                    h = o.get(t);
                if (!h || h.l.size) return h;
                let f = !1;
                for (let e of h.t)
                    if (null == (n = o.get(e)) ? void 0 : n.d.has(t)) {
                        f = !0;
                        break
                    } if (!f) {
                    for (let n of (h.u && s.add(h.u), h = void 0, o.delete(t), u.d.keys())) {
                        let a = c(e, r, n);
                        null == a || a.t.delete(t)
                    }
                    null == (a = i.u) || a.call(i, t);
                    return
                }
                return h
            },
            k = (e, r, t, n) => {
                let a = e[11],
                    o = e[27],
                    l = a(e, r, t),
                    c = "v" in l,
                    u = l.v;
                if (s(n))
                    for (let o of l.d.keys()) i(t, n, a(e, r, o));
                l.v = n, delete l.e, c && Object.is(u, l.v) || (++l.n, s(u) && o(e, r, u))
            },
            E = (e, r, t) => o((0, e[14])(e, r, t)),
            x = (e, r, t, ...n) => {
                let a = e[3],
                    o = e[12],
                    s = e[13],
                    i = e[16],
                    l = a.size;
                try {
                    return i(e, r, t, n)
                } finally {
                    a.size !== l && (s(e, r), o(e, r))
                }
            },
            C = (e, r, t, n) => {
                let a = e[12],
                    o = e[13],
                    s = e[18],
                    i = e[19],
                    l = s(e, r, t).l;
                return l.add(n), o(e, r), a(e, r), () => {
                    l.delete(n), i(e, r, t), o(e, r), a(e, r)
                }
            },
            S = (e, r, t, n) => {
                let a = e[25],
                    o = a.get(t);
                if (!o) {
                    o = new Set, a.set(t, o);
                    let e = () => a.delete(t);
                    t.then(e, e)
                }
                o.add(n)
            },
            q = (e, r, t) => {
                let n = e[25].get(t);
                null == n || n.forEach(e => e())
            },
            L = new WeakMap;
        t.d(r, {}, {
            a: function(...e) {
                let r = {
                        get: e => n(t, r, e),
                        set: (e, ...n) => a(t, r, e, ...n),
                        sub: (e, n) => o(t, r, e, n)
                    },
                    t = [new WeakMap, new WeakMap, new WeakMap, new Set, new Set, new Set, {}, u, h, f, p, d, g, m, b, y, v, w, A, D, k, E, x, C, void 0, new WeakMap, S, q, [0]].map((r, t) => e[t] || r);
                L.set(r, Object.freeze(t));
                let n = t[21],
                    a = t[22],
                    o = t[23];
                return r
            },
            b: function(e) {
                let r = L.get(e),
                    t = r[24];
                return t ? t(r, e) : r
            },
            c: function(e) {
                let r, t;
                return e.i || (e.i = c()), e.r || (e.r = c()), e.c || (e.c = c()), e.m || (e.m = c()), e.u || (e.u = c()), e.f || (r = new Set, (t = () => r.forEach(e => e())).add = e => (r.add(e), () => r.delete(e)), e.f = t), e
            },
            d: o
        })
    }),
    WWxl: (function(e, r, t) {
        var n = t("ouEa");
        let a = (e, r, t) => (r.has(t) ? r : r.set(t, e())).get(t),
            o = new WeakMap;
        ! function(e = () => {
            try {
                return window.localStorage
            } catch (e) {
                return
            }
        }) {
            var r;
            let t, n;
            try {
                t = null == (r = e()) ? void 0 : r.subscribe
            } catch (e) {}!t && "u" > typeof window && "function" == typeof window.addEventListener && window.Storage && (t = (r, t) => {
                if (!(e() instanceof window.Storage)) return () => {};
                let n = n => {
                    n.storageArea === e() && n.key === r && t(n.newValue)
                };
                return window.addEventListener("storage", n), () => {
                    window.removeEventListener("storage", n)
                }
            }), t && (n = t, (e, r, t) => n(e, e => {
                let n;
                try {
                    n = JSON.parse(e || "", void 0)
                } catch (e) {
                    n = t
                }
                r(n)
            }))
        }(), t.d(r, {}, {
            a: function(e) {
                let r = (0, n.a)(void 0);
                return delete r.init, Object.defineProperty(r, "init", {
                    get: () => e()
                }), r
            },
            b: function(e, r, t = Object.is) {
                var s;
                let i, l;
                return s = () => {
                    let a = Symbol(),
                        o = (0, n.a)(n => {
                            let s = n(o);
                            return (([e, n]) => {
                                if (n === a) return r(e);
                                let o = r(e, n);
                                return t(n, o) ? n : o
                            })([n(e), s])
                        });
                    return o.init = a, o
                }, i = a(() => new WeakMap, o, e), l = a(() => new WeakMap, i, r), a(s, l, t)
            }
        })
    }),
    HVNn: (function(e, r, t) {
        class n extends Error {}
        n.prototype.name = "InvalidTokenError", t.d(r, {}, {
            a: function(e, r) {
                let t;
                if ("string" != typeof e) throw new n("Invalid token specified: must be a string");
                r || (r = {});
                let a = +(!0 !== r.header),
                    o = e.split(".")[a];
                if ("string" != typeof o) throw new n(`Invalid token specified: missing part #${a+1}`);
                try {
                    t = function(e) {
                        let r = e.replace(/-/g, "+").replace(/_/g, "/");
                        switch (r.length % 4) {
                            case 0:
                                break;
                            case 2:
                                r += "==";
                                break;
                            case 3:
                                r += "=";
                                break;
                            default:
                                throw Error("base64 string is not of the correct length")
                        }
                        try {
                            var t;
                            return t = r, decodeURIComponent(atob(t).replace(/(.)/g, (e, r) => {
                                let t = r.charCodeAt(0).toString(16).toUpperCase();
                                return t.length < 2 && (t = "0" + t), "%" + t
                            }))
                        } catch (e) {
                            return atob(r)
                        }
                    }(o)
                } catch (e) {
                    throw new n(`Invalid token specified: invalid base64 for part #${a+1} (${e.message})`)
                }
                try {
                    return JSON.parse(t)
                } catch (e) {
                    throw new n(`Invalid token specified: invalid json for part #${a+1} (${e.message})`)
                }
            }
        })
    }),
    emWR: (function(e, r, t) {
        let n = Array.from,
            a = Array.isArray;
        t.d(r, {}, {
            a: (e, r) => {
                for (let t = 0; t < r.length; t++) e.push(r[t])
            },
            b: (e, r) => {
                for (let t = 0; t < e.length; t++)
                    if (!r(e[t], t, e)) return !1;
                return !0
            },
            c: n,
            d: a,
            e: e => e[e.length - 1],
            f: (e, r) => {
                for (let t = 0; t < e.length; t++)
                    if (r(e[t], t, e)) return !0;
                return !1
            },
            g: (e, r) => {
                let t = Array(e);
                for (let n = 0; n < e; n++) t[n] = r(n, t);
                return t
            }
        })
    }),
    uhQa: (function(e, r, t) {
        t.d(r, {}, {
            a: 0x20000000,
            b: 0x7fffffff,
            c: 0xffffffff
        })
    }),
    Ouwk: (function(e, r, t) {
        var n = t("ytld"),
            a = t("vZiz"),
            o = t("XyvO");
        let s = a.b ? e => {
            let r = "";
            for (let t = 0; t < e.byteLength; t++) r += n.c(e[t]);
            return btoa(r)
        } : e => Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64");
        a.b, t.d(r, {}, {
            a: e => {
                let r = new Uint8Array(e.byteLength);
                return r.set(e), r
            },
            b: e => o.f(r => o.h(r, e)),
            c: s
        })
    }),
    ZqMF: (function(e, r, t) {
        var n = t("qy7F"),
            a = t("ed48"),
            o = t("ytld"),
            s = t("Lbz6");
        let i = s.a("Unexpected end of array"),
            l = s.a("Integer out of Range");
        class c {
            constructor(e) {
                this.arr = e, this.pos = 0
            }
        }
        let u = e => e.pos !== e.arr.length,
            h = e => {
                var r;
                let t;
                return r = p(e), t = new Uint8Array(e.arr.buffer, e.pos + e.arr.byteOffset, r), e.pos += r, t
            },
            f = e => e.arr[e.pos++],
            p = e => {
                let r = 0,
                    t = 1,
                    n = e.arr.length;
                for (; e.pos < n;) {
                    let n = e.arr[e.pos++];
                    if (r += (127 & n) * t, t *= 128, n < 128) return r;
                    if (r > a.a) throw l
                }
                throw i
            },
            d = e => {
                let r = e.arr[e.pos++],
                    t = 63 & r,
                    n = 64,
                    o = (64 & r) > 0 ? -1 : 1;
                if ((128 & r) == 0) return o * t;
                let s = e.arr.length;
                for (; e.pos < s;) {
                    if (t += (127 & (r = e.arr[e.pos++])) * n, n *= 128, r < 128) return o * t;
                    if (t > a.a) throw l
                }
                throw i
            },
            g = o.e ? e => o.e.decode(h(e)) : e => {
                let r = p(e);
                if (0 === r) return "";
                {
                    let t = String.fromCodePoint(f(e));
                    if (--r < 100)
                        for (; r--;) t += String.fromCodePoint(f(e));
                    else
                        for (; r > 0;) {
                            let n = r < 1e4 ? r : 1e4,
                                a = e.arr.subarray(e.pos, e.pos + n);
                            e.pos += n, t += String.fromCodePoint.apply(null, a), r -= n
                        }
                    return decodeURIComponent(escape(t))
                }
            },
            m = (e, r) => {
                let t = new DataView(e.arr.buffer, e.arr.byteOffset + e.pos, r);
                return e.pos += r, t
            },
            b = [e => void 0, e => null, d, e => m(e, 4).getFloat32(0, !1), e => m(e, 8).getFloat64(0, !1), e => m(e, 8).getBigInt64(0, !1), e => !1, e => !0, g, e => {
                let r = p(e),
                    t = {};
                for (let n = 0; n < r; n++) t[g(e)] = y(e);
                return t
            }, e => {
                let r = p(e),
                    t = [];
                for (let n = 0; n < r; n++) t.push(y(e));
                return t
            }, h],
            y = e => b[127 - f(e)](e);
        class v extends c {
            constructor(e) {
                super(e), this.s = 0, this.count = 0
            }
            read() {
                if (0 === this.count) {
                    this.s = d(this);
                    let e = n.c(this.s);
                    this.count = 1, e && (this.s = -this.s, this.count = p(this) + 2)
                }
                return this.count--, this.s
            }
        }
        t.d(r, {}, {
            a: class extends c {
                constructor(e) {
                    super(e), this.s = 0, this.count = 0, this.diff = 0
                }
                read() {
                    if (0 === this.count) {
                        let e = d(this);
                        this.diff = n.b(e / 2), this.count = 1, 1 & e && (this.count = p(this) + 2)
                    }
                    return this.s += this.diff, this.count--, this.s
                }
            },
            b: class extends c {
                constructor(e, r) {
                    super(e), this.reader = r, this.s = null, this.count = 0
                }
                read() {
                    return 0 === this.count && (this.s = this.reader(this), u(this) ? this.count = p(this) + 1 : this.count = -1), this.count--, this.s
                }
            },
            c: class {
                constructor(e) {
                    this.decoder = new v(e), this.str = g(this.decoder), this.spos = 0
                }
                read() {
                    let e = this.spos + this.decoder.read(),
                        r = this.str.slice(this.spos, e);
                    return this.spos = e, r
                }
            },
            d: v,
            e: e => new c(e),
            f: u,
            g: y,
            h: f,
            i: d,
            j: g,
            k: p,
            l: h
        })
    }),
    XyvO: (function(e, r, t) {
        var n = t("qy7F"),
            a = t("ed48"),
            o = t("uhQa"),
            s = t("ytld"),
            i = t("emWR");
        class l {
            constructor() {
                this.cpos = 0, this.cbuf = new Uint8Array(100), this.bufs = []
            }
        }
        let c = () => new l,
            u = e => {
                let r = new Uint8Array((e => {
                        let r = e.cpos;
                        for (let t = 0; t < e.bufs.length; t++) r += e.bufs[t].length;
                        return r
                    })(e)),
                    t = 0;
                for (let n = 0; n < e.bufs.length; n++) {
                    let a = e.bufs[n];
                    r.set(a, t), t += a.length
                }
                return r.set(new Uint8Array(e.cbuf.buffer, 0, e.cpos), t), r
            },
            h = (e, r) => {
                let t = e.cbuf.length;
                e.cpos === t && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(2 * t), e.cpos = 0), e.cbuf[e.cpos++] = r
            },
            f = (e, r) => {
                for (; r > 127;) h(e, 128 | 127 & r), r = n.b(r / 128);
                h(e, 127 & r)
            },
            p = (e, r) => {
                let t = n.c(r);
                for (t && (r = -r), h(e, 128 * (r > 63) | 64 * !!t | 63 & r), r = n.b(r / 64); r > 0;) h(e, 128 * (r > 127) | 127 & r), r = n.b(r / 128)
            },
            d = new Uint8Array(3e4),
            g = d.length / 3,
            m = s.f && s.f.encodeInto ? (e, r) => {
                if (r.length < g) {
                    let t = s.f.encodeInto(r, d).written || 0;
                    f(e, t);
                    for (let r = 0; r < t; r++) h(e, d[r])
                } else y(e, s.a(r))
            } : (e, r) => {
                let t = unescape(encodeURIComponent(r)),
                    n = t.length;
                f(e, n);
                for (let r = 0; r < n; r++) h(e, t.codePointAt(r))
            },
            b = (e, r) => {
                let t = e.cbuf.length,
                    a = e.cpos,
                    o = n.e(t - a, r.length),
                    s = r.length - o;
                e.cbuf.set(r.subarray(0, o), a), e.cpos += o, s > 0 && (e.bufs.push(e.cbuf), e.cbuf = new Uint8Array(n.d(2 * t, s)), e.cbuf.set(r.subarray(o)), e.cpos = s)
            },
            y = (e, r) => {
                f(e, r.byteLength), b(e, r)
            },
            v = (e, r) => {
                let t;
                (t = e.cbuf.length) - e.cpos < r && (e.bufs.push(new Uint8Array(e.cbuf.buffer, 0, e.cpos)), e.cbuf = new Uint8Array(2 * n.d(t, r)), e.cpos = 0);
                let a = new DataView(e.cbuf.buffer, e.cpos, r);
                return e.cpos += r, a
            },
            w = new DataView(new ArrayBuffer(4)),
            A = (e, r) => {
                switch (typeof r) {
                    case "string":
                        h(e, 119), m(e, r);
                        break;
                    case "number":
                        if (a.c(r) && n.a(r) <= o.b) h(e, 125), p(e, r);
                        else if (w.setFloat32(0, r), w.getFloat32(0) === r) h(e, 124), v(e, 4).setFloat32(0, r, !1);
                        else h(e, 123), v(e, 8).setFloat64(0, r, !1);
                        break;
                    case "bigint":
                        h(e, 122), v(e, 8).setBigInt64(0, r, !1);
                        break;
                    case "object":
                        if (null === r) h(e, 126);
                        else if (i.d(r)) {
                            h(e, 117), f(e, r.length);
                            for (let t = 0; t < r.length; t++) A(e, r[t])
                        } else if (r instanceof Uint8Array) h(e, 116), y(e, r);
                        else {
                            h(e, 118);
                            let t = Object.keys(r);
                            f(e, t.length);
                            for (let n = 0; n < t.length; n++) {
                                let a = t[n];
                                m(e, a), A(e, r[a])
                            }
                        }
                        break;
                    case "boolean":
                        h(e, r ? 120 : 121);
                        break;
                    default:
                        h(e, 127)
                }
            },
            D = e => {
                e.count > 0 && (p(e.encoder, 1 === e.count ? e.s : -e.s), e.count > 1 && f(e.encoder, e.count - 2))
            };
        class k {
            constructor() {
                this.encoder = new l, this.s = 0, this.count = 0
            }
            write(e) {
                this.s === e ? this.count++ : (D(this), this.count = 1, this.s = e)
            }
            toUint8Array() {
                return D(this), u(this.encoder)
            }
        }
        let E = e => {
            if (e.count > 0) {
                let r = 2 * e.diff + +(1 !== e.count);
                p(e.encoder, r), e.count > 1 && f(e.encoder, e.count - 2)
            }
        };
        t.d(r, {}, {
            a: class {
                constructor() {
                    this.encoder = new l, this.s = 0, this.count = 0, this.diff = 0
                }
                write(e) {
                    this.diff === e - this.s ? (this.s = e, this.count++) : (E(this), this.count = 1, this.diff = e - this.s, this.s = e)
                }
                toUint8Array() {
                    return E(this), u(this.encoder)
                }
            },
            b: class extends l {
                constructor(e) {
                    super(), this.w = e, this.s = null, this.count = 0
                }
                write(e) {
                    this.s === e ? this.count++ : (this.count > 0 && f(this, this.count - 1), this.count = 1, this.w(this, e), this.s = e)
                }
            },
            c: class {
                constructor() {
                    this.sarr = [], this.s = "", this.lensE = new k
                }
                write(e) {
                    this.s += e, this.s.length > 19 && (this.sarr.push(this.s), this.s = ""), this.lensE.write(e.length)
                }
                toUint8Array() {
                    let e = new l;
                    return this.sarr.push(this.s), this.s = "", m(e, this.sarr.join("")), b(e, this.lensE.toUint8Array()), u(e)
                }
            },
            d: k,
            e: c,
            f: e => {
                let r = c();
                return e(r), u(r)
            },
            g: u,
            h: A,
            i: (e, r) => b(e, u(r)),
            j: h,
            k: b,
            l: p,
            m: m,
            n: f,
            o: y
        })
    }),
    vZiz: (function(e, r, t) {
        let n;
        t.d(r, {
            a: () => d,
            b: () => h,
            c: () => m,
            d: () => b
        });
        var a = t("MjY3"),
            o = t("ytld");
        let s = e => void 0 === e ? null : e,
            i = new class {
                constructor() {
                    this.map = new Map
                }
                setItem(e, r) {
                    this.map.set(e, r)
                }
                getItem(e) {
                    return this.map.get(e)
                }
            };
        try {
            "u" > typeof localStorage && localStorage && (i = localStorage)
        } catch (e) {}
        let l = i;
        var c = t("pI16");
        let u = "u" > typeof process && process.release && /node|io\.js/.test(process.release.name) && "[object process]" === Object.prototype.toString.call("u" > typeof process ? process : 0),
            h = "u" > typeof window && "u" > typeof document && !u;
        "u" > typeof navigator && /Mac/.test(navigator.platform);
        let f = [],
            p = e => (() => {
                if (void 0 === n)
                    if (u) {
                        n = a.c();
                        let e = process.argv,
                            r = null;
                        for (let t = 0; t < e.length; t++) {
                            let a = e[t];
                            "-" === a[0] ? (null !== r && n.set(r, ""), r = a) : null !== r ? (n.set(r, a), r = null) : f.push(a)
                        }
                        null !== r && n.set(r, "")
                    } else "object" == typeof location ? (n = a.c(), (location.search || "?").slice(1).split("&").forEach(e => {
                        if (0 !== e.length) {
                            let [r, t] = e.split("=");
                            n.set(`--${o.b(r,"-")}`, t), n.set(`-${o.b(r,"-")}`, t)
                        }
                    })) : n = a.c();
                return n
            })().has(e),
            d = e => u ? s(process.env[e.toUpperCase().replaceAll("-", "_")]) : s(l.getItem(e)),
            g = e => p("--" + e) || null !== d(e),
            m = g("production"),
            b = u && c.d(process.env.FORCE_COLOR, ["true", "1", "2"]) || !p("--no-colors") && !g("no-color") && (!u || process.stdout.isTTY) && (!u || p("--color") || null !== d("COLORTERM") || (d("TERM") || "").includes("color"))
    }),
    Lbz6: (function(e, r, t) {
        let n = e => Error(e);
        t.d(r, {}, {
            a: n,
            b: () => {
                throw n("Method unimplemented")
            },
            c: () => {
                throw n("Unexpected case")
            }
        })
    }),
    pI16: (function(e, r, t) {
        var n = t("emWR"),
            a = t("yNp9"),
            o = t("NWOJ");
        let s = (e, r, t = 0) => {
                try {
                    for (; t < e.length; t++) e[t](...r)
                } finally {
                    t < e.length && s(e, r, t + 1)
                }
            },
            i = (e, r) => {
                if (e === r) return !0;
                if (null == e || null == r || e.constructor !== r.constructor && (e.constructor || Object) !== (r.constructor || Object)) return !1;
                if (null != e[o.a]) return e[o.a](r);
                switch (e.constructor) {
                    case ArrayBuffer:
                        e = new Uint8Array(e), r = new Uint8Array(r);
                    case Uint8Array:
                        if (e.byteLength !== r.byteLength) return !1;
                        for (let t = 0; t < e.length; t++)
                            if (e[t] !== r[t]) return !1;
                        break;
                    case Set:
                        if (e.size !== r.size) return !1;
                        for (let t of e)
                            if (!r.has(t)) return !1;
                        break;
                    case Map:
                        if (e.size !== r.size) return !1;
                        for (let t of e.keys())
                            if (!r.has(t) || !i(e.get(t), r.get(t))) return !1;
                        break;
                    case void 0:
                    case Object:
                        if (a.j(e) !== a.j(r)) return !1;
                        for (let t in e)
                            if (!a.f(e, t) || !i(e[t], r[t])) return !1;
                        break;
                    case Array:
                        if (e.length !== r.length) return !1;
                        for (let t = 0; t < e.length; t++)
                            if (!i(e[t], r[t])) return !1;
                        break;
                    default:
                        return !1
                }
                return !0
            };
        n.d, t.d(r, {}, {
            a: s,
            b: i,
            c: e => e,
            d: (e, r) => r.includes(e)
        })
    }),
    Ctbn: (function(e, r, t) {
        let n = e => ({
            [Symbol.iterator]() {
                return this
            },
            next: e
        });
        t.d(r, {}, {
            a: (e, r) => n(() => {
                let t;
                do t = e.next(); while (!t.done && !r(t.value)) return t
            }),
            b: (e, r) => n(() => {
                let {
                    done: t,
                    value: n
                } = e.next();
                return {
                    done: t,
                    value: t ? void 0 : r(n)
                }
            })
        })
    }),
    ts78: (function(e, r, t) {
        t.d(r, {
            a: () => i,
            b: () => o,
            c: () => c,
            d: () => l,
            e: () => f,
            f: () => h,
            g: () => u,
            h: () => s,
            i: () => p,
            j: () => d
        });
        let n = Symbol;
        var a = t("vSAy");
        let o = n(),
            s = n(),
            i = n(),
            l = n(),
            c = n(),
            u = n(),
            h = n(),
            f = n(),
            p = n(),
            d = e => {
                1 === e.length && e[0]?.constructor === Function && (e = e[0]());
                let r = [],
                    t = [],
                    n = 0;
                for (; n < e.length; n++) {
                    let t = e[n];
                    if (void 0 === t) break;
                    if (t.constructor === String || t.constructor === Number) r.push(t);
                    else if (t.constructor === Object) break
                }
                for (n > 0 && t.push(r.join("")); n < e.length; n++) {
                    let r = e[n];
                    r instanceof Symbol || t.push(r)
                }
                return t
            };
        a.a()
    }),
    o0Ei: (function(e, r, t) {
        let n, a, o;
        t.d(r, {
            a: () => eI,
            b: () => eN
        });
        var s = t("vZiz"),
            i = t("g4hI");
        class l {
            constructor(e, r) {
                this.left = e, this.right = r
            }
        }
        let c = (e, r) => new l(e, r);
        var u = t("MjY3"),
            h = t("yNp9"),
            f = t("emWR"),
            p = t("Lbz6"),
            d = t("NWOJ"),
            g = t("pI16"),
            m = t("ytld"),
            b = t("qy7F");
        let y = e => e.next() >= .5,
            v = (e, r, t) => b.b(e.next() * (t + 1 - r) + r),
            w = (e, r, t) => b.b(e.next() * (t + 1 - r) + r),
            A = e => (0, m.c)(w(e, 97, 122)),
            D = (e, r) => r[w(e, 0, r.length - 1)];
        var k = t("ed48");
        let E = Symbol("0schema");
        class x {
            constructor() {
                this._rerrs = []
            }
            extend(e, r, t, n = null) {
                this._rerrs.push({
                    path: e,
                    expected: r,
                    has: t,
                    message: n
                })
            }
            toString() {
                let e = [];
                for (let r = this._rerrs.length - 1; r > 0; r--) {
                    let t = this._rerrs[r];
                    e.push(m.d(" ", (this._rerrs.length - r) * 2) + `${null!=t.path?`[${t.path}] `:""}${t.has} doesn't match ${t.expected}. ${t.message}`)
                }
                return e.join("\n")
            }
        }
        let C = (e, r) => e === r || null != e && null != r && e.constructor === r.constructor && (e[d.a] ? d.b(e, r) : f.d(e) ? f.b(e, e => f.f(r, r => C(e, r))) : !!h.h(e) && h.d(e, (e, t) => C(e, r[t])));
        class S {
            static _dilutes = !1;
            extends(e) {
                let [r, t] = [this.shape, e.shape];
                return this.constructor._dilutes && ([t, r] = [r, t]), C(r, t)
            }
            equals(e) {
                return this.constructor === e.constructor && g.b(this.shape, e.shape)
            } [E]() {
                return !0
            } [d.a](e) {
                return this.equals(e)
            }
            validate(e) {
                return this.check(e)
            }
            check(e, r) {
                p.b()
            }
            get nullable() {
                return en(this, ey)
            }
            get optional() {
                return new R(this)
            }
            cast(e) {
                return eD(e, this), e
            }
            expect(e) {
                return eD(e, this), e
            }
        }
        class q extends S {
            constructor(e, r) {
                super(), this.shape = e, this._c = r
            }
            check(e, r) {
                let t = e?.constructor === this.shape && (null == this._c || this._c(e));
                return t || r?.extend(null, this.shape.name, e?.constructor.name, e?.constructor !== this.shape ? "Constructor match failed" : "Check failed"), t
            }
        }
        let L = (e, r = null) => new q(e, r);
        L(q);
        class T extends S {
            constructor(e) {
                super(), this.shape = e
            }
            check(e, r) {
                let t = this.shape(e);
                return t || r?.extend(null, "custom prop", e?.constructor.name, "failed to check custom prop"), t
            }
        }
        let _ = e => new T(e);
        L(T);
        class B extends S {
            constructor(e) {
                super(), this.shape = e
            }
            check(e, r) {
                let t = this.shape.some(r => r === e);
                return t || r?.extend(null, this.shape.join(" | "), e.toString()), t
            }
        }
        let F = (...e) => new B(e),
            I = L(B),
            N = RegExp.escape || (e => e.replace(/[().|&,$^[\]]/g, e => "\\" + e)),
            M = e => ep.check(e) ? [N(e)] : I.check(e) ? e.shape.map(e => e + "") : ef.check(e) ? ["[+-]?\\d+.?\\d*"] : ed.check(e) ? [".*"] : ea.check(e) ? e.shape.map(M).flat(1) : void p.c();
        L(class extends S {
            constructor(e) {
                super(), this.shape = e, this._r = RegExp("^" + e.map(M).map(e => `(${e.join("|")})`).join("") + "$")
            }
            check(e, r) {
                let t = null != this._r.exec(e);
                return t || r?.extend(null, this._r.toString(), e.toString(), "String doesn't match string template."), t
            }
        });
        let O = Symbol("optional");
        class R extends S {
            constructor(e) {
                super(), this.shape = e
            }
            check(e, r) {
                let t = void 0 === e || this.shape.check(e);
                return t || r?.extend(null, "undefined (optional)", "()"), t
            }
            get[O]() {
                return !0
            }
        }
        let U = L(R);
        class V extends S {
            check(e, r) {
                return r?.extend(null, "never", typeof e), !1
            }
        }
        new V, L(V);
        class j extends S {
            constructor(e, r = !1) {
                super(), this.shape = e, this._isPartial = r
            }
            static _dilutes = !0;
            get partial() {
                return new j(this.shape, !0)
            }
            check(e, r) {
                return null == e ? (r?.extend(null, "object", "null"), !1) : h.d(this.shape, (t, n) => {
                    let a = this._isPartial && !h.f(e, n) || t.check(e[n], r);
                    return a || r?.extend(n.toString(), t.toString(), typeof e[n], "Object property does not match"), a
                })
            }
        }
        let z = L(j),
            P = _(e => null != e && (e.constructor === Object || null == e.constructor));
        class H extends S {
            constructor(e, r) {
                super(), this.shape = {
                    keys: e,
                    values: r
                }
            }
            check(e, r) {
                return null != e && h.d(e, (t, n) => {
                    let a = this.shape.keys.check(n, r);
                    return a || r?.extend(n + "", "Record", typeof e, a ? "Key doesn't match schema" : "Value doesn't match value"), a && this.shape.values.check(t, r)
                })
            }
        }
        let G = (e, r) => new H(e, r),
            $ = L(H);
        class J extends S {
            constructor(e) {
                super(), this.shape = e
            }
            check(e, r) {
                return null != e && h.d(this.shape, (t, n) => {
                    let a = t.check(e[n], r);
                    return a || r?.extend(n.toString(), "Tuple", typeof t), a
                })
            }
        }
        L(J);
        class W extends S {
            constructor(e) {
                super(), this.shape = 1 === e.length ? e[0] : new et(e)
            }
            check(e, r) {
                let t = f.d(e) && f.b(e, e => this.shape.check(e));
                return t || r?.extend(null, "Array", ""), t
            }
        }
        let Z = (...e) => new W(e),
            Y = L(W),
            K = _(e => f.d(e));
        class Q extends S {
            constructor(e, r) {
                super(), this.shape = e, this._c = r
            }
            check(e, r) {
                let t = e instanceof this.shape && (null == this._c || this._c(e));
                return t || r?.extend(null, this.shape.name, e?.constructor.name), t
            }
        }
        L(Q);
        let X = ((e, r = null) => new Q(e, r))(S),
            ee = L(class extends S {
                constructor(e) {
                    super(), this.len = e.length - 1, this.args = ((...e) => new J(e))(...e.slice(-1)), this.res = e[this.len]
                }
                check(e, r) {
                    let t = e.constructor === Function && e.length <= this.len;
                    return t || r?.extend(null, "function", typeof e), t
                }
            }),
            er = _(e => "function" == typeof e);
        L(class extends S {
            constructor(e) {
                super(), this.shape = e
            }
            check(e, r) {
                let t = f.b(this.shape, t => t.check(e, r));
                return t || r?.extend(null, "Intersectinon", typeof e), t
            }
        }, e => e.shape.length > 0);
        class et extends S {
            static _dilutes = !0;
            constructor(e) {
                super(), this.shape = e
            }
            check(e, r) {
                let t = f.f(this.shape, t => t.check(e, r));
                return r?.extend(null, "Union", typeof e), t
            }
        }
        let en = (...e) => e.findIndex(e => ea.check(e)) >= 0 ? en(...e.map(e => eA(e)).map(e => ea.check(e) ? e.shape : [e]).flat(1)) : 1 === e.length ? e[0] : new et(e),
            ea = L(et),
            eo = () => !0,
            es = _(eo),
            ei = L(T, e => e.shape === eo),
            el = _(e => "bigint" == typeof e),
            ec = _(e => e === el),
            eu = _(e => "symbol" == typeof e);
        _(e => e === eu);
        let eh = _(e => "number" == typeof e),
            ef = _(e => e === eh),
            ep = _(e => "string" == typeof e),
            ed = _(e => e === ep),
            eg = _(e => "boolean" == typeof e),
            em = _(e => e === eg),
            eb = F(void 0);
        L(B, e => 1 === e.shape.length && void 0 === e.shape[0]), F(void 0);
        let ey = F(null),
            ev = L(B, e => 1 === e.shape.length && null === e.shape[0]);
        L(Uint8Array), L(q, e => e.shape === Uint8Array);
        let ew = en(eh, ep, ey, eb, el, eg, eu);
        n = Z(es), a = G(ep, es), o = en(eh, ep, ey, eg, n, a), n.shape = o, a.shape.values = o;
        let eA = e => {
                if (X.check(e)) return e;
                if (P.check(e)) {
                    let r = {};
                    for (let t in e) r[t] = eA(e[t]);
                    return new j(r)
                }
                if (K.check(e)) return en(...e.map(eA));
                if (ew.check(e)) return F(e);
                if (er.check(e)) return L(e);
                p.c()
            },
            eD = s.c ? () => {} : (e, r) => {
                let t = new x;
                if (!r.check(e, t)) throw p.a(`Expected value to be of type ${r.constructor.name}.
${t.toString()}`)
            },
            ek = new class e {
                constructor(e) {
                    this.patterns = [], this.$state = e
                }
                if (e, r) {
                    return this.patterns.push({
                        if: eA(e),
                        h: r
                    }), this
                } else(e) {
                    return this.if(es, e)
                }
                done() {
                    return (e, r) => {
                        for (let t = 0; t < this.patterns.length; t++) {
                            let n = this.patterns[t];
                            if (n.if.check(e)) return n.h(e, r)
                        }
                        throw p.a("Unhandled pattern")
                    }
                }
            }(es).if(ef, (e, r) => v(r, k.b, k.a)).if(ed, (e, r) => ((e, r = 0, t = 20) => {
                let n = w(e, r, t),
                    a = "";
                for (let r = 0; r < n; r++) a += A(e);
                return a
            })(r)).if(em, (e, r) => y(r)).if(ec, (e, r) => BigInt(v(r, k.b, k.a))).if(ea, (e, r) => eE(r, D(r, e.shape))).if(z, (e, r) => {
                let t = {};
                for (let n in e.shape) {
                    let a = e.shape[n];
                    if (U.check(a)) {
                        if (y(r)) continue;
                        a = a.shape
                    }
                    t[n] = ek(a, r)
                }
                return t
            }).if(Y, (e, r) => {
                let t = [],
                    n = w(r, 0, 42);
                for (let a = 0; a < n; a++) t.push(eE(r, e.shape));
                return t
            }).if(I, (e, r) => D(r, e.shape)).if(ev, (e, r) => null).if(ee, (e, r) => {
                let t = eE(r, e.res);
                return () => t
            }).if(ei, (e, r) => eE(r, D(r, [eh, ep, ey, eb, el, eg, Z(eh), G(en("a", "b", "c"), eh)]))).if($, (e, r) => {
                let t = {},
                    n = v(r, 0, 3);
                for (let a = 0; a < n; a++) {
                    let n = eE(r, e.shape.keys),
                        a = eE(r, e.shape.values);
                    t[n] = a
                }
                return t
            }).done(),
            eE = (e, r) => ek(eA(r), e),
            ex = "u" > typeof document ? document : {};
        _(e => e.nodeType === eT), "u" > typeof DOMParser && new DOMParser, _(e => e.nodeType === eS), _(e => e.nodeType === eq);
        let eC = e => u.d(e, (e, r) => `${r}:${e};`).join(""),
            eS = ex.ELEMENT_NODE,
            eq = ex.TEXT_NODE;
        ex.CDATA_SECTION_NODE, ex.COMMENT_NODE;
        let eL = ex.DOCUMENT_NODE;
        ex.DOCUMENT_TYPE_NODE;
        let eT = ex.DOCUMENT_FRAGMENT_NODE;
        _(e => e.nodeType === eL);
        var e_ = t("ts78");
        let eB = {
                [e_.b]: c("font-weight", "bold"),
                [e_.h]: c("font-weight", "normal"),
                [e_.a]: c("color", "blue"),
                [e_.c]: c("color", "green"),
                [e_.d]: c("color", "grey"),
                [e_.g]: c("color", "red"),
                [e_.f]: c("color", "purple"),
                [e_.e]: c("color", "orange"),
                [e_.i]: c("color", "black")
            },
            eF = s.d ? e => {
                1 === e.length && e[0]?.constructor === Function && (e = e[0]());
                let r = [],
                    t = [],
                    n = u.c(),
                    a = [],
                    o = 0;
                for (; o < e.length; o++) {
                    let a = e[o],
                        s = eB[a];
                    if (void 0 !== s) n.set(s.left, s.right);
                    else {
                        if (void 0 === a) break;
                        if (a.constructor === String || a.constructor === Number) {
                            let e = eC(n);
                            o > 0 || e.length > 0 ? (r.push("%c" + a), t.push(e)) : r.push(a)
                        } else break
                    }
                }
                for (o > 0 && (a = t).unshift(r.join("")); o < e.length; o++) {
                    let r = e[o];
                    r instanceof Symbol || a.push(r)
                }
                return a
            } : e_.j,
            eI = (...e) => {
                console.log(...eF(e)), eM.forEach(r => r.print(e))
            },
            eN = (...e) => {
                console.warn(...eF(e)), e.unshift(e_.e), eM.forEach(r => r.print(e))
            },
            eM = i.a()
    }),
    MjY3: (function(e, r, t) {
        let n = () => new Map;
        t.d(r, {}, {
            a: (e, r) => {
                for (let [t, n] of e)
                    if (r(n, t)) return !0;
                return !1
            },
            b: e => {
                let r = n();
                return e.forEach((e, t) => {
                    r.set(t, e)
                }), r
            },
            c: n,
            d: (e, r) => {
                let t = [];
                for (let [n, a] of e) t.push(r(a, n));
                return t
            },
            e: (e, r, t) => {
                let n = e.get(r);
                return void 0 === n && e.set(r, n = t()), n
            }
        })
    }),
    qy7F: (function(e, r, t) {
        let n = Math.floor,
            a = Math.abs;
        t.d(r, {}, {
            a: a,
            b: n,
            c: e => 0 !== e ? e < 0 : 1 / e < 0,
            d: (e, r) => e > r ? e : r,
            e: (e, r) => e < r ? e : r
        })
    }),
    ed48: (function(e, r, t) {
        var n = t("qy7F"),
            a = t("uhQa");
        let o = Number.MAX_SAFE_INTEGER,
            s = Number.MIN_SAFE_INTEGER;
        a.b, a.c;
        let i = Number.isInteger || (e => "number" == typeof e && isFinite(e) && n.b(e) === e);
        t.d(r, {}, {
            a: o,
            b: s,
            c: i
        })
    }),
    yNp9: (function(e, r, t) {
        var n = t("NWOJ");
        let a = Object.assign,
            o = Object.keys,
            s = e => o(e).length,
            i = (e, r) => {
                for (let t in e)
                    if (!r(e[t], t)) return !1;
                return !0
            },
            l = (e, r) => Object.prototype.hasOwnProperty.call(e, r),
            c = Object.freeze,
            u = e => {
                for (let r in e) {
                    let t = e[r];
                    ("object" == typeof t || "function" == typeof t) && u(e[r])
                }
                return c(e)
            };
        t.d(r, {}, {
            a: a,
            b: u,
            c: (e, r) => e === r || s(e) === s(r) && i(e, (e, t) => (void 0 !== e || l(r, t)) && n.b(r[t], e)),
            d: i,
            e: (e, r) => {
                for (let t in e) r(e[t], t)
            },
            f: l,
            g: e => {
                for (let r in e) return !1;
                return !0
            },
            h: e => "object" == typeof e,
            i: o,
            j: s
        })
    }),
    P0lf: (function(e, r, t) {
        var n = t("MjY3"),
            a = t("g4hI"),
            o = t("emWR");
        t.d(r, {}, {
            a: class {
                constructor() {
                    this._observers = n.c()
                }
                on(e, r) {
                    n.e(this._observers, e, a.a).add(r)
                }
                once(e, r) {
                    let t = (...n) => {
                        this.off(e, t), r(...n)
                    };
                    this.on(e, t)
                }
                off(e, r) {
                    let t = this._observers.get(e);
                    void 0 !== t && (t.delete(r), 0 === t.size && this._observers.delete(e))
                }
                emit(e, r) {
                    return o.c((this._observers.get(e) || n.c()).values()).forEach(e => e(...r))
                }
                destroy() {
                    this._observers = n.c()
                }
            },
            b: class {
                constructor() {
                    this._observers = n.c()
                }
                on(e, r) {
                    return n.e(this._observers, e, a.a).add(r), r
                }
                once(e, r) {
                    let t = (...n) => {
                        this.off(e, t), r(...n)
                    };
                    this.on(e, t)
                }
                off(e, r) {
                    let t = this._observers.get(e);
                    void 0 !== t && (t.delete(r), 0 === t.size && this._observers.delete(e))
                }
                emit(e, r) {
                    return o.c((this._observers.get(e) || n.c()).values()).forEach(e => e(...r))
                }
                destroy() {
                    this._observers = n.c()
                }
            }
        })
    }),
    ZzxD: (function(e, r, t) {
        Promise.all.bind(Promise), t.d(r, {}, {
            a: e => new Promise(e)
        })
    }),
    V5oc: (function(e, r, t) {
        t.d(r, {
            a: () => a,
            b: () => o
        }), crypto.subtle;
        let n = crypto.getRandomValues.bind(crypto),
            a = () => n(new Uint32Array(1))[0],
            o = () => "10000000-1000-4000-8000-100000000000".replace(/[018]/g, e => (e ^ a() & 15 >> e / 4).toString(16))
    }),
    g4hI: (function(e, r, t) {
        t.d(r, {}, {
            a: () => new Set
        })
    }),
    ytld: (function(e, r, t) {
        var n = t("emWR");
        let a = String.fromCharCode;
        a(65535);
        let o = /^\s*/g,
            s = /([A-Z])/g,
            i = "u" > typeof TextEncoder ? new TextEncoder : null,
            l = i ? e => i.encode(e) : e => {
                let r = unescape(encodeURIComponent(e)),
                    t = r.length,
                    n = new Uint8Array(t);
                for (let e = 0; e < t; e++) n[e] = r.codePointAt(e);
                return n
            },
            c = "u" < typeof TextDecoder ? null : new TextDecoder("utf-8", {
                fatal: !0,
                ignoreBOM: !0
            });
        c && 1 === c.decode(new Uint8Array).length && (c = null), t.d(r, {
            e: () => c
        }, {
            a: l,
            b: (e, r) => e.replace(s, e => `${r}${e.toLowerCase()}`).replace(o, ""),
            c: a,
            d: (e, r) => n.g(r, () => e).join(""),
            f: i
        })
    }),
    vSAy: (function(e, r, t) {
        let n = Date.now;
        t.d(r, {}, {
            a: n
        })
    }),
    NWOJ: (function(e, r, t) {
        let n = Symbol("Equality");
        t.d(r, {}, {
            a: n,
            b: (e, r) => e === r || !!e?.[n]?.(r)
        })
    })
};
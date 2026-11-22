export const __rspack_esm_ids = [405332];
export const __webpack_modules__ = {
    kUij: (function(a, b, c) {
        c.d(b, {
            a: () => j,
            b: () => l,
            c: () => k,
            d: () => e,
            e: () => f,
            f: () => m,
            g: () => n,
            h: () => i
        });
        var d = c("lAQI");
        let e = "openai/first-party-plugin-logging",
            f = "openai/logging/message";
        new WeakMap;
        let g = d.p(["trace", "debug", "info", "warning", "error"]),
            h = d.F({
                component: d.L().min(1).max(200),
                level: g,
                message: d.L().max(2e4),
                metadata: d.J(d.L(), d.R()).optional()
            }),
            i = d.F({
                method: d.z(f),
                params: d.F({
                    entries: d.g(h).min(1).max(50)
                })
            }),
            j = "openai/first-party-plugin-bridge",
            k = "ui/openai/first-party-plugin-bridge",
            l = "ui/notifications/openai/first-party-plugin-bridge",
            m = d.F({
                message: d.L()
            }),
            n = d.F({
                method: d.z(k),
                params: m
            })
    }),
    Vlqh: (function(a, b, c) {
        var d = c("lAQI");
        let e = {
            WORKSTREAM_HANDOFF_REQUESTED: "CODEX_PLUGINS_APP_SURFACE_ACTION_WORKSTREAM_HANDOFF_REQUESTED",
            GLOBAL_ENTRYPOINT_VIEWED: "CODEX_PLUGINS_APP_SURFACE_ACTION_GLOBAL_ENTRYPOINT_VIEWED"
        };
        d.F({
            action: d.p(e),
            tileName: d.p(["analyze-airway-rnaseq", "compare-pathology-visium", "design-pdl1-nanobodies", "improve-trastuzumab-cdrs", "dock-imatinib-abl1", "design-jak2-binders", "predict-ace-inhibitor-logd-pka", "assess-antibody-developability", "predict-kras-g12c", "map-petase-mutations", "embed-gb1-sequences", "price-pdl1-assays"]).optional()
        }).strict().refine(a => {
            let {
                action: b,
                tileName: c
            } = a;
            return null == c || b === e.WORKSTREAM_HANDOFF_REQUESTED
        }), c.d(b, {}, {
            a: "rosalind@openai-curated-remote"
        })
    }),
    fD5v: (function(a, b, c) {
        c("kSHG");
        var d = c("lAQI");
        let e = d.K({
            path: d.L().min(1)
        });
        c.d(b, {}, {
            a: "openai/files/open",
            b: e
        })
    }),
    WWo4: (function(a, b, c) {
        var d = c("kSHG"),
            e = c("lAQI");
        let f = "openai/message",
            g = e.F({
                target: e.p(["active", "new"]).optional(),
                send: e.j().optional()
            }).strict(),
            h = d.W.shape.params.unwrap().extend({
                role: e.z("user"),
                content: e.g(d.h),
                _meta: d.W.shape.params.unwrap().shape._meta.unwrap().extend({
                    [f]: g.optional()
                }).optional()
            });
        c.d(b, {}, {
            a: f,
            b: g,
            c: h
        })
    }),
    OppN: (function(a, b, c) {
        var d = c("kSHG"),
            e = c("lAQI");
        let f = "openai/modelContext",
            g = e.L().min(1);
        e.F({
            [f]: e.F({
                updateId: g
            })
        }), e.Q([e.F({
            content: e.g(d.h).optional(),
            structuredContent: e.J(e.L(), e.R()).optional(),
            updateId: g
        }), e.D()]), c.d(b, {}, {
            a: f
        })
    }),
    rnct: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "chevron-right-md-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-chevron-right-md-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.580201,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: -.580201,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    ydi1: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "circle-grid-2x2-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-circle-grid-2x2-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 122e-6,
                    y: .00116,
                    overflows: !1
                },
                composite: {
                    x: 122e-6,
                    y: .00116,
                    overflows: !1
                }
            }
        }
    }),
    AtXz: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "clock-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-clock-light-24",
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
    vrCg: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "exclamation-mark-triangle-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-exclamation-mark-triangle-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 244e-6,
                    y: .081786,
                    overflows: !1
                },
                composite: {
                    x: 244e-6,
                    y: .081786,
                    overflows: !1
                }
            }
        }
    }),
    LSqx: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "list-circle-light-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12"
            },
            href: "#codex-icon-list-circle-light-12",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .041015,
                    y: -.003174,
                    overflows: !1
                },
                composite: {
                    x: .041015,
                    y: -.003174,
                    overflows: !1
                }
            }
        }
    }),
    LyCo: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "list-circle-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-list-circle-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .054688,
                    y: -.003906,
                    overflows: !1
                },
                composite: {
                    x: .054688,
                    y: -.003906,
                    overflows: !1
                }
            }
        }
    }),
    bdOJ: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "list-circle-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-list-circle-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .068115,
                    y: -.005127,
                    overflows: !1
                },
                composite: {
                    x: .068115,
                    y: -.005127,
                    overflows: !1
                }
            }
        }
    }),
    lbvo: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "location-arrow-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-location-arrow-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .095947,
                    y: .020508,
                    overflows: !1
                },
                composite: {
                    x: .095947,
                    y: .020508,
                    overflows: !1
                }
            }
        }
    }),
    u1WX: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "map-point-of-interest-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-map-point-of-interest-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: .027343,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: .027343,
                    overflows: !1
                }
            }
        }
    }),
    mS2x: (function(a, b, c) {
        c.d(b, {
            a: () => d
        });
        var d = {
            kind: "inline",
            preset: (0, (c("gdLt")).a)({
                name: "multicolor-verified-checkmark-light-20",
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
                        x: 2.236328,
                        y: 1.665039,
                        width: 15.526855,
                        height: 16.669434
                    },
                    visualBounds: {
                        x: 2.236328,
                        y: 1.665039,
                        width: 15.526855,
                        height: 16.669434
                    }
                },
                paint: {
                    kind: "multicolor",
                    layers: [{
                        role: "fixed",
                        color: "#00B1FF",
                        bounds: {
                            x: 2.236328,
                            y: 1.665039,
                            width: 15.526855,
                            height: 16.669434
                        },
                        wideGamut: "color(display-p3 0.0000 0.6941 1.0000)"
                    }, {
                        role: "fixed",
                        color: "#FFFFFF",
                        bounds: {
                            x: 6.599609,
                            y: 6.730957,
                            width: 6.698242,
                            height: 6.538574
                        }
                    }]
                },
                optical: {
                    shape: "non-circular",
                    bounds: {
                        x: 2.236328,
                        y: 1.665039,
                        width: 15.526855,
                        height: 16.669434
                    },
                    center: {
                        x: 9.999756,
                        y: 9.999756
                    },
                    insets: {
                        top: 1.665039,
                        right: 2.236817,
                        bottom: 1.665527,
                        left: 2.236328
                    },
                    anchors: {
                        frame: {
                            x: 10,
                            y: 10
                        },
                        ink: {
                            x: 9.999756,
                            y: 9.999756
                        }
                    }
                },
                capabilities: ["icon"],
                body: '<path d="M9.99996 1.66504C11.5465 1.66508 12.8908 2.52904 13.5781 3.80034C15.0232 3.75936 16.4445 4.49251 17.2181 5.83241C17.9915 7.17206 17.9155 8.76888 17.1578 9.9998C17.9155 11.2308 17.9915 12.8275 17.2181 14.1672C16.4445 15.5071 15.0232 16.2395 13.578 16.1985C12.8909 17.4702 11.5467 18.3346 9.99988 18.3347C8.45288 18.3347 7.10815 17.4704 6.42099 16.1986C4.97605 16.2394 3.55521 15.507 2.78175 14.1673C2.00838 12.8277 2.08378 11.2309 2.84132 9.99988C2.0838 8.76896 2.0084 7.17208 2.78179 5.8325C3.55527 4.49276 4.97613 3.75964 6.42107 3.80038C7.10834 2.52891 8.4533 1.66505 9.99996 1.66504Z" fill="#00B1FF"/> <path d="M11.7608 7.11839C12.007 6.72964 12.5218 6.61415 12.9107 6.86042C13.2993 7.10672 13.4148 7.62155 13.1686 8.01032L10.2308 12.6482C10.1994 12.6977 10.1472 12.782 10.0933 12.8525C10.0355 12.9279 9.91808 13.0675 9.723 13.1633C9.49192 13.2766 9.22675 13.3004 8.97917 13.23C8.76992 13.1705 8.6295 13.0539 8.55925 12.99C8.49342 12.93 8.42633 12.8565 8.38675 12.8134L6.81933 11.1101C6.50778 10.7715 6.53042 10.2441 6.86897 9.93254C7.20768 9.62095 7.73495 9.64262 8.04654 9.98137L9.172 11.2045L11.7608 7.11839Z" fill="white"/>'
            })
        }
    }),
    xxxZ: (function(a, b, c) {
        c.d(b, {
            a: () => d
        });
        var d = {
            kind: "inline",
            preset: (0, (c("gdLt")).a)({
                name: "multicolor-verified-checkmark-light-24",
                canvas: {
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    frame: {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24
                    },
                    inkBounds: {
                        x: 2.684082,
                        y: 1.998047,
                        width: 18.632324,
                        height: 20.003418
                    },
                    visualBounds: {
                        x: 2.684082,
                        y: 1.998047,
                        width: 18.632324,
                        height: 20.003418
                    }
                },
                paint: {
                    kind: "multicolor",
                    layers: [{
                        role: "fixed",
                        color: "#00B1FF",
                        bounds: {
                            x: 2.684082,
                            y: 1.998047,
                            width: 18.632324,
                            height: 20.003418
                        },
                        wideGamut: "color(display-p3 0.0000 0.6941 1.0000)"
                    }, {
                        role: "fixed",
                        color: "#FFFFFF",
                        bounds: {
                            x: 7.919434,
                            y: 8.077148,
                            width: 8.038086,
                            height: 7.84668
                        }
                    }]
                },
                optical: {
                    shape: "non-circular",
                    bounds: {
                        x: 2.684082,
                        y: 1.998047,
                        width: 18.632324,
                        height: 20.003418
                    },
                    center: {
                        x: 12.000244,
                        y: 11.999756
                    },
                    insets: {
                        top: 1.998047,
                        right: 2.683594,
                        bottom: 1.998535,
                        left: 2.684082
                    },
                    anchors: {
                        frame: {
                            x: 12,
                            y: 12
                        },
                        ink: {
                            x: 12.000244,
                            y: 11.999756
                        }
                    }
                },
                capabilities: ["icon"],
                body: '<path d="M12.0004 1.99805C13.8563 1.9981 15.4694 3.03485 16.2942 4.56041C18.0283 4.51124 19.7339 5.39101 20.6622 6.9989C21.5903 8.60648 21.499 10.5227 20.5898 11.9998C21.499 13.477 21.5902 15.3931 20.6622 17.0007C19.7339 18.6086 18.0283 19.4875 16.2941 19.4383C15.4695 20.9643 13.8565 22.0016 12.0003 22.0017C10.1439 22.0017 8.53027 20.9645 7.70568 19.4384C5.97175 19.4873 4.26674 18.6085 3.33858 17.0008C2.41054 15.3933 2.50102 13.4771 3.41007 11.9999C2.50104 10.5228 2.41057 8.6065 3.33864 6.999C4.26681 5.39132 5.97184 4.51157 7.70577 4.56046C8.53049 3.0347 10.1444 1.99806 12.0004 1.99805Z" fill="#00B1FF"/> <path d="M14.1128 8.54207C14.4083 8.07557 15.0261 7.93698 15.4927 8.2325C15.9591 8.52806 16.0977 9.14586 15.8022 9.61238L12.2768 15.1778C12.2392 15.2372 12.1765 15.3383 12.1118 15.4229C12.0425 15.5134 11.9016 15.681 11.6675 15.7959C11.3902 15.9319 11.072 15.9604 10.7749 15.876C10.5238 15.8046 10.3553 15.6646 10.271 15.5879C10.192 15.516 10.1115 15.4277 10.064 15.376L8.18309 13.3321C7.80924 12.9257 7.8364 12.2929 8.24266 11.919C8.64911 11.5451 9.28184 11.5711 9.65575 11.9776L11.0063 13.4453L14.1128 8.54207Z" fill="white"/>'
            })
        }
    }),
    QTQt: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "package-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-package-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 488e-6,
                    y: -488e-6,
                    overflows: !1
                },
                composite: {
                    x: 488e-6,
                    y: -488e-6,
                    overflows: !1
                }
            }
        }
    }),
    qvYg: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "phone-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-phone-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 732e-6,
                    y: 488e-6,
                    overflows: !1
                },
                composite: {
                    x: 732e-6,
                    y: 488e-6,
                    overflows: !1
                }
            }
        }
    }),
    ins4: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "photo-on-tilted-square-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-photo-on-tilted-square-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.166123,
                    y: -.144044,
                    overflows: !1
                },
                composite: {
                    x: -.166123,
                    y: -.144044,
                    overflows: !1
                }
            }
        }
    }),
    bSfN: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "star-fill-regular-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-star-fill-regular-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 61e-6,
                    y: .065124,
                    overflows: !1
                },
                composite: {
                    x: 61e-6,
                    y: .065124,
                    overflows: !1
                }
            }
        }
    }),
    q9q9: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "truck-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-truck-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 214e-6,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 214e-6,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    hrP6: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "verified-badge-checkmark-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-verified-badge-checkmark-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 306e-6,
                    y: -.012817,
                    overflows: !1
                },
                composite: {
                    x: 306e-6,
                    y: -.012817,
                    overflows: !1
                }
            }
        }
    }),
    rQsV: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "verified-checkmark-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-verified-checkmark-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -183e-6,
                    y: -.016297,
                    overflows: !1
                },
                composite: {
                    x: -183e-6,
                    y: -.016297,
                    overflows: !1
                }
            }
        }
    }),
    tNvR: (function(a, b) {
        b.a = {
            kind: "sprite",
            name: "xmark-lg-bold-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-xmark-lg-bold-24",
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
    ecCm: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "bar-chart-light-16",
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
                    y: 1.474609,
                    width: 13.050781,
                    height: 13.050781
                },
                visualBounds: {
                    x: 1.474609,
                    y: 1.474609,
                    width: 13.050781,
                    height: 13.050781
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.474609,
                    y: 1.474609,
                    width: 13.050781,
                    height: 13.050781
                },
                center: {
                    x: 8,
                    y: 8
                },
                insets: {
                    top: 1.474609,
                    right: 1.47461,
                    bottom: 1.47461,
                    left: 1.474609
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8,
                        y: 8
                    },
                    foreground: {
                        x: 8,
                        y: 8
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M8.99707 1.47461C9.8393 1.47461 10.5225 2.15777 10.5225 3V4.45703H13C13.8422 4.45703 14.5254 5.14019 14.5254 5.98242V12.6494C14.5252 13.6755 13.6931 14.5076 12.667 14.5078H10.125C10.0839 14.5181 10.0413 14.5254 9.99707 14.5254C9.95279 14.5254 9.91023 14.5181 9.86914 14.5078H6.125C6.08391 14.5181 6.04135 14.5254 5.99707 14.5254C5.95279 14.5254 5.91023 14.5181 5.86914 14.5078H3.33301C2.30694 14.5076 1.47479 13.6755 1.47461 12.6494V8.98242C1.47461 8.14019 2.15777 7.45703 3 7.45703H5.47168V3C5.47168 2.15777 6.15484 1.47461 6.99707 1.47461H8.99707ZM10.5225 13.457H12.667C13.1132 13.4569 13.4744 13.0956 13.4746 12.6494V5.98242C13.4746 5.72009 13.2623 5.50781 13 5.50781H10.5225V13.457ZM6.99707 2.52539C6.73474 2.52539 6.52246 2.73766 6.52246 3V13.457H9.47168V3C9.47168 2.73766 9.25941 2.52539 8.99707 2.52539H6.99707ZM3 8.50781C2.73766 8.50781 2.52539 8.72009 2.52539 8.98242V12.6494C2.52557 13.0956 2.88684 13.4569 3.33301 13.457H5.47168V8.50781H3Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    lr7S: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "bar-chart-light-20",
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
                    x: 1.834961,
                    y: 1.835938,
                    width: 16.330078,
                    height: 16.330078
                },
                visualBounds: {
                    x: 1.834961,
                    y: 1.835938,
                    width: 16.330078,
                    height: 16.330078
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.834961,
                    y: 1.835938,
                    width: 16.330078,
                    height: 16.330078
                },
                center: {
                    x: 10,
                    y: 10.000977
                },
                insets: {
                    top: 1.835938,
                    right: 1.834961,
                    bottom: 1.833984,
                    left: 1.834961
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10,
                        y: 10.000977
                    },
                    foreground: {
                        x: 10,
                        y: 10.000977
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M11.2471 1.83594C12.3047 1.83594 13.1621 2.69335 13.1621 3.75098V5.56445H16.25C17.3076 5.56445 18.165 6.42187 18.165 7.47949V15.8125C18.165 17.1002 17.1208 18.1445 15.833 18.1445H12.6562C12.6051 18.1571 12.5521 18.166 12.4971 18.166C12.442 18.166 12.3891 18.1571 12.3379 18.1445H7.65625C7.60509 18.1571 7.55213 18.166 7.49707 18.166C7.44201 18.166 7.38905 18.1571 7.33789 18.1445H4.16699C2.87925 18.1445 1.83496 17.1002 1.83496 15.8125V11.2295C1.83496 10.1719 2.69238 9.31445 3.75 9.31445H6.83203V3.75098C6.83203 2.69335 7.68945 1.83594 8.74707 1.83594H11.2471ZM13.1621 16.8145H15.833C16.3862 16.8145 16.835 16.3657 16.835 15.8125V7.47949C16.835 7.15641 16.5731 6.89453 16.25 6.89453H13.1621V16.8145ZM8.74707 3.16602C8.42398 3.16602 8.16211 3.42789 8.16211 3.75098V16.8145H11.832V3.75098C11.832 3.42789 11.5702 3.16602 11.2471 3.16602H8.74707ZM3.75 10.6445C3.42691 10.6445 3.16504 10.9064 3.16504 11.2295V15.8125C3.16504 16.3657 3.61379 16.8145 4.16699 16.8145H6.83203V10.6445H3.75Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    nHEk: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "building-light-12",
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
                    x: .599609,
                    y: 1.599609,
                    width: 10.800781,
                    height: 8.800781
                },
                visualBounds: {
                    x: .599609,
                    y: 1.599609,
                    width: 10.800781,
                    height: 8.800781
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: .599609,
                    y: 1.599609,
                    width: 10.800781,
                    height: 8.800781
                },
                center: {
                    x: 6,
                    y: 6
                },
                insets: {
                    top: 1.599609,
                    right: .59961,
                    bottom: 1.59961,
                    left: .599609
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
            body: '<path d="M9.59961 5C9.59961 4.66863 9.33137 4.40039 9 4.40039H7.40039V9.59961H9.59961V5ZM6.59961 3C6.59961 2.66863 6.33137 2.40039 6 2.40039H3C2.66863 2.40039 2.40039 2.66863 2.40039 3V9.59961H4.09961V8.5C4.09961 8.27909 4.27909 8.09961 4.5 8.09961C4.72091 8.09961 4.90039 8.27909 4.90039 8.5V9.59961H6.59961V3ZM7.40039 3.59961H9C9.7732 3.59961 10.4004 4.2268 10.4004 5V9.59961H11C11.2209 9.59961 11.4004 9.77909 11.4004 10C11.4004 10.2209 11.2209 10.4004 11 10.4004H1C0.779086 10.4004 0.599609 10.2209 0.599609 10C0.599609 9.77909 0.779086 9.59961 1 9.59961H1.59961V3C1.59961 2.2268 2.2268 1.59961 3 1.59961H6C6.7732 1.59961 7.40039 2.2268 7.40039 3V3.59961Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    LByK: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "building-light-16",
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
                    x: .807861,
                    y: 2.141602,
                    width: 14.383789,
                    height: 11.716797
                },
                visualBounds: {
                    x: .807861,
                    y: 2.141602,
                    width: 14.383789,
                    height: 11.716797
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: .807861,
                    y: 2.141602,
                    width: 14.383789,
                    height: 11.716797
                },
                center: {
                    x: 7.999756,
                    y: 8
                },
                insets: {
                    top: 2.141602,
                    right: .80835,
                    bottom: 2.141601,
                    left: .807861
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 7.999756,
                        y: 8
                    },
                    foreground: {
                        x: 7.999756,
                        y: 8
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M12.8079 6.66699C12.8079 6.22067 12.4465 5.85857 12.0002 5.8584H9.85864V12.8086H12.8079V6.66699ZM8.80786 4C8.80769 3.55383 8.44642 3.19256 8.00024 3.19238H4.00024C3.55392 3.19238 3.19183 3.55372 3.19165 4V12.8086H5.47485V11.334C5.47485 11.044 5.71029 10.8086 6.00024 10.8086C6.29004 10.8088 6.52466 11.0441 6.52466 11.334V12.8086H8.80786V4ZM9.85864 4.80859H12.0002C13.0264 4.80877 13.8586 5.64077 13.8586 6.66699V12.8086H14.6663C14.9562 12.8086 15.1917 13.044 15.1917 13.334C15.1915 13.6238 14.9561 13.8584 14.6663 13.8584H1.33325C1.04341 13.8584 0.808037 13.6238 0.807861 13.334C0.807861 13.044 1.0433 12.8086 1.33325 12.8086H2.14185V4C2.14202 2.97382 2.97402 2.1416 4.00024 2.1416H8.00024C9.02631 2.14178 9.85847 2.97393 9.85864 4V4.80859Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    zWvJ: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "building-light-20",
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
                    x: 1.001709,
                    y: 2.667969,
                    width: 17.99707,
                    height: 14.663086
                },
                visualBounds: {
                    x: 1.001709,
                    y: 2.667969,
                    width: 17.99707,
                    height: 14.663086
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.001709,
                    y: 2.667969,
                    width: 17.99707,
                    height: 14.663086
                },
                center: {
                    x: 10.000244,
                    y: 9.999512
                },
                insets: {
                    top: 2.667969,
                    right: 1.001221,
                    bottom: 2.668945,
                    left: 1.001709
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.000244,
                        y: 9.999512
                    },
                    foreground: {
                        x: 10.000244,
                        y: 9.999512
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M16.0017 8.33301C16.0017 7.7798 15.553 7.33105 14.9998 7.33105H12.3318V16.001H16.0017V8.33301ZM11.0017 5C11.0017 4.44679 10.553 3.99805 9.99976 3.99805H4.99976C4.4467 3.99822 3.99878 4.4469 3.99878 5V16.001H6.83472V14.166C6.83489 13.799 7.13274 13.5012 7.49976 13.501C7.86692 13.501 8.16462 13.7989 8.16479 14.166V16.001H11.0017V5ZM12.3318 6.00098H14.9998C16.2875 6.00098 17.3318 7.04526 17.3318 8.33301V16.001H18.3337C18.7008 16.0012 18.9986 16.299 18.9988 16.666C18.9988 17.0332 18.7009 17.3309 18.3337 17.3311H1.66675C1.29948 17.3311 1.00171 17.0333 1.00171 16.666C1.00188 16.2989 1.29959 16.001 1.66675 16.001H2.6687V5C2.6687 3.71236 3.71216 2.66814 4.99976 2.66797H9.99976C11.2875 2.66797 12.3318 3.71226 12.3318 5V6.00098Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    JrG2: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "document-badge-magnifyingglass-light-12",
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
                    x: 1.644531,
                    y: 1.349609,
                    width: 9.256836,
                    height: 10.067383
                },
                visualBounds: {
                    x: 1.644531,
                    y: 1.349609,
                    width: 9.256836,
                    height: 10.067383
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.644531,
                    y: 1.349609,
                    width: 9.256836,
                    height: 10.067383
                },
                center: {
                    x: 6.272949,
                    y: 6.383301
                },
                insets: {
                    top: 1.349609,
                    right: 1.098633,
                    bottom: .583008,
                    left: 1.644531
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 6.272949,
                        y: 6.383301
                    },
                    foreground: {
                        x: 6.272949,
                        y: 6.383301
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M8.15332 6.59863C9.29195 6.59876 10.2148 7.52247 10.2148 8.66113C10.2147 9.08762 10.0852 9.48375 9.86328 9.8125L10.7842 10.7344C10.9404 10.8906 10.9404 11.1436 10.7842 11.2998C10.628 11.456 10.3749 11.456 10.2188 11.2998L9.29395 10.376C8.96715 10.5937 8.57546 10.7226 8.15332 10.7227C7.01494 10.7225 6.09121 9.79946 6.09082 8.66113C6.09082 7.52248 7.01469 6.59876 8.15332 6.59863ZM8.15332 7.39941C7.45652 7.39955 6.8916 7.9643 6.8916 8.66113C6.89199 9.35763 7.45676 9.92272 8.15332 9.92285C8.84988 9.92272 9.41465 9.35763 9.41504 8.66113C9.41504 7.9643 8.85012 7.39954 8.15332 7.39941Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M6.92383 1.34961C7.42766 1.34967 7.91131 1.54998 8.26758 1.90625L9.38867 3.02734C9.73987 3.37854 9.93867 3.85354 9.94434 4.34961H10V5.15039H9.94531V5.24512C9.94519 5.46593 9.76576 5.64453 9.54492 5.64453C9.32408 5.64453 9.14465 5.46593 9.14453 5.24512V5.15039H8.25C7.4768 5.15039 6.84961 4.5232 6.84961 3.75V2.15039H3.54492C2.93741 2.15039 2.44531 2.64249 2.44531 3.25V8.75C2.44531 9.35751 2.93741 9.84961 3.54492 9.84961H4.54492C4.76584 9.84961 4.94531 10.0291 4.94531 10.25C4.94531 10.4709 4.76584 10.6504 4.54492 10.6504H3.54492C2.49558 10.6504 1.64453 9.79934 1.64453 8.75V3.25C1.64453 2.20066 2.49558 1.34961 3.54492 1.34961H6.92383ZM7.65039 3.75C7.65039 4.08137 7.91863 4.34961 8.25 4.34961H9.14355C9.13795 4.06575 9.02343 3.79491 8.82227 3.59375L7.70117 2.47266C7.68498 2.45646 7.66746 2.44182 7.65039 2.42676V3.75Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    XafL: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "document-badge-magnifyingglass-light-16",
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
                    x: 2.337891,
                    y: 1.808105,
                    width: 12.189697,
                    height: 13.406738
                },
                visualBounds: {
                    x: 2.337891,
                    y: 1.808105,
                    width: 12.189697,
                    height: 13.406738
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.337891,
                    y: 1.808105,
                    width: 12.189697,
                    height: 13.406738
                },
                center: {
                    x: 8.43274,
                    y: 8.511474
                },
                insets: {
                    top: 1.808105,
                    right: 1.472412,
                    bottom: .785157,
                    left: 2.337891
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.43274,
                        y: 8.511474
                    },
                    foreground: {
                        x: 8.43274,
                        y: 8.511474
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M10.8711 8.80615C12.3848 8.80615 13.6123 10.0336 13.6123 11.5474C13.6123 12.1172 13.4374 12.646 13.1396 13.0845L14.374 14.3179C14.579 14.5228 14.5789 14.856 14.374 15.061C14.169 15.266 13.8359 15.266 13.6309 15.061L12.3945 13.8237C11.9586 14.1161 11.4353 14.2886 10.8711 14.2886C9.35746 14.2886 8.13001 13.061 8.12988 11.5474C8.12989 10.0337 9.35738 8.80616 10.8711 8.80615ZM10.8711 9.85693C9.93728 9.85694 9.18067 10.6136 9.18066 11.5474C9.1808 12.4811 9.93736 13.2378 10.8711 13.2378C11.8048 13.2378 12.5614 12.4811 12.5615 11.5474C12.5615 10.6135 11.8049 9.85693 10.8711 9.85693Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M9.36816 1.80811C10.0378 1.80811 10.6798 2.07482 11.1533 2.54834L12.6484 4.04346C13.122 4.51699 13.3887 5.15895 13.3887 5.82861V7.16357C13.3886 7.45346 13.1532 7.68799 12.8633 7.68799C12.5734 7.68799 12.338 7.45346 12.3379 7.16357V6.85889H10.833C9.80694 6.85871 8.97479 6.02656 8.97461 5.00049V2.85889H4.86328C4.04866 2.85889 3.38867 3.51888 3.38867 4.3335V11.6665C3.38867 12.4811 4.04866 13.1421 4.86328 13.1421H6.36328C6.65312 13.1421 6.8885 13.3767 6.88867 13.6665C6.88867 13.9565 6.65323 14.1919 6.36328 14.1919H4.86328C3.46876 14.1919 2.33789 13.061 2.33789 11.6665V4.3335C2.33789 2.93898 3.46876 1.80811 4.86328 1.80811H9.36816ZM10.0254 5.00049C10.0256 5.44666 10.3868 5.80793 10.833 5.80811H12.3369C12.3316 5.42434 12.178 5.05742 11.9062 4.78564L10.4111 3.29053C10.2975 3.17693 10.1665 3.08541 10.0254 3.01514V5.00049Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    UnNY: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "document-badge-magnifyingglass-light-20",
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
                    x: 3.016602,
                    y: 2.251465,
                    width: 15.150635,
                    height: 16.775635
                },
                visualBounds: {
                    x: 3.016602,
                    y: 2.251465,
                    width: 15.150635,
                    height: 16.775635
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 3.016602,
                    y: 2.251465,
                    width: 15.150635,
                    height: 16.775635
                },
                center: {
                    x: 10.59192,
                    y: 10.639283
                },
                insets: {
                    top: 2.251465,
                    right: 1.832763,
                    bottom: .9729,
                    left: 3.016602
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.59192,
                        y: 10.639283
                    },
                    foreground: {
                        x: 10.59192,
                        y: 10.639283
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M13.5889 10.9995C15.4857 10.9996 17.0233 12.5373 17.0234 14.4341C17.0234 15.1455 16.806 15.8058 16.4355 16.354L17.9727 17.8921C18.2322 18.1518 18.2323 18.5729 17.9727 18.8325C17.713 19.0919 17.2919 19.092 17.0322 18.8325L15.4912 17.2925C14.9465 17.6557 14.2927 17.8686 13.5889 17.8687C11.6921 17.8685 10.1544 16.3309 10.1543 14.4341C10.1544 12.5373 11.6921 10.9996 13.5889 10.9995ZM13.5889 12.3296C12.4266 12.3297 11.4845 13.2718 11.4844 14.4341C11.4845 15.5963 12.4266 16.5394 13.5889 16.5396C14.7512 16.5395 15.6942 15.5964 15.6943 14.4341C15.6942 13.2718 14.7512 12.3297 13.5889 12.3296Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M11.8125 2.25146C12.6518 2.25146 13.4572 2.58476 14.0508 3.17822L15.9199 5.04736C16.5134 5.6409 16.8467 6.4463 16.8467 7.28564V9.08154C16.8466 9.44878 16.5489 9.74658 16.1816 9.74658C15.8144 9.74658 15.5166 9.44878 15.5166 9.08154V8.58154H13.417C12.1292 8.58154 11.085 7.53726 11.085 6.24951V3.58154H6.18164C5.1682 3.58154 4.34668 4.40306 4.34668 5.4165V14.5835C4.34686 15.5968 5.16831 16.4185 6.18164 16.4185H8.18164C8.54891 16.4185 8.84668 16.7162 8.84668 17.0835C8.8465 17.4506 8.5488 17.7485 8.18164 17.7485H6.18164C4.43377 17.7485 3.01678 16.3313 3.0166 14.5835V5.4165C3.0166 3.66852 4.43366 2.25146 6.18164 2.25146H11.8125ZM12.415 6.24951C12.415 6.80272 12.8638 7.25146 13.417 7.25146H15.5146C15.5058 6.77722 15.3155 6.32384 14.9795 5.98779L13.1104 4.11865C12.9128 3.92113 12.6741 3.77509 12.415 3.68506V6.24951Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    m2Vw: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "live-signal-light-12",
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
                    x: 1.10498,
                    y: 2.386719,
                    width: 9.800781,
                    height: 7.224609
                },
                visualBounds: {
                    x: 1.10498,
                    y: 2.386719,
                    width: 9.800781,
                    height: 7.224609
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.10498,
                    y: 2.386719,
                    width: 9.800781,
                    height: 7.224609
                },
                center: {
                    x: 6.005371,
                    y: 5.999024
                },
                insets: {
                    top: 2.386719,
                    right: 1.094239,
                    bottom: 2.388672,
                    left: 1.10498
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 6.005371,
                        y: 5.999024
                    },
                    foreground: {
                        x: 6.005371,
                        y: 5.999024
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M2.57471 2.50118C2.73233 2.3468 2.98549 2.34873 3.14014 2.50607C3.29476 2.66371 3.29179 2.91679 3.13428 3.0715C2.37525 3.81594 1.90587 4.85274 1.90576 5.99923C1.90577 7.14578 2.37529 8.18245 3.13428 8.92697C3.29191 9.08159 3.29461 9.33467 3.14014 9.49239C2.98544 9.64999 2.73238 9.65193 2.57471 9.49728C1.66869 8.60851 1.10498 7.36929 1.10498 5.99923C1.10509 4.62924 1.66866 3.38988 2.57471 2.50118Z" fill="currentColor"/> <path d="M8.87061 2.50607C9.0252 2.34865 9.27836 2.34689 9.43604 2.50118C10.3421 3.38988 10.9056 4.62924 10.9058 5.99923C10.9058 7.36935 10.3421 8.6085 9.43604 9.49728C9.27836 9.65193 9.0253 9.64999 8.87061 9.49239C8.71625 9.33466 8.71888 9.08155 8.87646 8.92697C9.63553 8.18244 10.105 7.14584 10.105 5.99923C10.1049 4.85274 9.63549 3.81594 8.87646 3.0715C8.71908 2.91678 8.71603 2.66367 8.87061 2.50607Z" fill="currentColor"/> <path d="M3.94287 3.96114C4.09817 3.80422 4.35124 3.80301 4.5083 3.95821C4.66516 4.11352 4.66642 4.3666 4.51123 4.52364C4.13624 4.90327 3.90585 5.424 3.90576 5.99923C3.9058 6.57466 4.13606 7.09611 4.51123 7.47579C4.66643 7.63292 4.66536 7.88596 4.5083 8.04122C4.35131 8.19629 4.09817 8.19497 3.94287 8.03829C3.42571 7.51495 3.10502 6.79363 3.10498 5.99923C3.10507 5.20495 3.42579 4.48444 3.94287 3.96114Z" fill="currentColor"/> <path d="M7.50244 3.95821C7.65951 3.80301 7.91257 3.80422 8.06787 3.96114C8.58495 4.48444 8.90567 5.20495 8.90576 5.99923C8.90573 6.79363 8.58503 7.51495 8.06787 8.03829C7.91258 8.19497 7.65944 8.19629 7.50244 8.04122C7.34538 7.88596 7.34432 7.63292 7.49951 7.47579C7.87468 7.09611 8.10495 6.57466 8.10498 5.99923C8.10489 5.424 7.87451 4.90327 7.49951 4.52364C7.34432 4.3666 7.34558 4.11352 7.50244 3.95821Z" fill="currentColor"/> <path d="M6.00537 5.04122C6.53101 5.04122 6.95752 5.46773 6.95752 5.99337C6.95752 6.51901 6.53101 6.94552 6.00537 6.94552C5.47973 6.94552 5.05322 6.51901 5.05322 5.99337C5.05322 5.46773 5.47973 5.04122 6.00537 5.04122Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    tXBb: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "live-signal-light-16",
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
                    x: 1.481812,
                    y: 3.191406,
                    width: 13.050781,
                    height: 9.617188
                },
                visualBounds: {
                    x: 1.481812,
                    y: 3.191406,
                    width: 13.050781,
                    height: 9.617188
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.481812,
                    y: 3.191406,
                    width: 13.050781,
                    height: 9.617188
                },
                center: {
                    x: 8.007203,
                    y: 8
                },
                insets: {
                    top: 3.191406,
                    right: 1.467407,
                    bottom: 3.191406,
                    left: 1.481812
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.007203,
                        y: 8
                    },
                    foreground: {
                        x: 8.007203,
                        y: 8
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M3.43884 3.341C3.64582 3.13844 3.97812 3.14212 4.18103 3.34881C4.38372 3.55573 4.38082 3.88802 4.17419 4.091C3.16059 5.08513 2.53269 6.46911 2.53259 8.00017C2.53269 9.53114 3.1607 10.9143 4.17419 11.9084C4.38114 12.1113 4.38388 12.4445 4.18103 12.6515C3.97803 12.8584 3.64582 12.8613 3.43884 12.6584C2.23229 11.4749 1.48191 9.82457 1.48181 8.00017C1.48191 6.1757 2.23219 4.52447 3.43884 3.341Z" fill="currentColor"/> <path d="M11.8334 3.34881C12.0362 3.14201 12.3685 3.13857 12.5756 3.341C13.7822 4.52447 14.5325 6.1757 14.5326 8.00017C14.5325 9.82466 13.7822 11.4749 12.5756 12.6584C12.3686 12.8613 12.0364 12.8584 11.8334 12.6515C11.6307 12.4445 11.6333 12.1113 11.8402 11.9084C12.8538 10.9142 13.4817 9.53123 13.4818 8.00017C13.4817 6.46911 12.8538 5.08513 11.8402 4.091C11.6338 3.88801 11.6308 3.55567 11.8334 3.34881Z" fill="currentColor"/> <path d="M5.26306 5.28728C5.46687 5.08148 5.79914 5.07979 6.00525 5.28338C6.21128 5.48706 6.21352 5.81932 6.01013 6.02557C5.50845 6.53324 5.19973 7.22978 5.19958 7.9992C5.19958 8.76875 5.50842 9.46505 6.01013 9.97283C6.21383 10.179 6.21116 10.5122 6.00525 10.716C5.79899 10.9195 5.46677 10.9173 5.26306 10.7111C4.57502 10.0148 4.1488 9.05612 4.1488 7.9992C4.14894 6.94242 4.57507 5.98351 5.26306 5.28728Z" fill="currentColor"/> <path d="M10.0092 5.28338C10.2152 5.07975 10.5475 5.08152 10.7513 5.28728C11.4393 5.98351 11.8655 6.94242 11.8656 7.9992C11.8656 9.05615 11.4394 10.0148 10.7513 10.7111C10.5476 10.9173 10.2154 10.9195 10.0092 10.716C9.8033 10.5122 9.8006 10.1789 10.0043 9.97283C10.506 9.46505 10.8148 8.76879 10.8148 7.9992C10.8147 7.22978 10.506 6.53324 10.0043 6.02557C9.80095 5.81932 9.80315 5.48704 10.0092 5.28338Z" fill="currentColor"/> <path d="M8.0072 6.73162C8.70323 6.73175 9.26777 7.29634 9.26794 7.99236C9.26768 8.68831 8.70318 9.25297 8.0072 9.2531C7.31126 9.25293 6.74672 8.68828 6.74646 7.99236C6.74664 7.29637 7.31121 6.7318 8.0072 6.73162Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    WjU4: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "live-signal-light-20",
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
                    x: 1.843994,
                    y: 3.980469,
                    width: 16.330078,
                    height: 12.039063
                },
                visualBounds: {
                    x: 1.843994,
                    y: 3.980469,
                    width: 16.330078,
                    height: 12.039063
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.843994,
                    y: 3.980469,
                    width: 16.330078,
                    height: 12.039063
                },
                center: {
                    x: 10.009033,
                    y: 10.000001
                },
                insets: {
                    top: 3.980469,
                    right: 1.825928,
                    bottom: 3.980468,
                    left: 1.843994
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.009033,
                        y: 10.000001
                    },
                    foreground: {
                        x: 10.009033,
                        y: 10.000001
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M4.29224 4.17087C4.55444 3.9137 4.9755 3.91745 5.23267 4.17965C5.48982 4.44186 5.4851 4.86292 5.2229 5.12008C3.95758 6.3612 3.17416 8.08862 3.17407 9.99997C3.17408 11.9113 3.95769 13.6387 5.2229 14.8799C5.48499 15.1369 5.48953 15.5581 5.23267 15.8203C4.97556 16.0824 4.55445 16.087 4.29224 15.83C2.78223 14.349 1.844 12.2832 1.84399 9.99997C1.84408 7.71688 2.7823 5.65181 4.29224 4.17087Z" fill="currentColor"/> <path d="M14.7854 4.17965C15.0425 3.91751 15.4636 3.91387 15.7258 4.17087C17.2358 5.65181 18.174 7.71687 18.1741 9.99997C18.1741 12.2832 17.2358 14.349 15.7258 15.83C15.4636 16.0868 15.0424 16.0824 14.7854 15.8203C14.5288 15.5581 14.5333 15.1369 14.7952 14.8799C16.0604 13.6387 16.844 11.9113 16.844 9.99997C16.8439 8.08861 16.0605 6.3612 14.7952 5.12008C14.5332 4.86297 14.5285 4.44182 14.7854 4.17965Z" fill="currentColor"/> <path d="M6.57153 6.60348C6.82956 6.34243 7.25071 6.34087 7.51196 6.5986C7.77317 6.85674 7.77593 7.27779 7.51782 7.53903C6.89235 8.17209 6.5072 9.04061 6.50708 9.99997C6.50711 10.9593 6.89245 11.8278 7.51782 12.4609C7.77596 12.7221 7.77317 13.1432 7.51196 13.4013C7.25072 13.6594 6.82965 13.6567 6.57153 13.3955C5.71031 12.5236 5.17703 11.3232 5.177 9.99997C5.17712 8.67651 5.70994 7.47538 6.57153 6.60348Z" fill="currentColor"/> <path d="M12.5061 6.5986C12.7673 6.34083 13.1885 6.34247 13.4465 6.60348C14.3081 7.47538 14.8409 8.67651 14.8411 9.99997C14.841 11.3232 14.3078 12.5236 13.4465 13.3955C13.1884 13.6567 12.7673 13.6594 12.5061 13.4013C12.245 13.1432 12.2421 12.7221 12.5002 12.4609C13.1257 11.8278 13.511 10.9593 13.511 9.99997C13.5109 9.04061 13.1257 8.17209 12.5002 7.53903C12.2422 7.27779 12.2449 6.85672 12.5061 6.5986Z" fill="currentColor"/> <path d="M10.009 8.40622C10.884 8.40639 11.593 9.11614 11.593 9.99118C11.5928 10.8661 10.8839 11.575 10.009 11.5752C9.13416 11.575 8.42425 10.8661 8.42407 9.99118C8.42407 9.11615 9.13405 8.40642 10.009 8.40622Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    TZCx: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "newspaper-light-12",
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
                    x: 1.099609,
                    y: 1.599609,
                    width: 9.800781,
                    height: 8.800781
                },
                visualBounds: {
                    x: 1.099609,
                    y: 1.599609,
                    width: 9.800781,
                    height: 8.800781
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.099609,
                    y: 1.599609,
                    width: 9.800781,
                    height: 8.800781
                },
                center: {
                    x: 6,
                    y: 6
                },
                insets: {
                    top: 1.599609,
                    right: 1.09961,
                    bottom: 1.59961,
                    left: 1.099609
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
            body: '<path d="M8.5 7.59961C8.72091 7.59961 8.90039 7.77909 8.90039 8C8.90039 8.22091 8.72091 8.40039 8.5 8.40039H3.5C3.27909 8.40039 3.09961 8.22091 3.09961 8C3.09961 7.77909 3.27909 7.59961 3.5 7.59961H8.5Z" fill="currentColor"/> <path d="M5.25 3.59961C5.60898 3.59961 5.90039 3.89101 5.90039 4.25V5.75C5.90039 6.10898 5.60898 6.40039 5.25 6.40039H3.75C3.39101 6.40039 3.09961 6.10898 3.09961 5.75V4.25C3.09961 3.89101 3.39101 3.59961 3.75 3.59961H5.25ZM3.90039 5.59961H5.09961V4.40039H3.90039V5.59961Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M8.5 5.59961C8.72091 5.59961 8.90039 5.77909 8.90039 6C8.90039 6.22091 8.72091 6.40039 8.5 6.40039H7.25C7.02909 6.40039 6.84961 6.22091 6.84961 6C6.84961 5.77909 7.02909 5.59961 7.25 5.59961H8.5Z" fill="currentColor"/> <path d="M8.5 3.59961C8.72091 3.59961 8.90039 3.77909 8.90039 4C8.90039 4.22091 8.72091 4.40039 8.5 4.40039H7.25C7.02909 4.40039 6.84961 4.22091 6.84961 4C6.84961 3.77909 7.02909 3.59961 7.25 3.59961H8.5Z" fill="currentColor"/> <path d="M8.7002 1.59961C9.91507 1.59972 10.9003 2.58493 10.9004 3.7998V8.2002C10.9003 9.41507 9.91507 10.4003 8.7002 10.4004H3.2998C2.08493 10.4003 1.09971 9.41507 1.09961 8.2002V3.7998C1.09972 2.58493 2.08493 1.59971 3.2998 1.59961H8.7002ZM3.2998 2.40039C2.52676 2.4005 1.9005 3.02676 1.90039 3.7998V8.2002C1.9005 8.97324 2.52676 9.5995 3.2998 9.59961H8.7002C9.47324 9.5995 10.0995 8.97324 10.0996 8.2002V3.7998C10.0995 3.02676 9.47324 2.4005 8.7002 2.40039H3.2998Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    OB5w: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "newspaper-light-16",
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
                    y: 2.141357,
                    width: 13.050781,
                    height: 11.716797
                },
                visualBounds: {
                    x: 1.474609,
                    y: 2.141357,
                    width: 13.050781,
                    height: 11.716797
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.474609,
                    y: 2.141357,
                    width: 13.050781,
                    height: 11.716797
                },
                center: {
                    x: 8,
                    y: 7.999756
                },
                insets: {
                    top: 2.141357,
                    right: 1.47461,
                    bottom: 2.141846,
                    left: 1.474609
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8,
                        y: 7.999756
                    },
                    foreground: {
                        x: 8,
                        y: 7.999756
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M11.334 10.1414C11.6236 10.1417 11.8584 10.377 11.8584 10.6667C11.8583 10.9564 11.6235 11.1918 11.334 11.1921H4.66699C4.37712 11.1921 4.14173 10.9566 4.1416 10.6667C4.1416 10.3768 4.37704 10.1414 4.66699 10.1414H11.334Z" fill="currentColor"/> <path d="M7 4.80835C7.47379 4.80851 7.85822 5.19295 7.8584 5.66675V7.66675C7.85813 8.14047 7.47374 8.52498 7 8.52515H5C4.52627 8.52497 4.14187 8.14046 4.1416 7.66675V5.66675C4.14178 5.19296 4.52621 4.80853 5 4.80835H7ZM5.19238 7.47534H6.80859V5.85913H5.19238V7.47534Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M11.334 7.47437C11.6235 7.47474 11.8583 7.71015 11.8584 7.99976C11.8584 8.28947 11.6236 8.52477 11.334 8.52515H9.66699C9.37704 8.52515 9.1416 8.28971 9.1416 7.99976C9.14173 7.70992 9.37712 7.47437 9.66699 7.47437H11.334Z" fill="currentColor"/> <path d="M11.334 4.80835C11.6236 4.80872 11.8584 5.04402 11.8584 5.33374C11.8583 5.62335 11.6235 5.85876 11.334 5.85913H9.66699C9.37712 5.85913 9.14173 5.62358 9.1416 5.33374C9.1416 5.04379 9.37704 4.80835 9.66699 4.80835H11.334Z" fill="currentColor"/> <path d="M12.1338 2.14136C13.4543 2.1416 14.5251 3.21244 14.5254 4.53296V11.4666C14.5254 12.7873 13.4545 13.8579 12.1338 13.8582H3.86621C2.54554 13.8579 1.47461 12.7873 1.47461 11.4666V4.53296C1.47486 3.21244 2.54569 2.1416 3.86621 2.14136H12.1338ZM3.86621 3.19214C3.12559 3.19238 2.52564 3.79234 2.52539 4.53296V11.4666C2.52539 12.2074 3.12544 12.8081 3.86621 12.8083H12.1338C12.8746 12.8081 13.4746 12.2074 13.4746 11.4666V4.53296C13.4744 3.79234 12.8744 3.19238 12.1338 3.19214H3.86621Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    Wuby: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "newspaper-light-20",
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
                    x: 1.834961,
                    y: 2.668213,
                    width: 16.330078,
                    height: 14.663086
                },
                visualBounds: {
                    x: 1.834961,
                    y: 2.668213,
                    width: 16.330078,
                    height: 14.663086
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.834961,
                    y: 2.668213,
                    width: 16.330078,
                    height: 14.663086
                },
                center: {
                    x: 10,
                    y: 9.999756
                },
                insets: {
                    top: 2.668213,
                    right: 1.834961,
                    bottom: 2.668701,
                    left: 1.834961
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10,
                        y: 9.999756
                    },
                    foreground: {
                        x: 10,
                        y: 9.999756
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M14.166 12.6682C14.5332 12.6682 14.8309 12.9661 14.8311 13.3333C14.8311 13.7005 14.5333 13.9983 14.166 13.9983H5.83301C5.46591 13.9981 5.16797 13.7004 5.16797 13.3333C5.1681 12.9662 5.46599 12.6684 5.83301 12.6682H14.166Z" fill="currentColor"/> <path d="M8.75 6.0022C9.34724 6.00237 9.83105 6.48695 9.83105 7.08423V9.58423C9.83062 10.1811 9.34697 10.6651 8.75 10.6653H6.25C5.65302 10.6651 5.16841 10.1811 5.16797 9.58423V7.08423C5.16797 6.48694 5.65275 6.00236 6.25 6.0022H8.75ZM6.49805 9.33521H8.50098V7.33228H6.49805V9.33521Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M14.166 9.33521C14.5333 9.33521 14.8311 9.63297 14.8311 10.0002C14.8309 10.3674 14.5332 10.6653 14.166 10.6653H12.083C11.716 10.6651 11.4181 10.3673 11.418 10.0002C11.418 9.6331 11.7159 9.3354 12.083 9.33521H14.166Z" fill="currentColor"/> <path d="M14.166 6.00122C14.5332 6.00122 14.8309 6.2991 14.8311 6.66626C14.8311 7.03353 14.5333 7.3313 14.166 7.3313H12.083C11.7159 7.3311 11.418 7.03341 11.418 6.66626C11.4181 6.29922 11.716 6.00142 12.083 6.00122H14.166Z" fill="currentColor"/> <path d="M15.167 2.66821C16.8227 2.66839 18.1649 4.01058 18.165 5.66626V14.3333C18.165 15.9891 16.8228 17.3311 15.167 17.3313H4.83301C3.17722 17.3311 1.83496 15.9891 1.83496 14.3333V5.66626C1.83514 4.01058 3.17733 2.66839 4.83301 2.66821H15.167ZM4.83301 3.99829C3.91187 3.99847 3.16521 4.74512 3.16504 5.66626V14.3333C3.16504 15.2545 3.91176 16.001 4.83301 16.0012H15.167C16.0882 16.001 16.835 15.2545 16.835 14.3333V5.66626C16.8348 4.74512 16.0881 3.99847 15.167 3.99829H4.83301Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    bmJT: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "phone-wave-voice-light-12",
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
                    x: 1.329102,
                    y: .849609,
                    width: 9.571289,
                    height: 9.821289
                },
                visualBounds: {
                    x: 1.329102,
                    y: .849609,
                    width: 9.571289,
                    height: 9.821289
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.329102,
                    y: .849609,
                    width: 9.571289,
                    height: 9.821289
                },
                center: {
                    x: 6.114747,
                    y: 5.760254
                },
                insets: {
                    top: .849609,
                    right: 1.099609,
                    bottom: 1.329102,
                    left: 1.329102
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 6.114747,
                        y: 5.760254
                    },
                    foreground: {
                        x: 6.114747,
                        y: 5.760254
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M3.2327 1.3291C3.32141 1.3291 3.41269 1.34001 3.50488 1.36523C3.72424 1.42532 3.96837 1.59106 4.09375 1.78223L5.17969 3.43945C5.29314 3.64037 5.3754 3.86132 5.3754 4.09476C5.3754 4.34504 5.28052 4.58666 5.07617 4.79102L4.81934 5.04688C4.75347 5.11274 4.68956 5.20263 4.68956 5.29981C4.68956 5.35206 4.70683 5.42368 4.77344 5.51758C5.23314 6.16534 5.83465 6.76588 6.48242 7.22559C6.57633 7.29219 6.6479 7.30947 6.70014 7.30947C6.79706 7.30947 6.8865 7.24534 6.95215 7.17969L7.20898 6.92383C7.41334 6.71948 7.65481 6.62459 7.90509 6.62459C8.13843 6.62459 8.3597 6.70688 8.56055 6.82031L10.2178 7.90625L10.249 7.92969L10.3828 8.05273C10.5676 8.2501 10.6705 8.49325 10.6705 8.76488C10.6705 8.8837 10.6509 8.99793 10.6201 9.10352C10.5166 9.45856 10.2704 9.77136 10.0576 9.9873C9.6103 10.4413 9.04822 10.6709 8.3252 10.6709C6.64434 10.6708 5.02696 9.62106 3.70898 8.29395L3.70605 8.29102C2.37868 6.9729 1.3291 5.35494 1.3291 3.67383C1.32917 2.95119 1.55811 2.38956 2.01172 1.94238C2.33045 1.62832 2.7674 1.3291 3.2327 1.3291ZM2.12891 3.67383C2.12891 5.03394 2.99417 6.45747 4.27051 7.72461L4.27148 7.72559L4.27344 7.72852L4.27441 7.72949L4.51465 7.96387C5.71991 9.1103 7.05029 9.87003 8.3252 9.87012C8.85498 9.87012 9.20543 9.71284 9.48828 9.42578C9.63597 9.27584 9.87079 8.98808 9.87079 8.76622C9.87079 8.67614 9.82293 8.61681 9.75586 8.56055L8.16016 7.51367C8.08948 7.47425 7.98674 7.42471 7.90367 7.42471C7.86967 7.42471 7.83054 7.43314 7.77441 7.48926L7.51758 7.74609C7.29714 7.96639 7.01532 8.10986 6.69935 8.10986C6.46321 8.10986 6.23125 8.02887 6.01855 7.87793C5.29762 7.36622 4.63274 6.70142 4.12109 5.98047C3.9704 5.76806 3.89004 5.53655 3.89004 5.30079C3.89004 5.25696 3.89282 5.21298 3.89844 5.16895C3.9336 4.894 4.07397 4.66138 4.25391 4.48145L4.51074 4.22461C4.56668 4.16855 4.57529 4.12941 4.57529 4.09542C4.57529 4.03584 4.54996 3.96833 4.52539 3.91504L4.48242 3.83301L3.44141 2.24512C3.37983 2.17105 3.32905 2.14641 3.29395 2.13672C3.27696 2.13207 3.25708 2.1292 3.2338 2.1292C3.20248 2.1292 3.165 2.13439 3.12012 2.14746C2.95115 2.19666 2.75124 2.33633 2.57324 2.51172C2.28635 2.79448 2.12897 3.14433 2.12891 3.67383Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M8.75 0.849609C8.97073 0.849829 9.15039 1.02922 9.15039 1.25V4.5C9.15039 4.72078 8.97073 4.90017 8.75 4.90039C8.52909 4.90039 8.34961 4.72091 8.34961 4.5V1.25C8.34961 1.02909 8.52909 0.849609 8.75 0.849609Z" fill="currentColor"/> <path d="M7 1.84961C7.22073 1.84983 7.40039 2.02922 7.40039 2.25V3.5C7.40039 3.72078 7.22073 3.90017 7 3.90039C6.77909 3.90039 6.59961 3.72091 6.59961 3.5V2.25C6.59961 2.02909 6.77909 1.84961 7 1.84961Z" fill="currentColor"/> <path d="M10.5 1.84961C10.7207 1.84983 10.9004 2.02922 10.9004 2.25V3.5C10.9004 3.72078 10.7207 3.90017 10.5 3.90039C10.2791 3.90039 10.0996 3.72091 10.0996 3.5V2.25C10.0996 2.02909 10.2791 1.84961 10.5 1.84961Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    nZ2x: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "phone-wave-voice-light-16",
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
                    x: 1.837891,
                    y: 1.199951,
                    width: 12.628906,
                    height: 12.960938
                },
                visualBounds: {
                    x: 1.837891,
                    y: 1.199951,
                    width: 12.628906,
                    height: 12.960938
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.837891,
                    y: 1.199951,
                    width: 12.628906,
                    height: 12.960938
                },
                center: {
                    x: 8.152344,
                    y: 7.68042
                },
                insets: {
                    top: 1.199951,
                    right: 1.533203,
                    bottom: 1.839111,
                    left: 1.837891
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.152344,
                        y: 7.68042
                    },
                    foreground: {
                        x: 8.152344,
                        y: 7.68042
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M4.31065 1.83898C4.74333 1.83898 5.10645 2.04246 5.375 2.37573L5.40137 2.41284L6.84766 4.6189C6.99312 4.87654 7.10013 5.1602 7.10013 5.45966C7.10013 5.7753 6.98083 6.08039 6.7207 6.34058L6.37793 6.68237C6.27667 6.78363 6.18551 6.91796 6.18551 7.06654C6.18551 7.1513 6.21367 7.26002 6.30957 7.39526C6.92684 8.26505 7.73371 9.07193 8.60352 9.68921C8.73876 9.78514 8.84747 9.81327 8.93223 9.81327C8.94891 9.81327 8.96465 9.81218 8.97949 9.8103C9.07673 9.79789 9.19339 9.74386 9.31641 9.62085L9.6582 9.27808C9.91839 9.01795 10.2235 8.89865 10.5391 8.89865C10.8386 8.89865 11.1222 9.00567 11.3799 9.15112L11.4062 9.16772L13.5869 10.5974L13.623 10.6248L13.7129 10.7019C13.9957 10.9636 14.1598 11.3 14.1598 11.6881C14.1598 12.2891 13.7663 12.8602 13.3623 13.2703C12.7796 13.8616 12.0475 14.1609 11.0996 14.1609C8.88504 14.1608 6.74433 12.7769 4.99121 11.0115L4.9873 11.0085C3.22167 9.25533 1.83798 7.11394 1.83789 4.89917C1.83789 3.95128 2.13719 3.21918 2.72852 2.63647C3.13856 2.23244 3.70965 1.83898 4.31065 1.83898ZM4.3082 2.77214C4.25986 2.77214 4.20444 2.78001 4.14062 2.79858C3.89982 2.8687 3.62428 3.06454 3.38379 3.30151C2.98719 3.69234 2.77148 4.17674 2.77148 4.89917C2.77158 6.73939 3.94045 8.65369 5.64648 10.3474L5.65137 10.3523L5.97168 10.6658C7.5843 12.2 9.37434 13.2272 11.0996 13.2273C11.822 13.2273 12.3064 13.0116 12.6973 12.615C12.9074 12.4017 13.2266 12.0078 13.2266 11.6906C13.2266 11.5479 13.1542 11.449 13.0488 11.3611L10.916 9.96265C10.8101 9.90322 10.6638 9.83261 10.5386 9.83261C10.4752 9.83261 10.4061 9.85057 10.3184 9.93823L9.97656 10.281C9.69486 10.5627 9.33439 10.7466 8.93173 10.7466C8.6325 10.7466 8.33715 10.6441 8.06348 10.45C7.10812 9.77196 6.22681 8.89065 5.54883 7.9353C5.35467 7.66163 5.25216 7.36627 5.25216 7.06704C5.25216 7.01183 5.25565 6.95649 5.2627 6.90112C5.30721 6.55235 5.48559 6.2544 5.71777 6.02222L6.06055 5.68042C6.14821 5.59271 6.16617 5.52357 6.16617 5.46021C6.16617 5.33519 6.09639 5.18955 6.03711 5.08374L4.63867 2.95093C4.55058 2.84506 4.45132 2.77214 4.3082 2.77214Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M11.666 1.19995C11.9236 1.20014 12.1328 1.40913 12.1328 1.66675V5.99976C12.1328 6.25737 11.9236 6.46636 11.666 6.46655C11.4083 6.46655 11.1992 6.25749 11.1992 5.99976V1.66675C11.1992 1.40902 11.4083 1.19995 11.666 1.19995Z" fill="currentColor"/> <path d="M9.33398 2.53296C9.59148 2.53315 9.80065 2.74225 9.80078 2.99976V4.66675C9.80061 4.92422 9.59145 5.13336 9.33398 5.13354C9.07636 5.13354 8.86736 4.92433 8.86719 4.66675V2.99976C8.86732 2.74214 9.07633 2.53296 9.33398 2.53296Z" fill="currentColor"/> <path d="M14 2.53296C14.2575 2.53315 14.4667 2.74225 14.4668 2.99976V4.66675C14.4666 4.92422 14.2575 5.13336 14 5.13354C13.7424 5.13354 13.5334 4.92433 13.5332 4.66675V2.99976C13.5333 2.74214 13.7423 2.53296 14 2.53296Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    Lpsz: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "phone-wave-voice-light-20",
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
                    x: 2.249023,
                    y: 1.449463,
                    width: 15.884766,
                    height: 16.301758
                },
                visualBounds: {
                    x: 2.249023,
                    y: 1.449463,
                    width: 15.884766,
                    height: 16.301758
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.249023,
                    y: 1.449463,
                    width: 15.884766,
                    height: 16.301758
                },
                center: {
                    x: 10.191406,
                    y: 9.600342
                },
                insets: {
                    top: 1.449463,
                    right: 1.866211,
                    bottom: 2.248779,
                    left: 2.249023
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.191406,
                        y: 9.600342
                    },
                    foreground: {
                        x: 10.191406,
                        y: 9.600342
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M5.39001 2.24813C5.94648 2.24813 6.41335 2.50906 6.75879 2.93774L6.79492 2.98755L8.58203 5.71313L8.60449 5.74829L8.71973 5.97192C8.84427 6.23968 8.92645 6.52706 8.92645 6.82415C8.92645 7.23229 8.77196 7.62673 8.4375 7.96118L8.00977 8.38892C7.89322 8.50548 7.78373 8.6613 7.78373 8.8329C7.78373 8.92754 7.81504 9.05351 7.92969 9.21509C8.698 10.2977 9.70155 11.3022 10.7842 12.0706C10.9452 12.1848 11.0709 12.2156 11.1655 12.2156C11.1849 12.2156 11.2029 12.2143 11.2197 12.2122C11.3278 12.1984 11.4634 12.1383 11.6113 11.9905L12.0391 11.5627C12.3735 11.2283 12.7672 11.0738 13.1753 11.0738C13.5583 11.0738 13.9212 11.2095 14.251 11.3958L14.2871 11.4172L17.0117 13.2053L17.0615 13.2415L17.1768 13.3401C17.541 13.6772 17.7514 14.1128 17.7514 14.6122C17.7514 15.3776 17.2551 16.0988 16.7393 16.6223C16.0006 17.3718 15.0728 17.7512 13.876 17.7512C11.0876 17.7511 8.3997 16.0091 6.20508 13.7991L6.2002 13.7952C3.99009 11.6005 2.24902 8.91173 2.24902 6.12329C2.24907 4.9264 2.62831 3.99864 3.37793 3.26001C3.90217 2.74352 4.6238 2.24813 5.39001 2.24813ZM5.38892 3.51467C5.33339 3.51467 5.26817 3.52381 5.19141 3.54614C4.90205 3.6304 4.56484 3.8685 4.2666 4.16235C3.78125 4.64059 3.51567 5.23238 3.51562 6.12329C3.51563 8.40351 4.96539 10.7837 7.09473 12.8977L7.0957 12.8997L7.10059 12.9036L7.10156 12.9055L7.50098 13.2961C9.51268 15.21 11.7383 16.4835 13.876 16.4836C14.767 16.4836 15.3596 16.219 15.8379 15.7336C16.0888 15.479 16.4846 14.9927 16.4846 14.6114C16.4846 14.4498 16.3998 14.3397 16.2812 14.2405L13.6172 12.4934C13.4945 12.425 13.3184 12.3399 13.1744 12.3399C13.1086 12.3399 13.0349 12.3579 12.9346 12.4583L12.5068 12.886C12.1452 13.2476 11.6842 13.4827 11.1661 13.4827C10.7806 13.4827 10.4012 13.3508 10.0518 13.1028C8.853 12.252 7.74721 11.1472 6.89648 9.94849C6.64872 9.59936 6.51751 9.22032 6.51751 8.83507C6.51751 8.76334 6.52206 8.69139 6.53125 8.61938C6.58864 8.16999 6.8182 7.78849 7.11426 7.49243L7.54199 7.0647C7.64184 6.9647 7.65935 6.89101 7.65935 6.82535C7.65935 6.68048 7.5748 6.50451 7.50586 6.3811L5.75684 3.71606C5.65789 3.59863 5.54952 3.51467 5.38892 3.51467Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M14.584 1.44946C14.9338 1.44946 15.2178 1.73347 15.2178 2.08325V7.50024C15.2176 7.84987 14.9337 8.13306 14.584 8.13306C14.2345 8.13281 13.9504 7.84972 13.9502 7.50024V2.08325C13.9502 1.73363 14.2344 1.44971 14.584 1.44946Z" fill="currentColor"/> <path d="M11.666 3.11646C12.0158 3.11646 12.2998 3.40046 12.2998 3.75024V5.83325C12.2997 6.18292 12.0157 6.46704 11.666 6.46704C11.3165 6.46679 11.0324 6.18277 11.0322 5.83325V3.75024C11.0322 3.40062 11.3164 3.11671 11.666 3.11646Z" fill="currentColor"/> <path d="M17.5 3.11646C17.8498 3.11646 18.1338 3.40046 18.1338 3.75024V5.83325C18.1337 6.18292 17.8497 6.46704 17.5 6.46704C17.1505 6.46679 16.8663 6.18277 16.8662 5.83325V3.75024C16.8662 3.40062 17.1504 3.11671 17.5 3.11646Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    xRFI: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "pin-location-light-12",
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
                    x: 1.099609,
                    y: 1.099609,
                    width: 9.800781,
                    height: 9.799805
                },
                visualBounds: {
                    x: 1.099609,
                    y: 1.099609,
                    width: 9.800781,
                    height: 9.799805
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.099609,
                    y: 1.099609,
                    width: 9.800781,
                    height: 9.799805
                },
                center: {
                    x: 6,
                    y: 5.999512
                },
                insets: {
                    top: 1.099609,
                    right: 1.09961,
                    bottom: 1.100586,
                    left: 1.099609
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 6,
                        y: 5.999512
                    },
                    foreground: {
                        x: 6,
                        y: 5.999512
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M8.07617 6.78906C8.8447 6.93761 9.52002 7.17067 10.0146 7.47461C10.4925 7.76835 10.9003 8.19408 10.9004 8.75C10.9003 9.1412 10.6942 9.47064 10.417 9.72559C10.14 9.9802 9.76135 10.1915 9.32715 10.3604C8.45593 10.6992 7.27935 10.8994 6 10.8994C4.72066 10.8994 3.54407 10.6992 2.67285 10.3604C2.23865 10.1915 1.85999 9.9802 1.58301 9.72559C1.30577 9.47064 1.0997 9.1412 1.09961 8.75C1.09974 8.19409 1.5075 7.76835 1.98535 7.47461C2.47998 7.17067 3.1553 6.93761 3.92383 6.78906C4.14053 6.74721 4.35042 6.8889 4.39258 7.10547C4.43447 7.32226 4.29288 7.53215 4.07617 7.57422C3.36362 7.71192 2.78913 7.91979 2.4043 8.15625C2.00292 8.40298 1.90053 8.61892 1.90039 8.75C1.90048 8.84183 1.94629 8.97324 2.12402 9.13672C2.30239 9.30072 2.583 9.4665 2.96289 9.61426C3.72035 9.90882 4.79406 10.0996 6 10.0996C7.20595 10.0996 8.27965 9.90882 9.03711 9.61426C9.417 9.4665 9.69761 9.30072 9.87598 9.13672C10.0537 8.97324 10.0995 8.84183 10.0996 8.75C10.0995 8.61892 9.99708 8.40298 9.5957 8.15625C9.21087 7.91979 8.63638 7.71192 7.92383 7.57422C7.70712 7.53215 7.56553 7.32226 7.60742 7.10547C7.64958 6.88889 7.85947 6.74721 8.07617 6.78906Z" fill="currentColor"/> <path d="M6 1.09961C7.04934 1.09961 7.90039 1.95066 7.90039 3C7.90039 3.91187 7.25738 4.67241 6.40039 4.85645V8.5C6.40039 8.72091 6.22091 8.90039 6 8.90039C5.77909 8.90039 5.59961 8.72091 5.59961 8.5V4.85645C4.74262 4.67241 4.09961 3.91187 4.09961 3C4.09961 1.95066 4.95066 1.09961 6 1.09961ZM6 1.90039C5.39249 1.90039 4.90039 2.39249 4.90039 3C4.90039 3.60751 5.39249 4.09961 6 4.09961C6.60751 4.09961 7.09961 3.60751 7.09961 3C7.09961 2.39249 6.60751 1.90039 6 1.90039Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    xYnm: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "presentation-light-12",
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
                    x: 1.320313,
                    y: 1.052734,
                    width: 9.300781,
                    height: 9.764648
                },
                visualBounds: {
                    x: 1.320313,
                    y: 1.052734,
                    width: 9.300781,
                    height: 9.764648
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.320313,
                    y: 1.052734,
                    width: 9.300781,
                    height: 9.764648
                },
                center: {
                    x: 5.970704,
                    y: 5.935058
                },
                insets: {
                    top: 1.052734,
                    right: 1.378906,
                    bottom: 1.182618,
                    left: 1.320313
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 5.970704,
                        y: 5.935058
                    },
                    foreground: {
                        x: 5.970704,
                        y: 5.935058
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M5.9707 1.05273C6.19162 1.05273 6.37109 1.23221 6.37109 1.45312V1.92285H8.7207C9.77001 1.92285 10.621 2.77395 10.6211 3.82324V6.82324C10.6211 7.87258 9.77004 8.72363 8.7207 8.72363H8.37305L9.71289 10.1436C9.864 10.3042 9.85654 10.5575 9.69629 10.709C9.53568 10.8603 9.28242 10.8528 9.13086 10.6924L7.27344 8.72363H6.40039V10.418C6.40024 10.6388 6.22082 10.8174 6 10.8174C5.77918 10.8174 5.59976 10.6388 5.59961 10.418V8.72363H4.72656L2.86914 10.6924C2.7176 10.8529 2.46438 10.8603 2.30371 10.709C2.14315 10.5574 2.13575 10.3042 2.28711 10.1436L3.62695 8.72363H3.2207C2.17136 8.72363 1.32031 7.87258 1.32031 6.82324V3.82324C1.32037 2.77395 2.1714 1.92285 3.2207 1.92285H5.57031V1.45312C5.57031 1.23221 5.74979 1.05273 5.9707 1.05273ZM3.2207 2.72363C2.61323 2.72363 2.12115 3.21578 2.12109 3.82324V6.82324C2.12109 7.43076 2.61319 7.92285 3.2207 7.92285H8.7207C9.32822 7.92285 9.82031 7.43076 9.82031 6.82324V3.82324C9.82026 3.21578 9.32818 2.72363 8.7207 2.72363H3.2207Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    wkRR: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "presentation-light-16",
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
                    x: 1.788086,
                    y: 1.412109,
                    width: 12.383789,
                    height: 13.00293
                },
                visualBounds: {
                    x: 1.788086,
                    y: 1.412109,
                    width: 12.383789,
                    height: 13.00293
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.788086,
                    y: 1.412109,
                    width: 12.383789,
                    height: 13.00293
                },
                center: {
                    x: 7.979981,
                    y: 7.913574
                },
                insets: {
                    top: 1.412109,
                    right: 1.828125,
                    bottom: 1.584961,
                    left: 1.788086
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 7.979981,
                        y: 7.913574
                    },
                    foreground: {
                        x: 7.979981,
                        y: 7.913574
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M7.98047 1.41211C8.27042 1.41211 8.50586 1.64755 8.50586 1.9375V2.57227H11.6465C13.041 2.57227 14.1718 3.7032 14.1719 5.09766V9.09766C14.1719 10.4922 13.041 11.623 11.6465 11.623H11.165L12.9639 13.5303C13.1627 13.7411 13.1531 14.0735 12.9424 14.2725C12.7316 14.4712 12.3992 14.4616 12.2002 14.251L9.7207 11.623H8.54492V13.8906C8.54472 14.1804 8.30935 14.415 8.01953 14.415C7.72971 14.415 7.49435 14.1804 7.49414 13.8906V11.623H6.31836L3.83887 14.251C3.6399 14.4616 3.3075 14.4712 3.09668 14.2725C2.88594 14.0735 2.8764 13.7411 3.0752 13.5303L4.87402 11.623H4.31348C2.91896 11.623 1.78809 10.4922 1.78809 9.09766V5.09766C1.78816 3.7032 2.91901 2.57227 4.31348 2.57227H7.45508V1.9375C7.45508 1.64755 7.69052 1.41211 7.98047 1.41211ZM4.31348 3.62305C3.4989 3.62305 2.83894 4.2831 2.83887 5.09766V9.09766C2.83887 9.91228 3.49886 10.5723 4.31348 10.5723H11.6465C12.4611 10.5723 13.1221 9.91228 13.1221 9.09766V5.09766C13.122 4.2831 12.4611 3.62305 11.6465 3.62305H4.31348Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    Upt1: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "presentation-light-20",
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
                    x: 2.241699,
                    y: 1.756836,
                    width: 15.49707,
                    height: 16.270508
                },
                visualBounds: {
                    x: 2.241699,
                    y: 1.756836,
                    width: 15.49707,
                    height: 16.270508
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 2.241699,
                    y: 1.756836,
                    width: 15.49707,
                    height: 16.270508
                },
                center: {
                    x: 9.990234,
                    y: 9.89209
                },
                insets: {
                    top: 1.756836,
                    right: 2.261231,
                    bottom: 1.972656,
                    left: 2.241699
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 9.990234,
                        y: 9.89209
                    },
                    foreground: {
                        x: 9.990234,
                        y: 9.89209
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M9.99072 1.75684C10.3578 1.7571 10.6558 2.05477 10.6558 2.42188V3.20703H14.5737C16.3215 3.20721 17.7387 4.62428 17.7388 6.37207V11.3721C17.7388 13.1199 16.3216 14.5369 14.5737 14.5371H13.9888L16.2251 16.9062C16.4772 17.1734 16.4649 17.5946 16.1978 17.8467C15.9307 18.0983 15.5103 18.0861 15.2583 17.8193L12.1616 14.5371H10.7046V17.3633C10.7043 17.7303 10.4067 18.0273 10.0396 18.0273C9.67244 18.0273 9.37477 17.7303 9.37451 17.3633V14.5371H7.9165L4.81982 17.8193C4.56786 18.0861 4.14744 18.0983 3.88037 17.8467C3.61325 17.5946 3.60097 17.1734 3.85303 16.9062L6.08936 14.5371H5.40674C3.65876 14.5371 2.2417 13.1201 2.2417 11.3721V6.37207C2.2418 4.62417 3.65882 3.20703 5.40674 3.20703H9.32568V2.42188C9.32568 2.05461 9.62345 1.75684 9.99072 1.75684ZM5.40674 4.53711C4.39335 4.53711 3.57187 5.35871 3.57178 6.37207V11.3721C3.57178 12.3855 4.3933 13.207 5.40674 13.207H14.5737C15.587 13.2069 16.4087 12.3854 16.4087 11.3721V6.37207C16.4086 5.35882 15.587 4.53729 14.5737 4.53711H5.40674Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    Q4Pk: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "star-fill-regular-12",
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
                    x: .311523,
                    y: .492554,
                    width: 11.376221,
                    height: 10.898071
                },
                visualBounds: {
                    x: .311523,
                    y: .492554,
                    width: 11.376221,
                    height: 10.898071
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: .311523,
                    y: .492554,
                    width: 11.376221,
                    height: 10.898071
                },
                center: {
                    x: 5.999634,
                    y: 5.94159
                },
                insets: {
                    top: .492554,
                    right: .312256,
                    bottom: .609375,
                    left: .311523
                },
                anchors: {
                    frame: {
                        x: 6,
                        y: 6
                    },
                    ink: {
                        x: 5.999634,
                        y: 5.94159
                    },
                    foreground: {
                        x: 5.999634,
                        y: 5.94159
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M5.36565 0.80407C5.68219 0.388703 6.31765 0.388727 6.6342 0.80407L6.6967 0.899774L8.14787 3.47399L11.0453 4.05895C11.6562 4.18222 11.8978 4.92632 11.476 5.38513L9.47502 7.55993L9.81487 10.4974C9.88632 11.1165 9.25359 11.5761 8.68694 11.3168L5.99944 10.0853L3.31194 11.3168C2.7454 11.5757 2.11262 11.1163 2.18401 10.4974L2.52385 7.56091L0.522875 5.38513C0.101679 4.92646 0.343272 4.18259 0.953539 4.05895L3.85002 3.47399L5.30315 0.899774L5.36565 0.80407Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    mvaN: (function(a, b, c) {
        let d = (0, (c("gdLt")).a)({
            name: "text-page-light-12",
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
                    x: 1.849609,
                    y: 1.349609,
                    width: 8.300781,
                    height: 9.300781
                },
                visualBounds: {
                    x: 1.849609,
                    y: 1.349609,
                    width: 8.300781,
                    height: 9.300781
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.849609,
                    y: 1.349609,
                    width: 8.300781,
                    height: 9.300781
                },
                center: {
                    x: 6,
                    y: 6
                },
                insets: {
                    top: 1.349609,
                    right: 1.84961,
                    bottom: 1.34961,
                    left: 1.849609
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
            body: '<path d="M6.5 6.84961C6.72091 6.84961 6.90039 7.02909 6.90039 7.25C6.90039 7.47091 6.72091 7.65039 6.5 7.65039H4.5C4.27909 7.65039 4.09961 7.47091 4.09961 7.25C4.09961 7.02909 4.27909 6.84961 4.5 6.84961H6.5Z" fill="currentColor"/> <path d="M7.5 4.59961C7.72091 4.59961 7.90039 4.77909 7.90039 5C7.90039 5.22091 7.72091 5.40039 7.5 5.40039H4.5C4.27909 5.40039 4.09961 5.22091 4.09961 5C4.09961 4.77909 4.27909 4.59961 4.5 4.59961H7.5Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.9502 1.34961C9.16507 1.34972 10.1503 2.33493 10.1504 3.5498V8.4502C10.1503 9.66507 9.16507 10.6503 7.9502 10.6504H4.0498C2.83493 10.6503 1.84971 9.66507 1.84961 8.4502V3.5498C1.84972 2.33493 2.83493 1.34971 4.0498 1.34961H7.9502ZM4.0498 2.15039C3.27676 2.1505 2.6505 2.77676 2.65039 3.5498V8.4502C2.6505 9.22324 3.27676 9.8495 4.0498 9.84961H7.9502C8.72324 9.8495 9.3495 9.22324 9.34961 8.4502V3.5498C9.3495 2.77676 8.72324 2.1505 7.9502 2.15039H4.0498Z" fill="currentColor"/>'
        });
        c.d(b, {}, {
            a: d
        })
    }),
    ty1V: (function(a, b, c) {
        var d = c("zd8w"),
            e = c("Fc3g"),
            f = c("yAzs"),
            g = c("zWxU"),
            h = c("lVCP"),
            i = c("Zu17"),
            j = c("k5JT"),
            k = c("WQq2"),
            l = c("duD4"),
            m = c("kUVq"),
            n = c("ABep"),
            o = Object.defineProperty,
            p = (a, b) => o(a, "name", {
                value: b,
                configurable: !0
            });

        function q(a, b) {
            return d.useReducer((a, c) => b[a][c] ?? a, a)
        }
        p(q, "useStateMachine");
        var r = "ScrollArea",
            [s, t] = (0, g.a)(r),
            [u, v] = s(r),
            w = d.forwardRef(p(function(a, b) {
                let {
                    __scopeScrollArea: c,
                    type: f = "hover",
                    dir: g,
                    scrollHideDelay: i = 600,
                    ...k
                } = a, [l, m] = d.useState(null), [o, p] = d.useState(null), [q, r] = d.useState(null), [s, t] = d.useState(null), [v, w] = d.useState(null), [x, y] = d.useState(0), [z, A] = d.useState(0), [B, C] = d.useState(!1), [D, E] = d.useState(!1), F = (0, h.b)(b, m), G = (0, j.useDirection)(g);
                return (0, n.jsx)(u, {
                    scope: c,
                    type: f,
                    dir: G,
                    scrollHideDelay: i,
                    scrollArea: l,
                    viewport: o,
                    onViewportChange: p,
                    content: q,
                    onContentChange: r,
                    scrollbarX: s,
                    onScrollbarXChange: t,
                    scrollbarXEnabled: B,
                    onScrollbarXEnabledChange: C,
                    scrollbarY: v,
                    onScrollbarYChange: w,
                    scrollbarYEnabled: D,
                    onScrollbarYEnabledChange: E,
                    onCornerWidthChange: y,
                    onCornerHeightChange: A,
                    children: (0, n.jsx)(e.a.div, {
                        dir: G,
                        ...k,
                        ref: F,
                        style: {
                            position: "relative",
                            "--radix-scroll-area-corner-width": x + "px",
                            "--radix-scroll-area-corner-height": z + "px",
                            ...a.style
                        }
                    })
                })
            }, "ScrollArea")),
            x = d.forwardRef(p(function(a, b) {
                let {
                    __scopeScrollArea: c,
                    children: f,
                    nonce: g,
                    ...i
                } = a, j = v("ScrollAreaViewport", c), k = d.useRef(null), l = (0, h.b)(b, k, j.onViewportChange);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(y, {
                        nonce: g
                    }), (0, n.jsx)(e.a.div, {
                        "data-radix-scroll-area-viewport": "",
                        ...i,
                        ref: l,
                        style: {
                            overflowX: j.scrollbarXEnabled ? "scroll" : "hidden",
                            overflowY: j.scrollbarYEnabled ? "scroll" : "hidden",
                            ...a.style
                        },
                        children: (0, n.jsx)("div", {
                            ref: j.onContentChange,
                            style: {
                                minWidth: "100%",
                                display: "table"
                            },
                            children: f
                        })
                    })]
                })
            }, "ScrollAreaViewport")),
            y = d.memo(p(function({
                nonce: a
            }) {
                return (0, n.jsx)("style", {
                    dangerouslySetInnerHTML: {
                        __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                    },
                    nonce: a
                })
            }, "ScrollAreaViewportStyle"), (a, b) => a.nonce === b.nonce),
            z = "ScrollAreaScrollbar",
            A = d.forwardRef(p(function(a, b) {
                let {
                    forceMount: c,
                    ...e
                } = a, f = v(z, a.__scopeScrollArea), {
                    onScrollbarXEnabledChange: g,
                    onScrollbarYEnabledChange: h
                } = f, i = "horizontal" === a.orientation;
                return d.useEffect(() => (i ? g(!0) : h(!0), () => {
                    i ? g(!1) : h(!1)
                }), [i, g, h]), "hover" === f.type ? (0, n.jsx)(B, {
                    ...e,
                    ref: b,
                    forceMount: c
                }) : "scroll" === f.type ? (0, n.jsx)(C, {
                    ...e,
                    ref: b,
                    forceMount: c
                }) : "auto" === f.type ? (0, n.jsx)(D, {
                    ...e,
                    ref: b,
                    forceMount: c
                }) : "always" === f.type ? (0, n.jsx)(E, {
                    ...e,
                    ref: b,
                    "data-state": "visible"
                }) : null
            }, "ScrollAreaScrollbar")),
            B = d.forwardRef(p(function(a, b) {
                let {
                    forceMount: c,
                    ...e
                } = a, g = v(z, a.__scopeScrollArea), [h, i] = d.useState(!1);
                return d.useEffect(() => {
                    let a = g.scrollArea,
                        b = 0;
                    if (a) {
                        let c = p(() => {
                                window.clearTimeout(b), i(!0)
                            }, "handlePointerEnter"),
                            d = p(() => {
                                b = window.setTimeout(() => i(!1), g.scrollHideDelay)
                            }, "handlePointerLeave");
                        return a.addEventListener("pointerenter", c), a.addEventListener("pointerleave", d), () => {
                            window.clearTimeout(b), a.removeEventListener("pointerenter", c), a.removeEventListener("pointerleave", d)
                        }
                    }
                }, [g.scrollArea, g.scrollHideDelay]), (0, n.jsx)(f.a, {
                    present: c || h,
                    children: (0, n.jsx)(D, {
                        "data-state": h ? "visible" : "hidden",
                        ...e,
                        ref: b
                    })
                })
            }, "ScrollAreaScrollbarHover")),
            C = d.forwardRef(p(function(a, b) {
                let {
                    forceMount: c,
                    ...e
                } = a, g = v(z, a.__scopeScrollArea), h = "horizontal" === a.orientation, i = V(() => k("SCROLL_END"), 100), [j, k] = q("hidden", {
                    hidden: {
                        SCROLL: "scrolling"
                    },
                    scrolling: {
                        SCROLL_END: "idle",
                        POINTER_ENTER: "interacting"
                    },
                    interacting: {
                        SCROLL: "interacting",
                        POINTER_LEAVE: "idle"
                    },
                    idle: {
                        HIDE: "hidden",
                        SCROLL: "scrolling",
                        POINTER_ENTER: "interacting"
                    }
                });
                return d.useEffect(() => {
                    if ("idle" === j) {
                        let a = window.setTimeout(() => k("HIDE"), g.scrollHideDelay);
                        return () => window.clearTimeout(a)
                    }
                }, [j, g.scrollHideDelay, k]), d.useEffect(() => {
                    let a = g.viewport,
                        b = h ? "scrollLeft" : "scrollTop";
                    if (a) {
                        let c = a[b],
                            d = p(() => {
                                let d = a[b];
                                c !== d && (k("SCROLL"), i()), c = d
                            }, "handleScroll");
                        return a.addEventListener("scroll", d), () => a.removeEventListener("scroll", d)
                    }
                }, [g.viewport, h, k, i]), (0, n.jsx)(f.a, {
                    present: c || "hidden" !== j,
                    children: (0, n.jsx)(E, {
                        "data-state": "hidden" === j ? "hidden" : "visible",
                        ...e,
                        ref: b,
                        onPointerEnter: (0, m.a)(a.onPointerEnter, () => k("POINTER_ENTER")),
                        onPointerLeave: (0, m.a)(a.onPointerLeave, () => k("POINTER_LEAVE"))
                    })
                })
            }, "ScrollAreaScrollbarScroll")),
            D = d.forwardRef(p(function(a, b) {
                let c = v(z, a.__scopeScrollArea),
                    {
                        forceMount: e,
                        ...g
                    } = a,
                    [h, i] = d.useState(!1),
                    j = "horizontal" === a.orientation,
                    k = V(() => {
                        if (c.viewport) {
                            let a = c.viewport.offsetWidth < c.viewport.scrollWidth,
                                b = c.viewport.offsetHeight < c.viewport.scrollHeight;
                            i(j ? a : b)
                        }
                    }, 10);
                return W(c.viewport, k), W(c.content, k), (0, n.jsx)(f.a, {
                    present: e || h,
                    children: (0, n.jsx)(E, {
                        "data-state": h ? "visible" : "hidden",
                        ...g,
                        ref: b
                    })
                })
            }, "ScrollAreaScrollbarAuto")),
            E = d.forwardRef(p(function(a, b) {
                let {
                    orientation: c = "vertical",
                    ...e
                } = a, f = v(z, a.__scopeScrollArea), g = d.useRef(null), h = d.useRef(0), [i, j] = d.useState({
                    content: 0,
                    viewport: 0,
                    scrollbar: {
                        size: 0,
                        paddingStart: 0,
                        paddingEnd: 0
                    }
                }), k = O(i.viewport, i.content), l = {
                    ...e,
                    sizes: i,
                    onSizesChange: j,
                    hasThumb: !!(k > 0 && k < 1),
                    onThumbChange: p(a => g.current = a, "onThumbChange"),
                    onThumbPointerUp: p(() => h.current = 0, "onThumbPointerUp"),
                    onThumbPointerDown: p(a => h.current = a, "onThumbPointerDown")
                };

                function m(a, b) {
                    return Q(a, h.current, i, b)
                }
                return (p(m, "getScrollPosition"), "horizontal" === c) ? (0, n.jsx)(F, {
                    ...l,
                    ref: b,
                    onThumbPositionChange: () => {
                        if (f.viewport && g.current) {
                            let a = R(f.viewport.scrollLeft, i, f.dir);
                            g.current.style.transform = `translate3d(${a}px, 0, 0)`
                        }
                    },
                    onWheelScroll: a => {
                        f.viewport && (f.viewport.scrollLeft = a)
                    },
                    onDragScroll: a => {
                        f.viewport && (f.viewport.scrollLeft = m(a, f.dir))
                    }
                }) : "vertical" === c ? (0, n.jsx)(G, {
                    ...l,
                    ref: b,
                    onThumbPositionChange: () => {
                        if (f.viewport && g.current) {
                            let a = R(f.viewport.scrollTop, i);
                            g.current.style.transform = `translate3d(0, ${a}px, 0)`
                        }
                    },
                    onWheelScroll: a => {
                        f.viewport && (f.viewport.scrollTop = a)
                    },
                    onDragScroll: a => {
                        f.viewport && (f.viewport.scrollTop = m(a))
                    }
                }) : null
            }, "ScrollAreaScrollbarVisible")),
            F = d.forwardRef(p(function(a, b) {
                let {
                    sizes: c,
                    onSizesChange: e,
                    ...f
                } = a, g = v(z, a.__scopeScrollArea), [i, j] = d.useState(), k = d.useRef(null), l = (0, h.b)(b, k, g.onScrollbarXChange);
                return d.useEffect(() => {
                    k.current && j(getComputedStyle(k.current))
                }, [k]), (0, n.jsx)(J, {
                    "data-orientation": "horizontal",
                    ...f,
                    ref: l,
                    sizes: c,
                    style: {
                        bottom: 0,
                        left: "rtl" === g.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                        right: "ltr" === g.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                        "--radix-scroll-area-thumb-width": P(c) + "px",
                        ...a.style
                    },
                    onThumbPointerDown: b => a.onThumbPointerDown(b.x),
                    onDragScroll: b => a.onDragScroll(b.x),
                    onWheelScroll: (b, c) => {
                        if (g.viewport) {
                            let d = g.viewport.scrollLeft + b.deltaX;
                            a.onWheelScroll(d), T(d, c) && b.preventDefault()
                        }
                    },
                    onResize: () => {
                        k.current && g.viewport && i && e({
                            content: g.viewport.scrollWidth,
                            viewport: g.viewport.offsetWidth,
                            scrollbar: {
                                size: k.current.clientWidth,
                                paddingStart: N(i.paddingLeft),
                                paddingEnd: N(i.paddingRight)
                            }
                        })
                    }
                })
            }, "ScrollAreaScrollbarX")),
            G = d.forwardRef(p(function(a, b) {
                let {
                    sizes: c,
                    onSizesChange: e,
                    ...f
                } = a, g = v(z, a.__scopeScrollArea), [i, j] = d.useState(), k = d.useRef(null), l = (0, h.b)(b, k, g.onScrollbarYChange);
                return d.useEffect(() => {
                    k.current && j(getComputedStyle(k.current))
                }, [k]), (0, n.jsx)(J, {
                    "data-orientation": "vertical",
                    ...f,
                    ref: l,
                    sizes: c,
                    style: {
                        top: 0,
                        right: "ltr" === g.dir ? 0 : void 0,
                        left: "rtl" === g.dir ? 0 : void 0,
                        bottom: "var(--radix-scroll-area-corner-height)",
                        "--radix-scroll-area-thumb-height": P(c) + "px",
                        ...a.style
                    },
                    onThumbPointerDown: b => a.onThumbPointerDown(b.y),
                    onDragScroll: b => a.onDragScroll(b.y),
                    onWheelScroll: (b, c) => {
                        if (g.viewport) {
                            let d = g.viewport.scrollTop + b.deltaY;
                            a.onWheelScroll(d), T(d, c) && b.preventDefault()
                        }
                    },
                    onResize: () => {
                        k.current && g.viewport && i && e({
                            content: g.viewport.scrollHeight,
                            viewport: g.viewport.offsetHeight,
                            scrollbar: {
                                size: k.current.clientHeight,
                                paddingStart: N(i.paddingTop),
                                paddingEnd: N(i.paddingBottom)
                            }
                        })
                    }
                })
            }, "ScrollAreaScrollbarY")),
            [H, I] = s(z),
            J = d.forwardRef(p(function(a, b) {
                let {
                    __scopeScrollArea: c,
                    sizes: f,
                    hasThumb: g,
                    onThumbChange: j,
                    onThumbPointerUp: k,
                    onThumbPointerDown: l,
                    onThumbPositionChange: o,
                    onDragScroll: q,
                    onWheelScroll: r,
                    onResize: s,
                    ...t
                } = a, u = v(z, c), [w, x] = d.useState(null), y = (0, h.b)(b, x), A = d.useRef(null), B = d.useRef(""), C = u.viewport, D = f.content - f.viewport, E = (0, i.a)(r), F = (0, i.a)(o), G = V(s, 10);

                function I(a) {
                    A.current && q({
                        x: (a.clientX - A.current.left) * w.offsetWidth / A.current.width,
                        y: (a.clientY - A.current.top) * w.offsetHeight / A.current.height
                    })
                }
                return p(I, "handleDragScroll"), d.useEffect(() => {
                    let a = p(a => {
                        let b = a.target;
                        w?.contains(b) && E(a, D)
                    }, "handleWheel");
                    return document.addEventListener("wheel", a, {
                        passive: !1
                    }), () => document.removeEventListener("wheel", a, {
                        passive: !1
                    })
                }, [C, w, D, E]), d.useEffect(F, [f, F]), W(w, G), W(u.content, G), (0, n.jsx)(H, {
                    scope: c,
                    scrollbar: w,
                    hasThumb: g,
                    onThumbChange: (0, i.a)(j),
                    onThumbPointerUp: (0, i.a)(k),
                    onThumbPositionChange: F,
                    onThumbPointerDown: (0, i.a)(l),
                    children: (0, n.jsx)(e.a.div, {
                        ...t,
                        ref: y,
                        style: {
                            position: "absolute",
                            ...t.style
                        },
                        onPointerDown: (0, m.a)(a.onPointerDown, a => {
                            0 === a.button && (a.target.setPointerCapture(a.pointerId), A.current = w.getBoundingClientRect(), B.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", u.viewport && (u.viewport.style.scrollBehavior = "auto"), I(a))
                        }),
                        onPointerMove: (0, m.a)(a.onPointerMove, I),
                        onPointerUp: (0, m.a)(a.onPointerUp, a => {
                            let b = a.target;
                            b.hasPointerCapture(a.pointerId) && b.releasePointerCapture(a.pointerId), document.body.style.webkitUserSelect = B.current, u.viewport && (u.viewport.style.scrollBehavior = ""), A.current = null
                        })
                    })
                })
            }, "ScrollAreaScrollbarImpl")),
            K = "ScrollAreaThumb",
            L = d.forwardRef(p(function(a, b) {
                let {
                    forceMount: c,
                    ...d
                } = a, e = I(K, a.__scopeScrollArea);
                return (0, n.jsx)(f.a, {
                    present: c || e.hasThumb,
                    children: (0, n.jsx)(M, {
                        ref: b,
                        ...d
                    })
                })
            }, "ScrollAreaThumb")),
            M = d.forwardRef(p(function(a, b) {
                let {
                    __scopeScrollArea: c,
                    style: f,
                    ...g
                } = a, i = v(K, c), j = I(K, c), {
                    onThumbPositionChange: k
                } = j, l = (0, h.b)(b, j.onThumbChange), o = d.useRef(void 0), q = V(() => {
                    o.current && (o.current(), o.current = void 0)
                }, 100);
                return d.useEffect(() => {
                    let a = i.viewport;
                    if (a) {
                        let b = p(() => {
                            q(), o.current || (o.current = U(a, k), k())
                        }, "handleScroll");
                        return k(), a.addEventListener("scroll", b), () => {
                            a.removeEventListener("scroll", b), o.current?.(), o.current = void 0
                        }
                    }
                }, [i.viewport, q, k]), (0, n.jsx)(e.a.div, {
                    "data-state": j.hasThumb ? "visible" : "hidden",
                    ...g,
                    ref: l,
                    style: {
                        width: "var(--radix-scroll-area-thumb-width)",
                        height: "var(--radix-scroll-area-thumb-height)",
                        ...f
                    },
                    onPointerDownCapture: (0, m.a)(a.onPointerDownCapture, a => {
                        let b = a.target.getBoundingClientRect(),
                            c = j.scrollbar,
                            d = c.getBoundingClientRect(),
                            e = (a.clientX - b.left) * c.offsetWidth / d.width,
                            f = (a.clientY - b.top) * c.offsetHeight / d.height;
                        j.onThumbPointerDown({
                            x: e,
                            y: f
                        })
                    }),
                    onPointerUp: (0, m.a)(a.onPointerUp, j.onThumbPointerUp)
                })
            }, "ScrollAreaThumbImpl"));

        function N(a) {
            return a ? parseInt(a, 10) : 0
        }

        function O(a, b) {
            let c = a / b;
            return isNaN(c) ? 0 : c
        }

        function P(a) {
            let b = O(a.viewport, a.content),
                c = a.scrollbar.paddingStart + a.scrollbar.paddingEnd;
            return Math.max((a.scrollbar.size - c) * b, 18)
        }

        function Q(a, b, c, d = "ltr") {
            let e = P(c),
                f = b || e / 2,
                g = c.scrollbar.paddingStart + f,
                h = c.scrollbar.size - c.scrollbar.paddingEnd - (e - f),
                i = c.content - c.viewport;
            return S([g, h], "ltr" === d ? [0, i] : [-1 * i, 0])(a)
        }

        function R(a, b, c = "ltr") {
            let d = P(b),
                e = b.scrollbar.paddingStart + b.scrollbar.paddingEnd,
                f = b.scrollbar.size - e,
                g = b.content - b.viewport,
                h = (0, l.a)(a, "ltr" === c ? [0, g] : [-1 * g, 0]);
            return S([0, g], [0, f - d])(h)
        }

        function S(a, b) {
            return c => {
                if (a[0] === a[1] || b[0] === b[1]) return b[0];
                let d = (b[1] - b[0]) / (a[1] - a[0]);
                return b[0] + d * (c - a[0])
            }
        }

        function T(a, b) {
            return a > 0 && a < b
        }
        p(N, "toInt"), p(O, "getThumbRatio"), p(P, "getThumbSize"), p(Q, "getScrollPositionFromPointer"), p(R, "getThumbOffsetFromScroll"), p(S, "linearScale"), p(T, "isScrollingWithinScrollbarBounds");
        var U = p((a, b = () => {}) => {
            let c = {
                    left: a.scrollLeft,
                    top: a.scrollTop
                },
                d = 0;
            return (p(function e() {
                let f = {
                        left: a.scrollLeft,
                        top: a.scrollTop
                    },
                    g = c.left !== f.left,
                    h = c.top !== f.top;
                (g || h) && b(), c = f, d = window.requestAnimationFrame(e)
            }, "loop"))(), () => window.cancelAnimationFrame(d)
        }, "addUnlinkedScrollListener");

        function V(a, b) {
            let c = (0, i.a)(a),
                e = d.useRef(0);
            return d.useEffect(() => () => window.clearTimeout(e.current), []), d.useCallback(() => {
                window.clearTimeout(e.current), e.current = window.setTimeout(c, b)
            }, [c, b])
        }

        function W(a, b) {
            let c = (0, i.a)(b);
            (0, k.a)(() => {
                let b = 0;
                if (a) {
                    let d = new ResizeObserver(() => {
                        cancelAnimationFrame(b), b = window.requestAnimationFrame(c)
                    });
                    return d.observe(a), () => {
                        window.cancelAnimationFrame(b), d.unobserve(a)
                    }
                }
            }, [a, c])
        }
        p(V, "useDebounceCallback"), p(W, "useResizeObserver"), c.d(b, {}, {
            a: w,
            b: A,
            c: L,
            d: x
        })
    }),
    FER9: (function(a, b) {
        let c = String.raw,
            d = c`\p{Emoji}(?:\p{EMod}|[\u{E0020}-\u{E007E}]+\u{E007F}|\uFE0F?\u20E3?)`;
        b.a = () => RegExp(c`\p{RI}{2}|(?![#*\d](?!\uFE0F?\u20E3))${d}(?:\u200D${d})*`, "gu")
    })
};
(() => {
    "use strict";
    var e = {
            29: function(e, t, r) {
                var i, n = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                        void 0 === i && (i = r);
                        var n = Object.getOwnPropertyDescriptor(t, r);
                        n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                            enumerable: !0,
                            get: function() {
                                return t[r]
                            }
                        }), Object.defineProperty(e, i, n)
                    } : function(e, t, r, i) {
                        void 0 === i && (i = r), e[i] = t[r]
                    }),
                    s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e.default = t
                    }),
                    o = this && this.__importStar || (i = function(e) {
                        return i = Object.getOwnPropertyNames || function(e) {
                            var t = [];
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                            return t
                        }, i(e)
                    }, function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r = i(e), o = 0; o < r.length; o++) "default" !== r[o] && n(t, e, r[o]);
                        return s(t, e), t
                    });
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.SizeStatusBarEntry = void 0;
                const a = o(r(398)),
                    c = r(933);
                class u extends c.PreviewStatusBarEntry {
                    constructor() {
                        super("status.imagePreview.size", a.l10n.t("Image Size"), a.StatusBarAlignment.Right, 101)
                    }
                    show(e, t) {
                        this.showItem(e, t)
                    }
                }
                t.SizeStatusBarEntry = u
            },
            31: function(e, t, r) {
                var i, n = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                        void 0 === i && (i = r);
                        var n = Object.getOwnPropertyDescriptor(t, r);
                        n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                            enumerable: !0,
                            get: function() {
                                return t[r]
                            }
                        }), Object.defineProperty(e, i, n)
                    } : function(e, t, r, i) {
                        void 0 === i && (i = r), e[i] = t[r]
                    }),
                    s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e.default = t
                    }),
                    o = this && this.__importStar || (i = function(e) {
                        return i = Object.getOwnPropertyNames || function(e) {
                            var t = [];
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                            return t
                        }, i(e)
                    }, function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r = i(e), o = 0; o < r.length; o++) "default" !== r[o] && n(t, e, r[o]);
                        return s(t, e), t
                    });
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.ZoomStatusBarEntry = void 0;
                const a = o(r(398)),
                    c = r(933),
                    u = "_imagePreview.selectZoomLevel";
                class h extends c.PreviewStatusBarEntry {
                    constructor() {
                        super("status.imagePreview.zoom", a.l10n.t("Image Zoom"), a.StatusBarAlignment.Right, 102), this._onDidChangeScale = this._register(new a.EventEmitter), this.onDidChangeScale = this._onDidChangeScale.event, this._register(a.commands.registerCommand(u, async () => {
                            const e = [10, 5, 2, 1, .5, .2, "fit"].map(e => ({
                                    label: this.zoomLabel(e),
                                    scale: e
                                })),
                                t = await a.window.showQuickPick(e, {
                                    placeHolder: a.l10n.t("Select zoom level")
                                });
                            t && this._onDidChangeScale.fire({
                                scale: t.scale
                            })
                        })), this.entry.command = u
                    }
                    show(e, t) {
                        this.showItem(e, this.zoomLabel(t))
                    }
                    zoomLabel(e) {
                        return "fit" === e ? a.l10n.t("Whole Image") : `${Math.round(100*e)}%`
                    }
                }
                t.ZoomStatusBarEntry = h
            },
            125: function(e, t, r) {
                var i, n = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                        void 0 === i && (i = r);
                        var n = Object.getOwnPropertyDescriptor(t, r);
                        n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                            enumerable: !0,
                            get: function() {
                                return t[r]
                            }
                        }), Object.defineProperty(e, i, n)
                    } : function(e, t, r, i) {
                        void 0 === i && (i = r), e[i] = t[r]
                    }),
                    s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e.default = t
                    }),
                    o = this && this.__importStar || (i = function(e) {
                        return i = Object.getOwnPropertyNames || function(e) {
                            var t = [];
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                            return t
                        }, i(e)
                    }, function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r = i(e), o = 0; o < r.length; o++) "default" !== r[o] && n(t, e, r[o]);
                        return s(t, e), t
                    });
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.MediaPreview = void 0, t.reopenAsText = function(e, t) {
                    a.commands.executeCommand("vscode.openWith", e, "default", t)
                };
                const a = o(r(398)),
                    c = r(756),
                    u = r(543);
                class h extends u.Disposable {
                    constructor(e, t, r, i) {
                        super(), this.resource = t, this.webviewEditor = r, this.binarySizeStatusBarEntry = i, this.previewState = 1, r.webview.options = {
                            enableScripts: !0,
                            enableForms: !1,
                            localResourceRoots: [c.Utils.dirname(t), e]
                        }, this._register(r.onDidChangeViewState(() => {
                            this.updateState()
                        })), this._register(r.onDidDispose(() => {
                            this.previewState = 0, this.dispose()
                        }));
                        const n = this._register(a.workspace.createFileSystemWatcher(new a.RelativePattern(t, "*")));
                        this._register(n.onDidChange(e => {
                            e.toString() === this.resource.toString() && (this.updateBinarySize(), this.render())
                        })), this._register(n.onDidDelete(e => {
                            e.toString() === this.resource.toString() && this.webviewEditor.dispose()
                        }))
                    }
                    dispose() {
                        super.dispose(), this.binarySizeStatusBarEntry.hide(this)
                    }
                    updateBinarySize() {
                        a.workspace.fs.stat(this.resource).then(({
                            size: e
                        }) => {
                            this._binarySize = e, this.updateState()
                        })
                    }
                    async render() {
                        if (0 === this.previewState) return;
                        const e = await this.getWebviewContents();
                        0 !== this.previewState && (this.webviewEditor.webview.html = e)
                    }
                    updateState() {
                        0 !== this.previewState && (this.webviewEditor.active ? (this.previewState = 2, this.binarySizeStatusBarEntry.show(this, this._binarySize)) : (this.binarySizeStatusBarEntry.hide(this), this.previewState = 1))
                    }
                }
                t.MediaPreview = h
            },
            289: function(e, t, r) {
                var i, n = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                        void 0 === i && (i = r);
                        var n = Object.getOwnPropertyDescriptor(t, r);
                        n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                            enumerable: !0,
                            get: function() {
                                return t[r]
                            }
                        }), Object.defineProperty(e, i, n)
                    } : function(e, t, r, i) {
                        void 0 === i && (i = r), e[i] = t[r]
                    }),
                    s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e.default = t
                    }),
                    o = this && this.__importStar || (i = function(e) {
                        return i = Object.getOwnPropertyNames || function(e) {
                            var t = [];
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                            return t
                        }, i(e)
                    }, function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r = i(e), o = 0; o < r.length; o++) "default" !== r[o] && n(t, e, r[o]);
                        return s(t, e), t
                    });
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.PreviewManager = void 0, t.registerImagePreviewSupport = function(e, t) {
                    const r = [],
                        i = new l.SizeStatusBarEntry;
                    r.push(i);
                    const n = new d.ZoomStatusBarEntry;
                    r.push(n);
                    const s = new p(e.extensionUri, i, t, n);
                    return r.push(a.window.registerCustomEditorProvider(p.viewType, s, {
                        supportsMultipleEditorsPerDocument: !0
                    })), r.push(a.commands.registerCommand("imagePreview.zoomIn", () => {
                        s.activePreview?.zoomIn()
                    })), r.push(a.commands.registerCommand("imagePreview.zoomOut", () => {
                        s.activePreview?.zoomOut()
                    })), r.push(a.commands.registerCommand("imagePreview.copyImage", () => {
                        s.activePreview?.copyImage()
                    })), r.push(a.commands.registerCommand("imagePreview.saveImageAs", () => {
                        s.activePreview?.saveImageAs()
                    })), a.Disposable.from(...r)
                };
                const a = o(r(398)),
                    c = r(756),
                    u = r(125),
                    h = r(522),
                    l = r(29),
                    d = r(31);
                class p {
                    constructor(e, t, r, i) {
                        this.extensionRoot = e, this.sizeStatusBarEntry = t, this.binarySizeStatusBarEntry = r, this.zoomStatusBarEntry = i, this._previews = new Set
                    }
                    async openCustomDocument(e) {
                        return {
                            uri: e,
                            dispose: () => {}
                        }
                    }
                    async resolveCustomEditor(e, t) {
                        const r = new f(this.extensionRoot, e.uri, t, this.sizeStatusBarEntry, this.binarySizeStatusBarEntry, this.zoomStatusBarEntry);
                        this._previews.add(r), this.setActivePreview(r), t.onDidDispose(() => {
                            this._previews.delete(r)
                        }), t.onDidChangeViewState(() => {
                            t.active ? this.setActivePreview(r) : this._activePreview !== r || t.active || this.setActivePreview(void 0)
                        })
                    }
                    get activePreview() {
                        return this._activePreview
                    }
                    setActivePreview(e) {
                        this._activePreview = e
                    }
                }
                t.PreviewManager = p, p.viewType = "imagePreview.previewEditor";
                class f extends u.MediaPreview {
                    constructor(e, t, r, i, n, s) {
                        super(e, t, r, n), this.extensionRoot = e, this.sizeStatusBarEntry = i, this.zoomStatusBarEntry = s, this.emptyPngDataUri = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAEElEQVR42gEFAPr/AP///wAI/AL+Sr4t6gAAAABJRU5ErkJggg==", this._register(r.webview.onDidReceiveMessage(e => {
                            switch (e.type) {
                                case "size":
                                    this._imageSize = e.value, this.updateState();
                                    break;
                                case "zoom":
                                    this._imageZoom = e.value, this.updateState();
                                    break;
                                case "reopen-as-text":
                                    (0, u.reopenAsText)(t, r.viewColumn)
                            }
                        })), this._register(s.onDidChangeScale(e => {
                            2 === this.previewState && this.webviewEditor.webview.postMessage({
                                type: "setScale",
                                scale: e.scale
                            })
                        })), this._register(r.onDidChangeViewState(() => {
                            this.webviewEditor.webview.postMessage({
                                type: "setActive",
                                value: this.webviewEditor.active
                            })
                        })), this._register(r.onDidDispose(() => {
                            2 === this.previewState && (this.sizeStatusBarEntry.hide(this), this.zoomStatusBarEntry.hide(this)), this.previewState = 0
                        })), this.updateBinarySize(), this.render(), this.updateState()
                    }
                    dispose() {
                        super.dispose(), this.sizeStatusBarEntry.hide(this), this.zoomStatusBarEntry.hide(this)
                    }
                    zoomIn() {
                        2 === this.previewState && this.webviewEditor.webview.postMessage({
                            type: "zoomIn"
                        })
                    }
                    zoomOut() {
                        2 === this.previewState && this.webviewEditor.webview.postMessage({
                            type: "zoomOut"
                        })
                    }
                    copyImage() {
                        2 === this.previewState && (this.webviewEditor.reveal(), this.webviewEditor.webview.postMessage({
                            type: "copyImage"
                        }))
                    }
                    async saveImageAs() {
                        if (0 !== this.previewState) try {
                            const e = await a.workspace.fs.readFile(this.resource),
                                t = {
                                    saveLabel: a.l10n.t("Save"),
                                    title: a.l10n.t("Save Image As")
                                };
                            if ("file" === this.resource.scheme) t.defaultUri = this.resource;
                            else {
                                const e = a.workspace.getWorkspaceFolder(this.resource);
                                if (e) {
                                    const r = a.workspace.asRelativePath(this.resource, !1);
                                    if (r && !r.startsWith("/") && !/^[a-zA-Z]:/.test(r)) {
                                        const i = r.split("/").filter(e => e.length > 0);
                                        t.defaultUri = c.Utils.joinPath(e.uri, ...i)
                                    }
                                }
                            }
                            const r = await a.window.showSaveDialog(t);
                            if (!r) return;
                            await a.workspace.fs.writeFile(r, e)
                        } catch (e) {
                            a.window.showErrorMessage(a.l10n.t("Failed to save image."))
                        }
                    }
                    updateState() {
                        super.updateState(), 0 !== this.previewState && (this.webviewEditor.active ? (this.sizeStatusBarEntry.show(this, this._imageSize || ""), this.zoomStatusBarEntry.show(this, this._imageZoom || "fit")) : (this.sizeStatusBarEntry.hide(this), this.zoomStatusBarEntry.hide(this)))
                    }
                    async render() {
                        await super.render(), this.webviewEditor.webview.postMessage({
                            type: "setActive",
                            value: this.webviewEditor.active
                        })
                    }
                    async getWebviewContents() {
                        const e = Date.now().toString(),
                            t = {
                                src: await this.getResourcePath(this.webviewEditor, this.resource, e)
                            },
                            r = (0, h.getNonce)(),
                            i = this.webviewEditor.webview.cspSource;
                        return `<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\n\t\x3c!-- Disable pinch zooming --\x3e\n\t<meta name="viewport"\n\t\tcontent="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">\n\n\t<title>Image Preview</title>\n\n\t<link rel="stylesheet" href="${(0,h.escapeAttribute)(this.extensionResource("media","imagePreview.css"))}" type="text/css" media="screen" nonce="${r}">\n\n\t<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: ${i}; connect-src ${i}; script-src 'nonce-${r}'; style-src ${i} 'nonce-${r}';">\n\t<meta id="image-preview-settings" data-settings="${(0,h.escapeAttribute)(JSON.stringify(t))}">\n</head>\n<body class="container image scale-to-fit loading" data-vscode-context='{ "preventDefaultContextMenuItems": true }'>\n\t<div class="loading-indicator"></div>\n\t<div class="image-load-error">\n\t\t<p>${a.l10n.t("An error occurred while loading the image.")}</p>\n\t\t<a href="#" class="open-file-link">${a.l10n.t("Open file using VS Code's standard text/binary editor?")}</a>\n\t</div>\n\t<script src="${(0,h.escapeAttribute)(this.extensionResource("media","imagePreview.js"))}" nonce="${r}"><\/script>\n</body>\n</html>`
                    }
                    async getResourcePath(e, t, r) {
                        return "git" === t.scheme && 0 === (await a.workspace.fs.stat(t)).size ? this.emptyPngDataUri : t.query ? e.webview.asWebviewUri(t).toString() : e.webview.asWebviewUri(t).with({
                            query: `version=${r}`
                        }).toString()
                    }
                    extensionResource(...e) {
                        return this.webviewEditor.webview.asWebviewUri(a.Uri.joinPath(this.extensionRoot, ...e))
                    }
                }
            },
            398: e => {
                e.exports = require("vscode")
            },
            522: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.escapeAttribute = function(e) {
                    return e.toString().replace(/"/g, "&quot;")
                }, t.getNonce = function() {
                    let e = "";
                    for (let t = 0; t < 64; t++) e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62 * Math.random()));
                    return e
                }
            },
            543: (e, t) => {
                function r(e) {
                    for (; e.length;) {
                        const t = e.pop();
                        t && t.dispose()
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Disposable = void 0, t.disposeAll = r, t.Disposable = class {
                    constructor() {
                        this._isDisposed = !1, this._disposables = []
                    }
                    dispose() {
                        this._isDisposed || (this._isDisposed = !0, r(this._disposables))
                    }
                    _register(e) {
                        return this._isDisposed ? e.dispose() : this._disposables.push(e), e
                    }
                    get isDisposed() {
                        return this._isDisposed
                    }
                }
            },
            696: function(e, t, r) {
                var i, n = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                        void 0 === i && (i = r);
                        var n = Object.getOwnPropertyDescriptor(t, r);
                        n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                            enumerable: !0,
                            get: function() {
                                return t[r]
                            }
                        }), Object.defineProperty(e, i, n)
                    } : function(e, t, r, i) {
                        void 0 === i && (i = r), e[i] = t[r]
                    }),
                    s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e.default = t
                    }),
                    o = this && this.__importStar || (i = function(e) {
                        return i = Object.getOwnPropertyNames || function(e) {
                            var t = [];
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                            return t
                        }, i(e)
                    }, function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r = i(e), o = 0; o < r.length; o++) "default" !== r[o] && n(t, e, r[o]);
                        return s(t, e), t
                    });
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.registerVideoPreviewSupport = function(e, t) {
                    const r = new h(e.extensionUri, t);
                    return a.window.registerCustomEditorProvider(h.viewType, r, {
                        supportsMultipleEditorsPerDocument: !0,
                        webviewOptions: {
                            retainContextWhenHidden: !0
                        }
                    })
                };
                const a = o(r(398)),
                    c = r(125),
                    u = r(522);
                class h {
                    constructor(e, t) {
                        this.extensionRoot = e, this.binarySizeStatusBarEntry = t
                    }
                    async openCustomDocument(e) {
                        return {
                            uri: e,
                            dispose: () => {}
                        }
                    }
                    async resolveCustomEditor(e, t) {
                        new l(this.extensionRoot, e.uri, t, this.binarySizeStatusBarEntry)
                    }
                }
                h.viewType = "vscode.videoPreview";
                class l extends c.MediaPreview {
                    constructor(e, t, r, i) {
                        super(e, t, r, i), this.extensionRoot = e, this._register(r.webview.onDidReceiveMessage(e => {
                            "reopen-as-text" === e.type && (0, c.reopenAsText)(t, r.viewColumn)
                        })), this.updateBinarySize(), this.render(), this.updateState()
                    }
                    async getWebviewContents() {
                        const e = Date.now().toString(),
                            t = a.workspace.getConfiguration("mediaPreview.video"),
                            r = {
                                src: await this.getResourcePath(this.webviewEditor, this.resource, e),
                                autoplay: t.get("autoPlay"),
                                loop: t.get("loop")
                            },
                            i = (0, u.getNonce)(),
                            n = this.webviewEditor.webview.cspSource;
                        return `<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\n\t\x3c!-- Disable pinch zooming --\x3e\n\t<meta name="viewport"\n\t\tcontent="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">\n\n\t<title>Video Preview</title>\n\n\t<link rel="stylesheet" href="${(0,u.escapeAttribute)(this.extensionResource("media","videoPreview.css"))}" type="text/css" media="screen" nonce="${i}">\n\n\t<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: ${n}; media-src ${n}; script-src 'nonce-${i}'; style-src ${n} 'nonce-${i}';">\n\t<meta id="settings" data-settings="${(0,u.escapeAttribute)(JSON.stringify(r))}">\n</head>\n<body class="loading" data-vscode-context='{ "preventDefaultContextMenuItems": true }'>\n\t<div class="loading-indicator"></div>\n\t<div class="loading-error">\n\t\t<p>${a.l10n.t("An error occurred while loading the video file.")}</p>\n\t\t<a href="#" class="open-file-link">${a.l10n.t("Open file using VS Code's standard text/binary editor?")}</a>\n\t</div>\n\t<script src="${(0,u.escapeAttribute)(this.extensionResource("media","videoPreview.js"))}" nonce="${i}"><\/script>\n</body>\n</html>`
                    }
                    async getResourcePath(e, t, r) {
                        return "git" === t.scheme && 0 === (await a.workspace.fs.stat(t)).size ? null : t.query ? e.webview.asWebviewUri(t).toString() : e.webview.asWebviewUri(t).with({
                            query: `version=${r}`
                        }).toString()
                    }
                    extensionResource(...e) {
                        return this.webviewEditor.webview.asWebviewUri(a.Uri.joinPath(this.extensionRoot, ...e))
                    }
                }
            },
            723: function(e, t, r) {
                var i, n = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                        void 0 === i && (i = r);
                        var n = Object.getOwnPropertyDescriptor(t, r);
                        n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                            enumerable: !0,
                            get: function() {
                                return t[r]
                            }
                        }), Object.defineProperty(e, i, n)
                    } : function(e, t, r, i) {
                        void 0 === i && (i = r), e[i] = t[r]
                    }),
                    s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e.default = t
                    }),
                    o = this && this.__importStar || (i = function(e) {
                        return i = Object.getOwnPropertyNames || function(e) {
                            var t = [];
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                            return t
                        }, i(e)
                    }, function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r = i(e), o = 0; o < r.length; o++) "default" !== r[o] && n(t, e, r[o]);
                        return s(t, e), t
                    });
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.registerAudioPreviewSupport = function(e, t) {
                    const r = new h(e.extensionUri, t);
                    return a.window.registerCustomEditorProvider(h.viewType, r, {
                        supportsMultipleEditorsPerDocument: !0,
                        webviewOptions: {
                            retainContextWhenHidden: !0
                        }
                    })
                };
                const a = o(r(398)),
                    c = r(125),
                    u = r(522);
                class h {
                    constructor(e, t) {
                        this.extensionRoot = e, this.binarySizeStatusBarEntry = t
                    }
                    async openCustomDocument(e) {
                        return {
                            uri: e,
                            dispose: () => {}
                        }
                    }
                    async resolveCustomEditor(e, t) {
                        new l(this.extensionRoot, e.uri, t, this.binarySizeStatusBarEntry)
                    }
                }
                h.viewType = "vscode.audioPreview";
                class l extends c.MediaPreview {
                    constructor(e, t, r, i) {
                        super(e, t, r, i), this.extensionRoot = e, this._register(r.webview.onDidReceiveMessage(e => {
                            "reopen-as-text" === e.type && (0, c.reopenAsText)(t, r.viewColumn)
                        })), this.updateBinarySize(), this.render(), this.updateState()
                    }
                    async getWebviewContents() {
                        const e = Date.now().toString(),
                            t = {
                                src: await this.getResourcePath(this.webviewEditor, this.resource, e)
                            },
                            r = (0, u.getNonce)(),
                            i = this.webviewEditor.webview.cspSource;
                        return `<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\n\t\x3c!-- Disable pinch zooming --\x3e\n\t<meta name="viewport"\n\t\tcontent="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">\n\n\t<title>Audio Preview</title>\n\n\t<link rel="stylesheet" href="${(0,u.escapeAttribute)(this.extensionResource("media","audioPreview.css"))}" type="text/css" media="screen" nonce="${r}">\n\n\t<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: ${i}; media-src ${i}; script-src 'nonce-${r}'; style-src ${i} 'nonce-${r}';">\n\t<meta id="settings" data-settings="${(0,u.escapeAttribute)(JSON.stringify(t))}">\n</head>\n<body class="container loading" data-vscode-context='{ "preventDefaultContextMenuItems": true }'>\n\t<div class="loading-indicator"></div>\n\t<div class="loading-error">\n\t\t<p>${a.l10n.t("An error occurred while loading the audio file.")}</p>\n\t\t<a href="#" class="open-file-link">${a.l10n.t("Open file using VS Code's standard text/binary editor?")}</a>\n\t</div>\n\t<script src="${(0,u.escapeAttribute)(this.extensionResource("media","audioPreview.js"))}" nonce="${r}"><\/script>\n</body>\n</html>`
                    }
                    async getResourcePath(e, t, r) {
                        return "git" === t.scheme && 0 === (await a.workspace.fs.stat(t)).size ? null : t.query ? e.webview.asWebviewUri(t).toString() : e.webview.asWebviewUri(t).with({
                            query: `version=${r}`
                        }).toString()
                    }
                    extensionResource(...e) {
                        return this.webviewEditor.webview.asWebviewUri(a.Uri.joinPath(this.extensionRoot, ...e))
                    }
                }
            },
            756: (e, t, r) => {
                var i;
                r.r(t), r.d(t, {
                    URI: () => n,
                    Utils: () => s
                }), (() => {
                    var e = {
                            470: e => {
                                function t(e) {
                                    if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
                                }

                                function r(e, t) {
                                    for (var r, i = "", n = 0, s = -1, o = 0, a = 0; a <= e.length; ++a) {
                                        if (a < e.length) r = e.charCodeAt(a);
                                        else {
                                            if (47 === r) break;
                                            r = 47
                                        }
                                        if (47 === r) {
                                            if (s === a - 1 || 1 === o);
                                            else if (s !== a - 1 && 2 === o) {
                                                if (i.length < 2 || 2 !== n || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2))
                                                    if (i.length > 2) {
                                                        var c = i.lastIndexOf("/");
                                                        if (c !== i.length - 1) {
                                                            -1 === c ? (i = "", n = 0) : n = (i = i.slice(0, c)).length - 1 - i.lastIndexOf("/"), s = a, o = 0;
                                                            continue
                                                        }
                                                    } else if (2 === i.length || 1 === i.length) {
                                                    i = "", n = 0, s = a, o = 0;
                                                    continue
                                                }
                                                t && (i.length > 0 ? i += "/.." : i = "..", n = 2)
                                            } else i.length > 0 ? i += "/" + e.slice(s + 1, a) : i = e.slice(s + 1, a), n = a - s - 1;
                                            s = a, o = 0
                                        } else 46 === r && -1 !== o ? ++o : o = -1
                                    }
                                    return i
                                }
                                var i = {
                                    resolve: function() {
                                        for (var e, i = "", n = !1, s = arguments.length - 1; s >= -1 && !n; s--) {
                                            var o;
                                            s >= 0 ? o = arguments[s] : (void 0 === e && (e = process.cwd()), o = e), t(o), 0 !== o.length && (i = o + "/" + i, n = 47 === o.charCodeAt(0))
                                        }
                                        return i = r(i, !n), n ? i.length > 0 ? "/" + i : "/" : i.length > 0 ? i : "."
                                    },
                                    normalize: function(e) {
                                        if (t(e), 0 === e.length) return ".";
                                        var i = 47 === e.charCodeAt(0),
                                            n = 47 === e.charCodeAt(e.length - 1);
                                        return 0 !== (e = r(e, !i)).length || i || (e = "."), e.length > 0 && n && (e += "/"), i ? "/" + e : e
                                    },
                                    isAbsolute: function(e) {
                                        return t(e), e.length > 0 && 47 === e.charCodeAt(0)
                                    },
                                    join: function() {
                                        if (0 === arguments.length) return ".";
                                        for (var e, r = 0; r < arguments.length; ++r) {
                                            var n = arguments[r];
                                            t(n), n.length > 0 && (void 0 === e ? e = n : e += "/" + n)
                                        }
                                        return void 0 === e ? "." : i.normalize(e)
                                    },
                                    relative: function(e, r) {
                                        if (t(e), t(r), e === r) return "";
                                        if ((e = i.resolve(e)) === (r = i.resolve(r))) return "";
                                        for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n);
                                        for (var s = e.length, o = s - n, a = 1; a < r.length && 47 === r.charCodeAt(a); ++a);
                                        for (var c = r.length - a, u = o < c ? o : c, h = -1, l = 0; l <= u; ++l) {
                                            if (l === u) {
                                                if (c > u) {
                                                    if (47 === r.charCodeAt(a + l)) return r.slice(a + l + 1);
                                                    if (0 === l) return r.slice(a + l)
                                                } else o > u && (47 === e.charCodeAt(n + l) ? h = l : 0 === l && (h = 0));
                                                break
                                            }
                                            var d = e.charCodeAt(n + l);
                                            if (d !== r.charCodeAt(a + l)) break;
                                            47 === d && (h = l)
                                        }
                                        var p = "";
                                        for (l = n + h + 1; l <= s; ++l) l !== s && 47 !== e.charCodeAt(l) || (0 === p.length ? p += ".." : p += "/..");
                                        return p.length > 0 ? p + r.slice(a + h) : (a += h, 47 === r.charCodeAt(a) && ++a, r.slice(a))
                                    },
                                    _makeLong: function(e) {
                                        return e
                                    },
                                    dirname: function(e) {
                                        if (t(e), 0 === e.length) return ".";
                                        for (var r = e.charCodeAt(0), i = 47 === r, n = -1, s = !0, o = e.length - 1; o >= 1; --o)
                                            if (47 === (r = e.charCodeAt(o))) {
                                                if (!s) {
                                                    n = o;
                                                    break
                                                }
                                            } else s = !1;
                                        return -1 === n ? i ? "/" : "." : i && 1 === n ? "//" : e.slice(0, n)
                                    },
                                    basename: function(e, r) {
                                        if (void 0 !== r && "string" != typeof r) throw new TypeError('"ext" argument must be a string');
                                        t(e);
                                        var i, n = 0,
                                            s = -1,
                                            o = !0;
                                        if (void 0 !== r && r.length > 0 && r.length <= e.length) {
                                            if (r.length === e.length && r === e) return "";
                                            var a = r.length - 1,
                                                c = -1;
                                            for (i = e.length - 1; i >= 0; --i) {
                                                var u = e.charCodeAt(i);
                                                if (47 === u) {
                                                    if (!o) {
                                                        n = i + 1;
                                                        break
                                                    }
                                                } else - 1 === c && (o = !1, c = i + 1), a >= 0 && (u === r.charCodeAt(a) ? -1 == --a && (s = i) : (a = -1, s = c))
                                            }
                                            return n === s ? s = c : -1 === s && (s = e.length), e.slice(n, s)
                                        }
                                        for (i = e.length - 1; i >= 0; --i)
                                            if (47 === e.charCodeAt(i)) {
                                                if (!o) {
                                                    n = i + 1;
                                                    break
                                                }
                                            } else - 1 === s && (o = !1, s = i + 1);
                                        return -1 === s ? "" : e.slice(n, s)
                                    },
                                    extname: function(e) {
                                        t(e);
                                        for (var r = -1, i = 0, n = -1, s = !0, o = 0, a = e.length - 1; a >= 0; --a) {
                                            var c = e.charCodeAt(a);
                                            if (47 !== c) - 1 === n && (s = !1, n = a + 1), 46 === c ? -1 === r ? r = a : 1 !== o && (o = 1) : -1 !== r && (o = -1);
                                            else if (!s) {
                                                i = a + 1;
                                                break
                                            }
                                        }
                                        return -1 === r || -1 === n || 0 === o || 1 === o && r === n - 1 && r === i + 1 ? "" : e.slice(r, n)
                                    },
                                    format: function(e) {
                                        if (null === e || "object" != typeof e) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                                        return function(e, t) {
                                            var r = t.dir || t.root,
                                                i = t.base || (t.name || "") + (t.ext || "");
                                            return r ? r === t.root ? r + i : r + "/" + i : i
                                        }(0, e)
                                    },
                                    parse: function(e) {
                                        t(e);
                                        var r = {
                                            root: "",
                                            dir: "",
                                            base: "",
                                            ext: "",
                                            name: ""
                                        };
                                        if (0 === e.length) return r;
                                        var i, n = e.charCodeAt(0),
                                            s = 47 === n;
                                        s ? (r.root = "/", i = 1) : i = 0;
                                        for (var o = -1, a = 0, c = -1, u = !0, h = e.length - 1, l = 0; h >= i; --h)
                                            if (47 !== (n = e.charCodeAt(h))) - 1 === c && (u = !1, c = h + 1), 46 === n ? -1 === o ? o = h : 1 !== l && (l = 1) : -1 !== o && (l = -1);
                                            else if (!u) {
                                            a = h + 1;
                                            break
                                        }
                                        return -1 === o || -1 === c || 0 === l || 1 === l && o === c - 1 && o === a + 1 ? -1 !== c && (r.base = r.name = 0 === a && s ? e.slice(1, c) : e.slice(a, c)) : (0 === a && s ? (r.name = e.slice(1, o), r.base = e.slice(1, c)) : (r.name = e.slice(a, o), r.base = e.slice(a, c)), r.ext = e.slice(o, c)), a > 0 ? r.dir = e.slice(0, a - 1) : s && (r.dir = "/"), r
                                    },
                                    sep: "/",
                                    delimiter: ":",
                                    win32: null,
                                    posix: null
                                };
                                i.posix = i, e.exports = i
                            }
                        },
                        t = {};

                    function r(i) {
                        var n = t[i];
                        if (void 0 !== n) return n.exports;
                        var s = t[i] = {
                            exports: {}
                        };
                        return e[i](s, s.exports, r), s.exports
                    }
                    r.d = (e, t) => {
                        for (var i in t) r.o(t, i) && !r.o(e, i) && Object.defineProperty(e, i, {
                            enumerable: !0,
                            get: t[i]
                        })
                    }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    };
                    var n = {};
                    (() => {
                        var e;
                        if (r.r(n), r.d(n, {
                                URI: () => p,
                                Utils: () => O
                            }), "object" == typeof process) e = "win32" === process.platform;
                        else if ("object" == typeof navigator) {
                            var t = navigator.userAgent;
                            e = t.indexOf("Windows") >= 0
                        }
                        var i, s, o = (i = function(e, t) {
                                return i = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                                }, i(e, t)
                            }, function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                                function r() {
                                    this.constructor = e
                                }
                                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
                            }),
                            a = /^\w[\w\d+.-]*$/,
                            c = /^\//,
                            u = /^\/\//,
                            h = "",
                            l = "/",
                            d = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
                            p = function() {
                                function t(e, t, r, i, n, s) {
                                    void 0 === s && (s = !1), "object" == typeof e ? (this.scheme = e.scheme || h, this.authority = e.authority || h, this.path = e.path || h, this.query = e.query || h, this.fragment = e.fragment || h) : (this.scheme = function(e, t) {
                                        return e || t ? e : "file"
                                    }(e, s), this.authority = t || h, this.path = function(e, t) {
                                        switch (e) {
                                            case "https":
                                            case "http":
                                            case "file":
                                                t ? t[0] !== l && (t = l + t) : t = l
                                        }
                                        return t
                                    }(this.scheme, r || h), this.query = i || h, this.fragment = n || h, function(e, t) {
                                        if (!e.scheme && t) throw new Error('[UriError]: Scheme is missing: {scheme: "", authority: "'.concat(e.authority, '", path: "').concat(e.path, '", query: "').concat(e.query, '", fragment: "').concat(e.fragment, '"}'));
                                        if (e.scheme && !a.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
                                        if (e.path)
                                            if (e.authority) {
                                                if (!c.test(e.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')
                                            } else if (u.test(e.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')
                                    }(this, s))
                                }
                                return t.isUri = function(e) {
                                    return e instanceof t || !!e && "string" == typeof e.authority && "string" == typeof e.fragment && "string" == typeof e.path && "string" == typeof e.query && "string" == typeof e.scheme && "string" == typeof e.fsPath && "function" == typeof e.with && "function" == typeof e.toString
                                }, Object.defineProperty(t.prototype, "fsPath", {
                                    get: function() {
                                        return y(this, !1)
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), t.prototype.with = function(e) {
                                    if (!e) return this;
                                    var t = e.scheme,
                                        r = e.authority,
                                        i = e.path,
                                        n = e.query,
                                        s = e.fragment;
                                    return void 0 === t ? t = this.scheme : null === t && (t = h), void 0 === r ? r = this.authority : null === r && (r = h), void 0 === i ? i = this.path : null === i && (i = h), void 0 === n ? n = this.query : null === n && (n = h), void 0 === s ? s = this.fragment : null === s && (s = h), t === this.scheme && r === this.authority && i === this.path && n === this.query && s === this.fragment ? this : new v(t, r, i, n, s)
                                }, t.parse = function(e, t) {
                                    void 0 === t && (t = !1);
                                    var r = d.exec(e);
                                    return r ? new v(r[2] || h, P(r[4] || h), P(r[5] || h), P(r[7] || h), P(r[9] || h), t) : new v(h, h, h, h, h)
                                }, t.file = function(t) {
                                    var r = h;
                                    if (e && (t = t.replace(/\\/g, l)), t[0] === l && t[1] === l) {
                                        var i = t.indexOf(l, 2); - 1 === i ? (r = t.substring(2), t = l) : (r = t.substring(2, i), t = t.substring(i) || l)
                                    }
                                    return new v("file", r, t, h, h)
                                }, t.from = function(e) {
                                    return new v(e.scheme, e.authority, e.path, e.query, e.fragment)
                                }, t.prototype.toString = function(e) {
                                    return void 0 === e && (e = !1), b(this, e)
                                }, t.prototype.toJSON = function() {
                                    return this
                                }, t.revive = function(e) {
                                    if (e) {
                                        if (e instanceof t) return e;
                                        var r = new v(e);
                                        return r._formatted = e.external, r._fsPath = e._sep === f ? e.fsPath : null, r
                                    }
                                    return e
                                }, t
                            }(),
                            f = e ? 1 : void 0,
                            v = function(e) {
                                function t() {
                                    var t = null !== e && e.apply(this, arguments) || this;
                                    return t._formatted = null, t._fsPath = null, t
                                }
                                return o(t, e), Object.defineProperty(t.prototype, "fsPath", {
                                    get: function() {
                                        return this._fsPath || (this._fsPath = y(this, !1)), this._fsPath
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), t.prototype.toString = function(e) {
                                    return void 0 === e && (e = !1), e ? b(this, !0) : (this._formatted || (this._formatted = b(this, !1)), this._formatted)
                                }, t.prototype.toJSON = function() {
                                    var e = {
                                        $mid: 1
                                    };
                                    return this._fsPath && (e.fsPath = this._fsPath, e._sep = f), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e
                                }, t
                            }(p),
                            g = ((s = {})[58] = "%3A", s[47] = "%2F", s[63] = "%3F", s[35] = "%23", s[91] = "%5B", s[93] = "%5D", s[64] = "%40", s[33] = "%21", s[36] = "%24", s[38] = "%26", s[39] = "%27", s[40] = "%28", s[41] = "%29", s[42] = "%2A", s[43] = "%2B", s[44] = "%2C", s[59] = "%3B", s[61] = "%3D", s[32] = "%20", s);

                        function w(e, t) {
                            for (var r = void 0, i = -1, n = 0; n < e.length; n++) {
                                var s = e.charCodeAt(n);
                                if (s >= 97 && s <= 122 || s >= 65 && s <= 90 || s >= 48 && s <= 57 || 45 === s || 46 === s || 95 === s || 126 === s || t && 47 === s) - 1 !== i && (r += encodeURIComponent(e.substring(i, n)), i = -1), void 0 !== r && (r += e.charAt(n));
                                else {
                                    void 0 === r && (r = e.substr(0, n));
                                    var o = g[s];
                                    void 0 !== o ? (-1 !== i && (r += encodeURIComponent(e.substring(i, n)), i = -1), r += o) : -1 === i && (i = n)
                                }
                            }
                            return -1 !== i && (r += encodeURIComponent(e.substring(i))), void 0 !== r ? r : e
                        }

                        function m(e) {
                            for (var t = void 0, r = 0; r < e.length; r++) {
                                var i = e.charCodeAt(r);
                                35 === i || 63 === i ? (void 0 === t && (t = e.substr(0, r)), t += g[i]) : void 0 !== t && (t += e[r])
                            }
                            return void 0 !== t ? t : e
                        }

                        function y(t, r) {
                            var i;
                            return i = t.authority && t.path.length > 1 && "file" === t.scheme ? "//".concat(t.authority).concat(t.path) : 47 === t.path.charCodeAt(0) && (t.path.charCodeAt(1) >= 65 && t.path.charCodeAt(1) <= 90 || t.path.charCodeAt(1) >= 97 && t.path.charCodeAt(1) <= 122) && 58 === t.path.charCodeAt(2) ? r ? t.path.substr(1) : t.path[1].toLowerCase() + t.path.substr(2) : t.path, e && (i = i.replace(/\//g, "\\")), i
                        }

                        function b(e, t) {
                            var r = t ? m : w,
                                i = "",
                                n = e.scheme,
                                s = e.authority,
                                o = e.path,
                                a = e.query,
                                c = e.fragment;
                            if (n && (i += n, i += ":"), (s || "file" === n) && (i += l, i += l), s) {
                                var u = s.indexOf("@");
                                if (-1 !== u) {
                                    var h = s.substr(0, u);
                                    s = s.substr(u + 1), -1 === (u = h.indexOf(":")) ? i += r(h, !1) : (i += r(h.substr(0, u), !1), i += ":", i += r(h.substr(u + 1), !1)), i += "@"
                                } - 1 === (u = (s = s.toLowerCase()).indexOf(":")) ? i += r(s, !1) : (i += r(s.substr(0, u), !1), i += s.substr(u))
                            }
                            if (o) {
                                if (o.length >= 3 && 47 === o.charCodeAt(0) && 58 === o.charCodeAt(2))(d = o.charCodeAt(1)) >= 65 && d <= 90 && (o = "/".concat(String.fromCharCode(d + 32), ":").concat(o.substr(3)));
                                else if (o.length >= 2 && 58 === o.charCodeAt(1)) {
                                    var d;
                                    (d = o.charCodeAt(0)) >= 65 && d <= 90 && (o = "".concat(String.fromCharCode(d + 32), ":").concat(o.substr(2)))
                                }
                                i += r(o, !0)
                            }
                            return a && (i += "?", i += r(a, !1)), c && (i += "#", i += t ? c : w(c, !1)), i
                        }

                        function S(e) {
                            try {
                                return decodeURIComponent(e)
                            } catch (t) {
                                return e.length > 3 ? e.substr(0, 3) + S(e.substr(3)) : e
                            }
                        }
                        var _ = /(%[0-9A-Za-z][0-9A-Za-z])+/g;

                        function P(e) {
                            return e.match(_) ? e.replace(_, function(e) {
                                return S(e)
                            }) : e
                        }
                        var O, A = r(470),
                            x = function(e, t, r) {
                                if (r || 2 === arguments.length)
                                    for (var i, n = 0, s = t.length; n < s; n++) !i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
                                return e.concat(i || Array.prototype.slice.call(t))
                            },
                            j = A.posix || A,
                            C = "/";
                        ! function(e) {
                            e.joinPath = function(e) {
                                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                                return e.with({
                                    path: j.join.apply(j, x([e.path], t, !1))
                                })
                            }, e.resolvePath = function(e) {
                                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                                var i = e.path,
                                    n = !1;
                                i[0] !== C && (i = C + i, n = !0);
                                var s = j.resolve.apply(j, x([i], t, !1));
                                return n && s[0] === C && !e.authority && (s = s.substring(1)), e.with({
                                    path: s
                                })
                            }, e.dirname = function(e) {
                                if (0 === e.path.length || e.path === C) return e;
                                var t = j.dirname(e.path);
                                return 1 === t.length && 46 === t.charCodeAt(0) && (t = ""), e.with({
                                    path: t
                                })
                            }, e.basename = function(e) {
                                return j.basename(e.path)
                            }, e.extname = function(e) {
                                return j.extname(e.path)
                            }
                        }(O || (O = {}))
                    })(), i = n
                })();
                const {
                    URI: n,
                    Utils: s
                } = i
            },
            780: function(e, t, r) {
                var i, n = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                        void 0 === i && (i = r);
                        var n = Object.getOwnPropertyDescriptor(t, r);
                        n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                            enumerable: !0,
                            get: function() {
                                return t[r]
                            }
                        }), Object.defineProperty(e, i, n)
                    } : function(e, t, r, i) {
                        void 0 === i && (i = r), e[i] = t[r]
                    }),
                    s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e.default = t
                    }),
                    o = this && this.__importStar || (i = function(e) {
                        return i = Object.getOwnPropertyNames || function(e) {
                            var t = [];
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                            return t
                        }, i(e)
                    }, function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r = i(e), o = 0; o < r.length; o++) "default" !== r[o] && n(t, e, r[o]);
                        return s(t, e), t
                    });
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.BinarySizeStatusBarEntry = void 0;
                const a = o(r(398)),
                    c = r(933);
                class u {
                    static formatSize(e) {
                        return e < u.KB ? a.l10n.t("{0}B", e) : e < u.MB ? a.l10n.t("{0}KB", (e / u.KB).toFixed(2)) : e < u.GB ? a.l10n.t("{0}MB", (e / u.MB).toFixed(2)) : e < u.TB ? a.l10n.t("{0}GB", (e / u.GB).toFixed(2)) : a.l10n.t("{0}TB", (e / u.TB).toFixed(2))
                    }
                }
                u.KB = 1024, u.MB = u.KB * u.KB, u.GB = u.MB * u.KB, u.TB = u.GB * u.KB;
                class h extends c.PreviewStatusBarEntry {
                    constructor() {
                        super("status.imagePreview.binarySize", a.l10n.t("Image Binary Size"), a.StatusBarAlignment.Right, 100)
                    }
                    show(e, t) {
                        "number" == typeof t ? super.showItem(e, u.formatSize(t)) : this.hide(e)
                    }
                }
                t.BinarySizeStatusBarEntry = h
            },
            933: function(e, t, r) {
                var i, n = this && this.__createBinding || (Object.create ? function(e, t, r, i) {
                        void 0 === i && (i = r);
                        var n = Object.getOwnPropertyDescriptor(t, r);
                        n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
                            enumerable: !0,
                            get: function() {
                                return t[r]
                            }
                        }), Object.defineProperty(e, i, n)
                    } : function(e, t, r, i) {
                        void 0 === i && (i = r), e[i] = t[r]
                    }),
                    s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e.default = t
                    }),
                    o = this && this.__importStar || (i = function(e) {
                        return i = Object.getOwnPropertyNames || function(e) {
                            var t = [];
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
                            return t
                        }, i(e)
                    }, function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var r = i(e), o = 0; o < r.length; o++) "default" !== r[o] && n(t, e, r[o]);
                        return s(t, e), t
                    });
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.PreviewStatusBarEntry = void 0;
                const a = o(r(398)),
                    c = r(543);
                class u extends c.Disposable {
                    constructor(e, t, r, i) {
                        super(), this.entry = this._register(a.window.createStatusBarItem(e, r, i)), this.entry.name = t
                    }
                    showItem(e, t) {
                        this._showOwner = e, this.entry.text = t, this.entry.show()
                    }
                    hide(e) {
                        e === this._showOwner && (this.entry.hide(), this._showOwner = void 0)
                    }
                }
                t.PreviewStatusBarEntry = u
            }
        },
        t = {};

    function r(i) {
        var n = t[i];
        if (void 0 !== n) return n.exports;
        var s = t[i] = {
            exports: {}
        };
        return e[i].call(s.exports, s, s.exports, r), s.exports
    }
    r.d = (e, t) => {
        for (var i in t) r.o(t, i) && !r.o(e, i) && Object.defineProperty(e, i, {
            enumerable: !0,
            get: t[i]
        })
    }, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    var i = {};
    (() => {
        var e = i;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.activate = function(e) {
            const r = new n.BinarySizeStatusBarEntry;
            e.subscriptions.push(r), e.subscriptions.push((0, s.registerImagePreviewSupport)(e, r)), e.subscriptions.push((0, t.registerAudioPreviewSupport)(e, r)), e.subscriptions.push((0, o.registerVideoPreviewSupport)(e, r))
        };
        const t = r(723),
            n = r(780),
            s = r(289),
            o = r(696)
    })();
    var n = exports;
    for (var s in i) n[s] = i[s];
    i.__esModule && Object.defineProperty(n, "__esModule", {
        value: !0
    })
})();
//# sourceMappingURL=http://go/sourcemap/sourcemaps/7cf19b7482706625cdb70db3211b7dd035b7aa30/extensions/media-preview/dist/extension.js.map
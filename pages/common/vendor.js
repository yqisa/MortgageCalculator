var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

global.webpackJsonp([ 0 ], {
    "+2/q": function(t, e, n) {
        var i = n("NXqg"), r = n("Dpfg"), o = n("ybqe")(i.a, r.a, function(t) {
            n("RpDY");
        }, "data-v-f6bab60a", null);
        e.a = o.exports;
    },
    "+5vP": function(t, e) {},
    "+E39": function(t, e, n) {
        t.exports = !n("S82l")(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    },
    "+ZMJ": function(t, e, n) {
        var i = n("lOnJ");
        t.exports = function(t, e, n) {
            if (i(t), void 0 === e) return t;
            switch (n) {
              case 1:
                return function(n) {
                    return t.call(e, n);
                };

              case 2:
                return function(n, i) {
                    return t.call(e, n, i);
                };

              case 3:
                return function(n, i, r) {
                    return t.call(e, n, i, r);
                };
            }
            return function() {
                return t.apply(e, arguments);
            };
        };
    },
    "+tPU": function(t, e, n) {
        n("xGkn");
        for (var i = n("7KvD"), r = n("hJx8"), o = n("/bQp"), a = n("dSzd")("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
            var u = s[c], l = i[u], f = l && l.prototype;
            f && !f[a] && r(f, a, u), o[u] = o.Array;
        }
    },
    "+u3/": function(t, e, n) {
        var i = n("yspw");
        e.a = {
            data: function() {
                return {
                    show_road_entry: !1
                };
            },
            mounted: function() {
                var t = this;
                i.a.activity_menus().then(function(e) {
                    t.show_road_entry = e.indexOf("2018_year_review") > -1;
                });
            },
            methods: {
                closeRoadEntry: function() {
                    this.show_road_entry = !1;
                }
            }
        };
    },
    "//Fk": function(t, e, n) {
        t.exports = {
            default: n("U5ju"),
            __esModule: !0
        };
    },
    "/2jv": function(t, e, n) {
        n.d(e, "a", function() {
            return _;
        }), n.d(e, "c", function() {
            return y;
        });
        var i = n("fZjL"), r = n.n(i), o = {
            name: "最新取证",
            dashboard_key: "latest_opening"
        }, a = {
            name: "即将取证",
            dashboard_key: "forthcoming_sale"
        }, s = {
            name: "最新摇号",
            dashboard_key: "latest_lot_number"
        }, c = {
            name: "资格查询",
            class: "check_condition",
            open_type: "getUserInfo",
            path: "/pages/check_condition/main"
        }, u = {
            name: "找房",
            class: "find_building",
            open_type: "getUserInfo",
            path: "/pages/find_building/main"
        }, l = {
            name: "二手房估价",
            class: "second_hand",
            open_type: "getUserInfo",
            path: "/pages/second_hand_evalute/main"
        }, f = {
            name: "二手跌幅榜",
            class: "depreciate_rankings",
            open_type: "getUserInfo",
            path: "/pages/depreciate_rankings/main"
        }, d = {
            name: "置业顾问",
            class: "consultant",
            open_type: "getUserInfo",
            auth_type: "required",
            path: "/pages/consultants/main"
        }, p = {
            name: "全部楼盘",
            class: "all-buildings",
            open_type: "getUserInfo",
            path: "/pages/history/main?type=全部楼盘"
        }, h = {
            name: "交易数据",
            class: "trade",
            open_type: "getUserInfo",
            path: "/pages/packageA/trade_data/main"
        }, g = {
            name: "房贷计算",
            class: "computer",
            open_type: "getUserInfo",
            path: "/pages/loan_computer/main"
        }, m = {
            name: "建行贷款",
            class: "ccb",
            path: "/pages/packageA/ccb_loan/main",
            auth_type: "required_phoneNumber",
            open_type: "getPhoneNumber"
        }, v = {
            name: "热门公寓",
            class: "",
            open_type: "getUserInfo",
            path: "/pages/packageA/hot_business/main"
        }, _ = {
            page_class: "",
            show_execellect_consultant: !1,
            show_hot: !1,
            show_forthcoming: !1,
            dashboard_tabs: [],
            tool_tabs: []
        };
        e.b = function(t) {
            var e = {
                show_execellect_consultant: !0,
                show_hot: !0,
                show_forthcoming: !0,
                dashboard_tabs: [ a, o, s ],
                tool_tabs: [ c, f, l, p, h, u, d, g, m, v ]
            };
            r()(e).forEach(function(n) {
                t[n] = e[n];
            });
        };
        var y = [ {
            key: "level1",
            name: "一圈层（中心城区）"
        }, {
            key: "level2",
            name: "二圈层（近郊）"
        }, {
            key: "level3",
            name: "三圈层（远郊）"
        } ];
    },
    "/bQp": function(t, e) {
        t.exports = {};
    },
    "/jvm": function(t, e, n) {
        var i = n("GQvj"), r = n("nQ9N"), o = n("ybqe")(i.a, r.a, function(t) {
            n("C8Q0");
        }, null, null);
        e.a = o.exports;
    },
    "/m0d": function(t, e, n) {
        var i = n("hQLu"), r = n("QGIh"), o = n("VPS7"), a = n("QmSG");
        e.a = {
            mixins: [ r.a ],
            data: function() {
                return {
                    show_home: !1
                };
            },
            onLoad: function(t) {
                o.a.setTitle(this.title), this.checkShowHoue();
            },
            watch: {
                title: function(t) {
                    o.a.setTitle(t);
                }
            },
            methods: {
                checkShowHoue: function() {
                    var t = getCurrentPages(), e = t[t.length - 1].route, n = a.a.indexOf(e) > -1;
                    this.show_home = t.length >= 1 && !n;
                },
                goHome: function(t) {
                    this.pushFormSubmit(t), wx.switchTab({
                        url: "/pages/index/main"
                    });
                }
            },
            props: {
                title: {
                    type: String,
                    default: "",
                    required: !0
                },
                className: {
                    type: String,
                    default: function() {
                        return "";
                    }
                },
                has_chart: {
                    type: Boolean,
                    default: !1
                }
            },
            components: {
                NetworkTip: i.a
            }
        };
    },
    "/n6Q": function(t, e, n) {
        n("zQR9"), n("+tPU"), t.exports = n("Kh4W").f("iterator");
    },
    "/xFO": function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return t.show ? n("div", {
                    staticClass: "dlg-wrap",
                    class: t.className
                }, [ n("div", {
                    staticClass: "dlg"
                }, [ n("h3", [ t._v(t._s(t.title)) ]), t._v(" "), n("p", [ t._v(t._s(t.content)) ]), t._v(" "), n("button", {
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: t.confirm
                    }
                }, [ t._v("我知道了") ]) ], 1), t._v(" "), n("div", {
                    staticClass: "overlay",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        tap: t.toggleDlg
                    }
                }) ]) : t._e();
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    "0/+S": function(t, e, n) {
        var i = n("3KIH"), r = n("zzHr"), o = n("ybqe")(i.a, r.a, function(t) {
            n("0sEL");
        }, "data-v-2299e418", null);
        e.a = o.exports;
    },
    "05lm": function(t, e, n) {
        var i = n("dj+L"), r = n("RgAB"), o = n("ybqe")(i.a, r.a, function(t) {
            n("haIR");
        }, "data-v-3207dde4", null);
        e.a = o.exports;
    },
    "06OY": function(e, n, i) {
        var r = i("3Eo+")("meta"), o = i("EqjI"), a = i("D2L2"), s = i("evD5").f, c = 0, u = Object.isExtensible || function() {
            return !0;
        }, l = !i("S82l")(function() {
            return u(Object.preventExtensions({}));
        }), f = function(t) {
            s(t, r, {
                value: {
                    i: "O" + ++c,
                    w: {}
                }
            });
        }, d = e.exports = {
            KEY: r,
            NEED: !1,
            fastKey: function(e, n) {
                if (!o(e)) return "symbol" == (void 0 === e ? "undefined" : t(e)) ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!a(e, r)) {
                    if (!u(e)) return "F";
                    if (!n) return "E";
                    f(e);
                }
                return e[r].i;
            },
            getWeak: function(t, e) {
                if (!a(t, r)) {
                    if (!u(t)) return !0;
                    if (!e) return !1;
                    f(t);
                }
                return t[r].w;
            },
            onFreeze: function(t) {
                return l && d.NEED && u(t) && !a(t, r) && f(t), t;
            }
        };
    },
    "07wA": function(t, e, n) {
        var i = n("wris"), r = n("SstU"), o = n("ybqe")(i.a, r.a, function(t) {
            n("xOQ+");
        }, "data-v-8635df3a", null);
        e.a = o.exports;
    },
    "0Jim": function(e, n, i) {
        var r;
        !function(o) {
            function a() {}
            function s(t, e) {
                for (var n = t.length; n--; ) if (t[n].listener === e) return n;
                return -1;
            }
            function c(t) {
                return function() {
                    return this[t].apply(this, arguments);
                };
            }
            var u = a.prototype, l = o.EventEmitter;
            u.getListeners = function(t) {
                var e, n, i = this._getEvents();
                if (t instanceof RegExp) for (n in e = {}, i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n]); else e = i[t] || (i[t] = []);
                return e;
            }, u.flattenListeners = function(t) {
                var e, n = [];
                for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
                return n;
            }, u.getListenersAsObject = function(t) {
                var e, n = this.getListeners(t);
                return n instanceof Array && ((e = {})[t] = n), e || n;
            }, u.addListener = function(e, n) {
                if (!function e(n) {
                    return "function" == typeof n || n instanceof RegExp || !(!n || "object" != (void 0 === n ? "undefined" : t(n))) && e(n.listener);
                }(n)) throw new TypeError("listener must be a function");
                var i, r = this.getListenersAsObject(e), o = "object" == (void 0 === n ? "undefined" : t(n));
                for (i in r) r.hasOwnProperty(i) && -1 === s(r[i], n) && r[i].push(o ? n : {
                    listener: n,
                    once: !1
                });
                return this;
            }, u.on = c("addListener"), u.addOnceListener = function(t, e) {
                return this.addListener(t, {
                    listener: e,
                    once: !0
                });
            }, u.once = c("addOnceListener"), u.defineEvent = function(t) {
                return this.getListeners(t), this;
            }, u.defineEvents = function(t) {
                for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
                return this;
            }, u.removeListener = function(t, e) {
                var n, i, r = this.getListenersAsObject(t);
                for (i in r) r.hasOwnProperty(i) && -1 !== (n = s(r[i], e)) && r[i].splice(n, 1);
                return this;
            }, u.off = c("removeListener"), u.addListeners = function(t, e) {
                return this.manipulateListeners(!1, t, e);
            }, u.removeListeners = function(t, e) {
                return this.manipulateListeners(!0, t, e);
            }, u.manipulateListeners = function(e, n, i) {
                var r, o, a = e ? this.removeListener : this.addListener, s = e ? this.removeListeners : this.addListeners;
                if ("object" != (void 0 === n ? "undefined" : t(n)) || n instanceof RegExp) for (r = i.length; r--; ) a.call(this, n, i[r]); else for (r in n) n.hasOwnProperty(r) && (o = n[r]) && ("function" == typeof o ? a.call(this, r, o) : s.call(this, r, o));
                return this;
            }, u.removeEvent = function(e) {
                var n, i = void 0 === e ? "undefined" : t(e), r = this._getEvents();
                if ("string" === i) delete r[e]; else if (e instanceof RegExp) for (n in r) r.hasOwnProperty(n) && e.test(n) && delete r[n]; else delete this._events;
                return this;
            }, u.removeAllListeners = c("removeEvent"), u.emitEvent = function(t, e) {
                var n, i, r, o, a = this.getListenersAsObject(t);
                for (o in a) if (a.hasOwnProperty(o)) for (n = a[o].slice(0), r = 0; r < n.length; r++) !0 === (i = n[r]).once && this.removeListener(t, i.listener), 
                i.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, i.listener);
                return this;
            }, u.trigger = c("emitEvent"), u.emit = function(t) {
                var e = Array.prototype.slice.call(arguments, 1);
                return this.emitEvent(t, e);
            }, u.setOnceReturnValue = function(t) {
                return this._onceReturnValue = t, this;
            }, u._getOnceReturnValue = function() {
                return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
            }, u._getEvents = function() {
                return this._events || (this._events = {});
            }, a.noConflict = function() {
                return o.EventEmitter = l, a;
            }, void 0 === (r = function() {
                return a;
            }.call(n, i, n, e)) || (e.exports = r);
        }(this || {});
    },
    "0Y6P": function(t, e) {},
    "0jG4": function(t, e, n) {
        var i = n("Dd8w"), r = n.n(i), o = n("7gdG"), a = n("pOFa"), s = n("ytBU"), c = n("yspw"), u = function() {
            return n.i(o.a)("user", {
                loading: !1
            }).then(function(t) {
                return s.a.user.set(t), c.a.set(t), t;
            });
        };
        e.a = {
            init: o.g,
            getHomePage: function() {
                return n.i(o.b)("homepage", {
                    loading: !0
                }).then(a.c);
            },
            getHotHouses: function() {
                return n.i(o.a)("hot_buildings", {
                    loading: !0
                }).then(function(t) {
                    return t.items = t.items.map(a.a), t.hotpage_banner = n.i(a.b)(t.hotpage_banner), 
                    t;
                });
            },
            getUserNums: function(t) {
                return n.i(o.a)("houses/" + t + "/user_ln_numbers", {
                    loading: !1
                });
            },
            addUserNum: function(t, e) {
                return n.i(o.c)("houses/" + t + "/user_ln_numbers", e, {
                    loading: !0
                });
            },
            getUserResult: function(t, e) {
                return n.i(o.a)("houses/" + t + "/user_ln_numbers/" + e, {
                    loading: !0
                });
            },
            delUserResult: function(t, e) {
                return n.i(o.d)("houses/" + t + "/user_ln_numbers/" + e, {
                    loading: !0
                });
            },
            getResult: function(t, e) {
                return n.i(o.a)("houses/" + t + "/ln_results", e, {
                    loading: !0
                });
            },
            getRegResult: function(t, e) {
                return n.i(o.a)("houses/" + t + "/ln_registers", e, {
                    loading: !0
                });
            },
            report: function(t) {
                return n.i(o.c)("form_submits", {
                    form_id: t
                }, {
                    loading: !1
                });
            },
            getUserInfo: u,
            getUserInfoByShareBy: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                n.i(o.a)("user", {
                    share_by: t,
                    share_page: e
                }, {
                    loading: !1
                });
            },
            updateUserInfo: function(t) {
                return n.i(o.e)("user", t, {
                    loading: !0
                });
            },
            viewTip: function() {
                return n.i(o.c)("user/view_tip", {
                    loading: !1
                });
            },
            getMyLnHouses: function(t) {
                return n.i(o.a)("my_ln_houses", {
                    ln_status: t
                }, {
                    loading: !0
                });
            },
            getZones: function() {
                return n.i(o.b)("zones", {
                    loading: !0
                });
            },
            syncInfo: function() {
                return n.i(o.c)("my_ln_houses", {
                    loading: !0
                });
            },
            getUserPoints: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return n.i(o.a)("user_point_journals", {
                    loading: t
                });
            },
            share: function() {
                return n.i(o.c)("user_point_journals", {
                    action_type: "share"
                }, {
                    loading: !0
                });
            },
            getPointsStore: function() {
                return n.i(o.a)("point_store", {
                    loading: !0
                });
            },
            getComments: function(t, e) {
                return n.i(o.a)("houses/" + t + "/comments", e, {
                    loading: !1
                });
            },
            postComment: function(t, e) {
                return n.i(o.c)("houses/" + t + "/comments", e, {
                    loading: !0
                });
            },
            getChangeLog: function(t) {
                return n.i(o.a)("change_log", {
                    version: t
                }, {
                    loading: !1
                });
            },
            verifyQualication: function(t, e) {
                return n.i(o.c)("verify_qualification", r()({}, t, {
                    verify_type: e
                }), {
                    loading: !0
                });
            },
            getLnDetail: function(t, e) {
                return !e.ln_number && delete e.ln_number, !e.register_number && delete e.register_number, 
                n.i(o.a)("houses/" + t + "/ln_detail", e, {
                    loading: !0
                });
            },
            getMyConsultant: function() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return n.i(o.b)("consultant", {
                    loading: t
                });
            },
            editMyConsultant: function() {
                return n.i(o.b)("consultant/edit", {
                    loading: !1
                });
            },
            updateConsultant: function(t) {
                return n.i(o.f)("consultant", t, {
                    loading: !0
                });
            },
            getConsultants: function(t) {
                return n.i(o.a)("consultant_cards", t, {
                    loading: !1
                });
            },
            getConsultant: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return n.i(o.a)("consultant_cards/" + t, e, {
                    loading: !0
                });
            },
            getConsultantHistory: function(t) {
                return n.i(o.a)("consultant_liveness_histories", t, {
                    loading: !1
                });
            },
            getHouseNames: function(t) {
                return n.i(o.a)("building_names", t, {
                    loading: !1
                });
            },
            getConsultantViewers: function(t, e) {
                return n.i(o.a)("consultants/" + t + "/viewer_headimgs", e, {
                    loading: !0
                });
            },
            getConsultantScore: function(t, e) {
                return n.i(o.a)("consultants/" + t + "/score_journals", e, {
                    loading: !0
                });
            },
            likeConsultant: function(t, e) {
                return e ? n.i(o.c)("consultants/" + t + "/like", {
                    loading: !1
                }) : n.i(o.d)("consultants/" + t + "/like", {
                    loading: !1
                });
            },
            getWxArticles: function(t) {
                return n.i(o.a)("weixin_articles", t, {
                    loading: !1
                });
            },
            getBuildings: function(t) {
                return n.i(o.a)("buildings", r()({
                    per: 20
                }, t), {
                    loading: !0
                }).then(function(e) {
                    return "摇号剩余" === t.status && e.items.forEach(function(t) {
                        t.status = "在售";
                    }), e.items = e.items.map(a.a), e.top_banners = n.i(a.b)(e.top_banners), e;
                });
            },
            getBuilding: function(t, e, i) {
                return n.i(o.a)("buildings/" + t, {
                    house_id: e || "",
                    consultant_group_id: i || ""
                }, {
                    loading: !1
                }).then(a.d);
            },
            getBuildingComments: function(t, e) {
                return n.i(o.a)("buildings/" + t + "/comments", e, {
                    loading: !1
                });
            },
            getBuildingCommentDetail: function(t, e) {
                return n.i(o.a)("buildings/" + t + "/comments/" + e, {
                    loading: !0
                });
            },
            newBuildingComment: function(t, e) {
                return n.i(o.a)("buildings/" + t + "/comments/new", e, {
                    loading: !0
                });
            },
            postBuildingComment: function(t, e) {
                return n.i(o.c)("buildings/" + t + "/comments", e, {
                    loading: !0
                }).then(function(t) {
                    if (422 !== t.code) return t;
                    wx.showModal({
                        title: "提示",
                        content: t.error_message,
                        showCancel: !1
                    });
                });
            },
            getCommunityTopics: function(t) {
                return n.i(o.a)("community_topics", t, {
                    loading: !0
                });
            },
            getCommunityTopicsDetail: function(t) {
                return n.i(o.a)("community_topics/" + t, {
                    loading: !0
                });
            },
            getTopicsComments: function(t) {
                return n.i(o.a)("comments", t, {
                    loading: !1
                });
            },
            postTopicsComment: function(t) {
                return n.i(o.c)("comments", t, {
                    loading: !0
                }).then(function(t) {
                    if (422 !== t.code) return t;
                    wx.showModal({
                        title: "提示",
                        content: t.error_message,
                        showCancel: !1
                    });
                });
            },
            likeComment: function(t) {
                return n.i(o.c)("comments/" + t + "/like", {
                    loading: !1
                });
            },
            delLikedComment: function(t) {
                return n.i(o.d)("comments/" + t + "/like", {
                    loading: !1
                });
            },
            getMyFavourite: function(t) {
                return n.i(o.a)("followed_houses", t, {
                    loading: !0
                }).then(function(t) {
                    return t.items = t.items.map(a.a), t;
                });
            },
            addMyFavourite: function(t) {
                return n.i(o.c)("followed_houses", t, {
                    loading: !1
                });
            },
            delMyFavourite: function(t) {
                return n.i(o.d)("followed_houses/" + t, {
                    loading: !1
                });
            },
            getMsg: function(t) {
                return n.i(o.a)("user_messages", t, {
                    loading: !1
                });
            },
            readAllMsg: function() {
                return n.i(o.c)("user_messages/read_all", {
                    loading: !1
                });
            },
            getNewMsgLen: function() {
                return u().then(function(t) {
                    return {
                        noticeCount: t.new_messages_count,
                        msgCount: t.unread_tim_messages_count
                    };
                });
            },
            initFeedEdit: function(t) {
                var e = {};
                return t && (e.building_id = t), n.i(o.a)("blogs/new", e, {
                    loading: !0
                });
            },
            getRecommendation: function(t, e) {
                return n.i(o.a)("recommendation", {
                    position: t,
                    limit: e
                }, {
                    loading: !1
                });
            },
            createBlog: function(t) {
                return n.i(o.c)("blogs", t, {
                    loading: !0
                });
            },
            getFeeds: function(t) {
                return n.i(o.a)("feeds", t, {
                    loading: !0
                });
            },
            getFeed: function(t) {
                return n.i(o.a)("feeds/" + t, {
                    loading: !1
                });
            },
            likeFeed: function(t, e) {
                return e ? n.i(o.d)("feeds/" + t + "/like", {
                    loading: !1
                }) : n.i(o.c)("feeds/" + t + "/like", {
                    loading: !1
                });
            },
            deleteFeed: function(t) {
                return n.i(o.d)("feeds/" + t, {
                    loading: !1
                });
            },
            getFeedComments: function(t, e) {
                return n.i(o.a)("feeds/" + t + "/comments", e, {
                    loading: !0
                });
            },
            addFeedComments: function(t, e) {
                return n.i(o.c)("feeds/" + t + "/comments", e, {
                    loading: !0
                });
            },
            getConsultantFeeds: function(t, e) {
                return n.i(o.a)("feeds", {
                    consultant_id: t,
                    page: e,
                    per: 10
                }, {
                    loading: !1
                });
            },
            getPopup: function(t, e) {
                return n.i(o.a)("popup_buildings", e, {
                    loading: !1
                });
            },
            interestingEvent: function(t) {
                return n.i(o.c)("interesting_events", t, {
                    loading: !1
                });
            },
            startSession: function(t) {
                var e = t.consultantId, i = t.sessionId;
                return e ? n.i(o.c)("tim_sessions", {
                    consultant_id: e
                }, {
                    loading: !1
                }) : n.i(o.a)("tim_sessions/" + i, {
                    loading: !1
                });
            },
            endSession: function(t) {
                return n.i(o.d)("tim_sessions/" + t, {
                    loading: !1
                });
            },
            getSessions: function() {
                return n.i(o.a)("tim_sessions", {
                    loading: !1
                });
            },
            readTimMsg: function(t) {
                return n.i(o.c)("tim_read_messages", {
                    _json: t
                }, {
                    loading: !1
                });
            },
            getCaptchas: function(t) {
                return n.i(o.c)("sms_captchas", {
                    mobile: t
                }, {
                    loading: !1
                });
            },
            updateWxUserInfo: function(t) {
                return n.i(o.e)("wx_user_info", t, {
                    loading: !1
                });
            },
            bankClients: function(t) {
                return n.i(o.c)("bank_clients", t, {
                    loading: !0
                });
            },
            bankClientsMaxLoanAmount: function(t) {
                return n.i(o.c)("bank_clients/max_loan_amount", t, {
                    loading: !0
                });
            }
        };
    },
    "0sEL": function(t, e) {},
    "0xDb": function(t, e, n) {
        e.a = function(t, e, n) {
            var i = null, o = 0;
            return function() {
                var a = this, s = arguments;
                return new r.a(function(r) {
                    if (n) {
                        var c = new Date().getTime();
                        c - o > e && (o = c, r(t.apply(a, s)));
                    } else i || setTimeout(function() {
                        i = null, r(t.apply(a, s));
                    }, e);
                });
            };
        };
        var i = n("//Fk"), r = n.n(i);
    },
    "162o": function(t, e, n) {
        (function(t) {
            function i(t, e) {
                this._id = t, this._clearFn = e;
            }
            var r = void 0 !== t && t || "undefined" != typeof self && self || window, o = Function.prototype.apply;
            e.setTimeout = function() {
                return new i(o.call(setTimeout, r, arguments), clearTimeout);
            }, e.setInterval = function() {
                return new i(o.call(setInterval, r, arguments), clearInterval);
            }, e.clearTimeout = e.clearInterval = function(t) {
                t && t.close();
            }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
                this._clearFn.call(r, this._id);
            }, e.enroll = function(t, e) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
            }, e.unenroll = function(t) {
                clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
            }, e._unrefActive = e.active = function(t) {
                clearTimeout(t._idleTimeoutId);
                var e = t._idleTimeout;
                e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                    t._onTimeout && t._onTimeout();
                }, e));
            }, n("mypn"), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, 
            e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate;
        }).call(e, n("DuR2"));
    },
    "1UfT": function(t, e, n) {
        var i = n("0jG4"), r = n("TMCY");
        e.a = {
            data: function() {
                return {
                    feed_liking: !1,
                    page: 1,
                    feeds_loading: !0,
                    feeds: [],
                    total_count: 0
                };
            },
            methods: {
                previewFeedsImg: function(t) {
                    var e = t.currentTarget.dataset, n = e.itemIndex, i = e.imgIndex, r = this.feeds[n].content_body.photos, o = r[i];
                    wx.previewImage({
                        current: o,
                        urls: r
                    });
                },
                onLike: function(t) {
                    var e = this;
                    if (!this.feed_liking) {
                        this.feed_liking = !0;
                        var n = t.currentTarget.dataset.index, r = this.feeds[n], o = r.is_liked, a = r.id;
                        i.a.likeFeed(a, o).then(function() {
                            r.is_liked = !o, o ? r.like_count-- : r.like_count++, e.feed_liking = !1;
                        });
                    }
                },
                likeArticle: function(t, e, n) {
                    r.a.like("Fc::Feed", t, e).then(n);
                },
                onFold: function(t) {
                    var e = t.currentTarget.dataset.index, n = this.feeds[e];
                    n.fold = !n.fold;
                },
                goEdit: function() {
                    this.is_consultant ? wx.navigateTo({
                        url: "/pages/house_circles/edit/main"
                    }) : this.show_permit = !0;
                },
                goComment: function(t) {
                    var e = t.currentTarget.dataset.id;
                    wx.navigateTo({
                        url: "/pages/house_circles/comments/main?id=" + e
                    });
                },
                goConsultant: function(t) {
                    var e = t.currentTarget.dataset.id;
                    e && wx.navigateTo({
                        url: "/pages/consultants/card/main?id=" + e
                    });
                },
                goDelete: function(t) {
                    var e = this, n = t.currentTarget.dataset.id;
                    wx.showModal({
                        title: "提示",
                        content: "确定要删除吗？",
                        success: function(t) {
                            t.confirm && e.deleteFeeds(n);
                        }
                    });
                },
                deleteFeeds: function(t) {
                    var e = this;
                    i.a.deleteFeed(t).then(function() {
                        var n = e.feeds;
                        wx.showToast({
                            title: "删除成功"
                        });
                        var i = -1;
                        n.some(function(e, n) {
                            if (e.id === t) return i = n, !0;
                        }), -1 !== i && (n.splice(i, 1), console.error(i, n.lengths), e.feeds = n);
                    });
                }
            }
        };
    },
    "1kS7": function(t, e) {
        e.f = Object.getOwnPropertySymbols;
    },
    "1zRr": function(t, e) {},
    "2CPo": function(t, e, n) {
        var i = n("uXTk"), r = n("Ccry");
        e.a = {
            mixins: [ i.a ],
            computed: {
                item_type: function() {
                    return "forthcoming_sale_list" === this.type ? "即将取证" : "";
                }
            },
            props: {
                list: {
                    type: Array
                },
                type: {
                    type: String
                }
            },
            components: {
                HouseItem: r.a
            }
        };
    },
    "2KxR": function(t, e) {
        t.exports = function(t, e, n, i) {
            if (!(t instanceof e) || void 0 !== i && i in t) throw TypeError(n + ": incorrect invocation!");
            return t;
        };
    },
    "2P3p": function(t, e, n) {
        var i = n("VPS7"), r = n("AvAe"), o = n("TMCY"), a = n("QGIh");
        e.a = {
            mixins: [ a.a ],
            methods: {
                setClipboardData: function(t) {
                },
                callConsultant: function(t) {
                    var e = this, n = t.currentTarget.dataset.id;
                    this.$showCallModal(function() {
                        e.getPhoneCall(n);
                    });
                },
                getPhoneCall: function(t) {
                    o.a.getPhonePosition({
                        consultant_id: t
                    }).then(function(e) {
                        var n = e.phone;
                        console.warn(n), i.a.makePhoneCall(n), r.a.callConsultant(t);
                    });
                },
                goViewer: function(t) {
                    var e = t.currentTarget.dataset.id;
                    wx.navigateTo({
                        url: "/pages/consultants/headimgs/main?id=" + e
                    });
                },
                goChat: function(t) {
                    this.pushFormSubmit(t);
                    var e = t.currentTarget.dataset.id;
                    r.a.contactConsultant(e), wx.navigateTo({
                        url: "/pages/chat_list/chat/main?consultant_id=" + e
                    });
                }
            }
        };
    },
    "2oOV": function(t, e) {},
    "3Eo+": function(t, e) {
        var n = 0, i = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36));
        };
    },
    "3KIH": function(t, e, n) {
        var i = n("XTtA"), r = n("vG7Y"), o = n("oeSR"), a = n("uayx"), s = n("6ouy"), c = n("OdEw"), u = n("BlQg");
        e.a = {
            data: function() {
                return {
                    selected: "",
                    decoration: "",
                    zone_ids: "",
                    area: "",
                    total_price: "",
                    price: "",
                    layout: "",
                    metro: "",
                    text: {
                        "区域": "区域",
                        "城区": "",
                        "地铁": "",
                        "价格": "价格",
                        "户型": "户型",
                        "面积": "面积",
                        "装修": "装修"
                    }
                };
            },
            created: function() {
                this.$watch(function() {
                    return this.text["城区"] + this.text["地铁"];
                }, function(t, e) {
                    t != e && (this.text["区域"] = t || "不限");
                });
            },
            onUnload: function() {
                this.text = {
                    "区域": "区域",
                    "城区": "",
                    "地铁": "",
                    "价格": "价格",
                    "户型": "户型",
                    "面积": "面积",
                    "装修": "装修"
                };
            },
            methods: {
                onSelect: function(t) {
                    var e = t.currentTarget.dataset.tab, n = e === this.selected;
                    this.selected = n ? "" : e, this.$emit("toggleFilter", !n);
                },
                changeZone: function(t, e, n) {
                    this.text["城区"] = "不限" === e ? "" : e, this.hideSelect(), this.$emit("change", {
                        zone_ids: t,
                        zone_section_ids: n
                    });
                },
                changeMetro: function(t) {
                    this.text["地铁"] = t, this.hideSelect(), this.$emit("change", {
                        metro: t
                    });
                },
                changePrice: function(t, e, n) {
                    this.text["价格"] = n, this.hideSelect();
                    var i = "water" === t ? e : "", r = "square" === t ? e : "";
                    this.$emit("change", {
                        total_price: i,
                        price: r
                    });
                },
                changeLayout: function(t) {
                    this.text["户型"] = t, this.hideSelect(), this.$emit("change", {
                        layout: t
                    });
                },
                changeArea: function(t, e) {
                    this.text["面积"] = e, this.hideSelect(), this.$emit("change", {
                        area: t
                    });
                },
                changeDecorate: function(t) {
                    this.text["装修"] = t, this.hideSelect(), this.$emit("change", {
                        decoration: t
                    });
                },
                hideSelect: function() {
                    this.selected = "", this.$emit("toggleFilter", !1);
                },
                changeZones: function(t, e) {
                    this.text["区域"] = e, this.hideSelect(), this.$emit("change", {
                        zone_ids: t
                    });
                },
                changeUseType: function(t) {
                    this.text["用途"] = t, this.hideSelect(), this.$emit("change", {
                        land_usage: t
                    });
                }
            },
            components: {
                ZoneSelect: i.a,
                PriceSelect: r.a,
                LayoutSelect: o.a,
                AreaSelect: a.a,
                DecorateSelect: s.a,
                ZonesSelect: c.a,
                UseType: u.a
            },
            props: {
                tabs: {
                    type: Array
                },
                decoration: {
                    type: String
                },
                zone_ids: {
                    type: String
                },
                zone_section_ids: {
                    type: String
                },
                area: {
                    type: String
                },
                total_price: {
                    type: String
                },
                price: {
                    type: String
                },
                layout: {
                    type: String
                },
                className: {
                    type: String
                },
                auction: {
                    type: Boolean
                },
                zones: {
                    type: Array
                }
            }
        };
    },
    "3Pc9": function(t, e) {},
    "3fs2": function(t, e, n) {
        var i = n("RY/4"), r = n("dSzd")("iterator"), o = n("/bQp");
        t.exports = n("FeBl").getIteratorMethod = function(t) {
            if (void 0 != t) return t[r] || t["@@iterator"] || o[i(t)];
        };
    },
    "3mrh": function(t, e) {},
    "4aY2": function(t, e, n) {
        var i = n("OQ2b");
        e.a = {
            data: function() {
                return {
                    show_all: !1,
                    max_length: 93
                };
            },
            computed: {
                show_operate: function() {
                    var t, e, n, i, r = this.item.content.match(/[\r\n]/g);
                    return t = this.item.content, e = t.match(/[^\x00-\xff]/g), n = e ? 2 * e.length : 0, 
                    i = t.match(/[\x00-\xff]/g), n + (i ? i.length : 0) > this.max_length || r && r.length > 2;
                }
            },
            methods: {
                toggleShow: function() {
                    this.show_all = !this.show_all;
                },
                goConsult: function(t) {
                    var e = this.item.author.consultant_id;
                    e && n.i(i.a)(t, function() {
                        wx.navigateTo({
                            url: "/pages/consultants/card/main?id=" + e
                        });
                    }, "认证用户信息后才可以咨询置业顾问");
                },
                previewImg: function(t) {
                    var e = t.currentTarget.dataset.index, n = this.item.photos_urls;
                    wx.previewImage({
                        current: n[e],
                        urls: n
                    });
                }
            }
        };
    },
    "4mcu": function(t, e) {
        t.exports = function() {};
    },
    "4vlg": function(t, e, n) {
        function i(t, e) {
            var n, i = void 0, r = void 0;
            try {
                i = t.toString().split(".")[1].length;
            } catch (t) {
                i = 0;
            }
            try {
                r = e.toString().split(".")[1].length;
            } catch (t) {
                r = 0;
            }
            return ((t * (n = Math.pow(10, Math.max(i, r))) - e * n) / n).toFixed(i >= r ? i : r);
        }
        n.d(e, "a", function() {
            return c;
        }), n.d(e, "g", function() {
            return f;
        }), n.d(e, "f", function() {
            return d;
        }), n.d(e, "k", function() {
            return p;
        }), n.d(e, "b", function() {
            return h;
        }), n.d(e, "h", function() {
            return g;
        }), n.d(e, "j", function() {
            return m;
        }), n.d(e, "i", function() {
            return v;
        }), n.d(e, "e", function() {
            return _;
        }), n.d(e, "d", function() {
            return y;
        }), n.d(e, "c", function() {
            return I;
        }), n.d(e, "l", function() {
            return T;
        });
        var r, o, a = n("bOdI"), s = n.n(a), c = "https://cdn.vip-wifi.com/fangchan/share-img/loan-computer.png", u = "interest", l = "principal", f = [ {
            type: "interest",
            text: "等额本息"
        }, {
            type: "principal",
            text: "等额本金"
        } ], d = f[0], p = {
            monthly_payment: 0,
            monthly_decrease: 0,
            total_interest: 0,
            total_payment: 0
        }, h = {
            BUSINESS: "商业贷款",
            PUBLIC_FUND: "公积金贷款",
            COMPOSE: "组合贷款"
        }, g = h.BUSINESS, m = new Array(30).fill().map(function(t, e) {
            return e + 1 + "年";
        }), v = parseInt(m[m.length - 1]), _ = (r = {}, s()(r, h.BUSINESS, function(t) {
            var e = "4.35";
            return t > 1 && t <= 5 ? e = "4.75" : t > 5 && (e = "4.90"), {
                tx: "基准利率",
                value: e
            };
        }), s()(r, h.PUBLIC_FUND, function(t) {
            return {
                tx: "基准利率",
                value: t > 5 ? "3.25" : "2.75"
            };
        }), r), y = function(t) {
            var e = Number(t).toFixed(2).split(".");
            return Number(e[0]).toLocaleString() + "." + e[1];
        }, x = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments[1], n = arguments[2], i = 1e4 * t, r = Math.pow(1 + n, e), o = i * n * r / (r - 1), a = o * e;
            return {
                monthly_payment: o,
                total_interest: a - i,
                total_payment: a
            };
        }, b = function(t, e, n, r, o) {
            var a = 1e4 * t, s = x(t, e, n).monthly_payment, c = a * n * (Math.pow(1 + n, e) - Math.pow(1 + n, r - 1)) / (Math.pow(1 + n, e) - 1), u = s - c, l = i(o, u);
            return {
                monthly_payment: s,
                base_payment: u,
                interest_payment: c,
                reset_payment: l > 1 ? l : 0
            };
        }, w = function(t, e, n, r, o) {
            var a = 1e4 * t, s = a / e, c = (a - (r - 1) * s) * n, u = s + c, l = i(o, s);
            return {
                monthly_payment: u,
                base_payment: s,
                interest_payment: c,
                reset_payment: l > 1 ? l : 0
            };
        }, C = (o = {}, s()(o, u, x), s()(o, l, function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e = arguments[1], n = arguments[2], i = 1e4 * t, r = i / e, o = (r + i * n + r * (1 + n)) / 2 * e - i;
            return {
                monthly_payment: i / e + i * n,
                total_interest: o,
                total_payment: o + i,
                monthly_decrease: r * n
            };
        }), o), S = function(t) {
            return t / 12 / 100;
        }, I = function(t) {
            var e = t.loan, n = t.type, i = 12 * t.year, r = C[n.type];
            if (t.loan_type === h.COMPOSE) {
                var o = r(t.business_loan, i, S(t.business_loan_rate)), a = r(t.public_loan, i, S(t.public_loan_rate));
                return {
                    monthly_payment: o.monthly_payment + a.monthly_payment,
                    total_interest: o.total_interest + a.total_interest,
                    total_payment: o.total_payment + a.total_payment,
                    monthly_decrease: o.monthly_decrease + a.monthly_decrease
                };
            }
            return r(e, i, S(t.loan_rate));
        }, M = function(t, e, n) {
            var i = t.type, r = t.loan_type, o = t.loan, a = t.loan_rate, s = 12 * t.year;
            return r === h.COMPOSE ? function(t, e, n, i) {
                var r = t.type, o = t.business_loan, a = t.public_loan, s = t.business_loan_rate, c = t.public_loan_rate, f = i.public_rest, d = i.business_rest, p = void 0, h = void 0;
                return r.type === u ? (p = b(Number(o), e, S(s), n, d), h = b(Number(a), e, S(c), n, f)) : r.type === l && (p = w(Number(o), e, S(s), n, d), 
                h = w(Number(a), e, S(c), n, f)), {
                    monthly_payment: p.monthly_payment + h.monthly_payment,
                    base_payment: p.base_payment + h.base_payment,
                    interest_payment: p.interest_payment + h.interest_payment,
                    reset_payment: {
                        business_rest: p.reset_payment,
                        public_rest: h.reset_payment
                    }
                };
            }(t, s, e, n) : i.type === u ? b(Number(o), s, S(a), e, n) : i.type === l ? w(Number(o), s, S(a), e, n) : void 0;
        }, T = function(t) {
            for (var e = t.from_date, n = t.year, i = [], r = e.split("-"), o = Number(r[0]), a = Number(r[1]), s = 12 * Number(n), c = 0, u = a, l = o, f = t.loan_type === h.COMPOSE ? {
                business_rest: 1e4 * t.business_loan,
                public_rest: 1e4 * t.public_loan
            } : 1e4 * t.loan; c < s; ) {
                for (var d = []; u <= 12 && c < s; u++) {
                    var p = M(t, c += 1, f), g = {
                        month: u,
                        data: p
                    };
                    f = p.reset_payment, d.push(g);
                }
                var m = {
                    year: l,
                    month_data_arr: d
                };
                m.total_payment = d.reduce(function(t, e) {
                    var n = e.data, i = n.monthly_payment, r = n.interest_payment;
                    return t.total_pay += i, t.total_interest_pay += r, t;
                }, {
                    total_pay: 0,
                    total_interest_pay: 0
                }), i.push(m), u = 1, l++;
            }
            return i;
        };
    },
    "51u1": function(t, e, n) {
        n.d(e, "a", function() {
            return i;
        }), n.d(e, "b", function() {
            return r;
        });
        var i = {
            gold: "金牌",
            silver: "",
            copper: ""
        }, r = "https://cdn.vip-wifi.com/fangchan/img/consultant-card/default_headimg.png";
    },
    "52gC": function(t, e) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t;
        };
    },
    "57T6": function(t, e) {},
    "5Cs7": function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", [ n("div", {
                    staticClass: "overlay",
                    style: [ {
                        display: t.show ? "block" : "none"
                    } ],
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: t.hide
                    }
                }), t._v(" "), n("div", {
                    staticClass: "search-select",
                    style: [ {
                        display: t.show ? "block" : "none"
                    } ]
                }, [ n("form", {
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        submit: t.submit
                    }
                }, [ n("div", {
                    staticClass: "content-wrap"
                }, [ n("img", {
                    attrs: {
                        src: "/static/img/search.png"
                    }
                }), t._v(" "), n("input", {
                    attrs: {
                        type: "text",
                        name: "keyword",
                        placeholder: "按楼盘名字搜索",
                        "confirm-type": "search"
                    }
                }), t._v(" "), n("button", {
                    attrs: {
                        "form-type": "submit"
                    }
                }, [ t._v("搜索") ]) ], 1) ]), t._v(" "), n("scroll-view", {
                    staticClass: "select",
                    attrs: {
                        "scroll-y": "true",
                        "scroll-into-view": t.select_view_id
                    }
                }, t._l(t.options, function(e, i) {
                    return n("div", {
                        key: i,
                        staticClass: "option",
                        class: [ {
                            active: e.id === t.selected
                        } ],
                        attrs: {
                            id: e.view_id,
                            "data-index": i,
                            eventid: "2-" + i
                        },
                        on: {
                            tap: function(e) {
                                e.preventDefault(), t.select(e);
                            }
                        }
                    }, [ n("span", [ t._v(t._s(e.name)) ]), t._v(" "), n("img", {
                        attrs: {
                            src: "/static/img/selected.png"
                        }
                    }) ]);
                })) ], 1) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    "5PlU": function(t, e, n) {
        var i = n("RY/4"), r = n("dSzd")("iterator"), o = n("/bQp");
        t.exports = n("FeBl").isIterable = function(t) {
            var e = Object(t);
            return void 0 !== e[r] || "@@iterator" in e || o.hasOwnProperty(i(e));
        };
    },
    "5Q4V": function(t, e, n) {
        var i = n("FG62"), r = n("F3iD"), o = n("ybqe")(i.a, r.a, function(t) {
            n("pxwY");
        }, null, null);
        e.a = o.exports;
    },
    "5QVw": function(t, e, n) {
        t.exports = {
            default: n("BwfY"),
            __esModule: !0
        };
    },
    "5nAL": function(e, n, i) {
        (function(n) {
            try {
                n || (n = {}), n.process = n.process || {}, n.process.env = n.process.env || {}, 
                n.App = n.App || App, n.Page = n.Page || Page, n.Component = n.Component || Component, 
                n.getApp = n.getApp || getApp;
            } catch (t) {}
            var i;
            i = function() {
                function e(t) {
                    return void 0 === t || null === t;
                }
                function i(t) {
                    return void 0 !== t && null !== t;
                }
                function r(t) {
                    return !0 === t;
                }
                function o(t) {
                    return "string" == typeof t || "number" == typeof t;
                }
                function a(e) {
                    return null !== e && "object" == (void 0 === e ? "undefined" : t(e));
                }
                function s(t) {
                    return "[object Object]" === zt.call(t);
                }
                function c(t) {
                    var e = parseFloat(t);
                    return e >= 0 && Math.floor(e) === e && isFinite(t);
                }
                function u(e) {
                    return null == e ? "" : "object" == (void 0 === e ? "undefined" : t(e)) ? JSON.stringify(e, null, 2) : String(e);
                }
                function l(t) {
                    var e = parseFloat(t);
                    return isNaN(e) ? t : e;
                }
                function f(t, e) {
                    for (var n = Object.create(null), i = t.split(","), r = 0; r < i.length; r++) n[i[r]] = !0;
                    return e ? function(t) {
                        return n[t.toLowerCase()];
                    } : function(t) {
                        return n[t];
                    };
                }
                function d(t, e) {
                    if (t.length) {
                        var n = t.indexOf(e);
                        if (n > -1) return t.splice(n, 1);
                    }
                }
                function p(t, e) {
                    return Ht.call(t, e);
                }
                function h(t) {
                    var e = Object.create(null);
                    return function(n) {
                        return e[n] || (e[n] = t(n));
                    };
                }
                function g(t, e) {
                    function n(n) {
                        var i = arguments.length;
                        return i ? i > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e);
                    }
                    return n._length = t.length, n;
                }
                function m(t, e) {
                    e = e || 0;
                    for (var n = t.length - e, i = new Array(n); n--; ) i[n] = t[n + e];
                    return i;
                }
                function v(t, e) {
                    for (var n in e) t[n] = e[n];
                    return t;
                }
                function _(t, e, n) {}
                function y(t, e) {
                    var n = a(t), i = a(e);
                    if (!n || !i) return !n && !i && String(t) === String(e);
                    try {
                        return JSON.stringify(t) === JSON.stringify(e);
                    } catch (n) {
                        return t === e;
                    }
                }
                function x(t, e) {
                    for (var n = 0; n < t.length; n++) if (y(t[n], e)) return n;
                    return -1;
                }
                function b(t) {
                    var e = !1;
                    return function() {
                        e || (e = !0, t.apply(this, arguments));
                    };
                }
                function w(t, e, n, i) {
                    Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !!i,
                        writable: !0,
                        configurable: !0
                    });
                }
                function C(t, e, n) {
                    if (re.errorHandler) re.errorHandler.call(null, t, e, n); else {
                        if (!ue || "undefined" == typeof console) throw t;
                        console.error(t);
                    }
                }
                function S(t) {
                    return "function" == typeof t && /native code/.test(t.toString());
                }
                function I(t, e, n) {
                    t.__proto__ = e;
                }
                function M(t, e, n) {
                    for (var i = 0, r = n.length; i < r; i++) {
                        var o = n[i];
                        w(t, o, e[o]);
                    }
                }
                function T(t, e, n) {
                    var i;
                    if (a(t)) return p(t, "__ob__") && t.__ob__ instanceof Me ? i = t.__ob__ : Ie.shouldConvert && !ge() && (Array.isArray(t) || s(t)) && Object.isExtensible(t) && !t._isVue && ((i = new Me(t, n)).__keyPath = i.__keyPath ? i.__keyPath : {}, 
                    i.__keyPath[n] = !0), e && i && i.vmCount++, i;
                }
                function A(t, e, n, i, r) {
                    var o = new xe(), a = Object.getOwnPropertyDescriptor(t, e);
                    if (!a || !1 !== a.configurable) {
                        var s = a && a.get, c = a && a.set, u = !r && T(n, void 0, e);
                        Object.defineProperty(t, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: function() {
                                var e = s ? s.call(t) : n;
                                return xe.target && (o.depend(), u && u.dep.depend(), Array.isArray(e) && function t(e) {
                                    for (var n = void 0, i = 0, r = e.length; i < r; i++) (n = e[i]) && n.__ob__ && n.__ob__.dep.depend(), 
                                    Array.isArray(n) && t(n);
                                }(e)), e;
                            },
                            set: function(i) {
                                var a = s ? s.call(t) : n;
                                i === a || i != i && a != a || (c ? c.call(t, i) : n = i, u = !r && T(i, void 0, e), 
                                o.notify(), t.__keyPath = t.__keyPath ? t.__keyPath : {}, t.__keyPath[e] = !0);
                            }
                        });
                    }
                }
                function k(t, e, n) {
                    if (Array.isArray(t) && c(e)) return t.length = Math.max(t.length, e), t.splice(e, 1, n), 
                    n;
                    if (p(t, e)) return t[e] = n, n;
                    var i = t.__ob__;
                    return t._isVue || i && i.vmCount ? n : i ? (A(i.value, e, n), t.__keyPath || (t.__keyPath = {}), 
                    t.__keyPath[e] = !0, i.dep.notify(), n) : (t[e] = n, n);
                }
                function E(t, e) {
                    if (Array.isArray(t) && c(e)) t.splice(e, 1); else {
                        var n = t.__ob__;
                        t._isVue || n && n.vmCount || p(t, e) && (delete t[e], n && (t.__keyPath || (t.__keyPath = {}), 
                        t.__keyPath[e] = "del", n.dep.notify()));
                    }
                }
                function O(t, e) {
                    if (!e) return t;
                    for (var n, i, r, o = Object.keys(e), a = 0; a < o.length; a++) i = t[n = o[a]], 
                    r = e[n], p(t, n) ? s(i) && s(r) && O(i, r) : k(t, n, r);
                    return t;
                }
                function P(t, e, n) {
                    return n ? t || e ? function() {
                        var i = "function" == typeof e ? e.call(n) : e, r = "function" == typeof t ? t.call(n) : void 0;
                        return i ? O(i, r) : r;
                    } : void 0 : e ? t ? function() {
                        return O("function" == typeof e ? e.call(this) : e, t.call(this));
                    } : e : t;
                }
                function F(t, e) {
                    return e ? t ? t.concat(e) : Array.isArray(e) ? e : [ e ] : t;
                }
                function D(t, e) {
                    var n = Object.create(t || null);
                    return e ? v(n, e) : n;
                }
                function R(t, e, n) {
                    function i(i) {
                        var r = Te[i] || Ae;
                        u[i] = r(t[i], e[i], n, i);
                    }
                    "function" == typeof e && (e = e.options), function(t) {
                        var e = t.props;
                        if (e) {
                            var n, i, r = {};
                            if (Array.isArray(e)) for (n = e.length; n--; ) "string" == typeof (i = e[n]) && (r[Xt(i)] = {
                                type: null
                            }); else if (s(e)) for (var o in e) i = e[o], r[Xt(o)] = s(i) ? i : {
                                type: i
                            };
                            t.props = r;
                        }
                    }(e), function(t) {
                        var e = t.inject;
                        if (Array.isArray(e)) for (var n = t.inject = {}, i = 0; i < e.length; i++) n[e[i]] = e[i];
                    }(e), function(t) {
                        var e = t.directives;
                        if (e) for (var n in e) {
                            var i = e[n];
                            "function" == typeof i && (e[n] = {
                                bind: i,
                                update: i
                            });
                        }
                    }(e);
                    var r = e.extends;
                    if (r && (t = R(t, r, n)), e.mixins) for (var o = 0, a = e.mixins.length; o < a; o++) t = R(t, e.mixins[o], n);
                    var c, u = {};
                    for (c in t) i(c);
                    for (c in e) p(t, c) || i(c);
                    return u;
                }
                function N(t, e, n, i) {
                    if ("string" == typeof n) {
                        var r = t[e];
                        if (p(r, n)) return r[n];
                        var o = Xt(n);
                        if (p(r, o)) return r[o];
                        var a = Wt(o);
                        return p(r, a) ? r[a] : r[n] || r[o] || r[a];
                    }
                }
                function L(t, e, n, i) {
                    var r = e[t], o = !p(n, t), a = n[t];
                    if (U(Boolean, r.type) && (o && !p(r, "default") ? a = !1 : U(String, r.type) || "" !== a && a !== Qt(t) || (a = !0)), 
                    void 0 === a) {
                        a = function(t, e, n) {
                            if (p(e, "default")) {
                                var i = e.default;
                                return t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t._props[n] ? t._props[n] : "function" == typeof i && "Function" !== G(e.type) ? i.call(t) : i;
                            }
                        }(i, r, t);
                        var s = Ie.shouldConvert;
                        Ie.shouldConvert = !0, T(a), Ie.shouldConvert = s;
                    }
                    return a;
                }
                function G(t) {
                    var e = t && t.toString().match(/^\s*function (\w+)/);
                    return e ? e[1] : "";
                }
                function U(t, e) {
                    if (!Array.isArray(e)) return G(e) === G(t);
                    for (var n = 0, i = e.length; n < i; n++) if (G(e[n]) === G(t)) return !0;
                    return !1;
                }
                function B(t) {
                    return new ke(void 0, void 0, void 0, String(t));
                }
                function j(t) {
                    var e = new ke(t.tag, t.data, t.children, t.text, t.elm, t.context, t.componentOptions, t.asyncFactory);
                    return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, 
                    e.isCloned = !0, e;
                }
                function q(t) {
                    for (var e = t.length, n = new Array(e), i = 0; i < e; i++) n[i] = j(t[i]);
                    return n;
                }
                function $(t) {
                    function e() {
                        var t = arguments, n = e.fns;
                        if (!Array.isArray(n)) return n.apply(null, arguments);
                        for (var i = n.slice(), r = 0; r < i.length; r++) i[r].apply(null, t);
                    }
                    return e.fns = t, e;
                }
                function z(t, e, n, r, o) {
                    if (i(e)) {
                        if (p(e, n)) return t[n] = e[n], o || delete e[n], !0;
                        if (p(e, r)) return t[n] = e[r], o || delete e[r], !0;
                    }
                    return !1;
                }
                function V(t) {
                    return o(t) ? [ B(t) ] : Array.isArray(t) ? function t(n, a) {
                        var s, c, u, l = [];
                        for (s = 0; s < n.length; s++) e(c = n[s]) || "boolean" == typeof c || (u = l[l.length - 1], 
                        Array.isArray(c) ? l.push.apply(l, t(c, (a || "") + "_" + s)) : o(c) ? Y(u) ? u.text += String(c) : "" !== c && l.push(B(c)) : Y(c) && Y(u) ? l[l.length - 1] = B(u.text + c.text) : (r(n._isVList) && i(c.tag) && e(c.key) && i(a) && (c.key = "__vlist" + a + "_" + s + "__"), 
                        l.push(c)));
                        return l;
                    }(t) : void 0;
                }
                function Y(t) {
                    return i(t) && i(t.text) && !1 === t.isComment;
                }
                function H(t, e) {
                    return t.__esModule && t.default && (t = t.default), a(t) ? e.extend(t) : t;
                }
                function K(t, e, n) {
                    n ? Oe.$once(t, e) : Oe.$on(t, e);
                }
                function X(t, e) {
                    Oe.$off(t, e);
                }
                function W(t, n, i) {
                    Oe = t, function(t, n, i, r, o) {
                        var a, s, c, u;
                        for (a in t) s = t[a], c = n[a], u = Fe(a), e(s) || (e(c) ? (e(s.fns) && (s = t[a] = $(s)), 
                        i(u.name, s, u.once, u.capture, u.passive)) : s !== c && (c.fns = s, t[a] = c));
                        for (a in n) e(t[a]) && r((u = Fe(a)).name, n[a], u.capture);
                    }(n, i || {}, K, X);
                }
                function J(t, e) {
                    var n = {};
                    if (!t) return n;
                    for (var i = [], r = 0, o = t.length; r < o; r++) {
                        var a = t[r];
                        if (a.context !== e && a.functionalContext !== e || !a.data || null == a.data.slot) i.push(a); else {
                            var s = a.data.slot, c = n[s] || (n[s] = []);
                            "template" === a.tag ? c.push.apply(c, a.children) : c.push(a);
                        }
                    }
                    return i.every(Q) || (n.default = i), n;
                }
                function Q(t) {
                    return t.isComment || " " === t.text;
                }
                function Z(t, e) {
                    e = e || {};
                    for (var n = 0; n < t.length; n++) Array.isArray(t[n]) ? Z(t[n], e) : e[t[n].key] = t[n].fn;
                    return e;
                }
                function tt(t, e, n) {
                    var i;
                    return t.$el = e, t.$options.render || (t.$options.render = Pe), it(t, "beforeMount"), 
                    i = function() {
                        t._update(t._render(), n);
                    }, t._watcher = new qe(t, i, _), n = !1, null == t.$vnode && (t._isMounted = !0, 
                    it(t, "mounted")), t;
                }
                function et(t) {
                    for (;t && (t = t.$parent); ) if (t._inactive) return !0;
                    return !1;
                }
                function nt(t, e) {
                    if (e) {
                        if (t._directInactive = !1, et(t)) return;
                    } else if (t._directInactive) return;
                    if (t._inactive || null === t._inactive) {
                        t._inactive = !1;
                        for (var n = 0; n < t.$children.length; n++) nt(t.$children[n]);
                        it(t, "activated");
                    }
                }
                function it(t, e) {
                    var n = t.$options[e];
                    if (n) for (var i = 0, r = n.length; i < r; i++) try {
                        n[i].call(t);
                    } catch (n) {
                        C(n, t, e + " hook");
                    }
                    t._hasHookEvent && t.$emit("hook:" + e);
                }
                function rt() {
                    var t, e;
                    for (Ue = !0, Re.sort(function(t, e) {
                        return t.id - e.id;
                    }), Be = 0; Be < Re.length; Be++) e = (t = Re[Be]).id, Le[e] = null, t.run();
                    var n = Ne.slice(), i = Re.slice();
                    Be = Re.length = Ne.length = 0, Le = {}, Ge = Ue = !1, function(t) {
                        for (var e = 0; e < t.length; e++) t[e]._inactive = !0, nt(t[e], !0);
                    }(n), function(t) {
                        for (var e = t.length; e--; ) {
                            var n = t[e], i = n.vm;
                            i._watcher === n && i._isMounted && it(i, "updated");
                        }
                    }(i), me && re.devtools && me.emit("flush");
                }
                function ot(t, e, n) {
                    ze.get = function() {
                        return this[e][n];
                    }, ze.set = function(t) {
                        this[e][n] = t;
                    }, Object.defineProperty(t, n, ze);
                }
                function at(t) {
                    t._watchers = [];
                    var e = t.$options;
                    e.props && function(t, e) {
                        var n = t.$options.propsData || {}, i = t._props = {}, r = t.$options._propKeys = [], o = !t.$parent;
                        Ie.shouldConvert = o;
                        for (var a in e) !function(o) {
                            r.push(o);
                            var a = L(o, e, n, t);
                            A(i, o, a), o in t || ot(t, "_props", o);
                        }(a);
                        Ie.shouldConvert = !0;
                    }(t, e.props), e.methods && function(t, e) {
                        t.$options.props;
                        for (var n in e) t[n] = null == e[n] ? _ : g(e[n], t);
                    }(t, e.methods), e.data ? function(t) {
                        var e = t.$options.data;
                        s(e = t._data = "function" == typeof e ? function(t, e) {
                            try {
                                return t.call(e);
                            } catch (t) {
                                return C(t, e, "data()"), {};
                            }
                        }(e, t) : e || {}) || (e = {});
                        for (var n = Object.keys(e), i = t.$options.props, r = (t.$options.methods, n.length); r--; ) {
                            var o = n[r];
                            i && p(i, o) || 36 !== (a = (o + "").charCodeAt(0)) && 95 !== a && ot(t, "_data", o);
                        }
                        var a;
                        T(e, !0);
                    }(t) : T(t._data = {}, !0), e.computed && function(t, e) {
                        var n = t._computedWatchers = Object.create(null);
                        for (var i in e) {
                            var r = e[i], o = "function" == typeof r ? r : r.get;
                            n[i] = new qe(t, o, _, Ve), i in t || st(t, i, r);
                        }
                    }(t, e.computed), e.watch && e.watch !== de && function(t, e) {
                        for (var n in e) {
                            var i = e[n];
                            if (Array.isArray(i)) for (var r = 0; r < i.length; r++) ut(t, n, i[r]); else ut(t, n, i);
                        }
                    }(t, e.watch);
                }
                function st(t, e, n) {
                    "function" == typeof n ? (ze.get = ct(e), ze.set = _) : (ze.get = n.get ? !1 !== n.cache ? ct(e) : n.get : _, 
                    ze.set = n.set ? n.set : _), Object.defineProperty(t, e, ze);
                }
                function ct(t) {
                    return function() {
                        var e = this._computedWatchers && this._computedWatchers[t];
                        if (e) return e.dirty && e.evaluate(), xe.target && e.depend(), e.value;
                    };
                }
                function ut(t, e, n, i) {
                    return s(n) && (i = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, i);
                }
                function lt(t, e) {
                    if (t) {
                        for (var n = Object.create(null), i = ve ? Reflect.ownKeys(t) : Object.keys(t), r = 0; r < i.length; r++) for (var o = i[r], a = t[o], s = e; s; ) {
                            if (s._provided && a in s._provided) {
                                n[o] = s._provided[a];
                                break;
                            }
                            s = s.$parent;
                        }
                        return n;
                    }
                }
                function ft(t, e) {
                    for (var n in e) t[Xt(n)] = e[n];
                }
                function dt(t, n, o, s, c) {
                    if (!e(t)) {
                        var u = o.$options._base;
                        if (a(t) && (t = u.extend(t)), "function" == typeof t) {
                            var l;
                            if (e(t.cid) && void 0 === (t = function(t, n, o) {
                                if (r(t.error) && i(t.errorComp)) return t.errorComp;
                                if (i(t.resolved)) return t.resolved;
                                if (r(t.loading) && i(t.loadingComp)) return t.loadingComp;
                                if (!i(t.contexts)) {
                                    var s = t.contexts = [ o ], c = !0, u = function() {
                                        for (var t = 0, e = s.length; t < e; t++) s[t].$forceUpdate();
                                    }, l = b(function(e) {
                                        t.resolved = H(e, n), c || u();
                                    }), f = b(function(e) {
                                        i(t.errorComp) && (t.error = !0, u());
                                    }), d = t(l, f);
                                    return a(d) && ("function" == typeof d.then ? e(t.resolved) && d.then(l, f) : i(d.component) && "function" == typeof d.component.then && (d.component.then(l, f), 
                                    i(d.error) && (t.errorComp = H(d.error, n)), i(d.loading) && (t.loadingComp = H(d.loading, n), 
                                    0 === d.delay ? t.loading = !0 : setTimeout(function() {
                                        e(t.resolved) && e(t.error) && (t.loading = !0, u());
                                    }, d.delay || 200)), i(d.timeout) && setTimeout(function() {
                                        e(t.resolved) && f(null);
                                    }, d.timeout))), c = !1, t.loading ? t.loadingComp : t.resolved;
                                }
                                t.contexts.push(o);
                            }(l = t, u, o))) return function(t, e, n, i, r) {
                                var o = Pe();
                                return o.asyncFactory = t, o.asyncMeta = {
                                    data: e,
                                    context: n,
                                    children: i,
                                    tag: r
                                }, o;
                            }(l, n, o, s, c);
                            n = n || {}, It(t), i(n.model) && function(t, e) {
                                var n = t.model && t.model.prop || "value", r = t.model && t.model.event || "input";
                                (e.props || (e.props = {}))[n] = e.model.value;
                                var o = e.on || (e.on = {});
                                i(o[r]) ? o[r] = [ e.model.callback ].concat(o[r]) : o[r] = e.model.callback;
                            }(t.options, n);
                            var f = function(t, n, r) {
                                var o = n.options.props;
                                if (!e(o)) {
                                    var a = {}, s = t.attrs, c = t.props;
                                    if (i(s) || i(c)) for (var u in o) {
                                        var l = Qt(u);
                                        z(a, c, u, l, !0) || z(a, s, u, l, !1);
                                    }
                                    return a;
                                }
                            }(n, t);
                            if (r(t.options.functional)) return function(t, e, n, r, o) {
                                var a = {}, s = t.options.props;
                                if (i(s)) for (var c in s) a[c] = L(c, s, e || {}); else i(n.attrs) && ft(a, n.attrs), 
                                i(n.props) && ft(a, n.props);
                                var u = Object.create(r), l = t.options.render.call(null, function(t, e, n, i) {
                                    return ht(u, t, e, n, i, !0);
                                }, {
                                    data: n,
                                    props: a,
                                    children: o,
                                    parent: r,
                                    listeners: n.on || {},
                                    injections: lt(t.options.inject, r),
                                    slots: function() {
                                        return J(o, r);
                                    }
                                });
                                return l instanceof ke && (l.functionalContext = r, l.functionalOptions = t.options, 
                                n.slot && ((l.data || (l.data = {})).slot = n.slot)), l;
                            }(t, f, n, o, s);
                            var d = n.on;
                            if (r(t.options.abstract)) {
                                var p = n.slot;
                                n = {}, p && (n.slot = p);
                            }
                            !function(t) {
                                t.hook || (t.hook = {});
                                for (var e = 0; e < He.length; e++) {
                                    var n = He[e], i = t.hook[n], r = Ye[n];
                                    t.hook[n] = i ? pt(r, i) : r;
                                }
                            }(n);
                            var h = t.options.name || c;
                            return new ke("vue-component-" + t.cid + (h ? "-" + h : ""), n, void 0, void 0, void 0, o, {
                                Ctor: t,
                                propsData: f,
                                listeners: d,
                                tag: c,
                                children: s
                            }, l);
                        }
                    }
                }
                function pt(t, e) {
                    return function(n, i, r, o) {
                        t(n, i, r, o), e(n, i, r, o);
                    };
                }
                function ht(t, n, a, s, c, u) {
                    return (Array.isArray(a) || o(a)) && (c = s, s = a, a = void 0), r(u) && (c = Xe), 
                    function(t, n, r, o, a) {
                        if (i(r) && i(r.__ob__)) return Pe();
                        if (i(r) && i(r.is) && (n = r.is), !n) return Pe();
                        Array.isArray(o) && "function" == typeof o[0] && ((r = r || {}).scopedSlots = {
                            default: o[0]
                        }, o.length = 0), a === Xe ? o = V(o) : a === Ke && (o = function(t) {
                            for (var e = 0; e < t.length; e++) if (Array.isArray(t[e])) return Array.prototype.concat.apply([], t);
                            return t;
                        }(o));
                        var s, c;
                        if ("string" == typeof n) {
                            var u;
                            c = re.getTagNamespace(n), s = re.isReservedTag(n) ? new ke(re.parsePlatformTagName(n), r, o, void 0, void 0, t) : i(u = N(t.$options, "components", n)) ? dt(u, r, t, o, n) : new ke(n, r, o, void 0, void 0, t);
                        } else s = dt(n, r, t, o);
                        return i(s) ? (c && function t(n, r) {
                            if (n.ns = r, "foreignObject" !== n.tag && i(n.children)) for (var o = 0, a = n.children.length; o < a; o++) {
                                var s = n.children[o];
                                i(s.tag) && e(s.ns) && t(s, r);
                            }
                        }(s, c), s) : Pe();
                    }(t, n, a, s, c);
                }
                function gt(t, e) {
                    var n, r, o, s, c;
                    if (Array.isArray(t) || "string" == typeof t) for (n = new Array(t.length), r = 0, 
                    o = t.length; r < o; r++) n[r] = e(t[r], r); else if ("number" == typeof t) for (n = new Array(t), 
                    r = 0; r < t; r++) n[r] = e(r + 1, r); else if (a(t)) for (s = Object.keys(t), n = new Array(s.length), 
                    r = 0, o = s.length; r < o; r++) c = s[r], n[r] = e(t[c], c, r);
                    return i(n) && (n._isVList = !0), n;
                }
                function mt(t, e, n, i) {
                    var r = this.$scopedSlots[t];
                    return r ? (n = n || {}, i && (n = v(v({}, i), n)), r(n) || e) : this.$slots[t] || e;
                }
                function vt(t) {
                    return N(this.$options, "filters", t) || te;
                }
                function _t(t, e, n) {
                    var i = re.keyCodes[e] || n;
                    return Array.isArray(i) ? -1 === i.indexOf(t) : i !== t;
                }
                function yt(t, e, n, i, r) {
                    if (n && a(n)) {
                        var o;
                        Array.isArray(n) && (n = function(t) {
                            for (var e = {}, n = 0; n < t.length; n++) t[n] && v(e, t[n]);
                            return e;
                        }(n));
                        for (var s in n) !function(a) {
                            if ("class" === a || "style" === a || Yt(a)) o = t; else {
                                var s = t.attrs && t.attrs.type;
                                o = i || re.mustUseProp(e, s, a) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
                            }
                            a in o || (o[a] = n[a], r && ((t.on || (t.on = {}))["update:" + a] = function(t) {
                                n[a] = t;
                            }));
                        }(s);
                    }
                    return t;
                }
                function xt(t, e) {
                    var n = this._staticTrees[t];
                    return n && !e ? Array.isArray(n) ? q(n) : j(n) : (wt(n = this._staticTrees[t] = this.$options.staticRenderFns[t].call(this._renderProxy), "__static__" + t, !1), 
                    n);
                }
                function bt(t, e, n) {
                    return wt(t, "__once__" + e + (n ? "_" + n : ""), !0), t;
                }
                function wt(t, e, n) {
                    if (Array.isArray(t)) for (var i = 0; i < t.length; i++) t[i] && "string" != typeof t[i] && Ct(t[i], e + "_" + i, n); else Ct(t, e, n);
                }
                function Ct(t, e, n) {
                    t.isStatic = !0, t.key = e, t.isOnce = n;
                }
                function St(t, e) {
                    if (e && s(e)) {
                        var n = t.on = t.on ? v({}, t.on) : {};
                        for (var i in e) {
                            var r = n[i], o = e[i];
                            n[i] = r ? [].concat(o, r) : o;
                        }
                    }
                    return t;
                }
                function It(t) {
                    var e = t.options;
                    if (t.super) {
                        var n = It(t.super);
                        if (n !== t.superOptions) {
                            t.superOptions = n;
                            var i = function(t) {
                                var e, n = t.options, i = t.extendOptions, r = t.sealedOptions;
                                for (var o in n) n[o] !== r[o] && (e || (e = {}), e[o] = Mt(n[o], i[o], r[o]));
                                return e;
                            }(t);
                            i && v(t.extendOptions, i), (e = t.options = R(n, t.extendOptions)).name && (e.components[e.name] = t);
                        }
                    }
                    return e;
                }
                function Mt(t, e, n) {
                    if (Array.isArray(t)) {
                        var i = [];
                        n = Array.isArray(n) ? n : [ n ], e = Array.isArray(e) ? e : [ e ];
                        for (var r = 0; r < t.length; r++) (e.indexOf(t[r]) >= 0 || n.indexOf(t[r]) < 0) && i.push(t[r]);
                        return i;
                    }
                    return t;
                }
                function Tt(t) {
                    this._init(t);
                }
                function At(t) {
                    t.cid = 0;
                    var e = 1;
                    t.extend = function(t) {
                        t = t || {};
                        var n = this, i = n.cid, r = t._Ctor || (t._Ctor = {});
                        if (r[i]) return r[i];
                        var o = t.name || n.options.name, a = function(t) {
                            this._init(t);
                        };
                        return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = e++, 
                        a.options = R(n.options, t), a.super = n, a.options.props && function(t) {
                            var e = t.options.props;
                            for (var n in e) ot(t.prototype, "_props", n);
                        }(a), a.options.computed && function(t) {
                            var e = t.options.computed;
                            for (var n in e) st(t.prototype, n, e[n]);
                        }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, ne.forEach(function(t) {
                            a[t] = n[t];
                        }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = t, 
                        a.sealedOptions = v({}, a.options), r[i] = a, a;
                    };
                }
                function kt(t) {
                    return t && (t.Ctor.options.name || t.tag);
                }
                function Et(t, e) {
                    return Array.isArray(t) ? t.indexOf(e) > -1 : "string" == typeof t ? t.split(",").indexOf(e) > -1 : (n = t, 
                    "[object RegExp]" === zt.call(n) && t.test(e));
                    var n;
                }
                function Ot(t, e, n) {
                    for (var i in t) {
                        var r = t[i];
                        if (r) {
                            var o = kt(r.componentOptions);
                            o && !n(o) && (r !== e && Pt(r), t[i] = null);
                        }
                    }
                }
                function Pt(t) {
                    t && t.componentInstance.$destroy();
                }
                function Ft(t) {
                    return t && t.$attrs ? t.$attrs.mpcomid : "0";
                }
                function Dt(t, e) {
                    var n = t.data.ref;
                    if (n) {
                        var i = t.context, r = t.componentInstance || t.elm, o = i.$refs;
                        e ? Array.isArray(o[n]) ? d(o[n], r) : o[n] === r && (o[n] = void 0) : t.data.refInFor ? Array.isArray(o[n]) ? o[n].indexOf(r) < 0 && o[n].push(r) : o[n] = [ r ] : o[n] = r;
                    }
                }
                function Rt(t, n) {
                    return t.key === n.key && (t.tag === n.tag && t.isComment === n.isComment && i(t.data) === i(n.data) && function(t, e) {
                        if ("input" !== t.tag) return !0;
                        var n;
                        return (i(n = t.data) && i(n = n.attrs) && n.type) === (i(n = e.data) && i(n = n.attrs) && n.type);
                    }(t, n) || r(t.isAsyncPlaceholder) && t.asyncFactory === n.asyncFactory && e(n.asyncFactory.error));
                }
                function Nt(t, e, n) {
                    var r, o, a = {};
                    for (r = e; r <= n; ++r) i(o = t[r].key) && (a[o] = r);
                    return a;
                }
                function Lt(t, e, n) {
                    var i, r = t.$options[e];
                    if ("onError" === e && r ? r = [ r ] : "onPageNotFound" === e && r && (r = [ r ]), 
                    r) for (var o = 0, a = r.length; o < a; o++) try {
                        i = r[o].call(t, n);
                    } catch (n) {
                        C(n, t, e + " hook");
                    }
                    return t._hasHookEvent && t.$emit("hook:" + e), t.$children.length && t.$children.forEach(function(t) {
                        return Lt(t, e, n);
                    }), i;
                }
                function Gt(t, e, n) {
                    if (t) {
                        var i, r, o;
                        if (Array.isArray(t)) for (i = t.length; i--; ) "string" == typeof (r = t[i]) && (e[o = Xt(r)] = {
                            type: null
                        }); else if (s(t)) for (var a in t) r = t[a], e[o = Xt(a)] = s(r) ? r : {
                            type: r
                        };
                        for (var c in e) if (e.hasOwnProperty(c)) {
                            var u = e[c];
                            u.default && (u.value = u.default);
                            var l = u.observer;
                            u.observer = function(t, e) {
                                n[o] = t, "function" == typeof l && l.call(n, t, e);
                            };
                        }
                        return e;
                    }
                }
                function Ut(t, e, n, i, r) {
                    try {
                        var o = function t(e, n) {
                            if (e.length > 1) {
                                var i = n[e.splice(0, 1)];
                                return i ? t(e, i) : null;
                            }
                            return n[e[0]] ? n[e[0]] : null;
                        }(t.split("."), n.$root.$mp.page.data);
                        (null === o || JSON.stringify(o) !== JSON.stringify(e) || r) && (i[t] = e);
                    } catch (i) {
                        console.log(i, t, e, n);
                    }
                }
                function Bt(t, e, n, i, r, o) {
                    try {
                        if (n instanceof Array) Ut(t + "." + e, n, o, i, !0); else {
                            var a = {};
                            n.__keyPath ? (a = n.__keyPath, Object.keys(n).forEach(function(r) {
                                if (n[r] instanceof Object) {
                                    if ("__keyPath" === r) return;
                                    Bt(t + "." + e, r, n[r], i, null, o);
                                } else !0 === a[r] && (e ? i[t + "." + e + "." + r] = n[r] : i[t + "." + r] = n[r]);
                            }), o.__mpKeyPath = o.__mpKeyPath || {}, o.__mpKeyPath[n.__ob__.dep.id] = n) : Ut(t + "." + e, n, o, i);
                        }
                    } catch (r) {
                        console.log(r, t, e, n, i);
                    }
                }
                function jt(t, e) {
                    var n = t._data || {}, i = t._props || {}, r = "";
                    r = t.$attrs ? function t(e, n) {
                        return e.$parent.$attrs ? (n = e.$parent.$attrs.mpcomid + "," + n, t(e.$parent, n)) : n = "$root.0," + n;
                    }(t, t.$attrs.mpcomid) : "$root.0", Tt.nextTick(function() {
                        !function(t) {
                            t.__mpKeyPath && Object.keys(t.__mpKeyPath).forEach(function(e) {
                                delete t.__mpKeyPath[e].__keyPath;
                            });
                        }(t);
                    });
                    var o, a = n.__keyPath || t.__keyPath || {};
                    if (delete t.__keyPath, delete n.__keyPath, delete i.__keyPath, "done" === t._mpValueSet) {
                        Object.keys(n).forEach(function(i) {
                            if (n[i] instanceof Object) {
                                if ("__keyPath" === i) return;
                                Bt(r, i, n[i], e, t._mpValueSet, t);
                            } else void 0 !== n[i] && !0 === a[i] && (e[r + "." + i] = n[i]);
                        }), Object.keys(i).forEach(function(n) {
                            if (i[n] instanceof Object) {
                                if ("__keyPath" === n) return;
                                Bt(r, n, i[n], e, t._mpValueSet, t);
                            } else void 0 !== i[n] && (e[r + "." + n] = i[n]);
                        });
                        var s = t._mpProps || {}, c = t._computedWatchers || {};
                        Object.keys(s).forEach(function(n) {
                            e[r + "." + n] = t[n];
                        }), Object.keys(c).forEach(function(n) {
                            e[r + "." + n] = t[n];
                        }), delete e[r];
                    }
                    void 0 === t._mpValueSet && (t._mpValueSet = "done"), Tt.config._mpTrace && (o = e, 
                    o = JSON.stringify(o), Tt._mpvueTraceTimer ? Tt._mpvueTraceTimer && (o = o.replace(/[^\u0000-\u00ff]/g, "aa"), 
                    un += o.length) : Tt._mpvueTraceTimer = setTimeout(function() {
                        clearTimeout(Tt._mpvueTraceTimer), un = (un / 1024).toFixed(1), console.log("这次操作引发500ms内数据更新量:" + un + "kb"), 
                        Tt._mpvueTraceTimer = 0, un = 0;
                    }, 500));
                }
                function qt(t) {
                    var e = function t(e, n) {
                        void 0 === n && (n = []);
                        var i = (e || {}).$parent;
                        return i ? (n.unshift(Ft(i)), i.$parent ? t(i, n) : n) : n;
                    }(t).join(","), n = e + (e ? "," : "") + Ft(t), i = Object.assign(function(t) {
                        return [].concat(Object.keys(t._data || {}), Object.keys(t._props || {}), Object.keys(t._mpProps || {}), Object.keys(t._computedWatchers || {})).reduce(function(e, n) {
                            return e[n] = t[n], e;
                        }, {});
                    }(t), {
                        $k: n,
                        $kk: n + ",",
                        $p: e
                    }), r = {};
                    return r["$root." + n] = i, r;
                }
                function $t(t) {
                    var e = t.$root.$mp || {}, n = e.mpType;
                    void 0 === n && (n = "");
                    var i = e.page;
                    if ("app" !== n && i && "function" == typeof i.setData) return i;
                }
                var zt = Object.prototype.toString;
                f("slot,component", !0);
                var Vt, Yt = f("key,ref,slot,is"), Ht = Object.prototype.hasOwnProperty, Kt = /-(\w)/g, Xt = h(function(t) {
                    return t.replace(Kt, function(t, e) {
                        return e ? e.toUpperCase() : "";
                    });
                }), Wt = h(function(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1);
                }), Jt = /([^-])([A-Z])/g, Qt = h(function(t) {
                    return t.replace(Jt, "$1-$2").replace(Jt, "$1-$2").toLowerCase();
                }), Zt = function(t, e, n) {
                    return !1;
                }, te = function(t) {
                    return t;
                }, ee = "data-server-rendered", ne = [ "component", "directive", "filter" ], ie = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "onLaunch", "onLoad", "onShow", "onReady", "onHide", "onUnload", "onPullDownRefresh", "onReachBottom", "onShareAppMessage", "onPageScroll", "onTabItemTap", "attached", "ready", "moved", "detached" ], re = {
                    optionMergeStrategies: Object.create(null),
                    silent: !1,
                    productionTip: !1,
                    devtools: !1,
                    performance: !1,
                    errorHandler: null,
                    warnHandler: null,
                    ignoredElements: [],
                    keyCodes: Object.create(null),
                    isReservedTag: Zt,
                    isReservedAttr: Zt,
                    isUnknownElement: Zt,
                    getTagNamespace: _,
                    parsePlatformTagName: te,
                    mustUseProp: Zt,
                    _lifecycleHooks: ie
                }, oe = Object.freeze({}), ae = /[^\w.$]/, se = _, ce = "__proto__" in {}, ue = "undefined" != typeof window, le = [ "mpvue-runtime" ].join(), fe = (le && /msie|trident/.test(le), 
                le && le.indexOf("msie 9.0"), le && le.indexOf("edge/"), le && le.indexOf("android"), 
                le && /iphone|ipad|ipod|ios/.test(le)), de = (le && /chrome\/\d+/.test(le), {}.watch);
                if (ue) try {
                    var pe = {};
                    Object.defineProperty(pe, "passive", {
                        get: function() {}
                    }), window.addEventListener("test-passive", null, pe);
                } catch (e) {}
                var he, ge = function() {
                    return void 0 === Vt && (Vt = !ue && void 0 !== n && "server" === n.process.env.VUE_ENV), 
                    Vt;
                }, me = ue && window.__VUE_DEVTOOLS_GLOBAL_HOOK__, ve = "undefined" != typeof Symbol && S(Symbol) && "undefined" != typeof Reflect && S(Reflect.ownKeys), _e = function() {
                    function t() {
                        i = !1;
                        var t = n.slice(0);
                        n.length = 0;
                        for (var e = 0; e < t.length; e++) t[e]();
                    }
                    var e, n = [], i = !1;
                    if ("undefined" != typeof Promise && S(Promise)) {
                        var r = Promise.resolve(), o = function(t) {
                            console.error(t);
                        };
                        e = function() {
                            r.then(t).catch(o), fe && setTimeout(_);
                        };
                    } else e = function() {
                        setTimeout(t, 0);
                    };
                    return function(t, r) {
                        var o;
                        if (n.push(function() {
                            if (t) try {
                                t.call(r);
                            } catch (t) {
                                C(t, r, "nextTick");
                            } else o && o(r);
                        }), i || (i = !0, e()), !t && "undefined" != typeof Promise) return new Promise(function(t, e) {
                            o = t;
                        });
                    };
                }();
                he = "undefined" != typeof Set && S(Set) ? Set : function() {
                    function t() {
                        this.set = Object.create(null);
                    }
                    return t.prototype.has = function(t) {
                        return !0 === this.set[t];
                    }, t.prototype.add = function(t) {
                        this.set[t] = !0;
                    }, t.prototype.clear = function() {
                        this.set = Object.create(null);
                    }, t;
                }();
                var ye = 0, xe = function() {
                    this.id = ye++, this.subs = [];
                };
                xe.prototype.addSub = function(t) {
                    this.subs.push(t);
                }, xe.prototype.removeSub = function(t) {
                    d(this.subs, t);
                }, xe.prototype.depend = function() {
                    xe.target && xe.target.addDep(this);
                }, xe.prototype.notify = function() {
                    for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++) t[e].update();
                }, xe.target = null;
                var be = [], we = Array.prototype, Ce = Object.create(we);
                [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(t) {
                    var e = we[t];
                    w(Ce, t, function() {
                        for (var n = [], i = arguments.length; i--; ) n[i] = arguments[i];
                        var r, o = e.apply(this, n), a = this.__ob__;
                        switch (t) {
                          case "push":
                          case "unshift":
                            r = n;
                            break;

                          case "splice":
                            r = n.slice(2);
                        }
                        return r && a.observeArray(r), a.dep.notify(), o;
                    });
                });
                var Se = Object.getOwnPropertyNames(Ce), Ie = {
                    shouldConvert: !0
                }, Me = function(t, e) {
                    this.value = t, this.dep = new xe(), this.vmCount = 0, e && (this.key = e), w(t, "__ob__", this), 
                    Array.isArray(t) ? ((ce ? I : M)(t, Ce, Se), this.observeArray(t)) : this.walk(t);
                };
                Me.prototype.walk = function(t) {
                    for (var e = Object.keys(t), n = 0; n < e.length; n++) A(t, e[n], t[e[n]]);
                }, Me.prototype.observeArray = function(t) {
                    for (var e = 0, n = t.length; e < n; e++) T(t[e]);
                };
                var Te = re.optionMergeStrategies;
                Te.data = function(t, e, n) {
                    return n ? P(t, e, n) : e && "function" != typeof e ? t : P.call(this, t, e);
                }, ie.forEach(function(t) {
                    Te[t] = F;
                }), ne.forEach(function(t) {
                    Te[t + "s"] = D;
                }), Te.watch = function(t, e) {
                    if (t === de && (t = void 0), e === de && (e = void 0), !e) return Object.create(t || null);
                    if (!t) return e;
                    var n = {};
                    for (var i in v(n, t), e) {
                        var r = n[i], o = e[i];
                        r && !Array.isArray(r) && (r = [ r ]), n[i] = r ? r.concat(o) : Array.isArray(o) ? o : [ o ];
                    }
                    return n;
                }, Te.props = Te.methods = Te.inject = Te.computed = function(t, e) {
                    if (!e) return Object.create(t || null);
                    if (!t) return e;
                    var n = Object.create(null);
                    return v(n, t), v(n, e), n;
                }, Te.provide = P;
                var Ae = function(t, e) {
                    return void 0 === e ? t : e;
                }, ke = function(t, e, n, i, r, o, a, s) {
                    this.tag = t, this.data = e, this.children = n, this.text = i, this.elm = r, this.ns = void 0, 
                    this.context = o, this.functionalContext = void 0, this.key = e && e.key, this.componentOptions = a, 
                    this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, 
                    this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, 
                    this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
                }, Ee = {
                    child: {}
                };
                Ee.child.get = function() {
                    return this.componentInstance;
                }, Object.defineProperties(ke.prototype, Ee);
                var Oe, Pe = function(t) {
                    void 0 === t && (t = "");
                    var e = new ke();
                    return e.text = t, e.isComment = !0, e;
                }, Fe = h(function(t) {
                    var e = "&" === t.charAt(0), n = "~" === (t = e ? t.slice(1) : t).charAt(0), i = "!" === (t = n ? t.slice(1) : t).charAt(0);
                    return {
                        name: t = i ? t.slice(1) : t,
                        once: n,
                        capture: i,
                        passive: e
                    };
                }), De = null, Re = [], Ne = [], Le = {}, Ge = !1, Ue = !1, Be = 0, je = 0, qe = function(t, e, n, i) {
                    this.vm = t, t._watchers.push(this), i ? (this.deep = !!i.deep, this.user = !!i.user, 
                    this.lazy = !!i.lazy, this.sync = !!i.sync) : this.deep = this.user = this.lazy = this.sync = !1, 
                    this.cb = n, this.id = ++je, this.active = !0, this.dirty = this.lazy, this.deps = [], 
                    this.newDeps = [], this.depIds = new he(), this.newDepIds = new he(), this.expression = "", 
                    "function" == typeof e ? this.getter = e : (this.getter = function(t) {
                        if (!ae.test(t)) {
                            var e = t.split(".");
                            return function(t) {
                                for (var n = 0; n < e.length; n++) {
                                    if (!t) return;
                                    t = t[e[n]];
                                }
                                return t;
                            };
                        }
                    }(e), this.getter || (this.getter = function() {})), this.value = this.lazy ? void 0 : this.get();
                };
                qe.prototype.get = function() {
                    var t, e;
                    t = this, xe.target && be.push(xe.target), xe.target = t;
                    var n, i = this.vm;
                    try {
                        e = this.getter.call(i, i);
                    } catch (t) {
                        if (!this.user) throw t;
                        C(t, i, 'getter for watcher "' + this.expression + '"');
                    } finally {
                        this.deep && (n = e, $e.clear(), function t(e, n) {
                            var i, r, o = Array.isArray(e);
                            if ((o || a(e)) && Object.isExtensible(e)) {
                                if (e.__ob__) {
                                    var s = e.__ob__.dep.id;
                                    if (n.has(s)) return;
                                    n.add(s);
                                }
                                if (o) for (i = e.length; i--; ) t(e[i], n); else for (r = Object.keys(e), i = r.length; i--; ) t(e[r[i]], n);
                            }
                        }(n, $e)), xe.target = be.pop(), this.cleanupDeps();
                    }
                    return e;
                }, qe.prototype.addDep = function(t) {
                    var e = t.id;
                    this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this));
                }, qe.prototype.cleanupDeps = function() {
                    for (var t = this.deps.length; t--; ) {
                        var e = this.deps[t];
                        this.newDepIds.has(e.id) || e.removeSub(this);
                    }
                    var n = this.depIds;
                    this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, 
                    this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
                }, qe.prototype.update = function() {
                    this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(t) {
                        var e = t.id;
                        if (null == Le[e]) {
                            if (Le[e] = !0, Ue) {
                                for (var n = Re.length - 1; n > Be && Re[n].id > t.id; ) n--;
                                Re.splice(n + 1, 0, t);
                            } else Re.push(t);
                            Ge || (Ge = !0, _e(rt));
                        }
                    }(this);
                }, qe.prototype.run = function() {
                    if (this.active) {
                        var t = this.get();
                        if (t !== this.value || a(t) || this.deep) {
                            var e = this.value;
                            if (this.value = t, this.user) try {
                                this.cb.call(this.vm, t, e);
                            } catch (t) {
                                C(t, this.vm, 'callback for watcher "' + this.expression + '"');
                            } else this.cb.call(this.vm, t, e);
                        }
                    }
                }, qe.prototype.evaluate = function() {
                    this.value = this.get(), this.dirty = !1;
                }, qe.prototype.depend = function() {
                    for (var t = this.deps.length; t--; ) this.deps[t].depend();
                }, qe.prototype.teardown = function() {
                    if (this.active) {
                        this.vm._isBeingDestroyed || d(this.vm._watchers, this);
                        for (var t = this.deps.length; t--; ) this.deps[t].removeSub(this);
                        this.active = !1;
                    }
                };
                var $e = new he(), ze = {
                    enumerable: !0,
                    configurable: !0,
                    get: _,
                    set: _
                }, Ve = {
                    lazy: !0
                }, Ye = {
                    init: function(t, e, n, r) {
                        if (!t.componentInstance || t.componentInstance._isDestroyed) (t.componentInstance = function(t, e, n, r) {
                            var o = t.componentOptions, a = {
                                _isComponent: !0,
                                parent: e,
                                propsData: o.propsData,
                                _componentTag: o.tag,
                                _parentVnode: t,
                                _parentListeners: o.listeners,
                                _renderChildren: o.children,
                                _parentElm: n || null,
                                _refElm: r || null
                            }, s = t.data.inlineTemplate;
                            return i(s) && (a.render = s.render, a.staticRenderFns = s.staticRenderFns), new o.Ctor(a);
                        }(t, De, n, r)).$mount(e ? t.elm : void 0, e); else if (t.data.keepAlive) {
                            var o = t;
                            Ye.prepatch(o, o);
                        }
                    },
                    prepatch: function(t, e) {
                        var n = e.componentOptions;
                        !function(t, e, n, i, r) {
                            var o = !!(r || t.$options._renderChildren || i.data.scopedSlots || t.$scopedSlots !== oe);
                            if (t.$options._parentVnode = i, t.$vnode = i, t._vnode && (t._vnode.parent = i), 
                            t.$options._renderChildren = r, t.$attrs = i.data && i.data.attrs, t.$listeners = n, 
                            e && t.$options.props) {
                                Ie.shouldConvert = !1;
                                for (var a = t._props, s = t.$options._propKeys || [], c = 0; c < s.length; c++) {
                                    var u = s[c];
                                    a[u] = L(u, t.$options.props, e, t);
                                }
                                Ie.shouldConvert = !0, t.$options.propsData = e;
                            }
                            if (n) {
                                var l = t.$options._parentListeners;
                                t.$options._parentListeners = n, W(t, n, l);
                            }
                            o && (t.$slots = J(r, i.context), t.$forceUpdate());
                        }(e.componentInstance = t.componentInstance, n.propsData, n.listeners, e, n.children);
                    },
                    insert: function(t) {
                        var e, n = t.context, i = t.componentInstance;
                        i._isMounted || (i._isMounted = !0, it(i, "mounted")), t.data.keepAlive && (n._isMounted ? ((e = i)._inactive = !1, 
                        Ne.push(e)) : nt(i, !0));
                    },
                    destroy: function(t) {
                        var e = t.componentInstance;
                        e._isDestroyed || (t.data.keepAlive ? function t(e, n) {
                            if (!(n && (e._directInactive = !0, et(e)) || e._inactive)) {
                                e._inactive = !0;
                                for (var i = 0; i < e.$children.length; i++) t(e.$children[i]);
                                it(e, "deactivated");
                            }
                        }(e, !0) : e.$destroy());
                    }
                }, He = Object.keys(Ye), Ke = 1, Xe = 2, We = 0;
                Tt.prototype._init = function(t) {
                    var e = this;
                    e._uid = We++, e._isVue = !0, t && t._isComponent ? function(t, e) {
                        var n = t.$options = Object.create(t.constructor.options);
                        n.parent = e.parent, n.propsData = e.propsData, n._parentVnode = e._parentVnode, 
                        n._parentListeners = e._parentListeners, n._renderChildren = e._renderChildren, 
                        n._componentTag = e._componentTag, n._parentElm = e._parentElm, n._refElm = e._refElm, 
                        e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
                    }(e, t) : e.$options = R(It(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, 
                    function(t) {
                        var e = t.$options, n = e.parent;
                        if (n && !e.abstract) {
                            for (;n.$options.abstract && n.$parent; ) n = n.$parent;
                            n.$children.push(t);
                        }
                        t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, 
                        t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, 
                        t._isBeingDestroyed = !1;
                    }(e), function(t) {
                        t._events = Object.create(null), t._hasHookEvent = !1;
                        var e = t.$options._parentListeners;
                        e && W(t, e);
                    }(e), function(t) {
                        t._vnode = null, t._staticTrees = null;
                        var e = t.$vnode = t.$options._parentVnode, n = e && e.context;
                        t.$slots = J(t.$options._renderChildren, n), t.$scopedSlots = oe, t._c = function(e, n, i, r) {
                            return ht(t, e, n, i, r, !1);
                        }, t.$createElement = function(e, n, i, r) {
                            return ht(t, e, n, i, r, !0);
                        };
                        var i = e && e.data;
                        A(t, "$attrs", i && i.attrs, 0, !0), A(t, "$listeners", i && i.on, 0, !0);
                    }(e), it(e, "beforeCreate"), function(t) {
                        var e = lt(t.$options.inject, t);
                        e && (Ie.shouldConvert = !1, Object.keys(e).forEach(function(n) {
                            A(t, n, e[n]);
                        }), Ie.shouldConvert = !0);
                    }(e), at(e), function(t) {
                        var e = t.$options.provide;
                        e && (t._provided = "function" == typeof e ? e.call(t) : e);
                    }(e), it(e, "created"), e.$options.el && e.$mount(e.$options.el);
                }, function(t) {
                    var e = {
                        get: function() {
                            return this._data;
                        }
                    }, n = {
                        get: function() {
                            return this._props;
                        }
                    };
                    Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), 
                    t.prototype.$set = k, t.prototype.$delete = E, t.prototype.$watch = function(t, e, n) {
                        if (s(e)) return ut(this, t, e, n);
                        (n = n || {}).user = !0;
                        var i = new qe(this, t, e, n);
                        return n.immediate && e.call(this, i.value), function() {
                            i.teardown();
                        };
                    };
                }(Tt), function(t) {
                    var e = /^hook:/;
                    t.prototype.$on = function(t, n) {
                        if (Array.isArray(t)) for (var i = 0, r = t.length; i < r; i++) this.$on(t[i], n); else (this._events[t] || (this._events[t] = [])).push(n), 
                        e.test(t) && (this._hasHookEvent = !0);
                        return this;
                    }, t.prototype.$once = function(t, e) {
                        function n() {
                            i.$off(t, n), e.apply(i, arguments);
                        }
                        var i = this;
                        return n.fn = e, i.$on(t, n), i;
                    }, t.prototype.$off = function(t, e) {
                        var n = this;
                        if (!arguments.length) return n._events = Object.create(null), n;
                        if (Array.isArray(t)) {
                            for (var i = 0, r = t.length; i < r; i++) this.$off(t[i], e);
                            return n;
                        }
                        var o, a = n._events[t];
                        if (!a) return n;
                        if (1 === arguments.length) return n._events[t] = null, n;
                        for (var s = a.length; s--; ) if ((o = a[s]) === e || o.fn === e) {
                            a.splice(s, 1);
                            break;
                        }
                        return n;
                    }, t.prototype.$emit = function(t) {
                        var e = this._events[t];
                        if (e) {
                            e = e.length > 1 ? m(e) : e;
                            for (var n = m(arguments, 1), i = 0, r = e.length; i < r; i++) try {
                                e[i].apply(this, n);
                            } catch (e) {
                                C(e, this, 'event handler for "' + t + '"');
                            }
                        }
                        return this;
                    };
                }(Tt), function(t) {
                    t.prototype._update = function(t, e) {
                        var n = this;
                        n._isMounted && it(n, "beforeUpdate");
                        var i = n.$el, r = n._vnode, o = De;
                        De = n, n._vnode = t, r ? n.$el = n.__patch__(r, t) : (n.$el = n.__patch__(n.$el, t, e, !1, n.$options._parentElm, n.$options._refElm), 
                        n.$options._parentElm = n.$options._refElm = null), De = o, i && (i.__vue__ = null), 
                        n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
                    }, t.prototype.$forceUpdate = function() {
                        this._watcher && this._watcher.update();
                    }, t.prototype.$destroy = function() {
                        var t = this;
                        if (!t._isBeingDestroyed) {
                            it(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                            var e = t.$parent;
                            !e || e._isBeingDestroyed || t.$options.abstract || d(e.$children, t), t._watcher && t._watcher.teardown();
                            for (var n = t._watchers.length; n--; ) t._watchers[n].teardown();
                            t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, t.__patch__(t._vnode, null), 
                            it(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null);
                        }
                    };
                }(Tt), function(t) {
                    t.prototype.$nextTick = function(t) {
                        return _e(t, this);
                    }, t.prototype._render = function() {
                        var t, e = this, n = e.$options, i = n.render, r = n.staticRenderFns, o = n._parentVnode;
                        if (e._isMounted) for (var a in e.$slots) e.$slots[a] = q(e.$slots[a]);
                        e.$scopedSlots = o && o.data.scopedSlots || oe, r && !e._staticTrees && (e._staticTrees = []), 
                        e.$vnode = o;
                        try {
                            t = i.call(e._renderProxy, e.$createElement);
                        } catch (n) {
                            C(n, e, "render function"), t = e._vnode;
                        }
                        return t instanceof ke || (t = Pe()), t.parent = o, t;
                    }, t.prototype._o = bt, t.prototype._n = l, t.prototype._s = u, t.prototype._l = gt, 
                    t.prototype._t = mt, t.prototype._q = y, t.prototype._i = x, t.prototype._m = xt, 
                    t.prototype._f = vt, t.prototype._k = _t, t.prototype._b = yt, t.prototype._v = B, 
                    t.prototype._e = Pe, t.prototype._u = Z, t.prototype._g = St;
                }(Tt);
                var Je = [ String, RegExp, Array ], Qe = {
                    KeepAlive: {
                        name: "keep-alive",
                        abstract: !0,
                        props: {
                            include: Je,
                            exclude: Je
                        },
                        created: function() {
                            this.cache = Object.create(null);
                        },
                        destroyed: function() {
                            for (var t in this.cache) Pt(this.cache[t]);
                        },
                        watch: {
                            include: function(t) {
                                Ot(this.cache, this._vnode, function(e) {
                                    return Et(t, e);
                                });
                            },
                            exclude: function(t) {
                                Ot(this.cache, this._vnode, function(e) {
                                    return !Et(t, e);
                                });
                            }
                        },
                        render: function() {
                            var t = function(t) {
                                if (Array.isArray(t)) for (var e = 0; e < t.length; e++) {
                                    var n = t[e];
                                    if (i(n) && i(n.componentOptions)) return n;
                                }
                            }(this.$slots.default), e = t && t.componentOptions;
                            if (e) {
                                var n = kt(e);
                                if (n && (this.include && !Et(this.include, n) || this.exclude && Et(this.exclude, n))) return t;
                                var r = null == t.key ? e.Ctor.cid + (e.tag ? "::" + e.tag : "") : t.key;
                                this.cache[r] ? t.componentInstance = this.cache[r].componentInstance : this.cache[r] = t, 
                                t.data.keepAlive = !0;
                            }
                            return t;
                        }
                    }
                };
                !function(t) {
                    var e = {
                        get: function() {
                            return re;
                        }
                    };
                    Object.defineProperty(t, "config", e), t.util = {
                        warn: se,
                        extend: v,
                        mergeOptions: R,
                        defineReactive: A
                    }, t.set = k, t.delete = E, t.nextTick = _e, t.options = Object.create(null), ne.forEach(function(e) {
                        t.options[e + "s"] = Object.create(null);
                    }), t.options._base = t, v(t.options.components, Qe), function(t) {
                        t.use = function(t) {
                            var e = this._installedPlugins || (this._installedPlugins = []);
                            if (e.indexOf(t) > -1) return this;
                            var n = m(arguments, 1);
                            return n.unshift(this), "function" == typeof t.install ? t.install.apply(t, n) : "function" == typeof t && t.apply(null, n), 
                            e.push(t), this;
                        };
                    }(t), function(t) {
                        t.mixin = function(t) {
                            return this.options = R(this.options, t), this;
                        };
                    }(t), At(t), function(t) {
                        ne.forEach(function(e) {
                            t[e] = function(t, n) {
                                return n ? ("component" === e && s(n) && (n.name = n.name || t, n = this.options._base.extend(n)), 
                                "directive" === e && "function" == typeof n && (n = {
                                    bind: n,
                                    update: n
                                }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t];
                            };
                        });
                    }(t);
                }(Tt), Object.defineProperty(Tt.prototype, "$isServer", {
                    get: ge
                }), Object.defineProperty(Tt.prototype, "$ssrContext", {
                    get: function() {
                        return this.$vnode && this.$vnode.ssrContext;
                    }
                }), Tt.version = "2.4.1", Tt.mpvueVersion = "1.0.18";
                var Ze = f("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown", !0), tn = f("style,class");
                f("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown", !0), f("embed,img,image,input,link,meta", !0);
                var en = {
                    tap: [ "tap", "click" ],
                    touchstart: [ "touchstart" ],
                    touchmove: [ "touchmove" ],
                    touchcancel: [ "touchcancel" ],
                    touchend: [ "touchend" ],
                    longtap: [ "longtap" ],
                    input: [ "input" ],
                    blur: [ "change", "blur" ],
                    submit: [ "submit" ],
                    focus: [ "focus" ],
                    scrolltoupper: [ "scrolltoupper" ],
                    scrolltolower: [ "scrolltolower" ],
                    scroll: [ "scroll" ]
                }, nn = {}, rn = Object.freeze({
                    createElement: function(t, e) {
                        return nn;
                    },
                    createElementNS: function(t, e) {
                        return nn;
                    },
                    createTextNode: function(t) {
                        return nn;
                    },
                    createComment: function(t) {
                        return nn;
                    },
                    insertBefore: function(t, e, n) {},
                    removeChild: function(t, e) {},
                    appendChild: function(t, e) {},
                    parentNode: function(t) {
                        return nn;
                    },
                    nextSibling: function(t) {
                        return nn;
                    },
                    tagName: function(t) {
                        return "div";
                    },
                    setTextContent: function(t, e) {
                        return nn;
                    },
                    setAttribute: function(t, e, n) {
                        return nn;
                    }
                }), on = {
                    create: function(t, e) {
                        Dt(e);
                    },
                    update: function(t, e) {
                        t.data.ref !== e.data.ref && (Dt(t, !0), Dt(e));
                    },
                    destroy: function(t) {
                        Dt(t, !0);
                    }
                }, an = new ke("", {}, []), sn = [ "create", "activate", "update", "remove", "destroy" ], cn = function(t) {
                    function n(t) {
                        var e = I.parentNode(t);
                        i(e) && I.removeChild(e, t);
                    }
                    function a(t, e, n, o, a) {
                        if (t.isRootInsert = !a, !function(t, e, n, o) {
                            var a = t.data;
                            if (i(a)) {
                                var u = i(t.componentInstance) && a.keepAlive;
                                if (i(a = a.hook) && i(a = a.init) && a(t, !1, n, o), i(t.componentInstance)) return s(t, e), 
                                r(u) && function(t, e, n, r) {
                                    for (var o, a = t; a.componentInstance; ) if (a = a.componentInstance._vnode, i(o = a.data) && i(o = o.transition)) {
                                        for (o = 0; o < C.activate.length; ++o) C.activate[o](an, a);
                                        e.push(a);
                                        break;
                                    }
                                    c(n, t.elm, r);
                                }(t, e, n, o), !0;
                            }
                        }(t, e, n, o)) {
                            var l = t.data, f = t.children, h = t.tag;
                            i(h) ? (t.elm = t.ns ? I.createElementNS(t.ns, h) : I.createElement(h, t), p(t), 
                            u(t, f, e), i(l) && d(t, e), c(n, t.elm, o)) : r(t.isComment) ? (t.elm = I.createComment(t.text), 
                            c(n, t.elm, o)) : (t.elm = I.createTextNode(t.text), c(n, t.elm, o));
                        }
                    }
                    function s(t, e) {
                        i(t.data.pendingInsert) && (e.push.apply(e, t.data.pendingInsert), t.data.pendingInsert = null), 
                        t.elm = t.componentInstance.$el, l(t) ? (d(t, e), p(t)) : (Dt(t), e.push(t));
                    }
                    function c(t, e, n) {
                        i(t) && (i(n) ? n.parentNode === t && I.insertBefore(t, e, n) : I.appendChild(t, e));
                    }
                    function u(t, e, n) {
                        if (Array.isArray(e)) for (var i = 0; i < e.length; ++i) a(e[i], n, t.elm, null, !0); else o(t.text) && I.appendChild(t.elm, I.createTextNode(t.text));
                    }
                    function l(t) {
                        for (;t.componentInstance; ) t = t.componentInstance._vnode;
                        return i(t.tag);
                    }
                    function d(t, e) {
                        for (var n = 0; n < C.create.length; ++n) C.create[n](an, t);
                        i(b = t.data.hook) && (i(b.create) && b.create(an, t), i(b.insert) && e.push(t));
                    }
                    function p(t) {
                        for (var e, n = t; n; ) i(e = n.context) && i(e = e.$options._scopeId) && I.setAttribute(t.elm, e, ""), 
                        n = n.parent;
                        i(e = De) && e !== t.context && i(e = e.$options._scopeId) && I.setAttribute(t.elm, e, "");
                    }
                    function h(t, e, n, i, r, o) {
                        for (;i <= r; ++i) a(n[i], o, t, e);
                    }
                    function g(t) {
                        var e, n, r = t.data;
                        if (i(r)) for (i(e = r.hook) && i(e = e.destroy) && e(t), e = 0; e < C.destroy.length; ++e) C.destroy[e](t);
                        if (i(e = t.children)) for (n = 0; n < t.children.length; ++n) g(t.children[n]);
                    }
                    function m(t, e, r, o) {
                        for (;r <= o; ++r) {
                            var a = e[r];
                            i(a) && (i(a.tag) ? (v(a), g(a)) : n(a.elm));
                        }
                    }
                    function v(t, e) {
                        if (i(e) || i(t.data)) {
                            var r, o = C.remove.length + 1;
                            for (i(e) ? e.listeners += o : e = function(t, e) {
                                function i() {
                                    0 == --i.listeners && n(t);
                                }
                                return i.listeners = e, i;
                            }(t.elm, o), i(r = t.componentInstance) && i(r = r._vnode) && i(r.data) && v(r, e), 
                            r = 0; r < C.remove.length; ++r) C.remove[r](t, e);
                            i(r = t.data.hook) && i(r = r.remove) ? r(t, e) : e();
                        } else n(t.elm);
                    }
                    function _(t, n, o, s) {
                        if (t !== n) {
                            var c = n.elm = t.elm;
                            if (r(t.isAsyncPlaceholder)) i(n.asyncFactory.resolved) ? x(t.elm, n, o) : n.isAsyncPlaceholder = !0; else if (r(n.isStatic) && r(t.isStatic) && n.key === t.key && (r(n.isCloned) || r(n.isOnce))) n.componentInstance = t.componentInstance; else {
                                var u, f = n.data;
                                i(f) && i(u = f.hook) && i(u = u.prepatch) && u(t, n);
                                var d = t.children, p = n.children;
                                if (i(f) && l(n)) {
                                    for (u = 0; u < C.update.length; ++u) C.update[u](t, n);
                                    i(u = f.hook) && i(u = u.update) && u(t, n);
                                }
                                e(n.text) ? i(d) && i(p) ? d !== p && function(t, n, r, o, s) {
                                    for (var c, u, l, f = 0, d = 0, p = n.length - 1, g = n[0], v = n[p], y = r.length - 1, x = r[0], b = r[y], w = !s; f <= p && d <= y; ) e(g) ? g = n[++f] : e(v) ? v = n[--p] : Rt(g, x) ? (_(g, x, o), 
                                    g = n[++f], x = r[++d]) : Rt(v, b) ? (_(v, b, o), v = n[--p], b = r[--y]) : Rt(g, b) ? (_(g, b, o), 
                                    w && I.insertBefore(t, g.elm, I.nextSibling(v.elm)), g = n[++f], b = r[--y]) : Rt(v, x) ? (_(v, x, o), 
                                    w && I.insertBefore(t, v.elm, g.elm), v = n[--p], x = r[++d]) : (e(c) && (c = Nt(n, f, p)), 
                                    e(u = i(x.key) ? c[x.key] : null) ? (a(x, o, t, g.elm), x = r[++d]) : Rt(l = n[u], x) ? (_(l, x, o), 
                                    n[u] = void 0, w && I.insertBefore(t, l.elm, g.elm), x = r[++d]) : (a(x, o, t, g.elm), 
                                    x = r[++d]));
                                    f > p ? h(t, e(r[y + 1]) ? null : r[y + 1].elm, r, d, y, o) : d > y && m(0, n, f, p);
                                }(c, d, p, o, s) : i(p) ? (i(t.text) && I.setTextContent(c, ""), h(c, null, p, 0, p.length - 1, o)) : i(d) ? m(0, d, 0, d.length - 1) : i(t.text) && I.setTextContent(c, "") : t.text !== n.text && I.setTextContent(c, n.text), 
                                i(f) && i(u = f.hook) && i(u = u.postpatch) && u(t, n);
                            }
                        }
                    }
                    function y(t, e, n) {
                        if (r(n) && i(t.parent)) t.parent.data.pendingInsert = e; else for (var o = 0; o < e.length; ++o) e[o].data.hook.insert(e[o]);
                    }
                    function x(t, e, n) {
                        if (r(e.isComment) && i(e.asyncFactory)) return e.elm = t, e.isAsyncPlaceholder = !0, 
                        !0;
                        e.elm = t;
                        var o = e.tag, a = e.data, c = e.children;
                        if (i(a) && (i(b = a.hook) && i(b = b.init) && b(e, !0), i(b = e.componentInstance))) return s(e, n), 
                        !0;
                        if (i(o)) {
                            if (i(c)) if (t.hasChildNodes()) {
                                for (var l = !0, f = t.firstChild, p = 0; p < c.length; p++) {
                                    if (!f || !x(f, c[p], n)) {
                                        l = !1;
                                        break;
                                    }
                                    f = f.nextSibling;
                                }
                                if (!l || f) return !1;
                            } else u(e, c, n);
                            if (i(a)) for (var h in a) if (!M(h)) {
                                d(e, n);
                                break;
                            }
                        } else t.data !== e.text && (t.data = e.text);
                        return !0;
                    }
                    var b, w, C = {}, S = t.modules, I = t.nodeOps;
                    for (b = 0; b < sn.length; ++b) for (C[sn[b]] = [], w = 0; w < S.length; ++w) i(S[w][sn[b]]) && C[sn[b]].push(S[w][sn[b]]);
                    var M = f("attrs,style,class,staticClass,staticStyle,key");
                    return function(t, n, o, s, c, u) {
                        if (!e(n)) {
                            var f, d = !1, p = [];
                            if (e(t)) d = !0, a(n, p, c, u); else {
                                var h = i(t.nodeType);
                                if (!h && Rt(t, n)) _(t, n, p, s); else {
                                    if (h) {
                                        if (1 === t.nodeType && t.hasAttribute(ee) && (t.removeAttribute(ee), o = !0), r(o) && x(t, n, p)) return y(n, p, !0), 
                                        t;
                                        f = t, t = new ke(I.tagName(f).toLowerCase(), {}, [], void 0, f);
                                    }
                                    var v = t.elm, b = I.parentNode(v);
                                    if (a(n, p, v._leaveCb ? null : b, I.nextSibling(v)), i(n.parent)) {
                                        for (var w = n.parent; w; ) w.elm = n.elm, w = w.parent;
                                        if (l(n)) for (var S = 0; S < C.create.length; ++S) C.create[S](an, n.parent);
                                    }
                                    i(b) ? m(0, [ t ], 0, 0) : i(t.tag) && g(t);
                                }
                            }
                            return y(n, p, d), n.elm;
                        }
                        i(t) && g(t);
                    };
                }({
                    nodeOps: rn,
                    modules: [ on ]
                }), un = 0, ln = function(t, e, n) {
                    function i() {
                        c = !1 === n.leading ? 0 : Date.now(), s = null, a = t.apply(r, o), s || (r = o = null);
                    }
                    var r, o, a, s = null, c = 0;
                    return n || (n = {}), function(e, u) {
                        var l = Date.now();
                        c || !1 !== n.leading || (c = l);
                        var f = 50 - (l - c);
                        return r = this, o = o ? [ e, Object.assign(o[1], u) ] : [ e, u ], f <= 0 || f > 50 ? (clearTimeout(s), 
                        s = null, c = l, a = t.apply(r, o), s || (r = o = null)) : s || !1 === n.trailing || (s = setTimeout(i, f)), 
                        a;
                    };
                }(function(t, e) {
                    t(e);
                });
                return Tt.config.mustUseProp = function() {}, Tt.config.isReservedTag = Ze, Tt.config.isReservedAttr = tn, 
                Tt.config.getTagNamespace = function() {}, Tt.config.isUnknownElement = function() {}, 
                Tt.prototype.__patch__ = function() {
                    cn.apply(this, arguments), this.$updateDataToMP();
                }, Tt.prototype.$mount = function(t, e) {
                    var n = this, i = this.$options;
                    if (i && (i.render || i.mpType)) {
                        var r = i.mpType;
                        return void 0 === r && (r = "page"), this._initMP(r, function() {
                            return tt(n, void 0, void 0);
                        });
                    }
                    return tt(this, void 0, void 0);
                }, Tt.prototype._initMP = function(t, e) {
                    var i = this.$root;
                    i.$mp || (i.$mp = {});
                    var r, o, a = i.$mp;
                    if (a.status) return "app" === t ? Lt(this, "onLaunch", a.appOptions) : (Lt(this, "onLoad", a.query), 
                    Lt(this, "onReady")), e();
                    if (a.mpType = t, a.status = "register", "app" === t) n.App({
                        globalData: {
                            appOptions: {}
                        },
                        handleProxy: function(t) {
                            return i.$handleProxyWithVue(t);
                        },
                        onLaunch: function(t) {
                            void 0 === t && (t = {}), a.app = this, a.status = "launch", this.globalData.appOptions = a.appOptions = t, 
                            Lt(i, "onLaunch", t), e();
                        },
                        onShow: function(t) {
                            void 0 === t && (t = {}), a.status = "show", this.globalData.appOptions = a.appOptions = t, 
                            Lt(i, "onShow", t);
                        },
                        onHide: function() {
                            a.status = "hide", Lt(i, "onHide");
                        },
                        onError: function(t) {
                            Lt(i, "onError", t);
                        },
                        onPageNotFound: function(t) {
                            Lt(i, "onPageNotFound", t);
                        }
                    }); else if ("component" === t) o = (r = i)._mpProps = {}, Object.keys(r.$options.properties || {}).forEach(function(t) {
                        t in r || (ot(r, "_mpProps", t), o[t] = void 0);
                    }), T(o, !0), n.Component({
                        properties: function(t) {
                            var e = t.$options.properties, n = t.$options.props, i = {};
                            return Gt(e, i, t), Gt(n, i, t), i;
                        }(i),
                        data: {
                            $root: {}
                        },
                        methods: {
                            handleProxy: function(t) {
                                return i.$handleProxyWithVue(t);
                            }
                        },
                        created: function() {
                            a.status = "created", a.page = this;
                        },
                        attached: function() {
                            a.status = "attached", Lt(i, "attached");
                        },
                        ready: function() {
                            a.status = "ready", Lt(i, "ready"), e(), i.$nextTick(function() {
                                i._initDataToMP();
                            });
                        },
                        moved: function() {
                            Lt(i, "moved");
                        },
                        detached: function() {
                            a.status = "detached", Lt(i, "detached");
                        }
                    }); else {
                        var s = n.getApp();
                        n.Page({
                            data: {
                                $root: {}
                            },
                            handleProxy: function(t) {
                                return i.$handleProxyWithVue(t);
                            },
                            onLoad: function(t) {
                                a.page = this, a.query = t, a.status = "load", function(t, e) {
                                    var n = i.$mp;
                                    t && t.globalData && (n.appOptions = t.globalData.appOptions);
                                }(s), Lt(i, "onLoad", t);
                            },
                            onShow: function() {
                                a.page = this, a.status = "show", Lt(i, "onShow"), i.$nextTick(function() {
                                    i._initDataToMP();
                                });
                            },
                            onReady: function() {
                                a.status = "ready", Lt(i, "onReady"), e();
                            },
                            onHide: function() {
                                a.status = "hide", Lt(i, "onHide"), a.page = null;
                            },
                            onUnload: function() {
                                a.status = "unload", Lt(i, "onUnload"), a.page = null;
                            },
                            onPullDownRefresh: function() {
                                Lt(i, "onPullDownRefresh");
                            },
                            onReachBottom: function() {
                                Lt(i, "onReachBottom");
                            },
                            onShareAppMessage: i.$options.onShareAppMessage ? function(t) {
                                return Lt(i, "onShareAppMessage", t);
                            } : null,
                            onPageScroll: function(t) {
                                Lt(i, "onPageScroll", t);
                            },
                            onTabItemTap: function(t) {
                                Lt(i, "onTabItemTap", t);
                            }
                        });
                    }
                }, Tt.prototype.$updateDataToMP = function() {
                    var t = $t(this);
                    if (t) {
                        var e = qt(this);
                        jt(this, e), ln(t.setData.bind(t), e);
                    }
                }, Tt.prototype._initDataToMP = function() {
                    var t = $t(this);
                    if (t) {
                        var e = function t(e, n) {
                            void 0 === n && (n = {});
                            var i = e.$children;
                            return i && i.length && i.forEach(function(e) {
                                return t(e, n);
                            }), Object.assign(n, qt(e));
                        }(this.$root);
                        t.setData(e);
                    }
                }, Tt.prototype.$handleProxyWithVue = function(t) {
                    var e = this.$root, n = t.type, i = t.target;
                    void 0 === i && (i = {});
                    var r = (t.currentTarget || i).dataset;
                    void 0 === r && (r = {});
                    var o = r.comkey;
                    void 0 === o && (o = "");
                    var a = r.eventid, s = function(t, e) {
                        void 0 === e && (e = []);
                        var n = e.slice(1);
                        return n.length ? n.reduce(function(t, e) {
                            for (var n = t.$children.length, i = 0; i < n; i++) {
                                var r = t.$children[i];
                                if (Ft(r) === e) return t = r;
                            }
                            return t;
                        }, t) : t;
                    }(e, o.split(","));
                    if (s) {
                        var c = en[n] || [ n ], u = function t(e, n, i) {
                            void 0 === i && (i = []);
                            var r = [];
                            if (!e || !e.tag) return r;
                            var o = e || {}, a = o.data;
                            void 0 === a && (a = {});
                            var s = o.children;
                            void 0 === s && (s = []);
                            var c = o.componentInstance;
                            c ? Object.keys(c.$slots).forEach(function(e) {
                                var o = c.$slots[e];
                                (Array.isArray(o) ? o : [ o ]).forEach(function(e) {
                                    r = r.concat(t(e, n, i));
                                });
                            }) : s.forEach(function(e) {
                                r = r.concat(t(e, n, i));
                            });
                            var u = a.attrs, l = a.on;
                            return u && l && u.eventid === n ? (i.forEach(function(t) {
                                var e = l[t];
                                "function" == typeof e ? r.push(e) : Array.isArray(e) && (r = r.concat(e));
                            }), r) : r;
                        }(s._vnode, a, c);
                        if (u.length) {
                            var l = function(t) {
                                var e = t.type, n = t.timeStamp, i = t.touches, r = t.detail;
                                void 0 === r && (r = {});
                                var o = t.target;
                                void 0 === o && (o = {});
                                var a = t.currentTarget;
                                void 0 === a && (a = {});
                                var s = {
                                    mp: t,
                                    type: e,
                                    timeStamp: n,
                                    x: r.x,
                                    y: r.y,
                                    target: Object.assign({}, o, r),
                                    currentTarget: a,
                                    stopPropagation: _,
                                    preventDefault: _
                                };
                                return i && i.length && (Object.assign(s, i[0]), s.touches = i), s;
                            }(t);
                            if (1 === u.length) return u[0](l);
                            u.forEach(function(t) {
                                return t(l);
                            });
                        }
                    }
                }, Tt;
            }, e.exports = i();
        }).call(n, i("DuR2"));
    },
    "5zde": function(t, e, n) {
        n("zQR9"), n("qyJz"), t.exports = n("FeBl").Array.from;
    },
    "6lZI": function(t, e, n) {
        e.a = {
            props: {
                title: {
                    type: String,
                    default: ""
                },
                rules: {
                    type: Array,
                    default: []
                }
            }
        };
    },
    "6ouy": function(t, e, n) {
        var i = n("iimA"), r = n("qdak"), o = n("ybqe")(i.a, r.a, function(t) {
            n("am+S");
        }, "data-v-6af1664e", null);
        e.a = o.exports;
    },
    "6vyr": function(t, e) {},
    "6xLo": function(t, e, n) {
        var i = n("VPS7");
        e.a = {
            data: function() {
                return {
                    wechat_name: "cdgftfq"
                };
            },
            methods: {
                copy: function() {
                    i.a.setClipboardData(this.wechat_name);
                }
            }
        };
    },
    "71gO": function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", [ n("p", [ t._v("加入讨论群，了解更多信息【微信号：" + t._s(t.wechat_name) + "】") ]), t._v(" "), n("a", {
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: function(e) {
                            e.stopPropagation(), t.copy(e);
                        }
                    }
                }, [ t._v("复制") ]) ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    "77Pl": function(t, e, n) {
        var i = n("EqjI");
        t.exports = function(t) {
            if (!i(t)) throw TypeError(t + " is not an object!");
            return t;
        };
    },
    "7KvD": function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n);
    },
    "7UMu": function(t, e, n) {
        var i = n("R9M2");
        t.exports = Array.isArray || function(t) {
            return "Array" == i(t);
        };
    },
    "7gdG": function(t, e, n) {
        n.d(e, "k", function() {
            return d;
        }), n.d(e, "g", function() {
            return p;
        }), n.d(e, "h", function() {
            return _;
        }), n.d(e, "i", function() {
            return y;
        }), n.d(e, "a", function() {
            return w;
        }), n.d(e, "c", function() {
            return C;
        }), n.d(e, "e", function() {
            return S;
        }), n.d(e, "d", function() {
            return I;
        }), n.d(e, "b", function() {
            return M;
        }), n.d(e, "f", function() {
            return T;
        }), n.d(e, "j", function() {
            return A;
        });
        var i = n("//Fk"), r = n.n(i), o = n("vLgD"), a = n("VPS7"), s = n("ytBU"), c = n("yspw"), u = n("AvAe"), l = o.a.interceptors, f = !1, d = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return a.a.login().then(function(e) {
                var n = e.code;
                return console.error(n), n ? (console.error("session", n, t), function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!f) {
                        f = !0;
                        var n = {
                            jscode: t,
                            appid: "wx8ac1395283aea132"
                        };
                        return e && e.share_by && (n.share_by = e.share_by, e.share_page && (n.share_page = e.share_page), 
                        e.timestamp && (n.timestamp = e.timestamp)), console.log("shareOption", e, new Date().toLocaleString()), 
                        o.a.post("v1/sessions", n).then(function(t) {
                            if (401 === t) p(e); else {
                                var n = t.token, i = t.user, r = t.share_info;
                                console.log("session success", new Date().toLocaleString()), r && console.log("share_info:", r, new Date().toLocaleString()), 
                                t && n && (wx.setStorage({
                                    key: "token",
                                    data: n
                                }), c.a.set(i), s.a.user.set(i), h(n));
                            }
                            f = !1;
                        });
                    }
                }(n, t)) : "";
            });
        }, p = function(t) {
            return a.a.checkSession().catch(d);
        }, h = function(t) {
            return l.request.use(function(e) {
                return console.error("set token", t), e.headers.Authorization = t, e;
            });
        };
        h(wx.getStorageSync("token")), l.response.use(function(t) {
            return t;
        }, function(t, e) {
            return wx.hideLoading(), console.error("request fail", t, e), n.i(u.b)(t, e), r.a.reject(t);
        }, function(t) {
            var e = t.data, n = e.meta, i = e.data, r = e.status, o = e.meta ? e.meta.code : r;
            return 401 === o ? (wx.setStorage({
                key: "token",
                data: ""
            }), getApp().globalData.jscode = "", 401) : 404 === o || 500 === o ? o : i || n;
        });
        var g = function(t) {
            return function() {
                for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                var r = n[n.length - 1], o = r.loading, a = r.error_show;
                "boolean" != typeof o && (o = !1), "boolean" != typeof a && (a = !0), o && wx.showLoading && wx.showLoading();
                var s = function() {
                    return t.apply(t, n.slice(0, n.length - 1));
                };
                return s().then(function(t) {
                    if (o && wx.hideLoading && wx.hideLoading(), 401 === t) return p().then(function() {
                        return console.error(n), s();
                    });
                    if (404 === t) throw t;
                    if (500 === t && a) throw wx.showModal({
                        title: "提示",
                        content: "服务器出了些问题，攻城狮正在赶来",
                        showCancel: !1
                    }), t;
                    return t;
                });
            };
        }, m = function(t, e) {
            return function() {
                for (var n = arguments.length, i = Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                var o = i.length > 1 && i.slice(1).some(function(t) {
                    return t && t.share_by;
                }) ? "" : s.a.shareBy.get();
                return i[0] = t + "/" + i[0] + "?" + o, e.apply(e, i);
            };
        }, v = function(t) {
            return o.a[t].bind(o.a);
        }, _ = g(v("get")), y = g(v("post")), x = g(v("put")), b = g(v("delete")), w = m("v1", _), C = m("v1", y), S = m("v1", x), I = m("v1", b), M = m("v2", _), T = m("v2", x), A = m("v2", y);
    },
    "7pCL": function(t, e, n) {
        var i = {
            render: function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "shadow"
                }, [ e("form", {
                    attrs: {
                        "report-submit": "true",
                        eventid: "0"
                    },
                    on: {
                        submit: this.pushFormSubmit
                    }
                }, [ e("button", {
                    staticClass: "shadow-button",
                    attrs: {
                        formType: "submit"
                    }
                }, [ e("button", {
                    staticClass: "small-share-btn",
                    attrs: {
                        "open-type": "share"
                    }
                }, [ e("img", {
                    attrs: {
                        src: "/static/img/red-share-icon.png"
                    }
                }), this._v(" 分享\n            ") ]) ], 1) ], 1) ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    "7s/r": function(t, e, n) {
        var i = n("kB8h"), r = n("0jG4"), o = n("AvAe"), a = function(t) {
          n.i(o.c)("房贷计算", t);
        };
        e.a = function(t) {
            if (wx.getUpdateManager) {
                var e = wx.getUpdateManager(), n = t.tip, o = t.checkUpdate, s = t.updateReady, c = t.updateFail;
                e.onCheckForUpdate(function(t) {
                    t.hasUpdate && a("有更新"), o && o(t.hasUpdate);
                }), e.onUpdateReady(function() {
                    a("下载完成"), s && s(a), n && r.a.getChangeLog(i.a).then(function(t) {
                        t.version;
                        var n = t.content;
                        n && n.length && (a("有提示"), wx.showModal({
                            title: "更新提示",
                            content: n.join("；"),
                            success: function(t) {
                                t.confirm && (a("用户重启"), e.applyUpdate());
                            }
                        }));
                    });
                }), e.onUpdateFailed(function() {
                    a("下载失败"), c && c();
                });
            } else a("当前客户端不支持升级");
        };
    },
    "82Mu": function(t, e, n) {
        var i = n("7KvD"), r = n("L42u").set, o = i.MutationObserver || i.WebKitMutationObserver, a = i.process, s = i.Promise, c = "process" == n("R9M2")(a);
        t.exports = function() {
            var t, e, n, u = function() {
                var i, r;
                for (c && (i = a.domain) && i.exit(); t; ) {
                    r = t.fn, t = t.next;
                    try {
                        r();
                    } catch (i) {
                        throw t ? n() : e = void 0, i;
                    }
                }
                e = void 0, i && i.enter();
            };
            if (c) n = function() {
                a.nextTick(u);
            }; else if (!o || i.navigator && i.navigator.standalone) if (s && s.resolve) {
                var l = s.resolve(void 0);
                n = function() {
                    l.then(u);
                };
            } else n = function() {
                r.call(i, u);
            }; else {
                var f = !0, d = document.createTextNode("");
                new o(u).observe(d, {
                    characterData: !0
                }), n = function() {
                    d.data = f = !f;
                };
            }
            return function(i) {
                var r = {
                    fn: i,
                    next: void 0
                };
                e && (e.next = r), t || (t = r, n()), e = r;
            };
        };
    },
    "82qK": function(t, e, n) {
        var i = n("Vrwd"), r = n("S+Ea"), o = n("ybqe")(i.a, r.a, function(t) {
            n("H4pI");
        }, null, null);
        e.a = o.exports;
    },
    "880/": function(t, e, n) {
        t.exports = n("hJx8");
    },
    "8VH0": function(t, e, n) {
        var i = n("9WfE"), r = n("iF0A"), o = n("ybqe")(i.a, r.a, function(t) {
            n("j1WK");
        }, "data-v-1a0b6d4b", null);
        e.a = o.exports;
    },
    "8WJK": function(t, e, n) {
        e.a = {
            methods: {
                toggleDlg: function() {
                    this.$emit("toggleDlg", !this.show);
                },
                confirm: function() {
                    this.toggleDlg(), this.$emit("confirm");
                }
            },
            props: {
                title: {
                    type: String
                },
                content: {
                    type: String
                },
                show: {
                    type: Boolean
                },
                className: {
                    type: String,
                    default: ""
                }
            }
        };
    },
    "8iuN": function(t, e, n) {
        var i = n("0jG4");
        e.a = function(t, e) {
            console.error(t), t && "the formId is a mock one" !== t && i.a.report(t), e && wx.navigateTo({
                url: e
            });
        };
    },
    "8kpB": function(t, e, n) {
        var i = n("YK7p"), r = n("gixa"), o = n("ybqe")(i.a, r.a, function(t) {
            n("QryV");
        }, "data-v-70a59b7a", null);
        e.a = o.exports;
    },
    "8vEn": function(t, e, n) {
        var i = n("Ldgh"), r = n("WwPs"), o = n("ybqe")(i.a, r.a, function(t) {
            n("aAfS");
        }, "data-v-1f4cc678", null);
        e.a = o.exports;
    },
    "91Ao": function(t, e) {},
    "94VQ": function(t, e, n) {
        var i = n("Yobk"), r = n("X8DO"), o = n("e6n0"), a = {};
        n("hJx8")(a, n("dSzd")("iterator"), function() {
            return this;
        }), t.exports = function(t, e, n) {
            t.prototype = i(a, {
                next: r(1, n)
            }), o(t, e + " Iterator");
        };
    },
    "9DR2": function(t, e, n) {
        var i = n("bmxa"), r = n("5Cs7"), o = n("ybqe")(i.a, r.a, function(t) {
            n("Cgse");
        }, "data-v-39a4699e", null);
        e.a = o.exports;
    },
    "9WfE": function(t, e, n) {
        var i = n("QGIh");
        e.a = {
            mixins: [ i.a ],
            methods: {
                goDetail: function(t) {
                    this.pushFormSubmit(t), wx.navigateTo({
                        url: "/pages/building/main?building_id=" + this.item.id + "&type=business"
                    });
                },
                goComments: function() {
                    wx.navigateTo({
                        url: "/pages/comments/main?building_id=" + this.item.id + "&name=" + this.item.name
                    });
                }
            },
            props: {
                item: {
                    type: Object
                }
            }
        };
    },
    "9akO": function(t, e, n) {
        var i = n("iboR"), r = n("uG0z");
        e.a = {
            mixins: [ i.a ],
            data: function() {
                return {
                    swiper_id: "hot_swiper",
                    log_type: "hot_banner"
                };
            },
            onReady: function() {
                this.initLinks(this.banners);
            },
            methods: {
                initLinks: function(t) {
                    this.logFirstSwiper(t);
                },
                goLink: function(t) {
                    this.clickSwiperLog(t), wx.navigateTo({
                        url: t.currentTarget.dataset.href
                    });
                }
            },
            props: {
                banners: {
                    type: Array
                }
            },
            components: {
                CommonImg: r.a
            }
        };
    },
    "9bBU": function(t, e, n) {
        n("mClu");
        var i = n("FeBl").Object;
        t.exports = function(t, e, n) {
            return i.defineProperty(t, e, n);
        };
    },
    AC6D: function(t, e) {},
    AXLU: function(t, e, n) {
        var i = n("z+Ut");
        e.a = {
            computed: {
                is_today: function() {
                    return this.type === i.c.TODAY;
                },
                is_accumulated: function() {
                    return this.type === i.c.ACCUMULATED;
                },
                is_sold: function() {
                    return this.type === i.c.SOLD;
                },
                percent: function() {
                    var t = this.item;
                    return this.is_today ? t.today_depreciate_percent : this.is_accumulated ? t.monthly_depreciate_percent : this.is_sold ? t.sold_depreciate_percent : "";
                }
            }
        };
    },
    AbHO: function(t, e) {},
    AvAe: function(t, e, n) {
        n.d(e, "f", function() {
            return c;
        }), n.d(e, "a", function() {
            return l;
        }), n.d(e, "d", function() {
            return v;
        }), n.d(e, "e", function() {
            return _;
        }), n.d(e, "b", function() {
            return y;
        });
        var i = n("mvHQ"), r = n.n(i), o = n("Dd8w"), a = n.n(o), s = function() {
            var t = "cdfang_uuid", e = wx.getStorageSync(t);
            if (!e) {
                var n = function() {
                    return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
                };
                e = n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + (n() + n() + n()), wx.setStorage({
                    key: t,
                    data: e
                });
            }
            return e;
        };
        e.c = function(t, e) {
            wx.request({
                url: "https://hellfire.rippletek.com/dr_user_click",
                data: {
                    page_name: t,
                    ad_index: e,
                    user_id: s()
                },
                method: "GET"
            });
        };
        var c = function(t) {
            if (t) {
                var e = getApp().wxastat;
                e && e.sendEvent && e.sendEvent(t, {});
            }
        }, u = function(t, e) {
            var n = wx.getStorageSync("user") || {}, i = setTimeout(function() {
                wx.request({
                    url: "https://data-api.rippletek.com/ext/rtlog",
                    data: [ a()({}, e, {
                        d_src: t,
                        d_user: n.uid
                    }) ],
                    method: "POST",
                    success: function() {
                        i && clearTimeout(i);
                    }
                });
            }, 500);
        }, l = {
            viewBuilding: function(t, e) {
                t && u("fc_building_view", {
                    d_key: t,
                    d_paras: e,
                    d_event: 1
                });
            },
            viewCustomBuilding: function(t) {
                u("fc_building_custom_view", {
                    d_key: t,
                    d_event: 1
                });
            },
            viewConsultant: function(t) {
                u("fc_consultant_view", {
                    d_key: t,
                    d_event: 1
                });
            },
            callConsultant: function(t) {
                u("fc_consultant_call", {
                    d_key: t.toString(),
                    d_event: 1
                });
            },
            copyConsultant: function(t) {
                u("fc_consultant_copy", {
                    d_key: t.toString(),
                    d_event: 1
                });
            },
            contactConsultant: function(t) {
                u("fc_consultant_contact", {
                    d_key: t.toString(),
                    d_event: 1
                });
            },
            searchHouse: function(t, e) {
                u("fc_user_search", {
                    d_key: t.substring(0, 64),
                    d_paras: e,
                    d_event: 0
                });
            },
            regSearch: function(t, e) {
                u("fc_reg_results", {
                    d_key: t,
                    d_paras: e,
                    d_event: 0
                });
            },
            lnSearch: function(t, e) {
                u("fc_ln_results", {
                    d_key: t,
                    d_paras: e,
                    d_event: 0
                });
            },
            evaluate_2nd_hand: function(t, e) {
                u("fc_evaluate_2nd_hand", {
                    d_key: r()(t),
                    d_paras: r()(e),
                    d_event: 0
                });
            },
            click_feeds_article: function(t) {
                u("fc_feeds_article_click", {
                    d_key: t.toString(),
                    d_event: 0
                });
            },
            click_discuss_group: function(t) {
                u("fc_discuss_group_click", {
                    d_key: t.toString(),
                    d_event: 0
                });
            }
        }, f = wx.getSystemInfoSync(), d = f.model, p = f.system, h = f.brand, g = f.SDKVersion, m = f.platform, v = function(t) {
            setTimeout(function() {
                t += "; " + r()({
                    model: d,
                    system: p,
                    brand: h,
                    SDKVersion: g,
                    platform: m
                }), wx.request({
                    url: "https://hellfire.rippletek.com/dr_js_error",
                    data: {
                        type: "cdfangchan_err",
                        msg: t,
                        uuid: s()
                    },
                    method: "POST",
                    success: function(t) {}
                });
            }, 1e3);
        }, _ = function(t, e) {
            v("Img Error: " + t);
        }, y = function(t, e) {
            var n = r()(t), i = r()(e);
            v("Request Error: " + n + "; " + i + ";");
        };
    },
    Azdx: function(t, e, n) {
        var i = n("Dd8w"), r = n.n(i), o = function(t) {
            var e = [ {
                text: "50㎡以下",
                value: "0-50",
                selected: !1
            }, {
                text: "50-70㎡",
                value: "50-70",
                selected: !1
            }, {
                text: "70-90㎡",
                value: "70-90",
                selected: !1
            }, {
                text: "90-110㎡",
                value: "90-110",
                selected: !1
            }, {
                text: "110-130㎡",
                value: "110-130",
                selected: !1
            }, {
                text: "130-150㎡",
                value: "130-150",
                selected: !1
            }, {
                text: "150㎡以上",
                value: "150-999999999",
                selected: !1
            } ];
            return e.forEach(function(e) {
                e.selected = t.indexOf(e.value) > -1;
            }), e;
        };
        e.a = {
            props: {
                selected: {
                    type: Array
                }
            },
            data: function() {
                return {
                    inner_selected: this.selected,
                    opts: o(this.selected)
                };
            },
            watch: {
                selected: function(t, e) {
                    t != e && (this.inner_selected = t, this.opts = o(t));
                }
            },
            methods: {
                onSelect: function(t, e) {
                    var n = this.inner_selected, i = n.indexOf(t), o = this.opts[e];
                    this.$set(this.opts, e, r()({}, o, {
                        selected: !o.selected
                    })), -1 === i ? n.push(t) : this.$delete(this.inner_selected, i);
                    var a = this.opts.filter(function(t) {
                        return t.selected;
                    }).map(function(t) {
                        return t.text;
                    });
                    this.$emit("change", this.inner_selected, a);
                }
            }
        };
    },
    "B/zL": function(t, e, n) {
        var i = n("PS2j"), r = n("g2hQ"), o = n("ybqe")(i.a, r.a, function(t) {
            n("wbJY");
        }, "data-v-07aae402", null);
        e.a = o.exports;
    },
    BO1k: function(t, e, n) {
        t.exports = {
            default: n("fxRn"),
            __esModule: !0
        };
    },
    BlQg: function(t, e, n) {
        var i = n("ywjI"), r = n("CQLi"), o = n("ybqe")(i.a, r.a, function(t) {
            n("JOVi");
        }, "data-v-47c03368", null);
        e.a = o.exports;
    },
    "Bvq+": function(t, e, n) {
        var i = n("7gdG");
        e.a = {
            getPosition: function() {
                return n.i(i.a)("consultant_bidding_positions", {
                    loading: !0
                });
            },
            bidding: function(t) {
                return n.i(i.c)("consultant_biddings", t, {
                    loading: !0
                });
            }
        };
    },
    BwfY: function(t, e, n) {
        n("fWfb"), n("M6a0"), n("OYls"), n("QWe/"), t.exports = n("FeBl").Symbol;
    },
    C4MD: function(t, e, n) {
        n.d(e, "a", function() {
            return l;
        }), n.d(e, "b", function() {
            return f;
        });
        var i, r = n("bOdI"), o = n.n(r), a = "realtime", s = "daily", c = "disabled", u = "hot_and_daily", l = (i = {}, 
        o()(i, a, "实时通知"), o()(i, s, "每日汇总通知"), o()(i, c, "不通知"), o()(i, u, "热门楼盘实时通知、其余楼盘每日汇总"), 
        i), f = [ {
            value: a,
            text: l[a]
        }, {
            value: s,
            text: l[s]
        }, {
            value: c,
            text: l[c]
        }, {
            value: u,
            text: l[u]
        } ];
    },
    C4MV: function(t, e, n) {
        t.exports = {
            default: n("9bBU"),
            __esModule: !0
        };
    },
    C8Q0: function(t, e) {},
    CQLi: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "top-filter-wrap"
                }, [ n("div", {
                    staticClass: "select-content column"
                }, t._l(t.opts, function(e, i) {
                    return n("div", {
                        key: i,
                        staticClass: "opt",
                        class: [ {
                            active: e.value === t.selected
                        } ],
                        attrs: {
                            "data-value": e.value,
                            eventid: "0-" + i
                        },
                        on: {
                            tap: t.onSelect
                        }
                    }, [ t._v("\n            " + t._s(e.text) + "\n        ") ]);
                })), t._v(" "), n("div", {
                    staticClass: "bottom"
                }, [ n("button", {
                    staticClass: "btn cancel",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        tap: t.reset
                    }
                }, [ t._v("清空") ]), t._v(" "), n("button", {
                    staticClass: "btn main",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        tap: t.confirm
                    }
                }, [ t._v("确定") ]) ], 1) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    CXw9: function(t, e, n) {
        var i, r, o, a, s = n("O4g8"), c = n("7KvD"), u = n("+ZMJ"), l = n("RY/4"), f = n("kM2E"), d = n("EqjI"), p = n("lOnJ"), h = n("2KxR"), g = n("NWt+"), m = n("t8x9"), v = n("L42u").set, _ = n("82Mu")(), y = n("qARP"), x = n("dNDb"), b = n("iUbK"), w = n("fJUb"), C = c.TypeError, S = c.process, I = S && S.versions, M = I && I.v8 || "", T = c.Promise, A = "process" == l(S), k = function() {}, E = r = y.f, O = !!function() {
            try {
                var t = T.resolve(1), e = (t.constructor = {})[n("dSzd")("species")] = function(t) {
                    t(k, k);
                };
                return (A || "function" == typeof PromiseRejectionEvent) && t.then(k) instanceof e && 0 !== M.indexOf("6.6") && -1 === b.indexOf("Chrome/66");
            } catch (t) {}
        }(), P = function(t) {
            var e;
            return !(!d(t) || "function" != typeof (e = t.then)) && e;
        }, F = function(t, e) {
            if (!t._n) {
                t._n = !0;
                var n = t._c;
                _(function() {
                    for (var i = t._v, r = 1 == t._s, o = 0; n.length > o; ) !function(e) {
                        var n, o, a, s = r ? e.ok : e.fail, c = e.resolve, u = e.reject, l = e.domain;
                        try {
                            s ? (r || (2 == t._h && N(t), t._h = 1), !0 === s ? n = i : (l && l.enter(), n = s(i), 
                            l && (l.exit(), a = !0)), n === e.promise ? u(C("Promise-chain cycle")) : (o = P(n)) ? o.call(n, c, u) : c(n)) : u(i);
                        } catch (t) {
                            l && !a && l.exit(), u(t);
                        }
                    }(n[o++]);
                    t._c = [], t._n = !1, e && !t._h && D(t);
                });
            }
        }, D = function(t) {
            v.call(c, function() {
                var e, n, i, r = t._v, o = R(t);
                if (o && (e = x(function() {
                    A ? S.emit("unhandledRejection", r, t) : (n = c.onunhandledrejection) ? n({
                        promise: t,
                        reason: r
                    }) : (i = c.console) && i.error && i.error("Unhandled promise rejection", r);
                }), t._h = A || R(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v;
            });
        }, R = function(t) {
            return 1 !== t._h && 0 === (t._a || t._c).length;
        }, N = function(t) {
            v.call(c, function() {
                var e;
                A ? S.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
                    promise: t,
                    reason: t._v
                });
            });
        }, L = function(t) {
            var e = this;
            e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), 
            F(e, !0));
        }, G = function t(e) {
            var n, i = this;
            if (!i._d) {
                i._d = !0, i = i._w || i;
                try {
                    if (i === e) throw C("Promise can't be resolved itself");
                    (n = P(e)) ? _(function() {
                        var r = {
                            _w: i,
                            _d: !1
                        };
                        try {
                            n.call(e, u(t, r, 1), u(L, r, 1));
                        } catch (t) {
                            L.call(r, t);
                        }
                    }) : (i._v = e, i._s = 1, F(i, !1));
                } catch (e) {
                    L.call({
                        _w: i,
                        _d: !1
                    }, e);
                }
            }
        };
        O || (T = function(t) {
            h(this, T, "Promise", "_h"), p(t), i.call(this);
            try {
                t(u(G, this, 1), u(L, this, 1));
            } catch (t) {
                L.call(this, t);
            }
        }, (i = function(t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, 
            this._n = !1;
        }).prototype = n("xH/j")(T.prototype, {
            then: function(t, e) {
                var n = E(m(this, T));
                return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, 
                n.domain = A ? S.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && F(this, !1), 
                n.promise;
            },
            catch: function(t) {
                return this.then(void 0, t);
            }
        }), o = function() {
            var t = new i();
            this.promise = t, this.resolve = u(G, t, 1), this.reject = u(L, t, 1);
        }, y.f = E = function(t) {
            return t === T || t === a ? new o(t) : r(t);
        }), f(f.G + f.W + f.F * !O, {
            Promise: T
        }), n("e6n0")(T, "Promise"), n("bRrM")("Promise"), a = n("FeBl").Promise, f(f.S + f.F * !O, "Promise", {
            reject: function(t) {
                var e = E(this);
                return (0, e.reject)(t), e.promise;
            }
        }), f(f.S + f.F * (s || !O), "Promise", {
            resolve: function(t) {
                return w(s && this === a ? T : this, t);
            }
        }), f(f.S + f.F * !(O && n("dY0y")(function(t) {
            T.all(t).catch(k);
        })), "Promise", {
            all: function(t) {
                var e = this, n = E(e), i = n.resolve, r = n.reject, o = x(function() {
                    var n = [], o = 0, a = 1;
                    g(t, !1, function(t) {
                        var s = o++, c = !1;
                        n.push(void 0), a++, e.resolve(t).then(function(t) {
                            c || (c = !0, n[s] = t, --a || i(n));
                        }, r);
                    }), --a || i(n);
                });
                return o.e && r(o.v), n.promise;
            },
            race: function(t) {
                var e = this, n = E(e), i = n.reject, r = x(function() {
                    g(t, !1, function(t) {
                        e.resolve(t).then(n.resolve, i);
                    });
                });
                return r.e && i(r.v), n.promise;
            }
        });
    },
    Ccry: function(t, e, n) {
        var i = n("OW13"), r = n("yK/D"), o = n("ybqe")(i.a, r.a, function(t) {
            n("+5vP");
        }, null, null);
        e.a = o.exports;
    },
    Cdx3: function(t, e, n) {
        var i = n("sB3e"), r = n("lktj");
        n("uqUo")("keys", function() {
            return function(t) {
                return r(i(t));
            };
        });
    },
    Cgse: function(t, e) {},
    D2L2: function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e);
        };
    },
    D8af: function(t, e, n) {
        var i = n("0jG4");
        e.a = {
            data: function() {
                return {
                    showTip: !0
                };
            },
            onPageScroll: function() {
                this.showTip && (this.showTip = !1);
            },
            methods: {
                closeTip: function() {
                    this.showTip = !1;
                },
                goDetail: function() {
                    var t = this.item, e = t.log_id, n = t.position, r = this.index;
                    e && i.a.interestingEvent({
                        event: "click",
                        interesting_id: e,
                        pos: r,
                        pos_name: n
                    }), wx.navigateTo({
                        url: "/pages/building/main?building_id=" + this.item.id + "&from=surplus_buildings"
                    });
                },
                goComments: function() {
                    var t = this.item, e = t.building_id, n = t.name;
                    wx.navigateTo({
                        url: "/pages/comments/main?building_id=" + e + "&name=" + n
                    });
                }
            },
            props: {
                item: {
                    type: Object
                },
                index: {
                    type: Number
                }
            }
        };
    },
    DBX0: function(t, e, n) {
        var i = n("h+Hr"), r = n("ydGR"), o = n("ybqe")(i.a, r.a, function(t) {
            n("JTxa");
        }, null, null);
        e.a = o.exports;
    },
    DDsW: function(t, e, n) {
        var i = n("7gdG");
        e.a = {
            getTips: function() {
                return n.i(i.a)("user_tips", {
                    loading: !1
                });
            },
            viewTips: function(t) {
                return n.i(i.c)("user_tip_views", {
                    user_tip_id: t
                }, {
                    loading: !1
                });
            }
        };
    },
    Dd8w: function(t, e, n) {
        e.__esModule = !0;
        var i, r = (i = n("woOf")) && i.__esModule ? i : {
            default: i
        };
        e.default = r.default || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            }
            return t;
        };
    },
    Dpfg: function(t, e, n) {
        var i = {
            render: function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("p", [ e("span", [ this._v("我也是有底线的哦") ]), this._v(" "), e("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/smile.png",
                        "lazy-load": !0
                    }
                }) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    DuR2: function(e, n) {
        var i;
        i = function() {
            return this;
        }();
        try {
            i = i || Function("return this")() || (0, eval)("this");
        } catch (e) {
            "object" == ("undefined" == typeof window ? "undefined" : t(window)) && (i = window);
        }
        e.exports = i;
    },
    EAn4: function(t, e, n) {
        var i = n("7gdG");
        e.a = {
            getCallHistory: function(t) {
                return n.i(i.a)("consultant_call_histories", {
                    page: t,
                    per: 20
                }, {
                    loading: !0
                });
            },
            smsVerify: function(t, e) {
                return n.i(i.c)("sms_captchas/verify", {
                    mobile: t,
                    sms_captcha: e
                }, {
                    loading: !0
                });
            },
            getUserConsultants: function() {
                return n.i(i.b)("consultants", {
                    loading: !0
                });
            },
            selectCard: function(t) {
                return n.i(i.j)("consultants/" + t + "/master_card", {
                    loading: !1
                });
            },
            checkin: function() {
                return n.i(i.c)("consultant_checkin", {
                    loading: !0
                });
            },
            readSms: function() {
                return n.i(i.c)("consultant_call_histories/read_all", {
                    loading: !1
                });
            }
        };
    },
    EGZi: function(t, e) {
        t.exports = function(t, e) {
            return {
                value: e,
                done: !!t
            };
        };
    },
    EoGX: function(t, e, n) {
        n.d(e, "d", function() {
            return p;
        }), n.d(e, "b", function() {
            return m;
        }), n.d(e, "a", function() {
            return C;
        });
        var i = n("//Fk"), r = n.n(i), o = n("mvHQ"), a = n.n(o), s = n("Dd8w"), c = n.n(s), u = n("t2go"), l = n.n(u), f = n("AvAe"), d = n("hINS"), p = "https://cdn.vip-wifi.com/fangchan/img/personal_center/default-headimg.png", h = l.a.Tool.formatTimeStamp, g = 1400105054, m = {
            DONE: "done",
            DOING: "doing",
            NONE: "none"
        }, v = void 0, _ = void 0, y = void 0, x = function(t) {
            return new l.a.Session(l.a.SESSION_TYPE.C2C, t.peer_id, t.nickName, t.avatarUrl);
        }, b = function(t) {
            return console.warn("create msg", t.id(), t.type(), t.icon(), t.name()), new l.a.Msg(t, !0, -1, Math.round(4294967296 * Math.random()), Math.round(new Date().getTime() / 1e3), v.identifier, l.a.C2C_MSG_SUB_TYPE.COMMON, v.identifierNick);
        }, w = function(t) {
            _ = t.getSession();
            var e = t.getElems(), n = t.getIsSend();
            return e.reduce(function(e, i, r) {
                var o = i.getContent(), a = i.getType(), s = void 0;
                try {
                    switch (a) {
                      case l.a.MSG_ELEMENT_TYPE.TEXT:
                        s = {
                            type: "text",
                            content: o.getText()
                        };
                        break;

                      case l.a.MSG_ELEMENT_TYPE.CUSTOM:
                        var u = JSON.parse(o.getExt());
                        s = {
                            type: o.getDesc(),
                            content: o.getData(),
                            headimg: (n ? y.headimgurl : u.headimg) || p,
                            nickname: u.nickName,
                            peer_headimg: u.peerHeadimg || p,
                            peer_nickame: u.peerNickName,
                            img: u.img,
                            msgStyle: u.msgStyle
                        };
                    }
                    var f = t.getFromAccount(), d = t.getRandom(), g = t.getSeq();
                    s = c()({}, s, {
                        isSend: n,
                        date: h(t.getTime()),
                        time: t.getTime(),
                        from_account: f,
                        msg_random: d,
                        msg_seq: g,
                        msg_time: t.getTime(),
                        id: "chat-" + f + "-" + d + "-" + g,
                        session_id: _.id()
                    });
                    var m = n && "card" === s.msgStyle;
                    s && s.msg_time > 1530529568 && !m && e.push(s);
                } catch (t) {
                    console.error(t);
                }
                return e;
            }, []);
        }, C = n.i(d.a)({}, [ {
            key: "login",
            defaultValue: m.NONE
        }, {
            key: "chatList",
            defaultValue: []
        } ]);
        e.c = {
            session: null,
            initSession: function(t) {
                this.session = x(t), console.warn("init session", this.session.id());
            },
            login: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (C.login === m.DOING) return !1;
                C.login = m.DOING;
                var i = {
                    onConnNotify: function(t) {
                        var e = void 0;
                        switch (t.ErrorCode) {
                          case l.a.CONNECTION_STATUS.ON:
                            wx.hideLoading(), l.a.Log.warn("建立连接成功: " + t.ErrorInfo), C.login = m.DONE, n.connectSuccess && n.connectSuccess();
                            break;

                          case l.a.CONNECTION_STATUS.OFF:
                            e = "连接已断开，无法收到新消息，请检查下您的网络是否正常: " + t.ErrorInfo, l.a.Log.warn(e), n.connectOff && n.connectOff();
                            break;

                          case l.a.CONNECTION_STATUS.RECONNECT:
                            e = "连接状态恢复正常: " + t.ErrorInfo, l.a.Log.warn(e), n.connectReconnect && n.connectReconnect();
                            break;

                          default:
                            l.a.Log.error("未知连接状态: =" + t.ErrorInfo);
                        }
                    },
                    onMsgNotify: function(t) {
                        try {
                            var e = [];
                            for (var i in console.warn("onMsgNotify", n), t) {
                                var r = t[i];
                                n.getMsgs && (e = e.concat(w(r)));
                            }
                            n.getMsgs && n.getMsgs(e);
                        } catch (t) {
                            console.error("msg notify err", t);
                        }
                    }
                };
                v = c()({
                    sdkAppID: g,
                    appIDAt3rd: g,
                    accountType: 30136,
                    identifierNick: t.nickName
                }, e), y = t, l.a.login(v, i);
            },
            createMsg: function(t, e, n) {
                if (t.replace(/^\s*|\s*$/g, "")) {
                    var i = this.session || x(e), r = b(i);
                    this.session = i;
                    var o = new l.a.Msg.Elem.Custom(t, "msg", a()({
                        headimg: e.headimg,
                        nickName: e.nickName,
                        peerHeadimg: n.headimg,
                        peerNickName: n.nickName
                    }));
                    return r.addCustom(o), {
                        msg: r,
                        msgs: w(r).map(function(t) {
                            return c()({}, t, {
                                is_temp: !0
                            });
                        })
                    };
                }
            },
            createImgMsg: function(t, e, n) {
                try {
                    var i = this.session || x(e), r = b(i);
                    this.session = i;
                    var o = new l.a.Msg.Elem.Custom(t, "img", a()({
                        img: t,
                        msgStyle: "img",
                        headimg: e.headimg,
                        nickName: e.nickName,
                        peerHeadimg: n.headimg,
                        peerNickName: n.nickName
                    }));
                    return r.addCustom(o), r;
                } catch (t) {
                    console.error(t);
                }
            },
            sendMsg: function(t) {
                var e = w(t);
                return new r.a(function(i, r) {
                    i(e), l.a.sendMsg(t, function() {
                        return console.log("success");
                    }, function(t) {
                        console.error(t), n.i(f.d)("IM 消息发送失败——" + a()(t)), r(t);
                    });
                });
            },
            getHistory: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = {
                    Peer_Account: t.Peer_Account,
                    MaxCnt: t.MaxCnt,
                    LastMsgTime: t.LastMsgTime,
                    MsgKey: t.MsgKey
                };
                return new r.a(function(i, r) {
                    t.LastMsgTime < 1530529568 ? i({
                        msgs: []
                    }) : l.a.getC2CHistoryMsgs(n, function(t) {
                        try {
                            var n = t.LastMsgTime, o = t.MsgKey;
                            t.MsgList.length;
                            var a = [];
                            for (var s in t.MsgList) {
                                var c = t.MsgList[s];
                                a = a.concat(w(c)), _ = c.getSession();
                            }
                            e && (console.warn("set auto read"), l.a.setAutoRead(_, !0, !0)), i({
                                msgs: a,
                                lastMsgTime: n,
                                msgKey: o
                            });
                        } catch (t) {
                            console.error(t), r(t);
                        }
                    }, function(t) {
                        console.error(t), r(t);
                    });
                });
            },
            logout: function() {
                return new r.a(function(t, e) {
                    l.a.logout(function() {
                        C.isLogin = !1, t();
                    }, e);
                });
            },
            setRead: function(t) {
                l.a.setAutoRead(t, !0, !0);
            }
        };
    },
    EopH: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "header"
                }, [ n("div", {
                    staticClass: "headimg"
                }, [ t.userHeadimgurl ? n("img", {
                    attrs: {
                        mode: "aspectFill",
                        src: t.userHeadimgurl,
                        "lazy-load": !0
                    }
                }) : n("open-data", {
                    attrs: {
                        type: "userAvatarUrl",
                        mpcomid: "0"
                    }
                }) ], 1), t._v(" "), n("div", {
                    staticClass: "detail"
                }, [ n("div", [ t._v("金币余额") ]), t._v(" "), n("strong", [ t._v(t._s(t.gold_coins)) ]) ], 1), t._v(" "), t.show_score ? n("div", {
                    staticClass: "score"
                }, [ n("div", [ t._v("积分余额") ]), t._v(" "), n("strong", [ t._v(t._s(t.score)) ]) ], 1) : t._e(), t._v(" "), t.show_charge ? n("a", {
                    staticClass: "button",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: t.goCharge
                    }
                }, [ t._v("去充值 >") ]) : t._e() ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    EqBC: function(t, e, n) {
        var i = n("kM2E"), r = n("FeBl"), o = n("7KvD"), a = n("t8x9"), s = n("fJUb");
        i(i.P + i.R, "Promise", {
            finally: function(t) {
                var e = a(this, r.Promise || o.Promise), n = "function" == typeof t;
                return this.then(n ? function(n) {
                    return s(e, t()).then(function() {
                        return n;
                    });
                } : t, n ? function(n) {
                    return s(e, t()).then(function() {
                        throw n;
                    });
                } : t);
            }
        });
    },
    EqjI: function(e, n) {
        e.exports = function(e) {
            return "object" == (void 0 === e ? "undefined" : t(e)) ? null !== e : "function" == typeof e;
        };
    },
    F3iD: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "question-item",
                    attrs: {
                        "data-id": t.item.id,
                        eventid: "0"
                    },
                    on: {
                        tap: t.goDetail
                    }
                }, [ n("div", {
                    staticClass: "top"
                }, [ n("img", {
                    attrs: {
                        src: t.item.asker_avatar || "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/personal_center/default-headimg.png",
                        "lazy-load": !0
                    }
                }), t._v(" "), n("div", {
                    staticClass: "detail"
                }, [ n("h3", [ t._v(t._s(t.item.asker_name)) ]), t._v(" "), n("p", [ t._v(t._s(t.item.asked_time)) ]) ], 1) ]), t._v(" "), n("div", {
                    staticClass: "content"
                }, [ n("i", [ t._v("问") ]), t._v("\n        " + t._s(t.item.content) + "\n    ") ], 1), t._v(" "), n("div", {
                    staticClass: "bottom"
                }, [ n("div", [ n("span", {
                    staticClass: "status",
                    class: [ {
                        undo: "waiting" === t.item.status || "unanswered" === t.item.status
                    } ]
                }, [ t._v("\n                " + t._s(t.item.status_name) + "\n            ") ]), t._v(" "), "waiting" !== t.item.status && "unanswered" !== t.item.status ? n("span", [ t._v(t._s(t.item.view_count) + "浏览") ]) : t._e(), t._v(" "), "waiting" !== t.item.status && "unanswered" !== t.item.status ? n("span", [ t._v(t._s(t.item.onlooker_count) + "围观") ]) : t._e() ]), t._v(" "), t.item.can_onlook ? n("button", {
                    staticClass: "view-btn"
                }, [ t._v("免费围观") ]) : t._e() ], 1), t._v(" "), "waiting" === t.item.status ? n("p", {
                    staticClass: "tip"
                }, [ t._v("\n        我们将在2个工作日内回答，若您的问题没有被回答，金币将退回您的账户。\n    ") ]) : "unanswered" === t.item.status ? n("p", {
                    staticClass: "tip"
                }, [ t._v("\n        您的问题没有被回答，金币已退回，可在我的-我的金币-金币记录中查询。\n    ") ]) : t._e(), t._v(" "), t.item.answer ? n("div", {
                    staticClass: "answer"
                }, [ n("h4", [ t._v("回答：") ]), t._v(" "), n("text", {
                    staticClass: "detail"
                }, [ t._v(t._s(t.item.answer)) ]) ], 1) : t._e(), t._v(" "), n("cp-wx", {
                    attrs: {
                        mpcomid: "0"
                    }
                }) ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    FG62: function(t, e, n) {
        var i = n("eMhg");
        e.a = {
            props: {
                item: {
                    type: Object
                }
            },
            components: {
                CpWx: i.a
            },
            methods: {
                goDetail: function(t) {
                    var e = t.currentTarget.dataset.id;
                    wx.navigateTo({
                        url: "/pages/questions/detail/main?id=" + e
                    });
                }
            }
        };
    },
    FVvu: function(t, e) {},
    FeBl: function(t, e) {
        var n = t.exports = {
            version: "2.6.0"
        };
        "number" == typeof __e && (__e = n);
    },
    FoLj: function(t, e, n) {
        var i = n("kEun"), r = n("JMff"), o = n("ybqe")(i.a, r.a, function(t) {
            n("AC6D");
        }, "data-v-3b56d00d", null);
        e.a = o.exports;
    },
    GAR1: function(t, e, n) {
        var i = n("Azdx"), r = n("PqhC"), o = n("ybqe")(i.a, r.a, function(t) {
            n("oVoQ");
        }, null, null);
        e.a = o.exports;
    },
    GQvj: function(t, e, n) {
        var i = n("Dd8w"), r = n.n(i), o = function(t) {
            var e = [ {
                value: "一室",
                selected: !1
            }, {
                value: "二室",
                selected: !1
            }, {
                value: "三室",
                selected: !1
            }, {
                value: "四室",
                selected: !1
            }, {
                value: "五室",
                selected: !1
            }, {
                value: "五室以上",
                selected: !1
            } ];
            return e.forEach(function(e) {
                e.selected = t.indexOf(e.value) > -1;
            }), e;
        };
        e.a = {
            props: {
                selected: {
                    type: Array
                }
            },
            data: function() {
                return {
                    inner_selected: this.selected,
                    opts: o(this.selected)
                };
            },
            watch: {
                selected: function(t, e) {
                    t != e && (this.inner_selected = t, this.opts = o(t));
                }
            },
            methods: {
                onSelect: function(t, e) {
                    var n = this.inner_selected, i = n.indexOf(t), o = this.opts[e];
                    this.$set(this.opts, e, r()({}, o, {
                        selected: !o.selected
                    })), -1 === i ? n.push(t) : this.$delete(this.inner_selected, i), this.$emit("change", this.inner_selected);
                }
            }
        };
    },
    GXWl: function(t, e) {},
    GdZY: function(t, e, n) {
        var i = n("8WJK"), r = n("/xFO"), o = n("ybqe")(i.a, r.a, function(t) {
            n("RWXF");
        }, "data-v-120a1877", null);
        e.a = o.exports;
    },
    Gnhu: function(t, e, n) {
        var i = n("iCHG"), r = n("EopH"), o = n("ybqe")(i.a, r.a, function(t) {
            n("GXWl");
        }, "data-v-2a505faa", null);
        e.a = o.exports;
    },
    Gu7T: function(t, e, n) {
        e.__esModule = !0;
        var i, r = (i = n("c/Tr")) && i.__esModule ? i : {
            default: i
        };
        e.default = function(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                return n;
            }
            return (0, r.default)(t);
        };
    },
    GvMd: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return t.show ? n("div", [ n("div", {
                    staticClass: "overlay",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: t.hide
                    }
                }), t._v(" "), n("form", {
                    staticClass: "footer-input",
                    style: {
                        bottom: t.bottom
                    }
                }, [ n("div", {
                    staticClass: "wrap"
                }, [ n("lazy-textarea", {
                    attrs: {
                        name: "content",
                        maxlength: "200",
                        placeholder: t.placeholder,
                        eventid: "1",
                        mpcomid: "0"
                    },
                    on: {
                        blur: t.onBlur,
                        changeBottom: t.changeBottom
                    },
                    model: {
                        value: t.content,
                        callback: function(e) {
                            t.content = e;
                        },
                        expression: "content"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "bottom"
                }, [ n("p", [ t._v("限200个字符") ]), t._v(" "), n("button", {
                    class: [ {
                        disabled: t.sending || "" === t.content
                    } ],
                    attrs: {
                        "open-type": "getUserInfo",
                        disabled: t.sending,
                        eventid: "2"
                    },
                    on: {
                        getuserinfo: t.submitComment
                    }
                }, [ t._v("\n                    发送\n                ") ]) ], 1) ], 1) ]) ], 1) : t._e();
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    H4pI: function(t, e) {},
    I5Qr: function(t, e, n) {
        var i = n("Dd8w"), r = n.n(i), o = "ios" === wx.getSystemInfoSync().system.substring(0, 3).toLowerCase(), a = {
            x: 0,
            y: 0,
            fileType: "png",
            quality: 1
        }, s = void 0;
        e.a = {
            data: function() {
                return {
                    draw_finished: !1,
                    saving: !1
                };
            },
            onLoad: function() {
                this.saving = !1, this.draw_finished = !1;
            },
            onUnload: function() {
                s && clearTimeout(s);
            },
            watch: {
                draw_finished: function(t) {
                    t && this.saving && this.saveImg();
                }
            },
            methods: {
                finishDraw: function(t, e, n) {
                    var i = this;
                    !function(t, e, n) {
                        a.canvasId = t, a.width = e, a.height = n;
                    }(t, e, n), s = setTimeout(function() {
                        i.draw_finished = !0;
                    }, 1e3);
                },
                save: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    wx.showLoading({
                        title: "生成中"
                    }), this.saving = !0, this.draw_finished && this.saveImg(t);
                },
                saveImg: function() {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    wx.canvasToTempFilePath(r()({}, a, {
                        success: function(n) {
                            t.saveAlbum(n.tempFilePath), e.handleTempFile && e.handleTempFile(n.tempFilePath);
                        },
                        fail: this.saveFail
                    }));
                },
                saveAlbum: function(t) {
                    var e = this;
                    wx.authorize({
                        scope: "scope.writePhotosAlbum",
                        success: function() {
                            wx.saveImageToPhotosAlbum({
                                filePath: t,
                                success: function(t) {
                                    wx.hideLoading(), o ? wx.showToast({
                                        icon: "success",
                                        title: "图片已保存到相册"
                                    }) : wx.showModal({
                                        title: "图片保存成功",
                                        content: "文件路径：/Tencent/MicroMsg/WeiXin/",
                                        showCancel: !1,
                                        confirmText: "我知道了"
                                    }), e.hide && e.hide();
                                },
                                fail: e.saveFail
                            });
                        },
                        fail: function() {
                            e.hide && e.hide(), e.finishSave(), wx.showModal({
                                title: "提示",
                                content: "必须要授权相册权限才可以保存图片",
                                showCancel: !1
                            });
                        }
                    });
                },
                saveFail: function(t) {
                    this.finishSave(), this.draw_finished = !1, console.error(t), wx.showToast({
                        title: "图片保存失败"
                    });
                },
                finishSave: function() {
                    wx.hideLoading(), this.saving = !1, this.draw_finished = !1;
                }
            }
        };
    },
    I9Li: function(t, e, n) {
        var i = n("MB84"), r = n("oD1S"), o = n("ybqe")(i.a, r.a, function(t) {
            n("aYUx");
        }, "data-v-3e9059e2", null);
        e.a = o.exports;
    },
    Ibhu: function(t, e, n) {
        var i = n("D2L2"), r = n("TcQ7"), o = n("vFc/")(!1), a = n("ax3d")("IE_PROTO");
        t.exports = function(t, e) {
            var n, s = r(t), c = 0, u = [];
            for (n in s) n != a && i(s, n) && u.push(n);
            for (;e.length > c; ) i(s, n = e[c++]) && (~o(u, n) || u.push(n));
            return u;
        };
    },
    InPH: function(t, e, n) {
        var i = n("uG0z");
        e.a = {
            data: function() {
                return {
                    liking: !1
                };
            },
            computed: {
                auth_headimg: function() {
                    var t = this.item.author.headimgurl;
                    return t ? t + "?x-oss-process=image/resize,w_48,h_48" : "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/house-detail/tabs/weixin-active.png";
                }
            },
            methods: {
                goDetail: function(t) {
                    var e = this.item.content_body, n = e.article_url, i = e.title;
                    this.$emit("tap", t.currentTarget.dataset), wx.navigateTo({
                        url: "/pages/web_page/main?link=" + encodeURIComponent(n) + "&title=" + encodeURIComponent(i) + "&from=weixin_article"
                    });
                },
                onLike: function() {
                    var t = this;
                    if (!this.liking) {
                        this.liking = !0;
                        var e = !this.item.is_liked;
                        this.$emit("like", this.item.id, e, function() {
                            t.item.is_liked = e, e ? t.item.like_count++ : t.item.like_count--, t.liking = !1;
                        });
                    }
                }
            },
            components: {
                CommonImg: i.a
            },
            props: {
                item: {
                    type: Object
                }
            }
        };
    },
    JE30: function(t, e) {},
    JMff: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement;
                return (t._self._c || e)("textarea", {
                    class: t.className,
                    attrs: {
                        "adjust-position": !1,
                        disabled: t.disabled,
                        fixed: !0,
                        "auto-focus": !0,
                        value: t.currentValue,
                        name: t.name,
                        placeholder: t.placeholder,
                        maxlength: "maxlength",
                        eventid: "0"
                    },
                    on: {
                        input: t.handleInput,
                        focus: t.onFocus,
                        blur: t.onBlur
                    }
                });
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    JOVi: function(t, e) {},
    JTxa: function(t, e) {},
    JePb: function(t, e, n) {
        var i = n("y7te"), r = n("ZAlt"), o = n("ybqe")(i.a, r.a, function(t) {
            n("W5BE");
        }, null, null);
        e.a = o.exports;
    },
    "KXC/": function(t, e, n) {
        var i = n("7gdG"), r = function(t) {
            return [ "last_month_total_price", "max_total_price", "first_total_price", "sold_total_price", "yesterday_total_price", "today_total_price" ].forEach(function(e) {
                t[e] = (t[e] / 1e4).toFixed(2);
            }), t;
        };
        e.a = {
            getList: function(t) {
                return n.i(i.a)("secondhand_house_depreciate_rankings", t, {
                    loading: !0
                }).then(function(t) {
                    return t.items = t.items.map(r), t;
                });
            },
            getDetail: function(t) {
                return n.i(i.a)("secondhand_house_depreciate_rankings/" + t, {
                    loading: !0
                }).then(r);
            }
        };
    },
    Kh4W: function(t, e, n) {
        e.f = n("dSzd");
    },
    Kh5d: function(t, e, n) {
        var i = n("sB3e"), r = n("PzxK");
        n("uqUo")("getPrototypeOf", function() {
            return function(t) {
                return r(i(t));
            };
        });
    },
    "L+WS": function(t, e, n) {
        var i = n("7gdG");
        e.a = {
            getExchangeInfo: function() {
                return n.i(i.a)("exchange_gold_coins/new", {
                    loading: !1
                });
            },
            exchangeCoins: function(t) {
                return n.i(i.c)("exchange_gold_coins", {
                    gold_coins: t
                }, {
                    loading: !0
                });
            },
            pay: function(t) {
                return n.i(i.c)("wxpay_orders", {
                    appid: "wx8ac1395283aea132",
                    trade_type: "JSAPI",
                    amount: t,
                    spbill_create_ip: ""
                }, {
                    loading: !0
                });
            },
            getRecords: function() {
                return n.i(i.a)("gold_coin_journals", {
                    loading: !0
                });
            }
        };
    },
    "L0E/": function(t, e) {},
    L42u: function(t, e, n) {
        var i, r, o, a = n("+ZMJ"), s = n("knuC"), c = n("RPLV"), u = n("ON07"), l = n("7KvD"), f = l.process, d = l.setImmediate, p = l.clearImmediate, h = l.MessageChannel, g = l.Dispatch, m = 0, v = {}, _ = function() {
            var t = +this;
            if (v.hasOwnProperty(t)) {
                var e = v[t];
                delete v[t], e();
            }
        }, y = function(t) {
            _.call(t.data);
        };
        d && p || (d = function(t) {
            for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
            return v[++m] = function() {
                s("function" == typeof t ? t : Function(t), e);
            }, i(m), m;
        }, p = function(t) {
            delete v[t];
        }, "process" == n("R9M2")(f) ? i = function(t) {
            f.nextTick(a(_, t, 1));
        } : g && g.now ? i = function(t) {
            g.now(a(_, t, 1));
        } : h ? (o = (r = new h()).port2, r.port1.onmessage = y, i = a(o.postMessage, o, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (i = function(t) {
            l.postMessage(t + "", "*");
        }, l.addEventListener("message", y, !1)) : i = "onreadystatechange" in u("script") ? function(t) {
            c.appendChild(u("script")).onreadystatechange = function() {
                c.removeChild(this), _.call(t);
            };
        } : function(t) {
            setTimeout(a(_, t, 1), 0);
        }), t.exports = {
            set: d,
            clear: p
        };
    },
    LAQ5: function(t, e, n) {
        var i = n("dBb6"), r = n("pIqT"), o = n("ybqe")(i.a, r.a, function(t) {
            n("1zRr");
        }, "data-v-b980372e", null);
        e.a = o.exports;
    },
    LKZe: function(t, e, n) {
        var i = n("NpIQ"), r = n("X8DO"), o = n("TcQ7"), a = n("MmMw"), s = n("D2L2"), c = n("SfB7"), u = Object.getOwnPropertyDescriptor;
        e.f = n("+E39") ? u : function(t, e) {
            if (t = o(t), e = a(e, !0), c) try {
                return u(t, e);
            } catch (t) {}
            if (s(t, e)) return r(!i.f.call(t, e), t[e]);
        };
    },
    LUBD: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("swiper", {
                    attrs: {
                        "indicator-color": "rgba(255, 255, 255, .4)",
                        "indicator-active-color": "rgba(255, 255, 255, .8)",
                        autoplay: "true",
                        id: "hot_swiper",
                        circular: !0,
                        "indicator-dots": t.banners.length > 1,
                        eventid: "1"
                    },
                    on: {
                        animationfinish: t.animationSwiper
                    }
                }, t._l(t.banners, function(e, i) {
                    return n("swiper-item", {
                        key: i,
                        attrs: {
                            mpcomid: "1-" + i
                        }
                    }, [ n("a", {
                        attrs: {
                            "data-href": e.href,
                            "data-id": e.id,
                            eventid: "0-" + i
                        },
                        on: {
                            tap: t.goLink
                        }
                    }, [ n("common-img", {
                        attrs: {
                            src: e.photo_url,
                            mpcomid: "0-" + i
                        }
                    }), t._v(" "), n("span", {
                        staticClass: "recommend-logo"
                    }, [ t._v("广告") ]) ], 1) ]);
                }));
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    Ldgh: function(t, e, n) {
        var i = n("VPS7"), r = "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/qr/chengdu/cdgfzzj.png";
        e.a = {
            data: function() {
                return {
                    qr_url: r,
                    saving: !1
                };
            },
            methods: {
                hide: function() {
                    this.$emit("hide");
                },
                save: function() {
                    var t = this;
                    wx.showLoading(), this.saving = !0, i.a.saveImgFromInternet({
                        url: r
                    }).then(function(t) {
                        wx.showToast({
                            title: "下载成功"
                        });
                    }).catch(function() {
                        wx.showToast({
                            title: "下载失败",
                            icon: "none"
                        });
                    }).finally(function() {
                        t.saving = !1, setTimeout(wx.hideLoading, 1500);
                    });
                },
                copyWx: function() {
                    i.a.setClipboardData("cdgfzzj");
                }
            },
            props: {
                show: {
                    type: Boolean
                },
                content: {
                    type: String
                },
                show_copy: {
                    type: Boolean
                },
                title: {
                    type: String
                }
            }
        };
    },
    LsOa: function(e, n) {
        var i = function(t) {
            var e = encodeURIComponent(t).replace(/%([0-9A-F]{2})/g, function(t, e) {
                return String.fromCharCode("0x" + e);
            }), n = new Uint8Array(e.length);
            return Array.prototype.forEach.call(e, function(t, e) {
                n[e] = t.charCodeAt(0);
            }), n;
        }, r = function(t) {
            var e = Array.prototype.map.call(t, function(t) {
                return String.fromCharCode(t);
            }).join("").replace(/(.)/g, function(t, e) {
                var n = e.charCodeAt().toString(16).toUpperCase();
                return n.length < 2 && (n = "0" + n), "%" + n;
            });
            return decodeURIComponent(e);
        }, o = function() {
            var t = void 0, e = void 0, n = void 0, r = void 0;
            for (t = "̴̧̧͚̫̠̦͎̭̫̝̹̝̗͕̾̾ͬ̀̓̈̓̾ͬͣ̐ͬ̾ͬ͜", n = "", r = 31; 127 > r; r++) n += String.fromCharCode(r);
            n = n.split(""), e = "̧̫̹̝̜̥́̌͑̑̾ͬͨ͒̖̐͡͉̶̣̻̗͢͚̀̽͙͐̍̺ͭ̓ͫ̢͈ͪ͆́̿̤̮ͯ͝͊̔҉̵̴̩̞̦̃ͣ͗͜̱ͩ̸̡̭̰̪͎̉ͦ̓̈̘̲̠͕͌͛̅͟̨̟͇̀̬͖̯̼̆̏͘̷͔ͮ̒̄͂̕͏̛ͥ̂\b̳̙̎̈́͓͍ͧ̊͋̇̋ͤ̚͠͞ͅ".split("");
            for (var o in e) t = t.split(e[o]).join(n[o]);
            return i(t);
        }(), a = function(t) {
            for (var e = void 0, n = [], i = 0, r = [], a = 0; a < 256; a++) n[a] = a;
            for (var s = 0; s < 256; s++) i = (i + n[s] + o[s % o.length]) % 256, e = n[s], 
            n[s] = n[i], n[i] = e;
            var c = 0;
            i = 0;
            for (var u = 0; u < t.length; u++) i = (i + n[c = (c + 1) % 256]) % 256, e = n[c], 
            n[c] = n[i], n[i] = e, r.push(t[u] ^ n[(n[c] + n[i]) % 256]);
            return r;
        }, s = function(t) {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
            var r = new t(n.reduce(function(t, e) {
                return t + e.length;
            }, 0));
            return n.reduce(function(t, e) {
                return r.set(e, t), t + e.length;
            }, 0), r;
        }, c = function(t) {
            var e = a(i(t));
            return wx.arrayBufferToBase64(e);
        }, u = function(t) {
            var e = new Uint8Array(wx.base64ToArrayBuffer(t));
            return a(e);
        }, l = function(t) {
            for (var e = new Uint8Array(), n = t.data.split("\n"), i = function(t) {
                var e = new Uint8Array(wx.base64ToArrayBuffer(t));
                return r(a(e));
            }(n[0]), o = 1; o < n.length; o++) e = s(Uint8Array, e, u(n[o]));
            return e = r(e), i.includes("application/json") ? t.data = JSON.parse(e) : t.data = e, 
            t.header && (t.header["Content-Type"] = i), t;
        };
        e.exports = {
            request: function(e) {
                if ("object" != (void 0 === e ? "undefined" : t(e))) return wx.request(e);
                if (!0 !== e.fuzz) return wx.request(e);
                if ("object" == t(e.header) ? e.header["Fuzz-Ver"] = "1.0.1" : (e.header = {}, e.header["Fuzz-Ver"] = "1.0.1"), 
                "POST" === e.method || "PUT" === e.method) {
                    var n = e.header["content-type"] || "application/json";
                    e.header["content-type"] = "application/rptkfuzz", e.data = function(e, n) {
                        var i = void 0;
                        return i = "object" == (void 0 === n ? "undefined" : t(n)) && n instanceof ArrayBuffer ? String.fromCharCode(new Uint8Array(buf)) : "object" == (void 0 === n ? "undefined" : t(n)) ? JSON.stringify(n) : "string" == typeof n ? n : "", 
                        c(e) + "\n" + c(i);
                    }(n, e.data);
                }
                if ("function" == typeof e.success) {
                    var i = e.success;
                    e.success = function(t) {
                        i(l(t));
                    };
                }
                return wx.request(e);
            }
        };
    },
    LtSX: function(t, e) {},
    M6a0: function(t, e) {},
    MB84: function(t, e, n) {
        var i = n("0jG4"), r = n("0xDb"), o = wx.getSystemInfoSync().windowWidth / 750 * 400, a = n.i(r.a)(function(t) {
            return Math.floor(t / o);
        }, 100);
        e.a = {
            data: function() {
                return {
                    topics: [],
                    loading: !0,
                    pagination_index: 0
                };
            },
            computed: {
                pagination: function() {
                    return this.topics.map(function(t, e) {
                        return e;
                    });
                }
            },
            onLoad: function(t) {
                this.getData();
            },
            onPullDownRefresh: function() {
                this.getData();
            },
            methods: {
                getData: function() {
                    var t = this;
                    this.loading = !0, i.a.getCommunityTopics({
                        page: 1,
                        per: 3
                    }).then(function(e) {
                        var n = e.items;
                        e.total_count, t.topics = n, t.loading = !1;
                    });
                },
                onScroll: function(t) {
                    var e = this, n = t.target.scrollLeft;
                    a(n).then(function(t) {
                        e.pagination_index = t;
                    });
                },
                goDetail: function(t) {
                    var e = encodeURIComponent("/pages/packageA/community_topics/detail/main?topic_id=" + t + "&from=house_circle");
                    wx.navigateTo({
                        url: "/pages/packageA/community_topics/main?sub_page=" + e
                    });
                }
            }
        };
    },
    MEje: function(t, e) {},
    MU5D: function(t, e, n) {
        var i = n("R9M2");
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == i(t) ? t.split("") : Object(t);
        };
    },
    Mhyx: function(t, e, n) {
        var i = n("/bQp"), r = n("dSzd")("iterator"), o = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (i.Array === t || o[r] === t);
        };
    },
    MmMw: function(t, e, n) {
        var i = n("EqjI");
        t.exports = function(t, e) {
            if (!i(t)) return t;
            var n, r;
            if (e && "function" == typeof (n = t.toString) && !i(r = n.call(t))) return r;
            if ("function" == typeof (n = t.valueOf) && !i(r = n.call(t))) return r;
            if (!e && "function" == typeof (n = t.toString) && !i(r = n.call(t))) return r;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    N8T6: function(e, n, i) {
        var r;
        r = function() {
            return function(t) {
                function e(i) {
                    if (n[i]) return n[i].exports;
                    var r = n[i] = {
                        i: i,
                        l: !1,
                        exports: {}
                    };
                    return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
                }
                var n = {};
                return e.m = t, e.c = n, e.d = function(t, n, i) {
                    e.o(t, n) || Object.defineProperty(t, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: i
                    });
                }, e.n = function(t) {
                    var n = t && t.__esModule ? function() {
                        return t.default;
                    } : function() {
                        return t;
                    };
                    return e.d(n, "a", n), n;
                }, e.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }, e.p = "", e(e.s = 38);
            }([ function(t, e, n) {
                var i = n(41), r = {
                    upperFirst: n(42),
                    lowerFirst: n(43),
                    isString: n(44),
                    isNumber: n(45),
                    isBoolean: n(46),
                    isFunction: n(47),
                    isDate: n(48),
                    isArray: n(11),
                    isNil: n(20),
                    isObject: n(21),
                    isPlainObject: n(22),
                    deepMix: n(50),
                    mix: n(51),
                    each: n(23),
                    uniq: n(52),
                    isObjectValueEqual: function(t, e) {
                        t = Object.assign({}, t), e = Object.assign({}, e);
                        var n = Object.getOwnPropertyNames(t), i = Object.getOwnPropertyNames(e);
                        if (n.length !== i.length) return !1;
                        for (var r = 0, o = n.length; r < o; r++) {
                            var a = n[r];
                            if (t[a] !== e[a]) return !1;
                        }
                        return !0;
                    },
                    wrapBehavior: function(t, e) {
                        if (t["_wrap_" + e]) return t["_wrap_" + e];
                        var n = function(n) {
                            t[e](n);
                        };
                        return t["_wrap_" + e] = n, n;
                    },
                    getWrapBehavior: function(t, e) {
                        return t["_wrap_" + e];
                    },
                    parsePadding: function(t) {
                        var e, n, i, o;
                        return r.isNumber(t) || r.isString(t) ? e = i = o = n = t : r.isArray(t) && (e = t[0], 
                        n = r.isNil(t[1]) ? t[0] : t[1], i = r.isNil(t[2]) ? t[0] : t[2], o = r.isNil(t[3]) ? n : t[3]), 
                        [ e, n, i, o ];
                    },
                    directionEnabled: function(t, e) {
                        return void 0 === t || "string" == typeof t && -1 !== t.indexOf(e);
                    }
                };
                r.Array = {
                    merge: function(t) {
                        for (var e = [], n = 0, i = t.length; n < i; n++) e = e.concat(t[n]);
                        return e;
                    },
                    values: function(t, e) {
                        for (var n = [], i = {}, o = 0, a = t.length; o < a; o++) {
                            var s = t[o][e];
                            r.isNil(s) || (r.isArray(s) ? r.each(s, function(t) {
                                i[t] || (n.push(t), i[t] = !0);
                            }) : i[s] || (n.push(s), i[s] = !0));
                        }
                        return n;
                    },
                    firstValue: function(t, e) {
                        for (var n = null, i = 0, o = t.length; i < o; i++) {
                            var a = t[i][e];
                            if (!r.isNil(a)) {
                                n = r.isArray(a) ? a[0] : a;
                                break;
                            }
                        }
                        return n;
                    },
                    group: function(t, e, n) {
                        if (void 0 === n && (n = {}), !e) return [ t ];
                        var i = r.Array.groupToMap(t, e), o = [];
                        if (1 === e.length && n[e[0]]) {
                            var a = n[e[0]];
                            r.each(a, function(t) {
                                t = "_" + t, o.push(i[t]);
                            });
                        } else for (var s in i) o.push(i[s]);
                        return o;
                    },
                    groupToMap: function(t, e) {
                        if (!e) return {
                            0: t
                        };
                        for (var n = {}, i = 0, r = t.length; i < r; i++) {
                            var o = t[i], a = function(t) {
                                for (var n = "_", i = 0, r = e.length; i < r; i++) n += t[e[i]] && t[e[i]].toString();
                                return n;
                            }(o);
                            n[a] ? n[a].push(o) : n[a] = [ o ];
                        }
                        return n;
                    },
                    remove: function(t, e) {
                        if (t) {
                            var n = t.indexOf(e);
                            -1 !== n && t.splice(n, 1);
                        }
                    },
                    getRange: function(t) {
                        if (!t.length) return {
                            min: 0,
                            max: 0
                        };
                        var e = Math.max.apply(null, t);
                        return {
                            min: Math.min.apply(null, t),
                            max: e
                        };
                    }
                }, r.mix(r, i), t.exports = r;
            }, function(t, e, n) {
                var i = n(0), r = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var n = e.prototype;
                    return n._initProperties = function() {
                        this._attrs = {
                            zIndex: 0,
                            visible: !0,
                            destroyed: !1,
                            isShape: !0,
                            attrs: {}
                        };
                    }, n.getType = function() {
                        return this._attrs.type;
                    }, n.drawInner = function(t) {
                        var e = this, n = e.get("attrs");
                        e.createPath(t);
                        var r = t.globalAlpha;
                        if (e.hasFill()) {
                            var o = n.fillOpacity;
                            i.isNil(o) || 1 === o ? t.fill() : (t.globalAlpha = o, t.fill(), t.globalAlpha = r);
                        }
                        if (e.hasStroke() && n.lineWidth > 0) {
                            var a = n.strokeOpacity;
                            i.isNil(a) || 1 === a || (t.globalAlpha = a), t.stroke();
                        }
                    }, n.getBBox = function() {
                        var t = this._attrs.bbox;
                        return t || ((t = this.calculateBox()) && (t.x = t.minX, t.y = t.minY, t.width = t.maxX - t.minX, 
                        t.height = t.maxY - t.minY), this._attrs.bbox = t), t;
                    }, n.calculateBox = function() {
                        return null;
                    }, n.createPath = function() {}, e;
                }(n(18));
                t.exports = r;
            }, function(t, e, n) {
                var i = n(40), r = n(0), o = {
                    version: "3.3.9",
                    scales: {},
                    widthRatio: {
                        column: .5,
                        rose: .999999,
                        multiplePie: .75
                    },
                    lineDash: [ 4, 4 ],
                    setTheme: function(t) {
                        r.deepMix(this, t);
                    }
                };
                o.setTheme(i), t.exports = o;
            }, function(t, e, n) {
                var i = {
                    Canvas: n(76),
                    Group: n(32),
                    Shape: n(1),
                    Matrix: n(31),
                    Vector2: n(6)
                };
                n(78), n(79), n(80), n(81), n(82), n(84), n(85), n(86), n(87), t.exports = i;
            }, function(t, e) {
                var n = {}.toString;
                t.exports = function(t, e) {
                    return n.call(t) === "[object " + e + "]";
                };
            }, function(t, e, n) {
                var i = n(27), r = n(13);
                t.exports = function(t, e) {
                    if (t) if (r(t)) for (var n = 0, o = t.length; n < o && !1 !== e(t[n], n); n++) ; else if (i(t)) for (var a in t) if (t.hasOwnProperty(a) && !1 === e(t[a], a)) break;
                };
            }, function(t, e) {
                t.exports = {
                    create: function() {
                        return [ 0, 0 ];
                    },
                    length: function(t) {
                        var e = t[0], n = t[1];
                        return Math.sqrt(e * e + n * n);
                    },
                    normalize: function(t, e) {
                        var n = this.length(e);
                        return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t;
                    },
                    add: function(t, e, n) {
                        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
                    },
                    sub: function(t, e, n) {
                        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
                    },
                    scale: function(t, e, n) {
                        return t[0] = e[0] * n, t[1] = e[1] * n, t;
                    },
                    dot: function(t, e) {
                        return t[0] * e[0] + t[1] * e[1];
                    },
                    direction: function(t, e) {
                        return t[0] * e[1] - e[0] * t[1];
                    },
                    angle: function(t, e) {
                        var n = this.dot(t, e) / (this.length(t) * this.length(e));
                        return Math.acos(n);
                    },
                    angleTo: function(t, e, n) {
                        var i = this.angle(t, e), r = this.direction(t, e) >= 0;
                        return n ? r ? 2 * Math.PI - i : i : r ? i : 2 * Math.PI - i;
                    },
                    zero: function(t) {
                        return 0 === t[0] && 0 === t[1];
                    },
                    distance: function(t, e) {
                        var n = e[0] - t[0], i = e[1] - t[1];
                        return Math.sqrt(n * n + i * i);
                    },
                    clone: function(t) {
                        return [ t[0], t[1] ];
                    },
                    min: function(t, e, n) {
                        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t;
                    },
                    max: function(t, e, n) {
                        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t;
                    },
                    transformMat2d: function(t, e, n) {
                        var i = e[0], r = e[1];
                        return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t;
                    }
                };
            }, function(t, e) {
                t.exports = function(t) {
                    return null === t || void 0 === t;
                };
            }, function(t, e, n) {
                function i(t, e, n, i, o) {
                    return {
                        x: r(o, t.x, e.x, n.x, i.x),
                        y: r(o, t.y, e.y, n.y, i.y)
                    };
                }
                function r(t, e, n, i, r) {
                    var o = t * t;
                    return e + (3 * -e + t * (3 * e - e * t)) * t + (3 * n + t * (-6 * n + 3 * n * t)) * t + (3 * i - 3 * i * t) * o + r * (o * t);
                }
                function o(t) {
                    for (var e = 1 / 0, n = -1 / 0, r = 1 / 0, o = -1 / 0, a = {
                        x: t[0],
                        y: t[1]
                    }, s = {
                        x: t[2],
                        y: t[3]
                    }, c = {
                        x: t[4],
                        y: t[5]
                    }, u = {
                        x: t[6],
                        y: t[7]
                    }, l = 0; l < 100; l++) {
                        var f = i(a, s, c, u, l / 100);
                        f.x < e && (e = f.x), f.x > n && (n = f.x), f.y < r && (r = f.y), f.y > o && (o = f.y);
                    }
                    return {
                        minX: e,
                        minY: r,
                        maxX: n,
                        maxY: o
                    };
                }
                var a = n(6), s = a.create(), c = a.create(), u = a.create();
                t.exports = {
                    getBBoxFromPoints: function(t, e) {
                        if (0 !== t.length) {
                            for (var n = t[0], i = n.x, r = n.x, o = n.y, a = n.y, s = t.length, c = 1; c < s; c++) n = t[c], 
                            i = Math.min(i, n.x), r = Math.max(r, n.x), o = Math.min(o, n.y), a = Math.max(a, n.y);
                            return {
                                minX: i - (e = e / 2 || 0),
                                minY: o - e,
                                maxX: r + e,
                                maxY: a + e
                            };
                        }
                    },
                    getBBoxFromLine: function(t, e, n, i, r) {
                        return r = r / 2 || 0, {
                            minX: Math.min(t, n) - r,
                            minY: Math.min(e, i) - r,
                            maxX: Math.max(t, n) + r,
                            maxY: Math.max(e, i) + r
                        };
                    },
                    getBBoxFromArc: function(t, e, n, i, r, o) {
                        var l = Math.abs(i - r);
                        if (l % (2 * Math.PI) < 1e-4 && l > 1e-4) return {
                            minX: t - n,
                            minY: e - n,
                            maxX: t + n,
                            maxY: e + n
                        };
                        s[0] = Math.cos(i) * n + t, s[1] = Math.sin(i) * n + e, c[0] = Math.cos(r) * n + t, 
                        c[1] = Math.sin(r) * n + e;
                        var f = [ 0, 0 ], d = [ 0, 0 ];
                        if (a.min(f, s, c), a.max(d, s, c), (i %= 2 * Math.PI) < 0 && (i += 2 * Math.PI), 
                        (r %= 2 * Math.PI) < 0 && (r += 2 * Math.PI), i > r && !o ? r += 2 * Math.PI : i < r && o && (i += 2 * Math.PI), 
                        o) {
                            var p = r;
                            r = i, i = p;
                        }
                        for (var h = 0; h < r; h += Math.PI / 2) h > i && (u[0] = Math.cos(h) * n + t, u[1] = Math.sin(h) * n + e, 
                        a.min(f, u, f), a.max(d, u, d));
                        return {
                            minX: f[0],
                            minY: f[1],
                            maxX: d[0],
                            maxY: d[1]
                        };
                    },
                    getBBoxFromBezierGroup: function(t, e) {
                        for (var n = 1 / 0, i = -1 / 0, r = 1 / 0, a = -1 / 0, s = 0, c = t.length; s < c; s++) {
                            var u = o(t[s]);
                            u.minX < n && (n = u.minX), u.maxX > i && (i = u.maxX), u.minY < r && (r = u.minY), 
                            u.maxY > a && (a = u.maxY);
                        }
                        return {
                            minX: n - (e = e / 2 || 0),
                            minY: r - e,
                            maxX: i + e,
                            maxY: a + e
                        };
                    }
                };
            }, function(t, e, n) {
                function i(t, e) {
                    return r(e) ? e : t.invert(t.scale(e));
                }
                var r = n(28), o = n(13), a = n(7), s = n(15), c = n(5), u = function() {
                    function t(t) {
                        var e = this;
                        this.type = "base", this.name = null, this.method = null, this.values = [], this.scales = [], 
                        this.linear = null;
                        var n = null, i = this.callback;
                        if (t.callback) {
                            var r = t.callback;
                            n = function() {
                                for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                                var s = r.apply(void 0, n);
                                return a(s) && (s = i.apply(e, n)), s;
                            };
                        }
                        s(this, t), n && s(this, {
                            callback: n
                        });
                    }
                    var e = t.prototype;
                    return e._getAttrValue = function(t, e) {
                        var n = this.values;
                        if (t.isCategory && !this.linear) return n[t.translate(e) % n.length];
                        var i = t.scale(e);
                        return this.getLinearValue(i);
                    }, e.getLinearValue = function(t) {
                        var e = this.values, n = e.length - 1, i = Math.floor(n * t), r = n * t - i, o = e[i];
                        return o + ((i === n ? o : e[i + 1]) - o) * r;
                    }, e.callback = function(t) {
                        var e = this.scales[0];
                        return "identity" === e.type ? e.value : this._getAttrValue(e, t);
                    }, e.getNames = function() {
                        for (var t = this.scales, e = this.names, n = Math.min(t.length, e.length), i = [], r = 0; r < n; r++) i.push(e[r]);
                        return i;
                    }, e.getFields = function() {
                        var t = this.scales, e = [];
                        return c(t, function(t) {
                            e.push(t.field);
                        }), e;
                    }, e.getScale = function(t) {
                        return this.scales[this.names.indexOf(t)];
                    }, e.mapping = function() {
                        for (var t = this.scales, e = this.callback, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                        var o = i;
                        if (e) {
                            for (var a = 0, s = i.length; a < s; a++) i[a] = this._toOriginParam(i[a], t[a]);
                            o = e.apply(this, i);
                        }
                        return [].concat(o);
                    }, e._toOriginParam = function(t, e) {
                        var n = t;
                        if (!e.isLinear) if (o(t)) {
                            n = [];
                            for (var r = 0, a = t.length; r < a; r++) n.push(i(e, t[r]));
                        } else n = i(e, t);
                        return n;
                    }, t;
                }();
                t.exports = u;
            }, function(t, e, n) {
                var i = n(15), r = n(5), o = n(27), a = n(7), s = function() {
                    function t(t) {
                        this._initDefaultCfg(), i(this, t), this.init();
                    }
                    var e = t.prototype;
                    return e._initDefaultCfg = function() {
                        this.type = "base", this.formatter = null, this.range = [ 0, 1 ], this.ticks = null, 
                        this.values = [];
                    }, e.init = function() {}, e.getTicks = function() {
                        var t = this, e = t.ticks, n = [];
                        return r(e, function(e) {
                            var i;
                            i = o(e) ? e : {
                                text: t.getText(e),
                                tickValue: e,
                                value: t.scale(e)
                            }, n.push(i);
                        }), n;
                    }, e.getText = function(t, e) {
                        var n = this.formatter;
                        return t = n ? n(t, e) : t, !a(t) && t.toString || (t = ""), t.toString();
                    }, e.rangeMin = function() {
                        return this.range[0];
                    }, e.rangeMax = function() {
                        var t = this.range;
                        return t[t.length - 1];
                    }, e.invert = function(t) {
                        return t;
                    }, e.translate = function(t) {
                        return t;
                    }, e.scale = function(t) {
                        return t;
                    }, e.clone = function() {
                        var t = this, e = t.constructor, n = {};
                        return r(t, function(e, i) {
                            n[i] = t[i];
                        }), new e(n);
                    }, e.change = function(t) {
                        return this.ticks = null, i(this, t), this.init(), this;
                    }, t;
                }();
                t.exports = s;
            }, function(t, e, n) {
                var i = n(4), r = Array.isArray ? Array.isArray : function(t) {
                    return i(t, "Array");
                };
                t.exports = r;
            }, function(t, e, n) {
                function i(t) {
                    return r.isArray(t) ? t : r.isString(t) ? t.split("*") : [ t ];
                }
                var r = n(0), o = n(25), a = [ "color", "size", "shape" ], s = n(2), c = n(58), u = n(16), l = n(64), f = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var n = e.prototype;
                    return n.getDefaultCfg = function() {
                        return {
                            type: null,
                            data: null,
                            attrs: {},
                            scales: {},
                            container: null,
                            styleOptions: null,
                            chart: null,
                            shapeType: "",
                            generatePoints: !1,
                            attrOptions: {},
                            sortable: !1,
                            startOnZero: !0,
                            visible: !0,
                            connectNulls: !1
                        };
                    }, n.init = function() {
                        var t = this;
                        t._initAttrs();
                        var e = t._processData();
                        t.get("adjust") && t._adjustData(e), t.set("dataArray", e);
                    }, n._getGroupScales = function() {
                        var t = this, e = [];
                        return r.each(a, function(n) {
                            var i = t.getAttr(n);
                            if (i) {
                                var o = i.scales;
                                r.each(o, function(t) {
                                    t && t.isCategory && -1 === e.indexOf(t) && e.push(t);
                                });
                            }
                        }), e;
                    }, n._groupData = function(t) {
                        var e = this.get("colDefs"), n = this._getGroupScales();
                        if (n.length) {
                            var i = {}, o = [];
                            return r.each(n, function(t) {
                                var n = t.field;
                                o.push(n), e && e[n] && e[n].values && (i[t.field] = e[n].values);
                            }), r.Array.group(t, o, i);
                        }
                        return [ t ];
                    }, n._setAttrOptions = function(t, e) {
                        this.get("attrOptions")[t] = e;
                    }, n._createAttrOption = function(t, e, n, i) {
                        var o = {};
                        o.field = e, n ? r.isFunction(n) ? o.callback = n : o.values = n : o.values = i, 
                        this._setAttrOptions(t, o);
                    }, n._initAttrs = function() {
                        var t = this, e = t.get("attrs"), n = t.get("attrOptions"), o = t.get("coord");
                        for (var a in n) if (n.hasOwnProperty(a)) {
                            var s = n[a], u = r.upperFirst(a), l = i(s.field);
                            "position" === a && (s.coord = o);
                            for (var f = [], d = 0, p = l.length; d < p; d++) {
                                var h = l[d], g = t._createScale(h);
                                f.push(g);
                            }
                            if ("position" === a) {
                                var m = f[1];
                                "polar" === o.type && o.transposed && t.hasAdjust("stack") && m.values.length && m.change({
                                    nice: !1,
                                    min: 0,
                                    max: Math.max.apply(null, m.values)
                                });
                            }
                            s.scales = f;
                            var v = new c[u](s);
                            e[a] = v;
                        }
                    }, n._createScale = function(t) {
                        var e = this.get("scales"), n = e[t];
                        return n || (n = this.get("chart").createScale(t), e[t] = n), n;
                    }, n._processData = function() {
                        for (var t = this.get("data"), e = [], n = this._groupData(t), i = 0, r = n.length; i < r; i++) {
                            var o = n[i], a = this._saveOrigin(o);
                            this.hasAdjust("dodge") && this._numberic(a), e.push(a);
                        }
                        return e;
                    }, n._saveOrigin = function(t) {
                        for (var e = [], n = 0, i = t.length; n < i; n++) {
                            var r = t[n], o = {};
                            for (var a in r) o[a] = r[a];
                            o._origin = r, e.push(o);
                        }
                        return e;
                    }, n._numberic = function(t) {
                        for (var e = this.getAttr("position").scales, n = 0, i = t.length; n < i; n++) for (var r = t[n], o = Math.min(2, e.length), a = 0; a < o; a++) {
                            var s = e[a];
                            if (s.isCategory) {
                                var c = s.field;
                                r[c] = s.translate(r[c]);
                            }
                        }
                    }, n._adjustData = function(t) {
                        var e = this, n = e.get("adjust");
                        if (n) {
                            var i = r.upperFirst(n.type);
                            if (!l[i]) throw new Error("not support such adjust : " + n);
                            var o = e.getXScale(), a = e.getYScale(), s = r.mix({
                                xField: o.field,
                                yField: a.field
                            }, n);
                            new l[i](s).processAdjust(t), "Stack" === i && e._updateStackRange(a.field, a, t);
                        }
                    }, n._updateStackRange = function(t, e, n) {
                        for (var i = r.Array.merge(n), o = e.min, a = e.max, s = 0, c = i.length; s < c; s++) {
                            var u = i[s], l = Math.min.apply(null, u[t]), f = Math.max.apply(null, u[t]);
                            l < o && (o = l), f > a && (a = f);
                        }
                        (o < e.min || a > e.max) && e.change({
                            min: o,
                            max: a
                        });
                    }, n._sort = function(t) {
                        var e = this, n = e.getXScale(), i = n.field, o = n.type;
                        "identity" !== o && n.values.length > 1 && r.each(t, function(t) {
                            t.sort(function(t, e) {
                                return "timeCat" === o ? n._toTimeStamp(t._origin[i]) - n._toTimeStamp(e._origin[i]) : n.translate(t._origin[i]) - n.translate(e._origin[i]);
                            });
                        }), e.set("hasSorted", !0), e.set("dataArray", t);
                    }, n.paint = function() {
                        var t = this, e = t.get("dataArray"), n = [], i = t.getShapeFactory();
                        i.setCoord(t.get("coord")), t._beforeMapping(e);
                        for (var r = 0, o = e.length; r < o; r++) {
                            var a = e[r];
                            a.length && (a = t._mapping(a), n.push(a), t.draw(a, i));
                        }
                        t.set("dataArray", n);
                    }, n.getShapeFactory = function() {
                        var t = this.get("shapeFactory");
                        if (!t) {
                            var e = this.get("shapeType");
                            t = u.getShapeFactory(e), this.set("shapeFactory", t);
                        }
                        return t;
                    }, n._mapping = function(t) {
                        for (var e = this, n = e.get("attrs"), i = e.getYScale().field, o = [], a = 0, s = t.length; a < s; a++) {
                            var c = t[a], u = {};
                            for (var l in u._origin = c._origin, u.points = c.points, u._originY = c[i], n) if (n.hasOwnProperty(l)) {
                                var f = n[l], d = f.names, p = e._getAttrValues(f, c);
                                if (d.length > 1) for (var h = 0, g = p.length; h < g; h++) {
                                    var m = p[h];
                                    u[d[h]] = r.isArray(m) && 1 === m.length ? m[0] : m;
                                } else u[d[0]] = 1 === p.length ? p[0] : p;
                            }
                            o.push(u);
                        }
                        return o;
                    }, n._getAttrValues = function(t, e) {
                        for (var n = t.scales, i = [], r = 0, o = n.length; r < o; r++) {
                            var a = n[r], s = a.field;
                            "identity" === a.type ? i.push(a.value) : i.push(e[s]);
                        }
                        return t.mapping.apply(t, i);
                    }, n.getAttrValue = function(t, e) {
                        var n = this.getAttr(t), i = null;
                        return n && (i = this._getAttrValues(n, e)[0]), i;
                    }, n._beforeMapping = function(t) {
                        var e = this;
                        e.get("sortable") && e._sort(t), e.get("generatePoints") && r.each(t, function(t) {
                            e._generatePoints(t);
                        });
                    }, n.isInCircle = function() {
                        var t = this.get("coord");
                        return t && t.isPolar;
                    }, n.getCallbackCfg = function(t, e, n) {
                        if (!t) return e;
                        var i = {}, o = t.map(function(t) {
                            return n[t];
                        });
                        return r.each(e, function(t, e) {
                            r.isFunction(t) ? i[e] = t.apply(null, o) : i[e] = t;
                        }), i;
                    }, n.getDrawCfg = function(t) {
                        var e = this, n = e.isInCircle(), i = {
                            origin: t,
                            x: t.x,
                            y: t.y,
                            color: t.color,
                            size: t.size,
                            shape: t.shape,
                            isInCircle: n,
                            opacity: t.opacity
                        }, r = e.get("styleOptions");
                        return r && r.style && (i.style = e.getCallbackCfg(r.fields, r.style, t._origin)), 
                        e.get("generatePoints") && (i.points = t.points), n && (i.center = e.get("coord").center), 
                        i;
                    }, n.draw = function(t, e) {
                        var n = this, i = n.get("container"), o = n.getYScale();
                        r.each(t, function(t, a) {
                            if (!o || !r.isNil(t._origin[o.field])) {
                                t.index = a;
                                var s = n.getDrawCfg(t), c = t.shape;
                                n.drawShape(c, t, s, i, e);
                            }
                        });
                    }, n.drawShape = function(t, e, n, i, o) {
                        var a = o.drawShape(t, n, i);
                        a && r.each([].concat(a), function(t) {
                            t.set("origin", e);
                        });
                    }, n._generatePoints = function(t) {
                        for (var e = this, n = e.getShapeFactory(), i = e.getAttr("shape"), r = 0, o = t.length; r < o; r++) {
                            var a = t[r], s = e.createShapePointsCfg(a), c = i ? e._getAttrValues(i, a) : null, u = n.getShapePoints(c, s);
                            a.points = u;
                        }
                    }, n.createShapePointsCfg = function(t) {
                        var e = this.getXScale(), n = this.getYScale();
                        return {
                            x: this._normalizeValues(t[e.field], e),
                            y: n ? this._normalizeValues(t[n.field], n) : t.y ? t.y : .1,
                            y0: n ? n.scale(this.getYMinValue()) : void 0
                        };
                    }, n.getYMinValue = function() {
                        var t = this.getYScale(), e = t.min, n = t.max;
                        return this.get("startOnZero") ? n <= 0 && e <= 0 ? n : e >= 0 ? e : 0 : e;
                    }, n._normalizeValues = function(t, e) {
                        var n = [];
                        if (r.isArray(t)) for (var i = 0, o = t.length; i < o; i++) {
                            var a = t[i];
                            n.push(e.scale(a));
                        } else n = e.scale(t);
                        return n;
                    }, n.getAttr = function(t) {
                        return this.get("attrs")[t];
                    }, n.getXScale = function() {
                        return this.getAttr("position").scales[0];
                    }, n.getYScale = function() {
                        return this.getAttr("position").scales[1];
                    }, n.hasAdjust = function(t) {
                        return this.get("adjust") && this.get("adjust").type === t;
                    }, n._getSnap = function(t, e, n) {
                        var i, r = 0, o = this.getYScale().field;
                        if (this.hasAdjust("stack") && t.field === o) {
                            i = [], n.forEach(function(t) {
                                i.push(t._originY);
                            });
                            for (var a = i.length; r < a && !(i[0][0] > e); r++) {
                                if (i[i.length - 1][1] <= e) {
                                    r = i.length - 1;
                                    break;
                                }
                                if (i[r][0] <= e && i[r][1] > e) break;
                            }
                        } else {
                            (i = t.values).sort(function(t, e) {
                                return t - e;
                            });
                            for (var s = i.length; r < s && !((i[0] + i[1]) / 2 > e) && !((i[r - 1] + i[r]) / 2 <= e && (i[r + 1] + i[r]) / 2 > e); r++) if ((i[i.length - 2] + i[i.length - 1]) / 2 <= e) {
                                r = i.length - 1;
                                break;
                            }
                        }
                        return i[r];
                    }, n.getSnapRecords = function(t) {
                        var e = this, n = e.get("coord"), i = e.getXScale(), o = e.getYScale(), a = i.field, s = e.get("dataArray");
                        this.get("hasSorted") || this._sort(s);
                        var c = [], u = n.invertPoint(t), l = u.x;
                        e.isInCircle() && !n.transposed && l > (1 + i.rangeMax()) / 2 && (l = i.rangeMin());
                        var f = i.invert(l);
                        i.isCategory || (f = e._getSnap(i, f));
                        var d = [];
                        if (s.forEach(function(t) {
                            t.forEach(function(t) {
                                var n = r.isNil(t._origin) ? t[a] : t._origin[a];
                                e._isEqual(n, f, i) && d.push(t);
                            });
                        }), this.hasAdjust("stack") && n.isPolar && n.transposed && 1 === i.values.length) {
                            if (l >= 0 && l <= 1) {
                                var p = o.invert(u.y);
                                p = e._getSnap(o, p, d), d.forEach(function(t) {
                                    (r.isArray(p) ? t._originY.toString() === p.toString() : t._originY === p) && c.push(t);
                                });
                            }
                        } else c = d;
                        return c;
                    }, n._isEqual = function(t, e, n) {
                        return "timeCat" === n.type ? n._toTimeStamp(t) === e : e === t;
                    }, n.position = function(t) {
                        return this._setAttrOptions("position", {
                            field: t
                        }), this;
                    }, n.color = function(t, e) {
                        return this._createAttrOption("color", t, e, s.colors), this;
                    }, n.size = function(t, e) {
                        return this._createAttrOption("size", t, e, s.sizes), this;
                    }, n.shape = function(t, e) {
                        var n = this.get("type"), i = s.shapes[n] || [];
                        return this._createAttrOption("shape", t, e, i), this;
                    }, n.style = function(t, e) {
                        var n, o = this.get("styleOptions");
                        return o || (o = {}, this.set("styleOptions", o)), r.isObject(t) && (e = t, t = null), 
                        t && (n = i(t)), o.fields = n, o.style = e, this;
                    }, n.adjust = function(t) {
                        return r.isString(t) && (t = {
                            type: t
                        }), this.set("adjust", t), this;
                    }, n.animate = function(t) {
                        return this.set("animateCfg", t), this;
                    }, n.reset = function() {
                        this.set("attrOptions", {}), this.set("adjust", null), this.clearInner();
                    }, n.clearInner = function() {
                        var t = this.get("container");
                        t && (t.clear(), t.setMatrix([ 1, 0, 0, 1, 0, 0 ])), t && t.clear(), this.set("attrs", {}), 
                        this.set("groupScales", null), this.set("xDistance", null), this.set("_width", null);
                    }, n.clear = function() {
                        this.clearInner(), this.set("scales", {});
                    }, n.destroy = function() {
                        this.clear(), t.prototype.destroy.call(this);
                    }, n._display = function(t) {
                        this.set("visible", t);
                        var e = this.get("container"), n = e.get("canvas");
                        e.set("visible", t), n.draw();
                    }, n.show = function() {
                        this._display(!0);
                    }, n.hide = function() {
                        this._display(!1);
                    }, e;
                }(o);
                t.exports = f;
            }, function(t, e, n) {
                var i = n(14), r = Array.isArray ? Array.isArray : function(t) {
                    return i(t, "Array");
                };
                t.exports = r;
            }, function(t, e) {
                var n = {}.toString;
                t.exports = function(t, e) {
                    return n.call(t) === "[object " + e + "]";
                };
            }, function(t, e) {
                function n(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && "constructor" !== n && void 0 !== e[n] && (t[n] = e[n]);
                }
                t.exports = function(t, e, i, r) {
                    return e && n(t, e), i && n(t, i), r && n(t, r), t;
                };
            }, function(t, e, n) {
                var i = n(0), r = n(2), o = {}, a = {
                    _coord: null,
                    draw: function(t, e) {
                        this.drawShape && this.drawShape(t, e);
                    },
                    setCoord: function(t) {
                        this._coord = t;
                    },
                    parsePoint: function(t) {
                        var e = this._coord;
                        return e.isPolar && (1 === t.x && (t.x = .9999999), 1 === t.y && (t.y = .9999999)), 
                        e.convertPoint(t);
                    },
                    parsePoints: function(t) {
                        if (!t) return !1;
                        var e = this, n = [];
                        return t.forEach(function(t) {
                            n.push(e.parsePoint(t));
                        }), n;
                    }
                }, s = {
                    defaultShapeType: null,
                    setCoord: function(t) {
                        this._coord = t;
                    },
                    getShape: function(t) {
                        var e = this;
                        i.isArray(t) && (t = t[0]);
                        var n = e[t] || e[e.defaultShapeType];
                        return n._coord = e._coord, n;
                    },
                    getShapePoints: function(t, e) {
                        var n = this.getShape(t);
                        return (n.getPoints || n.getShapePoints || this.getDefaultPoints)(e);
                    },
                    getDefaultPoints: function() {
                        return [];
                    },
                    drawShape: function(t, e, n) {
                        var i = this.getShape(t);
                        return e.color || (e.color = r.colors[0]), i.draw(e, n);
                    }
                };
                o.registerFactory = function(t, e) {
                    var n = i.upperFirst(t), r = i.mix({}, s, e);
                    return o[n] = r, r.name = t, r;
                }, o.registerShape = function(t, e, n) {
                    var r = i.upperFirst(t), s = o[r], c = i.mix({}, a, n);
                    return s[e] = c, c;
                }, o.registShape = o.registerShape, o.getShapeFactory = function(t) {
                    return t = t || "point", this[i.upperFirst(t)];
                }, t.exports = o;
            }, function(t, e, n) {
                var i = n(14);
                t.exports = function(t) {
                    return i(t, "Number");
                };
            }, function(t, e, n) {
                var i = n(0), r = n(31), o = n(6), a = n(77), s = {
                    stroke: "strokeStyle",
                    fill: "fillStyle",
                    opacity: "globalAlpha"
                }, c = [ "fillStyle", "font", "globalAlpha", "lineCap", "lineWidth", "lineJoin", "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline", "lineDash", "shadow" ], u = [ "circle", "sector", "polygon", "rect", "polyline" ], l = function() {
                    function t(t) {
                        this._initProperties(), i.mix(this._attrs, t);
                        var e = this._attrs.attrs;
                        e && this.initAttrs(e), this.initTransform();
                    }
                    var e = t.prototype;
                    return e._initProperties = function() {
                        this._attrs = {
                            zIndex: 0,
                            visible: !0,
                            destroyed: !1
                        };
                    }, e.get = function(t) {
                        return this._attrs[t];
                    }, e.set = function(t, e) {
                        this._attrs[t] = e;
                    }, e.isGroup = function() {
                        return this.get("isGroup");
                    }, e.isShape = function() {
                        return this.get("isShape");
                    }, e.initAttrs = function(t) {
                        this.attr(i.mix(this.getDefaultAttrs(), t));
                    }, e.getDefaultAttrs = function() {
                        return {};
                    }, e._setAttr = function(t, e) {
                        var n = this._attrs.attrs;
                        if ("clip" === t) e = this._setAttrClip(e); else {
                            var i = s[t];
                            i && (n[i] = e);
                        }
                        n[t] = e;
                    }, e._getAttr = function(t) {
                        return this._attrs.attrs[t];
                    }, e._setAttrClip = function(t) {
                        return t && u.indexOf(t._attrs.type) > -1 ? (null === t.get("canvas") && (t = Object.assign({}, t)), 
                        t.set("parent", this.get("parent")), t.set("context", this.get("context")), t) : null;
                    }, e.attr = function(t, e) {
                        var n = this;
                        if (n.get("destroyed")) return null;
                        var r = arguments.length;
                        if (0 === r) return n._attrs.attrs;
                        if (i.isObject(t)) {
                            for (var o in this._attrs.bbox = null, t) n._setAttr(o, t[o]);
                            return n._afterAttrsSet && n._afterAttrsSet(), n;
                        }
                        return 2 === r ? (this._attrs.bbox = null, n._setAttr(t, e), n._afterAttrsSet && n._afterAttrsSet(), 
                        n) : n._getAttr(t);
                    }, e.getParent = function() {
                        return this.get("parent");
                    }, e.draw = function(t) {
                        this.get("destroyed") || this.get("visible") && (this.setContext(t), this.drawInner(t), 
                        this.restoreContext(t));
                    }, e.setContext = function(t) {
                        var e = this._attrs.attrs.clip;
                        t.save(), e && (e.resetTransform(t), e.createPath(t), t.clip()), this.resetContext(t), 
                        this.resetTransform(t);
                    }, e.restoreContext = function(t) {
                        t.restore();
                    }, e.resetContext = function(t) {
                        var e = this._attrs.attrs;
                        if (!this._attrs.isGroup) for (var n in e) if (c.indexOf(n) > -1) {
                            var r = e[n];
                            "fillStyle" !== n && "strokeStyle" !== n || (r = a.parseStyle(r, this, t)), "lineDash" === n && t.setLineDash && i.isArray(r) ? t.setLineDash(r) : t[n] = r;
                        }
                    }, e.hasFill = function() {
                        return this.get("canFill") && this._attrs.attrs.fillStyle;
                    }, e.hasStroke = function() {
                        return this.get("canStroke") && this._attrs.attrs.strokeStyle;
                    }, e.drawInner = function() {}, e.show = function() {
                        return this.set("visible", !0), this;
                    }, e.hide = function() {
                        return this.set("visible", !1), this;
                    }, e.isVisible = function() {
                        return this.get("visible");
                    }, e._removeFromParent = function() {
                        var t = this.get("parent");
                        if (t) {
                            var e = t.get("children");
                            i.Array.remove(e, this);
                        }
                        return this;
                    }, e.remove = function(t) {
                        t ? this.destroy() : this._removeFromParent();
                    }, e.destroy = function() {
                        if (this.get("destroyed")) return null;
                        this._removeFromParent(), this._attrs = {}, this.set("destroyed", !0);
                    }, e.getBBox = function() {
                        return {
                            minX: 0,
                            maxX: 0,
                            minY: 0,
                            maxY: 0,
                            width: 0,
                            height: 0
                        };
                    }, e.initTransform = function() {
                        var t = this._attrs.attrs || {};
                        t.matrix || (t.matrix = [ 1, 0, 0, 1, 0, 0 ]), this._attrs.attrs = t;
                    }, e.getMatrix = function() {
                        return this._attrs.attrs.matrix;
                    }, e.setMatrix = function(t) {
                        this._attrs.attrs.matrix = [ t[0], t[1], t[2], t[3], t[4], t[5] ];
                    }, e.transform = function(t) {
                        var e = this._attrs.attrs.matrix;
                        return this._attrs.attrs.matrix = r.transform(e, t), this;
                    }, e.setTransform = function(t) {
                        return this._attrs.attrs.matrix = [ 1, 0, 0, 1, 0, 0 ], this.transform(t);
                    }, e.translate = function(t, e) {
                        var n = this._attrs.attrs.matrix;
                        r.translate(n, n, [ t, e ]);
                    }, e.rotate = function(t) {
                        var e = this._attrs.attrs.matrix;
                        r.rotate(e, e, t);
                    }, e.scale = function(t, e) {
                        var n = this._attrs.attrs.matrix;
                        r.scale(n, n, [ t, e ]);
                    }, e.moveTo = function(t, e) {
                        var n = this._attrs.x || 0, i = this._attrs.y || 0;
                        this.translate(t - n, e - i), this.set("x", t), this.set("y", e);
                    }, e.apply = function(t) {
                        var e = this._attrs.attrs.matrix;
                        return o.transformMat2d(t, t, e), this;
                    }, e.resetTransform = function(t) {
                        var e = this._attrs.attrs.matrix;
                        (function(t) {
                            return 1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3] && 0 === t[4] && 0 === t[5];
                        })(e) || t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
                    }, e.isDestroyed = function() {
                        return this.get("destroyed");
                    }, t;
                }();
                t.exports = l;
            }, function(t, e, n) {
                var i = n(20);
                t.exports = function(t) {
                    return i(t) ? "" : t.toString();
                };
            }, function(t, e) {
                t.exports = function(t) {
                    return null === t || void 0 === t;
                };
            }, function(e, n) {
                var i = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                    return void 0 === e ? "undefined" : t(e);
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
                };
                e.exports = function(t) {
                    var e = void 0 === t ? "undefined" : i(t);
                    return null !== t && "object" === e || "function" === e;
                };
            }, function(t, e, n) {
                var i = n(49), r = n(4);
                t.exports = function(t) {
                    if (!i(t) || !r(t, "Object")) return !1;
                    if (null === Object.getPrototypeOf(t)) return !0;
                    for (var e = t; null !== Object.getPrototypeOf(e); ) e = Object.getPrototypeOf(e);
                    return Object.getPrototypeOf(t) === e;
                };
            }, function(t, e, n) {
                var i = n(21), r = n(11);
                t.exports = function(t, e) {
                    if (t) if (r(t)) for (var n = 0, o = t.length; n < o && !1 !== e(t[n], n); n++) ; else if (i(t)) for (var a in t) if (t.hasOwnProperty(a) && !1 === e(t[a], a)) break;
                };
            }, function(t, e, n) {
                function i(t, e) {
                    return t - e;
                }
                function r(t, e) {
                    var n = !1;
                    return s.each(t, function(t) {
                        var r = [].concat(t.values), o = [].concat(e.values);
                        t.type !== e.type || t.field !== e.field || r.sort(i).toString() !== o.sort(i).toString() || (n = !0);
                    }), n;
                }
                var o = n(25), a = n(55), s = n(0), c = n(56), u = n(12), l = n(65), f = n(73), d = n(2), p = n(3).Canvas, h = n(34), g = function(t) {
                    function e(e) {
                        var n, i = function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t;
                        }(n = t.call(this, e) || this);
                        return s.each(u, function(t, e) {
                            var n = s.lowerFirst(e);
                            i[n] = function(e) {
                                var n = new t(e);
                                return i.addGeom(n), n;
                            };
                        }), i._init(), n;
                    }
                    (function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    })(e, t), e.initPlugins = function() {
                        return {
                            _plugins: [],
                            _cacheId: 0,
                            register: function(t) {
                                var e = this._plugins;
                                [].concat(t).forEach(function(t) {
                                    -1 === e.indexOf(t) && e.push(t);
                                }), this._cacheId++;
                            },
                            unregister: function(t) {
                                var e = this._plugins;
                                [].concat(t).forEach(function(t) {
                                    var n = e.indexOf(t);
                                    -1 !== n && e.splice(n, 1);
                                }), this._cacheId++;
                            },
                            clear: function() {
                                this._plugins = [], this._cacheId++;
                            },
                            count: function() {
                                return this._plugins.length;
                            },
                            getAll: function() {
                                return this._plugins;
                            },
                            notify: function(t, e, n) {
                                var i, r, o, a, s = this.descriptors(t), c = s.length;
                                for (i = 0; i < c; ++i) if ("function" == typeof (a = (r = s[i].plugin)[e]) && (o = [ t ].concat(n || []), 
                                !1 === a.apply(r, o))) return !1;
                                return !0;
                            },
                            descriptors: function(t) {
                                var e = t._plugins || (t._plugins = {});
                                if (e.id === this._cacheId) return e.descriptors;
                                var n = [], i = [];
                                return this._plugins.concat(t && t.get("plugins") || []).forEach(function(t) {
                                    -1 === n.indexOf(t) && (n.push(t), i.push({
                                        plugin: t
                                    }));
                                }), e.descriptors = i, e.id = this._cacheId, i;
                            }
                        };
                    };
                    var n = e.prototype;
                    return n.getDefaultCfg = function() {
                        return {
                            id: null,
                            padding: d.padding,
                            data: null,
                            scales: {},
                            geoms: null,
                            colDefs: null,
                            pixelRatio: d.pixelRatio,
                            filters: null,
                            appendPadding: d.appendPadding
                        };
                    }, n._syncYScales = function() {
                        var t = this.get("geoms"), e = [], n = [], i = [];
                        s.each(t, function(t) {
                            var r = t.getYScale();
                            r.isLinear && (e.push(r), n.push(r.min), i.push(r.max));
                        }), n = Math.min.apply(null, n), i = Math.max.apply(null, i), s.each(e, function(t) {
                            t.change({
                                min: n
                            }), t.change({
                                max: i
                            });
                        });
                    }, n._getFieldsForLegend = function() {
                        var t = [], e = this.get("geoms");
                        return s.each(e, function(e) {
                            var n = e.get("attrOptions").color;
                            if (n && n.field && s.isString(n.field)) {
                                var i = n.field.split("*");
                                s.each(i, function(e) {
                                    -1 === t.indexOf(e) && t.push(e);
                                });
                            }
                        }), t;
                    }, n._createScale = function(t, e) {
                        return this.get("scaleController").createScale(t, e);
                    }, n._adjustScale = function() {
                        var t = this, e = t.get("coord"), n = t.getXScale(), i = t.getYScales(), r = [];
                        n && r.push(n), r = r.concat(i);
                        var o = e.isPolar && function(t) {
                            var e = t.startAngle, n = t.endAngle;
                            return !(!s.isNil(e) && !s.isNil(n) && n - e < 2 * Math.PI);
                        }(e), a = t.get("scaleController").defs;
                        s.each(r, function(t) {
                            if ((t.isCategory || t.isIdentity) && t.values && (!a[t.field] || !a[t.field].range)) {
                                var n, i = t.values.length;
                                if (1 === i) n = [ .5, 1 ]; else {
                                    var r = 0;
                                    n = o ? e.transposed ? [ (r = 1 / i * d.widthRatio.multiplePie) / 2, 1 - r / 2 ] : [ 0, 1 - 1 / i ] : [ r = 1 / i * 1 / 2, 1 - r ];
                                }
                                t.range = n;
                            }
                        });
                        for (var c = this.get("geoms"), u = 0; u < c.length; u++) {
                            var l = c[u];
                            if ("interval" === l.get("type")) {
                                var f = l.getYScale(), p = f.field, h = f.min, g = f.max, m = f.type;
                                a[p] && a[p].min || "time" === m || (h > 0 ? f.change({
                                    min: 0
                                }) : g <= 0 && f.change({
                                    max: 0
                                }));
                            }
                        }
                    }, n._removeGeoms = function() {
                        for (var t = this.get("geoms"); t.length > 0; ) t.shift().destroy();
                    }, n._clearGeoms = function() {
                        for (var t = this.get("geoms"), e = 0, n = t.length; e < n; e++) t[e].clear();
                    }, n._clearInner = function() {
                        this.set("scales", {}), this.set("legendItems", null), this._clearGeoms(), e.plugins.notify(this, "clearInner"), 
                        this.get("axisController") && this.get("axisController").clear();
                    }, n._execFilter = function(t) {
                        var e = this.get("filters");
                        return e && (t = t.filter(function(t) {
                            var n = !0;
                            return s.each(e, function(e, i) {
                                if (e && !(n = e(t[i], t))) return !1;
                            }), n;
                        })), t;
                    }, n._initGeoms = function(t) {
                        for (var e = this.get("coord"), n = this.get("filteredData"), i = this.get("colDefs"), r = 0, o = t.length; r < o; r++) {
                            var a = t[r];
                            a.set("data", n), a.set("coord", e), a.set("colDefs", i), a.init();
                        }
                    }, n._initCoord = function() {
                        var t = this.get("plotRange"), e = s.mix({
                            type: "cartesian"
                        }, this.get("coordCfg"), {
                            plot: t
                        }), n = e.type, i = new (0, c[s.upperFirst(n)])(e);
                        this.set("coord", i);
                    }, n._initLayout = function() {
                        var t = this.get("_padding");
                        t || (t = this.get("margin") || this.get("padding"), t = s.parsePadding(t));
                        var e = "auto" === t[0] ? 0 : t[0], n = "auto" === t[1] ? 0 : t[1], i = "auto" === t[2] ? 0 : t[2], r = "auto" === t[3] ? 0 : t[3], o = this.get("width"), c = this.get("height"), u = new a({
                            start: {
                                x: r,
                                y: e
                            },
                            end: {
                                x: o - n,
                                y: c - i
                            }
                        });
                        this.set("plotRange", u), this.set("plot", u);
                    }, n._initCanvas = function() {
                        var t = this;
                        try {
                            var n = new p({
                                el: t.get("el") || t.get("id"),
                                context: t.get("context"),
                                pixelRatio: t.get("pixelRatio"),
                                width: t.get("width"),
                                height: t.get("height"),
                                fontFamily: d.fontFamily
                            });
                            t.set("canvas", n), t.set("width", n.get("width")), t.set("height", n.get("height"));
                        } catch (t) {
                            throw t;
                        }
                        e.plugins.notify(t, "afterCanvasInit"), t._initLayout();
                    }, n._initLayers = function() {
                        var t = this.get("canvas");
                        this.set("backPlot", t.addGroup()), this.set("middlePlot", t.addGroup({
                            zIndex: 10
                        })), this.set("frontPlot", t.addGroup({
                            zIndex: 20
                        }));
                    }, n._init = function() {
                        var t = this;
                        t._initCanvas(), t._initLayers(), t.set("geoms", []), t.set("scaleController", new l()), 
                        t.set("axisController", new f({
                            frontPlot: t.get("frontPlot").addGroup({
                                className: "axisContainer"
                            }),
                            backPlot: t.get("backPlot").addGroup({
                                className: "axisContainer"
                            }),
                            chart: t
                        })), e.plugins.notify(t, "init");
                    }, n.source = function(t, e) {
                        return this.set("data", t), e && this.scale(e), this;
                    }, n.scale = function(t, e) {
                        var n = this.get("colDefs") || {};
                        return s.isObject(t) ? s.mix(n, t) : n[t] = e, this.set("colDefs", n), this.get("scaleController").defs = n, 
                        this;
                    }, n.axis = function(t, e) {
                        var n = this.get("axisController");
                        return t ? (n.axisCfg = n.axisCfg || {}, n.axisCfg[t] = e) : n.axisCfg = null, this;
                    }, n.coord = function(t, e) {
                        var n;
                        return s.isObject(t) ? n = t : (n = e || {}).type = t || "cartesian", this.set("coordCfg", n), 
                        this;
                    }, n.filter = function(t, e) {
                        var n = this.get("filters") || {};
                        n[t] = e, this.set("filters", n);
                    }, n.render = function() {
                        var t = this.get("canvas"), n = this.get("geoms"), i = this.get("data") || [], r = this._execFilter(i);
                        this.set("filteredData", r), this._initCoord(), e.plugins.notify(this, "beforeGeomInit"), 
                        this._initGeoms(n), this.get("syncY") && this._syncYScales(), this._adjustScale(), 
                        e.plugins.notify(this, "beforeGeomDraw"), this._renderAxis();
                        var o = this.get("middlePlot");
                        if (this.get("limitInPlot") && !o.attr("clip")) {
                            var a = this.get("coord"), s = h.getClip(a);
                            s.set("canvas", o.get("canvas")), o.attr("clip", s);
                        }
                        for (var c = 0, u = n.length; c < u; c++) n[c].paint();
                        return e.plugins.notify(this, "afterGeomDraw"), t.sort(), this.get("frontPlot").sort(), 
                        e.plugins.notify(this, "beforeCanvasDraw"), t.draw(), this;
                    }, n.clear = function() {
                        return e.plugins.notify(this, "clear"), this._removeGeoms(), this._clearInner(), 
                        this.set("filters", null), this.set("isUpdate", !1), this.set("_padding", null), 
                        this.get("canvas").draw(), this;
                    }, n.repaint = function() {
                        this.set("isUpdate", !0), e.plugins.notify(this, "repaint"), this._clearInner(), 
                        this.render();
                    }, n.changeData = function(t) {
                        this.set("data", t), e.plugins.notify(this, "changeData"), this.set("_padding", null), 
                        this.repaint();
                    }, n.changeSize = function(t, e) {
                        return t ? this.set("width", t) : t = this.get("width"), e ? this.set("height", e) : e = this.get("height"), 
                        this.get("canvas").changeSize(t, e), this._initLayout(), this.repaint(), this;
                    }, n.destroy = function() {
                        this.clear(), this.get("canvas").destroy(), e.plugins.notify(this, "afterCanvasDestroyed"), 
                        this._interactions && s.each(this._interactions, function(t) {
                            t.destroy();
                        }), t.prototype.destroy.call(this);
                    }, n.getPosition = function(t) {
                        var e = this, n = e.get("coord"), i = e.getXScale(), r = e.getYScales()[0], o = i.field, a = i.scale(t[o]), s = r.field, c = r.scale(t[s]);
                        return n.convertPoint({
                            x: a,
                            y: c
                        });
                    }, n.getRecord = function(t) {
                        var e = this, n = e.get("coord"), i = e.getXScale(), r = e.getYScales()[0], o = n.invertPoint(t), a = {};
                        return a[i.field] = i.invert(o.x), a[r.field] = r.invert(o.y), a;
                    }, n.getSnapRecords = function(t) {
                        var e = this.get("geoms")[0], n = [];
                        return e && (n = e.getSnapRecords(t)), n;
                    }, n.createScale = function(t) {
                        var e = this.get("data"), n = this.get("filteredData");
                        n.length && -1 === this._getFieldsForLegend().indexOf(t) && (e = n);
                        var i = this.get("scales");
                        return i[t] || (i[t] = this._createScale(t, e)), i[t];
                    }, n.addGeom = function(t) {
                        var e = this.get("geoms"), n = this.get("middlePlot");
                        e.push(t), t.set("chart", this), t.set("container", n.addGroup());
                    }, n.getXScale = function() {
                        return this.get("geoms")[0].getXScale();
                    }, n.getYScales = function() {
                        var t = this.get("geoms"), e = [];
                        return s.each(t, function(t) {
                            var n = t.getYScale();
                            -1 === e.indexOf(n) && e.push(n);
                        }), e;
                    }, n.getLegendItems = function() {
                        if (this.get("legendItems")) return this.get("legendItems");
                        var t = {}, e = [], n = this.get("geoms");
                        return s.each(n, function(n) {
                            var i = n.getAttr("color");
                            if (i) {
                                var o = i.getScale("color");
                                if ("identity" !== o.type && !r(e, o)) {
                                    e.push(o);
                                    var a = o.field, c = o.getTicks(), u = [];
                                    s.each(c, function(t) {
                                        var e = t.text, n = t.value, r = o.invert(n), a = {
                                            fill: i.mapping(r).join("") || d.defaultColor,
                                            radius: 3,
                                            symbol: "circle",
                                            stroke: "#fff"
                                        };
                                        u.push({
                                            name: e,
                                            dataValue: r,
                                            checked: !0,
                                            marker: a
                                        });
                                    }), t[a] = u;
                                }
                            }
                        }), this.set("legendItems", t), t;
                    }, n.registerPlugins = function(t) {
                        var n = this, i = n.get("plugins") || [];
                        s.isArray(i) || (i = [ i ]), [].concat(t).forEach(function(t) {
                            -1 === i.indexOf(t) && (t.init && t.init(n), i.push(t));
                        }), e.plugins._cacheId++, n.set("plugins", i);
                    }, n._renderAxis = function() {
                        var t = this.get("axisController"), n = this.getXScale(), i = this.getYScales(), r = this.get("coord");
                        e.plugins.notify(this, "beforeRenderAxis"), t.createAxis(r, n, i);
                    }, n._isAutoPadding = function() {
                        if (this.get("_padding")) return !1;
                        var t = this.get("padding");
                        return s.isArray(t) ? -1 !== t.indexOf("auto") : "auto" === t;
                    }, n._updateLayout = function(t) {
                        var e = this.get("width"), n = this.get("height"), i = {
                            x: t[3],
                            y: t[0]
                        }, r = {
                            x: e - t[1],
                            y: n - t[2]
                        }, o = this.get("plot"), a = this.get("coord");
                        o.reset(i, r), a.reset(o);
                    }, e;
                }(o);
                g.plugins = g.initPlugins(), t.exports = g;
            }, function(t, e, n) {
                var i = n(0), r = function() {
                    function t(t) {
                        var e = {}, n = this.getDefaultCfg();
                        this._attrs = e, i.mix(e, n, t);
                    }
                    var e = t.prototype;
                    return e.getDefaultCfg = function() {
                        return {};
                    }, e.get = function(t) {
                        return this._attrs[t];
                    }, e.set = function(t, e) {
                        this._attrs[t] = e;
                    }, e.destroy = function() {
                        this._attrs = {}, this.destroyed = !0;
                    }, t;
                }();
                t.exports = r;
            }, function(t, e, n) {
                var i = n(0), r = function() {
                    function t(t) {
                        var e, n;
                        this._initDefaultCfg(), i.mix(this, t), this.plot ? (e = this.plot.bl, n = this.plot.tr, 
                        this.start = e, this.end = n) : (e = this.start, n = this.end), this.init(e, n);
                    }
                    var e = t.prototype;
                    return e._initDefaultCfg = function() {}, e.init = function() {}, e.convertPoint = function(t) {
                        return t;
                    }, e.invertPoint = function(t) {
                        return t;
                    }, e.reset = function(t) {
                        this.plot = t;
                        var e = t.bl, n = t.tr;
                        this.start = e, this.end = n, this.init(e, n);
                    }, t;
                }();
                t.exports = r;
            }, function(e, n) {
                var i = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                    return void 0 === e ? "undefined" : t(e);
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
                };
                e.exports = function(t) {
                    var e = void 0 === t ? "undefined" : i(t);
                    return null !== t && "object" === e || "function" === e;
                };
            }, function(t, e, n) {
                var i = n(14);
                t.exports = function(t) {
                    return i(t, "String");
                };
            }, function(t, e, n) {
                var i = n(0), r = n(2), o = n(6), a = function() {
                    function t(t) {
                        this._initDefaultCfg(), i.mix(this, t), this.draw();
                    }
                    var e = t.prototype;
                    return e._initDefaultCfg = function() {
                        this.ticks = [], this.tickLine = {}, this.offsetFactor = 1, this.frontContainer = null, 
                        this.backContainer = null, this.gridPoints = [];
                    }, e.draw = function() {
                        var t = this.line, e = this.tickLine, n = this.label, i = this.grid;
                        i && this.drawGrid(i), e && this.drawTicks(e), t && this.drawLine(t), n && this.drawLabels();
                    }, e.drawTicks = function(t) {
                        var e = this, n = e.ticks, r = t.length, o = e.getContainer(t.top);
                        i.each(n, function(n) {
                            var a = e.getOffsetPoint(n.value), s = e.getSidePoint(a, r);
                            o.addShape("line", {
                                className: "axis-tick",
                                attrs: i.mix({
                                    x1: a.x,
                                    y1: a.y,
                                    x2: s.x,
                                    y2: s.y
                                }, t)
                            })._id = e._id + "-ticks";
                        });
                    }, e.drawLabels = function() {
                        var t = this, e = t.labelOffset, n = t.labels;
                        i.each(n, function(n) {
                            var r = t.getContainer(n.get("top")), o = t.getOffsetPoint(n.get("value")), a = t.getSidePoint(o, e), s = a.x, c = a.y;
                            n.attr(i.mix({
                                x: s,
                                y: c
                            }, t.getTextAlignInfo(o, e), n.get("textStyle"))), n._id = t._id + "-" + n.attr("text"), 
                            r.add(n);
                        });
                    }, e.drawLine = function() {}, e.drawGrid = function(t) {
                        var e = this, n = e.gridPoints, a = e.ticks, s = t, c = n.length;
                        i.each(n, function(n, u) {
                            if (i.isFunction(t)) {
                                var l = a[u] || {}, f = t(l.text, u, c);
                                s = f ? i.mix({}, r._defaultAxis.grid, f) : null;
                            }
                            if (s) {
                                var d, p = s.type, h = n.points, g = e.getContainer(s.top);
                                if ("arc" === p) {
                                    var m = e.center, v = e.startAngle, _ = e.endAngle, y = o.length([ h[0].x - m.x, h[0].y - m.y ]);
                                    d = g.addShape("Arc", {
                                        className: "axis-grid",
                                        attrs: i.mix({
                                            x: m.x,
                                            y: m.y,
                                            startAngle: v,
                                            endAngle: _,
                                            r: y
                                        }, s)
                                    });
                                } else d = g.addShape("Polyline", {
                                    className: "axis-grid",
                                    attrs: i.mix({
                                        points: h
                                    }, s)
                                });
                                d._id = n._id;
                            }
                        });
                    }, e.getOffsetPoint = function() {}, e.getAxisVector = function() {}, e.getOffsetVector = function(t, e) {
                        var n = this.getAxisVector(t), i = o.normalize([], n), r = this.offsetFactor, a = [ -1 * i[1] * r, i[0] * r ];
                        return o.scale([], a, e);
                    }, e.getSidePoint = function(t, e) {
                        var n = this.getOffsetVector(t, e);
                        return {
                            x: t.x + n[0],
                            y: t.y + n[1]
                        };
                    }, e.getTextAlignInfo = function(t, e) {
                        var n = this.getOffsetVector(t, e);
                        return {
                            textAlign: n[0] > 0 ? "left" : n[0] < 0 ? "right" : "center",
                            textBaseline: n[1] > 0 ? "top" : n[1] < 0 ? "bottom" : "middle"
                        };
                    }, e.getContainer = function(t) {
                        var e = this.frontContainer, n = this.backContainer;
                        return t ? e : n;
                    }, t;
                }();
                t.exports = a;
            }, function(t, e, n) {
                var i = n(0), r = n(1), o = {}, a = "_INDEX";
                t.exports = {
                    getGroupClass: function() {},
                    getChildren: function() {
                        return this.get("children");
                    },
                    addShape: function(t, e) {
                        void 0 === e && (e = {});
                        var n = this.get("canvas"), a = o[t];
                        a || (a = i.upperFirst(t), o[t] = a), e.canvas = n, "Text" === a && n && n.get("fontFamily") && (e.attrs.fontFamily = e.attrs.fontFamily || n.get("fontFamily"));
                        var s = new r[a](e);
                        return this.add(s), s;
                    },
                    addGroup: function(t) {
                        var e = this.get("canvas"), n = this.getGroupClass();
                        (t = i.mix({}, t)).canvas = e, t.parent = this;
                        var r = new n(t);
                        return this.add(r), r;
                    },
                    contain: function(t) {
                        return this.get("children").indexOf(t) > -1;
                    },
                    sort: function() {
                        for (var t = this.get("children"), e = 0, n = t.length; e < n; e++) t[e][a] = e;
                        return t.sort(function(t) {
                            return function(e, n) {
                                var i = t(e, n);
                                return 0 === i ? e[a] - n[a] : i;
                            };
                        }(function(t, e) {
                            return t.get("zIndex") - e.get("zIndex");
                        })), this;
                    },
                    clear: function() {
                        for (var t = this.get("children"); 0 !== t.length; ) t[t.length - 1].remove(!0);
                        return this;
                    },
                    add: function(t) {
                        var e = this, n = e.get("children");
                        i.isArray(t) || (t = [ t ]);
                        for (var r = 0, o = t.length; r < o; r++) {
                            var a = t[r], s = a.get("parent");
                            if (s) {
                                var c = s.get("children");
                                i.Array.remove(c, a);
                            }
                            e._setEvn(a), n.push(a);
                        }
                        return e;
                    },
                    _setEvn: function(t) {
                        var e = this;
                        t._attrs.parent = e, t._attrs.context = e._attrs.context, t._attrs.canvas = e._attrs.canvas;
                        var n = t._attrs.attrs.clip;
                        if (n && (n.set("parent", e), n.set("context", e.get("context"))), t._attrs.isGroup) for (var i = t._attrs.children, r = 0, o = i.length; r < o; r++) t._setEvn(i[r]);
                    }
                };
            }, function(t, e) {
                var n = {
                    multiply: function(t, e) {
                        return [ t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5] ];
                    },
                    scale: function(t, e, n) {
                        return t[0] = e[0] * n[0], t[1] = e[1] * n[0], t[2] = e[2] * n[1], t[3] = e[3] * n[1], 
                        t[4] = e[4], t[5] = e[5], t;
                    },
                    rotate: function(t, e, n) {
                        var i = Math.cos(n), r = Math.sin(n), o = e[0] * i + e[2] * r, a = e[1] * i + e[3] * r, s = e[0] * -r + e[2] * i, c = e[1] * -r + e[3] * i;
                        return t[0] = o, t[1] = a, t[2] = s, t[3] = c, t[4] = e[4], t[5] = e[5], t;
                    },
                    translate: function(t, e, n) {
                        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + e[0] * n[0] + e[2] * n[1], 
                        t[5] = e[5] + e[1] * n[0] + e[3] * n[1], t;
                    },
                    transform: function(t, e) {
                        for (var i = [].concat(t), r = 0, o = e.length; r < o; r++) {
                            var a = e[r];
                            switch (a[0]) {
                              case "t":
                                n.translate(i, i, [ a[1], a[2] ]);
                                break;

                              case "s":
                                n.scale(i, i, [ a[1], a[2] ]);
                                break;

                              case "r":
                                n.rotate(i, i, a[1]);
                            }
                        }
                        return i;
                    }
                };
                t.exports = n;
            }, function(t, e, n) {
                var i = n(0), r = n(18), o = n(30), a = n(6), s = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var n = e.prototype;
                    return n._initProperties = function() {
                        this._attrs = {
                            zIndex: 0,
                            visible: !0,
                            destroyed: !1,
                            isGroup: !0,
                            children: []
                        };
                    }, n.drawInner = function(t) {
                        for (var e = this.get("children"), n = 0, i = e.length; n < i; n++) e[n].draw(t);
                        return this;
                    }, n.getBBox = function() {
                        for (var t = 1 / 0, e = -1 / 0, n = 1 / 0, i = -1 / 0, r = this.get("children"), o = 0, s = r.length; o < s; o++) {
                            var c = r[o];
                            if (c.get("visible")) {
                                var u = c.getBBox();
                                if (!u) continue;
                                var l = [ u.minX, u.minY ], f = [ u.minX, u.maxY ], d = [ u.maxX, u.minY ], p = [ u.maxX, u.maxY ], h = c.attr("matrix");
                                a.transformMat2d(l, l, h), a.transformMat2d(f, f, h), a.transformMat2d(d, d, h), 
                                a.transformMat2d(p, p, h), t = Math.min(l[0], f[0], d[0], p[0], t), e = Math.max(l[0], f[0], d[0], p[0], e), 
                                n = Math.min(l[1], f[1], d[1], p[1], n), i = Math.max(l[1], f[1], d[1], p[1], i);
                            }
                        }
                        return {
                            minX: t,
                            minY: n,
                            maxX: e,
                            maxY: i,
                            x: t,
                            y: n,
                            width: e - t,
                            height: i - n
                        };
                    }, n.destroy = function() {
                        this.get("destroyed") || (this.clear(), t.prototype.destroy.call(this));
                    }, e;
                }(r);
                i.mix(s.prototype, o, {
                    getGroupClass: function() {
                        return s;
                    }
                }), t.exports = s;
            }, function(e, n) {
                e.exports = {
                    requestAnimationFrame: "object" == ("undefined" == typeof window ? "undefined" : t(window)) && window.requestAnimationFrame ? window.requestAnimationFrame : function(t) {
                        return setTimeout(t, 16);
                    }
                };
            }, function(t, e, n) {
                var i = n(3).Shape;
                t.exports = {
                    getClip: function(t) {
                        var e, n = t.start, r = t.end, o = r.x - n.x, a = Math.abs(r.y - n.y);
                        if (t.isPolar) {
                            var s = t.circleRadius, c = t.center, u = t.startAngle, l = t.endAngle;
                            e = new i.Sector({
                                attrs: {
                                    x: c.x,
                                    y: c.y,
                                    r: s,
                                    r0: 0,
                                    startAngle: u,
                                    endAngle: l
                                }
                            });
                        } else e = new i.Rect({
                            attrs: {
                                x: n.x,
                                y: r.y - 10,
                                width: o,
                                height: a + 20
                            }
                        });
                        return e.isClip = !0, e;
                    },
                    isPointInPlot: function(t, e) {
                        var n = t.x, i = t.y, r = e.tl, o = e.tr, a = e.br;
                        return n >= r.x && n <= o.x && i >= r.y && i <= a.y;
                    }
                };
            }, function(t, e, n) {
                var i = n(0), r = {
                    splitPoints: function(t) {
                        var e = [], n = t.x, r = t.y;
                        return (r = i.isArray(r) ? r : [ r ]).forEach(function(t, r) {
                            var o = {
                                x: i.isArray(n) ? n[r] : n,
                                y: t
                            };
                            e.push(o);
                        }), e;
                    },
                    splitArray: function(t, e, n) {
                        if (!t.length) return [];
                        var r, o = [], a = [];
                        return i.each(t, function(t) {
                            r = t._origin ? t._origin[e] : t[e], n ? i.isNil(r) || a.push(t) : i.isArray(r) && i.isNil(r[0]) || i.isNil(r) ? a.length && (o.push(a), 
                            a = []) : a.push(t);
                        }), a.length && o.push(a), o;
                    }
                };
                t.exports = r;
            }, function(t, e, n) {
                function i(t) {
                    var e = {
                        strokeStyle: t.color
                    };
                    return t.size >= 0 && (e.lineWidth = t.size), o.mix(e, t.style), o.mix({}, c.shape.line, e);
                }
                function r(t, e, n, i) {
                    var r = t.points;
                    if (r.length && o.isArray(r[0].y)) {
                        for (var a = [], c = [], u = 0, l = r.length; u < l; u++) {
                            var f = r[u], d = s.splitPoints(f);
                            c.push(d[0]), a.push(d[1]);
                        }
                        return t.isInCircle && (a.push(a[0]), c.push(c[0])), t.isStack ? e.addShape("Polyline", {
                            className: "line",
                            attrs: o.mix({
                                points: a,
                                smooth: i
                            }, n)
                        }) : [ e.addShape("Polyline", {
                            className: "line",
                            attrs: o.mix({
                                points: a,
                                smooth: i
                            }, n)
                        }), e.addShape("Polyline", {
                            className: "line",
                            attrs: o.mix({
                                points: c,
                                smooth: i
                            }, n)
                        }) ];
                    }
                    return t.isInCircle && r.push(r[0]), e.addShape("Polyline", {
                        className: "line",
                        attrs: o.mix({
                            points: r,
                            smooth: i
                        }, n)
                    });
                }
                var o = n(0), a = n(16), s = n(35), c = n(2), u = a.registerFactory("line", {
                    defaultShapeType: "line"
                });
                o.each([ "line", "smooth", "dash" ], function(t) {
                    a.registerShape("line", t, {
                        draw: function(e, n) {
                            var o = "smooth" === t, a = i(e);
                            return "dash" === t && (a.lineDash = c.lineDash), r(e, n, a, o);
                        }
                    });
                }), t.exports = u;
            }, function(t, e, n) {
                var i = n(3).Matrix, r = n(0), o = {
                    getCoordInfo: function(t) {
                        var e = t.start, n = t.end;
                        return {
                            start: e,
                            end: n,
                            width: n.x - e.x,
                            height: Math.abs(n.y - e.y)
                        };
                    },
                    getScaledMatrix: function(t, e, n) {
                        var r;
                        t.apply(e);
                        var o = e[0], a = e[1];
                        if ("x" === n) {
                            t.transform([ [ "t", o, a ], [ "s", .01, 1 ], [ "t", -o, -a ] ]);
                            var s = t.getMatrix();
                            r = i.transform(s, [ [ "t", o, a ], [ "s", 100, 1 ], [ "t", -o, -a ] ]);
                        } else if ("y" === n) {
                            t.transform([ [ "t", o, a ], [ "s", 1, .01 ], [ "t", -o, -a ] ]);
                            var c = t.getMatrix();
                            r = i.transform(c, [ [ "t", o, a ], [ "s", 1, 100 ], [ "t", -o, -a ] ]);
                        } else if ("xy" === n) {
                            t.transform([ [ "t", o, a ], [ "s", .01, .01 ], [ "t", -o, -a ] ]);
                            var u = t.getMatrix();
                            r = i.transform(u, [ [ "t", o, a ], [ "s", 100, 100 ], [ "t", -o, -a ] ]);
                        }
                        return r;
                    },
                    getAnimateParam: function(t, e, n) {
                        var i = {};
                        return t.delay && (i.delay = r.isFunction(t.delay) ? t.delay(e, n) : t.delay), i.easing = t.easing, 
                        i.duration = t.duration, i.delay = t.delay, i;
                    },
                    doAnimation: function(t, e, n, i) {
                        var r = t._id, a = t.get("index"), s = o.getAnimateParam(n, a, r), c = s.easing, u = s.delay, l = s.duration, f = t.animate().to({
                            attrs: e,
                            duration: l,
                            delay: u,
                            easing: c
                        });
                        i && f.onEnd(function() {
                            i();
                        });
                    }
                };
                t.exports = o;
            }, function(t, e, n) {
                var i = n(39);
                i.Plugin = {}, n(88);
                var r = i.Plugin.Legend = n(90);
                i.Chart.plugins.register([ r ]);
                var o = n(93);
                i.Chart.plugins.register([ o ]), t.exports = i;
            }, function(t, e, n) {
                var i = {}, r = n(2);
                i.Global = r, i.version = r.version, i.Chart = n(24), i.Shape = n(16), i.G = n(3), 
                i.Util = n(0), i.track = function() {
                    return null;
                }, t.exports = i;
            }, function(t, e, n) {
                var i = n(0), r = {
                    label: {
                        fill: "#808080",
                        fontSize: 10
                    },
                    line: {
                        stroke: "#E8E8E8",
                        lineWidth: 1
                    },
                    grid: {
                        type: "line",
                        stroke: "#E8E8E8",
                        lineWidth: 1,
                        lineDash: [ 2 ]
                    },
                    tickLine: null,
                    labelOffset: 7.5
                }, o = {
                    fontFamily: '"Helvetica Neue", "San Francisco", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", sans-serif',
                    defaultColor: "#1890FF",
                    pixelRatio: 1,
                    padding: "auto",
                    appendPadding: 15,
                    colors: [ "#1890FF", "#2FC25B", "#FACC14", "#223273", "#8543E0", "#13C2C2", "#3436C7", "#F04864" ],
                    shapes: {
                        line: [ "line", "dash" ],
                        point: [ "circle", "hollowCircle" ]
                    },
                    sizes: [ 4, 10 ],
                    axis: {
                        common: r,
                        bottom: i.mix({}, r, {
                            grid: null
                        }),
                        left: i.mix({}, r, {
                            line: null
                        }),
                        right: i.mix({}, r, {
                            line: null
                        }),
                        circle: i.mix({}, r, {
                            line: null
                        }),
                        radius: i.mix({}, r, {
                            labelOffset: 4
                        })
                    },
                    shape: {
                        line: {
                            lineWidth: 2,
                            lineJoin: "round",
                            lineCap: "round"
                        },
                        point: {
                            lineWidth: 0,
                            size: 3
                        },
                        area: {
                            fillOpacity: .1
                        }
                    },
                    _defaultAxis: r
                };
                t.exports = o;
            }, function(e, n) {
                var i, r = !!function() {
                    var t = !1;
                    try {
                        var e = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0;
                            }
                        });
                        window.addEventListener("e", null, e);
                    } catch (t) {}
                    return t;
                }() && {
                    passive: !0
                };
                i = {
                    isWx: "object" == ("undefined" == typeof wx ? "undefined" : t(wx)) && "function" == typeof wx.getSystemInfoSync,
                    isMy: "object" == ("undefined" == typeof my ? "undefined" : t(my)) && "function" == typeof my.getSystemInfoSync,
                    isNode: void 0 !== e && void 0 !== e.exports,
                    isBrowser: "undefined" != typeof window && void 0 !== window.document && void 0 !== window.sessionStorage,
                    getPixelRatio: function() {
                        return window && window.devicePixelRatio || 1;
                    },
                    getStyle: function(t, e) {
                        return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
                    },
                    getWidth: function(t) {
                        var e = this.getStyle(t, "width");
                        return "auto" === e && (e = t.offsetWidth), parseFloat(e);
                    },
                    getHeight: function(t) {
                        var e = this.getStyle(t, "height");
                        return "auto" === e && (e = t.offsetHeight), parseFloat(e);
                    },
                    getDomById: function(t) {
                        return t ? document.getElementById(t) : null;
                    },
                    getRelativePosition: function(t, e) {
                        var n = e.get("el"), i = n.getBoundingClientRect(), r = i.top, o = i.right, a = i.bottom, s = i.left, c = parseFloat(this.getStyle(n, "padding-left")), u = parseFloat(this.getStyle(n, "padding-top")), l = o - s - c - parseFloat(this.getStyle(n, "padding-right")), f = a - r - u - parseFloat(this.getStyle(n, "padding-bottom")), d = e.get("pixelRatio");
                        return {
                            x: (t.x - s - c) / l * n.width / d,
                            y: (t.y - r - u) / f * n.height / d
                        };
                    },
                    addEventListener: function(t, e, n) {
                        i.isBrowser && t.addEventListener(e, n, r);
                    },
                    removeEventListener: function(t, e, n) {
                        i.isBrowser && t.removeEventListener(e, n, r);
                    },
                    createEvent: function(t, e) {
                        return function(t, e) {
                            var n = t.type, r = {}, o = t.targetTouches;
                            o && o.length > 0 ? (r.x = o[0].clientX, r.y = o[0].clientY) : (r.x = t.clientX, 
                            r.y = t.clientY);
                            var a = e.get("canvas"), s = i.getRelativePosition(r, a);
                            return function(t, e, n, i, r) {
                                return {
                                    type: t,
                                    chart: e,
                                    native: r || null,
                                    x: void 0 !== n ? n : null,
                                    y: void 0 !== i ? i : null
                                };
                            }(n, e, s.x, s.y, t);
                        }(t, e);
                    },
                    measureText: function(t, e, n) {
                        return n || (n = document.createElement("canvas").getContext("2d")), n.font = e || "12px sans-serif", 
                        n.measureText(t);
                    }
                }, e.exports = i;
            }, function(t, e, n) {
                var i = n(19);
                t.exports = function(t) {
                    var e = i(t);
                    return e.charAt(0).toUpperCase() + e.substring(1);
                };
            }, function(t, e, n) {
                var i = n(19);
                t.exports = function(t) {
                    var e = i(t);
                    return e.charAt(0).toLowerCase() + e.substring(1);
                };
            }, function(t, e, n) {
                var i = n(4);
                t.exports = function(t) {
                    return i(t, "String");
                };
            }, function(t, e, n) {
                var i = n(4);
                t.exports = function(t) {
                    return i(t, "Number");
                };
            }, function(t, e, n) {
                var i = n(4);
                t.exports = function(t) {
                    return i(t, "Boolean");
                };
            }, function(t, e, n) {
                var i = n(4);
                t.exports = function(t) {
                    return i(t, "Function");
                };
            }, function(t, e, n) {
                var i = n(4);
                t.exports = function(t) {
                    return i(t, "Date");
                };
            }, function(e, n) {
                var i = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                    return void 0 === e ? "undefined" : t(e);
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
                };
                e.exports = function(t) {
                    return "object" === (void 0 === t ? "undefined" : i(t)) && null !== t;
                };
            }, function(t, e, n) {
                function i(t, e, n, s) {
                    for (var c in n = n || 0, s = s || a, e) if (e.hasOwnProperty(c)) {
                        var u = e[c];
                        null !== u && r(u) ? (r(t[c]) || (t[c] = {}), n < s ? i(t[c], u, n + 1, s) : t[c] = e[c]) : o(u) ? (t[c] = [], 
                        t[c] = t[c].concat(u)) : void 0 !== u && (t[c] = u);
                    }
                }
                var r = n(22), o = n(11), a = 5;
                t.exports = function() {
                    for (var t = new Array(arguments.length), e = t.length, n = 0; n < e; n++) t[n] = arguments[n];
                    for (var r = t[0], o = 1; o < e; o++) i(r, t[o]);
                    return r;
                };
            }, function(t, e) {
                function n(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && "constructor" !== n && void 0 !== e[n] && (t[n] = e[n]);
                }
                t.exports = function(t, e, i, r) {
                    return e && n(t, e), i && n(t, i), r && n(t, r), t;
                };
            }, function(t, e, n) {
                var i = n(23), r = n(53);
                t.exports = function(t) {
                    var e = [];
                    return i(t, function(t) {
                        r(e, t) || e.push(t);
                    }), e;
                };
            }, function(t, e, n) {
                var i = n(54), r = Array.prototype.indexOf;
                t.exports = function(t, e) {
                    return !!i(t) && r.call(t, e) > -1;
                };
            }, function(t, e) {
                t.exports = function(t) {
                    return null !== t && "function" != typeof t && isFinite(t.length);
                };
            }, function(t, e, n) {
                var i = n(0), r = function() {
                    function t(t) {
                        i.mix(this, t), this._init();
                    }
                    var e = t.prototype;
                    return e._init = function() {
                        var t = this.start, e = this.end, n = Math.min(t.x, e.x), i = Math.max(t.x, e.x), r = Math.min(t.y, e.y), o = Math.max(t.y, e.y);
                        this.tl = {
                            x: n,
                            y: r
                        }, this.tr = {
                            x: i,
                            y: r
                        }, this.bl = {
                            x: n,
                            y: o
                        }, this.br = {
                            x: i,
                            y: o
                        }, this.width = i - n, this.height = o - r;
                    }, e.reset = function(t, e) {
                        this.start = t, this.end = e, this._init();
                    }, e.isInRange = function(t, e) {
                        i.isObject(t) && (e = t.y, t = t.x);
                        var n = this.tl, r = this.br;
                        return n.x <= t && t <= r.x && n.y <= e && e <= r.y;
                    }, t;
                }();
                t.exports = r;
            }, function(t, e, n) {
                var i = n(26);
                n(57), t.exports = i;
            }, function(t, e, n) {
                var i = n(26), r = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var n = e.prototype;
                    return n._initDefaultCfg = function() {
                        this.type = "cartesian", this.transposed = !1, this.isRect = !0;
                    }, n.init = function(t, e) {
                        this.x = {
                            start: t.x,
                            end: e.x
                        }, this.y = {
                            start: t.y,
                            end: e.y
                        };
                    }, n.convertPoint = function(t) {
                        var e = this, n = e.transposed, i = n ? "y" : "x", r = n ? "x" : "y", o = e.x, a = e.y;
                        return {
                            x: o.start + (o.end - o.start) * t[i],
                            y: a.start + (a.end - a.start) * t[r]
                        };
                    }, n.invertPoint = function(t) {
                        var e = this, n = e.transposed, i = n ? "y" : "x", r = n ? "x" : "y", o = e.x, a = e.y, s = {};
                        return s[i] = (t.x - o.start) / (o.end - o.start), s[r] = (t.y - a.start) / (a.end - a.start), 
                        s;
                    }, e;
                }(i);
                i.Cartesian = r, i.Rect = r, t.exports = r;
            }, function(t, e, n) {
                t.exports = {
                    Position: n(59),
                    Shape: n(60),
                    Size: n(61),
                    Color: n(62)
                };
            }, function(t, e, n) {
                var i = n(7), r = n(13), o = n(5), a = function(t) {
                    function e(e) {
                        var n;
                        return (n = t.call(this, e) || this).names = [ "x", "y" ], n.type = "position", 
                        n;
                    }
                    return function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t), e.prototype.mapping = function(t, e) {
                        var n, a, s, c = this.scales, u = this.coord, l = c[0], f = c[1];
                        if (i(t) || i(e)) return [];
                        if (r(e) && r(t)) {
                            n = [], a = [];
                            for (var d = 0, p = 0, h = t.length, g = e.length; d < h && p < g; d++, p++) s = u.convertPoint({
                                x: l.scale(t[d]),
                                y: f.scale(e[p])
                            }), n.push(s.x), a.push(s.y);
                        } else if (r(e)) t = l.scale(t), a = [], o(e, function(e) {
                            e = f.scale(e), s = u.convertPoint({
                                x: t,
                                y: e
                            }), n && n !== s.x ? (r(n) || (n = [ n ]), n.push(s.x)) : n = s.x, a.push(s.y);
                        }); else if (r(t)) e = f.scale(e), n = [], o(t, function(t) {
                            t = l.scale(t), s = u.convertPoint({
                                x: t,
                                y: e
                            }), a && a !== s.y ? (r(a) || (a = [ a ]), a.push(s.y)) : a = s.y, n.push(s.x);
                        }); else {
                            t = l.scale(t), e = f.scale(e);
                            var m = u.convertPoint({
                                x: t,
                                y: e
                            });
                            n = m.x, a = m.y;
                        }
                        return [ n, a ];
                    }, e;
                }(n(9));
                t.exports = a;
            }, function(t, e, n) {
                var i = function(t) {
                    function e(e) {
                        var n;
                        return (n = t.call(this, e) || this).names = [ "shape" ], n.type = "shape", n.gradient = null, 
                        n;
                    }
                    return function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t), e.prototype.getLinearValue = function(t) {
                        var e = this.values;
                        return e[Math.round((e.length - 1) * t)];
                    }, e;
                }(n(9));
                t.exports = i;
            }, function(t, e, n) {
                var i = function(t) {
                    function e(e) {
                        var n;
                        return (n = t.call(this, e) || this).names = [ "size" ], n.type = "size", n.gradient = null, 
                        n;
                    }
                    return function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t), e;
                }(n(9));
                t.exports = i;
            }, function(t, e, n) {
                var i = n(0), r = n(63), o = function(t) {
                    function e(e) {
                        var n;
                        return (n = t.call(this, e) || this).names = [ "color" ], n.type = "color", n.gradient = null, 
                        i.isString(n.values) && (n.linear = !0), n;
                    }
                    return function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t), e.prototype.getLinearValue = function(t) {
                        var e = this.gradient;
                        if (!e) {
                            var n = this.values;
                            e = r.gradient(n), this.gradient = e;
                        }
                        return e(t);
                    }, e;
                }(n(9));
                t.exports = o;
            }, function(t, e, n) {
                function i(t, e, n, i) {
                    return t[i] + (e[i] - t[i]) * n;
                }
                function r(t) {
                    return "#" + o(t[0]) + o(t[1]) + o(t[2]);
                }
                function o(t) {
                    return 1 === (t = (t = Math.round(t)).toString(16)).length && (t = "0" + t), t;
                }
                function a(t) {
                    var e = [];
                    return e.push(parseInt(t.substr(1, 2), 16)), e.push(parseInt(t.substr(3, 2), 16)), 
                    e.push(parseInt(t.substr(5, 2), 16)), e;
                }
                var s = n(0), c = {
                    black: "#000000",
                    blue: "#0000ff",
                    grey: "#808080",
                    green: "#008000",
                    orange: "#ffa500",
                    pink: "#ffc0cb",
                    purple: "#800080",
                    red: "#ff0000",
                    white: "#ffffff",
                    yellow: "#ffff00"
                }, u = {
                    toHex: function(t) {
                        if (c[t]) return c[t];
                        if ("#" === t[0]) {
                            if (7 === t.length) return t;
                            var e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, e, n, i) {
                                return "#" + e + e + n + n + i + i;
                            });
                            return c[t] = e, e;
                        }
                        var n = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
                        return n.shift(), n = r(n), c[t] = n, n;
                    },
                    hex2arr: a,
                    gradient: function(t) {
                        var e = [];
                        return s.isString(t) && (t = t.split("-")), s.each(t, function(t) {
                            -1 === t.indexOf("#") && (t = u.toHex(t)), e.push(a(t));
                        }), function(t) {
                            return function(t, e) {
                                var n = t.length - 1, o = Math.floor(n * e), a = n * e - o, s = t[o], c = o === n ? s : t[o + 1];
                                return r([ i(s, c, a, 0), i(s, c, a, 1), i(s, c, a, 2) ]);
                            }(e, t);
                        };
                    }
                };
                t.exports = u;
            }, function(t, e, n) {
                var i = n(15), r = function() {
                    function t(t) {
                        this._initDefaultCfg(), i(this, t);
                    }
                    var e = t.prototype;
                    return e._initDefaultCfg = function() {
                        this.adjustNames = [ "x", "y" ];
                    }, e.processAdjust = function() {}, t;
                }();
                t.exports = r;
            }, function(t, e, n) {
                var i = n(0), r = n(2), o = n(66), a = {
                    linear: "Linear",
                    cat: "Cat",
                    timeCat: "TimeCat",
                    identity: "Identity"
                }, s = function() {
                    function t(t) {
                        this.defs = {}, i.mix(this, t);
                    }
                    var e = t.prototype;
                    return e._getDef = function(t) {
                        var e = this.defs, n = null;
                        return (r.scales[t] || e[t]) && (n = i.mix({}, r.scales[t]), i.each(e[t], function(t, e) {
                            i.isNil(t) ? delete n[e] : n[e] = t;
                        })), n;
                    }, e._getDefaultType = function(t, e, n) {
                        if (n && n.type) return n.type;
                        var r = "linear", o = i.Array.firstValue(e, t);
                        return i.isArray(o) && (o = o[0]), i.isString(o) && (r = "cat"), r;
                    }, e._getScaleCfg = function(t, e, n, r) {
                        var o, a = {
                            field: e,
                            values: o = r && r.values ? r.values : i.Array.values(n, e)
                        };
                        if ("cat" !== t && "timeCat" !== t) {
                            if (!r || !r.min || !r.max) {
                                var s = i.Array.getRange(o), c = s.min, u = s.max;
                                a.min = c, a.max = u, a.nice = !0;
                            }
                        } else a.isRounding = !1;
                        return a;
                    }, e.createScale = function(t, e) {
                        var n, r = this, s = r._getDef(t);
                        if (!e || !e.length) return s && s.type ? (s.field = t, n = new o[a[s.type]](s)) : n = new o.Identity({
                            value: t,
                            field: t.toString(),
                            values: [ t ]
                        }), n;
                        var c = e[0][t];
                        if (null === c && (c = i.Array.firstValue(e, t)), i.isNumber(t) || i.isNil(c) && !s) n = new o.Identity({
                            value: t,
                            field: t.toString(),
                            values: [ t ]
                        }); else {
                            var u = r._getDefaultType(t, e, s), l = r._getScaleCfg(u, t, e, s);
                            s && i.mix(l, s), n = new o[a[u]](l);
                        }
                        return n;
                    }, t;
                }();
                t.exports = s;
            }, function(t, e, n) {
                var i = n(10);
                n(67), n(70), n(71), t.exports = i;
            }, function(t, e, n) {
                var i = n(7), r = n(5), o = n(10), a = n(68), s = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var n = e.prototype;
                    return n._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this);
                        var e = this;
                        e.type = "linear", e.isLinear = !0, e.nice = !1, e.min = null, e.minLimit = null, 
                        e.max = null, e.maxLimit = null, e.tickCount = null, e.tickInterval = null, e.minTickInterval = null, 
                        e.snapArray = null;
                    }, n.init = function() {
                        var t = this;
                        if (t.ticks) {
                            var e = t.ticks, n = t.translate(e[0]), r = t.translate(e[e.length - 1]);
                            (i(t.min) || t.min > n) && (t.min = n), (i(t.max) || t.max < r) && (t.max = r);
                        } else t.min = t.translate(t.min), t.max = t.translate(t.max), t.initTicks();
                    }, n.calculateTicks = function() {
                        var t = this.min, e = this.max, n = this.minLimit, i = this.maxLimit, r = this.tickCount, o = this.tickInterval, s = this.minTickInterval, c = this.snapArray;
                        if (1 === r) throw new Error("linear scale'tickCount should not be 1");
                        if (e < t) throw new Error("max: " + e + " should not be less than min: " + t);
                        return a({
                            min: t,
                            max: e,
                            minLimit: n,
                            maxLimit: i,
                            minCount: r,
                            maxCount: r,
                            interval: o,
                            minTickInterval: s,
                            snapArray: c
                        }).ticks;
                    }, n.initTicks = function() {
                        var t = this, e = t.calculateTicks();
                        if (t.nice) t.ticks = e, t.min = e[0], t.max = e[e.length - 1]; else {
                            var n = [];
                            r(e, function(e) {
                                e >= t.min && e <= t.max && n.push(e);
                            }), n.length || (n.push(t.min), n.push(t.max)), t.ticks = n;
                        }
                    }, n.scale = function(t) {
                        if (i(t)) return NaN;
                        var e = this.max, n = this.min;
                        if (e === n) return 0;
                        var r = (t - n) / (e - n), o = this.rangeMin();
                        return o + r * (this.rangeMax() - o);
                    }, n.invert = function(t) {
                        var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
                        return this.min + e * (this.max - this.min);
                    }, e;
                }(o);
                o.Linear = s, t.exports = s;
            }, function(t, e, n) {
                var i = n(7), r = n(17), o = n(69), a = [ 0, 1, 1.2, 1.5, 1.6, 2, 2.2, 2.4, 2.5, 3, 4, 5, 6, 7.5, 8, 10 ], s = [ 0, 1, 2, 4, 5, 10 ];
                t.exports = function(t) {
                    var e = t.min, n = t.max, c = t.interval, u = t.minTickInterval, l = [], f = t.minCount || 5, d = t.maxCount || 7, p = f === d, h = i(t.minLimit) ? -1 / 0 : t.minLimit, g = i(t.maxLimit) ? 1 / 0 : t.maxLimit, m = (f + d) / 2, v = m, _ = t.snapArray ? t.snapArray : p ? a : s;
                    if (e === h && n === g && p && (c = (n - e) / (v - 1)), i(e) && (e = 0), i(n) && (n = 0), 
                    n === e && (0 === e ? n = 1 : e > 0 ? e = 0 : n = 0, n - e < 5 && !c && n - e >= 1 && (c = 1)), 
                    i(c)) {
                        var y = (n - e) / (m - 1);
                        c = o.snapFactorTo(y, _, "ceil"), d !== f && ((v = parseInt((n - e) / c, 10)) > d && (v = d), 
                        v < f && (v = f), c = o.snapFactorTo((n - e) / (v - 1), _, "floor"));
                    }
                    if (r(u) && c < u && (c = u), t.interval || d !== f) n = Math.min(o.snapMultiple(n, c, "ceil"), g), 
                    e = Math.max(o.snapMultiple(e, c, "floor"), h), v = Math.round((n - e) / c), e = o.fixedBase(e, c), 
                    n = o.fixedBase(n, c); else {
                        m = parseInt(m, 10);
                        var x, b = (n + e) / 2, w = o.snapMultiple(b, c, "ceil"), C = Math.floor((m - 2) / 2), S = w + C * c;
                        for (x = m % 2 == 0 ? w - C * c : w - (C + 1) * c; S < n; ) S = o.fixedBase(S + c, c);
                        for (;x > e; ) x = o.fixedBase(x - c, c);
                        n = S, e = x;
                    }
                    n = Math.min(n, g), e = Math.max(e, h), l.push(e);
                    for (var I = 1; I < v; I++) {
                        var M = o.fixedBase(c * I + e, c);
                        M < n && l.push(M);
                    }
                    return l[l.length - 1] < n && l.push(n), {
                        min: e,
                        max: n,
                        interval: c,
                        count: v,
                        ticks: l
                    };
                };
            }, function(t, e) {
                function n(t, e) {
                    var n = t.length;
                    if (0 === n) return NaN;
                    var i = t[0];
                    if (e < t[0]) return NaN;
                    if (e >= t[n - 1]) return t[n - 1];
                    for (var r = 1; r < t.length && !(e < t[r]); r++) i = t[r];
                    return i;
                }
                function i(t, e) {
                    var n, i = t.length;
                    if (0 === i) return NaN;
                    if (e > t[i - 1]) return NaN;
                    if (e < t[0]) return t[0];
                    for (var r = 1; r < t.length; r++) if (e <= t[r]) {
                        n = t[r];
                        break;
                    }
                    return n;
                }
                var r = {
                    snapFactorTo: function(t, e, n) {
                        if (isNaN(t)) return NaN;
                        var i = 1;
                        if (0 !== t) {
                            t < 0 && (i = -1);
                            var o = function(t) {
                                var e = 1;
                                if (t === 1 / 0 || t === -1 / 0) throw new Error("Not support Infinity!");
                                if (t < 1) {
                                    for (var n = 0; t < 1; ) e /= 10, t *= 10, n++;
                                    e.toString().length > 12 && (e = parseFloat(e.toFixed(n)));
                                } else for (;t > 10; ) e *= 10, t /= 10;
                                return e;
                            }(t *= i);
                            i *= o, t /= o;
                        }
                        t = "floor" === n ? r.snapFloor(e, t) : "ceil" === n ? r.snapCeiling(e, t) : r.snapTo(e, t);
                        var a = parseFloat((t * i).toPrecision(12));
                        return Math.abs(i) < 1 && a.toString().length > 12 && (a = t / parseInt(1 / i) * (i > 0 ? 1 : -1)), 
                        a;
                    },
                    snapMultiple: function(t, e, n) {
                        return ("ceil" === n ? Math.ceil(t / e) : "floor" === n ? Math.floor(t / e) : Math.round(t / e)) * e;
                    },
                    snapTo: function(t, e) {
                        var r = n(t, e), o = i(t, e);
                        if (isNaN(r) || isNaN(o)) {
                            if (t[0] >= e) return t[0];
                            var a = t[t.length - 1];
                            if (a <= e) return a;
                        }
                        return Math.abs(e - r) < Math.abs(o - e) ? r : o;
                    },
                    snapFloor: function(t, e) {
                        return n(t, e);
                    },
                    snapCeiling: function(t, e) {
                        return i(t, e);
                    },
                    fixedBase: function(t, e) {
                        var n = e.toString(), i = n.indexOf(".");
                        if (-1 === i) return Math.round(t);
                        var r = n.substr(i + 1).length;
                        return r > 20 && (r = 20), parseFloat(t.toFixed(r));
                    }
                };
                t.exports = r;
            }, function(t, e, n) {
                var i = n(10), r = n(17), o = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var n = e.prototype;
                    return n._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this), this.isIdentity = !0, this.type = "identity", 
                        this.value = null;
                    }, n.getText = function() {
                        return this.value.toString();
                    }, n.scale = function(t) {
                        return this.value !== t && r(t) ? t : this.range[0];
                    }, n.invert = function() {
                        return this.value;
                    }, e;
                }(i);
                i.Identity = o, t.exports = o;
            }, function(t, e, n) {
                var i = n(10), r = n(72), o = n(5), a = n(17), s = n(28), c = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var n = e.prototype;
                    return n._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this), this.type = "cat", this.isCategory = !0, 
                        this.isRounding = !0;
                    }, n.init = function() {
                        var t = this, e = t.values, n = t.tickCount;
                        if (o(e, function(t, n) {
                            e[n] = t.toString();
                        }), !t.ticks) {
                            var i = e;
                            n && (i = r({
                                maxCount: n,
                                data: e,
                                isRounding: t.isRounding
                            }).ticks), this.ticks = i;
                        }
                    }, n.getText = function(e) {
                        return -1 === this.values.indexOf(e) && a(e) && (e = this.values[Math.round(e)]), 
                        t.prototype.getText.call(this, e);
                    }, n.translate = function(t) {
                        var e = this.values.indexOf(t);
                        return -1 === e && a(t) ? e = t : -1 === e && (e = NaN), e;
                    }, n.scale = function(t) {
                        var e = this.rangeMin(), n = this.rangeMax();
                        return (s(t) || -1 !== this.values.indexOf(t)) && (t = this.translate(t)), e + (this.values.length > 1 ? t / (this.values.length - 1) : t) * (n - e);
                    }, n.invert = function(t) {
                        if (s(t)) return t;
                        var e = this.rangeMin(), n = this.rangeMax();
                        t < e && (t = e), t > n && (t = n);
                        var i = (t - e) / (n - e), r = Math.round(i * (this.values.length - 1)) % this.values.length;
                        return r = r || 0, this.values[r];
                    }, e;
                }(i);
                i.Cat = c, t.exports = c;
            }, function(t, e, n) {
                function i(t) {
                    var e = [];
                    return r(t, function(t) {
                        e = e.concat(t);
                    }), e;
                }
                var r = n(5);
                t.exports = function(t) {
                    var e, n = {}, r = [], o = t.isRounding, a = i(t.data), s = a.length, c = t.maxCount || 8;
                    if (o ? 2 === (e = function(t, e) {
                        var n;
                        for (n = e; n > 0 && t % n != 0; n--) ;
                        if (1 === n) for (n = e; n > 0 && (t - 1) % n != 0; n--) ;
                        return n;
                    }(s - 1, c - 1) + 1) ? e = c : e < c - 4 && (e = c - 4) : e = c, !o && s <= e + e / 2) r = [].concat(a); else {
                        for (var u = parseInt(s / (e - 1), 10), l = a.map(function(t, e) {
                            return e % u == 0 ? a.slice(e, e + u) : null;
                        }).filter(function(t) {
                            return t;
                        }), f = 1, d = l.length; f < d && (o ? f * u < s - u : f < e - 1); f++) r.push(l[f][0]);
                        if (a.length) {
                            r.unshift(a[0]);
                            var p = a[s - 1];
                            -1 === r.indexOf(p) && r.push(p);
                        }
                    }
                    return n.categories = a, n.ticks = r, n;
                };
            }, function(t, e, n) {
                var i = n(0), r = n(74), o = n(2), a = n(3).Shape, s = function() {
                    function t(t) {
                        this.axisCfg = {}, this.frontPlot = null, this.backPlot = null, this.axes = {}, 
                        i.mix(this, t);
                    }
                    var e = t.prototype;
                    return e._isHide = function(t) {
                        var e = this.axisCfg;
                        return !e || !1 === e[t];
                    }, e._getLinePosition = function(t, e, n, i) {
                        var r = "", o = t.field, a = this.axisCfg;
                        return a[o] && a[o].position ? r = a[o].position : "x" === e ? r = i ? "left" : "bottom" : "y" === e && (r = n ? "right" : "left", 
                        i && (r = "bottom")), r;
                    }, e._getLineCfg = function(t, e, n) {
                        var i, r, o = 1;
                        return "x" === e ? (i = {
                            x: 0,
                            y: 0
                        }, r = {
                            x: 1,
                            y: 0
                        }) : "right" === n ? (i = {
                            x: 1,
                            y: 0
                        }, r = {
                            x: 1,
                            y: 1
                        }) : (i = {
                            x: 0,
                            y: 0
                        }, r = {
                            x: 0,
                            y: 1
                        }, o = -1), t.transposed && (o *= -1), {
                            offsetFactor: o,
                            start: t.convertPoint(i),
                            end: t.convertPoint(r)
                        };
                    }, e._getCircleCfg = function(t) {
                        return {
                            startAngle: t.startAngle,
                            endAngle: t.endAngle,
                            center: t.center,
                            radius: t.circleRadius
                        };
                    }, e._getRadiusCfg = function(t) {
                        var e, n;
                        return t.transposed ? (e = {
                            x: 0,
                            y: 0
                        }, n = {
                            x: 1,
                            y: 0
                        }) : (e = {
                            x: 0,
                            y: 0
                        }, n = {
                            x: 0,
                            y: 1
                        }), {
                            offsetFactor: -1,
                            start: t.convertPoint(e),
                            end: t.convertPoint(n)
                        };
                    }, e._getAxisCfg = function(t, e, n, r, s) {
                        var c = this, u = this.axisCfg, l = e.getTicks(), f = i.deepMix({
                            ticks: l,
                            frontContainer: this.frontPlot,
                            backContainer: this.backPlot
                        }, s, u[e.field]), d = [], p = f.label, h = l.length, g = 0, m = 0, v = p;
                        return i.each(l, function(t, e) {
                            if (i.isFunction(p)) {
                                var n = p(t.text, e, h);
                                v = n ? i.mix({}, o._defaultAxis.label, n) : null;
                            }
                            if (v) {
                                var r = {};
                                v.textAlign && (r.textAlign = v.textAlign), v.textBaseline && (r.textBaseline = v.textBaseline);
                                var s = new a.Text({
                                    className: "axis-label",
                                    attrs: i.mix({
                                        x: 0,
                                        y: 0,
                                        text: t.text,
                                        fontFamily: c.chart.get("canvas").get("fontFamily")
                                    }, v),
                                    value: t.value,
                                    textStyle: r,
                                    top: v.top,
                                    context: c.chart.get("canvas").get("context")
                                });
                                d.push(s);
                                var u = s.getBBox(), l = u.width, f = u.height;
                                g = Math.max(g, l), m = Math.max(m, f);
                            }
                        }), f.labels = d, f.maxWidth = g, f.maxHeight = m, f;
                    }, e._createAxis = function(t, e, n, i, r) {
                        void 0 === r && (r = "");
                        var a, s, c, u = t.type, l = t.transposed;
                        if ("cartesian" === u || "rect" === u) {
                            var f = this._getLinePosition(e, i, r, l);
                            (c = o.axis[f]).position = f, a = "Line", s = f;
                        } else "x" === i && !l || "y" === i && l ? (c = o.axis.circle, a = "Circle", s = "circle") : (c = o.axis.radius, 
                        a = "Line", s = "radius");
                        var d = this._getAxisCfg(t, e, n, i, c);
                        d.type = a, d.dimType = i, d.verticalScale = n, d.index = r, this.axes[s] = d;
                    }, e.createAxis = function(t, e, n) {
                        var o = this;
                        e && !o._isHide(e.field) && o._createAxis(t, e, n[0], "x"), i.each(n, function(n, i) {
                            o._isHide(n.field) || o._createAxis(t, n, e, "y", i);
                        });
                        var a = this.axes, s = o.chart;
                        if (s._isAutoPadding()) {
                            var c = i.parsePadding(s.get("padding")), u = i.parsePadding(s.get("appendPadding")), l = s.get("legendRange") || {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }, f = [ "auto" === c[0] ? l.top + 2 * u[0] : c[0], "auto" === c[1] ? l.right + u[1] : c[1], "auto" === c[2] ? l.bottom + u[2] : c[2], "auto" === c[3] ? l.left + u[3] : c[3] ];
                            if (t.isPolar) {
                                var d = a.circle;
                                if (d) {
                                    var p = d.maxHeight, h = d.maxWidth, g = d.labelOffset;
                                    f[0] += p + g, f[1] += h + g, f[2] += p + g, f[3] += h + g;
                                }
                            } else {
                                if (a.right && "auto" === c[1]) {
                                    var m = a.right, v = m.maxWidth, _ = m.labelOffset;
                                    f[1] += v + _;
                                }
                                if (a.left && "auto" === c[3]) {
                                    var y = a.left, x = y.maxWidth, b = y.labelOffset;
                                    f[3] += x + b;
                                }
                                if (a.bottom && "auto" === c[2]) {
                                    var w = a.bottom, C = w.maxHeight, S = w.labelOffset;
                                    f[2] += C + S;
                                }
                            }
                            s.set("_padding", f), s._updateLayout(f);
                        }
                        i.each(a, function(e) {
                            var n, a = e.type, s = e.grid, c = e.verticalScale, u = e.ticks, l = e.dimType, f = e.position, d = e.index;
                            if (t.isPolar ? "Line" === a ? n = o._getRadiusCfg(t) : "Circle" === a && (n = o._getCircleCfg(t)) : n = o._getLineCfg(t, l, f), 
                            s && c) {
                                var p = [], h = function(t) {
                                    var e = c.getTicks().slice(0);
                                    if (e.length > 0) {
                                        var n = e[0], i = e[e.length - 1];
                                        0 !== n.value && e.unshift({
                                            value: 0
                                        }), 1 !== i.value && e.push({
                                            value: 1
                                        });
                                    }
                                    return e;
                                }();
                                i.each(u, function(e) {
                                    var n = [];
                                    i.each(h, function(i) {
                                        var r = "x" === l ? e.value : i.value, o = "x" === l ? i.value : e.value;
                                        if (r >= 0 && r <= 1 && o >= 0 && o <= 1) {
                                            var a = t.convertPoint({
                                                x: r,
                                                y: o
                                            });
                                            n.push(a);
                                        }
                                    }), p.push({
                                        points: n,
                                        _id: "axis-" + l + d + "-grid-" + e.tickValue
                                    });
                                }), e.gridPoints = p, t.isPolar && (e.center = t.center, e.startAngle = t.startAngle, 
                                e.endAngle = t.endAngle);
                            }
                            n._id = "axis-" + l, i.isNil(d) || (n._id = "axis-" + l + d), new r[a](i.mix(e, n));
                        });
                    }, e.clear = function() {
                        this.axes = {}, this.frontPlot.clear(), this.backPlot.clear();
                    }, t;
                }();
                t.exports = s;
            }, function(t, e, n) {
                var i = n(29);
                n(75), t.exports = i;
            }, function(t, e, n) {
                var i = n(0), r = n(29), o = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var n = e.prototype;
                    return n._initDefaultCfg = function() {
                        t.prototype._initDefaultCfg.call(this), this.start = null, this.end = null;
                    }, n.getOffsetPoint = function(t) {
                        var e = this.start, n = this.end;
                        return {
                            x: e.x + (n.x - e.x) * t,
                            y: e.y + (n.y - e.y) * t
                        };
                    }, n.getAxisVector = function() {
                        var t = this.start, e = this.end;
                        return [ e.x - t.x, e.y - t.y ];
                    }, n.drawLine = function(t) {
                        var e = this.getContainer(t.top), n = this.start, r = this.end;
                        e.addShape("line", {
                            className: "axis-line",
                            attrs: i.mix({
                                x1: n.x,
                                y1: n.y,
                                x2: r.x,
                                y2: r.y
                            }, t)
                        });
                    }, e;
                }(r);
                r.Line = o, t.exports = o;
            }, function(t, e, n) {
                var i = n(0), r = n(30), o = n(32), a = n(33).requestAnimationFrame, s = function() {
                    function t(t) {
                        this._attrs = i.mix({
                            type: "canvas",
                            children: []
                        }, t), this._initPixelRatio(), this._initCanvas();
                    }
                    var e = t.prototype;
                    return e.get = function(t) {
                        return this._attrs[t];
                    }, e.set = function(t, e) {
                        this._attrs[t] = e;
                    }, e._initPixelRatio = function() {
                        this.get("pixelRatio") || this.set("pixelRatio", i.getPixelRatio());
                    }, e.beforeDraw = function() {
                        var t = this._attrs.context, e = this._attrs.el;
                        !i.isWx && !i.isMy && t && t.clearRect(0, 0, e.width, e.height);
                    }, e._initCanvas = function() {
                        var t, e = this, n = e.get("el"), r = e.get("context");
                        if (!(t = r ? r.canvas : i.isString(n) ? i.getDomById(n) : n)) throw new Error("Please specify the id or el of the chart!");
                        r && t && !t.getContext && (t.getContext = function() {
                            return r;
                        });
                        var o = e.get("width");
                        o || (o = i.getWidth(t));
                        var a = e.get("height");
                        a || (a = i.getHeight(t)), e.set("canvas", this), e.set("el", t), e.set("context", r || t.getContext("2d")), 
                        e.changeSize(o, a);
                    }, e.changeSize = function(t, e) {
                        var n = this.get("pixelRatio"), r = this.get("el");
                        i.isBrowser && (r.style.width = t + "px", r.style.height = e + "px"), i.isWx || i.isMy || (r.width = t * n, 
                        r.height = e * n, 1 !== n && this.get("context").scale(n, n)), this.set("width", t), 
                        this.set("height", e);
                    }, e.getWidth = function() {
                        var t = this.get("pixelRatio");
                        return this.get("width") * t;
                    }, e.getHeight = function() {
                        var t = this.get("pixelRatio");
                        return this.get("height") * t;
                    }, e.getPointByClient = function(t, e) {
                        var n = this.get("el"), i = n.getBoundingClientRect(), r = i.right - i.left, o = i.bottom - i.top;
                        return {
                            x: (t - i.left) * (n.width / r),
                            y: (e - i.top) * (n.height / o)
                        };
                    }, e._beginDraw = function() {
                        this._attrs.toDraw = !0;
                    }, e._endDraw = function() {
                        this._attrs.toDraw = !1;
                    }, e.draw = function() {
                        var t = this;
                        t.get("destroyed") || (t.get("animateHandler") ? this._beginDraw() : function e() {
                            t.set("animateHandler", a(function() {
                                t.set("animateHandler", void 0), t.get("toDraw") && e();
                            })), t.beforeDraw();
                            try {
                                for (var n = t._attrs.context, r = t._attrs.children, o = 0, s = r.length; o < s; o++) r[o].draw(n);
                                (i.isWx || i.isMy) && n.draw();
                            } catch (e) {
                                console.warn("error in draw canvas, detail as:"), console.warn(e), t._endDraw();
                            }
                            t._endDraw();
                        }());
                    }, e.destroy = function() {
                        this.get("destroyed") || (this.clear(), this._attrs = {}, this.set("destroyed", !0));
                    }, e.isDestroyed = function() {
                        return this.get("destroyed");
                    }, t;
                }();
                i.mix(s.prototype, r, {
                    getGroupClass: function() {
                        return o;
                    }
                }), t.exports = s;
            }, function(t, e, n) {
                function i(t, e) {
                    r.each(t, function(t) {
                        t = t.split(":"), e.addColorStop(Number(t[0]), t[1]);
                    });
                }
                var r = n(0);
                t.exports = {
                    parseStyle: function(t, e, n) {
                        if ("(" === t[1]) try {
                            var r = t[0];
                            if ("l" === r) return function(t, e, n) {
                                var r = t.split(" "), o = r[0].slice(2, r[0].length - 1);
                                o = function(t, e) {
                                    return (parseFloat(o) * Math.PI / 180 % e + e) % e;
                                }(0, 2 * Math.PI);
                                var a, s, c = r.slice(1), u = e.getBBox(), l = u.minX, f = u.minY, d = u.maxX, p = u.maxY;
                                o >= 0 && o < .5 * Math.PI ? (a = {
                                    x: l,
                                    y: f
                                }, s = {
                                    x: d,
                                    y: p
                                }) : .5 * Math.PI <= o && o < Math.PI ? (a = {
                                    x: d,
                                    y: f
                                }, s = {
                                    x: l,
                                    y: p
                                }) : Math.PI <= o && o < 1.5 * Math.PI ? (a = {
                                    x: d,
                                    y: p
                                }, s = {
                                    x: l,
                                    y: f
                                }) : (a = {
                                    x: l,
                                    y: p
                                }, s = {
                                    x: d,
                                    y: f
                                });
                                var h = Math.tan(o), g = h * h, m = (s.x - a.x + h * (s.y - a.y)) / (g + 1) + a.x, v = h * (s.x - a.x + h * (s.y - a.y)) / (g + 1) + a.y, _ = n.createLinearGradient(a.x, a.y, m, v);
                                return i(c, _), _;
                            }(t, e, n);
                            if ("r" === r) return function(t, e, n) {
                                var r = t.split(" "), o = r[0].slice(2, r[0].length - 1);
                                o = o.split(",");
                                var a = parseFloat(o[0]), s = parseFloat(o[1]), c = parseFloat(o[2]), u = r.slice(1);
                                if (0 === c) return u[u.length - 1].split(":")[1];
                                var l = e.getBBox(), f = l.width, d = l.height, p = l.minX, h = l.minY, g = Math.sqrt(f * f + d * d) / 2, m = n.createRadialGradient(p + f * a, h + d * s, c * g, p + f / 2, h + d / 2, g);
                                return i(u, m), m;
                            }(t, e, n);
                        } catch (t) {
                            console.error("error in parsing gradient string, please check if there are any extra whitespaces."), 
                            console.error(t);
                        }
                        return t;
                    }
                };
            }, function(t, e, n) {
                var i = n(0), r = n(1), o = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var n = e.prototype;
                    return n._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                        this._attrs.type = "rect";
                    }, n.getDefaultAttrs = function() {
                        return {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0,
                            radius: 0,
                            lineWidth: 0
                        };
                    }, n.createPath = function(t) {
                        var e = this.get("attrs"), n = e.x, r = e.y, o = e.width, a = e.height;
                        t.beginPath();
                        var s = e.radius;
                        s && o * a ? (s = i.parsePadding(s), t.moveTo(n + s[0], r), t.lineTo(n + o - s[1], r), 
                        t.arc(n + o - s[1], r + s[1], s[1], -Math.PI / 2, 0, !1), t.lineTo(n + o, r + a - s[2]), 
                        t.arc(n + o - s[2], r + a - s[2], s[2], 0, Math.PI / 2, !1), t.lineTo(n + s[3], r + a), 
                        t.arc(n + s[3], r + a - s[3], s[3], Math.PI / 2, Math.PI, !1), t.lineTo(n, r + s[0]), 
                        t.arc(n + s[0], r + s[0], s[0], Math.PI, 3 * Math.PI / 2, !1), t.closePath()) : t.rect(n, r, o, a);
                    }, n.calculateBox = function() {
                        var t = this.get("attrs"), e = t.x, n = t.y;
                        return {
                            minX: e,
                            minY: n,
                            maxX: e + t.width,
                            maxY: n + t.height
                        };
                    }, e;
                }(r);
                r.Rect = o, t.exports = o;
            }, function(t, e, n) {
                var i = n(1), r = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var n = e.prototype;
                    return n._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                        this._attrs.type = "circle";
                    }, n.getDefaultAttrs = function() {
                        return {
                            x: 0,
                            y: 0,
                            r: 0,
                            lineWidth: 0
                        };
                    }, n.createPath = function(t) {
                        var e = this.get("attrs"), n = e.x, i = e.y, r = e.r;
                        t.beginPath(), t.arc(n, i, r, 0, 2 * Math.PI, !1), t.closePath();
                    }, n.calculateBox = function() {
                        var t = this.get("attrs"), e = t.x, n = t.y, i = t.r;
                        return {
                            minX: e - i,
                            maxX: e + i,
                            minY: n - i,
                            maxY: n + i
                        };
                    }, e;
                }(i);
                i.Circle = r, t.exports = r;
            }, function(t, e, n) {
                var i = n(1), r = n(8), o = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var n = e.prototype;
                    return n._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canStroke = !0, this._attrs.type = "line";
                    }, n.getDefaultAttrs = function() {
                        return {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 0,
                            lineWidth: 1
                        };
                    }, n.createPath = function(t) {
                        var e = this.get("attrs"), n = e.x1, i = e.y1, r = e.x2, o = e.y2;
                        t.beginPath(), t.moveTo(n, i), t.lineTo(r, o);
                    }, n.calculateBox = function() {
                        var t = this.get("attrs"), e = t.x1, n = t.y1, i = t.x2, o = t.y2, a = t.lineWidth;
                        return r.getBBoxFromLine(e, n, i, o, a);
                    }, e;
                }(i);
                i.Line = o, t.exports = o;
            }, function(t, e, n) {
                var i = n(1), r = n(8), o = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var n = e.prototype;
                    return n._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                        this._attrs.type = "polygon";
                    }, n.getDefaultAttrs = function() {
                        return {
                            points: null,
                            lineWidth: 0
                        };
                    }, n.createPath = function(t) {
                        var e = this.get("attrs").points;
                        t.beginPath();
                        for (var n = 0, i = e.length; n < i; n++) {
                            var r = e[n];
                            0 === n ? t.moveTo(r.x, r.y) : t.lineTo(r.x, r.y);
                        }
                        t.closePath();
                    }, n.calculateBox = function() {
                        var t = this.get("attrs").points;
                        return r.getBBoxFromPoints(t);
                    }, e;
                }(i);
                i.Polygon = o, t.exports = o;
            }, function(t, e, n) {
                function i(t) {
                    for (var e = [], n = 0, i = t.length; n < i; n++) {
                        var r = t[n];
                        isNaN(r.x) || isNaN(r.y) || e.push(r);
                    }
                    return e;
                }
                var r = n(1), o = n(83), a = n(8), s = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var n = e.prototype;
                    return n._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                        this._attrs.type = "polyline";
                    }, n.getDefaultAttrs = function() {
                        return {
                            points: null,
                            lineWidth: 1,
                            smooth: !1
                        };
                    }, n.createPath = function(t) {
                        var e = this.get("attrs"), n = e.points, r = e.smooth, a = i(n);
                        if (t.beginPath(), a.length) if (t.moveTo(a[0].x, a[0].y), r) for (var s = o.smooth(a, !1, [ [ 0, 0 ], [ 1, 1 ] ]), c = 0, u = s.length; c < u; c++) {
                            var l = s[c];
                            t.bezierCurveTo(l[1], l[2], l[3], l[4], l[5], l[6]);
                        } else {
                            var f, d;
                            for (f = 1, d = a.length - 1; f < d; f++) t.lineTo(a[f].x, a[f].y);
                            t.lineTo(a[d].x, a[d].y);
                        }
                    }, n.calculateBox = function() {
                        var t = this.get("attrs"), e = t.points, n = t.smooth, r = t.lineWidth, s = i(e);
                        if (n) {
                            for (var c = [], u = o.smooth(s, !1, [ [ 0, 0 ], [ 1, 1 ] ]), l = 0, f = u.length; l < f; l++) {
                                var d = u[l];
                                if (0 === l) c.push([ s[0].x, s[0].y, d[1], d[2], d[3], d[4], d[5], d[6] ]); else {
                                    var p = u[l - 1];
                                    c.push([ p[5], p[6], d[1], d[2], d[3], d[4], d[5], d[6] ]);
                                }
                            }
                            return a.getBBoxFromBezierGroup(c, r);
                        }
                        return a.getBBoxFromPoints(s, r);
                    }, e;
                }(r);
                r.Polyline = s, t.exports = s;
            }, function(t, e, n) {
                function i(t) {
                    return [ t.x, t.y ];
                }
                function r(t, e, n, r) {
                    var a, s, c, u, l, f, d, p, h = [], g = !!r;
                    if (g) {
                        for (c = [ 1 / 0, 1 / 0 ], u = [ -1 / 0, -1 / 0 ], p = 0, d = t.length; p < d; p++) l = i(t[p]), 
                        o.min(c, c, l), o.max(u, u, l);
                        o.min(c, c, r[0]), o.max(u, u, r[1]);
                    }
                    for (p = 0, f = t.length; p < f; p++) {
                        if (l = i(t[p]), n) a = i(t[p ? p - 1 : f - 1]), s = i(t[(p + 1) % f]); else {
                            if (0 === p || p === f - 1) {
                                h.push([ l[0], l[1] ]);
                                continue;
                            }
                            a = i(t[p - 1]), s = i(t[p + 1]);
                        }
                        var m = o.sub([], s, a);
                        o.scale(m, m, e);
                        var v = o.distance(l, a), _ = o.distance(l, s), y = v + _;
                        0 !== y && (v /= y, _ /= y);
                        var x = o.scale([], m, -v), b = o.scale([], m, _), w = o.add([], l, x), C = o.add([], l, b);
                        g && (o.max(w, w, c), o.min(w, w, u), o.max(C, C, c), o.min(C, C, u)), h.push([ w[0], w[1] ]), 
                        h.push([ C[0], C[1] ]);
                    }
                    return n && h.push(h.shift()), h;
                }
                var o = n(6);
                t.exports = {
                    smooth: function(t, e, n) {
                        for (var i, o, a, s = !!e, c = r(t, .4, s, n), u = t.length, l = [], f = 0; f < u - 1; f++) i = c[2 * f], 
                        o = c[2 * f + 1], a = t[f + 1], l.push([ "C", i[0], i[1], o[0], o[1], a.x, a.y ]);
                        return s && (i = c[u], o = c[u + 1], a = t[0], l.push([ "C", i[0], i[1], o[0], o[1], a.x, a.y ])), 
                        l;
                    }
                };
            }, function(t, e, n) {
                var i = n(1), r = n(8), o = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var n = e.prototype;
                    return n._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canStroke = !0, this._attrs.canFill = !0, 
                        this._attrs.type = "arc";
                    }, n.getDefaultAttrs = function() {
                        return {
                            x: 0,
                            y: 0,
                            r: 0,
                            startAngle: 0,
                            endAngle: 2 * Math.PI,
                            clockwise: !1,
                            lineWidth: 1
                        };
                    }, n.createPath = function(t) {
                        var e = this.get("attrs"), n = e.x, i = e.y, r = e.r, o = e.startAngle, a = e.endAngle, s = e.clockwise;
                        t.beginPath(), o !== a && t.arc(n, i, r, o, a, s);
                    }, n.calculateBox = function() {
                        var t = this.get("attrs"), e = t.x, n = t.y, i = t.r, o = t.startAngle, a = t.endAngle, s = t.clockwise;
                        return r.getBBoxFromArc(e, n, i, o, a, s);
                    }, e;
                }(i);
                i.Arc = o, t.exports = o;
            }, function(t, e, n) {
                var i = n(1), r = n(8), o = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var n = e.prototype;
                    return n._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                        this._attrs.type = "sector";
                    }, n.getDefaultAttrs = function() {
                        return {
                            x: 0,
                            y: 0,
                            lineWidth: 0,
                            r: 0,
                            r0: 0,
                            startAngle: 0,
                            endAngle: 2 * Math.PI,
                            clockwise: !1
                        };
                    }, n.createPath = function(t) {
                        var e = this.get("attrs"), n = e.x, i = e.y, r = e.startAngle, o = e.endAngle, a = e.r, s = e.r0, c = e.clockwise;
                        t.beginPath();
                        var u = Math.cos(r), l = Math.sin(r);
                        t.moveTo(u * s + n, l * s + i), t.lineTo(u * a + n, l * a + i), (Math.abs(o - r) > 1e-4 || 0 === r && o < 0) && (t.arc(n, i, a, r, o, c), 
                        t.lineTo(Math.cos(o) * s + n, Math.sin(o) * s + i), 0 !== s && t.arc(n, i, s, o, r, !c)), 
                        t.closePath();
                    }, n.calculateBox = function() {
                        var t = this.get("attrs"), e = t.x, n = t.y, i = t.r, o = t.r0, a = t.startAngle, s = t.endAngle, c = t.clockwise, u = r.getBBoxFromArc(e, n, i, a, s, c), l = r.getBBoxFromArc(e, n, o, a, s, c);
                        return {
                            minX: Math.min(u.minX, l.minX),
                            minY: Math.min(u.minY, l.minY),
                            maxX: Math.max(u.maxX, l.maxX),
                            maxY: Math.max(u.maxY, l.maxY)
                        };
                    }, e;
                }(i);
                i.Sector = o, t.exports = o;
            }, function(t, e, n) {
                var i = n(0), r = n(1), o = 0, a = {}, s = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var n = e.prototype;
                    return n._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                        this._attrs.type = "text";
                    }, n.getDefaultAttrs = function() {
                        return {
                            lineWidth: 0,
                            lineCount: 1,
                            fontSize: 12,
                            fontFamily: "sans-serif",
                            fontStyle: "normal",
                            fontWeight: "normal",
                            fontVariant: "normal",
                            textAlign: "start",
                            textBaseline: "bottom",
                            lineHeight: null,
                            textArr: null
                        };
                    }, n._getFontStyle = function() {
                        var t = this._attrs.attrs, e = t.fontSize, n = t.fontFamily, i = t.fontWeight;
                        return t.fontStyle + " " + t.fontVariant + " " + i + " " + e + "px " + n;
                    }, n._afterAttrsSet = function() {
                        var t = this._attrs.attrs;
                        if (t.font = this._getFontStyle(), t.text) {
                            var e = t.text, n = null, r = 1;
                            i.isString(e) && -1 !== e.indexOf("\n") && (r = (n = e.split("\n")).length), t.lineCount = r, 
                            t.textArr = n;
                        }
                        this.set("attrs", t);
                    }, n._getTextHeight = function() {
                        var t = this._attrs.attrs;
                        if (t.height) return t.height;
                        var e = t.lineCount, n = 1 * t.fontSize;
                        return e > 1 ? n * e + this._getSpaceingY() * (e - 1) : n;
                    }, n._getSpaceingY = function() {
                        var t = this._attrs.attrs, e = t.lineHeight, n = 1 * t.fontSize;
                        return e ? e - n : .14 * n;
                    }, n.drawInner = function(t) {
                        var e = this, n = e._attrs.attrs, r = n.text, o = n.x, a = n.y;
                        if (!(i.isNil(r) || isNaN(o) || isNaN(a))) {
                            var s = n.textArr, c = 1 * n.fontSize, u = e._getSpaceingY();
                            n.rotate && (t.translate(o, a), t.rotate(n.rotate), o = 0, a = 0);
                            var l, f, d = n.textBaseline;
                            if (s && (l = e._getTextHeight()), e.hasFill()) {
                                var p = n.fillOpacity;
                                if (i.isNil(p) || 1 === p || (t.globalAlpha = p), s) for (var h = 0, g = s.length; h < g; h++) {
                                    var m = s[h];
                                    f = a + h * (u + c) - l + c, "middle" === d && (f += l - c - (l - c) / 2), "top" === d && (f += l - c), 
                                    t.fillText(m, o, f);
                                } else t.fillText(r, o, a);
                            }
                            if (e.hasStroke()) if (s) for (var v = 0, _ = s.length; v < _; v++) {
                                var y = s[v];
                                f = a + v * (u + c) - l + c, "middle" === d && (f += l - c - (l - c) / 2), "top" === d && (f += l - c), 
                                t.strokeText(y, o, f);
                            } else t.strokeText(r, o, a);
                        }
                    }, n.calculateBox = function() {
                        var t = this, e = t._attrs.attrs, n = e.x, i = e.y, r = e.textAlign, o = e.textBaseline, a = t._getTextWidth();
                        if (!a) return {
                            minX: n,
                            minY: i,
                            maxX: n,
                            maxY: i
                        };
                        var s = t._getTextHeight(), c = {
                            x: n,
                            y: i - s
                        };
                        return r && ("end" === r || "right" === r ? c.x -= a : "center" === r && (c.x -= a / 2)), 
                        o && ("top" === o ? c.y += s : "middle" === o && (c.y += s / 2)), {
                            minX: c.x,
                            minY: c.y,
                            maxX: c.x + a,
                            maxY: c.y + s
                        };
                    }, n._getTextWidth = function() {
                        var t = this._attrs.attrs;
                        if (t.width) return t.width;
                        var e = t.text, n = this.get("context");
                        if (!i.isNil(e)) {
                            var r = t.font, s = t.textArr, c = e + "" + r;
                            if (a[c]) return a[c];
                            var u = 0;
                            if (s) for (var l = 0, f = s.length; l < f; l++) {
                                var d = s[l];
                                u = Math.max(u, i.measureText(d, r, n).width);
                            } else u = i.measureText(e, r, n).width;
                            return o > 5e3 && (o = 0, a = {}), o++, a[c] = u, u;
                        }
                    }, e;
                }(r);
                r.Text = s, t.exports = s;
            }, function(t, e, n) {
                var i = n(1), r = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var n = e.prototype;
                    return n._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                        this._attrs.createPath = null, this._attrs.type = "custom";
                    }, n.createPath = function(t) {
                        var e = this.get("createPath");
                        e && e.call(this, t);
                    }, n.calculateBox = function() {
                        var t = this.get("calculateBox");
                        return t && t.call(this);
                    }, e;
                }(i);
                i.Custom = r, t.exports = r;
            }, function(t, e, n) {
                var i = n(89), r = n(12);
                n(36);
                var o = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    return function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t), e.prototype.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e.type = "line", e.sortable = !0, e;
                    }, e;
                }(i);
                r.Line = o, t.exports = o;
            }, function(t, e, n) {
                var i = n(12), r = n(35), o = n(0);
                n(36);
                var a = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var n = e.prototype;
                    return n.getDefaultCfg = function() {
                        var e = t.prototype.getDefaultCfg.call(this);
                        return e.type = "path", e.shapeType = "line", e;
                    }, n.getDrawCfg = function(e) {
                        var n = t.prototype.getDrawCfg.call(this, e);
                        return n.isStack = this.hasAdjust("stack"), n;
                    }, n.draw = function(t, e) {
                        var n = this, i = n.get("container"), a = n.getYScale(), s = n.get("connectNulls"), c = r.splitArray(t, a.field, s), u = this.getDrawCfg(t[0]);
                        u.origin = t, o.each(c, function(r, o) {
                            u.splitedIndex = o, u.points = r, n.drawShape(u.shape, t[0], u, i, e);
                        });
                    }, e;
                }(i);
                i.Path = a, t.exports = a;
            }, function(t, e, n) {
                var i = n(0), r = n(91), o = n(2), a = {
                    itemMarginBottom: 12,
                    itemGap: 10,
                    showTitle: !1,
                    titleStyle: {
                        fontSize: 12,
                        fill: "#808080",
                        textAlign: "start",
                        textBaseline: "top"
                    },
                    nameStyle: {
                        fill: "#808080",
                        fontSize: 12,
                        textAlign: "start",
                        textBaseline: "middle"
                    },
                    valueStyle: {
                        fill: "#000000",
                        fontSize: 12,
                        textAlign: "start",
                        textBaseline: "middle"
                    },
                    unCheckStyle: {
                        fill: "#bfbfbf"
                    },
                    itemWidth: "auto",
                    wordSpace: 6,
                    selectedMode: "multiple"
                };
                o.legend = i.deepMix({
                    common: a,
                    right: i.mix({
                        position: "right",
                        layout: "vertical"
                    }, a),
                    left: i.mix({
                        position: "left",
                        layout: "vertical"
                    }, a),
                    top: i.mix({
                        position: "top",
                        layout: "horizontal"
                    }, a),
                    bottom: i.mix({
                        position: "bottom",
                        layout: "horizontal"
                    }, a)
                }, o.legend || {});
                var s = function() {
                    function t(t) {
                        this.legendCfg = {}, this.enable = !0, this.position = "top", i.mix(this, t);
                        var e = this.chart;
                        this.canvasDom = e.get("canvas").get("el"), this.clear();
                    }
                    var e = t.prototype;
                    return e.addLegend = function(t, e, n) {
                        var i = this, r = i.legendCfg, o = t.field, a = r[o];
                        if (!1 === a) return null;
                        if (a && a.custom) i.addCustomLegend(o); else {
                            var s = r.position || i.position;
                            a && a.position && (s = a.position), t.isCategory && i._addCategoryLegend(t, e, s, n);
                        }
                    }, e.addCustomLegend = function(t) {
                        var e = this, n = e.legendCfg;
                        t && n[t] && (n = n[t]);
                        var a = n.position || e.position, s = e.legends;
                        s[a] = s[a] || [];
                        var c = n.items;
                        if (!c) return null;
                        var u = e.container;
                        i.each(c, function(t) {
                            i.isPlainObject(t.marker) ? t.marker.radius = t.marker.radius || 3 : t.marker = {
                                symbol: t.marker || "circle",
                                fill: t.fill,
                                radius: 3
                            }, t.checked = !!i.isNil(t.checked) || t.checked, t.name = t.name || t.value;
                        });
                        var l = new r(i.deepMix({}, o.legend[a], n, {
                            maxLength: e._getMaxLength(a),
                            items: c,
                            parent: u
                        }));
                        s[a].push(l);
                    }, e.clear = function() {
                        var t = this.legends;
                        i.each(t, function(t) {
                            i.each(t, function(t) {
                                t.clear();
                            });
                        }), this.legends = {}, this.unBindEvents();
                    }, e._isFiltered = function(t, e, n) {
                        var r = !1;
                        return i.each(e, function(e) {
                            if (r = r || t.getText(e) === t.getText(n)) return !1;
                        }), r;
                    }, e._getMaxLength = function(t) {
                        var e = this.chart, n = i.parsePadding(e.get("appendPadding"));
                        return "right" === t || "left" === t ? e.get("height") - (n[0] + n[2]) : e.get("width") - (n[1] + n[3]);
                    }, e._addCategoryLegend = function(t, e, n, a) {
                        var s = this, c = s.legendCfg, u = s.legends, l = s.container, f = s.chart, d = t.field;
                        u[n] = u[n] || [];
                        var p = "circle";
                        c[d] && c[d].marker ? p = c[d].marker : c.marker && (p = c.marker), i.each(e, function(e) {
                            i.isPlainObject(p) ? i.mix(e.marker, p) : e.marker.symbol = p, a && (e.checked = s._isFiltered(t, a, e.dataValue));
                        }), f.get("legendItems")[d] = e;
                        var h = i.deepMix({}, o.legend[n], c[d] || c, {
                            maxLength: s._getMaxLength(n),
                            items: e,
                            field: d,
                            filterVals: a,
                            parent: l
                        });
                        h.showTitle && i.deepMix(h, {
                            title: t.alias || t.field
                        });
                        var g = new r(h);
                        return u[n].push(g), g;
                    }, e._alignLegend = function(t, e, n) {
                        var r = this.plotRange, o = r.tl, a = r.bl, s = this.chart, c = t.offsetX || 0, u = t.offsetY || 0, l = s.get("width"), f = s.get("height"), d = i.parsePadding(s.get("appendPadding")), p = t.getHeight(), h = t.getWidth(), g = 0, m = 0;
                        if ("left" === n || "right" === n) {
                            var v = t.verticalAlign || "middle", _ = Math.abs(o.y - a.y);
                            g = "left" === n ? d[3] : l - h - d[1], m = (_ - p) / 2 + o.y, "top" === v ? m = o.y : "bottom" === v && (m = a.y - p), 
                            e && (m = e.get("y") - p - 12);
                        } else {
                            var y = t.align || "left";
                            if (g = d[3], "center" === y ? g = l / 2 - h / 2 : "right" === y && (g = l - (h + d[1])), 
                            m = "top" === n ? d[0] + Math.abs(t.container.getBBox().minY) : f - p, e) {
                                var x = e.getWidth();
                                g = e.x + x + 12;
                            }
                        }
                        "bottom" === n && u > 0 && (u = 0), "right" === n && c > 0 && (c = 0), t.moveTo(g + c, m + u);
                    }, e.alignLegends = function() {
                        var t = this, e = t.legends;
                        return i.each(e, function(e, n) {
                            i.each(e, function(i, r) {
                                var o = e[r - 1];
                                t._alignLegend(i, o, n);
                            });
                        }), t;
                    }, e.handleEvent = function(t) {
                        var e = this, n = e.chart, r = i.createEvent(t, n), o = function(t, n) {
                            var r = null, o = e.legends;
                            return i.each(o, function(e) {
                                i.each(e, function(e) {
                                    var o = e.itemsGroup, a = e.legendHitBoxes, s = o.get("children");
                                    if (s.length) {
                                        var c = e.x, u = e.y;
                                        i.each(a, function(i, o) {
                                            if (t >= i.x + c && t <= i.x + i.width + c && n >= i.y + u && n <= i.height + i.y + u) return r = {
                                                clickedItem: s[o],
                                                clickedLegend: e
                                            }, !1;
                                        });
                                    }
                                });
                            }), r;
                        }(r.x, r.y);
                        if (o && !1 !== o.clickedLegend.clickable) {
                            var a = o.clickedItem, s = o.clickedLegend;
                            if (s.onClick) t.clickedItem = a, s.onClick(t); else if (!s.custom) {
                                var c = a.get("checked"), u = a.get("dataValue"), l = s.filterVals, f = s.field;
                                "single" === s.selectedMode ? n.filter(f, function(t) {
                                    return t === u;
                                }) : (c ? i.Array.remove(l, u) : l.push(u), n.filter(f, function(t) {
                                    return -1 !== l.indexOf(t);
                                })), n.repaint();
                            }
                        }
                    }, e.bindEvents = function() {
                        var t = this.legendCfg.triggerOn || "touchstart", e = i.wrapBehavior(this, "handleEvent");
                        i.addEventListener(this.canvasDom, t, e);
                    }, e.unBindEvents = function() {
                        var t = this.legendCfg.triggerOn || "touchstart", e = i.getWrapBehavior(this, "handleEvent");
                        i.removeEventListener(this.canvasDom, t, e);
                    }, t;
                }();
                t.exports = {
                    init: function(t) {
                        var e = new s({
                            container: t.get("backPlot"),
                            plotRange: t.get("plotRange"),
                            chart: t
                        });
                        t.set("legendController", e), t.legend = function(t, n) {
                            var r = e.legendCfg;
                            return e.enable = !0, i.isBoolean(t) ? (e.enable = t, r = n || {}) : i.isObject(t) ? r = t : r[t] = n, 
                            e.legendCfg = r, this;
                        };
                    },
                    beforeGeomDraw: function(t) {
                        var e = t.get("legendController");
                        if (!e.enable) return null;
                        var n = e.legendCfg;
                        if (n && n.custom) e.addCustomLegend(); else {
                            var r = t.getLegendItems(), o = t.get("scales"), a = t.get("filters");
                            i.each(r, function(t, n) {
                                var i, r = o[n], s = r.values;
                                i = a && a[n] ? s.filter(a[n]) : s.slice(0), e.addLegend(r, t, i);
                            });
                        }
                        n && !1 !== n.clickable && e.bindEvents();
                        var s = e.legends, c = {
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        };
                        i.each(s, function(e, n) {
                            var r = 0;
                            i.each(e, function(t) {
                                var e = t.getWidth(), i = t.getHeight();
                                "top" === n || "bottom" === n ? (r = Math.max(r, i), t.offsetY > 0 && (r += t.offsetY)) : (r = Math.max(r, e), 
                                t.offsetX > 0 && (r += t.offsetX));
                            }), c[n] = r + function(t, e) {
                                var n = 0;
                                switch (e = i.parsePadding(e), t) {
                                  case "top":
                                    n = e[0];
                                    break;

                                  case "right":
                                    n = e[1];
                                    break;

                                  case "bottom":
                                    n = e[2];
                                    break;

                                  case "left":
                                    n = e[3];
                                }
                                return n;
                            }(n, t.get("appendPadding"));
                        }), t.set("legendRange", c);
                    },
                    afterGeomDraw: function(t) {
                        t.get("legendController").alignLegends();
                    },
                    clearInner: function(t) {
                        t.get("legendController").clear(), t.set("legendRange", null);
                    }
                };
            }, function(t, e, n) {
                var i = n(0), r = n(3).Group, o = n(92), a = function() {
                    function t(t) {
                        i.deepMix(this, this.getDefaultCfg(), t), this._init(), this._renderTitle(), this._renderItems();
                    }
                    var e = t.prototype;
                    return e.getDefaultCfg = function() {
                        return {
                            showTitle: !1,
                            title: null,
                            items: null,
                            titleGap: 12,
                            itemGap: 10,
                            itemMarginBottom: 12,
                            itemFormatter: null,
                            itemWidth: null,
                            wordSpace: 6,
                            x: 0,
                            y: 0,
                            layout: "horizontal",
                            joinString: ": "
                        };
                    }, e._init = function() {
                        var t = new r({
                            zIndex: this.zIndex || 0
                        });
                        this.container = t;
                        var e = t.addGroup();
                        this.wrapper = e;
                        var n = e.addGroup({
                            className: "itemsGroup"
                        });
                        this.itemsGroup = n, this.parent && this.parent.add(t);
                    }, e._renderTitle = function(t) {
                        t = t || this.title;
                        var e = this.titleShape, n = 0;
                        if (this.showTitle && t) {
                            if (e && !e.get("destroyed")) e.attr("text", t); else {
                                var r = this.wrapper, o = this.titleStyle;
                                e = r.addShape("text", {
                                    className: "title",
                                    attrs: i.mix({
                                        x: 0,
                                        y: 0,
                                        text: t
                                    }, o)
                                }), this.titleShape = e;
                            }
                            n = e.getBBox().height + this.titleGap;
                        }
                        this._titleHeight = n;
                    }, e._renderItems = function(t) {
                        var e = this;
                        (t = t || e.items) && (e.reversed && t.reverse(), i.each(t, function(t, n) {
                            e._addItem(t, n);
                        }), t.length > 1 && this._adjustItems(), this._renderBackground());
                    }, e._renderBackground = function() {
                        var t = this.background;
                        if (t) {
                            var e = this.container, n = this.wrapper.getBBox(), r = n.minX, o = n.minY, a = n.width, s = n.height, c = t.padding || [ 0, 0, 0, 0 ];
                            c = i.parsePadding(c);
                            var u = i.mix({
                                x: r - c[3],
                                y: o - c[0],
                                width: a + c[1] + c[3],
                                height: s + c[0] + c[2]
                            }, t), l = this.backShape;
                            l ? l.attr(u) : l = e.addShape("Rect", {
                                zIndex: -1,
                                attrs: u
                            }), this.backShape = l, e.sort();
                        }
                    }, e._addItem = function(t) {
                        var e = this.itemsGroup.addGroup({
                            name: t.name,
                            value: t.value,
                            dataValue: t.dataValue,
                            checked: t.checked
                        }), n = this.unCheckStyle, r = this.unCheckColor, a = this.nameStyle, s = this.valueStyle, c = this.wordSpace, u = t.marker, l = t.value, f = 0;
                        if (r && (n.fill = r), u) {
                            var d = u.radius || 3, p = i.mix({
                                x: d,
                                y: this._titleHeight
                            }, u);
                            !1 === t.checked && i.mix(p, n);
                            var h = new o({
                                className: "item-marker",
                                attrs: p
                            });
                            e.add(h), f += h.getBBox().width + c;
                        }
                        var g, m = t.name;
                        if (m) {
                            var v = this.joinString || "";
                            m = l ? m + v : m, g = e.addShape("text", {
                                className: "name",
                                attrs: i.mix({
                                    x: f,
                                    y: this._titleHeight,
                                    text: this._formatItemValue(m)
                                }, a, !1 === t.checked ? n : null)
                            });
                        }
                        if (l) {
                            var _ = f;
                            g && (_ += g.getBBox().width), e.addShape("text", {
                                className: "value",
                                attrs: i.mix({
                                    x: _,
                                    y: this._titleHeight,
                                    text: l
                                }, s, !1 === t.checked ? n : null)
                            });
                        }
                        return e;
                    }, e._formatItemValue = function(t) {
                        var e = this.itemFormatter;
                        return e && (t = e.call(this, t)), t;
                    }, e._getMaxItemWidth = function() {
                        var t = this.itemWidth;
                        if (i.isNumber(t) || i.isNil(t)) return t;
                        if ("auto" === t) {
                            for (var e = this.itemsGroup.get("children"), n = e.length, r = 0, o = 0; o < n; o++) {
                                var a = e[o].getBBox().width;
                                r = Math.max(r, a);
                            }
                            var s = this.maxLength, c = this.itemGap, u = (s - c) / 2, l = (s - 2 * c) / 3;
                            return 2 === n ? Math.max(r, u) : r <= l ? l : r <= u ? u : r;
                        }
                    }, e._adjustHorizontal = function() {
                        for (var t, e, n = this.maxLength, i = this.itemsGroup.get("children"), r = this.itemGap, o = this.itemMarginBottom, a = this._titleHeight, s = 0, c = 0, u = this._getMaxItemWidth(), l = [], f = 0, d = i.length; f < d; f++) {
                            var p = i[f], h = p.getBBox(), g = h.height, m = h.width;
                            e = g + o, (t = u || m) - (n - c) > 1e-4 && (s++, c = 0), p.moveTo(c, s * e), l.push({
                                x: c,
                                y: s * e + a - g / 2,
                                width: 1.375 * m,
                                height: 1.375 * g
                            }), c += t + r;
                        }
                        this.legendHitBoxes = l;
                    }, e._adjustVertical = function() {
                        for (var t, e, n = this.maxLength, r = this.itemsGroup, o = this.itemGap, a = this.itemMarginBottom, s = this.itemWidth, c = this._titleHeight, u = r.get("children"), l = 0, f = 0, d = 0, p = [], h = 0, g = u.length; h < g; h++) {
                            var m = u[h], v = m.getBBox();
                            t = v.width, e = v.height, i.isNumber(s) ? f = s + o : t > f && (f = t + o), n - l < e ? (l = 0, 
                            d += f, m.moveTo(d, 0), p.push({
                                x: d,
                                y: c - e / 2,
                                width: 1.375 * t,
                                height: 1.375 * e
                            })) : (m.moveTo(d, l), p.push({
                                x: d,
                                y: l - e / 2 + c,
                                width: 1.375 * t,
                                height: 1.375 * e
                            })), l += e + a;
                        }
                        this.legendHitBoxes = p;
                    }, e._adjustItems = function() {
                        "horizontal" === this.layout ? this._adjustHorizontal() : this._adjustVertical();
                    }, e.moveTo = function(t, e) {
                        this.x = t, this.y = e;
                        var n = this.container;
                        return n && n.moveTo(t, e), this;
                    }, e.setItems = function(t) {
                        this.clearItems(), this._renderItems(t);
                    }, e.setTitle = function(t) {
                        this._renderTitle(t);
                    }, e.clearItems = function() {
                        this.itemsGroup.clear();
                    }, e.getWidth = function() {
                        return this.container.getBBox().width;
                    }, e.getHeight = function() {
                        return this.container.getBBox().height;
                    }, e.show = function() {
                        this.container.show();
                    }, e.hide = function() {
                        this.container.hide();
                    }, e.clear = function() {
                        var t = this.container;
                        t.clear(), t.remove(!0);
                    }, t;
                }();
                t.exports = a;
            }, function(t, e, n) {
                var i = n(0), r = {
                    circle: function(t, e, n, i) {
                        i.arc(t, e, n, 0, 2 * Math.PI, !1);
                    },
                    square: function(t, e, n, i) {
                        i.moveTo(t - n, e - n), i.lineTo(t + n, e - n), i.lineTo(t + n, e + n), i.lineTo(t - n, e + n), 
                        i.closePath();
                    }
                }, o = function(t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    !function(t, e) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
                    }(e, t);
                    var n = e.prototype;
                    return n._initProperties = function() {
                        t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, 
                        this._attrs.type = "marker";
                    }, n.getDefaultAttrs = function() {
                        return {
                            x: 0,
                            y: 0,
                            lineWidth: 0
                        };
                    }, n.createPath = function(t) {
                        var e, n = this.get("attrs"), o = n.x, a = n.y, s = n.radius, c = n.symbol || "circle";
                        e = i.isFunction(c) ? c : r[c], t.beginPath(), e(o, a, s, t, this);
                    }, n.calculateBox = function() {
                        var t = this.get("attrs"), e = t.x, n = t.y, i = t.radius;
                        return {
                            minX: e - i,
                            minY: n - i,
                            maxX: e + i,
                            maxY: n + i
                        };
                    }, e;
                }(n(3).Shape);
                t.exports = o;
            }, function(t, e, n) {
                function i(t, e, n) {
                    var i = [];
                    return u.each(t, function(t, r) {
                        var o = t.get("container").get("children"), a = t.get("type"), c = u.isNil(t.get("animateCfg")) ? s(a, e) : t.get("animateCfg");
                        !1 !== c && u.each(o, function(e, o) {
                            e.get("className") === a && (e._id = function(t, e, n) {
                                var i, r = t.get("type"), o = "geom" + n + "-" + r, a = t.getXScale(), s = t.getYScale(), c = a.field || "x", l = s.field || "y", f = e[l];
                                i = a.isIdentity ? a.value : e[c], o += "interval" === r || "schema" === r ? "-" + i : "line" === r || "area" === r || "path" === r ? "-" + r : a.isCategory ? "-" + i : "-" + i + "-" + f;
                                var d = t._getGroupScales();
                                return u.each(d, function(t) {
                                    var n = t.field;
                                    "identity" !== t.type && (o += "-" + e[n]);
                                }), o;
                            }(t, e.get("origin")._origin, r), e.set("coord", n), e.set("animateCfg", c), e.set("index", o), 
                            i.push(e));
                        }), t.set("shapes", o);
                    }), i;
                }
                function r(t, e, n, i) {
                    return u.isFunction(i) ? i : u.isString(i) ? p.Action[i] : p.getAnimation(t, e, n);
                }
                function o(t, e, n) {
                    if (!1 === n || u.isObject(n) && !1 === n[e]) return !1;
                    var i = p.getAnimateCfg(t, e);
                    return n && n[e] ? u.deepMix({}, i, n[e]) : i;
                }
                function a(t, e, n) {
                    var i, a, s = [], c = [];
                    u.each(e, function(e) {
                        var n = t[e._id];
                        n ? (e.set("cacheShape", n), s.push(e), delete t[e._id]) : c.push(e);
                    }), u.each(t, function(t) {
                        var e = t.className, s = t.coord, c = t._id, l = t.attrs, f = t.index, d = t.type;
                        if (!1 === (a = o(e, "leave", t.animateCfg))) return !0;
                        if (i = r(e, s, "leave", a.animation), u.isFunction(i)) {
                            var p = n.addShape(d, {
                                attrs: l,
                                index: f,
                                canvas: n,
                                className: e
                            });
                            p._id = c, i(p, a, s);
                        }
                    }), u.each(s, function(t) {
                        var e = t.get("className");
                        if (!1 === (a = o(e, "update", t.get("animateCfg")))) return !0;
                        var n = t.get("coord"), s = t.get("cacheShape").attrs, c = function(t, e) {
                            var n = {};
                            for (var i in e) u.isNumber(t[i]) && t[i] !== e[i] ? n[i] = e[i] : u.isArray(t[i]) && JSON.stringify(t[i]) !== JSON.stringify(e[i]) && (n[i] = e[i]);
                            return n;
                        }(s, t._attrs.attrs);
                        Object.keys(c).length && (i = r(e, n, "update", a.animation), u.isFunction(i) ? i(t, a, n) : (t.attr(s), 
                        t.animate().to({
                            attrs: c,
                            duration: a.duration,
                            easing: a.easing,
                            delay: a.delay
                        }).onEnd(function() {
                            t.set("cacheShape", null);
                        })));
                    }), u.each(c, function(t) {
                        var e = t.get("className"), n = t.get("coord");
                        if (!1 === (a = o(e, "enter", t.get("animateCfg")))) return !0;
                        if (i = r(e, n, "enter", a.animation), u.isFunction(i)) if ("interval" === e && n.isPolar && n.transposed) {
                            var c = t.get("index"), l = s[c - 1];
                            i(t, a, l);
                        } else i(t, a, n);
                    });
                }
                function s(t, e) {
                    if (!t) return null;
                    var n = e.get("animate");
                    return t.indexOf("guide-tag") > -1 && (t = "guide-tag"), u.isObject(n) ? n[t] : !1 !== n && null;
                }
                var c, u = n(0), l = n(18), f = n(94), d = n(95), p = n(97), h = n(98), g = n(99), m = n(24);
                l.prototype.animate = function() {
                    var t = u.mix({}, this.get("attrs"));
                    return new d(this, t, c);
                }, m.prototype.animate = function(t) {
                    return this.set("animate", t), this;
                }, p.Action = h, p.defaultCfg = {
                    interval: {
                        enter: function(t) {
                            return t.isPolar && t.transposed ? function(t) {
                                t.set("zIndex", -1), t.get("parent").sort();
                            } : h.fadeIn;
                        }
                    },
                    area: {
                        enter: function(t) {
                            return t.isPolar ? null : h.fadeIn;
                        }
                    },
                    line: {
                        enter: function(t) {
                            return t.isPolar ? null : h.fadeIn;
                        }
                    },
                    path: {
                        enter: function(t) {
                            return t.isPolar ? null : h.fadeIn;
                        }
                    }
                };
                var v = {
                    line: function(t) {
                        return t.isPolar ? g.groupScaleInXY : g.groupWaveIn;
                    },
                    area: function(t) {
                        return t.isPolar ? g.groupScaleInXY : g.groupWaveIn;
                    },
                    path: function(t) {
                        return t.isPolar ? g.groupScaleInXY : g.groupWaveIn;
                    },
                    point: function() {
                        return g.shapesScaleInXY;
                    },
                    interval: function(t) {
                        var e;
                        return t.isPolar ? (e = g.groupScaleInXY, t.transposed && (e = g.groupWaveIn)) : e = t.transposed ? g.groupScaleInX : g.groupScaleInY, 
                        e;
                    },
                    schema: function() {
                        return g.groupWaveIn;
                    }
                };
                t.exports = {
                    afterCanvasInit: function() {
                        (c = new f()).play();
                    },
                    beforeCanvasDraw: function(t) {
                        if (!1 !== t.get("animate")) {
                            var e = t.get("isUpdate"), n = t.get("canvas"), c = t.get("coord"), l = t.get("geoms"), f = n.get("caches") || [];
                            0 === f.length && (e = !1);
                            var d = i(l, t, c), h = t.get("axisController"), m = h.frontPlot, _ = h.backPlot, y = m.get("children").concat(_.get("children")), x = [];
                            t.get("guideController") && (x = t.get("guideController").guideShapes);
                            var b, w, C = [];
                            y.concat(x).forEach(function(e) {
                                var n = s(e.get("className"), t);
                                e.set("coord", c), e.set("animateCfg", n), C.push(e), d.push(e);
                            }), n.set("caches", function(t) {
                                for (var e = {}, n = 0, i = t.length; n < i; n++) {
                                    var r = t[n];
                                    if (r._id && !r.isClip) {
                                        var o = r._id;
                                        e[o] = {
                                            _id: o,
                                            type: r.get("type"),
                                            attrs: u.mix({}, r._attrs.attrs),
                                            className: r.get("className"),
                                            geomType: r.get("className"),
                                            index: r.get("index"),
                                            coord: r.get("coord"),
                                            animateCfg: r.get("animateCfg")
                                        };
                                    }
                                }
                                return e;
                            }(d)), e ? a(f, d, n) : (u.each(l, function(e) {
                                var n = e.get("type"), i = u.isNil(e.get("animateCfg")) ? s(n, t) : e.get("animateCfg");
                                if (!1 !== i) if (b = o(n, "appear", i), w = r(n, c, "appear", b.animation), u.isFunction(w)) {
                                    var a = e.get("shapes");
                                    u.each(a, function(t) {
                                        w(t, b, c);
                                    });
                                } else if (v[n]) {
                                    w = g[b.animation] || v[n](c);
                                    var l = e.getYScale(), f = c.convertPoint({
                                        x: 0,
                                        y: l.scale(e.getYMinValue())
                                    }), d = e.get("container");
                                    w && w(d, b, c, f);
                                }
                            }), u.each(C, function(t) {
                                var e = t.get("animateCfg"), n = t.get("className");
                                if (e && e.appear) {
                                    var i = p.getAnimateCfg(n, "appear"), o = u.deepMix({}, i, e.appear), a = r(n, c, "appear", o.animation);
                                    u.isFunction(a) && a(t, o, c);
                                }
                            }));
                        }
                    },
                    afterCanvasDestroyed: function() {
                        c.stop();
                    }
                };
            }, function(e, n, i) {
                var r = i(33).requestAnimationFrame, o = "object" == ("undefined" == typeof performance ? "undefined" : t(performance)) && performance.now ? performance : Date, a = function() {
                    function t() {
                        this.anims = [], this.time = null, this.playing = !1, this.canvas = [];
                    }
                    var e = t.prototype;
                    return e.play = function() {
                        var t = this;
                        t.time = o.now(), t.playing = !0, r(function e() {
                            t.playing && (r(e), t.update());
                        });
                    }, e.stop = function() {
                        this.playing = !1, this.time = null, this.canvas = [];
                    }, e.update = function() {
                        var t = o.now();
                        this.canvas = [];
                        for (var e = 0; e < this.anims.length; e++) {
                            var n = this.anims[e];
                            if (!(t < n.startTime || n.hasEnded)) {
                                var i = n.shape;
                                if (i.get("destroyed")) this.anims.splice(e, 1), e--; else {
                                    var r = n.startState, a = n.endState, s = n.interpolate, c = n.duration;
                                    t >= n.startTime && !n.hasStarted && (n.hasStarted = !0, n.onStart && n.onStart());
                                    var u = (t - n.startTime) / c;
                                    if (u = Math.max(0, Math.min(u, 1)), u = n.easing(u), n.onFrame) n.onFrame(u); else for (var l in s) {
                                        var f = (0, s[l])(u), d = void 0;
                                        if ("points" === l) {
                                            d = [];
                                            for (var p = Math.max(r.points.length, a.points.length), h = 0; h < p; h += 2) d.push({
                                                x: f[h],
                                                y: f[h + 1]
                                            });
                                        } else d = f;
                                        i._attrs.attrs[l] = d, i._attrs.bbox = null;
                                    }
                                    var g = i.get("canvas");
                                    -1 === this.canvas.indexOf(g) && this.canvas.push(g), n.onUpdate && n.onUpdate(u), 
                                    t >= n.endTime && !n.hasEnded && (n.hasEnded = !0, n.onEnd && n.onEnd()), 1 === u && (this.anims.splice(e, 1), 
                                    e--);
                                }
                            }
                        }
                        this.canvas.map(function(t) {
                            return t.draw(), t;
                        }), this.time = o.now();
                    }, t;
                }();
                e.exports = a;
            }, function(t, e, n) {
                function i(t) {
                    for (var e = [], n = 0, i = t.length; n < i; n++) t[n] && (e.push(t[n].x), e.push(t[n].y));
                    return e;
                }
                function r(t, e) {
                    return e -= t = +t, function(n) {
                        return t + e * n;
                    };
                }
                function o(t, e) {
                    var n, i = e ? e.length : 0, o = t ? Math.min(i, t.length) : 0, a = new Array(o), s = new Array(i);
                    for (n = 0; n < o; ++n) a[n] = r(t[n], e[n]);
                    for (;n < i; ++n) s[n] = e[n];
                    return function(t) {
                        for (n = 0; n < o; ++n) s[n] = a[n](t);
                        return s;
                    };
                }
                var a = n(96), s = function() {
                    function t(t, e, n) {
                        this.hasStarted = !1, this.hasEnded = !1, this.shape = t, this.source = e, this.timeline = n, 
                        this.animate = null;
                    }
                    var e = t.prototype;
                    return e.to = function(t) {
                        void 0 === t && (t = {});
                        var e, n = t.delay || 0, s = t.attrs || {}, c = t.duration || 1e3;
                        e = "function" == typeof t.easing ? t.easing : a[t.easing] || a.linear;
                        var u = {
                            shape: this.shape,
                            startTime: this.timeline.time + n,
                            duration: c,
                            easing: e
                        }, l = {};
                        for (var f in s) {
                            var d = this.source[f], p = s[f];
                            "points" === f ? (d = i(d), p = i(p), l.points = o(d, p), this.source.points = d, 
                            s.points = p) : "matrix" === f ? l.matrix = o(d, p) : l[f] = r(d, p);
                        }
                        return u.interpolate = l, u.startState = this.source, u.endState = s, u.endTime = u.startTime + c, 
                        this.timeline.anims.push(u), this.animate = u, this;
                    }, e.onFrame = function(t) {
                        return this.animate && (this.animate.onFrame = function(e) {
                            t(e);
                        }), this;
                    }, e.onStart = function(t) {
                        return this.animate && (this.animate.onStart = function() {
                            t();
                        }), this;
                    }, e.onUpdate = function(t) {
                        return this.animate && (this.animate.onUpdate = function(e) {
                            t(e);
                        }), this;
                    }, e.onEnd = function(t) {
                        return this.animate && (this.animate.onEnd = function() {
                            t();
                        }), this;
                    }, t;
                }();
                t.exports = s;
            }, function(t, e) {
                var n = {
                    linear: function(t) {
                        return t;
                    },
                    quadraticIn: function(t) {
                        return t * t;
                    },
                    quadraticOut: function(t) {
                        return t * (2 - t);
                    },
                    quadraticInOut: function(t) {
                        return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
                    },
                    cubicIn: function(t) {
                        return t * t * t;
                    },
                    cubicOut: function(t) {
                        return --t * t * t + 1;
                    },
                    cubicInOut: function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
                    },
                    elasticIn: function(t) {
                        var e, n = .1, i = .4;
                        return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), !n || n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), 
                        -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i));
                    },
                    elasticOut: function(t) {
                        var e, n = .1, i = .4;
                        return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), !n || n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), 
                        n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1);
                    },
                    elasticInOut: function(t) {
                        var e, n = .1, i = .4;
                        return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), !n || n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), 
                        (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1);
                    },
                    backIn: function(t) {
                        var e = 1.70158;
                        return t * t * ((e + 1) * t - e);
                    },
                    backOut: function(t) {
                        var e = 1.70158;
                        return (t -= 1) * t * ((e + 1) * t + e) + 1;
                    },
                    backInOut: function(t) {
                        var e = 2.5949095;
                        return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
                    },
                    bounceIn: function(t) {
                        return 1 - n.bounceOut(1 - t);
                    },
                    bounceOut: function(t) {
                        return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
                    },
                    bounceInOut: function(t) {
                        return t < .5 ? .5 * n.bounceIn(2 * t) : .5 * n.bounceOut(2 * t - 1) + .5;
                    }
                };
                t.exports = n;
            }, function(t, e, n) {
                var i = n(0), r = {
                    appear: {
                        duration: 450,
                        easing: "quadraticOut"
                    },
                    update: {
                        duration: 300,
                        easing: "quadraticOut"
                    },
                    enter: {
                        duration: 300,
                        easing: "quadraticOut"
                    },
                    leave: {
                        duration: 350,
                        easing: "quadraticIn"
                    }
                }, o = {
                    defaultCfg: {},
                    Action: {},
                    getAnimation: function(t, e, n) {
                        var r = this.defaultCfg[t];
                        if (r) {
                            var o = r[n];
                            if (i.isFunction(o)) return o(e);
                        }
                        return !1;
                    },
                    getAnimateCfg: function(t, e) {
                        var n = r[e], o = this.defaultCfg[t];
                        return o && o.cfg && o.cfg[e] ? i.deepMix({}, n, o.cfg[e]) : n;
                    },
                    registerAnimation: function(t, e) {
                        this.Action || (this.Action = {}), this.Action[t] = e;
                    }
                };
                t.exports = o;
            }, function(t, e, n) {
                var i = n(0), r = n(37);
                t.exports = {
                    fadeIn: function(t, e) {
                        var n = i.isNil(t.attr("fillOpacity")) ? 1 : t.attr("fillOpacity"), o = i.isNil(t.attr("strokeOpacity")) ? 1 : t.attr("strokeOpacity");
                        t.attr("fillOpacity", 0), t.attr("strokeOpacity", 0);
                        var a = {
                            fillOpacity: n,
                            strokeOpacity: o
                        };
                        r.doAnimation(t, a, e);
                    }
                };
            }, function(t, e, n) {
                function i(t, e, n, i, r) {
                    var a, c, u = o.getCoordInfo(n), l = u.start, f = u.end, d = u.width, p = u.height, h = new s.Rect({
                        attrs: {
                            x: l.x,
                            y: f.y,
                            width: d,
                            height: p
                        }
                    });
                    "y" === r ? (a = l.x + d / 2, c = i.y < l.y ? i.y : l.y) : "x" === r ? (a = i.x > l.x ? i.x : l.x, 
                    c = l.y + p / 2) : "xy" === r && (n.isPolar ? (a = n.center.x, c = n.center.y) : (a = (l.x + f.x) / 2, 
                    c = (l.y + f.y) / 2));
                    var g = o.getScaledMatrix(h, [ a, c ], r);
                    h.isClip = !0, h.endState = {
                        matrix: g
                    }, h.set("canvas", t.get("canvas")), t.attr("clip", h), o.doAnimation(h, h.endState, e, function() {
                        t.attr("clip", null), h.remove(!0);
                    });
                }
                function r(t, e, n) {
                    for (var i, r, a, s = t.get("children"), c = 0, u = s.length; c < u; c++) {
                        var l = s[c], f = l.getBBox();
                        i = (f.minX + f.maxX) / 2, r = (f.minY + f.maxY) / 2, a = o.getScaledMatrix(l, [ i, r ], n), 
                        o.doAnimation(l, {
                            matrix: a
                        }, e);
                    }
                }
                var o = n(37), a = n(34), s = n(3).Shape;
                t.exports = {
                    groupWaveIn: function(t, e, n) {
                        var i = a.getClip(n);
                        i.set("canvas", t.get("canvas")), t.attr("clip", i);
                        var r = {};
                        if (n.isPolar) {
                            var s = n.startAngle, c = n.endAngle;
                            r.endAngle = c, i.attr("endAngle", s);
                        } else {
                            var u = n.start, l = n.end, f = Math.abs(u.x - l.x), d = Math.abs(u.y - l.y);
                            n.isTransposed ? (i.attr("height", 0), r.height = d) : (i.attr("width", 0), r.width = f);
                        }
                        o.doAnimation(i, r, e, function() {
                            t.attr("clip", null), i.remove(!0);
                        });
                    },
                    groupScaleInX: function(t, e, n, r) {
                        i(t, e, n, r, "x");
                    },
                    groupScaleInY: function(t, e, n, r) {
                        i(t, e, n, r, "y");
                    },
                    groupScaleInXY: function(t, e, n, r) {
                        i(t, e, n, r, "xy");
                    },
                    shapesScaleInX: function(t, e) {
                        r(t, e, "x");
                    },
                    shapesScaleInY: function(t, e) {
                        r(t, e, "y");
                    },
                    shapesScaleInXY: function(t, e) {
                        r(t, e, "xy");
                    }
                };
            } ]);
        }, e.exports = r();
    },
    NI1J: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "top-filter-wrap"
                }, [ n("div", {
                    staticClass: "select-content"
                }, [ n("div", {
                    staticClass: "left"
                }, t._l(t.tabs, function(e, i) {
                    return n("div", {
                        key: i,
                        staticClass: "opt",
                        class: [ {
                            active: e.value === t.type
                        } ],
                        attrs: {
                            "data-type": e.value,
                            eventid: "0-" + i
                        },
                        on: {
                            tap: t.changeType
                        }
                    }, [ t._v("\n                " + t._s(e.text) + "\n            ") ]);
                })), t._v(" "), n("div", {
                    staticClass: "right"
                }, t._l(t.opts, function(e, i) {
                    return n("div", {
                        key: i,
                        staticClass: "opt",
                        class: [ {
                            active: e.value === t.selected
                        } ],
                        attrs: {
                            "data-value": e.value,
                            "data-text": e.text,
                            eventid: "1-" + i
                        },
                        on: {
                            tap: t.onSelect
                        }
                    }, [ t._v("\n                " + t._s(e.text) + "\n            ") ]);
                })) ]), t._v(" "), n("div", {
                    staticClass: "bottom"
                }, [ n("div", {
                    staticClass: "input-wrap"
                }, [ t.start_focus ? n("input", {
                    staticClass: "input",
                    attrs: {
                        focus: t.start_focus,
                        type: "text",
                        name: "start",
                        placeholder: t.input_tip_start,
                        eventid: "2"
                    },
                    on: {
                        blur: t.changeStartFocus,
                        change: t.changeStart
                    }
                }) : n("view", {
                    staticClass: "input",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        tap: t.changeStartFocus
                    }
                }, [ t._v(t._s(t.start || t.input_tip_start)) ]), t._v(" "), n("span", [ t._v("-") ]), t._v(" "), t.end_focus ? n("input", {
                    staticClass: "input",
                    attrs: {
                        type: "text",
                        focus: t.end_focus,
                        name: "end",
                        placeholder: t.input_tip_end,
                        eventid: "4"
                    },
                    on: {
                        blur: t.changeEndFocus,
                        change: t.changeEnd
                    }
                }) : n("view", {
                    staticClass: "input",
                    attrs: {
                        eventid: "5"
                    },
                    on: {
                        tap: t.changeEndFocus
                    }
                }, [ t._v(t._s(t.end || t.input_tip_end)) ]) ]), t._v(" "), n("button", {
                    staticClass: "btn main",
                    attrs: {
                        eventid: "6"
                    },
                    on: {
                        tap: t.confirm
                    }
                }, [ t._v("确定") ]) ], 1) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    "NWt+": function(t, e, n) {
        var i = n("+ZMJ"), r = n("msXi"), o = n("Mhyx"), a = n("77Pl"), s = n("QRG4"), c = n("3fs2"), u = {}, l = {};
        (e = t.exports = function(t, e, n, f, d) {
            var p, h, g, m, v = d ? function() {
                return t;
            } : c(t), _ = i(n, f, e ? 2 : 1), y = 0;
            if ("function" != typeof v) throw TypeError(t + " is not iterable!");
            if (o(v)) {
                for (p = s(t.length); p > y; y++) if ((m = e ? _(a(h = t[y])[0], h[1]) : _(t[y])) === u || m === l) return m;
            } else for (g = v.call(t); !(h = g.next()).done; ) if ((m = r(g, _, h.value, e)) === u || m === l) return m;
        }).BREAK = u, e.RETURN = l;
    },
    NXqg: function(t, e, n) {
        e.a = {
            name: "BOTTOM_TIP"
        };
    },
    NgpN: function(t, e, n) {
        var i = n("wg3F"), r = n("wQZh"), o = n("ybqe")(i.a, r.a, function(t) {
            n("3mrh");
        }, "data-v-f98a84c2", null);
        e.a = o.exports;
    },
    NpIQ: function(t, e) {
        e.f = {}.propertyIsEnumerable;
    },
    O4g8: function(t, e) {
        t.exports = !0;
    },
    "O8+U": function(t, e, n) {
        var i = n("2CPo"), r = n("YtFr"), o = n("ybqe")(i.a, r.a, function(t) {
            n("LtSX");
        }, null, null);
        e.a = o.exports;
    },
    ON07: function(t, e, n) {
        var i = n("EqjI"), r = n("7KvD").document, o = i(r) && i(r.createElement);
        t.exports = function(t) {
            return o ? r.createElement(t) : {};
        };
    },
    OQ2b: function(t, e, n) {
        n.d(e, "d", function() {
            return s;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "b", function() {
            return u;
        });
        var i = n("0jG4"), r = n("yspw"), o = n("p8GL"), a = function(t, e) {
            wx.showLoading(), r.b.set(t.userInfo), i.a.updateWxUserInfo(t).then(e), wx.hideLoading();
        }, s = function(t, e) {
            var n = t.mp, i = n.detail.userInfo;
            !r.b.isAuthed() && i ? a(n.detail, e) : e();
        }, c = function(t) {
            var e = "navigateTo";
            n.i(o.b)(t) && (e = "switchTab"), wx[e]({
                url: t
            });
        }, u = function(t, e) {
            s(t, function() {
                c(e);
            });
        };
        e.a = function(t, e, n) {
            var i = t.mp;
            r.b.isAuthed() ? e() : i.detail.userInfo ? a(i.detail, e) : wx.showModal({
                title: "提示",
                content: n || "您需要授权才能进行此操作",
                showCancel: !1
            });
        };
    },
    OW13: function(t, e, n) {
        var i = n("0jG4"), r = n("uG0z"), o = n("QGIh");
        e.a = {
            mixins: [ o.a ],
            computed: {
                hide_date: function() {
                    var t = (this.item || {}).date_with_status;
                    return !t || "即将取证" === this.type && t.indexOf("摇号时间") > -1;
                },
                other_tag: function() {
                    return this.item.tags.filter(function(t) {
                        return "green" != t.tag_class;
                    });
                }
            },
            methods: {
                goDetail: function(t) {
                    var e = this.item, n = e.log_id, r = e.href, o = e.position;
                    this.pushFormSubmit(t, r), n && i.a.interestingEvent({
                        interesting_id: n,
                        event: "click",
                        pos_name: o,
                        pos: this.index || 0
                    });
                },
                goComments: function(t) {
                    wx.navigateTo({
                        url: this.item.comment_href
                    });
                }
            },
            components: {
                CommonImg: r.a
            },
            props: {
                item: {
                    type: Object,
                    default: {}
                },
                type: {
                    type: String
                },
                index: {
                    type: [ String, Number ]
                }
            }
        };
    },
    OXhe: function(t, e, n) {
        var i = n("QGIh"), r = n("0jG4");
        e.a = {
            name: "WHOLE_BUILDING_ITEM",
            mixins: [ i.a ],
            props: {
                item: {
                    type: Object
                },
                comment: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                show_presell_date: function() {
                    return this.item && this.item.estimated_presell_time && "即将取证" === this.item.status;
                },
                status_tags: function() {
                    return this.item ? this.item.tags.filter(function(t) {
                        return "green" === t.tag_class;
                    }) : [];
                },
                custom_tags: function() {
                    return this.item ? this.item.tags.filter(function(t) {
                        return !t.tag_class;
                    }) : [];
                }
            },
            methods: {
                goDetail: function(t) {
                    var e = this.item, n = e.log_id, i = e.href, o = e.position;
                    this.pushFormSubmit(t, i), n && r.a.interestingEvent({
                        interesting_id: n,
                        event: "click",
                        pos_name: o,
                        pos: this.index || 0
                    });
                },
                goComments: function() {
                    var t = "/pages/comments/main?building_id=" + this.item.building_id + "&name=" + this.item.name;
                    this.comment || wx.navigateTo({
                        url: t
                    });
                }
            }
        };
    },
    OXzw: function(t, e, n) {
        var i = n("U5dA"), r = n("SS/O"), o = n("ybqe")(i.a, r.a, function(t) {
            n("AbHO");
        }, "data-v-7196cebc", null);
        e.a = o.exports;
    },
    OYls: function(t, e, n) {
        n("crlp")("asyncIterator");
    },
    OdEw: function(t, e, n) {
        var i = n("YleF"), r = n("wx0s"), o = n("ybqe")(i.a, r.a, function(t) {
            n("91Ao");
        }, "data-v-03944099", null);
        e.a = o.exports;
    },
    OvRC: function(t, e, n) {
        t.exports = {
            default: n("oM7Q"),
            __esModule: !0
        };
    },
    PS2j: function(t, e, n) {
        var i = n("p8GL"), r = n("0jG4"), o = 0;
        e.a = {
            data: function() {
                return {
                    text: "获取验证码",
                    time: 0
                };
            },
            methods: {
                onCaptcha: function() {
                    if (!(this.time > 0)) {
                        var t = this.mobile;
                        console.error("submit", t), t && i.a.checkMobile(t) ? r.a.getCaptchas(t).then(this.startWait).catch(function() {
                            wx.showToast({
                                title: "短信发送失败",
                                icon: "none"
                            });
                        }) : wx.showToast({
                            title: "请填写正确的手机号",
                            icon: "none"
                        });
                    }
                },
                startWait: function() {
                    this.text = "重新发送(60s)", this.time = 60, this.changeTime();
                },
                changeTime: function() {
                    var t = this;
                    o = setTimeout(function() {
                        t.time--, t.time <= 0 ? (t.text = "重新发送", clearTimeout(o)) : (t.text = "重新发送(" + t.time + "s)", 
                        t.changeTime());
                    }, 1e3);
                }
            },
            props: {
                mobile: {
                    type: String
                }
            }
        };
    },
    Pf15: function(t, e, n) {
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        e.__esModule = !0;
        var r = i(n("kiBT")), o = i(n("OvRC")), a = i(n("pFYg"));
        e.default = function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : (0, 
            a.default)(e)));
            t.prototype = (0, o.default)(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), e && (r.default ? (0, r.default)(t, e) : t.__proto__ = e);
        };
    },
    PfqS: function(t, e, n) {
        var i = n("OQ2b");
        e.a = {
            methods: {
                addConsultant: function(t) {
                    n.i(i.a)(t, function() {
                        wx.navigateTo({
                            url: "/pages/personal_center/consultant/main"
                        });
                    }, "需要认证用户信息才可以入驻置业顾问");
                }
            }
        };
    },
    PqhC: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "checkbox-wrap"
                }, t._l(t.opts, function(e, i) {
                    return n("div", {
                        key: i,
                        staticClass: "checkbox",
                        class: [ {
                            active: e.selected
                        } ],
                        attrs: {
                            "data-value": e.value,
                            eventid: "0-" + i
                        },
                        on: {
                            tap: function(n) {
                                t.onSelect(e.value, i);
                            }
                        }
                    }, [ t._v("\n        " + t._s(e.text) + "\n    ") ]);
                }));
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    PzxK: function(t, e, n) {
        var i = n("D2L2"), r = n("sB3e"), o = n("ax3d")("IE_PROTO"), a = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = r(t), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null;
        };
    },
    QDEk: function(t, e, n) {
        var i = n("/m0d"), r = n("c2EA"), o = n("ybqe")(i.a, r.a, function(t) {
            n("L0E/");
        }, "data-v-6eebfb52", null);
        e.a = o.exports;
    },
    QGIh: function(t, e, n) {
        var i = n("8iuN");
        e.a = {
            methods: {
                pushFormSubmit: function(t, e) {
                    n.i(i.a)(t.target.formId, e || this.href);
                }
            }
        };
    },
    QRG4: function(t, e, n) {
        var i = n("UuGF"), r = Math.min;
        t.exports = function(t) {
            return t > 0 ? r(i(t), 9007199254740991) : 0;
        };
    },
    "QWe/": function(t, e, n) {
        n("crlp")("observable");
    },
    QdnU: function(t, e, n) {
        var i = n("7gdG");
        e.a = {
            createQuestion: function(t) {
                return n.i(i.c)("questions", t, {
                    loading: !0
                });
            },
            getQuestions: function(t) {
                return n.i(i.a)("questions", t, {
                    loading: !1
                });
            },
            getDetail: function(t) {
                return n.i(i.a)("questions/" + t, {
                    loading: !1
                });
            },
            lookQuestion: function(t) {
                return n.i(i.c)("questions/" + t + "/onlookers", {
                    loading: !1
                });
            },
            getSupport: function(t, e) {
                return n.i(i.a)("questions/" + t + "/onlooker_support", {
                    share_by: e
                }, {
                    loading: !1
                });
            },
            support: function(t, e) {
                return n.i(i.c)("questions/" + t + "/onlooker_support", {
                    share_by: e
                }, {
                    loading: !0
                });
            },
            getMaterials: function(t) {
                return n.i(i.a)("questions/" + t + "/onlooker_support/billboard_materials", {
                    loading: !1
                });
            }
        };
    },
    QiOz: function(t, e, n) {
        var i = n("e2qI"), r = n("uVD0"), o = n("ybqe")(i.a, r.a, function(t) {
            n("zAUV");
        }, "data-v-3aa5b8c8", null);
        e.a = o.exports;
    },
    QmSG: function(t, e, n) {
        n.d(e, "a", function() {
            return i;
        }), n.d(e, "b", function() {
            return r;
        });
        var i = [ "pages/index/main", "pages/find_building/main", "pages/house_circles/main", "pages/personal_center/main" ], r = "https://cdn.vip-wifi.com/fangchan/share-img/consultants-apply.png";
    },
    QryV: function(t, e) {},
    R4wc: function(t, e, n) {
        var i = n("kM2E");
        i(i.S + i.F, "Object", {
            assign: n("To3L")
        });
    },
    R9M2: function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1);
        };
    },
    RIXc: function(t, e) {},
    RPLV: function(t, e, n) {
        var i = n("7KvD").document;
        t.exports = i && i.documentElement;
    },
    RU6r: function(t, e, n) {
        n.d(e, "a", function() {
            return a;
        }), n.d(e, "b", function() {
            return s;
        }), n.d(e, "d", function() {
            return c;
        }), n.d(e, "c", function() {
            return u;
        });
        var i, r = n("bOdI"), o = n.n(r), a = {
            metro: "地铁",
            school: "学校",
            food: "美食",
            hospital: "医院",
            shopping: "购物",
            bus: "公交",
            bank: "银行"
        }, s = "https://cdn.vip-wifi.com/fangchan/img/building/around_facilities/house-icon.png", c = "https://cdn.vip-wifi.com/fangchan/img/building/around_facilities/dest-icon.png", u = (i = {}, 
        o()(i, a.metro, "https://cdn.vip-wifi.com/fangchan/img/building/around_facilities/map/metro.png"), 
        o()(i, a.school, "https://cdn.vip-wifi.com/fangchan/img/building/around_facilities/map/school.png"), 
        o()(i, a.food, "https://cdn.vip-wifi.com/fangchan/img/building/around_facilities/map/food.png"), 
        o()(i, a.hospital, "https://cdn.vip-wifi.com/fangchan/img/building/around_facilities/map/hospital.png"), 
        o()(i, a.shopping, "https://cdn.vip-wifi.com/fangchan/img/building/around_facilities/map/shop.png"), 
        o()(i, a.bus, "https://cdn.vip-wifi.com/fangchan/img/building/around_facilities/map/bus.png"), 
        o()(i, a.bank, "https://cdn.vip-wifi.com/fangchan/img/building/around_facilities/map/bank.png"), 
        i);
    },
    RWXF: function(t, e) {},
    "RY/4": function(t, e, n) {
        var i = n("R9M2"), r = n("dSzd")("toStringTag"), o = "Arguments" == i(function() {
            return arguments;
        }());
        t.exports = function(t) {
            var e, n, a;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function(t, e) {
                try {
                    return t[e];
                } catch (t) {}
            }(e = Object(t), r)) ? n : o ? i(e) : "Object" == (a = i(e)) && "function" == typeof e.callee ? "Arguments" : a;
        };
    },
    RgAB: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("ul", {
                    staticClass: "tabs",
                    style: [ {
                        width: t.width
                    } ]
                }, t._l(t.tabs, function(e, i) {
                    return n("li", {
                        key: i,
                        class: [ {
                            active: t.selected === e.key
                        } ],
                        attrs: {
                            "data-key": e.key,
                            eventid: "0-" + i
                        },
                        on: {
                            tap: t.onChange
                        }
                    }, [ t._v("\n        " + t._s(e.name) + "\n        "), e.new ? n("i", {
                        staticClass: "new"
                    }) : t._e() ], 1);
                }));
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    RpDY: function(t, e) {},
    Rrel: function(e, n, i) {
        var r = i("TcQ7"), o = i("n0T6").f, a = {}.toString, s = "object" == ("undefined" == typeof window ? "undefined" : t(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e.exports.f = function(t) {
            return s && "[object Window]" == a.call(t) ? function(t) {
                try {
                    return o(t);
                } catch (t) {
                    return s.slice();
                }
            }(t) : o(r(t));
        };
    },
    "S+Ea": function(t, e, n) {
        var i = {
            render: function() {
                return this.$createElement, this._self._c, this._m(0);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "loading"
                }, [ e("div", {
                    staticClass: "typing_loader"
                }) ]);
            } ]
        };
        e.a = i;
    },
    S82l: function(t, e) {
        t.exports = function(t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        };
    },
    SLll: function(t, e, n) {
        var i = n("fZjL"), r = n.n(i), o = n("//Fk"), a = n.n(o), s = n("Dd8w"), c = n.n(s), u = n("7gdG");
        e.a = {
            getBillboard: function(t) {
                return n.i(u.a)("buildings/" + t + "/billboard_material", {
                    loading: !1
                });
            },
            likeBuilding: function(t, e) {
                return e ? n.i(u.c)("buildings/" + t + "/like", {
                    loading: !1
                }) : n.i(u.d)("buildings/" + t + "/like", {
                    loading: !1
                });
            },
            getImgs: function(t, e) {
                return n.i(u.a)("buildings/" + t + "/images", {
                    category: e
                }, {
                    loading: !0
                });
            },
            getAcround: function(t, e) {
                return n.i(u.a)("buildings/" + t + "/around_facilities", c()({}, e, {
                    per: 20
                }), {
                    loading: !1
                });
            },
            getAcroundOverview: function(t) {
                return n.i(u.a)("buildings/" + t + "/around_facilities/overview", {
                    loading: !0
                });
            },
            getArticle: function(t, e) {
                return a.a.all([ function(t, e) {
                    return n.i(u.a)("building_feeds", {
                        building_id: t,
                        category: "自媒体"
                    }, {
                        loading: !1
                    });
                }(t), e ? function(t) {
                    return n.i(u.a)("weixin_articles", {
                        page: 1,
                        per: 20,
                        weixin_account_id: t
                    }, {
                        loading: !1
                    });
                }(e) : a.a.resolve([]) ]).then(function(t) {
                    var e = t[0], n = t[1];
                    return {
                        media: e.items,
                        weixin: n.items ? n.items.map(function(t) {
                            return c()({}, t, {
                                author: {
                                    name: n.name,
                                    headimgurl: n.headimg_url || "https://cdn.vip-wifi.com/fangchan/img/house-detail/tabs/weixin-active.png"
                                },
                                content_body: {
                                    article_url: t.link,
                                    image_url: t.image,
                                    title: t.title
                                },
                                published_date: t.date
                            });
                        }) : []
                    };
                });
            },
            getEvents: function(t) {
                return n.i(u.a)("building_events", t, {
                    loading: !0
                });
            },
            getEvent: function(t, e) {
                return "全部" === e.category && delete e.category, n.i(u.a)("building_events", c()({
                    building_id: t
                }, e), {
                    loading: !1
                });
            },
            createEvent: function(t, e) {
                return n.i(u.c)("buildings/" + t + "/events", e, {
                    loading: !0
                });
            },
            getPredict: function(t) {
                return n.i(u.a)("houses/" + t + "/register_predictions", {
                    loading: !0
                });
            },
            housePrice: function(t, e) {
                return r()(e).forEach(function(t) {
                    e[t] || delete e[t];
                }), n.i(u.a)("houses/" + t + "/prices", e, {
                    loading: !0
                });
            },
            getEventsTpl: function(t) {
                return n.i(u.a)("buildings/" + t + "/events/new", {
                    loading: !0
                });
            },
            houseSurplusApartments: function(t, e) {
                return r()(e).forEach(function(t) {
                    e[t] || delete e[t];
                }), n.i(u.a)("houses/" + t + "/surplus_apartments", e, {
                    loading: !0
                });
            }
        };
    },
    "SS/O": function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    class: [ {
                        no_shadow: !t.shadow
                    } ],
                    style: [ {
                        display: t.show ? "block" : "none"
                    } ]
                }, [ n("div", {
                    staticClass: "overlay",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: t.cancel
                    }
                }), t._v(" "), n("div", {
                    staticClass: "share-options"
                }, [ n("div", {
                    staticClass: "options"
                }, [ n("button", {
                    attrs: {
                        "open-type": "share"
                    }
                }, [ n("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/house-detail/share-wx.png"
                    }
                }), t._v(" "), n("div", [ t._v("发送给朋友") ]) ]), t._v(" "), n("button", {
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        tap: t.showBillboard
                    }
                }, [ t.is_building ? n("div", [ n("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/house-detail/share-billboard.png"
                    }
                }), t._v(" "), n("div", [ t._v("分享楼盘海报") ]) ]) : n("div", [ n("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/pray/save-btn.png"
                    }
                }), t._v(" "), n("div", [ t._v("保存图片") ]) ]) ]) ], 1), t._v(" "), n("button", {
                    staticClass: "cancel-btn",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        tap: t.cancel
                    }
                }, [ t._v("取消") ]) ], 1) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    Sbyh: function(t, e, n) {
        var i = n("fZjL"), r = n.n(i), o = n("7gdG"), a = n("pOFa");
        e.a = {
            list: function(t) {
                return function(t) {
                    r()(t).forEach(function(e) {
                        t[e] || delete t[e];
                    });
                }(t), n.i(o.a)("business_buildings", t, {
                    loading: !0
                });
            },
            get: function(t, e, i) {
                return n.i(o.a)("business_buildings/" + t, {
                    house_id: e,
                    consultant_group_id: i
                }, {
                    loading: !1
                }).then(a.d);
            }
        };
    },
    SfB7: function(t, e, n) {
        t.exports = !n("+E39") && !n("S82l")(function() {
            return 7 != Object.defineProperty(n("ON07")("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    },
    Ss2N: function(t, e, n) {
        e.a = {
            verify_mobile: ""
        };
    },
    SstU: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "item"
                }, [ n("div", {
                    staticClass: "header"
                }, [ n("button", {
                    staticClass: "user",
                    class: [ {
                        clickable: t.item.author.consultant_id
                    } ],
                    attrs: {
                        "open-type": "getUserInfo",
                        eventid: "0"
                    },
                    on: {
                        getuserinfo: t.goConsult
                    }
                }, [ n("img", {
                    staticClass: "headimg",
                    attrs: {
                        src: t.item.author.headimgurl
                    }
                }), t._v(" "), n("span", [ t._v(t._s(t.item.author.name)) ]) ]), t._v(" "), n("span", [ t._v("\n            " + t._s(t.item.published_date) + "\n        ") ]) ], 1), t._v(" "), n("div", {
                    staticClass: "content",
                    class: [ {
                        line: t.has_line
                    } ]
                }, [ n("h3", [ t._v(t._s(t.item.title)) ]), t._v(" "), n("text", {
                    class: [ {
                        "two-line": !t.show_all && t.show_operate
                    } ]
                }, [ t._v(t._s(t.item.content)) ]), t._v(" "), t.show_operate ? n("a", {
                    staticClass: "link",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        tap: t.toggleShow
                    }
                }, [ t._v(t._s(t.show_all ? "收起" : "全文")) ]) : t._e(), t._v(" "), t.item.video ? n("div", {
                    staticClass: "img-wrap"
                }, [ n("video", {
                    attrs: {
                        src: t.item.video,
                        poster: t.item.video_cover_photo_url
                    }
                }) ]) : t._e(), t._v(" "), t.item.photos_urls && t.item.photos_urls.length ? n("div", {
                    staticClass: "img-wrap"
                }, t._l(t.item.photos_urls, function(e, i) {
                    return n("img", {
                        key: i,
                        class: [ {
                            mini: t.item.photos_urls.length > 1
                        } ],
                        attrs: {
                            "data-index": i,
                            src: [ 1 === t.item.photos_urls.length ? e + "?x-oss-process=image/resize,w_576,h_576" : e + "?x-oss-process=image/resize,w_232,h_232" ],
                            "lazy-load": !0,
                            mode: t.item.photos_urls.length > 1 ? "aspectFill" : "widthFix",
                            eventid: "2-" + i
                        },
                        on: {
                            tap: t.previewImg
                        }
                    });
                })) : t._e() ], 1) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    StNi: function(t, e) {},
    T2HJ: function(t, e, n) {
        e.a = {
            methods: {
                getSharePath: function(t) {
                    var e = this.$root.$mp.query.detailParam;
                    return e ? "/pages/building/main?" + decodeURIComponent(e) + "&sub_page=" + encodeURIComponent(t) : t;
                }
            }
        };
    },
    TMCY: function(t, e, n) {
        var i = n("Dd8w"), r = n.n(i), o = n("7gdG"), a = n("pOFa"), s = function(t) {
            var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return function(n, i, r) {
                return t("subscribed_message", {
                    message_type: n,
                    targetable_type: i,
                    targetable_id: r
                }, {
                    loading: e
                });
            };
        }, c = s(o.c), u = s(o.a, !1), l = s(o.d), f = function(t) {
            return t.map(function(t, e) {
                return r()({}, t, {
                    class: "Recommendation_" + e
                });
            });
        }, d = function(t, e) {
            var i = {
                readable_type: e
            };
            return t && (i.readable_id = t), n.i(o.c)("read_hints", i, {
                loading: !1
            });
        };
        e.a = {
            getPhonePosition: function(t) {
                return n.i(o.c)("call_sessions", t, {
                    loading: !0
                });
            },
            getSceneQr: function(t) {
                return n.i(o.a)("scene_qrcode", t, {
                    loading: !0
                });
            },
            like: function(t, e, n) {
                var i = o.d;
                return n && (i = o.c), i("like", {
                    likeable_type: t,
                    likeable_id: e
                }, {
                    loading: !1
                });
            },
            subMsg: c,
            getSubMsg: u,
            delSubMsg: l,
            getRecommendation: function(t, e) {
                return n.i(o.a)("recommendation", r()({
                    position: t
                }, e, {
                    limit: 5
                }), {
                    loading: !1,
                    error_show: !1
                }).then(a.e).then(f);
            },
            getBanner: function(t) {
                return n.i(o.a)("recommendation", {
                    position: t,
                    limit: 4
                }, {
                    loading: !1
                }).then(a.b);
            },
            getSmsCaptchas: function(t) {
                return n.i(o.c)("sms_captchas", {
                    mobile: t
                }, {
                    loading: !1
                });
            },
            postWeixinPhone: function(t, e, i) {
                return n.i(o.c)("weixin_phones", {
                    iv: t,
                    encryptedData: e,
                    errMsg: i
                }, {
                    loading: !0
                });
            },
            addConsultantClient: function(t) {
                return n.i(o.c)("consultant_clients", {
                    consultant_id: t
                }, {
                    loading: !1
                });
            },
            readHints: d,
            readQuestionHints: function(t) {
                return d(t, "Fc::Question");
            },
            readEventHints: function(t) {
                return d(t, "Fc::BuildingEvent");
            }
        };
    },
    TcQ7: function(t, e, n) {
        var i = n("MU5D"), r = n("52gC");
        t.exports = function(t) {
            return i(r(t));
        };
    },
    TlMU: function(t, e) {},
    To3L: function(t, e, n) {
        var i = n("lktj"), r = n("1kS7"), o = n("NpIQ"), a = n("sB3e"), s = n("MU5D"), c = Object.assign;
        t.exports = !c || n("S82l")(function() {
            var t = {}, e = {}, n = Symbol(), i = "abcdefghijklmnopqrst";
            return t[n] = 7, i.split("").forEach(function(t) {
                e[t] = t;
            }), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != i;
        }) ? function(t, e) {
            for (var n = a(t), c = arguments.length, u = 1, l = r.f, f = o.f; c > u; ) for (var d, p = s(arguments[u++]), h = l ? i(p).concat(l(p)) : i(p), g = h.length, m = 0; g > m; ) f.call(p, d = h[m++]) && (n[d] = p[d]);
            return n;
        } : c;
    },
    TwAw: function(t, e, n) {
        var i = n("0jG4");
        e.a = {
            data: function() {
                return {
                    msg_box: {}
                };
            },
            methods: {
                goAddComment: function(t) {
                    var e = this;
                    return i.a.newBuildingComment(t).then(function(t) {
                        var n = t.msg_box;
                        return e.msg_box = n, !n.contents || !n.contents.length;
                    });
                }
            }
        };
    },
    U5dA: function(t, e, n) {
        e.a = {
            data: function() {
                return {
                    show_billboard: !1
                };
            },
            methods: {
                showBillboard: function() {
                    this.cancel(), this.$emit("showBillboard");
                },
                cancel: function() {
                    this.$emit("hide");
                }
            },
            props: {
                show: {
                    type: Boolean,
                    default: !1
                },
                shadow: {
                    type: Boolean,
                    default: !0
                }
            }
        };
    },
    U5ju: function(t, e, n) {
        n("M6a0"), n("zQR9"), n("+tPU"), n("CXw9"), n("EqBC"), n("jKW+"), t.exports = n("FeBl").Promise;
    },
    UuGF: function(t, e) {
        var n = Math.ceil, i = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t);
        };
    },
    Ux54: function(t, e, n) {
        var i = {
            render: function() {
                var t = this.$createElement, e = this._self._c || t;
                return this.show ? e("div", {
                    staticClass: "empty-wrap"
                }, [ e("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/consultant-card/empty.png",
                        "lazy-load": !0
                    }
                }), this._v(" "), e("p", [ this._v(this._s(this.tip)) ]) ], 1) : this._e();
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    V3tA: function(t, e, n) {
        n("R4wc"), t.exports = n("FeBl").Object.assign;
    },
    VPS7: function(t, e, n) {
        n.d(e, "b", function() {
            return c;
        });
        var i = n("Dd8w"), r = n.n(i), o = n("//Fk"), a = n.n(o), s = function() {
            wx.showModal({
                title: "提示",
                content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
            });
        }, c = function() {
            var t = wx.getSystemInfoSync(), e = t.system, n = t.version, i = e.indexOf("iOS") > -1, r = function(t, e) {
                t = t.split("."), e = e.split(".");
                for (var n = Math.max(t.length, e.length); t.length < n; ) t.push("0");
                for (;e.length < n; ) e.push("0");
                for (var i = 0; i < n; i++) {
                    var r = parseInt(t[i]), o = parseInt(e[i]);
                    if (r > o) return 1;
                    if (r < o) return -1;
                }
                return 0;
            }(n, "6.7.1") < 1;
            return i && r ? "您当前微信版本上传图片可能会出现问题，建议先升级微信版本" : "";
        };
        e.a = {
            login: function() {
                return new a.a(function(t, e) {
                    wx.login({
                        success: function(e) {
                            getApp().globalData.jscode = e.code, t(e);
                        },
                        fail: e
                    });
                });
            },
            checkSession: function() {
                return new a.a(function(t, e) {
                    var n = wx.getStorageSync("token");
                    console.error(n, getApp().globalData), n ? wx.checkSession({
                        success: function() {
                            t({
                                code: getApp().globalData.jscode
                            });
                        },
                        fail: function(t) {
                            console.warn("checksession fail"), e(t);
                        }
                    }) : (console.warn("checksession no token fail"), e());
                });
            },
            uploadImg: function(t) {
                return new a.a(function(e, n) {
                    wx.uploadFile({
                        url: "https://data-api.rippletek.com/miniapp/v1/upload_images",
                        filePath: t,
                        header: {
                            "content-type": "application/json"
                        },
                        name: "image",
                        success: function(t) {
                            var n = JSON.parse(t.data).data;
                            e(n.image_ssl_url);
                        },
                        fail: function(t) {
                            n(t);
                        }
                    });
                });
            },
            setClipboardData: function(t, e) {
                wx.setClipboardData ? wx.setClipboardData({
                    data: t,
                    success: function(t) {
                        e ? e() : wx.showToast({
                            title: "内容已复制",
                            icon: "success"
                        });
                    }
                }) : s();
            },
            makePhoneCall: function(t) {
                wx.makePhoneCall ? wx.makePhoneCall({
                    phoneNumber: t
                }) : s();
            },
            getSystemInfo: function() {
                return new a.a(function(t, e) {
                    wx.getSystemInfo({
                        success: t,
                        fail: e
                    });
                });
            },
            getImgInfo: function(t) {
                return new a.a(function(e, n) {
                    wx.getImageInfo({
                        src: t,
                        success: e,
                        fail: n
                    });
                });
            },
            downloadFile: function(t) {
                return new a.a(function(e, n) {
                    wx.downloadFile(r()({}, t, {
                        success: e,
                        fail: n
                    }));
                });
            },
            saveImgFromInternet: function(t) {
                return this.downloadFile(t).then(function(t) {
                    return t.tempFilePath;
                }).then(this.saveImageToPhotosAlbum);
            },
            saveImageToPhotosAlbum: function(t) {
                return new a.a(function(e, n) {
                    wx.saveImageToPhotosAlbum({
                        filePath: t,
                        success: e,
                        fail: n
                    });
                });
            },
            setTitle: function(t) {
            //   wx.setNavigationBarTitle({
            //         title: e
            //   });
            },
            chooseImage: function(t) {
                return new a.a(function(e, n) {
                    wx.chooseImage(r()({}, t, {
                        success: function(t) {
                            var n = t.tempFilePaths;
                            n && 0 === n.length ? wx.showToast({
                                title: "接口故障，暂无法获取图片",
                                icon: "none"
                            }) : e(n);
                        },
                        fail: n
                    }));
                });
            },
            getStorage: function(t) {
                return new a.a(function(e, n) {
                    wx.getStorage({
                        key: t,
                        success: e,
                        fail: n
                    });
                });
            },
            setStorage: function(t, e) {
                return new a.a(function(n, i) {
                    wx.setStorage({
                        key: t,
                        data: e,
                        success: n,
                        fail: i
                    });
                });
            },
            observerRelativeViewPort: function(t, e) {
                var n = e.relativeOpt, i = e.success;
                if ("function" != typeof wx.createIntersectionObserver) return null;
                var r = wx.createIntersectionObserver();
                return r.relativeToViewport(n || {}).observe(t, i), r;
            },
            authorize: function(t) {
                return new a.a(function(e, n) {
                    wx.authorize({
                        scope: t,
                        success: e,
                        fail: n
                    });
                });
            },
            getLocation: function() {
                return new a.a(function(t, e) {
                    wx.getLocation({
                        success: t,
                        fail: e
                    });
                });
            }
        };
    },
    VVHy: function(t, e, n) {
        var i = n("xRwK"), r = n("7pCL"), o = n("ybqe")(i.a, r.a, function(t) {
            n("mGEL");
        }, null, null);
        e.a = o.exports;
    },
    Vrwd: function(t, e, n) {
        e.a = {};
    },
    W2nU: function(t, e) {
        function n() {
            throw new Error("setTimeout has not been defined");
        }
        function i() {
            throw new Error("clearTimeout has not been defined");
        }
        function r(t) {
            if (u === setTimeout) return setTimeout(t, 0);
            if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);
            try {
                return u(t, 0);
            } catch (e) {
                try {
                    return u.call(null, t, 0);
                } catch (e) {
                    return u.call(this, t, 0);
                }
            }
        }
        function o() {
            h && d && (h = !1, d.length ? p = d.concat(p) : g = -1, p.length && a());
        }
        function a() {
            if (!h) {
                var t = r(o);
                h = !0;
                for (var e = p.length; e; ) {
                    for (d = p, p = []; ++g < e; ) d && d[g].run();
                    g = -1, e = p.length;
                }
                d = null, h = !1, function(t) {
                    if (l === clearTimeout) return clearTimeout(t);
                    if ((l === i || !l) && clearTimeout) return l = clearTimeout, clearTimeout(t);
                    try {
                        l(t);
                    } catch (e) {
                        try {
                            return l.call(null, t);
                        } catch (e) {
                            return l.call(this, t);
                        }
                    }
                }(t);
            }
        }
        function s(t, e) {
            this.fun = t, this.array = e;
        }
        function c() {}
        var u, l, f = t.exports = {};
        !function() {
            try {
                u = "function" == typeof setTimeout ? setTimeout : n;
            } catch (t) {
                u = n;
            }
            try {
                l = "function" == typeof clearTimeout ? clearTimeout : i;
            } catch (t) {
                l = i;
            }
        }();
        var d, p = [], h = !1, g = -1;
        f.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            p.push(new s(t, e)), 1 !== p.length || h || r(a);
        }, s.prototype.run = function() {
            this.fun.apply(null, this.array);
        }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", 
        f.versions = {}, f.on = c, f.addListener = c, f.once = c, f.off = c, f.removeListener = c, 
        f.removeAllListeners = c, f.emit = c, f.prependListener = c, f.prependOnceListener = c, 
        f.listeners = function(t) {
            return [];
        }, f.binding = function(t) {
            throw new Error("process.binding is not supported");
        }, f.cwd = function() {
            return "/";
        }, f.chdir = function(t) {
            throw new Error("process.chdir is not supported");
        }, f.umask = function() {
            return 0;
        };
    },
    W4tJ: function(t, e, n) {
        var i = n("e/Hi"), r = n("N8T6"), o = n.n(r);
        o.a.Util.addEventListener = function(t, e, n) {
            t.addListener(e, n);
        }, o.a.Util.removeEventListener = function(t, e, n) {
            t.removeListener(e, n);
        }, o.a.Util.createEvent = function(t, e) {
            var n = t.type, i = 0, r = 0, o = t.touches;
            return o && o.length > 0 && (i = o[0].x, r = o[0].y), {
                type: n,
                chart: e,
                x: i,
                y: r
            };
        }, e.a = {
            props: {
                canvasId: {
                    type: String,
                    default: "f2-canvas"
                },
                opts: {
                    type: Object
                }
            },
            watch: {
                opts: function(t) {}
            },
            onReady: function() {
                this.opts ? this.opts.lazyLoad || this.init() : console.warn('组件需绑定 opts 变量，例：<ff-canvas id="mychart-dom-bar" canvas-id="mychart-bar" opts="{{ opts }}"></ff-canvas>');
            },
            methods: {
                init: function(t) {
                    var e = this, n = wx.version.version.split(".").map(function(t) {
                        return parseInt(t, 10);
                    });
                    if (n[0] > 1 || 1 === n[0] && n[1] > 9 || 1 === n[0] && 9 === n[1] && n[2] >= 91) {
                        var r = wx.createCanvasContext(this.canvasId, this), o = new i.a(r);
                        this.canvas = o, wx.createSelectorQuery().select(".f2-canvas").boundingClientRect(function(n) {
                            "function" == typeof t ? e.chart = t(o, n.width, n.height) : n && e.opts && e.opts.onInit && (e.chart = e.opts.onInit(o, n.width, n.height));
                        }).exec();
                    } else console.error("微信基础库版本过低，需大于等于 1.9.91。");
                },
                touchStart: function(t) {
                    this.canvas && this.canvas.emitEvent("touchstart", [ t ]);
                },
                touchMove: function(t) {
                    this.canvas && this.canvas.emitEvent("touchmove", [ t ]);
                },
                touchEnd: function(t) {
                    this.canvas && this.canvas.emitEvent("touchend", [ t ]);
                },
                press: function(t) {
                    this.canvas && this.canvas.emitEvent("press", [ t ]);
                }
            }
        };
    },
    W5BE: function(t, e) {},
    Wh3J: function(t, e, n) {
        var i = n("7gdG");
        e.a = {
            getMine: function(t) {
                return n.i(i.a)("cdfx_registers", {
                    loading: !0
                });
            },
            getMyReg: function(t) {
                return n.i(i.a)("my_registers", {
                    loading: !0
                });
            },
            updateMyReg: function() {
                return n.i(i.c)("my_registers", {
                    loading: !0
                });
            }
        };
    },
    WjlD: function(t, e, n) {
        var i = n("InPH"), r = n("r1EU"), o = n("ybqe")(i.a, r.a, function(t) {
            n("RIXc");
        }, "data-v-5ad11796", null);
        e.a = o.exports;
    },
    WoWr: function(t, e, n) {
        var i = n("6lZI"), r = n("pnP1"), o = n("ybqe")(i.a, r.a, function(t) {
            n("3Pc9");
        }, null, null);
        e.a = o.exports;
    },
    WwPs: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    class: [ {
                        hide: !t.show
                    } ]
                }, [ n("div", {
                    staticClass: "dlg"
                }, [ n("img", {
                    attrs: {
                        src: t.qr_url
                    }
                }), t._v(" "), n("h1", [ t._v("\n            " + t._s(t.title) + "\n        ") ]), t._v(" "), n("p", [ t._v("\n            " + t._s(t.content) + "\n        ") ]), t._v(" "), t.show_copy ? n("div", {
                    staticClass: "link",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: t.copyWx
                    }
                }, [ t._v("\n            微信号：cdgfzzj   复制\n        ") ]) : t._e(), t._v(" "), n("button", {
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        tap: t.save
                    }
                }, [ t._v(t._s(t.saving ? "正在保存" : "保存图片")) ]) ], 1), t._v(" "), n("div", {
                    staticClass: "overlay",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        tap: t.hide
                    }
                }) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    WzQM: function(t, e, n) {
        var i = n("gpNG"), r = n("GvMd"), o = n("ybqe")(i.a, r.a, function(t) {
            n("qV4D");
        }, null, null);
        e.a = o.exports;
    },
    "X3+f": function(t, e) {},
    "X4/J": function(t, e, n) {
        var i = n("wJe+"), r = n("Ux54"), o = n("ybqe")(i.a, r.a, function(t) {
            n("6vyr");
        }, "data-v-43c4e036", null);
        e.a = o.exports;
    },
    X4Fn: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "top-filter-wrap"
                }, [ n("div", {
                    staticClass: "select-content"
                }, [ n("area-checkbox", {
                    attrs: {
                        selected: t.selected,
                        eventid: "0",
                        mpcomid: "0"
                    },
                    on: {
                        change: t.change
                    }
                }) ], 1), t._v(" "), n("div", {
                    staticClass: "bottom"
                }, [ n("button", {
                    staticClass: "btn",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        tap: t.reset
                    }
                }, [ t._v("清空") ]), t._v(" "), n("button", {
                    staticClass: "btn main",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        tap: t.confirm
                    }
                }, [ t._v("确定") ]) ], 1) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    X8DO: function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            };
        };
    },
    XTtA: function(t, e, n) {
        var i = n("p+bN"), r = n("t42T"), o = n("ybqe")(i.a, r.a, function(t) {
            n("X3+f");
        }, "data-v-67ed6c5a", null);
        e.a = o.exports;
    },
    XUjr: function(t, e, n) {
        e.a = {
            data: function() {
                return {
                    filter_show: !1
                };
            },
            watch: {
                filter_show: function(t) {
                    var e = {
                        animation: !0
                    };
                    t ? wx.hideTabBar(e) : wx.showTabBar(e);
                }
            },
            methods: {
                toggleFilter: function(t) {
                    this.filter_show = void 0 !== t ? t : !this.filter_show;
                }
            }
        };
    },
    Xc4G: function(t, e, n) {
        var i = n("lktj"), r = n("1kS7"), o = n("NpIQ");
        t.exports = function(t) {
            var e = i(t), n = r.f;
            if (n) for (var a, s = n(t), c = o.f, u = 0; s.length > u; ) c.call(t, a = s[u++]) && e.push(a);
            return e;
        };
    },
    Xd32: function(t, e, n) {
        n("+tPU"), n("zQR9"), t.exports = n("5PlU");
    },
    XvaF: function(t, e, n) {
        var i = n("7gdG");
        e.a = {
            getRealTiemData: function(t) {
                return n.i(i.a)("house_businesses", t, {
                    loading: !0
                });
            },
            getHistory: function(t) {
                return n.i(i.a)("house_businesses/histories", {
                    last_days: t
                }, {
                    loading: !0
                });
            },
            beikeSecondhandMonthlyPrices: function() {
                return n.i(i.a)("beike_secondhand_monthly_prices", {
                    loading: !0
                });
            },
            getTrends: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "weekly";
                return n.i(i.a)("house_businesses/trends", {
                    daterange_step: t
                }, {
                    loading: !0
                });
            },
            buildingWeeklyReports: function(t) {
                return n.i(i.a)("building_weekly_reports", t, {
                    loading: !0
                });
            },
            getLandTrades: function(t) {
                return n.i(i.a)("land_trades", t, {
                    loading: !0
                });
            },
            getLandTradesDetail: function(t) {
                return n.i(i.a)("land_trades/" + t, {
                    loading: !0
                });
            }
        };
    },
    Y4fF: function(t, e) {},
    YK7p: function(t, e, n) {
        var i = n("Dd8w"), r = n.n(i), o = n("RU6r");
        e.a = {
            data: function() {
                return {
                    markers: [],
                    points: []
                };
            },
            onLoad: function() {
                var t = [];
                t[0] = r()({}, this.house, {
                    iconPath: o.b,
                    zIndex: 1,
                    width: 19.5,
                    height: 24.5
                }), this.markers = t;
            },
            watch: {
                house: function(t) {
                    this.changeMarker(0, t);
                },
                dest: function(t) {
                    this.changeMarker(1, t);
                }
            },
            computed: {
                points: function() {
                    return this.markers.map(function(t) {
                        return {
                            longitude: t.longitude,
                            latitude: t.latitude
                        };
                    });
                }
            },
            methods: {
                changeMarker: function(t, e) {
                    if (e && e.longitude && e.latitude) {
                        var n = [ {
                            iconPath: o.b,
                            zIndex: 1,
                            width: 19.5,
                            height: 24.5
                        }, {
                            iconPath: o.c[o.a[this.category]] || o.d,
                            zIndex: 2,
                            width: 26,
                            height: 89 / 3
                        } ];
                        this.markers.splice(t, 1, r()({}, e, n[t]));
                    }
                },
                goMap: function() {
                    var t = this.$root.$mp.query, e = t.name, n = t.id, i = t.location;
                    wx.navigateTo({
                        url: "/pages/building/around_facilities/map/main?id=" + n + "&name=" + e + "&location=" + i + "&category=" + this.category
                    });
                }
            },
            props: {
                house: {
                    type: Object
                },
                dest: {
                    type: [ Object ]
                },
                category: {
                    type: String
                }
            }
        };
    },
    YkEy: function(t, e, n) {
        e.a = {
            name: "QR",
            props: {
                search_tip: {
                    type: String
                }
            }
        };
    },
    YleF: function(t, e, n) {
        var i = n("DBX0");
        e.a = {
            components: {
                ZonesCheckbox: i.a
            },
            props: {
                zones: {
                    type: Array
                }
            },
            data: function() {
                return {
                    selected: [],
                    selected_tx: []
                };
            },
            onUnload: function() {
                this.reset();
            },
            methods: {
                change: function(t, e) {
                    this.selected = t, this.selected_tx = e;
                },
                reset: function() {
                    this.selected = [], this.selected_tx = [];
                },
                confirm: function() {
                    this.$emit("change", this.selected.join(","), this.selected_tx.join(","));
                }
            }
        };
    },
    Yobk: function(t, e, n) {
        var i = n("77Pl"), r = n("qio6"), o = n("xnc9"), a = n("ax3d")("IE_PROTO"), s = function() {}, c = function() {
            var t, e = n("ON07")("iframe"), i = o.length;
            for (e.style.display = "none", n("RPLV").appendChild(e), e.src = "javascript:", 
            (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), 
            t.close(), c = t.F; i--; ) delete c.prototype[o[i]];
            return c();
        };
        t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (s.prototype = i(t), n = new s(), s.prototype = null, n[a] = t) : n = c(), 
            void 0 === e ? n : r(n, e);
        };
    },
    YtFr: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", t._l(t.list, function(e, i) {
                    return n("div", {
                        key: i,
                        class: e.class,
                        attrs: {
                            "data-item": e,
                            "data-index": i
                        }
                    }, [ n("house-item", {
                        attrs: {
                            type: t.item_type,
                            item: e,
                            index: i,
                            mpcomid: "0-" + i
                        }
                    }) ], 1);
                }));
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    "Z/pf": function(t, e, n) {
        var i = n("7gdG");
        e.a = {
            getHistory: function(t) {
                return n.i(i.a)("tim_sessions?status=all", {
                    page: t,
                    per: 20
                }, {
                    loading: !0
                });
            },
            getHistoryChat: function(t, e) {
                return n.i(i.a)("tim_sessions/" + t + "/tim_messages", {
                    page: e,
                    per: 20
                }, {
                    loading: !0
                });
            }
        };
    },
    Z3Ef: function(t, e) {},
    ZAlt: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement;
                return (t._self._c || e)("input", {
                    attrs: {
                        focus: t.focus,
                        type: t.type,
                        name: t.name,
                        disabled: t.disabled,
                        placeholder: t.placeholder,
                        className: t.className,
                        value: t.currentValue,
                        "cursor-spacing": t.cursorSpacing,
                        "adjust-position": t.adjustPosition,
                        "confirm-hold": t.confirmHold,
                        "confirm-type": t.confirmType,
                        eventid: "0"
                    },
                    on: {
                        focus: function(e) {
                            t.$emit("focus");
                        },
                        blur: function(e) {
                            t.$emit("blur");
                        },
                        confirm: t.onConfirm,
                        input: t.handleInput
                    }
                });
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    ZaQb: function(t, e, n) {
        var i = n("EqjI"), r = n("77Pl"), o = function(t, e) {
            if (r(t), !i(e) && null !== e) throw TypeError(e + ": can't set as prototype!");
        };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, i) {
                try {
                    (i = n("+ZMJ")(Function.call, n("LKZe").f(Object.prototype, "__proto__").set, 2))(t, []), 
                    e = !(t instanceof Array);
                } catch (t) {
                    e = !0;
                }
                return function(t, n) {
                    return o(t, n), e ? t.__proto__ = n : i(t, n), t;
                };
            }({}, !1) : void 0),
            check: o
        };
    },
    Zrlr: function(t, e, n) {
        e.__esModule = !0, e.default = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        };
    },
    Zx67: function(t, e, n) {
        t.exports = {
            default: n("fS6E"),
            __esModule: !0
        };
    },
    Zzip: function(t, e, n) {
        t.exports = {
            default: n("/n6Q"),
            __esModule: !0
        };
    },
    aAfS: function(t, e) {},
    aFKp: function(t, e, n) {
        var i = n("0jG4");
        e.a = {
            data: function() {
                return {
                    hasNotice: !1,
                    hasMsg: !1
                };
            },
            onShow: function() {
                this.getNewMsgLen();
            },
            onUnload: function() {},
            methods: {
                getNewMsgLen: function() {
                    var t = this;
                    i.a.getNewMsgLen().then(function(e) {
                        var n = e.noticeCount, i = e.msgCount;
                        t.hasNotice = Boolean(n), t.hasMsg = Boolean(i), n || i ? wx.showTabBarRedDot && wx.showTabBarRedDot({
                            index: 3,
                            success: function(t) {},
                            fail: function(t) {
                                console.error(t);
                            }
                        }) : wx.hideTabBarRedDot && wx.hideTabBarRedDot({
                            index: 3,
                            success: function(t) {},
                            fail: function(t) {
                                console.error(t);
                            }
                        });
                    });
                }
            }
        };
    },
    aITl: function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "a", function() {
            return r;
        });
        var i = function(t) {
            var e = t.content_type, n = t.building;
            t.house_link = n ? "/pages/building/main?building_id=" + n.id : "", "blog" === e && t.content_body.text.length > 135 && (t.content_body.fold_text = t.content_body.text.substring(0, 135) + "...", 
            t.fold = !0, t.show_fold = !0);
            var i = t.content_body.photos || [];
            return i.length > 1 ? t.content_body.photos_little = i.map(function(t) {
                return t + "?x-oss-process=image/resize,w_152,h_152";
            }) : t.content_body.photos_little = i.map(function(t) {
                return t + "?x-oss-process=image/resize,w_480,h_480";
            }), t.can_comment = "comment" !== t.content_type && "weixin_article" !== t.content_type, 
            t;
        }, r = function(t) {
            return t.map(i);
        };
    },
    aOzN: function(t, e) {},
    aYUx: function(t, e) {},
    "am+S": function(t, e) {},
    atWv: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "trade-data__bottom"
                }, [ n("div", {
                    staticClass: "qrbox"
                }, [ n("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/qr/chengdu/jysj.jpeg"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "text"
                      }, [n("p", [t._v("") ]), t._v(" "), n("p", [ t._v("") ]), t._v(" "), n("div", {
                    staticClass: "tip"
                }, [ n("em", [ t._v("关注我们") ]), t._v(" "), n("em", [ t._v("了解更多") ]) ], 1) ], 1) ]), t._v(" "), t.zoon ? n("div", {
                    staticClass: "zoon"
                }, [ t._v("\n "), n("br"), t._v("\n        。\n    ") ], 1) : t._e() ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    ax3d: function(t, e, n) {
        var i = n("e8AB")("keys"), r = n("3Eo+");
        t.exports = function(t) {
            return i[t] || (i[t] = r(t));
        };
    },
    "b/Gi": function(t, e, n) {
        var i = n("OQ2b"), r = function(t, e) {
            n.i(i.a)(t, function() {
                wx.navigateTo({
                    url: "/pages/consultants/card/main?" + e
                });
            }, "需要认证用户信息才可以查看置业顾问");
        };
        e.a = {
            methods: {
                goCard: function(t) {
                    var e = t.currentTarget.dataset.id;
                    r(t, "id=" + e);
                },
                goCardFromExcellenct: function(t) {
                    var e = t.currentTarget.dataset.id;
                    r(t, "id=" + e + "&from=excellent_consultants");
                }
            }
        };
    },
    bM0J: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return t.canvasId ? n("canvas", {
                    staticClass: "f2-canvas",
                    attrs: {
                        id: t.canvasId,
                        canvasId: t.canvasId,
                        init: t.init,
                        eventid: "0"
                    },
                    on: {
                        touchstart: t.touchStart,
                        touchmove: t.touchMove,
                        touchend: t.touchEnd,
                        tap: t.press
                    }
                }) : t._e();
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    bOdI: function(t, e, n) {
        e.__esModule = !0;
        var i, r = (i = n("C4MV")) && i.__esModule ? i : {
            default: i
        };
        e.default = function(t, e, n) {
            return e in t ? (0, r.default)(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        };
    },
    bRrM: function(t, e, n) {
        var i = n("7KvD"), r = n("FeBl"), o = n("evD5"), a = n("+E39"), s = n("dSzd")("species");
        t.exports = function(t) {
            var e = "function" == typeof r[t] ? r[t] : i[t];
            a && e && !e[s] && o.f(e, s, {
                configurable: !0,
                get: function() {
                    return this;
                }
            });
        };
    },
    bmxa: function(t, e, n) {
        var i = n("Dd8w"), r = n.n(i), o = function(t) {
            return r()({}, t, {
                view_id: "item-" + t.id
            });
        };
        e.a = {
            name: "SEARCH_SELECT",
            data: function() {
                return {
                    keyword: ""
                };
            },
            computed: {
                select_view_id: function() {
                    return "item-" + this.selected;
                },
                options: function() {
                    var t = this;
                    return this.keyword ? this.houses.filter(function(e) {
                        return e.name.indexOf(t.keyword) > -1;
                    }).sort(function(e, n) {
                        return function(t, e, n) {
                            return t.indexOf(n) - e.indexOf(n);
                        }(e.name, n.name, t.keyword);
                    }).map(o) : this.houses.map(o);
                }
            },
            methods: {
                submit: function(t) {
                    var e = t.target.value.keyword.trim();
                    this.keyword = e;
                },
                select: function(t) {
                    var e = t.currentTarget.dataset.index;
                    this.$emit("change", this.options[e]), this.$emit("hide");
                },
                hide: function() {
                    this.$emit("hide");
                }
            },
            props: {
                show: {
                    type: Boolean,
                    default: function() {
                        return !1;
                    }
                },
                houses: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                selected: {
                    type: Number
                }
            }
        };
    },
    "c/Tr": function(t, e, n) {
        t.exports = {
            default: n("5zde"),
            __esModule: !0
        };
    },
    c2EA: function(t, e, n) {
        var i = {
            render: function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", [ e("network-tip", {
                    attrs: {
                        mpcomid: "0"
                    }
                }), this._v(" "), this.show_home && !this.has_chart ? e("div", [ e("div", {
                    staticClass: "shadow"
                }, [ e("form", {
                    attrs: {
                        "report-submit": "true",
                        eventid: "0"
                    },
                    on: {
                        submit: this.goHome
                    }
                }, [ e("button", {
                    staticClass: "shadow-button",
                    attrs: {
                        formType: "submit"
                    }
                }, [ e("a", {
                    staticClass: "back-home"
                }, [ e("img", {
                    attrs: {
                        src: "/static/img/back-home.png",
                        "lazy-load": !0
                    }
                }), this._v(" "), e("span", [ this._v("首页") ]) ]) ]) ], 1) ], 1) ]) : this._e() ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    cRbS: function(t, e, n) {
        var i = n("//Fk"), r = n.n(i), o = n("Zrlr"), a = n.n(o), s = n("wxAW"), c = n.n(s), u = n("OvRC"), l = n.n(u), f = n("woOf"), d = n.n(f), p = n("Zx67"), h = n.n(p), g = n("LsOa"), m = (n.n(g), 
        n("vLgD")), v = {
            map: {},
            mq: [],
            running: [],
            MAX_REQUEST: 3,
            push: function(t) {
                for (t.t = +new Date(); this.mq.indexOf(t.t) > -1 || this.running.indexOf(t.t) > -1; ) t.t += 10 * Math.random() >> 0;
                this.mq.push(t.t), this.map[t.t] = t;
            },
            next: function() {
                var t = this;
                if (0 !== this.mq.length && this.running.length < this.MAX_REQUEST - 1) {
                    var e = this.mq.shift(), i = this.map[e], r = i.complete;
                    return i.complete = function() {
                        for (var e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
                        t.running.splice(t.running.indexOf(i.t), 1), delete t.map[i.t], r && r.apply(i, n), 
                        t.next();
                    }, this.running.push(i.t), n.i(g.request)(i);
                }
            },
            request: function(t) {
                return t = "string" == typeof (t = t || {}) ? {
                    url: t
                } : t, this.push(t), this.next();
            }
        }, _ = function(t) {
            var e = h()(t);
            return d()({}, l()(e), t);
        }, y = function() {
            function t(e) {
                var n = this;
                a()(this, t), this.configure = {
                    baseURL: "",
                    headers: {},
                    method: "GET",
                    data: {},
                    fuzz: !1
                }, this.interceptors = {
                    request: {
                        prepare: "",
                        done: "",
                        use: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = arguments[2], r = t && t(n.configure);
                            n.configure = d()(n.configure, r || {}), n.interceptors.request.prepare = e || "", 
                            n.interceptors.request.done = i || "";
                        }
                    },
                    response: {
                        before: "",
                        error: "",
                        use: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", r = t && t(n.configure);
                            n.configure = d()(n.configure, r || {}), n.interceptors.response.error = e || "", 
                            n.interceptors.response.before = i || "";
                        }
                    }
                }, this.configure = d()(this.configure, e);
            }
            return c()(t, [ {
                key: "get",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return this.request("GET", t, e, n);
                }
            }, {
                key: "post",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return this.request("POST", t, e, n);
                }
            }, {
                key: "options",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return this.request("OPTIONS", t, e, n);
                }
            }, {
                key: "head",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return this.request("HEAD", t, e, n);
                }
            }, {
                key: "put",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return this.request("PUT", t, e, n);
                }
            }, {
                key: "delete",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return this.request("DELETE", t, e, n);
                }
            }, {
                key: "trace",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return this.request("TRACE", t, e, n);
                }
            }, {
                key: "connect",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return this.request("CONNECT", t, e, n);
                }
            }, {
                key: "request",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = arguments[1], n = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                    "" !== this.interceptors.request.prepare && this.interceptors.request.prepare(this);
                    var a = _(this.configure.data);
                    i = d()(a, i), t = t || this.configure.method, 0 !== e.indexOf("https") && (e = this.configure.baseURL + e);
                    var s = {
                        url: e,
                        method: t || this.configure.method,
                        data: i,
                        header: o || _(this.configure.headers),
                        success: function(t) {},
                        fail: function(t) {},
                        complete: function(t) {},
                        fuzz: this.configure.fuzz
                    };
                    return s.fuzz = 0 === e.indexOf(m.b), "" !== this.interceptors.request.done && (s = this.interceptors.request.done.call(this, s)), 
                    new r.a(function(t, e) {
                        [ "fail", "success", "complete" ].forEach(function(i) {
                            s[i] = function() {
                                for (var r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                                "success" === i ? ("" !== n.interceptors.response.before && (o = n.interceptors.response.before.apply(n, o)), 
                                t(o)) : "fail" === i && ("" !== n.interceptors.response.error && (o = n.interceptors.response.error.call(n, o, {
                                    url: s.url,
                                    method: s.method
                                })), e(o));
                            };
                        }), v.request(s);
                    });
                }
            } ], [ {
                key: "create",
                value: function() {
                    return new this(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {});
                }
            } ]), t;
        }();
        e.a = y;
    },
    crlp: function(t, e, n) {
        var i = n("7KvD"), r = n("FeBl"), o = n("O4g8"), a = n("Kh4W"), s = n("evD5").f;
        t.exports = function(t) {
            var e = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
            "_" == t.charAt(0) || t in e || s(e, t, {
                value: a.f(t)
            });
        };
    },
    d1Jf: function(t, e, n) {
        var i = n("zRd2"), r = n("sGH+"), o = n("ybqe")(i.a, r.a, function(t) {
            n("JE30");
        }, "data-v-402ccbd2", null);
        e.a = o.exports;
    },
    d7EF: function(t, e, n) {
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        e.__esModule = !0;
        var r = i(n("us/S")), o = i(n("BO1k"));
        e.default = function(t, e) {
            if (Array.isArray(t)) return t;
            if ((0, r.default)(Object(t))) return function(t, e) {
                var n = [], i = !0, r = !1, a = void 0;
                try {
                    for (var s, c = (0, o.default)(t); !(i = (s = c.next()).done) && (n.push(s.value), 
                    !e || n.length !== e); i = !0) ;
                } catch (t) {
                    r = !0, a = t;
                } finally {
                    try {
                        !i && c.return && c.return();
                    } finally {
                        if (r) throw a;
                    }
                }
                return n;
            }(t, e);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    },
    dBb6: function(t, e, n) {
        var i = n("SLll"), r = n("TMCY"), o = n("05lm"), a = n("WjlD"), s = "media", c = "weixin", u = {
            key: s,
            name: "自媒体文章"
        }, l = {
            key: c,
            name: "楼盘公众号"
        }, f = [ u, l ];
        e.a = {
            data: function() {
                return {
                    media: [],
                    weixin: [],
                    tabs: f,
                    selected_type: s,
                    show: !1
                };
            },
            computed: {
                items: function() {
                    return this[this.selected_type];
                }
            },
            onUnload: function() {
                this.reset();
            },
            watch: {
                loading: {
                    immediate: !0,
                    handler: function(t) {
                        t ? this.reset() : this.getData();
                    }
                }
            },
            methods: {
                reset: function() {
                    this.media = [], this.weixin = [], this.weixin_account_id = "", this.selected_type = s, 
                    this.show = !1;
                },
                getData: function() {
                    var t = this;
                    i.a.getArticle(this.id, this.weixin_account_id).then(function(e) {
                        var n = e.media, i = e.weixin;
                        t.media = t.has_more ? n.slice(0, 2) : n, t.weixin = t.has_more ? i.slice(0, 2) : i;
                        var r = [];
                        n.length && r.push(u), i.length && r.push(l), t.tabs = r, t.selected_type = n.length ? s : c, 
                        t.show = n.length || i.length;
                    });
                },
                changeType: function(t) {
                    this.selected_type = t;
                },
                goMore: function() {
                    this.$emit("goMore");
                },
                onLike: function(t, e, n) {
                    var i = "Fc::WeixinArticle";
                    this.selected_type === s && (i = "Fc::BuildingFeed"), r.a.like(i, t, e).then(n);
                }
            },
            components: {
                ArticleItem: a.a,
                CommonTabs: o.a
            },
            props: {
                id: {
                    type: Number
                },
                weixin_account_id: {
                    type: Number
                },
                has_more: {
                    type: Boolean,
                    default: !1
                },
                loading: {
                    type: Boolean,
                    default: !1
                }
            }
        };
    },
    dNDb: function(t, e) {
        t.exports = function(t) {
            try {
                return {
                    e: !1,
                    v: t()
                };
            } catch (t) {
                return {
                    e: !0,
                    v: t
                };
            }
        };
    },
    dSzd: function(t, e, n) {
        var i = n("e8AB")("wks"), r = n("3Eo+"), o = n("7KvD").Symbol, a = "function" == typeof o;
        (t.exports = function(t) {
            return i[t] || (i[t] = a && o[t] || (a ? o : r)("Symbol." + t));
        }).store = i;
    },
    dY0y: function(t, e, n) {
        var i = n("dSzd")("iterator"), r = !1;
        try {
            var o = [ 7 ][i]();
            o.return = function() {
                r = !0;
            }, Array.from(o, function() {
                throw 2;
            });
        } catch (t) {}
        t.exports = function(t, e) {
            if (!e && !r) return !1;
            var n = !1;
            try {
                var o = [ 7 ], a = o[i]();
                a.next = function() {
                    return {
                        done: n = !0
                    };
                }, o[i] = function() {
                    return a;
                }, t(o);
            } catch (t) {}
            return n;
        };
    },
    "dj+L": function(t, e, n) {
        e.a = {
            methods: {
                onChange: function(t) {
                    this.$emit("change", t.currentTarget.dataset.key);
                }
            },
            props: {
                width: {
                    type: String
                },
                tabs: {
                    type: Array,
                    validator: function(t) {
                        return !value.length || value.every(function(t) {
                            var e = t.key, n = t.name;
                            return void 0 != e && void 0 != n;
                        });
                    }
                },
                selected: {
                    type: [ String, Number ]
                }
            }
        };
    },
    doS3: function(t, e, n) {
        var i = n("fZjL"), r = n.n(i), o = n("bOdI"), a = n.n(o), s = n("Dd8w"), c = n.n(s);
        e.a = {
            methods: {
                getSceneParam: function() {
                    var t = getCurrentPages(), e = t ? t.length - 1 : 0, n = t && t[e].options ? t[e].options : this.$root.$mp.query, i = n.scene;
                    return i && (n = function(t) {
                        if (0 === t.indexOf("bb")) {
                            var e = t.split("_").splice(1);
                            return {
                                building_id: e[0],
                                user_id: e[1]
                            };
                        }
                        return 0 === t.indexOf("qfb") ? {
                            building_id: t.split("_").splice(1)[0],
                            share_by: t
                        } : decodeURIComponent(t).split("&").reduce(function(t, e) {
                            var n = e.split("=");
                            return c()({}, t, a()({}, n[0], n[1]));
                        }, {});
                    }(i)), n;
                },
                getSceneRedirectParam: function() {
                    var t = this.getSceneParam(), e = "", n = this.$root.$mp.query.scene;
                    return e += r()(t).map(function(e) {
                        return e + "=" + t[e];
                    }).join("&"), n && (0 === n.indexOf("bb") && (e += "&share_by=" + n), e += "&scene_params=" + n), 
                    e;
                }
            }
        };
    },
    "e/Hi": function(t, e, n) {
        var i = n("C4MV"), r = n.n(i), o = n("fZjL"), a = n.n(o), s = n("Zx67"), c = n.n(s), u = n("Zrlr"), l = n.n(u), f = n("wxAW"), d = n.n(f), p = n("zwoO"), h = n.n(p), g = n("Pf15"), m = n.n(g), v = n("0Jim"), _ = {
            fontSize: "FontSize",
            opacity: "GlobalAlpha",
            lineDash: "LineDash",
            textAlign: "TextAlign"
        }, y = {
            start: "left",
            end: "right"
        }, x = function(t) {
            function e(t) {
                l()(this, e);
                var n = h()(this, (e.__proto__ || c()(e)).call(this)), i = n;
                return i.ctx = t, i.style = {}, i._initContext(t), n;
            }
            return m()(e, t), d()(e, [ {
                key: "getContext",
                value: function(t) {
                    if ("2d" === t) return this.ctx;
                }
            }, {
                key: "_initContext",
                value: function(t) {
                    a()(_).map(function(e) {
                        r()(t, e, {
                            set: function(n) {
                                "textAlign" === e && (n = y[n] ? y[n] : n), t["set" + _[e]](n);
                            }
                        });
                    });
                }
            } ]), e;
        }(n.n(v).a);
        e.a = x;
    },
    e2qI: function(t, e, n) {
        var i = n("riPv");
        e.a = {
            data: function() {
                return {
                    search_hot_keyword: ""
                };
            },
            onReady: function() {
                this.getHotKeyword(this.show_hot_keyword);
            },
            computed: {
                input_placeholder: function() {
                    return this.search_hot_keyword ? "搜索：" + this.search_hot_keyword : this.placeholder || "按楼盘名字搜索";
                }
            },
            watch: {
                show_hot_keyword: function(t) {
                    this.getHotKeyword(t);
                }
            },
            methods: {
                getHotKeyword: function(t) {
                    var e = this;
                    t && i.a.getKeyword().then(function(t) {
                        t.length && (e.search_hot_keyword = t[0].content || t[0].target.name);
                    });
                },
                onClick: function() {
                    this.$emit("click");
                },
                onSearch: function(t) {
                    this.$emit("search", t.target.value);
                }
            },
            props: {
                placeholder: {
                    type: String
                },
                can_search: {
                    type: Number,
                    default: !0
                },
                show_hot_keyword: {
                    type: Boolean,
                    default: !1
                }
            }
        };
    },
    e6n0: function(t, e, n) {
        var i = n("evD5").f, r = n("D2L2"), o = n("dSzd")("toStringTag");
        t.exports = function(t, e, n) {
            t && !r(t = n ? t : t.prototype, o) && i(t, o, {
                configurable: !0,
                value: e
            });
        };
    },
    e8AB: function(t, e, n) {
        var i = n("FeBl"), r = n("7KvD"), o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        (t.exports = function(t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {});
        })("versions", []).push({
            version: i.version,
            mode: n("O4g8") ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        });
    },
    eMhg: function(t, e, n) {
        var i = n("6xLo"), r = n("71gO"), o = n("ybqe")(i.a, r.a, function(t) {
            n("2oOV");
        }, "data-v-4fd887d7", null);
        e.a = o.exports;
    },
    evD5: function(t, e, n) {
        var i = n("77Pl"), r = n("SfB7"), o = n("MmMw"), a = Object.defineProperty;
        e.f = n("+E39") ? Object.defineProperty : function(t, e, n) {
            if (i(t), e = o(e, !0), i(n), r) try {
                return a(t, e, n);
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t;
        };
    },
    exh5: function(t, e, n) {
        var i = n("kM2E");
        i(i.S, "Object", {
            setPrototypeOf: n("ZaQb").set
        });
    },
    fBQ2: function(t, e, n) {
        var i = n("evD5"), r = n("X8DO");
        t.exports = function(t, e, n) {
            e in t ? i.f(t, e, r(0, n)) : t[e] = n;
        };
    },
    fJUb: function(t, e, n) {
        var i = n("77Pl"), r = n("EqjI"), o = n("qARP");
        t.exports = function(t, e) {
            if (i(t), r(e) && e.constructor === t) return e;
            var n = o.f(t);
            return (0, n.resolve)(e), n.promise;
        };
    },
    fS6E: function(t, e, n) {
        n("Kh5d"), t.exports = n("FeBl").Object.getPrototypeOf;
    },
    fWfb: function(e, n, i) {
        var r = i("7KvD"), o = i("D2L2"), a = i("+E39"), s = i("kM2E"), c = i("880/"), u = i("06OY").KEY, l = i("S82l"), f = i("e8AB"), d = i("e6n0"), p = i("3Eo+"), h = i("dSzd"), g = i("Kh4W"), m = i("crlp"), v = i("Xc4G"), _ = i("7UMu"), y = i("77Pl"), x = i("EqjI"), b = i("TcQ7"), w = i("MmMw"), C = i("X8DO"), S = i("Yobk"), I = i("Rrel"), M = i("LKZe"), T = i("evD5"), A = i("lktj"), k = M.f, E = T.f, O = I.f, P = r.Symbol, F = r.JSON, D = F && F.stringify, R = h("_hidden"), N = h("toPrimitive"), L = {}.propertyIsEnumerable, G = f("symbol-registry"), U = f("symbols"), B = f("op-symbols"), j = Object.prototype, q = "function" == typeof P, $ = r.QObject, z = !$ || !$.prototype || !$.prototype.findChild, V = a && l(function() {
            return 7 != S(E({}, "a", {
                get: function() {
                    return E(this, "a", {
                        value: 7
                    }).a;
                }
            })).a;
        }) ? function(t, e, n) {
            var i = k(j, e);
            i && delete j[e], E(t, e, n), i && t !== j && E(j, e, i);
        } : E, Y = function(t) {
            var e = U[t] = S(P.prototype);
            return e._k = t, e;
        }, H = q && "symbol" == t(P.iterator) ? function(e) {
            return "symbol" == (void 0 === e ? "undefined" : t(e));
        } : function(t) {
            return t instanceof P;
        }, K = function t(e, n, i) {
            return e === j && t(B, n, i), y(e), n = w(n, !0), y(i), o(U, n) ? (i.enumerable ? (o(e, R) && e[R][n] && (e[R][n] = !1), 
            i = S(i, {
                enumerable: C(0, !1)
            })) : (o(e, R) || E(e, R, C(1, {})), e[R][n] = !0), V(e, n, i)) : E(e, n, i);
        }, X = function(t, e) {
            y(t);
            for (var n, i = v(e = b(e)), r = 0, o = i.length; o > r; ) K(t, n = i[r++], e[n]);
            return t;
        }, W = function(t) {
            var e = L.call(this, t = w(t, !0));
            return !(this === j && o(U, t) && !o(B, t)) && (!(e || !o(this, t) || !o(U, t) || o(this, R) && this[R][t]) || e);
        }, J = function(t, e) {
            if (t = b(t), e = w(e, !0), t !== j || !o(U, e) || o(B, e)) {
                var n = k(t, e);
                return !n || !o(U, e) || o(t, R) && t[R][e] || (n.enumerable = !0), n;
            }
        }, Q = function(t) {
            for (var e, n = O(b(t)), i = [], r = 0; n.length > r; ) o(U, e = n[r++]) || e == R || e == u || i.push(e);
            return i;
        }, Z = function(t) {
            for (var e, n = t === j, i = O(n ? B : b(t)), r = [], a = 0; i.length > a; ) !o(U, e = i[a++]) || n && !o(j, e) || r.push(U[e]);
            return r;
        };
        q || (c((P = function() {
            if (this instanceof P) throw TypeError("Symbol is not a constructor!");
            var t = p(arguments.length > 0 ? arguments[0] : void 0);
            return a && z && V(j, t, {
                configurable: !0,
                set: function e(n) {
                    this === j && e.call(B, n), o(this, R) && o(this[R], t) && (this[R][t] = !1), V(this, t, C(1, n));
                }
            }), Y(t);
        }).prototype, "toString", function() {
            return this._k;
        }), M.f = J, T.f = K, i("n0T6").f = I.f = Q, i("NpIQ").f = W, i("1kS7").f = Z, a && !i("O4g8") && c(j, "propertyIsEnumerable", W, !0), 
        g.f = function(t) {
            return Y(h(t));
        }), s(s.G + s.W + s.F * !q, {
            Symbol: P
        });
        for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et; ) h(tt[et++]);
        for (var nt = A(h.store), it = 0; nt.length > it; ) m(nt[it++]);
        s(s.S + s.F * !q, "Symbol", {
            for: function(t) {
                return o(G, t += "") ? G[t] : G[t] = P(t);
            },
            keyFor: function(t) {
                if (!H(t)) throw TypeError(t + " is not a symbol!");
                for (var e in G) if (G[e] === t) return e;
            },
            useSetter: function() {
                z = !0;
            },
            useSimple: function() {
                z = !1;
            }
        }), s(s.S + s.F * !q, "Object", {
            create: function(t, e) {
                return void 0 === e ? S(t) : X(S(t), e);
            },
            defineProperty: K,
            defineProperties: X,
            getOwnPropertyDescriptor: J,
            getOwnPropertyNames: Q,
            getOwnPropertySymbols: Z
        }), F && s(s.S + s.F * (!q || l(function() {
            var t = P();
            return "[null]" != D([ t ]) || "{}" != D({
                a: t
            }) || "{}" != D(Object(t));
        })), "JSON", {
            stringify: function(t) {
                for (var e, n, i = [ t ], r = 1; arguments.length > r; ) i.push(arguments[r++]);
                if (n = e = i[1], (x(e) || void 0 !== t) && !H(t)) return _(e) || (e = function(t, e) {
                    if ("function" == typeof n && (e = n.call(this, t, e)), !H(e)) return e;
                }), i[1] = e, D.apply(F, i);
            }
        }), P.prototype[N] || i("hJx8")(P.prototype, N, P.prototype.valueOf), d(P, "Symbol"), 
        d(Math, "Math", !0), d(r.JSON, "JSON", !0);
    },
    fZjL: function(t, e, n) {
        t.exports = {
            default: n("jFbC"),
            __esModule: !0
        };
    },
    fb8B: function(t, e, n) {
        var i = {
            render: function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", [ this.show ? e("div", {
                    staticClass: "network-tip"
                }, [ e("icon", {
                    attrs: {
                        type: "warn",
                        size: "48rpx"
                    }
                }), this._v(" "), e("span", [ this._v("当前网络状态不佳，请检查您的网络设置") ]) ], 1) : this._e() ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    fkB2: function(t, e, n) {
        var i = n("UuGF"), r = Math.max, o = Math.min;
        t.exports = function(t, e) {
            return (t = i(t)) < 0 ? r(t + e, 0) : o(t, e);
        };
    },
    fxRn: function(t, e, n) {
        n("+tPU"), n("zQR9"), t.exports = n("g8Ux");
    },
    g2hQ: function(t, e, n) {
        var i = {
            render: function() {
                var t = this.$createElement;
                return (this._self._c || t)("a", {
                    staticClass: "captcha-btn",
                    class: [ {
                        disabled: this.time > 0
                    } ],
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: this.onCaptcha
                    }
                }, [ this._v(this._s(this.text)) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    g7uz: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "comment",
                    attrs: {
                        eventid: "9"
                    },
                    on: {
                        tap: t.goDetail
                    }
                }, [ n("img", {
                    staticClass: "headimg",
                    attrs: {
                        src: t.comment.headimgurl,
                        "lazy-load": !0
                    }
                }), t._v(" "), n("div", {
                    staticClass: "right",
                    class: [ {
                        no_border: t.show_reply.length
                    } ]
                }, [ n("div", {
                    staticClass: "name-wrap"
                }, [ n("span", {
                    staticClass: "nickname",
                    class: {
                        consult: t.comment.consultant_id
                    },
                    attrs: {
                        "data-id": t.comment.consultant_id,
                        eventid: "0"
                    },
                    on: {
                        tap: function(e) {
                            e.stopPropagation(), t.onConsult(e);
                        }
                    }
                }, [ t._v("\n                " + t._s(t.comment.nickname || "匿名用户") + "\n                "), t.comment.consultant_id ? n("img", {
                    attrs: {
                        src: "/static/img/consult-headimg.png"
                    }
                }) : t._e() ]), t._v(" "), n("span", {
                    staticClass: "date"
                }, [ t._v(t._s(t.comment.created_date)) ]) ]), t._v(" "), n("div", {
                    staticClass: "top-right",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        tap: function(e) {
                            e.stopPropagation(), t.stopClick(e);
                        }
                    }
                }, [ n("i", {
                    staticClass: "liked",
                    class: [ {
                        active: t.comment.is_liked
                    } ],
                    attrs: {
                        "data-index": t.index,
                        "data-id": t.comment.id,
                        eventid: "1"
                    },
                    on: {
                        tap: function(e) {
                            e.preventDefault(), t.onLike(e);
                        }
                    }
                }, [ t.comment.is_liked ? n("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/icon/liked.png"
                    }
                }) : n("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/icon/like.png"
                    }
                }), t._v(" "), n("span", [ t._v(t._s(t.comment.like_count)) ]) ]), t._v(" "), t.comment.can_reply ? n("button", {
                    staticClass: "reply-msg shadow-button",
                    attrs: {
                        "open-type": "getUserInfo",
                        eventid: "2"
                    },
                    on: {
                        getuserinfo: t.goReply
                    }
                }, [ n("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/icon/msg.png"
                    }
                }) ]) : t._e() ], 1), t._v(" "), n("p", {
                    staticClass: "content"
                }, [ t._v(t._s(t.comment.content)) ]), t._v(" "), t.comment.reply_comments.total_count ? n("div", {
                    staticClass: "reply-wrap",
                    attrs: {
                        eventid: "8"
                    },
                    on: {
                        tap: function(e) {
                            e.stopPropagation(), t.stopClick(e);
                        }
                    }
                }, [ n("i"), t._v(" "), t._l(t.show_reply, function(e, i) {
                    return n("div", {
                        key: i
                    }, [ e.consultant_id ? n("div", {
                        staticClass: "reply",
                        attrs: {
                            "data-id": e.consultant_id,
                            eventid: "5-" + i
                        },
                        on: {
                            tap: function(e) {
                                e.preventDefault(), t.onConsult(e);
                            }
                        }
                    }, [ n("span", {
                        staticClass: "nickname active"
                    }, [ n("span", [ t._v(t._s(e.nickname)) ]), t._v(" "), e.parent_username ? n("span", [ n("i", [ t._v("回复") ]), t._v(t._s(e.parent_username)) ], 1) : t._e(), t._v(" "), e.consultant_id ? n("img", {
                        attrs: {
                            src: "/static/img/consult-headimg.png"
                        }
                    }) : t._e(), t._v("\n                        ：\n                        "), n("a", {
                        staticClass: "contact"
                    }, [ t._v("点击联系") ]) ]), t._v(" "), n("p", [ t._v(t._s(e.content)) ]) ], 1) : n("button", {
                        staticClass: "reply",
                        attrs: {
                            "data-index": i,
                            "open-type": "getUserInfo",
                            eventid: "4-" + i
                        },
                        on: {
                            getuserinfo: t.replyUser
                        }
                    }, [ n("div", {
                        staticClass: "nickname"
                    }, [ n("span", [ t._v(t._s(e.nickname)) ]), t._v(" "), e.parent_username ? n("span", [ n("i", [ t._v("回复") ]), t._v(t._s(e.parent_username)) ], 1) : t._e() ]), t._v("：\n                    "), n("p", [ t._v(t._s(e.content)) ]) ], 1) ], 1);
                }), t._v(" "), !t.show_all_reply && t.comment.reply_comments.items.length > 3 ? n("a", {
                    staticClass: "link",
                    attrs: {
                        eventid: "7"
                    },
                    on: {
                        tap: t.toggleReplyShow
                    }
                }, [ t._v("\n                展开全部" + t._s(t.comment.reply_comments.items.length) + "条回复\n            ") ]) : t.comment.reply_comments.items.length > 3 ? n("a", {
                    staticClass: "link",
                    attrs: {
                        eventid: "6"
                    },
                    on: {
                        tap: t.toggleReplyShow
                    }
                }, [ t._v("\n                收起\n            ") ]) : t._e() ], 2) : t._e() ], 1) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    g8Ux: function(t, e, n) {
        var i = n("77Pl"), r = n("3fs2");
        t.exports = n("FeBl").getIterator = function(t) {
            var e = r(t);
            if ("function" != typeof e) throw TypeError(t + " is not iterable!");
            return i(e.call(t));
        };
    },
    gixa: function(t, e, n) {
        var i = {
            render: function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "map-wrap"
                }, [ e("map", {
                    attrs: {
                        markers: this.markers,
                        longitude: this.house.longitude,
                        latitude: this.house.latitude,
                        "include-points": this.points,
                        eventid: "1"
                    },
                    on: {
                        tap: this.goMap
                    }
                }, [ e("cover-image", {
                    staticClass: "map-link",
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/building/around_facilities/map/btn-img.png",
                        eventid: "0",
                        mpcomid: "0"
                    },
                    on: {
                        tap: this.goMap
                    }
                }) ], 1) ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    gn4O: function(t, e) {},
    gpNG: function(t, e, n) {
        var i = n("0jG4"), r = n("FoLj");
        e.a = {
            data: function() {
                return {
                    content: "",
                    sending: !1,
                    bottom: 0
                };
            },
            watch: {
                show: function() {
                    this.content = "", this.sending = !1;
                }
            },
            computed: {
                placeholder: function() {
                    var t = this.reply_user.nickname || this.reply_item.nickname;
                    return t ? "回复@" + t : "我要说两句";
                }
            },
            methods: {
                onBlur: function() {
                    this.bottom = 0;
                },
                changeBottom: function(t) {
                    console.error(t), this.bottom = t + "px";
                },
                submitComment: function(t) {
                    var e = this.content.trim();
                    this.getUserInfo(t.mp, e);
                },
                getUserInfo: function(t, e) {
                    var n = this;
                    if (!this.sending) {
                        this.sending = !0;
                        var r = t.detail.userInfo, o = this.reply_user.id || this.reply_item.id;
                        if (r) {
                            if ("" === e) return this.sending = !1, void wx.showToast({
                                title: "您还未填写评论内容",
                                icon: "none"
                            });
                            wx.setStorage({
                                key: "userInfo",
                                data: r
                            }), i.a.updateWxUserInfo(t.detail).then(function() {
                                n.submit(e, o, r);
                            });
                        } else this.sending = !1, wx.showToast({
                            title: "没有授权用户信息，无法评论",
                            icon: "none"
                        });
                    }
                },
                submit: function(t, e, n) {
                    var r = this, o = this.$root.$mp.query.building_id, a = {
                        content: t
                    };
                    e && (a.parent_comment_id = e), i.a.postBuildingComment(o, a).then(function(t) {
                        r.sending = !1, t && r.$emit("changeComments", t, r.reply_item.id);
                    });
                },
                hide: function() {
                    this.$emit("hide");
                }
            },
            components: {
                LazyTextarea: r.a
            },
            props: {
                reply_item: {
                    type: Object
                },
                reply_user: {
                    type: Object
                },
                show: {
                    type: Boolean
                }
            }
        };
    },
    gpz9: function(t, e, n) {
        var i = n("qkKR"), r = n("kmyH"), o = n("ybqe")(i.a, r.a, function(t) {
            n("MEje");
        }, "data-v-fb611840", null);
        e.a = o.exports;
    },
    "h+Hr": function(t, e, n) {
        var i = n("Dd8w"), r = n.n(i), o = function(t, e) {
            return t.forEach(function(t) {
                t.selected = e.indexOf(t.value) > -1;
            }), t;
        };
        e.a = {
            props: {
                selected: {
                    type: Array
                },
                zones: {
                    type: Array
                }
            },
            data: function() {
                return {
                    inner_selected: this.selected,
                    opts: o(this.zones, this.selected)
                };
            },
            watch: {
                selected: function(t, e) {
                    t != e && (this.inner_selected = t, this.opts = o(this.zones, t));
                }
            },
            methods: {
                onSelect: function(t, e) {
                    var n = this.inner_selected, i = n.indexOf(t), o = this.opts[e];
                    this.$set(this.opts, e, r()({}, o, {
                        selected: !o.selected
                    })), -1 === i ? n.push(t) : this.$delete(this.inner_selected, i);
                    var a = this.opts.filter(function(t) {
                        return t.selected;
                    }).map(function(t) {
                        return t.text;
                    });
                    this.$emit("change", this.inner_selected, a);
                }
            }
        };
    },
    h65t: function(t, e, n) {
        var i = n("UuGF"), r = n("52gC");
        t.exports = function(t) {
            return function(e, n) {
                var o, a, s = String(r(e)), c = i(n), u = s.length;
                return c < 0 || c >= u ? t ? "" : void 0 : (o = s.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? s.charAt(c) : o : t ? s.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536;
            };
        };
    },
    hGQ5: function(t, e) {
        t.exports = {
            pages: [ "pages/index/main", "pages/add_comment/main", "pages/add_num/main", "pages/building/around_facilities/detail/main", "pages/building/around_facilities/main", "pages/building/around_facilities/map/main", "pages/building/article/main", "pages/building/event/add/main", "pages/building/event/main", "pages/building/img_preview/main", "pages/building/info/main", "pages/building/main", "pages/building/material/main", "pages/building/price/main", "pages/building/reg_predict/main", "pages/chat_list/chat/main", "pages/chat_list/history_detail/main", "pages/chat_list/history/main", "pages/chat_list/main", "pages/check_condition/main", "pages/comments/detail/main", "pages/comments/main", "pages/consultants/card/main", "pages/consultants/filter/main", "pages/consultants/headimgs/main", "pages/consultants/main", "pages/depreciate_rankings/detail/main", "pages/depreciate_rankings/main", "pages/discuess_group/main", "pages/exchange/main", "pages/fangchan_release/main", "pages/history/main", "pages/hot/main", "pages/house_circles/article/main", "pages/house_circles/comments/main", "pages/house_circles/edit/main", "pages/house_circles/main", "pages/index/search/main", "pages/search/forthcoming/main", "pages/search/latest_opening/main", "pages/interest_forecast/main", "pages/interest_rate/main", "pages/loan_computer/detail/main", "pages/loan_computer/main", "pages/loan_computer/result/main", "pages/mine_detail/main", "pages/mine/bind/main", "pages/mine/main", "pages/personal_center/add_consultant/main", "pages/personal_center/coin/charge/main", "pages/personal_center/coin/main", "pages/personal_center/coin/records/main", "pages/personal_center/consultant_select/main", "pages/personal_center/consultant_bidding/bidding/main", "pages/personal_center/consultant_bidding/main", "pages/personal_center/consultant_rule/main", "pages/personal_center/consultant_score/main", "pages/personal_center/consultant/call_history/main", "pages/personal_center/consultant/main", "pages/personal_center/customer_service/main", "pages/personal_center/favourite/main", "pages/personal_center/house_notification/main", "pages/personal_center/main", "pages/personal_center/notice/main", "pages/personal_center/official_weixin/main", "pages/personal_center/phone_verify/main", "pages/personal_center/question_home/main", "pages/personal_center/questions/main", "pages/personal_center/user_guide/main", "pages/qa/main", "pages/questions/ask/main", "pages/questions/detail/main", "pages/questions/help/main", "pages/questions/main", "pages/reg_step/main", "pages/result/main", "pages/result/search/main", "pages/review_result/main", "pages/review_result/search/main", "pages/second_hand_evalute/main", "pages/second_hand_evalute/result/main", "pages/second_hand_evalute/search/main", "pages/surplus_buildings/main", "pages/update/main", "pages/verify_list/main", "pages/web_notice/main", "pages/web_page/main", "pages/web_qr/main", "pages/web_report_purchase/main", "pages/activity/main", "pages/find_building/main" ]
            
            }
    },
    hINS: function(t, e, n) {
        var i = n("fZjL"), r = n.n(i), o = n("C4MV"), a = n.n(o);
        e.a = function(t, e) {
            return e.forEach(function(e) {
                var n = e.key, i = e.defaultValue, o = "__" + n, s = n + "Watchers";
                t[o] = i, t[s] = [], t["add_" + n + "_watcher"] = function(e, n) {
                    t[s][e] = n, n(t[o]);
                }, t["remove_" + n + "_watcher"] = function(e) {
                    delete t[s][e];
                }, a()(t, n, {
                    set: function(e) {
                        try {
                            t[o] = e;
                            var n = t[s];
                            r()(n).forEach(function(t) {
                                n[t](e);
                            });
                        } catch (t) {
                            console.error(t);
                        }
                    },
                    get: function() {
                        return t[o];
                    }
                });
            }), t;
        };
    },
    hJx8: function(t, e, n) {
        var i = n("evD5"), r = n("X8DO");
        t.exports = n("+E39") ? function(t, e, n) {
            return i.f(t, e, r(1, n));
        } : function(t, e, n) {
            return t[e] = n, t;
        };
    },
    hLwA: function(t, e) {},
    hQLu: function(t, e, n) {
        var i = n("l4Vo"), r = n("fb8B"), o = n("ybqe")(i.a, r.a, function(t) {
            n("TlMU");
        }, "data-v-09f48a74", null);
        e.a = o.exports;
    },
    haIR: function(t, e) {},
    "i/C/": function(t, e, n) {
        n("exh5"), t.exports = n("FeBl").Object.setPrototypeOf;
    },
    iCHG: function(t, e, n) {
        var i = wx.getSystemInfoSync().system.indexOf("iOS") > -1;
        e.a = {
            name: "Coin_Header",
            computed: {
                userHeadimgurl: function() {
                    return this.headimgurl ? this.headimgurl + "?x-oss-process=image/resize,w_114,h_114" : "";
                }
            },
            methods: {
                goCharge: function() {
                    i ? wx.showModal({
                        title: "提示",
                        content: "由于相关规范，iOS功能暂不可用。",
                        showCancel: !1
                    }) : wx.navigateTo({
                        url: "/pages/personal_center/coin/charge/main"
                    });
                }
            },
            props: [ "gold_coins", "score", "show_score", "show_charge", "headimgurl" ]
        };
    },
    iF0A: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("form", {
                    attrs: {
                        "report-submit": !0,
                        eventid: "1"
                    },
                    on: {
                        submit: t.goDetail
                    }
                }, [ n("button", {
                    staticClass: "shadow-button item",
                    attrs: {
                        formType: "submit"
                    }
                }, [ n("div", {
                    staticClass: "image-wrap"
                }, [ n("img", {
                    attrs: {
                        src: t.item.cover_photo_url,
                        "lazy-load": !0,
                        mode: "aspectFill"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "view-wrap",
                    class: [ {
                        hide: !t.item.view_count
                    } ]
                }, [ n("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/home/view.png"
                    }
                }), t._v(" "), n("span", [ t._v(t._s(t.item.view_count || "")) ]) ]) ]), t._v(" "), n("div", {
                    staticClass: "info"
                }, [ n("h1", [ t.item.coupon_exists ? n("span", {
                    staticClass: "coupon"
                }, [ t._v("惠") ]) : t._e(), t._v("\n                " + t._s(t.item.name) + "\n            ") ]), t._v(" "), n("p", [ t._v("\n                " + t._s(t.item.zone) + " " + t._s(t.item.zone_section ? "-" + t.item.zone_section : "") + "\n                " + t._s(t.item.area_range ? " | " + t.item.area_range : "") + "\n            ") ]), t._v(" "), n("div", {
                    staticClass: "num-info"
                }, [ n("div", [ t.item.customized_price && t.item.customized_price.length ? n("span", t._l(t.item.customized_price, function(e, i) {
                    return n("strong", {
                        key: i
                    }, [ t._v("\n                            " + t._s(e) + "\n                        ") ]);
                })) : t.item.price_desc ? n("span", [ n("strong", [ t._v(t._s(t.item.price_desc)) ]) ], 1) : t._e() ]), t._v(" "), n("div", {
                    staticClass: "comment-show",
                    style: [ {
                        display: t.item.comment_count ? "inline-flex" : "none"
                    } ],
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: function(e) {
                            e.stopPropagation(), t.goComments(e);
                        }
                    }
                }, [ n("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/home/msg.png",
                        "lazy-load": !0
                    }
                }), t._v(" "), n("span", [ t._v(t._s(t.item.comment_count)) ]) ]) ]), t._v(" "), n("div", {
                    staticClass: "business-tags"
                }, t._l(t.item.tag_list, function(e, i) {
                    return n("span", {
                        key: i,
                        staticClass: "tag-item"
                    }, [ t._v("\n                    " + t._s(e) + "\n                ") ]);
                })) ], 1) ]) ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    iUbK: function(t, e, n) {
        var i = n("7KvD").navigator;
        t.exports = i && i.userAgent || "";
    },
    iboR: function(t, e, n) {
        var i = n("0jG4"), r = n("lS8P"), o = n("VPS7"), a = [], s = void 0, c = {
            data: function() {
                return {
                    page_show: !0,
                    swiper_show: !1,
                    current_swiper: 0
                };
            },
            onShow: function() {
                if (this.page_show = !0, this.swiper_show && this.banners && this.banners.length) {
                    var t = this.banners[this.current_swiper];
                    t && r.a.log(this.log_type, {
                        id: t.id,
                        pos: this.current_swiper,
                        pos_name: t.position
                    });
                }
            },
            onHide: function() {
                this.page_show = !1;
            },
            onUnload: function() {
                a.forEach(function(t) {
                    t.disconnect();
                }), s && clearTimeout(s);
            },
            methods: {
                logFirstSwiper: function(t) {
                    if (t.length && t[0]) {
                        var e = t[0], n = e.id, i = e.position;
                        this.swiper_show && this.page_show && r.a.log(this.log_type, {
                            id: n,
                            pos: 0,
                            pos_name: i
                        });
                    }
                    r.a.refresh(this.log_type), this.scrollListener();
                },
                animationSwiper: function(t) {
                    if (this.banners.length && this.swiper_show && this.page_show) {
                        var e = t.mp.detail.current, n = this.banners[e], i = n.id, o = n.position;
                        this.current_swiper = e, r.a.log(this.log_type, {
                            id: i,
                            pos: e,
                            pos_name: o
                        });
                    }
                },
                clickSwiperLog: function(t) {
                    var e = t.currentTarget.dataset.id, n = {};
                    this.banners.some(function(t) {
                        if (t.id === e) return n = t, !0;
                    }), i.a.interestingEvent({
                        interesting_id: n.id,
                        event: "click",
                        pos_name: n.position,
                        pos: this.current_swiper
                    });
                },
                scrollListener: function() {
                    var t = this;
                    s = setTimeout(function() {
                        var e = o.a.observerRelativeViewPort("#" + t.swiper_id, {
                            success: function(e) {
                                if (t.swiper_show = e.intersectionRect.bottom > 0, t.swiper_show && t.banners.length) {
                                    var n = t.banners[t.current_swiper];
                                    r.a.log(t.log_type, {
                                        id: n.id,
                                        pos: t.current_swiper,
                                        pos_name: n.position
                                    });
                                }
                            }
                        });
                        e && a.push(e);
                    }, 800);
                }
            }
        };
        e.a = c;
    },
    iimA: function(t, e, n) {
        e.a = {
            data: function() {
                return {
                    opts: [ {
                        text: "清水",
                        value: "清水"
                    }, {
                        text: "精装",
                        value: "精装"
                    } ],
                    selected: ""
                };
            },
            onUnload: function() {
                this.selected = "";
            },
            methods: {
                onSelect: function(t) {
                    this.selected = t.currentTarget.dataset.value;
                },
                reset: function() {
                    this.selected = "";
                },
                confirm: function() {
                    this.$emit("change", this.selected);
                }
            }
        };
    },
    "j+/V": function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "top-filter-wrap"
                }, [ n("div", {
                    staticClass: "select-content"
                }, [ n("layout-checkbox", {
                    attrs: {
                        selected: t.selected,
                        eventid: "0",
                        mpcomid: "0"
                    },
                    on: {
                        change: t.change
                    }
                }) ], 1), t._v(" "), n("div", {
                    staticClass: "bottom"
                }, [ n("button", {
                    staticClass: "btn",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        tap: t.reset
                    }
                }, [ t._v("清空") ]), t._v(" "), n("button", {
                    staticClass: "btn main",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        tap: t.confirm
                    }
                }, [ t._v("确定") ]) ], 1) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    "j+zm": function(t, e, n) {
        e.a = {
            props: {
                zoon: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {};
            },
            methods: {}
        };
    },
    j1WK: function(t, e) {},
    jFbC: function(t, e, n) {
        n("Cdx3"), t.exports = n("FeBl").Object.keys;
    },
    "jKW+": function(t, e, n) {
        var i = n("kM2E"), r = n("qARP"), o = n("dNDb");
        i(i.S, "Promise", {
            try: function(t) {
                var e = r.f(this), n = o(t);
                return (n.e ? e.reject : e.resolve)(n.v), e.promise;
            }
        });
    },
    jtPe: function(t, e, n) {
        var i = n("AvAe"), r = void 0;
        e.a = {
            data: function() {
                return {
                    error_count: 0
                };
            },
            onUnload: function() {
                r && clearTimeout(r);
            },
            methods: {
                errorHandle: function(t) {
                    var e = this;
                    ++this.error_count < 2 ? r = setTimeout(function() {
                        var t;
                        e.src = (t = e.src).replace ? t.replace(/\?x-oss-process=image\/resize,w_(\d*),h_(\d*)/, function() {
                            if (arguments.length > 2) return "?x-oss-process=image/resize,w_" + .8 * Number(arguments.length <= 1 ? void 0 : arguments[1]) + ",h_" + .8 * Number(arguments.length <= 2 ? void 0 : arguments[2]);
                        }) : t;
                    }, 200) : n.i(i.e)(t.mp.detail.errMsg);
                }
            },
            props: {
                mode: {
                    type: String
                },
                shadow: {
                    type: Boolean,
                    default: !0
                },
                src: {
                    type: String
                },
                className: {
                    type: String
                },
                shadowClass: {
                    type: String
                },
                "lazy-load": {
                    type: Boolean,
                    default: !0
                }
            }
        };
    },
    kB8h: function(t, e, n) {
        e.a = "1.10.24";
    },
    kBGL: function(t, e, n) {
        n.d(e, "c", function() {
            return u;
        }), n.d(e, "a", function() {
            return d;
        }), n.d(e, "e", function() {
            return p;
        }), n.d(e, "b", function() {
            return h;
        }), n.d(e, "d", function() {
            return g;
        });
        var i = n("Dd8w"), r = n.n(i), o = n("EoGX"), a = n("0jG4"), s = n("ytBU"), c = n("EoGX"), u = function(t, e) {
            return t.reduce(function(t, n) {
                return e.some(function(t, e) {
                    return [ "msg_random", "msg_time", "msg_seq" ].every(function(e) {
                        return n[e] === t[e];
                    });
                }) || t.push(n), t;
            }, []);
        }, l = function(t, e) {
            return new Date(t.date).getTime() - new Date(e.date).getTime();
        }, f = function(t) {
            s.a.user.get().then(function(e) {
                var n = {
                    identifier: t.identifier,
                    userSig: t.user_sign
                }, i = t.items, a = function() {
                    var t = [], e = 0, n = 0, a = [], s = function(a, s, c, u, l) {
                        return n++, o.c.getHistory({
                            Peer_Account: s,
                            LastMsgTime: Math.round(new Date().getTime() / 1e3),
                            MaxCnt: 15,
                            MsgKey: ""
                        }).then(function(f) {
                            var d = f.msgs, p = f.lastMsgTime, h = f.msgKey;
                            if (e++, n--, d.length) {
                                var g = d.map(function(t) {
                                    return r()({}, t, {
                                        lastTime: t.date,
                                        id: a,
                                        peer_identifier: s,
                                        chatlist_nickname: c,
                                        chatlist_headimg: u || o.d,
                                        unread_count: l
                                    });
                                });
                                t.push({
                                    lastMsgTime: p,
                                    msgKey: h,
                                    sessionId: d[0].session_id,
                                    chats: g
                                });
                            } else t.push({
                                lastMsgTime: p,
                                msgKey: h,
                                chats: [ {
                                    id: a,
                                    peer_identifier: s,
                                    chatlist_nickname: c,
                                    chatlist_headimg: u || o.d,
                                    unread_count: l
                                } ]
                            });
                            e === i.length && (o.a.chatList = function t(e) {
                                if (e.length <= 1) return e;
                                for (var n = Math.floor(e.length / 2), i = e.splice(n, 1)[0], r = [], o = [], a = 0; a < e.length; a++) {
                                    var s = e[a], c = s.chats, u = i.chats, l = u.length;
                                    c.length && (!u.length || c[c.length - 1].lastTime > u[l - 1].lastTime) ? r.push(s) : o.push(s);
                                }
                                return t(r).concat([ i ], t(o));
                            }(t));
                        }).catch(function(t) {
                            n--, e++, console.error(t);
                        });
                    };
                    i.forEach(function(t) {
                        var e = t.id, i = t.peer_identifier, r = t.peer_nickname, o = t.peer_headimgurl, c = t.unread_messages_count;
                        a.push({
                            id: e,
                            peer_identifier: i,
                            peer_nickname: r,
                            peer_headimgurl: o,
                            unread_messages_count: c
                        }), function t() {
                            if (n <= 5) {
                                var e = a.shift(), i = e.id, r = e.peer_identifier, o = e.peer_nickname, c = e.peer_headimgurl, u = e.unread_messages_count;
                                s(i, r, o, c, u).then(t);
                            }
                        }();
                    });
                };
                o.a.login != c.b.DONE ? o.c.login(e, n, {
                    connectSuccess: a,
                    getMsgs: function(t) {
                        t.length && d();
                    }
                }) : a();
            });
        }, d = function() {
            return o.a.login !== c.b.DOING && a.a.getSessions().then(function(t) {
                f(t);
            });
        }, p = function(t, e, n) {
            return o.c.getHistory({
                Peer_Account: t,
                LastMsgTime: e || Math.round(new Date().getTime() / 1e3),
                MaxCnt: 15,
                MsgKey: n || ""
            }, !0).then(function(e) {
                var n = e.msgs, i = e.lastMsgTime, a = e.msgKey, s = o.a.chatList;
                return s.some(function(e) {
                    if (e.sessionId === t) {
                        var o = e.chats[0];
                        console.warn(o);
                        var s = n.map(function(e) {
                            return r()({}, e, {
                                lastTime: e.date,
                                id: o.id,
                                peer_identifier: t,
                                unread_count: o.unread_count
                            });
                        });
                        return e.chats = s.concat(e.chats), e.lastMsgTime = i, e.msgKey = a, !0;
                    }
                }), o.a.chatList = s, n;
            });
        }, h = function(t) {
            t.length && (t = t.filter(function(t) {
                return !t.isSend;
            }).map(function(t) {
                return {
                    from_account: t.from_account,
                    msg_random: t.msg_random,
                    msg_seq: t.msg_seq,
                    msg_time: t.msg_time
                };
            }), console.warn("read msgs", t.length), a.a.readTimMsg(t));
        }, g = function(t) {
            o.c.sendMsg(t).then(function(t) {
                try {
                    var e = t[0].session_id, n = t.map(function(t) {
                        return r()({}, t, {
                            lastTime: t.date,
                            peer_identifier: e,
                            unread_count: 0
                        });
                    }), i = o.a.chatList;
                    i.some(function(t) {
                        if (t.sessionId === e) return t.chats = t.chats.concat(n).sort(l), !0;
                    }) || i.push({
                        lastMsgTime: n[0].msg_time,
                        msgKey: "",
                        sessionId: e,
                        chats: n
                    }), o.a.chatList = i;
                } catch (t) {
                    console.error(t);
                }
            });
        };
    },
    kEun: function(t, e, n) {
        e.a = {
            data: function() {
                return {
                    currentValue: this.value
                };
            },
            watch: {
                value: function(t, e) {
                    t !== e && (this.currentValue = t);
                }
            },
            methods: {
                onFocus: function(t) {
                    this.focus = !0;
                    var e = t.mp.detail.height;
                    this.$emit("changeBottom", e);
                },
                onBlur: function() {
                    this.focus = !1, this.$emit("blur");
                },
                handleInput: function(t) {
                    var e = this, n = t.mp.detail.value;
                    this.currentValue = n, setTimeout(function() {
                        return e.$emit("input", n);
                    });
                },
                onConfirm: function(t) {
                    this.$emit("confirm", t);
                }
            },
            props: {
                value: {
                    type: String,
                    default: ""
                },
                className: {
                    type: String,
                    default: ""
                },
                name: {
                    type: String,
                    default: ""
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                placeholder: {
                    type: String,
                    default: ""
                },
                maxlength: {
                    type: Number,
                    default: 200
                }
            }
        };
    },
    "kH/R": function(t, e) {},
    kM2E: function(t, e, n) {
        var i = n("7KvD"), r = n("FeBl"), o = n("+ZMJ"), a = n("hJx8"), s = n("D2L2"), c = function t(e, n, c) {
            var u, l, f, d = e & t.F, p = e & t.G, h = e & t.S, g = e & t.P, m = e & t.B, v = e & t.W, _ = p ? r : r[n] || (r[n] = {}), y = _.prototype, x = p ? i : h ? i[n] : (i[n] || {}).prototype;
            for (u in p && (c = n), c) (l = !d && x && void 0 !== x[u]) && s(_, u) || (f = l ? x[u] : c[u], 
            _[u] = p && "function" != typeof x[u] ? c[u] : m && l ? o(f, i) : v && x[u] == f ? function(t) {
                var e = function(e, n, i) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                          case 0:
                            return new t();

                          case 1:
                            return new t(e);

                          case 2:
                            return new t(e, n);
                        }
                        return new t(e, n, i);
                    }
                    return t.apply(this, arguments);
                };
                return e.prototype = t.prototype, e;
            }(f) : g && "function" == typeof f ? o(Function.call, f) : f, g && ((_.virtual || (_.virtual = {}))[u] = f, 
            e & t.R && y && !y[u] && a(y, u, f)));
        };
        c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c;
    },
    kiBT: function(t, e, n) {
        t.exports = {
            default: n("i/C/"),
            __esModule: !0
        };
    },
    kmyH: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("header", [ n("div", {
                    staticClass: "headimg",
                    class: t.consultant.level
                }, [ t.localHeadimgurl ? n("div", {
                    staticClass: "user-data-img"
                }, [ n("img", {
                    attrs: {
                        mode: "aspectFill",
                        src: t.localHeadimgurl,
                        "lazy-load": !0
                    }
                }) ]) : t.userHeadimgurl ? n("div", {
                    staticClass: "user-data-img"
                }, [ n("img", {
                    attrs: {
                        mode: "aspectFill",
                        src: t.userHeadimgurl,
                        "lazy-load": !0
                    }
                }) ]) : t.can_use_open_data ? n("div", {
                    staticClass: "open-data-img"
                }, [ n("open-data", {
                    attrs: {
                        type: "userAvatarUrl",
                        mpcomid: "0"
                    }
                }) ], 1) : t._e(), t._v(" "), t.user.is_consultant ? n("div", {
                    staticClass: "change-img",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: t.chooseImage
                    }
                }, [ n("div", [ t._v("更换") ]) ]) : t._e() ]), t._v(" "), n("button", {
                    staticClass: "userinfo",
                    attrs: {
                        "open-type": "getUserInfo",
                        eventid: "2"
                    },
                    on: {
                        getuserinfo: t.goCard
                    }
                }, [ n("div", {
                    staticClass: "username",
                    class: [ {
                        "navigator-arrow": t.user.is_consultant
                    } ]
                }, [ n("div", [ t.can_use_open_data ? n("open-data", {
                    attrs: {
                        type: "userNickName",
                        mpcomid: "1"
                    }
                }) : n("span", [ t._v(t._s(t.user.nickname)) ]), t._v(" "), t.user.is_consultant ? n("img", {
                    staticClass: "card-img",
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/personal_center/card.png"
                    }
                }) : t._e() ], 1), t._v(" "), t.user.is_consultant ? t._e() : n("button", {
                    staticClass: "invite",
                    attrs: {
                        "open-type": "share"
                    }
                }, [ t._v("\n                邀请好友\n            ") ]) ], 1), t._v(" "), t.user.is_consultant ? n("div", {
                    staticClass: "point"
                }, [ n("div", [ n("span", [ t._v("活跃度(最近30天获得积分)") ]), t._v(":\n                "), n("strong", [ t._v(t._s(t.consultant.last_period_obtained_score)) ]) ], 1), t._v(" "), t.user.is_consultant ? n("button", {
                    staticClass: "checkin",
                    attrs: {
                        disabled: t.user.consultant_checkin,
                        eventid: "1"
                    },
                    on: {
                        tap: function(e) {
                            e.stopPropagation(), t.checkin(e);
                        }
                    }
                }, [ n("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/personal_center/icons/sign.png"
                    }
                }), t._v("\n                " + t._s(t.user.consultant_checkin ? "已" : "") + "签到\n            ") ]) : t._e() ], 1) : t._e() ]), t._v(" "), t.show_checkin ? n("div", [ n("div", {
                    staticClass: "overlay",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        tap: t.hideCheckin
                    }
                }), t._v(" "), n("div", {
                    staticClass: "checkin-dlg"
                }, [ t._m(0), t._v(" "), n("h1", [ t._v("签到成功，增加5积分") ]), t._v(" "), n("p", [ t._v("亲，记得关注置业顾问之家哦") ]), t._v(" "), n("button", {
                    attrs: {
                        eventid: "4"
                    },
                    on: {
                        tap: t.hideCheckin
                    }
                }, [ t._v("我知道了") ]) ], 1) ]) : t._e() ], 1);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "house-i"
                }, [ e("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/personal_center/consultant_checkin/house-i.png"
                    }
                }) ]);
            } ]
        };
        e.a = i;
    },
    knuC: function(t, e) {
        t.exports = function(t, e, n) {
            var i = void 0 === n;
            switch (e.length) {
              case 0:
                return i ? t() : t.call(n);

              case 1:
                return i ? t(e[0]) : t.call(n, e[0]);

              case 2:
                return i ? t(e[0], e[1]) : t.call(n, e[0], e[1]);

              case 3:
                return i ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);

              case 4:
                return i ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
            }
            return t.apply(n, e);
        };
    },
    l4Vo: function(t, e, n) {
        e.a = {
            data: function() {
                return {
                    show: !1
                };
            },
            mounted: function() {
                this.check();
            },
            methods: {
                check: function() {
                    var t = this;
                    wx.onNetworkStatusChange(function(e) {
                        var n = e.isConnected;
                        t.show = !n;
                    });
                }
            }
        };
    },
    lOnJ: function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t;
        };
    },
    lS8P: function(t, e, n) {
        n.d(e, "b", function() {
            return c;
        });
        var i = n("Dd8w"), r = n.n(i), o = n("0jG4"), a = {
            homepage: {},
            feeds_banner: {},
            hot_banner: {},
            you_like: {},
            hot_list: {},
            forthcoming_sale_list: {},
            latest_opening_top_banner: {},
            surplus_list: {},
            find_building: {}
        }, s = {
            refresh: function(t) {
                a[t] = {};
            },
            log: function(t, e) {
                var n = e.id, i = e.pos, r = e.pos_name, s = a[t] ? a[t][r] : null;
                s || (s = []), s[i] || null === s[i] || (s[i] = n, a[t][r] = s, o.a.interestingEvent({
                    interesting_id: n,
                    event: "view",
                    pos: i,
                    pos_name: r
                }));
            }
        };
        e.a = s;
        var c = function(t, e) {
            o.a.interestingEvent(r()({
                interesting_id: t,
                event: "click"
            }, e));
        };
    },
    lktj: function(t, e, n) {
        var i = n("Ibhu"), r = n("xnc9");
        t.exports = Object.keys || function(t) {
            return i(t, r);
        };
    },
    lygM: function(t, e, n) {
        var i = n("VPS7");
        e.a = {
            data: function() {
                return {
                    show_public_dlg: !1
                };
            },
            computed: {
                apply_content: function() {
                    if (!this.customer_service_info) return "";
                    var t = this.customer_service_info;
                    return "请将需要更新的楼盘最新动态提供给您专属客服【" + t.wx_username + "（" + t.wx_nickname + "）】，可以加积分哦";
                }
            },
            methods: {
                publish: function(t) {
                    if (this.building_event_author) {
                        var e = this.$root.$mp.query.building_id;
                        wx.navigateTo({
                            url: "/pages/building/event/add/main?building_id=" + e
                        });
                    } else this.togglePublishDlg();
                },
                togglePublishDlg: function() {
                    this.show_public_dlg = !this.show_public_dlg;
                },
                copyWexin: function() {
                    i.a.setClipboardData(this.customer_service_info.wx_username);
                }
            }
        };
    },
    m5UN: function(t, e, n) {
        var i = {
            render: function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "common-img",
                    class: this.className
                }, [ e("img", {
                    class: this.shadowClass,
                    attrs: {
                        src: this.src,
                        mode: this.mode,
                        "lazy-load": this.lazy - this.load,
                        eventid: "0"
                    },
                    on: {
                        error: this.errorHandle
                    }
                }) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    mClu: function(t, e, n) {
        var i = n("kM2E");
        i(i.S + i.F * !n("+E39"), "Object", {
            defineProperty: n("evD5").f
        });
    },
    mGEL: function(t, e) {},
    msXi: function(t, e, n) {
        var i = n("77Pl");
        t.exports = function(t, e, n, r) {
            try {
                return r ? e(i(n)[0], n[1]) : e(n);
            } catch (e) {
                var o = t.return;
                throw void 0 !== o && i(o.call(t)), e;
            }
        };
    },
    mvHQ: function(t, e, n) {
        t.exports = {
            default: n("qkKv"),
            __esModule: !0
        };
    },
    mypn: function(t, e, n) {
        (function(t, e) {
            !function(t, n) {
                function i(t) {
                    delete f[t];
                }
                function r(t) {
                    if (d) setTimeout(r, 0, t); else {
                        var e = f[t];
                        if (e) {
                            d = !0;
                            try {
                                !function(t) {
                                    var e = t.callback, i = t.args;
                                    switch (i.length) {
                                      case 0:
                                        e();
                                        break;

                                      case 1:
                                        e(i[0]);
                                        break;

                                      case 2:
                                        e(i[0], i[1]);
                                        break;

                                      case 3:
                                        e(i[0], i[1], i[2]);
                                        break;

                                      default:
                                        e.apply(n, i);
                                    }
                                }(e);
                            } finally {
                                i(t), d = !1;
                            }
                        }
                    }
                }
                if (!t.setImmediate) {
                    var o, a, s, c, u, l = 1, f = {}, d = !1, p = t.document, h = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    h = h && h.setTimeout ? h : t, "[object process]" === {}.toString.call(t.process) ? o = function(t) {
                        e.nextTick(function() {
                            r(t);
                        });
                    } : function() {
                        if (t.postMessage && !t.importScripts) {
                            var e = !0, n = t.onmessage;
                            return t.onmessage = function() {
                                e = !1;
                            }, t.postMessage("", "*"), t.onmessage = n, e;
                        }
                    }() ? (c = "setImmediate$" + Math.random() + "$", u = function(e) {
                        e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(c) && r(+e.data.slice(c.length));
                    }, t.addEventListener ? t.addEventListener("message", u, !1) : t.attachEvent("onmessage", u), 
                    o = function(e) {
                        t.postMessage(c + e, "*");
                    }) : t.MessageChannel ? ((s = new MessageChannel()).port1.onmessage = function(t) {
                        r(t.data);
                    }, o = function(t) {
                        s.port2.postMessage(t);
                    }) : p && "onreadystatechange" in p.createElement("script") ? (a = p.documentElement, 
                    o = function(t) {
                        var e = p.createElement("script");
                        e.onreadystatechange = function() {
                            r(t), e.onreadystatechange = null, a.removeChild(e), e = null;
                        }, a.appendChild(e);
                    }) : o = function(t) {
                        setTimeout(r, 0, t);
                    }, h.setImmediate = function(t) {
                        "function" != typeof t && (t = new Function("" + t));
                        for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                        var i = {
                            callback: t,
                            args: e
                        };
                        return f[l] = i, o(l), l++;
                    }, h.clearImmediate = i;
                }
            }("undefined" == typeof self ? void 0 === t ? this : t : self);
        }).call(e, n("DuR2"), n("W2nU"));
    },
    n0T6: function(t, e, n) {
        var i = n("Ibhu"), r = n("xnc9").concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t) {
            return i(t, r);
        };
    },
    nGQN: function(t, e, n) {
        var i = {
            water: [ {
                text: "不限",
                value: ""
            }, {
                text: "50万以下",
                value: "0-500000"
            }, {
                text: "50-100万",
                value: "500000-1000000"
            }, {
                text: "100-150万",
                value: "1000000-1500000"
            }, {
                text: "150-200万",
                value: "1500000-2000000"
            }, {
                text: "200-250万",
                value: "2000000-2500000"
            }, {
                text: "250-300万",
                value: "2500000-3000000"
            }, {
                text: "300万以上",
                value: "3000000-99999999999999999"
            } ],
            square: [ {
                text: "不限",
                value: ""
            }, {
                text: "6000元/㎡以下",
                value: "0-6000"
            }, {
                text: "6000元-8000元/㎡",
                value: "6000-8000"
            }, {
                text: "8000元-10000元/㎡",
                value: "8000-10000"
            }, {
                text: "10000元-15000元/㎡",
                value: "10000-15000"
            }, {
                text: "15000元-20000元/㎡",
                value: "15000-20000"
            }, {
                text: "20000元-30000元/㎡",
                value: "20000-30000"
            }, {
                text: "30000元/㎡以上",
                value: "30000-99999999999"
            } ]
        };
        e.a = {
            data: function() {
                return {
                    selected: "",
                    selected_tx: "不限",
                    tabs: [ {
                        text: "总价",
                        value: "water"
                    }, {
                        text: "单价",
                        value: "square"
                    } ],
                    type: "water",
                    start: "",
                    end: "",
                    start_focus: !1,
                    end_focus: !1
                };
            },
            onUnload: function() {
                this.type = "water", this.start = "", this.end = "", this.selected = "";
            },
            computed: {
                opts: function() {
                    return i[this.type];
                },
                input_tip_start: function() {
                    return "water" === this.type ? "最低总价" : "最低单价";
                },
                input_tip_end: function() {
                    return "water" === this.type ? "最高总价" : "最高单价";
                }
            },
            methods: {
                changeType: function(t) {
                    this.type = t.currentTarget.dataset.type, this.start = "", this.end = "";
                },
                onSelect: function(t) {
                    this.selected = t.currentTarget.dataset.value, this.selected_tx = t.currentTarget.dataset.text;
                },
                changeStartFocus: function(t) {
                    this.start_focus = !this.start_focus;
                },
                changeEndFocus: function(t) {
                    this.end_focus = !this.end_focus;
                },
                changeStart: function(t) {
                    this.start = t.target.value;
                },
                changeEnd: function(t) {
                    this.end = t.target.value;
                },
                confirm: function() {
                    var t = this.start, e = this.end, n = this.selected_tx;
                    this.start && this.end && ("water" === this.type ? (n = t + "万-" + e + "万", t *= 1e4, 
                    e *= 1e4) : n = t + "元-" + e + "元/㎡", this.selected_tx = n);
                    var i = "" != t && "" != e ? t + "-" + e : this.selected;
                    i || !t && !e ? this.$emit("change", this.type, i, n) : wx.showToast({
                        title: "请选择或填写价格",
                        icon: "none"
                    });
                }
            }
        };
    },
    nQ9N: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "checkbox-wrap"
                }, t._l(t.opts, function(e, i) {
                    return n("div", {
                        key: i,
                        staticClass: "checkbox",
                        class: [ {
                            active: e.selected
                        } ],
                        attrs: {
                            eventid: "0-" + i
                        },
                        on: {
                            tap: function(n) {
                                t.onSelect(e.value, i);
                            }
                        }
                    }, [ t._v("\n        " + t._s(e.value) + "\n    ") ]);
                }));
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    "o+F6": function(t, e, n) {
        var i = n("Dd8w"), r = n.n(i), o = n("fZjL"), a = n.n(o), s = n("7gdG");
        e.a = {
            getSurplusBuildings: function(t) {
                return function(t) {
                    a()(t).forEach(function(e) {
                        t[e] || delete t[e];
                    });
                }(t), n.i(s.a)("surplus_buildings", r()({
                    per: 20
                }, t), {
                    loading: !1
                });
            }
        };
    },
    oD1S: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "swiper-wrap"
                }, [ t.loading ? t._e() : n("scroll-view", {
                    staticClass: "banner",
                    staticStyle: {
                        width: "100%",
                        height: "288rpx"
                    },
                    attrs: {
                        id: "feed_swiper",
                        "scroll-x": "true",
                        "scroll-with-animation": "true",
                        eventid: "1"
                    },
                    on: {
                        scroll: t.onScroll,
                        scrolltoupper: t.onLeft,
                        scrolltolower: t.onRight
                    }
                }, t._l(t.topics, function(e, i) {
                    return n("view", {
                        key: i,
                        staticClass: "header",
                        attrs: {
                            "item-id": e.id,
                            eventid: "0-" + i
                        },
                        on: {
                            tap: function(n) {
                                t.goDetail(e.id);
                            }
                        }
                    }, [ n("div", {
                        staticClass: "row"
                    }, [ n("span", {
                        key: t.j,
                        staticClass: "label"
                    }, [ t._v("\n                    " + t._s(0 == i ? "今日话题" : "往日热议") + "\n                ") ]), t._v(" "), n("span", [ t._v("阅读 " + t._s(e.view_count)) ]) ]), t._v(" "), n("h3", [ t._v(t._s(e.title)) ]), t._v(" "), n("div", {
                        staticClass: "row"
                    }, [ n("div", {
                        staticClass: "btn"
                    }, [ t._v("参与话题") ]), t._v(" "), n("div", [ t._v("\n                    " + t._s(e.comment_count) + "位房友参与讨论\n                ") ]) ]) ], 1);
                })), t._v(" "), n("div", {
                    staticClass: "pagination"
                }, t._l(t.pagination, function(e, i) {
                    return n("i", {
                        key: i,
                        class: [ {
                            active: e === t.pagination_index
                        } ]
                    });
                })) ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    oM7Q: function(t, e, n) {
        n("sF+V");
        var i = n("FeBl").Object;
        t.exports = function(t, e) {
            return i.create(t, e);
        };
    },
    oVoQ: function(t, e) {},
    oajf: function(t, e, n) {
        var i = n("9akO"), r = n("LUBD"), o = n("ybqe")(i.a, r.a, function(t) {
            n("gn4O");
        }, "data-v-da5c3b38", null);
        e.a = o.exports;
    },
    oeSR: function(t, e, n) {
        var i = n("xtXi"), r = n("j+/V"), o = n("ybqe")(i.a, r.a, function(t) {
            n("Z3Ef");
        }, "data-v-9d5a5d48", null);
        e.a = o.exports;
    },
    "p+bN": function(t, e, n) {
        var i = n("Dd8w"), r = n.n(i), o = n("0jG4"), a = [ 1, 2, 3, 4, 7, 10 ].map(function(t) {
            return {
                value: t,
                selected: !1
            };
        });
        e.a = {
            data: function() {
                return {
                    type: "zone",
                    tabs: [ {
                        text: "城区",
                        value: "zone"
                    }, {
                        text: "地铁",
                        value: "metro"
                    } ],
                    selected_zone: "",
                    metros: a,
                    zones: [],
                    sections: []
                };
            },
            computed: {
                selected_all_section: function() {
                    return this.sections.every(function(t) {
                        return t.selected;
                    }) || this.sections.every(function(t) {
                        return !t.selected;
                    });
                }
            },
            onLoad: function() {
                this.getData();
            },
            methods: {
                changeType: function(t) {
                    this.type = t;
                },
                getData: function() {
                    var t = this;
                    o.a.getZones().then(function(e) {
                        var n = e.level1, i = e.level2, r = e.level3;
                        t.zones = n.concat(i).concat(r);
                    });
                },
                selectAll: function() {
                    this.selected_zone = "";
                },
                onSelect: function(t) {
                    var e = t.currentTarget.dataset.index, n = this.zones[e], i = n.id, o = n.sections;
                    this.selected_zone = i, this.sections = o.map(function(t) {
                        return r()({}, t, {
                            selected: !1
                        });
                    });
                },
                onSelectSection: function(t) {
                    var e = t.currentTarget.dataset.index, n = this.sections[e];
                    this.$set(this.sections, e, r()({}, n, {
                        selected: !n.selected
                    }));
                },
                selectAllSection: function() {
                    var t = this;
                    this.sections.forEach(function(e, n) {
                        t.$set(t.sections, n, r()({}, e, {
                            selected: !1
                        }));
                    });
                },
                onSelectMetro: function(t) {
                    var e = this.metros[t];
                    this.$set(this.metros, t, r()({}, e, {
                        selected: !e.selected
                    }));
                },
                reset: function() {
                    var t = this;
                    this.selected_zone = "", this.sections.forEach(function(e, n) {
                        t.$set(t.sections, n, r()({}, e, {
                            selected: !1
                        }));
                    }), this.metros.forEach(function(e, n) {
                        t.$set(t.metros, n, r()({}, e, {
                            selected: !1
                        }));
                    });
                },
                confirm: function() {
                    var t = this, e = this.sections.filter(function(t) {
                        return t.selected;
                    }).map(function(t) {
                        return t.id;
                    }), n = void 0;
                    this.selected_zone && (this.zones.some(function(e) {
                        var i = e.id, r = e.name;
                        if (i === t.selected_zone) return n = r, !0;
                    }), this.sections.forEach(function(t) {
                        var e = t.name;
                        t.selected && (n += "," + e);
                    })), this.$emit("changeZone", this.selected_zone, n || "不限", e.join(",")), this.$emit("changeMetro", this.metros.filter(function(t) {
                        var e = t.selected, n = t.value;
                        return e && n;
                    }).map(function(t) {
                        return t.value + "号线";
                    }).join(","));
                }
            },
            props: {
                zone_ids: {
                    type: String
                }
            }
        };
    },
    p8GL: function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        });
        var i = n("hGQ5"), r = n.n(i), o = function(t) {
            return r.a.tabBar.list.some(function(e) {
                return "/" + e.pagePath === t;
            });
        };
        e.a = {
            checkIdCard: function(t) {
                return /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/.test(t);
            },
            checkMobile: function(t) {
                return /^\d{11}$/.test(t);
            }
        };
    },
    pFYg: function(e, n, i) {
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        n.__esModule = !0;
        var o = r(i("Zzip")), a = r(i("5QVw")), s = "function" == typeof a.default && "symbol" == t(o.default) ? function(e) {
            return void 0 === e ? "undefined" : t(e);
        } : function(e) {
            return e && "function" == typeof a.default && e.constructor === a.default && e !== a.default.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
        };
        n.default = "function" == typeof a.default && "symbol" === s(o.default) ? function(t) {
            return void 0 === t ? "undefined" : s(t);
        } : function(t) {
            return t && "function" == typeof a.default && t.constructor === a.default && t !== a.default.prototype ? "symbol" : void 0 === t ? "undefined" : s(t);
        };
    },
    pIqT: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "articles"
                }, [ t.show ? n("div", {
                    staticClass: "house-page-title info tabs tabs-wrap"
                }, [ n("common-tabs", {
                    attrs: {
                        width: "50%",
                        tabs: t.tabs,
                        selected: t.selected_type,
                        eventid: "0",
                        mpcomid: "0"
                    },
                    on: {
                        change: t.changeType
                    }
                }), t._v(" "), t.has_more ? n("a", {
                    staticClass: "right-link",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        tap: t.goMore
                    }
                }, [ t._v("更多") ]) : t._e() ], 1) : t._e(), t._v(" "), n("div", {
                    staticClass: "articles"
                }, t._l(t.items, function(e, i) {
                    return n("article-item", {
                        key: i,
                        attrs: {
                            item: e,
                            eventid: "2-" + i,
                            mpcomid: "1-" + i
                        },
                        on: {
                            like: t.onLike
                        }
                    });
                })) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    pOFa: function(t, e, n) {
        n.d(e, "i", function() {
            return u;
        }), n.d(e, "f", function() {
            return f;
        }), n.d(e, "g", function() {
            return p;
        }), n.d(e, "a", function() {
            return h;
        }), n.d(e, "d", function() {
            return g;
        }), n.d(e, "e", function() {
            return m;
        }), n.d(e, "h", function() {
            return y;
        }), n.d(e, "b", function() {
            return x;
        }), n.d(e, "c", function() {
            return b;
        });
        var i = n("Dd8w"), r = n.n(i), o = n("fZjL"), a = n.n(o), s = n("ytBU"), c = [ "/pages/index/main", "/pages/find_buildings/main", "/pages/house_circles/main", "/pages/personal_center/main" ], u = function(t) {
            return c.some(function(e) {
                return t.indexOf(e) > -1;
            });
        }, l = function(t) {
            var e = "/pages/building/main?";
            return t.building_id ? e += "building_id=" + t.building_id + "&house_id=" + t.id : e += "building_id=" + t.id, 
            e;
        }, f = function(t) {
            return a()(t).forEach(function(e) {
                var n = t[e];
                void 0 !== n && null !== n && "" !== n || delete t[e];
            }), t;
        }, d = function(t) {
            return {
                name: t,
                tag_class: [ "摇号完成", "摇号结果", "正在登记", "在售", "等待摇号", "即将取证" ].indexOf(t) > -1 ? "green" : ""
            };
        }, p = function(t) {
            return t >= 1e4 ? (t / 1e4).toFixed(1) + "w" : t;
        }, h = function(t) {
            var e, n = f(t), i = function(t) {
                var e = [];
                if (t.tag_list) {
                    if (t.tag_list.length > 1) return t.tag_list.map(d);
                    e = t.tag_list.slice(0);
                }
                if (!t.hide_status) {
                    var n = t.ln_status, i = t.status, r = t.data_status;
                    (n || i) && e.push(n || i), r && e.push(r);
                }
                return e.map(d);
            }(t), o = i.filter(function(t) {
                return "green" === t.tag_class;
            });
            return (n = r()({}, n, {
                price_desc_arr: t.price_desc ? t.price_desc.split(",") : [],
                href: l(t),
                comment_href: function(t) {
                    var e = "/pages/comments/main?";
                    return t.building_id ? e += "building_id=" + t.building_id + "&house_id=" + t.id : e += "building_id=" + t.id, 
                    e + "&name=" + t.name;
                }(t),
                img_url: (e = t.cover_photo_url) ? e + "?x-oss-process=image/resize,w_210,h_140" : "https://cdn.vip-wifi.com/fangchan/img/default-img-normal.jpeg",
                surplus_img_url: t.cover_photo_url,
                tags: i,
                status: t.hide_status && o.length ? o[0].name : t.status,
                view_count: p(t.view_count),
                date_with_status: t.date_with_status && t.date_with_status.replace(/-/g, ".")
            }, [ "common_probability", "rd_probability" ].reduce(function(e, n) {
                var i = t[n];
                return i && (e[n] = i), e;
            }, {}))).building_id = n.building_id || n.id, delete n.id, delete n.min_price, delete n.max_price, 
            delete n.cover_photo_url, n;
        }, g = function(t) {
            return t.you_like_buidings = {
                primary_position: v(m(t.you_like_buidings.primary_position)),
                secondary_position: v(m(t.you_like_buidings.secondary_position))
            }, t = r()({}, f(t), {
                position: t.position
            });
        }, m = function(t) {
            return t.map(function(t) {
                var e = t.id, n = t.target, i = t.position, r = t.content, o = h(n);
                return o.href = y(t), o.content = r, o.position = i, o.log_id = e, o;
            });
        }, v = function(t) {
            return t.map(function(t) {
                return r()({}, t, {
                    tag: t.tag_list && t.tag_list.length ? t.tag_list[0] : t.zone
                });
            });
        }, _ = function(t) {
            return 1 === (t = m(t).slice(0, 4)).length || 4 === t.length ? {
                col_1: [ t[0] ],
                col_3: v(t.slice(1))
            } : 2 === t.length ? {
                col_1: [ t[0], t[1] ],
                col_3: []
            } : 3 === t.length ? {
                col_1: [],
                col_3: v(t)
            } : void 0;
        }, y = function(t) {
            var n = l(t.target);
            return t.consultant_group_id ? n + "&consultant_group_id=" + t.consultant_group_id : n;
        }, x = function(t) {
            return t.map(function(t) {
                return {
                    id: t.id,
                    photo_url: t.photo_url + "?x-oss-process=image/resize,w_750,h_280",
                    href: y(t),
                    name: t.content || t.target.name || "",
                    open_type: function(t) {
                        if (t && t.href) {
                            var e = u(t.href);
                            if (console.error(t.href, e), e) return "switchTab";
                        }
                        return "navigateTo";
                    }(t),
                    position: t.position
                };
            });
        }, b = function(t) {
            return {
                homepage_banner: x(t.homepage_banner),
                dashboard: t.dashboard,
                hot: _(t.hot),
                forthcoming_sale: _(t.forthcoming_sale),
                homepage_popup: t.homepage_popup,
                latest_opening: m(t.latest_opening),
                latest_lot_number: m(t.latest_lot_number),
                homepage_middle_banner: x(t.homepage_middle_banner),
                excellent_consultants: t.excellent_consultants,
                surplus: v(m(t.surplus))
            };
        };
    },
    pV7A: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("form", {
                    attrs: {
                        "report-submit": !0,
                        eventid: "1"
                    },
                    on: {
                        submit: t.goDetail
                    }
                }, [ n("button", {
                    staticClass: "shadow-button",
                    attrs: {
                        "form-type": "submit"
                    }
                }, [ n("div", {
                    staticClass: "item"
                }, [ n("div", {
                    staticClass: "house-img"
                }, [ n("img", {
                    attrs: {
                        src: t.item.img_url,
                        "lazy-load": !0,
                        mode: "aspectFill"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "view-wrap",
                    class: [ {
                        hide: !t.item.view_count
                    } ]
                }, [ n("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/home/view.png"
                    }
                }), t._v(" "), n("span", [ t._v(t._s(t.item.view_count || "")) ]) ]) ]), t._v(" "), n("div", {
                    staticClass: "info"
                }, [ n("div", {
                    staticClass: "row between"
                }, [ n("h1", [ t._v(t._s(t.item.name)) ]), t._v(" "), t.item.surplus_count_desc ? n("span", {
                    staticClass: "count"
                }, [ t._v(t._s(t.item.surplus_count_desc)) ]) : t.status_tags && t.status_tags.length ? n("span", t._l(t.status_tags, function(e, i) {
                    return n("span", {
                        key: i,
                        staticClass: "tag",
                        class: e.tag_class
                    }, [ t._v("\n                            " + t._s(e.name) + "\n                        ") ]);
                })) : t._e() ], 1), t._v(" "), n("div", {
                    staticClass: "row small"
                }, [ n("div", {
                    staticClass: "zone-wrap"
                }, [ n("span", [ t._v("\n                            " + t._s(t.item.zone) + "\n                        ") ]), t._v(" "), t.item.zone_section && !t.show_presell_date ? n("span", [ t._v("-" + t._s(t.item.zone_section)) ]) : t._e() ]), t._v(" "), !t.show_presell_date && t.item.area_range ? n("div", [ n("span", {
                    staticClass: "sperate"
                }, [ t._v("|") ]), t._v(" "), n("span", [ t._v("\n                            建面" + t._s(t.item.area_range) + "㎡\n                        ") ]) ]) : t.show_presell_date ? n("div", [ n("span", {
                    staticClass: "sperate"
                }, [ t._v("|") ]), t._v(" "), n("span", [ t._v("\n                            预计预售：" + t._s(t.item.estimated_presell_time) + "\n                        ") ]) ]) : t._e() ]), t._v(" "), n("div", {
                    staticClass: "row between bottom"
                }, [ n("div", [ t.item.price_desc && "正在计算" != t.item.price_desc ? n("strong", t._l(t.item.price_desc_arr, function(e, i) {
                    return n("div", {
                        key: e
                    }, [ t._v("\n                                " + t._s(e) + "\n                            ") ]);
                })) : t._e(), t._v(" "), t.item.surplus_count_desc ? n("div", {
                    staticClass: "tags"
                }, t._l(t.item.tags, function(e, i) {
                    return n("span", {
                        key: i,
                        staticClass: "tag",
                        class: e.tag_class
                    }, [ t._v("\n                                " + t._s(e.name) + "\n                            ") ]);
                })) : n("div", {
                    staticClass: "tags"
                }, t._l(t.custom_tags, function(e, i) {
                    return n("span", {
                        key: i,
                        staticClass: "tag",
                        class: e.tag_class
                    }, [ t._v("\n                                " + t._s(e.name) + "\n                            ") ]);
                })) ], 1), t._v(" "), n("div", {
                    staticClass: "comment-show",
                    style: [ {
                        display: t.item.comment_count ? "inline-flex" : "none"
                    } ],
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: function(e) {
                            e.stopPropagation(), t.goComments(e);
                        }
                    }
                }, [ n("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/home/msg.png",
                        "lazy-load": !0
                    }
                }), t._v(" "), n("span", [ t._v(t._s(t.item.comment_count)) ]) ]) ]) ]) ]) ]) ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    pnP1: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "coin-rule"
                }, [ n("h3", [ t._v(t._s(t.title) + "：") ]), t._v(" "), n("ul", t._l(t.rules, function(e, i) {
                    return n("li", {
                        key: i
                    }, [ n("i", [ t._v(t._s(i + 1)) ]), t._v(" "), n("span", [ t._v(t._s(e)) ]) ], 1);
                })) ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    pocD: function(t, e) {},
    pxwY: function(t, e) {},
    q3fN: function(t, e, n) {
        var i = n("fZjL"), r = n.n(i), o = n("Dd8w"), a = n.n(o), s = n("7gdG"), c = n("vLgD");
        e.a = {
            getHouses: function(t) {
                return n.i(s.h)(c.b + "/est2hand/getCommunities", {
                    city_id: "510100",
                    query: t
                }, {
                    loading: !1
                });
            },
            evalute: function(t) {
                var e = a()({}, t, {
                    city_id: "510100"
                });
                return r()(e).forEach(function(t) {
                    e[t] = e[t].toString();
                }), n.i(s.i)(c.b + "est2hand/estPrice", e, {
                    loading: !0
                });
            }
        };
    },
    qARP: function(t, e, n) {
        var i = n("lOnJ");
        t.exports.f = function(t) {
            return new function(t) {
                var e, n;
                this.promise = new t(function(t, i) {
                    if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                    e = t, n = i;
                }), this.resolve = i(e), this.reject = i(n);
            }(t);
        };
    },
    qV4D: function(t, e) {},
    qdak: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "top-filter-wrap"
                }, [ n("div", {
                    staticClass: "select-content column"
                }, t._l(t.opts, function(e, i) {
                    return n("div", {
                        key: i,
                        staticClass: "opt",
                        class: [ {
                            active: e.value === t.selected
                        } ],
                        attrs: {
                            "data-value": e.value,
                            eventid: "0-" + i
                        },
                        on: {
                            tap: t.onSelect
                        }
                    }, [ t._v("\n            " + t._s(e.text) + "\n        ") ]);
                })), t._v(" "), n("div", {
                    staticClass: "bottom"
                }, [ n("button", {
                    staticClass: "btn cancel",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        tap: t.reset
                    }
                }, [ t._v("清空") ]), t._v(" "), n("button", {
                    staticClass: "btn main",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        tap: t.confirm
                    }
                }, [ t._v("确定") ]) ], 1) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    qio6: function(t, e, n) {
        var i = n("evD5"), r = n("77Pl"), o = n("lktj");
        t.exports = n("+E39") ? Object.defineProperties : function(t, e) {
            r(t);
            for (var n, a = o(e), s = a.length, c = 0; s > c; ) i.f(t, n = a[c++], e[n]);
            return t;
        };
    },
    qkKR: function(t, e, n) {
        var i = n("d7EF"), r = n.n(i), o = n("0jG4"), a = n("EAn4"), s = n("VPS7"), c = n("OQ2b"), u = "?x-oss-process=image/resize,w_104,h_104";
        e.a = {
            data: function() {
                return {
                    can_use_open_data: wx.canIUse("open-data"),
                    show_checkin: !1,
                    headimgurl: ""
                };
            },
            computed: {
                localHeadimgurl: function() {
                    return this.headimgurl ? "" + this.headimgurl + u : "";
                },
                userHeadimgurl: function() {
                    return this.user.headimgurl ? "" + this.user.headimgurl + u : "";
                }
            },
            methods: {
                goCard: function(t) {
                    var e = this.user.is_consultant, i = this.consultant.id;
                    e && n.i(c.b)(t, "/pages/consultants/card/main?id=" + i);
                },
                checkin: function() {
                    var t = this;
                    this.user.is_consultant && !this.user.consultant_checkin && a.a.checkin().then(function() {
                        t.show_checkin = !0, t.$emit("refreshUser");
                    });
                },
                hideCheckin: function() {
                    this.show_checkin = !1;
                },
                chooseImage: function() {
                    var t = this;
                    s.a.chooseImage({
                        count: 1,
                        sizeType: [ "original", "compressed" ],
                        sourceType: [ "album", "camera" ]
                    }).then(function(t) {
                        var e = r()(t, 1)[0];
                        return s.a.uploadImg(e);
                    }).then(function(e) {
                        t.headimgurl = e, o.a.updateUserInfo({
                            headimgurl: e
                        });
                    });
                }
            },
            props: {
                user: {
                    type: Object
                },
                consultant: {
                    type: Object
                }
            }
        };
    },
    qkKv: function(t, e, n) {
        var i = n("FeBl"), r = i.JSON || (i.JSON = {
            stringify: JSON.stringify
        });
        t.exports = function(t) {
            return r.stringify.apply(r, arguments);
        };
    },
    qyJz: function(t, e, n) {
        var i = n("+ZMJ"), r = n("kM2E"), o = n("sB3e"), a = n("msXi"), s = n("Mhyx"), c = n("QRG4"), u = n("fBQ2"), l = n("3fs2");
        r(r.S + r.F * !n("dY0y")(function(t) {
            Array.from(t);
        }), "Array", {
            from: function(t) {
                var e, n, r, f, d = o(t), p = "function" == typeof this ? this : Array, h = arguments.length, g = h > 1 ? arguments[1] : void 0, m = void 0 !== g, v = 0, _ = l(d);
                if (m && (g = i(g, h > 2 ? arguments[2] : void 0, 2)), void 0 == _ || p == Array && s(_)) for (n = new p(e = c(d.length)); e > v; v++) u(n, v, m ? g(d[v], v) : d[v]); else for (f = _.call(d), 
                n = new p(); !(r = f.next()).done; v++) u(n, v, m ? a(f, g, [ r.value, v ], !0) : r.value);
                return n.length = v, n;
            }
        });
    },
    r1EU: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "item",
                    attrs: {
                        "data-id": t.item.id,
                        eventid: "0"
                    },
                    on: {
                        tap: t.goDetail
                    }
                }, [ n("div", {
                    staticClass: "content"
                }, [ n("div", {
                    staticClass: "article"
                }, [ n("p", [ t._v(t._s(t.item.content_body.title)) ]), t._v(" "), n("div", {
                    staticClass: "sub-info"
                }, [ n("div", {
                    staticClass: "userinfo"
                }, [ n("img", {
                    attrs: {
                        src: t.auth_headimg,
                        "lazy-load": !0
                    }
                }), t._v(" "), n("span", [ t._v(t._s(t.item.author.name)) ]) ]), t._v(" "), n("div", {
                    staticClass: "date"
                }, [ t._v(t._s(t.item.published_date)) ]) ]) ], 1), t._v(" "), n("div", {
                    staticClass: "article-img"
                }, [ n("common-img", {
                    attrs: {
                        src: t.item.content_body.image_url,
                        mode: t.aspectFill,
                        mpcomid: "0"
                    }
                }) ], 1) ]) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    riPv: function(t, e, n) {
        var i = n("//Fk"), r = n.n(i), o = n("0jG4"), a = n("pOFa"), s = {
            hot_search_keyword: [],
            hot_search_list: []
        }, c = function(t) {
            return t.forEach(function(t, e) {
                o.a.interestingEvent({
                    interesting_id: t.id,
                    event: "view",
                    pos: e,
                    pos_name: t.position
                });
            }), t;
        }, u = function(t, e) {
            return s[t].length ? r.a.resolve(s[t]) : o.a.getRecommendation(t, e).then(function(e) {
                return s[t] = e, e;
            });
        };
        e.a = {
            getKeyword: function() {
                return u("hot_search_keyword", 1).then(c);
            },
            getList: function() {
                return u("hot_search_list", 4).then(c).then(a.b);
            }
        };
    },
    s2zD: function(t, e, n) {
        var i = n("OXhe"), r = n("pV7A"), o = n("ybqe")(i.a, r.a, function(t) {
            n("hLwA");
        }, "data-v-1c5702cc", null);
        e.a = o.exports;
    },
    sB3e: function(t, e, n) {
        var i = n("52gC");
        t.exports = function(t) {
            return Object(i(t));
        };
    },
    sC6G: function(t, e, n) {
        var i = n("GAR1");
        e.a = {
            components: {
                AreaCheckbox: i.a
            },
            data: function() {
                return {
                    selected: [],
                    selected_tx: []
                };
            },
            onUnload: function() {
                this.reset();
            },
            methods: {
                change: function(t, e) {
                    this.selected = t, this.selected_tx = e;
                },
                reset: function() {
                    this.selected = [], this.selected_tx = [];
                },
                confirm: function() {
                    this.$emit("change", this.selected.join(","), this.selected_tx.join(","));
                }
            }
        };
    },
    "sF+V": function(t, e, n) {
        var i = n("kM2E");
        i(i.S, "Object", {
            create: n("Yobk")
        });
    },
    "sGH+": function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "building-dlg__mask"
                }, [ n("div", {
                    staticClass: "building-dlg"
                }, [ n("div", {
                    staticClass: "building-dlg__header"
                }, [ n("span", {
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: function(e) {
                            e.stopPropagation(), t.onClose(e);
                        }
                    }
                }) ]), t._v(" "), n("div", {
                    staticClass: "building-dlg__body"
                }, [ n("form", {
                    staticClass: "com-wrap",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        submit: t.submit
                    }
                }, [ n("label", [ n("span", {
                    staticClass: "text2"
                }, [ t._v("姓名") ]), t._v(" "), n("input", {
                    attrs: {
                        type: "text",
                        name: "realname"
                    }
                }) ]), t._v(" "), n("label", [ n("span", [ t._v("身份证") ]), t._v(" "), n("input", {
                    attrs: {
                        type: "idcard",
                        name: "id_card_number"
                    }
                }) ]), t._v(" "), n("label", [ n("span", {
                    staticClass: "text2"
                }, [ t._v("电话") ]), t._v(" "), n("input", {
                    attrs: {
                        type: "number",
                        name: "mobile"
                    }
                }) ]), t._v(" "), n("button", {
                    staticClass: "com-btn",
                    attrs: {
                        formType: "submit"
                    }
                }, [ t._v("一键完善") ]) ], 1) ], 1) ]) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    sdfA: function(t, e, n) {
        n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return o;
        });
        var i = function(t) {
            return t ? t + "%" : t;
        }, r = function(t) {
            t.current_houses.forEach(function(t) {
                t.total_probability = i(t.total_probability), t.ross_probability = i(t.ross_probability), 
                t.rd_probability = i(t.rd_probability), t.common_probability = i(t.common_probability), 
                [ "total_apartments", "total_registers", "total_probability", "ross_apartments", "ross_registers", "ross_probability", "rd_apartments", "rd_registers", "rd_probability", "common_apartments", "common_registers", "common_probability" ].forEach(function(e) {
                    void 0 !== t[e] && null !== t[e] || (t[e] = "-");
                }), t.show_reg = [ "total_registers", "ross_registers", "rd_registers", "common_registers" ].some(function(e) {
                    return "-" !== t[e];
                }), t.show_prob = [ "total_probability", "ross_probability", "rd_probability", "common_probability" ].some(function(e) {
                    return "-" !== t[e];
                });
            });
        }, o = function(t, e) {
            return "business" === t || "商业" === e ? [ "项目名称", "预售证号", "开发商", "物业公司", "物业类型", "建筑面积", "装修情况", "产权年限", "规划户数", "楼层状况", "水电气", "物业费用", "层高", "开盘时间", "交房时间", "占地面积", "建筑面积", "容积率", "绿化率", "停车位", "售楼部" ] : [ "物业类别", "产权年限", "环线位置", "开发商", "楼盘地址", "占地面积", "建筑面积", "容积率", "绿化率", "停车位", "楼栋总数", "总户数", "物业公司", "物业费", "楼层状况", "交房时间", "售楼部地址" ];
        };
    },
    szLo: function(t, e, n) {
        var i = n("0jG4"), r = n("OQ2b");
        e.a = {
            data: function() {
                return {
                    liking: !1,
                    show_all_reply: !1
                };
            },
            computed: {
                show_reply: function() {
                    return this.show_all_reply ? this.comment.reply_comments.items.slice(0) : this.comment.reply_comments.items.slice(0, 3);
                }
            },
            methods: {
                goDetail: function() {
                    var t = this.$root.$mp.query, e = t.name, n = t.building_id;
                    wx.navigateTo({
                        url: "/pages/comments/detail/main?building_id=" + n + "&id=" + this.comment.id + "&name=" + (e || "")
                    });
                },
                toggleReplyShow: function() {
                    this.show_all_reply = !this.show_all_reply;
                },
                onConsult: function(t) {
                    var e = t.currentTarget.dataset.id;
                    e && wx.navigateTo({
                        url: "/pages/consultants/card/main?id=" + e
                    });
                },
                replyUser: function(t) {
                    var e = this, i = t.currentTarget.dataset.index;
                    if (this.is_building_page) return this.goDetail();
                    n.i(r.a)(t, function() {
                        e.$emit("showReply", e.index, i);
                    }, "需要授权用户信息才可以进行回复");
                },
                onLike: function(t) {
                    var e = this;
                    if (!this.liking) {
                        this.liking = !0;
                        var n = t.currentTarget.dataset.id, r = this.comment, o = "likeComment";
                        r.is_liked && (o = "delLikedComment"), i.a[o](n).then(function() {
                            e.changeLike(!r.is_liked);
                        });
                    }
                },
                changeLike: function(t) {
                    var e = this.comment;
                    e.is_liked = t, e.like_count = t ? e.like_count + 1 : e.like_count - 1, this.liking = !1, 
                    this.$emit("changeComment", e, index);
                },
                goReply: function(t) {
                    var e = this;
                    if (this.is_building_page) return this.goDetail();
                    n.i(r.a)(t, function() {
                        e.$emit("showReply", e.index);
                    }, "需要授权用户信息才可以进行回复");
                },
                stopClick: function() {}
            },
            props: {
                index: {
                    type: Number
                },
                comment: {
                    type: Object
                },
                is_building_page: {
                    type: Boolean,
                    default: !1
                }
            }
        };
    },
    t2go: function(e, n) {
        e.exports = function() {
            "function" != typeof Array.prototype.forEach && (Array.prototype.forEach = function(t) {
                for (var e = 0; e < this.length; e++) t.apply(this, [ this[e], e, this ]);
            });
            var e = {}, n = {
                login: function(t, e, n) {},
                syncMsgs: function(t, e) {},
                getC2CHistoryMsgs: function(t, e, n) {},
                syncGroupMsgs: function(t, e, n) {},
                sendMsg: function(t, e, n) {},
                logout: function(t, e) {},
                setAutoRead: function(t, e, n) {},
                getProfilePortrait: function(t, e, n) {},
                setProfilePortrait: function(t, e, n) {},
                applyAddFriend: function(t, e, n) {},
                getPendency: function(t, e, n) {},
                deletePendency: function(t, e, n) {},
                responseFriend: function(t, e, n) {},
                getAllFriend: function(t, e, n) {},
                deleteFriend: function(t, e, n) {},
                addBlackList: function(t, e, n) {},
                getBlackList: function(t, e, n) {},
                deleteBlackList: function(t, e, n) {},
                uploadPic: function(t, e, n) {},
                createGroup: function(t, e, n) {},
                applyJoinGroup: function(t, e, n) {},
                handleApplyJoinGroup: function(t, e, n) {},
                deleteApplyJoinGroupPendency: function(t, e, n) {},
                quitGroup: function(t, e, n) {},
                getGroupPublicInfo: function(t, e, n) {},
                getGroupInfo: function(t, e, n) {},
                modifyGroupBaseInfo: function(t, e, n) {},
                destroyGroup: function(t, e, n) {},
                getJoinedGroupListHigh: function(t, e, n) {},
                getGroupMemberInfo: function(t, e, n) {},
                addGroupMember: function(t, e, n) {},
                modifyGroupMember: function(t, e, n) {},
                forbidSendMsg: function(t, e, n) {},
                deleteGroupMember: function(t, e, n) {},
                getPendencyGroup: function(t, e, n) {},
                getPendencyReport: function(t, e, n) {},
                getPendencyGroupRead: function(t, e, n) {},
                sendCustomGroupNotify: function(t, e, n) {},
                Msg: function(t, e, n, i, r, o, a, s) {},
                MsgStore: {
                    sessMap: function() {
                        return {};
                    },
                    sessCount: function() {
                        return 0;
                    },
                    sessByTypeId: function(t, e) {
                        return {};
                    },
                    delSessByTypeId: function(t, e) {
                        return !0;
                    },
                    resetCookieAndSyncFlag: function() {},
                    downloadMap: {}
                }
            };
            return function(n) {
                var i, r = "1.7.0", o = !0, a = {
                    FORMAL: {
                        COMMON: "https://webim.tim.qq.com",
                        PIC: "https://pic.tim.qq.com"
                    },
                    TEST: {
                        COMMON: "https://test.tim.qq.com",
                        PIC: "https://pic.tim.qq.com"
                    }
                }, s = {}, c = "openim", u = "group_open_http_svc", l = "sns", f = "profile", d = "openpic", p = "group_open_http_noauth_svc", h = "recentcontact", g = {
                    openim: "v4",
                    group_open_http_svc: "v4",
                    sns: "v4",
                    profile: "v4",
                    recentcontact: "v4",
                    openpic: "v4",
                    group_open_http_noauth_svc: "v1",
                    group_open_long_polling_http_noauth_svc: "v1",
                    imopenstat: "v4"
                }, m = {
                    login: 1,
                    pic_up: 3,
                    apply_join_group: 9,
                    create_group: 10,
                    longpolling: 18,
                    send_group_msg: 19,
                    sendmsg: 20
                }, v = {
                    C2C: "C2C",
                    GROUP: "GROUP"
                }, _ = {
                    OK: "OK",
                    FAIL: "FAIL"
                }, y = {
                    TEXT: "TIMTextElem",
                    FACE: "TIMFaceElem",
                    IMAGE: "TIMImageElem",
                    CUSTOM: "TIMCustomElem",
                    SOUND: "TIMSoundElem",
                    FILE: "TIMFileElem",
                    LOCATION: "TIMLocationElem",
                    GROUP_TIP: "TIMGroupTipElem"
                }, x = {
                    ORIGIN: 1,
                    LARGE: 2,
                    SMALL: 3
                }, b = {
                    JPG: 1,
                    JPEG: 1,
                    GIF: 2,
                    PNG: 3,
                    BMP: 4,
                    UNKNOWN: 255
                }, w = {
                    RAW_DATA: 0,
                    BASE64_DATA: 1
                }, C = "10001", S = {
                    IMAGE: 1,
                    FILE: 2,
                    SHORT_VIDEO: 3,
                    SOUND: 4
                }, I = {
                    APP_VERSION: "2.1",
                    SERVER_VERSION: 1
                }, M = {
                    C2C: 1,
                    GROUP_COMMON: 3,
                    GROUP_TIP: 4,
                    GROUP_SYSTEM: 5,
                    GROUP_TIP2: 6,
                    FRIEND_NOTICE: 7,
                    PROFILE_NOTICE: 8,
                    C2C_COMMON: 9,
                    C2C_EVENT: 10
                }, T = {
                    COMMON: 0,
                    LOVEMSG: 1,
                    TIP: 2,
                    REDPACKET: 3
                }, A = {
                    JOIN: 1,
                    QUIT: 2,
                    KICK: 3,
                    SET_ADMIN: 4,
                    CANCEL_ADMIN: 5,
                    MODIFY_GROUP_INFO: 6,
                    MODIFY_MEMBER_INFO: 7
                }, k = {
                    FACE_URL: 1,
                    NAME: 2,
                    OWNER: 3,
                    NOTIFICATION: 4,
                    INTRODUCTION: 5
                }, E = {
                    JOIN_GROUP_REQUEST: 1,
                    JOIN_GROUP_ACCEPT: 2,
                    JOIN_GROUP_REFUSE: 3,
                    KICK: 4,
                    DESTORY: 5,
                    CREATE: 6,
                    INVITED_JOIN_GROUP_REQUEST: 7,
                    QUIT: 8,
                    SET_ADMIN: 9,
                    CANCEL_ADMIN: 10,
                    REVOKE: 11,
                    READED: 15,
                    CUSTOM: 255,
                    INVITED_JOIN_GROUP_REQUEST_AGREE: 12
                }, O = {
                    FRIEND_ADD: 1,
                    FRIEND_DELETE: 2,
                    PENDENCY_ADD: 3,
                    PENDENCY_DELETE: 4,
                    BLACK_LIST_ADD: 5,
                    BLACK_LIST_DELETE: 6,
                    PENDENCY_REPORT: 7,
                    FRIEND_UPDATE: 8
                }, P = {
                    INIT: -1,
                    ON: 0,
                    RECONNECT: 1,
                    OFF: 9999
                }, F = P.INIT, D = !1, R = 0, N = 6e4, L = null, G = 0, U = 0, B = 0, j = [], q = null, $ = {
                    sdkAppID: null,
                    appIDAt3rd: null,
                    accountType: null,
                    identifier: null,
                    tinyid: null,
                    identifierNick: null,
                    userSig: null,
                    a2: null,
                    contentType: "json",
                    apn: 1
                }, z = {}, V = 0, Y = {}, H = 0, K = [], X = [], W = [], J = {
                    downloadMap: {}
                }, Q = {
                    "[惊讶]": 0,
                    "[撇嘴]": 1,
                    "[色]": 2,
                    "[发呆]": 3,
                    "[得意]": 4,
                    "[流泪]": 5,
                    "[害羞]": 6,
                    "[闭嘴]": 7,
                    "[睡]": 8,
                    "[大哭]": 9,
                    "[尴尬]": 10,
                    "[发怒]": 11,
                    "[调皮]": 12,
                    "[龇牙]": 13,
                    "[微笑]": 14,
                    "[难过]": 15,
                    "[酷]": 16,
                    "[冷汗]": 17,
                    "[抓狂]": 18,
                    "[吐]": 19,
                    "[偷笑]": 20,
                    "[可爱]": 21,
                    "[白眼]": 22,
                    "[傲慢]": 23,
                    "[饿]": 24,
                    "[困]": 25,
                    "[惊恐]": 26,
                    "[流汗]": 27,
                    "[憨笑]": 28,
                    "[大兵]": 29,
                    "[奋斗]": 30,
                    "[咒骂]": 31,
                    "[疑问]": 32,
                    "[嘘]": 33,
                    "[晕]": 34
                }, Z = {}, tt = new function() {
                    this.formatTimeStamp = function(t, e) {
                        if (!t) return 0;
                        var n;
                        e = e || "yyyy-MM-dd hh:mm:ss";
                        var i = new Date(1e3 * t), r = {
                            "M+": i.getMonth() + 1,
                            "d+": i.getDate(),
                            "h+": i.getHours(),
                            "m+": i.getMinutes(),
                            "s+": i.getSeconds()
                        };
                        for (var o in n = /(y+)/.test(e) ? e.replace(RegExp.$1, (i.getFullYear() + "").substr(4 - RegExp.$1.length)) : e, 
                        r) new RegExp("(" + o + ")").test(n) && (n = n.replace(RegExp.$1, 1 == RegExp.$1.length ? r[o] : ("00" + r[o]).substr(("" + r[o]).length)));
                        return n;
                    }, this.groupTypeEn2Ch = function(t) {
                        var e = null;
                        switch (t) {
                          case "Public":
                            e = "公开群";
                            break;

                          case "ChatRoom":
                            e = "聊天室";
                            break;

                          case "Private":
                            e = "私有群";
                            break;

                          case "AVChatRoom":
                            e = "直播聊天室";
                            break;

                          default:
                            e = t;
                        }
                        return e;
                    }, this.groupTypeCh2En = function(t) {
                        var e = null;
                        switch (t) {
                          case "公开群":
                            e = "Public";
                            break;

                          case "聊天室":
                            e = "ChatRoom";
                            break;

                          case "私有群":
                            e = "Private";
                            break;

                          case "直播聊天室":
                            e = "AVChatRoom";
                            break;

                          default:
                            e = t;
                        }
                        return e;
                    }, this.groupRoleEn2Ch = function(t) {
                        var e = null;
                        switch (t) {
                          case "Member":
                            e = "成员";
                            break;

                          case "Admin":
                            e = "管理员";
                            break;

                          case "Owner":
                            e = "群主";
                            break;

                          default:
                            e = t;
                        }
                        return e;
                    }, this.groupRoleCh2En = function(t) {
                        var e = null;
                        switch (t) {
                          case "成员":
                            e = "Member";
                            break;

                          case "管理员":
                            e = "Admin";
                            break;

                          case "群主":
                            e = "Owner";
                            break;

                          default:
                            e = t;
                        }
                        return e;
                    }, this.groupMsgFlagEn2Ch = function(t) {
                        var e = null;
                        switch (t) {
                          case "AcceptAndNotify":
                            e = "接收并提示";
                            break;

                          case "AcceptNotNotify":
                            e = "接收不提示";
                            break;

                          case "Discard":
                            e = "屏蔽";
                            break;

                          default:
                            e = t;
                        }
                        return e;
                    }, this.groupMsgFlagCh2En = function(t) {
                        var e = null;
                        switch (t) {
                          case "接收并提示":
                            e = "AcceptAndNotify";
                            break;

                          case "接收不提示":
                            e = "AcceptNotNotify";
                            break;

                          case "屏蔽":
                            e = "Discard";
                            break;

                          default:
                            e = t;
                        }
                        return e;
                    }, this.formatText2Html = function(t) {
                        var e = t;
                        return e && (e = (e = (e = this.xssFilter(e)).replace(/ /g, "&nbsp;")).replace(/\n/g, "<br/>")), 
                        e;
                    }, this.formatHtml2Text = function(t) {
                        var e = t;
                        return e && (e = (e = e.replace(/&nbsp;/g, " ")).replace(/<br\/>/g, "\n")), e;
                    }, this.getStrBytes = function(t) {
                        if (null == t || void 0 === t) return 0;
                        if ("string" != typeof t) return 0;
                        var e, n, i, r = 0;
                        for (n = 0, i = t.length; n < i; n++) r += (e = t.charCodeAt(n)) <= 127 ? 1 : e <= 2047 ? 2 : e <= 65535 ? 3 : 4;
                        return r;
                    }, this.xssFilter = function(t) {
                        return t = (t = (t = (t = t.toString()).replace(/[<]/g, "&lt;")).replace(/[>]/g, "&gt;")).replace(/"/g, "&quot;");
                    }, this.trimStr = function(t) {
                        return t ? (t = t.toString()).replace(/(^\s*)|(\s*$)/g, "") : "";
                    }, this.validNumber = function(t) {
                        return (t = t.toString()).match(/(^\d{1,8}$)/g);
                    }, this.getReturnError = function(t, e) {
                        return e || (e = -100), {
                            ActionStatus: _.FAIL,
                            ErrorCode: e,
                            ErrorInfo: t + "[" + e + "]"
                        };
                    }, this.setCookie = function(t, e, n, i, r) {
                        var o = new Date();
                        o.setTime(o.getTime() + 1e3 * n), document.cookie = t + "=" + escape(e) + ";expires=" + o.toGMTString();
                    }, this.getCookie = function(t) {
                        var e = document.cookie.match(new RegExp("(^| )" + t + "=([^;]*)(;|$)"));
                        return null != e ? unescape(e[2]) : null;
                    }, this.delCookie = function(t) {
                        var e = new Date();
                        e.setTime(e.getTime() - 1);
                        var n = this.getCookie(t);
                        null != n && (document.cookie = t + "=" + escape(n) + ";expires=" + e.toGMTString());
                    }, this.replaceObject = function(e, n) {
                        for (var i in n) if (e[i]) if (n[e[i]] = n[i], delete n[i], n[e[i]] instanceof Array) for (var r = n[e[i]].length, o = 0; o < r; o++) n[e[i]][o] = this.replaceObject(e, n[e[i]][o]); else "object" == t(n[e[i]]) && (n[e[i]] = this.replaceObject(e, n[e[i]]));
                        return n;
                    };
                }(), et = new function() {
                    var t = !0;
                    this.setOn = function(e) {
                        t = e;
                    }, this.getOn = function() {
                        return t;
                    }, this.error = function(e) {
                        try {
                            t && console.error(e);
                        } catch (t) {}
                    }, this.warn = function(e) {
                        try {
                            t && console.warn(e);
                        } catch (t) {}
                    }, this.info = function(e) {
                        try {
                            t && console.info(e);
                        } catch (t) {}
                    }, this.debug = function(e) {
                        try {
                            t && console.debug(e);
                        } catch (t) {}
                    };
                }(), nt = function(t) {
                    return t || (t = new Date()), Math.round(t.getTime() / 1e3);
                }, it = function() {
                    return H ? H += 1 : H = Math.round(1e7 * Math.random()), H;
                }, rt = function() {
                    return Math.round(4294967296 * Math.random());
                }, ot = function(t, e, n, i, r, o, a) {
                    !function(t, e, n, i, r, o, a) {
                        wx.request({
                            url: e,
                            data: n,
                            dataType: "json",
                            method: t,
                            header: {
                                "Content-Type": "application/json"
                            },
                            success: function(t) {
                                R = G = 0, o && o(t.data);
                            },
                            fail: function(t) {
                                setTimeout(function() {
                                    var t = tt.getReturnError("请求服务器失败,请检查你的网络是否正常", -2);
                                    a && a(t);
                                }, 16);
                            }
                        });
                    }(t, e, JSON.stringify(n), 0, 0, function(t) {
                        var e = null;
                        t && (e = t), o && o(e);
                    }, a);
                }, at = function() {
                    return $.sdkAppID && $.identifier;
                }, st = function(t, e) {
                    if (!at()) {
                        if (e) {
                            var n = tt.getReturnError("请登录", -4);
                            t && t(n);
                        }
                        return !1;
                    }
                    return !0;
                }, ct = function() {
                    return o;
                }, ut = function(t, e, n, i) {
                    var o = a;
                    o = ct() ? a.FORMAL.COMMON : a.TEST.COMMON, t == d && (o = ct() ? a.FORMAL.PIC : a.TEST.PIC);
                    var s = o + "/" + g[t] + "/" + t + "/" + e + "?websdkappid=537048168&v=" + r;
                    if (at()) {
                        if ("login" == e) s += "&identifier=" + encodeURIComponent($.identifier) + "&usersig=" + $.userSig; else if ($.tinyid && $.a2) s += "&tinyid=" + $.tinyid + "&a2=" + $.a2; else if (i) return et.error("tinyid或a2为空[" + t + "][" + e + "]"), 
                        i(tt.getReturnError("tinyid或a2为空[" + t + "][" + e + "]", -5)), !1;
                        s += "&contenttype=" + $.contentType;
                    }
                    return s += "&sdkappid=" + $.sdkAppID + "&accounttype=" + $.accountType + "&apn=" + $.apn + "&reqtime=" + nt();
                }, lt = function(t, e, n) {
                    var i = null;
                    return q && j[0] ? i = "http://" + j[0] + "/asn.com/stddownload_common_file?authkey=" + q + "&bid=" + C + "&subbid=" + $.sdkAppID + "&fileid=" + t + "&filetype=2107&openid=" + e + "&ver=0&filename=" + encodeURIComponent(n) : et.error("拼接文件下载url不报错：ip或者authkey为空"), 
                    J.downloadMap["uuid_" + t] = i, i;
                }, ft = function(t, e, n, i, r, o, a) {
                    var s = {
                        From_Account: e,
                        To_Account: r,
                        os_platform: 10,
                        Timestamp: nt().toString(),
                        Random: rt().toString(),
                        request_info: [ {
                            busi_id: o,
                            download_flag: i,
                            type: a,
                            uuid: t,
                            version: I.SERVER_VERSION,
                            auth_key: q,
                            ip: j[0]
                        } ]
                    };
                    Tt(s, function(t) {
                        0 == t.error_code && t.response_info && (J.downloadMap["uuid_" + s.uuid] = t.response_info.url), 
                        onAppliedDownloadUrl && onAppliedDownloadUrl({
                            uuid: s.uuid,
                            url: t.response_info.url,
                            maps: J.downloadMap
                        });
                    }, function(t) {
                        et.error("获取下载地址失败", s.uuid);
                    });
                }, dt = function() {
                    !function() {
                        for (var t in Y) {
                            var e = Y[t];
                            e && (e.abort(), Y[V] = null);
                        }
                        V = 0, Y = {};
                    }(), $ = {
                        sdkAppID: null,
                        appIDAt3rd: null,
                        accountType: null,
                        identifier: null,
                        identifierNick: null,
                        userSig: null,
                        contentType: "json",
                        apn: 1
                    }, z = {}, H = 0, W = [], Ft.clear(), Pt.clear(), L = null;
                }, pt = function(t, e, n) {
                    if ("longpolling" != t || 60008 != e && 91101 != e) {
                        var i = m[t];
                        if (i) {
                            var o = nt(), a = null, s = {
                                Code: e,
                                ErrMsg: n
                            };
                            if ($.a2 ? a = $.a2.substring(0, 10) + "_" + o + "_" + rt() : $.userSig && (a = $.userSig.substring(0, 10) + "_" + o + "_" + rt()), 
                            a) {
                                var c = {
                                    UniqKey: a,
                                    EventId: i,
                                    ReportTime: o,
                                    MsgCmdErrorCode: s
                                };
                                if ("login" == t) {
                                    var u = [];
                                    u.push(c), It({
                                        EvtItems: u,
                                        MainVersion: r,
                                        Version: "0"
                                    }, function(t) {
                                        u = null;
                                    }, function(t) {
                                        u = null;
                                    });
                                } else W.push(c), W.length >= 20 && It({
                                    EvtItems: W,
                                    MainVersion: r,
                                    Version: "0"
                                }, function(t) {
                                    W = [];
                                }, function(t) {
                                    W = [];
                                });
                            }
                        }
                    }
                }, ht = function(t, e) {
                    At.apiCall(c, "login", {
                        State: "Online"
                    }, function(n) {
                        if (n.TinyId) $.tinyid = n.TinyId; else if (e) return void e(tt.getReturnError("TinyId is empty", -10));
                        if (n.A2Key) $.a2 = n.A2Key; else if (e) return void e(tt.getReturnError("A2Key is empty", -11));
                        var i = {
                            From_Account: $.identifier,
                            To_Account: [ $.identifier ],
                            LastStandardSequence: 0,
                            TagList: [ "Tag_Profile_IM_Nick", "Tag_Profile_IM_Image" ]
                        };
                        Ct(i, function(e) {
                            var n, i;
                            if (e.UserProfileItem && e.UserProfileItem.length > 0) for (var r in e.UserProfileItem) for (var o in e.UserProfileItem[r].ProfileItem) switch (e.UserProfileItem[r].ProfileItem[o].Tag) {
                              case "Tag_Profile_IM_Nick":
                                (n = e.UserProfileItem[r].ProfileItem[o].Value) && ($.identifierNick = n);
                                break;

                              case "Tag_Profile_IM_Image":
                                (i = e.UserProfileItem[r].ProfileItem[o].Value) && ($.headurl = i);
                            }
                            t && t($.identifierNick, $.headurl);
                        }, e);
                    }, e);
                }, gt = function(t, e, n) {
                    if (!st(n, !1)) return dt(), void (e && e({
                        ActionStatus: _.OK,
                        ErrorCode: 0,
                        ErrorInfo: "logout success"
                    }));
                    "all" == t ? At.apiCall(c, "logout", {}, function(t) {
                        dt(), e && e(t);
                    }, n) : At.apiCall(c, "longpollinglogout", {
                        LongPollingId: L
                    }, function(t) {
                        dt(), e && e(t);
                    }, n);
                }, mt = function(t, e, n) {
                    (o || "undefined" == typeof stopPolling || 1 != stopPolling) && st(n, !0) && At.apiCall(c, "longpolling", t, e, n, N, !0);
                }, vt = function t(e, n, i, r) {
                    st(r, !0) && At.apiCall(c, "getmsg", {
                        Cookie: e,
                        SyncFlag: n
                    }, function(e) {
                        if (e.MsgList && e.MsgList.length) for (var n in e.MsgList) K.push(e.MsgList[n]);
                        1 == e.SyncFlag ? t(e.Cookie, e.SyncFlag, i, r) : (e.MsgList = K, K = [], i && i(e));
                    }, r);
                }, _t = function(t, e, n, i) {
                    if (st(i, !0)) {
                        var r = [];
                        for (var o in e) {
                            var a = {
                                To_Account: e[o].toAccount,
                                LastedMsgTime: e[o].lastedMsgTime
                            };
                            r.push(a);
                        }
                        At.apiCall(c, "msgreaded", {
                            C2CMsgReaded: {
                                Cookie: t,
                                C2CMsgReadedItem: r
                            }
                        }, n, i);
                    }
                }, yt = function t(e, n, i) {
                    st(i, !0) && At.apiCall(c, "getroammsg", e, function(r) {
                        var o = e.MaxCnt, a = r.Complete, s = r.MaxCnt, c = r.MsgKey, u = r.LastMsgTime;
                        if (r.MsgList && r.MsgList.length) for (var l in r.MsgList) X.push(r.MsgList[l]);
                        var f = null;
                        0 == a && s < o && (f = {
                            Peer_Account: e.Peer_Account,
                            MaxCnt: o - s,
                            LastMsgTime: u,
                            MsgKey: c
                        }), f ? t(f, n, i) : (r.MsgList = X, X = [], n && n(r));
                    }, i);
                }, xt = function(t, e, n) {
                    st(n, !0) && At.apiCall(u, "get_joined_group_list", {
                        Member_Account: t.Member_Account,
                        Limit: t.Limit,
                        Offset: t.Offset,
                        GroupType: t.GroupType,
                        ResponseFilter: {
                            GroupBaseInfoFilter: t.GroupBaseInfoFilter,
                            SelfInfoFilter: t.SelfInfoFilter
                        }
                    }, e, n);
                }, bt = function(t, e, n) {
                    st(n, !0) && At.apiCall(u, "msg_read_report", {
                        GroupId: t.GroupId,
                        MsgReadedSeq: t.MsgReadedSeq
                    }, e, n);
                }, wt = function(t) {
                    var e = [];
                    if (t.Fail_Account && t.Fail_Account.length && (e = t.Fail_Account), t.Invalid_Account && t.Invalid_Account.length) for (var n in t.Invalid_Account) e.push(t.Invalid_Account[n]);
                    if (e.length) for (var i in t.ActionStatus = _.FAIL, t.ErrorCode = 99999, t.ErrorInfo = "", 
                    e) {
                        var r = e[i];
                        for (var o in t.ResultItem) if (t.ResultItem[o].To_Account == r) {
                            var a = t.ResultItem[o].ResultCode;
                            t.ResultItem[o].ResultInfo = "[" + a + "]" + t.ResultItem[o].ResultInfo, t.ErrorInfo += t.ResultItem[o].ResultInfo + "\n";
                            break;
                        }
                    }
                    return t;
                }, Ct = function(t, e, n) {
                    t.To_Account.length > 100 && (t.To_Account.length = 100, et.error("获取用户资料人数不能超过100人")), 
                    st(n, !0) && At.apiCall(f, "portrait_get", {
                        From_Account: $.identifier,
                        To_Account: t.To_Account,
                        TagList: t.TagList
                    }, function(t) {
                        var i = [];
                        if (t.Fail_Account && t.Fail_Account.length && (i = t.Fail_Account), t.Invalid_Account && t.Invalid_Account.length) for (var r in t.Invalid_Account) i.push(t.Invalid_Account[r]);
                        if (i.length) for (var o in t.ActionStatus = _.FAIL, t.ErrorCode = 99999, t.ErrorInfo = "", 
                        i) {
                            var a = i[o];
                            for (var s in t.UserProfileItem) if (t.UserProfileItem[s].To_Account == a) {
                                var c = t.UserProfileItem[s].ResultCode;
                                t.UserProfileItem[s].ResultInfo = "[" + c + "]" + t.UserProfileItem[s].ResultInfo, 
                                t.ErrorInfo += "账号:" + a + "," + t.UserProfileItem[s].ResultInfo + "\n";
                                break;
                            }
                        }
                        t.ActionStatus == _.FAIL ? n && n(t) : e && e(t);
                    }, n);
                }, St = function(t, e, n) {
                    var i;
                    st(n, !0) && (i = ct() ? "pic_up" : "pic_up_test", At.apiCall(d, i, {
                        App_Version: I.APP_VERSION,
                        From_Account: $.identifier,
                        To_Account: t.To_Account,
                        Seq: t.Seq,
                        Timestamp: t.Timestamp,
                        Random: t.Random,
                        File_Str_Md5: t.File_Str_Md5,
                        File_Size: t.File_Size,
                        File_Type: t.File_Type,
                        Server_Ver: I.SERVER_VERSION,
                        Auth_Key: q,
                        Busi_Id: t.Busi_Id,
                        PkgFlag: t.PkgFlag,
                        Slice_Offset: t.Slice_Offset,
                        Slice_Size: t.Slice_Size,
                        Slice_Data: t.Slice_Data
                    }, e, n));
                }, It = function(t, e, n) {
                    st(n, !0) && At.apiCall("imopenstat", "web_report", t, e, n);
                }, Mt = function(t, e, n) {
                    st(n, !0) && At.apiCall(c, "getlongpollingid", {}, function(t) {
                        e && e(t);
                    }, n);
                }, Tt = function(t, e, n) {
                    At.apiCall(d, "apply_download", t, e, n);
                };
                s = "wechat";
                var At = new function() {
                    var t = null;
                    this.init = function(e, n, i) {
                        e && (t = e);
                    }, this.callBack = function(e) {
                        t && t(e);
                    }, this.clear = function() {
                        t = null;
                    }, this.apiCall = function(t, e, n, i, r, o, a) {
                        var s = ut(t, e, 0, r);
                        0 != s && ot("POST", s, n, 0, 0, function(o) {
                            var a = null, c = "";
                            "pic_up" == e && (n.Slice_Data = "");
                            var u = "\n request url: \n" + s + "\n request body: \n" + JSON.stringify(n) + "\n response: \n" + JSON.stringify(o);
                            o.ActionStatus == _.OK ? (et.info("[" + t + "][" + e + "]success: " + u), i && i(o), 
                            a = 0, c = "") : (a = o.ErrorCode, c = o.ErrorInfo, r && (o.SrcErrorInfo = o.ErrorInfo, 
                            o.ErrorInfo = "[" + t + "][" + e + "]failed: " + u, "longpolling" == e && 60008 == o.ErrorCode || et.error(o.ErrorInfo), 
                            r(o))), pt(e, a, c);
                        }, function(t) {
                            r && r(t), pt(e, t.ErrorCode, t.ErrorInfo);
                        });
                    };
                }(), kt = function t(e, n, i, r, o, a) {
                    this._impl = {
                        skey: t.skey(e, n),
                        type: e,
                        id: n,
                        name: i,
                        icon: r,
                        unread: 0,
                        isAutoRead: !1,
                        time: o >= 0 ? o : 0,
                        curMaxMsgSeq: a >= 0 ? a : 0,
                        msgs: [],
                        isFinished: 1
                    };
                };
                kt.skey = function(t, e) {
                    return t + e;
                }, kt.prototype.type = function() {
                    return this._impl.type;
                }, kt.prototype.id = function() {
                    return this._impl.id;
                }, kt.prototype.name = function() {
                    return this._impl.name;
                }, kt.prototype.icon = function() {
                    return this._impl.icon;
                }, kt.prototype.unread = function(t) {
                    if (void 0 === t) return this._impl.unread;
                    this._impl.unread = t;
                }, kt.prototype.isFinished = function(t) {
                    if (void 0 === t) return this._impl.isFinished;
                    this._impl.isFinished = t;
                }, kt.prototype.time = function() {
                    return this._impl.time;
                }, kt.prototype.curMaxMsgSeq = function(t) {
                    if (void 0 === t) return this._impl.curMaxMsgSeq;
                    this._impl.curMaxMsgSeq = t;
                }, kt.prototype.msgCount = function() {
                    return this._impl.msgs.length;
                }, kt.prototype.msg = function(t) {
                    return this._impl.msgs[t];
                }, kt.prototype.msgs = function() {
                    return this._impl.msgs;
                }, kt.prototype._impl_addMsg = function(t) {
                    this._impl.msgs.push(t), t.time > this._impl.time && (this._impl.time = t.time), 
                    t.seq > this._impl.curMaxMsgSeq && (this._impl.curMaxMsgSeq = t.seq), t.isSend || this._impl.isAutoRead || this._impl.unread++;
                };
                var Et = function(t, e) {
                    this.toAccount = t, this.lastedMsgTime = e;
                }, Ot = function(t, e, n, i, r, o, a, s) {
                    this.sess = t, this.subType = a >= 0 ? a : 0, this.fromAccount = o, this.fromAccountNick = s || o, 
                    this.isSend = Boolean(e), this.seq = n >= 0 ? n : it(), this.random = i >= 0 ? i : rt(), 
                    this.time = r >= 0 ? r : nt(), this.elems = [], t.type();
                };
                Ot.prototype.getSession = function() {
                    return this.sess;
                }, Ot.prototype.getType = function() {
                    return this.subType;
                }, Ot.prototype.getSubType = function() {
                    return this.subType;
                }, Ot.prototype.getFromAccount = function() {
                    return this.fromAccount;
                }, Ot.prototype.getFromAccountNick = function() {
                    return this.fromAccountNick;
                }, Ot.prototype.getIsSend = function() {
                    return this.isSend;
                }, Ot.prototype.getSeq = function() {
                    return this.seq;
                }, Ot.prototype.getTime = function() {
                    return this.time;
                }, Ot.prototype.getRandom = function() {
                    return this.random;
                }, Ot.prototype.getElems = function() {
                    return this.elems;
                }, Ot.prototype.getMsgUniqueId = function() {
                    return this.uniqueId;
                }, Ot.prototype.addText = function(t) {
                    this.addElem(new n.Msg.Elem(y.TEXT, t));
                }, Ot.prototype.addFace = function(t) {
                    this.addElem(new n.Msg.Elem(y.FACE, t));
                }, Ot.prototype.addImage = function(t) {
                    this.addElem(new n.Msg.Elem(y.IMAGE, t));
                }, Ot.prototype.addLocation = function(t) {
                    this.addElem(new n.Msg.Elem(y.LOCATION, t));
                }, Ot.prototype.addFile = function(t) {
                    this.addElem(new n.Msg.Elem(y.FILE, t));
                }, Ot.prototype.addCustom = function(t) {
                    this.addElem(new n.Msg.Elem(y.CUSTOM, t));
                }, Ot.prototype.addElem = function(t) {
                    this.elems.push(t);
                }, Ot.prototype.toHtml = function() {
                    var t = "";
                    for (var e in this.elems) t += this.elems[e].toHtml();
                    return t;
                }, (Ot.Elem = function(t, e) {
                    this.type = t, this.content = e;
                }).prototype.getType = function() {
                    return this.type;
                }, Ot.Elem.prototype.getContent = function() {
                    return this.content;
                }, Ot.Elem.prototype.toHtml = function() {
                    return this.content.toHtml();
                }, Ot.Elem.Text = function(t) {
                    this.text = tt.xssFilter(t);
                }, Ot.Elem.Text.prototype.getText = function() {
                    return this.text;
                }, Ot.Elem.Text.prototype.toHtml = function() {
                    return this.text;
                }, Ot.Elem.Face = function(t, e) {
                    this.index = t, this.data = e;
                }, Ot.Elem.Face.prototype.getIndex = function() {
                    return this.index;
                }, Ot.Elem.Face.prototype.getData = function() {
                    return this.data;
                }, Ot.Elem.Face.prototype.toHtml = function() {
                    var t = null, e = Q[this.data], n = Z[e];
                    return n && n[1] && (t = n[1]), t ? "<img src='" + t + "'/>" : this.data;
                }, Ot.Elem.Location = function(t, e, n) {
                    this.latitude = e, this.longitude = t, this.desc = n;
                }, Ot.Elem.Location.prototype.getLatitude = function() {
                    return this.latitude;
                }, Ot.Elem.Location.prototype.getLongitude = function() {
                    return this.longitude;
                }, Ot.Elem.Location.prototype.getDesc = function() {
                    return this.desc;
                }, Ot.Elem.Location.prototype.toHtml = function() {
                    return "经度=" + this.longitude + ",纬度=" + this.latitude + ",描述=" + this.desc;
                }, Ot.Elem.Images = function(t, e) {
                    this.UUID = t, "number" != typeof e && (e = parseInt(b[e] || b.UNKNOWN, 10)), this.ImageFormat = e, 
                    this.ImageInfoArray = [];
                }, Ot.Elem.Images.prototype.addImage = function(t) {
                    this.ImageInfoArray.push(t);
                }, Ot.Elem.Images.prototype.toHtml = function() {
                    var t = this.getImage(x.SMALL), e = this.getImage(x.LARGE), n = this.getImage(x.ORIGIN);
                    return e || (e = t), n || (n = t), "<img src='" + t.getUrl() + "#" + e.getUrl() + "#" + n.getUrl() + "' style='CURSOR: hand' id='" + this.getImageId() + "' bigImgUrl='" + e.getUrl() + "' onclick='imageClick(this)' />";
                }, Ot.Elem.Images.prototype.getImageId = function() {
                    return this.UUID;
                }, Ot.Elem.Images.prototype.getImageFormat = function() {
                    return this.ImageFormat;
                }, Ot.Elem.Images.prototype.getImage = function(t) {
                    for (var e in this.ImageInfoArray) if (this.ImageInfoArray[e].getType() == t) return this.ImageInfoArray[e];
                    var n = null;
                    return this.ImageInfoArray.forEach(function(e) {
                        e.getType() == t && (n = e);
                    }), n;
                }, Ot.Elem.Images.Image = function(t, e, n, i, r) {
                    this.type = t, this.size = e, this.width = n, this.height = i, this.url = r;
                }, Ot.Elem.Images.Image.prototype.getType = function() {
                    return this.type;
                }, Ot.Elem.Images.Image.prototype.getSize = function() {
                    return this.size;
                }, Ot.Elem.Images.Image.prototype.getWidth = function() {
                    return this.width;
                }, Ot.Elem.Images.Image.prototype.getHeight = function() {
                    return this.height;
                }, Ot.Elem.Images.Image.prototype.getUrl = function() {
                    return this.url;
                }, Ot.Elem.Sound = function(t, e, n, i, r, o, a) {
                    this.uuid = t, this.second = e, this.size = n, this.senderId = i, this.receiverId = r, 
                    this.downFlag = o, this.busiId = a == v.C2C ? 2 : 1, void 0 !== o && void 0 !== busiId ? ft(t, i, 0, o, r, this.busiId, S.SOUND) : this.downUrl = function(t, e) {
                        var n = null;
                        return q && j[0] ? n = "http://" + j[0] + "/asn.com/stddownload_common_file?authkey=" + q + "&bid=" + C + "&subbid=" + $.sdkAppID + "&fileid=" + t + "&filetype=2106&openid=" + e + "&ver=0" : et.error("拼接语音下载url不报错：ip或者authkey为空"), 
                        n;
                    }(t, i);
                }, Ot.Elem.Sound.prototype.getUUID = function() {
                    return this.uuid;
                }, Ot.Elem.Sound.prototype.getSecond = function() {
                    return this.second;
                }, Ot.Elem.Sound.prototype.getSize = function() {
                    return this.size;
                }, Ot.Elem.Sound.prototype.getSenderId = function() {
                    return this.senderId;
                }, Ot.Elem.Sound.prototype.getDownUrl = function() {
                    return this.downUrl;
                }, Ot.Elem.Sound.prototype.toHtml = function() {
                    return "ie" == s.type && parseInt(s.ver) <= 8 ? "[这是一条语音消息]demo暂不支持ie8(含)以下浏览器播放语音,语音URL:" + this.downUrl : '<audio id="uuid_' + this.uuid + '" src="' + this.downUrl + '" controls="controls" onplay="onChangePlayAudio(this)" preload="none"></audio>';
                }, Ot.Elem.File = function(t, e, n, i, r, o, a) {
                    this.uuid = t, this.name = e, this.size = n, this.senderId = i, this.receiverId = r, 
                    this.downFlag = o, this.busiId = a == v.C2C ? 2 : 1, void 0 !== o && void 0 !== busiId ? ft(t, i, 0, o, r, this.busiId, S.FILE) : this.downUrl = lt(t, i, e);
                }, Ot.Elem.File.prototype.getUUID = function() {
                    return this.uuid;
                }, Ot.Elem.File.prototype.getName = function() {
                    return this.name;
                }, Ot.Elem.File.prototype.getSize = function() {
                    return this.size;
                }, Ot.Elem.File.prototype.getSenderId = function() {
                    return this.senderId;
                }, Ot.Elem.File.prototype.getDownUrl = function() {
                    return this.downUrl;
                }, Ot.Elem.File.prototype.getDownFlag = function() {
                    return this.downFlag;
                }, Ot.Elem.File.prototype.toHtml = function() {
                    var t, e;
                    return t = this.size, e = "Byte", this.size >= 1024 && (t = Math.round(this.size / 1024), 
                    e = "KB"), '<a href="javascript" onclick="webim.onDownFile("' + this.uuid + '")" title="点击下载文件" ><i class="glyphicon glyphicon-file">&nbsp;' + this.name + "(" + t + e + ")</i></a>";
                }, Ot.Elem.GroupTip = function(t, e, n, i, r, o) {
                    this.opType = t, this.opUserId = e, this.groupId = n, this.groupName = i, this.userIdList = r || [], 
                    this.groupInfoList = [], this.memberInfoList = [], this.groupMemberNum = null, this.userinfo = o || [];
                }, Ot.Elem.GroupTip.prototype.addGroupInfo = function(t) {
                    this.groupInfoList.push(t);
                }, Ot.Elem.GroupTip.prototype.addMemberInfo = function(t) {
                    this.memberInfoList.push(t);
                }, Ot.Elem.GroupTip.prototype.getOpType = function() {
                    return this.opType;
                }, Ot.Elem.GroupTip.prototype.getOpUserId = function() {
                    return this.opUserId;
                }, Ot.Elem.GroupTip.prototype.getGroupId = function() {
                    return this.groupId;
                }, Ot.Elem.GroupTip.prototype.getGroupName = function() {
                    return this.groupName;
                }, Ot.Elem.GroupTip.prototype.getUserIdList = function() {
                    return this.userIdList;
                }, Ot.Elem.GroupTip.prototype.getUserInfo = function() {
                    return this.userinfo;
                }, Ot.Elem.GroupTip.prototype.getGroupInfoList = function() {
                    return this.groupInfoList;
                }, Ot.Elem.GroupTip.prototype.getMemberInfoList = function() {
                    return this.memberInfoList;
                }, Ot.Elem.GroupTip.prototype.getGroupMemberNum = function() {
                    return this.groupMemberNum;
                }, Ot.Elem.GroupTip.prototype.setGroupMemberNum = function(t) {
                    return this.groupMemberNum = t;
                }, Ot.Elem.GroupTip.prototype.toHtml = function() {
                    var t = "[群提示消息]";
                    switch (this.opType) {
                      case A.JOIN:
                        for (var e in t += this.opUserId + "邀请了", this.userIdList) if (t += this.userIdList[e] + ",", 
                        this.userIdList.length > 10 && 9 == e) {
                            t += "等" + this.userIdList.length + "人";
                            break;
                        }
                        t += "加入该群";
                        break;

                      case A.QUIT:
                        t += this.opUserId + "主动退出该群";
                        break;

                      case A.KICK:
                        for (var e in t += this.opUserId + "将", this.userIdList) if (t += this.userIdList[e] + ",", 
                        this.userIdList.length > 10 && 9 == e) {
                            t += "等" + this.userIdList.length + "人";
                            break;
                        }
                        t += "踢出该群";
                        break;

                      case A.SET_ADMIN:
                        for (var e in t += this.opUserId + "将", this.userIdList) if (t += this.userIdList[e] + ",", 
                        this.userIdList.length > 10 && 9 == e) {
                            t += "等" + this.userIdList.length + "人";
                            break;
                        }
                        t += "设为管理员";
                        break;

                      case A.CANCEL_ADMIN:
                        for (var e in t += this.opUserId + "取消", this.userIdList) if (t += this.userIdList[e] + ",", 
                        this.userIdList.length > 10 && 9 == e) {
                            t += "等" + this.userIdList.length + "人";
                            break;
                        }
                        t += "的管理员资格";
                        break;

                      case A.MODIFY_GROUP_INFO:
                        for (var e in t += this.opUserId + "修改了群资料：", this.groupInfoList) {
                            var n = this.groupInfoList[e].getType(), i = this.groupInfoList[e].getValue();
                            switch (n) {
                              case k.FACE_URL:
                                t += "群头像为" + i + "; ";
                                break;

                              case k.NAME:
                                t += "群名称为" + i + "; ";
                                break;

                              case k.OWNER:
                                t += "群主为" + i + "; ";
                                break;

                              case k.NOTIFICATION:
                                t += "群公告为" + i + "; ";
                                break;

                              case k.INTRODUCTION:
                                t += "群简介为" + i + "; ";
                                break;

                              default:
                                t += "未知信息为:type=" + n + ",value=" + i + "; ";
                            }
                        }
                        break;

                      case A.MODIFY_MEMBER_INFO:
                        for (var e in t += this.opUserId + "修改了群成员资料:", this.memberInfoList) {
                            var r = this.memberInfoList[e].getUserId(), o = this.memberInfoList[e].getShutupTime();
                            if (t += r + ": ", t += null != o && void 0 !== o ? 0 == o ? "取消禁言; " : "禁言" + o + "秒; " : " shutupTime为空", 
                            this.memberInfoList.length > 10 && 9 == e) {
                                t += "等" + this.memberInfoList.length + "人";
                                break;
                            }
                        }
                        break;

                      case A.READED:
                        Log.info("消息已读同步");
                        break;

                      default:
                        t += "未知群提示消息类型：type=" + this.opType;
                    }
                    return t;
                }, Ot.Elem.GroupTip.GroupInfo = function(t, e) {
                    this.type = t, this.value = e;
                }, Ot.Elem.GroupTip.GroupInfo.prototype.getType = function() {
                    return this.type;
                }, Ot.Elem.GroupTip.GroupInfo.prototype.getValue = function() {
                    return this.value;
                }, Ot.Elem.GroupTip.MemberInfo = function(t, e) {
                    this.userId = t, this.shutupTime = e;
                }, Ot.Elem.GroupTip.MemberInfo.prototype.getUserId = function() {
                    return this.userId;
                }, Ot.Elem.GroupTip.MemberInfo.prototype.getShutupTime = function() {
                    return this.shutupTime;
                }, Ot.Elem.Custom = function(t, e, n) {
                    this.data = t, this.desc = e, this.ext = n;
                }, Ot.Elem.Custom.prototype.getData = function() {
                    return this.data;
                }, Ot.Elem.Custom.prototype.getDesc = function() {
                    return this.desc;
                }, Ot.Elem.Custom.prototype.getExt = function() {
                    return this.ext;
                }, Ot.Elem.Custom.prototype.toHtml = function() {
                    return this.data;
                };
                var Pt = new function() {
                    var t = {}, n = [];
                    e = {}, this.cookie = "", this.syncFlag = 0;
                    var i = function(e) {
                        for (var n in t) e(t[n]);
                    };
                    this.sessMap = function() {
                        return t;
                    }, this.sessCount = function() {
                        return n.length;
                    }, this.sessByTypeId = function(e, n) {
                        var i = kt.skey(e, n);
                        return void 0 === i || null == i ? null : t[i];
                    }, this.delSessByTypeId = function(n, i) {
                        var r = kt.skey(n, i);
                        return void 0 !== r && null != r && (t[r] && (delete t[r], delete e[r]), !0);
                    }, this.resetCookieAndSyncFlag = function() {
                        this.cookie = "", this.syncFlag = 0;
                    }, this.setAutoRead = function(t, e, n) {
                        if (n && i(function(t) {
                            t._impl.isAutoRead = !1;
                        }), t && (t._impl.isAutoRead = e, e)) if (t._impl.unread = 0, t._impl.type == v.C2C) {
                            var r = [];
                            r.push(new Et(t._impl.id, t._impl.time)), _t(Pt.cookie, r, function(t) {
                                et.info("[setAutoRead]: c2CMsgReaded success");
                            }, function(t) {
                                et.error("[setAutoRead}: c2CMsgReaded failed:" + t.ErrorInfo);
                            });
                        } else if (t._impl.type == v.GROUP) {
                            var o = {
                                GroupId: t._impl.id,
                                MsgReadedSeq: t._impl.curMaxMsgSeq
                            };
                            bt(o, function(t) {
                                et.info("groupMsgReaded success");
                            }, function(t) {
                                et.error("groupMsgReaded failed:" + t.ErrorInfo);
                            });
                        }
                    }, this.c2CMsgReaded = function(t, e, n) {
                        var i = [];
                        i.push(new Et(t.To_Account, t.LastedMsgTime)), _t(Pt.cookie, i, function(t) {
                            e && (et.info("c2CMsgReaded success"), e(t));
                        }, function(t) {
                            n && (et.error("c2CMsgReaded failed:" + t.ErrorInfo), n(t));
                        });
                    }, this.addSession = function(e) {
                        t[e._impl.skey] = e;
                    }, this.delSession = function(e) {
                        delete t[e._impl.skey];
                    }, this.clear = function() {
                        t = {}, n = [], e = {}, this.cookie = "", this.syncFlag = 0;
                    }, this.addMsg = function(n) {
                        if (function(t) {
                            var n = !1, i = t.sess._impl.skey, r = t.isSend + t.seq + t.random;
                            return e[i] && e[i][r] && (n = !0), e[i] ? e[i][r] = {
                                time: t.time
                            } : (e[i] = {}, e[i][r] = {
                                time: t.time
                            }), n;
                        }(n)) return !1;
                        var i = n.sess;
                        return t[i._impl.skey] || this.addSession(i), i._impl_addMsg(n), !0;
                    }, this.updateTimeline = function() {
                        var t = new Array();
                        i(function(e) {
                            t.push(e);
                        }), t.sort(function(t, e) {
                            return e.time - t.time;
                        }), n = t;
                    };
                }(), Ft = new function() {
                    var t = null, e = null, n = {
                        1: null,
                        2: null,
                        3: null,
                        4: null,
                        5: null,
                        6: null,
                        7: null,
                        8: null,
                        9: null,
                        10: null,
                        11: null,
                        15: null,
                        255: null,
                        12: null
                    }, r = {
                        1: null,
                        2: null,
                        3: null,
                        4: null,
                        5: null,
                        6: null,
                        7: null,
                        8: null
                    }, o = {
                        1: null
                    }, a = null, s = !1, l = 0, f = 0, d = null, p = !1, h = 0, g = 90, m = null, x = {}, b = {
                        92: null,
                        96: null
                    }, w = 0, C = {}, S = {};
                    this.setLongPollingOn = function(t) {
                        s = t;
                    }, this.getLongPollingOn = function() {
                        return s;
                    }, this.resetLongPollingInfo = function() {
                        s = !1, l = 0, f = 0;
                    }, this.setBigGroupLongPollingOn = function(t) {
                        p = t;
                    }, this.setBigGroupLongPollingKey = function(t) {
                        m = t;
                    }, this.resetBigGroupLongPollingInfo = function() {
                        p = !1, h = 0, m = null, x = {};
                    }, this.setBigGroupLongPollingMsgMap = function(t, e) {
                        var n = x[t];
                        n ? (n = parseInt(n) + e, x[t] = n) : x[t] = e;
                    }, this.clear = function() {
                        e = null, n = {
                            1: null,
                            2: null,
                            3: null,
                            4: null,
                            5: null,
                            6: null,
                            7: null,
                            8: null,
                            9: null,
                            10: null,
                            11: null,
                            15: null,
                            255: null,
                            12: null
                        }, r = {
                            1: null,
                            2: null,
                            3: null,
                            4: null,
                            5: null,
                            6: null,
                            7: null,
                            8: null
                        }, o = {
                            1: null
                        }, t = null, s = !1, l = 0, f = 0, d = null, p = !1, h = 0, m = null, x = {}, S = {}, 
                        j = [], q = null;
                    };
                    var I = function(t, e) {
                        !function(t, e) {
                            st(e, !0) && At.apiCall(c, "authkey", {}, t, e);
                        }(function(e) {
                            j = e.IpList, q = e.AuthKey, e.ExpireTime, t && t(e);
                        }, function(t) {
                            et.error("initIpAndAuthkey failed:" + t.ErrorInfo), e && e(t);
                        });
                    }, U = function(t, e, n) {
                        w++;
                        var i = {
                            GroupId: t,
                            ReqMsgSeq: e,
                            ReqMsgNumber: n
                        };
                        et.warn("第" + w + "次补齐群消息,参数=" + JSON.stringify(i)), Ft.syncGroupMsgs(i);
                    }, B = function(t, e) {
                        var n = C[t];
                        n ? e > n && (C[t] = e) : C[t] = e;
                    }, z = function(t, e) {
                        for (var n in t) {
                            var i = t[n];
                            if (i.From_Account) {
                                var r = it(i, !1, !0);
                                r && e.push(r), B(i.ToGroupId, i.MsgSeq);
                            }
                        }
                        return e;
                    }, V = function(e, n) {
                        var i = {}, r = [];
                        for (var o in n) {
                            var a = i[n[o].ToGroupId];
                            a || (a = i[n[o].ToGroupId] = {
                                min: 99999999,
                                max: -1,
                                msgs: []
                            }), n[o].NoticeSeq > f && (et.warn("noticeSeq=" + f + ",msgNoticeSeq=" + n[o].NoticeSeq), 
                            f = n[o].NoticeSeq), n[o].Event = e, i[n[o].ToGroupId].msgs.push(n[o]), n[o].MsgSeq < a.min && (i[n[o].ToGroupId].min = n[o].MsgSeq), 
                            n[o].MsgSeq > a.max && (i[n[o].ToGroupId].max = n[o].MsgSeq);
                        }
                        for (var s in i) {
                            var c = i[s].max - i[s].min + 1, u = C[s];
                            u ? i[s].min - u > 1 || i[s].msgs.length < c ? (et.warn("发起一次补齐群消息请求,curMaxMsgSeq=" + u + ", minMsgSeq=" + i[s].min + ", maxMsgSeq=" + i[s].max + ", msgs.length=" + i[s].msgs.length + ", tempCount=" + c), 
                            U(s, i[s].max, i[s].max - u), B(s, i[s].max)) : r = z(i[s].msgs, r) : (et.warn("不存在该群的最大消息seq，群id=" + s), 
                            i[s].msgs.length < c ? (et.warn("发起一次补齐群消息请求,minMsgSeq=" + i[s].min + ", maxMsgSeq=" + i[s].max + ", msgs.length=" + i[s].msgs.length + ", tempCount=" + c), 
                            U(s, i[s].max, c), B(s, i[s].max)) : r = z(i[s].msgs, r));
                        }
                        r.length && Pt.updateTimeline(), t && r.length && t(r);
                    }, Y = function(e, n) {
                        var i = {}, r = [];
                        for (var o in n) {
                            var a = i[n[o].ToGroupId];
                            a || (a = i[n[o].ToGroupId] = {
                                min: 99999999,
                                max: -1,
                                msgs: []
                            }), n[o].NoticeSeq > f && (et.warn("noticeSeq=" + f + ",msgNoticeSeq=" + n[o].NoticeSeq), 
                            f = n[o].NoticeSeq), n[o].Event = e, i[n[o].ToGroupId].msgs.push(n[o]), n[o].MsgSeq < a.min && (i[n[o].ToGroupId].min = n[o].MsgSeq), 
                            n[o].MsgSeq > a.max && (i[n[o].ToGroupId].max = n[o].MsgSeq);
                        }
                        for (var s in i) {
                            var c = i[s].max - i[s].min + 1, u = C[s];
                            u ? i[s].min - u > 1 || i[s].msgs.length < c ? (et.warn("发起一次补齐群消息请求,curMaxMsgSeq=" + u + ", minMsgSeq=" + i[s].min + ", maxMsgSeq=" + i[s].max + ", msgs.length=" + i[s].msgs.length + ", tempCount=" + c), 
                            U(s, i[s].max, i[s].max - u), B(s, i[s].max)) : r = z(i[s].msgs, r) : (et.warn("不存在该群的最大消息seq，群id=" + s), 
                            i[s].msgs.length < c ? (et.warn("发起一次补齐群消息请求,minMsgSeq=" + i[s].min + ", maxMsgSeq=" + i[s].max + ", msgs.length=" + i[s].msgs.length + ", tempCount=" + c), 
                            U(s, i[s].max, c), B(s, i[s].max)) : r = z(i[s].msgs, r));
                        }
                        r.length && Pt.updateTimeline(), t && r.length && t(r);
                    }, H = function(t, e) {
                        for (var i in t) {
                            var r = t[i], o = r.MsgBody, a = o.ReportType;
                            if (0 == e && r.NoticeSeq && r.NoticeSeq > f && (f = r.NoticeSeq), r.GroupInfo.To_Account, 
                            e) {
                                var s = r.ToGroupId + "_" + a + "_" + o.Operator_Account;
                                if (S[s]) {
                                    et.warn("收到重复的群系统消息：key=" + s);
                                    continue;
                                }
                                S[s] = !0;
                            }
                            var c = {
                                SrcFlag: 0,
                                ReportType: a,
                                GroupId: r.ToGroupId,
                                GroupName: r.GroupInfo.GroupName,
                                Operator_Account: o.Operator_Account,
                                MsgTime: r.MsgTimeStamp,
                                groupReportTypeMsg: o
                            };
                            switch (a) {
                              case E.JOIN_GROUP_REQUEST:
                                c.RemarkInfo = o.RemarkInfo, c.MsgKey = o.MsgKey, c.Authentication = o.Authentication, 
                                c.UserDefinedField = r.UserDefinedField, c.From_Account = r.From_Account, c.MsgSeq = r.ClientSeq, 
                                c.MsgRandom = r.MsgRandom;
                                break;

                              case E.JOIN_GROUP_ACCEPT:
                              case E.JOIN_GROUP_REFUSE:
                                c.RemarkInfo = o.RemarkInfo;
                                break;

                              case E.KICK:
                              case E.DESTORY:
                              case E.CREATE:
                              case E.INVITED_JOIN_GROUP_REQUEST:
                              case E.INVITED_JOIN_GROUP_REQUEST_AGREE:
                              case E.QUIT:
                              case E.SET_ADMIN:
                              case E.CANCEL_ADMIN:
                              case E.REVOKE:
                              case E.READED:
                                break;

                              case E.CUSTOM:
                                c.MsgSeq = r.MsgSeq, c.UserDefinedField = o.UserDefinedField;
                                break;

                              default:
                                et.error("未知群系统消息类型：reportType=" + a);
                            }
                            if (e) n[a] ? n[a](c) : et.error("未知群系统消息类型：reportType=" + a); else if (n[a]) if (a == E.READED) for (var u = c.groupReportTypeMsg.GroupReadInfoArray, l = 0, d = u.length; l < d; l++) {
                                var p = u[l];
                                n[a](p);
                            } else n[a](c);
                        }
                    }, K = function(t, e) {
                        var n, i, o;
                        for (var a in t) {
                            switch (i = (n = t[a]).PushType, 0 == e && n.NoticeSeq && n.NoticeSeq > f && (f = n.NoticeSeq), 
                            o = {
                                Type: i
                            }, i) {
                              case O.FRIEND_ADD:
                                o.Accounts = n.FriendAdd_Account;
                                break;

                              case O.FRIEND_DELETE:
                                o.Accounts = n.FriendDel_Account;
                                break;

                              case O.PENDENCY_ADD:
                                o.PendencyList = n.PendencyAdd;
                                break;

                              case O.PENDENCY_DELETE:
                                o.Accounts = n.FrienPencydDel_Account;
                                break;

                              case O.BLACK_LIST_ADD:
                                o.Accounts = n.BlackListAdd_Account;
                                break;

                              case O.BLACK_LIST_DELETE:
                                o.Accounts = n.BlackListDel_Account;
                                break;

                              default:
                                et.error("未知好友系统通知类型：friendNotice=" + JSON.stringify(n));
                            }
                            e ? i == O.PENDENCY_ADD && r[i] && r[i](o) : r[i] && r[i](o);
                        }
                    }, X = function(t, e) {
                        var n, i, r;
                        for (var a in t) {
                            switch (i = (n = t[a]).PushType, 0 == e && n.NoticeSeq && n.NoticeSeq > f && (f = n.NoticeSeq), 
                            r = {
                                Type: i
                            }, i) {
                              case 1:
                                r.Profile_Account = n.Profile_Account, r.ProfileList = n.ProfileList;
                                break;

                              default:
                                et.error("未知资料系统通知类型：profileNotice=" + JSON.stringify(n));
                            }
                            e ? 1 == i && o[i] && o[i](r) : o[i] && o[i](r);
                        }
                    }, W = function(t) {
                        var e = t.MsgBody, i = e.ReportType, r = (t.GroupInfo.To_Account, {
                            SrcFlag: 1,
                            ReportType: i,
                            GroupId: t.ToGroupId,
                            GroupName: t.GroupInfo.GroupName,
                            Operator_Account: e.Operator_Account,
                            MsgTime: t.MsgTimeStamp
                        });
                        switch (i) {
                          case E.JOIN_GROUP_REQUEST:
                            r.RemarkInfo = e.RemarkInfo, r.MsgKey = e.MsgKey, r.Authentication = e.Authentication, 
                            r.UserDefinedField = t.UserDefinedField, r.From_Account = t.From_Account, r.MsgSeq = t.ClientSeq, 
                            r.MsgRandom = t.MsgRandom;
                            break;

                          case E.JOIN_GROUP_ACCEPT:
                          case E.JOIN_GROUP_REFUSE:
                            r.RemarkInfo = e.RemarkInfo;
                            break;

                          case E.KICK:
                          case E.DESTORY:
                          case E.CREATE:
                          case E.INVITED_JOIN_GROUP_REQUEST:
                          case E.INVITED_JOIN_GROUP_REQUEST_AGREE:
                          case E.QUIT:
                          case E.SET_ADMIN:
                          case E.CANCEL_ADMIN:
                          case E.REVOKE:
                            break;

                          case E.CUSTOM:
                            r.MsgSeq = t.MsgSeq, r.UserDefinedField = e.UserDefinedField;
                            break;

                          default:
                            et.error("未知群系统消息类型：reportType=" + i);
                        }
                        n[i] && n[i](r);
                    }, J = function(t) {
                        for (var e = 0, n = t.length; e < n; e++) Q(t[e]);
                    }, Q = function(t) {
                        var e = t.SubMsgType;
                        switch (e) {
                          case 92:
                            break;

                          case 96:
                            b[e] && b[e]();
                            break;

                          default:
                            et.error("未知C2c系统消息：subType=" + e);
                        }
                        if (t.ReadC2cMsgNotify.UinPairReadArray && b[e]) for (var n = 0, i = t.ReadC2cMsgNotify.UinPairReadArray.length; n < i; n++) {
                            var r = t.ReadC2cMsgNotify.UinPairReadArray[n];
                            b[e](r);
                        }
                    };
                    this.longPolling = function(t, e) {
                        function n() {
                            mt(i, function(t) {
                                for (var e in t.EventArray) {
                                    var n = t.EventArray[e];
                                    switch (n.Event) {
                                      case M.C2C:
                                        l = n.NotifySeq, et.warn("longpolling: received new c2c msg"), Ft.syncMsgs();
                                        break;

                                      case M.GROUP_COMMON:
                                        et.warn("longpolling: received new group msgs"), Y(n.Event, n.GroupMsgArray);
                                        break;

                                      case M.GROUP_TIP:
                                      case M.GROUP_TIP2:
                                        et.warn("longpolling: received new group tips"), Y(n.Event, n.GroupTips);
                                        break;

                                      case M.GROUP_SYSTEM:
                                        et.warn("longpolling: received new group system msgs"), H(n.GroupTips, !1);
                                        break;

                                      case M.FRIEND_NOTICE:
                                        et.warn("longpolling: received new friend system notice"), K(n.FriendListMod, !1);
                                        break;

                                      case M.PROFILE_NOTICE:
                                        et.warn("longpolling: received new profile system notice"), X(n.ProfileDataMod, !1);
                                        break;

                                      case M.C2C_COMMON:
                                        f = n.C2cMsgArray[0].NoticeSeq, et.warn("longpolling: received new c2c_common msg", f), 
                                        V(n.Event, n.C2cMsgArray);
                                        break;

                                      case M.C2C_EVENT:
                                        f = n.C2cNotifyMsgArray[0].NoticeSeq, et.warn("longpolling: received new c2c_event msg"), 
                                        J(n.C2cNotifyMsgArray);
                                        break;

                                      default:
                                        et.error("longpolling收到未知新消息类型: Event=" + n.Event);
                                    }
                                }
                                var i = {
                                    ActionStatus: _.OK,
                                    ErrorCode: 0
                                };
                                Z(i);
                            }, function(t) {
                                Z(t), e && e(t);
                            });
                        }
                        var i = {
                            Timeout: N / 1e3,
                            Cookie: {
                                NotifySeq: l,
                                NoticeSeq: f
                            }
                        };
                        L ? (i.Cookie.LongPollingId = L, n()) : Mt(0, function(t) {
                            L = i.Cookie.LongPollingId = t.LongPollingId, N = t.Timeout > 60 ? N : 1e3 * t.Timeout, 
                            n();
                        });
                    }, this.bigGroupLongPolling = function(t, e) {
                        var n = i;
                        !function(t, e, n, i) {
                            At.apiCall("group_open_long_polling_http_noauth_svc", "get_msg", t, e, n, i);
                        }({
                            USP: 1,
                            StartSeq: h,
                            HoldTime: g,
                            Key: m
                        }, function(e) {
                            if (n == i) {
                                var r = [];
                                if (h = e.NextSeq, g = e.HoldTime, m = e.Key, e.RspMsgList && e.RspMsgList.length > 0) {
                                    for (var o, a, s, c = 0, u = e.RspMsgList.length - 1; u >= 0; u--) if (o = e.RspMsgList[u], 
                                    !(o = tt.replaceObject({
                                        F_Account: "From_Account",
                                        T_Account: "To_Account",
                                        FAType: "EnumFrom_AccountType",
                                        TAType: "EnumTo_AccountType",
                                        GCode: "GroupCode",
                                        GName: "GroupName",
                                        GId: "GroupId",
                                        MFlg: "MsgFlag",
                                        FAEInfo: "MsgFrom_AccountExtraInfo",
                                        Evt: "Event",
                                        GInfo: "GroupInfo",
                                        BPlc: "IsPlaceMsg",
                                        MBody: "MsgBody",
                                        Pri: "MsgPriority",
                                        Rdm: "MsgRandom",
                                        MSeq: "MsgSeq",
                                        TStp: "MsgTimeStamp",
                                        TGId: "ToGroupId",
                                        UEInfo: "UinExtInfo",
                                        UId: "UserId",
                                        BSys: "IsSystemMsg",
                                        FAHUrl: "From_AccountHeadurl",
                                        FANick: "From_AccountNick"
                                    }, o)).IsPlaceMsg && o.From_Account && o.MsgBody && 0 != o.MsgBody.length) switch (a = o.Event) {
                                      case M.GROUP_COMMON:
                                        et.info("bigGroupLongPolling: return new group msg"), (s = it(o, !1, !1)) && r.push(s), 
                                        c += 1;
                                        break;

                                      case M.GROUP_TIP:
                                      case M.GROUP_TIP2:
                                        et.info("bigGroupLongPolling: return new group tip"), (s = it(o, !1, !1)) && r.push(s);
                                        break;

                                      case M.GROUP_SYSTEM:
                                        et.info("bigGroupLongPolling: new group system msg"), W(o);
                                        break;

                                      default:
                                        et.error("bigGroupLongPolling收到未知新消息类型: Event=" + a);
                                    }
                                    c > 0 && (Ft.setBigGroupLongPollingMsgMap(o.ToGroupId, c), et.warn("current bigGroupLongPollingMsgMap: " + JSON.stringify(x)));
                                }
                                G = 0;
                                var l = {
                                    ActionStatus: _.OK,
                                    ErrorCode: P.ON,
                                    ErrorInfo: "connection is ok..."
                                };
                                At.callBack(l), t ? t(r) : d && d(r), p && Ft.bigGroupLongPolling();
                            }
                        }, function(t) {
                            if (60008 != t.ErrorCode && (et.error(t.ErrorInfo), G++), 91101 == t.ErrorCode && (et.error("多实例登录，被kick"), 
                            a && a()), G < 10) p && Ft.bigGroupLongPolling(); else {
                                var n = {
                                    ActionStatus: _.FAIL,
                                    ErrorCode: P.OFF,
                                    ErrorInfo: "connection is off"
                                };
                                At.callBack(n);
                            }
                            e && e(t);
                        }, 1e3 * g);
                    };
                    var Z = function(t) {
                        if (0 == t.ErrorCode || 60008 == t.ErrorCode) {
                            var e;
                            R = 0, D = !1;
                            var n = !1;
                            switch (F) {
                              case P.INIT:
                                n = !0, F = P.ON, e = "create connection successfully(INIT->ON)";
                                break;

                              case P.ON:
                                e = "connection is on...(ON->ON)";
                                break;

                              case P.RECONNECT:
                                F = P.ON, e = "connection is on...(RECONNECT->ON)";
                                break;

                              case P.OFF:
                                n = !0, F = P.RECONNECT, e = "reconnect successfully(OFF->RECONNECT)";
                            }
                            var i = {
                                ActionStatus: _.OK,
                                ErrorCode: F,
                                ErrorInfo: e
                            };
                            n && At.callBack(i), s && Ft.longPolling();
                        } else if (91101 == t.ErrorCode) et.error("多实例登录，被kick"), a && a(); else if (R++, 
                        et.warn("longPolling接口第" + R + "次报错: " + t.ErrorInfo), R <= 10) setTimeout(nt, 100); else {
                            F = P.OFF;
                            var r = {
                                ActionStatus: _.FAIL,
                                ErrorCode: P.OFF,
                                ErrorInfo: "connection is off"
                            };
                            0 == D && At.callBack(r), D = !0, et.warn("5000毫秒之后,SDK会发起新的longPolling请求..."), 
                            setTimeout(nt, 5e3);
                        }
                    }, nt = (V = function(e, n) {
                        var i, r = [];
                        for (var o in i = n) {
                            var a, s, c, u = i[o];
                            u.From_Account == $.identifier ? (a = !0, s = u.To_Account, c = "") : (a = !1, s = u.From_Account, 
                            c = "");
                            var l = Pt.sessByTypeId(v.C2C, s);
                            l || (l = new kt(v.C2C, s, s, c, 0, 0));
                            var f = new Ot(l, a, u.MsgSeq, u.MsgRandom, u.MsgTimeStamp, u.From_Account), d = null, p = null, h = null;
                            for (var g in u.MsgBody) {
                                switch (h = (d = u.MsgBody[g]).MsgType) {
                                  case y.TEXT:
                                    p = new Ot.Elem.Text(d.MsgContent.Text);
                                    break;

                                  case y.FACE:
                                    p = new Ot.Elem.Face(d.MsgContent.Index, d.MsgContent.Data);
                                    break;

                                  case y.IMAGE:
                                    for (var m in p = new Ot.Elem.Images(d.MsgContent.UUID, d.MsgContent.ImageFormat || ""), 
                                    d.MsgContent.ImageInfoArray) {
                                        var _ = d.MsgContent.ImageInfoArray[m];
                                        p.addImage(new Ot.Elem.Images.Image(_.Type, _.Size, _.Width, _.Height, _.URL));
                                    }
                                    break;

                                  case y.SOUND:
                                    d.MsgContent ? p = new Ot.Elem.Sound(d.MsgContent.UUID, d.MsgContent.Second, d.MsgContent.Size, u.From_Account, u.To_Account, d.MsgContent.Download_Flag, v.C2C) : (h = y.TEXT, 
                                    p = new Ot.Elem.Text("[语音消息]下载地址解析出错"));
                                    break;

                                  case y.LOCATION:
                                    p = new Ot.Elem.Location(d.MsgContent.Longitude, d.MsgContent.Latitude, d.MsgContent.Desc);
                                    break;

                                  case y.FILE:
                                  case y.FILE + " ":
                                    h = y.FILE, d.MsgContent ? p = new Ot.Elem.File(d.MsgContent.UUID, d.MsgContent.FileName, d.MsgContent.FileSize, u.From_Account, u.To_Account, d.MsgContent.Download_Flag, v.C2C) : (h = y.TEXT, 
                                    p = new Ot.Elem.Text("[文件消息下载地址解析出错]"));
                                    break;

                                  case y.CUSTOM:
                                    try {
                                        var x = JSON.parse(d.MsgContent.Data);
                                        if (x && x.userAction && 14 == x.userAction) continue;
                                    } catch (t) {}
                                    h = y.CUSTOM, p = new Ot.Elem.Custom(d.MsgContent.Data, d.MsgContent.Desc, d.MsgContent.Ext);
                                    break;

                                  default:
                                    h = y.TEXT, p = new Ot.Elem.Text("web端暂不支持" + d.MsgType + "消息");
                                }
                                f.elems.push(new Ot.Elem(h, p));
                            }
                            f.elems.length > 0 && Pt.addMsg(f) && r.push(f);
                        }
                        r.length > 0 && Pt.updateTimeline(), r.length > 0 && t && t(r);
                    }, function() {
                        s && Ft.longPolling();
                    });
                    this.syncMsgs = function(e, n) {
                        var i = [], r = [];
                        vt(Pt.cookie, Pt.syncFlag, function(n) {
                            for (var o in 2 == n.SyncFlag && (Pt.syncFlag = 0), r = n.MsgList, Pt.cookie = n.Cookie, 
                            r) {
                                var a, s, c, u = r[o];
                                u.From_Account == $.identifier ? (a = !0, s = u.To_Account, c = "") : (a = !1, s = u.From_Account, 
                                c = "");
                                var l = Pt.sessByTypeId(v.C2C, s);
                                l || (l = new kt(v.C2C, s, s, c, 0, 0));
                                var f = new Ot(l, a, u.MsgSeq, u.MsgRandom, u.MsgTimeStamp, u.From_Account), d = null, p = null, h = null;
                                for (var g in u.MsgBody) {
                                    switch (h = (d = u.MsgBody[g]).MsgType) {
                                      case y.TEXT:
                                        p = new Ot.Elem.Text(d.MsgContent.Text);
                                        break;

                                      case y.FACE:
                                        p = new Ot.Elem.Face(d.MsgContent.Index, d.MsgContent.Data);
                                        break;

                                      case y.IMAGE:
                                        for (var m in p = new Ot.Elem.Images(d.MsgContent.UUID, d.MsgContent.ImageFormat), 
                                        d.MsgContent.ImageInfoArray) {
                                            var _ = d.MsgContent.ImageInfoArray[m];
                                            p.addImage(new Ot.Elem.Images.Image(_.Type, _.Size, _.Width, _.Height, _.URL));
                                        }
                                        break;

                                      case y.SOUND:
                                        d.MsgContent ? p = new Ot.Elem.Sound(d.MsgContent.UUID, d.MsgContent.Second, d.MsgContent.Size, u.From_Account, u.To_Account, d.MsgContent.Download_Flag, v.C2C) : (h = y.TEXT, 
                                        p = new Ot.Elem.Text("[语音消息]下载地址解析出错"));
                                        break;

                                      case y.LOCATION:
                                        p = new Ot.Elem.Location(d.MsgContent.Longitude, d.MsgContent.Latitude, d.MsgContent.Desc);
                                        break;

                                      case y.FILE:
                                      case y.FILE + " ":
                                        h = y.FILE, d.MsgContent ? p = new Ot.Elem.File(d.MsgContent.UUID, d.MsgContent.FileName, d.MsgContent.FileSize, u.From_Account, u.To_Account, d.MsgContent.Download_Flag, v.C2C) : (h = y.TEXT, 
                                        p = new Ot.Elem.Text("[文件消息下载地址解析出错]"));
                                        break;

                                      case y.CUSTOM:
                                        try {
                                            var x = JSON.parse(d.MsgContent.Data);
                                            if (x && x.userAction && 14 == x.userAction) continue;
                                        } catch (t) {}
                                        h = y.CUSTOM, p = new Ot.Elem.Custom(d.MsgContent.Data, d.MsgContent.Desc, d.MsgContent.Ext);
                                        break;

                                      default:
                                        h = y.TEXT, p = new Ot.Elem.Text("web端暂不支持" + d.MsgType + "消息");
                                    }
                                    f.elems.push(new Ot.Elem(h, p));
                                }
                                f.elems.length > 0 && Pt.addMsg(f) && i.push(f);
                            }
                            !function(t) {
                                for (var e in t) {
                                    var n = t[e];
                                    switch (H(n.GroupTips, !0), n.Event) {
                                      case M.GROUP_SYSTEM:
                                        et.warn("handlerApplyJoinGroupSystemMsgs： handler new group system msg"), H(n.GroupTips, !0);
                                        break;

                                      default:
                                        et.error("syncMsgs收到未知的群系统消息类型: Event=" + n.Event);
                                    }
                                }
                            }(n.EventArray), i.length > 0 && Pt.updateTimeline(), e ? e(i) : i.length > 0 && t && t(i);
                        }, function(t) {
                            et.error("getMsgs failed:" + t.ErrorInfo), n && n(t);
                        });
                    }, this.getC2CHistoryMsgs = function(t, e, n) {
                        if (t.Peer_Account || !n) if (t.MaxCnt || (t.MaxCnt = 15), t.MaxCnt <= 0 && n) n(tt.getReturnError("MaxCnt should be greater than 0", -14)); else {
                            if (t.MaxCnt > 15) return n ? void n(tt.getReturnError("MaxCnt can not be greater than 15", -15)) : void 0;
                            null != t.MsgKey && void 0 !== t.MsgKey || (t.MsgKey = "");
                            var i = {
                                Peer_Account: t.Peer_Account,
                                MaxCnt: t.MaxCnt,
                                LastMsgTime: t.LastMsgTime,
                                MsgKey: t.MsgKey
                            };
                            yt(i, function(n) {
                                var i, r = [];
                                i = n.MsgList;
                                var o = Pt.sessByTypeId(v.C2C, t.Peer_Account);
                                for (var a in o || (o = new kt(v.C2C, t.Peer_Account, t.Peer_Account, "", 0, 0)), 
                                i) {
                                    var s, c = i[a];
                                    c.From_Account == $.identifier ? (s = !0, c.To_Account) : (s = !1, c.From_Account);
                                    var u = new Ot(o, s, c.MsgSeq, c.MsgRandom, c.MsgTimeStamp, c.From_Account), l = null, f = null, d = null;
                                    for (var p in c.MsgBody) {
                                        switch (d = (l = c.MsgBody[p]).MsgType) {
                                          case y.TEXT:
                                            f = new Ot.Elem.Text(l.MsgContent.Text);
                                            break;

                                          case y.FACE:
                                            f = new Ot.Elem.Face(l.MsgContent.Index, l.MsgContent.Data);
                                            break;

                                          case y.IMAGE:
                                            for (var h in f = new Ot.Elem.Images(l.MsgContent.UUID, l.MsgContent.ImageFormat), 
                                            l.MsgContent.ImageInfoArray) {
                                                var g = l.MsgContent.ImageInfoArray[h];
                                                f.addImage(new Ot.Elem.Images.Image(g.Type, g.Size, g.Width, g.Height, g.URL));
                                            }
                                            break;

                                          case y.SOUND:
                                            l.MsgContent ? f = new Ot.Elem.Sound(l.MsgContent.UUID, l.MsgContent.Second, l.MsgContent.Size, c.From_Account, c.To_Account, l.MsgContent.Download_Flag, v.C2C) : (d = y.TEXT, 
                                            f = new Ot.Elem.Text("[语音消息]下载地址解析出错"));
                                            break;

                                          case y.LOCATION:
                                            f = new Ot.Elem.Location(l.MsgContent.Longitude, l.MsgContent.Latitude, l.MsgContent.Desc);
                                            break;

                                          case y.FILE:
                                          case y.FILE + " ":
                                            d = y.FILE, l.MsgContent ? f = new Ot.Elem.File(l.MsgContent.UUID, l.MsgContent.FileName, l.MsgContent.FileSize, c.From_Account, c.To_Account, l.MsgContent.Download_Flag, v.C2C) : (d = y.TEXT, 
                                            f = new Ot.Elem.Text("[文件消息下载地址解析出错]"));
                                            break;

                                          case y.CUSTOM:
                                            d = y.CUSTOM, f = new Ot.Elem.Custom(l.MsgContent.Data, l.MsgContent.Desc, l.MsgContent.Ext);
                                            break;

                                          default:
                                            d = y.TEXT, f = new Ot.Elem.Text("web端暂不支持" + l.MsgType + "消息");
                                        }
                                        u.elems.push(new Ot.Elem(d, f));
                                    }
                                    Pt.addMsg(u), r.push(u);
                                }
                                if (Pt.updateTimeline(), e) {
                                    var m = {
                                        Complete: n.Complete,
                                        MsgCount: r.length,
                                        LastMsgTime: n.LastMsgTime,
                                        MsgKey: n.MsgKey,
                                        MsgList: r
                                    };
                                    o.isFinished(n.Complete), e(m);
                                }
                            }, function(t) {
                                et.error("getC2CHistoryMsgs failed:" + t.ErrorInfo), n && n(t);
                            });
                        } else n(tt.getReturnError("Peer_Account is empty", -13));
                    }, this.syncGroupMsgs = function(e, n, i) {
                        if (e.ReqMsgSeq <= 0) {
                            if (i) {
                                var r = tt.getReturnError("ReqMsgSeq must be greater than 0", -16);
                                i(r);
                            }
                        } else !function(t, e, n) {
                            st(n, !0) && At.apiCall(u, "group_msg_get", {
                                GroupId: t.GroupId,
                                ReqMsgSeq: t.ReqMsgSeq,
                                ReqMsgNumber: t.ReqMsgNumber
                            }, e, n);
                        }({
                            GroupId: e.GroupId,
                            ReqMsgSeq: e.ReqMsgSeq,
                            ReqMsgNumber: e.ReqMsgNumber
                        }, function(e) {
                            var i = [], r = (e.GroupId, e.RspMsgList), o = e.IsFinished;
                            if (null != r && void 0 !== r) {
                                for (var a = r.length - 1; a >= 0; a--) {
                                    var s = r[a];
                                    if (!s.IsPlaceMsg && s.From_Account && s.MsgBody && 0 != s.MsgBody.length) {
                                        var c = it(s, !0, !0, o);
                                        c && i.push(c);
                                    }
                                }
                                i.length > 0 && Pt.updateTimeline(), n ? n(i) : i.length > 0 && t && t(i);
                            } else n && n([]);
                        }, function(t) {
                            et.error("getGroupMsgs failed:" + t.ErrorInfo), i && i(t);
                        });
                    };
                    var it = function(t, n, i, r) {
                        if (t.IsPlaceMsg || !t.From_Account || !t.MsgBody || 0 == t.MsgBody.length) return null;
                        var o, a, s, c, u = t.ToGroupId, l = u;
                        t.GroupInfo && t.GroupInfo.GroupName && (l = t.GroupInfo.GroupName), s = t.From_Account, 
                        t.GroupInfo && (t.GroupInfo.From_AccountNick && (s = t.GroupInfo.From_AccountNick), 
                        c = t.GroupInfo.From_AccountHeadurl ? t.GroupInfo.From_AccountHeadurl : null), t.From_Account == $.identifier ? (o = !0, 
                        t.From_Account, a = "") : (o = !1, t.From_Account, a = "");
                        var f = Pt.sessByTypeId(v.GROUP, u);
                        f || (f = new kt(v.GROUP, u, l, a, 0, 0)), void 0 !== r && f.isFinished(r || 0);
                        var d = T.COMMON;
                        if (M.GROUP_TIP == t.Event || M.GROUP_TIP2 == t.Event) {
                            d = T.TIP;
                            var p = t.MsgBody;
                            t.MsgBody = [], t.MsgBody.push({
                                MsgType: y.GROUP_TIP,
                                MsgContent: p
                            });
                        } else t.MsgPriority && (1 == t.MsgPriority ? d = T.REDPACKET : 3 == t.MsgPriority && (d = T.LOVEMSG));
                        var h = new Ot(f, o, t.MsgSeq, t.MsgRandom, t.MsgTimeStamp, t.From_Account, d, s, c), g = null, m = null, _ = null;
                        for (var x in t.MsgBody) {
                            switch (_ = (g = t.MsgBody[x]).MsgType) {
                              case y.TEXT:
                                m = new Ot.Elem.Text(g.MsgContent.Text);
                                break;

                              case y.FACE:
                                m = new Ot.Elem.Face(g.MsgContent.Index, g.MsgContent.Data);
                                break;

                              case y.IMAGE:
                                for (var b in m = new Ot.Elem.Images(g.MsgContent.UUID, g.MsgContent.ImageFormat || ""), 
                                g.MsgContent.ImageInfoArray) m.addImage(new Ot.Elem.Images.Image(g.MsgContent.ImageInfoArray[b].Type, g.MsgContent.ImageInfoArray[b].Size, g.MsgContent.ImageInfoArray[b].Width, g.MsgContent.ImageInfoArray[b].Height, g.MsgContent.ImageInfoArray[b].URL));
                                break;

                              case y.SOUND:
                                g.MsgContent ? m = new Ot.Elem.Sound(g.MsgContent.UUID, g.MsgContent.Second, g.MsgContent.Size, t.From_Account, t.To_Account, g.MsgContent.Download_Flag, v.GROUP) : (_ = y.TEXT, 
                                m = new Ot.Elem.Text("[语音消息]下载地址解析出错"));
                                break;

                              case y.LOCATION:
                                m = new Ot.Elem.Location(g.MsgContent.Longitude, g.MsgContent.Latitude, g.MsgContent.Desc);
                                break;

                              case y.FILE:
                              case y.FILE + " ":
                                _ = y.FILE, lt(g.MsgContent.UUID, t.From_Account, g.MsgContent.FileName), g.MsgContent ? m = new Ot.Elem.File(g.MsgContent.UUID, g.MsgContent.FileName, g.MsgContent.FileSize, t.From_Account, t.To_Account, g.MsgContent.Download_Flag, v.GROUP) : (_ = y.TEXT, 
                                m = new Ot.Elem.Text("[文件消息]地址解析出错"));
                                break;

                              case y.GROUP_TIP:
                                var w = g.MsgContent.OpType;
                                if (m = new Ot.Elem.GroupTip(w, g.MsgContent.Operator_Account, u, t.GroupInfo.GroupName, g.MsgContent.List_Account, g.MsgContent.MsgMemberExtraInfo), 
                                A.JOIN == w || A.QUIT == w) m.setGroupMemberNum(g.MsgContent.MemberNum); else if (A.MODIFY_GROUP_INFO == w) {
                                    var C = !1, S = {
                                        GroupId: u,
                                        GroupFaceUrl: null,
                                        GroupName: null,
                                        OwnerAccount: null,
                                        GroupNotification: null,
                                        GroupIntroduction: null
                                    }, I = g.MsgContent.MsgGroupNewInfo;
                                    if (I.GroupFaceUrl) {
                                        var E = new Ot.Elem.GroupTip.GroupInfo(k.FACE_URL, I.GroupFaceUrl);
                                        m.addGroupInfo(E), C = !0, S.GroupFaceUrl = I.GroupFaceUrl;
                                    }
                                    if (I.GroupName) {
                                        var O = new Ot.Elem.GroupTip.GroupInfo(k.NAME, I.GroupName);
                                        m.addGroupInfo(O), C = !0, S.GroupName = I.GroupName;
                                    }
                                    if (I.Owner_Account) {
                                        var P = new Ot.Elem.GroupTip.GroupInfo(k.OWNER, I.Owner_Account);
                                        m.addGroupInfo(P), C = !0, S.OwnerAccount = I.Owner_Account;
                                    }
                                    if (I.GroupNotification) {
                                        var F = new Ot.Elem.GroupTip.GroupInfo(k.NOTIFICATION, I.GroupNotification);
                                        m.addGroupInfo(F), C = !0, S.GroupNotification = I.GroupNotification;
                                    }
                                    if (I.GroupIntroduction) {
                                        var D = new Ot.Elem.GroupTip.GroupInfo(k.INTRODUCTION, I.GroupIntroduction);
                                        m.addGroupInfo(D), C = !0, S.GroupIntroduction = I.GroupIntroduction;
                                    }
                                    0 == n && C && e && e(S);
                                } else if (A.MODIFY_MEMBER_INFO == w) {
                                    var R = g.MsgContent.MsgMemberInfo;
                                    for (var N in R) {
                                        var L = R[N];
                                        m.addMemberInfo(new Ot.Elem.GroupTip.MemberInfo(L.User_Account, L.ShutupTime));
                                    }
                                }
                                break;

                              case y.CUSTOM:
                                _ = y.CUSTOM, m = new Ot.Elem.Custom(g.MsgContent.Data, g.MsgContent.Desc, g.MsgContent.Ext);
                                break;

                              default:
                                _ = y.TEXT, m = new Ot.Elem.Text("web端暂不支持" + g.MsgType + "消息");
                            }
                            h.elems.push(new Ot.Elem(_, m));
                        }
                        return 0 == i ? h : Pt.addMsg(h) ? h : null;
                    };
                    this.init = function(i, c, u) {
                        if (console.warn("init", i), i.onMsgNotify || et.warn("listeners.onMsgNotify is empty"), 
                        t = i.onMsgNotify, i.onBigGroupMsgNotify ? d = i.onBigGroupMsgNotify : et.warn("listeners.onBigGroupMsgNotify is empty"), 
                        i.onC2cEventNotifys ? b = i.onC2cEventNotifys : et.warn("listeners.onC2cEventNotifys is empty"), 
                        i.onGroupSystemNotifys ? n = i.onGroupSystemNotifys : et.warn("listeners.onGroupSystemNotifys is empty"), 
                        i.onGroupInfoChangeNotify ? e = i.onGroupInfoChangeNotify : et.warn("listeners.onGroupInfoChangeNotify is empty"), 
                        i.onFriendSystemNotifys ? r = i.onFriendSystemNotifys : et.warn("listeners.onFriendSystemNotifys is empty"), 
                        i.onProfileSystemNotifys ? o = i.onProfileSystemNotifys : et.warn("listeners.onProfileSystemNotifys is empty"), 
                        i.onKickedEventCall ? a = i.onKickedEventCall : et.warn("listeners.onKickedEventCall is empty"), 
                        i.onAppliedDownloadUrl ? i.onAppliedDownloadUrl : et.warn("listeners.onAppliedDownloadUrl is empty"), 
                        $.identifier && $.userSig) !function(t, e) {
                            var n = {
                                Member_Account: $.identifier,
                                Limit: 1e3,
                                Offset: 0,
                                GroupBaseInfoFilter: [ "NextMsgSeq" ]
                            };
                            xt(n, function(e) {
                                if (!e.GroupIdList || 0 == e.GroupIdList.length) return et.info("initMyGroupMaxSeqs: 目前还没有加入任何群组"), 
                                void (t && t(e));
                                for (var n = 0; n < e.GroupIdList.length; n++) {
                                    var i = e.GroupIdList[n].GroupId, r = e.GroupIdList[n].NextMsgSeq - 1;
                                    C[i] = r;
                                }
                                t && t(e);
                            }, function(t) {
                                et.error("initMyGroupMaxSeqs failed:" + t.ErrorInfo), e && e(t);
                            });
                        }(function(t) {
                            et.info("initMyGroupMaxSeqs success"), I(function(t) {
                                if (et.info("initIpAndAuthkey success"), c) {
                                    et.info("login success(have login state))");
                                    var e = {
                                        ActionStatus: _.OK,
                                        ErrorCode: 0,
                                        ErrorInfo: "login success"
                                    };
                                    c(e);
                                }
                                Ft.setLongPollingOn(!0), s && Ft.longPolling(c);
                            }, u);
                        }, u); else if (c) {
                            var l = {
                                ActionStatus: _.OK,
                                ErrorCode: 0,
                                ErrorInfo: "login success(no login state)"
                            };
                            c(l);
                        }
                    }, this.sendMsg = function(t, e, n) {
                        console.warn("send msg"), function(t, e, n) {
                            if (console.log("proto_sendMsg"), st(n, !0)) {
                                var i = null;
                                switch (t.sess.type()) {
                                  case v.C2C:
                                    i = {
                                        From_Account: $.identifier,
                                        To_Account: t.sess.id().toString(),
                                        MsgTimeStamp: t.time,
                                        MsgSeq: t.seq,
                                        MsgRandom: t.random,
                                        MsgBody: []
                                    };
                                    break;

                                  case v.GROUP:
                                    var r = t.getSubType();
                                    switch (i = {
                                        GroupId: t.sess.id().toString(),
                                        From_Account: $.identifier,
                                        Random: t.random,
                                        MsgBody: []
                                    }, r) {
                                      case T.COMMON:
                                        i.MsgPriority = "COMMON";
                                        break;

                                      case T.REDPACKET:
                                        i.MsgPriority = "REDPACKET";
                                        break;

                                      case T.LOVEMSG:
                                        i.MsgPriority = "LOVEMSG";
                                        break;

                                      case T.TIP:
                                        et.error("不能主动发送群提示消息,subType=" + r);
                                        break;

                                      default:
                                        return void et.error("发送群消息时，出现未知子消息类型：subType=" + r);
                                    }
                                }
                                for (var o in t.elems) {
                                    var a = t.elems[o], s = null, l = a.type;
                                    switch (l) {
                                      case y.TEXT:
                                        s = {
                                            Text: a.content.text
                                        };
                                        break;

                                      case y.FACE:
                                        s = {
                                            Index: a.content.index,
                                            Data: a.content.data
                                        };
                                        break;

                                      case y.IMAGE:
                                        var f = [];
                                        for (var d in a.content.ImageInfoArray) f.push({
                                            Type: a.content.ImageInfoArray[d].type,
                                            Size: a.content.ImageInfoArray[d].size,
                                            Width: a.content.ImageInfoArray[d].width,
                                            Height: a.content.ImageInfoArray[d].height,
                                            URL: a.content.ImageInfoArray[d].url
                                        });
                                        s = {
                                            ImageFormat: a.content.ImageFormat,
                                            UUID: a.content.UUID,
                                            ImageInfoArray: f
                                        };
                                        break;

                                      case y.SOUND:
                                        et.warn("web端暂不支持发送语音消息");
                                        continue;

                                      case y.LOCATION:
                                        et.warn("web端暂不支持发送地理位置消息");
                                        continue;

                                      case y.FILE:
                                        s = {
                                            UUID: a.content.uuid,
                                            FileName: a.content.name,
                                            FileSize: a.content.size,
                                            DownloadFlag: a.content.downFlag
                                        };
                                        break;

                                      case y.CUSTOM:
                                        s = {
                                            Data: a.content.data,
                                            Desc: a.content.desc,
                                            Ext: a.content.ext
                                        }, l = y.CUSTOM;
                                        break;

                                      default:
                                        et.warn("web端暂不支持发送" + a.type + "消息");
                                        continue;
                                    }
                                    t.PushInfoBoolean && (i.OfflinePushInfo = t.PushInfo), i.MsgBody.push({
                                        MsgType: l,
                                        MsgContent: s
                                    });
                                }
                                t.sess.type() == v.C2C ? At.apiCall(c, "sendmsg", i, e, n) : t.sess.type() == v.GROUP && At.apiCall(u, "send_group_msg", i, e, n);
                            }
                        }(t, function(i) {
                            if (t.sess.type() == v.C2C) {
                                if (!Pt.addMsg(t)) {
                                    var r = "sendMsg: addMsg failed!", o = tt.getReturnError(r, -17);
                                    return et.error(r), void (n && n(o));
                                }
                                Pt.updateTimeline();
                            }
                            e && e(i);
                        }, function(t) {
                            n && n(t);
                        });
                    };
                }(), Dt = new function() {
                    this.fileMd5 = null, this.submitUploadFileForm = function(t, e, n) {
                        function i(t, e) {
                            var n = document.createElement("input");
                            n.type = "hidden", n.name = t, n.value = e, f.appendChild(n);
                        }
                        var r, o, a = t.formId, s = t.fileId, c = "uploadResultIframe_" + B++, u = t.To_Account, l = t.businessType, f = document.getElementById(a);
                        if (!f) return r = "获取表单对象为空: formId=" + a + "(formId非法)", o = tt.getReturnError(r, -20), 
                        void (n && n(o));
                        var d = document.getElementById(s);
                        if (!d) return r = "获取文件对象为空: fileId=" + s + "(没有选择文件或者fileId非法)", o = tt.getReturnError(r, -21), 
                        void (n && n(o));
                        d.name = "file";
                        var p = document.createElement("iframe");
                        p.name = c, p.id = c, p.style.display = "none", document.body.appendChild(p);
                        var h = "https://pic.tim.qq.com/v4/openpic/" + (ct() ? "pic_up" : "pic_up_test") + "?tinyid=" + $.tinyid + "&a2=" + $.a2 + "&sdkappid=" + $.sdkAppID + "&accounttype=" + $.accountType + "&contenttype=http";
                        f.action = h, f.method = "post", f.target = c, i("App_Version", I.APP_VERSION), 
                        i("From_Account", $.identifier), i("To_Account", u), i("Seq", it().toString()), 
                        i("Timestamp", nt().toString()), i("Random", rt().toString()), i("Busi_Id", l), 
                        i("PkgFlag", w.RAW_DATA.toString()), i("Auth_Key", q), i("Server_Ver", I.SERVER_VERSION.toString()), 
                        i("File_Type", t.fileType), setTimeout(function t() {
                            var i;
                            try {
                                i = JSON.parse(p.contentWindow.name) || {};
                            } catch (t) {
                                i = {};
                            }
                            i.ActionStatus ? (p.src = "about:blank", p.parentNode.removeChild(p), p = null, 
                            i.ActionStatus == _.OK ? e && e(i) : n && n(i)) : setTimeout(t, 100);
                        }, 500), f.submit();
                    }, this.uploadFile = function(t, e, n) {
                        var i = {
                            init: function(t, e, n) {
                                var i = this;
                                i.file = t.file, i.onProgressCallBack = t.onProgressCallBack, t.abortButton && (t.abortButton.onclick = i.abortHandler), 
                                i.total = i.file.size, i.loaded = 0, i.step = 1105920, i.sliceSize = 0, i.sliceOffset = 0, 
                                i.timestamp = nt(), i.seq = it(), i.random = rt(), i.fromAccount = $.identifier, 
                                i.toAccount = t.To_Account, i.fileMd5 = t.fileMd5, i.businessType = t.businessType, 
                                i.fileType = t.fileType, i.cbOk = e, i.cbErr = n, i.reader = new FileReader(), i.blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice, 
                                i.reader.onloadstart = i.onLoadStart, i.reader.onprogress = i.onProgress, i.reader.onabort = i.onAbort, 
                                i.reader.onerror = i.onerror, i.reader.onload = i.onLoad, i.reader.onloadend = i.onLoadEnd;
                            },
                            upload: function() {
                                i.readBlob(0);
                            },
                            onLoadStart: function() {},
                            onProgress: function(t) {
                                var e = i;
                                e.loaded += t.loaded, e.onProgressCallBack && e.onProgressCallBack(e.loaded, e.total);
                            },
                            onAbort: function() {},
                            onError: function() {},
                            onLoad: function(t) {
                                var e = i;
                                if (t.target.readyState == FileReader.DONE) {
                                    var n = t.target.result, r = n.indexOf(",");
                                    -1 != r && (n = n.substr(r + 1));
                                    var o = {
                                        From_Account: e.fromAccount,
                                        To_Account: e.toAccount,
                                        Busi_Id: e.businessType,
                                        File_Type: e.fileType,
                                        File_Str_Md5: e.fileMd5,
                                        PkgFlag: w.BASE64_DATA,
                                        File_Size: e.total,
                                        Slice_Offset: e.sliceOffset,
                                        Slice_Size: e.sliceSize,
                                        Slice_Data: n,
                                        Seq: e.seq,
                                        Timestamp: e.timestamp,
                                        Random: e.random
                                    }, a = function(t) {
                                        if (0 == t.IsFinish) e.loaded = t.Next_Offset, e.loaded < e.total ? e.readBlob(e.loaded) : e.loaded = e.total; else if (e.cbOk) {
                                            var n = {
                                                ActionStatus: t.ActionStatus,
                                                ErrorCode: t.ErrorCode,
                                                ErrorInfo: t.ErrorInfo,
                                                File_UUID: t.File_UUID,
                                                File_Size: t.Next_Offset,
                                                URL_INFO: t.URL_INFO,
                                                Download_Flag: t.Download_Flag
                                            };
                                            e.fileType == S.FILE && (n.URL_INFO = lt(t.File_UUID, $.identifier, e.file.name)), 
                                            e.cbOk(n);
                                        }
                                        U = 0;
                                    };
                                    St(o, a, function t(n) {
                                        U < 20 ? (U++, setTimeout(function() {
                                            St(o, a, t);
                                        }, 1e3)) : e.cbErr(n);
                                    });
                                }
                            },
                            onLoadEnd: function() {},
                            readBlob: function(t) {
                                var e, n = i, r = n.file, o = t + n.step;
                                o > n.total ? (o = n.total, n.sliceSize = o - t) : n.sliceSize = n.step, n.sliceOffset = t, 
                                e = n.blobSlice.call(r, t, o), n.reader.readAsDataURL(e);
                            },
                            abortHandler: function() {
                                var t = i;
                                t.reader && t.reader.abort();
                            }
                        };
                        !function(t, e, n) {
                            function i() {
                                var e = c * a, n = e + a >= t.size ? t.size : e + a, i = o.call(t, e, n);
                                r.readAsArrayBuffer(i);
                            }
                            var r = null;
                            try {
                                r = new FileReader();
                            } catch (t) {
                                if (n) return void n(tt.getReturnError("当前浏览器不支持FileReader", -18));
                            }
                            var o = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice;
                            if (o || !n) {
                                var a = 2097152, s = Math.ceil(t.size / a), c = 0, u = new SparkMD5();
                                r.onload = function(t) {
                                    for (var n = "", r = new Uint8Array(t.target.result), o = r.byteLength, a = 0; a < o; a++) n += String.fromCharCode(r[a]);
                                    u.appendBinary(n), ++c < s ? i() : (this.fileMd5 = u.end(), e && e(this.fileMd5));
                                }, i();
                            } else n(tt.getReturnError("当前浏览器不支持FileAPI", -19));
                        }(t.file, function(r) {
                            et.info("fileMd5: " + r), t.fileMd5 = r, i.init(t, e, n), i.upload();
                        }, n);
                    };
                }();
                n.SESSION_TYPE = v, n.MSG_MAX_LENGTH = {
                    C2C: 12e3,
                    GROUP: 8898
                }, n.C2C_MSG_SUB_TYPE = {
                    COMMON: 0
                }, n.GROUP_MSG_SUB_TYPE = T, n.MSG_ELEMENT_TYPE = y, n.GROUP_TIP_TYPE = A, n.IMAGE_TYPE = x, 
                n.GROUP_SYSTEM_TYPE = E, n.FRIEND_NOTICE_TYPE = O, n.GROUP_TIP_MODIFY_GROUP_INFO_TYPE = k, 
                n.BROWSER_INFO = s, n.Emotions = n.EmotionPicData = Z, n.EmotionDataIndexs = n.EmotionPicDataIndex = Q, 
                n.TLS_ERROR_CODE = {
                    OK: 0,
                    SIGNATURE_EXPIRATION: 11
                }, n.CONNECTION_STATUS = P, n.UPLOAD_PIC_BUSSINESS_TYPE = {
                    GROUP_MSG: 1,
                    C2C_MSG: 2,
                    USER_HEAD: 3,
                    GROUP_HEAD: 4
                }, n.RECENT_CONTACT_TYPE = {
                    C2C: 1,
                    GROUP: 2
                }, n.UPLOAD_RES_TYPE = S, n.Tool = tt, n.Log = et, n.Msg = Ot, n.Session = kt, n.MsgStore = {
                    sessMap: function() {
                        return Pt.sessMap();
                    },
                    sessCount: function() {
                        return Pt.sessCount();
                    },
                    sessByTypeId: function(t, e) {
                        return Pt.sessByTypeId(t, e);
                    },
                    delSessByTypeId: function(t, e) {
                        return Pt.delSessByTypeId(t, e);
                    },
                    resetCookieAndSyncFlag: function() {
                        return Pt.resetCookieAndSyncFlag();
                    }
                }, n.Resources = J, n.login = n.init = function(t, e, n, i, r) {
                    At.init(e.onConnNotify, i, r), e.jsonpCallback && e.jsonpCallback, function(t, e, n, i, r) {
                        dt(), n && (z = n), 0 == z.isAccessFormalEnv && (et.error("请切换为正式环境！！！！"), o = z.isAccessFormalEnv), 
                        0 == z.isLogOn && et.setOn(z.isLogOn), t || !r ? t.sdkAppID || !r ? t.accountType || !r ? (t.identifier && ($.identifier = t.identifier.toString()), 
                        t.identifier && !t.userSig && r ? r(tt.getReturnError("loginInfo.userSig is empty", -9)) : (t.userSig && ($.userSig = t.userSig.toString()), 
                        $.sdkAppID = t.sdkAppID, $.accountType = t.accountType, $.identifier && $.userSig ? ht(function(t, n) {
                            Ft.init(e, function(e) {
                                i && (e.identifierNick = t, e.headurl = n, i(e));
                            }, r);
                        }, r) : Ft.init(e, i, r))) : r(tt.getReturnError("loginInfo.accountType is empty", -8)) : r(tt.getReturnError("loginInfo.sdkAppID is empty", -7)) : r(tt.getReturnError("loginInfo is empty", -6));
                    }(t, e, n, i, r);
                }, n.logout = n.offline = function(t, e) {
                    return gt("instance", t, e);
                }, n.logoutAll = function(t, e) {
                    return gt("all", t, e);
                }, n.sendMsg = function(t, e, n) {
                    return Ft.sendMsg(t, e, n);
                }, n.syncMsgs = function(t, e) {
                    return Ft.syncMsgs(t, e);
                }, n.getC2CHistoryMsgs = function(t, e, n) {
                    return Ft.getC2CHistoryMsgs(t, e, n);
                }, n.syncGroupMsgs = function(t, e, n) {
                    return Ft.syncGroupMsgs(t, e, n);
                }, n.c2CMsgReaded = function(t, e, n) {
                    return Pt.c2CMsgReaded(t, e, n);
                }, n.groupMsgReaded = function(t, e, n) {
                    return bt(t, e, n);
                }, n.setAutoRead = function(t, e, n) {
                    return Pt.setAutoRead(t, e, n);
                }, n.createGroup = function(t, e, n) {
                    return function(t, e, n) {
                        if (st(n, !0)) {
                            for (var i = {
                                Type: t.Type,
                                Name: t.Name
                            }, r = [], o = 0; o < t.MemberList.length; o++) r.push({
                                Member_Account: t.MemberList[o]
                            });
                            i.MemberList = r, t.GroupId && (i.GroupId = t.GroupId), t.Owner_Account && (i.Owner_Account = t.Owner_Account), 
                            t.Introduction && (i.Introduction = t.Introduction), t.Notification && (i.Notification = t.Notification), 
                            t.MaxMemberCount && (i.MaxMemberCount = t.MaxMemberCount), t.ApplyJoinOption && (i.ApplyJoinOption = t.ApplyJoinOption), 
                            t.AppDefinedData && (i.AppDefinedData = t.AppDefinedData), t.FaceUrl && (i.FaceUrl = t.FaceUrl), 
                            At.apiCall(u, "create_group", i, e, n);
                        }
                    }(t, e, n);
                }, n.createGroupHigh = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(u, "create_group", t, e, n);
                    }(t, e, n);
                }, n.applyJoinGroup = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && (t.GroupId = String(t.GroupId), At.apiCall(u, "apply_join_group", {
                            GroupId: t.GroupId,
                            ApplyMsg: t.ApplyMsg,
                            UserDefinedField: t.UserDefinedField
                        }, e, n));
                    }(t, e, n);
                }, n.handleApplyJoinGroupPendency = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(u, "handle_apply_join_group", {
                            GroupId: t.GroupId,
                            Applicant_Account: t.Applicant_Account,
                            HandleMsg: t.HandleMsg,
                            Authentication: t.Authentication,
                            MsgKey: t.MsgKey,
                            ApprovalMsg: t.ApprovalMsg,
                            UserDefinedField: t.UserDefinedField
                        }, e, function(t) {
                            if (10024 == t.ErrorCode) {
                                if (e) {
                                    var i = {
                                        ActionStatus: _.OK,
                                        ErrorCode: 0,
                                        ErrorInfo: "该申请已经被处理过"
                                    };
                                    e(i);
                                }
                            } else n && n(t);
                        });
                    }(t, e, n);
                }, n.getPendencyGroup = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(u, "get_pendency", {
                            StartTime: t.StartTime,
                            Limit: t.Limit,
                            Handle_Account: $.identifier
                        }, e, function(t) {});
                    }(t, e, n);
                }, n.getPendencyGroupRead = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(u, "report_pendency", {
                            ReportTime: t.ReportTime,
                            From_Account: $.identifier
                        }, e, function(t) {});
                    }(t, e, n);
                }, n.handleInviteJoinGroupRequest = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(u, "handle_invite_join_group", {
                            GroupId: t.GroupId,
                            Inviter_Account: t.Inviter_Account,
                            HandleMsg: t.HandleMsg,
                            Authentication: t.Authentication,
                            MsgKey: t.MsgKey,
                            ApprovalMsg: t.ApprovalMsg,
                            UserDefinedField: t.UserDefinedField
                        }, e, function(t) {});
                    }(t, e, n);
                }, n.deleteApplyJoinGroupPendency = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(c, "deletemsg", t, e, n);
                    }(t, e, n);
                }, n.quitGroup = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(u, "quit_group", {
                            GroupId: t.GroupId
                        }, e, n);
                    }(t, e, n);
                }, n.searchGroupByName = function(t, e, n) {
                    return function(t, e, n) {
                        At.apiCall(u, "search_group", t, e, n);
                    }(t, e, n);
                }, n.getGroupPublicInfo = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(u, "get_group_public_info", {
                            GroupIdList: t.GroupIdList,
                            ResponseFilter: {
                                GroupBasePublicInfoFilter: t.GroupBasePublicInfoFilter
                            }
                        }, function(t) {
                            if (t.ErrorInfo = "", t.GroupInfo) for (var i in t.GroupInfo) {
                                var r = t.GroupInfo[i].ErrorCode;
                                r > 0 && (t.ActionStatus = _.FAIL, t.GroupInfo[i].ErrorInfo = "[" + r + "]" + t.GroupInfo[i].ErrorInfo, 
                                t.ErrorInfo += t.GroupInfo[i].ErrorInfo + "\n");
                            }
                            t.ActionStatus == _.FAIL ? n && n(t) : e && e(t);
                        }, n);
                    }(t, e, n);
                }, n.getGroupInfo = function(t, e, n) {
                    return function(t, e, n) {
                        if (st(n, !0)) {
                            var i = {
                                GroupIdList: t.GroupIdList,
                                ResponseFilter: {
                                    GroupBaseInfoFilter: t.GroupBaseInfoFilter,
                                    MemberInfoFilter: t.MemberInfoFilter
                                }
                            };
                            t.AppDefinedDataFilter_Group && (i.ResponseFilter.AppDefinedDataFilter_Group = t.AppDefinedDataFilter_Group), 
                            t.AppDefinedDataFilter_GroupMember && (i.ResponseFilter.AppDefinedDataFilter_GroupMember = t.AppDefinedDataFilter_GroupMember), 
                            At.apiCall(u, "get_group_info", i, e, n);
                        }
                    }(t, e, n);
                }, n.modifyGroupBaseInfo = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(u, "modify_group_base_info", t, e, n);
                    }(t, e, n);
                }, n.getGroupMemberInfo = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(u, "get_group_member_info", {
                            GroupId: t.GroupId,
                            Offset: t.Offset,
                            Limit: t.Limit,
                            MemberInfoFilter: t.MemberInfoFilter,
                            MemberRoleFilter: t.MemberRoleFilter,
                            AppDefinedDataFilter_GroupMember: t.AppDefinedDataFilter_GroupMember
                        }, e, n);
                    }(t, e, n);
                }, n.addGroupMember = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(u, "add_group_member", {
                            GroupId: t.GroupId,
                            Silence: t.Silence,
                            MemberList: t.MemberList
                        }, e, n);
                    }(t, e, n);
                }, n.modifyGroupMember = function(t, e, n) {
                    return function(t, e, n) {
                        if (st(n, !0)) {
                            var i = {};
                            t.GroupId && (i.GroupId = t.GroupId), t.Member_Account && (i.Member_Account = t.Member_Account), 
                            t.Role && (i.Role = t.Role), t.MsgFlag && (i.MsgFlag = t.MsgFlag), t.ShutUpTime && (i.ShutUpTime = t.ShutUpTime), 
                            t.NameCard && (i.NameCard = t.NameCard), t.AppMemberDefinedData && (i.AppMemberDefinedData = t.AppMemberDefinedData), 
                            At.apiCall(u, "modify_group_member_info", i, e, n);
                        }
                    }(t, e, n);
                }, n.deleteGroupMember = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(u, "delete_group_member", {
                            GroupId: t.GroupId,
                            Silence: t.Silence,
                            MemberToDel_Account: t.MemberToDel_Account,
                            Reason: t.Reason
                        }, e, n);
                    }(t, e, n);
                }, n.destroyGroup = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(u, "destroy_group", {
                            GroupId: t.GroupId
                        }, e, n);
                    }(t, e, n);
                }, n.changeGroupOwner = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(u, "change_group_owner", t, e, n);
                    }(t, e, n);
                }, n.getJoinedGroupListHigh = function(t, e, n) {
                    return xt(t, e, n);
                }, n.getRoleInGroup = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(u, "get_role_in_group", {
                            GroupId: t.GroupId,
                            User_Account: t.User_Account
                        }, e, n);
                    }(t, e, n);
                }, n.forbidSendMsg = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(u, "forbid_send_msg", {
                            GroupId: t.GroupId,
                            Members_Account: t.Members_Account,
                            ShutUpTime: t.ShutUpTime
                        }, e, n);
                    }(t, e, n);
                }, n.sendCustomGroupNotify = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(u, "send_group_system_notification", t, e, n);
                    }(t, e, n);
                }, n.applyJoinBigGroup = function(t, e, n) {
                    return function(t, e, n) {
                        var r;
                        t.GroupId = String(t.GroupId), i = t.GroupId, r = st(n, !1) ? u : p, At.apiCall(r, "apply_join_group", {
                            GroupId: t.GroupId,
                            ApplyMsg: t.ApplyMsg,
                            UserDefinedField: t.UserDefinedField
                        }, function(i) {
                            if (i.JoinedStatus && "JoinedSuccess" == i.JoinedStatus) {
                                if (!i.LongPollingKey) return void (n && n(tt.getReturnError("Join Group succeed; But the type of group is not AVChatRoom: groupid=" + t.GroupId, -12)));
                                Ft.setBigGroupLongPollingOn(!0), Ft.setBigGroupLongPollingKey(i.LongPollingKey), 
                                Ft.setBigGroupLongPollingMsgMap(t.GroupId, 0), Ft.bigGroupLongPolling();
                            }
                            e && e(i);
                        }, function(t) {
                            n && n(t);
                        });
                    }(t, e, n);
                }, n.quitBigGroup = function(t, e, n) {
                    return function(t, e, n) {
                        var i;
                        i = st(n, !1) ? u : p, Ft.resetBigGroupLongPollingInfo(), At.apiCall(i, "quit_group", {
                            GroupId: t.GroupId
                        }, function(n) {
                            Pt.delSessByTypeId(v.GROUP, t.GroupId), e && e(n);
                        }, n);
                    }(t, e, n);
                }, n.getProfilePortrait = function(t, e, n) {
                    return Ct(t, e, n);
                }, n.setProfilePortrait = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(f, "portrait_set", {
                            From_Account: $.identifier,
                            ProfileItem: t.ProfileItem
                        }, function(n) {
                            for (var i in t.ProfileItem) {
                                var r = t.ProfileItem[i];
                                if ("Tag_Profile_IM_Nick" == r.Tag) {
                                    $.identifierNick = r.Value;
                                    break;
                                }
                            }
                            e && e(n);
                        }, n);
                    }(t, e, n);
                }, n.applyAddFriend = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(l, "friend_add", {
                            From_Account: $.identifier,
                            AddFriendItem: t.AddFriendItem
                        }, function(t) {
                            var i = wt(t);
                            i.ActionStatus == _.FAIL ? n && n(i) : e && e(i);
                        }, n);
                    }(t, e, n);
                }, n.getPendency = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(l, "pendency_get", {
                            From_Account: $.identifier,
                            PendencyType: t.PendencyType,
                            StartTime: t.StartTime,
                            MaxLimited: t.MaxLimited,
                            LastSequence: t.LastSequence
                        }, e, n);
                    }(t, e, n);
                }, n.getPendencyReport = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(l, "PendencyReport", {
                            From_Account: $.identifier,
                            LatestPendencyTimeStamp: t.LatestPendencyTimeStamp
                        }, e, n);
                    }(t, e, n);
                }, n.deletePendency = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(l, "pendency_delete", {
                            From_Account: $.identifier,
                            PendencyType: t.PendencyType,
                            To_Account: t.To_Account
                        }, function(t) {
                            var i = wt(t);
                            i.ActionStatus == _.FAIL ? n && n(i) : e && e(i);
                        }, n);
                    }(t, e, n);
                }, n.responseFriend = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(l, "friend_response", {
                            From_Account: $.identifier,
                            ResponseFriendItem: t.ResponseFriendItem
                        }, function(t) {
                            var i = wt(t);
                            i.ActionStatus == _.FAIL ? n && n(i) : e && e(i);
                        }, n);
                    }(t, e, n);
                }, n.getAllFriend = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(l, "friend_get_all", {
                            From_Account: $.identifier,
                            TimeStamp: t.TimeStamp,
                            StartIndex: t.StartIndex,
                            GetCount: t.GetCount,
                            LastStandardSequence: t.LastStandardSequence,
                            TagList: t.TagList
                        }, e, n);
                    }(t, e, n);
                }, n.deleteChat = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && (1 == t.chatType ? At.apiCall(h, "delete", {
                            From_Account: $.identifier,
                            Type: t.chatType,
                            To_Account: t.To_Account
                        }, e, n) : At.apiCall(h, "delete", {
                            From_Account: $.identifier,
                            Type: t.chatType,
                            ToGroupid: t.To_Account
                        }, e, n));
                    }(t, e, n);
                }, n.deleteFriend = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(l, "friend_delete", {
                            From_Account: $.identifier,
                            To_Account: t.To_Account,
                            DeleteType: t.DeleteType
                        }, function(t) {
                            var i = wt(t);
                            i.ActionStatus == _.FAIL ? n && n(i) : e && e(i);
                        }, n);
                    }(t, e, n);
                }, n.addBlackList = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(l, "black_list_add", {
                            From_Account: $.identifier,
                            To_Account: t.To_Account
                        }, function(t) {
                            var i = wt(t);
                            i.ActionStatus == _.FAIL ? n && n(i) : e && e(i);
                        }, n);
                    }(t, e, n);
                }, n.deleteBlackList = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(l, "black_list_delete", {
                            From_Account: $.identifier,
                            To_Account: t.To_Account
                        }, function(t) {
                            var i = wt(t);
                            i.ActionStatus == _.FAIL ? n && n(i) : e && e(i);
                        }, n);
                    }(t, e, n);
                }, n.getBlackList = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall(l, "black_list_get", {
                            From_Account: $.identifier,
                            StartIndex: t.StartIndex,
                            MaxLimited: t.MaxLimited,
                            LastSequence: t.LastSequence
                        }, e, n);
                    }(t, e, n);
                }, n.getRecentContactList = function(t, e, n) {
                    return function(t, e, n) {
                        st(n, !0) && At.apiCall("recentcontact", "get", {
                            From_Account: $.identifier,
                            Count: t.Count
                        }, e, n);
                    }(t, e, n);
                }, n.uploadFile = n.uploadPic = function(t, e, n) {
                    return Dt.uploadFile(t, e, n);
                }, n.submitUploadFileForm = function(t, e, n) {
                    return Dt.submitUploadFileForm(t, e, n);
                }, n.uploadFileByBase64 = n.uploadPicByBase64 = function(t, e, n) {
                    var i = {
                        To_Account: t.toAccount,
                        Busi_Id: t.businessType,
                        File_Type: t.File_Type,
                        File_Str_Md5: t.fileMd5,
                        PkgFlag: w.BASE64_DATA,
                        File_Size: t.totalSize,
                        Slice_Offset: 0,
                        Slice_Size: t.totalSize,
                        Slice_Data: t.base64Str,
                        Seq: it(),
                        Timestamp: nt(),
                        Random: rt()
                    };
                    return St(i, e, n);
                }, n.setJsonpLastRspData = function(t) {
                    "string" == typeof t && JSON.parse(t);
                }, n.getLongPollingId = function(t, e, n) {
                    return Mt(0, e, n);
                }, n.applyDownload = function(t, e, n) {
                    return Tt(t, e, n);
                }, n.onDownFile = function(t) {
                    window.open(J.downloadMap["uuid_" + t]);
                }, n.checkLogin = function(t, e) {
                    return st(t, e);
                };
            }(n), n;
        }();
    },
    t42T: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "top-filter-wrap"
                }, [ n("div", {
                    staticClass: "select-content"
                }, [ n("div", {
                    staticClass: "left"
                }, t._l(t.tabs, function(e, i) {
                    return n("div", {
                        key: i,
                        staticClass: "opt",
                        class: [ {
                            active: e.value === t.type
                        } ],
                        attrs: {
                            eventid: "0-" + i
                        },
                        on: {
                            tap: function(n) {
                                t.changeType(e.value);
                            }
                        }
                    }, [ t._v("\n                " + t._s(e.text) + "\n            ") ]);
                })), t._v(" "), n("div", {
                    staticClass: "right"
                }, [ n("div", {
                    class: [ {
                        hide: "zone" === t.type
                    } ]
                }, [ n("div", {
                    staticClass: "checkbox-wrap"
                }, t._l(t.metros, function(e, i) {
                    return n("div", {
                        key: i,
                        staticClass: "checkbox",
                        class: [ {
                            active: e.selected
                        } ],
                        attrs: {
                            eventid: "1-" + i
                        },
                        on: {
                            tap: function(e) {
                                t.onSelectMetro(i);
                            }
                        }
                    }, [ t._v("\n                        " + t._s("" === e.value ? "不限" : e.value + "号线") + "\n                    ") ]);
                })) ]), t._v(" "), n("div", {
                    class: [ {
                        hide: "metro" === t.type
                    } ]
                }, [ n("section", {
                    staticClass: "zones"
                }, [ n("scroll-view", {
                    staticClass: "opts-wrap",
                    attrs: {
                        "scroll-y": "",
                        "scroll-with-animation": ""
                    }
                }, [ n("a", {
                    staticClass: "opt",
                    class: [ {
                        active: "" === t.selected_zone
                    } ],
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        tap: t.selectAll
                    }
                }, [ t._v("不限") ]), t._v(" "), t._l(t.zones, function(e, i) {
                    return n("a", {
                        key: i,
                        staticClass: "opt",
                        class: [ {
                            active: e.id === t.selected_zone
                        } ],
                        attrs: {
                            "data-index": i,
                            eventid: "3-" + i
                        },
                        on: {
                            tap: t.onSelect
                        }
                    }, [ t._v("\n                            " + t._s(e.name) + "\n                        ") ]);
                }) ], 2), t._v(" "), t.sections.length ? n("scroll-view", {
                    staticClass: "opts-wrap",
                    attrs: {
                        "scroll-y": "",
                        "scroll-with-animation": ""
                    }
                }, [ n("a", {
                    staticClass: "opt",
                    class: [ {
                        active: t.selected_all_section
                    } ],
                    attrs: {
                        eventid: "4"
                    },
                    on: {
                        tap: t.selectAllSection
                    }
                }, [ t._v("不限") ]), t._v(" "), t._l(t.sections, function(e, i) {
                    return n("a", {
                        key: i,
                        staticClass: "opt",
                        class: [ {
                            active: e.selected
                        } ],
                        attrs: {
                            "data-index": i,
                            eventid: "5-" + i
                        },
                        on: {
                            tap: t.onSelectSection
                        }
                    }, [ n("span", [ t._v(t._s(e.name)) ]), t._v(" "), n("checkbox", {
                        attrs: {
                            value: e.id,
                            checked: e.selected
                        }
                    }) ], 1);
                }) ], 2) : t._e() ], 1) ], 1) ]) ]), t._v(" "), n("div", {
                    staticClass: "bottom"
                }, [ n("button", {
                    staticClass: "btn",
                    attrs: {
                        eventid: "6"
                    },
                    on: {
                        tap: t.reset
                    }
                }, [ t._v("清空") ]), t._v(" "), n("button", {
                    staticClass: "btn main",
                    attrs: {
                        eventid: "7"
                    },
                    on: {
                        tap: t.confirm
                    }
                }, [ t._v("确定") ]) ], 1) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    t8x9: function(t, e, n) {
        var i = n("77Pl"), r = n("lOnJ"), o = n("dSzd")("species");
        t.exports = function(t, e) {
            var n, a = i(t).constructor;
            return void 0 === a || void 0 == (n = i(a)[o]) ? e : r(n);
        };
    },
    tiHB: function(t, e, n) {
        var i = n("7gdG"), r = n("pOFa");
        e.a = {
            list: function(t) {
                return n.i(i.a)("whole_buildings", t, {
                    loading: !0
                }).then(function(t) {
                    return t.items = t.items.map(r.a), t;
                });
            },
            seek_buildings: function(t) {
                return n.i(i.a)("seek_buildings", t, {
                    loading: !0
                }).then(function(t) {
                    return t.items = t.items.map(r.a), t;
                });
            },
            map_zones: function(t) {
                return n.i(i.a)("map_zones", t, {
                    loading: !0
                });
            },
            map_zone_sections: function(t) {
                return n.i(i.a)("map_zone_sections", t, {
                    loading: !0
                });
            },
            map_buildings: function(t) {
                return n.i(i.a)("map_buildings", t, {
                    loading: !0
                });
            }
        };
    },
    uG0z: function(t, e, n) {
        var i = n("jtPe"), r = n("m5UN"), o = n("ybqe")(i.a, r.a, function(t) {
            n("57T6");
        }, "data-v-731877e3", null);
        e.a = o.exports;
    },
    uVD0: function(t, e, n) {
        var i = {
            render: function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("form", {
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        submit: this.onSearch
                    }
                }, [ e("div", {
                    staticClass: "search",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        tap: this.onClick
                    }
                }, [ e("img", {
                    attrs: {
                        src: "/static/img/search.png"
                    }
                }), this._v(" "), e("input", {
                    attrs: {
                        disabled: 0 == this.can_search,
                        type: "search",
                        name: "keyword",
                        placeholder: this.input_placeholder,
                        "confirm-type": "search",
                        eventid: "0"
                    },
                    on: {
                        confirm: this.onSearch
                    }
                }) ]) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    uXTk: function(t, e, n) {
        var i = n("lS8P"), r = n("VPS7"), o = void 0, a = [];
        e.a = {
            watch: {
                list: function(t) {
                    t.length && i.a.refresh(this.type);
                }
            },
            onLoad: function() {
                var t = this;
                o = setTimeout(function() {
                    t.list.forEach(function(e, n) {
                        var o = r.a.observerRelativeViewPort("." + e.class, {
                            relativeOpt: {
                                top: 0,
                                bottom: 0
                            },
                            success: function(e) {
                                var n = e.dataset, r = n.item, o = n.index;
                                i.a.log(t.type, {
                                    id: r.log_id,
                                    pos: o,
                                    pos_name: r.position
                                });
                            }
                        });
                        o && a.push(o);
                    });
                }, 1500);
            },
            onUnload: function() {
                o && clearTimeout(o), a.forEach(function(t) {
                    t.disconnect();
                }), a = [];
            }
        };
    },
    uayx: function(t, e, n) {
        var i = n("sC6G"), r = n("X4Fn"), o = n("ybqe")(i.a, r.a, function(t) {
            n("aOzN");
        }, "data-v-7490ce4e", null);
        e.a = o.exports;
    },
    ujMp: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "item",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        tap: function(e) {
                            e.stopPropagation(), t.goDetail(e);
                        }
                    }
                }, [ n("div", {
                    staticClass: "img-wrap"
                }, [ n("img", {
                    attrs: {
                        src: t.item.cover_photo_url,
                        "lazy-load": !0
                    }
                }), t._v(" "), n("div", {
                    staticClass: "view-wrap",
                    class: [ {
                        hide: !t.item.view_count
                    } ]
                }, [ n("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/home/view.png"
                    }
                }), t._v(" "), n("span", [ t._v(t._s(t.item.view_count)) ]) ]) ]), t._v(" "), n("div", {
                    staticClass: "content"
                }, [ n("div", {
                    staticClass: "top"
                }, [ n("h3", [ t._v(t._s(t.item.name)) ]), t._v(" "), t.item.surplus_count_desc ? n("span", [ t._v(t._s(t.item.surplus_count_desc)) ]) : t._e() ], 1), t._v(" "), n("div", {
                    staticClass: "detail"
                }, [ n("span", [ t._v(t._s(t.item.zone)) ]), t._v(" "), t._l(t.item.tag_list, function(e, i) {
                    return n("span", {
                        key: i,
                        staticClass: "tag"
                    }, [ t._v(t._s(e)) ]);
                }) ], 2), t._v(" "), n("div", {
                    staticClass: "bottom"
                }, [ n("span", {
                    staticClass: "price"
                }, t._l(t.item.price_desc_arr, function(e, i) {
                    return n("div", {
                        key: i
                    }, [ t._v(t._s(e)) ]);
                })), t._v(" "), n("div", {
                    staticClass: "comment-show",
                    style: [ {
                        display: t.item.comment_count ? "inline-flex" : "none"
                    } ],
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: function(e) {
                            e.stopPropagation(), t.goComments(e);
                        }
                    }
                }, [ n("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/home/msg.png",
                        "lazy-load": !0
                    }
                }), t._v(" "), n("span", [ t._v(t._s(t.item.comment_count)) ]) ]) ]) ]), t._v(" "), t.item.show_surplus_count_desc_tip && t.showTip ? n("div", {
                    staticClass: "tips",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        tap: function(e) {
                            e.stopPropagation(), t.closeTip(e);
                        }
                    }
                }, [ n("div", {
                    staticClass: "tx"
                }, [ t._v(t._s(t.item.surplus_count_desc)) ]), t._v(" "), n("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/packageA/surplus_buildings/tips.png"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "mask"
                }) ]) : t._e() ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    uqUo: function(t, e, n) {
        var i = n("kM2E"), r = n("FeBl"), o = n("S82l");
        t.exports = function(t, e) {
            var n = (r.Object || {})[t] || Object[t], a = {};
            a[t] = e(n), i(i.S + i.F * o(function() {
                n(1);
            }), "Object", a);
        };
    },
    "us/S": function(t, e, n) {
        t.exports = {
            default: n("Xd32"),
            __esModule: !0
        };
    },
    us4I: function(t, e, n) {
        var i = {
            render: function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "middle-tip"
                }, [ e("p", {
                    staticClass: "tip"
                }, [ this._v(this._s(this.search_tip || "请输入完整身份证号，或摇号编码，或登记号进行查询。")) ]) ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    "vFc/": function(t, e, n) {
        var i = n("TcQ7"), r = n("QRG4"), o = n("fkB2");
        t.exports = function(t) {
            return function(e, n, a) {
                var s, c = i(e), u = r(c.length), l = o(a, u);
                if (t && n != n) {
                    for (;u > l; ) if ((s = c[l++]) != s) return !0;
                } else for (;u > l; l++) if ((t || l in c) && c[l] === n) return t || l || 0;
                return !t && -1;
            };
        };
    },
    vG7Y: function(t, e, n) {
        var i = n("nGQN"), r = n("NI1J"), o = n("ybqe")(i.a, r.a, function(t) {
            n("kH/R");
        }, "data-v-e13c6752", null);
        e.a = o.exports;
    },
    "vIB/": function(t, e, n) {
        var i = n("O4g8"), r = n("kM2E"), o = n("880/"), a = n("hJx8"), s = n("/bQp"), c = n("94VQ"), u = n("e6n0"), l = n("PzxK"), f = n("dSzd")("iterator"), d = !([].keys && "next" in [].keys()), p = function() {
            return this;
        };
        t.exports = function(t, e, n, h, g, m, v) {
            c(n, e, h);
            var _, y, x, b = function(t) {
                if (!d && t in I) return I[t];
                switch (t) {
                  case "keys":
                  case "values":
                    return function() {
                        return new n(this, t);
                    };
                }
                return function() {
                    return new n(this, t);
                };
            }, w = e + " Iterator", C = "values" == g, S = !1, I = t.prototype, M = I[f] || I["@@iterator"] || g && I[g], T = M || b(g), A = g ? C ? b("entries") : T : void 0, k = "Array" == e && I.entries || M;
            if (k && (x = l(k.call(new t()))) !== Object.prototype && x.next && (u(x, w, !0), 
            i || "function" == typeof x[f] || a(x, f, p)), C && M && "values" !== M.name && (S = !0, 
            T = function() {
                return M.call(this);
            }), i && !v || !d && !S && I[f] || a(I, f, T), s[e] = T, s[w] = p, g) if (_ = {
                values: C ? T : b("values"),
                keys: m ? T : b("keys"),
                entries: A
            }, v) for (y in _) y in I || o(I, y, _[y]); else r(r.P + r.F * (d || S), e, _);
            return _;
        };
    },
    vLgD: function(t, e, n) {
        n.d(e, "b", function() {
            return r;
        });
        var i = n("cRbS"), r = "https://data-api.rippletek.com/miniapp/fuzz/fc/", o = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return i.a.create({
                baseURL: t ? r : "https://data-api.rippletek.com/miniapp/536dd3157ad0a2c356fb6b16a46c45f8/fc/",
                headers: {
                    "content-type": "application/json"
                },
                data: {},
                fuzz: t
            });
        };
        o(!0), e.a = o(!0);
    },
    vMlW: function(t, e, n) {
        var i = n("szLo"), r = n("g7uz"), o = n("ybqe")(i.a, r.a, function(t) {
            n("pocD");
        }, null, null);
        e.a = o.exports;
    },
    vZHF: function(t, e, n) {
        var i = n("j+zm"), r = n("atWv"), o = n("ybqe")(i.a, r.a, function(t) {
            n("StNi");
        }, "data-v-0172847a", null);
        e.a = o.exports;
    },
    "wJe+": function(t, e, n) {
        e.a = {
            props: {
                tip: {
                    type: String
                },
                show: {
                    type: Boolean
                }
            }
        };
    },
    wQZh: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return t.show ? n("div", [ n("div", {
                    staticClass: "dlg"
                }, [ n("div", {
                    staticClass: "content"
                }, t._l(t.contents, function(e, i) {
                    return n("p", {
                        key: i
                    }, [ t._v("\n                " + t._s(e) + "\n            ") ]);
                })), t._v(" "), n("button", {
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: t.handle
                    }
                }, [ t._v(t._s(t.btn_tx)) ]) ], 1), t._v(" "), n("div", {
                    staticClass: "overlay",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        tap: t.toggleShow
                    }
                }) ]) : t._e();
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    wbJY: function(t, e) {},
    wg3F: function(t, e, n) {
        var i = n("VPS7");
        e.a = {
            data: function() {
                return {
                    show: !1
                };
            },
            computed: {
                btn_tx: function() {
                    return this.copy_text ? "复制微信号" : "好的";
                }
            },
            watch: {
                contents: function(t) {
                    t.length && (this.show = !0);
                }
            },
            onUnload: function() {
                this.show = !1;
            },
            methods: {
                toggleShow: function() {
                    this.show = !this.show;
                },
                handle: function() {
                    this.copy_text && i.a.setClipboardData(this.copy_text), this.toggleShow();
                }
            },
            props: {
                copy_text: {
                    type: String
                },
                contents: {
                    type: Array
                }
            }
        };
    },
    woGd: function(t, e, n) {
        var i = n("YkEy"), r = n("us4I"), o = n("ybqe")(i.a, r.a, function(t) {
            n("0Y6P");
        }, "data-v-fac4214c", null);
        e.a = o.exports;
    },
    woOf: function(t, e, n) {
        t.exports = {
            default: n("V3tA"),
            __esModule: !0
        };
    },
    wris: function(t, e, n) {
        var i = n("4aY2");
        e.a = {
            mixins: [ i.a ],
            props: {
                item: {
                    type: Object
                },
                has_line: {
                    type: Boolean,
                    default: !0
                }
            }
        };
    },
    "wu/E": function(t, e, n) {
        var i = n("D8af"), r = n("ujMp"), o = n("ybqe")(i.a, r.a, function(t) {
            n("Y4fF");
        }, "data-v-060b27da", null);
        e.a = o.exports;
    },
    wx0s: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "top-filter-wrap"
                }, [ n("div", {
                    staticClass: "select-content"
                }, [ n("zones-checkbox", {
                    attrs: {
                        zones: t.zones,
                        selected: t.selected,
                        eventid: "0",
                        mpcomid: "0"
                    },
                    on: {
                        change: t.change
                    }
                }) ], 1), t._v(" "), n("div", {
                    staticClass: "bottom"
                }, [ n("button", {
                    staticClass: "btn",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        tap: t.reset
                    }
                }, [ t._v("清空") ]), t._v(" "), n("button", {
                    staticClass: "btn main",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        tap: t.confirm
                    }
                }, [ t._v("确定") ]) ], 1) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    wxAW: function(t, e, n) {
        e.__esModule = !0;
        var i, r = (i = n("C4MV")) && i.__esModule ? i : {
            default: i
        };
        e.default = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
                    (0, r.default)(t, i.key, i);
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e;
            };
        }();
    },
    xFdd: function(t, e, n) {
        var i = n("yspw"), r = n("VPS7");
        e.a = {
            data: function() {
                return {
                    customer_service_info: {}
                };
            },
            onLoad: function() {
                var t = this;
                i.a.customer_service_info().then(function(e) {
                    t.customer_service_info = e;
                });
            },
            methods: {
                copyCustomerWeixin: function() {
                    var t = this.customer_service_info.wx_username;
                    t && r.a.setClipboardData(t);
                }
            }
        };
    },
    xGkn: function(t, e, n) {
        var i = n("4mcu"), r = n("EGZi"), o = n("/bQp"), a = n("TcQ7");
        t.exports = n("vIB/")(Array, "Array", function(t, e) {
            this._t = a(t), this._i = 0, this._k = e;
        }, function() {
            var t = this._t, e = this._k, n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? n : "values" == e ? t[n] : [ n, t[n] ]);
        }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries");
    },
    "xH/j": function(t, e, n) {
        var i = n("hJx8");
        t.exports = function(t, e, n) {
            for (var r in e) n && t[r] ? t[r] = e[r] : i(t, r, e[r]);
            return t;
        };
    },
    "xOQ+": function(t, e) {},
    xRwK: function(t, e, n) {
        var i = n("QGIh");
        e.a = {
            mixins: [ i.a ]
        };
    },
    xnc9: function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    },
    xtN5: function(t, e, n) {
        var i = n("W4tJ"), r = n("bM0J"), o = n("ybqe")(i.a, r.a, function(t) {
            n("FVvu");
        }, "data-v-6787d97c", null);
        e.a = o.exports;
    },
    xtXi: function(t, e, n) {
        var i = n("/jvm");
        e.a = {
            components: {
                LayoutCheckbox: i.a
            },
            data: function() {
                return {
                    selected: []
                };
            },
            onUnload: function() {
                this.reset();
            },
            methods: {
                change: function(t) {
                    this.selected = t;
                },
                reset: function() {
                    this.selected = [];
                },
                confirm: function() {
                    this.$emit("change", this.selected.join(","));
                }
            }
        };
    },
    y7te: function(t, e, n) {
        e.a = {
            data: function() {
                return console.error(this.value), {
                    currentValue: this.value
                };
            },
            watch: {
                value: function(t, e) {
                    t !== e && (this.currentValue = t);
                }
            },
            methods: {
                handleInput: function(t) {
                    var e = this, n = t.mp.detail.value;
                    this.currentValue = n, setTimeout(function() {
                        return e.$emit("input", n);
                    });
                },
                onConfirm: function(t) {
                    this.$emit("confirm", t);
                }
            },
            props: {
                focus: {
                    type: Boolean,
                    default: !1
                },
                value: {
                    type: String,
                    default: ""
                },
                className: {
                    type: String,
                    default: ""
                },
                type: {
                    type: String,
                    default: "text"
                },
                name: {
                    type: String,
                    default: ""
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                placeholder: {
                    type: String,
                    default: ""
                },
                cursorSpacing: {
                    type: Number
                },
                adjustPosition: {
                    type: Boolean
                },
                confirmHold: {
                    type: Boolean
                },
                confirmType: {
                    type: String
                }
            }
        };
    },
    "yK/D": function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("form", {
                    attrs: {
                        "report-submit": !0,
                        eventid: "1"
                    },
                    on: {
                        submit: t.goDetail
                    }
                }, [ n("button", {
                    staticClass: "shadow-button",
                    attrs: {
                        "form-type": "submit"
                    }
                }, [ n("li", {
                    staticClass: "house-item"
                }, [ n("div", {
                    staticClass: "house-item-content"
                }, [ n("div", {
                    staticClass: "img-wrap"
                }, [ n("common-img", {
                    attrs: {
                        className: "default-house-img",
                        src: t.item.img_url,
                        mode: "aspectFill",
                        shadowClass: "house-shadow",
                        mpcomid: "0"
                    }
                }), t._v(" "), t.item.video_url ? n("img", {
                    staticClass: "video-tip",
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/building/video-start-btn.png"
                    }
                }) : t._e(), t._v(" "), n("div", {
                    staticClass: "view-wrap",
                    class: [ {
                        hide: !t.item.view_count
                    } ]
                }, [ n("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/home/view.png"
                    }
                }), t._v(" "), n("span", [ t._v(t._s(t.item.view_count || "")) ]) ]) ], 1), t._v(" "), n("div", {
                    staticClass: "content"
                }, [ n("div", {
                    staticClass: "main"
                }, [ n("div", {
                    staticClass: "row first-row"
                }, [ n("h3", {
                    class: [ {
                        long: !t.item.price_desc || "即将取证" === t.type
                    } ]
                }, [ t._v("\n                                " + t._s(t.item.name) + "\n                            ") ]), t._v(" "), t.item.status && !t.item.hide_status ? n("span", {
                    staticClass: "tag green"
                }, [ t._v("\n                                " + t._s(t.item.status) + "\n                            ") ]) : t._e() ], 1), t._v(" "), n("div", {
                    staticClass: "row normal-row"
                }, [ n("div", {
                    staticClass: "info"
                }, [ t._v("\n                                " + t._s(t.item.zone) + "\n                            ") ]), t._v(" "), n("div", {
                    staticClass: "info",
                    class: [ {
                        hide: t.hide_date
                    } ]
                }, [ t._v("\n                                " + t._s(t.item.date_with_status || "") + "\n                            ") ]) ]), t._v(" "), n("div", {
                    staticClass: "row bottom"
                }, [ n("div", {
                    staticClass: "left"
                }, [ n("span", {
                    staticClass: "price",
                    class: [ {
                        hide: !t.item.price_desc || "即将取证" === t.type
                    } ]
                }, [ t.item.customized_price && t.item.customized_price.length ? n("div", {
                    staticClass: "customized_price"
                }, t._l(t.item.customized_price, function(e, i) {
                    return n("div", {
                        key: i
                    }, [ t._v("\n                                            " + t._s(e) + "\n                                        ") ]);
                })) : n("div", t._l(t.item.price_desc_arr, function(e, i) {
                    return n("div", {
                        key: i
                    }, [ t._v("\n                                            " + t._s(e) + "\n                                        ") ]);
                })) ]), t._v(" "), t.other_tag ? n("div", {
                    staticClass: "tags"
                }, t._l(t.other_tag, function(e, i) {
                    return n("span", {
                        key: i,
                        staticClass: "tag",
                        class: e.tag_class
                    }, [ t._v("\n                                        " + t._s(e.name) + "\n                                    ") ]);
                })) : t._e() ]), t._v(" "), n("div", {
                    staticClass: "comment-show",
                    style: [ {
                        display: t.item.comment_count ? "inline-flex" : "none"
                    } ],
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: function(e) {
                            e.stopPropagation(), t.goComments(e);
                        }
                    }
                }, [ n("img", {
                    attrs: {
                        src: "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/home/msg.png",
                        "lazy-load": !0
                    }
                }), t._v(" "), n("span", [ t._v(t._s(t.item.comment_count)) ]) ]) ]) ]) ]) ]), t._v(" "), n("div", {
                    staticClass: "probability",
                    style: [ {
                        display: "即将取证" != t.type && (t.item.common_probability || t.item.rd_probability) ? "flex" : "none"
                    } ]
                }, [ n("span", [ t._v("中签率：") ]), t._v(" "), n("span", {
                    staticClass: "item",
                    class: [ {
                        hide: !t.item.common_probability
                    } ]
                }, [ t._v("\n                    普通" + t._s(t.item.common_probability) + "%\n                ") ]), t._v(" "), n("span", {
                    staticClass: "item",
                    class: [ {
                        hide: !t.item.rd_probability
                    } ]
                }, [ t._v("\n                    刚需" + t._s(t.item.rd_probability) + "%\n                ") ]) ]) ]) ], 1) ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    ybqe: function(e, n) {
        e.exports = function(e, n, i, r, o) {
            var a, s = e = e || {}, c = t(e.default);
            "object" !== c && "function" !== c || (a = e, s = e.default);
            var u, l = "function" == typeof s ? s.options : s;
            if (n && (l.render = n.render, l.staticRenderFns = n.staticRenderFns), r && (l._scopeId = r), 
            o ? (u = function(t) {
                (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), 
                i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(o);
            }, l._ssrRegister = u) : i && (u = i), u) {
                var f = l.functional, d = f ? l.render : l.beforeCreate;
                f ? l.render = function(t, e) {
                    return u.call(e), d(t, e);
                } : l.beforeCreate = d ? [].concat(d, u) : [ u ];
            }
            return {
                esModule: a,
                exports: s,
                options: l
            };
        };
    },
    ydGR: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "checkbox-wrap"
                }, t._l(t.opts, function(e, i) {
                    return n("div", {
                        key: i,
                        staticClass: "checkbox",
                        class: [ {
                            active: e.selected
                        } ],
                        attrs: {
                            "data-value": e.value,
                            eventid: "0-" + i
                        },
                        on: {
                            tap: function(n) {
                                t.onSelect(e.value, i);
                            }
                        }
                    }, [ t._v("\n        " + t._s(e.text) + "\n    ") ]);
                }));
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    yspw: function(t, e, n) {
        n.d(e, "a", function() {
            return c;
        });
        var i = n("//Fk"), r = n.n(i), o = n("VPS7"), a = n("0jG4"), s = {};
        e.b = {
            set: function(t) {
                s = t, o.a.setStorage("userInfo", t);
            },
            isAuthed: function() {
                return Boolean(s.nickName);
            }
        };
        var c = {
            init: !1,
            userInfo: null,
            set: function(t) {
                this.userInfo = t;
            },
            get: function() {
                var t = this.userInfo;
                return t ? r.a.resolve(t) : this.fetchUser();
            },
            fetchUser: function() {
            },
            getFromUserCache: function(t) {
                return this.get().then(function(e) {
                    return e[t];
                });
            },
            getFromUser: function(t) {
                return this.fetchUser().then(function(e) {
                    return e[t];
                });
            },
            customer_service_info: function() {
                return this.getFromUserCache("customer_service_info");
            },
            is_consultant: function() {
                return this.getFromUser("is_consultant");
            },
            activity_menus: function() {
                return this.getFromUserCache("activity_menus");
            }
        };
    },
    ytBU: function(t, e, n) {
        var i = n("VPS7"), r = n("yspw"), o = function(t) {
            return wx.getStorageSync(t);
        }, a = function(t, e) {
            wx.setStorageSync(t, e);
        }, s = function(t) {
            wx.removeStorageSync(t);
        }, c = function(t, e) {
            var n = e.indexOf(t);
            return n > -1 && e.splice(n, 1), e.unshift(t), e.length > 5 && e.pop(), e;
        }, u = function(t, e) {
            if (e) {
                var n = o(t) || [];
                n = c(e, n), a(t, n);
            }
        }, l = {
            token: function() {
                return o("token");
            },
            search: {
                get: function() {
                    return o("search_history") || [];
                },
                add: function(t) {
                    u("search_history", t);
                },
                remove: function() {
                    s("search_history");
                }
            },
            filter_search: {
                get: function(t) {
                    var e = o("filter_search");
                    return e ? e[t] : [];
                },
                add: function(t, e) {
                    var n = o("filter_search") || {};
                    n[t] = c(e, n[t] || []), a("filter_search", n);
                },
                remove: function(t) {
                    var e = o("filter_search") || {};
                    delete e[t], a("filter_search", e);
                }
            },
            result_search: {
                get: function() {
                    return o("search_result_history");
                },
                add: function(t) {
                    u("search_result_history", t);
                },
                remove: function() {
                    s("search_result_history");
                }
            },
            review_search: {
                get: function() {
                    return o("search_review_history");
                },
                add: function(t) {
                    u("search_review_history", t);
                },
                remove: function() {
                    s("search_review_history");
                }
            },
            second_hand_search: {
                key: "second_hand_search_history",
                get: function() {
                    return o(this.key);
                },
                add: function(t) {
                    u(this.key, t);
                },
                remove: function() {
                    s(this.key);
                }
            },
            user: {
                DONE: !1,
                set: function(t) {
                    if (!this.DONE) return this.DONE = !0, i.a.setStorage("user", t);
                },
                get: function() {
                    return i.a.getStorage("user").then(function(t) {
                        return t.data;
                    });
                },
                getSync: function() {
                    return o("user");
                }
            },
            shareParam: {
                getRequestParam: function() {
                    var t = r.a.userInfo;
                    return t ? "share_by=" + t.share_by : "";
                },
                get: function() {
                    var t = l.user.get(), e = l.shareParam.getRequestParam();
                    if (t) {
                        var n = t.share_queries;
                        return e + (n ? "&" + n : "");
                    }
                    return "";
                }
            },
            shareBy: {
                set: function(t, e) {
                    var n = getApp();
                    n.globalData.share_by = t, n.globalData.share_page = e;
                },
                get: function() {
                    var t = getApp(), e = t.globalData.share_by, n = t.globalData.share_page, i = "";
                    return e && (i += "share_by=" + e), n && (i += "&share_page=" + n), i;
                },
                value: function() {
                    return getApp().globalData.share_by || "";
                },
                clear: function() {
                    var t = getApp();
                    t.globalData.share_by = "", t.globalData.share_page = "";
                }
            },
            popup: {
                set: function(t) {
                    a("popup", t);
                },
                get: function() {
                    return o("popup") || "";
                },
                clear: function() {
                    s("popup");
                }
            },
            second_hand: {
                set: function(t) {
                    a("second_hand", t);
                },
                get: function() {
                    return o("second_hand") || {
                        community_id: "",
                        community_name: ""
                    };
                }
            }
        };
        e.a = l;
    },
    ywjI: function(t, e, n) {
        e.a = {
            data: function() {
                return {
                    opts: [ {
                        text: "住宅",
                        value: "住宅"
                    }, {
                        text: "商业",
                        value: "商业"
                    } ],
                    selected: ""
                };
            },
            onUnload: function() {
                this.selected = "";
            },
            methods: {
                onSelect: function(t) {
                    this.selected = t.currentTarget.dataset.value;
                },
                reset: function() {
                    this.selected = "";
                },
                confirm: function() {
                    this.$emit("change", this.selected);
                }
            }
        };
    },
    "z+Ut": function(t, e, n) {
        n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {
            return s;
        }), n.d(e, "b", function() {
            return c;
        });
        var i, r = n("bOdI"), o = n.n(r), a = {
            TODAY: "today",
            ACCUMULATED: "monthly",
            SOLD: "sold"
        }, s = a.TODAY, c = [ {
            key: a.TODAY,
            name: "今日降价"
        }, {
            key: a.ACCUMULATED,
            name: "月度降价"
        }, {
            key: a.SOLD,
            name: "已成交"
        } ];
        i = {}, o()(i, a.TODAY, "今日降价榜将于每日中午12点更新"), o()(i, a.ACCUMULATED, "月度降价榜根据最近一个月的二手房降价幅度进行展示"), 
        o()(i, a.SOLD, "已成交榜根据最近一个月已成交的二手房降价幅度进行展示");
    },
    zAUV: function(t, e) {},
    zQR9: function(t, e, n) {
        var i = n("h65t")(!0);
        n("vIB/")(String, "String", function(t) {
            this._t = String(t), this._i = 0;
        }, function() {
            var t, e = this._t, n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = i(e, n), this._i += t.length, {
                value: t,
                done: !1
            });
        });
    },
    zRd2: function(t, e, n) {
        var i = n("mvHQ"), r = n.n(i), o = n("0jG4"), a = n("p8GL"), s = n("AvAe");
        e.a = {
            data: function() {
                return {
                    idcard: ""
                };
            },
            computed: {},
            watch: {},
            onUnload: function() {},
            methods: {
                onClose: function() {
                    this.$emit("on-close");
                },
                submit: function(t) {
                    try {
                        var e = t.target.value, i = {
                            realname: e.realname,
                            id_card_number: e.id_card_number,
                            mobile: e.mobile
                        };
                        for (var c in i) if ("" === i[c].trim()) return n.i(s.d)("user bind empty error: " + r()(i) + i[c]), 
                        void wx.showToast({
                            title: "您尚未填写完全",
                            icon: "none",
                            duration: 3e3
                        });
                        if (!a.a.checkIdCard(i.id_card_number)) return n.i(s.d)("user bind id error: " + r()(i) + i.id_card_number), 
                        void wx.showToast({
                            title: "身份证号格式不正确",
                            icon: "none",
                            duration: 3e3
                        });
                        o.a.updateUserInfo(i).then(this.updateMyReg);
                    } catch (t) {
                        n.i(s.d)("user bind error: " + r()(t));
                    }
                },
                updateMyReg: function(t) {
                    422 === t.code ? wx.showToast({
                        title: t.error_message,
                        icon: "none"
                    }) : this.$emit("on-close");
                }
            },
            props: {
                show: {
                    type: Boolean
                }
            }
        };
    },
    zwoO: function(t, e, n) {
        e.__esModule = !0;
        var i, r = (i = n("pFYg")) && i.__esModule ? i : {
            default: i
        };
        e.default = function(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" !== (void 0 === e ? "undefined" : (0, r.default)(e)) && "function" != typeof e ? t : e;
        };
    },
    zzHr: function(t, e, n) {
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "filters-wrap",
                    class: t.className
                }, [ t._t("default", null, {
                    mpcomid: "0"
                }), t._v(" "), n("ul", {
                    staticClass: "filters",
                    class: [ {
                        auction: t.auction
                    } ]
                }, t._l(t.tabs, function(e, i) {
                    return n("li", {
                        key: i,
                        class: [ {
                            active: e === t.selected || t.text[e] && t.text[e] != e && "不限" != t.text[e]
                        } ],
                        attrs: {
                            "data-tab": e,
                            eventid: "0-" + i
                        },
                        on: {
                            tap: t.onSelect
                        }
                    }, [ n("span", [ t._v("\n                " + t._s("不限" !== t.text[e] && t.text[e] ? t.text[e] : e) + "\n            ") ]), t._v(" "), n("img", {
                        attrs: {
                            src: [ e === t.selected ? "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/packageA/surplus_buildings/down-active.png" : "https://cdn.vip-wifi.com/fangchan/version-img/1.10.24/packageA/surplus_buildings/down.png" ]
                        }
                    }) ]);
                })), t._v(" "), n("div", {
                    class: [ {
                        hide: "区域" !== t.selected
                    } ]
                }, [ t.auction ? n("zones-select", {
                    attrs: {
                        zones: t.zones,
                        eventid: "2",
                        mpcomid: "2"
                    },
                    on: {
                        change: t.changeZones
                    }
                }) : n("zone-select", {
                    attrs: {
                        zone_ids: t.zone_ids,
                        eventid: "1",
                        mpcomid: "1"
                    },
                    on: {
                        changeZone: t.changeZone,
                        changeMetro: t.changeMetro
                    }
                }) ], 1), t._v(" "), n("div", {
                    class: [ {
                        hide: "用途" !== t.selected
                    } ]
                }, [ n("use-type", {
                    attrs: {
                        eventid: "3",
                        mpcomid: "3"
                    },
                    on: {
                        change: t.changeUseType
                    }
                }) ], 1), t._v(" "), n("div", {
                    class: [ {
                        hide: "价格" !== t.selected
                    } ]
                }, [ n("price-select", {
                    attrs: {
                        eventid: "4",
                        mpcomid: "4"
                    },
                    on: {
                        change: t.changePrice
                    }
                }) ], 1), t._v(" "), n("div", {
                    class: [ {
                        hide: "户型" !== t.selected
                    } ]
                }, [ n("layout-select", {
                    attrs: {
                        eventid: "5",
                        mpcomid: "5"
                    },
                    on: {
                        change: t.changeLayout
                    }
                }) ], 1), t._v(" "), n("div", {
                    class: [ {
                        hide: "面积" !== t.selected
                    } ]
                }, [ n("area-select", {
                    attrs: {
                        eventid: "6",
                        mpcomid: "6"
                    },
                    on: {
                        change: t.changeArea
                    }
                }) ], 1), t._v(" "), n("div", {
                    class: [ {
                        hide: "装修" !== t.selected
                    } ]
                }, [ n("decorate-select", {
                    attrs: {
                        eventid: "7",
                        mpcomid: "7"
                    },
                    on: {
                        change: t.changeDecorate
                    }
                }) ], 1), t._v(" "), t.selected ? n("div", {
                    staticClass: "overlay",
                    attrs: {
                        eventid: "8"
                    },
                    on: {
                        tap: t.hideSelect
                    }
                }) : t._e() ], 2);
            },
            staticRenderFns: []
        };
        e.a = i;
    }
});
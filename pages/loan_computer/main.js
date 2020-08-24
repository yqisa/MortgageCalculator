require("../common/manifest.js"), require("../common/vendor.js"), global.webpackJsonp([ 27 ], {
    "7ki5": function(t, e, s) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = s("5nAL"), i = s.n(a), n = s("vYVK");
        new i.a(n.a).$mount(), e.default = {
            config: {}
        };
    },
    A4Et: function(t, e, s) {
        var a = s("eWKE"), i = s("wfgC"), n = s("ybqe")(a.a, i.a, function(t) {
            s("ZsZ4");
        }, "data-v-4c5b63a7", null);
        e.a = n.exports;
    },
    ZsZ4: function(t, e) {},
    eWKE: function(t, e, s) {
        var a = s("4vlg");
        e.a = {
            data: function() {
                return {
                    types: [ a.b.BUSINESS, a.b.PUBLIC_FUND, a.b.COMPOSE ]
                };
            },
            methods: {
                changeType: function(t) {
                    this.$emit("onChange", t.target.dataset.type);
                }
            },
            props: [ "type" ]
        };
    },
    mDfM: function(t, e) {},
    u5n9: function(t, e, s) {
        var a = {
            render: function() {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {
                    staticClass: "page loan-computer-page"
                }, [ s("tabs", {
                    attrs: {
                        type: t.loan_type,
                        eventid: "0",
                        mpcomid: "0"
                    },
                    on: {
                        onChange: t.changeLoanType
                    }
                }), t._v(" "), s("div", {
                    staticClass: "form-wrap"
                }, [ t.total_price ? s("div", {
                    staticClass: "row"
                }, [ s("label", [ t._v("贷款总额") ]), t._v(" "), s("div", {
                    staticClass: "content"
                }, [ t._v("\n                " + t._s(t.total_price) + "\n                万\n            ") ]) ], 1) : t._e(), t._v(" "), t.total_price ? s("div", {
                    staticClass: "row"
                }, [ s("label", [ t._v("首付金额") ]), t._v(" "), s("div", {
                    staticClass: "content"
                }, [ t._v("\n                " + t._s(t.down_payment) + "万\n                "), s("div", {
                    staticClass: "select"
                }, t._l(t.down_payment_select, function(e, a) {
                    return s("div", {
                        key: a,
                        staticClass: "item",
                        class: [ {
                            active: e.key === t.selected_rate
                        } ],
                        attrs: {
                            "data-key": e.key,
                            eventid: "1-" + a
                        },
                        on: {
                            tap: t.selectDownPayment
                        }
                    }, [ t._v("\n                        " + t._s(e.text) + "\n                    ") ]);
                })) ]) ], 1) : t._e(), t._v(" "), s("div", {
                    staticClass: "row"
                }, [ s("label", [ t._v("还款方式") ]), t._v(" "), s("div", {
                    staticClass: "content navigator-arrow"
                }, [ s("picker", {
                    attrs: {
                        value: t.type_value,
                        "range-key": "text",
                        range: t.types,
                        eventid: "2"
                    },
                    on: {
                        change: t.changeType
                    }
                }, [ s("view", {
                    staticClass: "picker"
                }, [ t._v(t._s(t.types[t.type_value].text)) ]) ]) ], 1) ], 1), t._v(" "), t.isBusiness || t.isCompose ? s("div", {
                    staticClass: "row"
                }, [ s("label", [ t._v("商贷总额") ]), t._v(" "), s("div", {
                    staticClass: "content"
                }, [ s("span", {
                    staticClass: "large-input"
                }, [ s("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.business_loan,
                        expression: "business_loan"
                    } ],
                    attrs: {
                        type: "number",
                        placeholder: "请输入商业贷款总额",
                        eventid: "3"
                    },
                    domProps: {
                        value: t.business_loan
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.business_loan = e.target.value);
                        }
                    }
                }), t._v("\n                    万\n                ") ]) ]) ], 1) : t._e(), t._v(" "), t.isPublic || t.isCompose ? s("div", {
                    staticClass: "row"
                }, [ s("label", [ t._v("公积金贷款总额") ]), t._v(" "), s("div", {
                    staticClass: "content"
                }, [ s("span", {
                    staticClass: "large-input"
                }, [ s("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.public_loan,
                        expression: "public_loan"
                    } ],
                    attrs: {
                        type: "number",
                        placeholder: "请输入公积金贷款总额",
                        eventid: "4"
                    },
                    domProps: {
                        value: t.public_loan
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.public_loan = e.target.value);
                        }
                    }
                }), t._v("\n                    万\n                ") ]) ]) ], 1) : t._e(), t._v(" "), s("div", {
                    staticClass: "row"
                }, [ s("label", [ t._v("按揭年数") ]), t._v(" "), s("div", {
                    staticClass: "content navigator-arrow"
                }, [ s("picker", {
                    attrs: {
                        start: t.currentDate,
                        value: t.year_value,
                        range: t.years,
                        eventid: "5"
                    },
                    on: {
                        change: t.changeYear
                    }
                }, [ s("view", {
                    staticClass: "picker"
                }, [ t._v(t._s(t.year + "年(" + 12 * t.year + "月)")) ]) ]) ], 1) ], 1), t._v(" "), s("div", {
                    staticClass: "row"
                }, [ s("label", [ t._v("首次还款日期") ]), t._v(" "), s("div", {
                    staticClass: "content navigator-arrow"
                }, [ s("picker", {
                    attrs: {
                        mode: "date",
                        eventid: "6"
                    },
                    on: {
                        change: t.changeFirstDate
                    }
                }, [ s("view", {
                    staticClass: "picker"
                }, [ t._v(t._s(t.from_date_show)) ]) ]) ], 1) ], 1), t._v(" "), s("div", {
                    staticClass: "row multi-row"
                }, [ s("label", [ t._v("贷款利率(%)") ]), t._v(" "), s("div", {
                    staticClass: "content multi-content"
                }, [ t.isBusiness || t.isCompose ? s("div", [ s("div", {
                    staticClass: "input-row"
                }, [ s("span", {
                    staticClass: "mini-input"
                }, [ s("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.business_base_rate,
                        expression: "business_base_rate"
                    } ],
                    attrs: {
                        type: "digit",
                        eventid: "7"
                    },
                    domProps: {
                        value: t.business_base_rate
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.business_base_rate = e.target.value);
                        }
                    }
                }), t._v("\n                            %\n                        ") ]), t._v(" "), s("i", [ t._v("×") ]), t._v(" "), s("span", {
                    staticClass: "mini-input"
                }, [ s("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.business_multiple,
                        expression: "business_multiple"
                    } ],
                    attrs: {
                        type: "digit",
                        eventid: "8"
                    },
                    domProps: {
                        value: t.business_multiple
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.business_multiple = e.target.value);
                        }
                    }
                }), t._v("\n                            倍\n                        ") ]), t._v(" "), s("i", [ t._v("=") ]), t._v("\n                        " + t._s(t.business_rate) + "%\n                    ") ], 1), t._v(" "), s("p", [ t._v("当前年限基准利率：商业" + t._s(t.business_interest_rate.value) + "%") ]) ], 1) : t._e(), t._v(" "), t.isPublic || t.isCompose ? s("div", [ s("div", {
                    staticClass: "input-row"
                }, [ s("span", {
                    staticClass: "mini-input"
                }, [ s("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.public_base_rate,
                        expression: "public_base_rate"
                    } ],
                    attrs: {
                        type: "digit",
                        eventid: "9"
                    },
                    domProps: {
                        value: t.public_base_rate
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.public_base_rate = e.target.value);
                        }
                    }
                }), t._v("\n                            %\n                        ") ]), t._v(" "), s("i", [ t._v("×") ]), t._v(" "), s("span", {
                    staticClass: "mini-input"
                }, [ s("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.public_multiple,
                        expression: "public_multiple"
                    } ],
                    attrs: {
                        type: "digit",
                        eventid: "10"
                    },
                    domProps: {
                        value: t.public_multiple
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.public_multiple = e.target.value);
                        }
                    }
                }), t._v("\n                            倍\n                        ") ]), t._v(" "), s("i", [ t._v("=") ]), t._v("\n                        " + t._s(t.public_rate) + "%\n                    ") ], 1), t._v(" "), s("p", [ t._v("当前年限基准利率：公积金" + t._s(t.public_interest_rate.value) + "%") ]) ], 1) : t._e() ]) ], 1) ]), t._v(" "), s("div", {
                    staticClass: "btn-wrap"
                }, [ s("button", {
                    staticClass: "large-btn confirm-btn",
                    attrs: {
                        eventid: "11"
                    },
                    on: {
                        tap: t.computeResult
                    }
                }, [ t._v("开始计算") ]) ], 1), t._v(" "), s("page-wrap", {
                    attrs: {
                        title: "房贷计算",
                        mpcomid: "1"
                    }
                }) ], 1);
            },
            staticRenderFns: []
        };
        e.a = a;
    },
    vYVK: function(t, e, s) {
        var a = s("z8+l"), i = s("u5n9"), n = s("ybqe")(a.a, i.a, function(t) {
            s("mDfM");
        }, null, null);
        e.a = n.exports;
    },
    wfgC: function(t, e, s) {
        var a = {
            render: function() {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {
                    staticClass: "loan-computer-title"
                }, [ s("ul", {
                    staticClass: "tabs"
                }, t._l(t.types, function(e, a) {
                    return s("li", {
                        key: a,
                        class: {
                            active: t.type === e
                        },
                        attrs: {
                            "data-type": e,
                            eventid: "0-" + a
                        },
                        on: {
                            click: t.changeType
                        }
                    }, [ t._v("\n            " + t._s(e) + "\n        ") ]);
                })), t._v(" "), s("button", {
                    staticClass: "share-top-right",
                    attrs: {
                        "open-type": "share"
                    }
                }, [ s("img", {
                    attrs: {
                        src: "/static/img/share-new.png"
                    }
                }), t._v(" "), s("span", [ t._v("分享") ]) ]) ], 1);
            },
            staticRenderFns: []
        };
        e.a = a;
    },
    "z8+l": function(t, e, s) {
        var a = s("mvHQ"), i = s.n(a), n = s("Dd8w"), r = s.n(n), l = s("QDEk"), o = s("A4Et"), u = s("4vlg"), _ = function() {
            var t = new Date(), e = t.getDate();
            return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + (e >= 10 ? e : "0" + e);
        }, c = function(t, e) {
            return u.e[t](e);
        }, p = function(t, e) {
            return 1e4 * parseInt(t * (1 - e) / 1e4);
        }, v = function(t) {
            var e = t.toFixed(4).split(".");
          if (e[1]=="0000"){//利率+基点为整型时忽略小数点后几位
            return e[0]
          }
            return e[0] + "." + (e[1] / 1e4).toString().split(".")[1];
        };
        e.a = {
            data: function() {
                return {
                    total_price: "",
                    type: u.f,
                    type_value: 0,
                    types: u.g,
                    loan_type: u.h,
                    loan_type_value: 0,
                    year: u.i,
                    year_value: u.j.length - 1,
                    years: u.j,
                    business_interest_rate: {},
                    public_interest_rate: {},
                    currentDate: _(),
                    from_date: _(),
                    loan: "",
                    loan_types: [ u.b.BUSINESS, u.b.PUBLIC_FUND, u.b.COMPOSE ],
                    business_base_rate: "",
                    business_multiple: 1,
                    business_loan: "",
                    public_base_rate: "",
                    public_multiple: 1,
                    public_loan: "",
                    down_payment_select: [ {
                        text: "三成",
                        key: .3
                    }, {
                        text: "四成",
                        key: .4
                    }, {
                        text: "六成",
                        key: .6
                    }, {
                        text: "七成",
                        key: .7
                    } ],
                    selected_rate: .3
                };
            },
            onShareAppMessage: function() {
                return this.getShareInfo({
                    title: "房贷计算器",
                    path: "/pages/loan_computer/main"
                }, "LOAN_COMPUTER");
            },
            onLoad: function(t) {
                this.total_price = t.total_price, this.total_price && this.changeDownPayment(.3), 
                this.getRate();
            },
            computed: {
                down_payment: function() {
                    return t = 1e4 * this.total_price, e = this.selected_rate, ((t - p(t, e)) / 1e4).toFixed(2);
                    var t, e;
                },
                from_date_show: function() {
                    var t = this.from_date.split("-");
                    return t[0] + "年" + t[1] + "月" + t[2] + "日";
                },
                business_rate: function() {
                  console.log(this.business_base_rate)
                  console.log(this.business_multiple*0.01)
                  return v(parseFloat(this.business_base_rate) + parseFloat(this.business_multiple * 0.01));
                },
                public_rate: function() {
                    return v(this.public_base_rate * this.public_multiple);
                },
                isBusiness: function() {
                    return this.loan_type === u.b.BUSINESS;
                },
                isPublic: function() {
                    return this.loan_type === u.b.PUBLIC_FUND;
                },
                isCompose: function() {
                    return this.loan_type === u.b.COMPOSE;
                }
            },
            methods: {
                getRate: function() {
                    var t = c(u.b.BUSINESS, this.year);
                    this.business_base_rate = t.value, this.business_interest_rate = t;
                    var e = c(u.b.PUBLIC_FUND, this.year);
                    this.public_base_rate = e.value, this.public_interest_rate = e;
                },
                resetCondition: function() {
                    this.result = u.k, this.year = u.i, this.business_loan = "", this.public_loan = "";
                },
                changeType: function(t) {
                    this.type_value = t.target.value, this.type = u.g[this.type_value];
                },
                changeLoanType: function(t) {
                    this.loan_type = t, this.resetCondition();
                },
                changeFirstDate: function(t) {
                    var e = t.target.value;
                    this.from_date = e;
                },
                changeYear: function(t) {
                    var e = t.target.value;
                    this.year_value = e, this.year = parseInt(this.years[e]), this.getRate();
                },
                selectDownPayment: function(t) {
                    var e = t.currentTarget.dataset.key;
                    this.changeDownPayment(e);
                },
                changeDownPayment: function(t) {
                    this.selected_rate = t;
                    var e = p(1e4 * this.total_price, this.selected_rate);
                    this.isBusiness ? this.business_loan = parseInt(e / 1e4) : this.total_price = 0;
                },
                computeResult: function() {
                    var t = void 0, e = void 0;
                  console.log(this.public_rate)

                    if (this.isBusiness && (t = this.business_loan, e = this.business_rate), this.isPublic && (t = this.public_loan, 
                    e = this.public_rate), this.isCompose && (t = this.business_loan + this.public_loan), 
                    t) if (/^\d+$/.test(t)) {
                        var s = this.business_base_rate, a = this.business_multiple, n = this.public_base_rate, l = this.public_multiple;
                        if (this.isCompose && s && a && n && l || this.isBusiness && s && a || this.isPublic && n && l) {
                          if (e == "5.undefined") {//利率+基点为5.0时候                               e = 5
                          }
                            var o = {
                                loan_type: this.loan_type,
                                year: parseInt(this.year),
                                type: this.type,
                                from_date: this.from_date
                            };
                            o = this.isCompose ? r()({}, o, {
                                business_loan: this.business_loan,
                                business_loan_rate: this.business_rate,
                                public_loan: this.public_loan,
                                public_loan_rate: this.public_rate
                            }) : r()({}, o, {
                                loan: t,
                                loan_rate: e
                            }),                               
                            wx.navigateTo({
                              url: "/pages/loan_computer/result/main?params=" + i()(o)
                            });
                        } else wx.showToast({
                            title: "请填写贷款利率",
                            icon: "none"
                        });
                    } else wx.showToast({
                        title: "贷款金额只能整数",
                        icon: "none"
                    }); else wx.showToast({
                        title: "请填写贷款金额",
                        icon: "none"
                    });
                }
            },
            components: {
                tabs: o.a,
                pageWrap: l.a
            }
        };
    }
}, [ "7ki5" ]);
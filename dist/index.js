! function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.AWN = e() : t.AWN = e()
}(window, function () {
  return function (t) {
    var e = {};

    function n(o) {
      if (e[o]) return e[o].exports;
      var r = e[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    return n.m = t, n.c = e, n.d = function (t, e, o) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: o
      })
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      })
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (n.r(o), Object.defineProperty(o, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t)
        for (var r in t) n.d(o, r, function (e) {
          return t[e]
        }.bind(null, r));
      return o
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return n.d(e, "a", e), e
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
  }([function (t, e, n) {
    "use strict";

    function o(t) {
      return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function r(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
      }
    }
    n.r(e);
    var i = {
        maxNotifications: 10,
        animationDuration: 300,
        position: "bottom-right",
        labels: {
          tip: "Tip",
          info: "Info",
          success: "Success",
          warning: "Attention",
          alert: "Error",
          async: "Loading",
          confirm: "Confirmation required",
          confirmOk: "OK",
          confirmCancel: "Cancel"
        },
        icons: {
          tip: "question-circle",
          info: "info-circle",
          success: "check-circle",
          warning: "exclamation-circle",
          alert: "exclamation-triangle",
          async: "cog fa-spin",
          confirm: "exclamation-triangle",
          prefix: "<i class='fa fas fa-fw fa-",
          suffix: "'></i>",
          enabled: !0
        },
        replacements: {
          tip: null,
          info: null,
          success: null,
          warning: null,
          alert: null,
          async: null,
          "async-block": null,
          modal: null,
          confirm: null,
          general: {
            "<script>": "",
            "<\/script>": ""
          }
        },
        messages: {
          tip: "",
          info: "",
          success: "Action has been succeeded",
          warning: "",
          alert: "Action has been failed",
          confirm: "This action can't be undone. Continue?",
          async: "Please, wait...",
          "async-block": "Loading"
        },
        formatError: function (t) {
          if (t.response) {
            if (!t.response.data) return "500 API Server Error";
            if (t.response.data.errors) return t.response.data.errors.map(function (t) {
              return t.detail
            }).join("<br>");
            if (t.response.statusText) return "".concat(t.response.status, " ").concat(t.response.statusText, ": ").concat(t.response.data)
          }
          return t.message ? t.message : t
        },
        durations: {
          global: 5e3,
          success: null,
          info: null,
          tip: null,
          warning: null,
          alert: null
        },
        minDurations: {
          async: 1e3,
          "async-block": 1e3
        }
      },
      a = function () {
        function t() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i;
          ! function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, t), Object.assign(this, this.defaultsDeep(n, e))
        }
        var e, n, a;
        return e = t, (n = [{
          key: "icon",
          value: function (t) {
            return this.icons.enabled ? "".concat(this.icons.prefix).concat(this.icons[t]).concat(this.icons.suffix) : ""
          }
        }, {
          key: "label",
          value: function (t) {
            return this.labels[t]
          }
        }, {
          key: "duration",
          value: function (t) {
            var e = this.durations[t];
            return null === e ? this.durations.global : e
          }
        }, {
          key: "toSecs",
          value: function (t) {
            return "".concat(t / 1e3, "s")
          }
        }, {
          key: "applyReplacements",
          value: function (t, e) {
            if (!t) return this.messages[e] || "";
            for (var n = 0, o = ["general", e]; n < o.length; n++) {
              var r = o[n];
              if (this.replacements[r])
                for (var i in this.replacements[r]) t = t.replace(i, this.replacements[r][i])
            }
            return t
          }
        }, {
          key: "override",
          value: function (e) {
            return e ? new t(e, this) : this
          }
        }, {
          key: "defaultsDeep",
          value: function (t, e) {
            var n = {};
            for (var r in t) e.hasOwnProperty(r) ? n[r] = "object" === o(t[r]) && null !== t[r] ? this.defaultsDeep(t[r], e[r]) : e[r] : n[r] = t[r];
            return n
          }
        }]) && r(e.prototype, n), a && r(e, a), t
      }(),
      s = {
        popup: "".concat("awn", "-popup"),
        toast: "".concat("awn", "-toast"),
        btn: "".concat("awn", "-btn"),
        confirm: "".concat("awn", "-confirm")
      },
      c = {
        prefix: s.toast,
        klass: {
          label: "".concat(s.toast, "-label"),
          content: "".concat(s.toast, "-content"),
          icon: "".concat(s.toast, "-icon"),
          progressBar: "".concat(s.toast, "-progress-bar"),
          progressBarPause: "".concat(s.toast, "-progress-bar-paused")
        },
        ids: {
          container: "".concat(s.toast, "-container")
        }
      },
      u = {
        prefix: s.popup,
        klass: {
          buttons: "".concat("awn", "-buttons"),
          button: s.btn,
          successBtn: "".concat(s.btn, "-success"),
          cancelBtn: "".concat(s.btn, "-cancel"),
          title: "".concat(s.popup, "-title"),
          body: "".concat(s.popup, "-body"),
          content: "".concat(s.popup, "-content"),
          dotAnimation: "".concat(s.popup, "-loading-dots")
        },
        ids: {
          wrapper: "".concat(s.popup, "-wrapper"),
          confirmOk: "".concat(s.confirm, "-ok"),
          confirmCancel: "".concat(s.confirm, "-cancel")
        }
      },
      l = {
        klass: {
          hiding: "".concat("awn", "-hiding")
        },
        lib: "awn"
      };

    function f(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
      }
    }
    var p = function () {
      function t(e, n, o, r, i) {
        var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "div";
        ! function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.newNode = document.createElement(a), n && (this.newNode.id = n), o && (this.newNode.className = o), i && (this.newNode.innerHTML = i), r && (this.newNode.style.cssText = r), this.parent = e
      }
      var e, n, o;
      return e = t, (n = [{
        key: "beforeInsert",
        value: function () {}
      }, {
        key: "afterInsert",
        value: function () {}
      }, {
        key: "insert",
        value: function () {
          return this.beforeInsert(), this.el = this.parent.appendChild(this.newNode), this.afterInsert(), this
        }
      }, {
        key: "replace",
        value: function (t) {
          var e = this;
          if (this.getElement()) return this.beforeDelete().then(function () {
            return e.updateType(t.type), e.parent.replaceChild(t.newNode, e.el), e.el = e.getElement(t.newNode), e.afterInsert(), e
          })
        }
      }, {
        key: "beforeDelete",
        value: function () {
          var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.el,
            n = 0;
          return this.start && (n = this.options.minDurations[this.type] + this.start - Date.now()) < 0 && (n = 0), new Promise(function (o) {
            setTimeout(function () {
              e.classList.add(l.klass.hiding), setTimeout(o, t.options.animationDuration)
            }, n)
          })
        }
      }, {
        key: "delete",
        value: function () {
          var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.el;
          return this.getElement(e) ? this.beforeDelete(e).then(function () {
            return t.parent.removeChild(e)
          }) : null
        }
      }, {
        key: "getElement",
        value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.el;
          return document.getElementById(t.id)
        }
      }, {
        key: "addEvent",
        value: function (t, e) {
          this.el.addEventListener(t, e)
        }
      }, {
        key: "toggleClass",
        value: function (t) {
          this.el.classList.toggle(t)
        }
      }, {
        key: "updateType",
        value: function (t) {
          this.type = t, this.duration = this.options.duration(this.type)
        }
      }]) && f(e.prototype, n), o && f(e, o), t
    }();

    function d(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
      }
    }
    var y = function () {
      function t(e, n) {
        ! function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.callback = e, this.remaining = n, this.resume()
      }
      var e, n, o;
      return e = t, (n = [{
        key: "pause",
        value: function () {
          this.paused = !0, window.clearTimeout(this.timerId), this.remaining -= new Date - this.start
        }
      }, {
        key: "resume",
        value: function () {
          var t = this;
          this.paused = !1, this.start = new Date, window.clearTimeout(this.timerId), this.timerId = window.setTimeout(function () {
            window.clearTimeout(t.timerId), t.callback()
          }, this.remaining)
        }
      }, {
        key: "toggle",
        value: function () {
          this.paused ? this.resume() : this.pause()
        }
      }]) && d(e.prototype, n), o && d(e, o), t
    }();

    function h(t) {
      return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function b(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
      }
    }

    function m(t, e) {
      return !e || "object" !== h(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function v(t) {
      return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function g(t, e) {
      return (g = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }
    var k = function (t) {
      function e(t, n, o, r) {
        var i;
        return function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), (i = m(this, v(e).call(this, r, "".concat(c.prefix, "-").concat(Math.floor(Date.now() - 100 * Math.random())), "".concat(c.prefix, " ").concat(c.prefix, "-").concat(n), "animation-duration: ".concat(o.toSecs(o.animationDuration), ";")))).options = o, i.updateType(n), i.setInnerHtml(t), i
      }
      var n, o, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && g(t, e)
      }(e, p), n = e, (o = [{
        key: "setInnerHtml",
        value: function (t) {
          "alert" === this.type && (t = this.options.formatError(t)), t = this.options.applyReplacements(t, this.type), this.newNode.innerHTML = '<div class="awn-toast-wrapper">'.concat(this.progressBar).concat(this.label, '<div class="').concat(c.klass.content, '">').concat(t, '</div><span class="').concat(c.klass.icon, '">').concat(this.options.icon(this.type), "</span></div>")
        }
      }, {
        key: "beforeInsert",
        value: function () {
          var t = this;
          if (this.parent.childElementCount >= this.options.maxNotifications) {
            var e = Array.from(this.parent.getElementsByClassName(c.prefix));
            this.delete(e.find(function (e) {
              return !t.isDeleted(e)
            }))
          }
        }
      }, {
        key: "afterInsert",
        value: function () {
          var t = this;
          if ("async" == this.type) return this.start = Date.now();
          if (this.addEvent("click", function () {
              return t.delete()
            }), !(this.duration <= 0)) {
            this.timer = new y(function () {
              return t.delete()
            }, this.duration);
            for (var e = 0, n = ["mouseenter", "mouseleave"]; e < n.length; e++) {
              var o = n[e];
              this.addEvent(o, function () {
                t.isDeleted() || (t.toggleClass(c.klass.progressBarPause), t.timer.toggle())
              })
            }
          }
        }
      }, {
        key: "isDeleted",
        value: function () {
          return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.el).classList.contains(l.klass.hiding)
        }
      }, {
        key: "progressBar",
        get: function () {
          return this.duration <= 0 || "async" === this.type ? "" : "<div class='".concat(c.klass.progressBar, "' style=\"animation-duration:").concat(this.options.toSecs(this.duration), ';"></div>')
        }
      }, {
        key: "label",
        get: function () {
          return '<b class="'.concat(c.klass.label, '">').concat(this.options.label(this.type), "</b>")
        }
      }]) && b(n.prototype, o), r && b(n, r), e
    }();

    function w(t) {
      return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function _(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
      }
    }

    function O(t, e) {
      return !e || "object" !== w(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }(t) : e
    }

    function T(t) {
      return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      })(t)
    }

    function S(t, e) {
      return (S = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t
      })(t, e)
    }
    var j = function (t) {
      function e(t) {
        var n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
          r = arguments.length > 2 ? arguments[2] : void 0,
          i = arguments.length > 3 ? arguments[3] : void 0,
          a = arguments.length > 4 ? arguments[4] : void 0;
        ! function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        var s = "animation-duration: ".concat(r.toSecs(r.animationDuration), ";");
        return (n = O(this, T(e).call(this, document.body, u.ids.wrapper, null, s))).options = r, n[u.ids.confirmOk] = i, n[u.ids.confirmCancel] = a, n.className = o, ["confirm", "async-block", "modal"].includes(o) || (o = "modal"), n.updateType(o), n.setInnerHtml(t), n.insert(), n
      }
      var n, o, r;
      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && S(t, e)
      }(e, p), n = e, (o = [{
        key: "setInnerHtml",
        value: function (t) {
          var e = this.options.applyReplacements(t, this.type);
          switch (this.type) {
            case "confirm":
              e = "".concat(this.options.icon(this.type), "<div class='").concat(u.klass.title, "'>").concat(this.options.label(this.type), '</div><div class="').concat(u.klass.content, '">').concat(e, "</div><div class='").concat(u.klass.buttons, "'><button class='").concat(u.klass.button, " ").concat(u.klass.successBtn, "'id='").concat(u.ids.confirmOk, "'>").concat(this.options.labels.confirmOk, "</button><button class='").concat(u.klass.button, " ").concat(u.klass.cancelBtn, "'id='").concat(u.ids.confirmCancel, "'>").concat(this.options.labels.confirmCancel, "</button></div>");
              break;
            case "async-block":
              e = "".concat(e, '<div class="').concat(u.klass.dotAnimation, '"></div>')
          }
          this.newNode.innerHTML = '<div class="'.concat(u.klass.body, " ").concat(u.prefix, "-").concat(this.className, '">').concat(e, "</div>")
        }
      }, {
        key: "afterInsert",
        value: function () {
          var t = this;
          switch (this.type) {
            case "async-block":
              this.start = Date.now();
              break;
            case "confirm":
              this.addEvent("click", function (e) {
                if ("BUTTON" !== e.target.nodeName) return !1;
                t.delete(), t[e.target.id] && t[e.target.id]()
              });
              break;
            default:
              this.addEvent("click", function (e) {
                e.target.id === t.newNode.id && t.delete()
              })
          }
        }
      }]) && _(n.prototype, o), r && _(n, r), e
    }();

    function x(t) {
      return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }

    function P(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
      }
    }
    n.d(e, "default", function () {
      return E
    });
    var E = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        ! function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.options = new a(e)
      }
      var e, n, o;
      return e = t, (n = [{
        key: "tip",
        value: function (t, e) {
          return this._addToast(t, "tip", e).el
        }
      }, {
        key: "info",
        value: function (t, e) {
          return this._addToast(t, "info", e).el
        }
      }, {
        key: "success",
        value: function (t, e) {
          return this._addToast(t, "success", e).el
        }
      }, {
        key: "warning",
        value: function (t, e) {
          return this._addToast(t, "warning", e).el
        }
      }, {
        key: "alert",
        value: function (t, e) {
          return this._addToast(t, "alert", e).el
        }
      }, {
        key: "async",
        value: function (t, e, n, o, r) {
          var i = this._addToast(o, "async", r);
          return this._afterAsync(t, e, n, r, i)
        }
      }, {
        key: "confirm",
        value: function (t, e, n, o) {
          return this._addPopup(t, "confirm", o, e, n)
        }
      }, {
        key: "asyncBlock",
        value: function (t, e, n, o, r) {
          var i = this._addPopup(o, "async-block", r);
          return this._afterAsync(t, e, n, r, i)
        }
      }, {
        key: "modal",
        value: function (t, e, n) {
          return this._addPopup(t, e, n)
        }
      }, {
        key: "_addPopup",
        value: function (t, e, n, o, r) {
          return new j(t, e, this.options.override(n), o, r)
        }
      }, {
        key: "_addToast",
        value: function (t, e, n, o) {
          n = this.options.override(n);
          var r = new k(t, e, n, this.container);
          return o ? o instanceof j ? o.delete().then(function () {
            return r.insert()
          }) : o.replace(r) : r.insert()
        }
      }, {
        key: "_afterAsync",
        value: function (t, e, n, o, r) {
          return t.then(this._responseHandler(e, "success", o, r), this._responseHandler(n, "alert", o, r))
        }
      }, {
        key: "_responseHandler",
        value: function (t, e, n, o) {
          var r = this;
          return function (i) {
            switch (x(t)) {
              case "undefined":
              case "string":
                var a = "alert" === e ? t || i : t;
                r._addToast(a, e, n, o);
                break;
              default:
                o.delete().then(function () {
                  t && t(i)
                })
            }
            return "alert" === e ? Promise.reject(i) : i
          }
        }
      }, {
        key: "_createContainer",
        value: function () {
          return new p(document.body, c.ids.container, this.options.position).insert().el
        }
      }, {
        key: "container",
        get: function () {
          return document.getElementById(c.ids.container) || this._createContainer()
        }
      }]) && P(e.prototype, n), o && P(e, o), t
    }()
  }])
});

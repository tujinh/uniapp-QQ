if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": ""
    },
    {
      "font_class": "arrow-left",
      "unicode": ""
    },
    {
      "font_class": "arrow-right",
      "unicode": ""
    },
    {
      "font_class": "arrow-up",
      "unicode": ""
    },
    {
      "font_class": "auth",
      "unicode": ""
    },
    {
      "font_class": "auth-filled",
      "unicode": ""
    },
    {
      "font_class": "back",
      "unicode": ""
    },
    {
      "font_class": "bars",
      "unicode": ""
    },
    {
      "font_class": "calendar",
      "unicode": ""
    },
    {
      "font_class": "calendar-filled",
      "unicode": ""
    },
    {
      "font_class": "camera",
      "unicode": ""
    },
    {
      "font_class": "camera-filled",
      "unicode": ""
    },
    {
      "font_class": "cart",
      "unicode": ""
    },
    {
      "font_class": "cart-filled",
      "unicode": ""
    },
    {
      "font_class": "chat",
      "unicode": ""
    },
    {
      "font_class": "chat-filled",
      "unicode": ""
    },
    {
      "font_class": "chatboxes",
      "unicode": ""
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": ""
    },
    {
      "font_class": "chatbubble",
      "unicode": ""
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": ""
    },
    {
      "font_class": "checkbox",
      "unicode": ""
    },
    {
      "font_class": "checkbox-filled",
      "unicode": ""
    },
    {
      "font_class": "checkmarkempty",
      "unicode": ""
    },
    {
      "font_class": "circle",
      "unicode": ""
    },
    {
      "font_class": "circle-filled",
      "unicode": ""
    },
    {
      "font_class": "clear",
      "unicode": ""
    },
    {
      "font_class": "close",
      "unicode": ""
    },
    {
      "font_class": "closeempty",
      "unicode": ""
    },
    {
      "font_class": "cloud-download",
      "unicode": ""
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload",
      "unicode": ""
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": ""
    },
    {
      "font_class": "color",
      "unicode": ""
    },
    {
      "font_class": "color-filled",
      "unicode": ""
    },
    {
      "font_class": "compose",
      "unicode": ""
    },
    {
      "font_class": "contact",
      "unicode": ""
    },
    {
      "font_class": "contact-filled",
      "unicode": ""
    },
    {
      "font_class": "down",
      "unicode": ""
    },
    {
      "font_class": "bottom",
      "unicode": ""
    },
    {
      "font_class": "download",
      "unicode": ""
    },
    {
      "font_class": "download-filled",
      "unicode": ""
    },
    {
      "font_class": "email",
      "unicode": ""
    },
    {
      "font_class": "email-filled",
      "unicode": ""
    },
    {
      "font_class": "eye",
      "unicode": ""
    },
    {
      "font_class": "eye-filled",
      "unicode": ""
    },
    {
      "font_class": "eye-slash",
      "unicode": ""
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": ""
    },
    {
      "font_class": "fire",
      "unicode": ""
    },
    {
      "font_class": "fire-filled",
      "unicode": ""
    },
    {
      "font_class": "flag",
      "unicode": ""
    },
    {
      "font_class": "flag-filled",
      "unicode": ""
    },
    {
      "font_class": "folder-add",
      "unicode": ""
    },
    {
      "font_class": "folder-add-filled",
      "unicode": ""
    },
    {
      "font_class": "font",
      "unicode": ""
    },
    {
      "font_class": "forward",
      "unicode": ""
    },
    {
      "font_class": "gear",
      "unicode": ""
    },
    {
      "font_class": "gear-filled",
      "unicode": ""
    },
    {
      "font_class": "gift",
      "unicode": ""
    },
    {
      "font_class": "gift-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-down",
      "unicode": ""
    },
    {
      "font_class": "hand-down-filled",
      "unicode": ""
    },
    {
      "font_class": "hand-up",
      "unicode": ""
    },
    {
      "font_class": "hand-up-filled",
      "unicode": ""
    },
    {
      "font_class": "headphones",
      "unicode": ""
    },
    {
      "font_class": "heart",
      "unicode": ""
    },
    {
      "font_class": "heart-filled",
      "unicode": ""
    },
    {
      "font_class": "help",
      "unicode": ""
    },
    {
      "font_class": "help-filled",
      "unicode": ""
    },
    {
      "font_class": "home",
      "unicode": ""
    },
    {
      "font_class": "home-filled",
      "unicode": ""
    },
    {
      "font_class": "image",
      "unicode": ""
    },
    {
      "font_class": "image-filled",
      "unicode": ""
    },
    {
      "font_class": "images",
      "unicode": ""
    },
    {
      "font_class": "images-filled",
      "unicode": ""
    },
    {
      "font_class": "info",
      "unicode": ""
    },
    {
      "font_class": "info-filled",
      "unicode": ""
    },
    {
      "font_class": "left",
      "unicode": ""
    },
    {
      "font_class": "link",
      "unicode": ""
    },
    {
      "font_class": "list",
      "unicode": ""
    },
    {
      "font_class": "location",
      "unicode": ""
    },
    {
      "font_class": "location-filled",
      "unicode": ""
    },
    {
      "font_class": "locked",
      "unicode": ""
    },
    {
      "font_class": "locked-filled",
      "unicode": ""
    },
    {
      "font_class": "loop",
      "unicode": ""
    },
    {
      "font_class": "mail-open",
      "unicode": ""
    },
    {
      "font_class": "mail-open-filled",
      "unicode": ""
    },
    {
      "font_class": "map",
      "unicode": ""
    },
    {
      "font_class": "map-filled",
      "unicode": ""
    },
    {
      "font_class": "map-pin",
      "unicode": ""
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": ""
    },
    {
      "font_class": "medal",
      "unicode": ""
    },
    {
      "font_class": "medal-filled",
      "unicode": ""
    },
    {
      "font_class": "mic",
      "unicode": ""
    },
    {
      "font_class": "mic-filled",
      "unicode": ""
    },
    {
      "font_class": "micoff",
      "unicode": ""
    },
    {
      "font_class": "micoff-filled",
      "unicode": ""
    },
    {
      "font_class": "minus",
      "unicode": ""
    },
    {
      "font_class": "minus-filled",
      "unicode": ""
    },
    {
      "font_class": "more",
      "unicode": ""
    },
    {
      "font_class": "more-filled",
      "unicode": ""
    },
    {
      "font_class": "navigate",
      "unicode": ""
    },
    {
      "font_class": "navigate-filled",
      "unicode": ""
    },
    {
      "font_class": "notification",
      "unicode": ""
    },
    {
      "font_class": "notification-filled",
      "unicode": ""
    },
    {
      "font_class": "paperclip",
      "unicode": ""
    },
    {
      "font_class": "paperplane",
      "unicode": ""
    },
    {
      "font_class": "paperplane-filled",
      "unicode": ""
    },
    {
      "font_class": "person",
      "unicode": ""
    },
    {
      "font_class": "person-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled",
      "unicode": ""
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": ""
    },
    {
      "font_class": "phone",
      "unicode": ""
    },
    {
      "font_class": "phone-filled",
      "unicode": ""
    },
    {
      "font_class": "plus",
      "unicode": ""
    },
    {
      "font_class": "plus-filled",
      "unicode": ""
    },
    {
      "font_class": "plusempty",
      "unicode": ""
    },
    {
      "font_class": "pulldown",
      "unicode": ""
    },
    {
      "font_class": "pyq",
      "unicode": ""
    },
    {
      "font_class": "qq",
      "unicode": ""
    },
    {
      "font_class": "redo",
      "unicode": ""
    },
    {
      "font_class": "redo-filled",
      "unicode": ""
    },
    {
      "font_class": "refresh",
      "unicode": ""
    },
    {
      "font_class": "refresh-filled",
      "unicode": ""
    },
    {
      "font_class": "refreshempty",
      "unicode": ""
    },
    {
      "font_class": "reload",
      "unicode": ""
    },
    {
      "font_class": "right",
      "unicode": ""
    },
    {
      "font_class": "scan",
      "unicode": ""
    },
    {
      "font_class": "search",
      "unicode": ""
    },
    {
      "font_class": "settings",
      "unicode": ""
    },
    {
      "font_class": "settings-filled",
      "unicode": ""
    },
    {
      "font_class": "shop",
      "unicode": ""
    },
    {
      "font_class": "shop-filled",
      "unicode": ""
    },
    {
      "font_class": "smallcircle",
      "unicode": ""
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": ""
    },
    {
      "font_class": "sound",
      "unicode": ""
    },
    {
      "font_class": "sound-filled",
      "unicode": ""
    },
    {
      "font_class": "spinner-cycle",
      "unicode": ""
    },
    {
      "font_class": "staff",
      "unicode": ""
    },
    {
      "font_class": "staff-filled",
      "unicode": ""
    },
    {
      "font_class": "star",
      "unicode": ""
    },
    {
      "font_class": "star-filled",
      "unicode": ""
    },
    {
      "font_class": "starhalf",
      "unicode": ""
    },
    {
      "font_class": "trash",
      "unicode": ""
    },
    {
      "font_class": "trash-filled",
      "unicode": ""
    },
    {
      "font_class": "tune",
      "unicode": ""
    },
    {
      "font_class": "tune-filled",
      "unicode": ""
    },
    {
      "font_class": "undo",
      "unicode": ""
    },
    {
      "font_class": "undo-filled",
      "unicode": ""
    },
    {
      "font_class": "up",
      "unicode": ""
    },
    {
      "font_class": "top",
      "unicode": ""
    },
    {
      "font_class": "upload",
      "unicode": ""
    },
    {
      "font_class": "upload-filled",
      "unicode": ""
    },
    {
      "font_class": "videocam",
      "unicode": ""
    },
    {
      "font_class": "videocam-filled",
      "unicode": ""
    },
    {
      "font_class": "vip",
      "unicode": ""
    },
    {
      "font_class": "vip-filled",
      "unicode": ""
    },
    {
      "font_class": "wallet",
      "unicode": ""
    },
    {
      "font_class": "wallet-filled",
      "unicode": ""
    },
    {
      "font_class": "weibo",
      "unicode": ""
    },
    {
      "font_class": "weixin",
      "unicode": ""
    }
  ];
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$q = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code = this.icons.find((v) => v.font_class === this.type);
        if (code) {
          return code.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle($options.styleObj),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$c], ["__scopeId", "data-v-d31e1c47"], ["__file", "E:/HBuilderProjects/AA/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  const ON_BACK_PRESS = "onBackPress";
  const ON_PAGE_SCROLL = "onPageScroll";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onBackPress = /* @__PURE__ */ createHook(ON_BACK_PRESS);
  const onPageScroll = /* @__PURE__ */ createHook(ON_PAGE_SCROLL);
  const _imports_0 = "/static/one.png";
  const _sfc_main$p = {
    __name: "topBar",
    emits: ["popLeft"],
    setup(__props, { emit: __emit }) {
      const emit = __emit;
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "topBar" }, [
          vue.createElementVNode("view", { class: "container" }, [
            vue.createElementVNode("view", { class: "left" }, [
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                vue.createElementVNode("view", {
                  onClick: _cache[0] || (_cache[0] = ($event) => emit("popLeft")),
                  class: "avatar"
                }, [
                  vue.createElementVNode("image", {
                    src: _imports_0,
                    mode: ""
                  })
                ])
              ], true),
              vue.createElementVNode("view", { class: "info" }, [
                vue.renderSlot(_ctx.$slots, "info", {}, void 0, true)
              ])
            ]),
            vue.createElementVNode("view", { class: "right" }, [
              vue.renderSlot(_ctx.$slots, "rightbtn", {}, void 0, true)
            ])
          ])
        ]);
      };
    }
  };
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-a77c6761"], ["__file", "E:/HBuilderProjects/AA/components/topBar/topBar.vue"]]);
  const _sfc_main$o = {
    __name: "friendItem",
    props: {
      avatarSize: {
        type: String,
        default: "common"
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "list",
          "hover-class": "hover"
        }, [
          vue.createElementVNode(
            "image",
            {
              class: vue.normalizeClass(`avatar-${__props.avatarSize}`),
              src: _imports_0,
              mode: ""
            },
            null,
            2
            /* CLASS */
          ),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createElementVNode("view", { class: "top" }, [
              vue.createElementVNode("view", { class: "name" }, "梦的回归"),
              vue.createElementVNode("view", { class: "time" }, "上午9:25")
            ]),
            vue.createElementVNode("view", { class: "bottom" }, [
              vue.createElementVNode("view", { class: "msg" }, "梦的回归梦的回归梦的回归梦的回归梦的回归梦的回归"),
              vue.createElementVNode("view", { class: "tip" }, [
                vue.createElementVNode("text", { class: "num" }, "3")
              ])
            ])
          ])
        ]);
      };
    }
  };
  const __easycom_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-ee4ee558"], ["__file", "E:/HBuilderProjects/AA/components/friendItem/friendItem.vue"]]);
  const _sfc_main$n = {
    __name: "searchC",
    emits: ["pageset"],
    setup(__props, { emit: __emit }) {
      const emit = __emit;
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "wantSearch" }, [
            vue.createElementVNode("view", { class: "me item" }, " @我 "),
            vue.createElementVNode("view", { class: "item" }, " 特别关心 ")
          ]),
          vue.createElementVNode("view", { class: "relative" }, [
            vue.createElementVNode("view", { class: "title" }, "搜索指定内容"),
            vue.createElementVNode("view", { class: "types" }, [
              (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(4, (item) => {
                  return vue.createElementVNode("view", { class: "type" }, [
                    vue.createVNode(_component_uni_icons, {
                      class: "icon",
                      type: "gift",
                      size: "23"
                    }),
                    vue.createElementVNode("text", null, "找人/群")
                  ]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ])
          ]),
          vue.createElementVNode("view", { class: "recent" }, [
            vue.createElementVNode("view", { class: "title" }, [
              vue.createElementVNode("text", null, "最近搜索"),
              vue.createVNode(_component_uni_icons, {
                class: "icon",
                type: "gift",
                size: "15"
              })
            ]),
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("view", null, "1"),
              vue.createElementVNode("view", null, "socket"),
              vue.createElementVNode("view", null, "uniaqpp")
            ])
          ]),
          vue.createElementVNode("view", {
            onClick: _cache[0] || (_cache[0] = ($event) => emit("pageset")),
            class: "set"
          }, " 页面设置 ")
        ]);
      };
    }
  };
  const __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-a658355d"], ["__file", "E:/HBuilderProjects/AA/components/searchC/searchC.vue"]]);
  const _sfc_main$m = {
    __name: "search",
    emits: ["search"],
    setup(__props, { emit: __emit }) {
      const emit = __emit;
      let left = vue.ref(50);
      let width = vue.ref(100);
      const clickSearch = () => {
        emit("search");
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", {
          class: "search",
          onClick: clickSearch
        }, [
          vue.createElementVNode(
            "view",
            {
              class: "input",
              style: vue.normalizeStyle({ width: `${vue.unref(width)}%` })
            },
            [
              vue.createElementVNode(
                "view",
                {
                  class: "content",
                  style: vue.normalizeStyle({ left: `${vue.unref(left)}%` })
                },
                [
                  vue.createVNode(_component_uni_icons, {
                    class: "icon-search",
                    color: "#7f8082",
                    type: "search",
                    size: "18"
                  }),
                  vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ],
                4
                /* STYLE */
              )
            ],
            4
            /* STYLE */
          )
        ]);
      };
    }
  };
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-2df110ac"], ["__file", "E:/HBuilderProjects/AA/components/search/search.vue"]]);
  var isVue2 = false;
  function set(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * pinia v2.1.7
   * (c) 2023 Eduardo San Martin Morote
   * @license MIT
   */
  let activePinia;
  const setActivePinia = (pinia) => activePinia = pinia;
  const getActivePinia = () => vue.hasInjectionContext() && vue.inject(piniaSymbol) || activePinia;
  const piniaSymbol = Symbol("pinia");
  function isPlainObject(o) {
    return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, false);
    try {
      xhr.send();
    } catch (e) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
        // Fallback to using FileReader and a popup
        fileSaverSaveAs
      )
    )
  );
  function downloadSaveAs(blob, name = "download", opts) {
    const a = document.createElement("a");
    a.download = name;
    a.rel = "noopener";
    if (typeof blob === "string") {
      a.href = blob;
      if (a.origin !== location.origin) {
        if (corsEnabled(a.href)) {
          download(blob, name, opts);
        } else {
          a.target = "_blank";
          click(a);
        }
      } else {
        click(a);
      }
    } else {
      a.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a.href);
      }, 4e4);
      setTimeout(function() {
        click(a);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a = document.createElement("a");
        a.href = blob;
        a.target = "_blank";
        setTimeout(function() {
          click(a);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
      popup.document.title = popup.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url = reader.result;
        if (typeof url !== "string") {
          popup = null;
          throw new Error("Wrong reader.result type");
        }
        url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup) {
          popup.location.href = url;
        } else {
          location.assign(url);
        }
        popup = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url = URL.createObjectURL(blob);
      if (popup)
        popup.location.assign(url);
      else
        location.href = url;
      popup = null;
      setTimeout(function() {
        URL.revokeObjectURL(url);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "🍍 " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o) {
    return "_a" in o && "install" in o;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error) {
    if (error instanceof Error && error.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalPasteState(pinia) {
    if (checkClipboardAccess())
      return;
    try {
      loadStoresState(pinia, JSON.parse(await navigator.clipboard.readText()));
      toastMessage("Global state pasted from clipboard.");
    } catch (error) {
      if (checkNotFocusedError(error))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  async function actionGlobalSaveState(pinia) {
    try {
      saveAs(new Blob([JSON.stringify(pinia.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia) {
    try {
      const open2 = getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      loadStoresState(pinia, JSON.parse(text));
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error) {
      toastMessage(`Failed to import the state from JSON. Check the console for more details.`, "error");
      console.error(error);
    }
  }
  function loadStoresState(pinia, state) {
    for (const key in state) {
      const storeState = pinia.state.value[key];
      if (storeState) {
        Object.assign(storeState, state[key]);
      } else {
        pinia.state.value[key] = state[key];
      }
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store2 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const { assign: assign$1 } = Object;
  const getStoreType = (id) => "🍍 " + id;
  function registerPiniaDevtools(app, pinia) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia 🍍`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: 'Reset the state (with "$reset")',
            action: (nodeId) => {
              const store = pinia._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (typeof store.$reset !== "function") {
                toastMessage(`Cannot reset "${nodeId}" store because it doesn't have a "$reset" method implemented.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(store.$state).reduce((state, key) => {
                  state[key] = store.$state[key];
                  return state;
                }, {})
              )
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error) {
                    getters[key] = error;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia];
          stores = stores.concat(Array.from(pinia._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia : pinia._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("🍍")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛫 " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "🛬 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "💥 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type),
          data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
          groupId: activeAction
        };
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "⤵️";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "🧩";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🔥 " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store, actionNames, wrapWithProxy) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = wrapWithProxy ? new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        }) : store;
        activeAction = _actionId;
        const retValue = actions[actionName].apply(trackedStore, arguments);
        activeAction = void 0;
        return retValue;
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    store._isOptionsAPI = !!options.state;
    patchActionForGrouping(store, Object.keys(options.actions), store._isOptionsAPI);
    const originalHotUpdate = store._hotUpdate;
    vue.toRaw(store)._hotUpdate = function(newStore) {
      originalHotUpdate.apply(this, arguments);
      patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions), !!store._isOptionsAPI);
    };
    addStoreToDevtools(
      app,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia = vue.markRaw({
      install(app) {
        setActivePinia(pinia);
        {
          pinia._a = app;
          app.provide(piniaSymbol, pinia);
          app.config.globalProperties.$pinia = pinia;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia.use(devtoolsPlugin);
    }
    return pinia;
  }
  const isUseStore = (fn) => {
    return typeof fn === "function" && typeof fn.$id === "string";
  };
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  function acceptHMRUpdate(initialUseStore, hot) {
    return (newModule) => {
      const pinia = hot.data.pinia || initialUseStore._pinia;
      if (!pinia) {
        return;
      }
      hot.data.pinia = pinia;
      for (const exportName in newModule) {
        const useStore = newModule[exportName];
        if (isUseStore(useStore) && pinia._s.has(useStore.$id)) {
          const id = useStore.$id;
          if (id !== initialUseStore.$id) {
            console.warn(`The id of the store changed from "${initialUseStore.$id}" to "${id}". Reloading.`);
            return hot.invalidate();
          }
          const existingStore = pinia._s.get(id);
          if (!existingStore) {
            console.log(`[Pinia]: skipping hmr because store doesn't exist yet`);
            return;
          }
          useStore(pinia, existingStore);
        }
      }
    };
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  const fallbackRunWithContext = (fn) => fn();
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol("pinia:skipHydration");
  function skipHydrate(obj) {
    return Object.defineProperty(obj, skipHydrateSymbol, {});
  }
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o) {
    return !!(vue.isRef(o) && o.effect);
  }
  function createOptionsStore(id, options, pinia, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia.state.value[id];
    let store;
    function setup() {
      if (!initialState && !hot) {
        {
          pinia.state.value[id] = state ? state() : {};
        }
      }
      const localState = hot ? (
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        vue.toRefs(vue.ref(state ? state() : {}).value)
      ) : vue.toRefs(pinia.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
        }
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia);
          const store2 = pinia._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia, hot, true);
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
      // flush: 'post',
    };
    {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = [];
    let actionSubscriptions = [];
    let debuggerEvents;
    const initialState = pinia.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      {
        pinia.state.value[$id] = {};
      }
    }
    const hotState = vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      () => {
        throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
      }
    );
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store, args);
        } catch (error) {
          triggerSubscriptions(onErrorCallbackList, error);
          throw error;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error) => {
            triggerSubscriptions(onErrorCallbackList, error);
            return Promise.reject(error);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ vue.markRaw({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = vue.reactive(assign(
      {
        _hmrPayload,
        _customProperties: vue.markRaw(/* @__PURE__ */ new Set())
        // devtools custom properties
      },
      partialStore
      // must be added later
      // setupStore
    ));
    pinia._s.set($id, store);
    const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
    const setupStore = runWithContext(() => pinia._e.run(() => (scope = vue.effectScope()).run(setup)));
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (hot) {
          set(hotState.value, key, vue.toRef(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia.state.value[$id][key] = prop;
          }
        }
        {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        {
          setupStore[key] = actionValue;
        }
        {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? (
            // @ts-expect-error
            options.getters[key]
          ) : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || // @ts-expect-error: same
            (setupStore._getters = vue.markRaw([]));
            getters.push(key);
          }
        }
      }
    }
    {
      assign(store, setupStore);
      assign(vue.toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => hot ? hotState.value : pinia.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    {
      store._hotUpdate = vue.markRaw((newStore) => {
        store._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set(store, stateKey, vue.toRef(newStore.$state, stateKey));
        });
        Object.keys(store.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia.state.value[$id] = vue.toRef(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        vue.nextTick().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set(store, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? (
            // special handling of options api
            vue.computed(() => {
              setActivePinia(pinia);
              return getter.call(store, store);
            })
          ) : getter;
          set(store, getterName, getterValue);
        }
        Object.keys(store._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store, key);
          }
        });
        Object.keys(store._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store, key);
          }
        });
        store._hmrPayload = newStore._hmrPayload;
        store._getters = newStore._getters;
        store._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        // avoid warning on devtools trying to display this property
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
        Object.defineProperty(store, p, assign({ value: store[p] }, nonEnumerable));
      });
    }
    pinia._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
        assign(store, extensions);
      } else {
        assign(store, scope.run(() => extender({
          store,
          app: pinia._a,
          pinia,
          options: optionsForPlugin
        })));
      }
    });
    if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
      if (typeof id !== "string") {
        throw new Error(`[🍍]: "defineStore()" must be passed a store id as its first argument.`);
      }
    }
    function useStore(pinia, hot) {
      const hasContext = vue.hasInjectionContext();
      pinia = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia || (hasContext ? vue.inject(piniaSymbol, null) : null);
      if (pinia)
        setActivePinia(pinia);
      if (!activePinia) {
        throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
      }
      pinia = activePinia;
      if (!pinia._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia);
        } else {
          createOptionsStore(id, options, pinia);
        }
        {
          useStore._pinia = pinia;
        }
      }
      const store = pinia._s.get(id);
      if (hot) {
        const hotId = "__hot:" + id;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia, true) : createOptionsStore(hotId, assign({}, options), pinia, true);
        hot._hotUpdate(newStore);
        delete pinia.state.value[hotId];
        pinia._s.delete(hotId);
      }
      if (IS_CLIENT) {
        const currentInstance = vue.getCurrentInstance();
        if (currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
        !hot) {
          const vm = currentInstance.proxy;
          const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
          cache[id] = store;
        }
      }
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  let mapStoreSuffix = "Store";
  function setMapStoreSuffix(suffix) {
    mapStoreSuffix = suffix;
  }
  function mapStores(...stores) {
    if (Array.isArray(stores[0])) {
      console.warn(`[🍍]: Directly pass all stores to "mapStores()" without putting them in an array:
Replace
	mapStores([useAuthStore, useCartStore])
with
	mapStores(useAuthStore, useCartStore)
This will fail in production if not fixed.`);
      stores = stores[0];
    }
    return stores.reduce((reduced, useStore) => {
      reduced[useStore.$id + mapStoreSuffix] = function() {
        return useStore(this.$pinia);
      };
      return reduced;
    }, {});
  }
  function mapState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function() {
        return useStore(this.$pinia)[key];
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function() {
        const store = useStore(this.$pinia);
        const storeKey = keysOrMapper[key];
        return typeof storeKey === "function" ? storeKey.call(this, store) : store[storeKey];
      };
      return reduced;
    }, {});
  }
  const mapGetters = mapState;
  function mapActions(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[key](...args);
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[keysOrMapper[key]](...args);
      };
      return reduced;
    }, {});
  }
  function mapWritableState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[key];
        },
        set(value) {
          return useStore(this.$pinia)[key] = value;
        }
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[keysOrMapper[key]];
        },
        set(value) {
          return useStore(this.$pinia)[keysOrMapper[key]] = value;
        }
      };
      return reduced;
    }, {});
  }
  function storeToRefs(store) {
    {
      store = vue.toRaw(store);
      const refs = {};
      for (const key in store) {
        const value = store[key];
        if (vue.isRef(value) || vue.isReactive(value)) {
          refs[key] = // ---
          vue.toRef(store, key);
        }
      }
      return refs;
    }
  }
  const PiniaVuePlugin = function(_Vue) {
    _Vue.mixin({
      beforeCreate() {
        const options = this.$options;
        if (options.pinia) {
          const pinia = options.pinia;
          if (!this._provided) {
            const provideCache = {};
            Object.defineProperty(this, "_provided", {
              get: () => provideCache,
              set: (v) => Object.assign(provideCache, v)
            });
          }
          this._provided[piniaSymbol] = pinia;
          if (!this.$pinia) {
            this.$pinia = pinia;
          }
          pinia._a = this;
          if (IS_CLIENT) {
            setActivePinia(pinia);
          }
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(pinia._a, pinia);
          }
        } else if (!this.$pinia && options.parent && options.parent.$pinia) {
          this.$pinia = options.parent.$pinia;
        }
      },
      destroyed() {
        delete this._pStores;
      }
    });
  };
  const Pinia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    get MutationType() {
      return MutationType;
    },
    PiniaVuePlugin,
    acceptHMRUpdate,
    createPinia,
    defineStore,
    getActivePinia,
    mapActions,
    mapGetters,
    mapState,
    mapStores,
    mapWritableState,
    setActivePinia,
    setMapStoreSuffix,
    skipHydrate,
    storeToRefs
  }, Symbol.toStringTag, { value: "Module" }));
  const useCommonStore = defineStore("common", () => {
    let pageHeight = uni.getSystemInfoSync().windowHeight;
    let statusBar = uni.getSystemInfoSync().safeAreaInsets;
    return {
      pageHeight,
      statusBar
    };
  });
  const _sfc_main$l = {
    __name: "PageMain",
    emits: ["search"],
    setup(__props, { emit: __emit }) {
      const emit = __emit;
      vue.ref(false);
      useCommonStore();
      return (_ctx, _cache) => {
        const _component_search = resolveEasycom(vue.resolveDynamicComponent("search"), __easycom_1$3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "main" }, [
          vue.renderSlot(_ctx.$slots, "search", {}, () => [
            vue.createVNode(_component_search, {
              onClick: _cache[0] || (_cache[0] = ($event) => emit("search"))
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" 搜索 ")
              ]),
              _: 1
              /* STABLE */
            })
          ], true),
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]);
      };
    }
  };
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-b57098ba"], ["__file", "E:/HBuilderProjects/AA/components/PageMain/PageMain.vue"]]);
  const _sfc_main$k = {
    __name: "LeftPop",
    setup(__props) {
      const toInfo = () => {
        uni.navigateTo({
          url: "/pages/userinfo/userinfo"
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
          vue.createElementVNode("view", { class: "top" }, [
            vue.createElementVNode("view", { class: "clock-in" }, [
              vue.createVNode(_component_uni_icons, {
                type: "calendar",
                color: "white",
                size: "20"
              }),
              vue.createElementVNode("view", { class: "text" }, " 今天还没打卡哦 ")
            ]),
            vue.createVNode(_component_uni_icons, {
              class: "close",
              type: "closeempty",
              color: "white",
              size: "20"
            })
          ]),
          vue.createElementVNode("image", {
            class: "bg",
            src: _imports_0,
            mode: "aspectFill"
          }),
          vue.createElementVNode("view", { class: "main" }, [
            vue.createElementVNode("view", {
              class: "main-top",
              onClick: toInfo
            }, [
              vue.createElementVNode("image", {
                class: "avatar",
                src: _imports_0,
                mode: ""
              }),
              vue.createElementVNode("view", { class: "info" }, [
                vue.createElementVNode("text", { class: "nick" }, ","),
                vue.createElementVNode("text", { class: "sign" }, "好事多模")
              ]),
              vue.createElementVNode("view", { class: "change" }, [
                vue.createElementVNode("text", { class: "text" }, "切换账号"),
                vue.createVNode(_component_uni_icons, {
                  type: "down",
                  size: "12"
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "main-bottom" }, [
              (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(9, (item, index) => {
                  return vue.createElementVNode("view", {
                    class: "list",
                    key: index
                  }, [
                    vue.createVNode(_component_uni_icons, {
                      class: "preicon",
                      type: "color-filled",
                      size: "20"
                    }),
                    vue.createElementVNode("text", { class: "title" }, "测试列表"),
                    vue.createVNode(_component_uni_icons, {
                      class: "more",
                      type: "right",
                      color: "#909092",
                      size: "15"
                    })
                  ]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ])
          ]),
          vue.createElementVNode("view", { class: "fixed-bottom" }, [
            vue.createElementVNode("view", { class: "setting" }, [
              vue.createVNode(_component_uni_icons, {
                type: "gear",
                size: "20"
              }),
              vue.createElementVNode("text", { class: "name" }, "设置")
            ]),
            vue.createElementVNode("view", { class: "night" }, [
              vue.createVNode(_component_uni_icons, {
                type: "home",
                size: "20"
              }),
              vue.createElementVNode("text", { class: "name" }, "夜间")
            ])
          ])
        ]);
      };
    }
  };
  const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-e2ed3cb3"], ["__file", "E:/HBuilderProjects/AA/components/LeftPop/LeftPop.vue"]]);
  const _sfc_main$j = {};
  function _sfc_render$b(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("view", { class: "sign" }),
      vue.createElementVNode("view", { class: "title" }, " 页面设置 "),
      vue.createElementVNode("view", { class: "introduce" }, " 你可以指定出现在当前页面的功能 "),
      vue.createElementVNode("view", { class: "main" }, [
        (vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(3, (item) => {
            return vue.createElementVNode("view", { class: "item" }, [
              vue.createElementVNode("text", null, "猜你想搜"),
              vue.createElementVNode("switch", {
                checked: "",
                style: { "transform": "scale(0.7)" }
              })
            ]);
          }),
          64
          /* STABLE_FRAGMENT */
        ))
      ])
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$b], ["__scopeId", "data-v-e5e5ff3e"], ["__file", "E:/HBuilderProjects/AA/components/DownPop/DownPop.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation({
        ...options
      });
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, {
          styles,
          ...config
        }, (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config
        } = obj;
        this._animateRun(styles, config).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config = {}) {
      this.animation.step(config);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$i = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      },
      onceRender: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:148", `方法 ${i} 不存在`);
          }
        }
        this.animation.step(config);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 0 : 1,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])), [
      [vue.vShow, $data.isShow]
    ]);
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$a], ["__file", "E:/HBuilderProjects/AA/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$h = {
    __name: "index",
    setup(__props) {
      let scale = vue.ref(0);
      let contentscale = vue.ref(1);
      let coveropacity = vue.ref(0);
      let dp = vue.ref();
      let { windowWidth } = uni.getSystemInfoSync();
      let styles = {
        "zIndex": "5000",
        "position": "fixed",
        "bottom": "0",
        "transform": "translateY(100%)",
        "width": "100vw"
      };
      onBackPress(() => {
        isSearch.value = false;
        moveTop.value = 0;
      });
      let showpageset = vue.ref(false);
      const pageset = () => {
        showpageset.value = true;
        coveropacity.value = 0.3;
        showCover.value = true;
        dp.value.init({
          duration: 300
        });
        dp.value.step({
          translateY: "0"
        });
        dp.value.run();
      };
      let isSearch = vue.ref(false);
      let moveTop = vue.ref(0);
      const search = () => {
        isSearch.value = true;
        moveTop.value = 45;
        uni.hideTabBar();
      };
      let showCover = vue.ref(false);
      let csx, sx, sy, st;
      let toRight = vue.ref(true);
      let moveRight = vue.ref(0);
      vue.ref(0);
      let movecount = 0;
      vue.watch(moveRight, (newValue) => {
        if (newValue != 0) {
          uni.hideTabBar();
          showCover.value = true;
          contentscale.value = 1 - 0.07 / windowWidth * moveRight.value;
          coveropacity.value = 0.3 / windowWidth * moveRight.value;
        } else {
          uni.showTabBar();
          showCover.value = false;
          contentscale.value = 1;
          coveropacity.value = 0;
        }
      });
      const touchstart = (e) => {
        st = e.timeStamp;
        csx = sx = e.touches[0].clientX;
        sy = e.touches[0].clientY;
      };
      const touchmove = (e) => {
        let offsetX = e.touches[0].clientX - sx;
        let offsetY = e.touches[0].clientY - sy;
        if (moveRight.value == 0 && offsetX < 0) {
          return;
        }
        if (movecount == 0) {
          if (Math.abs(offsetY) > Math.abs(offsetX)) {
            toRight.value = false;
          }
          movecount = 1;
        }
        if (toRight.value) {
          moveRight.value += offsetX;
          sx = e.touches[0].clientX;
          sy = e.touches[0].clientY;
        }
      };
      const touchend = (e) => {
        if (toRight.value) {
          if (e.timeStamp - st < 700) {
            if (e.changedTouches[0].clientX - csx > 0) {
              moveRight.value = windowWidth;
            }
          } else {
            if (moveRight.value < windowWidth / 2) {
              moveRight.value = 0;
            } else {
              moveRight.value = windowWidth;
            }
          }
        }
        toRight.value = true;
        movecount = 0;
      };
      const popstart = (e) => {
        st = e.timeStamp;
        csx = sx = e.touches[0].clientX;
        sy = e.touches[0].clientY;
      };
      const popmove = (e) => {
        let offsetX = e.touches[0].clientX - sx;
        let offsetY = e.touches[0].clientY - sy;
        if (moveRight.value == windowWidth && offsetX > 0) {
          return;
        }
        if (movecount == 0) {
          if (Math.abs(offsetY) > Math.abs(offsetX)) {
            toRight.value = false;
          }
          movecount = 1;
        }
        if (toRight.value) {
          moveRight.value += offsetX;
          if (moveRight.value > windowWidth) {
            moveRight.value = windowWidth;
            return;
          }
          sx = e.touches[0].clientX;
        }
      };
      const popend = (e) => {
        if (toRight.value) {
          if (e.timeStamp - st < 700) {
            if (e.changedTouches[0].clientX - csx < 0) {
              moveRight.value = 0;
            }
          } else {
            if (moveRight.value < windowWidth / 2) {
              moveRight.value = 0;
            } else {
              moveRight.value = windowWidth;
            }
          }
        }
        toRight.value = true;
        movecount = 0;
      };
      const popLeft = () => {
        moveRight.value = windowWidth;
      };
      const handleAddPop = () => {
        if (!showCover.value) {
          showCover.value = true;
          coveropacity.value = 0.3;
          scale.value = 1;
        }
      };
      const clickCover = () => {
        showCover.value = false;
        showpageset.value = false;
        dp.value.init({
          duration: 300
        });
        dp.value.step({
          translateY: "100%"
        });
        dp.value.run();
        scale.value = 0;
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        const _component_topBar = resolveEasycom(vue.resolveDynamicComponent("topBar"), __easycom_1$4);
        const _component_friendItem = resolveEasycom(vue.resolveDynamicComponent("friendItem"), __easycom_3$2);
        const _component_searchC = resolveEasycom(vue.resolveDynamicComponent("searchC"), __easycom_3$1);
        const _component_PageMain = resolveEasycom(vue.resolveDynamicComponent("PageMain"), __easycom_3);
        const _component_LeftPop = resolveEasycom(vue.resolveDynamicComponent("LeftPop"), __easycom_5);
        const _component_DownPop = resolveEasycom(vue.resolveDynamicComponent("DownPop"), __easycom_0$1);
        const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_1$2);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "view",
              {
                class: "content",
                style: vue.normalizeStyle({ transform: `scale(${vue.unref(contentscale)})` })
              },
              [
                vue.createVNode(_component_topBar, {
                  onPopLeft: popLeft,
                  class: "tb",
                  style: vue.normalizeStyle({ top: -vue.unref(moveTop) + "px" })
                }, {
                  info: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "nick" }, ","),
                    vue.createElementVNode("view", { class: "status" }, [
                      vue.createElementVNode("view", { class: "dot" }),
                      vue.createElementVNode("view", { class: "device" }, [
                        vue.createTextVNode("手机在线-WiFi "),
                        vue.createVNode(_component_uni_icons, {
                          type: "right",
                          size: "9"
                        })
                      ])
                    ])
                  ]),
                  rightbtn: vue.withCtx(() => [
                    vue.createVNode(_component_uni_icons, {
                      type: "gift",
                      size: "25"
                    }),
                    vue.createVNode(_component_uni_icons, {
                      onClick: handleAddPop,
                      class: "plus",
                      type: "plusempty",
                      size: "25"
                    })
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["style"]),
                vue.createVNode(_component_PageMain, {
                  class: "main",
                  onSearch: search,
                  onTouchstart: touchstart,
                  onTouchend: touchend,
                  onTouchmove: touchmove,
                  style: vue.normalizeStyle({ transform: `translateY(-${vue.unref(moveTop)}px)` })
                }, {
                  default: vue.withCtx(() => [
                    vue.withDirectives(vue.createElementVNode(
                      "view",
                      { class: "friend-list" },
                      [
                        (vue.openBlock(), vue.createElementBlock(
                          vue.Fragment,
                          null,
                          vue.renderList(10, (item) => {
                            return vue.createVNode(_component_friendItem);
                          }),
                          64
                          /* STABLE_FRAGMENT */
                        ))
                      ],
                      512
                      /* NEED_PATCH */
                    ), [
                      [vue.vShow, !vue.unref(isSearch)]
                    ]),
                    vue.withDirectives(vue.createVNode(
                      _component_searchC,
                      { onPageset: pageset },
                      null,
                      512
                      /* NEED_PATCH */
                    ), [
                      [vue.vShow, vue.unref(isSearch)]
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["style"])
              ],
              4
              /* STYLE */
            ),
            vue.createElementVNode(
              "view",
              {
                class: "addpop",
                style: vue.normalizeStyle({ transform: `scale(${vue.unref(scale)})` })
              },
              [
                (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(6, (item) => {
                    return vue.createElementVNode("view", { class: "item" }, [
                      vue.createVNode(_component_uni_icons, {
                        class: "icon",
                        type: "gift",
                        size: "25"
                      }),
                      vue.createElementVNode("text", null, "创建频道")
                    ]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ],
              4
              /* STYLE */
            ),
            vue.withDirectives(vue.createElementVNode(
              "view",
              {
                onClick: clickCover,
                class: "cover",
                style: vue.normalizeStyle({ opacity: vue.unref(coveropacity) })
              },
              null,
              4
              /* STYLE */
            ), [
              [vue.vShow, vue.unref(showCover)]
            ]),
            vue.createVNode(_component_LeftPop, {
              onTouchstart: popstart,
              onTouchend: popend,
              onTouchmove: popmove,
              class: "leftpop",
              style: vue.normalizeStyle({ transform: `translateX(${vue.unref(moveRight)}px)` })
            }, null, 8, ["style"]),
            vue.createVNode(_component_uni_transition, {
              ref_key: "dp",
              ref: dp,
              styles: vue.unref(styles),
              show: vue.unref(showpageset)
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_DownPop)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["styles", "show"])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/HBuilderProjects/AA/pages/index/index.vue"]]);
  const _sfc_main$g = {
    __name: "friends",
    setup(__props) {
      let offsetLeft = vue.ref(0);
      let choosedId = vue.ref(1);
      let underlineWidth = vue.ref(32);
      const instance = vue.getCurrentInstance();
      const query = uni.createSelectorQuery().in(instance.proxy);
      vue.onMounted(() => {
        query.select(".item1").boundingClientRect((data) => {
          offsetLeft.value = data.left;
        }).exec();
      });
      let chooseList = ["好友", "分组", "群聊", "频道", "设备", "通讯录"];
      const test = (e) => {
        if (e.target.id == "" || e.target.id == choosedId.value) {
          return;
        }
        if (e.target.id == "5") {
          underlineWidth.value = 48;
        } else {
          underlineWidth.value = 32;
        }
        choosedId.value = e.target.id;
        offsetLeft.value = e.target.offsetLeft;
      };
      const toApply = () => {
        uni.navigateTo({
          url: "/pages/newfriend/newfriend"
        });
      };
      const toGroup = () => {
        uni.navigateTo({
          url: "/pages/groups/groups"
        });
      };
      const toAdd = () => {
        uni.navigateTo({
          url: "/pages/add/add"
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        const _component_topBar = resolveEasycom(vue.resolveDynamicComponent("topBar"), __easycom_1$4);
        const _component_friendItem = resolveEasycom(vue.resolveDynamicComponent("friendItem"), __easycom_3$2);
        const _component_PageMain = resolveEasycom(vue.resolveDynamicComponent("PageMain"), __easycom_3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createVNode(_component_topBar, null, {
            info: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "pos" }, "联系人")
            ]),
            rightbtn: vue.withCtx(() => [
              vue.createVNode(_component_uni_icons, {
                onClick: toAdd,
                type: "personadd",
                size: "25"
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_PageMain, { class: "main" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "wantKnow" }, [
                vue.createElementVNode("view", { class: "title" }, [
                  vue.createElementVNode("text", { class: "text" }, "可能想认识的人"),
                  vue.createVNode(_component_uni_icons, {
                    color: "#908f94",
                    type: "right",
                    size: "18"
                  })
                ]),
                vue.createVNode(_component_friendItem, { avatarSize: "mid" }),
                vue.createVNode(_component_friendItem, { avatarSize: "mid" }),
                vue.createElementVNode("view", { class: "space" })
              ]),
              vue.createElementVNode("view", { class: "notice" }, [
                vue.createElementVNode("view", {
                  class: "notice-item",
                  onClick: toApply
                }, [
                  vue.createElementVNode("text", null, "新朋友"),
                  vue.createVNode(_component_uni_icons, {
                    color: "#908f94",
                    type: "right",
                    size: "18"
                  })
                ]),
                vue.createElementVNode("view", {
                  class: "notice-item",
                  onClick: toGroup
                }, [
                  vue.createElementVNode("text", null, "群通知"),
                  vue.createVNode(_component_uni_icons, {
                    color: "#908f94",
                    type: "right",
                    size: "18"
                  })
                ]),
                vue.createElementVNode("view", { class: "space" })
              ]),
              vue.createElementVNode("view", { class: "group" }, [
                vue.createElementVNode("view", {
                  class: "choose",
                  onClick: test
                }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(vue.unref(chooseList), (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        id: index,
                        class: vue.normalizeClass([{ choosed: vue.unref(choosedId) == index }, "item" + index])
                      }, vue.toDisplayString(item), 11, ["id"]);
                    }),
                    256
                    /* UNKEYED_FRAGMENT */
                  )),
                  vue.createElementVNode(
                    "view",
                    {
                      class: "underline",
                      style: vue.normalizeStyle({ width: vue.unref(underlineWidth) + "px", left: vue.unref(offsetLeft) + "px" })
                    },
                    null,
                    4
                    /* STYLE */
                  )
                ]),
                vue.createElementVNode("view", { class: "users" }, [
                  vue.createVNode(_component_friendItem, { avatarSize: "mid" }),
                  vue.createVNode(_component_friendItem, { avatarSize: "mid" })
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ]);
      };
    }
  };
  const PagesFriendsFriends = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-db42cae2"], ["__file", "E:/HBuilderProjects/AA/pages/friends/friends.vue"]]);
  const publishList = [
    { title: "好友动态", img: "../../static/one.png" },
    { title: "音乐", img: "../../static/one.png" },
    { title: "小游戏", img: "../../static/one.png" },
    { title: "直播", img: "../../static/one.png" },
    { title: "动漫", img: "../../static/one.png" },
    { title: "免费小说", img: "../../static/one.png" },
    { title: "购物", img: "../../static/one.png" },
    { title: "经典农村", img: "../../static/one.png" },
    { title: "结伴", img: "../../static/one.png" },
    { title: "更多", img: "../../static/one.png" },
    { title: "结伴", img: "../../static/one.png" },
    { title: "更多", img: "../../static/one.png" }
  ];
  const _sfc_main$f = {
    __name: "publish",
    setup(__props) {
      const totest = () => {
        uni.navigateTo({
          url: "/pages/test/test"
        });
      };
      const toZone = () => {
        uni.navigateTo({
          url: "/pages/myzone/myzone"
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        const _component_topBar = resolveEasycom(vue.resolveDynamicComponent("topBar"), __easycom_1$4);
        const _component_PageMain = resolveEasycom(vue.resolveDynamicComponent("PageMain"), __easycom_3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createVNode(_component_topBar, null, {
            info: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "pos" }, "动态")
            ]),
            rightbtn: vue.withCtx(() => [
              vue.createVNode(_component_uni_icons, {
                type: "tune",
                size: "25"
              }),
              vue.createVNode(_component_uni_icons, {
                class: "gear",
                type: "gear",
                size: "25"
              })
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_PageMain, { class: "main" }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "part-top" }, [
                vue.createElementVNode("view", {
                  class: "list",
                  "hover-class": "hover",
                  onClick: toZone
                }, [
                  vue.createElementVNode("image", {
                    src: vue.unref(publishList)[0].img,
                    mode: ""
                  }, null, 8, ["src"]),
                  vue.createElementVNode("view", { class: "right" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "title" },
                      vue.toDisplayString(vue.unref(publishList)[0].title),
                      1
                      /* TEXT */
                    ),
                    vue.createVNode(_component_uni_icons, {
                      color: "#908f94",
                      type: "right",
                      size: "18"
                    })
                  ])
                ]),
                vue.createElementVNode("view", { class: "space" })
              ]),
              vue.createElementVNode("view", {
                onClick: totest,
                class: "part-mid",
                style: { "margin-top": "10px" }
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(vue.unref(publishList).slice(1, 4), (item) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "list",
                      "hover-class": "hover"
                    }, [
                      vue.createElementVNode("image", {
                        src: item.img,
                        mode: ""
                      }, null, 8, ["src"]),
                      vue.createElementVNode("view", { class: "right" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "title" },
                          vue.toDisplayString(item.title),
                          1
                          /* TEXT */
                        ),
                        vue.createVNode(_component_uni_icons, {
                          color: "#908f94",
                          type: "right",
                          size: "18"
                        })
                      ])
                    ]);
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                )),
                vue.createElementVNode("view", { class: "space" })
              ]),
              vue.createElementVNode("view", {
                style: { "margin-top": "10px" },
                class: "part-bottom"
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(vue.unref(publishList).slice(4), (item) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "list",
                      "hover-class": "hover"
                    }, [
                      vue.createElementVNode("image", {
                        src: item.img,
                        mode: ""
                      }, null, 8, ["src"]),
                      vue.createElementVNode("view", { class: "right" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "title" },
                          vue.toDisplayString(item.title),
                          1
                          /* TEXT */
                        ),
                        vue.createVNode(_component_uni_icons, {
                          color: "#908f94",
                          type: "right",
                          size: "18"
                        })
                      ])
                    ]);
                  }),
                  256
                  /* UNKEYED_FRAGMENT */
                ))
              ])
            ]),
            _: 1
            /* STABLE */
          })
        ]);
      };
    }
  };
  const PagesPublishPublish = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-bfce3555"], ["__file", "E:/HBuilderProjects/AA/pages/publish/publish.vue"]]);
  const _sfc_main$e = {
    __name: "MyBtn",
    props: {
      size: {
        type: String,
        default: "common"
      },
      color: {
        type: String,
        default: "white"
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "view",
          {
            class: vue.normalizeClass(["btn", [__props.size, __props.color]])
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createTextVNode("确认")
            ], true)
          ],
          2
          /* CLASS */
        );
      };
    }
  };
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-c0965017"], ["__file", "E:/HBuilderProjects/AA/components/MyBtn/MyBtn.vue"]]);
  const _sfc_main$d = {};
  function _sfc_render$9(_ctx, _cache) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
    const _component_MyBtn = resolveEasycom(vue.resolveDynamicComponent("MyBtn"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "top" }, [
        vue.createVNode(_component_uni_icons, {
          class: "back",
          type: "left",
          color: "white",
          size: "25"
        }),
        vue.createElementVNode("view", { class: "right" }, [
          vue.createVNode(_component_uni_icons, {
            type: "notification",
            color: "white",
            class: "notice",
            size: "25"
          }),
          vue.createVNode(_component_uni_icons, {
            type: "gear",
            color: "white",
            class: "setting",
            size: "25"
          })
        ])
      ]),
      vue.createElementVNode("image", {
        class: "bg",
        src: _imports_0,
        mode: "aspectFill"
      }),
      vue.createElementVNode("view", { class: "main" }, [
        vue.createElementVNode("view", { class: "main-top" }, [
          vue.createElementVNode("image", {
            class: "avatar",
            src: _imports_0,
            mode: ""
          }),
          vue.createElementVNode("view", { class: "right" }, [
            vue.createElementVNode("view", { class: "account" }, [
              vue.createElementVNode("text", { class: "nick" }, ","),
              vue.createElementVNode("text", { class: "number" }, "aa号：2095302430")
            ]),
            vue.createElementVNode("view", { class: "favor" }, [
              vue.createVNode(_component_uni_icons, {
                type: "hand-up",
                color: "black",
                class: "notice",
                size: "23"
              }),
              vue.createElementVNode("view", { class: "num" }, "18584")
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "main-mid" }, [
          vue.createElementVNode("view", { class: "info" }, [
            vue.createElementVNode("view", { class: "detail" }, " ♂ 男 | 40岁 | 7月13日 巨蟹座 | 现居德国穆尼嗨-索拉卡上界瓦伦 | 来自坦桑哥尼亚巴尔葛朗泰 | 哈哈有限股份公司卢马尼亚传奇 "),
            vue.createElementVNode("view", { class: "more" }, [
              vue.createVNode(_component_uni_icons, {
                type: "right",
                color: "#9d9d9f",
                size: "18"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "sign" }, [
            vue.createElementVNode("view", { class: "text" }, "好事多磨"),
            vue.createElementVNode("view", { class: "more" }, [
              vue.createVNode(_component_uni_icons, {
                type: "right",
                color: "#9d9d9f",
                size: "18"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "space" })
        ]),
        vue.createElementVNode("view", { class: "main-bottom" }, [
          vue.createElementVNode("view", { class: "zone" }, [
            vue.createElementVNode("view", { class: "on" }, [
              vue.createVNode(_component_uni_icons, {
                type: "star",
                color: "black",
                class: "z",
                size: "23"
              }),
              vue.createElementVNode("view", { class: "title" }, [
                vue.createElementVNode("view", { class: "name" }, "AA空间"),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode("text", { class: "publish" }, "分享新鲜事"),
                  vue.createVNode(_component_uni_icons, {
                    type: "right",
                    color: "#9d9d9f",
                    size: "18"
                  })
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "pic" }, [
              (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(4, (item, index) => {
                  return vue.createElementVNode("image", {
                    key: index,
                    src: _imports_0,
                    mode: ""
                  });
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ])
          ]),
          vue.createElementVNode("view", { class: "picwall" }, [
            vue.createElementVNode("view", { class: "on" }, [
              vue.createVNode(_component_uni_icons, {
                type: "images",
                color: "black",
                class: "z",
                size: "23"
              }),
              vue.createElementVNode("view", { class: "title" }, [
                vue.createElementVNode("view", { class: "name" }, "精选照片"),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "right",
                    color: "#9d9d9f",
                    size: "18"
                  })
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "pic" }, [
              (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(4, (item, index) => {
                  return vue.createElementVNode("image", {
                    key: index,
                    src: _imports_0,
                    mode: ""
                  });
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ])
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "bottom-btn" }, [
        vue.createVNode(_component_MyBtn, null, {
          default: vue.withCtx(() => [
            vue.createTextVNode("个性名片")
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(_component_MyBtn, null, {
          default: vue.withCtx(() => [
            vue.createTextVNode("编辑资料")
          ]),
          _: 1
          /* STABLE */
        }),
        vue.createVNode(_component_MyBtn, { color: "blue" }, {
          default: vue.withCtx(() => [
            vue.createTextVNode("发信息")
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]);
  }
  const PagesUserinfoUserinfo = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$9], ["__scopeId", "data-v-2ea52cef"], ["__file", "E:/HBuilderProjects/AA/pages/userinfo/userinfo.vue"]]);
  const _sfc_main$c = {
    data() {
      return {
        show: false,
        styles: {
          "zIndex": "5000",
          "position": "fixed",
          "bottom": "0",
          "transform": "translateY(100%)",
          "width": "100vw"
        }
      };
    },
    onLoad() {
    },
    methods: {
      open(mode) {
        this.show = !this.show;
        this.$refs.dp.init({
          duration: 300
        });
        this.$refs.dp.step({
          translateY: "0"
        });
        this.$refs.dp.run();
      },
      change() {
        formatAppLog("log", "at pages/test/test.vue:37", "触发动画");
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_DownPop = resolveEasycom(vue.resolveDynamicComponent("DownPop"), __easycom_0$1);
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("button", {
        type: "primary",
        onClick: _cache[0] || (_cache[0] = (...args) => $options.open && $options.open(...args))
      }, "fade"),
      vue.createVNode(_component_uni_transition, {
        ref: "dp",
        styles: $data.styles,
        show: $data.show
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_DownPop)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["styles", "show"])
    ]);
  }
  const PagesTestTest = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$8], ["__file", "E:/HBuilderProjects/AA/pages/test/test.vue"]]);
  const _sfc_main$b = {};
  function _sfc_render$7(_ctx, _cache) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "top" }, [
      vue.createElementVNode("view", { class: "container" }, [
        vue.createVNode(_component_uni_icons, {
          class: "left",
          type: "left",
          size: "25"
        }),
        vue.createElementVNode("view", { class: "mid" }, [
          vue.renderSlot(_ctx.$slots, "mid", {}, () => [
            vue.createTextVNode("设置")
          ], true)
        ]),
        vue.createElementVNode("view", { class: "right" }, [
          vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
        ])
      ])
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$7], ["__scopeId", "data-v-249ed636"], ["__file", "E:/HBuilderProjects/AA/components/commontb/commontb.vue"]]);
  const _sfc_main$a = {};
  function _sfc_render$6(_ctx, _cache) {
    const _component_commontb = resolveEasycom(vue.resolveDynamicComponent("commontb"), __easycom_0);
    const _component_friendItem = resolveEasycom(vue.resolveDynamicComponent("friendItem"), __easycom_3$2);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createVNode(_component_commontb, null, {
        mid: vue.withCtx(() => [
          vue.createTextVNode(" 新朋友 ")
        ]),
        right: vue.withCtx(() => [
          vue.createTextVNode(" 添加 ")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", { class: "main" }, [
        vue.createElementVNode("view", { class: "part-top" }, [
          vue.createElementVNode("view", { class: "notice" }, " 好友通知 "),
          vue.createElementVNode("view", { class: "apply-list" }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(5, (item) => {
                return vue.createVNode(_component_friendItem, { class: "list" });
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("view", { class: "more" }, [
            vue.createElementVNode("text", null, "查看更多"),
            vue.createVNode(_component_uni_icons, {
              color: "#908f94",
              type: "right",
              size: "15"
            })
          ]),
          vue.createElementVNode("view", { class: "space" })
        ]),
        vue.createElementVNode("view", { class: "part-bottom" }, [
          vue.createElementVNode("view", { class: "notice" }, " 你可能认识他们 "),
          vue.createElementVNode("view", { class: "apply-list" }, [
            (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(5, (item) => {
                return vue.createVNode(_component_friendItem, { class: "list" });
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          vue.createElementVNode("view", { class: "more" }, [
            vue.createElementVNode("text", null, "查看更多"),
            vue.createVNode(_component_uni_icons, {
              color: "#908f94",
              type: "right",
              size: "15"
            })
          ])
        ])
      ])
    ]);
  }
  const PagesNewfriendNewfriend = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$6], ["__scopeId", "data-v-b2c25024"], ["__file", "E:/HBuilderProjects/AA/pages/newfriend/newfriend.vue"]]);
  const _sfc_main$9 = {};
  function _sfc_render$5(_ctx, _cache) {
    const _component_commontb = resolveEasycom(vue.resolveDynamicComponent("commontb"), __easycom_0);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createVNode(_component_commontb, null, {
        mid: vue.withCtx(() => [
          vue.createTextVNode(" 群通知 ")
        ]),
        right: vue.withCtx(() => [
          vue.createTextVNode(" 清空 ")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createCommentVNode(' <view class="main">\r\n		</view> '),
      vue.createElementVNode("view", { class: "nomsg" }, [
        vue.createVNode(_component_uni_icons, {
          class: "bell",
          type: "notification",
          size: "50"
        }),
        vue.createElementVNode("text", null, "暂无通知")
      ])
    ]);
  }
  const PagesGroupsGroups = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$5], ["__scopeId", "data-v-5f8c2705"], ["__file", "E:/HBuilderProjects/AA/pages/groups/groups.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesChatChat = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$4], ["__file", "E:/HBuilderProjects/AA/pages/chat/chat.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesGrouphomeGrouphome = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$3], ["__file", "E:/HBuilderProjects/AA/pages/grouphome/grouphome.vue"]]);
  const _sfc_main$6 = {
    name: "zoneItem",
    data() {
      return {};
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "list" }, [
      vue.createElementVNode("view", { class: "list-top" }, [
        vue.createElementVNode("image", {
          class: "avatar",
          src: _imports_0,
          mode: ""
        }),
        vue.createElementVNode("view", { class: "info" }, [
          vue.createElementVNode("view", { class: "name" }, " 梦的回归 "),
          vue.createElementVNode("view", { class: "time" }, " 今天10:36 ")
        ]),
        vue.createVNode(_component_uni_icons, {
          color: "#908f94",
          class: "more",
          type: "more-filled",
          size: "25"
        })
      ]),
      vue.createElementVNode("view", { class: "list-content" }, " 梦的回归真的回归了 "),
      vue.createElementVNode("view", { class: "list-info" }, [
        vue.createElementVNode("view", { class: "left" }, [
          vue.createElementVNode("view", { class: "see" }, [
            vue.createVNode(_component_uni_icons, {
              color: "#908f94",
              type: "eye",
              size: "12"
            }),
            vue.createElementVNode("text", null, "浏览60次")
          ]),
          vue.createElementVNode("view", { class: "device" }, [
            vue.createVNode(_component_uni_icons, {
              color: "#908f94",
              type: "calendar",
              size: "12"
            }),
            vue.createElementVNode("text", null, "OOPP Emkd pro")
          ])
        ]),
        vue.createElementVNode("view", { class: "right" }, [
          vue.createVNode(_component_uni_icons, {
            color: "#908f94",
            type: "hand-up",
            size: "28"
          }),
          vue.createVNode(_component_uni_icons, {
            color: "#908f94",
            type: "chat",
            size: "28"
          }),
          vue.createVNode(_component_uni_icons, {
            color: "#908f94",
            type: "redo",
            size: "28"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "favors" }, [
        vue.createVNode(_component_uni_icons, {
          class: "favor",
          type: "hand-up-filled",
          size: "18"
        }),
        vue.createElementVNode("text", null, "梦的回归、梦的回归、梦的回归、梦的回归、梦的回归、梦的回归、梦的回归、梦的回归、梦的回归、梦的回归、梦的回归、梦的回归、")
      ]),
      vue.createElementVNode("view", { class: "comment" }, [
        vue.createElementVNode("image", {
          class: "avatar",
          src: _imports_0,
          mode: ""
        }),
        vue.createElementVNode("view", { class: "input" }, [
          vue.createElementVNode("text", null, "说点什么吧..."),
          vue.createVNode(_component_uni_icons, {
            color: "#908f94",
            type: "calendar",
            size: "20"
          })
        ])
      ]),
      vue.createElementVNode("view", { class: "space" })
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$2], ["__scopeId", "data-v-ad44b063"], ["__file", "E:/HBuilderProjects/AA/components/zoneItem/zoneItem.vue"]]);
  const _sfc_main$5 = {};
  function _sfc_render$1(_ctx, _cache) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
    return vue.openBlock(), vue.createBlock(_component_uni_icons, {
      class: "plus",
      color: "white",
      type: "plusempty",
      size: "30"
    });
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$1], ["__scopeId", "data-v-973f3931"], ["__file", "E:/HBuilderProjects/AA/components/publish/publish.vue"]]);
  const _sfc_main$4 = {
    __name: "zone",
    setup(__props) {
      let array = vue.ref([]);
      array.value.length = 7;
      let column = vue.computed(() => {
        if (array.value.length < 5) {
          return array.value.length;
        } else if (array.value.length == 5 || array.value.length > 8) {
          return 5;
        } else {
          return 4;
        }
      });
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        const _component_topBar = resolveEasycom(vue.resolveDynamicComponent("topBar"), __easycom_1$4);
        const _component_zoneItem = resolveEasycom(vue.resolveDynamicComponent("zoneItem"), __easycom_1);
        const _component_PageMain = resolveEasycom(vue.resolveDynamicComponent("PageMain"), __easycom_3);
        const _component_publish = resolveEasycom(vue.resolveDynamicComponent("publish"), __easycom_2);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createVNode(_component_topBar, null, {
                rightbtn: vue.withCtx(() => [
                  vue.createVNode(_component_uni_icons, {
                    type: "notification",
                    size: "25"
                  }),
                  vue.createVNode(_component_uni_icons, {
                    type: "gear",
                    class: "gear",
                    size: "25"
                  })
                ]),
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "title" }, "动态")
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_PageMain, { class: "main" }, {
                search: vue.withCtx(() => [
                  vue.createElementVNode("view")
                ]),
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "main-top" }, [
                    vue.createElementVNode("image", {
                      class: "avatar",
                      src: _imports_0,
                      mode: ""
                    }),
                    vue.createElementVNode("view", { class: "nick" }, ","),
                    vue.createVNode(_component_uni_icons, {
                      type: "right",
                      color: "#cccccc",
                      class: "right",
                      size: "17"
                    })
                  ]),
                  vue.createElementVNode(
                    "view",
                    {
                      class: "main-mid",
                      style: vue.normalizeStyle({ gridTemplateColumns: `repeat(${vue.unref(column)},1fr` })
                    },
                    [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(vue.unref(array), (item) => {
                          return vue.openBlock(), vue.createElementBlock("view", { class: "item" }, [
                            vue.createVNode(_component_uni_icons, {
                              type: "gift",
                              color: "#cccccc",
                              size: "25"
                            }),
                            vue.createElementVNode("text", null, "说说说")
                          ]);
                        }),
                        256
                        /* UNKEYED_FRAGMENT */
                      )),
                      vue.createElementVNode("view", { class: "space" })
                    ],
                    4
                    /* STYLE */
                  ),
                  vue.createElementVNode("view", { class: "main-bottom" }, [
                    vue.createElementVNode("view", { class: "now" }, [
                      vue.createElementVNode("view", { class: "left" }, [
                        vue.createVNode(_component_uni_icons, {
                          type: "gift",
                          color: "#cccccc",
                          size: "25"
                        }),
                        vue.createElementVNode("text", null, "此刻")
                      ]),
                      vue.createElementVNode("view", { class: "right" }, [
                        vue.createElementVNode("text", null, "记录此刻，分享快乐"),
                        vue.createVNode(_component_uni_icons, {
                          type: "right",
                          color: "#cccccc",
                          size: "15"
                        })
                      ])
                    ]),
                    (vue.openBlock(), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(5, (item) => {
                        return vue.createVNode(_component_zoneItem);
                      }),
                      64
                      /* STABLE_FRAGMENT */
                    ))
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            vue.createVNode(_component_publish)
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesZoneZone = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-8917e2b4"], ["__file", "E:/HBuilderProjects/AA/pages/zone/zone.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view");
  }
  const PagesZonemsgZonemsg = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render], ["__file", "E:/HBuilderProjects/AA/pages/zonemsg/zonemsg.vue"]]);
  const _sfc_main$2 = {
    __name: "add",
    setup(__props) {
      let type = vue.ref(0);
      return (_ctx, _cache) => {
        const _component_commontb = resolveEasycom(vue.resolveDynamicComponent("commontb"), __easycom_0);
        const _component_search = resolveEasycom(vue.resolveDynamicComponent("search"), __easycom_1$3);
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        const _component_friendItem = resolveEasycom(vue.resolveDynamicComponent("friendItem"), __easycom_3$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createVNode(_component_commontb, null, {
            mid: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "find" }, [
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[0] || (_cache[0] = ($event) => vue.isRef(type) ? type.value = 0 : type = 0),
                    class: vue.normalizeClass([{ choosed: vue.unref(type) == 0 }, "people type"])
                  },
                  "找人",
                  2
                  /* CLASS */
                ),
                vue.createElementVNode(
                  "view",
                  {
                    onClick: _cache[1] || (_cache[1] = ($event) => vue.isRef(type) ? type.value = 1 : type = 1),
                    class: vue.normalizeClass([{ choosed: vue.unref(type) == 1 }, "group type"])
                  },
                  "找群",
                  2
                  /* CLASS */
                )
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createElementVNode("view", { class: "main" }, [
            vue.createVNode(_component_search, null, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" AA号/QID/手机号/群 ")
              ]),
              _: 1
              /* STABLE */
            }),
            vue.createElementVNode("view", { class: "ways" }, [
              (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(7, (item) => {
                  return vue.createElementVNode("view", { class: "item" }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "search",
                      size: "20"
                    }),
                    vue.createElementVNode("text", null, "条件查找")
                  ]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ]),
            vue.createElementVNode("view", { class: "mayknow" }, [
              vue.createElementVNode("view", { class: "title" }, [
                vue.createElementVNode("view", { class: "left" }, "可能想认识的人"),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode("text", null, "查看更多"),
                  vue.createVNode(_component_uni_icons, {
                    color: "#8f8f8f",
                    type: "right",
                    size: "15"
                  })
                ])
              ]),
              vue.createElementVNode("view", { class: "list" }, [
                (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(10, (item) => {
                    return vue.createVNode(_component_friendItem, { class: "fi" });
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ])
          ])
        ]);
      };
    }
  };
  const PagesAddAdd = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e8d2fd40"], ["__file", "E:/HBuilderProjects/AA/pages/add/add.vue"]]);
  const _sfc_main$1 = {
    __name: "myzone",
    setup(__props) {
      let changeColor = vue.ref(false);
      let topopacity = vue.ref(0);
      onPageScroll((e) => {
        if (e.scrollTop > 90) {
          changeColor.value = true;
          topopacity.value = 0.3 + 0.7 / 65 * (e.scrollTop - 90);
        } else {
          topopacity.value = 0;
          changeColor.value = false;
        }
      });
      let typeArray = vue.ref([
        { type: "说说", num: 170 },
        { type: "日志", num: 0 },
        { type: "相册", num: 0 },
        { type: "留言", num: 13 },
        { type: "访客", num: 11761 }
      ]);
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$2);
        const _component_zoneItem = resolveEasycom(vue.resolveDynamicComponent("zoneItem"), __easycom_1);
        const _component_publish = resolveEasycom(vue.resolveDynamicComponent("publish"), __easycom_2);
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("image", {
                class: "bg",
                src: _imports_0,
                mode: "aspectFill"
              }),
              vue.createElementVNode(
                "view",
                {
                  class: "top",
                  style: vue.normalizeStyle({ background: `rgba(240,244,255,${vue.unref(topopacity)})` })
                },
                [
                  vue.createVNode(_component_uni_icons, {
                    class: vue.normalizeClass([vue.unref(changeColor) ? "change" : "icon"]),
                    color: vue.unref(changeColor) ? "black" : "white",
                    type: "left",
                    size: "20"
                  }, null, 8, ["class", "color"]),
                  vue.createElementVNode("view", { class: "set" }, [
                    vue.createVNode(_component_uni_icons, {
                      class: vue.normalizeClass([vue.unref(changeColor) ? "change" : "icon"]),
                      color: vue.unref(changeColor) ? "black" : "white",
                      type: "search",
                      size: "20"
                    }, null, 8, ["class", "color"]),
                    vue.createVNode(_component_uni_icons, {
                      class: vue.normalizeClass([vue.unref(changeColor) ? "change" : "icon"]),
                      color: vue.unref(changeColor) ? "black" : "white",
                      type: "gear",
                      size: "20"
                    }, null, 8, ["class", "color"]),
                    vue.createVNode(_component_uni_icons, {
                      class: vue.normalizeClass([vue.unref(changeColor) ? "change" : "icon"]),
                      color: vue.unref(changeColor) ? "black" : "white",
                      type: "more-filled",
                      size: "20"
                    }, null, 8, ["class", "color"])
                  ])
                ],
                4
                /* STYLE */
              ),
              vue.createElementVNode("view", { class: "userinfo" }, [
                vue.createElementVNode("image", {
                  class: "avatar",
                  src: _imports_0,
                  mode: ""
                }),
                vue.createElementVNode("view", { class: "info" }, [
                  vue.createElementVNode("text", { class: "nick" }, ","),
                  vue.createElementVNode("text", { class: "number" }, "AA号 2095302430")
                ])
              ]),
              vue.createElementVNode("view", { class: "main" }, [
                vue.createElementVNode("view", { class: "type" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(vue.unref(typeArray), (item) => {
                      return vue.openBlock(), vue.createElementBlock("view", { class: "item" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "num" },
                          vue.toDisplayString(item.num),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "text",
                          { class: "name" },
                          vue.toDisplayString(item.type),
                          1
                          /* TEXT */
                        )
                      ]);
                    }),
                    256
                    /* UNKEYED_FRAGMENT */
                  ))
                ]),
                vue.createElementVNode("view", { class: "function" }, [
                  (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(3, (item) => {
                      return vue.createElementVNode("view", { class: "item" }, [
                        vue.createVNode(_component_uni_icons, {
                          class: "icon",
                          color: "blue",
                          type: "gift",
                          size: "23"
                        }),
                        vue.createElementVNode("text", { class: "title" }, "我的好友"),
                        vue.createVNode(_component_uni_icons, {
                          class: "detail",
                          color: "#909092",
                          type: "right",
                          size: "15"
                        })
                      ]);
                    }),
                    64
                    /* STABLE_FRAGMENT */
                  )),
                  vue.createElementVNode("view", { class: "more" }, [
                    vue.createVNode(_component_uni_icons, {
                      class: "down",
                      color: "black",
                      type: "down",
                      size: "18"
                    }),
                    vue.createElementVNode("text", { class: "title" }, "更多功能"),
                    vue.createElementVNode("view", { class: "space" })
                  ])
                ]),
                vue.createElementVNode("view", { class: "bottom" }, [
                  (vue.openBlock(), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(5, (item) => {
                      return vue.createElementVNode("view", { class: "list" }, [
                        vue.createElementVNode("view", { class: "time" }, [
                          vue.createElementVNode("text", { class: "date" }, "2024年7月"),
                          vue.createVNode(_component_uni_icons, {
                            class: "calendar",
                            color: "black",
                            type: "calendar",
                            size: "18"
                          })
                        ]),
                        vue.createVNode(_component_zoneItem)
                      ]);
                    }),
                    64
                    /* STABLE_FRAGMENT */
                  ))
                ])
              ])
            ]),
            vue.createVNode(_component_publish, { class: "addbtn" })
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const PagesMyzoneMyzone = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9949848d"], ["__file", "E:/HBuilderProjects/AA/pages/myzone/myzone.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/friends/friends", PagesFriendsFriends);
  __definePage("pages/publish/publish", PagesPublishPublish);
  __definePage("pages/userinfo/userinfo", PagesUserinfoUserinfo);
  __definePage("pages/test/test", PagesTestTest);
  __definePage("pages/newfriend/newfriend", PagesNewfriendNewfriend);
  __definePage("pages/groups/groups", PagesGroupsGroups);
  __definePage("pages/chat/chat", PagesChatChat);
  __definePage("pages/grouphome/grouphome", PagesGrouphomeGrouphome);
  __definePage("pages/zone/zone", PagesZoneZone);
  __definePage("pages/zonemsg/zonemsg", PagesZonemsgZonemsg);
  __definePage("pages/add/add", PagesAddAdd);
  __definePage("pages/myzone/myzone", PagesMyzoneMyzone);
  const _sfc_main = {
    // onLaunch: function() {
    // 	__f__('log','at App.vue:4','App Launch')
    // },
    // onShow: function() {
    // 	__f__('log','at App.vue:7','App Show')
    // },
    // onHide: function() {
    // 	__f__('log','at App.vue:10','App Hide')
    // }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "E:/HBuilderProjects/AA/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(createPinia());
    return {
      app,
      Pinia
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);

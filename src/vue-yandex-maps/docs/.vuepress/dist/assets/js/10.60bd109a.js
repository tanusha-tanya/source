(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{196:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v('You can easily plug Yandex map in your project with this custom component and you available minimal part of functionality right now from the "box". However If you want to use full functionality of '),s("a",{attrs:{href:"https://tech.yandex.ru/maps/doc/jsapi/2.1/quick-start/index-docpage/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YandexMap API"),s("OutboundLink")],1),t._v(", you need apply to "),s("a",{attrs:{href:"https://tech.yandex.ru/maps/doc/jsapi/2.1/quick-start/index-docpage/",target:"_blank",rel:"noopener noreferrer"}},[t._v("map instance"),s("OutboundLink")],1),t._v(" directly.")]),t._v(" "),s("h2",{attrs:{id:"installing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing","aria-hidden":"true"}},[t._v("#")]),t._v(" Installing")]),t._v(" "),s("p",[t._v("Using npm")]),t._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vue-yandex-maps\n")])])]),s("p",[t._v("Using yarn")]),t._v(" "),s("div",{staticClass:"language-Bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vue-yandex-maps\n")])])]),s("p",[t._v("After that you can define settings of component:\n"),s("a",{attrs:{href:"https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/load-docpage/",target:"_blank",rel:"noopener noreferrer"}},[t._v("API key"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://tech.yandex.ru/maps/doc/jsapi/2.1/dg/concepts/localization-docpage/",target:"_blank",rel:"noopener noreferrer"}},[t._v("language"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://tech.yandex.ru/maps/jsapi/doc/2.1/dg/concepts/load-docpage/#load__coordorder",target:"_blank",rel:"noopener noreferrer"}},[t._v("procedure of assignment geographic coords"),s("OutboundLink")],1),t._v(" and Yandex map version. These settings are optional and below you can see default options:")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" settings "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  apiKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ru_RU'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  coordorder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'latlong'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2.1'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("At this moment you can use these settings when you will be registration the component.")]),t._v(" "),s("h2",{attrs:{id:"registration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#registration","aria-hidden":"true"}},[t._v("#")]),t._v(" Registration")]),t._v(" "),s("h3",{attrs:{id:"global"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global","aria-hidden":"true"}},[t._v("#")]),t._v(" Global")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" YmapPlugin "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-yandex-maps'")]),t._v("\n\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("YmapPlugin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" settings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"local"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local","aria-hidden":"true"}},[t._v("#")]),t._v(" Local")]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" yandexMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ymapMarker "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-yandex-maps'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" yandexMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ymapMarker "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// other options")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("div",{staticClass:"language-HTML extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("yandex-map")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":settings")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("settings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--Markers--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("yandex-map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"nuxt-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nuxt-module","aria-hidden":"true"}},[t._v("#")]),t._v(" Nuxt module")]),t._v(" "),s("p",[t._v("Add "),s("code",[t._v("vue-yandex-maps/nuxt")]),t._v(" in modules section "),s("code",[t._v("nuxt.config.js")])]),t._v(" "),s("div",{staticClass:"language-JavaScript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  modules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-yandex-maps/nuxt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" settings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"cdn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cdn","aria-hidden":"true"}},[t._v("#")]),t._v(" CDN")]),t._v(" "),s("p",[t._v("You can use plugin directly via link "),s("a",{attrs:{href:"https://unpkg.com/vue-yandex-maps",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://unpkg.com/vue-yandex-maps"),s("OutboundLink")],1),t._v(". The plugin will be install automatically if you use Vue JS. It could be useful when you use "),s("a",{attrs:{href:"https://codepen.io/PNKBizz/pen/WMRwyM",target:"_blank",rel:"noopener noreferrer"}},[t._v("Code Pen"),s("OutboundLink")],1)])])},[],!1,null,null,null);a.default=e.exports}}]);
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function n(t){return(t.icon.color||"blue")+(t.icon.glyph?a(t.icon.glyph):t.icon.content?"Stretchy":"")}function a(t){return t.charAt(0).toUpperCase()+t.slice(1)}function i(t){return t.map(function(t){return Array.isArray(t)?i(t):+t})}function s(e,r){var o=[];return function e(r,n){if(r===n)return!0;if(r instanceof Date&&n instanceof Date)return+r==+n;if("object"!==t(r)||"object"!==t(n))return!1;if(function(t,e){for(var r=o.length;r--;)if(!(o[r][0]!==t&&o[r][0]!==e||o[r][1]!==e&&o[r][1]!==t))return!0;return!1}(r,n))return!0;o.push([r,n]);var a=Object.keys(r),i=a.length;if(Object.keys(n).length!==i)return!1;for(;i--;)if(!e(r[a[i]],n[a[i]]))return!1;return!0}(e,r)}function c(t,e,r){s(t,e)||(r.rerender&&clearTimeout(r.rerender),r.rerender=setTimeout(function(){return r.updateMap&&r.updateMap()},10))}var l=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.events={},this.ymapReady=!1,this.scriptIsNotAttached=!0}var r,o,n;return r=t,(o=[{key:"$on",value:function(t,e){var r=this;return this.events[t]||(this.events[t]=[]),this.events[t].push(e),function(){r.events[t]=r.events[t].filter(function(t){return e!==t})}}},{key:"$emit",value:function(t,e){var r=this.events[t];r&&r.forEach(function(t){return t(e)})}}])&&e(r.prototype,o),n&&e(r,n),t}()),u=["fullscreenControl","geolocationControl","routeEditor","rulerControl","searchControl","trafficControl","typeSelector","zoomControl","routePanelControl"];function p(t){return 0===t.filter(function(t){return![].concat(u,["default"]).includes(t)}).length}function m(t,e){var r=a(t);if(!e)return r;switch(r){case"Placemark":return"Point";case"Polyline":return"LineString";default:return r}}function f(e,r){var o=r?{type:"Feature",id:e.properties.markerId,geometry:{type:e.markerType,coordinates:e.coords},properties:e.properties,options:e.options}:new ymaps[e.markerType](e.coords,e.properties,e.options);return o.clusterName=e.clusterName,r||function(e,r){if(e&&"object"===t(e))for(var o in e)r.events.add(o,e[o])}(e.callbacks,o),o}var y={pluginOptions:{},data:function(){return{ymapEventBus:l,ymapId:"yandexMap"+Math.round(1e5*Math.random()),myMap:{},style:this.ymapClass?"":"width: 100%; height: 100%;"}},props:{coords:{type:Array,validator:function(t){return!t.filter(function(t){return isNaN(t)}).length},required:!0},zoom:{validator:function(t){return!isNaN(t)},default:18},clusterOptions:{type:Object,default:function(){return{}}},clusterCallbacks:{type:Object,default:function(){return{}}},behaviors:{type:Array,default:function(){return["default"]}},controls:{type:Array,default:function(){return["default"]},validator:function(t){return p(t)}},detailedControls:{type:Object,validator:function(t){return p(Object.keys(t))}},scrollZoom:{type:Boolean,default:!0},zoomControl:Object,mapType:{type:String,default:"map",validator:function(t){return["map","satellite","hybrid"].includes(t)}},placemarks:{type:Array,default:function(){return[]}},useObjectManager:{type:Boolean,default:!1},objectManagerClusterize:{type:Boolean,default:!0},ymapClass:String,initWithoutMarkers:{type:Boolean,default:!0},mapLink:String,debug:{type:Boolean,default:!1},settings:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}}},computed:{coordinates:function(){return this.coords.map(function(t){return+t})}},methods:{getMarkersFromSlots:function(){return this.$slots.default&&this.$slots.default.map(function(t){var e=t.componentOptions&&t.componentOptions.propsData;if(e){var r={};if(e.balloonTemplate)r={balloonContentLayout:ymaps.templateLayoutFactory.createClass(e.balloonTemplate)};var o={markerId:e.markerId,markerType:e.markerType||"placemark",coords:i(e.coords),hintContent:e.hintContent,markerFill:e.markerFill,circleRadius:+e.circleRadius,clusterName:e.clusterName,markerStroke:e.markerStroke,balloon:e.balloon,callbacks:e.callbacks,properties:e.properties,options:e.options,balloonOptions:r};return e.icon&&["default#image","default#imageWithContent"].includes(e.icon.layout)?(o.iconContent=e.icon.content,o.iconLayout=e.icon.layout,o.iconImageHref=e.icon.imageHref,o.iconImageSize=e.icon.imageSize,o.iconImageOffset=e.icon.imageOffset,o.iconContentOffset=e.icon.contentOffset,e.icon.contentLayout&&"string"==typeof e.icon.contentLayout&&(o.iconContentLayout=ymaps.templateLayoutFactory.createClass(e.icon.contentLayout))):o.icon=e.icon,o}}).filter(function(t){return t&&t.markerType})||[]},createMarkers:function(){for(var t=this,e=[],r=this.getMarkersFromSlots(),o=0;o<r.length;o++){var a=r[o],i=m(a.markerType,this.useObjectManager),s={hintContent:a.hintContent,iconContent:a.icon&&a.icon.content||a.iconContent,markerId:a.markerId},c=a.balloon?{balloonContentHeader:a.balloon.header,balloonContentBody:a.balloon.body,balloonContentFooter:a.balloon.footer}:{},l=Object.assign(s,c,a.properties),u=a.iconLayout?{iconLayout:a.iconLayout,iconImageHref:a.iconImageHref,iconImageSize:a.iconImageSize,iconImageOffset:a.iconImageOffset,iconContentOffset:a.iconContentOffset,iconContentLayout:a.iconContentLayout}:{preset:a.icon&&"islands#".concat(n(a),"Icon")},p=a.markerStroke?{strokeColor:a.markerStroke.color||"0066ffff",strokeOpacity:parseFloat(a.markerStroke.opacity)>=0?parseFloat(a.markerStroke.opacity):1,strokeStyle:a.markerStroke.style,strokeWidth:parseFloat(a.markerStroke.width)>=0?parseFloat(a.markerStroke.width):1}:{},y=a.markerFill?{fill:a.markerFill.enabled||!0,fillColor:a.markerFill.color||"0066ff99",fillOpacity:parseFloat(a.markerFill.opacity)>=0?parseFloat(a.markerFill.opacity):1,fillImageHref:a.markerFill.imageHref||""}:{},d=Object.assign(u,p,y,a.balloonOptions,a.options);"Circle"===i&&(a.coords=[a.coords,a.circleRadius]);var h=f({properties:l,options:d,markerType:i,coords:a.coords,clusterName:a.clusterName,callbacks:a.callbacks},this.useObjectManager);e.push(h)}return this.placemarks&&this.placemarks.forEach(function(r){var o=r.markerType,n=void 0===o?"Placemark":o,a=r.properties,i=r.options,s=void 0===i?{}:i,c=r.coords,l=r.clusterName,u=r.callbacks,p=r.balloonTemplate,y=m(n,t.useObjectManager);if(p){var d=ymaps.templateLayoutFactory.createClass(p);s.balloonContentLayout=d}var h=f({properties:a,options:s,markerType:y,coords:c,clusterName:l,callbacks:u},t.useObjectManager);e.push(h)}),e},setMarkers:function(){var t={options:this.clusterOptions,callbacks:this.clusterCallbacks,map:this.myMap,useObjectManager:this.useObjectManager,objectManagerClusterize:this.objectManagerClusterize};!function(t,e){var r=e.options,n=e.callbacks,a=e.map,i=e.useObjectManager,s=e.objectManagerClusterize,c={},l=[],u=!0,p=!1,m=void 0;try{for(var f,y=t[Symbol.iterator]();!(u=(f=y.next()).done);u=!0){var d=f.value;d.clusterName?c[d.clusterName]=c[d.clusterName]?[].concat(o(c[d.clusterName]),[d]):[d]:l.push(d)}}catch(t){p=!0,m=t}finally{try{u||null==y.return||y.return()}finally{if(p)throw m}}for(var h in c){var b=r[h]||{},v=n[h]||{},k=b.layout||"\n      <div>{{ properties.balloonContentHeader }}</div>\n      <div>{{ properties.balloonContentBody }}</div>\n      <div>{{ properties.balloonContentFooter }}</div>\n    ";b.clusterBalloonItemContentLayout=ymaps.templateLayoutFactory.createClass(k);var g=b.clusterLayout?ymaps.templateLayoutFactory.createClass(b.clusterLayout):b.clusterBalloonContentLayout||"cluster#balloonTwoColumns";b.clusterBalloonContentLayout=g;var O=b.clusterIconContentLayout;if(b.clusterIconContentLayout=O&&ymaps.templateLayoutFactory.createClass(O),i){var C=new ymaps.ObjectManager(Object.assign({clusterize:s},b));for(var j in v)C.clusters.events.add(j,v[j]);C.add(c[h]),a.geoObjects.add(C)}else{var M=new ymaps.Clusterer(b);for(var w in v)M.events.add(w,v[w]);b.createCluster&&(M.createCluster=b.createCluster),M.add(c[h]),a.geoObjects.add(M)}}if(l.length){var S=i?new ymaps.ObjectManager({clusterize:!1}):new ymaps.GeoObjectCollection;l.forEach(function(t){return S.add(t)}),a.geoObjects.add(S)}}(this.createMarkers(),t)},init:function(){var t=this;if(window.ymaps&&ymaps.GeoObjectCollection&&(this.initWithoutMarkers||this.$slots.default||this.placemarks.length)){if(this.$emit("map-initialization-started"),this.myMap=new ymaps.Map(this.ymapId,{center:this.coordinates,zoom:+this.zoom,behaviors:this.behaviors,controls:this.controls,type:"yandex#".concat(this.mapType)},this.options),this.myMap.events.add("click",function(e){return t.$emit("click",e)}),this.zoomControl&&(this.myMap.controls.remove("zoomControl"),this.myMap.controls.add(new ymaps.control.ZoomControl(this.zoomControl))),this.detailedControls)Object.keys(this.detailedControls).forEach(function(e){t.myMap.controls.remove(e),t.myMap.controls.add(e,t.detailedControls[e])});!1===this.scrollZoom&&this.myMap.behaviors.disable("scrollZoom"),this.setMarkers(),this.$emit("map-was-initialized",this.myMap)}}},watch:{coordinates:function(t){this.myMap.panTo&&this.myMap.panTo(t)},placemarks:function(){window.ymaps&&(this.myMap.geoObjects&&this.myMap.geoObjects.removeAll(),this.setMarkers())},zoom:function(){this.myMap.setZoom(this.zoom)}},render:function(t){return t("section",{class:"ymap-container",ref:"mapContainer"},[t("div",{attrs:{id:this.ymapId,class:this.ymapClass,style:this.style}}),t("div",{ref:"markersContainer",attrs:{class:"ymap-markers"}},[this.$slots.default])])},mounted:function(){var t=this;this.markerObserver=new MutationObserver(function(){this.myMap.geoObjects&&this.myMap.geoObjects.removeAll(),this.setMarkers()}.bind(this)),this.mapObserver=new MutationObserver(function(){this.myMap.container.fitToViewport()}.bind(this));var e=this.$refs,o=e.markersContainer,n=e.mapContainer;if(this.markerObserver.observe(o,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),this.mapObserver.observe(n,{attributes:!0,childList:!0,characterData:!0,subtree:!1}),this.ymapEventBus.scriptIsNotAttached){var a=document.createElement("SCRIPT"),i=function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),n.forEach(function(e){r(t,e,o[e])})}return t}({},this.$options.pluginOptions,this.settings),s=i.apiKey,c=void 0===s?"":s,l=i.lang,u=void 0===l?"ru_RU":l,p=i.version,m=void 0===p?"2.1":p,f=i.coordorder,y=void 0===f?"latlong":f,d=this.debug?"debug":"release",h="lang=".concat(u).concat(c&&"&apikey=".concat(c),"&mode=").concat(d,"&coordorder=").concat(y),b=this.mapLink||"https://api-maps.yandex.ru/".concat(m,"/?").concat(h);a.setAttribute("src",b),a.setAttribute("async",""),a.setAttribute("defer",""),document.body.appendChild(a),this.ymapEventBus.scriptIsNotAttached=!1,a.onload=function(){t.ymapEventBus.ymapReady=!0,t.ymapEventBus.$emit("scriptIsLoaded")}}this.ymapEventBus.ymapReady?ymaps.ready(this.init):this.ymapEventBus.$on("scriptIsLoaded",function(){t.ymapEventBus.updateMap=function(){t.myMap.geoObjects&&t.myMap.geoObjects.removeAll(),t.setMarkers()},ymaps.ready(t.init)})},beforeDestroy:function(){this.myMap.geoObjects&&this.myMap.geoObjects.removeAll(),this.markerObserver.disconnect()}},d=["placemark","polyline","rectangle","polygon","circle"],h={data:function(){return{ymapEventBus:l,unwatchArr:[]}},props:{coords:{type:Array,required:!0,validator:function(t){return!t.filter(function(t){return isNaN(t)}).length}},hintContent:String,icon:Object,balloon:Object,markerType:{type:String,validator:function(t){return d.includes(t.toLowerCase())},default:"placemark"},markerFill:Object,markerStroke:Object,clusterName:String,circleRadius:{validator:function(t){return!isNaN(t)},default:1e3},callbacks:Object,balloonTemplate:String,markerId:{type:[String,Number],required:!0},properties:Object,options:Object},render:function(){},mounted:function(){var t=this;for(var e in this.$props)this.unwatchArr.push(this.$watch(e,function(e,r){return c(e,r,t.ymapEventBus)}))},beforeDestroy:function(){this.unwatchArr.forEach(function(t){return t()})}};y.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};y.pluginOptions=e,t.component("yandex-map",y),t.component("ymap-marker",h)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(y);var b=y,v=h;export default y;export{b as yandexMap,v as ymapMarker};
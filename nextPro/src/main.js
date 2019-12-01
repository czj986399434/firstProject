// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAMap from 'vue-amap';
import VueCookies from 'vue-cookies';
import Router from 'vue-router'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueAMap);
Vue.use(VueCookies);
VueAMap.initAMapApiLoader({
  key: '8658927f241caadbdfcc764245a1f1ee',
 plugin: [
    "AMap.Autocomplete", //输入提示插件
    "AMap.PlaceSearch", //POI搜索插件
    "AMap.Scale", //右下角缩略图插件 比例尺
    "AMap.OverView", //地图鹰眼插件
    "AMap.ToolBar", //地图工具条
    "AMap.MapType", //类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    "AMap.PolyEditor", //编辑 折线多，边形
    "AMap.CircleEditor", //圆形编辑器插件
    "AMap.Geolocation" ,//定位控件，用来获取和展示用户主机所在的经纬度位置
    "AMap.Geocoder"

  ],
  v: '1.4.4'
});
Vue.directive('biaoge', {
  bind: function (el, binding, vnode, oldVnode) {
    console.log(binding)
     
  }
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

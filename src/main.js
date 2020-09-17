import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

const requireComponent = require.context(
  './components/baseComponents',
  false,
  /\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // 1、获取组件配置
  const componentsConfig = requireComponent(fileName);
  // 2、获取组件的PascalCase命名
  const componentName = upperFirst(
    camelCase(
      // 3、 剥去文件名开头的“./” 和结尾的扩展名
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1') 
    )
  )
  //4、 全局注册
  Vue.component(
    componentName,
    componentsConfig.default || componentsConfig,
  )
});


new Vue({
  router,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount("#app")
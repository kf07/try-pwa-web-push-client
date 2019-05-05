import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./axios";
import "./storage";
import "./firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

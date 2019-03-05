import "vue-tsx-support/enable-check";

import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h: any) => h(App)
}).$mount("#app");

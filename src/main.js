import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import store from "./store/index.js";
//import VueSidebarMenu from "vue-sidebar-menu";
//import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import "@fortawesome/fontawesome-free/css/all.css";
// import "@fortawesome/fontawesome-free/js/all.js";
import Vuelidate from "vuelidate";
Vue.use(VueSidebarMenu);
Vue.use(Vuelidate);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;
//axios.defaults.headers.common['Authorization'] = localStorage.getItem("token")

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

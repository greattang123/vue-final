import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import bus from "@/util/Bus";

Vue.config.productionTip = false;

let token = sessionStorage.getItem("token");
if (token == null) {
  window.location.href = "./login.html";
} else {
  let role = sessionStorage.getItem("role");
  if (role == "ff2587edaa6828bde3") {
    setTimeout(() => {
      bus.$emit(bus.isAdmin, true);
    }, 1000);
  }

  new Vue({
    router,
    render: h => h(App)
  }).$mount("#app");
}

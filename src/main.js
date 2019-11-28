import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    blocks: ["navigation", "features", "pricing"],
    currentlyActiveBlock: "",
    currentlyActiveBlockType: "navigation",
    blockSettings: { },
    blockStyle: "simple"
  }
}).$mount("#app")

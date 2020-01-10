import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false

import InlineSvg from "vue-inline-svg"
import EditableText from "./components/blocks/content_type/editable_text"
import Collapsable from "./components/editor/elements/collapsable"
import BlockSettingButton from "./components/editor/elements/block_setting_button"
import CustomSelect from "./components/editor/inputs/custom_select"
import AmountChanger from "./components/editor/inputs/amount_changer"
import LayoutChanger from "./components/editor/inputs/layout_changer"
import BackgroundSettings from "./components/editor/settings/content_type/background"

Vue.component("inline-svg", InlineSvg)
Vue.component("editable-text", EditableText)
Vue.component("collapsable", Collapsable)
Vue.component("block-setting-button", BlockSettingButton)
Vue.component("custom-select", CustomSelect)
Vue.component("amount-changer", AmountChanger)
Vue.component("layout-changer", LayoutChanger)
Vue.component("background-settings", BackgroundSettings)

Vue.mixin({
  methods: {
    getBlockSetting(key, defaultValue) {
      return this.$root.blockSettings[key] || defaultValue
    },
    getRootElements(ref) {
      return this.$root.$children[0].$refs[ref]
    },
    keyForActiveBlock(key) {
      return this.$root.currentlyActiveBlock + "_" + key
    },
    keyForContainingBlock(key) {
      setTimeout(() => {
        const element = this.$el

        if (!element) return

        const block = element.closest(".block").__vue__
        return block.block_id + "_" + key
      }, 1)
    },
    setBlockSetting(key, value) {
      this.$set(this.$root.blockSettings, key, value)
    },
    isBlockSetting(key, value) {
      if (this.$root.blockSettings[key] == value) return true
      return false
    },
    setSelected(content_key, type) {
      this.resetSelected()
      
      setTimeout(() => {
        this.$root.selectedKey = content_key
        this.$root.selectedType = type

        const sidebar = this.getRootElements("sidebar")
        sidebar.activeMenu = "selected"

        this.hightlightMe()
      }, 1)
    },
    resetSelected() {
      this.$root.selectedKey = ""
      this.$root.selectedType = ""

      this.getRootElements("sidebar").activeMenu = "block"

      const element = document.querySelector(".is-highlighted")

      if (!element) return

      const vueElement = element.__vue__
      if (vueElement) vueElement.active = false
    }
  }
})

new Vue({
  render: h => h(App),
  data: {
    blocks: ["navigation", "payment-form", "features", "pricing"],
    currentlyActiveBlock: "",
    currentlyActiveBlockType: "navigation",
    blockSettings: { },
    blockStyle: "simple",
    selectedKey: "",
    selectedType: ""
  }
}).$mount("#app")

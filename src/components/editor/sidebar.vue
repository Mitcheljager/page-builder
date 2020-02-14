<template>
  <aside class="sidebar">
    <div class="button-group">
      <a @click="setActiveMenu('block')" class="button" :class="activeMenu == 'block' ? 'button--active' : ''">Edit content</a>
      <a @click="setActiveMenu('theme')" class="button" :class="activeMenu == 'theme' ? 'button--active' : ''">Design</a>
    </div>

    <transition-group name="settings-fade">
      <theme-settings key="theme-settings" v-if="activeMenu == 'theme'"></theme-settings>
      <theme-edit-settings key="theme-edit-settings" v-if="activeMenu == 'theme-edit'"></theme-edit-settings>

      <div key="selected-settings" :is="$root.selectedType + 'Settings'" v-if="activeMenu == 'selected'"></div>
      <div key="block-settings" :is="$root.currentlyActiveBlockType + 'Settings'" v-if="activeMenu == 'block'"></div>
    </transition-group>
  </aside>
</template>

<script>
  import { EventBus } from "../event_bus"
  import NavigationSettings from "./settings/navigation"
  import FeaturesSettings from "./settings/features"
  import PricingSettings from "./settings/pricing"
  import PaymentFormSettings from "./settings/payment_form"
  import ThemeSettings from "./settings/theme"
  import ThemeEditSettings from "./settings/theme_edit"
  import ContentGroupSettings from "./settings/content_group"

  export default {
    components: {
      NavigationSettings,
      FeaturesSettings,
      PricingSettings,
      PaymentFormSettings,
      ThemeSettings,
      ThemeEditSettings,
      ContentGroupSettings
    },
    props: [],
    data() {
      return {
        activeMenu: "theme"
      }
    },
    mounted() {

    },
    methods: {
      setActiveMenu(type) {
        this.activeMenu = type
        this.$root.selectedType = ""
        this.$root.selectedKey = ""
      }
    }
  }
</script>

<style lang="scss">
  .sidebar {
    position: relative;
    grid-area: sidebar;
    background: #fff;
    padding: 1.5rem;
    max-height: 100vh;
    overflow-y: auto;
    box-shadow: 1px 3px 8px rgba(0, 0, 0, .05);
    z-index: 1000;
  }

  .sidebar-item {
    display: block;
    margin: 1.5rem 0;
  }

  .settings-fade-enter-active,
  .settings-fade-leave-active {
    position: absolute;
    width: 100%;
    max-width: calc(375px - 3rem);
    transition: opacity .25s;
  }

  .settings-fade-enter,
  .settings-fade-leave-to {
    opacity: 0;
  }
</style>

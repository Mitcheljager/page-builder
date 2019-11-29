<template>
  <aside class="sidebar">
    <a @click="setActiveMenu('theme')" class="button" :class="activeMenu == 'theme' ? 'button--active' : ''">Theme</a>
    <a @click="setActiveMenu('block')" class="button" :class="activeMenu == 'block' ? 'button--active' : ''">Block</a>

    <transition-group name="settings-fade">
      <theme-settings key="theme-settings" v-if="activeMenu == 'theme'"></theme-settings>
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
  import ThemeSettings from "./settings/theme"
  import ButtonSettings from "./settings/button"

  export default {
    components: {
      NavigationSettings,
      FeaturesSettings,
      PricingSettings,
      ThemeSettings,
      ButtonSettings
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
      }
    }
  }
</script>

<style lang="scss">
  .sidebar {
    position: relative;
    grid-area: sidebar;
    background: #f2f2f2;
    padding: 1.5rem;
    max-height: 100vh;
    overflow-y: auto;
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
    max-width: calc(300px - 3rem);
    transition: opacity .25s;
  }

  .settings-fade-enter,
  .settings-fade-leave-to {
    opacity: 0;
  }
</style>

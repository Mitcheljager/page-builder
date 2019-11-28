<template>
  <aside class="sidebar">
    <a @click="setActiveMenu('theme')" class="button" :class="activeMenu == 'theme' ? 'button--active' : ''">Theme</a>
    <a @click="setActiveMenu('block')" class="button" :class="activeMenu == 'block' ? 'button--active' : ''">Block</a>

    <transition name="settings-fade">
      <theme-settings v-if="activeMenu == 'theme'"></theme-settings>
      <div :is="$root.currentlyActiveBlockType + 'Settings'" v-if="activeMenu == 'block'"></div>
    </transition>
  </aside>
</template>

<script>
  import { EventBus } from "../event_bus"
  import NavigationSettings from "./settings/navigation"
  import FeaturesSettings from "./settings/features"
  import PricingSettings from "./settings/pricing"
  import ThemeSettings from "./settings/theme"

  export default {
    components: {
      NavigationSettings,
      FeaturesSettings,
      PricingSettings,
      ThemeSettings
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
    grid-area: sidebar;
    background: #f7f7f7;
    padding: 1.5rem;
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

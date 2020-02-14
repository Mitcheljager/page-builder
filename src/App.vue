<template>
  <div class="board">
    <sidebar ref="sidebar"></sidebar>

    <main class="main" :style="themeVariables">
      <block
        v-for="(block, index) in $root.blocks"
        v-bind:key="'block_' + index"
        ref="block"
        :type="block"
        :block_id="index"></block>
    </main>

    <transition name="fade-highlight-background">
      <div class="highlight-background" v-if="highlightActive"></div>
    </transition>
  </div>
</template>

<script>
  import { EventBus } from "./components/event_bus"
  import Sidebar from "./components/editor/sidebar"
  import Block from "./components/block.vue"
  import { debounce } from "lodash"

  export default {
    name: "app",
    components: {
      Sidebar,
      Block
    },
    data() {
      return {
        highlightActive: false
      }
    },
    computed: {
      themeVariables() {
        return {
          "--accent": this.$root.themes[this.$root.activeTheme].colorAccent,
          "--secondary": this.$root.themes[this.$root.activeTheme].colorSecondary
        }
      }
    },
    watch: {
      "$root.selectedKey": debounce(function(value) {
        this.highlightActive = this.$root.selectedKey != ''
      }, 10)
    }
  }
</script>

<style lang="scss">
  @import "./scss/_variables.scss";
  @import "./scss/_general.scss";
  @import "./scss/general/_form.scss";
  @import "./scss/elements/_button.scss";
  @import "./scss/elements/_button-group.scss";

  .board {
    display: grid;
    grid-template: "sidebar main";
    grid-template-columns: 375px auto;
    height: 100vh;
  }

  .main {
    grid-area: main;
    height: 100%;
    overflow: auto;
  }

  .highlight-background {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 100;
    pointer-events: none;
    background: rgba(0, 0, 0, .25);
  }

  .fade-highlight-background-enter-active,
  .fade-highlight-background-leave-active {
    opacity: 1;
    transition: opacity .25s;
  }

  .fade-highlight-background-enter,
  .fade-highlight-background-leave-to {
    opacity: 0;
  }
</style>

<template>
  <div class="board">
    <editor-bar></editor-bar>

    <sidebar ref="sidebar"></sidebar>

    <main class="main">
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
  import EditorBar from "./components/editor/editor_bar"
  import Sidebar from "./components/editor/sidebar"
  import Block from "./components/block.vue"
  import _ from "lodash"

  export default {
    name: "app",
    components: {
      EditorBar,
      Sidebar,
      Block
    },
    data() {
      return {
        highlightActive: false
      }
    },
    watch: {
      "$root.selectedKey": _.debounce(function(value) {
        this.highlightActive = this.$root.selectedKey != ''
      }, 10)
    }
  }
</script>

<style>
  @import "./scss/_general.scss";
  @import "./scss/general/_form.scss";
  @import "./scss/elements/_button.scss";

  .board {
    display: grid;
    grid-template: "sidebar main";
    grid-template-columns: 300px auto;
    height: 100vh;
  }

  .main {
    grid-area: main;
    height: 100%;
    overflow: auto;
    padding-top: calc(60px + 3rem);
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

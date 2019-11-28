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
  </div>
</template>

<script>
  import { EventBus } from "./components/event_bus"
  import EditorBar from "./components/editor/editor_bar"
  import Sidebar from "./components/editor/sidebar"
  import Block from "./components/block.vue"

  export default {
    name: "app",
    components: {
      EditorBar,
      Sidebar,
      Block
    },
    mounted() {
      console.log(this.$root.blocks)
    }
  }
</script>

<style>
  @import "./scss/_general.scss";
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
</style>

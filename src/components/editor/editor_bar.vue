<template>
  <nav class="editor-bar">
    Editor Bar

    <add-block></add-block>
  </nav>
</template>

<script>
  import { EventBus } from "../event_bus"
  import AddBlock from "./add_block"

  export default {
    components: {
      AddBlock
    },
    props: [],
    data() {
      return {

      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style lang="scss">
  .editor-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    right: 1.5rem;
    top: 1.5rem;
    padding: 1rem 2rem;
    height: 60px;
    width: calc(100% - 300px - 3rem);
    border-radius: 99px;
    background: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
    z-index: 100;
  }
</style>

<template>
  <div class="container offset">
    <h2><center><editable-text :content_key="`${ block_id }_title`" default_label="Features"></editable-text></center></h2>

    <div :class="'features--' + layout">
      <div
        :is="layout"
        v-for="(item, index) in parseInt($root.blockSettings['amount'] || 2)"
        :key="item + index"
        :block_id="block_id"
        :repeatable_id="index"
        class="grid-columns"></div>
    </div>
  </div>
</template>

<script>
  import Standard from "./content/standard"
  import Reverse from "./content/reverse"
  import Cards from "./content/cards"

  export default {
    components: {
      Standard,
      Reverse,
      Cards
    },
    props: ["block_id"],
    data() {
      return {

      }
    },
    computed: {
      layout() {
        return this.$root.blockSettings['layout'] || 'standard'
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  .grid-columns {
    display: grid;

    + .grid-columns {
      margin-top: 3rem;
    }
  }

  .grid-columns__item {
    img {
      width: 100%;
      height: auto;
    }
  }

  .features--cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 3rem;
  }
</style>
